
# VueGlow
![Node.js CI](https://github.com/adam-watkins/vue-glow/workflows/Node.js%20CI/badge.svg?branch=master)
![Npm Version](https://img.shields.io/npm/v/vue-glow.svg)

VueGlow is a simple vue component that allows any element to be given a glow / colored elevation effect. 
VueGlow was initially built to extend vuetify's capabilities, however it will work equally well without Vuetify.
The dynamic glow effect was done in pure css meaning no additional dependencies.

**Try VueGlow out [here](https://wtkns.dev/vueglow).**

## Installation
```
npm install vue-glow
```

## Basic Usage
```html
<VueGlow>
  I am GLOWING!
</VueGlow>

<VueGlow color="red" intense >
  I am GLOWING bright red!
</VueGlow>

<VueGlow :color="#3535ff" mode="hex">
  I am using hex colors!
</VueGlow>

<VueGlow :color="{ r: '33', g: '66', b: '99' }" mode="rgb">
  I am using rbg colors!
</VueGlow>
```

## Props
| Prop        | Effect        | Default |
| ------------|---------------| ------- |
| color | Changes the color of the glow.  Can either be a color name, hex, a RGB dict, HSL dict, or HSV dict. | "red" |
| mode | Changes the mode of the color input. Can be 'name', 'hex', 'rgb', or 'hsl'. | "name" |
| elevation  | Changes the elevation effect of the glow.  Can be a number between 0-24. | 12 |
| intensity | Customize the intensity of the glow. Can be a number between 0-4. | 1 |
| intense | Doubles the intensity of the glow. | false |
| rounded | Allows a border radius to be specified. | 4px |
| tile | No border radius. | false |
| flat | No elevation (meaning no glow). | false |


## Animation
Use the fade prop to make VueGlow changes it's colors. Set the animation speed with the interval prop.
Note, animation can result in poor performance at very high animation speeds.
```html
<VueGlow fade interval="100" >
  I am slowly changing colors!
</VueGlow>
```
| Prop        | Effect  | Default |
|-------------| ------- | ------- |
| fade | Glow changes hue over time.  Animation speed can be changed with the interval prop. | false |
| interval | Sets the animation speed.  Speed is in ms.  Default is 50. | 50 |
| reversed | Reverses the animation. | false |

## Coming Soon
+ More color animations and effects