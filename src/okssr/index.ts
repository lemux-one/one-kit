function isSelfClosing(tag: string) {
  return ['br', 'img', 'input', 'hr', 'meta', 'link'].includes(tag)
}

function renderAttrs(attrs: any) {
  return attrs
    ? Object.keys(attrs)
        .map((attrName) => {
          if (attrs[attrName] === null || attrs[attrName] === undefined) {
            return ''
          }
          if (typeof attrs[attrName] === 'boolean') {
            return attrs[attrName] ? ` ${attrName}` : ''
          }
          return ` ${attrName}="${attrs[attrName]}"`
        })
        .join('')
    : ''
}

function renderChildren(children: unknown) {
  if (!children) return ''
  if (Array.isArray(children)) return children.map(html).join('')
  return html(children)
}

export function html(jsxNode: any): string {
  if (!jsxNode) return ''
  if (typeof jsxNode === 'string') return `${jsxNode}`
  if (Array.isArray(jsxNode)) return jsxNode.map(html).join('')
  if (jsxNode.node === null) {
    return renderChildren(jsxNode.children) // Fragment: only children matter
  }
  if (jsxNode.node) {
    const { node, attrs = {}, children } = jsxNode
    if (typeof node === 'function') {
      return node.name === 'fragmentHandler'
        ? html(node(children)) // Fragment
        : html(node({ ...attrs, children })) // FC
    }
    const doctype = node === 'html' ? '<!DOCTYPE html>' : ''
    return isSelfClosing(node)
      ? `${doctype}<${node}${renderAttrs(attrs)}/>`
      : `${doctype}<${node}${renderAttrs(attrs)}>${renderChildren(
          children,
        )}</${node}>`
  }
  console.error(`Unsupported JSX node: ${JSON.stringify(jsxNode)}`)
  return ''
}
