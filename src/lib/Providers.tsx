"use client";

import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AntResistry";
import { ConfigProvider } from "antd";
import store from "@/redux/app/store";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
        <Provider store={store}>{children}</Provider>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
