"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExampleDecorator = ExampleDecorator;

require("reflect-metadata");

var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function ExampleDecorator() {
  return (target, propertyKey) => {
    const type = Reflect.getMetadata('design:type', target, propertyKey);
    console.log(type);
  };
}

var DEMO;

(function (DEMO) {
  DEMO["PROP_1"] = "1";
  DEMO[DEMO["PROP_2"] = 2] = "PROP_2";
})(DEMO || (DEMO = {}));

let A = (_dec = ExampleDecorator(), _dec2 = Reflect.metadata("design:type", String), _dec3 = ExampleDecorator(), _dec4 = Reflect.metadata("design:type", typeof DEMO === "undefined" ? Object : DEMO), (_class = (_temp = class A {
  constructor() {
    _initializerDefineProperty(this, "stringProp", _descriptor, this);

    _initializerDefineProperty(this, "demoProp", _descriptor2, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "stringProp", [_dec, _dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "demoProp", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));
const a = new A();
a.demoProp = DEMO.PROP_1;
console.log(a);