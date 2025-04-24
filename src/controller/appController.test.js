import { getData } from "./appController";
import { fetchData } from "../service/apiService";
import { transformData } from "../model/dataModel";

jest.mock("../service/apiService", () => ({
    fetchData: jest.fn(),
}));

jest.mock("../model/dataModel", () => ({
    transformData: jest.fn(),
}));

describe("getData - App Controller", () => {
    test("Debe obtener y transformar datos correctamente", async () => {
        const mockRawData = [
            { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
            { id: 2, name: "Juan Pérez", email: "juan@example.com" }
        ];
        const mockTransformedData = [{ id: 1, name: "Leanne Graham" }, { id: 2, name: "Juan Pérez" }];

        fetchData.mockResolvedValue(mockRawData);
        transformData.mockReturnValue(mockTransformedData);

        const result = await getData();

        expect(fetchData).toHaveBeenCalledTimes(1);
        expect(transformData).toHaveBeenCalledWith(mockRawData);
        expect(result).toEqual(mockTransformedData);
    });

    test("Debe manejar errores en la API correctamente", async () => {
        fetchData.mockRejectedValue(new Error("Error en la API"));

        await expect(getData()).rejects.toThrow("Error en la API");
        expect(fetchData).toHaveBeenCalledTimes(1);
        expect(transformData).not.toHaveBeenCalled();
    });
});
