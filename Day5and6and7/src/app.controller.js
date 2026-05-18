"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoController = void 0;
var common_1 = require("@nestjs/common");
var DemoController = function () {
    var _classDecorators = [(0, common_1.Controller)("api/demo")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _index_decorators;
    var _index2_decorators;
    var _index3_decorators;
    var _index4_decorators;
    var _index5_decorators;
    var _index6_decorators;
    var _index7_decorators;
    var DemoController = _classThis = /** @class */ (function () {
        function DemoController_1() {
            __runInitializers(this, _instanceExtraInitializers);
        }
        //GET,POST,PUT,DELETE
        //localhost:3000/api/demo/index
        DemoController_1.prototype.index = function () {
            return 'Hello World';
        };
        DemoController_1.prototype.index2 = function () {
            return '<b><i>Hello World</b></i>';
        };
        DemoController_1.prototype.index3 = function () {
            return { id: 1, name: 'Student 1', score: 7.8 };
        };
        DemoController_1.prototype.index4 = function () {
            return [
                { id: 1, name: 'Student 1', score: 7.8 },
                { id: 2, name: 'Student 2', score: 8.5 },
                { id: 3, name: 'Student 3', score: 6.7 }
            ];
        };
        DemoController_1.prototype.index5 = function (id) {
            return { id: id };
        };
        DemoController_1.prototype.index6 = function (id, username, price, status) {
            return {
                id: id,
                username: username,
                price: price,
                status: status
            };
        };
        //http://localhost:3000/api/demo/index7?id=4
        DemoController_1.prototype.index7 = function (id, username) {
            return {
                id: id,
                username: username
            };
        };
        return DemoController_1;
    }());
    __setFunctionName(_classThis, "DemoController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _index_decorators = [(0, common_1.Header)('Content-Type', 'text/plain'), (0, common_1.Get)('index')];
        _index2_decorators = [(0, common_1.Header)('Content-Type', 'text/html'), (0, common_1.Get)('index2')];
        _index3_decorators = [(0, common_1.Get)('index3')];
        _index4_decorators = [(0, common_1.Get)('index4')];
        _index5_decorators = [(0, common_1.Get)('index5/:id')];
        _index6_decorators = [(0, common_1.Get)('index6/:id/:username')];
        _index7_decorators = [(0, common_1.Get)('index7')];
        __esDecorate(_classThis, null, _index_decorators, { kind: "method", name: "index", static: false, private: false, access: { has: function (obj) { return "index" in obj; }, get: function (obj) { return obj.index; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _index2_decorators, { kind: "method", name: "index2", static: false, private: false, access: { has: function (obj) { return "index2" in obj; }, get: function (obj) { return obj.index2; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _index3_decorators, { kind: "method", name: "index3", static: false, private: false, access: { has: function (obj) { return "index3" in obj; }, get: function (obj) { return obj.index3; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _index4_decorators, { kind: "method", name: "index4", static: false, private: false, access: { has: function (obj) { return "index4" in obj; }, get: function (obj) { return obj.index4; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _index5_decorators, { kind: "method", name: "index5", static: false, private: false, access: { has: function (obj) { return "index5" in obj; }, get: function (obj) { return obj.index5; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _index6_decorators, { kind: "method", name: "index6", static: false, private: false, access: { has: function (obj) { return "index6" in obj; }, get: function (obj) { return obj.index6; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _index7_decorators, { kind: "method", name: "index7", static: false, private: false, access: { has: function (obj) { return "index7" in obj; }, get: function (obj) { return obj.index7; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DemoController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DemoController = _classThis;
}();
exports.DemoController = DemoController;
