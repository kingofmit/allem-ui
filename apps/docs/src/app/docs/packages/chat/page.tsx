"use client";

import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import {
  ChatContainer,
  ChatList,
  ChatBubble,
  ChatInput,
  TypingIndicator,
  CodeBlock,
} from "@allem-ui/chat";

export default function ChatPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Chat</h1>
      <p className="mt-2 text-sm font-medium text-indigo-600">@allem-ui/chat</p>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">AI chat interface components — message bubbles, typing indicators, auto-resizing input, and code blocks.</p>

      <h2 className="mt-12 text-xl font-semibold">Installation</h2>
      <div className="mt-4">
        <ComponentPreview code={`npm install @allem-ui/chat`}>
          <pre className="rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100"><code>npm install @allem-ui/chat</code></pre>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">Components</h2>

      <h3 className="mt-8 text-lg font-medium">ChatContainer + ChatList + ChatBubble</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Compose a full chat interface with message bubbles, auto-scrolling, and input.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { ChatContainer, ChatList, ChatBubble, ChatInput } from "@allem-ui/chat";\n\n<ChatContainer>\n  <ChatList>\n    <ChatBubble variant="received" avatar="AI">Hello! How can I help?</ChatBubble>\n    <ChatBubble variant="sent">Tell me about Allem UI</ChatBubble>\n    <ChatBubble variant="received" avatar="AI">Allem UI is the most complete React component library!</ChatBubble>\n  </ChatList>\n  <ChatInput onSend={(msg) => console.log(msg)} placeholder="Type a message..." />\n</ChatContainer>`}>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden" style={{ height: 360 }}>
            <ChatContainer>
              <ChatList>
                <ChatBubble variant="received" avatar="AI">Hello! How can I help?</ChatBubble>
                <ChatBubble variant="sent">Tell me about Allem UI</ChatBubble>
                <ChatBubble variant="received" avatar="AI">Allem UI is the most complete React component library!</ChatBubble>
              </ChatList>
              <ChatInput onSend={() => {}} placeholder="Type a message..." />
            </ChatContainer>
          </div>
        </ComponentPreview>
      </div>

      <h3 className="mt-8 text-lg font-medium">TypingIndicator</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Animated three-dot indicator showing someone is typing.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { TypingIndicator } from "@allem-ui/chat";\n\n<TypingIndicator />`}>
          <div className="py-4">
            <TypingIndicator />
          </div>
        </ComponentPreview>
      </div>

      <h3 className="mt-8 text-lg font-medium">CodeBlock</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">Syntax-styled code block with language label and copy button, designed for chat messages.</p>
      <div className="mt-4">
        <ComponentPreview code={`import { CodeBlock } from "@allem-ui/chat";\n\n<CodeBlock language="typescript" code={\`const greeting = "Hello, Allem UI!";\nconsole.log(greeting);\`} />`}>
          <div className="py-4">
            <CodeBlock language="typescript" code={`const greeting = "Hello, Allem UI!";\nconsole.log(greeting);`} />
          </div>
        </ComponentPreview>
      </div>

      <h2 className="mt-12 text-xl font-semibold">ChatBubble Props</h2>
      <PropsTable
        props={[
          { name: "variant", type: '"sent" | "received"', required: true, description: "Message direction" },
          { name: "avatar", type: "string", description: "Name for avatar initials (received messages)" },
          { name: "timestamp", type: "Date | string", description: "Message timestamp" },
          { name: "status", type: '"sending" | "sent" | "delivered" | "read"', description: "Delivery status (sent messages)" },
          { name: "children", type: "ReactNode", required: true, description: "Message content" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">ChatInput Props</h2>
      <PropsTable
        props={[
          { name: "onSend", type: "(message: string) => void", required: true, description: "Called when user sends a message" },
          { name: "placeholder", type: "string", description: "Input placeholder text" },
          { name: "isLoading", type: "boolean", default: "false", description: "Show loading state on send button" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the input" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">ChatContainer Props</h2>
      <PropsTable
        props={[
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">ChatList Props</h2>
      <PropsTable
        props={[
          { name: "autoScroll", type: "boolean", default: "true", description: "Auto-scroll to latest message" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">TypingIndicator Props</h2>
      <PropsTable
        props={[
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">CodeBlock Props</h2>
      <PropsTable
        props={[
          { name: "code", type: "string", required: true, description: "Code content" },
          { name: "language", type: "string", description: "Language label" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />

      <h2 className="mt-8 text-xl font-semibold">MessageGroup Props</h2>
      <PropsTable
        props={[
          { name: "avatar", type: "string", description: "Avatar initials" },
          { name: "variant", type: '"sent" | "received"', required: true, description: "Message direction" },
          { name: "children", type: "ReactNode", required: true, description: "ChatBubble elements" },
          { name: "className", type: "string", description: "Additional CSS classes" },
        ]}
      />
    </div>
  );
}
