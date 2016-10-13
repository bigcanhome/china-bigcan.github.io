
> * 加载优化 
> * 图片优化 
> * css优化
> * 脚本优化 
> * 渲染优化


#### 1.加载优化

加载是最为耗时的过程，时间长了会使用户流失，所以加载也是优化的重点，一般我们控制移动端加载时间在3秒之内
其实pc端的优化同样也适用移动端,资源用https协议进行加载会快很多
* **减少http请求**
移动端由于系统和手机配置的原因,手机浏览器同时响应请求有局限性,所以要尽量减少页面的请求数,首次加载同时请求数不能超过4个
a) 合并css、javascript
b) 小图片且在css中引用一次的可以转换为base64、雪碧图

* **缓存**
使用缓存可以减少对服务器的请求数,节省加载的时间
a) HTML5 Cache Manifest :html5新的特性
``` html
<html manifest="/example/html5/demo_html.appcache">
```
b) 使用外联式引用CSS、JavaScript

* **压缩css、javascript**
为了使加载速度变快，我们要压缩css和js，不建议压缩html;并在服务器设置GZip
a) 通过线上，或者本地的自动化构建工具对css、js进行压缩
b) 服务端启动GZip

* **无堵塞**
css放首，js放尾，这样使得js不会堵塞css渲染，html中的内联样式也会堵塞渲染

* **使用首屏加载**
针对首页进行深度的优化，这样就会使用户感觉页面加载很快

* **预加载**
在页面体积较大的情况下我们要采用预加载的方式,当资源加载完成后再显示主页面
a) loading页面
b) 预加载下一页面

介绍几个预加载的库
preloadjs：http://www.createjs.cc/preloadjs
PxLoader：https://github.com/thinkpixellab/PxLoader
很多滑动类库中会提供预加载的api

* **按需加载**
把除了首屏和不影响当前加载的资源在用户需要的时候加载
按需加载会导致大量重绘，影响渲染性能
a) LazyLoad
b) 滚屏加载
c) 通过Media Query加载

* **压缩图片**
图片资源是影响加载的最主要因素，所以我们要尽量选择在不影响图片显示的前提下选择最小的尺寸
a) 选择在线压缩网站例如：
https://tinypng.com/
http://zhitu.isux.us/
b) 使用其它方式代替图片(1. 使用CSS3 2. 使用SVG 3. 使用IconFont)
c) img属性中的Srcset按照不同的屏幕来加载相应的图片
d) 选择合适的图片(1. webP优于JPG 2. PNG8优于GIF)
e) 选择合适的尺寸(不宽于640、首次加载不大于1M)

* **引入字体的压缩**
对于不需服务端提供文字的页面来说,好看的字体都很大,所以我们需要在字体库中剔除我们没有用到的字:
字蛛：http://font-spider.org/

* **减少Cookie**
Cookie会影响加载速度，所以静态资源域名不使用Cookie

* **避免重定向**
重定向会影响加载速度，所以在服务器正确设置避免重定向

* **异步加载第三方资源**
第三方资源不可控会影响页面的加载和显示，因此要异步加载第三方资源

#### 2.脚本优化
脚本处理不当会阻塞页面加载、渲染，因此在使用时需当注意

* **CSS写在头部，JavaScript写在尾部或异步**

* **避免图片和iFrame等的空src**
空src会重新加载当前页面，影响速度和效率

* **尽量避免重设图片大小**
重设图片大小是指在页面、CSS、JavaScript等中多次重置图片大小，多次重设图片大小会引发图片的多次重绘，影响性能

* **大图片尽量避免使用DataURL**
DataURL图片没有使用图片的压缩算法文件会变大，并且要解码后再渲染，加载慢耗时长

#### 3.css优化

* **尽量避免写在HTML标签中写内联样式**

* **避免css表达式**
css表达式的执行需跳出CSS树的渲染，也会使得浏览器执行效率降低，因此我们不要用css表达式，而且css表达式快要被取消了

* **移除无用或者空的的CSS规则**
无用或空的CSS规则增加了CSS文件的大小，且影响CSS树的执行，所以需移除空的CSS规则

* **正确使用display的属性**
display属性会影响页面的渲染，因此请合理使用
a) display:inline后不应该再使用width、height、margin、padding以及float
b) display:inline-block后不应该再使用float
c) display:block后不应该再使用vertical-align
d) display:table-*后不应该再使用margin或者float
e) 某些情况下隐藏元素可以使用``visibility：hidden``,不过这个会保留元素位置

* **不滥用float**
float在渲染时计算量比较大，尽量减少使用

* **不滥用Web字体**
Web字体需要下载，解析，重绘当前页面，尽量减少使用

* **不声明过多的font-size**
过多的font-size引发CSS树的效率,我们要通过使用类名还有继承性来减少过多的声明

* **值为0时不需要任何单位**
为了浏览器的兼容性和性能，值为0时不要带单位

* **标准化各种浏览器前缀**
a) 无前缀应放在最后
b) CSS动画只用 （-webkit- 无前缀）两种即可
c) 其它前缀为 -webkit- -moz- -ms- 无前缀 四种，(-o-Opera浏览器改用blink内核，所以淘汰),在移动端火狐和ie几乎可以不用考虑了,所以只需-weblit- 无前缀即可
d) 可以通过本地自动化工具对css进行自动的添加前缀,省时又省力

#### 4.js执行优化

* **减少重绘和回流**
a) 避免不必要的Dom操作，推荐react来构建页面
b) 尽量改变class而不是style，使用classList代替className
c) 避免使用document.write
d) 减少drawImage

* **缓存Dom选择与计算**
每次Dom选择都要计算，缓存他

* **缓存列表.length**
每次.length都要计算，用一个变量保存这个值

* **尽量使用事件代理，避免批量绑定事件**

* **尽量使用ID选择器**
ID选择器是最快的,因为他是唯一的

* **TOUCH事件优化**
使用touchstart、touchend代替click，要注意击穿问题，可以使用自定义的tap事件

[渲染优化]

* **HTML使用Viewport**
Viewport可以加速页面的渲染，请使用以下代码
``<meta name="viewport" content="width=device-width, initial-scale=1">``

* **减少Dom节点**
Dom节点太多影响页面的渲染，应尽量减少Dom节点,也就是要减少嵌套

* **动画优化**
a) 尽量使用CSS3动画
b) 合理使用requestAnimationFrame动画代替setTimeout并做好回滚
``` javascript
requestAnimationFrame = window.requestAnimationFrame || 
						window.mozRequestAnimationFrame || 
						window.webkitRequestAnimationFrame || 
						window.msRequestAnimationFrame || 
						window.oRequestAnimationFrame ||
			            function (callback) {
			                setTimeout(callback, 1000 / 60);
			            };
```
c) 适当使用Canvas动画 5个元素以内使用css动画，5个以上使用Canvas动画（iOS8可使用webGL）

* **高频事件优化**
Touchmove、Scroll 事件可导致多次渲染
a) 使用requestAnimationFrame监听帧变化，使得在正确的时间进行渲染
b) 增加响应变化的时间间隔，减少重绘次数

* **加速**
a) GPU加速 CSS中以下属性（CSS3 transitions、CSS3 3D transforms、Opacity、Canvas、WebGL、Video）来触发GPU渲染，请合理使用；PS：过渡使用会引发手机过耗电增加
b) will-change 提前通知浏览器我们要对元素做什么动画，这样浏览器可以提前准备合适的优化设置；我们可以设置一个或者几个css类，当动画完成后移除类，这样避免浏览器不释放该元素的优化
ps：在安卓手机很是有效果
