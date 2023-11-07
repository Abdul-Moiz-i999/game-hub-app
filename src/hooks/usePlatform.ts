import useData from "./useData";
import { Platform } from "./useGames";
import platform from "../data/platform";

// const usePlatform = () => useData<Platform>("/platforms/lists/parents");
const usePlatform = () => ({ data: platform, isLoading: false, error: null });

export default usePlatform;
