// 轮播图操作
window.onload = function () {
  //找图
  var wrap = document.getElementById("wrap");
  var arrow = document.getElementById("arrow");
  var arrLeft = document.getElementById("arrLeft");
  var arrRight = document.getElementById("arrRight");
  var slide = document.getElementById("slide");
  var ul = slide.children[0];
  var lis = ul.children;//所有图片
  //1.设置图片位置

  var config = [
      {
          "width": 200,
          "top": 20,
          "left": 100,
          "opacity": 0.2,
          "zIndex": 2
      },//0
      {
          "width": 400,
          "top": 70,
          "left": 50,
          "opacity": 0.8,
          "zIndex": 3
      },//1
      {
          "width": 600,
          "top": 100,
          "left": 250,
          "opacity": 1,
          "zIndex": 4
      },//2
      {
          width: 400,
          top: 70,
          left: 650,
          opacity: 0.8,
          zIndex: 3
      },//3
      {
          "width": 200,
          "top": 20,
          "left": 800,
          "opacity": 0.2,
          "zIndex": 2
      }//4
  ];//是一个配置单 规定了每张图片的大小位置层级透明度

  //获取页面上所有的li 让他们从当前的位置 以动画的效果到指定的位置
  function assign() {
      for (var i = 0; i < lis.length; i++) {
          animate(lis[i], config[i], function () {
              flag = true;
          });
      }
  }
  assign();
  //3.点击箭头旋转
  //点击右箭头
  arrRight.onclick = function () {
      if (flag) {
          flag = false;//关闭阀门
          //把开始的元素放到最后
          config.push(config.shift());
          assign();
      }
  };
  //点击左箭头
  arrLeft.onclick = function () {
      if (flag) {
          flag = false;
          //把最后的元素放到开始
          config.unshift(config.pop());
          assign();
      }

  };
  var flag = true;
};