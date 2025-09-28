import type { Meta, StoryObj } from "@storybook/nextjs";
import SunMoonToggle from "./SunMoonToggle";

const meta = {
  title: "Common/SunMoonToggle",
  component: SunMoonToggle,
  parameters: {
    layout: "centered",
  },
  args: {
    size: 48,
  },
  argTypes: {
    size: {
      control: { type: "number", min: 16, max: 96, step: 2 },
      description: "Diameter of the toggle in pixels",
    },
    className: { control: { type: "text" } },
  },
} satisfies Meta<typeof SunMoonToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: { size: 28 },
};

export const Medium: Story = {
  args: { size: 40 },
};

export const Large: Story = {
  args: { size: 64 },
};

export const LightMode: Story = {
  parameters: { themes: { default: "light" } },
};

export const DarkMode: Story = {
  parameters: { themes: { default: "dark" } },
};
