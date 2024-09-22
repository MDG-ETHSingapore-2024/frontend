import { useDispatch, useSelector } from "react-redux";
import {
  setColumnName,
  setColumnType,
  setIsPrimaryKey,
  setIsNullable,
  setIsUnique,
  setDefaultValue,
  setCheckConstraint,
  resetForm,
  setDescription,
} from "@/utils/redux/column/addColumn.slice";
import { RootState } from "@/utils/redux/store";
import { FormEvent } from "react";
import { BackendSdk } from "@/utils/services/backendSDK";
import { BASE_BACKEND_URL } from "@/utils/contants/appInfo";

const postgresTypes = [
  "int2",
  "int4",
  "int8",
  "float4",
  "float8",
  "numeric",
  "bool",
  "char",
  "varchar",
  "text",
  "date",
  "time",
  "timestamp",
  "interval",
  "uuid",
  "json",
  "jsonb",
];

export default function AddColumnComponent({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.addColumn);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically dispatch an action to add the column to the database
    await BackendSdk.putData(`${BASE_BACKEND_URL}/collection/attribute`, {
      collectionId: 123,
      type: state.columnType,
      name: state.columnName,
      default: state.defaultValue,
    });
    // dispatch()
    console.log("Column data:", state);
    dispatch(resetForm());
  };
  if (!isOpen) return;
  return (
    <div className="fixed right-0 inset-0 bg-black bg-opacity-50 flex justify-end backdrop-blur-sm">
      <div className="bg-gradient-to-br from-white via-zinc-700 to-zinc-900 rounded-lg p-[1px] h-full w-1/2">
        <div className="bg-black p-8 rounded-lg h-full space-y-5">
          <h2 className="text-2xl mb-4">
            Add new column to {state.selectedTable}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-full flex">
              <h1 className="w-2/5">GENERAL</h1>
              <div className="w-3/5">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    value={state.columnName}
                    onChange={(e) => dispatch(setColumnName(e.target.value))}
                    className="w-full p-2 bg-[#CC0495]/50 rounded"
                    placeholder="column_name"
                  />
                </div>
                <div>
                  <label className="block mb-1">Description (optional)</label>
                  <input
                    type="text"
                    value={state.description}
                    onChange={(e) => dispatch(setDescription(e.target.value))}
                    className="w-full p-2 bg-[#CC0495]/50 rounded"
                    placeholder="description"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <h1 className="w-2/5">Data Types</h1>
              <div className="w-3/5 flex flex-col justify-center gap-3">
                <div>
                  <label className="block mb-1">Type</label>
                  <select
                    value={state.columnType}
                    onChange={(e) => dispatch(setColumnType(e.target.value))}
                    className="w-full p-2 bg-[#CC0495]/50 rounded"
                  >
                    <option value="">Select a type</option>
                    {postgresTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-4">
                  <label>
                    <input
                      type="checkbox"
                      checked={state.isPrimaryKey}
                      onChange={(e) =>
                        dispatch(setIsPrimaryKey(e.target.checked))
                      }
                      className="mr-2"
                    />
                    Is Primary Key
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={state.isNullable}
                      onChange={(e) =>
                        dispatch(setIsNullable(e.target.checked))
                      }
                      className="mr-2"
                    />
                    Allow Nullable
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={state.isUnique}
                      onChange={(e) => dispatch(setIsUnique(e.target.checked))}
                      className="mr-2"
                    />
                    Is Unique
                  </label>
                </div>
                <div>
                  <label className="block mb-1">Default Value</label>
                  <input
                    type="text"
                    value={state.defaultValue}
                    onChange={(e) => dispatch(setDefaultValue(e.target.value))}
                    className="w-full p-2 bg-[#CC0495]/50 rounded"
                    placeholder="NULL"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <label className="block mb-1 w-2/5">CHECK Constraint</label>
              <input
                type="text"
                value={state.checkConstraint}
                onChange={(e) => dispatch(setCheckConstraint(e.target.value))}
                className="p-2 bg-[#CC0495]/50 rounded w-3/5"
                placeholder="e.g. length(column_name) < 500"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#CC0495]/50 text-white px-4 py-2 rounded hover:bg-gray-600"
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
}
