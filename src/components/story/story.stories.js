import story from "./story.vue";

export default {
  title: "story",
  component: { story },
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
  components: { story },
  data() {
    return { args };
  },
  template: `<story v-bind="args"></story>`,
});

export const Default = template.bind({});

Default.args = {
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
  username: "Josh"
};
