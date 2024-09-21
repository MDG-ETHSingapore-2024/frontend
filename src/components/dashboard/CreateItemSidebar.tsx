import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import editLogo from "@/assets/edit-logo.png"; // Ensure the path to the logo is correct

interface CreateItemSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  type: "table" | "collection";
  onCreate: (name: string, description: string, id: string) => void;
}

const CreateItemSidebar: React.FC<CreateItemSidebarProps> = ({
  isOpen,
  onClose,
  type,
  onCreate,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [itemId, setItemId] = useState("");

  const handleSubmit = () => {
    onCreate(name, description, itemId);
    setName("");
    setDescription("");
    setItemId("");
    onClose();
  };

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="sidebar" unmountOnExit>
      <div className="fixed inset-0 flex justify-end z-50">
        <div className="relative w-[35%] h-full flex flex-col p-[2px]">
          <div className="absolute inset-0 p-[1px] bg-gradient-to-br from-[#FFFFFF] to-transparent opacity-75 rounded-tl-lg"></div>
          <div className="relative h-full flex flex-col p-10 bg-black rounded-l-lg">
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
              <div className="w-full flex flex-col items-center space-y-6">
                <div className="relative w-full">
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={`Enter ${type} name`}
                    className="relative w-full p-0.3 h-[4rem] bg-transparent text-white placeholder-gray-400 focus:outline-none z-10"
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={`Enter ${type} description`}
                    className="relative w-full p-0.3  h-[4rem] bg-transparent text-white placeholder-gray-400 focus:outline-none z-10"
                    style={{
                      textIndent: "2rem", // This shifts the text 10px to the right
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
                  <label className="block text-white mb-2">
                    {type === "table" ? "Table" : "Collection"} ID
                  </label>
                  <input
                    type="text"
                    value={itemId}
                    onChange={(e) => setItemId(e.target.value)}
                    placeholder={`Enter ${type} ID`}
                    className="relative w-full p-0.3 h-[4rem] bg-transparent text-white placeholder-gray-400 focus:outline-none z-10"
                    style={{
                      textIndent: "2rem", // This shifts the text 10px to the right
                      borderRadius: "0.5rem",
                      border: "2px solid transparent",
                      backgroundImage:
                        "linear-gradient(black, black), linear-gradient(to right, #B86E9F, #523147)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "content-box, border-box",
                    }}
                  />
                </div>
                <div className="flex justify-between w-full mt-4">
                  <button
                    onClick={onClose}
                    className="bg-gray-300 text-black px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-[#DB1A5A] text-white px-4 py-2 rounded"
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
