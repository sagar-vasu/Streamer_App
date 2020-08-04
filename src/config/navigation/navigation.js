import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  SignupScreen,
  HomeScreen,
  TopVideoScreen,
  BecomeFamousScreen,
  ChooseSetting,
  SeeVision,
  CreateProfile,
} from "../../screens";

import { Menu } from "../../components";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// HomeScreen

function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

function BecomeFamousScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BecomeFamous"
        options={{
          headerShown: false,
        }}
        component={BecomeFamousScreen}
      />
    </Stack.Navigator>
  );
}

function TopVideoScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopVideo"
        options={{
          headerShown: false,
        }}
        component={TopVideoScreen}
      />
    </Stack.Navigator>
  );
}

function CreateProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateProfile"
        options={{
          headerShown: false,
        }}
        component={CreateProfile}
      />
    </Stack.Navigator>
  );
}

function DetailStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Detail"
        options={{
          headerShown: false,
        }}
        component={SeeVision}
      />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      drawerContent={(props) => <Menu {...props} />}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreenStack} />
      <Drawer.Screen name="TopVideo" component={TopVideoScreenStack} />
      <Drawer.Screen name="BecomeFamous" component={BecomeFamousScreenStack} />
      <Drawer.Screen name="CreateProfile" component={CreateProfileStack} />
      <Drawer.Screen name="Detail" component={DetailStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignupScreen"
          component={SignupScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={MyDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
