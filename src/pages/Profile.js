import React from 'react';
import { useParams } from 'react-router-dom';
import ProfileSection from '../components/ProfileSection';

const USERS_API_URL =
  process.env.REACT_APP_USERS_API ||
  'https://my-json-server.typicode.com/parfish-reloaded/parfish-reloaded/users';

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function getUser() {
      const response = await fetch(`${USERS_API_URL}${userId}`);
      const user = await response.json();
      console.log(user);
      setUser(user);
      setIsLoading(false);
    }
    getUser();
  }, [userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProfileSection user={user} />
    </>
  );
}

export default Profile;
