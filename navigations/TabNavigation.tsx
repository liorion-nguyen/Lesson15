import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { Ionicons } from '@expo/vector-icons';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = '';
                    if (route.name == "Home") {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name == "Profile") {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name == "Search") {
                        iconName = focused ? 'search' : 'search-outline';
                    }
                    return <Ionicons name={iconName as any} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    );
}