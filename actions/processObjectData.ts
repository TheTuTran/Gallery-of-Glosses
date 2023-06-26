function processObjectData(obj: any): any {
    if (obj.body && typeof obj.body === 'object') { // Check that obj.body exists and is an object
      const property = Object.keys(obj.body)[0]; // gets the first property of the body object
      return {
        [property]: obj.body[property].value
      };
    } else {
      return {}; // Return an empty object if obj.body is undefined or not an object
    }
}
  