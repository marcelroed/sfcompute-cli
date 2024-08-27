import createClient from "openapi-fetch";
import type { paths } from "./schema"; // generated by openapi-typescript
import { getAuthToken, loadConfig } from "./helpers/config";

export const apiClient = async () => {
  const config = await loadConfig();

  return createClient<paths>({
    baseUrl: config.api_url,
    headers: {
      Authorization: `Bearer ${await getAuthToken()}`,
    },
  });
};
