// @material-ui/icons
import BoardIcon from "@material-ui/icons/Dashboard";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// core components/views

import MainPage from "views/demo/mainPage.jsx";
import BigSchedulerPage from "views/demo/scheduler.jsx";

const mainRoutes = [
    {
        path: "/main",
        sidebarName: "Main",
        navbarName: "Main",
        icon: BoardIcon,
        component: MainPage
    },
    {
        path: "/scheduler",
        sidebarName: "Scheduler",
        navbarName: "Scheduler",
        icon: CalendarTodayIcon,
        component: BigSchedulerPage
    },
    { redirect: true, path: "/", to: "/main", navbarName: "Redirect" }
];

export default mainRoutes;
