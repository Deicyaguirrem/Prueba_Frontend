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

Estrategia de Escalabilidad
El proyecto esta diseñado para soportar crecimiento y nuevas funcionalidades sin comprometer su rendimientos.  Para lograr esto, se siguen los siguientes principios de escalabilidad:
	Modularidad y separación de responsabilidades: la arquitectura por capas + MVCS permite que cada funcionalidad este desacoplada, aislada, lo que facilita la incorporación de nuevas características sin afectar el código existente.
	Uso de DTOs para estructurar datos: evita cambios inesperados en la API y garantiza que los datos mantengan un formato consistente al agregarse nuevos atributos.

Estrategia de Optimización del Proyecto
Se incorporan varias técnicas para mejorar el rendimiento y eficiencia asegurando una experiencia fluida para los usuarios.
	Mejora del Rendimiento (performance): reducción de re.renders innecesarios mediante separación de estados y minimización de dependencias en useEffect, optimización de listas grandes con filtrado eficiente (Array.prototype.filter()), implementación de Lazy Loading para evitar cargas innecesarioas de recursos, uso de async/await con manejo de errores para prevenir bloqueos en la UI.

	Manejo de Estados Avanzado: sistema de carga (loading) con animación para mejorar la percepción del usuario, mensajes de error para hacer los fallos más comprensibles, evitar estados innecesarios usando variables derivadas en lugar de múltiples (useStates).
