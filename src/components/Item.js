'use client';

export const Item = ({ item, onDeleteItem, onToggleItem }) => {
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
