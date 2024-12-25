import { Stack, NavLink } from '@mantine/core';
import { Users, Building2, Settings, HelpCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { label: 'Employees', icon: Users, path: '/' },
    { label: 'Departments', icon: Building2, path: '/departments' },
    { label: 'Settings', icon: Settings, path: '/settings' },
    { label: 'Help', icon: HelpCircle, path: '/help' },
  ];

  return (
    <Stack gap="sm">
      {links.map(({ label, icon: Icon, path }) => (
        <NavLink
          key={path}
          label={label}
          leftSection={<Icon size={16} />}
          active={location.pathname === path}
          onClick={() => navigate(path)}
        />
      ))}
    </Stack>
  );
}