import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card from './components/Card/Card';
function App() {
  return (
    <div>
      <main>
      <Stack spacing={2} justifyContent="center" alignItems="center" minHeight="100vh">
      <Card/>
    </Stack>

      </main>
    </div>
  );
}

export default App;
