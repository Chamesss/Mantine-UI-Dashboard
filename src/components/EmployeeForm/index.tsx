import { useState } from 'react';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import {
  TextInput,
  Select,
  Button,
  Stack,
  Group,
  Modal,
  Text,
  Box,
} from '@mantine/core';
import { Send, User, Building2, Phone, Mail } from 'lucide-react';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  position: string;
}

interface EmployeeFormProps {
  onSuccess?: () => void;
}

export function EmployeeForm({ onSuccess }: EmployeeFormProps) {
  const [confirmOpened, { open: openConfirm, close: closeConfirm }] = useDisclosure(false);
  const [formData, setFormData] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      department: '',
      position: '',
    },
    validate: {
      firstName: (value) => (value.length < 2 ? 'First name is too short' : null),
      lastName: (value) => (value.length < 2 ? 'Last name is too short' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value) => (/^\+?\d{10,}$/.test(value) ? null : 'Invalid phone number'),
      company: (value) => (value.length < 2 ? 'Company name is required' : null),
      department: (value) => (value ? null : 'Please select a department'),
      position: (value) => (value ? null : 'Please select a position'),
    },
  });

  const handleSubmit = (values: FormValues) => {
    setFormData(values);
    openConfirm();
  };

  const handleConfirm = () => {
    closeConfirm();
    onSuccess?.();
    form.reset();
  };

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack spacing="md">
          <Group grow>
            <TextInput
              label="First Name"
              placeholder="John"
              leftSection={<User size={16} />}
              {...form.getInputProps('firstName')}
            />
            <TextInput
              label="Last Name"
              placeholder="Doe"
              leftSection={<User size={16} />}
              {...form.getInputProps('lastName')}
            />
          </Group>

          <TextInput
            label="Email"
            placeholder="your@email.com"
            leftSection={<Mail size={16} />}
            {...form.getInputProps('email')}
          />

          <TextInput
            label="Phone"
            placeholder="+1234567890"
            leftSection={<Phone size={16} />}
            {...form.getInputProps('phone')}
          />

          <TextInput
            label="Company"
            placeholder="Company Name"
            leftSection={<Building2 size={16} />}
            {...form.getInputProps('company')}
          />

          <Select
            label="Department"
            placeholder="Select department"
            data={[
              'Engineering',
              'Marketing',
              'Sales',
              'Human Resources',
              'Finance',
              'Operations',
            ]}
            {...form.getInputProps('department')}
          />

          <Select
            label="Position"
            placeholder="Select position"
            data={[
              'Junior',
              'Mid-level',
              'Senior',
              'Team Lead',
              'Manager',
              'Director',
            ]}
            {...form.getInputProps('position')}
          />

          <Button
            type="submit"
            size="md"
            rightSection={<Send size={16} />}
          >
            Submit
          </Button>
        </Stack>
      </form>

      <Modal opened={confirmOpened} onClose={closeConfirm} title="Confirm Submission">
        {formData && (
          <Box>
            <Text size="sm" mb="xs">Please confirm the following information:</Text>
            <Stack spacing="xs">
              <Text size="sm"><strong>Name:</strong> {formData.firstName} {formData.lastName}</Text>
              <Text size="sm"><strong>Email:</strong> {formData.email}</Text>
              <Text size="sm"><strong>Phone:</strong> {formData.phone}</Text>
              <Text size="sm"><strong>Company:</strong> {formData.company}</Text>
              <Text size="sm"><strong>Department:</strong> {formData.department}</Text>
              <Text size="sm"><strong>Position:</strong> {formData.position}</Text>
            </Stack>
            <Group justify="flex-end" mt="lg">
              <Button variant="light" onClick={closeConfirm}>Cancel</Button>
              <Button onClick={handleConfirm}>Confirm</Button>
            </Group>
          </Box>
        )}
      </Modal>
    </>
  );
}