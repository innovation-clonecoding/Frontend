import { silentRefresh, userApis } from "api/userApi";
import { useEffect } from "react";
import Router from "./shared/Router";

function App() {
  useEffect(() => {
    silentRefresh();
  });
  return <Router />;
}

export default App;
