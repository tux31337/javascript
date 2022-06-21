class Counter {
  #value;

  constructor(value) {
    if (isNaN(value) || value < 0) {
      this.#value = 0;
    } else {
      this.#value = value;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}

const counter = new Counter(0);
counter.increment();
counter.increment();
counter.increment();

console.log(counter.value);
