function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var newArray = [];
  for (var i = 0; i < musiciansArray.length; i++) {
    var musician = musiciansArray[i];
    var sent = musician + " plays "instrumentsArray[0];
    newArray.push(sent);
  }
  return newArray;
}
