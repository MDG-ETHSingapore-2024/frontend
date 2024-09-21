import axios from "axios";
import { addNewProject } from "@/utils/redux/project/project.slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BackendSdk } from "@/utils/services/backendSDK";
import { BASE_BACKEND_URL } from "@/utils/contants/appInfo";

const CreateProjectModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [databasePassword, setDatabasePassword] = useState("");
  const [chain, setChain] = useState<string>("Ethereum");
  const [type, setType] = useState<string>("Relational");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await BackendSdk.postData(
        `${BASE_BACKEND_URL}/projects`,
        {
          name,
          databasePassword,
          chain,
          type,
        }
      );

      dispatch(addNewProject(response.data));
      onClose();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-gradient-to-br from-white via-zinc-700 to-zinc-900 rounded-lg p-[1px] w-[60%]">
        <div className="bg-black p-8 rounded-lg min-w-full max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-white">
            CREATE A PROJECT
          </h2>
          <p className="text-gray-400 mb-6">
            Your project will have its own dedicated instance and full Postgres
            database. An API will be set up so you can easily interact with your
            new database.
          </p>
          <form onSubmit={handleSubmit} className="text-white space-y-10">
            <div className="mb-4 flex justify-between items-center">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 w-1/2"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-1/2 bg-[#251926]/50 text-white rounded px-3 py-4 outline-none"
                placeholder="Enter project name"
                required
              />
            </div>
            <div className="mb-4 flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium w-1/2 mb-1"
              >
                DATABASE PASSWORD
              </label>
              <input
                type="password"
                id="password"
                value={databasePassword}
                onChange={(e) => setDatabasePassword(e.target.value)}
                className="w-1/2 bg-[#251926]/50 text-white rounded px-3 py-4 outline-none"
                placeholder="Enter a strong password"
                required
              />
            </div>
            <div className="mb-4 flex justify-between items-center">
              <label
                htmlFor="chain"
                className="block text-sm font-medium w-1/2 mb-1"
              >
                CHAIN
              </label>
              <select
                id="chain"
                value={chain}
                onChange={(e) => setChain(e.target.value)}
                className="w-1/2 bg-[#251926]/50 text-white rounded px-3 py-4 outline-none"
              >
                <option value="Ethereum">Ethereum</option>
                <option value="Binance Smart Chain">Binance Smart Chain</option>
                <option value="Polygon">Polygon</option>
                <option value="Avalanche">Avalanche</option>
              </select>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <label
                htmlFor="type"
                className="block text-sm font-medium w-1/2 mb-1"
              >
                TYPE
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-1/2 bg-[#251926]/50 text-white rounded px-3 py-4 outline-none"
              >
                <option value="Relational">Relational</option>
                <option value="Document">Document</option>
                <option value="Graph">Graph</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#251926]/50 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
