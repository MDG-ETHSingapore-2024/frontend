import React, { useState } from 'react';
import { PaginationView } from './PagtinationView';
import editIcon from '@/assets/edit-icon.svg';
import deleteIcon from '@/assets/delete-icon.svg';

interface SchemaViewProps {
  schemaAttributes: { name: string; type: string }[];
  onAddAttribute: () => void;
  onDeleteAttribute: (attributeName: string) => void;
  onEditAttribute: (attributeName: string) => void;
  enableCheckboxes?: boolean;
}

const SchemaView: React.FC<SchemaViewProps> = ({
  schemaAttributes,
  onAddAttribute,
  onDeleteAttribute,
  onEditAttribute,
  enableCheckboxes = false,
}) => {
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);

  const handleCheckboxChange = (attributeName: string) => {
    setSelectedAttributes((prevSelected) =>
      prevSelected.includes(attributeName)
        ? prevSelected.filter((name) => name !== attributeName)
        : [...prevSelected, attributeName]
    );
  };

  const handleSelectAll = () => {
    if (selectedAttributes.length === schemaAttributes.length) {
      setSelectedAttributes([]);
    } else {
      setSelectedAttributes(schemaAttributes.map((attr) => attr.name));
    }
  };

  return (
    <div className="w-full flex flex-col">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {enableCheckboxes && (
              <th className="p-2">
                <input
                  type="checkbox"
                  checked={selectedAttributes.length === schemaAttributes.length}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            <th className="p-2 text-left">Attribute Name</th>
            <th className="p-2 text-left">Type</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={enableCheckboxes ? 4 : 3} className="border-b border-gray-600"></td>
          </tr>
          {schemaAttributes.map((attr, index) => (
            <tr key={index} className="border-b border-gray-600">
              {enableCheckboxes && (
                <td className="p-2 justify-center flex">
                  <input
                    type="checkbox"
                    checked={selectedAttributes.includes(attr.name)}
                    onChange={() => handleCheckboxChange(attr.name)}
                  />
                </td>
              )}
              <td className="p-2">{attr.name}</td>
              <td className="p-2">{attr.type}</td>
              <td className="p-2 flex items-center">
                <button
                  onClick={() => onEditAttribute(attr.name)}
                  className="text-blue-500"
                >
                  <img src={editIcon} alt="Edit" className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDeleteAttribute(attr.name)}
                  className="text-red-500 ml-4"
                >
                  <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="w-full">
          <tr>
            <td colSpan={enableCheckboxes ? 4 : 3}>
              <div className="w-full flex justify-center py-2">
                <div className="mt-4">
                  <PaginationView pages={10} current={1} />
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default SchemaView;
