import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 1rem;
  background-color: #007bff;
  color: #fff;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
`;

const JobStatusPage = () => {
  // Dummy data for job statuses
  const jobStatuses = [
    { id: 1, title: 'Software Engineer', company: 'Tech Inc.', status: 'Pending' },
    { id: 2, title: 'Marketing Coordinator', company: 'Marketing Agency', status: 'Rejected' },
    { id: 3, title: 'Data Analyst', company: 'Data Corp.', status: 'Offered' },
    { id: 4, title: 'Graphic Designer', company: 'Design Studio', status: 'Interviewing' },
  ];

  return (
    <Container>
      <h1>Job Application Status</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>Job Title</TableHeader>
            <TableHeader>Company</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {jobStatuses.map(job => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell>{job.status}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default JobStatusPage;
