# Vue 测试
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 测试
```
const wrapper = shallowMount(Foo, {
  propsData: {
    color: 'red'
  },
  slots: {
    default: [],
    fooBar: , // 具名的
  },
  scopedSlots: {
    foo: '<p slot-scope="foo">{{foo.index}},{{foo.text}}</p>'
  }
  // 为实例添加额外的属性。在伪造全局注入的时候有用。
  mocks: {
    $route
  },
  stubs: ,
})

// 属性
expect(wrapper.props().color).toBe('red')

// DOM 判断
wrapper.find('.sth').text()
wrapper.contains('.sth')

// 实例的东东
wrapper.vm.xxx

wrapper.destroy()
```

### doc
* [Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)
* [StoryBook](https://storybook.js.org/docs/basics/introduction/)
