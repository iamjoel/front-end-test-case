test('正常使用', () => {
  var res = [1, 2, 3].map(item => item * 2)
  expect(res).toStrictEqual([2, 4, 6])
})