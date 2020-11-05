<template>
  <div :style="style">
    <slot />
  </div>
</template>

<script>
import { glowStyle } from './glow'
import { colorToHSL } from './utils'

export default {
  name: 'v-glow',
  props: {
    rounded: { default: 4 },
    color: { default: 'red' },
    elevation: { default: 12 },
    intense: { type: Boolean, default: false },
    intensity: { type: Number, default: 1 },
    disabled: Boolean,
    tile: Boolean,
    fade: Boolean,
    reversed: Boolean,
    interval: { default: 50 }
  },
  watch: {
    fade() {
      if (this.fade) this.startFading();
      else this.stopFading()
    },
    disabled() {
      if (this.disabled) this.stopFading();
      else if (!this.disabled && this.fade) this.startFading();
    },

    //Change the timer interval
    interval() {
      this.startFading()
    },
    color() {
      this.colorChanged()
    }
  },
  data() {
    return {
      timer: null,
      hsl: { h: 0, s: 1, l: .5 }
    }
  },
  created() {
    this.hsl = colorToHSL(this.color, this.mode);
    if (this.fade) this.startFading()
  },
  computed: {
    style() {
      return this.roundedEffect + this.glowEffect
    },
    roundedEffect() {
      if (this.tile) return '';
      else if (typeof this.rounded == 'boolean' && this.rounded) return 'border-radius: 4px;';
      else return `border-radius: ${this.rounded}px;`
    },
    glowEffect() {
      if (this.disabled) return '';
      let conf = {
        elevation: this.elevation,
        hsl: this.hsl,
        important: this.important,
        intensity: this.intense ? this.intensity * 2 : this.intensity
      };

      return `${glowStyle(conf)}`
    }
  },
  methods: {
    startFading() {
      this.stopFading();
      this.timer = setInterval(this.incHsl, this.interval)
    },
    stopFading() {
      clearInterval(this.timer)
    },
    incHsl() {
      this.hsl.h = (this.reversed ? (this.hsl.h -= 1):(this.hsl.h += 1)) % 360
    },
    colorChanged() {
      this.hsl = colorToHSL(this.color)
    }
  },
  beforeDestroy() {
    this.stopFading()
  }
}
</script>