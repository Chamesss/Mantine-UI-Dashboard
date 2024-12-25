import { Table, ActionIcon, Group, Text, Badge, Menu } from '@mantine/core';
import { MoreHorizontal, Pencil, Trash, Mail } from 'lucide-react';

const mockEmployees = [
  { id: 1, name: 'John Doe', email: 'john@example.com', department: 'Engineering', position: 'Senior Developer', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'Marketing', position: 'Manager', status: 'On Leave' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', department: 'Sales', position: 'Director', status: 'Active' },
];

export function EmployeeTable() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'green';
      case 'on leave': return 'yellow';
      default: return 'gray';
    }
  };

  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Department</Table.Th>
          <Table.Th>Position</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {mockEmployees.map((employee) => (
          <Table.Tr key={employee.id}>
            <Table.Td>
              <Text size="sm" fw={500}>{employee.name}</Text>
            </Table.Td>
            <Table.Td>{employee.email}</Table.Td>
            <Table.Td>{employee.department}</Table.Td>
            <Table.Td>{employee.position}</Table.Td>
            <Table.Td>
              <Badge color={getStatusColor(employee.status)}>{employee.status}</Badge>
            </Table.Td>
            <Table.Td>
              <Group gap="xs">
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <ActionIcon variant="subtle" size="sm">
                      <MoreHorizontal size={16} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item leftSection={<Pencil size={14} />}>
                      Edit
                    </Menu.Item>
                    <Menu.Item leftSection={<Mail size={14} />}>
                      Send email
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item color="red" leftSection={<Trash size={14} />}>
                      Delete
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}