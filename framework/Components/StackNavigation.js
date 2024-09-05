
import { Welcome } from '../Screens/Welcome';
import { Start } from '../Screens/Start';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../Screens/Login';
import { ChangePasswordScreen } from '../Screens/Password';
import { SuccessScreen } from '../Screens/Allset';
import { DepositScreen } from '../Screens/DepositScreen';
import { TransactionHistoryScreen } from '../Screens/TransHistory';
import { NotificationsScreen } from '../Screens/NotificationScreen';
import { EnterOTPScreen } from '../Screens/OtpPassword';
import {PaymentMethodsScreen} from '../Screens/PaymentMethod';
import { AddNewCardScreen } from '../Screens/AddCard';
import { PersonalInfoScreen } from '../Screens/PersonalInfo';
import { AboutUs } from '../Screens/AboutUs';
import { TransactionHistoryScreenB } from '../Screens/TransHisB';

const Stack = createNativeStackNavigator();

export function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName='Start'>
            <Stack.Screen name='Start' component={Start} options={{ headerShown: false }} />
            <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name='EnterOTPScreen' component={EnterOTPScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ChangePasswordScreen' component={ChangePasswordScreen} options={{ headerShown: false }} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='SuccessScreen' component={SuccessScreen} options={{ headerShown: false }} />
            <Stack.Screen name='DepositsScreen' component={DepositScreen} options={{ headerShown: false }} />
            <Stack.Screen name='TransactionHistoryScreen' component={TransactionHistoryScreen} options={{ headerShown: false }} />
            <Stack.Screen name='NotificationScreen' component={NotificationsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='PaymentMethodsScreen' component={PaymentMethodsScreen} options={{ headerShown: false }} />
            <Stack.Screen name='AddNewCardScreen' component={AddNewCardScreen} options={{ headerShown: false }} />
            <Stack.Screen name='PersonalInfoScreen' component={PersonalInfoScreen} options={{ headerShown: false }} />
            <Stack.Screen name='AboutUs' component={AboutUs} options={{ headerShown: false }} />
            <Stack.Screen name='TransactionHistoryScreenB' component={TransactionHistoryScreenB} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}