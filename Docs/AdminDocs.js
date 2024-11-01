/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: API endpoints for Admin management
 */

/**
 * @swagger
 * /api/admin/signup_admin:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Admin's first name
 *                 example: John
 *               lastName:
 *                 type: string
 *                 description: Admin's last name
 *                 example: Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Unique email for the admin
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 description: Strong password with a mix of letters and numbers
 *                 example: Password123
 *               isAdmin:
 *                 type: boolean
 *                 description: Boolean to confirm if user has admin privileges
 *                 example: true
 *     responses:
 *       201:
 *         description: Admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 admin:
 *                   $ref: '#/components/schemas/Admin'
 *                 message:
 *                   type: string
 *                   example: Admin created
 *                 status:
 *                   type: integer
 *                   example: 201
 *       400:
 *         description: Bad request, missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email is required"
 *                 status:
 *                   type: integer
 *                   example: 400
 */

/**
 * @swagger
 * /api/admin/login_admin:
 *   post:
 *     summary: Log in as an admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Admin's email
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 description: Admin's password
 *                 example: Password123
 *     responses:
 *       200:
 *         description: Admin logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 admin:
 *                   $ref: '#/components/schemas/Admin'
 *                 message:
 *                   type: string
 *                   example: Admin logged in
 *                 status:
 *                   type: integer
 *                   example: 200
 *       400:
 *         description: Bad request, missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email is required"
 *                 status:
 *                   type: integer
 *                   example: 400
 */

/**
 * @swagger
 * /api/admin/update_admin:
 *   put:
 *     summary: Update an admin's information
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: Updated first name of the admin
 *                 example: John
 *               lastName:
 *                 type: string
 *                 description: Updated last name of the admin
 *                 example: Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Updated email of the admin
 *                 example: admin@example.com
 *               isAdmin:
 *                 type: boolean
 *                 description: Updated admin status
 *                 example: true
 *     responses:
 *       201:
 *         description: Admin updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 admin:
 *                   $ref: '#/components/schemas/Admin'
 *                 message:
 *                   type: string
 *                   example: Admin updated
 *                 status:
 *                   type: integer
 *                   example: 201
 *       400:
 *         description: Bad request, missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email is required"
 *                 status:
 *                   type: integer
 *                   example: 400
 */

/**
 * @swagger
 * /api/admin/change_password:
 *   put:
 *     summary: Change an admin's password
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Admin's email
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 description: New password for the admin
 *                 example: NewPassword123
 *     responses:
 *       201:
 *         description: Password changed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 admin:
 *                   $ref: '#/components/schemas/Admin'
 *                 message:
 *                   type: string
 *                   example: Password changed
 *                 status:
 *                   type: integer
 *                   example: 201
 *       400:
 *         description: Bad request, missing or invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email is required"
 *                 status:
 *                   type: integer
 *                   example: 400
 */

/**
 * @swagger
 * /api/admin/signout:
 *   get:
 *     summary: Sign out an admin
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: User signed out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User signed out successfully
 *                 status:
 *                   type: integer
 *                   example: 200
 */
