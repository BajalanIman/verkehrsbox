import { createWebHistory, createRouter ,createWebHashHistory } from "vue-router";

import login from "@/views/login.vue";
import About from "@/views/About-vue.vue";
import Home from "@/views/Home-vue.vue";
import Dashboard from "@/views/Dashboard-Page.vue";
import Tasks from "@/views/Tasks-vue.vue";
import RecordTime from "@/views/RecordTime-vue.vue";
import TimeScanner from "@/views/TimeScanner-vue.vue";
import MeterReading from "@/views/MeterReading-vue.vue";
import CreateTask from "@/views/CreateTask-vue.vue";
import DocCreator from "@/views/DocCreator-vue.vue";
import MainDashboard from "@/views/MainDashboard-Vue.vue";
import Recordings from "@/views/Recording-side.vue";
import AllOrders from "@/views/All-Orders-side.vue";

const routes = [
  { path: "/", name: "login-vue", component: login },
  { path: "/home", name: "Home-vue", component: Home },
  { path: "/about", name: "About-vue", component: About },
  {
    path: "/dashboard",
    name: "Dashboard-Page",
    component: Dashboard,

    children: [
      { path: "main-dashboard", component: MainDashboard },
      { path: "tasks", component: Tasks },
      { path: "recordTime", component: RecordTime },
      { path: "timeScanner", component: TimeScanner },
      { path: "meterReading", component: MeterReading },
      { path: "createTask", component: CreateTask },
      { path: "docCreator", component: DocCreator },
      { path: "recordings", component: Recordings },
      { path: "allOrders", component: AllOrders },
    ],
  },
  /*   { path: "/Tasks", name: "Tasks-vue", component: Tasks },
  { path: "/RecordTime", name: "RecordTime-vue", component: RecordTime },
  { path: "/TimeScanner", name: "TimeScanner-vue", component: TimeScanner },
  { path: "/MeterReading", name: "MeterReading-vue", component: MeterReading },
  { path: "/CreateTask", name: "CreateTask-vue", component: CreateTask },
  { path: "/DocCreator", name: "DocCreator-vue", component: DocCreator }, */
];

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
  routes,
});
export default router;
