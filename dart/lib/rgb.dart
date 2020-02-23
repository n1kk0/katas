String rgb(int r, int g, int b)
{
  return
    '${(r < 255 ? (r > 0 ? r : 0) : 255).toRadixString(16)}'.toUpperCase().padLeft(2, '0') +
    '${(g < 255 ? (g > 0 ? g : 0) : 255).toRadixString(16)}'.toUpperCase().padLeft(2, '0') +
    '${(b < 255 ? (b > 0 ? b : 0) : 255).toRadixString(16)}'.toUpperCase().padLeft(2, '0');
}
