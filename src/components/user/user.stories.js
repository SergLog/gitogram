import user from "./user.vue";

export default {
  title: "user",
  component: { user },
  argTypes: {
    avatar: {
      control: { type: "text" },
    },
    username: {
      control: { type: "text" },
    }    
  },
};

const template = (args) => ({
  components: { user },
  data() {
    return { args };
  },
  template: `<user v-bind="args"></user>`,
});

export const Default = template.bind({});

Default.args = {
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
  username: "Josh"
};
