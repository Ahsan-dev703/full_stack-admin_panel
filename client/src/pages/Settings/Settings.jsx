import { useState } from "react";
import Card from "@/components/UI/Card/Card";
import SettingsSidebar from "./SettingsSidebar";
import GeneralSettings from "./GeneralSettings";
import SecuritySettings from "./SecuritySettings";
import SettingsFooter from "./SettingsFooter";
import styles from "./Settings.module.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>
          Manage your account preferences and system configuration.
        </p>
      </header>

      <div className={styles.layout}>
        <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />

        <main className={styles.content}>
          <Card className={styles.formCard}>
            {activeTab === "general" && <GeneralSettings />}
            {activeTab === "security" && <SecuritySettings />}

            {/* You can easily add AccountSettings and NotificationSettings here later */}

            <SettingsFooter
              isSaving={isSaving}
              showSuccess={showSuccess}
              onSave={handleSave}
            />
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Settings;
