import axios from "axios";

export const GetData = async (cityname) => {
  try {
    const {data} = await axios.get(
      `api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8e5981ec77f5a04c048a0626966435be`
    );
    return data;
  } catch (err) {
    throw err;
  }
};
