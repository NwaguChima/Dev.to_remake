import React, { createContext, useState } from "react";

type ViewContextProviderProps = {
  children: React.ReactNode;
};

type ViewContextType = {
  mobileView: boolean;
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewContext = createContext<ViewContextType | null>(null);

export const ViewContextProvider = ({ children }: ViewContextProviderProps) => {
  const [mobileView, setMobileView] = useState<boolean>(false);

  return (
    <ViewContext.Provider
      value={{
        mobileView,
        setMobileView,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContext;
