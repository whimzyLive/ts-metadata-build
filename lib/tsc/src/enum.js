"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleDecorator = void 0;
require("reflect-metadata");
function ExampleDecorator() {
    return (target, propertyKey) => {
        const type = Reflect.getMetadata('design:type', target, propertyKey);
        console.log(type);
    };
}
exports.ExampleDecorator = ExampleDecorator;
var DEMO;
(function (DEMO) {
    DEMO["PROP_1"] = "1";
    DEMO[DEMO["PROP_2"] = 2] = "PROP_2";
})(DEMO || (DEMO = {}));
class A {
}
__decorate([
    ExampleDecorator(),
    __metadata("design:type", String)
], A.prototype, "stringProp", void 0);
__decorate([
    ExampleDecorator(),
    __metadata("design:type", Object)
], A.prototype, "demoProp", void 0);
const a = new A();
a.demoProp = DEMO.PROP_1;
console.log(a);
