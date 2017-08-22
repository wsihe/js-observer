export class Observer{
  constructor(value) {
    this.value = value
    this.walk(value)
  }
  //递归
  walk(value){
    Object.keys(value).forEach(key=>this.convert(key,value[key]))
  }
  convert(key, val){
    defineReactive(this.value, key, val)
  }
}

function defineReactive (obj, key, val) {
  var childOb = observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: ()=>val,
    set:newVal=> {
      console.log('你设置了' + key);
      console.log('新的' + key + ' = ' + newVal)
      childOb = observe(newVal)
    }
  })
}


function observe (value, vm) {
  if (!value || typeof value !== 'object') {
    return
  }
  return new Observer(value)
}