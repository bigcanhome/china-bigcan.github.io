#### 安装sublime text 3

a) 按住Ctrl键 点击 [sublime text 首页](http://www.sublimetext.com/)

b) ![下载位置](http://7xif9n.com1.z0.glb.clouddn.com/NY9%5BXR2P_37_4U5W%25%7B3UKQ7.png)

c) Windows 64 bit - also available as a portable version  64位便携版 ps:下载可能需要翻墙;安装到u盘或者初c盘其他的位置，因为这个我们可以随时拷贝走或者同步云亦或者托管代码仓库

<!-- more -->
#### 更改插件包安装位置
a) 打开sublime 找到 Preferences->Browse Packages…… 打开默认安装包位置
b) 向上一直找到sublime text 3的文件夹，关闭sublime，删除 sublime text 3文件夹
c) 回到sublime安装路径，在根目录新建Data文件夹
d) 打开sublime 这时安装插件的路径就自动更改到的Data中

#### 汉化

a) 按住Ctrl键 点击 [汉化插件](http://sublimetext.iaixue.com/forum.php?mod=viewthread&tid=342&extra=&page=1)
ps:需要注册一下回复才能看到下载地址
b) 将下载的插件 放到Data\Installed Packages里 重启sublime
c) Preferences->Languages 下选择简体中文

#### 授权码

a) 帮助的输入授权码
b)
        —– BEGIN LICENSE —–
    Michael Barnes
    Single User License
    EA7E-821385
    8A353C41 872A0D5C DF9B2950 AFF6F667
    C458EA6D 8EA3C286 98D1D650 131A97AB
    AA919AEC EF20E143 B361B1E7 4C8B7F04
    B085E65E 2F5F5360 8489D422 FB8FC1AA
    93F6323C FD7F7544 3F39C318 D95E6480
    FCCC7561 8A4A1741 68FA4223 ADCEDE07
    200C25BE DBBC4855 C4CFB774 C5EC138C
    0FEC1CEF D9DCECEC D3A5DAD1 01316C36
    —— END LICENSE ——

可能会过期或者失效，可以去网上搜，有很多

#### 安装 Package Control

a) Ctrl+Shift+p 然后输入install 会出现Install Package Control 不过这个貌似还得翻墙
b) 按住Ctrl键 点击 [packagecontrol](https://packagecontrol.io/installation)有安装说明，不过还得翻墙，这个网址有病
c) 直接下载包 网上搜索一下，Package Control.sublime-package 然后放到Data\Installed Packages里 重启sublime 同样在设置里会看到

#### 如何利用Package Control安装插件
 a) 设置-> Package Control  or  Ctrl+Shift+p找到Package Control install 这时他会去加载可以安装的插件
 b) 常用插件:
- Emmet: 可以使HTML/CSS编码速度提升，快速生成html,css
- SublimeCodeIntel: 代码补全和提示
- JavaScript Completions: js提示加强了,为了避免和SublimeCodeIntel插件的js提示冲突，所以设置SublimeCodeIntel的codeintel_enabled_languages属性，其中去除javascript这个，这个要在user中设置，不要修改默认的，保存重启
- AutoFileName: 文件路径自动提示
- javascriptNext: es6语法支持
- SideBarEnhancements: 侧边栏增强
- ColorPicker: 调色盘
- ConvertToUTF8: 支持 GBK, BIG5, EUC-KR, EUC-JP, Shift_JIS 等编码的插件
- AdvanceNewFile: 创建新文件插件 快捷键：Ctrl+Alt+n

#### 默认的快捷键

a) 选择类
* Ctrl+D ：选中光标所占的文本，继续操作则会选中下一个相同的文本。
* Alt+F3：选中文本按下快捷键，即可一次性选择全部的相同文本进行同时编辑。举个栗子：快速选中并更改所有相同的变量名、函数名等。
* Ctrl+L：选中整行，继续操作则继续选择下一行，效果和 Shift+↓ 效果一样
* Ctrl+Shift+L ：先选中多行，再按下快捷键，会在每行行尾插入光标，即可同时编辑这些行。
* Ctrl+Shift+M：选择括号内的内容（继续选择父括号）。举个栗子：快速选中删除函数中的代码，重写函数体代码或重写括号内里的内容。
* Ctrl+M：光标移动至括号内结束或开始的位置。
* Ctrl+Enter：在下一行插入新行。举个例子：即使光标不在行尾，也能快速向下插入一行。
* Ctrl+Shift+Enter： 在上一行插入新行。举个栗子：即使光标不在行首，也能快速向上插入一行。
* Ctrl+Shift+[ ：选中代码，按下快捷键，折叠代码。
* Ctrl+Shift+] ：选中代码，按下快捷键，展开代码。
* Ctrl+K+0 ：展开所有折叠代码。
* Ctrl+← ：向左单位性地移动光标，快速移动光标。
* Ctrl+→ ：向右单位性地移动光标，快速移动光标。
* shift+↑ ：向上选中多行。
* shift+↓ ：向下选中多行。
* Shift+← ：向左选中文本。
* Shift+→： 向右选中文本。
* Ctrl+Shift+←：向左单位性地选中文本。
* Ctrl+Shift+→：向右单位性地选中文本。
* Ctrl+Shift+↑：将光标所在行和上一行代码互换（将光标所在行插入到上一行之前）。
* Ctrl+Shift+↓：将光标所在行和下一行代码互换（将光标所在行插入到下一行之后）。
* Ctrl+Alt+↑：向上添加多行光标，可同时编辑多行。
* Ctrl+Alt+↓：向下添加多行光标，可同时编辑多行。

b) 编辑类
* Ctrl+J：合并选中的多行代码为一行。举个栗子：将多行格式的CSS属性合并为一行。
* Ctrl+Shift+D：复制光标所在整行，插入到下一行。
* Tab：向右缩进。
* Shift+Tab：向左缩进。
* Ctrl+K+K：从光标处开始删除代码至行尾。
* Ctrl+Shift+K：删除整行。
* Ctrl+/：注释单行。
* Ctrl+Shift+/ ：注释多行。
* Ctrl+K+U：转换大写。
* Ctrl+K+L：转换小写。
* Ctrl+Z：撤销。
* Ctrl+Y：恢复撤销。
* Ctrl+U：软撤销，感觉和 Gtrl+Z 一样。
* Ctrl+F2：设置书签
* Ctrl+T：左右字母互换。
* F6： 单词检测拼写

c) 搜索类
* Ctrl+F：打开底部搜索框，查找关键字。
* Ctrl+shift+F：在文件夹内查找，与普通编辑器不同的地方是sublime允许添加多个文件夹进行查找，略高端，未研究。
* Ctrl+P：打开搜索框。举个栗子：
1、输入当前项目中的文件名，快速搜索文件，2、输入@和关键字，查找文件中函数名，3、输入：和数字，跳转到文件中该行代码，4、输入#和关键字，查找变量名。
* Ctrl+G：打开搜索框，自动带：，输入数字跳转到该行代码。举个栗子：在页面代码比较长的文件中快速定位。
* Ctrl+R： 打开搜索框，自动带@，输入关键字，查找文件中的函数名。举个栗子：在函数较多的页面快速查找某个函数。
* (Ctrl+：) 打开搜索框，自动带#，输入关键字，查找文件中的变量名、属性名等。
* Ctrl+Shift+P：打开命令框。场景栗子：打开命名框，输入关键字，调用sublime text或插件的功能，例如使用package安装插件。
* Esc： 退出光标多行选择，退出搜索框，命令框等

d) 显示类
* Ctrl+Tab：按文件浏览过的顺序，切换当前窗口的标签页。
* Ctrl+PageDown：向左切换当前窗口的标签页。
* Ctrl+PageUp： 向右切换当前窗口的标签页。
* Alt+Shift+1： 窗口分屏，恢复默认1屏（非小键盘的数字）
* Alt+Shift+2： 左右分屏-2列
* Alt+Shift+3： 左右分屏-3列
* Alt+Shift+4： 左右分屏-4列
* Alt+Shift+5： 等分4屏
* Alt+Shift+8： 垂直分屏-2屏
* Alt+Shift+9： 垂直分屏-3屏
* Ctrl+K+B： 开启/关闭侧边栏。
* F11： 全屏模式
* Shift+F11：免打扰模式


ps: 如果用不习惯的话可以自己设置，只要不冲突就好了