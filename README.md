## 子目录说明

```
mf/packages
├── ocrm // 业务
├── acrm // 业务
├── container // layout = content + menu
├── components // 业务组件库
└── utils // 工具函数
```

项目仓库使用[monorepo 模式](https://zhuanlan.zhihu.com/p/77577415)管理，共有 7 个子 package，

1. `definitions`：定义集，包含前后端交互的数据类型定义、接口定义、字段枚举以及部分工具类型方法
2. `constants`：通用常量
3. `utils`：通用工具函数
4. `components`：业务组件库
5. `acrm`：业务库
6. `ocrm`：业务库
7. `container`：layout = content + menu

## 涉及技术栈

```
webpack5 (module federation) + vue3 + ts
```

## MF使用

```
参考acrm、ocrm、container的vue.config.js 配置，以及vue中组件和route的使用
acrm、ocrm 为服务提供 可提供组件和页面级别
container 为消费方

acrm和ocrm 也可以独立部署，作为独立应用使用 （业务上暂时还没使用场景）
```

## 业务发包

```
基于lerna发包
```
