import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export function useColorScheme() {
  const [colorScheme, setColorScheme] = useLocalStorage({
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