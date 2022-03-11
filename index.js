function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
const spy = expect.spyOn(console, 'log').andCallThrough()


function logShout (hello) {
  console.log(hello.toUpperCase( ));
}
function logWhisper(hello){
  console.log(hello.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
  if(string === string.toLowerCase()) {
    return  "I can\'t hear you!"
  }
    else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
      else if (string === "Let\'s have dinner together!") {
        return "I would love to!";
      }
      
}