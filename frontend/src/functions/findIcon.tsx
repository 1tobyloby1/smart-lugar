import { icons } from "../resources/icons";

const path_folder = "/assets/icons/";

export const findIcon = (name: string) => {
  let icon = "air-condition";

  if (icons.includes(name)) {
    icon = name;
  }

  return path_folder + icon + ".png";
};
