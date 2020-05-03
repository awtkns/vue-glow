export function glowStyle(conf) {

  // Opacity intensity
  let alpha = { umbra: .2, penumbra: .14, ambient: .12 }
  if (conf.intense) {
    for (let k in alpha) {
      alpha[k] = alpha[k] * 2
    }
  }

  // Convert hex and named colors to `rgba(r, g, b, a) for css
  let namedColor = colorNames[conf.color]
  let rgb = namedColor ? hexToRgb(namedColor) : hexToRgb(conf.color)
  const umbraRGBA = rgbToCssRGBA(rgb, alpha.umbra)
  const penumbraRGBA = rgbToCssRGBA(rgb, alpha.penumbra)
  const ambientRGBA = rgbToCssRGBA(rgb, alpha.ambient)

  // Elevation must be an int between [0, 24]
  let elevation = Math.round(conf.elevation)
  if (elevation > 24) elevation = 24;
  else if (elevation < 0) elevation = 0;

  // Building box shadow
  let umbra = `${umbraVals[elevation]} ${umbraRGBA}`
  let penumbra = `${punumbraVals[elevation]} ${penumbraRGBA}`
  let ambiant = `${ambientVals[elevation]} ${ambientRGBA}`
  let important = conf.important ? ' !important;' : ';'
  return `box-shadow: ${umbra}, ${penumbra}, ${ambiant}${important}`
}

function hexToRgb(hex) {
  hex = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => (r + r + g + g + b + b));
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToCssRGBA(rgb, a) {
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`
}

// Elevation 0-24; O(1)
const umbraVals = [
  '0px 0px 0px 0px',
  '0px 2px 1px -1px',
  '0px 3px 1px -2px',
  '0px 3px 3px -2px',
  '0px 2px 4px -1px',
  '0px 3px 5px -1px',
  '0px 3px 5px -1px',
  '0px 4px 5px -2px',
  '0px 5px 5px -3px',
  '0px 5px 6px -3px',
  '0px 6px 6px -3px',
  '0px 6px 7px -4px',
  '0px 7px 8px -4px',
  '0px 7px 8px -4px',
  '0px 7px 9px -4px',
  '0px 8px 9px -5px',
  '0px 8px 10px -5px',
  '0px 8px 11px -5px',
  '0px 9px 11px -5px',
  '0px 9px 12px -6px',
  '0px 10px 13px -6px',
  '0px 10px 13px -6px',
  '0px 10px 14px -6px',
  '0px 11px 14px -7px',
  '0px 11px 15px -7px'
]

const punumbraVals = [
  '0px 0px 0px 0px',
  '0px 1px 1px 0px',
  '0px 2px 2px 0px',
  '0px 3px 4px 0px',
  '0px 4px 5px 0px',
  '0px 5px 8px 0px',
  '0px 6px 10px 0px',
  '0px 7px 10px 1px',
  '0px 8px 10px 1px',
  '0px 9px 12px 1px',
  '0px 10px 14px 1px',
  '0px 11px 15px 1px',
  '0px 12px 17px 2px',
  '0px 13px 19px 2px',
  '0px 14px 21px 2px',
  '0px 15px 22px 2px',
  '0px 16px 24px 2px',
  '0px 17px 26px 2px',
  '0px 18px 28px 2px',
  '0px 19px 29px 2px',
  '0px 20px 31px 3px',
  '0px 21px 33px 3px',
  '0px 22px 35px 3px',
  '0px 23px 36px 3px',
  '0px 24px 38px 3px'
]

const ambientVals = [
  '0px 0px 0px 0px',
  '0px 1px 3px 0px',
  '0px 1px 5px 0px',
  '0px 1px 8px 0px',
  '0px 1px 10px 0px',
  '0px 1px 14px 0px',
  '0px 1px 18px 0px',
  '0px 2px 16px 1px',
  '0px 3px 14px 2px',
  '0px 3px 16px 2px',
  '0px 4px 18px 3px',
  '0px 4px 20px 3px',
  '0px 5px 22px 4px',
  '0px 5px 24px 4px',
  '0px 5px 26px 4px',
  '0px 6px 28px 5px',
  '0px 6px 30px 5px',
  '0px 6px 32px 5px',
  '0px 7px 34px 6px',
  '0px 7px 36px 6px',
  '0px 8px 38px 7px',
  '0px 8px 40px 7px',
  '0px 8px 42px 7px',
  '0px 9px 44px 8px',
  '0px 9px 46px 8px'
]

const colorNames = {
  'aliceblue': '#f0f8ff',
  'antiquewhite': '#faebd7',
  'aqua': '#00ffff',
  'aquamarine': '#7fffd4',
  'azure': '#f0ffff',
  'beige': '#f5f5dc',
  'bisque': '#ffe4c4',
  'black': '#000000',
  'blanchedalmond': '#ffebcd',
  'blue': '#0000ff',
  'blueviolet': '#8a2be2',
  'brown': '#a52a2a',
  'burlywood': '#deb887',
  'cadetblue': '#5f9ea0',
  'chartreuse': '#7fff00',
  'chocolate': '#d2691e',
  'coral': '#ff7f50',
  'cornflowerblue': '#6495ed',
  'cornsilk': '#fff8dc',
  'crimson': '#dc143c',
  'cyan': '#00ffff',
  'darkblue': '#00008b',
  'darkcyan': '#008b8b',
  'darkgoldenrod': '#b8860b',
  'darkgray': '#a9a9a9',
  'darkgreen': '#006400',
  'darkkhaki': '#bdb76b',
  'darkmagenta': '#8b008b',
  'darkolivegreen': '#556b2f',
  'darkorange': '#ff8c00',
  'darkorchid': '#9932cc',
  'darkred': '#8b0000',
  'darksalmon': '#e9967a',
  'darkseagreen': '#8fbc8f',
  'darkslateblue': '#483d8b',
  'darkslategray': '#2f4f4f',
  'darkturquoise': '#00ced1',
  'darkviolet': '#9400d3',
  'deeppink': '#ff1493',
  'deepskyblue': '#00bfff',
  'dimgray': '#696969',
  'dodgerblue': '#1e90ff',
  'firebrick': '#b22222',
  'floralwhite': '#fffaf0',
  'forestgreen': '#228b22',
  'fuchsia': '#ff00ff',
  'gainsboro': '#dcdcdc',
  'ghostwhite': '#f8f8ff',
  'gold': '#ffd700',
  'goldenrod': '#daa520',
  'gray': '#808080',
  'green': '#008000',
  'greenyellow': '#adff2f',
  'honeydew': '#f0fff0',
  'hotpink': '#ff69b4',
  'indianred ': '#cd5c5c',
  'indigo': '#4b0082',
  'ivory': '#fffff0',
  'khaki': '#f0e68c',
  'lavender': '#e6e6fa',
  'lavenderblush': '#fff0f5',
  'lawngreen': '#7cfc00',
  'lemonchiffon': '#fffacd',
  'lightblue': '#add8e6',
  'lightcoral': '#f08080',
  'lightcyan': '#e0ffff',
  'lightgoldenrodyellow': '#fafad2',
  'lightgrey': '#d3d3d3',
  'lightgreen': '#90ee90',
  'lightpink': '#ffb6c1',
  'lightsalmon': '#ffa07a',
  'lightseagreen': '#20b2aa',
  'lightskyblue': '#87cefa',
  'lightslategray': '#778899',
  'lightsteelblue': '#b0c4de',
  'lightyellow': '#ffffe0',
  'lime': '#00ff00',
  'limegreen': '#32cd32',
  'linen': '#faf0e6',
  'magenta': '#ff00ff',
  'maroon': '#800000',
  'mediumaquamarine': '#66cdaa',
  'mediumblue': '#0000cd',
  'mediumorchid': '#ba55d3',
  'mediumpurple': '#9370d8',
  'mediumseagreen': '#3cb371',
  'mediumslateblue': '#7b68ee',
  'mediumspringgreen': '#00fa9a',
  'mediumturquoise': '#48d1cc',
  'mediumvioletred': '#c71585',
  'midnightblue': '#191970',
  'mintcream': '#f5fffa',
  'mistyrose': '#ffe4e1',
  'moccasin': '#ffe4b5',
  'navajowhite': '#ffdead',
  'navy': '#000080',
  'oldlace': '#fdf5e6',
  'olive': '#808000',
  'olivedrab': '#6b8e23',
  'orange': '#ffa500',
  'orangered': '#ff4500',
  'orchid': '#da70d6',
  'palegoldenrod': '#eee8aa',
  'palegreen': '#98fb98',
  'paleturquoise': '#afeeee',
  'palevioletred': '#d87093',
  'papayawhip': '#ffefd5',
  'peachpuff': '#ffdab9',
  'peru': '#cd853f',
  'pink': '#ffc0cb',
  'plum': '#dda0dd',
  'powderblue': '#b0e0e6',
  'purple': '#800080',
  'rebeccapurple': '#663399',
  'red': '#ff0000',
  'rosybrown': '#bc8f8f',
  'royalblue': '#4169e1',
  'saddlebrown': '#8b4513',
  'salmon': '#fa8072',
  'sandybrown': '#f4a460',
  'seagreen': '#2e8b57',
  'seashell': '#fff5ee',
  'sienna': '#a0522d',
  'silver': '#c0c0c0',
  'skyblue': '#87ceeb',
  'slateblue': '#6a5acd',
  'slategray': '#708090',
  'snow': '#fffafa',
  'springgreen': '#00ff7f',
  'steelblue': '#4682b4',
  'tan': '#d2b48c',
  'teal': '#008080',
  'thistle': '#d8bfd8',
  'tomato': '#ff6347',
  'turquoise': '#40e0d0',
  'violet': '#ee82ee',
  'wheat': '#f5deb3',
  'white': '#ffffff',
  'whitesmoke': '#f5f5f5',
  'yellow': '#ffff00',
  'yellowgreen': '#9acd32'
}
