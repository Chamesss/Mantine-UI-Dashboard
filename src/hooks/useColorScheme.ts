import { useLocalStorage, useHotkeys } from '@mantine/hooks';
import { type ColorScheme } from '@mantine/core';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  // Add keyboard shortcut (Ctrl/Cmd + J) to toggle theme
  useHotkeys([['mod+J', toggleColorScheme]]);

  return { colorScheme, toggleColorScheme };
}