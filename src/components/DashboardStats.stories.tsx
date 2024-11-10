import type { Meta, StoryObj } from '@storybook/react';
import DashboardStats from './Admin/components/DashboardStats';
import { Users } from 'lucide-react';

const meta = {
  title: 'Admin/DashboardStats',
  component: DashboardStats,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DashboardStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PositiveChange: Story = {
  args: {
    title: 'Total Users',
    value: '1,234',
    change: 12,
    icon: Users,
  },
};

export const NegativeChange: Story = {
  args: {
    title: 'Total Users',
    value: '1,234',
    change: -5,
    icon: Users,
  },
};