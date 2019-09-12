import React from 'react';
import { useSelector } from 'react-redux';

const Saved = () => {
  const saved = useSelector(state => state.saved);
  return (
    <div>
      {saved.map(image => {
        return <img src={image} alt='' />
      })}
    </div>
  )
}

export default Saved;
