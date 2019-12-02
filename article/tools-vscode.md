工欲善其事，必先利其器

作为一名前端工作者，编辑器或者IDE对于开发尤为重要，如何在1分钟内打造自己的开发环境呢

# vscode
选择一个适合自己的编辑器或者IDE，vscode不多说，免费、丰富的插件与微软强硬的开发团体，以及快速的响应速度迅速获得了一大批用户，下面我们就介绍一下这款的插件与配置文件，手把手教你如何快速的配置出属于自己的编辑器
写这篇文章的时候使用的是最新版 1.37.1，可能后面的版本会集成某些插件的功能，这篇文章随时会更新哦


# vscode插件
### 中文语言包 - Chinese (Simplified) Language Pack for Visual Studio Code
英文的菜单变成友好的中文，使得开发者更加了解自己的编辑器
### 主题 - One Dark pro
vscode上有很多主题，本人使用的是这块

![](https://user-gold-cdn.xitu.io/2019/8/26/16ccbb0c2909df58?w=1216&h=644&f=png&s=124242)

其他：Material Theme
大家也可以根据自己的喜好到[官方插件](https://marketplace.visualstudio.com/VSCode)

### 成对括号不同颜色显示 - Bracket Pair Colorizer2
便于我们更好的梳理逻辑以及代码层次，另外vscode也会整理出一份js的大纲，可以帮助开发者更好的看清代码结构，尤其是在阅读别人的代码的时候

### git增强 - gitlens
vscode本身会集成git，但是呢，总有一些体验不好的地方，这时候插件就可以派上用处了
代码中可以显示commit，体验更好的diff；另外，Git History也是值得推荐的，更加注重对比，但是本人觉得够用就好，如果说vscode本身git就已经满足了需求就没必要装很多雷同的插件了；还有git easy也是比较热的插件，大家可以去搜一下

### 快捷键 - Sublime Importer for VS Code
无缝切换自己熟悉的快捷键；也有其他的选择；或者自己去设置（比较费时）

### HTML成对标签修改 - Auto Rename Tag
用了都说好，还有一个插件是
### Auto Close Tag
自动闭合html标签，本人没有实际考证vscode本身是不是有这个功能，还是挺方便的

### 文件管理 - Project Manager
可以将自己平时经常用的项目快捷管理

### 代码格式化与美化
eslint: 代码检查 全局安装eslit
``` shell
npm i eslint -g
```
针对本项目需要在本项目内安装对应eslit插件

Vetur：格式化vue
Prettier ：格式化js/ts/css
不多说，后面会给出具体配置，不必烦恼

### Visual Studio IntelliCode
官方的一个插件 ： 感知上下文
这个本人在写代码的时候并没有太多感受，具体应该是ai通过你写代码只能提示，这个有待观察其作用大小是否值得

下面重点来了，一分钟配置
## 同步配置 - Settings Sync 
将你的插件配置和你编辑器个人配置同步到gist，便于不同电脑上快速配置，应该用不了几分钟哦，自动安装插件，完成之后重启即可，每个人值得拥有

可以fork[我同步的配置](https://gist.github.com/uaio/09ea04836d56aeaefd8907f46a9f13e2)

通过这些插件，基本上就已经满足日常的需求，大家也可以把你的觉得好用，一些自己比较好的应用场景，评论出来，供大家学习使用，不必花费很长时间去配置与撸码无关的事情

# 配置拿走

``` json
{
  "workbench.sideBar.location": "right",
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "vscode-icons",
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.lineHeight": 24,
  "editor.fontSize": 18,
  "editor.renderWhitespace": "all",
  "editor.formatOnSave": true,
  "editor.snippetSuggestions": "top",
  // "editor.wordWrapColumn": 80,
  "editor.wordWrap": "on",
  "files.eol": "\n",
  "sync.autoUpload": false,
  "sync.removeExtensions": true,
  "sync.quietSync": false,
  "sync.autoDownload": false,
  "sync.forceUpload": true,
  "sync.gist": "09ea04836d56aeaefd8907f46a9f13e2",
  "merge-conflict.autoNavigateNextConflict.enabled": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // "vetur.format.options.useTabs": true,
  "vetur.format.defaultFormatterOptions": {
    "prettyhtml": {
      "printWidth": 90
    }
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": false
  },
  // "prettier.printWidth": 90,
  // "prettier.singleQuote": true,
  // "prettier.eslintIntegration": true,
  // "prettier.tslintIntegration": false,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "eslint.enable": true,
  "eslint.autoFixOnSave": true,
  "path-intellisense.autoSlashAfterDirectory": true,
  "path-intellisense.showHiddenFiles": true,
  "path-intellisense.extensionOnImport": true,
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "git.enableSmartCommit": true,
  "git.showPushSuccessNotification": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "task.slowProviderWarning": [
    "typescript"
  ],
}
```
以上配置拿走就可以用了

*2019-10-15更新*
