import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Detail from './pages/Detail';
import Points from './pages/Points';
import Home from './pages/Home';

const AppStack = createStackNavigator();  // ele que irá funcionar como roteamento da nossa aplicação


const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator 
            headerMode="none" 
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#f0f0f5'
                }
            }}
            >
                <AppStack.Screen name ="Home" component={Home} />
                <AppStack.Screen name ="Points" component={Points} />
                <AppStack.Screen name ="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;

