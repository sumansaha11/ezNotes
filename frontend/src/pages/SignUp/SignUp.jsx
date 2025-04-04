import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import PasswordInput from '../../components/Input/PasswordInput.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import axiosInstance from '../../utils/axiosInstance.js';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (!name) {
            setError("Please enter your name");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        if (!password) {
            setError("Please enter the password");
            return;
        }

        setError("")

        try {
            const response = await axiosInstance.post("/users/register",
                {
                    fullname: name,
                    email: email,
                    password: password,
                },
            );
            if (response.data && response.data.data) {
                navigate("/login");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Invalid login credentials!";
            setError(errorMessage);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center text-center p-4">
            <h1 onClick={() => navigate("/")} className='flex justify-center items-center px-4 mt-4 text-blue-900 font-bold text-3xl cursor-pointer'>ezNotes</h1>
            <div className='flex items-center px-4'>
                <img src="/images/stars.svg" alt="" className="mx-2 w-5 md:w-7" />
                <p className='text-blue-900 text-sm md:text-lg max-w-lg'>Capture, Organize, Achieve</p>
                <img src="/images/stars.svg" alt="" className="mx-2 w-5 md:w-7" />
            </div>
            
            <div className="flex items-center justify-center mt-16">
                <div className="w-80 md:w-96 border border-blue-500 rounded-xl bg-white/50 px-7 py-10">
                    <form onSubmit={handleSignUp}>
                        <h4 className="text-2xl mb-7 text-blue-900">Sign Up</h4>

                        <input
                            type="text"
                            placeholder="Name"
                            className="input-box rounded-3xl bg-amber-50"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Email"
                            className="input-box rounded-3xl bg-amber-50"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                        <button type="submit" className="btn-primary rounded-3xl">
                            Create Account
                        </button>

                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="font-medium text-primary underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <img className="absolute left-0 bottom-0 w-28 md:w-64 -z-10" src="/images/human-1.svg" alt="" />
            <img className="absolute right-0 bottom-0 w-24 md:w-56 -z-10" src="/images/human-2.svg" alt="" />

            <footer className="text-blue-900 mt-auto pb-4 text-sm md:text-base z-10">
                <p>&copy; 2025 ezNotes, Suman Saha</p>
            </footer>
        </div>
    )
};

export default SignUp;