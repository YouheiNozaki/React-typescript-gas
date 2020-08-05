# React-typescript-gas
ReactとTypeScriptとgoogle-app-scriptでの環境構築

## 使い方
google-appsscriptをローカル環境で開発するclaspを利用します。
以下のドキュメントを参考にしてください。
https://github.com/google/clasp

### claspの設定
clasp.jsonを書き換える
clasp.jsonのscriptIdを自身のgoogleScriptのIdに変更します。
rootディレクトリはdistになっています。
~~~json
{"scriptId":"yourscriptId","rootDir":"./dist"}
~~~

### 開発
  
*フロントエンドをローカルで開発*  
webpack-dev-serverが起動して、localhost://8080が立ち上がります。
~~~
yarn start
~~~  
  
*ビルド*  
distファイルを``rimraf``を使って削除。  
webpackでビルドしてdist配下にバンドルされます。
~~~
yarn build
~~~  
  
*デプロイ*  
``yarn build``を実行して、``clasp push``でgoogleappsscriptにdeployします。
~~~
yarn run deploy
~~~  
  
*ファイルを開く*  
紐づいたスクリプトエディタを開きます。 
webアプリケーションとして実行でアプリケーションをgoogleappsscript上で実行することができます。
~~~
yarn run open
~~~


## 使用技術
- React
- TypeScript
- @types/gppgle-apps-script
- webpack
- webpack-dev-server
- html-webpackinline-source-plugin etc

### html-webpack-inline-source-plugin
htmlファイルにjs|cssなどをインライン化してバンドルする。
GASアプリケーションは単一ファイル、htmlで出力が原則なのでこのプラグインを使用する。
詳しい設定は``webpack.config.js``

### copy-webpack-plugin
ファイルをバンドルせずにそのままコピーするプラグイン。　　
GASアプリケーションではdoGet関数がそのまま出力されていないとhtmlファイルを読み込むことができない。  
doGet関数でjsファイルなどがインライン化されたindex.htmlファイルを読み込む。
~~~js
function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}
~~~
TSファイルでそのまま出力しているが、claspがgsファイルに変換してくれるので読み込んでくれる。
GASアプリケーションをpushするにはappsscriptjsonもdist配下にある必要があるので、これもコピーする。

## まだ実装していないことリスト
- server(API)を出力するwebpack設定(そもそもAPiを書いていない)
- production/development環境にwebpackの設定を細かく分けていない(現状問題はないがPWA設定、パフォーマンス設定をするときに詰む)。


