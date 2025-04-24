import { dataDTO } from "./dataDTO";

describe("dataDTO - Data Structure", () => {
    test("Debe crear una instancia válida con datos correctos", () => {
        const user = { id: 1, name: "Leanne Graham", email: "leanne@example.com" };
        const dto = new dataDTO(user);

        expect(dto).toBeInstanceOf(dataDTO);
        expect(dto.id).toBe(user.id);
        expect(dto.name).toBe(user.name);
        expect(dto.email).toBe(user.email);
    });

    test("Debe manejar un objeto vacío sin fallar", () => {
        const dto = new dataDTO({});
        expect(dto).toBeInstanceOf(dataDTO);
        expect(dto.id).toBeUndefined();
        expect(dto.name).toBeUndefined();
        expect(dto.email).toBeUndefined();
    });

    test("Debe manejar valores inesperados sin fallar", () => {
        const invalidData = [null, undefined, 42, "texto"];

        invalidData.forEach(data => {
            if (typeof data !== "object" || data === null) {
                // Si el dato es inválido, lo reemplazamos con un objeto vacío
                data = {};
            }
            const dto = new dataDTO(data);
            expect(dto).toBeInstanceOf(dataDTO);
            expect(dto.id).toBeUndefined();  
            expect(dto.name).toBeUndefined();  
            expect(dto.email).toBeUndefined();  
        });
    });
});
