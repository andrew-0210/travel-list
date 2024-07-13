'use client';

import { useState } from 'react';
import { monoton } from './fonts';

// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: true },
//   { id: 2, description: 'Socks', quantity: 12, packed: false },
// ];

export default function Home() {
  const [items, setItems] = useState([]);

  const handleAddItems = item => {
    setItems(items => [...items, item]);
  };

  const handleDeleteItem = itemId => {
    setItems(items => items.filter(item => item.id !== itemId));
  };

  const handleToggleItem = itemId => {
    setItems(items =>
      items.map(item =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </>
  );
}

const Logo = () => {
  return (
    <h1
      className={`${monoton.className} text-center bg-[#f4a226] text-[8rem] font-[400] uppercase px-[2.4rem] -tracking-[5px]`}
    >
      Far Away
    </h1>
  );
};

const Form = ({ onAddItems }) => {
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

const PackagingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map(item => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, onDeleteItem, onToggleItem }) => {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        className='cursor-pointer bg-none border-none text-[1.8rem] p-[0.8rem] translate-y-[2px]'
        onClick={() => onDeleteItem(item.id)}
      >
        ❌
      </button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className='stats'>
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};
