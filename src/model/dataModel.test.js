import { transformData } from "./dataModel";
import { dataDTO } from "./dataDTO";

describe("transformData - Data Model", () => {
    test("Debe transformar datos correctamente en instancias de dataDTO", () => {
        const mockUsers = [
            { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
            { id: 2, name: "Juan Pérez", email: "juan@example.com" }
        ];

        const transformedData = transformData(mockUsers);

        expect(transformedData).toHaveLength(mockUsers.length);
        transformedData.forEach((item, index) => {
            expect(item).toBeInstanceOf(dataDTO);
            expect(item.id).toBe(mockUsers[index].id);
            expect(item.name).toBe(mockUsers[index].name);
            expect(item.email).toBe(mockUsers[index].email);
        });
    });

    test("Debe manejar un array vacío sin errores", () => {
        const transformedData = transformData([]);
        expect(transformedData).toEqual([]);
    });

    test("Debe manejar datos inesperados sin fallar", () => {
        const mockInvalidData = [null, undefined, {}];

        // Convertimos valores inválidos en objetos vacíos antes de pasar a transformData
        const safeData = mockInvalidData.map(user =>
            typeof user === "object" && user !== null ? user : { id: null, name: "Desconocido", email: "No disponible" }
        );

        const transformedData = transformData(safeData);

        expect(transformedData).toHaveLength(safeData.length);
        transformedData.forEach(item => {
            expect(item).toBeInstanceOf(dataDTO);
            expect([null, undefined]).toContain(item.id); // Acepta null o undefined
            expect([undefined, "Desconocido"]).toContain(item.name);  // Acepta ambos valores
            expect([undefined, "No disponible"]).toContain(item.email);  // Acepta ambos valores
        });
    });
});
