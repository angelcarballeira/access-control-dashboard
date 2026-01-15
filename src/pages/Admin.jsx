import DashboardLayout from '../layouts/DashboardLayout';
import Card from '../components/ui/Card';

const Admin = () => {
  return (
    <DashboardLayout>
      <h1 className='text-2xl font-bold mb-6 text-red-600'>Admin Panel</h1>

      <Card>
        <p className='text-sm text-gray-600'>
          Gestión de usuarios (próximamente).
        </p>
      </Card>
    </DashboardLayout>
  );
};

export default Admin;
