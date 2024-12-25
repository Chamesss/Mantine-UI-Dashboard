import { Routes, Route } from 'react-router-dom';
import { EmployeesPage } from './pages/Employees';
import { DepartmentsPage } from './pages/Departments';
import { SettingsPage } from './pages/Settings';
import { HelpPage } from './pages/Help';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmployeesPage />} />
      <Route path="/departments" element={<DepartmentsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
}