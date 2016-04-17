####start
1. npm install -g express
2. 查看命令
```
express --help
express -e projectName
npm install ejs --save
//express -c sass
//npm install sass --save
//准备用gulp分出来
```
3.安装依赖
```
npm install
```
4.试启动
打开package.json,看到已经有依赖项，而且程序入口是bin/www文件。如图
![package.json文件描述](http://i3.piimg.com/9a80cf7eec33e91d.png)

当然我们也可以设定为 node app，同时在app.js里面监听3000端口
```
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
app.createServer(app).listen(app.get('port'),function(){
    //callback
    })
```
在www中会监听端口（默认的3000，也可以自行process.env.PORT设置）。具体的url的调度，在app.js中设置，然后www中会相应跳转。
eg.
```
//app.js,var home = require('./routes/home');
app.use('/', home);

//home.js
router.get('/',function(req,res,next){
    res.render('home');
});
module.exports = router;

//上述也可以简写为
app.get('/',function(req,res,next){
    .....
    })
```
其中，req包括，query,body,head等属性。
res通常用于向客户端发送消息，如res.sendFile,res.render('home',data)
next一般用于出错时，将error信息向下传递，知道遇到处理error的中间件等。


####常用
1.gulp-sass将scss文件转为css

- step1: 安装依赖：gulp,gulp-sass
```
npm install gulp --save
npm install gulp-sass --save-dev
```
但是实际上会遇到墙的问题，经常npm-err。我们可以换成[淘宝源](http://npm.taobao.org/)（淘宝的 NPM 镜像是一个完整的npmjs.org镜像，可以用此代替官方版本，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。）
```
npm install -g cnpm --registry=http://registry.npm.taobao.org
cnpm install gulp-sass --save-dev
```
- step2: 写入gulpfile.js文件

![gulpfile内容](http://i3.piimg.com/f20dbf4144a1cc39.png)
- step3: 运行gulp task
```
gulp sass
如果想实时监控更改的话，命令行里输入gulp sass:watch即可
```

2.gulp
[gulp学习](http://www.cnblogs.com/2050/p/4198792.html)