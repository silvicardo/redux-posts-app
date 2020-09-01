export class Utility {
  static clone = (object: object): any => JSON.parse(JSON.stringify(object));
}
