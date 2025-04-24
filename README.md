

# Prueba_Frontend
Prueba Técnica - frontend implementación de interfaz Web con con API externa

# Getting Started with Create React App

# Prueba Técnica - Frontend 
>>>>>>> b966aed (Implementación sin pruebas unitarias)

## Descripción  
Este proyecto implementa una interfaz web que consume una API pública y muestra los datos de manera clara y organizada. Se ha desarrollado siguiendo buenas prácticas de frontend y estructuración de código.  

## API utilizada  
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)  
Este proyecto obtiene información de la API pública `jsonplaceholder.typicode.com` para mostrar una lista de elementos y sus detalles.  

## Instalación  
Para descargar y ejecutar el proyecto, sigue estos pasos:  

1. **Clonar el repositorio:**  
```bash
git clone https://github.com/tu_usuario/prueba-tecnica.git

2. Entrar al directorio del proyecto:
cd prueba-tecnica

3. Instalar dependencias:
npm install

4. Ejecutar el proyecto:
npm start
Funcionalidades
Obtener y mostrar una lista de elementos desde una API pública.
Consultar detalles de un elemento específico. 
Manejo básico de errores en la API y datos faltantes.

Tecnologías utilizadas
React
JavaScript
CSS
Html
Git

Estructura del proyecto
AppPruebaTecnica
│── public/
│── src/
│   ├── assets/  # contenido css
│   ├── controller/  # Controla flujo en la app
│   ├── model/       # Estructura los datos que vienen de la API
│   ├── service/     # Hace las peticiones a la APi
│   ├── view/        # Muestra los datos en el browser
│   ├── App.js
├── App.js
│── README.md
│── package.json
│── .gitignore

## Pruebas Unitarias

Para garantizar la calidad y estabilidad del código, se han implementado pruebas unitarias utilizando Jest y React Testing Library.

### Propósito de las pruebas  
Las pruebas verifican el correcto funcionamiento de los componentes y lógica del proyecto, asegurando que los datos se rendericen y manejen de manera adecuada.

### Herramientas utilizadas  
- Jest: Framework de pruebas en JavaScript.  
- React Testing Library: Librería enfocada en pruebas de componentes React de manera accesible y funcional.  

### Estructura de las pruebas  
Las pruebas se encuentran en la siguiente ubicación dentro del proyecto:  

AppPruebaTecnica
│── public/
│── src/
│   ├── assets/  
│   ├── controller/  
│   │    ├── appController.js
│   │    ├── appController.test.js # Prueba unitaria de appController.js
│   ├── model/  
│   │    ├── dataDTO.js
│   │    ├── dataDTO.test.js  # Prueba unitaria de dataDTO.js
│   │    ├── dataModel.js
│   │    ├── dataModel.test.js # Prueba unitaria de dataModel.js
│   ├── service/ 
│   │    ├── apiService.js
│   │    ├── apiService.test.js # Prueba unitaria de apiService.js   
│   ├── view/ 
│   │    ├── dataList.jsx
│   │    ├── dataList.test.js  #Prueba unitaria de dataList.js      
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│── README.md
│── package.json
│── .gitignore


### Ejecutar las pruebas  
Para correr las pruebas unitarias en el proyecto, usa el siguiente comando:  
```bash
npm test nombre del archivo que desea correr.

Cobertura esperada
Pruebas de renderizado de componentes. 
Validación de interacciones con la UI. 
Simulación de llamadas a la API y manejo de respuestas. 
Manejo de errores y datos faltantes.


Prueba de Integración
Se implementó una prueba de integración para validar el comportamiento de App.js al obtener y renderizar datos desde una API simulada.

Objetivo:
Verificar que la aplicación carga correctamente los datos de fetchData y los muestra en la interfaz de usuario.

Enfoque de la prueba:
Se utilizó Jest y React Testing Library para simular la llamada a la API.
Se mockeó la función fetchData usando jest.mock(), asegurando que la prueba no dependa de la API real.
Se verificó que los datos obtenidos se rendericen correctamente en la interfaz.
Código de prueba (App.test.js)
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import * as apiService from "./service/apiService";

jest.mock("./service/apiService");

beforeEach(() => {
  apiService.fetchData.mockResolvedValue([
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
  ]);
});

test("Carga y muestra datos correctamente desde la API", async () => {
  render(<App />);

  await waitFor(() => expect(screen.getByText("John Doe")).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText("Jane Smith")).toBeInTheDocument());
});


Resultados:
Se comprobó que los datos simulados se mostraban correctamente en la aplicación.
Se verificó que la API es mockeada correctamente para evitar dependencias externas.
Se manejaron correctamente las actualizaciones de estado durante la prueba.
Esta prueba ayuda a garantizar la estabilidad de la aplicación y su interacción con los datos de la API.


Licencia
Este proyecto es de uso libre para fines de evaluación.

