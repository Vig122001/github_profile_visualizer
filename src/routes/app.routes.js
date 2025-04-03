import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../pages/home';
import ReposPage from '../pages/repositories';

const routes = [{
    path: "/",
    element: <MainLayout />,
    children: [
        { path: "/", element: <Navigate to='/menu' /> },
        { path: "/home", element: <HomePage /> },
        { path: "/repos", element: <ReposPage /> },
        { path: "/analysis", element: <AnalysisPage /> },
    ]
}]


export default routes;