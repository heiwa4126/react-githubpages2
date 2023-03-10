# react-githubpages1

React の SPA を main ブランチ に push する毎に
GitHub Pages としてデプロイするサンプル。

このレポジトリでは
https://heiwa4126.github.io/react-githubpages1/
にデプロイされる。

peaceiris/actions-gh-pages でなく
[actions/deploy-pages](https://github.com/actions/deploy-pages)使用。

あと npm でなく pnpm 使用。

## 参考

- [Deploying a Static Site \| Vite](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Setup pnpm · Actions · GitHub Marketplace](https://github.com/marketplace/actions/setup-pnpm)

## メモ

.js と.html が動的?に gzip 圧縮で転送される。
どの段階で圧縮されるかは不明。
