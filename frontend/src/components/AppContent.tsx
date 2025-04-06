import { useState } from "react";
import { AppShell, ActionIcon, Group, useMantineColorScheme, Title } from "@mantine/core";
import { IconSun, IconMoonStars, IconDeviceDesktop } from "@tabler/icons-react";

export function AppContent() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

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
          <Title order={3}>
            <img src="/logo.png" alt="Mindful App" width="30" height="30" /> Mindful App
          </Title>
          <ActionIcon
            variant="default"
            onClick={handleToggle}
            size="lg"
            title="Toggle color scheme (Light/Dark/Auto)">
            <Icon size="1.2rem" data-testid={`theme-icon-${explicitPreference}`} />
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Main>App Content Area</AppShell.Main>
    </AppShell>
  );
}
