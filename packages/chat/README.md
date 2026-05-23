<p align="center">
  <img src="https://raw.githubusercontent.com/kingofmit/allem-ui/main/.github/AllemUI.png" alt="Allem UI Chat" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@allem-ui/chat"><img src="https://img.shields.io/npm/v/@allem-ui/chat.svg" alt="npm version" /></a>
  <a href="https://github.com/kingofmit/allem-ui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License" /></a>
  <img src="https://img.shields.io/badge/react-19-61dafb" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/typescript-strict-blue" alt="TypeScript" />
</p>

# @allem-ui/chat

AI chat interface components for Allem UI -- chat bubbles, typing indicators, message groups, and syntax-highlighted code blocks.

## Installation

```bash
npm install @allem-ui/chat @allem-ui/react @allem-ui/theme
```

## Tailwind CSS Setup

Add the following to your main CSS file (e.g. `globals.css`) so Tailwind generates the utility classes used by the components:

```css
@import "tailwindcss";
@source "@allem-ui/react";
@source "@allem-ui/chat";
@source "@allem-ui/theme";
```

> **Note:** The `@source` directive tells Tailwind CSS v4 to scan the package for class names. Without it, component styles like padding, borders, and colors won't be generated.

## Quick Start

```tsx
import {
  ChatContainer,
  ChatList,
  ChatBubble,
  ChatInput,
  TypingIndicator,
} from "@allem-ui/chat";

export function ChatApp() {
  return (
    <ChatContainer>
      <ChatList>
        <ChatBubble variant="received">Hello! How can I help?</ChatBubble>
        <ChatBubble variant="sent">Tell me about Allem UI.</ChatBubble>
        <TypingIndicator />
      </ChatList>
      <ChatInput placeholder="Type a message..." />
    </ChatContainer>
  );
}
```

## Components

| Component | Description |
|-----------|-------------|
| `ChatContainer` | Top-level wrapper for the chat interface |
| `ChatList` | Scrollable message list container |
| `ChatBubble` | Individual chat message bubble |
| `ChatInput` | Message input field with send action |
| `TypingIndicator` | Animated typing dots indicator |
| `MessageGroup` | Groups consecutive messages from the same sender |
| `CodeBlock` | Syntax-highlighted code block for messages |

## Features

- **AI-ready** -- Built for AI chat interfaces with sent/received message variants
- **Code blocks** -- Syntax-highlighted code rendering inside messages
- **Typing indicator** -- Animated dots for real-time typing feedback
- **Message grouping** -- Automatically groups consecutive messages
- **Dark mode** -- First-class dark mode with `dark:` Tailwind prefix
- **TypeScript strict** -- Full type safety with exported prop types
- **Tree-shakeable** -- ESM + CJS builds, import only what you use

## Part of Allem UI

This is a standalone package in the [Allem UI](https://github.com/kingofmit/allem-ui) monorepo. For core components, see [`@allem-ui/react`](https://www.npmjs.com/package/@allem-ui/react).

## Support

If you find Allem UI useful, consider supporting its development:

<a href="https://buymeacoffee.com/kingofmit" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" /></a>

## License

[MIT](https://github.com/kingofmit/allem-ui/blob/main/LICENSE) - [Ahmed Allem](https://kingallem.com)
