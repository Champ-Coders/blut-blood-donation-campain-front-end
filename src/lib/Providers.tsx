"use client";

import StyledComponentsRegistry from "./AntResistry";
import { ConfigProvider } from "antd";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ea062b",
            colorPrimaryBgHover: "#5371FF",
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
