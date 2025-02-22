export const testHandler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "i chane it how are you",
    }),
  };

  return response;
};
