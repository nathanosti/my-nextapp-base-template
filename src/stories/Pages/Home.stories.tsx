import React from "react";
import { ComponentMeta } from "@storybook/react";

import Home from "../../pages/index";

export default {
  name: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

export const HomePage = () => <Home />;
