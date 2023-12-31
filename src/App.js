import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';

function App() {
  
  const [tableData, setTableData] = useState([
    {
      id: 1,
       Claim_ID: '12345678',
      Name: 'Saravanan',
      Ailment: 'Heart Surgery',
      SLA: '25 %',
      P_TAT: '-',
      Stage: 'Discharge',
      Status: 'Pending Approval',
      Approved_Amount: 'Rs. 11,23,000',
      Hospital: 'Sant Parmanand Hospital',
    },
    {
        id: 2,
        Claim_ID: '12345678',
       Name: 'Saravanan',
       Ailment: 'Heart Surgery',
       SLA: '40 %',
       P_TAT: '2 Days',
       Stage: 'Final Claim',
       Status: 'Pending Approval',
       Approved_Amount: 'Rs. 11,23,000',
       Hospital: 'Apollo Multi Speciality Hospital',
    },
    {
        id: 3,
        Claim_ID: '12345678',
       Name: 'Saravanan',
       Ailment: 'Road Accident',
       SLA: '80 %',
       P_TAT: '-',
       Stage: 'Initial Authorization',
       Status: 'Pending Approval',
       Approved_Amount: 'Rs. 11,23,000',
       Hospital: 'MIOT Hospital',
    },
    {
        id: 4,
        Claim_ID: '12345678',
       Name: 'Saravanan',
       Ailment: 'Heart Surgery',
       SLA: '42 %',
       P_TAT: '-',
       Stage: 'Discharge',
       Status: 'TPA Query',
       Approved_Amount: 'Rs. 11,23,000',
       Hospital: 'ABCDEF Hospital',
    },
    {
        id: 5,
        Claim_ID: '12345678',
       Name: 'Saravanan',
       Ailment: 'Heart Surgery',
       SLA: '55 %',
       P_TAT: '-',
       Stage: 'Enhancemet',
       Status: 'Pending Approval',
       Approved_Amount: 'Rs. 11,23,000',
       Hospital: 'ABCDEF Hospital',
    },
    {
        id: 6,
        Claim_ID: '5678912',
       Name: 'Devana',
       Ailment: 'Dialysis',
       SLA: '55 %',
       P_TAT: '-',
       Stage: 'Enhancemet',
       Status: 'Pending Approval',
       Approved_Amount: 'Rs. 13,23,000',
       Hospital: 'ABCDEF Hospital',
    },
    {
        id: 7,
        Claim_ID: '5678654',
       Name: 'Layana',
       Ailment: 'Kidney Transplant',
       SLA: '55 %',
       P_TAT: '-',
       Stage: 'Discharge',
       Status: 'TPA Query',
       Approved_Amount: 'Rs. 10,23,000',
       Hospital: 'MIOT Hospital',
    },
    {
        id: 8,
        Claim_ID: '9876654',
       Name: 'Shivangi',
       Ailment: 'Kidney Transplant',
       SLA: '50 %',
       P_TAT: '-',
       Stage: 'Discharge',
       Status: 'TPA Query',
       Approved_Amount: 'Rs. 14,000,000',
       Hospital: 'Apollo Hospital',
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredData = data.filter(
    (item) =>
      item.Status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.Stage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'></h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              value={searchQuery}
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>Claim ID</th>
              <th>Name</th>
              <th>Ailment</th>
              <th>SLA</th>
              <th>P-TAT</th>
              <th>Stage</th>
              <th>Status</th>
              <th>Approved Amount</th>
              <th>Hospital</th>
            </tr>
          </thead>
          <tbody>
          {filteredData.map((item) => (
              <tr key={item.id}>
                
                  <td>{item.Claim_ID}</td>
                  <td>{item.Name}</td>
                  <td>{item.Ailment}</td>
                  <td>{item.SLA}</td>
                  <td>{item.P_TAT}</td>
                  <td>{item.Stage}</td>
                  <td>{item.Status}</td>
                  <td>{item.Approved_Amount}</td>
                  <td>{item.Hospital}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;