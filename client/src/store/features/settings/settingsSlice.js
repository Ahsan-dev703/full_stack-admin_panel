import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "@/utils/storage";

const SETTINGS_STORAGE_KEY = "dashboard_settings_state";

const defaultState = {
  notifications: {
    email: true,
    sms: false,
    push: true,
  },
  accountPreferences: {
    language: "English",
    timezone: "UTC",
    weeklySummary: true,
  },
  isSaving: false,
  showSuccess: false,
};

const persistedSettings = loadState(SETTINGS_STORAGE_KEY);

export const saveSettings = createAsyncThunk(
  "settings/saveSettings",
  async (_, { getState }) => {
    const settingsState = getState().settings;
    await new Promise((resolve) => setTimeout(resolve, 600));
    saveState(SETTINGS_STORAGE_KEY, settingsState);
    return settingsState;
  },
);

const settingsSlice = createSlice({
  name: "settings",
  initialState: persistedSettings || defaultState,
  reducers: {
    updateNotificationSettings: (state, action) => {
      state.notifications = { ...state.notifications, ...action.payload };
      saveState(SETTINGS_STORAGE_KEY, state);
    },
    updateAccountPreferences: (state, action) => {
      state.accountPreferences = {
        ...state.accountPreferences,
        ...action.payload,
      };
      saveState(SETTINGS_STORAGE_KEY, state);
    },
    resetSettings: (state) => {
      Object.assign(state, defaultState);
      saveState(SETTINGS_STORAGE_KEY, state);
    },
    dismissSuccess: (state) => {
      state.showSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveSettings.pending, (state) => {
        state.isSaving = true;
        state.showSuccess = false;
      })
      .addCase(saveSettings.fulfilled, (state) => {
        state.isSaving = false;
        state.showSuccess = true;
      })
      .addCase(saveSettings.rejected, (state) => {
        state.isSaving = false;
      });
  },
});

export const {
  updateTheme,
  updateNotificationSettings,
  updateAccountPreferences,
  resetSettings,
  dismissSuccess,
} = settingsSlice.actions;

export default settingsSlice.reducer;
