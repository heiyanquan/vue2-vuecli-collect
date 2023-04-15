<script>
export default {
  name: 'teleport',
  props: {
    /* 移动至哪个标签内，最好使用id */
    to: {
      type: String,
      required: true
    }
  },

  mounted() {
    document.querySelector(this.to).appendChild(this.$el)
  },

  destroyed() {
    document.querySelector(this.to).removeChild(this.$el)
  },

  render() {
    return <div>{this.$scopedSlots.default()}</div>
  }
}
</script>
