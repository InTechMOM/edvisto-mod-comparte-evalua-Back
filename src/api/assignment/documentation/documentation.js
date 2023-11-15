//Esquema de Assignment

/**
 * @openapi 
 *  components:
 *   schemas:
 *    AssignmentSchema:
 *     type: object
 *     properties:
 *      emailTeacher:
 *        type: string
 *      course:
 *        type: string
 *      name:
 *        type: string
 *      title:
 *        type: string
 *      descriptión:
 *        type: string
 *      emailStudents:
 *        type: [string]
 *      resourcesURL:
 *        type: string
 *      startDate:
 *        type: date
 *      finishDate:
 *        type: date
 *     required:
 *      - emailTeacher
 *      - course
 *      - name
 *      - title
 *      - descriptión
 *      - emailStudents
 *     example:
 *      emailTeacher: some@example.com 
 *      course: QuintoA
 *      name: Inteligencia Artificial
 *      title: Análisis de datos utilizando inteligencia artificial
 *      descriptión: 
 *
 *            "Objetivo: Desarrollar un modelo de aprendizaje automático que pueda predecir la probabilidad de que un cliente abandone un servicio.
 *            Pasos:
 *
 *            - Recopilar un conjunto de datos que contenga información sobre los clientes, como sus características demográficas, su historial de compras y su comportamiento en línea.
 *            - Preprocesar los datos para eliminar los valores atípicos y los datos faltantes.
 *            - Seleccionar un algoritmo de aprendizaje automático adecuado para el problema.
 *            - Entrenar el modelo de aprendizaje automático en el conjunto de datos.
 *            - Evaluar el rendimiento del modelo de aprendizaje automático en un conjunto de datos de prueba.
 *       
 *            Criterios de evaluación de la tarea:
 *
 *            - Exactitud del modelo: El modelo debe ser capaz de predecir la probabilidad de abandono con precisión.
 *            - Explicación del modelo: Los estudiantes deben ser capaces de explicar cómo funciona el modelo y cómo llega a sus predicciones.
 *            - Creatividad: Los estudiantes deben demostrar un pensamiento creativo al desarrollar el modelo."
 *
 *      emailStudents: []
 *      resourcesURL: [https://www.youtube.com/watch?v=OhEhe2YlzoE]
 *      startDate: "17-10-2023"
 *      finishDate: "27-10-2023"
 */

//API POST

/**
 * @openapi
 * /api/project:
 *  post:
 *   summary: Allows you to create a certain Project and subsequently assign it to all students in a course
 *   tags: [AssignmentSchema]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/AssignmentSchema'
 *   responses:
 *    201:
 *     description: Assigned Project
 *    400:
 *     description: Bad Request
 *    404:
 *     description: Unregistered teacher email
 *    422:
 *     description: Validation error
 *    500:
 *     description: Unknown error
 */

// API GET

/**
 * @openapi
 * /api/projects:
 *  get:
 *   summary: Return all Projects
 *   tags: [AssignmentSchema]
 *   parameters:
 *    - in: query
 *      name: emailTeacher
 *      description: Query for emailTeacher
 *      schema:
 *        type: string
 *    - in: query
 *      name: course
 *      description: Query for course
 *      schema:
 *        type: string
 *    - in: query
 *      name: title
 *      description: Query for title
 *      schema:
 *        type: string
 *    - in: query
 *      name: name
 *      description: Query for name
 *      schema:
 *        type: string
 *    - in: query
 *      name: descriptión
 *      description: Query for descriptión
 *      schema:
 *        type: string
 *    - in: query
 *      name: emailStudents
 *      description: Query for emailStudents
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: All Projects
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/AssignmentSchema'
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: Project Not Found
 *    500:
 *     description: Unknown error 
 */

// API DELETE

/**
 * @openapi
 * /api/project/{id}:
 *  delete:
 *   summary: Delete a Projects with their specific ID
 *   tags: [AssignmentSchema]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The user id
 *   responses:
 *    200:
 *     description: User
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        items:
 *         $ref: '#/components/schemas/AssignmentSchema'
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: Assignment Not Found
 *    422:
 *     description: Id Not Valid
 *    500:
 *     description: Unknown error
 */