import { TASK_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

import Task from "./pages/Task";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

export const authRoutes = [
    {
        path: TASK_ROUTE,
        Component: Task
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]

export const notFound = {
    path: '/*',
    Component: NotFound
}