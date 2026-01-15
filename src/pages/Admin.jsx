import { useEffect, useState } from 'react';
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

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div>
      <h1 className='text-xl font-semibold mb-4'>Admin panel</h1>

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
              <td className='p-2'>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
