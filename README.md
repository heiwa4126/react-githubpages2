# react-githubpages1

React の SPA を

- main ブランチ に push し、
- さらにタグをつける

毎に GitHub Pages としてデプロイするサンプル。

このレポジトリでは
https://heiwa4126.github.io/react-githubpages1/
にデプロイされる。

peaceiris/actions-gh-pages でなく
[actions/deploy-pages](https://github.com/actions/deploy-pages)使用。

あと npm でなく pnpm 使用。

## 1 から作る手順

Vite でプロジェクト作る。

```bash
pnpm create vite@latest react-githubpages1 -- --template react-ts
cd react-githubpages1
```

`vite.config.ts` の 設定のうち [base](https://ja.vitejs.dev/config/shared-options.html#base) を以下のように追加/編集

```yaml
base: process.env.GITHUB_REPO_NAME ?? "./",
```

SPA の動作確認 と git init & commit。GitHub でレポジトリを作り、push する。

GitHub で Settings ⇒ Pages ⇒ Source を `GitHub Actions` に設定。

`.github\workflows\main.yml` を書いて、commit & push。
main ブランチに push する毎に GitHub Pages がビルドされるようになっている。

あとは

```bash
# main ブランチ以外で開発
git checkout dev
# main に merge & push
git checkout main
git merge main
git push origin main
# mainにタグ付け & push
git tag v9.9.9
git push origin main --tags
# GitHub Pages が生成されたので 開発にもどる
git checkout dev
```

という手順で作業する。

## 参考

- [Deploying a Static Site \| Vite](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Setup pnpm · Actions · GitHub Marketplace](https://github.com/marketplace/actions/setup-pnpm)

## メモ

.js と.html が動的?に gzip 圧縮で転送される。
どの段階で圧縮されるかは不明。
