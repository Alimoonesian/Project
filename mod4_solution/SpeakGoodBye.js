var byeSpeaker={};
byeSpeaker.speakWord = "Good Bye";
byeSpeaker.speak=function (name) {
  console.log(byeSpeaker.speakWord + " " + name);
  var show= "<label style='color:red'>"+name+"</label>";
  document.write("<br/>" + byeSpeaker.speakWord + " " +  show);
}
