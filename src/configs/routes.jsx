import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';

const routerConfig = [
    {
        path: '/',
        element: <Home />,
    },
];

export const router = createBrowserRouter(routerConfig);
