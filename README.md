

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


Licencia
Este proyecto es de uso libre para fines de evaluación.

