import { vi } from 'vitest';

const StatusBarAlignment = { Left: 1, Right: 2 };

const window = {
  createStatusBarItem: vi.fn(() => ({
    text: '',
    tooltip: undefined,
    show: vi.fn(),
    hide: vi.fn(),
    dispose: vi.fn(),
  })),
  activeTextEditor: undefined as unknown,
  onDidChangeActiveTextEditor: vi.fn(() => ({ dispose: vi.fn() })),
};

const workspace = {
  getConfiguration: vi.fn(() => ({ get: vi.fn(() => 100) })),
  getWorkspaceFolder: vi.fn(),
  workspaceFolders: undefined as unknown,
  onDidChangeWorkspaceFolders: vi.fn(() => ({ dispose: vi.fn() })),
};

const commands = {
  registerCommand: vi.fn(() => ({ dispose: vi.fn() })),
};

class MarkdownString {
  constructor(public readonly value: string) {}
}

export { window, workspace, commands, StatusBarAlignment, MarkdownString };
