import React from 'react';
import { useSelector } from 'react-redux';

const Saved = () => {
  const saved = useSelector(state => state.saved);

  if (saved.length === 0) return <h2>no images saved :(</h2>

  return (
    <div className="saved">
      {saved.map(image => {
        return <img src={image} alt='' />
      })}
    </div>
  )
}

export default Saved;
