'use client';

import { useState } from 'react';
import { Logo } from '../components/Logo';
import { Form } from '../components/Form';
import { PackagingList } from '../components/PackagingList';
import { Stats } from '../components/Stats';

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

  const handleClearList = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items'
    );
    if (confirmed) setItems([]);
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}
