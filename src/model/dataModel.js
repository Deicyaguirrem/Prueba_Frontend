import { dataDTO } from "./dataDTO";
console.log(dataDTO);
export const transformData = (data) => {
    return data.map(user => new dataDTO(user));
};