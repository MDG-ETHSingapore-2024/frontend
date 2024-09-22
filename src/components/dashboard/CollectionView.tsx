import React, { useState } from "react";

interface CollectionViewProps {
  documents: any[];
  onAddDocument: () => void;
  onDeleteDocument: (documentId: string) => void;
  onEditDocument: (documentId: string) => void;
  enableCheckboxes?: boolean;
  actionIcons?: { editIcon: string; deleteIcon: string };
}

const CollectionView: React.FC<CollectionViewProps> = ({
  documents = [], // Default to empty array if undefined
  // onAddDocument,
  onDeleteDocument,
  onEditDocument,
  enableCheckboxes = false,
  actionIcons,
}) => {
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);

  const handleCheckboxChange = (docId: string) => {
    setSelectedDocuments((prevSelected) =>
      prevSelected.includes(docId)
        ? prevSelected.filter((id) => id !== docId)
        : [...prevSelected, docId]
    );
  };

  const handleSelectAll = () => {
    if (selectedDocuments.length === documents.length) {
      setSelectedDocuments([]);
    } else {
      setSelectedDocuments(documents.map((doc) => doc._id));
    }
  };

  const documentKeys = documents.length > 0 ? Object.keys(documents[0]) : [];

  return (
    <div className="w-full flex flex-col">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {enableCheckboxes && (
              <th className="p-2">
                <input
                  type="checkbox"
                  checked={selectedDocuments.length === documents.length}
                  onChange={handleSelectAll}
                />
              </th>
            )}
            {documentKeys.map((key) => (
              <th key={key} className="p-2 text-left">
                {key}
              </th>
            ))}
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={documentKeys.length + (enableCheckboxes ? 2 : 1)}
              className="border-b border-gray-600"
            ></td>
          </tr>
          {documents.map((doc, index) => (
            <tr key={index} className="border-b border-gray-600">
              {enableCheckboxes && (
                <td className="p-2 justify-center flex">
                  <input
                    type="checkbox"
                    checked={selectedDocuments.includes(doc._id)}
                    onChange={() => handleCheckboxChange(doc._id)}
                  />
                </td>
              )}
              {documentKeys.map((key) => (
                <td key={key} className="p-2">
                  {doc[key]}
                </td>
              ))}
              <td className="p-2 flex items-center">
                <button
                  onClick={() => onEditDocument(doc._id)}
                  className="text-blue-500"
                >
                  <img
                    src={actionIcons?.editIcon}
                    alt="Edit"
                    className="w-4 h-4"
                  />
                </button>
                <button
                  onClick={() => onDeleteDocument(doc._id)}
                  className="text-red-500 ml-4"
                >
                  <img
                    src={actionIcons?.deleteIcon}
                    alt="Delete"
                    className="w-4 h-4"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="w-full">
          <tr>
            <td colSpan={documentKeys.length + (enableCheckboxes ? 2 : 1)}>
              <div className="w-full flex justify-center py-2">
                <div className="mt-4">
                  {/* <PaginationView pages={10} current={1} /> */}
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CollectionView;
