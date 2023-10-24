import { NavigationContainer } from "@react-navigation/native"; //aquí se ponen las pantallas en las que queremos navegar
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";//nos permite tener las tab
import { Ionicons } from '@expo/vector-icons'; 
import Feed from "./screens/tabScreens/Feed";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TweetDetailsScreen from "./screens/homeStack/TweetDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Payments from "./screens/Drawer/Payments";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//TopTab
const TopTab = createMaterialTopTabNavigator();

const TopTabGroup = () => {

    return (

        <TopTab.Navigator>

            <TopTab.Screen name="Main" component={Feed}/>
            <TopTab.Screen name="Following" component={Payments}/>
            <TopTab.Screen name="Emoji" component={Payments}/>

        </TopTab.Navigator>

    );

}

//Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup(){

    return (

        <Drawer.Navigator>

            <Drawer.Screen name="StackGroup" component={StackGroup}/>
            <Drawer.Screen name="Payments" component={Payments}/>

        </Drawer.Navigator>

    )

}

//Stack
const Stack = createNativeStackNavigator(); 

function StackGroup(){

    return (

        <Stack.Navigator>

            <Stack.Screen name='FeedMain' component={TabGroup} options={{headerShown: false}}/>
            <Stack.Screen 
                name='TweetDetailsScreen'
                component={TweetDetailsScreen}
                options={{
                    presentation: 'modal',
                    headerTitle: 'SIUUUU'
                }}
            />

        </Stack.Navigator>

    )

}

//Tab
const Tab = createBottomTabNavigator();

const TabGroup = () => {

    return (

        <Tab.Navigator
            screenOptions={({route}) => ({

                tabBarIcon: ({color, focused, size }) => {

                    let iconName;

                    if(route.name == "Feed"){
                        iconName = focused ?  'home' : 'home-outline';
                    }else if(route.name == "Settings"){
                        iconName = focused ? 'settings' : 'ios-settings-sharp';
                    }else if(route.name == "Notifications"){
                        iconName = focused ? 'ios-notifications' : 'notifications-outline';
                    }

                    return <Ionicons name={iconName} color={color} size={size} /> 

                }

            })}    
        >
            <Tab.Screen name="Feed" component={TopTabGroup}/>
            <Tab.Screen name="Notifications" component={Notifications}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>

    )

}

export default function Navigation(){

    return (

        <NavigationContainer>

            <DrawerGroup/>

        </NavigationContainer>

    )

}