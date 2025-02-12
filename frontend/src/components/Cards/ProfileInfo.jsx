import React from 'react';
import { getInitials } from '../../utils/helper.js';

const ProfileInfo = ({ userInfo, onLogout }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100 text-sm md:text-base">
                {getInitials(userInfo?.fullname)}
            </div>

            <div>
                <p className="text-xs md:text-sm font-medium">{userInfo?.fullname}</p>
                <button className="text-xs md:text-sm text-slate-700 underline" onClick={onLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
};

export default ProfileInfo;