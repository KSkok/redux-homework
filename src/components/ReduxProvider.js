import React, { useState, useEffect } from "react";
import { ReduxContext } from "../context/ReduxContext";

export default function ReduxProvider({ store, children }) {
  const [appState, setAppState] = useState(store.getState());
  const dispatch = store.dispatch;

  useEffect(() => {
    store.subscribe(() => setAppState(store.getState()));
  }, [store]);

  return (
    <ReduxContext.Provider value={{ appState, dispatch }}>
      {children}
    </ReduxContext.Provider>
  );
}
