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

### 测试组件
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





wrapper.destroy()
```

#### 调用实例
```
// 实例
wrapper.vm

// 属性
expect(wrapper.props().color).toBe('red')
```

#### 测试输出
DOM的检查
```
wrapper.find('.sth').text()
wrapper.find('.sth').html()
wrapper.find('.sth').classes()
wrapper.find('.sth').element

wrapper.contains('.sth')

// 触发事件
wrapper.find('.sth').trigger('click')
wrapper.find('input').trigger('keyup.enter')
```

与父组件的交互
```
wrapper.emitted().事件 // 返回值是 [[参数1, 参数2,....]]
```

#### router 和 vuex
```
import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import Todos from '@/components/Todos.vue';
import { storeFactory } from '@/store/factory';
import { routerFactory } from '@/routes';

describe('Todos', function() {
  it('should handle route change', function() {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    localVue.use(VueRouter);
    const store = storeFactory();
    const router = routerFactory();

    shallowMount(Todos, { localVue, store, router });
    router.push('/completed');

    expect(store.state.filter).to.eql('completed');
  });
});
```

测试的demo [todoapp-vue](https://github.com/blacksonic/todoapp-vue)

### doc
* [Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)
* [StoryBook](https://storybook.js.org/docs/basics/introduction/)
