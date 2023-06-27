import { useState, useEffect } from 'react';
import { Direction } from './types';

/** This hook will return a direction of
 *  the current user scroll either upward or downward
* */
export const useScrollDirection = () => {
  const [direction, setDirection] = useState<Direction>('downwards');
  const [lastScrollPos, setlastScrollPos] = useState(0);
  
  // checking the user scroll direction
  const detectScrollDirection = () => {
    var currentPos = window.scrollY;
    if (currentPos > lastScrollPos) setDirection(() => 'downwards');
    else setDirection(() => 'upwards');

    setlastScrollPos(currentPos);
  };

  // effect for scrolling
  useEffect(() => {
    window.addEventListener('scroll', detectScrollDirection);

    return () => {
      window.removeEventListener('scroll', detectScrollDirection);
    };
  }, [window.scrollY]);

  return direction;
};

