import React from "react";

export default function Table({ columns, data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <td key={index}>{col.header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col, index) => (
                <td key={index}>{row[col.accesor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
