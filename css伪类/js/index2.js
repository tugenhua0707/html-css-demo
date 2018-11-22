
$(function() {
  $('.listnav li').click(function(){
    var index = $(this).index();
    var offset = 11; // 左侧偏移 11像素
    var imgWidth = 240; // 图片的宽度是240
    var pos = 0;
    // 因此第一个tab项的居中位置就是 240/2 + 11
    if (index === 0) {
      pos = imgWidth / 2 + offset;
    } else {
      /*
        如果不是第一个tab项的话，那么计算方式就变为如下:
        pos = imgWidth / 2 + offset + imgWidth * index + 33 * index
      */
      pos = imgWidth / 2 + offset + imgWidth * index + 33 * index;
    }
    addRule(".operating-report-container .tab-content:before", {
      left: pos + 'px'
    });
    addRule(".operating-report-container .tab-content:after", {
      left: pos + 'px'
    });
  });
});
function createStyleSheet() {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(""));
  document.head.appendChild(style);
  return style.sheet;
}
var stylesheet = createStyleSheet();
function addRule(selector, css) {
  var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
      console.log(p)
      return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
  }).join(";");

  if (stylesheet.insertRule) {
    // 标准浏览器支持的
    stylesheet.insertRule(selector + "{" + propText + "}", stylesheet.cssRules.length);

  } else if(stylesheet.addRule) {
    // IE支持的
    stylesheet.addRule(selector, propText, stylesheet.cssRules.length);
  }
}

