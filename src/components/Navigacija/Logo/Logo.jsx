import { useState } from 'react';

function Logo() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      className="logo"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered ? 'Meistrų pasaulis' : 'MB Masaulis'}
    </div>
  );
}

export default Logo;
