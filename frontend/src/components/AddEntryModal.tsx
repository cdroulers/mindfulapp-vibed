import { Modal, Button, Group, Text, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface AddEntryModalProps {
  opened: boolean;
  onClose: () => void;
}

export function AddEntryModal({ opened, onClose }: AddEntryModalProps) {
  const { t } = useTranslation();

  return (
    <Modal opened={opened} onClose={onClose} title={t("journal.addEntry")} centered>
      <Stack>
        <Text>Add Entry Modal Content (to be implemented)</Text>
        <Group justify="flex-end">
          <Button variant="outline" onClick={onClose}>
            {t("common.cancel")}
          </Button>
          <Button onClick={onClose}>{t("common.save")}</Button>
        </Group>
      </Stack>
    </Modal>
  );
}
