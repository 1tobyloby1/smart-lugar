import Icons from "shared/resources/Icons";

const path_folder = "/assets/icons/";

export const findIcon = (name: string) => {
  let icon = "air-conditioning";
  const formattedName = name.toLowerCase().replace(/ /g, "-");

  if (Icons.includes(formattedName)) {
    icon = formattedName;
  }

  return path_folder + icon + ".png";
};
