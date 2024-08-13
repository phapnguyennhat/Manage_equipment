// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { isElementOfType } from "react-dom/test-utils";
// import instance from "~/config/axiosConfig";

// const initialState = {
//   count: 1,
//   listEquip: [],
//   isLoading: false,
//   isError: false,
// };

// export const fetchAllEquip = createAsyncThunk(
//   "equip/fetchAllEquip",
//   async (param) => {
//     if (!param.page) param.page = 1;
//     let url = `equipment?page=${param.page}`;
//     if (param.status) url = url + `&status=${param.status}`;
//     if (param.cate) url = url + `&cate=${param.cate}`;
//     if (param.timefrom) url = url + `&timefrom=${param.timefrom}`;
//     if (param.timeto) url = url + `&timeto=${param.timeto}`;
//     console.log(url);
//     const response = await instance.get(url);
//     return response.data;
//   },
// );

// export const deleteEquip = createAsyncThunk("equip/delete", async (equipId) => {
//   const res = await instance.delete(`equipment/${equipId}`);
//   return res;
// });

// export const equipSlice = createSlice({
//   name: "equipment",
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllEquip.pending, (state, action) => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(fetchAllEquip.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.count = action.payload.count;
//         state.listEquip = action.payload.data;
//       })
//       .addCase(fetchAllEquip.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         console.log(action.error);
//       })
//       .addCase(deleteEquip.fulfilled, (state, action) => {});
//   },
// });

// export default equipSlice.reducer;
