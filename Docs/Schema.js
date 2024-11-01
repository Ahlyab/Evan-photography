/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - firstName
 *         - lastName
 *         - isAdmin
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: Unique email for the admin
 *           example: admin@example.com
 *         password:
 *           type: string
 *           description: Hashed password for the admin account
 *           example: password123
 *         firstName:
 *           type: string
 *           description: Admin's first name
 *           example: John
 *         lastName:
 *           type: string
 *           description: Admin's last name
 *           example: Doe
 *         isAdmin:
 *           type: boolean
 *           description: Boolean to confirm if user has admin privileges
 *           example: true
 */
