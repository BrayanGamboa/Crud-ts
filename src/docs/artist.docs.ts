/**
 * @swagger
 * components:
 *  schemas:
 *      Artist:
 *          type: object
 *          properties:
 *             name_artist:
 *                type: string
 *                description: Name of the artist
 *             name_album:
 *                 type: string
 *                 description: Name of the album
 *             year:
 *                type: date
 *                description: Album release date
 *          required:
 *             - name_artist
 *             - name_album
 *             - year
 *          example:
 *              name_artist: Brayan Gamboa
 *              name_album: ¡Gracias a mi tía Pied'a!
 *              year: 2020-05-01
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      Artist_Response:
 *          type: object
 *          properties:
 *             id:
 *               type: string
 *               description: Id of the artist
 *             name_artist:
 *                type: string
 *                description: Name of the artist
 *             name_album:
 *                 type: string
 *                 description: Name of the album
 *             year:
 *                type: date
 *                description: Album release date
 *          example:
 *              id: "6286ec3a428741cd5723cf6d"
 *              name_artist: Brayan Gamboa
 *              name_album: ¡Gracias a mi tía Pied'a!
 *              year: 2020-05-01
 */

/**
 * @swagger
 * /users:
 *  post:
 *      summary: Create a new artist with his album
 *      tags: [Artist]
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Artist'
 *      responses:
 *        '200':
 *          description: Petition successfully - OK
 *        '500':
 *          description: Internal Server Error
 *
 */

/**
 * @swagger
 * /users/{id_artist}:
 *  put:
 *      summary: Update of artist with his album
 *      tags: [Artist]
 *      parameters:
 *        - in: path
 *          name: id_artist
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *              schema:
 *                 type: object
 *                 $ref: '#/components/schemas/Artist'
 *      responses:
 *        '200':
 *          description: Petition successfully - OK
 *        '204':
 *          description: No Content
 *        '304':
 *          description: Not Modified
 *        '409':
 *          description: Conflict
 *        '500':
 *          description: Internal Server Error
 */

/**
 * @swagger
 * /users:
 *  get:
 *      summary: Get all artists
 *      tags: [Artist]
 *      requestBody:
 *         required: false
 *         content:
 *          application/json:
 *              schema:
 *                 type: array
 *                 $ref: '#/components/schemas/Artist_Response'
 *      responses:
 *       '200':
 *          description: Petition successfully - OK
 *       '204':
 *          description: No Content
 *       '500':
 *          description: Internal Server Error
 * 
 *
 *
 */

/**
 * @swagger
 * /users/{user_id}:
 *  get:
 *    tags: [Artist]
 *    summary: Returns a user by ID.
 *    parameters:
 *      - in: path
 *        name: user_id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: OK
 *      '204':
 *        description: No content
 *      '409':
 *        description: Conflict
 */

/**
 * @swagger
 * /users/{user_id}:
 *  delete:
 *    tags: [Artist]
 *    summary: Deletes a user by ID.
 *    parameters:
 *      - in: path
 *        name: user_id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: OK
 *      '204':
 *        description: No content
 *      '409':
 *        description: Conflict
 *      '400':
 *        description: Bad request
 */
