'use client';
import { useState } from 'react';
import { Item } from './Item';

export const PackagingList = ({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button
          className='bg-[#ffebb3] text-[#5a3e2b] border-none rounded-full px-[3.2rem] py-[1.2rem] font-[700] text-[1.8rem] cursor-pointer'
          onClick={onClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
};
