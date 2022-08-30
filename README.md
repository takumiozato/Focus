# Focus
ポモドーロタイマーをNext.js + TypeScriptで作成
<br />
※現状、未完成

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/takumiozato/Focus)

## 概要
1. 集中開始ボタンを押すと、25分のタイマーが起動
2. 25分経過したら、休憩ボタンが表示される
3. 休憩ボタンを押すと、5分のタイマーが起動
4. 休憩ボタンを押した時点で1セット完了と見なし、localstorageを更新

- 1日の目標セット数を設定することができ、目標達成しているかどうかをチェックできる
- これまでの完了したセット数を日毎にチェックすることが可能

### 開発の動機
- 日々仕事をするうえでポモドーロタイマーのアプリを使っているが、過去のポモドーロの記録を参照するには有料プランに切り替える必要があった。
他のアプリを使おうか迷っていたが、せっかくなので自分で作ってみることにした。
- 比較的少ない機能でスタートできて、あとで様々な機能拡張が出来そうなので勉強用に良さそう。

## デザイン
https://www.figma.com/file/O8iq8xWULppxHDCijkKS9T/Untitled?node-id=0%3A1
<img width="749" alt="image" src="https://user-images.githubusercontent.com/47093774/187232939-d2e9df74-15be-4acc-a09e-bc3f85e5df00.png">


## ビルド方法

```bash
npm run dev
# or
yarn dev
```

[http://localhost:3000](http://localhost:3000)　を開く

## 技術構成
- Next.js
- TypeScript
- Firestore（ゆくゆくは）
  - 一旦、データはlocalstorageに保存するよう実装
  - ゆくゆくはFirestoreを使いたい
  - 後で置き換えやすいようにhookにしておいてロジックが露出しないようにする
- Sass
- Prettier

## ディレクトリ構成
基本的にこちらの記事を参考
<br />
https://zenn.dev/yoshiko/articles/99f8047555f700

### components
`components/pages`
- 1つのページを表すcomponentを配置する（1ページにつき、必ず対応するpage componentがある）

`components/elements`
- ロジックを持たず、見た目に責務を持ったcomponentを配置する


component内のファイル構成
```
Hoge/
├─ style.module.scss
└─ index.tsx
```
すべてのcomponentは基本的に、
<br />
componentの実体を持つindex.tsxと
<br />
スタイリングをするstyle.module.scssで構成。

※cssファイルを`/styles/`に配置するか迷ったが、
スタイルに関するものも含めてcomponentに関わるものはすべて同じディレクトリにある方がわかりやすいと判断。

### hooks（未実装）
custom hooksはすべてここに配置。
<br />
ポモドーロタイマーを1セット終えたときにlocalstorage（ゆくゆくはFirestore）に保存する処理など
<br />
アプリケーション固有の機能はhook化してここに置きたい。

### pages
Next.jsの仕様上、`/pages/`に配置したファイルで自動ルーティングが組まれるため、
<br />
`pages`の責務はルーティングだけということにして、実際のページの中身は`/components/pages`に持たせる。

### styles
すべてのcomponentに参照されうるstyleに関するファイルは、すべてここに置く。
<br />
component固有のstyleは、各componentフォルダ内に配置。
