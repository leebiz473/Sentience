import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    handleClick: (e: React.FormEvent) => void;
}

export default function RegularButton(props: ButtonProps) {
    return (
        <button
            className="btn btn--text"
            onClick={props.handleClick}
        >
            {props.children}
        </button>
    );
}
