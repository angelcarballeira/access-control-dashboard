import Navbar from '../components/Navbar';

const DashboardLayout = ({ children }) => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Navbar />

      <main className='flex-1 p-6 bg-gray-100 text-gray-800'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
