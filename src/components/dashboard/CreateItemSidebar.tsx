import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import editLogo from "@/assets/edit-logo.png"; // Ensure the path to the logo is correct

interface CreateItemSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  type: "table" | "collection" | "document" | "attribute" | "row" | "column";
  collectionAttributes?: string[]; // For documents and rows, provide the list of attributes or columns
  onCreate: (fields: { [key: string]: string }) => void;
}

const CreateItemSidebar: React.FC<CreateItemSidebarProps> = ({
  isOpen,
  onClose,
  type,
  collectionAttributes = [],
  onCreate,
}) => {
  const [fields, setFields] = useState<{ [key: string]: string }>({
    name: "",
    description: "",
    id: "",
    type: "",
    defaultValue: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onCreate(fields);
    setFields({
      name: "",
      description: "",
      id: "",
      type: "",
      defaultValue: "",
    });
    onClose();
  };

  const renderFields = () => {
    switch (type) {
      case "collection":
        return (
          <>
            <div className="relative w-full">
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                value={fields.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter collection name"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
                style={{
                  textIndent: "2rem",
                  borderRadius: "0.5rem",
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(black, black), linear-gradient(to right, #B86E9F, #523147)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              />
            </div>
            <div className="relative w-full">
              <label className="block text-white mb-2">Description</label>
              <input
                type="text"
                value={fields.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                placeholder="Enter collection description"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
              />
            </div>
            <div className="relative w-full">
              <label className="block text-white mb-2">Collection ID</label>
              <input
                type="text"
                value={fields.id}
                onChange={(e) => handleInputChange("id", e.target.value)}
                placeholder="Enter collection ID"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
              />
            </div>
          </>
        );
      case "attribute":
        return (
          <>
            <div className="relative w-full">
              <label className="block text-white mb-2">Attribute Name</label>
              <input
                type="text"
                value={fields.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter attribute name"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
              />
            </div>
            <div className="relative w-full">
              <label className="block text-white mb-2">Attribute Type</label>
              <input
                type="text"
                value={fields.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
                placeholder="Enter attribute type (e.g., string, int, boolean)"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
              />
            </div>
            <div className="relative w-full">
              <label className="block text-white mb-2">Default Value</label>
              <input
                type="text"
                value={fields.defaultValue}
                onChange={(e) =>
                  handleInputChange("defaultValue", e.target.value)
                }
                placeholder="Enter default value"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
              />
            </div>
            <div className="relative w-full">
              <label className="block text-white mb-2">Collection ID</label>
              <input
                type="text"
                value={fields.id}
                onChange={(e) => handleInputChange("id", e.target.value)}
                placeholder="Enter collection ID"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
              />
            </div>
          </>
        );
      case "document":
        return (
          <>
            {collectionAttributes.map((attr, index) => (
              <div key={index} className="relative w-full">
                <label className="block text-white mb-2">{attr}</label>
                <input
                  type="text"
                  value={fields[attr] || ""}
                  onChange={(e) => handleInputChange(attr, e.target.value)}
                  placeholder={`Enter value for ${attr}`}
                  className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
                />
              </div>
            ))}
          </>
        );
      case "table":
        return (
          <>
            <div className="relative w-full">
              <label className="block text-white mb-2">Table Name</label>
              <input
                type="text"
                value={fields.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter table name"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
              />
            </div>
            <div className="relative w-full">
              <label className="block text-white mb-2">Table ID</label>
              <input
                type="text"
                value={fields.id}
                onChange={(e) => handleInputChange("id", e.target.value)}
                placeholder="Enter table ID"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
              />
            </div>
          </>
        );
      case "row":
        return (
          <>
            {collectionAttributes.map((column, index) => (
              <div key={index} className="relative w-full">
                <label className="block text-white mb-2">{column}</label>
                <input
                  type="text"
                  value={fields[column] || ""}
                  onChange={(e) => handleInputChange(column, e.target.value)}
                  placeholder={`Enter value for ${column}`}
                  className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
                  style={{
                    textIndent: "2rem",
                    borderRadius: "0.5rem",
                    border: "2px solid transparent",
                    backgroundImage:
                      "linear-gradient(black, black), linear-gradient(to right, #B86E9F, #523147)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "content-box, border-box",
                  }}
                />
              </div>
            ))}
          </>
        );
      case "column":
        return (
          <>
            <div className="relative w-full">
              <label className="block text-white mb-2">Column Name</label>
              <input
                type="text"
                value={fields.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter column name"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
                style={{
                  textIndent: "2rem",
                  borderRadius: "0.5rem",
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(black, black), linear-gradient(to right, #B86E9F, #523147)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              />
            </div>
            <div className="relative w-full">
              <label className="block text-white mb-2">Column Type</label>
              <input
                type="text"
                value={fields.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
                placeholder="Enter column type (e.g., string, int, boolean)"
                className="w-full bg-[#1C1C1C] border-[#2E2E2E] border-[1px] text-white rounded-xl px-3 py-4 outline-none"
                style={{
                  textIndent: "2rem",
                  borderRadius: "0.5rem",
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(black, black), linear-gradient(to right, #B86E9F, #523147)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
                }}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="sidebar" unmountOnExit>
      <div className="fixed inset-0 flex justify-end z-50 overflow-y-scroll">
        <div className="relative w-[35%] h-full flex flex-col p-[2px]">
          <div className="absolute inset-0 p-[1px]  rounded-tl-lg"></div>
          <div className="relative h-full flex flex-col p-10 bg-[#101010] border-2 rounded-l-lg">
            <div className="flex flex-col mb-6">
              {type === "collection" && (
                <>
                  <div className="w-full flex items-center flex-col mb-6">
                    <img src={editLogo} alt="Logo" className="w-32 h-32 mb-4" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Create Collection
                  </h2>
                </>
              )}
              <div className="w-full h-[80vh] flex flex-col items-center space-y-6 overflow-y-scroll">
                {renderFields()}
                <div className="flex justify-between w-full mt-4">
                  <button
                    onClick={onClose}
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-[#CC0495] text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CreateItemSidebar;
