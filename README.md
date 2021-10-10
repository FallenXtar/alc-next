# ALC-Next 众生之门战场模拟器

[![star](https://gitee.com/xtarz/alc-next/badge/star.svg?theme=dark)](https://gitee.com/xtarz/alc-next/stargazers)

- [ALC-Next 众生之门战场模拟器](#alc-next-众生之门战场模拟器)
  - [这是什么？](#这是什么)
    - [说明](#说明)
    - [What's **Next**?](#whats-next)
  - [直接使用](#直接使用)
  - [本地开发](#本地开发)
    - [环境](#环境)
    - [步骤](#步骤)
  - [:warning: 注意 :warning:](#warning-注意-warning)
  - [设定与实现](#设定与实现)

## 这是什么？

### 说明

### What's **Next**?

本项目从[此处](https://github.com/FallenXtar/alc-exp-simulator)迁移而来，原名*众生之门经验模拟器*，初代项目比较简陋而原始，再加上各种滚动迭代使得代码比较难看，于是从头开始新建了一个项目，代号为 **Next**。

开发者~~经常咕咕~~日理万机，项目也许不会按时更新。

**ALC** = **A**ll **L**iving **C**reatures 即**众生之门**

## 直接使用

直接访问网页就可以运行模型

## 本地开发

### 环境

| 项目     | 建议                                          |
| -------- | --------------------------------------------- |
| IDE      | [VS Code][link_vscode]                        |
| node     | [LTS][link_nodejs]<sup id="a1">[1](#f1)</sup> |
| 包管理器 | [Yarn][link_yarn]                             |

> 注：  
> <b id="f1">1</b>. 如果运行在 Windows 系统上，考虑使用 [NVM for Windows](https://github.com/coreybutler/nvm-windows) [↩](#a1)

### 步骤

1. 假设你已经完成了 [环境配置](#环境)
2. 克隆仓库到本地

   ```Sh
   # Coding 仓库
   git clone git@e.coding.net:xtarz/alc-next/alc-next.git

   # Github 仓库
   git clone git@github.com:FallenXtar/alc-next.git

   # Gitee 仓库
   git clone git@gitee.com:xtarz/alc-next.git

   ```

3. 安装依赖

   ```Sh
   yarn install
   ```

4. (可选）用 `VS Code` 打开 `alc-next.code-workspace`
5. 可用命令

   ```Sh
   yarn dev # 运行开发服务器，位于 localhost:3000

   yarn build # 构建生产版本，位于 /dist/

   yarn serve # 用自带网页服务器运行构建好的生产版本
   ```

## :warning: 注意 :warning:

- 默认配置了淘宝 npm 镜像，如果需要改动或恢复默认（比如位于海外）可以修改或者注释掉 `.yarnrc.yml` 中的这一行

  ```YML
   npmRegistryServer: "https://registry.npm.taobao.org"
  ```

- 不要使用 Yarn 2，可能导致无法正常生成（正在尝试迁移）
- 如果你也在用 Element-Plus 并看了官方文档，注意在集成 Volar 时，`tsconfig.json`不能用

  ```JSON
  // tsconfig.json
  {
   "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
   }
  }
  ```

  而是写成

  ```JSON
  // tsconfig.json
  {
  "compilerOptions": {
    // ...
    "types": ["element-plus/packages/element-plus/global"]
  }
  }
  ```

## 设定与实现

在动画 _众生之门篇_ 的设定中提到如下几点，作为本模拟器运行的逻辑支撑，以下是已经或尚未实现的设定：

- [x] 玩家初始经验值为 0
- [x] 玩家击杀另一名玩家时，获得对方的经验值，最少为 1
- [ ] 玩家具有地区势力和自建势力，相关红名特性
- [ ] 玩家可以组队，获得经验时平分
- [ ] 玩家死亡后经过 30 分钟现实时间复活，经验值仍为 0
- [ ] 玩家初始具有不同的种族和对应的种族能力


[link_vscode]: (https://code.visualstudio.com/)
[link_nodejs]: (https://nodejs.org/)
[link_yarn]: (https://yarnpkg.com)
