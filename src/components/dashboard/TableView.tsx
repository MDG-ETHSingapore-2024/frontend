import React from "react";

interface TableViewProps {
  tableData: { [key: string]: any }[]; // Array of objects representing table rows
  onAddColumn: () => void;
  onDeleteColumn: (columnName: string) => void;
  onEditColumn: (columnName: string) => void;
}

const TableView: React.FC<TableViewProps> = ({
  tableData,
  onAddColumn,
  onDeleteColumn,
  onEditColumn,
}) => {
  const columns = tableData.length > 0 ? Object.keys(tableData[0]) : [];

  return (
    <div className="w-3/4 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Table Data</h2>
        <button
          onClick={onAddColumn}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Column
        </button>
      </div>
      <table className="border-collapse w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="border p-2 text-left">
                {col}
              </th>
            ))}
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col} className="border p-2">
                  {row[col]}
                </td>
              ))}
              <td className="border p-2">
                <button
                  onClick={() => onEditColumn("column_name")}
                  className="text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteColumn("column_name")}
                  className="text-red-500 ml-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
