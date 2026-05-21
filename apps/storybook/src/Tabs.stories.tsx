import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanel } from "@allem-ui/react";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  argTypes: {
    variant: { control: "select", options: ["underline", "solid", "pills"] },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} style={{ width: 400 }}>
      <TabList>
        <Tab id="account">Account</Tab>
        <Tab id="password">Password</Tab>
        <Tab id="notifications">Notifications</Tab>
      </TabList>
      <TabPanel id="account">Account settings content</TabPanel>
      <TabPanel id="password">Password settings content</TabPanel>
      <TabPanel id="notifications">Notification preferences</TabPanel>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs variant="underline" style={{ width: 400 }}>
      <TabList>
        <Tab id="t1">Overview</Tab>
        <Tab id="t2">Analytics</Tab>
        <Tab id="t3">Reports</Tab>
      </TabList>
      <TabPanel id="t1">Overview content</TabPanel>
      <TabPanel id="t2">Analytics content</TabPanel>
      <TabPanel id="t3">Reports content</TabPanel>
    </Tabs>
  ),
};
