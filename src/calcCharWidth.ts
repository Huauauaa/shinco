let canvas: HTMLCanvasElement

export default function calcCharWidth(
  text: string,
  font: string = 'normal 12px sans-serif'
): number {
  canvas = canvas || (canvas = document.createElement('canvas'))
  const context = canvas.getContext('2d')
  if (!context) {
    return 0
  }
  context.font = font
  return context.measureText(text).width
}
