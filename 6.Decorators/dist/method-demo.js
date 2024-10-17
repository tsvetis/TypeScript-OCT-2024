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
const multiplyBy10 = (num) => num * 10;
let Programmer = (() => {
    let _instanceExtraInitializers = [];
    let _writeTest_decorators;
    let _fixBugInProduction_decorators;
    return class Programmer {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _writeTest_decorators = [withBudget(multiplyBy10(5))];
            _fixBugInProduction_decorators = [withBudget(multiplyBy10(50))];
            __esDecorate(this, null, _writeTest_decorators, { kind: "method", name: "writeTest", static: false, private: false, access: { has: obj => "writeTest" in obj, get: obj => obj.writeTest }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _fixBugInProduction_decorators, { kind: "method", name: "fixBugInProduction", static: false, private: false, access: { has: obj => "fixBugInProduction" in obj, get: obj => obj.fixBugInProduction }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        budget = (__runInitializers(this, _instanceExtraInitializers), 900);
        writeTest() {
            console.log(`MSG: Writing tests is important job!`);
        }
        fixBugInProduction() {
            console.log("Fixing bugs in production is expensive!");
        }
    };
})();
const p = new Programmer();
p.writeTest();
p.fixBugInProduction();
console.log(p.budget);
// Decorator
function withBudget(budgetAmount) {
    // Connection between class and function
    return function (target, context) {
        // Function scope
        return function (...args) {
            const instance = this; //  T -> our class
            if (instance.budget > budgetAmount) {
                instance.budget -= budgetAmount;
                // How to invoke method from here?
                target.apply(instance, args); // !Important: calls our method!
            }
            else {
                console.log(`Insufficient funds for ${context.name.toString()} operation. Required addition ${budgetAmount - instance.budget}!`);
            }
        };
    };
}
