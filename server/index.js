const express = require("express");
const mc = require("./controllers/messages_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const messageBaseURL = "/api/messages";
app.post(messageBaseURL, mc.create);
app.get(messageBaseURL, mc.read);
app.put(`${messageBaseURL}/:id`, mc.update);
app.delete(`${messageBaseURL}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
