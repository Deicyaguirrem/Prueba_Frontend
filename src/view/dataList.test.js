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
    
        // Esperar que el estado de carga desaparezca antes de buscar usuarios
        await waitFor(() => screen.queryByText(/Cargando datos/i) === null);
    
        // Ahora buscar "Leanne Graham" en la tabla
        const userElement = await screen.findByText("Leanne Graham");
        expect(userElement).toBeInTheDocument();
    
        // Simular búsqueda en el input
        const input = screen.getByPlaceholderText("Buscar usuario...");
        fireEvent.change(input, { target: { value: "Leanne" } });
    
        // Verificar que el usuario filtrado aparece en pantalla
        await screen.findByText("Leanne Graham");
    });

    test("Abre y cierra el modal correctamente", async () => {
        render(<DataList />);
    
        // Esperar a que los datos se carguen antes de interactuar
        const userElement = await screen.findByText("Leanne Graham");
        expect(userElement).toBeInTheDocument();
    
        // Simular clic en el usuario para abrir el modal
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