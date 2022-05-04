class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const firstRegexp = /^[^\d_-][\w-]+[^\d_-]$/.test(this.name);
    const secondRegexp = /(\d{4})/g.test(this.name);

    if (firstRegexp === true && secondRegexp === false) {
      return true;
    }
    return false;
  }
}

const validator = new Validator('V145asil134i136j');

validator.validateUsername();
