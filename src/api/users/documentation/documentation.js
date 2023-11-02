//Esquema de user

/**
 * @openapi 
 *  components:
 *   schemas:
 *    UserSchema:
 *     type: object
 *     properties:
 *      name:
 *        type: string
 *      lastName:
 *        type: string
 *      birthdayDate:
 *        type: date
 *      email:
 *        type: string
 *      password:
 *        type: string
 *      password2:
 *        type: string
 *      securityQuestion:
 *        type: string
 *      securityResponse:
 *        type: string
 *      rol:
 *        type: string
 *      acceptedTerms:
 *        type: boolean
 *      course:
 *        type: string
 *     required:
 *      - name
 *      - lastName
 *      - email
 *      - password
 *      - password2
 *      - securityQuestion
 *      - securityResponse
 *      - rol
 *      - acceptedTerms
 *     example:
 *      name: Samuel 
 *      lastName: Reyes
 *      birthdayDate: 26-05-2005
 *      email: some@example.com
 *      password: 1234?Do
 *      password2: 1234?Do
 *      securityQuestion: Nombre de tu mascota 
 *      securityResponse: zoe
 *      rol: Soy Docente
 *      acceptedTerms: True
 *      course: QUINTOA
 */

//API POST

/**
 * @openapi
 * /api/register:
 *  post:
 *   summary: The following route creates, stores and sends a verification email to the provided email
 *   tags: [UserSchema]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/UserSchema'
 *   responses:
 *    201:
 *     description: User Created
 *    400:
 *     description: Bad Request
 *    422:
 *     description: Validation error, wrong date format
 *    409:
 *     description: Email is assigned to another user, The password do not match
 *    500:
 *     description: Unknown error
 */

// API GET

/**
 * @openapi
 * /api/users:
 *  get:
 *   summary: Return all users
 *   tags: [UserSchema]
 *   parameters:
 *    - in: query
 *      name: name
 *      description: Query for name
 *      schema:
 *        type: string
 *    - in: query
 *      name: lastName
 *      description: Query for lastName
 *      schema:
 *        type: string
 *    - in: query
 *      name: email
 *      description: Query for email
 *      schema:
 *        type: string
 *    - in: query
 *      name: securityQuestion
 *      description: Query for securityQuestion
 *      schema:
 *        type: string
 *    - in: query
 *      name: securityResponse
 *      description: Query for securityResponse
 *      schema:
 *        type: string
 *    - in: query
 *      name: rol
 *      description: Query for rol
 *      schema:
 *        type: string
  *    - in: query
 *      name: course
 *      description: Query for course
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: All users
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/UserSchema'
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: User Not Found
 *    500:
 *     description: Unknown error 
 */

// API DELETE

/**
 * @openapi
 * /api/users/{id}:
 *  delete:
 *   summary: Delete a user with their specific ID
 *   tags: [UserSchema]
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
 *         $ref: '#/components/schemas/UserSchema'
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: User Not Found
 *    422:
 *     description: Id Not Valid
 *    500:
 *     description: Unknown error 
 */