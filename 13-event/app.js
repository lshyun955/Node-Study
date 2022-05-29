const EventEmitter = require("events");
const emitter = new EventEmitter();
const callback1 = (args) => {
  console.log("first callback -", args);
};

emitter.on("lee", callback1);

emitter.on("lee", (args) => {
  console.log("second callback -", args);
});

emitter.emit("lee", { message: 1 });
emitter.emit("lee", { message: 2 });
emitter.removeListener("lee", callback1);
emitter.emit("lee", { message: 3 });
