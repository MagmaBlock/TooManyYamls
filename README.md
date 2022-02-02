# TooManyYamls
快速将大量的 YAML 文件转换为一个单独的 JSON，进而转换为 CSV 或者导入数据库。这可能对一些 Minecraft 服主处理插件数据时很有帮助。

低技术力，自己维护服务器时写的一个小脚本，现在把它丢出来x

# 如何使用

基于 NodeJS，请先安装。

使用到了 `fs, yamljs, minimist` 三个依赖库，`fs` NodeJS 已经自带，其他两个库请安装：

```
npm install yamljs
npm install minimist
```

依赖装好之后，将所有的 YAML 文件丢进一个文件夹里，然后直接在命令行中输入:

```
node TooManyYamls.js --dir="<文件夹>"
```

如

```
node TooManyYamls.js --dir="userdata"
```

然后就能在脚本目录下找到 `export.json` 了，内容是指定文件夹内的全部 YAML 合并转换的一个 JSON。

拿到总的 JSON 之后就可以使用其他工具将其转换为 CSV 修改处理后填进数据库了，此类转换工具已经很多，这里就不再做了。

[json to csv](https://www.bing.com/search?q=json+to+csv)
