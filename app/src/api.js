import axios from "axios";
import { readString } from "react-papaparse";

export const getInfo = async () => {
  const sheetID = `1KD8ahmUMc1T8F6EYjTGj85QdsDewAixxw8nGbNz0m98`;
  const API_BASE = `https://docs.google.com/spreadsheets/d/${sheetID}/export?format=csv`;

  const req = await axios.get(API_BASE);

  const results = readString(req.data, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  });

  return results.data;
};

export const filteredNull = async () => {
  let sheet = await getInfo();
  let filtered = await sheet
    .filter((product) => product.inativo !== true || product.inativo)
    .filter((product) => product.titulo && product.valor);

  console.log(filtered);
  return filtered;
};
