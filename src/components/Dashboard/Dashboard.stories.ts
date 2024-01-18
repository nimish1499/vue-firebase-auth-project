// src/components/Dashboard/Dashboard.stories.ts
import Dashboard from './Dashboard.vue';
import { Meta, Story } from '@storybook/vue3';
import { ref, Ref } from 'vue';

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
} as Meta;

const mockLogoutFunction = () => {
  console.log("Logging out user");
  // Simulate logout logic
};

const Template: Story = (args) => ({
  components: { Dashboard },
  setup() {
    // Mocking refs used in Dashboard.vue
    const userId: Ref<string> = ref(args.userId);
    const userEmail: Ref<string> = ref(args.userEmail);

    // Mocking the logout method
    const logout = mockLogoutFunction;

    return { 
      args,
      userId, 
      userEmail, 
      logout 
    };
  },
  template: '<Dashboard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  userId: '12345',
  userEmail: 'user@example.com',
};
