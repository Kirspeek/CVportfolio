import type { Meta, StoryObj } from "@storybook/nextjs";
import Computer from "./Computer";

const meta = {
  title: "Common/Computer",
  component: Computer,
  parameters: { layout: "centered" },
  args: {
    screenOn: true,
    towerOn: true,
  },
  argTypes: {
    className: { control: { type: "text" } },
    screenOn: { control: { type: "boolean" } },
    towerOn: { control: { type: "boolean" } },
  },
} satisfies Meta<typeof Computer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ScreenOff: Story = {
  args: { screenOn: false },
};

export const TowerOff: Story = {
  args: { towerOn: false },
};
