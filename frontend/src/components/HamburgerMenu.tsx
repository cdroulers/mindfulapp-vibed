import { useState } from "react";
import { Menu, ActionIcon, Group, Text, Stack } from "@mantine/core";
import { IconMenu2, IconLanguage } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function HamburgerMenu() {
  const [opened, setOpened] = useState(false);
  const { t } = useTranslation();

  return (
    <Menu opened={opened} onChange={setOpened} position="bottom-start">
      <Menu.Target>
        <ActionIcon variant="subtle" size="lg" aria-label="Open menu">
          <IconMenu2 size="1.2rem" />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Stack p="xs" gap="xs">
          <Group gap="xs">
            <IconLanguage size="1.2rem" />
            <Text size="sm">{t("common.language")}</Text>
          </Group>
          <LanguageSwitcher />
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
}
