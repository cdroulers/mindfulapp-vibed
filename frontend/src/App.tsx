import React from 'react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { DatesProvider } from '@mantine/dates';
import 'dayjs/locale/en';

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
        primaryColor: 'blue',
      }}
    >
      <DatesProvider settings={{ locale: 'en' }}>
        <Notifications />
        <div>Daily Journal App</div>
      </DatesProvider>
    </MantineProvider>
  );
}

export default App; 