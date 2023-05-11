import React from 'react';
import { SwitchElement } from './common/switch';

export const DarkModeSwitcher = () => {
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setChecked(true);
    } else {
      document.documentElement.classList.remove('dark');
      setChecked(false);
    }
  }, [checked]);

  return (
    <SwitchElement
      checked={checked}
      onClick={() => {
        setChecked((prev) => {
          const nextPrev = !prev;

          if (!nextPrev) {
            localStorage.theme = 'light';
          } else {
            localStorage.theme = 'dark';
          }

          return nextPrev;
        });
      }}
      labelText={`${checked ? 'Dark' : 'Light'}`}
    />
  );
};
