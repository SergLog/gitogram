import avatar from "./avatar.vue";

export default {
  title: "avatar",
  components: { avatar },
};

export const defaultView = () => ({
  components: {
    avatar,
  },
  template: `
    <avatar 
      url="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
      name="Username"
    />
  `,
});

defaultView.story = {
  name: "Стандартный вид",
};