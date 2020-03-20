import React from 'react';
import styled from '@emotion/styled';
import Woman from '../assets/woman-profile-picture.jpg';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 100px auto;
  max-width: 450px;
  max-height: 260px;
`;

const ImgWrapper = styled.div`
  max-height: 260px;
`;

const Img = styled.img`
  height: 100%;
  margin-left: 15px;
  border: solid rgba(148, 30, 0) 4px;
  border-radius: 7px;
`;

function ProfileImg(props) {
  return <Img src={Woman} alt="Woman profile" {...props} />;
}

const MainDates = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 0px;
  height: 260px;
`;

const MainDatesDescription = styled.p`
  color: rgba(148, 30, 0);
  margin-top: 0;
  margin-bottom: 0;
`;

const ProfileInput = styled.p`
  color: #f0f0f0;
  background-color: rgba(148, 30, 0);
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 6px;
  border-radius: 7px;
  min-width: 100px;
  max-width: 205px;
  max-height: 31px;
  overflow-x: scroll;
`;

const currentYear = new Date().getFullYear();
function ProfileSection(props) {
  return (
    <Section>
      <ImgWrapper>
        <ProfileImg />
      </ImgWrapper>
      <MainDates>
        <MainDatesDescription>Profilname</MainDatesDescription>
        <ProfileInput>{props.user.nickname}</ProfileInput>{' '}
        <MainDatesDescription>Alter</MainDatesDescription>
        <ProfileInput>{currentYear - props.user.yearOfBirth}</ProfileInput>{' '}
        <MainDatesDescription>Geschlecht</MainDatesDescription>
        <ProfileInput>{props.user.sex}</ProfileInput>{' '}
        <MainDatesDescription>Angellänge</MainDatesDescription>
        <ProfileInput>{props.user.distance}</ProfileInput>
      </MainDates>
    </Section>
  );
}

export default ProfileSection;
