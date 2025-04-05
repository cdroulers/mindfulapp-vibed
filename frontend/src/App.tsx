import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/en";

import { AppContent } from "./components/AppContent";

function App() {
  return (
    <MantineProvider defaultColorScheme="auto" theme={{ primaryColor: "blue" }}>
      <DatesProvider settings={{ locale: "en" }}>
        <Notifications />
        <AppContent />
      </DatesProvider>
    </MantineProvider>
  );
}

export default App;
