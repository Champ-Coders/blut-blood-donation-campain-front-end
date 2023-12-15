"use client";

import StyledComponentsRegistry from "./AntResistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    // <Provider store={store}>
    // </Provider>
  );
};

export default Providers;
