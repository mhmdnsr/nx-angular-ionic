import { CapacitorConfig } from "@capacitor/cli";
import { address } from "ip";

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'angular-ionic-poc',
  webDir: "../../dist/apps/mobile/browser",
};

const serverConfig = {
  androidScheme: "https",
};

if (process.env.LIVE === "true") {
  const localIp = address();
  const port = process.env.PORT || "4200";
  config.server = {
    url: `http://${localIp}:${port}`,
    cleartext: true,
    ...serverConfig,
  };
} else {
  Reflect.deleteProperty(config, "server");
  config.server = serverConfig;
}

export default config;
