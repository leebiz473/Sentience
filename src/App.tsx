import React, { useState } from 'react';

import Form from './components/Form';
import MemoryCard from './components/MemoryCard';
import EmojiService from './services/EmojiService';


export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);

  const emojiService = new EmojiService();

  // This is the async function that does the actual fetching of data
  async function getDataHandler(e: React.FormEvent) {
    e.preventDefault();
    const randomEmoji = await emojiService.getAnimalsAndNatureEmojis();
    console.log('Response:', randomEmoji);
  }


  // Keep this function synchronous, but call the async function inside
  function startGame(e: React.FormEvent) {
    e.preventDefault();

    // Wrap async function in a try-catch to avoid Promise issues in the handler
    void (async () => {
      await getDataHandler(e); // Call the async function here
      setIsGameOn(true); // Now we can safely set game state after data is fetched
    })();
  }

  function turnCard() {
    console.log('Memory card clicked');
  }

  return (
      <main>
        <h1>Memory</h1>
        {!isGameOn && <Form handleSubmit={startGame} />}
        {isGameOn && <MemoryCard handleClick={turnCard} />}
      </main>
  );
}
