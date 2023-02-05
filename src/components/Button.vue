<template>
  <div class="button">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "button",
  props: {
    title: {
      type: String,
      default: "Заказать звонок",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>
