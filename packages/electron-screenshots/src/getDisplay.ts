import { screen, Rectangle } from 'electron'

export interface Display extends Rectangle {
  id: number
}

export default (): Display => {
  const point = screen.getCursorScreenPoint()
  const primaryDisplay = screen.getPrimaryDisplay()
  const { id, bounds, workArea, scaleFactor } = screen.getDisplayNearestPoint(point)
  // win32 darwin linux平台分别处理
  const scale = process.platform === 'darwin' ? 1 : scaleFactor / primaryDisplay.scaleFactor
  const display = process.platform === 'linux' ? workArea : bounds
  return {
    id,
    x: display.x * (scale >= 1 ? scale : 1),
    y: display.y * (scale >= 1 ? scale : 1),
    width: display.width * scale,
    height: display.height * scale
  }
}
