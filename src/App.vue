<template>
  <div id="app">
    <div :style="glow">
      <div style="height: 200px; width: 400px" />
    </div>
  </div>
</template>

<script>
import { glowStyle } from './underglow'
export default {
  name: 'App',
  props: {
    color: {
      type: String,
      default: 'green'
    },
    elevation: {
      type: Number,
      default: 24
    },
    intense: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    glow() {
      let conf = {
        elevation: this.elevation,
        color: this.color,
        important: this.important,
        intense: this.intense
      }

      return `${glowStyle(conf)}`
    }
  }
}
</script>

