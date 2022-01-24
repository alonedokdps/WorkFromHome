const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "2b071f55ecdcf2f72760c14222426803",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
