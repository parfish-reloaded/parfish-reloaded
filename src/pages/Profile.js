import React from 'react';
import './Profile.css';
import { useParams } from 'react-router-dom';
import Woman from '../assets/women-profile-picture.jpg';

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

  const currentYear = new Date().getFullYear();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <h2 className="test">{user?.nickname}</h2>
      <div className="test"></div>
      <div className="test">{user?.sex}</div>
      <div className="test">{user?.distance}</div> */}

      <section className="profile__main__dates">
        <div className="imageWrapper">
          <img
            src={Woman}
            alt="Young woman"
            className="profile__main__img"
          ></img>
        </div>
        <div className="profile__main__dates__strings">
          <p className="profile__main__dates__strings__description">
            Profilname
          </p>
          <p className="profile__main__dates__strings__input">
            {user.nickname}
          </p>
          <p className="profile__main__dates__strings__description">Alter</p>
          <p className="profile__main__dates__strings__input">
            {currentYear - user?.yearOfBirth}
          </p>
          <p className="profile__main__dates__strings__description">
            Geschlecht
          </p>
          <p className="profile__main__dates__strings__input">{user.sex}</p>
          <p className="profile__main__dates__strings__description">
            Angellänge
          </p>{' '}
          <p className="profile__main__dates__strings__input">
            {user.distance}
          </p>
        </div>
      </section>
    </>
  );
}

export default Profile;
