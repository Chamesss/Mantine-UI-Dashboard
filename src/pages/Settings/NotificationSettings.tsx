import { Stack, Switch, Text, Paper, Select, NumberInput } from '@mantine/core';

export function NotificationSettings() {
  return (
    <Paper p="md" withBorder>
      <Stack>
        <Text fw={500} size="lg">Notifications</Text>
        
        <Switch
          label="Email notifications"
          description="Receive email notifications for important updates"
          defaultChecked
        />
        
        <Switch
          label="Desktop notifications"
          description="Show desktop notifications when browser is open"
          defaultChecked
        />
        
        <Select
          label="Notification frequency"
          description="How often would you like to receive digest emails?"
          defaultValue="daily"
          data={[
            { value: 'realtime', label: 'Real-time' },
            { value: 'daily', label: 'Daily digest' },
            { value: 'weekly', label: 'Weekly digest' },
          ]}
        />
        
        <NumberInput
          label="Quiet hours start"
          description="Hour when notifications should be muted (24h format)"
          defaultValue={22}
          min={0}
          max={23}
        />
        
        <NumberInput
          label="Quiet hours end"
          description="Hour when notifications should resume (24h format)"
          defaultValue={7}
          min={0}
          max={23}
        />
      </Stack>
    </Paper>
  );
}