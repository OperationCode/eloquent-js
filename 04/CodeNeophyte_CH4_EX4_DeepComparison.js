function deepEqual (value1, value2) {
//   console.log(value1);
//   console.log(value2);
  if (value1 === value2) {
    return true;
  }
  if (value1 == null || typeof value1 != 'object' ||
      value2 == null || typeof value2 != 'object') {
    return false;
  }

  for (var prop in value2) {
    if (!(prop in value1) || !deepEqual(value1[prop], value2[prop])) {
      return false;
    }
  return true;
  }

}
