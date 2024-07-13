'use client';
import { useState } from 'react';

export const Form = ({ onAddItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    setQuantity(1);
    setDescription('');
  };

  return (
    <form
      className='bg-[#e5771f] py-[2.8rem] flex items-center justify-center gap-[0.8rem]'
      onSubmit={handleSubmit}
    >
      <h3 className='mr-[1.6rem] text-[2.rem] font-semibold'>
        What do you need for your trip?
      </h3>

      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button className='bg-[#76c7ad] uppercase rounded-[10rem] px-[3.2rem] py-[1.2rem] cursor-pointer text-[1.8rem] font-[700]'>
        Add
      </button>
    </form>
  );
};
