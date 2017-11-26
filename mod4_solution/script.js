(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

document.write("<h1 style='color: Green;'>mod4_solution</h1>");
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0);
  if (firstLetter === 'j' || firstLetter==='J') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();
