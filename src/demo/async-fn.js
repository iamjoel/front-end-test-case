export default function getUserInfo(isFail) {
  return new Promise((resolve, reject) => {
    if(!isFail) {
      setTimeout(() => {
        resolve({
          name: 'Joel',
          gender: 'man'
        })
      }, 1000)
    } else {
      reject('fail')
    }
  })
}