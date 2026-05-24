"use client";

import {
  Badge,
  Box,
  Flex,
  Container,
  Heading,
  Text,
  Code,
  Link,
  Divider,
  ToastProvider,
} from "@allem-ui/react";
import {
  ChangelogTimeline,
  ChangelogEntry,
  VersionBadge,
  ChangelogGroup,
  ChangelogGroupItem,
} from "@allem-ui/changelog";
import { DashboardShell } from "../../components/DashboardShell";

function ChangelogContent() {
  return (
    <DashboardShell
      active="/changelog"
      title="Changelog"
      headerRight={
        <Badge variant="subtle" color="primary" size="sm">Latest: v2.4.0</Badge>
      }
    >
      <Container size="md">
        <Box className="mb-10">
          <Heading as="h1" size="xl">Changelog</Heading>
          <Text className="mt-2 text-neutral-500 dark:text-neutral-400">
            All notable changes to the dashboard. Follow our releases and stay up to date with new features, improvements, and fixes.
          </Text>
        </Box>

        <ChangelogTimeline>
          {/* v2.4.0 */}
          <ChangelogEntry
            date="May 20, 2026"
            version="2.4.0"
            title="Kanban Board & Command Palette"
            description="Major release with two new modules for project management and quick navigation."
            type="added"
          >
            <Flex className="gap-2 mb-4">
              <VersionBadge version="2.4.0" />
              <Badge variant="subtle" color="success" size="sm">Latest</Badge>
            </Flex>

            <ChangelogGroup type="added">
              <ChangelogGroupItem>
                Kanban board with drag-and-drop, column management, and card labels — see <Link href="#">PR #142</Link>
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                Command palette (<Code>⌘K</Code>) with grouped results, keyboard navigation, and shortcut badges
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                Spotlight tour component for interactive product onboarding
              </ChangelogGroupItem>
            </ChangelogGroup>

            <ChangelogGroup type="changed">
              <ChangelogGroupItem>
                Dashboard sidebar now shows all 12 pages with reorganized navigation order
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                Upgraded to <Code>next@16.2.0</Code> with Turbopack for faster dev builds
              </ChangelogGroupItem>
            </ChangelogGroup>
          </ChangelogEntry>

          <Box className="my-2">
            <Divider />
          </Box>

          {/* v2.3.0 */}
          <ChangelogEntry
            date="April 15, 2026"
            version="2.3.0"
            title="Rich Text Editor & File Upload"
            description="New content creation tools with zero third-party dependencies."
            type="added"
          >
            <Flex className="gap-2 mb-4">
              <VersionBadge version="2.3.0" />
            </Flex>

            <ChangelogGroup type="added">
              <ChangelogGroupItem>
                Rich text editor with bubble menu, markdown shortcuts, and <Code>contentEditable</Code> API
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                File upload with drag-and-drop, image previews, progress tracking, and validation
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                <Code>useRichText</Code> hook for building custom editor layouts
              </ChangelogGroupItem>
            </ChangelogGroup>

            <ChangelogGroup type="fixed">
              <ChangelogGroupItem>
                Fixed Tailwind class scanning in monorepo dev mode — <Link href="#">issue #98</Link>
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                Resolved <Code>@types/react</Code> version mismatch in docs app
              </ChangelogGroupItem>
            </ChangelogGroup>
          </ChangelogEntry>

          <Box className="my-2">
            <Divider />
          </Box>

          {/* v2.2.0 */}
          <ChangelogEntry
            date="March 8, 2026"
            version="2.2.0"
            title="Data Grid & Pricing Components"
            description="New data-heavy components for product pages and admin dashboards."
            type="added"
          >
            <Flex className="gap-2 mb-4">
              <VersionBadge version="2.2.0" />
            </Flex>

            <ChangelogGroup type="added">
              <ChangelogGroupItem>
                Data grid with sorting, filtering, row selection, and pagination — powered by <Code>@tanstack/react-table</Code>
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                Pricing components: cards, toggle, comparison table, and feature lists
              </ChangelogGroupItem>
            </ChangelogGroup>

            <ChangelogGroup type="changed">
              <ChangelogGroupItem>
                <Code>Button</Code> variant <Code>&quot;primary&quot;</Code> renamed to <Code>&quot;solid&quot;</Code> for consistency
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                All <Code>@source</Code> directives documented in package READMEs for Tailwind CSS v4 setup
              </ChangelogGroupItem>
            </ChangelogGroup>
          </ChangelogEntry>

          <Box className="my-2">
            <Divider />
          </Box>

          {/* v2.1.0 */}
          <ChangelogEntry
            date="February 1, 2026"
            version="2.1.0"
            title="Dark Mode & Accessibility Improvements"
            type="changed"
          >
            <Flex className="gap-2 mb-4">
              <VersionBadge version="2.1.0" type="minor" />
            </Flex>

            <ChangelogGroup type="changed">
              <ChangelogGroupItem>
                Switched to <Code>@custom-variant dark</Code> for Tailwind CSS v4 dark mode support
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                All form components now use React Aria for full keyboard and screen reader support
              </ChangelogGroupItem>
            </ChangelogGroup>

            <ChangelogGroup type="fixed">
              <ChangelogGroupItem>
                Fixed <Code>Input</Code> using <Code>readOnly</Code> instead of React Aria&apos;s <Code>isReadOnly</Code>
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                Fixed <Code>TableHead</Code> requiring children — now accepts empty content
              </ChangelogGroupItem>
              <ChangelogGroupItem>
                Fixed focus ring contrast in dark mode across all interactive components
              </ChangelogGroupItem>
            </ChangelogGroup>

            <ChangelogGroup type="removed">
              <ChangelogGroupItem>
                Removed deprecated <Code>variant=&quot;primary&quot;</Code> from Button — use <Code>variant=&quot;solid&quot;</Code>
              </ChangelogGroupItem>
            </ChangelogGroup>
          </ChangelogEntry>
        </ChangelogTimeline>

        <Box className="mt-12 text-center">
          <Text className="text-neutral-400 dark:text-neutral-500">
            Looking for older releases? Check the <Link href="#">full release history</Link> on GitHub.
          </Text>
        </Box>
      </Container>
    </DashboardShell>
  );
}

export default function ChangelogPage() {
  return (
    <ToastProvider>
      <ChangelogContent />
    </ToastProvider>
  );
}
