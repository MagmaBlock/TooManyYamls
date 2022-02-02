// 引用库
var fs = require('fs');
var yaml = require('yamljs');
// 引用 minimist 处理命令行参数
const args = require('minimist')(process.argv)

// console.log(args);

// 用 fs 读取目录
fs.readdir(args.dir, function (err, files) {
    if (err) {
        return console.error(err);
    }
    // 为所有的 yaml 读取结果预先建立一个数组
    var inAll = new Array()
    console.log('读取到的文件:',files);
    // 循环读取每一个 yaml，并且添加到数组
    for (var i = 0; i < files.length; i++){
        let thisYaml = yaml.load(args.dir + '/' + files[i])
        inAll.push(thisYaml)
    }
    // 把结果的 JS 数组转换成 Json
    jsonedAll = JSON.stringify(inAll)

    fs.writeFile('export.json', jsonedAll, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("结果已保存到 export.json 中，可执行您的下一步操作。");
    });

});

