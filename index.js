function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];
  for (var i = 0; i < musiciansArray.length; i++) {
    var musician = musiciansArray[i];
    var intrument = instrumentsArray[i];
    var sent = musician + " plays " + instrument;
    newArray.push(sent);
  }
  return newArray;
}
