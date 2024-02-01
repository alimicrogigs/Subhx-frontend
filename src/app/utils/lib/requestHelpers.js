const axios = require('axios');
const UAParser = require('ua-parser-js');

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

exports.postRequestAPIHelper = async (url, authorizationToken, requestData) => {
  try {
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Content-Type': 'application/json',
<<<<<<< HEAD
        'Authorization': 'Bearer ' + authorizationToken,
        'User-Agent': getUserAgentInfo(),
=======
        'Authorization': 'Bearer '+authorizationToken,
        // 'User-Agent': getUserAgentInfo(),
>>>>>>> a25303134637797efea753a005790913f34dea8b
      },
      data: (requestData)
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    return error;
  }
}


exports.getRequestAPIHelper = async (url, authorizationToken) => {
<<<<<<< HEAD
 
=======
  // const userAgentInfo = getUserAgentInfo();                                                                                                                                                                                                                                                                                                                                    )
>>>>>>> a25303134637797efea753a005790913f34dea8b
    try {
      const config = {
        method: 'get',
        url: url,
        headers: { 
<<<<<<< HEAD
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer ' + authorizationToken,
          'User-Agent': getUserAgentInfo(),
=======
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+authorizationToken, 
          // 'User-Agent': JSON.stringify(userAgentInfo),
>>>>>>> a25303134637797efea753a005790913f34dea8b
        }
      };
  
      const response = await axios.request(config)
      return response.data;
    } catch (error) {
      throw error;
    }
};


