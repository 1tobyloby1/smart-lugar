import { readFileSync } from "fs";

const ReadFile = async (path: string): Promise<string | null> => {
  try {
    const content = readFileSync(path);
    return content.toString();
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    return "";
  }
};

export default ReadFile;
