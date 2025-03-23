function jsxHandler(node: unknown, props: any, ..._rest: unknown[]) {
  const { children, ...attrs } = props || {}
  return { node, attrs, children }
}

function fragmentHandler(children: unknown, ..._rest: unknown[]) {
  return { node: null, attrs: {}, children }
}

export { jsxHandler as jsx, fragmentHandler as Fragment }
