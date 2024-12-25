import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from './components/Layout/AppShell';
import { AppRoutes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;