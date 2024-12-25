import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import App from './App.tsx';
import '@mantine/core/styles.css';
import { useColorScheme } from './hooks/useColorScheme.ts';

const theme = createTheme({
  primaryColor: 'blue',
  defaultRadius: 'sm',
});

function Root() {
  const { colorScheme } = useColorScheme();

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
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