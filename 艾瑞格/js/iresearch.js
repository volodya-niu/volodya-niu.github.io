(function () {
    /*控制显示第几张*/
    var num=0;
    /*控制显示轮播的时间*/
    var interval=3000;
    var obj={num:num,interval:interval};
    window.onload=function () {

        /*获取所有图片容器*/
        var li=document.querySelectorAll(".item-img>li");//Array
        var dot=document.querySelectorAll(".item-dot>li");//Array
        /*每隔2s秒换一张图片*/
        var timer=setInterval(showOne,interval);
        function showOne() {
            //显示一张，隐藏其他张
            /*换到下一张*/
            num++;
            if(num>2){
                num=0;
            }
            /*隐藏其他张*/
            for(var i=0;i<li.length;i++){
                li[i].style.display="none";
                dot[i].style.backgroundColor="";
            }
            /*显示一张*/
            li[num].style.display="block";
            /*清除所有点的激活色*/
            /*给对应点加上激活色*/
            dot[num].style.backgroundColor="#a3c708";
        }
        /*鼠标悬停停止轮播，清除计时器*/
        document.getElementsByClassName("slider")[0].onmouseover=function () {
            clearInterval(timer);
        }
        /*鼠标go out之后继续轮播*/
        document.getElementsByClassName("slider")[0].onmouseout=function () {
            //再恢复全局的计时器
            timer=setInterval(showOne,interval);
        };
        /*给每个小点绑定点击事件，点击小点就显示对应的图片，
         而且点完以后要接着这张图片往后轮播*/
        for(var j=0;j<dot.length;j++){
            /*给每个点保存了下标*/
            /*dot[j]是一个dom对象,这种做法就相当于给每个dom元素里面
             * 添加一个index属性，属性值为他循环出来在dot数组里面的下标*/
            dot[j].index=j;
            dot[j].onclick=function () {
                //this是当前点击的点
                var index=this.index;
                /*首先要显示对应下标的图片*/
                num=index;

                for(var i=0;i<dot.length;i++){
                    //
                    li[i].style.display="none";
                    dot[i].style.backgroundColor="";
                }
                li[num].style.display="block";
                dot[num].style.backgroundColor="#a3c708";
                //event
                /*获取点的下标*/
            }
        }
        /*右边的*/

        document.getElementsByClassName("next")[0].onclick = function(){
            num++;
            if(num > 2){
                num = 0;
            }
            for (var i = 0;i < li.length;i++)
            {
                li[i].style.display = "none";
                dot[i].style.backgroundColor = "";
            }
            li[num].style.display = "block";
            dot[num].style.backgroundColor="#a3c708";
        };
        /*左边的*/
        document.getElementsByClassName("prev")[0].onclick = function(){
            num--;
            if(num < 0){
                num = 2;
            }
            for (var i = 0;i < li.length;i++)
            {
                li[i].style.display = "none";
                dot[i].style.backgroundColor = "";
            }
            li[num].style.display = "block";
            dot[num].style.backgroundColor="#a3c708";
        };
    }
})();

