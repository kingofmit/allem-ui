# Chat

```bash
npm i @allem-ui/chat
```

```tsx
import {
  ChatContainer,
  ChatList,
  ChatBubble,
  ChatInput,
  TypingIndicator,
  MessageGroup,
  CodeBlock,
} from "@allem-ui/chat";
```

Peer dependencies: `@allem-ui/react`, `@allem-ui/theme`, `react`, `tailwindcss`.

## Basic chat

```tsx
<ChatContainer>
  <ChatList>
    <ChatBubble variant="received" avatar="AI">
      Hello! How can I help you today?
    </ChatBubble>
    <ChatBubble variant="sent" avatar="You" timestamp={new Date()}>
      Can you explain React hooks?
    </ChatBubble>
    <TypingIndicator />
  </ChatList>
  <ChatInput onSend={(message) => sendMessage(message)} />
</ChatContainer>
```

## Components

### ChatContainer
Full-height flex column wrapper. Use as the outermost chat wrapper.

### ChatList
Scrollable message area with auto-scroll to bottom on new messages. Shows a "scroll to bottom" button when scrolled up.

Props: `autoScroll` (default: `true`).

### ChatBubble

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"sent" \| "received"` | required |
| `avatar` | `string` | — |
| `timestamp` | `Date \| string` | — |
| `status` | `"sending" \| "sent" \| "delivered" \| "read"` | — |

- `sent`: right-aligned, indigo background
- `received`: left-aligned, neutral background
- `avatar`: renders initials in a circle
- `status`: only shown on `sent` messages (checkmark icons)

### ChatInput
Auto-growing textarea. `Enter` sends, `Shift+Enter` for newline.

| Prop | Type | Default |
|------|------|---------|
| `onSend` | `(message: string) => void` | required |
| `placeholder` | `string` | `"Type a message..."` |
| `isLoading` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |

### MessageGroup
Groups multiple consecutive messages from the same sender with smart corner rounding.

```tsx
<MessageGroup variant="received" avatar="AI">
  <ChatBubble variant="received">First message</ChatBubble>
  <ChatBubble variant="received">Second message</ChatBubble>
</MessageGroup>
```

### TypingIndicator
Three bouncing dots. Always left-aligned (received position).

```tsx
{isTyping && <TypingIndicator />}
```

### CodeBlock
Code display with copy button.

```tsx
<CodeBlock code={`const x = 42;`} language="typescript" />
```

Props: `code` (required), `language` (display only, no syntax highlighting).

## Full example with state

```tsx
import { useState } from "react";
import { ChatContainer, ChatList, ChatBubble, ChatInput, TypingIndicator } from "@allem-ui/chat";

type Message = { id: string; role: "user" | "assistant"; content: string; createdAt: Date };

function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (content: string) => {
    const userMsg = { id: crypto.randomUUID(), role: "user" as const, content, createdAt: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    
    const response = await fetchAIResponse(content);
    setIsTyping(false);
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: response, createdAt: new Date() }]);
  };

  return (
    <ChatContainer>
      <ChatList>
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            variant={msg.role === "user" ? "sent" : "received"}
            avatar={msg.role === "user" ? "You" : "AI"}
            timestamp={msg.createdAt}
          >
            {msg.content}
          </ChatBubble>
        ))}
        {isTyping && <TypingIndicator />}
      </ChatList>
      <ChatInput onSend={handleSend} isLoading={isTyping} />
    </ChatContainer>
  );
}
```
