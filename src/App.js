import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import routes from "./routes/app.routes";

const App = () => {
    const location = useLocation();
  
    const appRoutes = useRoutes(routes);  

    return (
        <div>
            <div className="container">
                {appRoutes}
            </div>
        </div>
    )

}
export default App
