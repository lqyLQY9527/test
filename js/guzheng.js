var box = document.getElementById("box");
var spans = box.getElementsByTagName("span");//上面的标签
var lis = box.getElementsByTagName("li");//下面的盒子

    //点击span让当前的span高亮
    for (var i = 0; i < spans.length; i++) {
      //spans[i].index = i;
      spans[i].setAttribute("index", i);
      spans[i].onclick = function () {
          //排他
          //干掉所有人
          for (var i = 0; i < spans.length; i++) {
              //spans[i].className = "";
              spans[i].removeAttribute("class");
          }
          //留下我自己
          //this.className = "current";
          this.setAttribute("class", "current");
          //让下面对应的li也显示出来
          for (var i = 0; i < lis.length; i++) {
              //lis[i].className = "";
              lis[i].removeAttribute("class");
          }
          //console.dir(this.index);
          //var index = this.index;
          var index = this.getAttribute("index");
          //lis[index].className = "current";
          lis[index].setAttribute("class", "current");
      };
  }