# shb-example-admin

Static HTML Builder 制作管理界面的例子，使用之前请参考：http://gengen1988.github.io/static-html-builder/

特点：

* 使用 AdminLTE 模板，具有响应式的布局
* 使用模块分割应用各个功能
* 使用 ui-router 路由管理模块之间的切换

## 使用方法

1. 检出这个项目
  ```bash
  git clone https://github.com/gengen1988/shb-example-admin
  ```
  
2. 将项目链接到 Static HTML Builder 的 app 目录下
  ```bash
  ln -s shb-example-admin/ static-html-builder/app
  ```
  
3. 初始化项目
  ```bash
  cd static-html-builder
  grunt init
  ```
