"use client";
import React from 'react';

import { Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell } from '@nextui-org/react';
import '../app/globals.css';

const reportsData = [
    { id: 1, ticketName: 'Ticket 1', description: 'Description 1', business: 'Business A' },
    { id: 2, ticketName: 'Ticket 2', description: 'Description 2', business: 'Business B' },
    { id: 3, ticketName: 'Ticket 3', description: 'Description 3', business: 'Business C' },
  ];

  const Reports = () => {
    return (
      <>     
        <h1 className="text-2xl font-bold mb-4">Reports</h1>
        <Table
          aria-label="Reports Table"
          css={{
            height: "auto",
            minWidth: "100%",
            backgroundColor: "#333",
            color: "#000",}}
            
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Name of the Ticket</TableColumn>
            <TableColumn>Description</TableColumn>
            <TableColumn>Business Linked</TableColumn>
          </TableHeader>
          <TableBody>
            {reportsData.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.id}</TableCell>
                <TableCell>{report.ticketName}</TableCell>
                <TableCell>{report.description}</TableCell>
                <TableCell>{report.business}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  };
  
  export default Reports;