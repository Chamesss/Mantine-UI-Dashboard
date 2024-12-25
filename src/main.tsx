import { MantineColorScheme, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { useColorScheme } from './hooks/useColorScheme.ts';

const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'sm',
});

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  const { colorScheme } = useColorScheme();

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme as MantineColorScheme }>
      <ModalsProvider>
        <App />
      </ModalsProvider>
    </MantineProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);