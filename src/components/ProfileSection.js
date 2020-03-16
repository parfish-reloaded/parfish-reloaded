import React from 'react';
import styled from '@emotion/styled';
import Woman from '../assets/woman-profile-picture.jpg';

const Section = styled.section`
  display: flex;
  margin-top: 100px;
  margin-left: 20px;
`;

const ImageWrapper = styled.div`
  width: 161px;
`;

const Img = styled.img`
  width: 100%;
  border: solid rgba(148, 30, 0) 4px;
  border-radius: 7px;
`;

function ProfileImg(props) {
  return <Img src={Woman} alt="Woman profile" {...props} />;
}

const MainDates = styled.div`
  margin-left: 20px;
  margin-right: 20px;
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
  min-width: 120px;
  max-width: 205px;
  max-height: 31px;
  overflow: scroll;
`;

const currentYear = new Date().getFullYear();
function ProfileSection(props) {
  return (
    <Section>
      <ImageWrapper>
        <ProfileImg />
      </ImageWrapper>
      <MainDates>
        <MainDatesDescription>Profilname</MainDatesDescription>
        <ProfileInput>{props.user?.nickname}</ProfileInput>{' '}
        <MainDatesDescription>Alter</MainDatesDescription>
        <ProfileInput>
          {currentYear - props.user?.yearOfBirth}
        </ProfileInput>{' '}
        <MainDatesDescription>Geschlecht</MainDatesDescription>
        <ProfileInput>{props.user?.sex}</ProfileInput>{' '}
        <MainDatesDescription>Angellänge</MainDatesDescription>
        <ProfileInput>{props.user?.distance}</ProfileInput>
      </MainDates>
    </Section>
  );
}

export default ProfileSection;
