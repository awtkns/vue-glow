# vue-glow
Vue-glow is a simple no dependency (other then vue) packege that allows you to give dynamic underglow for components. Vue-glow was initailly built to extend vuetify's capabilities. 

## Installation
```
npm install vue-glow
```

## Usage
```javascript
<VueGlow>
  I am GLOWING!
</ VueGlow>

<VueGlow color="red" intense>
  I am GLOWING bright red!
</ VueGlow>
```

## Props
| Prop        | Efect           |
| ------------- |---------------|
| color      | Changes the color of the glow.  Can either be a named color or a hex value. |
| evelvation     | Changes the elevation effect of the glow.  Can be a number between 0-24.      |
| intense | Doubles the intensity of the glow.     |
| rounded | Allows a border radius to be specified. If the prop is passed as a boolean, a border radius of 4px willl be applied (Vuetify default). |
| tile | No border radius. |
| flat | No elevation (meaning no glow). |

