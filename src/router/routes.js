import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import UserProfile from "@/pages/UserProfile.vue";
import TestPage from "@/pages/TestPage.vue"
import TestPage2 from "@/pages/TestPage2.vue"

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: UserProfile,
      },
      {
        path: "testPage",
        name: "test Page",
        component: TestPage,
      },
      {
        path: "testPage2",
        name: "test Page2",
        component: TestPage2,
      },
      // {
      //   path: "notifications",
      //   name: "notifications",
      //   component: Notifications,
      // },
      // {
      //   path: "icons",
      //   name: "icons",
      //   component: Icons,
      // },
      // {
      //   path: "maps",
      //   name: "maps",
      //   component: Maps,
      // },
      // {
      //   path: "typography",
      //   name: "typography",
      //   component: Typography,
      // },
      // {
      //   path: "table-list",
      //   name: "table-list",
      //   component: TableList,
      // },
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
