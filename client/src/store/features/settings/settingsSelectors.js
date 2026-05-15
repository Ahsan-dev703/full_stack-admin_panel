import { createSelector } from "@reduxjs/toolkit";

const selectSettingsState = (state) => state.settings;

export const selectUserSettings = createSelector(
  [selectSettingsState],
  (settings) => settings,
);

export const selectNotificationSettings = createSelector(
  [selectSettingsState],
  (settings) => settings.notifications,
);

export const selectAccountPreferences = createSelector(
  [selectSettingsState],
  (settings) => settings.accountPreferences,
);
