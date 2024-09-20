import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSchema: "sample schema",
  selectedTable: "acha table",
  columnName: "",
  columnType: "",
  description: "",
  isPrimaryKey: false,
  isNullable: true,
  isUnique: false,
  defaultValue: "NULL",
  checkConstraint: "",
};

const addColumnSlice = createSlice({
  name: "addColumn",
  initialState,
  reducers: {
    setSelectedSchema: (state, action) => {
      state.selectedSchema = action.payload;
    },
    setSelectedTable: (state, action) => {
      state.selectedTable = action.payload;
    },
    setColumnName: (state, action) => {
      state.columnName = action.payload;
    },
    setColumnType: (state, action) => {
      state.columnType = action.payload;
    },
    setIsPrimaryKey: (state, action) => {
      state.isPrimaryKey = action.payload;
    },
    setIsNullable: (state, action) => {
      state.isNullable = action.payload;
    },
    setIsUnique: (state, action) => {
      state.isUnique = action.payload;
    },
    setDefaultValue: (state, action) => {
      state.defaultValue = action.payload;
    },
    setCheckConstraint: (state, action) => {
      state.checkConstraint = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const {
  setSelectedSchema,
  setSelectedTable,
  setColumnName,
  setColumnType,
  setIsPrimaryKey,
  setIsNullable,
  setIsUnique,
  setDefaultValue,
  setCheckConstraint,
  resetForm,
  setDescription,
} = addColumnSlice.actions;

export default addColumnSlice.reducer;
