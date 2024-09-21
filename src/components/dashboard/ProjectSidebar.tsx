import React from "react";
import documentIcon from "@/assets/document-icon.svg";

interface ProjectSidebarProps {
  items: string[];
  onItemClick: (item: string) => void;
  onAddItem: () => void;
  type: "table" | "collection";
  selectedItem: string | null;
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({
  items,
  onItemClick,
  onAddItem,
  type,
  selectedItem,
}) => {
  return (
    <div className="w-1/6 h-full text-white p-4">
      <h2 className="text-xl font-semibold mb-4">
        {type === "table" ? "Tables" : "Collections"}
      </h2>
      <hr className="border-gray-600 mb-4" />
      <button
        onClick={onAddItem}
        className="flex items-center text-gray-400 hover:text-white transition"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        Add {type === "table" ? "Table" : "Collection"}
      </button>
      <ul className="mt-6 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className={`cursor-pointer p-2 rounded flex items-center space-x-2 ${
              selectedItem === item
                ? "bg-[#EC4F9D] text-white"
                : "hover:bg-gray-700"
            }`}
            onClick={() => onItemClick(item)}
          >
            <img
              src={documentIcon}
              alt="Document Icon"
              className="w-4 h-4 text-gray-400"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectSidebar;
