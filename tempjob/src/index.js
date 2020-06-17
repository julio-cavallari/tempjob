import React, {useState} from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import {StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {LightTheme} from './Themes';

import Routes from './routes';

function App() {
  moment.locale('pt-br');
  const [themeColors, setThemeColors] = useState(LightTheme);
  const theme = {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    colors: {
      ...DefaultTheme.colors,
      ...themeColors,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Routes />
    </PaperProvider>
  );
}

export default App;
