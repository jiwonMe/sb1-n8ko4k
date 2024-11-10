import type { Meta, StoryObj } from '@storybook/react';
import AdminSidebar from './Admin/components/AdminSidebar';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'Admin/Sidebar',
  component: AdminSidebar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof AdminSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};