import React from 'react';
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from 'react-icons/md';
import moment from 'moment';

const NoteCard = ({
    title,
    date,
    content,
    onEdit,
    tags,
    isPinned,
    onDelete,
    onPinNote,
}) => {
    return (
        <div className="border border-blue-500 rounded h-40 p-4 bg-white hover:shadow-xl transition-all ease-in-out overflow-hidden">
            <div className="flex items-center justify-between overflow-hidden">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-slate-500">{moment(date).format('Do MMM YYYY')}</span>
                </div>
                <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`} onClick={onPinNote} />
            </div>
            <div className="min-h-6 max-h-6 overflow-hidden">
                <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>
            </div>

            <div className="flex items-center justify-between mt-2">
                <div className="min-h-8 max-h-8 overflow-hidden text-xs text-slate-500">{tags.map((item) => `#${item} `)}</div>

                <div className="flex items-center gap-2">
                    <MdCreate
                        className="icon-btn hover:text-green-600"
                        onClick={onEdit}
                    />
                    <MdDelete
                        className="icon-btn hover:text-red-500"
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    )
};

export default NoteCard;