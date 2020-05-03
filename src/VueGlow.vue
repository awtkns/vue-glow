<template>
  <div :style="roundedStyle">
    <div id="glow" :style="glow">
      <slot />
    </div>
  </div>
</template>

<script>
import { glowStyle } from './underglow'
export default {
  name: 'v-glow',
  props: {
    color: {
      type: String,
      default: 'green'
    },
    elevation: {
      default: 12
    },
    intense: {
      type: Boolean,
      default: false
    },
    rounded: Boolean,
    flat: Boolean
  },
  computed: {
    roundedStyle() {
      if (this.flat) return null
      else if (typeof this.rounded == 'boolean' && this.rounded) return 'border-radius: 4px'
      else return `border-radius: ${this.rounded}px`
    },
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
<style>
  #glow {
    width: fit-content;
    height: fit-content;
    border-radius: inherit;
  }
</style>

