class Storage {
  static toString(data) {
    return JSON.stringify(data);
  }

  static save(data) {
    localStorage.setItem('currentTime', this.toString(data));
  }

  static load() {
    const data = localStorage.getItem('currentTime');
    return JSON.parse(data);
  }

  static clear() {
    localStorage.clear();
  }
}

export default Storage;
