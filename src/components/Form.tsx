import RegularButton from './RegularButton'
import React from "react";

interface FormButton {
    handleSubmit: (e: React.FormEvent) => void;
}

export default function Form({ handleSubmit }: FormButton) {
    return (
        <form className="wrapper">
            <RegularButton handleClick={handleSubmit}>
                Start Game
            </RegularButton>
        </form>
    )
}
