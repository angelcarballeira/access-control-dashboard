import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/ui/StatCard';
import Card from '../components/ui/Card';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className='text-2xl font-bold mb-6'>Dashboard</h1>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
        <StatCard title='Usuarios activos' value='124' />
        <StatCard title='Roles' value='3' />
        <StatCard title='Sesiones hoy' value='56' />
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card>
          <h2 className='font-semibold mb-2'>Actividad reciente</h2>
          <p className='text-sm text-gray-500'>Sin actividad.</p>
        </Card>

        <Card>
          <h2 className='font-semibold mb-2'>Notificaciones</h2>
          <p className='text-sm text-gray-500'>Todo OK.</p>
        </Card>
      </section>
    </DashboardLayout>
  );
};

export default Dashboard;
