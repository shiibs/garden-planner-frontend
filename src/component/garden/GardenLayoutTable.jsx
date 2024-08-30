import React from "react";
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

export default function GardenLayoutTable({ gardenLayout }) {
  const renderCell = (plant, colIndex) => (
    <TableCell key={colIndex} align="center">
      <div>{plant.name}</div>
      <div>{plant.plantPerSquare} plants/sq</div>
      <div>{plant.producePerSquare} produce/sq</div>
    </TableCell>
  );

  return (
    <TableContainer component={Paper} className="py-3">
      <Table>
        <TableBody>
          {gardenLayout.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, colIndex) =>
                cell && cell.id ? (
                  renderCell(cell, colIndex)
                ) : (
                  <TableCell key={colIndex} align="center" className="border">
                    Empty
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
