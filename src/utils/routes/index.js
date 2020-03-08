import asyncComponent from "../AsyncComponent/AsyncComponent";

const Login = asyncComponent(() => import("../../core/Login"));
const Home = asyncComponent(() => import("../../core/Home"));

export const approutes = [
    {path: "/login", component: Login},
    {path: "/", component: Dashboard, component : Home},
]