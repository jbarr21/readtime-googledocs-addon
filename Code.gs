var avgWordsPerMinute = 275;
var secondsPerImage = 12;

/**
 * Creates a menu entry in the Google Docs UI when the document is opened.
 */
function onOpen() {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Calculate', 'calculateReadTime')
      .addToUi();
}

/**
 * Runs when the add-on is installed.
 */
function onInstall() {
  onOpen();
}

function calculateReadTime() {
  var readTimeMin = wordCount() / avgWordsPerMinute + (secondsPerImage / 60.0 * imageCount());
  var message = roundToInt(readTimeMin) + ' min Read Time;
  DocumentApp.getUi().alert(message);
}

function wordCount() {
  return DocumentApp.getActiveDocument().getBody().getText().match(/\S+/g).length;
}

function imageCount() {
  return DocumentApp.getActiveDocument().getBody().getImages().length;
}

function roundToInt(num) {
  return Math.round(num).toString().match(/\d+/)
}
