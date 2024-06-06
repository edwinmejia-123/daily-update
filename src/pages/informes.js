"use client";
import React from 'react';
import { Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell, Button } from '@nextui-org/react';
import '../app/globals.css';

const docsData = [
  { id: 1, business: 'Business A', fileName: 'Document1.pdf' },
  { id: 2, business: 'Business B', fileName: 'Document2.pdf' },
  { id: 3, business: 'Business C', fileName: 'Document3.pdf' },
];

const Docs = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Docs</h1>
      <Table
        aria-label="Docs Table"
        css={{ height: "auto", minWidth: "100%" }}
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Business Linked</TableColumn>
          <TableColumn>File Name</TableColumn>
          <TableColumn>Download</TableColumn>
        </TableHeader>
        <TableBody>
          {docsData.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell>{doc.id}</TableCell>
              <TableCell>{doc.business}</TableCell>
              <TableCell>{doc.fileName}</TableCell>
              <TableCell>
                <Button auto flat as="a" href="#">
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Docs;