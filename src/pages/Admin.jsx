import { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';

import { getUsers } from '../api/usersApi';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <MainLayout>
      <div>
        <h1 className='text-xl font-semibold mb-4 text-gray-800'>
          Admin panel
        </h1>

        {loading ? (
          <p className='text-gray-600'>Cargando usuarios...</p>
        ) : (
          <table className='w-full bg-white rounded shadow'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='p-2 text-left'>ID</th>
                <th className='p-2 text-left'>Usuario</th>
                <th className='p-2 text-left'>Rol</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className='border-t'>
                  <td className='p-2'>{u.id}</td>
                  <td className='p-2'>{u.username}</td>
                  <td className='p-2 capitalize'>{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </MainLayout>
  );
};

export default Admin;
