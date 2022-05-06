export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const firstRegexp = /^[a-zA-Z][\w-]+[a-zA-Z]$/.test(this.name);
    const secondRegexp = /(\d{4})/g.test(this.name);

    return [firstRegexp, secondRegexp];
  }
}
