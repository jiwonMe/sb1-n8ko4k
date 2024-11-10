import type { Preview } from "@storybook/react";
import React from "react";
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-white p-8">
        <Story />
      </div>
    ),
  ],
};

export default preview;