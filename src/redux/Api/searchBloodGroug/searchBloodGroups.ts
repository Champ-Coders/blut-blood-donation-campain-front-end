import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IDistrict {
  id: string;
  name: string;
}

export interface ISearchPersonData {
  name: string;
  bloodGroup: string;
  area: string;
  district: IDistrict;
}

const initialState: ISearchPersonData = {
  name: "",
  bloodGroup: "",
  area: "",
  district: {
    id: "",
    name: "",
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // search data by ISearchPersonData
    searchData: (state, action: PayloadAction<ISearchPersonData>) => {
      state.name = action.payload.name;
      state.bloodGroup = action.payload.bloodGroup;
      state.area = action.payload.area;
      state.district = action.payload.district;
    },

    // remove
    removeSearchData: (state) => {
      state.name = "";
      state.bloodGroup = "";
      state.area = "";
      state.district = {
        id: "",
        name: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeSearchData, searchData } = searchSlice.actions;

export default searchSlice.reducer;
