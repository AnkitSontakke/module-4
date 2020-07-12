(function (window) {


var byeSpeaker = {};


var speakWord = "Good_Bye";


byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);