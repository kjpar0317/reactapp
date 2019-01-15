// @material-ui/icons
import BoardIcon from "@material-ui/icons/Dashboard";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// core components/views

import MainPage from "views/demo/mainPage.jsx";
import BigSchedulerPage from "views/demo/scheduler.jsx";

const mainRoutes = [
    {
        path: "/scheduler",
        sidebarName: "Scheduler",
        navbarName: "Scheduler",
        icon: CalendarTodayIcon,
        component: BigSchedulerPage
    },
    {
      path: "/",
      sidebarName: "Main",
      navbarName: "Main",
      icon: BoardIcon,
      component: MainPage
    },
    //  { redirect: true, path: "/", to: "/main", navbarName: "Redirect" }
];

export default mainRoutes;
