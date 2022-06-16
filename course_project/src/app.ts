// const names: Array<string> = ['Michael', 'Manuel']; // same as string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000)
// })

// promise.then(data => data.split(' '));

// ts knows that this returns the intersection of these
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// ts infers the properties and types
const mergedObj = merge({name: 'Michael', hobbies: ['Reading']}, { age: 29 });
console.log(mergedObj.name)

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.'
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

// keyof operator to ensure 2nd type is a key of first type
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractAndConvert({name: 'Michael'}, 'name');

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Michael');
textStorage.addItem('Mark');
textStorage.removeItem('Mark');
console.log(textStorage.getItems());