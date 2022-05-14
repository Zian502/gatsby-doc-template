---
id: how-to-contribute
title: 如何贡献代码
slug: how-to-contribute
order: 1
---

一般而言，你有许多方式为代码建设出力，例如：写下一个你发现的 Bug 的现象及复现路径到 Issue 区反馈，提交一个 PR (Pull Requests)，又或者是单纯对某个功能提交一个建议等。

对于标注了 `PR Welcome` 的 [issue]() 是提交你第一个 PR 最佳的实践案例，如果你在过程中有任何疑问，也可以随时在评论区 @ 任何一位项目成员进行咨询。

## 开发环境准备


## 构建和运行


### 获取代码

第一步，你需要先 Fork 一份 仓库副本，然后再将其克隆到本地：

```bash
git clone https://github.com/<<<your-github-account>>>/.git
```

通常你需要在修改或提交代码前提前同步一下最新的分支代码。

```bash
git checkout main
git pull https://github.com/opensumi/<<<your-github-account>>>/.git main
```

处理完代码冲突，提交代码到你的仓库下，然后就可以随时到 提交你的 PR。

注意：默认还包含了不少 GitHub Actions，如果你不想执行这些 Actions，你可以在 `https://github.com/<<Your Username>>/settings/actions` 下关闭掉对应 Actions。

### 构建

```bash
npm install
npm run init
```
### 运行

```bash
npm start
```

## 调试



## 单元测试

我们使用 `Jest` 进行单元测试，进行执行环境的模拟及测试。

你可以通过如下命令对某个模块（下面代码测试模块为 debug，即 packages 目录下的 debug 目录）的代码进行测试：

```bash
npm run test:module -- --module=debug
```

你也可以通过调试面板中的 `Jest Current File` 指令，对当前编辑器激活的测试文件进行断点调试。

## 代码规范

直接运行 `npm run lint` 可对整体代码进行规范检索，同时代码提交时也会触发相应的代码格式校验。

## 提交规范

每个 commit 应尽量小，需要按照 [ng4 的提交规范](https://www.npmjs.com/package/@commitlint/config-conventional#type-enum) 填写你的 commit 信息。

举个例子，你修复了调试模块的变量获取问题，提交信息可以如下所示：

```txt
fix: fix variable acquisition under the debug panel
```

对于 PR 内容，遵循 PR 填写模板即可。

## 英文拼写

## 建议及反馈

