exports.postRequestAPIHelper = async (url, authorizationToken, requestData) =>{
    try {
      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': authorizationToken
        },
        data: JSON.stringify(requestData)
      };
  
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw error;
    }
}


exports.getRequestAPIHelper = async (url="", authorizationToken="") => {
    try {
      const config = {
        method: 'get',
        url: url,
        headers: { 
          'Authorization': authorizationToken
        }
      };
  
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


