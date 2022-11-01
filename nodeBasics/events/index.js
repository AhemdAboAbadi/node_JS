const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received for user ${name} with id ${id}`);
});

customEmitter.emit("response", "Ahmed", 23);
