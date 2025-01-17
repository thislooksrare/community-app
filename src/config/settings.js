const dev = {
  apiHost: "https://api.21dao.xyz",
};

const prod = {
  apiHost: "https://api.21dao.xyz",
};

const config = process.env.REACT_APP_STAGE === "production" ? prod : dev;

export const apiHost = config.apiHost;
export const cdnUrl = "https://cache.21dao.xyz";
export const rpcHost = "https://ssc-dao.genesysgo.net/";
export const siteName = "LOOKS RARE";
