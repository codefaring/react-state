import React, { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(0);
  return (
      <div className='counter'>
        <span className='number'>{count}</span>
        <p>
          <button className='button' onClick={() => {
            setCount(count + 1);
          }}>+ 1</button>
          <button className='button' onClick={() => {
            setCount(count + 5);
          }}>+ 5</button>
          <button className='button' onClick={() => {
            setCount(count + 10);
          }}>+ 10</button>
        </p>
        <p>
          <button className='button' onClick={() => {
            setCount((prev) => prev -1);
          }}>- 1</button>
          <button className='button' onClick={() => {
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
          }}>- 5</button>
          <button className='button' onClick={() => {
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
            setCount((prev) => prev -1);
          }}>- 10</button>
        </p>
      </div>
  );
}
