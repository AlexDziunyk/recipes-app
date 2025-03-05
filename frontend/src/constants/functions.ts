import { filtersObj } from "./objects";

export const formatParamsToString = ({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) => {
  let paramsString = "";

  for (const key in params) {
    if (key in filtersObj) {
      const tempStr = `${filtersObj[key]}=${params[key]} `;
      paramsString += tempStr;
    }
  }

  return paramsString;
};

export const formatParamsToRequest = ({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) => {
  let requestString: string = "";

  const objkeys = Object.keys(params);

  for (let i = 0; i < objkeys.length; i++) {
    const key = objkeys[i];
    if (i === 0) {
      requestString += `?${key}=${params[key]}`;
      continue;
    }
    requestString += `&${key}=${params[key]}`;
  }

  return requestString;
};

export const getIngredients = (data: {[key: string]: string | null}) => {
  const ingredientsArr: string[] = [];

  for (const key in data) {
    if (key.includes("strIngredient") && data[key]) {
      const formatIngredient = data[key].replace(" ", "_");
      ingredientsArr.push(formatIngredient);
    }
  }

  return ingredientsArr;
};
