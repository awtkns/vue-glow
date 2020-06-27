import { umbraVals, punumbraVals, ambientVals } from './contants,js'

export function glowStyle(conf) {
  if (!conf.hsl ||
      conf.hsl.h == null ||
      conf.hsl.s == null ||
      conf.hsl.l == null
  ) return '';

  // Alpha
  if (typeof conf.intensity !== 'number') conf.intensity = 1;
  let alpha = { umbra: .2 * conf.intensity, penumbra: .14 * conf.intensity, ambient: .12 * conf.intensity};

  // CSS Format
  let umbraColor, penumbraColor, ambientColor;
  umbraColor = hslToCssHSLA(conf.hsl, alpha.umbra);
  penumbraColor = hslToCssHSLA(conf.hsl, alpha.penumbra);
  ambientColor = hslToCssHSLA(conf.hsl, alpha.ambient);

  // Elevation must be an int between [0, 24]
  let elevation = Math.round(conf.elevation);
  if (elevation > 24) elevation = 24;
  else if (elevation < 0) elevation = 0;

  // Building box shadow
  let umbra = `${umbraVals[elevation]} ${umbraColor}`;
  let penumbra = `${punumbraVals[elevation]} ${penumbraColor}`;
  let ambient = `${ambientVals[elevation]} ${ambientColor}`;
  let important = conf.important ? ' !important;' : ';';
  return `box-shadow: ${umbra}, ${penumbra}, ${ambient}${important}`
}

function hslToCssHSLA(hsl, a) {
  if (hsl.s <= 1) hsl.s = Math.round(hsl.s * 100);
  if (hsl.l <= 1) hsl.l = Math.round(hsl.l * 100);
  hsl.h = Math.round(hsl.h);

  return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${a})`
}
