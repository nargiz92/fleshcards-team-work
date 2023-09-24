import { Meta, Story } from "@storybook/react";

// Import your Pagination component
import { Pagination, PaginationProps } from "./pagination"; // Replace 'PaginationComponent' with your actual component file name

// Create a Meta object to provide information about your component
const meta: Meta = {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    // Define your component's props and their types here
    count: {
      control: "number",
      defaultValue: 100, // Provide default values as needed
    },
    page: {
      control: "number",
      defaultValue: 1,
    },
    onChange: { action: "page changed" }, // Define actions for your component
    perPage: {
      control: "number",
      defaultValue: 10,
    },
    perPageOptions: {
      control: { type: "array", separator: "," },
      defaultValue: [10, 20, 50],
    },
  },
};

// Create a Template that takes props and renders your component
const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

// Define your stories
export const BasicPagination = Template.bind({});
BasicPagination.args = {
  // Provide initial values for your component's props
  count: 100,
  page: 1,
  perPage: 10,
};

export const CustomOptionsPagination = Template.bind({});
CustomOptionsPagination.args = {
  count: 200,
  page: 3,
  perPage: 20,
  perPageOptions: [10, 20, 30, 50],
};

export default meta;
