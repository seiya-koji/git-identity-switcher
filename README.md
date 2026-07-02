# Git Identity Indicator

[![VS Marketplace Version](https://badgen.net/vs-marketplace/v/seiya-koji.git-identity-indicator?label=version)](https://marketplace.visualstudio.com/items?itemName=seiya-koji.git-identity-indicator)
[![VS Marketplace Installs](https://badgen.net/vs-marketplace/i/seiya-koji.git-identity-indicator?label=installs)](https://marketplace.visualstudio.com/items?itemName=seiya-koji.git-identity-indicator)
[![VS Marketplace Rating](https://badgen.net/vs-marketplace/rating/seiya-koji.git-identity-indicator?label=rating)](https://marketplace.visualstudio.com/items?itemName=seiya-koji.git-identity-indicator)
[![Open VSX Version](https://img.shields.io/open-vsx/v/seiya-koji/git-identity-indicator?label=open%20vsx)](https://open-vsx.org/extension/seiya-koji/git-identity-indicator)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Show the current git user email in the VS Code status bar so you always know which identity will be used for the next commit.

## Features

- **Status bar indicator** — shows the effective `user.email` for the current workspace
- **Tooltip** — hover to see both `user.name` and `user.email`
- **Auto-refresh** — updates when you switch to a file in a different workspace folder

Works with Git's `includeIf` conditional config, so the displayed email reflects the actual identity that will be used when you commit.

## Installation

Install it from the Visual Studio Code Marketplace.

<https://marketplace.visualstudio.com/items?itemName=seiya-koji.git-identity-indicator>

## Usage

Open any git repository in VS Code and the current git email appears in the status bar (bottom left).

## Configuration

| Setting                          | Default | Description                                 |
| -------------------------------- | ------- | ------------------------------------------- |
| `gitIdentity.statusBar.priority` | `100`   | Status bar position (higher = further left) |
