
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArray = []
    matrix.map(line => {
        resultArray.push(...line)
        return line
    })
    return resultArray
}
