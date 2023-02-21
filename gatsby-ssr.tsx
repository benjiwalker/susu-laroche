import React from "react";
import { MenuProvider } from "./src/contexts/MenuContext";
import Layout from "./src/components/Layout/Layout";

export const wrapRootElement = ({ element }) => {
  return <MenuProvider> {element}</MenuProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
