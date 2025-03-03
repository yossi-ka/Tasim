import React from "react";
import { ConfigProvider } from "antd";
import he_IL from "antd/lib/locale/he_IL";

function AntRtl() {
  return <ConfigProvider locale={he_IL} diraction="rtl" />;
}

export default AntRtl;
