import React, { useEffect, useState } from 'react';
import "../assets/styles.css";
import { getData } from "../controller/appController";

const DataList = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("") // Estado para el filtro
    const [selectedData, setSelectedData] = useState(null) // Usuario seleccionado
    const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar el modal

    useEffect(() => {
        const fetchData = async () => {
            const data = await getData();
            console.log("Datos crudos de la API:", data);
            setData(data);
        };
        fetchData();
    }, []);
    // Filtrar usuarios basados en la búsqueda
    const filteredData = data.filter(user =>
        user?.name?.toLowerCase().includes(search.toLowerCase())
    );

    // Mostrar el modal con el usuario seleccionado
    const openModal = (data) => {
        setSelectedData(data);
        setIsModalOpen(true);
    };

    // Cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedData(null);
    };

    return (
        <div className="container">
            <h2>Lista de Usuarios</h2>

            {/* Input de búsqueda */}
            <input
                type="text"
                placeholder="Buscar usuario..."
                className="search-box"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Lista filtrada */}
            {/* Tabla de usuarios */}
        <table className="data-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map(data => (
                    <tr key={data.id} onClick={() => openModal(data)}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>

            {/* Modal con CSS*/}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Detalles de {selectedData.name}</h2>
                        <p><strong>ID:</strong> {selectedData.id}</p>
                        <p><strong>Nombre:</strong> {selectedData.name}</p>
                        <p><strong>Email:</strong> {selectedData.email}</p>
                        <p><strong>Teléfono:</strong> {selectedData.phone || "No disponible"}</p>
                        <p><strong>Dirección:</strong> {selectedData.phone || "No disponible"}</p>
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataList;