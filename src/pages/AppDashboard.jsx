import MainLayout from '../layouts/MainLayout';

import StatCard from '../components/ui/StatCard';
import Card from '../components/ui/Card';

const Dashboard = () => {
  return (
    <MainLayout>
      <h1 className='text-2xl font-bold mb-6 text-gray-800'>Dashboard</h1>

      {/* Stats */}
      <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
        <StatCard title='Usuarios activos' value='124' />
        <StatCard title='Roles' value='3' />
        <StatCard title='Sesiones hoy' value='56' />
      </section>

      {/* Content */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Card>
          <h2 className='font-semibold mb-2 text-gray-800'>
            Actividad reciente
          </h2>
          <p className='text-sm text-gray-500'>No hay actividad reciente.</p>
        </Card>

        <Card>
          <h2 className='font-semibold mb-2 text-gray-800'>Notificaciones</h2>
          <p className='text-sm text-gray-500'>
            Todo está funcionando correctamente.
          </p>
        </Card>
      </section>
    </MainLayout>
  );
};

export default Dashboard;
