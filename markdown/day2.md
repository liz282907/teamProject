1.本地改scss，浏览器不更新，304缓存
开发阶段，可以给静态文件设置一个maxAge
```
app.use(express.static(path.join(__dirname, 'public'),{maxAge:1000*10}));
```

2.gulpfile.js里面的路径是相对于gulpfile的。其他的是相对于express的静态文件路径的