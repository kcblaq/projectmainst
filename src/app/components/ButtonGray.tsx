import React from 'react';

interface Props {
    title: string;
    handleClick?: () => void;
    type?: "button" | "reset" | "submit"; 
}

export default function ButtonGray({ title, handleClick, type }: Props) {
    return (
        <button type={type} className="w-full rounded-full bg-[#EFF1F6] py-3 px-6 font-semibold" onClick={handleClick}>
            {title}
        </button>
    );
}
