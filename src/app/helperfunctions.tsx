const axios = require("axios");
const UAParser = require("ua-parser-js");

const getUserAgentInfo = () => {
  const userAgent = window.navigator.userAgent;
  const parser = new UAParser();
  const result = parser.setUA(userAgent).getResult();

  // Extracted information
  const browserName = result.browser.name;
  const browserVersion = result.browser.version;
  const osName = result.os.name;
  const osVersion = result.os.version;

  // Create a custom user agent string
  const customUserAgent = `${browserName} ${browserVersion}; ${osName} ${osVersion}`;

  return customUserAgent;
};

export const postRequestAPIHelper = async (
  url,
  authorizationToken,
  requestData
) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authorizationToken,
        // 'User-Agent': getUserAgentInfo(),
      },
      data: requestData,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getRequestAPIHelper = async (url, authorizationToken) => {
  // const userAgentInfo = getUserAgentInfo();                                                                                                                                                                                                                                                                                                                                    )
  try {
    const config = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authorizationToken,
        // 'User-Agent': JSON.stringify(userAgentInfo),
      },
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
