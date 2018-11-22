
$(function() {
  $('.listnav li').click(function(){
    var index = $(this).index();
    var offset = 11; // 左侧偏移 11像素
    var imgWidth = 240; // 图片的宽度是240
    var pos = 0;
    // 因此第一个tab项的居中位置就是 240/2 + 11
    if (index === 0) {
      pos = imgWidth / 2 + offset + 'px';
    } else {
      /*
        如果不是第一个tab项的话，那么计算方式就变为如下:
        pos = imgWidth / 2 + offset + imgWidth * index + 33 * index
      */
      pos = imgWidth / 2 + offset + imgWidth * index + 33 * index;
    }
    var styleSheetObject = document.getElementById('colorFlipFlop');
    console.log(pos);
    changeStyle(styleSheetObject, 'left', pos);
  });
});
/*
 * @param styleSheetObject style标签的id
 * @param attr 需要改变的style属性
 * @param pos 需要改变的值
*/
function changeStyle(styleSheetObject, attr, pos) {
  var beforeIndex = 7;  // 定位到第几个style标签，默认为第一个
  console.log(styleSheetObject.sheet);
  console.log(styleSheetObject.sheet.cssRules[beforeIndex]);
  // console.log(styleSheetObject.sheet.cssRules[beforeIndex].style[attr])
  styleSheetObject.sheet.cssRules[beforeIndex].style[attr] = pos + 'px';
}

