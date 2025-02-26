import React from 'react';

interface MemoryCardProps {
    handleClick: (emoji: string) => void;
}

export default function MemoryCard(props: MemoryCardProps) {
    const emojiArray = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵'];

    const emojiEl = emojiArray.map((emoji, index) =>
        <li className="card-item" key={index}>
            <button
                className="btn btn--emoji"
                onClick={() => { props.handleClick(emoji); }}
            >
                {emoji}
            </button>
        </li>
    );

    return (
        <ul className="card-container">
            {emojiEl}
        </ul>
    );
}
