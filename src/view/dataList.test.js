import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import DataList from "./dataList";

// Datos simulados para pruebas
const mockUsers = [
    { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
    { id: 2, name: "Juan Pérez", email: "juan@example.com" }
];

describe("DataList Component", () => {
    test("Renderiza correctamente el título", () => {
        render(<DataList />);
        expect(screen.getByText("Lista de Usuarios")).toBeInTheDocument();
    });

    test("Filtra usuarios correctamente", async () => {
        render(<DataList />);

        // Simular búsqueda en el input
        const input = screen.getByPlaceholderText("Buscar usuario...");
        fireEvent.change(input, { target: { value: "Leanne" } });

        // Esperar que el usuario filtrado aparezca en la pantalla
        await waitFor(() => {
            expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
        });
    });

    test("Abre y cierra el modal correctamente", async () => {
        const mockUsers = [{ id: 1, name: "Leanne Graham" }, { id: 2, name: "Juan" }];
        render(<DataList users={mockUsers} />);  // Pasamos los datos manualmente
    
        // Esperar que los datos aparezcan en la tabla antes de interactuar
        await waitFor(() => expect(screen.getByText("Leanne Graham")).toBeInTheDocument());
    
        // Simular clic en el usuario para abrir el modal
        const userElement = screen.getByText("Leanne Graham");
        fireEvent.click(userElement);
    
        // Verificar que el modal se muestra con información correcta
        expect(screen.getByText("Detalles de Leanne Graham")).toBeInTheDocument();
    
        // Simular clic en el botón cerrar
        const closeButton = screen.getByText("Cerrar");
        fireEvent.click(closeButton);
    
        // Verificar que el modal ya no está presente
        await waitFor(() => expect(screen.queryByText("Detalles de Leanne Graham")).not.toBeInTheDocument());
    });
});