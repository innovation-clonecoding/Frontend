import { silentRefresh } from "api/userApi";
import useToken from "hooks/useToken";
import { useEffect } from "react";
import Router from "./shared/Router";

function App() {
  const token = useToken();
  useEffect(() => {
    if (token) {
      silentRefresh();
    }
  });
  return <Router />;
}

export default App;
