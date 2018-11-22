
/*
function getStyleSheet(element) {
    return element.sheet || element.styleSheet;
}
var link = document.getElementsByTagName("link")[0];
var sheet = getStyleSheet(link);
console.log(sheet);
sheet.insertRule("body { background-color: red }", 0);  //DOM方法
*/
/*
var stylesheet = createStyleSheet();
stylesheet.insertRule("body { background-color: red }", 0);  //DOM方法

function createStyleSheet() {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
}
*/
function createStyleSheet() {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
}
function insertRule(selectorText, cssText, position) {
  var stylesheet = createStyleSheet();
  if (stylesheet.insertRule) {
    stylesheet.insertRule(selectorText + "{" + cssText + "}", position);
  } else if (stylesheet.addRule) {
    stylesheet.addRule(selectorText, cssText, position);
  }
}
insertRule("body", "background-color: red", 0);