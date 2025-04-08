import { Modal, Button, Group, Text, Stack, SegmentedControl } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useForm } from "@mantine/form";
import { PrimaryMood } from "../shared/types/journal";

interface AddEntryModalProps {
  opened: boolean;
  onClose: () => void;
}

interface JournalEntryForm {
  primaryMood: PrimaryMood;
  secondaryMoods: string[];
  description: string;
  behavioralActivation: {
    text: string;
    timestamp: string;
    done: boolean;
  };
}

export function AddEntryModal({ opened, onClose }: AddEntryModalProps) {
  const { t } = useTranslation();

  const form = useForm<JournalEntryForm>({
    initialValues: {
      primaryMood: "neutral",
      secondaryMoods: [],
      description: "",
      behavioralActivation: {
        text: "",
        timestamp: "",
        done: false,
      },
    },
    validate: {
      primaryMood: (value) => (!value ? t("validation.required") : null),
      description: (value) => (!value ? t("validation.required") : null),
      behavioralActivation: {
        text: (value) => (!value ? t("validation.required") : null),
        timestamp: (value) => (!value ? t("validation.required") : null),
      },
    },
  });

  const handleSubmit = (values: JournalEntryForm) => {
    // TODO: Implement submission logic with PouchDB
    console.log("Form values:", values);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title={t("journal.addEntry")} centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Text fw={500}>{t("journal.primaryMood")}</Text>
          <SegmentedControl
            fullWidth
            data={[
              { label: t("journal.moods.good"), value: "good" },
              { label: t("journal.moods.neutral"), value: "neutral" },
              { label: t("journal.moods.bad"), value: "bad" },
            ]}
            {...form.getInputProps("primaryMood")}
          />
          <Group justify="flex-end">
            <Button variant="outline" onClick={onClose} type="button">
              {t("common.cancel")}
            </Button>
            <Button type="submit">{t("common.save")}</Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
