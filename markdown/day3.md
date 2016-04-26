通过一段时间的查阅资料、摸索，我发现实现上传的方式有：
1.express中间件multer模块（此效率最高，在express3.x原生支持，到了express4.x独立成一个模块了），
2.connect-multiparty模块（但现在 官方不推荐 ），
3.使用multiparty模块实现（此方法比较普遍），4.使用formidable插件实现（插件呢，就是简单易懂）;



[formdata in mdn](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Using_FormData_Objects)
[ajax](http://stackoverflow.com/questions/20795449/jquery-ajax-form-submission-enctype-multipart-form-data-why-does-contentt)

4. form一些问题
When one sets the contentType option to false, it forces jQuery not to add a Content-Type header, otherwise, the boundary string will be missing from it. Also, when submitting files via multi-part/form one must leave the processData flag set to false, otherwise, jQuery will try to convert your FormData into a string, which will fail.


tel.js里面的cb怎么调用