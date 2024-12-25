import { Stack, Title, SimpleGrid } from '@mantine/core';
import { DepartmentCard } from './DepartmentCard';

const mockDepartments = [
  { name: 'Engineering', employeeCount: 45, capacity: 50, budget: 1500000, projects: 12 },
  { name: 'Marketing', employeeCount: 23, capacity: 25, budget: 800000, projects: 8 },
  { name: 'Sales', employeeCount: 34, capacity: 40, budget: 1200000, projects: 6 },
  { name: 'Human Resources', employeeCount: 15, capacity: 15, budget: 500000, projects: 4 },
  { name: 'Finance', employeeCount: 19, capacity: 20, budget: 900000, projects: 5 },
  { name: 'Operations', employeeCount: 20, capacity: 25, budget: 700000, projects: 7 },
];

export function DepartmentsPage() {
  return (
    <Stack>
      <Title order={2}>Departments</Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
        {mockDepartments.map((dept) => (
          <DepartmentCard key={dept.name} {...dept} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}