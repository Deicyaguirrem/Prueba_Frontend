import { fetchData } from "../service/apiService";
import { transformData } from "../model/dataModel";

export const getData = async () => {
    const rawData = await fetchData();
    return transformData(rawData);
};