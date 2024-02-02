function pickPeaks(arr) {
  // guard against incorrect argument types
  console.log(typeof arr);
  console.log(arr);
  if (!Array.isArray(arr)) {
    throw new Error("argument must be of type array");
  }

  return { pos: [], peaks: [] };
}

module.exports = pickPeaks;
