import { useState, useEffect } from 'react';

export const useScrollbarStyle = (theme) => {
  const [scrollbarStyle, setScrollbarStyle] = useState({
    width: 4,
  });

  useEffect(() => {
    setScrollbarStyle({
      ...scrollbarStyle,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.mode === 'light'
          ? 'rgba(0, 0, 0, 0.4)'
          : 'rgba(255, 255, 255, 0.4)',
      },
    });
  }, [theme]);

  return scrollbarStyle;
};