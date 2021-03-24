import 'reflect-metadata';

export function ExampleDecorator(): PropertyDecorator {
  return (target, propertyKey): void => {
    const type = Reflect.getMetadata('design:type', target, propertyKey);
    console.log(type)
  };
}

enum DEMO {
  PROP_1 = '1',
  PROP_2 = '2'
}
class A {
  @ExampleDecorator()
  stringProp: string

  @ExampleDecorator()
  demoProp: DEMO
}


const a = new A();
a.demoProp = DEMO.PROP_1;
console.log(a)