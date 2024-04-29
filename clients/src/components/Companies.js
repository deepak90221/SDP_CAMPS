import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  background-color: rgba(255, 255, 255, 0.5); /* Background color with opacity */
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 300px;
  margin: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    border-color: #007bff;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${props => props.primary ? '#007bff' : '#28a745'};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#0056b3' : '#218838'};
  }
`;

const Icon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const Certificate = styled.span`
  font-size: 1rem;
  color: #777;
`;

const Skill = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: #f0f0f0;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const companies = [
  {
    name: 'Infosys',
    description: 'Company A description goes here.',
    location: 'City A, Country A',
    jobTitle: 'Frontend Developer',
    skillsRequired: ['HTML', 'CSS', 'JavaScript'],
    certifications: ['Coursera Certification', 'PCAP Certification'],
    minCGPA: 8,
    icon: '👨‍💻'
  },
  {
    name: 'Paramount',
    description: 'Company B description goes here.',
    location: 'City B, Country B',
    jobTitle: 'Backend Developer',
    skillsRequired: ['Node.js', 'Express', 'MongoDB'],
    certifications: ['Global Automata', 'Cloud AWS'],
    minCGPA: 8,
    icon: '💼'
  },
  {
    name: 'Netflix',
    description: 'Company C description goes here.',
    location: 'City C, Country C',
    jobTitle: 'UI/UX Designer',
    skillsRequired: ['UI Design', 'UX Research', 'Adobe XD'],
    certifications: ['Junifer', 'Red Hat'],
    minCGPA: 8,
    icon: '🎨'
  },
];

const Companies = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const applyForJob = (jobTitle) => {
    console.log(`Applying for job: ${jobTitle}`);
  };

  const writeExam = (jobTitle) => {
    console.log(`Writing exam for job: ${jobTitle}`);
  };

  return (
    <Container>
      <Header>Job Listings</Header>
      <CardContainer>
        {companies.map((company, index) => (
          <Card key={index}>
            <Title>{company.name}</Title>
            <Description>{company.description}</Description>
            <Location>{company.location}</Location>
            <Description><strong>Job Title:</strong> {company.jobTitle}</Description>
            <Description>
              <Icon>{company.icon}</Icon>
              {company.skillsRequired.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </Description>
            <Certificate>
              Certifications: {company.certifications.join(', ')}
            </Certificate>
            <Description>Minimum CGPA: {company.minCGPA}</Description>
            <a href="/Jobform"><Button primary onClick={() => applyForJob(company.jobTitle)}>Apply</Button></a>
            <a href="/Exams"><Button onClick={() => writeExam(company.jobTitle)}>Write exam</Button></a>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Companies;
