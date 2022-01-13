import { qsfy } from '../index';test('URL Formatting Test', () => {
  const object ={
    "a": {
      "b" :  {
          "c" : "d"
        }
      }
  }
    expect(qsfy(object,'',false)).toBe(`fooa%5Bb%5D%5Bc%5D=d`)
  });