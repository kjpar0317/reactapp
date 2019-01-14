// @material-ui/icons
//import Dashboard from "@material-ui/icons/Dashboard";
//import Person from "@material-ui/icons/Person";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import MainPage from "views/demo/mainPage.jsx";

const mainRoutes = [
    {
        path: "/",
//      sidebarName: "Main",
//      navbarName: "Main",
//      icon: Dashboard,
        component: MainPage
    },
    /*
    {
        path: "/user",
        sidebarName: "User Profile",
        navbarName: "Profile",
        icon: Person,
        component: UserProfile
    },
    {
        path: "/table",
        sidebarName: "Table List",
        navbarName: "Table List",
        icon: "content_paste",
        component: TableList
    },
    {
        path: "/typography",
        sidebarName: "Typography",
        navbarName: "Typography",
        icon: LibraryBooks,
        component: Typography
    },
    {
        path: "/icons",
        sidebarName: "Icons",
        navbarName: "Icons",
        icon: BubbleChart,
        component: Icons
    },
    {
        path: "/maps",
        sidebarName: "Maps",
        navbarName: "Map",
        icon: LocationOn,
        component: Maps
    },
    {
        path: "/notifications",
        sidebarName: "Notifications",
        navbarName: "Notifications",
        icon: Notifications,
        component: NotificationsPage
    },
    {
        path: "/upgrade-to-pro",
        sidebarName: "Upgrade To PRO",
        navbarName: "Upgrade To PRO",
        icon: Unarchive,
        component: UpgradeToPro
    },
    */
  //  { redirect: true, path: "/", to: "/main", navbarName: "Redirect" }
];

export default mainRoutes;
