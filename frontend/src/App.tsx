import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/en";

function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: "blue",
      }}>
      <DatesProvider settings={{ locale: "en" }}>
        <Notifications />
        <div>Daily Journal App</div>
      </DatesProvider>
    </MantineProvider>
  );
}

export default App;
