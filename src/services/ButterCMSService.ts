import Butter from "buttercms";


export let butterService: any = undefined;
try {
    const apiKey = String(import.meta.env.VITE_APP_BUTTER_CMS_API_KEY);
    const preview = import.meta.env.VITE_APP_BUTTER_CMS_PREVIEW !== "false";
    butterService = Butter(apiKey, preview);
} catch (error) {
    console.error(error);
}

