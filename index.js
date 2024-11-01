require("dotenv").config();

const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const AdminRoutes = require("./Routes/AdminRoutes");
const port = process.env.PORT || 3000; // Use port from env or default to 3000

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Evan's Photography API",
      version: "1.0.0",
      description: "Evan's Photography APIs",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
      //   {
      //     url: "https://artarena.onrender.com/",
      //   },
    ],
  },
  apis: ["./docs/*.js"],
};

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

app.use("/api/admin", AdminRoutes);

mongoose
  .connect(
    process.env.NODE_ENV === "production"
      ? process.env.DB_URL_LATEST
      : process.env.DB_URL
  )
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(
        `App is listening to port : ${port} \n http://localhost:${port}`
      );
    });
  })
  .catch((error) => {
    console.log("uri : " + process.env.DB_URL);
    console.log(error);
  });
