import { fetchData } from "./apiService";

describe("fetchData - API Service", () => {
    beforeEach(() => {
        global.fetch = jest.fn();  // Simulamos `fetch()`
    });

    afterEach(() => {
        jest.restoreAllMocks();  // Restauramos `fetch()`
    });

    test("Debe obtener datos correctamente desde la API", async () => {
        const mockResponse = [
            { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
            { id: 2, name: "Juan Pérez", email: "juan@example.com" }
        ];

        global.fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockResponse),
        });

        const data = await fetchData();
        expect(data).toEqual(mockResponse);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users");
    });

    test("Debe manejar errores correctamente", async () => {
        global.fetch.mockResolvedValue({
            ok: false,
        });

        const data = await fetchData();
        expect(data).toEqual([]);  // Debe retornar un array vacío en caso de error
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    test("Debe manejar excepciones en la petición", async () => {
        global.fetch.mockRejectedValue(new Error("Error de red"));

        const data = await fetchData();
        expect(data).toEqual([]);  // También debe retornar un array vacío en caso de fallo total
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
});
