import React, { useState, useEffect } from "react";
import ProjectSidebar from "./ProjectSidebar";
import CollectionView from "./CollectionView";
import SchemaView from "./SchemaView";
import CreateItemSidebar from "./CreateItemSidebar";
import editLogo from "@/assets/edit-logo.png";
import editIcon from "@/assets/edit-icon.svg";
import deleteIcon from "@/assets/delete-icon.svg";
import {
  dummyTables,
  dummyCollectionData,
  dummyCollections,
  dummySchemaAttributes,
} from "@/utils/dummyData";
import ShineBorder from "../magicui/shine-border";

interface ProjectPageProps {
  projectId: string;
  projectName: string;
  isRelational: boolean;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  projectId,
  projectName,
  isRelational,
}) => {
  const [sidebarItems, setSidebarItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"documents" | "attributes">(
    "documents"
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isRelational) {
      setSidebarItems(dummyTables);
    } else {
      setSidebarItems(dummyCollections);
    }
  }, [isRelational]);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const handleAddItem = () => {
    setIsSidebarOpen(true);
  };

  const handleCreateItem = (fields: { [key: string]: string }) => {
    const { name } = fields;
    setSidebarItems([...sidebarItems, name]);
    setSelectedItem(name);
  };

  const handleTabChange = (tab: "documents" | "attributes") => {
    setActiveTab(tab);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar for collections/tables */}
      <ProjectSidebar
        items={sidebarItems}
        selectedItem={selectedItem}
        onItemClick={handleItemClick}
        onAddItem={handleAddItem}
        type={isRelational ? "table" : "collection"}
      />

      <div className="flex-grow p-6">
        {/* Project Name and ID */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white">{projectName}</h1>
          <p className="text-xl text-gray-400 mt-1">Project ID: {projectId}</p>
        </div>

        {/* Tabs for Documents and Attributes */}
        {!isRelational && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-8">
              <button
                onClick={() => handleTabChange("documents")}
                className={`text-lg ${
                  activeTab === "documents" ? "text-white" : "text-gray-400"
                }`}
              >
                Documents
              </button>
              <button
                onClick={() => handleTabChange("attributes")}
                className={`text-lg ${
                  activeTab === "attributes" ? "text-white" : "text-gray-400"
                }`}
              >
                Attributes
              </button>
            </div>
            <button
              onClick={handleAddItem}
              className="h-[40px] bg-[#DB1A5A] text-white px-[13px] py-[4px] flex items-center gap-2 rounded hover:opacity-90"
            >
              <svg
                className="w-5 h-5"
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
              {activeTab === "documents" ? "Add Document" : "Add Attribute"}
            </button>
          </div>
        )}

        {/* View for documents or attributes */}
        {selectedItem ? (
          <ShineBorder
            borderRadius={8}
            borderWidth={2}
            color={["#EC4F9D", "#DB1A5A"]}
            className="w-full flex flex-col"
          >
            <div className="w-full bg-transparent border-none rounded overflow-hidden">
              {activeTab === "documents" ? (
                <CollectionView
                  documents={dummyCollectionData[selectedItem] || []}
                  onAddDocument={() => console.log("Add Document")}
                  onDeleteDocument={(docId) =>
                    console.log("Delete Document", docId)
                  }
                  onEditDocument={(docId) =>
                    console.log("Edit Document", docId)
                  }
                  enableCheckboxes={true}
                  actionIcons={{
                    editIcon,
                    deleteIcon,
                  }}
                />
              ) : (
                <SchemaView
                  schemaAttributes={dummySchemaAttributes || []}
                  onAddAttribute={() => console.log("Add Attribute")}
                  onDeleteAttribute={(attr) =>
                    console.log("Delete Attribute", attr)
                  }
                  onEditAttribute={(attr) =>
                    console.log("Edit Attribute", attr)
                  }
                  enableCheckboxes={true}
                />
              )}
            </div>
          </ShineBorder>
        ) : (
          <ShineBorder
            borderRadius={8}
            borderWidth={2}
            color={["#EC4F9D", "#DB1A5A"]}
            className="w-full h-full p-0"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={editLogo}
                alt="Empty State"
                className="w-80 h-80 mb-4"
              />
              <p className="text-white text-lg mb-4">
                Create a collection to get started
              </p>
              <button
                onClick={handleAddItem}
                className="bg-transparent border border-white text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
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
                Create Collection
              </button>
            </div>
          </ShineBorder>
        )}
      </div>

      {/* Create Item Sidebar */}
      <CreateItemSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        type={activeTab === "documents" ? "document" : "attribute"}
        collectionAttributes={dummySchemaAttributes.map((attr) => attr.name)} // For documents/rows
        onCreate={handleCreateItem}
      />
    </div>
  );
};

export default ProjectPage;
