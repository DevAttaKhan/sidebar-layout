import React, { createContext, useContext, useState } from "react";

export interface IUIContext {
  setSideNaveCollapse: (value: boolean) => void;
  isSidenavCollapsed: boolean;
}

const UIContext = createContext<IUIContext | null>(null);

type Props = {
  children: React.ReactNode;
};

export const useUiContext = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error(
      "useEmployeesContext must be used inside the EmployeesProvider"
    );
  }
  return context;
};

export const UIContextProviders = ({ children }: Props) => {
  const [isSidenavCollapsed, setIsSidenavCollapsed] = useState(false);

  const value = {
    setSideNaveCollapse: setIsSidenavCollapsed,
    isSidenavCollapsed,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
