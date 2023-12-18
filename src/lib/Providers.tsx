"use client";

import StyledComponentsRegistry from "./AntResistry";
import { ConfigProvider } from "antd";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "red",
           
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyledComponentsRegistry>
    // <Provider store={store}>
    // </Provider>
  );
};

export default Providers;
