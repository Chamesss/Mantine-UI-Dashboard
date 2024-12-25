import { Paper, Text, Group, Button, Stack, Progress, Badge } from '@mantine/core';
import { Users, Briefcase } from 'lucide-react';

interface DepartmentCardProps {
  name: string;
  employeeCount: number;
  capacity: number;
  budget: number;
  projects: number;
}

export function DepartmentCard({ name, employeeCount, capacity, budget, projects }: DepartmentCardProps) {
  const occupancyRate = (employeeCount / capacity) * 100;

  return (
    <Paper p="md" withBorder>
      <Stack>
        <Group justify="space-between">
          <Text fw={500} size="lg">{name}</Text>
          <Badge size="lg" variant="light">
            {projects} Projects
          </Badge>
        </Group>

        <Group>
          <Users size={16} />
          <Text size="sm">{employeeCount} / {capacity} Employees</Text>
        </Group>

        <Text size="sm" c="dimmed">Occupancy Rate</Text>
        <Progress 
          value={occupancyRate}
          color={occupancyRate > 90 ? 'red' : occupancyRate > 75 ? 'yellow' : 'blue'}
        />

        <Group justify="space-between" mt="sm">
          <Text size="sm">Budget: ${budget.toLocaleString()}</Text>
          <Button variant="light" size="xs" leftSection={<Briefcase size={14} />}>
            View Details
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}