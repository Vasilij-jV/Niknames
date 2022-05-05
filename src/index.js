export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const firstRegexp = /^[^\d_-][\w-]+[^\d_-]$/.test(this.name);
    const secondRegexp = /(\d{4})/g.test(this.name);

    return [firstRegexp, secondRegexp];
  }
}
