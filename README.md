# react-githubpages1

React の SPA を SemVer 式の tag つけて push するごとに
GitHub Pages としてデプロイするサンプル。

このレポジトリでは
https://heiwa4126.github.io/react-githubpages1/
にデプロイされる。

peaceiris/actions-gh-pages でなく
[actions/deploy-pages](https://github.com/actions/deploy-pages)使用。

あと npm でなく pnpm 使用。

## 別のレポジトリで使う手順

Vite でプロジェクト作る。

```bash
pnpm create vite@latest react-githubpages1 --template react-ts
cd react-githubpages1
```

このプロジェクトの
`.github\workflows\pages.yml` をコピー。

`vite.config.ts` の 設定のうち [base](https://ja.vitejs.dev/config/shared-options.html#base) を以下のように追加/編集

```yaml
base: process.env.GITHUB_REPO_NAME ?? "./",
```

SPA の動作確認 と git init & commit。GitHub でレポジトリを作り、push する。

GitHub で Settings ⇒ Pages ⇒ Source を `GitHub Actions` に設定。

同じく
GitHub で Settings ⇒ Environment ⇒ New environment を押して
(すでに environment あれば追加でも OK)
"github-pages" という名前で追加(名前はなんでも OK。最近はこの 1 つ前の設定で自動生成されてる時もある)。

**ここ重要**
いま追加した環境の
`Deployment branches and tags`
の `Add deployment branch or tag rule` で
プルダウンで `Ref type` を `Tag` にして
`Name pattern` を `v*.*.*` と書く。
(こっちでは正規表現が使えないから。変だけど我慢すること)

### Enterprise の場合の追加設定

GitHub Pages は free のレポジトリと Enterprise で違う構造の URL に発行される。

実際に試したところ

- free - `https://{GitHubID}.github.io/{RepositoryName}/`
- Enterprise - `https://{randomName}.github.io/`

になる。で、この差を吸収するために .github/workflows/pages.yml で IS_ENTERPRISE という環境変数を参照しているので、これを設定してください。

**手順**

1. GitHub で対象のリポジトリに移動し、右上の「Settings」をクリック
2. 左側のメニューから「Secrets and variables」 > 「Actions」を選択 3.「New repository secret」ボタンをクリック
3. シークレットの名前と値を入力:
   - Name: `IS_ENTERPRISE`
   - Value: `true` (Enterprise 環境の場合。Free の場合は設定しないか`false`を設定)
4. 「Add secret」ボタンをクリックしてシークレットを保存

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

- [Deploying a Static Site \| Vite](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [Setup pnpm · Actions · GitHub Marketplace](https://github.com/marketplace/actions/setup-pnpm)

## メモ

.js と.html が動的?に gzip 圧縮で転送される。
どの段階で圧縮されるかは不明。
