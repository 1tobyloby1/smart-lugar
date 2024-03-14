import Icons from "shared/resources/Icons"

const path_folder = "/assets/icons/";

export const findIcon = (name: string) => {
  let icon = "air-condition";

  if (Icons.includes(name)) {
    icon = name;
  }

  return path_folder + icon + ".png";
};
