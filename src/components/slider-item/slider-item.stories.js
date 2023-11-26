import sliderItem from "./slider-item";

export default {
  title: "slider-tem",
  component: { sliderItem },
};

export const defaultView = () => ({
  components: { sliderItem },
  template: `<slider-item><h1></h1></slider-item>`,
});