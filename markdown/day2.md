1.本地改scss，浏览器不更新，304缓存
开发阶段，可以给静态文件设置一个maxAge
```
app.use(express.static(path.join(__dirname, 'public'),{maxAge:1000*10}));
```