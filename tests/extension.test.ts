import { vi, describe, it, expect, beforeEach } from 'vitest';
import * as vscode from 'vscode';

vi.mock('node:child_process', () => ({
  default: { exec: vi.fn() },
  exec: vi.fn(),
}));

describe('activate', () => {
  let mockContext: vscode.ExtensionContext;

  beforeEach(() => {
    mockContext = {
      subscriptions: { push: vi.fn() },
    } as unknown as vscode.ExtensionContext;
    vi.clearAllMocks();
  });

  it('registers status bar item and event listeners', async () => {
    const { activate } = await import('../src/extension');
    activate(mockContext);

    expect(vscode.window.createStatusBarItem).toHaveBeenCalledWith(
      vscode.StatusBarAlignment.Left,
      100
    );
    expect(mockContext.subscriptions.push).toHaveBeenCalled();
  });
});

