import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem } from "@allem-ui/react";

const meta: Meta<typeof Accordion> = {
  title: "Disclosure/Accordion",
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion style={{ width: 400 }}>
      <AccordionItem id="1" title="What is Allem UI?">
        Allem UI is a comprehensive React component library built with React Aria and Tailwind CSS.
      </AccordionItem>
      <AccordionItem id="2" title="Is it accessible?">
        Yes! All components are built on top of React Aria, ensuring full WAI-ARIA compliance.
      </AccordionItem>
      <AccordionItem id="3" title="Can I customize it?">
        Every component accepts a className prop and uses Tailwind CSS utilities for easy customization.
      </AccordionItem>
    </Accordion>
  ),
};

export const AllowsMultipleExpanded: Story = {
  render: () => (
    <Accordion allowsMultipleExpanded style={{ width: 400 }}>
      <AccordionItem id="1" title="First section">Content for the first section.</AccordionItem>
      <AccordionItem id="2" title="Second section">Content for the second section.</AccordionItem>
      <AccordionItem id="3" title="Third section">Content for the third section.</AccordionItem>
    </Accordion>
  ),
};
