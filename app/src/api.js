import axios from "axios";
import { readString } from "react-papaparse";

export const getSheet = async () => {
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

export const getActiveProducts = async () => {
  let sheet = await getSheet();
  let filtered = await sheet
    .filter((product) => product.inativo !== true || product.inativo)
    .filter((product) => product.titulo && product.valor);

  console.log("Produtos Ativos", filtered);
  return filtered;
};

export const getCategories = async () => {
  let products = await getActiveProducts();
  let categories = [];
  let actualCategory = "";

  await products.map((item) => {
    if (
      actualCategory !== item.categoria &&
      (item.inativo === "FALSE" || !item.inativo) &&
      item.categoria &&
      item.categoria.length > 1
    ) {
      categories.push(item.categoria);
      actualCategory = item.categoria;
    }
    return true;
  });

  console.log("Categorias", categories);
  return categories;
};

export const getProdutcsByCategory = async (category) => {
  let categories = await getCategories();
};
