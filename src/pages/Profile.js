import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileSection from '../components/ProfileSection';

const USERS_API_URL =
  process.env.REACT_APP_USERS_API ||
  'https://my-json-server.typicode.com/parfish-reloaded/parfish-reloaded/users';

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    async function getUser() {
      const response = await fetch(`${USERS_API_URL}/${userId}`);
      const user = await response.json();
      setUser(user);
    }
    getUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProfileSection user={user} />
    </>
  );
}

export default Profile;
