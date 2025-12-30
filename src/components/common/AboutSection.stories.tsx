import type { Meta, StoryObj } from "@storybook/nextjs";
import AboutSection from "./AboutSection";

const meta = {
  title: "Sections/AboutSection",
  component: AboutSection,
  parameters: { layout: "fullscreen" },
  args: { id: "about" },
  argTypes: {
    id: { control: { type: "text" } },
  },
} satisfies Meta<typeof AboutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: "iphone6" } },
};

export const Tablet: Story = {
  parameters: { viewport: { defaultViewport: "ipad" } },
};

export const Desktop: Story = {};
