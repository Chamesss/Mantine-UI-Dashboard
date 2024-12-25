import { Group, Paper, Text, RingProgress, Stack } from '@mantine/core';

export function EmployeeStats() {
  const stats = {
    total: 156,
    newThisMonth: 12,
    departments: {
      engineering: 45,
      marketing: 23,
      sales: 34,
      hr: 15,
      finance: 19,
      operations: 20,
    },
  };

  const total = Object.values(stats.departments).reduce((a, b) => a + b, 0);
  
  return (
    <Paper p="md" withBorder>
      <Group align="flex-start">
        <RingProgress
          size={150}
          thickness={12}
          sections={[
            { value: (stats.departments.engineering / total) * 100, color: 'blue' },
            { value: (stats.departments.marketing / total) * 100, color: 'teal' },
            { value: (stats.departments.sales / total) * 100, color: 'violet' },
            { value: (stats.departments.hr / total) * 100, color: 'grape' },
            { value: (stats.departments.finance / total) * 100, color: 'pink' },
            { value: (stats.departments.operations / total) * 100, color: 'orange' },
          ]}
          label={
            <Text ta="center" size="sm" fw={700}>
              {stats.total}
              <Text size="xs" c="dimmed">Total</Text>
            </Text>
          }
        />
        <Stack gap="xs">
          <Text size="sm" fw={500}>Department Distribution</Text>
          <Group gap="xs">
            <Text size="xs" c="dimmed">Engineering:</Text>
            <Text size="xs">{stats.departments.engineering}</Text>
          </Group>
          <Group gap="xs">
            <Text size="xs" c="dimmed">Marketing:</Text>
            <Text size="xs">{stats.departments.marketing}</Text>
          </Group>
          <Group gap="xs">
            <Text size="xs" c="dimmed">Sales:</Text>
            <Text size="xs">{stats.departments.sales}</Text>
          </Group>
          <Group gap="xs">
            <Text size="xs" c="dimmed">HR:</Text>
            <Text size="xs">{stats.departments.hr}</Text>
          </Group>
          <Group gap="xs">
            <Text size="xs" c="dimmed">Finance:</Text>
            <Text size="xs">{stats.departments.finance}</Text>
          </Group>
          <Group gap="xs">
            <Text size="xs" c="dimmed">Operations:</Text>
            <Text size="xs">{stats.departments.operations}</Text>
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
}