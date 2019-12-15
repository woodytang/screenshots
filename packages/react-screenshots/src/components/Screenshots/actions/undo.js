export default class Undo {
  static title = '撤销'

  static icon = 'screenshots-icon-undo'

  constructor ({ el, ctx, context, setContext }) {
    const { action, stack } = context
    stack.pop()
    setContext({ stack: [...stack] })
    return action
  }
}