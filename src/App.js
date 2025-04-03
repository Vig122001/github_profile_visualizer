import TopBar from "./components/TopBar";
import { useRoutes, useLocation, useRoutes }from "react-router-dom";
const routes = require("./routes/app.routes");

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const appRoutes = useRoutes(routes);  

    return (
        <div>
            <TopBar />
            <div className="container">
                {appRoutes}
            </div>
        </div>
    )

}
export default App
