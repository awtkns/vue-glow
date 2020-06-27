import { colorNames } from './contants,js'

export function colorToHSL(color, mode) {
  switch (mode.toLowerCase()) {
    case 'hsl':
      return color;
    case 'hsv':
      return hsvToHsl(color);
    case 'name':
      color = colorNames[color];
    case 'hex':
      color = hexToRgb(color);
    case 'rgb':
      color = rgbToHSL(color);
      return color;
    default:
      return undefined
  }
}


function hsvToHsl({h, s, v}) {
  const l = (2 - s) * v / 2;

  if (l !== 0) {
    if (l === 1) {
      s = 0
    } else if (l < 0.5) {
      s = s * v / (l * 2)
    } else {
      s = s * v / (2 - l * 2)
    }
  }

  return {h, s, l}
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


function rgbToHSL({r, g, b}) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;
  let min = Math.min(r,g,b),
      max = Math.max(r,g,b),
      delta = max - min;

  if (delta === 0) h = 0;
  else if (max === r) h = ((g - b) / delta) % 6;
  else if (max === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  l = (max + min) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return {h, s, l};
}
