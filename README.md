Descripción del Proyecto
Este proyecto es una aplicación interactiva para visualizar y gestionar datos de usuarios, utilizando la API pública JSONPlaceholder. Se han implementado estrategias avanzadas de manejo de estados, mejoras en la UI, pruebas unitarias y el patrón de diseño DTO para estructurar los datos de manera eficiente.
Arquitectura del Proyecto
Se implemento la arquitectura en capas combinada con el enfoque Modelo-Vista-Controlador-Servicio (MVCS), ya que permite una organización limpia, flexible y estructurada, mejorando la mantenibilidad, escalabilidad y separación de responsabilidades.
	Arquitectura en Capas y Modelo-Vista-Controlador-Servicio(MVCS):
•	Capa Model: Organiza los datos que llegan de la API, implementa el patrón de diseño DTO.
•	Capa View: muestra los datos al usuario.
•	Capa Controller: coordina el flujo de la aplicación.
•	Capa Service: realiza y gestiona las peticiones a la API.
 La arquitectura implementa permite adicionar nuevas funcionalidades, modificar partes del sistema sin afectar lo que existe, cada capa cumple con una responsabilidad específica.
Patrón DTO (Data Transfer Object)
Se usó el patrón de diseño DTO en la capa Model, ya que esta es la encargada del manejo de los datos que vienen de la API, este patrón permite definir y estructurar los datos que se van a mostrar en la interface del usuario, garantizando que estos sean limpios y estructurados.

Instalación y Configuración
Para la aplicación local es necesario ejecutar los siguientes comandos en la GitBash
git clone https://github.com/Deicyaguirrem/Prueba_Frontend
cd nombre-del-proyecto
npm install
npm start

Manejo de Estados (Loading & Error Handling)
	Estado Loading: en la interfaz del usuario se muestra un spinner y un mensaje “cargando datos …” con el fin de que el usuario se entere que se están gestionando los datos en la API.
	Estado de error: se captura cualquier fallo en la API, y se muestra un mensaje de error en la interface del usuario.

Documentación Técnica
Para más información y diagramas UML consulta la carpeta /docs


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


Estrategia de Escalabilidad
El proyecto esta diseñado para soportar crecimiento y nuevas funcionalidades sin comprometer su rendimientos.  Para lograr esto, se siguen los siguientes principios de escalabilidad:
	Modularidad y separación de responsabilidades: la arquitectura por capas + MVCS permite que cada funcionalidad este desacoplada, aislada, lo que facilita la incorporación de nuevas características sin afectar el código existente.
	Uso de DTOs para estructurar datos: evita cambios inesperados en la API y garantiza que los datos mantengan un formato consistente al agregarse nuevos atributos.

Estrategia de Optimización del Proyecto
Se incorporan varias técnicas para mejorar el rendimiento y eficiencia asegurando una experiencia fluida para los usuarios.
	Mejora del Rendimiento (performance): reducción de re.renders innecesarios mediante separación de estados y minimización de dependencias en useEffect, optimización de listas grandes con filtrado eficiente (Array.prototype.filter()), implementación de Lazy Loading para evitar cargas innecesarioas de recursos, uso de async/await con manejo de errores para prevenir bloqueos en la UI.

	Manejo de Estados Avanzado: sistema de carga (loading) con animación para mejorar la percepción del usuario, mensajes de error para hacer los fallos más comprensibles, evitar estados innecesarios usando variables derivadas en lugar de múltiples (useStates).


Licencia
Este proyecto es de uso libre para fines de evaluación.