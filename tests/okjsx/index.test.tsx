import { describe, expect, it, test } from 'bun:test'

describe('ok-jsx API check', () => {
  it('should have a jsx function', () => {
    const { jsx } = require('../../src/okjsx')
    expect(typeof jsx).toBe('function')
  })

  it('should have a Fragment function', () => {
    const { Fragment } = require('../../src/okjsx')
    expect(typeof Fragment).toBe('function')
  })
})

describe('ok-jsx element conversion tests', () => {
  test('br element with no props', () => {
    expect(<br />).toEqual({ node: 'br', attrs: {}, children: undefined })
  })

  test('span element with no props and no children', () => {
    expect(<span></span>).toEqual({
      node: 'span',
      attrs: {},
      children: undefined,
    })
  })

  test('p element with class and text as children', () => {
    expect(<p class="txt">Dummy text</p>).toEqual({
      node: 'p',
      attrs: { class: 'txt' },
      children: 'Dummy text',
    })
  })

  test('ul element with two li children', () => {
    expect(
      <ul>
        <li>First</li>
        <li>Second</li>
      </ul>,
    ).toEqual({
      node: 'ul',
      attrs: {},
      children: [
        { node: 'li', attrs: {}, children: 'First' },
        { node: 'li', attrs: {}, children: 'Second' },
      ],
    })
  })
})

describe('ok-jsx fragment conversion tests', () => {
  test('fragment with no props and no children', () => {
    const { Fragment } = require('../../src/okjsx')
    expect(<></>).toEqual({ node: Fragment, attrs: {}, children: undefined })
  })

  test('fragment with no props and one children', () => {
    const { Fragment } = require('../../src/okjsx')
    expect(
      <>
        <br />
      </>,
    ).toEqual({
      node: Fragment,
      attrs: {},
      children: { node: 'br', attrs: {}, children: undefined },
    })
  })

  test('fragment wrapped into a component alias', () => {
    const { Fragment } = require('../../src/okjsx')
    const FragmentWrapper = (
      <>
        <br />
      </>
    )
    expect(<FragmentWrapper />).toEqual({
      node: {
        node: Fragment,
        attrs: {},
        children: { node: 'br', attrs: {}, children: undefined },
      },
      attrs: {},
      children: undefined,
    })
  })
})

describe('ok-jsx functional components tests', () => {
  test('simple greeting component of a single element with no props and no children', () => {
    const SimpleGreeting = () => <span>Hi</span>
    expect(<SimpleGreeting />).toEqual({
      node: SimpleGreeting,
      attrs: {},
      children: undefined,
    })
  })

  test('greeting component with props', () => {
    const Greeting = (props: { name: string }) => {
      const { name } = props
      return <span>Hello, {name}</span>
    }
    expect(<Greeting name="Bun" />).toEqual({
      node: Greeting,
      attrs: { name: 'Bun' },
      children: undefined,
    })
  })
})
