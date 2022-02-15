class Http {
  async get(user) {
    const response = await fetch(`https://api.github.com/users/${user}`);

    const responseData = await response.json();

    return responseData;
  };
};

export default Http;
