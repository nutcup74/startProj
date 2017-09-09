function TennisGame() {

  /*this.temp = () => {
    let temp
    return temp++
  }*/

  this.reset = () => {
    return 'LOVE-LOVE'
  }
  this.eco = () => {
    return this.reset()
  }
}



test('Echo "LOVE-LOVE" ', () => {
  let app = new TennisGame
  app.reset()
  let result = app.eco()
  expect(result).toBe('LOVE-LOVE')

})


/*test('Echo "1-0" ', () => {
  let app = new TennisGame

  app.temp()
  let result = app.eco()
  expect(result).toBe('1-0')

})*/
