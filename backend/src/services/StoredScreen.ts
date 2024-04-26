import ReadFile from "../functions/ReadFile";
import WriteFile from "../functions/WriteFile";
import ScreenMap from "../models/ScreenMap";

const StoredScreen = () => {
  const screenFilePath = "src/storedScreens.json";

  const getStoredScreens = async (): Promise<ScreenMap[]> => {
    const content = await ReadFile(screenFilePath);
    if (content) {
      const parsedContent: ScreenMap[] = JSON.parse(content);
      return parsedContent;
    }
    return [];
  };

  const checkifScreenExists = async (screen: ScreenMap): Promise<boolean> => {
    const storedScreens = await getStoredScreens();
    const screenExists = storedScreens.some(
      (storedScreen) => storedScreen.ip === screen.ip
    );

    return screenExists;
  };

  const storeScreen = async (screen: ScreenMap): Promise<boolean> => {
    const screenExists = await checkifScreenExists(screen);
    if (!screenExists) {
      const storedScreens = await getStoredScreens();
      storedScreens.push(screen);

      return await WriteFile(screenFilePath, JSON.stringify(storedScreens));
    } else {
      removeScreen(screen.ip);
      return storeScreen(screen);
    }
  };

  const removeScreen = async (ip: string): Promise<boolean> => {
    const storedScreens = await getStoredScreens();
    const filteredScreens = storedScreens.filter((screen) => screen.ip !== ip);

    return await WriteFile(screenFilePath, JSON.stringify(filteredScreens));
  };

  return {
    getStoredScreens,
    checkifScreenExists,
    removeScreen,
    storeScreen,
  };
};

export default StoredScreen;
