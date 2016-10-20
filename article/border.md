
当你打开非常有尿性的ide或者编辑器，新建一个css文件，然后给一个元素添加属性的时候，输入border，不要动，静静看着他的美

border系列的属性还是挺多的，尤其是到了css3版本又加了很多可玩的属性；其中最常用的是 ``border-radius``、``border-image``

- border制作箭头

之前做过模拟微信聊天的页面，一开始用的图片当背景，要切下来一个小三角，然后用``:after`` or ``:before``来呈现它,可是这对于追求完美的我来说怎么能忍受~(～￣▽￣)～

核心代码:
``` html
<style>
    .demo{
        position: relative;
        display: inline-block;
        max-width: 200px;/*80%比较好*/
        border-radius: 5px;
        background: #a3ef2e;
        padding: 8px;
        line-height: 20px;
    }
    .demo::before {
        content: '';
        position: absolute;
        right: -5px;
        top: 10px;
        /*width: 0;
        height: 0;
        bottom: 0;
        margin: auto;*//*居中*/
        border-width: 10px 0px 10px 10px;
        border-color: transparent #a3ef2e;
        border-style: solid;
    }
</style>
<div class="demo">这是一条消息这是一条消息这是一条消息这是一条消息这是一条消息</div>
```

根据自己的需求可以把小三角旋转其他角度

``` html
<style>
.demo1 {
        border: 20px solid;
        border-top-color: black;
        border-right-color: red;
        border-bottom-color: gray;
        border-left-color: blue;
        width: 0;
        height: 0;
        border-radius: 50%;
    }
    .demo2 {
        border: 20px solid;
        border-top-color: black;
        border-right-color: red;
        border-bottom-color: gray;
        border-left-color: blue;
        width: 0;
        height: 0;
    }
</style>
<div class="demo1"></div>
<div class="demo2"></div>
```

- 管道

``` html
<style>
.demo{
    width:100px;
    height: 100px;
    border-top: 20px solid black;
    border-left: 20px solid black;
    border-top-left-border: 20px;
    box-sizing: border-box;
}
</style>
<div class="demo"></div>
```
如图
![图](http://img.blog.csdn.net/20160605205843432?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)
然后发现好像哪里不对，内侧不是圆角，然后我们做一下修改

``` html
<style>
.demo{
    width:100px;
    height: 100px;
    border-top: 20px solid black;
    border-left: 20px solid black;
    border-top-left-radius: 50px;
    box-sizing: border-box;
}
</style>
<div class="demo"></div>
```
然后发现变成圆角了，然后大家看是什么原因呢，结果说明
> 当border-width>=border-border时 内侧直角，反之圆角 

- 仿Opera图标
``` html
<style>
.demo{
    width:100px;
    height: 100px;
    border:20px solid #D62427;
    border-width: 10px 25px;
    border-radius: 50px;
    box-sizing: border-box;
}
<div class="demo"></div>
</style>
```

- 类似鹰嘴

``` html
<style>
.demo{  
    width:100px;  
    height: 50px;
    border-width: 0 20px;
    border-top:20px solid black;
    border-top-left-radius: 40px 45px;
    box-sizing: border-box;
}
<div class="demo"></div>
</style>
```

ps：如果用border系弄图标元素超过两个不包括伪类，那么建议不要用这种方式了，小图标没有必要啊


