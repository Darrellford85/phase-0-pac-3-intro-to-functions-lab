const spy = expect.spyOn(console, 'log').andCallThrough();
//     logwhisper('HELLO')
//     expect(spy).toHaveBeenCalledWith('hello')
//     console.log.restore()
function logWhisper(hello) {
  console.log(hello.tolowerCase());
}
