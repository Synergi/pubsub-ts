let instance: PubSub;

class PubSub {
  events: Record<string, any>;
  constructor() {
    if (instance) {
      throw new Error('New instance cannot be created!!');
    }
    this.events = {};
    instance = this;
  }

  subscribe(event: string, callback: Function): number {
    let self = this;

    // If there's not already an event with this name set in our collection
    // create a new one and set it with an empty array, so we don't
    // have to type check it later down-the-line
    if (!self.events.hasOwnProperty(event)) {
      self.events[event] = [];
    }

    // We know we've got an array for this event, so push our callback in there with no fuss
    return self.events[event].push(callback);
  }

  publish(event: string, data = {}) {
    let self = this;

    // There's no event to publish to, so bail out
    if (!self.events.hasOwnProperty(event)) {
      return [];
    }

    // Get each subscription and call its callback with the passed data
    return self.events[event].map(callback => callback(data));
  }
}

let pubSubInstance = Object.freeze(new PubSub());

export default pubSubInstance;
