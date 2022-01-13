export const  qsfy = (obj:Record<string,any>, prefix:string='', isArray:boolean=false):string|undefined => {
    const pairs = []
    for (const key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        continue
      }
      const value = obj[key]
      const enkey = isArray ? '' : encodeURIComponent(key)
      let pair
      if (typeof value === 'object') {
        pair = qsfy(
          value,
          prefix ? prefix + encodeURIComponent('[' + enkey + ']') : enkey,
          Array.isArray(value)
        )
      } else {
        pair =
          (prefix ? prefix + encodeURIComponent('[' + enkey + ']') : enkey) +
          '=' +
          encodeURIComponent(value)
      }
      pairs.push(pair)
    }
    return pairs.join('&')
  }