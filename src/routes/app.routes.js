import { Navigate } from 'react-router-dom';
import HomePage from '../pages/home';
import ReposPage from '../pages/repositories';
import AnalysisPage from '../pages/analysis';
import MainLayout from '../layout/MainLayout';

const routes = [{
    path: "/",
    element: <MainLayout />,
    children: [
        { path: "/", element: <Navigate to='/home' /> },
        { path: "/home", element: <HomePage /> },
        { path: "/repos", element: <ReposPage /> },
        { path: "/analysis", element: <AnalysisPage /> },
    ]
}]


export default routes;