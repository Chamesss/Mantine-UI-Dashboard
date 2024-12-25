import { Stack, Title, Paper, Accordion, TextInput, Button, Text, Group, Badge, Tabs } from '@mantine/core';
import { Search, Book, Video, MessageCircle } from 'lucide-react';

export function HelpPage() {
  return (
    <Stack>
      <Title order={2}>Help & Support</Title>

      <Paper p="md" withBorder>
        <TextInput
          placeholder="Search help articles..."
          leftSection={<Search size={16} />}
          mb="md"
        />

        <Tabs defaultValue="faq">
          <Tabs.List>
            <Tabs.Tab value="faq" leftSection={<Book size={16} />}>
              FAQ
            </Tabs.Tab>
            <Tabs.Tab value="tutorials" leftSection={<Video size={16} />}>
              Tutorials
            </Tabs.Tab>
            <Tabs.Tab value="support" leftSection={<MessageCircle size={16} />}>
              Support
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="faq" pt="md">
            <Accordion>
              <Accordion.Item value="employees">
                <Accordion.Control>
                  <Group justify="space-between">
                    <Text>Managing Employees</Text>
                    <Badge color="blue">Basic</Badge>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <Stack gap="xs">
                    <Text fw={500}>To add a new employee:</Text>
                    <Text size="sm" c="dimmed">1. Click the "Add Employee" button</Text>
                    <Text size="sm" c="dimmed">2. Fill out the required information</Text>
                    <Text size="sm" c="dimmed">3. Submit the form</Text>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="departments">
                <Accordion.Control>
                  <Group justify="space-between">
                    <Text>Department Management</Text>
                    <Badge color="green">Advanced</Badge>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">Learn how to manage departments, set budgets, and track capacity.</Text>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="reports">
                <Accordion.Control>
                  <Group justify="space-between">
                    <Text>Generating Reports</Text>
                    <Badge color="violet">Pro</Badge>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">Detailed guide on creating and exporting various reports.</Text>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Tabs.Panel>

          <Tabs.Panel value="tutorials" pt="md">
            <Stack>
              <Paper p="md" withBorder>
                <Group justify="space-between" mb="md">
                  <Text fw={500}>Getting Started Guide</Text>
                  <Badge color="blue">5 min</Badge>
                </Group>
                <Text size="sm" c="dimmed" mb="md">
                  Learn the basics of navigating and using the employee portal.
                </Text>
                <Button variant="light" size="xs">Watch Tutorial</Button>
              </Paper>

              <Paper p="md" withBorder>
                <Group justify="space-between" mb="md">
                  <Text fw={500}>Advanced Features</Text>
                  <Badge color="green">10 min</Badge>
                </Group>
                <Text size="sm" c="dimmed" mb="md">
                  Deep dive into advanced features and customization options.
                </Text>
                <Button variant="light" size="xs">Watch Tutorial</Button>
              </Paper>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="support" pt="md">
            <Stack>
              <Text fw={500} size="lg" mb="md">Contact Support</Text>
              <TextInput
                label="Subject"
                placeholder="Enter your question"
              />
              <TextInput
                label="Email"
                placeholder="your@email.com"
              />
              <TextInput
                label="Message"
                placeholder="Describe your issue"
                multiline
                rows={4}
              />
              <Button>Submit Request</Button>
            </Stack>
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Stack>
  );
}