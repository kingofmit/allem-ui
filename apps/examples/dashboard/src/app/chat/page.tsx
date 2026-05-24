"use client";

import { useState, useCallback } from "react";
import {
  Card, CardBody,
  Badge,
  Button,
  Skeleton,
  Spinner,
  Tooltip, TooltipContent,
  Divider,
  ToastProvider, useToast,
} from "@allem-ui/react";
import {
  ChatContainer,
  ChatList,
  ChatBubble,
  ChatInput,
  TypingIndicator,
  MessageGroup,
  CodeBlock,
} from "@allem-ui/chat";
import { DashboardShell } from "../../components/DashboardShell";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  code?: { code: string; language: string };
  timestamp: string;
}

const conversations = [
  { id: "1", title: "Dashboard metrics query", preview: "How do I get monthly revenue?", time: "2m ago" },
  { id: "2", title: "User retention analysis", preview: "Show me the churn rate...", time: "1h ago" },
  { id: "3", title: "API integration help", preview: "How to connect Stripe?", time: "3h ago" },
];

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hi! I'm your dashboard AI assistant. I can help you query data, generate reports, and answer questions about your metrics. What would you like to know?",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    role: "user",
    content: "Can you show me the SQL query to get monthly revenue for the last 6 months?",
    timestamp: "10:31 AM",
  },
  {
    id: "3",
    role: "assistant",
    content: "Here's a query that will get your monthly revenue breakdown:",
    code: {
      code: `SELECT
  DATE_TRUNC('month', created_at) AS month,
  SUM(amount) AS revenue,
  COUNT(DISTINCT customer_id) AS customers
FROM transactions
WHERE created_at >= NOW() - INTERVAL '6 months'
  AND status = 'completed'
GROUP BY month
ORDER BY month DESC;`,
      language: "sql",
    },
    timestamp: "10:31 AM",
  },
  {
    id: "4",
    role: "user",
    content: "That's great! What's the average revenue per customer?",
    timestamp: "10:32 AM",
  },
  {
    id: "5",
    role: "assistant",
    content: "Based on your last 6 months of data, the average revenue per customer is $127.50. This is up 12% from the previous period. Your top 10% of customers account for roughly 45% of total revenue — a healthy distribution for a SaaS business.",
    timestamp: "10:32 AM",
  },
];

const assistantReplies = [
  "I've analyzed your data. Your month-over-month growth rate is 8.3%, which is above the industry benchmark of 5-7%. Keep up the good work!",
  "Based on the current trends, I project your Q3 revenue will be approximately $142,000. This assumes the same growth trajectory from the past 90 days.",
  "I found 3 anomalies in yesterday's data: a spike in API errors at 2:14 AM, an unusual signup pattern from a single IP range, and a 40% drop in checkout completions between 3-4 PM. Want me to investigate any of these?",
];

function ChatContent() {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const [activeConvo, setActiveConvo] = useState("1");
  const [replyIndex, setReplyIndex] = useState(0);

  const handleSend = useCallback((text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: assistantReplies[replyIndex % assistantReplies.length],
        timestamp: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
      setReplyIndex((i) => i + 1);
    }, 1500);
  }, [replyIndex]);

  return (
    <DashboardShell
      active="/chat"
      title="AI Assistant"
      headerRight={
        <>
          <Badge variant="subtle" color="success" size="sm">Online</Badge>
          {isTyping && <Spinner size="sm" />}
          <Button
            variant="outline"
            size="sm"
            onPress={() => {
              setMessages(initialMessages);
              toast({ title: "Conversation reset", description: "Starting fresh." });
            }}
          >
            New Chat
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[280px_1fr] h-[calc(100vh-7rem)]">
        {/* Sidebar — Conversations */}
        <Card className="overflow-hidden">
          <CardBody className="p-3 space-y-1">
            <p className="px-2 py-1.5 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Conversations</p>
            {conversations.map((convo, i) => (
              <div key={convo.id}>
                <button
                  onClick={() => setActiveConvo(convo.id)}
                  className={`w-full text-left rounded-lg px-3 py-2.5 transition-colors cursor-pointer ${
                    activeConvo === convo.id
                      ? "bg-indigo-50 dark:bg-indigo-950/50"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium truncate ${
                      activeConvo === convo.id ? "text-indigo-700 dark:text-indigo-300" : ""
                    }`}>{convo.title}</span>
                    <span className="text-[11px] text-neutral-400 shrink-0 ml-2">{convo.time}</span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">{convo.preview}</p>
                </button>
                {i < conversations.length - 1 && <Divider className="my-1" />}
              </div>
            ))}

            <Divider className="my-2" />
            <p className="px-2 py-1.5 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Loading...</p>
            <div className="space-y-3 px-2">
              <Skeleton className="h-10 rounded-lg" />
              <Skeleton className="h-10 rounded-lg" />
            </div>
          </CardBody>
        </Card>

        {/* Main Chat Area */}
        <Card className="flex flex-col overflow-hidden">
          <CardBody className="flex flex-col flex-1 p-0 overflow-hidden">
            <ChatContainer className="flex flex-col flex-1 overflow-hidden">
              <ChatList className="flex-1 overflow-y-auto p-4" autoScroll>
                {/* Assistant group */}
                <MessageGroup variant="received">
                  <ChatBubble variant="received" timestamp={messages[0].timestamp}>
                    {messages[0].content}
                  </ChatBubble>
                </MessageGroup>

                {/* Remaining messages */}
                {messages.slice(1).map((msg) => (
                  <MessageGroup key={msg.id} variant={msg.role === "user" ? "sent" : "received"}>
                    <Tooltip>
                      <ChatBubble
                        variant={msg.role === "user" ? "sent" : "received"}
                        timestamp={msg.timestamp}
                        status={msg.role === "user" ? "read" : undefined}
                      >
                        {msg.content}
                        {msg.code && (
                          <div className="mt-2">
                            <CodeBlock code={msg.code.code} language={msg.code.language} />
                          </div>
                        )}
                      </ChatBubble>
                      <TooltipContent>Sent at {msg.timestamp}</TooltipContent>
                    </Tooltip>
                  </MessageGroup>
                ))}

                {isTyping && <TypingIndicator />}
              </ChatList>

              <div className="border-t border-neutral-200 dark:border-neutral-800 p-4">
                <ChatInput
                  onSend={handleSend}
                  placeholder="Ask about your dashboard data..."
                  isLoading={isTyping}
                />
              </div>
            </ChatContainer>
          </CardBody>
        </Card>
      </div>
    </DashboardShell>
  );
}

export default function ChatPage() {
  return (
    <ToastProvider>
      <ChatContent />
    </ToastProvider>
  );
}
