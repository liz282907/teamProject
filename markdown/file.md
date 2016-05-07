##开发总结

###upload 

**注意事项**：
####如果是form的话
[使用form表单初始化FormData对象方式上传文件](http://www.jianshu.com/p/46e6e03a0d53)

####如果是input+ajax处理的话
要保证
（1）**multer的single要与input中的name一致** == formdata中的key
```
var upload = multer({
    dest:path.join(__dirname,"..","public/uploads/"),
    fileFilter:function(req,file,cb){
        var mimetype = file.mimetype.split('/')[1];
        console.log("filetype ",file.mimetype);
        /*
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        if(mimetype !=='vnd.ms-excel' || mimetype !=='vnd.openxmlformats-officedocument.spreadsheetml.sheet' ){
            req.fileValidationError = '请上传excel文件';
            return cb(null,false,new Error("请上传excel文件"));
        }
        */
        cb(null,true);
    }}).single('excel'); //这边的single要与input中的name一致
```

（2）formdata的key也要与input中的name一致
```
var form = new FormData();
        //attention
        form.append("excel",$(".inputfile").get(0).files[0]);
        console.log("upload file ",JSON.stringify(form));
        var request = $.ajax({
            url: '/tel/upload',
            method:'post',
            data:form,
            processData: false,
            contentType: false,
            cache:false,
            success:function(data,textStatus,jqXHR){
                console.log("-------",data);
                $(".submit").text("上传成功");
                console.log("---receive data "+data);
            },
```

(3) append()的第二个参数应是文件对象，即element.files[0]。
contentType也要设置为‘false’。因为上文已经声明是formdata对象了，不需要再去定义
processData也要设为false,否则jQuery会将你的formdata转为string类型。
> When one sets the contentType option to false, it forces jQuery not to add a Content-Type header, otherwise, the boundary string will be missing from it. >Also, when submitting files via multi-part/form one must leave the processData flag set to false, otherwise, jQuery will try to convert your FormData into a string, which will fail.

（4）标签能够上传多个文件，
只需要在<input type="file">里添加multiple或multiple="multiple"属性。
2. 如果希望重命名的话（现在的官方文档中，只支持dest/storage、filefilter、limits，不支持其他如rename等，因此只能用diskStorage比较好）。
此时需要注意的是，如果destination是一个函数，那么目录需要是已创建好的，如果dest是传的string，那么如果不存在文件夹，multer会帮你新建。

3. node-xlsx
xlsx -> array of json(rows)
![](http://i4.piimg.com/5f18ec75fa35aac3.png)
[{"name":"Sheet1","data":[["id","system","是否合格"],[1,"ios","是"],[2,"android","是"],[3,"wp","否"]]},
{"name":"Sheet2","data":[]},
{"name":"Sheet3","data":[]}]


###todo 
1. read excel
[read exce with node](http://www.cnblogs.com/ajun/p/4171384.html) 
2. rename in storage
[rename in storage](https://github.com/expressjs/multer/issues/170)

###references
1. [send-formdata-and-string-data-together-through-jquery-ajax](http://stackoverflow.com/questions/21060247/send-formdata-and-string-data-together-through-jquery-ajax)
2. [](http://stackoverflow.com/questions/21044798/how-to-use-formdata-for-ajax-file-upload)
3. [upload file and store to mongoose](http://my.oschina.net/boogoogle/blog/547398?fromerr=sVadloQY)

###toread
1. [what-does-enctype-multipart-form-data-mean](http://stackoverflow.com/questions/4526273/what-does-enctype-multipart-form-data-mean)
