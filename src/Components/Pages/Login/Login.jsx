import React, { useState } from 'react';

const ExamplePopHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [flip, setFlip] = useState(false);

  const handleMouseEnter = (event) => {
    setIsHovered(true);

    const rect = event.target.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();

    const x = rect.left - bodyRect.left;
    const y = rect.top - bodyRect.top + rect.height;

    setPopoverPosition({ x, y });

    if (y + 300 > window.innerHeight) {
      setFlip(true);
    } else {
      setFlip(false);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Üzerine Gel
      </button>
      {isHovered && (
        <div
          className={`popover ${flip ? 'flipped' : ''}`}
          style={{ left: `${popoverPosition.x}px`, top: `${popoverPosition.y}px` }}
        >
          Pophover İçeriği
        </div>
      )}
    </div>
  );
};

export default ExamplePopHover;