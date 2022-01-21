var btc = document.getElementById("bitcoin");
var etu = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var setting = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};
$.ajax(setting).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  etu.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});
