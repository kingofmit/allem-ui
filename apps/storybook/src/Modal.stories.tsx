import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalContent, Button } from "@allem-ui/react";

const meta: Meta<typeof Modal> = {
  title: "Overlay/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <Modal>
      <Button>Open Modal</Button>
      <ModalContent title="Confirm Action">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Are you sure you want to proceed? This action cannot be undone.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" color="neutral">Cancel</Button>
          <Button color="danger">Confirm</Button>
        </div>
      </ModalContent>
    </Modal>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Modal>
        <Button variant="outline">Small</Button>
        <ModalContent title="Small Modal" size="sm">
          <p className="text-sm text-neutral-600">Small modal content.</p>
        </ModalContent>
      </Modal>
      <Modal>
        <Button variant="outline">Large</Button>
        <ModalContent title="Large Modal" size="lg">
          <p className="text-sm text-neutral-600">Large modal content.</p>
        </ModalContent>
      </Modal>
    </div>
  ),
};
