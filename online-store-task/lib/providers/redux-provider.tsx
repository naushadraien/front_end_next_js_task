"use client";
import { store } from "@/lib/redux/store/store";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

interface ReduxProviderProps {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
