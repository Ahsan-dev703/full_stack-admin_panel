import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@/components/UI/Card/Card";
import SettingsSidebar from "./SettingsSidebar";
import GeneralSettings from "./GeneralSettings";
import SecuritySettings from "./SecuritySettings";
import AccountSettings from "./AccountSettings";
import NotificationSettings from "./NotificationSettings";
import SettingsFooter from "./SettingsFooter";
import { selectCurrentUser } from "@/store/features/auth/authSelectors";
import { selectUserSettings } from "@/store/features/settings/settingsSelectors";
import { selectTheme } from "@/store/features/theme/themeSelectors";
import { updateProfile } from "@/store/features/auth/authSlice";
import {
  updateNotificationSettings,
  updateAccountPreferences,
  resetSettings,
  saveSettings,
} from "@/store/features/settings/settingsSlice";
import { setTheme } from "@/store/features/theme/themeSlice";
import Loader from "@/components/UI/Loader/Loader";
import styles from "./Settings.module.css";

const Settings = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("general");
  const [profileState, setProfileState] = useState({
    name: "",
    email: "",
    role: "",
    avatar: "",
  });
  const [accountPreferences, setAccountPreferences] = useState({
    language: "English",
    timezone: "UTC",
    weeklySummary: true,
  });
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [themeMode, setThemeMode] = useState("light");

  const user = useSelector(selectCurrentUser);
  const settings = useSelector(selectUserSettings);
  const currentTheme = useSelector(selectTheme);
  const { loading } = useSelector((state) => state.auth || { loading: false });
  const { isSaving, showSuccess } = settings || {
    isSaving: false,
    showSuccess: false,
  };

  useEffect(() => {
    if (user) {
      setProfileState({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "",
        avatar: user.avatar || "",
      });
    }
  }, [user]);

  useEffect(() => {
    if (settings) {
      setNotificationSettings(settings.notifications);
      setAccountPreferences(settings.accountPreferences);
    }
  }, [settings]);

  useEffect(() => {
    setThemeMode(currentTheme || "light");
  }, [currentTheme]);

  if (loading) {
    return <Loader fullScreen text="Loading settings..." />;
  }

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfileState((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreferencesChange = (event) => {
    const { name, value } = event.target;
    setAccountPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationToggle = (field, value) => {
    setNotificationSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleThemeChange = (event) => {
    setThemeMode(event.target.value);
  };

  const validateProfile = () => {
    return (
      profileState.name.trim() && /\\S+@\\S+\\.\\S+/.test(profileState.email)
    );
  };

  const handleSave = async () => {
    if (!validateProfile()) {
      alert("Please enter a valid name and email address.");
      return;
    }

    dispatch(
      updateProfile({
        name: profileState.name.trim(),
        email: profileState.email.trim(),
        avatar: profileState.avatar.trim(),
      }),
    );

    dispatch(updateNotificationSettings(notificationSettings));
    dispatch(updateAccountPreferences(accountPreferences));
    dispatch(setTheme(themeMode));

    await dispatch(saveSettings());
  };

  const handleReset = () => {
    dispatch(resetSettings());
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>
          Manage your account preferences, theme, and notification settings.
        </p>
      </header>

      <div className={styles.layout}>
        <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />

        <main className={styles.content}>
          <Card className={styles.formCard}>
            {activeTab === "general" && (
              <GeneralSettings
                profileState={profileState}
                onProfileChange={handleProfileChange}
                themeMode={themeMode}
                onThemeChange={handleThemeChange}
              />
            )}
            {activeTab === "account" && (
              <AccountSettings
                preferences={accountPreferences}
                onChange={handlePreferencesChange}
              />
            )}
            {activeTab === "notifications" && (
              <NotificationSettings
                notifications={notificationSettings}
                onToggle={handleNotificationToggle}
              />
            )}
            {activeTab === "security" && <SecuritySettings />}

            <SettingsFooter
              isSaving={isSaving}
              showSuccess={showSuccess}
              onSave={handleSave}
              onReset={handleReset}
            />
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Settings;
