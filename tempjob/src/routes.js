/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  withTheme,
  useTheme,
  Title,
  Caption,
  IconButton,
} from 'react-native-paper';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';
import {Creators as UserActions} from './store/ducks/user';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import {AccountInfo, JobApplications, JobHistory} from './pages/Account';
import {AvailableJobs, JobPage} from './pages/JobsOpportunities';
import {Auth, Form, InitialScreen, ResetPassword} from './pages/Authentication';
import SplashScreen from './pages/SplashScreen';

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Vagas"
        onPress={() => navigation.navigate('Home')}
        focused={props?.state?.index === 0}
      />
      <DrawerItem
        label="Candidaturas em Andamento"
        onPress={() =>
          navigation.navigate('Account', {screen: 'JobApplications'})
        }
        focused={
          props?.state?.routes[props?.state?.index].params?.screen ===
          'JobApplications'
        }
      />
      <DrawerItem
        label="Histórico de Contratações"
        onPress={() => navigation.navigate('Account', {screen: 'JobHistory'})}
        focused={
          props?.state?.routes[props?.state?.index].params?.screen ===
          'JobHistory'
        }
      />
      <DrawerItem
        label="Minha Conta"
        onPress={() => navigation.navigate('Account', {screen: 'AccountInfo'})}
        focused={
          props?.state?.routes[props?.state?.index].params?.screen ===
          'AccountInfo'
        }
      />
      <DrawerItem
        label="Sair"
        onPress={async () => {
          dispatch(UserActions.userLogoutRequest());
          await AsyncStorage.removeItem('@tempjob_token');
          props.rootNavigation.replace('Auth');
        }}
      />
    </DrawerContentScrollView>
  );
}

function AppNavigator({theme}) {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      edgeWidth={Dimensions.get('window').width / 5}
      drawerPosition="right"
      initialRouteName="Home"
      drawerContent={(props) => (
        <CustomDrawerContent rootNavigation={navigation} {...props} />
      )}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{drawerLabel: 'Vagas'}}
      />
      <Drawer.Screen
        name="Account"
        component={AccountStack}
        options={{drawerLabel: 'Usuário'}}
      />
    </Drawer.Navigator>
  );
}

function HomeStack() {
  const {user} = useSelector((state) => state.user);
  const navigation = useNavigation();
  const {colors} = useTheme();
  const defaultScreenOption = {
    headerTitleAlign: 'center',
    headerTitleAllowFontScaling: true,
    headerBackAllowFontScaling: true,
    headerStyle: {
      height: 84,
      backgroundColor: colors.background,
    },
    headerLeftContainerStyle: {
      paddingTop: 10,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    headerTitleContainerStyle: {
      position: 'absolute',
      top: 10,
    },
    headerRightContainerStyle: {
      paddingTop: 2,
      paddingRight: 10,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    headerTitleStyle: {
      color: colors.primary,
    },
    headerBackTitleStyle: {
      color: colors.text,
    },
    headerTintColor: colors.text,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerTitle: () => (
      <>
        <Title>tempjob</Title>
        <Caption style={{textAlign: 'center'}}>{user?.name}</Caption>
      </>
    ),
    headerRight: () => (
      <IconButton icon="menu" onPress={() => navigation.toggleDrawer()} />
    ),
  };
  return (
    <Stack.Navigator
      headerMode="float"
      initialRouteName="AvailableJobs"
      screenOptions={{
        ...defaultScreenOption,
      }}>
      <Stack.Screen
        options={{
          title: 'tempjob',
        }}
        name="AvailableJobs"
        component={withTheme(AvailableJobs)}
      />
      <Stack.Screen
        options={{
          title: 'tempjob',
        }}
        name="JobDescription"
        component={withTheme(JobPage)}
      />
    </Stack.Navigator>
  );
}

function AccountStack() {
  const {user} = useSelector((state) => state.user);
  const navigation = useNavigation();
  const {colors} = useTheme();
  const defaultScreenOption = {
    headerTitleAlign: 'center',
    headerTitleAllowFontScaling: true,
    headerBackAllowFontScaling: true,
    headerStyle: {
      height: 84,
      backgroundColor: colors.background,
    },
    headerLeftContainerStyle: {
      paddingTop: 10,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    headerTitleContainerStyle: {
      position: 'absolute',
      top: 10,
    },
    headerRightContainerStyle: {
      paddingTop: 2,
      paddingRight: 10,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    headerTitleStyle: {
      color: colors.primary,
    },
    headerBackTitleStyle: {
      color: colors.text,
    },
    headerTintColor: colors.text,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerTitle: () => (
      <>
        <Title>tempjob</Title>
        <Caption style={{textAlign: 'center'}}>{user?.name}</Caption>
      </>
    ),
    headerRight: () => (
      <IconButton icon="menu" onPress={() => navigation.toggleDrawer()} />
    ),
  };
  return (
    <Stack.Navigator
      headerMode="float"
      initialRouteName="AccountInfo"
      screenOptions={{
        ...defaultScreenOption,
      }}>
      <Stack.Screen name="AccountInfo" component={withTheme(AccountInfo)} />
      <Stack.Screen
        name="JobApplications"
        component={withTheme(JobApplications)}
      />
      <Stack.Screen name="JobHistory" component={withTheme(JobHistory)} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  const {colors} = useTheme();
  const defaultScreenOption = {
    headerTitleAlign: 'center',
    headerTitleAllowFontScaling: true,
    headerBackAllowFontScaling: true,
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTitleStyle: {
      color: colors.primary,
    },
    headerBackTitleStyle: {
      color: colors.text,
    },
    headerTintColor: colors.text,
  };
  return (
    <Stack.Navigator
      headerMode="float"
      initialRouteName="InitialScreen"
      screenOptions={{
        ...defaultScreenOption,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="InitialScreen"
        component={InitialScreen}
      />
      <Stack.Screen
        options={{
          title: '',
        }}
        name="Auth"
        component={Auth}
      />
      <Stack.Screen
        options={{
          title: 'Cadastro',
        }}
        name="Form"
        component={Form}
      />
      <Stack.Screen
        options={{
          title: 'Recuperar Senha',
        }}
        name="ResetPassword"
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
}

function RootStack({isAuthenticated}) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        name="App"
        component={withTheme(AppNavigator)}
      />
    </Stack.Navigator>
  );
}

function Routes() {
  const {isAuthenticated} = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      <RootStack isAuthenticated={isAuthenticated} />
    </NavigationContainer>
  );
}

export default Routes;
