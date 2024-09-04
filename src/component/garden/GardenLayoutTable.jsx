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
    <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-neutral-500 ">
      <div className="text-sm md:text-base text-slate-800">{plant.name}</div>
      <div className="text-xs md:text-sm text-slate-700">
        Plants: {plant.plantPerSquare}
      </div>
      <div className="text-xs md:text-sm text-slate-700">
        Produce: {plant.producePerSquare}
      </div>
    </td>
  );

  return (
    <div className="flex flex-col pb-10 px-5 lg:px-10">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center text-sm font-light border-neutral-400">
              <tbody>
                {gardenLayout.map((row, rowIndex) => (
                  <tr className="border-b border-neutral-400" key={rowIndex}>
                    {row.map((cell, colIndex) =>
                      cell && cell.id ? (
                        renderCell(cell, colIndex)
                      ) : (
                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-neutral-400">
                          Empty
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
