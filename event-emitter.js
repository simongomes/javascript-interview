class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }

  trigger(eventName, ...rest) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(...rest);
      });
    }
  }
}

const emitter = new EventEmitter();

emitter.on("click", function () {
  console.log("Event successfully emitted!");
});

emitter.trigger("click");
