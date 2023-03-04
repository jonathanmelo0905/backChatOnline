const express = require("express");
const router = express();

const usuarios = require("../controllers/usuarioController");
const chat = require("../controllers/chatController");

module.exports = () => {
  router.get("/usuarios", usuarios.getUsuarios);

  router.get("/chat", chat.getChat);
  router.post("/chat", chat.saveChat);

  return router;
};
