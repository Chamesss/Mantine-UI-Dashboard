import { Group, Title, ActionIcon, useMantineColorScheme, Tooltip } from '@mantine/core';
import { UserCircle, Sun, Moon } from 'lucide-react';

export function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group justify="space-between" style={{ flex: 1 }}>
      <Title order={3}>Employee Portal</Title>
      <Group>
        <Tooltip 
          label={`Switch to ${colorScheme === 'dark' ? 'light' : 'dark'} mode`}
          position="bottom"
        >
          <ActionIcon
            variant="default"
            onClick={toggleColorScheme}
            size="lg"
            aria-label="Toggle color scheme"
          >
            {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </ActionIcon>
        </Tooltip>
        <UserCircle size={24} />
      </Group>
    </Group>
  );
}