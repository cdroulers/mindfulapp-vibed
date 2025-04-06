import { useTranslation } from "react-i18next";
import { Select } from "@mantine/core";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { value: "en", label: "English" },
    { value: "fr", label: "Français" },
  ];

  const handleLanguageChange = (value: string | null) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <Select value={i18n.language} onChange={handleLanguageChange} data={languages} size="sm" />
  );
}
