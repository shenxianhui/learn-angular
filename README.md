# Angular 学习

## 安装

### 脚手架

```
npm install -g @angular/cli

// 指定版本
npm install -g @angular/cli@7.2.0
```

### 创建新项目

```
ng new my-project
```

## 使用

### 启动

```
cd ./my-project
ng serve
```

### 创建组件

```
ng generate component child
```

# pro-custom 手册

> 注: 要在 components 目录操作

# 新增组件

## 创建

```
ng g library <name>
```

## 修改以下文件

- components\projects\demo\src\public-api.ts
- components\projects\demo\src\lib\demo.component.html
- components\projects\demo\src\lib\demo.component.styl
- components\projects\demo\src\lib\demo.component.ts
- components\projects\demo\src\lib\demo.module.ts
- components\projects\demo\src\lib\schema.json
- components\src\app\app.component.ts

# 打包

## 1. 打包

```
ng build <name>
```

## 2. 复制文件

复制下面两个文件

- components\dist\demo\bundles\demo.umd.js
- components\dist\demo\bundles\demo.umd.js.map

粘贴到
src/assets/com_name

## 3. 重启项目

```
cd ./my-project
ng serve
```

## 4. 查看页面
