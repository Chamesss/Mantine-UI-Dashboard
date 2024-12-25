import { Stack, Title, Paper, Switch, Text, Tabs, ColorSwatch, Group } from '@mantine/core';
import { Bell, Palette, Shield, Database } from 'lucide-react';
import { NotificationSettings } from './NotificationSettings';

export function SettingsPage() {
  const colors = ['blue', 'teal', 'violet', 'pink', 'grape', 'orange', 'indigo'];

  return (
    <Stack>
      <Title order={2}>Settings</Title>
      
      <Tabs defaultValue="notifications">
        <Tabs.List>
          <Tabs.Tab value="notifications" leftSection={<Bell size={16} />}>
            Notifications
          </Tabs.Tab>
          <Tabs.Tab value="appearance" leftSection={<Palette size={16} />}>
            Appearance
          </Tabs.Tab>
          <Tabs.Tab value="privacy" leftSection={<Shield size={16} />}>
            Privacy
          </Tabs.Tab>
          <Tabs.Tab value="data" leftSection={<Database size={16} />}>
            Data
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="notifications" pt="md">
          <NotificationSettings />
        </Tabs.Panel>

        <Tabs.Panel value="appearance" pt="md">
          <Paper p="md" withBorder>
            <Stack>
              <Text fw={500} size="lg">Theme Customization</Text>
              
              <Text size="sm">Accent Color</Text>
              <Group gap="xs">
                {colors.map((color) => (
                  <ColorSwatch key={color} color={`var(--mantine-color-${color}-6)`} />
                ))}
              </Group>

              <Switch
                label="Compact mode"
                description="Reduce padding and margins throughout the interface"
              />
              
              <Switch
                label="Animations"
                description="Enable interface animations"
                defaultChecked
              />
            </Stack>
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="privacy" pt="md">
          <Paper p="md" withBorder>
            <Stack>
              <Text fw={500} size="lg">Privacy Settings</Text>
              
              <Switch
                label="Profile visibility"
                description="Make your profile visible to other employees"
                defaultChecked
              />
              
              <Switch
                label="Activity status"
                description="Show when you're online"
                defaultChecked
              />
              
              <Switch
                label="Data collection"
                description="Allow anonymous usage data collection"
              />
            </Stack>
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="data" pt="md">
          <Paper p="md" withBorder>
            <Stack>
              <Text fw={500} size="lg">Data Management</Text>
              
              <Switch
                label="Auto-save"
                description="Automatically save changes"
                defaultChecked
              />
              
              <Switch
                label="Data backup"
                description="Enable daily data backups"
                defaultChecked
              />
              
              <Switch
                label="Cache management"
                description="Clear cache automatically"
              />
            </Stack>
          </Paper>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}