# react-githubpages2

React の SPA を SemVer 式の tag つけて push するごとに
GitHub Pages としてデプロイするサンプル。

**Fallback Routing のテストで、index.html と同じ内容で 404.html をデプロイする。**

このレポジトリでは
https://heiwa4126.github.io/react-githubpages2/
にデプロイされる。

npm でなく pnpm 使用。

## 発行する手順

ブランチはどれでも関係ない。

```sh
git commit -am xxxxx`
pnpm version patch  # `pnpm version --help` 参照。実はこれ`npm version`呼んでるだけ
git push
git push --tags
```

で、このアクションが動いて GitHub Pages に出る。

## 参考

- フォーク元。[heiwa4126/react-githubpages1: React の SPA を SemVer タグで push する毎に GitHub Pages としてデプロイするサンプル。](https://github.com/heiwa4126/react-githubpages1)
