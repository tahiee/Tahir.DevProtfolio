import React, { useEffect, useState } from "react";
import RouterConfig from "./config/routes/RouterConfig";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Loading show={loading} />
      {!loading && <RouterConfig />}
    </>
  );
};

export default App;
