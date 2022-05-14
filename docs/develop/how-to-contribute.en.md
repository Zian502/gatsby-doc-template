---
id: how-to-contribute
title: How To Contribute
slug: how-to-contribute
order: 1
---

Generally speaking, you have many ways to contribute to the development of the code, for example: write down a issue about the bug you found, submit a PR (Pull Requests), or simply to some Each feature submits a suggestion, etc.

For [issues]() marked with `PR Welcome`, it is best to submit your first PR If you have any questions in the process, you can always consult any project member in the comment area @ any project member.

## Development Environment Preparation

## Troubleshoot


## Build and Run


### Obtain the Sources

In the first step, you need to fork a copy of the repository, and then clone it locally:

```bash
git clone https://github.com/<<<your-github-account>>>/.git
```

Usually you need to synchronize the latest branch code in advance before modifying or submitting the code.

```bash
git checkout main
git pull https://github.com/opensumi/<<<your-github-account>>>/.git main
```

### Build

```bash
npm install
npm run init
```

### Run

```bash
npm start
```

## Debug

### Browser process

## PR Rules

Each commit should be as small as possible, and you need to fill in your commit information in accordance with [ng4's submission specifications](https://www.npmjs.com/package/@commitlint/config-conventional#type-enum).

For example, you fixed the variable acquisition problem of the debug module, and the submission information can be as follows:

```txt
fix: fix variable acquisition under the debug panel
```

For PR content, just follow the PR and fill in the template.

## Extension Process Debugging

## Feedback
