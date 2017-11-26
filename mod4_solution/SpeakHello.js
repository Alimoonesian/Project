var helloSpeaker={};
helloSpeaker.speakWord = "Hello";
helloSpeaker.speak=function speak(name) {
  console.log(helloSpeaker.speakWord + " " + name);
  document.write("<br/>" + helloSpeaker.speakWord + " " + name);
}
