// RecruitsPage.js
import React from 'react';
import styled from 'styled-components';

const RecruitsPage = () => {
  return (
    <RecruitsContainer>
      <Title>Recruiters</Title>
      <RecruitCard>
        <RecruitInfo
          name="John Doe"
          position="Software Engineer"
          experience={5}
          location="San Francisco, CA"
        />
      </RecruitCard>
      <RecruitCard>
        <RecruitInfo
          name="Jane Smith"
          position="UX Designer"
          experience={3}
          location="New York, NY"
        />
      </RecruitCard>
      {/* Add more recruit cards here */}
    </RecruitsContainer>
  );
};

const RecruitsContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const RecruitCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const RecruitInfo = ({ name, position, experience, location }) => {
  return (
    <InfoContainer>
      <h2>{name}</h2>
      <p>Position: {position}</p>
      <p>Experience: {experience} years</p>
      <p>Location: {location}</p>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  h2 {
    margin-top: 0;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin-bottom: 10px;
    color: #666;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export default RecruitsPage;
