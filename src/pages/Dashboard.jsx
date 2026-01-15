import Navbar from '../components/Navbar';
import StatCard from '../components/ui/StatCard';
import Card from '../components/ui/Card';

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <main className='bg-gray-100 min-h-screen p-6'>
        <h1 className='text-2xl font-bold mb-6'>Panel de Control</h1>

        {/* Stats */}
        <section className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
          <StatCard title='Usuarios activos' value='124' />
          <StatCard title='Roles' value='3' />
          <StatCard title='Sesiones hoy' value='56' />
        </section>

        {/* Content */}
        <section className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Card>
            <h2 className='font-semibold mb-2'>Actividad reciente</h2>
            <p className='text-gray-500 text-sm'>No hay actividad reciente.</p>
          </Card>

          <Card>
            <h2 className='font-semibold mb-2'>Notificaciones</h2>
            <p className='text-gray-500 text-sm'>
              Todo está funcionando correctamente.
            </p>
          </Card>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
