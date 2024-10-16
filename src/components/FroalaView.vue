<script>
export default {
  props: ['tag', 'value'],

  watch: {
    value: function (newValue) {
      this._element.innerHTML = newValue
    },
  },

  created: function () {
    this.currentTag = this.tag || this.currentTag
  },

  render: function (h) {
    return h(this.currentTag, {
      class: 'fr-view',
    })
  },

  // After first time render.
  mounted: function () {
    this._element = this.$el

    if (this.value) {
      this._element.innerHTML = this.value
    }
  },

  data() {
    return {
      currentTag: 'div',
      _element: null,
    }
  },
}
</script>
