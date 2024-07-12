import React from "react";

export default function Table({ columns, data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <td key={index} className="border p-5 text-center bg-accent-color text-primary-color">
                {col.header}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col, index) => (
                <td key={index} className="border p-5 text-center">
                  {row[col.accesor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
