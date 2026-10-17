// app.js - Basic template (AppBar + Drawer)
import { runApp, Scaffold, colors } from 'flet-box';
import { AppBarComponent } from './components/layouts/AppBarComponent.js';
import { DrawerMenu } from './components/layouts/DrawerMenu.js';

// make sure to export all screens in screens/index.js for easier imports
import RootScreen from './screens/RootScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import AboutScreen from './screens/AboutScreen.js';

const routes = {
    '/': RootScreen,
    '/home': HomeScreen,
    '/about': AboutScreen
};

const MyApp = () => Scaffold({
    routes,
    appBar: AppBarComponent({ title: 'FletBox', isMobile: false }),
    drawer: DrawerMenu(),
    backgroundColor: colors.background
});

runApp(MyApp, 'root');
