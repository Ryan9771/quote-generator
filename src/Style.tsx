export interface RawStyles {
  [key: string]: string[];
}

function getStyles(stylesList: RawStyles, key: string): string {
  const requiredStyle = stylesList[key];
  if (!requiredStyle) {
    return "text-red-300 bg-red-300 font-bold";
  }
  return requiredStyle.join(" ");
}

export default getStyles;
