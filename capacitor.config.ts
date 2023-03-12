import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "Ariyibi.B",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    hostname: "localhost",
    androidScheme: "https",
    // url: "https://localhost/",
  },
};

export default config;
