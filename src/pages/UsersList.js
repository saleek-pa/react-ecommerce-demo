import React, { useEffect, useState } from 'react';
import { axios } from '../configs/Axios';
import Loading from '../components/Loading';
import '../styles/UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1 className="heading">Users</h1>
      <div className="users-list">
        {users?.map((user) => (
          <div key={user?.id} className="users-list-card">
            <img src={user?.avatar} alt={user?.name} className="user-image" />
            <div>
              <h3>{user?.name}</h3>
              <p>{user?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
