let sourceArray = []
let subsetSize = 1
let generatedRandomNumbers = []
let randomArray = []

/**
 *
 *
 * @returns random index
 */
function _getRandomIndex() {
  let arrayLength = sourceArray.length
  let randomNumber = Math.floor(Math.random() * Math.floor(arrayLength - 1))
  if (!generatedRandomNumbers.includes(randomNumber)) {
    generatedRandomNumbers.push(randomNumber)
    return randomNumber
  } else {
    return _getRandomIndex(arrayLength)
  }
}
/**
 *
 *
 * @param {*} source
 * @param {*} size
 * @returns random array with size
 */
function getRandomArray(source, size) {
  sourceArray = source
  if (!size) {
    size = this.subsetSize
  }
  for (let i = 0; i < subsetSize; i++) {
    randomArray.push(sourceArray[_getRandomIndex()])
  }
  return randomArray
}
