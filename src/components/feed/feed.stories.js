import feed from "./feed.vue";

export default {
  title: "feed",
  component: { feed },
  argTypes: {
    avatar: {
      control: { type: "text" },
    },
    username: {
      control: { type: "text" },
    },
    comments: {
      control: { type: "array" },
    },
    date: {
      control: { type: "string" },
    },
  },
};

const template = (args) => ({
  components: { feed },
  data() {
    return { args };
  },
  template: `<feed v-bind="args"></feed>`,
});

export const Default = template.bind({});

Default.args = {
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
  username: "Josh",
  comments: [
    {
      id: "0",
      username: "joshua_l",
      text: "Enable performance measuring in production, at the user's request",
    },
    {
      id: "1",
      username: "Camille",
      text: "It's Impossible to Rename an Inherited Slot",
    },
    {
      id: "2",
      username: "Marselle",
      text: "transition-group with flex parent causes removed items to fly",
    },
  ],
  date: "01.01.2023"
};
