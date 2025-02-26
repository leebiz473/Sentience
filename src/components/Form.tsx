import React from "react";

import RegularButton from './RegularButton'

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
