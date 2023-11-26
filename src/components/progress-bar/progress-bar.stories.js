import progressBar from "./progress-bar.vue";

export default {
  title: "progress-bar",
  component: { progressBar },
  argTypes: {
    onFinish: {
      action: "onFinish",
      description: "progress load is finished",
    },
  },
};
export const defaultView = (args) => ({
  components: {
    progressBar,
  },
  data() {
    return { args };
  },
  template: '<progress-bar @onFinish="args.onFinish" />',
});