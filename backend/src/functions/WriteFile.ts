import { writeFile } from "fs/promises";

const WriteFile = async (
  screenFilePath: string,
  content: string
): Promise<boolean> => {
  try {
    await writeFile(screenFilePath, content);
    return true;
  } catch (error) {
    return false;
  }
};

export default WriteFile;
