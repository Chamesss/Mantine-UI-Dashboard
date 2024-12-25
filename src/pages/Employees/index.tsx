import { useState } from 'react';
import { Button, Group, Modal, Paper, Stack, Title, Tabs } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Plus, Users, BarChart } from 'lucide-react'; // Changed from ChartBar to BarChart
import { EmployeeForm } from '../../components/EmployeeForm';
import { EmployeeTable } from './EmployeeTable';
import { EmployeeStats } from './EmployeeStats';

export function EmployeesPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [activeTab, setActiveTab] = useState<string | null>('list');

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={2}>Employees</Title>
        <Button
          leftSection={<Plus size={16} />}
          onClick={open}
        >
          Add Employee
        </Button>
      </Group>

      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="list" leftSection={<Users size={16} />}>
            Employee List
          </Tabs.Tab>
          <Tabs.Tab value="stats" leftSection={<BarChart size={16} />}>
            Statistics
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="list">
          <Paper p="md" withBorder mt="md">
            <EmployeeTable />
          </Paper>
        </Tabs.Panel>

        <Tabs.Panel value="stats">
          <EmployeeStats />
        </Tabs.Panel>
      </Tabs>

      <Modal 
        opened={opened} 
        onClose={close} 
        title="Add New Employee"
        size="lg"
      >
        <EmployeeForm onSuccess={close} />
      </Modal>
    </Stack>
  );
}