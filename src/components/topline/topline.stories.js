import topline from "./topline.vue";

export default {
  title: "topline",
  component: { topline }
};

const template = (args) => ({
  components: { topline }, 
  template: `<topline></topline>`,
});

export const Default = template.bind({});
