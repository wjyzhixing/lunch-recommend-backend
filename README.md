# lunch-recommend-backend 2.0.0

## lunch-recommend是什么？

该小应用主要是解决每天纠结于吃什么的难题。通过使用者记录近期的食物从而根据食物，喜欢程度，所吃次数，通过计算，得到真实推荐的结果，这里，喜欢程度起到主导作用。

另外，该应用也支持随机推荐吃什么的功能。

如果你不想从已经输入的食物中选择想吃什么，你还可以自行输入你的选择，从而进行随机输出吃什么的结果（这个功能可以引申为其他随机都可以，不一定只针对吃什么）

最后，在注册时候时候如果您想要获得想吃什么的邮件提醒，可以选择输入邮箱地址，我们将在每天的11:30和17:30进行邮件推送！

## 相比1.0.0更新了什么？

增加了用户修改信息，修改是否发送邮件功能

增加了自定义推荐公式

修改了web端和移动端样式

增加了数据库定时备份

修改了刷新页面登录信息问题

增加了打标签功能

## lunch-recommend-backend
这是lunch-recommend项目的后端代码，前端代码请移步到：

```
https://github.com/wjyzhixing/lunch-recommend/
```
### 项目整体架构及技术栈

<img width="494" alt="image" src="https://user-images.githubusercontent.com/36620969/196839781-5fc344cb-b0d6-4966-8461-b4259413a4b6.png">

后端技术栈采用：eggjs + mongodb

中间件涉及： egg-mongoose，egg-cors，egg-jwt，egg-swagger-doc

## 项目功能

![image](https://user-images.githubusercontent.com/36620969/199630828-4f7aaa13-f003-4520-971c-b92c7764d9fd.png)

## 启动与打包

### 开始安装依赖！
```
$ npm i
```

### 启动服务！
```bash
$ npm run dev
```

### 部署服务
```bash
$ npm run start
```

## 加入我们！
本项目希望有更多的小伙伴来加入！共同为实现大家的生活目标而投入！为方便前端人员开发，我配置了后端swagger文档方便前端人员，线上地址暂时为：http://43.143.38.230:7001/swagger-ui.html

<img width="1433" alt="image" src="https://user-images.githubusercontent.com/36620969/196840372-2ee19e49-fe5b-46de-8ada-5ea2400246ba.png">

欢迎大家加入！
