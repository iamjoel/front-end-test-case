/*
* 数组 Map
* var new_array = arr.map(function callback(currentValue[, index[, array]]) {
*  // Return element for new_array 
* }[, thisArg])
* https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/
describe('Array.prototype.map', () => {
  test('返回的数组的每项内容应该为原数组每项作用回调后的结果', () => {
    var res = [1, 2, 3].map(item => item * 2)
    expect(res).toStrictEqual([2, 4, 6])
  })
  
  test('执行后，应该不能改变原数组', () => {
    var arr = [1, 2, 3]
    arr.map(item => item * 2)
    expect(arr).toStrictEqual([1, 2, 3])
  })


  describe('回调', () => {
    test('传的回调不是函数，应该会报错', () => {
      [undefined, null, 'str', 1, true, [1], {a: 1}].forEach(payload => {
        try {
          [1, 2, 3].map(payload)
        } catch(e) {
          expect(e !== '').toBeTruthy()
        }
      })
    })

    test('回调被调用次数应该和数组长度一致', () => {
      var mockCb = jest.fn(item => item * 2)
      var arr = [1, 2, 3]
      arr.map(mockCb)
      expect(mockCb.mock.calls.length === arr.length).toBeTruthy()
    })

    test('回调的下标应该从0开始', () => {
      var minIndex = 999999
      var res = [1, 2, 3].map((item, i) => {
        if(i < minIndex) {
          minIndex = i
        }
        return item * 2
      })
      expect(minIndex === 0).toBeTruthy()
    })

    test('回调中应该能获取到完整数组', () => {
      var arr = [1, 2, 3]
      arr.map((item, i, array) => {
        expect(array).toStrictEqual(arr)
        return item * 2
      })
    })

    test('回调中应该能自定义this', () => {
      var obj = {
        div: 1
      }
      var res = [1, 2, 3].map(function(item) {
        return item + this.div
      }, obj)

      expect(res).toStrictEqual([2, 3, 4])
    })
  })
  
})
