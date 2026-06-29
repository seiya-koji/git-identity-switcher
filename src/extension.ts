import * as vscode from 'vscode';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
  const priority: number =
    vscode.workspace.getConfiguration('gitIdentity').get('statusBar.priority') ?? 100;

  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, priority);

  context.subscriptions.push(
    statusBarItem,
    vscode.commands.registerCommand('gitIdentity.refresh', refreshStatusBar),
    vscode.window.onDidChangeActiveTextEditor(refreshStatusBar),
    vscode.workspace.onDidChangeWorkspaceFolders(refreshStatusBar)
  );

  refreshStatusBar();
}

function getWorkspaceRoot(): string | undefined {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const folder = vscode.workspace.getWorkspaceFolder(editor.document.uri);
    if (folder) return folder.uri.fsPath;
  }
  return vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
}

async function gitConfig(key: string, cwd: string): Promise<string> {
  try {
    const { stdout } = await execAsync(`git config ${key}`, { cwd });
    return stdout.trim();
  } catch {
    return '';
  }
}

async function refreshStatusBar() {
  const cwd = getWorkspaceRoot();
  if (!cwd) {
    statusBarItem.hide();
    return;
  }

  const [name, email] = await Promise.all([
    gitConfig('user.name', cwd),
    gitConfig('user.email', cwd),
  ]);

  if (!name && !email) {
    statusBarItem.hide();
    return;
  }

  statusBarItem.text = `$(account) ${email || name}`;
  statusBarItem.tooltip = new vscode.MarkdownString(
    `**Git Identity**\n\n- Name: \`${name || '(not set)'}\`\n- Email: \`${email || '(not set)'}\``
  );
  statusBarItem.show();
}
