import { useState } from "react";
import { AppShell, ActionIcon, Group, useMantineColorScheme, Title, Button } from "@mantine/core";
import { IconSun, IconMoonStars, IconDeviceDesktop, IconPlus } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { HamburgerMenu } from "./HamburgerMenu";
import { AddEntryModal } from "./AddEntryModal";

export function AppContent() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  const [modalOpened, setModalOpened] = useState(false);

  const [explicitPreference, setExplicitPreference] = useState<"light" | "dark" | "auto">("auto");

  const handleToggle = () => {
    if (explicitPreference === "light") {
      setColorScheme("dark");
      setExplicitPreference("dark");
    } else if (explicitPreference === "dark") {
      clearColorScheme();
      setExplicitPreference("auto");
    } else {
      setColorScheme("light");
      setExplicitPreference("light");
    }
  };

  const Icon =
    explicitPreference === "light"
      ? IconMoonStars
      : explicitPreference === "dark"
        ? IconSun
        : IconDeviceDesktop;

  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header p="xs">
        <Group justify="space-between">
          <Group>
            <HamburgerMenu />
            <Title order={3}>
              <img src="/logo.png" alt={t("app.title")} width="30" height="30" /> {t("app.title")}
            </Title>
          </Group>
          <Group>
            <Button
              leftSection={<IconPlus size="1rem" />}
              onClick={() => setModalOpened(true)}
              data-testid="add-entry-button">
              {t("journal.addEntry")}
            </Button>
            <ActionIcon
              variant="default"
              onClick={handleToggle}
              size="lg"
              title={t("app.theme.toggle")}>
              <Icon size="1.2rem" data-testid={`theme-icon-${explicitPreference}`} />
            </ActionIcon>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>{t("app.content")}</AppShell.Main>

      <AddEntryModal opened={modalOpened} onClose={() => setModalOpened(false)} />
    </AppShell>
  );
}
