import customsLogo from "@/assets/customs-logo.png";
import businessLogo from "@/assets/business-logo.png";
import logisticsLogo from "@/assets/logistics-logo.png";
import customsDarkLogo from "@/assets/customs-dark-logo.png";
import businessDarkLogo from "@/assets/business-dark-logo.png";
import logisticsDarkLogo from "@/assets/logistics-dark-logo.png";
import type { LoginService } from "../types/types";

export const loginServices: LoginService[] = [
  {
    id: "customs",
    label: "customs brokerage",
    logos: {
      light: customsLogo,
      dark: customsDarkLogo,
    },
    redirectTo: "dashboard/customs",
  },
  {
    id: "business",
    label: "global trade and business solutions corporations",
    logos: {
      light: businessLogo,
      dark: businessDarkLogo,
    },
    redirectTo: "dashboard/business",
  },
  {
    id: "logistics",
    label: "world wide logistics corporation",
    logos: {
      light: logisticsLogo,
      dark: logisticsDarkLogo,
    },
    redirectTo: "dashboard/logistics",
  },
];
