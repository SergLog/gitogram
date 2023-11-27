import ranks from "./ranks.vue";

export default {
  title: "ranks",
  component: { ranks },
  argTypes: {
    star: {
      control: { type: "text" },
    },
    fork: {
      control: { type: "text" },
    }    
  },
};

const template = (args) => ({
  components: { ranks },
  data() {
    return { args };
  },
  template: `<ranks v-bind="args"></ranks>`,
});

export const Default = template.bind({});

Default.args = {
  star: "500",
  fork: "27"
};
