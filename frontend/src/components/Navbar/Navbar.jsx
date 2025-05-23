import React, { useState } from 'react'
import ProfileInfo from '../Cards/ProfileInfo.jsx'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import axiosInstance from '../../utils/axiosInstance.js';
import { Cookies } from 'react-cookie';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();
    const cookie = new Cookies();

    const options = {
        sameSite: 'Strict',
        httpOnly: true,
        path: '/',
    };

    const onLogout = async () => {
        try {
            const response = await axiosInstance.post("/users/logout");

            if (response.data && response.data.data) {
                cookie.remove('accessToken', options);
                cookie.remove('refreshToken', options);
                navigate("/");
            }
        } catch (error) {
            console.log("Error while logging out user!");
        }
    };

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery);
        }
    };

    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch();
    };

    if (userInfo) {
        return (
            <div className="bg-blue-900 flex items-center justify-between px-6 py-3 drop-shadow w-full top-0 fixed">
                <h2 onClick={() => navigate("/")} className="text-lg md:text-xl font-bold text-white py-2 cursor-pointer">ezNotes</h2>

                <SearchBar
                    value={searchQuery} onChange={({ target }) => {
                        setSearchQuery(target.value);
                    }}
                    handleSearch={handleSearch}
                    onClearSearch={onClearSearch}
                />

                <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
            </div>
        )
    } else {
        return (
            <div onClick={() => navigate("/")} className="bg-blue-900 flex items-center justify-between px-6 py-2 drop-shadow cursor-pointer">
                <h2 className="text-xl font-bold text-white py-3">ezNotes</h2>
            </div>
        )
    }
};

export default Navbar;