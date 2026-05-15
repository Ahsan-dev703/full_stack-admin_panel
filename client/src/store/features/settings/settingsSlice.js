// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Thunk to simulate API saving
// export const saveSettings = createAsyncThunk(
//   "settings/save",
//   async (settingsData) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return settingsData;
//   },
// );

// const initialState = {
//   general: {
//     storeName: "Modern Store Admin",
//     storeEmail: "admin@store.com",
//     maintenanceMode: false,
//   },
//   security: {
//     twoFactor: true,
//   },
//   activeTab: "general",
//   isSaving: false,
//   showSuccess: false,
// };

// const settingsSlice = createSlice({
//   name: "settings",
//   initialState,
//   reducers: {
//     setTab: (state, action) => {
//       state.activeTab = action.payload;
//     },
//     updateGeneralField: (state, action) => {
//       state.general = { ...state.general, ...action.payload };
//     },
//     toggleMaintenance: (state) => {
//       state.general.maintenanceMode = !state.general.maintenanceMode;
//     },
//     toggle2FA: (state) => {
//       state.security.twoFactor = !state.security.twoFactor;
//     },
//     dismissSuccess: (state) => {
//       state.showSuccess = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(saveSettings.pending, (state) => {
//         state.isSaving = true;
//       })
//       .addCase(saveSettings.fulfilled, (state) => {
//         state.isSaving = false;
//         state.showSuccess = true;
//       });
//   },
// });

// export const {
//   setTab,
//   updateGeneralField,
//   toggleMaintenance,
//   toggle2FA,
//   dismissSuccess,
// } = settingsSlice.actions;
// export default settingsSlice.reducer;
