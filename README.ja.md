# Git Identity Indicator

> 本ファイルは [README.md](README.md) の日本語訳（内容確認用）です。

[![VS Marketplace Version](https://badgen.net/vs-marketplace/v/seiya-koji.git-identity-indicator?label=version)](https://marketplace.visualstudio.com/items?itemName=seiya-koji.git-identity-indicator)
[![VS Marketplace Installs](https://badgen.net/vs-marketplace/i/seiya-koji.git-identity-indicator?label=installs)](https://marketplace.visualstudio.com/items?itemName=seiya-koji.git-identity-indicator)
[![VS Marketplace Rating](https://badgen.net/vs-marketplace/rating/seiya-koji.git-identity-indicator?label=rating)](https://marketplace.visualstudio.com/items?itemName=seiya-koji.git-identity-indicator)
[![Open VSX Version](https://img.shields.io/open-vsx/v/seiya-koji/git-identity-indicator?label=open%20vsx)](https://open-vsx.org/extension/seiya-koji/git-identity-indicator)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

現在の git ユーザーのメールアドレスを VS Code のステータスバーに表示し、次のコミットでどの ID が使われるかを常に把握できるようにします。

## 機能

- **ステータスバー表示** — 現在のワークスペースで有効な `user.email` を表示します。
- **ツールチップ** — ホバーすると `user.name` と `user.email` の両方を確認できます。
- **自動更新** — 別のワークスペースフォルダーのファイルに切り替えたときに表示を更新します。

Git の `includeIf` 条件付き設定にも対応しているため、表示されるメールアドレスはコミット時に実際に使われる ID を反映します。

## インストール

Visual Studio Code Marketplace からインストールしてください。

<https://marketplace.visualstudio.com/items?itemName=seiya-koji.git-identity-indicator>

## 使い方

VS Code で任意の git リポジトリを開くと、現在の git メールアドレスがステータスバー（左下）に表示されます。

## 設定

| 設定                             | 既定値 | 説明                                               |
| -------------------------------- | ------ | -------------------------------------------------- |
| `gitIdentity.statusBar.priority` | `100`  | ステータスバーの表示位置（大きいほど左寄り）です。 |
