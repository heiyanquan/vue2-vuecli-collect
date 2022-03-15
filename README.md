
#### 1、用户中心集成完成
#### 2、UI库集成完成 --- iview
1、安装依赖 npm install view-design --save
2、main.js全局引入
```javascript
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
```

#### 3、eslint集成完成 （IDE中sonarlint扩展请同时启用）
详细rules可查看wiki文档：
http://wiki.aihuoshi.net/pages/viewpage.action?pageId=45777699
**`注：基于火石前端eslint规范规则，有疑问沟通主程，不可关闭！`**

#### 4、单元测试使用jest集成完成
API参考：https://jestjs.io/zh-Hans/

#### 5、插件统一使用根据需求集成
1、高级编辑器  
wangeditor - https://www.kancloud.cn/wangfupeng/wangeditor3/332599  
2、图片裁剪  
vue-cropper - https://github.com/xyxiao001/vue-cropper  
3、图片上传  
云用oss、涉及本地部署minio（实际需求询问项目经理和项目运维人员）  
oss:http://wiki.aihuoshi.net/pages/viewpage.action?pageId=34181152  
minio:http://wiki.aihuoshi.net/pages/viewpage.action?  pageId=40899372  
4、省市区  
v-distpicker - https://distpicker.pigjian.com/    
5、目前基于1920适配，有需要修改请修改index.html基础设计稿尺寸 (基于px开发就行)

#### 6、css扩展语言使用less，已经集成 less@4.1.1 less-loader@5.0.0

#### 7、可视化图表使用echart 已经集成
持续补充...  
**`注：业务插件有不满足需求请沟通主程，再做新选择`**




账号和密码
ahhfgxq_admin   12345678

ahfxjkq_admin    12345678

