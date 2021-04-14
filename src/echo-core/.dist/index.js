'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var echoBase = require('@equinor/echo-base');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var react__default = /*#__PURE__*/_interopDefaultLegacy(react);
var echoBase__default = /*#__PURE__*/_interopDefaultLegacy(echoBase);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}
function isProduction() {
  return !isDevelopment();
}
var environmentVariableInstance;
var echoEnv = {
  GENERATE_SOURCEMAP: process.env.GENERATE_SOURCEMAP,
  INLINE_RUNTIME_CHUNK: process.env.INLINE_RUNTIME_CHUNK,
  REACT_APP_DEFAULT_CACHE_LOCATION: process.env.REACT_APP_DEFAULT_CACHE_LOCATION,
  REACT_APP_LOGGER_ACTIVE: process.env.REACT_APP_LOGGER_ACTIVE,
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  REACT_APP_AZURE_AD_TENNANT: process.env.REACT_APP_AZURE_AD_TENNANT,
  REACT_APP_AZURE_AD_TENNANT_ID: process.env.REACT_APP_AZURE_AD_TENNANT_ID,
  REACT_APP_AZURE_AD_CLIENT_ID: process.env.REACT_APP_AZURE_AD_CLIENT_ID,
  REACT_APP_API_CLIENT_ID: process.env.REACT_APP_API_CLIENT_ID,
  REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY: process.env.REACT_APP_APPINSIGHTS_INSTRUMENTATIONKEY,
  REACT_APP_AZURE_BUILD_NUMBER: process.env.REACT_APP_AZURE_BUILD_NUMBER
}; //seems like window._env_ is not available in a worker
//setupTests.js mocks this variable, if changed, be sure to update here as well

var env = function env() {
  var _a;

  if (!environmentVariableInstance) {
    environmentVariableInstance = (_a = window === null || window === void 0 ? void 0 : window._env_) !== null && _a !== void 0 ? _a : echoEnv;
  }

  return environmentVariableInstance;
};
function setEnv(environmentVariables) {
  environmentVariableInstance = environmentVariables;
}

var Env = function Env() {
  _classCallCheck(this, Env);

  this.isDevelopment = isDevelopment;
  this.isProduction = isProduction;
  this.env = env;
  this.setEnv = setEnv;
};

var useAuthenticate = function useAuthenticate(authProvider, logRequest) {
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAuthenticated = _useState2[0],
      setIsAuthenticated = _useState2[1];

  react.useEffect(function () {
    if (!authProvider.isAuthenticated) {
      authProvider.handleLogin(logRequest).then(function () {
        setIsAuthenticated(authProvider.isAuthenticated);
      });
    }
  }, [authProvider, logRequest]);
  return isAuthenticated;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var nextAtomUid = 0;
var stateByAtomId = Object.create(null);
var validatorByAtomId = Object.create(null);
var changeHandlersByAtomId = {};
/** @ignore */
function _useNextAtomId() {
    return nextAtomUid++;
}
/** @ignore */
function _getState(atom) {
    return stateByAtomId[atom["$$id"]];
}
/** @ignore */
function _setState(atom, state) {
    stateByAtomId[atom["$$id"]] = state;
}
/** @ignore */
function _getValidator(atom) {
    return validatorByAtomId[atom["$$id"]];
}
/** @ignore */
function _setValidator(atom, validator) {
    validatorByAtomId[atom["$$id"]] = validator;
}
/** @ignore */
function _initChangeHandlerDict(atom) {
    changeHandlersByAtomId[atom["$$id"]] = {};
}
/** @ignore */
function _addChangeHandler(atom, key, handler) {
    if (typeof changeHandlersByAtomId[atom["$$id"]][key] === "function") {
        throw new Error("Change handler already registered for key \"" + key + "\" on " + atom + ".\nRemove the existing handler before registering a new one.");
    }
    changeHandlersByAtomId[atom["$$id"]][key] = handler;
}
/** @ignore */
function _removeChangeHandler(atom, key) {
    delete changeHandlersByAtomId[atom["$$id"]][key];
}
/** @ignore */
function _runChangeHandlers(atom, previous, current) {
    Object.keys(changeHandlersByAtomId[atom["$$id"]]).forEach(function (k) {
        if (typeof changeHandlersByAtomId[atom["$$id"]][k] === "function") {
            changeHandlersByAtomId[atom["$$id"]][k]({ previous: previous, current: current });
        }
    });
}

/**
 * Registers a function to be run each time the state of `atom` changes.
 *
 * Will throw an Error if `key` is already taken by another handler.
 *
 * @example
```js

import {Atom, addChangeHandler, swap} from '@libre/atom'

const countAtom = Atom.of({ count: 0 })

addChangeHandler(countAtom, "log", ({current, previous}) => {
  console.log(previous, current)
})

swap(countAtom, (state) => ({ count: state.count + 1 }))


// stdout logs:
// { count: 0 }
// { count: 1 }

```
 */
function addChangeHandler(atom, key, handler) {
    _addChangeHandler(atom, key, handler);
}
/**
 * Deletes the `key` and the handler associated with `key` so that it not longer runs
 * when the state of `atom` changes.
 *
 * @example
```js

import {Atom, addChangeHandler, removeChangeHandler, swap} from '@libre/atom'

const countAtom = Atom.of({ count: 0 })

addChangeHandler(countAtom, "log", ({current, previous}) => {
  console.log(previous, current)
})

swap(countAtom, (state) => ({ count: state.count + 1 }))

// stdout logs:
// { count: 0 }
// { count: 1 }

removeChangeHandler(atom, "log")

swap(countAtom, (state) => ({ count: state.count + 1 }))

// nothing is logged
```
 */
function removeChangeHandler(atom, key) {
    _removeChangeHandler(atom, key);
}

/** @ignore */
function prettyPrint(val) {
    return JSON.stringify(val, null, "  ");
}

/**
 * A data structure useful for providing a controlled, predictable mechanism for mutability.
 * Allows multiple components of a program to share read/write access to some state in such
 * a way that no component can mutate another component's current reference to the state in
 * the middle of some process or asynchronous operation.
 *
 */
var Atom = /** @class */ (function () {
    /** @ignore */
    function Atom(state, _a) {
        var validator = (_a === void 0 ? {} : _a).validator;
        validator = validator || (function () { return true; });
        if (!validator(state)) {
            var errMsg = "Atom initialized with invalid state:\n\n" + prettyPrint(state) + "\n\naccording to validator function:\n" + validator + "\n\n";
            var err = Error(errMsg);
            err.name = "AtomInvalidStateError";
            throw err;
        }
        Object.defineProperty(this, "$$id", { value: _useNextAtomId() });
        _setState(this, state);
        _setValidator(this, validator);
        _initChangeHandlerDict(this);
        return this;
    }
    /**
     * Constructs a new instance of [[Atom]] with its internal state
     * set to `state`.
     *
     * @param S the type of the value being set as an [[Atom]]'s internal state
     * @example
  ```js
  
  import { Atom } from '@libre/atom'
  
  const a1 = Atom.of(0)
  const a2 = Atom.of("zero")
  const a3 = Atom.of({ count: 0 })
  ```
     */
    Atom.of = function (state, options) {
        return new Atom(state, options);
    };
    /** @ignore */
    Atom.prototype.toString = function () {
        return "Atom<" + prettyPrint(_getState(this)) + ">";
    };
    /** @ignore */
    Atom.prototype.inspect = function () {
        return this.toString();
    };
    return Atom;
}());

/** @ignore */
var expectedAtomButGot = "Expected an Atom instances, but got:";

/** @ignore */
function throwIfNotAtom(atom) {
    if (!(atom instanceof Atom)) {
        throw TypeError(expectedAtomButGot + "\n\n" + prettyPrint(atom));
    }
}

/**
 * Dereferences (i.e. "*reads*") the current state of an [[Atom]]. The dereferenced value
 * should ___not___ be mutated.
 *
 * @param <S> the type of `atom`'s inner state
 *
 * @example
```js

import {Atom, deref} from '@libre/atom'

const stateAtom = Atom.of({ count: 0 })

deref(stateAtom) // => { count: 0 }
```
 */
function deref(atom) {
    throwIfNotAtom(atom);
    return _getState(atom);
}

/**
 * Gets `atom`'s validator function
 *
 * @param <S> the type of `atom`'s inner state
 *
 * @example
```js

import {Atom, deref, getValidator, swap} from '@libre/atom'

const atom = Atom.of({ count: 0 }, { validator: (state) => isEven(state.count) })
const validator = getValidator(atom)
validator({ count: 3 }) // => false
validator({ count: 2 }) // => true
```
 */
function getValidator(atom) {
    throwIfNotAtom(atom);
    return _getValidator(atom);
}

/**
 * Sets `atom`s state to `nextState`.
 *
 * It is equivalent to `swap(atom, () => newState)`.
 *
 * @param <S> the type of `atom`'s inner state
 * @param atom an instance of [[Atom]]
 * @param nextState the value to which to set the state; it should be the same type/interface as current state
 *
  * @example
```js

import {Atom, deref, set} from '@libre/atom'

const atom = Atom.of({ count: 0 })

set(atom, { count: 100 })
deref(atom) // => { count: 100 }
```
 */
function set(atom, nextState) {
    throwIfNotAtom(atom);
    var validator = _getValidator(atom);
    var didValidate = validator(nextState);
    if (!didValidate) {
        var errMsg = "Attempted to set the state of\n\n" + atom + "\n\nwith:\n\n" + prettyPrint(nextState) + "\n\nbut it did not pass validator:\n" + validator + "\n\n";
        var err = Error(errMsg);
        err.name = "AtomInvalidStateError";
        throw err;
    }
    else {
        var prevState = deref(atom);
        _setState(atom, nextState);
        _runChangeHandlers(atom, prevState, nextState);
    }
}

/**
 * Sets the `validator` for `atom`. `validator` must be a pure function of one argument,
 * which will be passed the intended new state on any state change. If the new state is
 * unacceptable, `validator` should return false or throw an exception. If the current state
 * is not acceptable to the new validator, an exception will be thrown and the validator will
 * not be changed.
 *
 * @param <S> the type of `atom`'s inner state
 *
 * @example
```js

import {Atom, deref, setValidator, set} from '@libre/atom'
import { _setValidator } from './internal-state';

const atom = Atom.of({ count: 0 }, {validator: (state) => isNumber(state.count) })
setValidator(atom, (state) => isOdd(state.count)) // Error; new validator rejected
set(atom, {count: "not number"}) // Error; new state not set
setValidator(atom, (state) => isEven(state.count)) // All good
set(atom, {count: 2}) // All good

```
 */
function setValidator(atom, validator) {
    throwIfNotAtom(atom);
    if (!validator(_getState(atom))) {
        var errMsg = "Could not set validator on\n\n" + atom + "\n\nbecause current state would be invalid according to new validator:\n" + validator + "\n\n";
        var err = Error(errMsg);
        err.name = "AtomInvalidStateError";
        throw err;
    }
    else {
        _setValidator(atom, validator);
    }
}

/**
 * Swaps `atom`'s state with the value returned from applying `updateFn` to `atom`'s
 * current state. `updateFn` should be a pure function and ___not___ mutate `state`.
 *
 * @param <S> the type of `atom`'s inner state
 * @param atom an instance of [[Atom]]
 * @param updateFn a pure function that takes the current state and returns the next state; the next state should be of the same type/interface as the current state;
 *
 * @example
 * ```jsx
 *
 *import {Atom, swap} from '@libre/atom'
import {prettyPrint} from './prettyPrint'
 *
 *const stateAtom = Atom.of({ count: 0 })
 *const increment = () => swap(stateAtom, (state) => ({
 *  count: state.count + 1
 *}));
 * ```
 */
function swap(atom, updateFn) {
    throwIfNotAtom(atom);
    var prevState = _getState(atom);
    var nextState = updateFn(prevState);
    var validator = _getValidator(atom);
    var didValidate = validator(nextState);
    if (!didValidate) {
        var errMsg = "swap updateFn\n" + updateFn + "\n\nattempted to swap the state of\n\n" + atom + "\n\nwith:\n\n" + prettyPrint(nextState) + "\n\nbut it did not pass validator:\n" + validator + "\n\n";
        var err = Error(errMsg);
        err.name = "AtomInvalidStateError";
        throw err;
    }
    else {
        _setState(atom, nextState);
        _runChangeHandlers(atom, prevState, nextState);
    }
}

var index_esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addChangeHandler: addChangeHandler,
  removeChangeHandler: removeChangeHandler,
  Atom: Atom,
  deref: deref,
  getValidator: getValidator,
  set: set,
  setValidator: setValidator,
  swap: swap
});

var reactAtom = createCommonjsModule(function (module, exports) {
!function(e,t){module.exports=t();}("undefined"!=typeof self?self:commonjsGlobal,(function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r});},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=index_esm;},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var o in e)t.hasOwnProperty(o)||(t[o]=e[o]);}(o(0));var r=o(2);t.initialize=r.initialize,t.useAtom=r.useAtom;},function(e,t,o){var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),i=o(3),u=r(o(4)),a=o(5),l=0,c=0;function s(e){var t=e.useLayoutEffect,o=e.useMemo,r=e.useState;return l+=1,{Atom:n.Atom,addChangeHandler:n.addChangeHandler,deref:n.deref,getValidator:n.getValidator,removeChangeHandler:n.removeChangeHandler,set:n.set,setValidator:n.setValidator,swap:n.swap,useAtom:function(e,i){var l;if(!(e instanceof n.Atom)){var s=JSON.stringify(e,null,"  ");throw TypeError(u.calledUseAtomWithNonAtom+"\n"+s)}var f,d=(i||{select:null}).select,m=n.deref(e),p=d||function(e){return e};try{p=o((function(){return a.memoLast(p)}),[d]),l=r({}),f=l[1];}catch(e){throw new TypeError(u.calledUseAtomOutsideFunctionComponent)}return t((function(){var t=f["@@react-atom/hook_id"]?f["@@react-atom/hook_id"]:"hook#"+ ++c;return f["@@react-atom/hook_id"]=t,n.addChangeHandler(e,f["@@react-atom/hook_id"],(function(e){var t=e.previous,o=e.current;a.isShallowEqual(p(t),p(o))||f({});})),function(){n.removeChangeHandler(e,f["@@react-atom/hook_id"]);}}),[f,d]),p(m)}}}t.initialize=s,t.useAtom=function(e,t){if(l>1)throw Error(u.multipleInstantiations);var o=(t||{select:null}).select;return o?f(e,{select:o}):f(e)};var f=s({useLayoutEffect:i.useLayoutEffect,useMemo:i.useMemo,useState:i.useState}).useAtom;},function(e,t){e.exports=react__default['default'];},function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.calledUseAtomOutsideFunctionComponent="useAtom can only be called inside the body of a function component",t.calledUseAtomWithNonAtom="useAtom only accepts `react-atom` Atoms, but got:",t.calledDerefWithNonAtom="deref only accepts `react-atom` Atoms, but got:",t.multipleInstantiations="Multiple instances of react-atom have been detected, which will lead to unexpected bugs in the useAtom custom hook. This usually means react-atom has been initialized with `initialize(hooks)` in addition to importing the default Atom, useAtom, etc. directly. To avoid this error, only use the implementation returned from `initialize`.";},function(e,t,o){function r(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function n(e){if("object"!=typeof e||null===e)return !1;var t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}Object.defineProperty(t,"__esModule",{value:!0}),t.isPOJO=n,t.isShallowEqual=function(e,t){if([e,t].every(n)||[e,t].every(Array.isArray)){if(r(e,t))return !0;if(Object.keys(e).length!==Object.keys(t).length)return !1;for(var o in e)if(!r(e[o],t[o]))return !1;return !0}return r(e,t)},t.memoLast=function(e){var t,o;return function(n){return r(t,n)||(t=n,o=e(n)),o}};}])}));

});

unwrapExports(reactAtom);
var reactAtom_1 = reactAtom.Atom;
var reactAtom_2 = reactAtom.useAtom;
var reactAtom_3 = reactAtom.deref;
var reactAtom_4 = reactAtom.swap;
var reactAtom_5 = reactAtom.reactAtom;

(function (PanelType) {
  PanelType["left"] = "left";
  PanelType["right"] = "right";
  PanelType["all"] = "all";
})(exports.PanelType || (exports.PanelType = {}));

(function (ActivePanel) {
  ActivePanel["AppMenu"] = "AppMenu";
  ActivePanel["ToolMenu"] = "ToolMenu";
  ActivePanel["None"] = "";
})(exports.ActivePanel || (exports.ActivePanel = {}));

var tslib = createCommonjsModule(function (module) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : {};
    {
        factory(createExporter(root, createExporter(module.exports)));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});
});

unwrapExports(tslib);
var tslib_1 = tslib.__awaiter;

var BaseError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;

/**
 * Base Error class is intended to be used as a base class for every type of Error generated
 * @param message an error message in human readable format
 * @param exception a generated exception provided as a {Record<string, unknown>} type
 * @export
 * @class BaseError
 * @extends {Error}
 */
var BaseError = /** @class */ (function (_super) {
    tslib.__extends(BaseError, _super);
    function BaseError(_a) {
        var message = _a.message, exception = _a.exception;
        var _this = _super.call(this, message) || this;
        _this.hasBeenLogged = false;
        _this.getProperties = function () { return _this.properties; };
        _this.addProperties = function (values) {
            _this.properties = tslib.__assign(tslib.__assign({}, _this.properties), values);
        };
        _this.properties = exception ? tslib.__assign({}, exception) : {};
        _this.name = _this.constructor.name;
        !message && (_this.message = _this.name);
        return _this;
    }
    return BaseError;
}(Error));
exports.BaseError = BaseError;
exports.default = BaseError;

});

var BaseError = unwrapExports(BaseError_1);
var BaseError_2 = BaseError_1.BaseError;

var AppError = /*#__PURE__*/function (_BaseError) {
  _inherits(AppError, _BaseError);

  var _super = _createSuper(AppError);

  function AppError() {
    _classCallCheck(this, AppError);

    return _super.apply(this, arguments);
  }

  return AppError;
}(BaseError);

var legendOptions = {
  isActive: true,
  selectedLegendType: 'Stid'
};
var plantSettings = {
  instCode: '',
  sapPlantId: '',
  proCoSysPlantId: '',
  plantName: ''
};
var settings = {
  showTextHighlighting: true,
  plantSettings: plantSettings
};
var plantsData = {
  plants: []
};
var defaultGlobalState = {
  app: {
    error: undefined,
    loading: typeof window !== 'undefined',
    layout: 'desktop'
  },
  modules: [],
  panels: [],
  ui: {},
  registry: {
    panels: {},
    routes: {}
  },
  activePanel: exports.ActivePanel.None,
  moduleState: {},
  userProfile: undefined,
  userPhotoUrl: undefined,
  settings: settings,
  plantsData: plantsData,
  legendOptions: legendOptions
};

/**
 * Echo Core function for creating the GlobalState object.
 * @returns Atom<GlobalState>
 * Too read this state use getCoreContext
 *
 * `Echo Core only`
 */

function createGlobalState(defaultState) {
  return reactAtom_1.of(defaultState);
}
/**
 * Echo Core function for creating the GlobalApplicationContext.
 * @param state use with createGlobalState function.
 * This will provides all necessary functions for Echo Core
 *
 * `Echo Core only.`
 */

function createGlobalApplicationContext(state) {
  var ctx = {
    state: state // Todo update with httpApi, authentication and more...

  };
  return ctx;
}
/**
 * Echo CoreContext created the the createGlobalApplicationContext
 * providing GlobalState  and core application functionality
 *
 * `Echo Core only.`
 */

var CoreContext = createGlobalApplicationContext(createGlobalState(defaultGlobalState));
/**
 * Exposing the Echo GlobalStateContext
 *
 * `Echo Framework and Echo Core`
 */

function getCoreContext() {
  return CoreContext;
}
/**
 * Exposing the Echo Atom<GlobalContext>
 *
 * `Echo Framework and Echo Core`
 */

function getCoreState() {
  return CoreContext.state;
}

function useLegendOptions() {
  var _useAtom = reactAtom_2(CoreContext.state),
      legendOptions = _useAtom.legendOptions;

  return Object.assign({}, legendOptions);
}

/*! @azure/msal-browser v2.8.0 2020-12-07 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/*! @azure/msal-common v2.0.0 2020-12-07 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __awaiter$1(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Constants = {
    LIBRARY_NAME: "MSAL.JS",
    SKU: "msal.js.common",
    // Prefix for all library cache entries
    CACHE_PREFIX: "msal",
    // default authority
    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
    // ADFS String
    ADFS: "adfs",
    // Default AAD Instance Discovery Endpoint
    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
    // Resource delimiter - used for certain cache entries
    RESOURCE_DELIM: "|",
    // Placeholder for non-existent account ids/objects
    NO_ACCOUNT: "NO_ACCOUNT",
    // Claims
    CLAIMS: "claims",
    // Consumer UTID
    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
    // Default scopes
    OPENID_SCOPE: "openid",
    PROFILE_SCOPE: "profile",
    OFFLINE_ACCESS_SCOPE: "offline_access",
    // Default response type for authorization code flow
    CODE_RESPONSE_TYPE: "code",
    CODE_GRANT_TYPE: "authorization_code",
    RT_GRANT_TYPE: "refresh_token",
    FRAGMENT_RESPONSE_MODE: "fragment",
    S256_CODE_CHALLENGE_METHOD: "S256",
    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
    AUTHORIZATION_PENDING: "authorization_pending",
    NOT_DEFINED: "not_defined",
    EMPTY_STRING: "",
    FORWARD_SLASH: "/"
};
/**
 * Request header names
 */
var HeaderNames;
(function (HeaderNames) {
    HeaderNames["CONTENT_TYPE"] = "Content-Type";
    HeaderNames["X_CLIENT_CURR_TELEM"] = "x-client-current-telemetry";
    HeaderNames["X_CLIENT_LAST_TELEM"] = "x-client-last-telemetry";
    HeaderNames["RETRY_AFTER"] = "Retry-After";
    HeaderNames["X_MS_LIB_CAPABILITY"] = "x-ms-lib-capability";
    HeaderNames["X_MS_LIB_CAPABILITY_VALUE"] = "retry-after, h429";
})(HeaderNames || (HeaderNames = {}));
/**
 * Persistent cache keys MSAL which stay while user is logged in.
 */
var PersistentCacheKeys;
(function (PersistentCacheKeys) {
    PersistentCacheKeys["ID_TOKEN"] = "idtoken";
    PersistentCacheKeys["CLIENT_INFO"] = "client.info";
    PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
    PersistentCacheKeys["ERROR"] = "error";
    PersistentCacheKeys["ERROR_DESC"] = "error.description";
})(PersistentCacheKeys || (PersistentCacheKeys = {}));
/**
 * String constants related to AAD Authority
 */
var AADAuthorityConstants;
(function (AADAuthorityConstants) {
    AADAuthorityConstants["COMMON"] = "common";
    AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
    AADAuthorityConstants["CONSUMERS"] = "consumers";
})(AADAuthorityConstants || (AADAuthorityConstants = {}));
/**
 * Keys in the hashParams sent by AAD Server
 */
var AADServerParamKeys;
(function (AADServerParamKeys) {
    AADServerParamKeys["CLIENT_ID"] = "client_id";
    AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
    AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
    AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
    AADServerParamKeys["GRANT_TYPE"] = "grant_type";
    AADServerParamKeys["CLAIMS"] = "claims";
    AADServerParamKeys["SCOPE"] = "scope";
    AADServerParamKeys["ERROR"] = "error";
    AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
    AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
    AADServerParamKeys["ID_TOKEN"] = "id_token";
    AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
    AADServerParamKeys["EXPIRES_IN"] = "expires_in";
    AADServerParamKeys["STATE"] = "state";
    AADServerParamKeys["NONCE"] = "nonce";
    AADServerParamKeys["PROMPT"] = "prompt";
    AADServerParamKeys["SESSION_STATE"] = "session_state";
    AADServerParamKeys["CLIENT_INFO"] = "client_info";
    AADServerParamKeys["CODE"] = "code";
    AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
    AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
    AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
    AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
    AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
    AADServerParamKeys["X_CLIENT_VER"] = "x-client-VER";
    AADServerParamKeys["X_CLIENT_OS"] = "x-client-OS";
    AADServerParamKeys["X_CLIENT_CPU"] = "x-client-CPU";
    AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
    AADServerParamKeys["ID_TOKEN_HINT"] = "id_token_hint";
    AADServerParamKeys["DEVICE_CODE"] = "device_code";
    AADServerParamKeys["CLIENT_SECRET"] = "client_secret";
    AADServerParamKeys["CLIENT_ASSERTION"] = "client_assertion";
    AADServerParamKeys["CLIENT_ASSERTION_TYPE"] = "client_assertion_type";
    AADServerParamKeys["TOKEN_TYPE"] = "token_type";
    AADServerParamKeys["REQ_CNF"] = "req_cnf";
    AADServerParamKeys["OBO_ASSERTION"] = "assertion";
    AADServerParamKeys["REQUESTED_TOKEN_USE"] = "requested_token_use";
    AADServerParamKeys["ON_BEHALF_OF"] = "on_behalf_of";
    AADServerParamKeys["FOCI"] = "foci";
})(AADServerParamKeys || (AADServerParamKeys = {}));
/**
 * Claims request keys
 */
var ClaimsRequestKeys;
(function (ClaimsRequestKeys) {
    ClaimsRequestKeys["ACCESS_TOKEN"] = "access_token";
    ClaimsRequestKeys["XMS_CC"] = "xms_cc";
})(ClaimsRequestKeys || (ClaimsRequestKeys = {}));
/**
 * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
 * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
 * internal partners too, hence the choice of generic "string" type instead of the "enum"
 */
var PromptValue = {
    LOGIN: "login",
    SELECT_ACCOUNT: "select_account",
    CONSENT: "consent",
    NONE: "none",
};
/**
 * SSO Types - generated to populate hints
 */
var SSOTypes;
(function (SSOTypes) {
    SSOTypes["ACCOUNT"] = "account";
    SSOTypes["SID"] = "sid";
    SSOTypes["LOGIN_HINT"] = "login_hint";
    SSOTypes["ID_TOKEN"] = "id_token";
    SSOTypes["DOMAIN_HINT"] = "domain_hint";
    SSOTypes["ORGANIZATIONS"] = "organizations";
    SSOTypes["CONSUMERS"] = "consumers";
    SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
    SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
})(SSOTypes || (SSOTypes = {}));
/**
 * Disallowed extra query parameters.
 */
var BlacklistedEQParams = [
    SSOTypes.SID,
    SSOTypes.LOGIN_HINT
];
/**
 * allowed values for codeVerifier
 */
var CodeChallengeMethodValues = {
    PLAIN: "plain",
    S256: "S256"
};
/**
 * allowed values for response_mode
 */
var ResponseMode;
(function (ResponseMode) {
    ResponseMode["QUERY"] = "query";
    ResponseMode["FRAGMENT"] = "fragment";
    ResponseMode["FORM_POST"] = "form_post";
})(ResponseMode || (ResponseMode = {}));
/**
 * allowed grant_type
 */
var GrantType;
(function (GrantType) {
    GrantType["IMPLICIT_GRANT"] = "implicit";
    GrantType["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
    GrantType["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
    GrantType["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
    GrantType["REFRESH_TOKEN_GRANT"] = "refresh_token";
    GrantType["DEVICE_CODE_GRANT"] = "device_code";
    GrantType["JWT_BEARER"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
})(GrantType || (GrantType = {}));
/**
 * Account types in Cache
 */
var CacheAccountType;
(function (CacheAccountType) {
    CacheAccountType["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
    CacheAccountType["ADFS_ACCOUNT_TYPE"] = "ADFS";
    CacheAccountType["MSAV1_ACCOUNT_TYPE"] = "MSA";
    CacheAccountType["GENERIC_ACCOUNT_TYPE"] = "Generic"; // NTLM, Kerberos, FBA, Basic etc
})(CacheAccountType || (CacheAccountType = {}));
/**
 * Separators used in cache
 */
var Separators;
(function (Separators) {
    Separators["CACHE_KEY_SEPARATOR"] = "-";
    Separators["CLIENT_INFO_SEPARATOR"] = ".";
})(Separators || (Separators = {}));
/**
 * Credential Type stored in the cache
 */
var CredentialType;
(function (CredentialType) {
    CredentialType["ID_TOKEN"] = "IdToken";
    CredentialType["ACCESS_TOKEN"] = "AccessToken";
    CredentialType["REFRESH_TOKEN"] = "RefreshToken";
})(CredentialType || (CredentialType = {}));
/**
 * Credential Type stored in the cache
 */
var CacheSchemaType;
(function (CacheSchemaType) {
    CacheSchemaType["ACCOUNT"] = "Account";
    CacheSchemaType["CREDENTIAL"] = "Credential";
    CacheSchemaType["ID_TOKEN"] = "IdToken";
    CacheSchemaType["ACCESS_TOKEN"] = "AccessToken";
    CacheSchemaType["REFRESH_TOKEN"] = "RefreshToken";
    CacheSchemaType["APP_METADATA"] = "AppMetadata";
    CacheSchemaType["TEMPORARY"] = "TempCache";
    CacheSchemaType["TELEMETRY"] = "Telemetry";
    CacheSchemaType["UNDEFINED"] = "Undefined";
    CacheSchemaType["THROTTLING"] = "Throttling";
})(CacheSchemaType || (CacheSchemaType = {}));
/**
 * Combine all cache types
 */
var CacheType;
(function (CacheType) {
    CacheType[CacheType["ADFS"] = 1001] = "ADFS";
    CacheType[CacheType["MSA"] = 1002] = "MSA";
    CacheType[CacheType["MSSTS"] = 1003] = "MSSTS";
    CacheType[CacheType["GENERIC"] = 1004] = "GENERIC";
    CacheType[CacheType["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
    CacheType[CacheType["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
    CacheType[CacheType["ID_TOKEN"] = 2003] = "ID_TOKEN";
    CacheType[CacheType["APP_METADATA"] = 3001] = "APP_METADATA";
    CacheType[CacheType["UNDEFINED"] = 9999] = "UNDEFINED";
})(CacheType || (CacheType = {}));
/**
 * More Cache related constants
 */
var APP_METADATA = "appmetadata";
var ClientInfo = "client_info";
var THE_FAMILY_ID = "1";
var SERVER_TELEM_CONSTANTS = {
    SCHEMA_VERSION: 2,
    MAX_HEADER_BYTES: 4000,
    CACHE_KEY: "server-telemetry",
    CATEGORY_SEPARATOR: "|",
    VALUE_SEPARATOR: ",",
    OVERFLOW_TRUE: "1",
    OVERFLOW_FALSE: "0",
    UNKNOWN_ERROR: "unknown_error"
};
/**
 * Type of the authentication request
 */
var AuthenticationScheme;
(function (AuthenticationScheme) {
    AuthenticationScheme["POP"] = "pop";
    AuthenticationScheme["BEARER"] = "Bearer";
})(AuthenticationScheme || (AuthenticationScheme = {}));
/**
 * Constants related to throttling
 */
var ThrottlingConstants = {
    // Default time to throttle RequestThumbprint in seconds
    DEFAULT_THROTTLE_TIME_SECONDS: 60,
    // Default maximum time to throttle in seconds, overrides what the server sends back
    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
    // Prefix for storing throttling entries
    THROTTLING_PREFIX: "throttling"
};
var Errors = {
    INVALID_GRANT_ERROR: "invalid_grant",
    CLIENT_MISMATCH_ERROR: "client_mismatch",
};
/**
 * Password grant parameters
 */
var PasswordGrantConstants;
(function (PasswordGrantConstants) {
    PasswordGrantConstants["username"] = "username";
    PasswordGrantConstants["password"] = "password";
})(PasswordGrantConstants || (PasswordGrantConstants = {}));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * AuthErrorMessage class containing string constants used by error codes and messages.
 */
var AuthErrorMessage = {
    unexpectedError: {
        code: "unexpected_error",
        desc: "Unexpected error in authentication."
    }
};
/**
 * General error class thrown by the MSAL.js library.
 */
var AuthError = /** @class */ (function (_super) {
    __extends$1(AuthError, _super);
    function AuthError(errorCode, errorMessage, suberror) {
        var _this = this;
        var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
        _this = _super.call(this, errorString) || this;
        Object.setPrototypeOf(_this, AuthError.prototype);
        _this.errorCode = errorCode || Constants.EMPTY_STRING;
        _this.errorMessage = errorMessage || "";
        _this.subError = suberror || "";
        _this.name = "AuthError";
        return _this;
    }
    /**
     * Creates an error that is thrown when something unexpected happens in the library.
     * @param errDesc
     */
    AuthError.createUnexpectedError = function (errDesc) {
        return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
    };
    return AuthError;
}(Error));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ClientAuthErrorMessage class containing string constants used by error codes and messages.
 */
var ClientAuthErrorMessage = {
    clientInfoDecodingError: {
        code: "client_info_decoding_error",
        desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
    },
    clientInfoEmptyError: {
        code: "client_info_empty_error",
        desc: "The client info was empty. Please review the trace to determine the root cause."
    },
    tokenParsingError: {
        code: "token_parsing_error",
        desc: "Token cannot be parsed. Please review stack trace to determine root cause."
    },
    nullOrEmptyToken: {
        code: "null_or_empty_token",
        desc: "The token is null or empty. Please review the trace to determine the root cause."
    },
    endpointResolutionError: {
        code: "endpoints_resolution_error",
        desc: "Error: could not resolve endpoints. Please check network and try again."
    },
    hashNotDeserialized: {
        code: "hash_not_deserialized",
        desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
    },
    blankGuidGenerated: {
        code: "blank_guid_generated",
        desc: "The guid generated was blank. Please review the trace to determine the root cause."
    },
    invalidStateError: {
        code: "invalid_state",
        desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
    },
    stateMismatchError: {
        code: "state_mismatch",
        desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
    },
    stateNotFoundError: {
        code: "state_not_found",
        desc: "State not found"
    },
    nonceMismatchError: {
        code: "nonce_mismatch",
        desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
    },
    nonceNotFoundError: {
        code: "nonce_not_found",
        desc: "nonce not found"
    },
    noTokensFoundError: {
        code: "no_tokens_found",
        desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
    },
    multipleMatchingTokens: {
        code: "multiple_matching_tokens",
        desc: "The cache contains multiple tokens satisfying the requirements. " +
            "Call AcquireToken again providing more requirements such as authority or account."
    },
    multipleMatchingAccounts: {
        code: "multiple_matching_accounts",
        desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
    },
    multipleMatchingAppMetadata: {
        code: "multiple_matching_appMetadata",
        desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
    },
    tokenRequestCannotBeMade: {
        code: "request_cannot_be_made",
        desc: "Token request cannot be made without authorization code or refresh token."
    },
    appendEmptyScopeError: {
        code: "cannot_append_empty_scope",
        desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
    },
    removeEmptyScopeError: {
        code: "cannot_remove_empty_scope",
        desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
    },
    appendScopeSetError: {
        code: "cannot_append_scopeset",
        desc: "Cannot append ScopeSet due to error."
    },
    emptyInputScopeSetError: {
        code: "empty_input_scopeset",
        desc: "Empty input ScopeSet cannot be processed."
    },
    DeviceCodePollingCancelled: {
        code: "device_code_polling_cancelled",
        desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
    },
    DeviceCodeExpired: {
        code: "device_code_expired",
        desc: "Device code is expired."
    },
    NoAccountInSilentRequest: {
        code: "no_account_in_silent_request",
        desc: "Please pass an account object, silent flow is not supported without account information"
    },
    invalidCacheRecord: {
        code: "invalid_cache_record",
        desc: "Cache record object was null or undefined."
    },
    invalidCacheEnvironment: {
        code: "invalid_cache_environment",
        desc: "Invalid environment when attempting to create cache entry"
    },
    noAccountFound: {
        code: "no_account_found",
        desc: "No account found in cache for given key."
    },
    CachePluginError: {
        code: "no cache plugin set on CacheManager",
        desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
    },
    noCryptoObj: {
        code: "no_crypto_object",
        desc: "No crypto object detected. This is required for the following operation: "
    },
    invalidCacheType: {
        code: "invalid_cache_type",
        desc: "Invalid cache type"
    },
    unexpectedAccountType: {
        code: "unexpected_account_type",
        desc: "Unexpected account type."
    },
    unexpectedCredentialType: {
        code: "unexpected_credential_type",
        desc: "Unexpected credential type."
    },
    invalidAssertion: {
        code: "invalid_assertion",
        desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
    },
    invalidClientCredential: {
        code: "invalid_client_credential",
        desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
    },
    tokenRefreshRequired: {
        code: "token_refresh_required",
        desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
    },
    tokenClaimsRequired: {
        code: "token_claims_cnf_required_for_signedjwt",
        desc: "Cannot generate a POP jwt if the token_claims are not populated"
    },
    noAuthorizationCodeFromServer: {
        code: "authorization_code_missing_from_server_response",
        desc: "Srver response does not contain an authorization code to proceed"
    }
};
/**
 * Error thrown when there is an error in the client code running on the browser.
 */
var ClientAuthError = /** @class */ (function (_super) {
    __extends$1(ClientAuthError, _super);
    function ClientAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientAuthError";
        Object.setPrototypeOf(_this, ClientAuthError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when client info object doesn't decode correctly.
     * @param caughtError
     */
    ClientAuthError.createClientInfoDecodingError = function (caughtError) {
        return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
    };
    /**
     * Creates an error thrown if the client info is empty.
     * @param rawClientInfo
     */
    ClientAuthError.createClientInfoEmptyError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, "" + ClientAuthErrorMessage.clientInfoEmptyError.desc);
    };
    /**
     * Creates an error thrown when the id token extraction errors out.
     * @param err
     */
    ClientAuthError.createTokenParsingError = function (caughtExtractionError) {
        return new ClientAuthError(ClientAuthErrorMessage.tokenParsingError.code, ClientAuthErrorMessage.tokenParsingError.desc + " Failed with error: " + caughtExtractionError);
    };
    /**
     * Creates an error thrown when the id token string is null or empty.
     * @param invalidRawTokenString
     */
    ClientAuthError.createTokenNullOrEmptyError = function (invalidRawTokenString) {
        return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyToken.code, ClientAuthErrorMessage.nullOrEmptyToken.desc + " Raw Token Value: " + invalidRawTokenString);
    };
    /**
     * Creates an error thrown when the endpoint discovery doesn't complete correctly.
     */
    ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
        return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
    };
    /**
     * Creates an error thrown when the hash cannot be deserialized.
     * @param hashParamObj
     */
    ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
        return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
    };
    /**
     * Creates an error thrown when the state cannot be parsed.
     * @param invalidState
     */
    ClientAuthError.createInvalidStateError = function (invalidState, errorString) {
        return new ClientAuthError(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
    };
    /**
     * Creates an error thrown when two states do not match.
     */
    ClientAuthError.createStateMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
    };
    /**
     * Creates an error thrown when the state is not present
     * @param missingState
     */
    ClientAuthError.createStateNotFoundError = function (missingState) {
        return new ClientAuthError(ClientAuthErrorMessage.stateNotFoundError.code, ClientAuthErrorMessage.stateNotFoundError.desc + ":  " + missingState);
    };
    /**
     * Creates an error thrown when the nonce does not match.
     */
    ClientAuthError.createNonceMismatchError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
    };
    /**
     * Creates an error thrown when the mnonce is not present
     * @param missingNonce
     */
    ClientAuthError.createNonceNotFoundError = function (missingNonce) {
        return new ClientAuthError(ClientAuthErrorMessage.nonceNotFoundError.code, ClientAuthErrorMessage.nonceNotFoundError.desc + ":  " + missingNonce);
    };
    /**
     * Creates an error thrown when the authorization code required for a token request is null or empty.
     */
    ClientAuthError.createNoTokensFoundError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noTokensFoundError.code, ClientAuthErrorMessage.noTokensFoundError.desc);
    };
    /**
     * Throws error when multiple tokens are in cache.
     */
    ClientAuthError.createMultipleMatchingTokensInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
    };
    /**
     * Throws error when multiple accounts are in cache for the given params
     */
    ClientAuthError.createMultipleMatchingAccountsInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
    };
    /**
     * Throws error when multiple appMetada are in cache for the given clientId.
     */
    ClientAuthError.createMultipleMatchingAppMetadataInCacheError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAppMetadata.code, ClientAuthErrorMessage.multipleMatchingAppMetadata.desc);
    };
    /**
     * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
     */
    ClientAuthError.createTokenRequestCannotBeMadeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
    };
    /**
     * Throws error when attempting to append a null, undefined or empty scope to a set
     * @param givenScope
     */
    ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
        return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    /**
     * Throws error when attempting to append a null, undefined or empty scope to a set
     * @param givenScope
     */
    ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
        return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
    };
    /**
     * Throws error when attempting to append null or empty ScopeSet.
     * @param appendError
     */
    ClientAuthError.createAppendScopeSetError = function (appendError) {
        return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
    };
    /**
     * Throws error if ScopeSet is null or undefined.
     * @param givenScopeSet
     */
    ClientAuthError.createEmptyInputScopeSetError = function (givenScopeSet) {
        return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, ClientAuthErrorMessage.emptyInputScopeSetError.desc + " Given ScopeSet: " + givenScopeSet);
    };
    /**
     * Throws error if user sets CancellationToken.cancel = true during polling of token endpoint during device code flow
     */
    ClientAuthError.createDeviceCodeCancelledError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
    };
    /**
     * Throws error if device code is expired
     */
    ClientAuthError.createDeviceCodeExpiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
    };
    /**
     * Throws error when silent requests are made without an account object
     */
    ClientAuthError.createNoAccountInSilentRequestError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
    };
    /**
     * Throws error when cache record is null or undefined.
     */
    ClientAuthError.createNullOrUndefinedCacheRecord = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
    };
    /**
     * Throws error when provided environment is not part of the CloudDiscoveryMetadata object
     */
    ClientAuthError.createInvalidCacheEnvironmentError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
    };
    /**
     * Throws error when account is not found in cache.
     */
    ClientAuthError.createNoAccountFoundError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
    };
    /**
     * Throws error if ICachePlugin not set on CacheManager.
     */
    ClientAuthError.createCachePluginError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
    };
    /**
     * Throws error if crypto object not found.
     * @param operationName
     */
    ClientAuthError.createNoCryptoObjectError = function (operationName) {
        return new ClientAuthError(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
    };
    /**
     * Throws error if cache type is invalid.
     */
    ClientAuthError.createInvalidCacheTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
    };
    /**
     * Throws error if unexpected account type.
     */
    ClientAuthError.createUnexpectedAccountTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
    };
    /**
     * Throws error if unexpected credential type.
     */
    ClientAuthError.createUnexpectedCredentialTypeError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
    };
    /**
     * Throws error if client assertion is not valid.
     */
    ClientAuthError.createInvalidAssertionError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidAssertion.code, "" + ClientAuthErrorMessage.invalidAssertion.desc);
    };
    /**
     * Throws error if client assertion is not valid.
     */
    ClientAuthError.createInvalidCredentialError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.invalidClientCredential.code, "" + ClientAuthErrorMessage.invalidClientCredential.desc);
    };
    /**
     * Throws error if token cannot be retrieved from cache due to refresh being required.
     */
    ClientAuthError.createRefreshRequiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenRefreshRequired.code, ClientAuthErrorMessage.tokenRefreshRequired.desc);
    };
    /**
     * Throws error if token claims are not populated for a signed jwt generation
     */
    ClientAuthError.createTokenClaimsRequiredError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.tokenClaimsRequired.code, ClientAuthErrorMessage.tokenClaimsRequired.desc);
    };
    /**
     * Throws error when the authorization code is missing from the server response
     */
    ClientAuthError.createNoAuthCodeInServerResponseError = function () {
        return new ClientAuthError(ClientAuthErrorMessage.noAuthorizationCodeFromServer.code, ClientAuthErrorMessage.noAuthorizationCodeFromServer.desc);
    };
    return ClientAuthError;
}(AuthError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * @hidden
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * decode a JWT
     *
     * @param authToken
     */
    StringUtils.decodeAuthToken = function (authToken) {
        if (StringUtils.isEmpty(authToken)) {
            throw ClientAuthError.createTokenNullOrEmptyError(authToken);
        }
        var tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
        var matches = tokenPartsRegex.exec(authToken);
        if (!matches || matches.length < 4) {
            throw ClientAuthError.createTokenParsingError("Given token is malformed: " + JSON.stringify(authToken));
        }
        var crackedToken = {
            header: matches[1],
            JWSPayload: matches[2],
            JWSSig: matches[3]
        };
        return crackedToken;
    };
    /**
     * Check if a string is empty.
     *
     * @param str
     */
    StringUtils.isEmpty = function (str) {
        return (typeof str === "undefined" || !str || 0 === str.length);
    };
    StringUtils.startsWith = function (str, search) {
        return str.indexOf(search) === 0;
    };
    StringUtils.endsWith = function (str, search) {
        return (str.length >= search.length) && (str.lastIndexOf(search) === (str.length - search.length));
    };
    /**
     * Parses string into an object.
     *
     * @param query
     */
    StringUtils.queryStringToObject = function (query) {
        var match; // Regex for replacing addition symbol with a space
        var pl = /\+/g;
        var search = /([^&=]+)=([^&]*)/g;
        var decode = function (s) { return decodeURIComponent(decodeURIComponent(s.replace(pl, " "))); };
        var obj = {};
        match = search.exec(query);
        while (match) {
            obj[decode(match[1])] = decode(match[2]);
            match = search.exec(query);
        }
        return obj;
    };
    /**
     * Trims entries in an array.
     *
     * @param arr
     */
    StringUtils.trimArrayEntries = function (arr) {
        return arr.map(function (entry) { return entry.trim(); });
    };
    /**
     * Removes empty strings from array
     * @param arr
     */
    StringUtils.removeEmptyStringsFromArray = function (arr) {
        return arr.filter(function (entry) {
            return !StringUtils.isEmpty(entry);
        });
    };
    /**
     * Attempts to parse a string into JSON
     * @param str
     */
    StringUtils.jsonParseHelper = function (str) {
        try {
            return JSON.parse(str);
        }
        catch (e) {
            return null;
        }
    };
    /**
     * Tests if a given string matches a given pattern, with support for wildcards.
     * @param pattern Wildcard pattern to string match. Supports "*" for wildcards
     * @param input String to match against
     */
    StringUtils.matchPattern = function (pattern, input) {
        // https://stackoverflow.com/a/3117248/4888559
        var regex = new RegExp(pattern.replace(/\*/g, "[^ ]*"));
        return regex.test(input);
    };
    return StringUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Log message level.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
})(LogLevel || (LogLevel = {}));
/**
 * Class which facilitates logging of messages to a specific place.
 */
var Logger = /** @class */ (function () {
    function Logger(loggerOptions, packageName, packageVersion) {
        // Current log level, defaults to info.
        this.level = LogLevel.Info;
        var defaultLoggerCallback = function () { };
        this.localCallback = loggerOptions.loggerCallback || defaultLoggerCallback;
        this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled || false;
        this.level = loggerOptions.logLevel || LogLevel.Info;
        this.packageName = packageName || Constants.EMPTY_STRING;
        this.packageVersion = packageVersion || Constants.EMPTY_STRING;
    }
    /**
     * Create new Logger with existing configurations.
     */
    Logger.prototype.clone = function (packageName, packageVersion) {
        return new Logger({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level }, packageName, packageVersion);
    };
    /**
     * Log message with required options.
     */
    Logger.prototype.logMessage = function (logMessage, options) {
        if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
            return;
        }
        var timestamp = new Date().toUTCString();
        var logHeader = StringUtils.isEmpty(this.correlationId) ? "[" + timestamp + "] : " : "[" + timestamp + "] : [" + this.correlationId + "]";
        var log = logHeader + " : " + this.packageName + "@" + this.packageVersion + " : " + LogLevel[options.logLevel] + " - " + logMessage;
        // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": ""}${options.context ? `:${options.context}` : ""}`)(logMessage);
        this.executeCallback(options.logLevel, log, options.containsPii || false);
    };
    /**
     * Execute callback with message.
     */
    Logger.prototype.executeCallback = function (level, message, containsPii) {
        if (this.localCallback) {
            this.localCallback(level, message, containsPii);
        }
    };
    /**
     * Logs error messages.
     */
    Logger.prototype.error = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Error,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs error messages with PII.
     */
    Logger.prototype.errorPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Error,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs warning messages.
     */
    Logger.prototype.warning = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Warning,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs warning messages with PII.
     */
    Logger.prototype.warningPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Warning,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs info messages.
     */
    Logger.prototype.info = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Info,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs info messages with PII.
     */
    Logger.prototype.infoPii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Info,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs verbose messages.
     */
    Logger.prototype.verbose = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Verbose,
            containsPii: false,
            correlationId: correlationId || ""
        });
    };
    /**
     * Logs verbose messages with PII.
     */
    Logger.prototype.verbosePii = function (message, correlationId) {
        this.logMessage(message, {
            logLevel: LogLevel.Verbose,
            containsPii: true,
            correlationId: correlationId || ""
        });
    };
    /**
     * Returns whether PII Logging is enabled or not.
     */
    Logger.prototype.isPiiLoggingEnabled = function () {
        return this.piiLoggingEnabled || false;
    };
    return Logger;
}());

var name = "@azure/msal-common";
var version = "2.0.0";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base type for credentials to be stored in the cache: eg: ACCESS_TOKEN, ID_TOKEN etc
 *
 * Key:Value Schema:
 *
 * Key: <home_account_id*>-<environment>-<credential_type>-<client_id>-<realm*>-<target*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, usually only used for refresh tokens
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 *      oboAssertion: access token passed in as part of OBO request
 * }
 */
var CredentialEntity = /** @class */ (function () {
    function CredentialEntity() {
    }
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */
    CredentialEntity.prototype.generateAccountId = function () {
        return CredentialEntity.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
    };
    /**
     * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
     */
    CredentialEntity.prototype.generateCredentialId = function () {
        return CredentialEntity.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
    };
    /**
     * Generate target key component as per schema: <target>
     */
    CredentialEntity.prototype.generateTarget = function () {
        return CredentialEntity.generateTargetForCacheKey(this.target);
    };
    /**
     * generates credential key
     */
    CredentialEntity.prototype.generateCredentialKey = function () {
        return CredentialEntity.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId);
    };
    /**
     * returns the type of the cache (in this case credential)
     */
    CredentialEntity.prototype.generateType = function () {
        switch (this.credentialType) {
            case CredentialType.ID_TOKEN:
                return CacheType.ID_TOKEN;
            case CredentialType.ACCESS_TOKEN:
                return CacheType.ACCESS_TOKEN;
            case CredentialType.REFRESH_TOKEN:
                return CacheType.REFRESH_TOKEN;
            default: {
                throw ClientAuthError.createUnexpectedCredentialTypeError();
            }
        }
    };
    /**
     * helper function to return `CredentialType`
     * @param key
     */
    CredentialEntity.getCredentialType = function (key) {
        if (key.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) !== -1) {
            return CredentialType.ACCESS_TOKEN;
        }
        else if (key.indexOf(CredentialType.ID_TOKEN.toLowerCase()) !== -1) {
            return CredentialType.ID_TOKEN;
        }
        else if (key.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) !== -1) {
            return CredentialType.REFRESH_TOKEN;
        }
        return Constants.NOT_DEFINED;
    };
    /**
     * generates credential key
     */
    CredentialEntity.generateCredentialCacheKey = function (homeAccountId, environment, credentialType, clientId, realm, target, familyId) {
        var credentialKey = [
            this.generateAccountIdForCacheKey(homeAccountId, environment),
            this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
            this.generateTargetForCacheKey(target),
        ];
        return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * generates Account Id for keys
     * @param homeAccountId
     * @param environment
     */
    CredentialEntity.generateAccountIdForCacheKey = function (homeAccountId, environment) {
        var accountId = [homeAccountId, environment];
        return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generates Credential Id for keys
     * @param credentialType
     * @param realm
     * @param clientId
     * @param familyId
     */
    CredentialEntity.generateCredentialIdForCacheKey = function (credentialType, clientId, realm, familyId) {
        var clientOrFamilyId = credentialType === CredentialType.REFRESH_TOKEN
            ? familyId || clientId
            : clientId;
        var credentialId = [
            credentialType,
            clientOrFamilyId,
            realm || "",
        ];
        return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generate target key component as per schema: <target>
     */
    CredentialEntity.generateTargetForCacheKey = function (scopes) {
        return (scopes || "").toLowerCase();
    };
    return CredentialEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
 */
var ClientConfigurationErrorMessage = {
    redirectUriNotSet: {
        code: "redirect_uri_empty",
        desc: "A redirect URI is required for all calls, and none has been set."
    },
    postLogoutUriNotSet: {
        code: "post_logout_uri_empty",
        desc: "A post logout redirect has not been set."
    },
    claimsRequestParsingError: {
        code: "claims_request_parsing_error",
        desc: "Could not parse the given claims request object."
    },
    authorityUriInsecure: {
        code: "authority_uri_insecure",
        desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
    },
    urlParseError: {
        code: "url_parse_error",
        desc: "URL could not be parsed into appropriate segments."
    },
    urlEmptyError: {
        code: "empty_url_error",
        desc: "URL was empty or null."
    },
    emptyScopesError: {
        code: "empty_input_scopes_error",
        desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
    },
    nonArrayScopesError: {
        code: "nonarray_input_scopes_error",
        desc: "Scopes cannot be passed as non-array."
    },
    clientIdSingleScopeError: {
        code: "clientid_input_scopes_error",
        desc: "Client ID can only be provided as a single scope."
    },
    invalidPrompt: {
        code: "invalid_prompt_value",
        desc: "Supported prompt values are 'login', 'select_account', 'consent' and 'none'.  Please see here for valid configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
    },
    invalidClaimsRequest: {
        code: "invalid_claims",
        desc: "Given claims parameter must be a stringified JSON object."
    },
    tokenRequestEmptyError: {
        code: "token_request_empty",
        desc: "Token request was empty and not found in cache."
    },
    logoutRequestEmptyError: {
        code: "logout_request_empty",
        desc: "The logout request was null or undefined."
    },
    invalidCodeChallengeMethod: {
        code: "invalid_code_challenge_method",
        desc: "code_challenge_method passed is invalid. Valid values are \"plain\" and \"S256\"."
    },
    invalidCodeChallengeParams: {
        code: "pkce_params_missing",
        desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
    },
    knownAuthoritiesAndCloudDiscoveryMetadata: {
        code: "invalid_known_authorities",
        desc: "knownAuthorities and cloudDiscoveryMetadata cannot both be provided. Please provide cloudDiscoveryMetadata object for AAD, knownAuthorities otherwise."
    },
    invalidCloudDiscoveryMetadata: {
        code: "invalid_cloud_discovery_metadata",
        desc: "Invalid cloudDiscoveryMetadata provided. Must be a JSON object containing tenant_discovery_endpoint and metadata fields"
    },
    untrustedAuthority: {
        code: "untrusted_authority",
        desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
    },
    resourceRequestParametersRequired: {
        code: "resourceRequest_parameters_required",
        desc: "resourceRequestMethod and resourceRequestUri are required"
    }
};
/**
 * Error thrown when there is an error in configuration of the MSAL.js library.
 */
var ClientConfigurationError = /** @class */ (function (_super) {
    __extends$1(ClientConfigurationError, _super);
    function ClientConfigurationError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "ClientConfigurationError";
        Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when the redirect uri is empty (not set by caller)
     */
    ClientConfigurationError.createRedirectUriEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
     */
    ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the claims request could not be successfully parsed
     */
    ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
    };
    /**
     * Creates an error thrown if authority uri is given an insecure protocol.
     * @param urlString
     */
    ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
    };
    /**
     * Creates an error thrown if URL string does not parse into separate segments.
     * @param urlString
     */
    ClientConfigurationError.createUrlParseError = function (urlParseError) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
    };
    /**
     * Creates an error thrown if URL string is empty or null.
     * @param urlString
     */
    ClientConfigurationError.createUrlEmptyError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
    };
    /**
     * Error thrown when scopes are not an array
     * @param inputScopes
     */
    ClientConfigurationError.createScopesNonArrayError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.nonArrayScopesError.code, ClientConfigurationErrorMessage.nonArrayScopesError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when scopes are empty.
     * @param scopesValue
     */
    ClientConfigurationError.createEmptyScopesArrayError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, ClientConfigurationErrorMessage.emptyScopesError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when client id scope is not provided as single scope.
     * @param inputScopes
     */
    ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
    };
    /**
     * Error thrown when prompt is not an allowed type.
     * @param promptValue
     */
    ClientConfigurationError.createInvalidPromptError = function (promptValue) {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
    };
    /**
     * Creates error thrown when claims parameter is not a stringified JSON object
     */
    ClientConfigurationError.createInvalidClaimsRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidClaimsRequest.code, ClientConfigurationErrorMessage.invalidClaimsRequest.desc);
    };
    /**
     * Throws error when token request is empty and nothing cached in storage.
     */
    ClientConfigurationError.createEmptyLogoutRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
    };
    /**
     * Throws error when token request is empty and nothing cached in storage.
     */
    ClientConfigurationError.createEmptyTokenRequestError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
    };
    /**
     * Throws error when an invalid code_challenge_method is passed by the user
     */
    ClientConfigurationError.createInvalidCodeChallengeMethodError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
    };
    /**
     * Throws error when both params: code_challenge and code_challenge_method are not passed together
     */
    ClientConfigurationError.createInvalidCodeChallengeParamsError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
    };
    /**
     * Throws an error when the user passes both knownAuthorities and cloudDiscoveryMetadata
     */
    ClientConfigurationError.createKnownAuthoritiesCloudDiscoveryMetadataError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.knownAuthoritiesAndCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.knownAuthoritiesAndCloudDiscoveryMetadata.desc);
    };
    /**
     * Throws an error when the user passes invalid cloudDiscoveryMetadata
     */
    ClientConfigurationError.createInvalidCloudDiscoveryMetadataError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
    };
    /**
     * Throws error when provided authority is not a member of the trusted host list
     */
    ClientConfigurationError.createUntrustedAuthorityError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
    };
    /**
     * Throws error when resourceRequestMethod or resourceRequestUri is missing
     */
    ClientConfigurationError.createResourceRequestParametersRequiredError = function () {
        return new ClientConfigurationError(ClientConfigurationErrorMessage.resourceRequestParametersRequired.code, ClientConfigurationErrorMessage.resourceRequestParametersRequired.desc);
    };
    return ClientConfigurationError;
}(ClientAuthError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
 * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings in intersection and union functions
 * to ensure uniqueness of strings.
 */
var ScopeSet = /** @class */ (function () {
    function ScopeSet(inputScopes) {
        var _this = this;
        // Filter empty string and null/undefined array items
        var scopeArr = inputScopes ? StringUtils.trimArrayEntries(__spreadArrays(inputScopes)) : [];
        var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
        // Validate and filter scopes (validate function throws if validation fails)
        this.validateInputScopes(filteredInput);
        this.scopes = new Set(); // Iterator in constructor not supported by IE11
        filteredInput.forEach(function (scope) { return _this.scopes.add(scope); });
    }
    /**
     * Factory method to create ScopeSet from space-delimited string
     * @param inputScopeString
     * @param appClientId
     * @param scopesRequired
     */
    ScopeSet.fromString = function (inputScopeString) {
        inputScopeString = inputScopeString || "";
        var inputScopes = inputScopeString.split(" ");
        return new ScopeSet(inputScopes);
    };
    /**
     * Used to validate the scopes input parameter requested  by the developer.
     * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
     * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
     */
    ScopeSet.prototype.validateInputScopes = function (inputScopes) {
        // Check if scopes are required but not given or is an empty array
        if (!inputScopes || inputScopes.length < 1) {
            throw ClientConfigurationError.createEmptyScopesArrayError(inputScopes);
        }
    };
    /**
     * Check if a given scope is present in this set of scopes.
     * @param scope
     */
    ScopeSet.prototype.containsScope = function (scope) {
        var lowerCaseScopes = this.printScopesLowerCase().split(" ");
        var lowerCaseScopesSet = new ScopeSet(lowerCaseScopes);
        // compare lowercase scopes
        return !StringUtils.isEmpty(scope) ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
    };
    /**
     * Check if a set of scopes is present in this set of scopes.
     * @param scopeSet
     */
    ScopeSet.prototype.containsScopeSet = function (scopeSet) {
        var _this = this;
        if (!scopeSet || scopeSet.scopes.size <= 0) {
            return false;
        }
        return (this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); }));
    };
    /**
     * Check if set of scopes contains only the defaults
     */
    ScopeSet.prototype.containsOnlyDefaultScopes = function () {
        var defaultScopeCount = 0;
        if (this.containsScope(Constants.OPENID_SCOPE)) {
            defaultScopeCount += 1;
        }
        if (this.containsScope(Constants.PROFILE_SCOPE)) {
            defaultScopeCount += 1;
        }
        if (this.containsScope(Constants.OFFLINE_ACCESS_SCOPE)) {
            defaultScopeCount += 1;
        }
        return this.scopes.size === defaultScopeCount;
    };
    /**
     * Appends single scope if passed
     * @param newScope
     */
    ScopeSet.prototype.appendScope = function (newScope) {
        if (!StringUtils.isEmpty(newScope)) {
            this.scopes.add(newScope.trim());
        }
    };
    /**
     * Appends multiple scopes if passed
     * @param newScopes
     */
    ScopeSet.prototype.appendScopes = function (newScopes) {
        var _this = this;
        try {
            newScopes.forEach(function (newScope) { return _this.appendScope(newScope); });
        }
        catch (e) {
            throw ClientAuthError.createAppendScopeSetError(e);
        }
    };
    /**
     * Removes element from set of scopes.
     * @param scope
     */
    ScopeSet.prototype.removeScope = function (scope) {
        if (StringUtils.isEmpty(scope)) {
            throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
        }
        this.scopes.delete(scope.trim());
    };
    /**
     * Removes default scopes from set of scopes
     * Primarily used to prevent cache misses if the default scopes are not returned from the server
     */
    ScopeSet.prototype.removeDefaultScopes = function () {
        this.scopes.delete(Constants.OFFLINE_ACCESS_SCOPE);
        this.scopes.delete(Constants.OPENID_SCOPE);
        this.scopes.delete(Constants.PROFILE_SCOPE);
    };
    /**
     * Combines an array of scopes with the current set of scopes.
     * @param otherScopes
     */
    ScopeSet.prototype.unionScopeSets = function (otherScopes) {
        if (!otherScopes) {
            throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
        }
        var unionScopes = new Set(); // Iterator in constructor not supported in IE11
        otherScopes.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
        this.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
        return unionScopes;
    };
    /**
     * Check if scopes intersect between this set and another.
     * @param otherScopes
     */
    ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
        if (!otherScopes) {
            throw ClientAuthError.createEmptyInputScopeSetError(otherScopes);
        }
        var unionScopes = this.unionScopeSets(otherScopes);
        // Do not allow default scopes to be the only intersecting scopes
        if (!otherScopes.containsOnlyDefaultScopes()) {
            otherScopes.removeDefaultScopes();
        }
        var sizeOtherScopes = otherScopes.getScopeCount();
        var sizeThisScopes = this.getScopeCount();
        var sizeUnionScopes = unionScopes.size;
        return sizeUnionScopes < (sizeThisScopes + sizeOtherScopes);
    };
    /**
     * Returns size of set of scopes.
     */
    ScopeSet.prototype.getScopeCount = function () {
        return this.scopes.size;
    };
    /**
     * Returns the scopes as an array of string values
     */
    ScopeSet.prototype.asArray = function () {
        var array = [];
        this.scopes.forEach(function (val) { return array.push(val); });
        return array;
    };
    /**
     * Prints scopes into a space-delimited string
     */
    ScopeSet.prototype.printScopes = function () {
        if (this.scopes) {
            var scopeArr = this.asArray();
            return scopeArr.join(" ");
        }
        return "";
    };
    /**
     * Prints scopes into a space-delimited lower-case string (used for caching)
     */
    ScopeSet.prototype.printScopesLowerCase = function () {
        return this.printScopes().toLowerCase();
    };
    return ScopeSet;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Authority types supported by MSAL.
 */
var AuthorityType;
(function (AuthorityType) {
    AuthorityType[AuthorityType["Default"] = 0] = "Default";
    AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
})(AuthorityType || (AuthorityType = {}));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Url object class which can perform various transformations on url strings.
 */
var UrlString = /** @class */ (function () {
    function UrlString(url) {
        this._urlString = url;
        if (StringUtils.isEmpty(this._urlString)) {
            // Throws error if url is empty
            throw ClientConfigurationError.createUrlEmptyError();
        }
        if (StringUtils.isEmpty(this.getHash())) {
            this._urlString = UrlString.canonicalizeUri(url);
        }
    }
    Object.defineProperty(UrlString.prototype, "urlString", {
        get: function () {
            return this._urlString;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Ensure urls are lower case and end with a / character.
     * @param url
     */
    UrlString.canonicalizeUri = function (url) {
        if (url) {
            url = url.toLowerCase();
            if (StringUtils.endsWith(url, "?")) {
                url = url.slice(0, -1);
            }
            else if (StringUtils.endsWith(url, "?/")) {
                url = url.slice(0, -2);
            }
            if (!StringUtils.endsWith(url, "/")) {
                url += "/";
            }
        }
        return url;
    };
    /**
     * Throws if urlString passed is not a valid authority URI string.
     */
    UrlString.prototype.validateAsUri = function () {
        // Attempts to parse url for uri components
        var components;
        try {
            components = this.getUrlComponents();
        }
        catch (e) {
            throw ClientConfigurationError.createUrlParseError(e);
        }
        // Throw error if URI or path segments are not parseable.
        if (!components.HostNameAndPort || !components.PathSegments) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
        }
        // Throw error if uri is insecure.
        if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
            throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
        }
    };
    /**
     * Function to remove query string params from url. Returns the new url.
     * @param url
     * @param name
     */
    UrlString.prototype.urlRemoveQueryStringParameter = function (name) {
        var regex = new RegExp("(\\&" + name + "=)[^\&]+");
        this._urlString = this.urlString.replace(regex, "");
        // name=value&
        regex = new RegExp("(" + name + "=)[^\&]+&");
        this._urlString = this.urlString.replace(regex, "");
        // name=value
        regex = new RegExp("(" + name + "=)[^\&]+");
        this._urlString = this.urlString.replace(regex, "");
        return this.urlString;
    };
    UrlString.removeHashFromUrl = function (url) {
        return UrlString.canonicalizeUri(url.split("#")[0]);
    };
    /**
     * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
     * @param href The url
     * @param tenantId The tenant id to replace
     */
    UrlString.prototype.replaceTenantPath = function (tenantId) {
        var urlObject = this.getUrlComponents();
        var pathArray = urlObject.PathSegments;
        if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
            pathArray[0] = tenantId;
        }
        return UrlString.constructAuthorityUriFromObject(urlObject);
    };
    /**
     * Returns the anchor part(#) of the URL
     */
    UrlString.prototype.getHash = function () {
        return UrlString.parseHash(this.urlString);
    };
    /**
     * Parses out the components from a url string.
     * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
     */
    UrlString.prototype.getUrlComponents = function () {
        // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
        var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        // If url string does not match regEx, we throw an error
        var match = this.urlString.match(regEx);
        if (!match) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
        }
        // Url component object
        var urlComponents = {
            Protocol: match[1],
            HostNameAndPort: match[4],
            AbsolutePath: match[5],
            QueryString: match[7]
        };
        var pathSegments = urlComponents.AbsolutePath.split("/");
        pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
        urlComponents.PathSegments = pathSegments;
        if (!StringUtils.isEmpty(urlComponents.QueryString) && urlComponents.QueryString.endsWith("/")) {
            urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
        }
        return urlComponents;
    };
    UrlString.getDomainFromUrl = function (url) {
        var regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
        var match = url.match(regEx);
        if (!match) {
            throw ClientConfigurationError.createUrlParseError("Given url string: " + url);
        }
        return match[2];
    };
    UrlString.getAbsoluteUrl = function (relativeUrl, baseUrl) {
        if (relativeUrl[0] === Constants.FORWARD_SLASH) {
            var url = new UrlString(baseUrl);
            var baseComponents = url.getUrlComponents();
            return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
        }
        return relativeUrl;
    };
    /**
     * Parses hash string from given string. Returns empty string if no hash symbol is found.
     * @param hashString
     */
    UrlString.parseHash = function (hashString) {
        var hashIndex1 = hashString.indexOf("#");
        var hashIndex2 = hashString.indexOf("#/");
        if (hashIndex2 > -1) {
            return hashString.substring(hashIndex2 + 2);
        }
        else if (hashIndex1 > -1) {
            return hashString.substring(hashIndex1 + 1);
        }
        return "";
    };
    UrlString.constructAuthorityUriFromObject = function (urlObject) {
        return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
    };
    /**
     * Returns URL hash as server auth code response object.
     */
    UrlString.getDeserializedHash = function (hash) {
        // Check if given hash is empty
        if (StringUtils.isEmpty(hash)) {
            return {};
        }
        // Strip the # symbol if present
        var parsedHash = UrlString.parseHash(hash);
        // If # symbol was not present, above will return empty string, so give original hash value
        var deserializedHash = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedHash) ? hash : parsedHash);
        // Check if deserialization didn't work
        if (!deserializedHash) {
            throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
        }
        return deserializedHash;
    };
    /**
     * Check if the hash of the URL string contains known properties
     */
    UrlString.hashContainsKnownProperties = function (hash) {
        if (StringUtils.isEmpty(hash)) {
            return false;
        }
        var parameters = UrlString.getDeserializedHash(hash);
        return !!(parameters.code ||
            parameters.error_description ||
            parameters.error ||
            parameters.state);
    };
    return UrlString;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var TrustedAuthority = /** @class */ (function () {
    function TrustedAuthority() {
    }
    /**
     * Set the CloudDiscoveryMetadata object from knownAuthorities or cloudDiscoveryMetadata passed into the app config
     * @param knownAuthorities
     * @param cloudDiscoveryMetadata
     */
    TrustedAuthority.setTrustedAuthoritiesFromConfig = function (knownAuthorities, cloudDiscoveryMetadata) {
        if (!this.getTrustedHostList().length) {
            if (knownAuthorities.length > 0 && !StringUtils.isEmpty(cloudDiscoveryMetadata)) {
                throw ClientConfigurationError.createKnownAuthoritiesCloudDiscoveryMetadataError();
            }
            this.createCloudDiscoveryMetadataFromKnownAuthorities(knownAuthorities);
            try {
                if (cloudDiscoveryMetadata) {
                    var parsedMetadata = JSON.parse(cloudDiscoveryMetadata);
                    this.saveCloudDiscoveryMetadata(parsedMetadata.metadata);
                }
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
            }
        }
    };
    /**
     * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
     * @param networkInterface
     */
    TrustedAuthority.setTrustedAuthoritiesFromNetwork = function (authorityToVerify, networkInterface) {
        return __awaiter$1(this, void 0, void 0, function () {
            var instanceDiscoveryEndpoint, response, metadata, e_1, host;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        instanceDiscoveryEndpoint = "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + authorityToVerify.urlString + "oauth2/v2.0/authorize";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint)];
                    case 2:
                        response = _a.sent();
                        metadata = response.body.metadata;
                        this.saveCloudDiscoveryMetadata(metadata);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/];
                    case 4:
                        host = authorityToVerify.getUrlComponents().HostNameAndPort;
                        if (this.getTrustedHostList().length > 0 && !this.IsInTrustedHostList(host)) {
                            // Custom Domain scenario, host is trusted because Instance Discovery call succeeded 
                            this.createCloudDiscoveryMetadataFromKnownAuthorities([host]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param metadata
     */
    TrustedAuthority.saveCloudDiscoveryMetadata = function (metadata) {
        metadata.forEach(function (entry) {
            var authorities = entry.aliases;
            authorities.forEach(function (authority) {
                TrustedAuthority.TrustedHostList[authority.toLowerCase()] = entry;
            });
        });
    };
    /**
     * Create a generic metadata object for each host passed to knownAuthorities.
     * This is mostly useful for B2C or ADFS scenarios
     * @param knownAuthorities
     */
    TrustedAuthority.createCloudDiscoveryMetadataFromKnownAuthorities = function (knownAuthorities) {
        var _this = this;
        knownAuthorities.forEach(function (authority) {
            var authorityDomain = UrlString.getDomainFromUrl(authority).toLowerCase();
            _this.TrustedHostList[authorityDomain] = {
                preferred_cache: authorityDomain,
                preferred_network: authorityDomain,
                aliases: [authorityDomain]
            };
        });
    };
    TrustedAuthority.getTrustedHostList = function () {
        return Object.keys(this.TrustedHostList);
    };
    /**
     * Get metadata for the provided host
     * @param host
     */
    TrustedAuthority.getCloudDiscoveryMetadata = function (host) {
        return this.TrustedHostList[host.toLowerCase()] || null;
    };
    /**
     * Checks to see if the host is in a list of trusted hosts
     * @param host
     */
    TrustedAuthority.IsInTrustedHostList = function (host) {
        return Object.keys(this.TrustedHostList).indexOf(host.toLowerCase()) > -1;
    };
    TrustedAuthority.TrustedHostList = {};
    return TrustedAuthority;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Protocol modes supported by MSAL.
 */
var ProtocolMode;
(function (ProtocolMode) {
    ProtocolMode["AAD"] = "AAD";
    ProtocolMode["OIDC"] = "OIDC";
})(ProtocolMode || (ProtocolMode = {}));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
 * endpoint. It will store the pertinent config data in this object for use during token calls.
 */
var Authority = /** @class */ (function () {
    function Authority(authority, networkInterface, protocolMode) {
        this.canonicalAuthority = authority;
        this._canonicalAuthority.validateAsUri();
        this.networkInterface = networkInterface;
        this.authorityProtocolMode = protocolMode;
    }
    Object.defineProperty(Authority.prototype, "authorityType", {
        // See above for AuthorityType
        get: function () {
            var pathSegments = this.canonicalAuthorityUrlComponents.PathSegments;
            if (pathSegments.length && pathSegments[0].toLowerCase() === Constants.ADFS) {
                return AuthorityType.Adfs;
            }
            return AuthorityType.Default;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "protocolMode", {
        /**
         * ProtocolMode enum representing the way endpoints are constructed.
         */
        get: function () {
            return this.authorityProtocolMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "canonicalAuthority", {
        /**
         * A URL that is the authority set by the developer
         */
        get: function () {
            return this._canonicalAuthority.urlString;
        },
        /**
         * Sets canonical authority.
         */
        set: function (url) {
            this._canonicalAuthority = new UrlString(url);
            this._canonicalAuthority.validateAsUri();
            this._canonicalAuthorityUrlComponents = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
        /**
         * Get authority components.
         */
        get: function () {
            if (!this._canonicalAuthorityUrlComponents) {
                this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
            }
            return this._canonicalAuthorityUrlComponents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "tenant", {
        /**
         * Get tenant for authority.
         */
        get: function () {
            return this.canonicalAuthorityUrlComponents.PathSegments[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
        /**
         * OAuth /authorize endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.authorization_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "tokenEndpoint", {
        /**
         * OAuth /token endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.token_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "deviceCodeEndpoint", {
        get: function () {
            if (this.discoveryComplete()) {
                return this.tenantDiscoveryResponse.token_endpoint.replace("/token", "/devicecode");
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
        /**
         * OAuth logout endpoint for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.end_session_endpoint);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
        /**
         * OAuth issuer for requests
         */
        get: function () {
            if (this.discoveryComplete()) {
                return this.replaceTenant(this.tenantDiscoveryResponse.issuer);
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replaces tenant in url path with current tenant. Defaults to common.
     * @param urlString
     */
    Authority.prototype.replaceTenant = function (urlString) {
        return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
    };
    Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
        /**
         * The default open id configuration endpoint for any canonical authority.
         */
        get: function () {
            if (this.authorityType === AuthorityType.Adfs || this.protocolMode === ProtocolMode.OIDC) {
                return this.canonicalAuthority + ".well-known/openid-configuration";
            }
            return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Boolean that returns whethr or not tenant discovery has been completed.
     */
    Authority.prototype.discoveryComplete = function () {
        return !!this.tenantDiscoveryResponse;
    };
    /**
     * Gets OAuth endpoints from the given OpenID configuration endpoint.
     * @param openIdConfigurationEndpoint
     */
    Authority.prototype.discoverEndpoints = function (openIdConfigurationEndpoint) {
        return __awaiter$1(this, void 0, void 0, function () {
            return __generator$1(this, function (_a) {
                return [2 /*return*/, this.networkInterface.sendGetRequestAsync(openIdConfigurationEndpoint)];
            });
        });
    };
    /**
     * Set the trusted hosts and validate subsequent calls
     */
    Authority.prototype.validateAndSetPreferredNetwork = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var host, preferredNetwork;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        host = this.canonicalAuthorityUrlComponents.HostNameAndPort;
                        if (!(TrustedAuthority.getTrustedHostList().length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, TrustedAuthority.setTrustedAuthoritiesFromNetwork(this._canonicalAuthority, this.networkInterface)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!TrustedAuthority.IsInTrustedHostList(host)) {
                            throw ClientConfigurationError.createUntrustedAuthorityError();
                        }
                        preferredNetwork = TrustedAuthority.getCloudDiscoveryMetadata(host).preferred_network;
                        if (host !== preferredNetwork) {
                            this.canonicalAuthority = this.canonicalAuthority.replace(host, preferredNetwork);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Perform endpoint discovery to discover the /authorize, /token and logout endpoints.
     */
    Authority.prototype.resolveEndpointsAsync = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var openIdConfigEndpoint, response;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateAndSetPreferredNetwork()];
                    case 1:
                        _a.sent();
                        openIdConfigEndpoint = this.defaultOpenIdConfigurationEndpoint;
                        return [4 /*yield*/, this.discoverEndpoints(openIdConfigEndpoint)];
                    case 2:
                        response = _a.sent();
                        this.tenantDiscoveryResponse = response.body;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Determine if given hostname is alias of this authority
     * @param host
     */
    Authority.prototype.isAuthorityAlias = function (host) {
        if (host === this.canonicalAuthorityUrlComponents.HostNameAndPort) {
            return true;
        }
        var aliases = TrustedAuthority.getCloudDiscoveryMetadata(this.canonicalAuthorityUrlComponents.HostNameAndPort).aliases;
        return aliases.indexOf(host) !== -1;
    };
    /**
     * helper function to generate environment from authority object
     * @param authority
     */
    Authority.generateEnvironmentFromAuthority = function (authority) {
        var reqEnvironment = authority.canonicalAuthorityUrlComponents.HostNameAndPort;
        return TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment) ? TrustedAuthority.getCloudDiscoveryMetadata(reqEnvironment).preferred_cache : "";
    };
    return Authority;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Function to build a client info object
 * @param rawClientInfo
 * @param crypto
 */
function buildClientInfo(rawClientInfo, crypto) {
    if (StringUtils.isEmpty(rawClientInfo)) {
        throw ClientAuthError.createClientInfoEmptyError();
    }
    try {
        var decodedClientInfo = crypto.base64Decode(rawClientInfo);
        return JSON.parse(decodedClientInfo);
    }
    catch (e) {
        throw ClientAuthError.createClientInfoDecodingError(e);
    }
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs).
 *
 * Key : Value Schema
 *
 * Key: <home_account_id>-<environment>-<realm*>
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      localAccountId: Original tenant-specific accountID, usually used for legacy cases
 *      username: primary username that represents the user, usually corresponds to preferred_username in the v2 endpt
 *      authorityType: Accounts authority type as a string
 *      name: Full name for the account, including given name and family name,
 *      clientInfo: Full base64 encoded client info received from ESTS
 *      lastModificationTime: last time this entity was modified in the cache
 *      lastModificationApp:
 *      oboAssertion: access token passed in as part of OBO request
 *      idTokenClaims: Object containing claims parsed from ID token
 * }
 */
var AccountEntity = /** @class */ (function () {
    function AccountEntity() {
    }
    /**
     * Generate Account Id key component as per the schema: <home_account_id>-<environment>
     */
    AccountEntity.prototype.generateAccountId = function () {
        var accountId = [this.homeAccountId, this.environment];
        return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
     */
    AccountEntity.prototype.generateAccountKey = function () {
        return AccountEntity.generateAccountCacheKey({
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username,
            localAccountId: this.localAccountId
        });
    };
    /**
     * returns the type of the cache (in this case account)
     */
    AccountEntity.prototype.generateType = function () {
        switch (this.authorityType) {
            case CacheAccountType.ADFS_ACCOUNT_TYPE:
                return CacheType.ADFS;
            case CacheAccountType.MSAV1_ACCOUNT_TYPE:
                return CacheType.MSA;
            case CacheAccountType.MSSTS_ACCOUNT_TYPE:
                return CacheType.MSSTS;
            case CacheAccountType.GENERIC_ACCOUNT_TYPE:
                return CacheType.GENERIC;
            default: {
                throw ClientAuthError.createUnexpectedAccountTypeError();
            }
        }
    };
    /**
     * Returns the AccountInfo interface for this account.
     */
    AccountEntity.prototype.getAccountInfo = function () {
        return {
            homeAccountId: this.homeAccountId,
            environment: this.environment,
            tenantId: this.realm,
            username: this.username,
            localAccountId: this.localAccountId,
            name: this.name,
            idTokenClaims: this.idTokenClaims
        };
    };
    /**
     * Generates account key from interface
     * @param accountInterface
     */
    AccountEntity.generateAccountCacheKey = function (accountInterface) {
        var accountKey = [
            accountInterface.homeAccountId,
            accountInterface.environment || "",
            accountInterface.tenantId || "",
        ];
        return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Build Account cache from IdToken, clientInfo and authority/policy. Associated with AAD.
     * @param clientInfo
     * @param authority
     * @param idToken
     * @param policy
     */
    AccountEntity.createAccount = function (clientInfo, homeAccountId, authority, idToken, oboAssertion, cloudGraphHostName, msGraphHost) {
        var _a, _b, _c, _d, _e, _f;
        var account = new AccountEntity();
        account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
        account.clientInfo = clientInfo;
        account.homeAccountId = homeAccountId;
        var env = Authority.generateEnvironmentFromAuthority(authority);
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        account.environment = env;
        // non AAD scenarios can have empty realm
        account.realm = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.tid) || "";
        account.oboAssertion = oboAssertion;
        if (idToken) {
            account.idTokenClaims = idToken.claims;
            // How do you account for MSA CID here?
            account.localAccountId = ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.oid) || ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.sub) || "";
            /*
             * In B2C scenarios the emails claim is used instead of preferred_username and it is an array. In most cases it will contain a single email.
             * This field should not be relied upon if a custom policy is configured to return more than 1 email.
             */
            account.username = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.preferred_username) || (((_e = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _e === void 0 ? void 0 : _e.emails) ? idToken.claims.emails[0] : "");
            account.name = (_f = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _f === void 0 ? void 0 : _f.name;
        }
        account.cloudGraphHostName = cloudGraphHostName;
        account.msGraphHost = msGraphHost;
        return account;
    };
    /**
     * Builds non-AAD/ADFS account.
     * @param authority
     * @param idToken
     */
    AccountEntity.createGenericAccount = function (authority, homeAccountId, idToken, oboAssertion, cloudGraphHostName, msGraphHost) {
        var _a, _b, _c, _d;
        var account = new AccountEntity();
        account.authorityType = (authority.authorityType === AuthorityType.Adfs) ? CacheAccountType.ADFS_ACCOUNT_TYPE : CacheAccountType.GENERIC_ACCOUNT_TYPE;
        account.homeAccountId = homeAccountId;
        // non AAD scenarios can have empty realm
        account.realm = "";
        account.oboAssertion = oboAssertion;
        var env = Authority.generateEnvironmentFromAuthority(authority);
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        if (idToken) {
            // How do you account for MSA CID here?
            account.localAccountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.oid) || ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.sub) || "";
            // upn claim for most ADFS scenarios
            account.username = ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.upn) || "";
            account.name = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.name) || "";
            account.idTokenClaims = idToken === null || idToken === void 0 ? void 0 : idToken.claims;
        }
        account.environment = env;
        account.cloudGraphHostName = cloudGraphHostName;
        account.msGraphHost = msGraphHost;
        /*
         * add uniqueName to claims
         * account.name = idToken.claims.uniqueName;
         */
        return account;
    };
    /**
     * Generate HomeAccountId from server response
     * @param serverClientInfo
     * @param authType
     */
    AccountEntity.generateHomeAccountId = function (serverClientInfo, authType, logger, cryptoObj, idToken) {
        var _a;
        var accountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.sub) ? idToken.claims.sub : Constants.EMPTY_STRING;
        // since ADFS does not have tid and does not set client_info
        if (authType === AuthorityType.Adfs) {
            return accountId;
        }
        // for cases where there is clientInfo
        if (serverClientInfo) {
            var clientInfo = buildClientInfo(serverClientInfo, cryptoObj);
            if (!StringUtils.isEmpty(clientInfo.uid) && !StringUtils.isEmpty(clientInfo.utid)) {
                return "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid;
            }
        }
        // default to "sub" claim
        logger.verbose("No client info in response");
        return accountId;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AccountEntity.isAccountEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("localAccountId") &&
            entity.hasOwnProperty("username") &&
            entity.hasOwnProperty("authorityType"));
    };
    return AccountEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * JWT Token representation class. Parses token string and generates claims object.
 */
var AuthToken = /** @class */ (function () {
    function AuthToken(rawToken, crypto) {
        if (StringUtils.isEmpty(rawToken)) {
            throw ClientAuthError.createTokenNullOrEmptyError(rawToken);
        }
        this.rawToken = rawToken;
        this.claims = AuthToken.extractTokenClaims(rawToken, crypto);
    }
    /**
     * Extract token by decoding the rawToken
     *
     * @param encodedToken
     */
    AuthToken.extractTokenClaims = function (encodedToken, crypto) {
        var decodedToken = StringUtils.decodeAuthToken(encodedToken);
        // token will be decoded to get the username
        try {
            var base64TokenPayload = decodedToken.JWSPayload;
            // base64Decode() should throw an error if there is an issue
            var base64Decoded = crypto.base64Decode(base64TokenPayload);
            return JSON.parse(base64Decoded);
        }
        catch (err) {
            throw ClientAuthError.createTokenParsingError(err);
        }
    };
    return AuthToken;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Interface class which implement cache storage functions used by MSAL to perform validity checks, and store tokens.
 */
var CacheManager = /** @class */ (function () {
    function CacheManager(clientId, cryptoImpl) {
        this.clientId = clientId;
        this.cryptoImpl = cryptoImpl;
    }
    /**
     * Returns all accounts in cache
     */
    CacheManager.prototype.getAllAccounts = function () {
        var _this = this;
        var currentAccounts = this.getAccountsFilteredBy();
        var accountValues = Object.keys(currentAccounts).map(function (accountKey) { return currentAccounts[accountKey]; });
        var numAccounts = accountValues.length;
        if (numAccounts < 1) {
            return [];
        }
        else {
            var allAccounts = accountValues.map(function (value) {
                var accountEntity = CacheManager.toObject(new AccountEntity(), value);
                var accountInfo = accountEntity.getAccountInfo();
                var idToken = _this.readIdTokenFromCache(_this.clientId, accountInfo);
                if (idToken && !accountInfo.idTokenClaims) {
                    accountInfo.idTokenClaims = new AuthToken(idToken.secret, _this.cryptoImpl).claims;
                }
                return accountInfo;
            });
            return allAccounts;
        }
    };
    /**
     * saves a cache record
     * @param cacheRecord
     */
    CacheManager.prototype.saveCacheRecord = function (cacheRecord) {
        if (!cacheRecord) {
            throw ClientAuthError.createNullOrUndefinedCacheRecord();
        }
        if (!!cacheRecord.account) {
            this.setAccount(cacheRecord.account);
        }
        if (!!cacheRecord.idToken) {
            this.setIdTokenCredential(cacheRecord.idToken);
        }
        if (!!cacheRecord.accessToken) {
            this.saveAccessToken(cacheRecord.accessToken);
        }
        if (!!cacheRecord.refreshToken) {
            this.setRefreshTokenCredential(cacheRecord.refreshToken);
        }
        if (!!cacheRecord.appMetadata) {
            this.setAppMetadata(cacheRecord.appMetadata);
        }
    };
    /**
     * saves access token credential
     * @param credential
     */
    CacheManager.prototype.saveAccessToken = function (credential) {
        var _this = this;
        var currentTokenCache = this.getCredentialsFilteredBy({
            clientId: credential.clientId,
            credentialType: CredentialType.ACCESS_TOKEN,
            environment: credential.environment,
            homeAccountId: credential.homeAccountId,
            realm: credential.realm,
        });
        var currentScopes = ScopeSet.fromString(credential.target);
        var currentAccessTokens = Object.keys(currentTokenCache.accessTokens).map(function (key) { return currentTokenCache.accessTokens[key]; });
        if (currentAccessTokens) {
            currentAccessTokens.forEach(function (tokenEntity) {
                var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                    _this.removeCredential(tokenEntity);
                }
            });
        }
        this.setAccessTokenCredential(credential);
    };
    /**
     * retrieve accounts matching all provided filters; if no filter is set, get all accounts
     * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param homeAccountId
     * @param environment
     * @param realm
     */
    CacheManager.prototype.getAccountsFilteredBy = function (accountFilter) {
        return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : "", accountFilter ? accountFilter.environment : "", accountFilter ? accountFilter.realm : "");
    };
    /**
     * retrieve accounts matching all provided filters; if no filter is set, get all accounts
     * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
     * @param homeAccountId
     * @param environment
     * @param realm
     */
    CacheManager.prototype.getAccountsFilteredByInternal = function (homeAccountId, environment, realm) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingAccounts = {};
        allCacheKeys.forEach(function (cacheKey) {
            var entity = _this.getAccount(cacheKey);
            if (!entity) {
                return;
            }
            if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!realm && !_this.matchRealm(entity, realm)) {
                return;
            }
            matchingAccounts[cacheKey] = entity;
        });
        return matchingAccounts;
    };
    /**
     * retrieve credentails matching all provided filters; if no filter is set, get all credentials
     * @param homeAccountId
     * @param environment
     * @param credentialType
     * @param clientId
     * @param realm
     * @param target
     */
    CacheManager.prototype.getCredentialsFilteredBy = function (filter) {
        return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.familyId, filter.realm, filter.target, filter.oboAssertion);
    };
    /**
     * Support function to help match credentials
     * @param homeAccountId
     * @param environment
     * @param credentialType
     * @param clientId
     * @param realm
     * @param target
     */
    CacheManager.prototype.getCredentialsFilteredByInternal = function (homeAccountId, environment, credentialType, clientId, familyId, realm, target, oboAssertion) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingCredentials = {
            idTokens: {},
            accessTokens: {},
            refreshTokens: {},
        };
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-credential type cache entities
            var credType = CredentialEntity.getCredentialType(cacheKey);
            if (credType === Constants.NOT_DEFINED) {
                return;
            }
            // Attempt retrieval
            var entity = _this.getSpecificCredential(cacheKey, credType);
            if (!entity) {
                return;
            }
            if (!!oboAssertion && !_this.matchOboAssertion(entity, oboAssertion)) {
                return;
            }
            if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!realm && !_this.matchRealm(entity, realm)) {
                return;
            }
            if (!!credentialType && !_this.matchCredentialType(entity, credentialType)) {
                return;
            }
            if (!!clientId && !_this.matchClientId(entity, clientId)) {
                return;
            }
            if (!!familyId && !_this.matchFamilyId(entity, familyId)) {
                return;
            }
            /*
             * idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
             * Resource specific refresh tokens case will be added when the support is deemed necessary
             */
            if (!!target && !_this.matchTarget(entity, target)) {
                return;
            }
            switch (credType) {
                case CredentialType.ID_TOKEN:
                    matchingCredentials.idTokens[cacheKey] = entity;
                    break;
                case CredentialType.ACCESS_TOKEN:
                    matchingCredentials.accessTokens[cacheKey] = entity;
                    break;
                case CredentialType.REFRESH_TOKEN:
                    matchingCredentials.refreshTokens[cacheKey] = entity;
                    break;
            }
        });
        return matchingCredentials;
    };
    /**
     * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
     * @param filter
     */
    CacheManager.prototype.getAppMetadataFilteredBy = function (filter) {
        return this.getAppMetadataFilteredByInternal(filter.environment, filter.clientId);
    };
    /**
     * Support function to help match appMetadata
     * @param environment
     * @param clientId
     */
    CacheManager.prototype.getAppMetadataFilteredByInternal = function (environment, clientId) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var matchingAppMetadata = {};
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-appMetadata type cache entities
            if (!_this.isAppMetadata(cacheKey)) {
                return;
            }
            // Attempt retrieval
            var entity = _this.getAppMetadata(cacheKey);
            if (!entity) {
                return;
            }
            if (!!environment && !_this.matchEnvironment(entity, environment)) {
                return;
            }
            if (!!clientId && !_this.matchClientId(entity, clientId)) {
                return;
            }
            matchingAppMetadata[cacheKey] = entity;
        });
        return matchingAppMetadata;
    };
    /**
     * Removes all accounts and related tokens from cache.
     */
    CacheManager.prototype.removeAllAccounts = function () {
        var _this = this;
        var allCacheKeys = this.getKeys();
        allCacheKeys.forEach(function (cacheKey) {
            var entity = _this.getAccount(cacheKey);
            if (!entity) {
                return;
            }
            _this.removeAccount(cacheKey);
        });
        return true;
    };
    /**
     * returns a boolean if the given account is removed
     * @param account
     */
    CacheManager.prototype.removeAccount = function (accountKey) {
        var account = this.getAccount(accountKey);
        if (!account) {
            throw ClientAuthError.createNoAccountFoundError();
        }
        return (this.removeAccountContext(account) && this.removeItem(accountKey, CacheSchemaType.ACCOUNT));
    };
    /**
     * returns a boolean if the given account is removed
     * @param account
     */
    CacheManager.prototype.removeAccountContext = function (account) {
        var _this = this;
        var allCacheKeys = this.getKeys();
        var accountId = account.generateAccountId();
        allCacheKeys.forEach(function (cacheKey) {
            // don't parse any non-credential type cache entities
            var credType = CredentialEntity.getCredentialType(cacheKey);
            if (credType === Constants.NOT_DEFINED) {
                return;
            }
            var cacheEntity = _this.getSpecificCredential(cacheKey, credType);
            if (!!cacheEntity && accountId === cacheEntity.generateAccountId()) {
                _this.removeCredential(cacheEntity);
            }
        });
        return true;
    };
    /**
     * returns a boolean if the given credential is removed
     * @param credential
     */
    CacheManager.prototype.removeCredential = function (credential) {
        var key = credential.generateCredentialKey();
        return this.removeItem(key, CacheSchemaType.CREDENTIAL);
    };
    /**
     * Removes all app metadata objects from cache.
     */
    CacheManager.prototype.removeAppMetadata = function () {
        var _this = this;
        var allCacheKeys = this.getKeys();
        allCacheKeys.forEach(function (cacheKey) {
            if (_this.isAppMetadata(cacheKey)) {
                _this.removeItem(cacheKey, CacheSchemaType.APP_METADATA);
            }
        });
        return true;
    };
    /**
     * Retrieve the cached credentials into a cacherecord
     * @param account
     * @param clientId
     * @param scopes
     * @param environment
     */
    CacheManager.prototype.readCacheRecord = function (account, clientId, scopes, environment) {
        var cachedAccount = this.readAccountFromCache(account);
        var cachedIdToken = this.readIdTokenFromCache(clientId, account);
        var cachedAccessToken = this.readAccessTokenFromCache(clientId, account, scopes);
        var cachedRefreshToken = this.readRefreshTokenFromCache(clientId, account, false);
        var cachedAppMetadata = this.readAppMetadataFromCache(environment, clientId);
        if (cachedAccount && cachedIdToken) {
            cachedAccount.idTokenClaims = new AuthToken(cachedIdToken.secret, this.cryptoImpl).claims;
        }
        return {
            account: cachedAccount,
            idToken: cachedIdToken,
            accessToken: cachedAccessToken,
            refreshToken: cachedRefreshToken,
            appMetadata: cachedAppMetadata,
        };
    };
    /**
     * Retrieve AccountEntity from cache
     * @param account
     */
    CacheManager.prototype.readAccountFromCache = function (account) {
        var accountKey = AccountEntity.generateAccountCacheKey(account);
        return this.getAccount(accountKey);
    };
    /**
     * Retrieve IdTokenEntity from cache
     * @param clientId
     * @param account
     * @param inputRealm
     */
    CacheManager.prototype.readIdTokenFromCache = function (clientId, account) {
        var idTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: CredentialType.ID_TOKEN,
            clientId: clientId,
            realm: account.tenantId,
        };
        var credentialCache = this.getCredentialsFilteredBy(idTokenFilter);
        var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
        var numIdTokens = idTokens.length;
        if (numIdTokens < 1) {
            return null;
        }
        else if (numIdTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return idTokens[0];
    };
    /**
     * Retrieve AccessTokenEntity from cache
     * @param clientId
     * @param account
     * @param scopes
     * @param inputRealm
     */
    CacheManager.prototype.readAccessTokenFromCache = function (clientId, account, scopes) {
        var accessTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: CredentialType.ACCESS_TOKEN,
            clientId: clientId,
            realm: account.tenantId,
            target: scopes.printScopesLowerCase(),
        };
        var credentialCache = this.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        var numAccessTokens = accessTokens.length;
        if (numAccessTokens < 1) {
            return null;
        }
        else if (numAccessTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * Helper to retrieve the appropriate refresh token from cache
     * @param clientId
     * @param account
     * @param familyRT
     */
    CacheManager.prototype.readRefreshTokenFromCache = function (clientId, account, familyRT) {
        var id = familyRT ? THE_FAMILY_ID : undefined;
        var refreshTokenFilter = {
            homeAccountId: account.homeAccountId,
            environment: account.environment,
            credentialType: CredentialType.REFRESH_TOKEN,
            clientId: clientId,
            familyId: id
        };
        var credentialCache = this.getCredentialsFilteredBy(refreshTokenFilter);
        var refreshTokens = Object.keys(credentialCache.refreshTokens).map(function (key) { return credentialCache.refreshTokens[key]; });
        var numRefreshTokens = refreshTokens.length;
        if (numRefreshTokens < 1) {
            return null;
        }
        // address the else case after remove functions address environment aliases
        return refreshTokens[0];
    };
    /**
     * Retrieve AppMetadataEntity from cache
     */
    CacheManager.prototype.readAppMetadataFromCache = function (environment, clientId) {
        var appMetadataFilter = {
            environment: environment,
            clientId: clientId,
        };
        var appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
        var appMetadataEntries = Object.keys(appMetadata).map(function (key) { return appMetadata[key]; });
        var numAppMetadata = appMetadataEntries.length;
        if (numAppMetadata < 1) {
            return null;
        }
        else if (numAppMetadata > 1) {
            throw ClientAuthError.createMultipleMatchingAppMetadataInCacheError();
        }
        return appMetadataEntries[0];
    };
    /**
     * Return the family_id value associated  with FOCI
     * @param environment
     * @param clientId
     */
    CacheManager.prototype.isAppMetadataFOCI = function (environment, clientId) {
        var appMetadata = this.readAppMetadataFromCache(environment, clientId);
        return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
    };
    /**
     * helper to match account ids
     * @param value
     * @param homeAccountId
     */
    CacheManager.prototype.matchHomeAccountId = function (entity, homeAccountId) {
        return !!(entity.homeAccountId && homeAccountId === entity.homeAccountId);
    };
    /**
     * helper to match assertion
     * @param value
     * @param oboAssertion
     */
    CacheManager.prototype.matchOboAssertion = function (entity, oboAssertion) {
        return !!(entity.oboAssertion && oboAssertion === entity.oboAssertion);
    };
    /**
     * helper to match environment
     * @param value
     * @param environment
     */
    CacheManager.prototype.matchEnvironment = function (entity, environment) {
        var cloudMetadata = TrustedAuthority.getCloudDiscoveryMetadata(environment);
        if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
            return true;
        }
        return false;
    };
    /**
     * helper to match credential type
     * @param entity
     * @param credentialType
     */
    CacheManager.prototype.matchCredentialType = function (entity, credentialType) {
        return (entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase());
    };
    /**
     * helper to match client ids
     * @param entity
     * @param clientId
     */
    CacheManager.prototype.matchClientId = function (entity, clientId) {
        return !!(entity.clientId && clientId === entity.clientId);
    };
    /**
     * helper to match family ids
     * @param entity
     * @param familyId
     */
    CacheManager.prototype.matchFamilyId = function (entity, familyId) {
        return !!(entity.familyId && familyId === entity.familyId);
    };
    /**
     * helper to match realm
     * @param entity
     * @param realm
     */
    CacheManager.prototype.matchRealm = function (entity, realm) {
        return !!(entity.realm && realm === entity.realm);
    };
    /**
     * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
     * @param entity
     * @param target
     */
    CacheManager.prototype.matchTarget = function (entity, target) {
        if (entity.credentialType !== CredentialType.ACCESS_TOKEN || !entity.target) {
            return false;
        }
        var entityScopeSet = ScopeSet.fromString(entity.target);
        var requestTargetScopeSet = ScopeSet.fromString(target);
        if (!requestTargetScopeSet.containsOnlyDefaultScopes()) {
            requestTargetScopeSet.removeDefaultScopes(); // ignore default scopes
        }
        return entityScopeSet.containsScopeSet(requestTargetScopeSet);
    };
    /**
     * returns if a given cache entity is of the type appmetadata
     * @param key
     */
    CacheManager.prototype.isAppMetadata = function (key) {
        return key.indexOf(APP_METADATA) !== -1;
    };
    /**
     * Returns the specific credential (IdToken/AccessToken/RefreshToken) from the cache
     * @param key
     * @param credType
     */
    CacheManager.prototype.getSpecificCredential = function (key, credType) {
        switch (credType) {
            case CredentialType.ID_TOKEN: {
                return this.getIdTokenCredential(key);
            }
            case CredentialType.ACCESS_TOKEN: {
                return this.getAccessTokenCredential(key);
            }
            case CredentialType.REFRESH_TOKEN: {
                return this.getRefreshTokenCredential(key);
            }
            default:
                return null;
        }
    };
    /**
     * Helper to convert serialized data to object
     * @param obj
     * @param json
     */
    CacheManager.toObject = function (obj, json) {
        for (var propertyName in json) {
            obj[propertyName] = json[propertyName];
        }
        return obj;
    };
    return CacheManager;
}());
var DefaultStorageClass = /** @class */ (function (_super) {
    __extends$1(DefaultStorageClass, _super);
    function DefaultStorageClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultStorageClass.prototype.setAccount = function () {
        var notImplErr = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAccount = function () {
        var notImplErr = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setIdTokenCredential = function () {
        var notImplErr = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getIdTokenCredential = function () {
        var notImplErr = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setAccessTokenCredential = function () {
        var notImplErr = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAccessTokenCredential = function () {
        var notImplErr = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setRefreshTokenCredential = function () {
        var notImplErr = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getRefreshTokenCredential = function () {
        var notImplErr = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setAppMetadata = function () {
        var notImplErr = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getAppMetadata = function () {
        var notImplErr = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setServerTelemetry = function () {
        var notImplErr = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getServerTelemetry = function () {
        var notImplErr = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.setThrottlingCache = function () {
        var notImplErr = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getThrottlingCache = function () {
        var notImplErr = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.removeItem = function () {
        var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.containsKey = function () {
        var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.getKeys = function () {
        var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    DefaultStorageClass.prototype.clear = function () {
        var notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
        throw AuthError.createUnexpectedError(notImplErr);
    };
    return DefaultStorageClass;
}(CacheManager));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// Token renewal offset default in seconds
var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
var DEFAULT_SYSTEM_OPTIONS = {
    tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC
};
var DEFAULT_LOGGER_IMPLEMENTATION = {
    loggerCallback: function () {
        // allow users to not set loggerCallback
    },
    piiLoggingEnabled: false,
    logLevel: LogLevel.Info
};
var DEFAULT_NETWORK_IMPLEMENTATION = {
    sendGetRequestAsync: function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var notImplErr;
            return __generator$1(this, function (_a) {
                notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    sendPostRequestAsync: function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var notImplErr;
            return __generator$1(this, function (_a) {
                notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    }
};
var DEFAULT_CRYPTO_IMPLEMENTATION = {
    createNewGuid: function () {
        var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    base64Decode: function () {
        var notImplErr = "Crypto interface - base64Decode() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    base64Encode: function () {
        var notImplErr = "Crypto interface - base64Encode() has not been implemented";
        throw AuthError.createUnexpectedError(notImplErr);
    },
    generatePkceCodes: function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var notImplErr;
            return __generator$1(this, function (_a) {
                notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    getPublicKeyThumbprint: function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var notImplErr;
            return __generator$1(this, function (_a) {
                notImplErr = "Crypto interface - getPublicKeyThumbprint() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    },
    signJwt: function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var notImplErr;
            return __generator$1(this, function (_a) {
                notImplErr = "Crypto interface - signJwt() has not been implemented";
                throw AuthError.createUnexpectedError(notImplErr);
            });
        });
    }
};
var DEFAULT_LIBRARY_INFO = {
    sku: Constants.SKU,
    version: version,
    cpu: "",
    os: ""
};
var DEFAULT_CLIENT_CREDENTIALS = {
    clientSecret: "",
    clientAssertion: undefined
};
/**
 * Function that sets the default options when not explicitly configured from app developer
 *
 * @param Configuration
 *
 * @returns Configuration
 */
function buildClientConfiguration(_a) {
    var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, clientCredentials = _a.clientCredentials, libraryInfo = _a.libraryInfo, serverTelemetryManager = _a.serverTelemetryManager, persistencePlugin = _a.persistencePlugin, serializableCache = _a.serializableCache;
    return {
        authOptions: buildAuthOptions(userAuthOptions),
        systemOptions: __assign$1(__assign$1({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
        loggerOptions: __assign$1(__assign$1({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption),
        storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION),
        networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
        cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
        clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
        libraryInfo: __assign$1(__assign$1({}, DEFAULT_LIBRARY_INFO), libraryInfo),
        serverTelemetryManager: serverTelemetryManager || null,
        persistencePlugin: persistencePlugin || null,
        serializableCache: serializableCache || null
    };
}
/**
 * Construct authoptions from the client and platform passed values
 * @param authOptions
 */
function buildAuthOptions(authOptions) {
    return __assign$1({ knownAuthorities: [], cloudDiscoveryMetadata: "", clientCapabilities: [], protocolMode: ProtocolMode.AAD }, authOptions);
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Error thrown when there is an error with the server code, for example, unavailability.
 */
var ServerError = /** @class */ (function (_super) {
    __extends$1(ServerError, _super);
    function ServerError(errorCode, errorMessage, subError) {
        var _this = _super.call(this, errorCode, errorMessage, subError) || this;
        _this.name = "ServerError";
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    return ServerError;
}(AuthError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ThrottlingUtils = /** @class */ (function () {
    function ThrottlingUtils() {
    }
    /**
     * Prepares a RequestThumbprint to be stored as a key.
     * @param thumbprint
     */
    ThrottlingUtils.generateThrottlingStorageKey = function (thumbprint) {
        return ThrottlingConstants.THROTTLING_PREFIX + "." + JSON.stringify(thumbprint);
    };
    /**
     * Performs necessary throttling checks before a network request.
     * @param cacheManager
     * @param thumbprint
     */
    ThrottlingUtils.preProcess = function (cacheManager, thumbprint) {
        var _a;
        var key = ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
        var value = cacheManager.getThrottlingCache(key);
        if (value) {
            if (value.throttleTime < Date.now()) {
                cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
                return;
            }
            throw new ServerError(((_a = value.errorCodes) === null || _a === void 0 ? void 0 : _a.join(" ")) || Constants.EMPTY_STRING, value.errorMessage, value.subError);
        }
    };
    /**
     * Performs necessary throttling checks after a network request.
     * @param cacheManager
     * @param thumbprint
     * @param response
     */
    ThrottlingUtils.postProcess = function (cacheManager, thumbprint, response) {
        if (ThrottlingUtils.checkResponseStatus(response) || ThrottlingUtils.checkResponseForRetryAfter(response)) {
            var thumbprintValue = {
                throttleTime: ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
                error: response.body.error,
                errorCodes: response.body.error_codes,
                errorMessage: response.body.error_description,
                subError: response.body.suberror
            };
            cacheManager.setThrottlingCache(ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue);
        }
    };
    /**
     * Checks a NetworkResponse object's status codes against 429 or 5xx
     * @param response
     */
    ThrottlingUtils.checkResponseStatus = function (response) {
        return response.status === 429 || response.status >= 500 && response.status < 600;
    };
    /**
     * Checks a NetworkResponse object's RetryAfter header
     * @param response
     */
    ThrottlingUtils.checkResponseForRetryAfter = function (response) {
        if (response.headers) {
            return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
        }
        return false;
    };
    /**
     * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
     * @param throttleTime
     */
    ThrottlingUtils.calculateThrottleTime = function (throttleTime) {
        if (throttleTime <= 0) {
            throttleTime = 0;
        }
        var currentSeconds = Date.now() / 1000;
        return Math.floor(Math.min(currentSeconds + (throttleTime || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
    };
    ThrottlingUtils.removeThrottle = function (cacheManager, clientId, authority, scopes, homeAccountIdentifier) {
        var thumbprint = {
            clientId: clientId,
            authority: authority,
            scopes: scopes,
            homeAccountIdentifier: homeAccountIdentifier
        };
        var key = this.generateThrottlingStorageKey(thumbprint);
        return cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
    };
    return ThrottlingUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var NetworkManager = /** @class */ (function () {
    function NetworkManager(networkClient, cacheManager) {
        this.networkClient = networkClient;
        this.cacheManager = cacheManager;
    }
    /**
     * Wraps sendPostRequestAsync with necessary preflight and postflight logic
     * @param thumbprint
     * @param tokenEndpoint
     * @param options
     */
    NetworkManager.prototype.sendPostRequest = function (thumbprint, tokenEndpoint, options) {
        return __awaiter$1(this, void 0, void 0, function () {
            var response;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ThrottlingUtils.preProcess(this.cacheManager, thumbprint);
                        return [4 /*yield*/, this.networkClient.sendPostRequestAsync(tokenEndpoint, options)];
                    case 1:
                        response = _a.sent();
                        ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response);
                        // Placeholder for Telemetry hook
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return NetworkManager;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
 */
var BaseClient = /** @class */ (function () {
    function BaseClient(configuration) {
        // Set the configuration
        this.config = buildClientConfiguration(configuration);
        // Initialize the logger
        this.logger = new Logger(this.config.loggerOptions, name, version);
        // Initialize crypto
        this.cryptoUtils = this.config.cryptoInterface;
        // Initialize storage interface
        this.cacheManager = this.config.storageInterface;
        // Set the network interface
        this.networkClient = this.config.networkInterface;
        // Set the NetworkManager
        this.networkManager = new NetworkManager(this.networkClient, this.cacheManager);
        // Set TelemetryManager
        this.serverTelemetryManager = this.config.serverTelemetryManager;
        // Set TrustedAuthorities from config
        TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.authOptions.knownAuthorities, this.config.authOptions.cloudDiscoveryMetadata);
        // set Authority
        this.authority = this.config.authOptions.authority;
    }
    /**
     * Creates default headers for requests to token endpoint
     */
    BaseClient.prototype.createDefaultTokenRequestHeaders = function () {
        var headers = this.createDefaultLibraryHeaders();
        headers[HeaderNames.CONTENT_TYPE] = Constants.URL_FORM_CONTENT_TYPE;
        headers[HeaderNames.X_MS_LIB_CAPABILITY] = HeaderNames.X_MS_LIB_CAPABILITY_VALUE;
        if (this.serverTelemetryManager) {
            headers[HeaderNames.X_CLIENT_CURR_TELEM] = this.serverTelemetryManager.generateCurrentRequestHeaderValue();
            headers[HeaderNames.X_CLIENT_LAST_TELEM] = this.serverTelemetryManager.generateLastRequestHeaderValue();
        }
        return headers;
    };
    /**
     * addLibraryData
     */
    BaseClient.prototype.createDefaultLibraryHeaders = function () {
        var headers = {};
        // client info headers
        headers[AADServerParamKeys.X_CLIENT_SKU] = this.config.libraryInfo.sku;
        headers[AADServerParamKeys.X_CLIENT_VER] = this.config.libraryInfo.version;
        headers[AADServerParamKeys.X_CLIENT_OS] = this.config.libraryInfo.os;
        headers[AADServerParamKeys.X_CLIENT_CPU] = this.config.libraryInfo.cpu;
        return headers;
    };
    /**
     * Http post to token endpoint
     * @param tokenEndpoint
     * @param queryString
     * @param headers
     * @param thumbprint
     */
    BaseClient.prototype.executePostToTokenEndpoint = function (tokenEndpoint, queryString, headers, thumbprint) {
        return __awaiter$1(this, void 0, void 0, function () {
            var response;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers: headers })];
                    case 1:
                        response = _a.sent();
                        if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
                            // Telemetry data successfully logged by server, clear Telemetry cache
                            this.config.serverTelemetryManager.clearTelemetryCache();
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Updates the authority object of the client. Endpoint discovery must be completed.
     * @param updatedAuthority
     */
    BaseClient.prototype.updateAuthority = function (updatedAuthority) {
        if (!updatedAuthority.discoveryComplete()) {
            throw ClientAuthError.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
        }
        this.authority = updatedAuthority;
    };
    return BaseClient;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Validates server consumable params from the "request" objects
 */
var RequestValidator = /** @class */ (function () {
    function RequestValidator() {
    }
    /**
     * Utility to check if the `redirectUri` in the request is a non-null value
     * @param redirectUri
     */
    RequestValidator.validateRedirectUri = function (redirectUri) {
        if (StringUtils.isEmpty(redirectUri)) {
            throw ClientConfigurationError.createRedirectUriEmptyError();
        }
    };
    /**
     * Utility to validate prompt sent by the user in the request
     * @param prompt
     */
    RequestValidator.validatePrompt = function (prompt) {
        if ([
            PromptValue.LOGIN,
            PromptValue.SELECT_ACCOUNT,
            PromptValue.CONSENT,
            PromptValue.NONE
        ].indexOf(prompt) < 0) {
            throw ClientConfigurationError.createInvalidPromptError(prompt);
        }
    };
    RequestValidator.validateClaims = function (claims) {
        try {
            JSON.parse(claims);
        }
        catch (e) {
            throw ClientConfigurationError.createInvalidClaimsRequestError();
        }
    };
    /**
     * Utility to validate code_challenge and code_challenge_method
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    RequestValidator.validateCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
        if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
            throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
        }
        else {
            this.validateCodeChallengeMethod(codeChallengeMethod);
        }
    };
    /**
     * Utility to validate code_challenge_method
     * @param codeChallengeMethod
     */
    RequestValidator.validateCodeChallengeMethod = function (codeChallengeMethod) {
        if ([
            CodeChallengeMethodValues.PLAIN,
            CodeChallengeMethodValues.S256
        ].indexOf(codeChallengeMethod) < 0) {
            throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
        }
    };
    /**
     * Removes unnecessary or duplicate query parameters from extraQueryParameters
     * @param request
     */
    RequestValidator.sanitizeEQParams = function (eQParams, queryParams) {
        if (!eQParams) {
            return {};
        }
        // Remove any query parameters already included in SSO params
        queryParams.forEach(function (value, key) {
            if (eQParams[key]) {
                delete eQParams[key];
            }
        });
        return eQParams;
    };
    return RequestValidator;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var RequestParameterBuilder = /** @class */ (function () {
    function RequestParameterBuilder() {
        this.parameters = new Map();
    }
    /**
     * add response_type = code
     */
    RequestParameterBuilder.prototype.addResponseTypeCode = function () {
        this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
    };
    /**
     * add response_mode. defaults to query.
     * @param responseMode
     */
    RequestParameterBuilder.prototype.addResponseMode = function (responseMode) {
        this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent((responseMode) ? responseMode : ResponseMode.QUERY));
    };
    /**
     * add scopes. set addOidcScopes to false to prevent default scopes in non-user scenarios
     * @param scopeSet
     * @param addOidcScopes
     */
    RequestParameterBuilder.prototype.addScopes = function (scopes, addOidcScopes) {
        if (addOidcScopes === void 0) { addOidcScopes = true; }
        var requestScopes = addOidcScopes ? __spreadArrays(scopes || [], [Constants.OPENID_SCOPE, Constants.PROFILE_SCOPE]) : scopes || [];
        var scopeSet = new ScopeSet(requestScopes);
        this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
    };
    /**
     * add clientId
     * @param clientId
     */
    RequestParameterBuilder.prototype.addClientId = function (clientId) {
        this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
    };
    /**
     * add redirect_uri
     * @param redirectUri
     */
    RequestParameterBuilder.prototype.addRedirectUri = function (redirectUri) {
        RequestValidator.validateRedirectUri(redirectUri);
        this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
    };
    /**
     * add post logout redirectUri
     * @param redirectUri
     */
    RequestParameterBuilder.prototype.addPostLogoutRedirectUri = function (redirectUri) {
        RequestValidator.validateRedirectUri(redirectUri);
        this.parameters.set(AADServerParamKeys.POST_LOGOUT_URI, encodeURIComponent(redirectUri));
    };
    /**
     * add id_token_hint to logout request
     * @param idTokenHint
     */
    RequestParameterBuilder.prototype.addIdTokenHint = function (idTokenHint) {
        this.parameters.set(AADServerParamKeys.ID_TOKEN_HINT, encodeURIComponent(idTokenHint));
    };
    /**
     * add domain_hint
     * @param domainHint
     */
    RequestParameterBuilder.prototype.addDomainHint = function (domainHint) {
        this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
    };
    /**
     * add login_hint
     * @param loginHint
     */
    RequestParameterBuilder.prototype.addLoginHint = function (loginHint) {
        this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
    };
    /**
     * add sid
     * @param sid
     */
    RequestParameterBuilder.prototype.addSid = function (sid) {
        this.parameters.set(SSOTypes.SID, encodeURIComponent(sid));
    };
    /**
     * add claims
     * @param claims
     */
    RequestParameterBuilder.prototype.addClaims = function (claims, clientCapabilities) {
        var mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
        RequestValidator.validateClaims(mergedClaims);
        this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(mergedClaims));
    };
    /**
     * add correlationId
     * @param correlationId
     */
    RequestParameterBuilder.prototype.addCorrelationId = function (correlationId) {
        this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
    };
    /**
     * add library info query params
     * @param libraryInfo
     */
    RequestParameterBuilder.prototype.addLibraryInfo = function (libraryInfo) {
        // Telemetry Info
        this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
        this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
        this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
        this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
    };
    /**
     * add prompt
     * @param prompt
     */
    RequestParameterBuilder.prototype.addPrompt = function (prompt) {
        RequestValidator.validatePrompt(prompt);
        this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
    };
    /**
     * add state
     * @param state
     */
    RequestParameterBuilder.prototype.addState = function (state) {
        if (!StringUtils.isEmpty(state)) {
            this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
        }
    };
    /**
     * add nonce
     * @param nonce
     */
    RequestParameterBuilder.prototype.addNonce = function (nonce) {
        this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
    };
    /**
     * add code_challenge and code_challenge_method
     * - throw if either of them are not passed
     * @param codeChallenge
     * @param codeChallengeMethod
     */
    RequestParameterBuilder.prototype.addCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
        RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
        if (codeChallenge && codeChallengeMethod) {
            this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
            this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
        }
        else {
            throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
        }
    };
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    RequestParameterBuilder.prototype.addAuthorizationCode = function (code) {
        this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
    };
    /**
     * add the `authorization_code` passed by the user to exchange for a token
     * @param code
     */
    RequestParameterBuilder.prototype.addDeviceCode = function (code) {
        this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
    };
    /**
     * add the `refreshToken` passed by the user
     * @param refreshToken
     */
    RequestParameterBuilder.prototype.addRefreshToken = function (refreshToken) {
        this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
    };
    /**
     * add the `code_verifier` passed by the user to exchange for a token
     * @param codeVerifier
     */
    RequestParameterBuilder.prototype.addCodeVerifier = function (codeVerifier) {
        this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
    };
    /**
     * add client_secret
     * @param clientSecret
     */
    RequestParameterBuilder.prototype.addClientSecret = function (clientSecret) {
        this.parameters.set(AADServerParamKeys.CLIENT_SECRET, encodeURIComponent(clientSecret));
    };
    /**
     * add clientAssertion for confidential client flows
     * @param clientAssertion
     */
    RequestParameterBuilder.prototype.addClientAssertion = function (clientAssertion) {
        this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION, encodeURIComponent(clientAssertion));
    };
    /**
     * add clientAssertionType for confidential client flows
     * @param clientAssertionType
     */
    RequestParameterBuilder.prototype.addClientAssertionType = function (clientAssertionType) {
        this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION_TYPE, encodeURIComponent(clientAssertionType));
    };
    /**
     * add OBO assertion for confidential client flows
     * @param clientAssertion
     */
    RequestParameterBuilder.prototype.addOboAssertion = function (oboAssertion) {
        this.parameters.set(AADServerParamKeys.OBO_ASSERTION, encodeURIComponent(oboAssertion));
    };
    /**
     * add grant type
     * @param grantType
     */
    RequestParameterBuilder.prototype.addRequestTokenUse = function (tokenUse) {
        this.parameters.set(AADServerParamKeys.REQUESTED_TOKEN_USE, encodeURIComponent(tokenUse));
    };
    /**
     * add grant type
     * @param grantType
     */
    RequestParameterBuilder.prototype.addGrantType = function (grantType) {
        this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
    };
    /**
     * add client info
     *
     */
    RequestParameterBuilder.prototype.addClientInfo = function () {
        this.parameters.set(ClientInfo, "1");
    };
    /**
     * add extraQueryParams
     * @param eQparams
     */
    RequestParameterBuilder.prototype.addExtraQueryParameters = function (eQparams) {
        var _this = this;
        RequestValidator.sanitizeEQParams(eQparams, this.parameters);
        Object.keys(eQparams).forEach(function (key) {
            _this.parameters.set(key, eQparams[key]);
        });
    };
    RequestParameterBuilder.prototype.addClientCapabilitiesToClaims = function (claims, clientCapabilities) {
        var mergedClaims;
        // Parse provided claims into JSON object or initialize empty object
        if (!claims) {
            mergedClaims = {};
        }
        else {
            try {
                mergedClaims = JSON.parse(claims);
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidClaimsRequestError();
            }
        }
        if (clientCapabilities && clientCapabilities.length > 0) {
            if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
                // Add access_token key to claims object
                mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
            }
            // Add xms_cc claim with provided clientCapabilities to access_token key
            mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
                values: clientCapabilities
            };
        }
        return JSON.stringify(mergedClaims);
    };
    /**
     * adds `username` for Password Grant flow
     * @param username
     */
    RequestParameterBuilder.prototype.addUsername = function (username) {
        this.parameters.set(PasswordGrantConstants.username, username);
    };
    /**
     * adds `password` for Password Grant flow
     * @param password
     */
    RequestParameterBuilder.prototype.addPassword = function (password) {
        this.parameters.set(PasswordGrantConstants.password, password);
    };
    /**
     * add pop_jwk to query params
     * @param cnfString
     */
    RequestParameterBuilder.prototype.addPopToken = function (cnfString) {
        if (!StringUtils.isEmpty(cnfString)) {
            this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.POP);
            this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(cnfString));
        }
    };
    /**
     * Utility to create a URL from the params map
     */
    RequestParameterBuilder.prototype.createQueryString = function () {
        var queryParameterArray = new Array();
        this.parameters.forEach(function (value, key) {
            queryParameterArray.push(key + "=" + value);
        });
        return queryParameterArray.join("&");
    };
    return RequestParameterBuilder;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Utility class which exposes functions for managing date and time operations.
 */
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    /**
     * return the current time in Unix time (seconds).
     */
    TimeUtils.nowSeconds = function () {
        // Date.getTime() returns in milliseconds.
        return Math.round(new Date().getTime() / 1000.0);
    };
    /**
     * check if a token is expired based on given UTC time in seconds.
     * @param expiresOn
     */
    TimeUtils.isTokenExpired = function (expiresOn, offset) {
        // check for access token expiry
        var expirationSec = Number(expiresOn) || 0;
        var offsetCurrentTimeSec = TimeUtils.nowSeconds() + offset;
        // If current time + offset is greater than token expiration time, then token is expired.
        return (offsetCurrentTimeSec > expirationSec);
    };
    return TimeUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ID_TOKEN Cache
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-idtoken-clientId-contoso.com-
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      realm: Full tenant or organizational identifier that the account belongs to
 * }
 */
var IdTokenEntity = /** @class */ (function (_super) {
    __extends$1(IdTokenEntity, _super);
    function IdTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create IdTokenEntity
     * @param homeAccountId
     * @param authenticationResult
     * @param clientId
     * @param authority
     */
    IdTokenEntity.createIdTokenEntity = function (homeAccountId, environment, idToken, clientId, tenantId, oboAssertion) {
        var idTokenEntity = new IdTokenEntity();
        idTokenEntity.credentialType = CredentialType.ID_TOKEN;
        idTokenEntity.homeAccountId = homeAccountId;
        idTokenEntity.environment = environment;
        idTokenEntity.clientId = clientId;
        idTokenEntity.secret = idToken;
        idTokenEntity.realm = tenantId;
        idTokenEntity.oboAssertion = oboAssertion;
        return idTokenEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    IdTokenEntity.isIdTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity["credentialType"] === CredentialType.ID_TOKEN);
    };
    return IdTokenEntity;
}(CredentialEntity));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * ACCESS_TOKEN Credential Type
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-accesstoken-clientId-contoso.com-user.read
 *
 * Value Schema:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, usually only used for refresh tokens
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 *      cachedAt: Absolute device time when entry was created in the cache.
 *      expiresOn: Token expiry time, calculated based on current UTC time in seconds. Represented as a string.
 *      extendedExpiresOn: Additional extended expiry time until when token is valid in case of server-side outage. Represented as string in UTC seconds.
 *      keyId: used for POP and SSH tokenTypes
 *      tokenType: Type of the token issued. Usually "Bearer"
 * }
 */
var AccessTokenEntity = /** @class */ (function (_super) {
    __extends$1(AccessTokenEntity, _super);
    function AccessTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create AccessTokenEntity
     * @param homeAccountId
     * @param environment
     * @param accessToken
     * @param clientId
     * @param tenantId
     * @param scopes
     * @param expiresOn
     * @param extExpiresOn
     */
    AccessTokenEntity.createAccessTokenEntity = function (homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, tokenType, oboAssertion) {
        var atEntity = new AccessTokenEntity();
        atEntity.homeAccountId = homeAccountId;
        atEntity.credentialType = CredentialType.ACCESS_TOKEN;
        atEntity.secret = accessToken;
        var currentTime = TimeUtils.nowSeconds();
        atEntity.cachedAt = currentTime.toString();
        /*
         * Token expiry time.
         * This value should be  calculated based on the current UTC time measured locally and the value  expires_in Represented as a string in JSON.
         */
        atEntity.expiresOn = expiresOn.toString();
        atEntity.extendedExpiresOn = extExpiresOn.toString();
        atEntity.environment = environment;
        atEntity.clientId = clientId;
        atEntity.realm = tenantId;
        atEntity.target = scopes;
        atEntity.oboAssertion = oboAssertion;
        atEntity.tokenType = StringUtils.isEmpty(tokenType) ? AuthenticationScheme.BEARER : tokenType;
        return atEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AccessTokenEntity.isAccessTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("realm") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity.hasOwnProperty("target") &&
            entity["credentialType"] === CredentialType.ACCESS_TOKEN);
    };
    return AccessTokenEntity;
}(CredentialEntity));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * REFRESH_TOKEN Cache
 *
 * Key:Value Schema:
 *
 * Key Example: uid.utid-login.microsoftonline.com-refreshtoken-clientId--
 *
 * Value:
 * {
 *      homeAccountId: home account identifier for the auth scheme,
 *      environment: entity that issued the token, represented as a full host
 *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
 *      clientId: client ID of the application
 *      secret: Actual credential as a string
 *      familyId: Family ID identifier, '1' represents Microsoft Family
 *      realm: Full tenant or organizational identifier that the account belongs to
 *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
 * }
 */
var RefreshTokenEntity = /** @class */ (function (_super) {
    __extends$1(RefreshTokenEntity, _super);
    function RefreshTokenEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create RefreshTokenEntity
     * @param homeAccountId
     * @param authenticationResult
     * @param clientId
     * @param authority
     */
    RefreshTokenEntity.createRefreshTokenEntity = function (homeAccountId, environment, refreshToken, clientId, familyId, oboAssertion) {
        var rtEntity = new RefreshTokenEntity();
        rtEntity.clientId = clientId;
        rtEntity.credentialType = CredentialType.REFRESH_TOKEN;
        rtEntity.environment = environment;
        rtEntity.homeAccountId = homeAccountId;
        rtEntity.secret = refreshToken;
        rtEntity.oboAssertion = oboAssertion;
        if (familyId)
            rtEntity.familyId = familyId;
        return rtEntity;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    RefreshTokenEntity.isRefreshTokenEntity = function (entity) {
        if (!entity) {
            return false;
        }
        return (entity.hasOwnProperty("homeAccountId") &&
            entity.hasOwnProperty("environment") &&
            entity.hasOwnProperty("credentialType") &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("secret") &&
            entity["credentialType"] === CredentialType.REFRESH_TOKEN);
    };
    return RefreshTokenEntity;
}(CredentialEntity));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * InteractionRequiredAuthErrorMessage class containing string constants used by error codes and messages.
 */
var InteractionRequiredAuthErrorMessage = [
    "interaction_required",
    "consent_required",
    "login_required"
];
var InteractionRequiredAuthSubErrorMessage = [
    "message_only",
    "additional_action",
    "basic_action",
    "user_password_expired",
    "consent_required"
];
/**
 * Error thrown when user interaction is required at the auth server.
 */
var InteractionRequiredAuthError = /** @class */ (function (_super) {
    __extends$1(InteractionRequiredAuthError, _super);
    function InteractionRequiredAuthError(errorCode, errorMessage, subError) {
        var _this = _super.call(this, errorCode, errorMessage, subError) || this;
        _this.name = "InteractionRequiredAuthError";
        Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
        return _this;
    }
    InteractionRequiredAuthError.isInteractionRequiredError = function (errorCode, errorString, subError) {
        var isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredAuthErrorMessage.indexOf(errorCode) > -1;
        var isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
        var isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredAuthErrorMessage.some(function (irErrorCode) {
            return errorString.indexOf(irErrorCode) > -1;
        });
        return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
    };
    return InteractionRequiredAuthError;
}(ServerError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var CacheRecord = /** @class */ (function () {
    function CacheRecord(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity) {
        this.account = accountEntity || null;
        this.idToken = idTokenEntity || null;
        this.accessToken = accessTokenEntity || null;
        this.refreshToken = refreshTokenEntity || null;
        this.appMetadata = appMetadataEntity || null;
    }
    return CacheRecord;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class which provides helpers for OAuth 2.0 protocol specific values
 */
var ProtocolUtils = /** @class */ (function () {
    function ProtocolUtils() {
    }
    /**
     * Appends user state with random guid, or returns random guid.
     * @param userState
     * @param randomGuid
     */
    ProtocolUtils.setRequestState = function (cryptoObj, userState, meta) {
        var libraryState = ProtocolUtils.generateLibraryState(cryptoObj, meta);
        return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants.RESOURCE_DELIM + userState : libraryState;
    };
    /**
     * Generates the state value used by the common library.
     * @param randomGuid
     * @param cryptoObj
     */
    ProtocolUtils.generateLibraryState = function (cryptoObj, meta) {
        if (!cryptoObj) {
            throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
        }
        // Create a state object containing a unique id and the timestamp of the request creation
        var stateObj = {
            id: cryptoObj.createNewGuid(),
            ts: TimeUtils.nowSeconds()
        };
        if (meta) {
            stateObj.meta = meta;
        }
        var stateString = JSON.stringify(stateObj);
        return cryptoObj.base64Encode(stateString);
    };
    /**
     * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
     * @param state
     * @param cryptoObj
     */
    ProtocolUtils.parseRequestState = function (cryptoObj, state) {
        if (!cryptoObj) {
            throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
        }
        if (StringUtils.isEmpty(state)) {
            throw ClientAuthError.createInvalidStateError(state, "Null, undefined or empty state");
        }
        try {
            // Split the state between library state and user passed state and decode them separately
            var splitState = decodeURIComponent(state).split(Constants.RESOURCE_DELIM);
            var libraryState = splitState[0];
            var userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : "";
            var libraryStateString = cryptoObj.base64Decode(libraryState);
            var libraryStateObj = JSON.parse(libraryStateString);
            return {
                userRequestState: !StringUtils.isEmpty(userState) ? userState : "",
                libraryState: libraryStateObj
            };
        }
        catch (e) {
            throw ClientAuthError.createInvalidStateError(state, e);
        }
    };
    return ProtocolUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var KeyLocation;
(function (KeyLocation) {
    KeyLocation["SW"] = "sw";
    KeyLocation["UHW"] = "uhw";
})(KeyLocation || (KeyLocation = {}));
var PopTokenGenerator = /** @class */ (function () {
    function PopTokenGenerator(cryptoUtils) {
        this.cryptoUtils = cryptoUtils;
    }
    PopTokenGenerator.prototype.generateCnf = function (resourceRequestMethod, resourceRequestUri) {
        return __awaiter$1(this, void 0, void 0, function () {
            var kidThumbprint, reqCnf;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cryptoUtils.getPublicKeyThumbprint(resourceRequestMethod, resourceRequestUri)];
                    case 1:
                        kidThumbprint = _a.sent();
                        reqCnf = {
                            kid: kidThumbprint,
                            xms_ksl: KeyLocation.SW
                        };
                        return [2 /*return*/, this.cryptoUtils.base64Encode(JSON.stringify(reqCnf))];
                }
            });
        });
    };
    PopTokenGenerator.prototype.signPopToken = function (accessToken, resourceRequestMethod, resourceRequestUri) {
        var _a;
        return __awaiter$1(this, void 0, void 0, function () {
            var tokenClaims, resourceUrlString, resourceUrlComponents;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tokenClaims = AuthToken.extractTokenClaims(accessToken, this.cryptoUtils);
                        resourceUrlString = new UrlString(resourceRequestUri);
                        resourceUrlComponents = resourceUrlString.getUrlComponents();
                        if (!((_a = tokenClaims === null || tokenClaims === void 0 ? void 0 : tokenClaims.cnf) === null || _a === void 0 ? void 0 : _a.kid)) {
                            throw ClientAuthError.createTokenClaimsRequiredError();
                        }
                        return [4 /*yield*/, this.cryptoUtils.signJwt({
                                at: accessToken,
                                ts: "" + TimeUtils.nowSeconds(),
                                m: resourceRequestMethod.toUpperCase(),
                                u: resourceUrlComponents.HostNameAndPort || "",
                                nonce: this.cryptoUtils.createNewGuid(),
                                p: resourceUrlComponents.AbsolutePath,
                                q: [[], resourceUrlComponents.QueryString],
                            }, tokenClaims.cnf.kid)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return PopTokenGenerator;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * APP_METADATA Cache
 *
 * Key:Value Schema:
 *
 * Key: appmetadata-<environment>-<client_id>
 *
 * Value:
 * {
 *      clientId: client ID of the application
 *      environment: entity that issued the token, represented as a full host
 *      familyId: Family ID identifier, '1' represents Microsoft Family
 * }
 */
var AppMetadataEntity = /** @class */ (function () {
    function AppMetadataEntity() {
    }
    /**
     * Generate AppMetadata Cache Key as per the schema: appmetadata-<environment>-<client_id>
     */
    AppMetadataEntity.prototype.generateAppMetadataKey = function () {
        return AppMetadataEntity.generateAppMetadataCacheKey(this.environment, this.clientId);
    };
    /**
     * Generate AppMetadata Cache Key
     */
    AppMetadataEntity.generateAppMetadataCacheKey = function (environment, clientId) {
        var appMetaDataKeyArray = [
            APP_METADATA,
            environment,
            clientId,
        ];
        return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
    };
    /**
     * Creates AppMetadataEntity
     * @param clientId
     * @param environment
     * @param familyId
     */
    AppMetadataEntity.createAppMetadataEntity = function (clientId, environment, familyId) {
        var appMetadata = new AppMetadataEntity();
        appMetadata.clientId = clientId;
        appMetadata.environment = environment;
        if (familyId) {
            appMetadata.familyId = familyId;
        }
        return appMetadata;
    };
    /**
     * Validates an entity: checks for all expected params
     * @param entity
     */
    AppMetadataEntity.isAppMetadataEntity = function (key, entity) {
        if (!entity) {
            return false;
        }
        return (key.indexOf(APP_METADATA) === 0 &&
            entity.hasOwnProperty("clientId") &&
            entity.hasOwnProperty("environment"));
    };
    return AppMetadataEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var TokenCacheContext = /** @class */ (function () {
    function TokenCacheContext(tokenCache, hasChanged) {
        this.cache = tokenCache;
        this.hasChanged = hasChanged;
    }
    Object.defineProperty(TokenCacheContext.prototype, "cacheHasChanged", {
        get: function () {
            return this.hasChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenCacheContext.prototype, "tokenCache", {
        get: function () {
            return this.cache;
        },
        enumerable: true,
        configurable: true
    });
    return TokenCacheContext;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class that handles response parsing.
 */
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin) {
        this.clientId = clientId;
        this.cacheStorage = cacheStorage;
        this.cryptoObj = cryptoObj;
        this.logger = logger;
        this.serializableCache = serializableCache;
        this.persistencePlugin = persistencePlugin;
    }
    /**
     * Function which validates server authorization code response.
     * @param serverResponseHash
     * @param cachedState
     * @param cryptoObj
     */
    ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
        if (!serverResponseHash.state || !cachedState) {
            throw !serverResponseHash.state ? ClientAuthError.createStateNotFoundError("Server State") : ClientAuthError.createStateNotFoundError("Cached State");
        }
        if (decodeURIComponent(serverResponseHash.state) !== decodeURIComponent(cachedState)) {
            throw ClientAuthError.createStateMismatchError();
        }
        // Check for error
        if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
            if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
                throw new InteractionRequiredAuthError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
            }
            throw new ServerError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
        }
        if (serverResponseHash.client_info) {
            buildClientInfo(serverResponseHash.client_info, cryptoObj);
        }
    };
    /**
     * Function which validates server authorization token response.
     * @param serverResponse
     */
    ResponseHandler.prototype.validateTokenResponse = function (serverResponse) {
        // Check for error
        if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
            if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
                throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
            }
            var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
            throw new ServerError(serverResponse.error, errString);
        }
    };
    /**
     * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
     * @param serverTokenResponse
     * @param authority
     */
    ResponseHandler.prototype.handleServerTokenResponse = function (serverTokenResponse, authority, resourceRequestMethod, resourceRequestUri, authCodePayload, requestScopes, oboAssertion, handlingRefreshTokenResponse) {
        return __awaiter$1(this, void 0, void 0, function () {
            var idTokenObj, requestStateObj, cacheRecord, cacheContext, key, account;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (serverTokenResponse.id_token) {
                            idTokenObj = new AuthToken(serverTokenResponse.id_token || Constants.EMPTY_STRING, this.cryptoObj);
                            // token nonce check (TODO: Add a warning if no nonce is given?)
                            if (authCodePayload && !StringUtils.isEmpty(authCodePayload.nonce)) {
                                if (idTokenObj.claims.nonce !== authCodePayload.nonce) {
                                    throw ClientAuthError.createNonceMismatchError();
                                }
                            }
                        }
                        // generate homeAccountId
                        this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenObj);
                        if (!!authCodePayload && !!authCodePayload.state) {
                            requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
                        }
                        cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, idTokenObj, requestStateObj && requestStateObj.libraryState, requestScopes, oboAssertion, authCodePayload);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 4, 7]);
                        if (!(this.persistencePlugin && this.serializableCache)) return [3 /*break*/, 3];
                        this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
                        cacheContext = new TokenCacheContext(this.serializableCache, true);
                        return [4 /*yield*/, this.persistencePlugin.beforeCacheAccess(cacheContext)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        /*
                         * When saving a refreshed tokens to the cache, it is expected that the account that was used is present in the cache.
                         * If not present, we should return null, as it's the case that another application called removeAccount in between
                         * the calls to getAllAccounts and acquireTokenSilent. We should not overwrite that removal.
                         */
                        if (handlingRefreshTokenResponse && cacheRecord.account) {
                            key = cacheRecord.account.generateAccountKey();
                            account = this.cacheStorage.getAccount(key);
                            if (!account) {
                                this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                                return [2 /*return*/, null];
                            }
                        }
                        this.cacheStorage.saveCacheRecord(cacheRecord);
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(this.persistencePlugin && this.serializableCache && cacheContext)) return [3 /*break*/, 6];
                        this.logger.verbose("Persistence enabled, calling afterCacheAccess");
                        return [4 /*yield*/, this.persistencePlugin.afterCacheAccess(cacheContext)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, idTokenObj, requestStateObj, resourceRequestMethod, resourceRequestUri)];
                }
            });
        });
    };
    /**
     * Generates CacheRecord
     * @param serverTokenResponse
     * @param idTokenObj
     * @param authority
     */
    ResponseHandler.prototype.generateCacheRecord = function (serverTokenResponse, authority, idTokenObj, libraryState, requestScopes, oboAssertion, authCodePayload) {
        var env = Authority.generateEnvironmentFromAuthority(authority);
        if (StringUtils.isEmpty(env)) {
            throw ClientAuthError.createInvalidCacheEnvironmentError();
        }
        // IdToken: non AAD scenarios can have empty realm
        var cachedIdToken;
        var cachedAccount;
        if (!StringUtils.isEmpty(serverTokenResponse.id_token) && !!idTokenObj) {
            cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token || Constants.EMPTY_STRING, this.clientId, idTokenObj.claims.tid || Constants.EMPTY_STRING, oboAssertion);
            cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority, oboAssertion, authCodePayload);
        }
        // AccessToken
        var cachedAccessToken = null;
        if (!StringUtils.isEmpty(serverTokenResponse.access_token)) {
            // If scopes not returned in server response, use request scopes
            var responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(requestScopes || []);
            // Expiration calculation
            var currentTime = TimeUtils.nowSeconds();
            // If the request timestamp was sent in the library state, use that timestamp to calculate expiration. Otherwise, use current time.
            var timestamp = libraryState ? libraryState.ts : currentTime;
            var tokenExpirationSeconds = timestamp + (serverTokenResponse.expires_in || 0);
            var extendedTokenExpirationSeconds = tokenExpirationSeconds + (serverTokenResponse.ext_expires_in || 0);
            // non AAD scenarios can have empty realm
            cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token || Constants.EMPTY_STRING, this.clientId, idTokenObj ? idTokenObj.claims.tid || Constants.EMPTY_STRING : authority.tenant, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, serverTokenResponse.token_type, oboAssertion);
        }
        // refreshToken
        var cachedRefreshToken = null;
        if (!StringUtils.isEmpty(serverTokenResponse.refresh_token)) {
            cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token || Constants.EMPTY_STRING, this.clientId, serverTokenResponse.foci, oboAssertion);
        }
        // appMetadata
        var cachedAppMetadata = null;
        if (!StringUtils.isEmpty(serverTokenResponse.foci)) {
            cachedAppMetadata = AppMetadataEntity.createAppMetadataEntity(this.clientId, env, serverTokenResponse.foci);
        }
        return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
    };
    /**
     * Generate Account
     * @param serverTokenResponse
     * @param idToken
     * @param authority
     */
    ResponseHandler.prototype.generateAccountEntity = function (serverTokenResponse, idToken, authority, oboAssertion, authCodePayload) {
        var authorityType = authority.authorityType;
        var cloudGraphHostName = authCodePayload ? authCodePayload.cloud_graph_host_name : "";
        var msGraphhost = authCodePayload ? authCodePayload.msgraph_host : "";
        // ADFS does not require client_info in the response
        if (authorityType === AuthorityType.Adfs) {
            this.logger.verbose("Authority type is ADFS, creating ADFS account");
            return AccountEntity.createGenericAccount(authority, this.homeAccountIdentifier, idToken, oboAssertion, cloudGraphHostName, msGraphhost);
        }
        // This fallback applies to B2C as well as they fall under an AAD account type.
        if (StringUtils.isEmpty(serverTokenResponse.client_info) && authority.protocolMode === "AAD") {
            throw ClientAuthError.createClientInfoEmptyError();
        }
        return serverTokenResponse.client_info ?
            AccountEntity.createAccount(serverTokenResponse.client_info, this.homeAccountIdentifier, authority, idToken, oboAssertion, cloudGraphHostName, msGraphhost) :
            AccountEntity.createGenericAccount(authority, this.homeAccountIdentifier, idToken, oboAssertion, cloudGraphHostName, msGraphhost);
    };
    /**
     * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
     *
     * Optionally takes a state string that is set as-is in the response.
     *
     * @param cacheRecord
     * @param idTokenObj
     * @param fromTokenCache
     * @param stateString
     */
    ResponseHandler.generateAuthenticationResult = function (cryptoObj, authority, cacheRecord, fromTokenCache, idTokenObj, requestState, resourceRequestMethod, resourceRequestUri) {
        var _a, _b, _c;
        return __awaiter$1(this, void 0, void 0, function () {
            var accessToken, responseScopes, expiresOn, extExpiresOn, familyId, popTokenGenerator, uid, tid;
            return __generator$1(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        accessToken = "";
                        responseScopes = [];
                        expiresOn = null;
                        familyId = Constants.EMPTY_STRING;
                        if (!cacheRecord.accessToken) return [3 /*break*/, 4];
                        if (!(cacheRecord.accessToken.tokenType === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(cryptoObj);
                        if (!resourceRequestMethod || !resourceRequestUri) {
                            throw ClientConfigurationError.createResourceRequestParametersRequiredError();
                        }
                        return [4 /*yield*/, popTokenGenerator.signPopToken(cacheRecord.accessToken.secret, resourceRequestMethod, resourceRequestUri)];
                    case 1:
                        accessToken = _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        accessToken = cacheRecord.accessToken.secret;
                        _d.label = 3;
                    case 3:
                        responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
                        expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1000);
                        extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000);
                        _d.label = 4;
                    case 4:
                        if (cacheRecord.appMetadata) {
                            familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : Constants.EMPTY_STRING;
                        }
                        uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants.EMPTY_STRING;
                        tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants.EMPTY_STRING;
                        return [2 /*return*/, {
                                authority: authority.canonicalAuthority,
                                uniqueId: uid,
                                tenantId: tid,
                                scopes: responseScopes,
                                account: cacheRecord.account ? cacheRecord.account.getAccountInfo() : null,
                                idToken: idTokenObj ? idTokenObj.rawToken : Constants.EMPTY_STRING,
                                idTokenClaims: idTokenObj ? idTokenObj.claims : {},
                                accessToken: accessToken,
                                fromCache: fromTokenCache,
                                expiresOn: expiresOn,
                                extExpiresOn: extExpiresOn,
                                familyId: familyId,
                                tokenType: ((_a = cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants.EMPTY_STRING,
                                state: requestState ? requestState.userRequestState : Constants.EMPTY_STRING,
                                cloudGraphHostName: ((_b = cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants.EMPTY_STRING,
                                msGraphHost: ((_c = cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants.EMPTY_STRING
                            }];
                }
            });
        });
    };
    return ResponseHandler;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Oauth2.0 Authorization Code client
 */
var AuthorizationCodeClient = /** @class */ (function (_super) {
    __extends$1(AuthorizationCodeClient, _super);
    function AuthorizationCodeClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Creates the URL of the authorization request letting the user input credentials and consent to the
     * application. The URL target the /authorize endpoint of the authority configured in the
     * application object.
     *
     * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
     * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
     * acquireToken(AuthorizationCodeRequest)
     * @param request
     */
    AuthorizationCodeClient.prototype.getAuthCodeUrl = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var queryString;
            return __generator$1(this, function (_a) {
                queryString = this.createAuthCodeUrlQueryString(request);
                return [2 /*return*/, this.authority.authorizationEndpoint + "?" + queryString];
            });
        });
    };
    /**
     * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
     * authorization_code_grant
     * @param request
     */
    AuthorizationCodeClient.prototype.acquireToken = function (request, authCodePayload) {
        return __awaiter$1(this, void 0, void 0, function () {
            var response, responseHandler;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.info("in acquireToken call");
                        if (!request || StringUtils.isEmpty(request.code)) {
                            throw ClientAuthError.createTokenRequestCannotBeMadeError();
                        }
                        return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response.body);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, request.resourceRequestMethod, request.resourceRequestUri, authCodePayload)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Handles the hash fragment response from public client code request. Returns a code response used by
     * the client to exchange for a token in acquireToken.
     * @param hashFragment
     */
    AuthorizationCodeClient.prototype.handleFragmentResponse = function (hashFragment, cachedState) {
        // Handle responses.
        var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
        // Deserialize hash fragment response parameters.
        var hashUrlString = new UrlString(hashFragment);
        // Deserialize hash fragment response parameters.
        var serverParams = UrlString.getDeserializedHash(hashUrlString.getHash());
        // Get code response
        responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
        // throw when there is no auth code in the response
        if (!serverParams.code) {
            throw ClientAuthError.createNoAuthCodeInServerResponseError();
        }
        return __assign$1(__assign$1({}, serverParams), { 
            // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
            code: serverParams.code });
    };
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param authorityUri
     */
    AuthorizationCodeClient.prototype.getLogoutUri = function (logoutRequest) {
        // Throw error if logoutRequest is null/undefined
        if (!logoutRequest) {
            throw ClientConfigurationError.createEmptyLogoutRequestError();
        }
        if (logoutRequest.account) {
            // Clear given account.
            this.cacheManager.removeAccount(AccountEntity.generateAccountCacheKey(logoutRequest.account));
        }
        else {
            // Clear all accounts and tokens
            this.cacheManager.clear();
        }
        var queryString = this.createLogoutUrlQueryString(logoutRequest);
        // Construct logout URI.
        return StringUtils.isEmpty(queryString) ? this.authority.endSessionEndpoint : this.authority.endSessionEndpoint + "?" + queryString;
    };
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    AuthorizationCodeClient.prototype.executeTokenRequest = function (authority, request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var thumbprint, requestBody, headers;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: authority.canonicalAuthority,
                            scopes: request.scopes
                        };
                        return [4 /*yield*/, this.createTokenRequestBody(request)];
                    case 1:
                        requestBody = _a.sent();
                        headers = this.createDefaultTokenRequestHeaders();
                        return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                }
            });
        });
    };
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    AuthorizationCodeClient.prototype.createTokenRequestBody = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var parameterBuilder, clientAssertion, popTokenGenerator, cnfString, correlationId;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parameterBuilder = new RequestParameterBuilder();
                        parameterBuilder.addClientId(this.config.authOptions.clientId);
                        // validate the redirectUri (to be a non null value)
                        parameterBuilder.addRedirectUri(request.redirectUri);
                        // Add scope array, parameter builder will add default scopes and dedupe
                        parameterBuilder.addScopes(request.scopes);
                        // add code: user set, not validated
                        parameterBuilder.addAuthorizationCode(request.code);
                        // add code_verifier if passed
                        if (request.codeVerifier) {
                            parameterBuilder.addCodeVerifier(request.codeVerifier);
                        }
                        if (this.config.clientCredentials.clientSecret) {
                            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                        }
                        if (this.config.clientCredentials.clientAssertion) {
                            clientAssertion = this.config.clientCredentials.clientAssertion;
                            parameterBuilder.addClientAssertion(clientAssertion.assertion);
                            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                        }
                        parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
                        parameterBuilder.addClientInfo();
                        if (!(request.authenticationScheme === AuthenticationScheme.POP && !!request.resourceRequestMethod && !!request.resourceRequestUri)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                        return [4 /*yield*/, popTokenGenerator.generateCnf(request.resourceRequestMethod, request.resourceRequestUri)];
                    case 1:
                        cnfString = _a.sent();
                        parameterBuilder.addPopToken(cnfString);
                        _a.label = 2;
                    case 2:
                        correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                        parameterBuilder.addCorrelationId(correlationId);
                        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                        }
                        return [2 /*return*/, parameterBuilder.createQueryString()];
                }
            });
        });
    };
    /**
     * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
     * @param request
     */
    AuthorizationCodeClient.prototype.createAuthCodeUrlQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        var requestScopes = __spreadArrays(request.scopes || [], request.extraScopesToConsent || []);
        parameterBuilder.addScopes(requestScopes);
        // validate the redirectUri (to be a non null value)
        parameterBuilder.addRedirectUri(request.redirectUri);
        // generate the correlationId if not set by the user and add
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        // add response_mode. If not passed in it defaults to query.
        parameterBuilder.addResponseMode(request.responseMode);
        // add response_type = code
        parameterBuilder.addResponseTypeCode();
        // add library info parameters
        parameterBuilder.addLibraryInfo(this.config.libraryInfo);
        // add client_info=1
        parameterBuilder.addClientInfo();
        if (request.codeChallenge && request.codeChallengeMethod) {
            parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
        }
        if (request.prompt) {
            parameterBuilder.addPrompt(request.prompt);
        }
        if (request.domainHint) {
            parameterBuilder.addDomainHint(request.domainHint);
        }
        // Add sid or loginHint with preference for sid -> loginHint -> username of AccountInfo object
        if (request.sid) {
            parameterBuilder.addSid(request.sid);
        }
        else if (request.loginHint) {
            parameterBuilder.addLoginHint(request.loginHint);
        }
        else if (request.account && request.account.username) {
            parameterBuilder.addLoginHint(request.account.username);
        }
        if (request.nonce) {
            parameterBuilder.addNonce(request.nonce);
        }
        if (request.state) {
            parameterBuilder.addState(request.state);
        }
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        if (request.extraQueryParameters) {
            parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
        }
        return parameterBuilder.createQueryString();
    };
    /**
     * This API validates the `EndSessionRequest` and creates a URL
     * @param request
     */
    AuthorizationCodeClient.prototype.createLogoutUrlQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        if (request.postLogoutRedirectUri) {
            parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
        }
        if (request.correlationId) {
            parameterBuilder.addCorrelationId(request.correlationId);
        }
        if (request.idTokenHint) {
            parameterBuilder.addIdTokenHint(request.idTokenHint);
        }
        return parameterBuilder.createQueryString();
    };
    return AuthorizationCodeClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 Device code client
 */
var DeviceCodeClient = /** @class */ (function (_super) {
    __extends$1(DeviceCodeClient, _super);
    function DeviceCodeClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Gets device code from device code endpoint, calls back to with device code response, and
     * polls token endpoint to exchange device code for tokens
     * @param request
     */
    DeviceCodeClient.prototype.acquireToken = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var deviceCodeResponse, response, responseHandler;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDeviceCode(request)];
                    case 1:
                        deviceCodeResponse = _a.sent();
                        request.deviceCodeCallback(deviceCodeResponse);
                        return [4 /*yield*/, this.acquireTokenWithDeviceCode(request, deviceCodeResponse)];
                    case 2:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response, this.authority, request.resourceRequestMethod, request.resourceRequestUri)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates device code request and executes http GET
     * @param request
     */
    DeviceCodeClient.prototype.getDeviceCode = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var queryString, headers, thumbprint;
            return __generator$1(this, function (_a) {
                queryString = this.createQueryString(request);
                headers = this.createDefaultTokenRequestHeaders();
                thumbprint = {
                    clientId: this.config.authOptions.clientId,
                    authority: request.authority,
                    scopes: request.scopes
                };
                return [2 /*return*/, this.executePostRequestToDeviceCodeEndpoint(this.authority.deviceCodeEndpoint, queryString, headers, thumbprint)];
            });
        });
    };
    /**
     * Executes POST request to device code endpoint
     * @param deviceCodeEndpoint
     * @param queryString
     * @param headers
     */
    DeviceCodeClient.prototype.executePostRequestToDeviceCodeEndpoint = function (deviceCodeEndpoint, queryString, headers, thumbprint) {
        return __awaiter$1(this, void 0, void 0, function () {
            var _a, userCode, deviceCode, verificationUri, expiresIn, interval, message;
            return __generator$1(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, deviceCodeEndpoint, {
                            body: queryString,
                            headers: headers
                        })];
                    case 1:
                        _a = (_b.sent()).body, userCode = _a.user_code, deviceCode = _a.device_code, verificationUri = _a.verification_uri, expiresIn = _a.expires_in, interval = _a.interval, message = _a.message;
                        return [2 /*return*/, {
                                userCode: userCode,
                                deviceCode: deviceCode,
                                verificationUri: verificationUri,
                                expiresIn: expiresIn,
                                interval: interval,
                                message: message
                            }];
                }
            });
        });
    };
    /**
     * Create device code endpoint query parameters and returns string
     */
    DeviceCodeClient.prototype.createQueryString = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addScopes(request.scopes);
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return parameterBuilder.createQueryString();
    };
    /**
     * Creates token request with device code response and polls token endpoint at interval set by the device code
     * response
     * @param request
     * @param deviceCodeResponse
     */
    DeviceCodeClient.prototype.acquireTokenWithDeviceCode = function (request, deviceCodeResponse) {
        return __awaiter$1(this, void 0, void 0, function () {
            var requestBody, headers, deviceCodeExpirationTime, pollingIntervalMilli;
            var _this = this;
            return __generator$1(this, function (_a) {
                requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
                headers = this.createDefaultTokenRequestHeaders();
                deviceCodeExpirationTime = TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
                pollingIntervalMilli = deviceCodeResponse.interval * 1000;
                /*
                 * Poll token endpoint while (device code is not expired AND operation has not been cancelled by
                 * setting CancellationToken.cancel = true). POST request is sent at interval set by pollingIntervalMilli
                 */
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var intervalId = setInterval(function () { return __awaiter$1(_this, void 0, void 0, function () {
                            var thumbprint, response, error_1;
                            return __generator$1(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 5, , 6]);
                                        if (!request.cancel) return [3 /*break*/, 1];
                                        this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
                                        clearInterval(intervalId);
                                        reject(ClientAuthError.createDeviceCodeCancelledError());
                                        return [3 /*break*/, 4];
                                    case 1:
                                        if (!(TimeUtils.nowSeconds() > deviceCodeExpirationTime)) return [3 /*break*/, 2];
                                        this.logger.error("Device code expired. Expiration time of device code was " + deviceCodeExpirationTime);
                                        clearInterval(intervalId);
                                        reject(ClientAuthError.createDeviceCodeExpiredError());
                                        return [3 /*break*/, 4];
                                    case 2:
                                        thumbprint = {
                                            clientId: this.config.authOptions.clientId,
                                            authority: request.authority,
                                            scopes: request.scopes
                                        };
                                        return [4 /*yield*/, this.executePostToTokenEndpoint(this.authority.tokenEndpoint, requestBody, headers, thumbprint)];
                                    case 3:
                                        response = _a.sent();
                                        if (response.body && response.body.error === Constants.AUTHORIZATION_PENDING) {
                                            // user authorization is pending. Sleep for polling interval and try again
                                            this.logger.info(response.body.error_description || "no_error_description");
                                        }
                                        else {
                                            clearInterval(intervalId);
                                            resolve(response.body);
                                        }
                                        _a.label = 4;
                                    case 4: return [3 /*break*/, 6];
                                    case 5:
                                        error_1 = _a.sent();
                                        clearInterval(intervalId);
                                        reject(error_1);
                                        return [3 /*break*/, 6];
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); }, pollingIntervalMilli);
                    })];
            });
        });
    };
    /**
     * Creates query parameters and converts to string.
     * @param request
     * @param deviceCodeResponse
     */
    DeviceCodeClient.prototype.createTokenRequestBody = function (request, deviceCodeResponse) {
        var requestParameters = new RequestParameterBuilder();
        requestParameters.addScopes(request.scopes);
        requestParameters.addClientId(this.config.authOptions.clientId);
        requestParameters.addGrantType(GrantType.DEVICE_CODE_GRANT);
        requestParameters.addDeviceCode(deviceCodeResponse.deviceCode);
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        requestParameters.addCorrelationId(correlationId);
        requestParameters.addClientInfo();
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            requestParameters.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return requestParameters.createQueryString();
    };
    return DeviceCodeClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 refresh token client
 */
var RefreshTokenClient = /** @class */ (function (_super) {
    __extends$1(RefreshTokenClient, _super);
    function RefreshTokenClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    RefreshTokenClient.prototype.acquireToken = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var response, responseHandler;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(response.body);
                        return [2 /*return*/, responseHandler.handleServerTokenResponse(response.body, this.authority, request.resourceRequestMethod, request.resourceRequestUri, undefined, [], undefined, true)];
                }
            });
        });
    };
    /**
     * Gets cached refresh token and attaches to request, then calls acquireToken API
     * @param request
     */
    RefreshTokenClient.prototype.acquireTokenByRefreshToken = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var isFOCI, noFamilyRTInCache, clientMismatchErrorWithFamilyRT;
            return __generator$1(this, function (_a) {
                // Cannot renew token if no request object is given.
                if (!request) {
                    throw ClientConfigurationError.createEmptyTokenRequestError();
                }
                // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                if (!request.account) {
                    throw ClientAuthError.createNoAccountInSilentRequestError();
                }
                isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment, this.config.authOptions.clientId);
                // if the app is part of the family, retrive a Family refresh token if present and make a refreshTokenRequest
                if (isFOCI) {
                    try {
                        return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, true)];
                    }
                    catch (e) {
                        noFamilyRTInCache = e instanceof ClientAuthError && e.errorCode === ClientAuthErrorMessage.noTokensFoundError.code;
                        clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === Errors.INVALID_GRANT_ERROR && e.subError === Errors.CLIENT_MISMATCH_ERROR;
                        // if family Refresh Token (FRT) cache acquisition fails or if client_mismatch error is seen with FRT, reattempt with application Refresh Token (ART)
                        if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
                            return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
                            // throw in all other cases
                        }
                        else {
                            throw e;
                        }
                    }
                }
                // fall back to application refresh token acquisition
                return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
            });
        });
    };
    /**
     * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
     * @param request
     */
    RefreshTokenClient.prototype.acquireTokenWithCachedRefreshToken = function (request, foci) {
        return __awaiter$1(this, void 0, void 0, function () {
            var refreshToken, refreshTokenRequest;
            return __generator$1(this, function (_a) {
                refreshToken = this.cacheManager.readRefreshTokenFromCache(this.config.authOptions.clientId, request.account, foci);
                // no refresh Token
                if (!refreshToken) {
                    throw ClientAuthError.createNoTokensFoundError();
                }
                refreshTokenRequest = __assign$1(__assign$1({}, request), { refreshToken: refreshToken.secret, authenticationScheme: AuthenticationScheme.BEARER });
                return [2 /*return*/, this.acquireToken(refreshTokenRequest)];
            });
        });
    };
    /**
     * Constructs the network message and makes a NW call to the underlying secure token service
     * @param request
     * @param authority
     */
    RefreshTokenClient.prototype.executeTokenRequest = function (request, authority) {
        return __awaiter$1(this, void 0, void 0, function () {
            var requestBody, headers, thumbprint;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createTokenRequestBody(request)];
                    case 1:
                        requestBody = _a.sent();
                        headers = this.createDefaultTokenRequestHeaders();
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: authority.canonicalAuthority,
                            scopes: request.scopes
                        };
                        return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                }
            });
        });
    };
    /**
     * Helper function to create the token request body
     * @param request
     */
    RefreshTokenClient.prototype.createTokenRequestBody = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var parameterBuilder, correlationId, clientAssertion, popTokenGenerator, _a, _b;
            return __generator$1(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        parameterBuilder = new RequestParameterBuilder();
                        parameterBuilder.addClientId(this.config.authOptions.clientId);
                        parameterBuilder.addScopes(request.scopes);
                        parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
                        parameterBuilder.addClientInfo();
                        correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                        parameterBuilder.addCorrelationId(correlationId);
                        parameterBuilder.addRefreshToken(request.refreshToken);
                        if (this.config.clientCredentials.clientSecret) {
                            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                        }
                        if (this.config.clientCredentials.clientAssertion) {
                            clientAssertion = this.config.clientCredentials.clientAssertion;
                            parameterBuilder.addClientAssertion(clientAssertion.assertion);
                            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                        }
                        if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                        popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                        if (!request.resourceRequestMethod || !request.resourceRequestUri) {
                            throw ClientConfigurationError.createResourceRequestParametersRequiredError();
                        }
                        _b = (_a = parameterBuilder).addPopToken;
                        return [4 /*yield*/, popTokenGenerator.generateCnf(request.resourceRequestMethod, request.resourceRequestUri)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2:
                        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                        }
                        return [2 /*return*/, parameterBuilder.createQueryString()];
                }
            });
        });
    };
    return RefreshTokenClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * OAuth2.0 client credential grant
 */
var ClientCredentialClient = /** @class */ (function (_super) {
    __extends$1(ClientCredentialClient, _super);
    function ClientCredentialClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Public API to acquire a token with ClientCredential Flow for Confidential clients
     * @param request
     */
    ClientCredentialClient.prototype.acquireToken = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var cachedAuthenticationResult;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scopeSet = new ScopeSet(request.scopes || []);
                        if (!request.skipCache) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.getCachedAuthenticationResult()];
                    case 3:
                        cachedAuthenticationResult = _a.sent();
                        if (!cachedAuthenticationResult) return [3 /*break*/, 4];
                        return [2 /*return*/, cachedAuthenticationResult];
                    case 4: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * looks up cache if the tokens are cached already
     */
    ClientCredentialClient.prototype.getCachedAuthenticationResult = function () {
        return __awaiter$1(this, void 0, void 0, function () {
            var cachedAccessToken;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cachedAccessToken = this.readAccessTokenFromCache();
                        if (!cachedAccessToken ||
                            TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                account: null,
                                idToken: null,
                                accessToken: cachedAccessToken,
                                refreshToken: null,
                                appMetadata: null
                            }, true)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Reads access token from the cache
     * TODO: Move this call to cacheManager instead
     */
    ClientCredentialClient.prototype.readAccessTokenFromCache = function () {
        var accessTokenFilter = {
            homeAccountId: "",
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: CredentialType.ACCESS_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant,
            target: this.scopeSet.printScopesLowerCase()
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        if (accessTokens.length < 1) {
            return null;
        }
        else if (accessTokens.length > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * Makes a network call to request the token from the service
     * @param request
     * @param authority
     */
    ClientCredentialClient.prototype.executeTokenRequest = function (request, authority) {
        return __awaiter$1(this, void 0, void 0, function () {
            var requestBody, headers, thumbprint, response, responseHandler, tokenResponse;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = this.createTokenRequestBody(request);
                        headers = this.createDefaultTokenRequestHeaders();
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: request.authority,
                            scopes: request.scopes
                        };
                        return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(response.body);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, request.resourceRequestMethod, request.resourceRequestUri, undefined, request.scopes)];
                    case 2:
                        tokenResponse = _a.sent();
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * generate the request to the server in the acceptable format
     * @param request
     */
    ClientCredentialClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addScopes(request.scopes, false);
        parameterBuilder.addGrantType(GrantType.CLIENT_CREDENTIALS_GRANT);
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        if (this.config.clientCredentials.clientSecret) {
            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        }
        if (this.config.clientCredentials.clientAssertion) {
            var clientAssertion = this.config.clientCredentials.clientAssertion;
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return parameterBuilder.createQueryString();
    };
    return ClientCredentialClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * On-Behalf-Of client
 */
var OnBehalfOfClient = /** @class */ (function (_super) {
    __extends$1(OnBehalfOfClient, _super);
    function OnBehalfOfClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Public API to acquire tokens with on behalf of flow
     * @param request
     */
    OnBehalfOfClient.prototype.acquireToken = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var cachedAuthenticationResult;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scopeSet = new ScopeSet(request.scopes || []);
                        if (!request.skipCache) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.getCachedAuthenticationResult(request)];
                    case 3:
                        cachedAuthenticationResult = _a.sent();
                        if (!cachedAuthenticationResult) return [3 /*break*/, 4];
                        return [2 /*return*/, cachedAuthenticationResult];
                    case 4: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * look up cache for tokens
     * @param request
     */
    OnBehalfOfClient.prototype.getCachedAuthenticationResult = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var cachedAccessToken, cachedIdToken, idTokenObject, cachedAccount, localAccountId, accountInfo;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cachedAccessToken = this.readAccessTokenFromCache(request);
                        if (!cachedAccessToken ||
                            TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                            return [2 /*return*/, null];
                        }
                        cachedIdToken = this.readIdTokenFromCache(request);
                        cachedAccount = null;
                        if (cachedIdToken) {
                            idTokenObject = new AuthToken(cachedIdToken.secret, this.config.cryptoInterface);
                            localAccountId = idTokenObject.claims.oid ? idTokenObject.claims.oid : idTokenObject.claims.sub;
                            accountInfo = {
                                homeAccountId: cachedIdToken.homeAccountId,
                                environment: cachedIdToken.environment,
                                tenantId: cachedIdToken.realm,
                                username: Constants.EMPTY_STRING,
                                localAccountId: localAccountId || ""
                            };
                            cachedAccount = this.readAccountFromCache(accountInfo);
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                account: cachedAccount,
                                accessToken: cachedAccessToken,
                                idToken: cachedIdToken,
                                refreshToken: null,
                                appMetadata: null
                            }, true, idTokenObject)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * read access token from cache TODO: CacheManager API should be used here
     * @param request
     */
    OnBehalfOfClient.prototype.readAccessTokenFromCache = function (request) {
        var accessTokenFilter = {
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: CredentialType.ACCESS_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant,
            target: this.scopeSet.printScopesLowerCase(),
            oboAssertion: request.oboAssertion
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
        var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
        var numAccessTokens = accessTokens.length;
        if (numAccessTokens < 1) {
            return null;
        }
        else if (numAccessTokens > 1) {
            throw ClientAuthError.createMultipleMatchingTokensInCacheError();
        }
        return accessTokens[0];
    };
    /**
     * read idtoken from cache TODO: CacheManager API should be used here instead
     * @param request
     */
    OnBehalfOfClient.prototype.readIdTokenFromCache = function (request) {
        var idTokenFilter = {
            environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
            credentialType: CredentialType.ID_TOKEN,
            clientId: this.config.authOptions.clientId,
            realm: this.authority.tenant,
            oboAssertion: request.oboAssertion
        };
        var credentialCache = this.cacheManager.getCredentialsFilteredBy(idTokenFilter);
        var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
        // When acquiring a token on behalf of an application, there might not be an id token in the cache
        if (idTokens.length < 1) {
            return null;
        }
        return idTokens[0];
    };
    /**
     * read account from cache, TODO: CacheManager API should be used here instead
     * @param account
     */
    OnBehalfOfClient.prototype.readAccountFromCache = function (account) {
        return this.cacheManager.readAccountFromCache(account);
    };
    /**
     * Make a network call to the server requesting credentials
     * @param request
     * @param authority
     */
    OnBehalfOfClient.prototype.executeTokenRequest = function (request, authority) {
        return __awaiter$1(this, void 0, void 0, function () {
            var requestBody, headers, thumbprint, response, responseHandler, tokenResponse;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestBody = this.createTokenRequestBody(request);
                        headers = this.createDefaultTokenRequestHeaders();
                        thumbprint = {
                            clientId: this.config.authOptions.clientId,
                            authority: request.authority,
                            scopes: request.scopes
                        };
                        return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        responseHandler.validateTokenResponse(response.body);
                        return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, request.resourceRequestMethod, request.resourceRequestUri, undefined, request.scopes, request.oboAssertion)];
                    case 2:
                        tokenResponse = _a.sent();
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * generate a server request in accepable format
     * @param request
     */
    OnBehalfOfClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addScopes(request.scopes);
        parameterBuilder.addGrantType(GrantType.JWT_BEARER);
        parameterBuilder.addClientInfo();
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        parameterBuilder.addRequestTokenUse(AADServerParamKeys.ON_BEHALF_OF);
        parameterBuilder.addOboAssertion(request.oboAssertion);
        if (this.config.clientCredentials.clientSecret) {
            parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
        }
        if (this.config.clientCredentials.clientAssertion) {
            var clientAssertion = this.config.clientCredentials.clientAssertion;
            parameterBuilder.addClientAssertion(clientAssertion.assertion);
            parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
        }
        return parameterBuilder.createQueryString();
    };
    return OnBehalfOfClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var SilentFlowClient = /** @class */ (function (_super) {
    __extends$1(SilentFlowClient, _super);
    function SilentFlowClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
     * the given token and returns the renewed token
     * @param request
     */
    SilentFlowClient.prototype.acquireToken = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var e_1, refreshTokenClient;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.acquireCachedToken(request)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1 instanceof ClientAuthError && e_1.errorCode === ClientAuthErrorMessage.tokenRefreshRequired.code) {
                            refreshTokenClient = new RefreshTokenClient(this.config);
                            return [2 /*return*/, refreshTokenClient.acquireTokenByRefreshToken(request)];
                        }
                        else {
                            throw e_1;
                        }
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves token from cache or throws an error if it must be refreshed.
     * @param request
     */
    SilentFlowClient.prototype.acquireCachedToken = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var requestScopes, environment, cacheRecord;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Cannot renew token if no request object is given.
                        if (!request) {
                            throw ClientConfigurationError.createEmptyTokenRequestError();
                        }
                        // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                        if (!request.account) {
                            throw ClientAuthError.createNoAccountInSilentRequestError();
                        }
                        requestScopes = new ScopeSet(request.scopes || []);
                        environment = request.authority || Authority.generateEnvironmentFromAuthority(this.authority);
                        cacheRecord = this.cacheManager.readCacheRecord(request.account, this.config.authOptions.clientId, requestScopes, environment);
                        if (!this.isRefreshRequired(request, cacheRecord.accessToken)) return [3 /*break*/, 1];
                        throw ClientAuthError.createRefreshRequiredError();
                    case 1:
                        if (this.config.serverTelemetryManager) {
                            this.config.serverTelemetryManager.incrementCacheHits();
                        }
                        return [4 /*yield*/, this.generateResultFromCacheRecord(cacheRecord, request.resourceRequestMethod, request.resourceRequestUri)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Helper function to build response object from the CacheRecord
     * @param cacheRecord
     */
    SilentFlowClient.prototype.generateResultFromCacheRecord = function (cacheRecord, resourceRequestMethod, resourceRequestUri) {
        return __awaiter$1(this, void 0, void 0, function () {
            var idTokenObj;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (cacheRecord.idToken) {
                            idTokenObj = new AuthToken(cacheRecord.idToken.secret, this.config.cryptoInterface);
                        }
                        return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, idTokenObj, undefined, resourceRequestMethod, resourceRequestUri)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Given a request object and an accessTokenEntity determine if the accessToken needs to be refreshed
     * @param request
     * @param cachedAccessToken
     */
    SilentFlowClient.prototype.isRefreshRequired = function (request, cachedAccessToken) {
        if (request.forceRefresh || request.claims) {
            // Must refresh due to request parameters
            return true;
        }
        else if (!cachedAccessToken || TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
            // Must refresh due to expired or non-existent access_token
            return true;
        }
        return false;
    };
    return SilentFlowClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Oauth2.0 Password grant client
 * Note: We are only supporting public clients for password grant and for purely testing purposes
 */
var UsernamePasswordClient = /** @class */ (function (_super) {
    __extends$1(UsernamePasswordClient, _super);
    function UsernamePasswordClient(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * API to acquire a token by passing the username and password to the service in exchage of credentials
     * password_grant
     * @param request
     */
    UsernamePasswordClient.prototype.acquireToken = function (request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var response, responseHandler, tokenResponse;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.info("in acquireToken call");
                        return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                    case 1:
                        response = _a.sent();
                        responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                        // Validate response. This function throws a server error if an error is returned by the server.
                        responseHandler.validateTokenResponse(response.body);
                        tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority);
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    /**
     * Executes POST request to token endpoint
     * @param authority
     * @param request
     */
    UsernamePasswordClient.prototype.executeTokenRequest = function (authority, request) {
        return __awaiter$1(this, void 0, void 0, function () {
            var thumbprint, requestBody, headers;
            return __generator$1(this, function (_a) {
                thumbprint = {
                    clientId: this.config.authOptions.clientId,
                    authority: authority.canonicalAuthority,
                    scopes: request.scopes
                };
                requestBody = this.createTokenRequestBody(request);
                headers = this.createDefaultTokenRequestHeaders();
                return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
            });
        });
    };
    /**
     * Generates a map for all the params to be sent to the service
     * @param request
     */
    UsernamePasswordClient.prototype.createTokenRequestBody = function (request) {
        var parameterBuilder = new RequestParameterBuilder();
        parameterBuilder.addClientId(this.config.authOptions.clientId);
        parameterBuilder.addUsername(request.username);
        parameterBuilder.addPassword(request.password);
        parameterBuilder.addScopes(request.scopes);
        parameterBuilder.addGrantType(GrantType.RESOURCE_OWNER_PASSWORD_GRANT);
        parameterBuilder.addClientInfo();
        var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
        parameterBuilder.addCorrelationId(correlationId);
        if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
            parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
        }
        return parameterBuilder.createQueryString();
    };
    return UsernamePasswordClient;
}(BaseClient));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var AuthorityFactory = /** @class */ (function () {
    function AuthorityFactory() {
    }
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
     *
     * Also performs endpoint discovery.
     *
     * @param authorityUri
     * @param networkClient
     * @param protocolMode
     */
    AuthorityFactory.createDiscoveredInstance = function (authorityUri, networkClient, protocolMode) {
        return __awaiter$1(this, void 0, void 0, function () {
            var acquireTokenAuthority, e_1;
            return __generator$1(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acquireTokenAuthority = AuthorityFactory.createInstance(authorityUri, networkClient, protocolMode);
                        if (acquireTokenAuthority.discoveryComplete()) {
                            return [2 /*return*/, acquireTokenAuthority];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, acquireTokenAuthority];
                    case 3:
                        e_1 = _a.sent();
                        throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create an authority object of the correct type based on the url
     * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
     *
     * Does not perform endpoint discovery.
     *
     * @param authorityUrl
     * @param networkInterface
     * @param protocolMode
     */
    AuthorityFactory.createInstance = function (authorityUrl, networkInterface, protocolMode) {
        // Throw error if authority url is empty
        if (StringUtils.isEmpty(authorityUrl)) {
            throw ClientConfigurationError.createUrlEmptyError();
        }
        return new Authority(authorityUrl, networkInterface, protocolMode);
    };
    return AuthorityFactory;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ServerTelemetryEntity = /** @class */ (function () {
    function ServerTelemetryEntity() {
        this.failedRequests = [];
        this.errors = [];
        this.cacheHits = 0;
    }
    /**
     * validates if a given cache entry is "Telemetry", parses <key,value>
     * @param key
     * @param entity
     */
    ServerTelemetryEntity.isServerTelemetryEntity = function (key, entity) {
        var validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
        var validateEntity = true;
        if (entity) {
            validateEntity =
                entity.hasOwnProperty("failedRequests") &&
                    entity.hasOwnProperty("errors") &&
                    entity.hasOwnProperty("cacheHits");
        }
        return validateKey && validateEntity;
    };
    return ServerTelemetryEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ThrottlingEntity = /** @class */ (function () {
    function ThrottlingEntity() {
    }
    /**
     * validates if a given cache entry is "Throttling", parses <key,value>
     * @param key
     * @param entity
     */
    ThrottlingEntity.isThrottlingEntity = function (key, entity) {
        var validateKey = false;
        if (key) {
            validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
        }
        var validateEntity = true;
        if (entity) {
            validateEntity = entity.hasOwnProperty("throttleTime");
        }
        return validateKey && validateEntity;
    };
    return ThrottlingEntity;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ServerTelemetryManager = /** @class */ (function () {
    function ServerTelemetryManager(telemetryRequest, cacheManager) {
        this.cacheManager = cacheManager;
        this.apiId = telemetryRequest.apiId;
        this.correlationId = telemetryRequest.correlationId;
        this.forceRefresh = telemetryRequest.forceRefresh || false;
        this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
    }
    /**
     * API to add MSER Telemetry to request
     */
    ServerTelemetryManager.prototype.generateCurrentRequestHeaderValue = function () {
        var forceRefreshInt = this.forceRefresh ? 1 : 0;
        var request = "" + this.apiId + SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR + forceRefreshInt;
        var platformFields = ""; // TODO: Determine what we want to include
        return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, request, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    };
    /**
     * API to add MSER Telemetry for the last failed request
     */
    ServerTelemetryManager.prototype.generateLastRequestHeaderValue = function () {
        var lastRequests = this.getLastRequests();
        var maxErrors = ServerTelemetryManager.maxErrorsToSend(lastRequests);
        var failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        var errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        var errorCount = lastRequests.errors.length;
        // Indicate whether this header contains all data or partial data
        var overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
        var platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
        return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, lastRequests.cacheHits, failedRequests, errors, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
    };
    /**
     * API to cache token failures for MSER data capture
     * @param error
     */
    ServerTelemetryManager.prototype.cacheFailedRequest = function (error) {
        var lastRequests = this.getLastRequests();
        lastRequests.failedRequests.push(this.apiId, this.correlationId);
        if (!StringUtils.isEmpty(error.subError)) {
            lastRequests.errors.push(error.subError);
        }
        else if (!StringUtils.isEmpty(error.errorCode)) {
            lastRequests.errors.push(error.errorCode);
        }
        else if (!!error && error.toString()) {
            lastRequests.errors.push(error.toString());
        }
        else {
            lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
        }
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
        return;
    };
    /**
     * Update server telemetry cache entry by incrementing cache hit counter
     */
    ServerTelemetryManager.prototype.incrementCacheHits = function () {
        var lastRequests = this.getLastRequests();
        lastRequests.cacheHits += 1;
        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
        return lastRequests.cacheHits;
    };
    /**
     * Get the server telemetry entity from cache or initialize a new one
     */
    ServerTelemetryManager.prototype.getLastRequests = function () {
        var initialValue = new ServerTelemetryEntity();
        var lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
        return lastRequests || initialValue;
    };
    /**
     * Remove server telemetry cache entry
     */
    ServerTelemetryManager.prototype.clearTelemetryCache = function () {
        var lastRequests = this.getLastRequests();
        var numErrorsFlushed = ServerTelemetryManager.maxErrorsToSend(lastRequests);
        var errorCount = lastRequests.errors.length;
        if (numErrorsFlushed === errorCount) {
            // All errors were sent on last request, clear Telemetry cache
            this.cacheManager.removeItem(this.telemetryCacheKey);
        }
        else {
            // Partial data was flushed to server, construct a new telemetry cache item with errors that were not flushed
            var serverTelemEntity = new ServerTelemetryEntity();
            serverTelemEntity.failedRequests = lastRequests.failedRequests.slice(numErrorsFlushed * 2); // failedRequests contains 2 items for each error
            serverTelemEntity.errors = lastRequests.errors.slice(numErrorsFlushed);
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
        }
    };
    /**
     * Returns the maximum number of errors that can be flushed to the server in the next network request
     * @param serverTelemetryEntity
     */
    ServerTelemetryManager.maxErrorsToSend = function (serverTelemetryEntity) {
        var i;
        var maxErrors = 0;
        var dataSize = 0;
        var errorCount = serverTelemetryEntity.errors.length;
        for (i = 0; i < errorCount; i++) {
            // failedRequests parameter contains pairs of apiId and correlationId, multiply index by 2 to preserve pairs
            var apiId = serverTelemetryEntity.failedRequests[2 * i] || Constants.EMPTY_STRING;
            var correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || Constants.EMPTY_STRING;
            var errorCode = serverTelemetryEntity.errors[i] || Constants.EMPTY_STRING;
            // Count number of characters that would be added to header, each character is 1 byte. Add 3 at the end to account for separators
            dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
            if (dataSize < SERVER_TELEM_CONSTANTS.MAX_HEADER_BYTES) {
                // Adding this entry to the header would still keep header size below the limit
                maxErrors += 1;
            }
            else {
                break;
            }
        }
        return maxErrors;
    };
    return ServerTelemetryManager;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Constants
 */
var BrowserConstants = {
    // Interaction in progress cache value
    INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
    // Invalid grant error code
    INVALID_GRANT_ERROR: "invalid_grant",
    // Default popup window width
    POPUP_WIDTH: 483,
    // Default popup window height
    POPUP_HEIGHT: 600,
    // Default popup monitor poll interval in milliseconds
    POLL_INTERVAL_MS: 50,
    // msal-browser SKU
    MSAL_SKU: "msal.js.browser",
};
var BrowserCacheLocation;
(function (BrowserCacheLocation) {
    BrowserCacheLocation["LocalStorage"] = "localStorage";
    BrowserCacheLocation["SessionStorage"] = "sessionStorage";
    BrowserCacheLocation["MemoryStorage"] = "memoryStorage";
})(BrowserCacheLocation || (BrowserCacheLocation = {}));
/**
 * HTTP Request types supported by MSAL.
 */
var HTTP_REQUEST_TYPE;
(function (HTTP_REQUEST_TYPE) {
    HTTP_REQUEST_TYPE["GET"] = "GET";
    HTTP_REQUEST_TYPE["POST"] = "POST";
})(HTTP_REQUEST_TYPE || (HTTP_REQUEST_TYPE = {}));
/**
 * Temporary cache keys for MSAL, deleted after any request.
 */
var TemporaryCacheKeys;
(function (TemporaryCacheKeys) {
    TemporaryCacheKeys["AUTHORITY"] = "authority";
    TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireToken.account";
    TemporaryCacheKeys["SESSION_STATE"] = "session.state";
    TemporaryCacheKeys["REQUEST_STATE"] = "request.state";
    TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.id_token";
    TemporaryCacheKeys["ORIGIN_URI"] = "request.origin";
    TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
    TemporaryCacheKeys["URL_HASH"] = "urlHash";
    TemporaryCacheKeys["REQUEST_PARAMS"] = "request.params";
    TemporaryCacheKeys["SCOPES"] = "scopes";
    TemporaryCacheKeys["INTERACTION_STATUS_KEY"] = "interaction.status";
})(TemporaryCacheKeys || (TemporaryCacheKeys = {}));
/**
 * API Codes for Telemetry purposes.
 * Before adding a new code you must claim it in the MSAL Telemetry tracker as these number spaces are shared across all MSALs
 * 0-99 Silent Flow
 * 800-899 Auth Code Flow
 */
var ApiId;
(function (ApiId) {
    ApiId[ApiId["acquireTokenRedirect"] = 861] = "acquireTokenRedirect";
    ApiId[ApiId["acquireTokenPopup"] = 862] = "acquireTokenPopup";
    ApiId[ApiId["ssoSilent"] = 863] = "ssoSilent";
    ApiId[ApiId["acquireTokenSilent_authCode"] = 864] = "acquireTokenSilent_authCode";
    ApiId[ApiId["handleRedirectPromise"] = 865] = "handleRedirectPromise";
    ApiId[ApiId["acquireTokenSilent_silentFlow"] = 61] = "acquireTokenSilent_silentFlow";
})(ApiId || (ApiId = {}));
/*
 * Interaction type of the API - used for state and telemetry
 */
var InteractionType;
(function (InteractionType) {
    InteractionType["Redirect"] = "redirect";
    InteractionType["Popup"] = "popup";
    InteractionType["Silent"] = "silent";
})(InteractionType || (InteractionType = {}));
var DEFAULT_REQUEST = {
    scopes: [Constants.OPENID_SCOPE, Constants.PROFILE_SCOPE]
};
// JWK Key Format string (Type MUST be defined for window crypto APIs)
var KEY_FORMAT_JWK = "jwk";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Utility class for math specific functions in browser.
 */
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    /**
     * Decimal to Hex
     *
     * @param num
     */
    MathUtils.decimalToHex = function (num) {
        var hex = num.toString(16);
        while (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    return MathUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var GuidGenerator = /** @class */ (function () {
    function GuidGenerator(cryptoObj) {
        this.cryptoObj = cryptoObj;
    }
    /*
     * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
     * pseudo-random numbers.
     * The algorithm is as follows:
     *     Set the two most significant bits (bits 6 and 7) of the
     *        clock_seq_hi_and_reserved to zero and one, respectively.
     *     Set the four most significant bits (bits 12 through 15) of the
     *        time_hi_and_version field to the 4-bit version number from
     *        Section 4.1.3. Version4
     *     Set all the other bits to randomly (or pseudo-randomly) chosen
     *     values.
     * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
     * time-low               = 4hexOctet
     * time-mid               = 2hexOctet
     * time-high-and-version  = 2hexOctet
     * clock-seq-and-reserved = hexOctet:
     * clock-seq-low          = hexOctet
     * node                   = 6hexOctet
     * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
     * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
     * y values are 8, 9, A, B
     */
    GuidGenerator.prototype.generateGuid = function () {
        try {
            var buffer = new Uint8Array(16);
            this.cryptoObj.getRandomValues(buffer);
            // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
            buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
            buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
            // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
            buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
            buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
            return MathUtils.decimalToHex(buffer[0]) + MathUtils.decimalToHex(buffer[1])
                + MathUtils.decimalToHex(buffer[2]) + MathUtils.decimalToHex(buffer[3])
                + "-" + MathUtils.decimalToHex(buffer[4]) + MathUtils.decimalToHex(buffer[5])
                + "-" + MathUtils.decimalToHex(buffer[6]) + MathUtils.decimalToHex(buffer[7])
                + "-" + MathUtils.decimalToHex(buffer[8]) + MathUtils.decimalToHex(buffer[9])
                + "-" + MathUtils.decimalToHex(buffer[10]) + MathUtils.decimalToHex(buffer[11])
                + MathUtils.decimalToHex(buffer[12]) + MathUtils.decimalToHex(buffer[13])
                + MathUtils.decimalToHex(buffer[14]) + MathUtils.decimalToHex(buffer[15]);
        }
        catch (err) {
            var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
            var hex = "0123456789abcdef";
            var r = 0;
            var guidResponse = "";
            for (var i = 0; i < 36; i++) {
                if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                    // each x and y needs to be random
                    r = Math.random() * 16 | 0;
                }
                if (guidHolder[i] === "x") {
                    guidResponse += hex[r];
                }
                else if (guidHolder[i] === "y") {
                    // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                    r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                    r |= 0x8; // set pos 3 to 1 as 1???
                    guidResponse += hex[r];
                }
                else {
                    guidResponse += guidHolder[i];
                }
            }
            return guidResponse;
        }
    };
    /**
     * verifies if a string is  GUID
     * @param guid
     */
    GuidGenerator.isGuid = function (guid) {
        var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return regexGuid.test(guid);
    };
    return GuidGenerator;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Utility functions for strings in a browser. See here for implementation details:
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
 */
var BrowserStringUtils = /** @class */ (function () {
    function BrowserStringUtils() {
    }
    /**
     * Converts string to Uint8Array
     * @param sDOMStr
     */
    BrowserStringUtils.stringToUtf8Arr = function (sDOMStr) {
        var nChr;
        var nArrLen = 0;
        var nStrLen = sDOMStr.length;
        /* mapping... */
        for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
            nChr = sDOMStr.charCodeAt(nMapIdx);
            nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
        }
        var aBytes = new Uint8Array(nArrLen);
        /* transcription... */
        for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
            nChr = sDOMStr.charCodeAt(nChrIdx);
            if (nChr < 128) {
                /* one byte */
                aBytes[nIdx++] = nChr;
            }
            else if (nChr < 0x800) {
                /* two bytes */
                aBytes[nIdx++] = 192 + (nChr >>> 6);
                aBytes[nIdx++] = 128 + (nChr & 63);
            }
            else if (nChr < 0x10000) {
                /* three bytes */
                aBytes[nIdx++] = 224 + (nChr >>> 12);
                aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                aBytes[nIdx++] = 128 + (nChr & 63);
            }
            else if (nChr < 0x200000) {
                /* four bytes */
                aBytes[nIdx++] = 240 + (nChr >>> 18);
                aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                aBytes[nIdx++] = 128 + (nChr & 63);
            }
            else if (nChr < 0x4000000) {
                /* five bytes */
                aBytes[nIdx++] = 248 + (nChr >>> 24);
                aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                aBytes[nIdx++] = 128 + (nChr & 63);
            }
            else /* if (nChr <= 0x7fffffff) */ {
                /* six bytes */
                aBytes[nIdx++] = 252 + (nChr >>> 30);
                aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
                aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                aBytes[nIdx++] = 128 + (nChr & 63);
            }
        }
        return aBytes;
    };
    /**
     * Converst string to ArrayBuffer
     * @param dataString
     */
    BrowserStringUtils.stringToArrayBuffer = function (dataString) {
        var data = new ArrayBuffer(dataString.length);
        var dataView = new Uint8Array(data);
        for (var i = 0; i < dataString.length; i++) {
            dataView[i] = dataString.charCodeAt(i);
        }
        return data;
    };
    /**
     * Converts Uint8Array to a string
     * @param aBytes
     */
    BrowserStringUtils.utf8ArrToString = function (aBytes) {
        var sView = "";
        for (var nPart = void 0, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
            nPart = aBytes[nIdx];
            sView += String.fromCharCode(nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
                /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
                (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
                    (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                    : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
                        (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                        : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
                            (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                            : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
                                (nPart - 192 << 6) + aBytes[++nIdx] - 128
                                : /* nPart < 127 ? */ /* one byte */
                                    nPart);
        }
        return sView;
    };
    return BrowserStringUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class which exposes APIs to encode plaintext to base64 encoded string. See here for implementation details:
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
 */
var Base64Encode = /** @class */ (function () {
    function Base64Encode() {
    }
    /**
     * Returns URL Safe b64 encoded string from a plaintext string.
     * @param input
     */
    Base64Encode.prototype.urlEncode = function (input) {
        return encodeURIComponent(this.encode(input)
            .replace(/=/g, "")
            .replace(/\+/g, "-")
            .replace(/\//g, "_"));
    };
    /**
     * Returns URL Safe b64 encoded string from an int8Array.
     * @param inputArr
     */
    Base64Encode.prototype.urlEncodeArr = function (inputArr) {
        return this.base64EncArr(inputArr)
            .replace(/=/g, "")
            .replace(/\+/g, "-")
            .replace(/\//g, "_");
    };
    /**
     * Returns b64 encoded string from plaintext string.
     * @param input
     */
    Base64Encode.prototype.encode = function (input) {
        var inputUtf8Arr = BrowserStringUtils.stringToUtf8Arr(input);
        return this.base64EncArr(inputUtf8Arr);
    };
    /**
     * Base64 encode byte array
     * @param aBytes
     */
    Base64Encode.prototype.base64EncArr = function (aBytes) {
        var eqLen = (3 - (aBytes.length % 3)) % 3;
        var sB64Enc = "";
        for (var nMod3 = void 0, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
            nMod3 = nIdx % 3;
            /* Uncomment the following line in order to split the output in lines 76-character long: */
            /*
             *if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
             */
            nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
            if (nMod3 === 2 || aBytes.length - nIdx === 1) {
                sB64Enc += String.fromCharCode(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
                nUint24 = 0;
            }
        }
        return eqLen === 0 ? sB64Enc : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
    };
    /**
     * Base64 string to array encoding helper
     * @param nUint6
     */
    Base64Encode.prototype.uint6ToB64 = function (nUint6) {
        return nUint6 < 26 ?
            nUint6 + 65
            : nUint6 < 52 ?
                nUint6 + 71
                : nUint6 < 62 ?
                    nUint6 - 4
                    : nUint6 === 62 ?
                        43
                        : nUint6 === 63 ?
                            47
                            :
                                65;
    };
    return Base64Encode;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Class which exposes APIs to decode base64 strings to plaintext. See here for implementation details:
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
 */
var Base64Decode = /** @class */ (function () {
    function Base64Decode() {
    }
    /**
     * Returns a URL-safe plaintext decoded string from b64 encoded input.
     * @param input
     */
    Base64Decode.prototype.decode = function (input) {
        var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
        switch (encodedString.length % 4) {
            case 0:
                break;
            case 2:
                encodedString += "==";
                break;
            case 3:
                encodedString += "=";
                break;
            default:
                throw new Error("Invalid base64 string");
        }
        var inputUtf8Arr = this.base64DecToArr(encodedString);
        return BrowserStringUtils.utf8ArrToString(inputUtf8Arr);
    };
    /**
     * Decodes base64 into Uint8Array
     * @param base64String
     * @param nBlockSize
     */
    Base64Decode.prototype.base64DecToArr = function (base64String, nBlockSize) {
        var sB64Enc = base64String.replace(/[^A-Za-z0-9\+\/]/g, "");
        var nInLen = sB64Enc.length;
        var nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2;
        var aBytes = new Uint8Array(nOutLen);
        for (var nMod3 = void 0, nMod4 = void 0, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
            nMod4 = nInIdx & 3;
            nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
            if (nMod4 === 3 || nInLen - nInIdx === 1) {
                for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                    aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                }
                nUint24 = 0;
            }
        }
        return aBytes;
    };
    /**
     * Base64 string to array decoding helper
     * @param charNum
     */
    Base64Decode.prototype.b64ToUint6 = function (charNum) {
        return charNum > 64 && charNum < 91 ?
            charNum - 65
            : charNum > 96 && charNum < 123 ?
                charNum - 71
                : charNum > 47 && charNum < 58 ?
                    charNum + 4
                    : charNum === 43 ?
                        62
                        : charNum === 47 ?
                            63
                            :
                                0;
    };
    return Base64Decode;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
 */
var BrowserAuthErrorMessage = {
    pkceNotGenerated: {
        code: "pkce_not_created",
        desc: "The PKCE code challenge and verifier could not be generated."
    },
    cryptoDoesNotExist: {
        code: "crypto_nonexistent",
        desc: "The crypto object or function is not available."
    },
    httpMethodNotImplementedError: {
        code: "http_method_not_implemented",
        desc: "The HTTP method given has not been implemented in this library."
    },
    emptyNavigateUriError: {
        code: "empty_navigate_uri",
        desc: "Navigation URI is empty. Please check stack trace for more info."
    },
    hashEmptyError: {
        code: "hash_empty_error",
        desc: "Hash value cannot be processed because it is empty."
    },
    interactionInProgress: {
        code: "interaction_in_progress",
        desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API."
    },
    popUpWindowError: {
        code: "popup_window_error",
        desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
    },
    emptyWindowError: {
        code: "empty_window_error",
        desc: "window.open returned null or undefined window object."
    },
    userCancelledError: {
        code: "user_cancelled",
        desc: "User cancelled the flow."
    },
    monitorPopupTimeoutError: {
        code: "monitor_window_timeout",
        desc: "Token acquisition in popup failed due to timeout."
    },
    monitorIframeTimeoutError: {
        code: "monitor_window_timeout",
        desc: "Token acquisition in iframe failed due to timeout."
    },
    redirectInIframeError: {
        code: "redirect_in_iframe",
        desc: "Code flow is not supported inside an iframe. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
    },
    blockTokenRequestsInHiddenIframeError: {
        code: "block_iframe_reload",
        desc: "Request was blocked inside an iframe because MSAL detected an authentication response. Please ensure monitorWindowForHash was called."
    },
    iframeClosedPrematurelyError: {
        code: "iframe_closed_prematurely",
        desc: "The iframe being monitored was closed prematurely."
    },
    silentSSOInsufficientInfoError: {
        code: "silent_sso_error",
        desc: "Silent SSO could not be completed - insufficient information was provided. Please provide either a loginHint or sid."
    },
    silentPromptValueError: {
        code: "silent_prompt_value_error",
        desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none'."
    },
    tokenRequestCacheError: {
        code: "token_request_cache_error",
        desc: "The token request could not be fetched from the cache correctly."
    },
    invalidCacheType: {
        code: "invalid_cache_type",
        desc: "Invalid cache type"
    },
    notInBrowserEnvironment: {
        code: "non_browser_environment",
        desc: "Login and token requests are not supported in non-browser environments."
    }
};
/**
 * Browser library error class thrown by the MSAL.js library for SPAs
 */
var BrowserAuthError = /** @class */ (function (_super) {
    __extends(BrowserAuthError, _super);
    function BrowserAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        Object.setPrototypeOf(_this, BrowserAuthError.prototype);
        _this.name = "BrowserAuthError";
        return _this;
    }
    /**
     * Creates an error thrown when PKCE is not implemented.
     * @param errDetail
     */
    BrowserAuthError.createPkceNotGeneratedError = function (errDetail) {
        return new BrowserAuthError(BrowserAuthErrorMessage.pkceNotGenerated.code, BrowserAuthErrorMessage.pkceNotGenerated.desc + " Detail:" + errDetail);
    };
    /**
     * Creates an error thrown when the crypto object is unavailable.
     * @param errDetail
     */
    BrowserAuthError.createCryptoNotAvailableError = function (errDetail) {
        return new BrowserAuthError(BrowserAuthErrorMessage.cryptoDoesNotExist.code, BrowserAuthErrorMessage.cryptoDoesNotExist.desc + " Detail:" + errDetail);
    };
    /**
     * Creates an error thrown when an HTTP method hasn't been implemented by the browser class.
     * @param method
     */
    BrowserAuthError.createHttpMethodNotImplementedError = function (method) {
        return new BrowserAuthError(BrowserAuthErrorMessage.httpMethodNotImplementedError.code, BrowserAuthErrorMessage.httpMethodNotImplementedError.desc + " Given Method: " + method);
    };
    /**
     * Creates an error thrown when the navigation URI is empty.
     */
    BrowserAuthError.createEmptyNavigationUriError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.emptyNavigateUriError.code, BrowserAuthErrorMessage.emptyNavigateUriError.desc);
    };
    /**
     * Creates an error thrown when the hash string value is unexpectedly empty.
     * @param hashValue
     */
    BrowserAuthError.createEmptyHashError = function (hashValue) {
        return new BrowserAuthError(BrowserAuthErrorMessage.hashEmptyError.code, BrowserAuthErrorMessage.hashEmptyError.desc + " Given Url: " + hashValue);
    };
    /**
     * Creates an error thrown when a browser interaction (redirect or popup) is in progress.
     */
    BrowserAuthError.createInteractionInProgressError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.interactionInProgress.code, BrowserAuthErrorMessage.interactionInProgress.desc);
    };
    /**
     * Creates an error thrown when the popup window could not be opened.
     * @param errDetail
     */
    BrowserAuthError.createPopupWindowError = function (errDetail) {
        var errorMessage = BrowserAuthErrorMessage.popUpWindowError.desc;
        errorMessage = !StringUtils.isEmpty(errDetail) ? errorMessage + " Details: " + errDetail : errorMessage;
        return new BrowserAuthError(BrowserAuthErrorMessage.popUpWindowError.code, errorMessage);
    };
    /**
     * Creates an error thrown when window.open returns an empty window object.
     * @param errDetail
     */
    BrowserAuthError.createEmptyWindowCreatedError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.emptyWindowError.code, BrowserAuthErrorMessage.emptyWindowError.desc);
    };
    /**
     * Creates an error thrown when the user closes a popup.
     */
    BrowserAuthError.createUserCancelledError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.userCancelledError.code, BrowserAuthErrorMessage.userCancelledError.desc);
    };
    /**
     * Creates an error thrown when monitorPopupFromHash times out for a given popup.
     */
    BrowserAuthError.createMonitorPopupTimeoutError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.monitorPopupTimeoutError.code, BrowserAuthErrorMessage.monitorPopupTimeoutError.desc);
    };
    /**
     * Creates an error thrown when monitorIframeFromHash times out for a given iframe.
     */
    BrowserAuthError.createMonitorIframeTimeoutError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.monitorIframeTimeoutError.code, BrowserAuthErrorMessage.monitorIframeTimeoutError.desc);
    };
    /**
     * Creates an error thrown when navigateWindow is called inside an iframe.
     * @param windowParentCheck
     */
    BrowserAuthError.createRedirectInIframeError = function (windowParentCheck) {
        return new BrowserAuthError(BrowserAuthErrorMessage.redirectInIframeError.code, BrowserAuthErrorMessage.redirectInIframeError.desc + " (window.parent !== window) => " + windowParentCheck);
    };
    /**
     * Creates an error thrown when an auth reload is done inside an iframe.
     */
    BrowserAuthError.createBlockReloadInHiddenIframeError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.code, BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.desc);
    };
    /**
     * Creates an error thrown when an iframe is found to be closed before the timeout is reached.
     */
    BrowserAuthError.createIframeClosedPrematurelyError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.iframeClosedPrematurelyError.code, BrowserAuthErrorMessage.iframeClosedPrematurelyError.desc);
    };
    /**
     * Creates an error thrown when the login_hint, sid or account object is not provided in the ssoSilent API.
     */
    BrowserAuthError.createSilentSSOInsufficientInfoError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.silentSSOInsufficientInfoError.code, BrowserAuthErrorMessage.silentSSOInsufficientInfoError.desc);
    };
    /**
     * Creates an error thrown when a given prompt value is invalid for silent requests.
     */
    BrowserAuthError.createSilentPromptValueError = function (givenPrompt) {
        return new BrowserAuthError(BrowserAuthErrorMessage.silentPromptValueError.code, BrowserAuthErrorMessage.silentPromptValueError.desc + " Given value: " + givenPrompt);
    };
    /**
     * Creates an error thrown when the token request could not be retrieved from the cache
     * @param errDetail
     */
    BrowserAuthError.createTokenRequestCacheError = function (errDetail) {
        return new BrowserAuthError(BrowserAuthErrorMessage.tokenRequestCacheError.code, BrowserAuthErrorMessage.tokenRequestCacheError.desc + " Error Detail: " + errDetail);
    };
    /**
     * Creates an error thrown if cache type is invalid.
     */
    BrowserAuthError.createInvalidCacheTypeError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.invalidCacheType.code, "" + BrowserAuthErrorMessage.invalidCacheType.desc);
    };
    /**
     * Create an error thrown when login and token requests are made from a non-browser environment
     */
    BrowserAuthError.createNonBrowserEnvironmentError = function () {
        return new BrowserAuthError(BrowserAuthErrorMessage.notInBrowserEnvironment.code, BrowserAuthErrorMessage.notInBrowserEnvironment.desc);
    };
    return BrowserAuthError;
}(AuthError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// Constant byte array length
var RANDOM_BYTE_ARR_LENGTH = 32;
/**
 * Class which exposes APIs to generate PKCE codes and code verifiers.
 */
var PkceGenerator = /** @class */ (function () {
    function PkceGenerator(cryptoObj) {
        this.base64Encode = new Base64Encode();
        this.cryptoObj = cryptoObj;
    }
    /**
     * Generates PKCE Codes. See the RFC for more information: https://tools.ietf.org/html/rfc7636
     */
    PkceGenerator.prototype.generateCodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var codeVerifier, codeChallenge;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        codeVerifier = this.generateCodeVerifier();
                        return [4 /*yield*/, this.generateCodeChallengeFromVerifier(codeVerifier)];
                    case 1:
                        codeChallenge = _a.sent();
                        return [2 /*return*/, {
                                verifier: codeVerifier,
                                challenge: codeChallenge
                            }];
                }
            });
        });
    };
    /**
     * Generates a random 32 byte buffer and returns the base64
     * encoded string to be used as a PKCE Code Verifier
     */
    PkceGenerator.prototype.generateCodeVerifier = function () {
        try {
            // Generate random values as utf-8
            var buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
            this.cryptoObj.getRandomValues(buffer);
            // encode verifier as base64
            var pkceCodeVerifierB64 = this.base64Encode.urlEncodeArr(buffer);
            return pkceCodeVerifierB64;
        }
        catch (e) {
            throw BrowserAuthError.createPkceNotGeneratedError(e);
        }
    };
    /**
     * Creates a base64 encoded PKCE Code Challenge string from the
     * hash created from the PKCE Code Verifier supplied
     */
    PkceGenerator.prototype.generateCodeChallengeFromVerifier = function (pkceCodeVerifier) {
        return __awaiter(this, void 0, void 0, function () {
            var pkceHashedCodeVerifier, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.cryptoObj.sha256Digest(pkceCodeVerifier)];
                    case 1:
                        pkceHashedCodeVerifier = _a.sent();
                        // encode hash as base64
                        return [2 /*return*/, this.base64Encode.urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier))];
                    case 2:
                        e_1 = _a.sent();
                        throw BrowserAuthError.createPkceNotGeneratedError(e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PkceGenerator;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * See here for more info on RsaHashedKeyGenParams: https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedKeyGenParams
 */
// RSA KeyGen Algorithm
var PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
// SHA-256 hashing algorithm
var S256_HASH_ALG = "SHA-256";
// MOD length for PoP tokens
var MODULUS_LENGTH = 2048;
// Public Exponent
var PUBLIC_EXPONENT = new Uint8Array([0x01, 0x00, 0x01]);
/**
 * This class implements functions used by the browser library to perform cryptography operations such as
 * hashing and encoding. It also has helper functions to validate the availability of specific APIs.
 */
var BrowserCrypto = /** @class */ (function () {
    function BrowserCrypto() {
        if (!(this.hasCryptoAPI())) {
            throw BrowserAuthError.createCryptoNotAvailableError("Browser crypto or msCrypto object not available.");
        }
        this._keygenAlgorithmOptions = {
            name: PKCS1_V15_KEYGEN_ALG,
            hash: S256_HASH_ALG,
            modulusLength: MODULUS_LENGTH,
            publicExponent: PUBLIC_EXPONENT
        };
    }
    /**
     * Returns a sha-256 hash of the given dataString as an ArrayBuffer.
     * @param dataString
     */
    BrowserCrypto.prototype.sha256Digest = function (dataString) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = BrowserStringUtils.stringToUtf8Arr(dataString);
                return [2 /*return*/, this.hasIECrypto() ? this.getMSCryptoDigest(S256_HASH_ALG, data) : this.getSubtleCryptoDigest(S256_HASH_ALG, data)];
            });
        });
    };
    /**
     * Populates buffer with cryptographically random values.
     * @param dataBuffer
     */
    BrowserCrypto.prototype.getRandomValues = function (dataBuffer) {
        var cryptoObj = window["msCrypto"] || window.crypto;
        if (!cryptoObj.getRandomValues) {
            throw BrowserAuthError.createCryptoNotAvailableError("getRandomValues does not exist.");
        }
        cryptoObj.getRandomValues(dataBuffer);
    };
    /**
     * Generates a keypair based on current keygen algorithm config.
     * @param extractable
     * @param usages
     */
    BrowserCrypto.prototype.generateKeyPair = function (extractable, usages) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (this.hasIECrypto() ?
                        this.msCryptoGenerateKey(extractable, usages)
                        : window.crypto.subtle.generateKey(this._keygenAlgorithmOptions, extractable, usages))];
            });
        });
    };
    /**
     * Export key as Json Web Key (JWK)
     * @param key
     * @param format
     */
    BrowserCrypto.prototype.exportJwk = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.hasIECrypto() ? this.msCryptoExportJwk(key) : window.crypto.subtle.exportKey(KEY_FORMAT_JWK, key)];
            });
        });
    };
    /**
     * Imports key as Json Web Key (JWK), can set extractable and usages.
     * @param key
     * @param format
     * @param extractable
     * @param usages
     */
    BrowserCrypto.prototype.importJwk = function (key, extractable, usages) {
        return __awaiter(this, void 0, void 0, function () {
            var keyString, keyBuffer;
            return __generator(this, function (_a) {
                keyString = BrowserCrypto.getJwkString(key);
                keyBuffer = BrowserStringUtils.stringToArrayBuffer(keyString);
                return [2 /*return*/, this.hasIECrypto() ?
                        this.msCryptoImportKey(keyBuffer, extractable, usages)
                        : window.crypto.subtle.importKey(KEY_FORMAT_JWK, key, this._keygenAlgorithmOptions, extractable, usages)];
            });
        });
    };
    /**
     * Signs given data with given key
     * @param key
     * @param data
     */
    BrowserCrypto.prototype.sign = function (key, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.hasIECrypto() ?
                        this.msCryptoSign(key, data)
                        : window.crypto.subtle.sign(this._keygenAlgorithmOptions, key, data)];
            });
        });
    };
    /**
     * Check whether IE crypto or other browser cryptography is available.
     */
    BrowserCrypto.prototype.hasCryptoAPI = function () {
        return this.hasIECrypto() || this.hasBrowserCrypto();
    };
    /**
     * Checks whether IE crypto (AKA msCrypto) is available.
     */
    BrowserCrypto.prototype.hasIECrypto = function () {
        return "msCrypto" in window;
    };
    /**
     * Check whether browser crypto is available.
     */
    BrowserCrypto.prototype.hasBrowserCrypto = function () {
        return "crypto" in window;
    };
    /**
     * Helper function for SHA digest.
     * @param algorithm
     * @param data
     */
    BrowserCrypto.prototype.getSubtleCryptoDigest = function (algorithm, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, window.crypto.subtle.digest(algorithm, data)];
            });
        });
    };
    /**
     * IE Helper function for SHA digest.
     * @param algorithm
     * @param data
     */
    BrowserCrypto.prototype.getMSCryptoDigest = function (algorithm, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var digestOperation = window["msCrypto"].subtle.digest(algorithm, data.buffer);
                        digestOperation.addEventListener("complete", function (e) {
                            resolve(e.target.result);
                        });
                        digestOperation.addEventListener("error", function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * IE Helper function for generating a keypair
     * @param extractable
     * @param usages
     */
    BrowserCrypto.prototype.msCryptoGenerateKey = function (extractable, usages) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var msGenerateKey = window["msCrypto"].subtle.generateKey(_this._keygenAlgorithmOptions, extractable, usages);
                        msGenerateKey.addEventListener("complete", function (e) {
                            resolve(e.target.result);
                        });
                        msGenerateKey.addEventListener("error", function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * IE Helper function for exportKey
     * @param key
     * @param format
     */
    BrowserCrypto.prototype.msCryptoExportJwk = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var msExportKey = window["msCrypto"].subtle.exportKey(KEY_FORMAT_JWK, key);
                        msExportKey.addEventListener("complete", function (e) {
                            var resultBuffer = e.target.result;
                            var resultString = BrowserStringUtils.utf8ArrToString(new Uint8Array(resultBuffer))
                                .replace(/\r/g, "")
                                .replace(/\n/g, "")
                                .replace(/\t/g, "")
                                .split(" ").join("")
                                .replace("\u0000", "");
                            try {
                                resolve(JSON.parse(resultString));
                            }
                            catch (e) {
                                reject(e);
                            }
                        });
                        msExportKey.addEventListener("error", function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * IE Helper function for importKey
     * @param key
     * @param format
     * @param extractable
     * @param usages
     */
    BrowserCrypto.prototype.msCryptoImportKey = function (keyBuffer, extractable, usages) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var msImportKey = window["msCrypto"].subtle.importKey(KEY_FORMAT_JWK, keyBuffer, _this._keygenAlgorithmOptions, extractable, usages);
                        msImportKey.addEventListener("complete", function (e) {
                            resolve(e.target.result);
                        });
                        msImportKey.addEventListener("error", function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * IE Helper function for sign JWT
     * @param key
     * @param data
     */
    BrowserCrypto.prototype.msCryptoSign = function (key, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var msSign = window["msCrypto"].subtle.sign(_this._keygenAlgorithmOptions, key, data);
                        msSign.addEventListener("complete", function (e) {
                            resolve(e.target.result);
                        });
                        msSign.addEventListener("error", function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * Returns stringified jwk.
     * @param jwk
     */
    BrowserCrypto.getJwkString = function (jwk) {
        return JSON.stringify(jwk, Object.keys(jwk).sort());
    };
    return BrowserCrypto;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Storage wrapper for IndexedDB storage in browsers: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */
var DatabaseStorage = /** @class */ (function () {
    function DatabaseStorage(dbName, tableName, version) {
        this.dbName = dbName;
        this.tableName = tableName;
        this.version = version;
        this.dbOpen = false;
    }
    /**
     * Opens IndexedDB instance.
     */
    DatabaseStorage.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        // TODO: Add timeouts?
                        var openDB = window.indexedDB.open(_this.dbName, _this.version);
                        openDB.addEventListener("upgradeneeded", function (e) {
                            e.target.result.createObjectStore(_this.tableName);
                        });
                        openDB.addEventListener("success", function (e) {
                            _this.db = e.target.result;
                            _this.dbOpen = true;
                            resolve();
                        });
                        openDB.addEventListener("error", function (error) { return reject(error); });
                    })];
            });
        });
    };
    /**
     * Retrieves item from IndexedDB instance.
     * @param key
     */
    DatabaseStorage.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.dbOpen) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.open()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            // TODO: Add timeouts?
                            var transaction = _this.db.transaction([_this.tableName], "readonly");
                            var objectStore = transaction.objectStore(_this.tableName);
                            var dbGet = objectStore.get(key);
                            dbGet.addEventListener("success", function (e) { return resolve(e.target.result); });
                            dbGet.addEventListener("error", function (e) { return reject(e); });
                        })];
                }
            });
        });
    };
    /**
     * Adds item to IndexedDB under given key
     * @param key
     * @param payload
     */
    DatabaseStorage.prototype.put = function (key, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.dbOpen) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.open()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            // TODO: Add timeouts?
                            var transaction = _this.db.transaction([_this.tableName], "readwrite");
                            var objectStore = transaction.objectStore(_this.tableName);
                            var dbPut = objectStore.put(payload, key);
                            dbPut.addEventListener("success", function (e) { return resolve(e.target.result); });
                            dbPut.addEventListener("error", function (e) { return reject(e); });
                        })];
                }
            });
        });
    };
    return DatabaseStorage;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements MSAL's crypto interface, which allows it to perform base64 encoding and decoding, generating cryptographically random GUIDs and
 * implementing Proof Key for Code Exchange specs for the OAuth Authorization Code Flow using PKCE (rfc here: https://tools.ietf.org/html/rfc7636).
 */
var CryptoOps = /** @class */ (function () {
    function CryptoOps() {
        // Browser crypto needs to be validated first before any other classes can be set.
        this.browserCrypto = new BrowserCrypto();
        this.b64Encode = new Base64Encode();
        this.b64Decode = new Base64Decode();
        this.guidGenerator = new GuidGenerator(this.browserCrypto);
        this.pkceGenerator = new PkceGenerator(this.browserCrypto);
        this.cache = new DatabaseStorage(CryptoOps.DB_NAME, CryptoOps.TABLE_NAME, CryptoOps.DB_VERSION);
    }
    /**
     * Creates a new random GUID - used to populate state and nonce.
     * @returns string (GUID)
     */
    CryptoOps.prototype.createNewGuid = function () {
        return this.guidGenerator.generateGuid();
    };
    /**
     * Encodes input string to base64.
     * @param input
     */
    CryptoOps.prototype.base64Encode = function (input) {
        return this.b64Encode.encode(input);
    };
    /**
     * Decodes input string from base64.
     * @param input
     */
    CryptoOps.prototype.base64Decode = function (input) {
        return this.b64Decode.decode(input);
    };
    /**
     * Generates PKCE codes used in Authorization Code Flow.
     */
    CryptoOps.prototype.generatePkceCodes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.pkceGenerator.generateCodes()];
            });
        });
    };
    /**
     * Generates a keypair, stores it and returns a thumbprint
     * @param resourceRequestMethod
     * @param resourceRequestUri
     */
    CryptoOps.prototype.getPublicKeyThumbprint = function (resourceRequestMethod, resourceRequestUri) {
        return __awaiter(this, void 0, void 0, function () {
            var keyPair, publicKeyJwk, pubKeyThumprintObj, publicJwkString, publicJwkBuffer, publicJwkHash, privateKeyJwk, unextractablePrivateKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browserCrypto.generateKeyPair(CryptoOps.EXTRACTABLE, CryptoOps.POP_KEY_USAGES)];
                    case 1:
                        keyPair = _a.sent();
                        return [4 /*yield*/, this.browserCrypto.exportJwk(keyPair.publicKey)];
                    case 2:
                        publicKeyJwk = _a.sent();
                        pubKeyThumprintObj = {
                            e: publicKeyJwk.e,
                            kty: publicKeyJwk.kty,
                            n: publicKeyJwk.n
                        };
                        publicJwkString = BrowserCrypto.getJwkString(pubKeyThumprintObj);
                        return [4 /*yield*/, this.browserCrypto.sha256Digest(publicJwkString)];
                    case 3:
                        publicJwkBuffer = _a.sent();
                        publicJwkHash = this.b64Encode.urlEncodeArr(new Uint8Array(publicJwkBuffer));
                        return [4 /*yield*/, this.browserCrypto.exportJwk(keyPair.privateKey)];
                    case 4:
                        privateKeyJwk = _a.sent();
                        return [4 /*yield*/, this.browserCrypto.importJwk(privateKeyJwk, false, ["sign"])];
                    case 5:
                        unextractablePrivateKey = _a.sent();
                        // Store Keypair data in keystore
                        this.cache.put(publicJwkHash, {
                            privateKey: unextractablePrivateKey,
                            publicKey: keyPair.publicKey,
                            requestMethod: resourceRequestMethod,
                            requestUri: resourceRequestUri
                        });
                        return [2 /*return*/, publicJwkHash];
                }
            });
        });
    };
    /**
     * Signs the given object as a jwt payload with private key retrieved by given kid.
     * @param payload
     * @param kid
     */
    CryptoOps.prototype.signJwt = function (payload, kid) {
        return __awaiter(this, void 0, void 0, function () {
            var cachedKeyPair, publicKeyJwk, publicKeyJwkString, header, encodedHeader, encodedPayload, tokenString, tokenBuffer, signatureBuffer, encodedSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.get(kid)];
                    case 1:
                        cachedKeyPair = _a.sent();
                        return [4 /*yield*/, this.browserCrypto.exportJwk(cachedKeyPair.publicKey)];
                    case 2:
                        publicKeyJwk = _a.sent();
                        publicKeyJwkString = BrowserCrypto.getJwkString(publicKeyJwk);
                        header = {
                            alg: publicKeyJwk.alg,
                            type: KEY_FORMAT_JWK
                        };
                        encodedHeader = this.b64Encode.urlEncode(JSON.stringify(header));
                        // Generate payload
                        payload.cnf = {
                            jwk: JSON.parse(publicKeyJwkString)
                        };
                        encodedPayload = this.b64Encode.urlEncode(JSON.stringify(payload));
                        tokenString = encodedHeader + "." + encodedPayload;
                        tokenBuffer = BrowserStringUtils.stringToArrayBuffer(tokenString);
                        return [4 /*yield*/, this.browserCrypto.sign(cachedKeyPair.privateKey, tokenBuffer)];
                    case 3:
                        signatureBuffer = _a.sent();
                        encodedSignature = this.b64Encode.urlEncodeArr(new Uint8Array(signatureBuffer));
                        return [2 /*return*/, tokenString + "." + encodedSignature];
                }
            });
        });
    };
    CryptoOps.POP_KEY_USAGES = ["sign", "verify"];
    CryptoOps.EXTRACTABLE = true;
    CryptoOps.DB_VERSION = 1;
    CryptoOps.DB_NAME = "msal.db";
    CryptoOps.TABLE_NAME = CryptoOps.DB_NAME + ".keys";
    return CryptoOps;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
 */
var BrowserConfigurationAuthErrorMessage = {
    redirectUriNotSet: {
        code: "redirect_uri_empty",
        desc: "A redirect URI is required for all calls, and none has been set."
    },
    postLogoutUriNotSet: {
        code: "post_logout_uri_empty",
        desc: "A post logout redirect has not been set."
    },
    storageNotSupportedError: {
        code: "storage_not_supported",
        desc: "Given storage configuration option was not supported."
    },
    noRedirectCallbacksSet: {
        code: "no_redirect_callbacks",
        desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    invalidCallbackObject: {
        code: "invalid_callback_object",
        desc: "The object passed for the callback was invalid. " +
            "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
    },
    stubPcaInstanceCalled: {
        code: "stubbed_public_client_application_called",
        desc: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider."
    },
    inMemRedirectUnavailable: {
        code: "in_mem_redirect_unavailable",
        desc: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
    }
};
/**
 * Browser library error class thrown by the MSAL.js library for SPAs
 */
var BrowserConfigurationAuthError = /** @class */ (function (_super) {
    __extends(BrowserConfigurationAuthError, _super);
    function BrowserConfigurationAuthError(errorCode, errorMessage) {
        var _this = _super.call(this, errorCode, errorMessage) || this;
        _this.name = "BrowserConfigurationAuthError";
        Object.setPrototypeOf(_this, BrowserConfigurationAuthError.prototype);
        return _this;
    }
    /**
     * Creates an error thrown when the redirect uri is empty (not set by caller)
     */
    BrowserConfigurationAuthError.createRedirectUriEmptyError = function () {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.redirectUriNotSet.code, BrowserConfigurationAuthErrorMessage.redirectUriNotSet.desc);
    };
    /**
     * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
     */
    BrowserConfigurationAuthError.createPostLogoutRedirectUriEmptyError = function () {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.code, BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.desc);
    };
    /**
     * Creates error thrown when given storage location is not supported.
     * @param givenStorageLocation
     */
    BrowserConfigurationAuthError.createStorageNotSupportedError = function (givenStorageLocation) {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc + " Given Location: " + givenStorageLocation);
    };
    /**
     * Creates error thrown when callback object is invalid.
     * @param callbackObject
     */
    BrowserConfigurationAuthError.createInvalidCallbackObjectError = function (callbackObject) {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.invalidCallbackObject.code, BrowserConfigurationAuthErrorMessage.invalidCallbackObject.desc + " Given value for callback function: " + callbackObject);
    };
    /**
     * Creates error thrown when redirect callbacks are not set before calling loginRedirect() or acquireTokenRedirect().
     */
    BrowserConfigurationAuthError.createRedirectCallbacksNotSetError = function () {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.code, BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.desc);
    };
    /**
     * Creates error thrown when the stub instance of PublicClientApplication is called.
     */
    BrowserConfigurationAuthError.createStubPcaInstanceCalledError = function () {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.code, BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.desc);
    };
    /*
     * Create an error thrown when in-memory storage is used and storeAuthStateInCookie=false.
     */
    BrowserConfigurationAuthError.createInMemoryRedirectUnavailableError = function () {
        return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.code, BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.desc);
    };
    return BrowserConfigurationAuthError;
}(AuthError));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var BrowserStorage = /** @class */ (function () {
    function BrowserStorage(cacheLocation) {
        this.validateWindowStorage(cacheLocation);
        this.cacheLocation = cacheLocation;
    }
    Object.defineProperty(BrowserStorage.prototype, "windowStorage", {
        get: function () {
            if (!this._windowStorage) {
                this._windowStorage = window[this.cacheLocation];
            }
            return this._windowStorage;
        },
        enumerable: true,
        configurable: true
    });
    BrowserStorage.prototype.validateWindowStorage = function (cacheLocation) {
        if (cacheLocation !== BrowserCacheLocation.LocalStorage && cacheLocation !== BrowserCacheLocation.SessionStorage) {
            throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
        }
        var storageSupported = !!window[cacheLocation];
        if (!storageSupported) {
            throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
        }
    };
    BrowserStorage.prototype.getItem = function (key) {
        return this.windowStorage.getItem(key);
    };
    BrowserStorage.prototype.setItem = function (key, value) {
        this.windowStorage.setItem(key, value);
    };
    BrowserStorage.prototype.removeItem = function (key) {
        this.windowStorage.removeItem(key);
    };
    BrowserStorage.prototype.getKeys = function () {
        return Object.keys(this.windowStorage);
    };
    BrowserStorage.prototype.containsKey = function (key) {
        return this.windowStorage.hasOwnProperty(key);
    };
    return BrowserStorage;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage() {
        this.cache = new Map();
    }
    MemoryStorage.prototype.getItem = function (key) {
        return this.cache.get(key) || null;
    };
    MemoryStorage.prototype.setItem = function (key, value) {
        this.cache.set(key, value);
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this.cache.delete(key);
    };
    MemoryStorage.prototype.getKeys = function () {
        var cacheKeys = [];
        this.cache.forEach(function (value, key) {
            cacheKeys.push(key);
        });
        return cacheKeys;
    };
    MemoryStorage.prototype.containsKey = function (key) {
        return this.cache.has(key);
    };
    return MemoryStorage;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var BrowserProtocolUtils = /** @class */ (function () {
    function BrowserProtocolUtils() {
    }
    /**
     * Extracts the BrowserStateObject from the state string.
     * @param browserCrypto
     * @param state
     */
    BrowserProtocolUtils.extractBrowserRequestState = function (browserCrypto, state) {
        if (StringUtils.isEmpty(state)) {
            return null;
        }
        try {
            var requestStateObj = ProtocolUtils.parseRequestState(browserCrypto, state);
            return requestStateObj.libraryState.meta;
        }
        catch (e) {
            throw ClientAuthError.createInvalidStateError(state, e);
        }
    };
    /**
     * Parses properties of server response from url hash
     * @param locationHash Hash from url
     */
    BrowserProtocolUtils.parseServerResponseFromHash = function (locationHash) {
        if (!locationHash) {
            return {};
        }
        var hashUrlString = new UrlString(locationHash);
        return UrlString.getDeserializedHash(hashUrlString.getHash());
    };
    return BrowserProtocolUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements the cache storage interface for MSAL through browser local or session storage.
 * Cookies are only used if storeAuthStateInCookie is true, and are only used for
 * parameters such as state and nonce, generally.
 */
var BrowserCacheManager = /** @class */ (function (_super) {
    __extends(BrowserCacheManager, _super);
    function BrowserCacheManager(clientId, cacheConfig, cryptoImpl, logger) {
        var _this = _super.call(this, clientId, cryptoImpl) || this;
        // Cookie life calculation (hours * minutes * seconds * ms)
        _this.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1000;
        _this.cacheConfig = cacheConfig;
        _this.logger = logger;
        _this.browserStorage = _this.setupBrowserStorage(cacheConfig.cacheLocation);
        // Migrate any cache entries from older versions of MSAL.
        _this.migrateCacheEntries();
        return _this;
    }
    /**
     * Returns a window storage class implementing the IWindowStorage interface that corresponds to the configured cacheLocation.
     * @param cacheLocation
     */
    BrowserCacheManager.prototype.setupBrowserStorage = function (cacheLocation) {
        switch (cacheLocation) {
            case BrowserCacheLocation.LocalStorage:
            case BrowserCacheLocation.SessionStorage:
                try {
                    return new BrowserStorage(cacheLocation);
                }
                catch (e) {
                    this.logger.verbose(e);
                    this.cacheConfig.cacheLocation = BrowserCacheLocation.MemoryStorage;
                    return new MemoryStorage();
                }
            case BrowserCacheLocation.MemoryStorage:
            default:
                return new MemoryStorage();
        }
    };
    /**
     * Migrate all old cache entries to new schema. No rollback supported.
     * @param storeAuthStateInCookie
     */
    BrowserCacheManager.prototype.migrateCacheEntries = function () {
        var _this = this;
        var idTokenKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ID_TOKEN;
        var clientInfoKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.CLIENT_INFO;
        var errorKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR;
        var errorDescKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR_DESC;
        var idTokenValue = this.browserStorage.getItem(idTokenKey);
        var clientInfoValue = this.browserStorage.getItem(clientInfoKey);
        var errorValue = this.browserStorage.getItem(errorKey);
        var errorDescValue = this.browserStorage.getItem(errorDescKey);
        var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
        var keysToMigrate = [PersistentCacheKeys.ID_TOKEN, PersistentCacheKeys.CLIENT_INFO, PersistentCacheKeys.ERROR, PersistentCacheKeys.ERROR_DESC];
        keysToMigrate.forEach(function (cacheKey, index) { return _this.migrateCacheEntry(cacheKey, values[index]); });
    };
    /**
     * Utility function to help with migration.
     * @param newKey
     * @param value
     * @param storeAuthStateInCookie
     */
    BrowserCacheManager.prototype.migrateCacheEntry = function (newKey, value) {
        if (value) {
            this.setTemporaryCache(newKey, value, true);
        }
    };
    /**
     * Parses passed value as JSON object, JSON.parse() will throw an error.
     * @param input
     */
    BrowserCacheManager.prototype.validateAndParseJson = function (jsonValue) {
        try {
            var parsedJson = JSON.parse(jsonValue);
            /**
             * There are edge cases in which JSON.parse will successfully parse a non-valid JSON object
             * (e.g. JSON.parse will parse an escaped string into an unescaped string), so adding a type check
             * of the parsed value is necessary in order to be certain that the string represents a valid JSON object.
             *
             */
            return (parsedJson && typeof parsedJson === "object") ? parsedJson : null;
        }
        catch (error) {
            return null;
        }
    };
    /**
     * fetches the entry from the browser storage based off the key
     * @param key
     */
    BrowserCacheManager.prototype.getItem = function (key) {
        return this.browserStorage.getItem(key);
    };
    /**
     * sets the entry in the browser storage
     * @param key
     * @param value
     */
    BrowserCacheManager.prototype.setItem = function (key, value) {
        this.browserStorage.setItem(key, value);
    };
    /**
     * fetch the account entity from the platform cache
     * @param accountKey
     */
    BrowserCacheManager.prototype.getAccount = function (accountKey) {
        var account = this.getItem(accountKey);
        if (StringUtils.isEmpty(account)) {
            return null;
        }
        var parsedAccount = this.validateAndParseJson(account);
        var accountEntity = CacheManager.toObject(new AccountEntity(), parsedAccount);
        if (AccountEntity.isAccountEntity(accountEntity)) {
            return accountEntity;
        }
        return null;
    };
    /**
     * set account entity in the platform cache
     * @param key
     * @param value
     */
    BrowserCacheManager.prototype.setAccount = function (account) {
        var key = account.generateAccountKey();
        this.setItem(key, JSON.stringify(account));
    };
    /**
     * generates idToken entity from a string
     * @param idTokenKey
     */
    BrowserCacheManager.prototype.getIdTokenCredential = function (idTokenKey) {
        var value = this.getItem(idTokenKey);
        if (StringUtils.isEmpty(value)) {
            return null;
        }
        var parsedIdToken = this.validateAndParseJson(value);
        var idToken = CacheManager.toObject(new IdTokenEntity(), parsedIdToken);
        if (IdTokenEntity.isIdTokenEntity(idToken)) {
            return idToken;
        }
        return null;
    };
    /**
     * set IdToken credential to the platform cache
     * @param idToken
     */
    BrowserCacheManager.prototype.setIdTokenCredential = function (idToken) {
        var idTokenKey = idToken.generateCredentialKey();
        this.setItem(idTokenKey, JSON.stringify(idToken));
    };
    /**
     * generates accessToken entity from a string
     * @param key
     */
    BrowserCacheManager.prototype.getAccessTokenCredential = function (accessTokenKey) {
        var value = this.getItem(accessTokenKey);
        if (StringUtils.isEmpty(value)) {
            return null;
        }
        var parsedAccessToken = this.validateAndParseJson(value);
        var accessToken = CacheManager.toObject(new AccessTokenEntity(), parsedAccessToken);
        if (AccessTokenEntity.isAccessTokenEntity(accessToken)) {
            return accessToken;
        }
        return null;
    };
    /**
     * set accessToken credential to the platform cache
     * @param accessToken
     */
    BrowserCacheManager.prototype.setAccessTokenCredential = function (accessToken) {
        var accessTokenKey = accessToken.generateCredentialKey();
        this.setItem(accessTokenKey, JSON.stringify(accessToken));
    };
    /**
     * generates refreshToken entity from a string
     * @param refreshTokenKey
     */
    BrowserCacheManager.prototype.getRefreshTokenCredential = function (refreshTokenKey) {
        var value = this.getItem(refreshTokenKey);
        if (StringUtils.isEmpty(value)) {
            return null;
        }
        var parsedRefreshToken = this.validateAndParseJson(value);
        var refreshToken = CacheManager.toObject(new RefreshTokenEntity(), parsedRefreshToken);
        if (RefreshTokenEntity.isRefreshTokenEntity(refreshToken)) {
            return refreshToken;
        }
        return null;
    };
    /**
     * set refreshToken credential to the platform cache
     * @param refreshToken
     */
    BrowserCacheManager.prototype.setRefreshTokenCredential = function (refreshToken) {
        var refreshTokenKey = refreshToken.generateCredentialKey();
        this.setItem(refreshTokenKey, JSON.stringify(refreshToken));
    };
    /**
     * fetch appMetadata entity from the platform cache
     * @param appMetadataKey
     */
    BrowserCacheManager.prototype.getAppMetadata = function (appMetadataKey) {
        var value = this.getItem(appMetadataKey);
        if (StringUtils.isEmpty(value)) {
            return null;
        }
        var parsedMetadata = this.validateAndParseJson(value);
        var appMetadata = CacheManager.toObject(new AppMetadataEntity(), parsedMetadata);
        if (AppMetadataEntity.isAppMetadataEntity(appMetadataKey, appMetadata)) {
            return appMetadata;
        }
        return null;
    };
    /**
     * set appMetadata entity to the platform cache
     * @param appMetadata
     */
    BrowserCacheManager.prototype.setAppMetadata = function (appMetadata) {
        var appMetadataKey = appMetadata.generateAppMetadataKey();
        this.setItem(appMetadataKey, JSON.stringify(appMetadata));
    };
    /**
     * fetch server telemetry entity from the platform cache
     * @param serverTelemetryKey
     */
    BrowserCacheManager.prototype.getServerTelemetry = function (serverTelemetryKey) {
        var value = this.getItem(serverTelemetryKey);
        if (StringUtils.isEmpty(value)) {
            return null;
        }
        var parsedMetadata = this.validateAndParseJson(value);
        var serverTelemetryEntity = CacheManager.toObject(new ServerTelemetryEntity(), parsedMetadata);
        if (ServerTelemetryEntity.isServerTelemetryEntity(serverTelemetryKey, serverTelemetryEntity)) {
            return serverTelemetryEntity;
        }
        return null;
    };
    /**
     * set server telemetry entity to the platform cache
     * @param serverTelemetryKey
     * @param serverTelemetry
     */
    BrowserCacheManager.prototype.setServerTelemetry = function (serverTelemetryKey, serverTelemetry) {
        this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry));
    };
    /**
     * fetch throttling entity from the platform cache
     * @param throttlingCacheKey
     */
    BrowserCacheManager.prototype.getThrottlingCache = function (throttlingCacheKey) {
        var value = this.getItem(throttlingCacheKey);
        if (StringUtils.isEmpty(value)) {
            return null;
        }
        var parsedThrottlingCache = this.validateAndParseJson(value);
        var throttlingCache = CacheManager.toObject(new ThrottlingEntity(), parsedThrottlingCache);
        if (ThrottlingEntity.isThrottlingEntity(throttlingCacheKey, throttlingCache)) {
            return throttlingCache;
        }
        return null;
    };
    /**
     * set throttling entity to the platform cache
     * @param throttlingCacheKey
     * @param throttlingCache
     */
    BrowserCacheManager.prototype.setThrottlingCache = function (throttlingCacheKey, throttlingCache) {
        this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache));
    };
    /**
     * Gets cache item with given key.
     * Will retrieve frm cookies if storeAuthStateInCookie is set to true.
     * @param key
     */
    BrowserCacheManager.prototype.getTemporaryCache = function (cacheKey, generateKey) {
        var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
        if (this.cacheConfig.storeAuthStateInCookie) {
            var itemCookie = this.getItemCookie(key);
            if (itemCookie) {
                return itemCookie;
            }
        }
        var value = this.getItem(key);
        if (StringUtils.isEmpty(value)) {
            return null;
        }
        return value;
    };
    /**
     * Sets the cache item with the key and value given.
     * Stores in cookie if storeAuthStateInCookie is set to true.
     * This can cause cookie overflow if used incorrectly.
     * @param key
     * @param value
     */
    BrowserCacheManager.prototype.setTemporaryCache = function (cacheKey, value, generateKey) {
        var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
        this.setItem(key, value);
        if (this.cacheConfig.storeAuthStateInCookie) {
            this.setItemCookie(key, value);
        }
    };
    /**
     * Removes the cache item with the given key.
     * Will also clear the cookie item if storeAuthStateInCookie is set to true.
     * @param key
     */
    BrowserCacheManager.prototype.removeItem = function (key) {
        this.browserStorage.removeItem(key);
        if (this.cacheConfig.storeAuthStateInCookie) {
            this.clearItemCookie(key);
        }
        return true;
    };
    /**
     * Checks whether key is in cache.
     * @param key
     */
    BrowserCacheManager.prototype.containsKey = function (key) {
        return this.browserStorage.containsKey(key);
    };
    /**
     * Gets all keys in window.
     */
    BrowserCacheManager.prototype.getKeys = function () {
        return this.browserStorage.getKeys();
    };
    /**
     * Clears all cache entries created by MSAL (except tokens).
     */
    BrowserCacheManager.prototype.clear = function () {
        var _this = this;
        this.removeAllAccounts();
        this.removeAppMetadata();
        this.browserStorage.getKeys().forEach(function (cacheKey) {
            // Check if key contains msal prefix; For now, we are clearing all the cache items created by MSAL.js
            if (_this.browserStorage.containsKey(cacheKey) && ((cacheKey.indexOf(Constants.CACHE_PREFIX) !== -1) || (cacheKey.indexOf(_this.clientId) !== -1))) {
                _this.removeItem(cacheKey);
            }
        });
    };
    /**
     * Add value to cookies
     * @param cookieName
     * @param cookieValue
     * @param expires
     */
    BrowserCacheManager.prototype.setItemCookie = function (cookieName, cookieValue, expires) {
        var cookieStr = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";path=/;";
        if (expires) {
            var expireTime = this.getCookieExpirationTime(expires);
            cookieStr += "expires=" + expireTime + ";";
        }
        document.cookie = cookieStr;
    };
    /**
     * Get one item by key from cookies
     * @param cookieName
     */
    BrowserCacheManager.prototype.getItemCookie = function (cookieName) {
        var name = encodeURIComponent(cookieName) + "=";
        var cookieList = document.cookie.split(";");
        for (var i = 0; i < cookieList.length; i++) {
            var cookie = cookieList[i];
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return decodeURIComponent(cookie.substring(name.length, cookie.length));
            }
        }
        return "";
    };
    /**
     * Clear an item in the cookies by key
     * @param cookieName
     */
    BrowserCacheManager.prototype.clearItemCookie = function (cookieName) {
        this.setItemCookie(cookieName, "", -1);
    };
    /**
     * Clear all msal cookies
     */
    BrowserCacheManager.prototype.clearMsalCookie = function (stateString) {
        var nonceKey = stateString ? this.generateNonceKey(stateString) : this.generateStateKey(TemporaryCacheKeys.NONCE_IDTOKEN);
        this.clearItemCookie(this.generateStateKey(stateString));
        this.clearItemCookie(nonceKey);
        this.clearItemCookie(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
    };
    /**
     * Get cookie expiration time
     * @param cookieLifeDays
     */
    BrowserCacheManager.prototype.getCookieExpirationTime = function (cookieLifeDays) {
        var today = new Date();
        var expr = new Date(today.getTime() + cookieLifeDays * this.COOKIE_LIFE_MULTIPLIER);
        return expr.toUTCString();
    };
    /**
     * Gets the cache object referenced by the browser
     */
    BrowserCacheManager.prototype.getCache = function () {
        return this.browserStorage;
    };
    /**
     * interface compat, we cannot overwrite browser cache; Functionality is supported by individual entities in browser
     */
    BrowserCacheManager.prototype.setCache = function () {
        // sets nothing
    };
    /**
     * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
     * @param key
     * @param addInstanceId
     */
    BrowserCacheManager.prototype.generateCacheKey = function (key) {
        var generatedKey = this.validateAndParseJson(key);
        if (!generatedKey) {
            if (StringUtils.startsWith(key, Constants.CACHE_PREFIX) || StringUtils.startsWith(key, PersistentCacheKeys.ADAL_ID_TOKEN)) {
                return key;
            }
            return Constants.CACHE_PREFIX + "." + this.clientId + "." + key;
        }
        return JSON.stringify(key);
    };
    /**
     * Create authorityKey to cache authority
     * @param state
     */
    BrowserCacheManager.prototype.generateAuthorityKey = function (stateString) {
        var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
        return this.generateCacheKey(TemporaryCacheKeys.AUTHORITY + "." + stateId);
    };
    /**
     * Create Nonce key to cache nonce
     * @param state
     */
    BrowserCacheManager.prototype.generateNonceKey = function (stateString) {
        var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
        return this.generateCacheKey(TemporaryCacheKeys.NONCE_IDTOKEN + "." + stateId);
    };
    /**
     * Creates full cache key for the request state
     * @param stateString State string for the request
     */
    BrowserCacheManager.prototype.generateStateKey = function (stateString) {
        // Use the library state id to key temp storage for uniqueness for multiple concurrent requests
        var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
        return this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE + "." + stateId);
    };
    /**
     * Sets the cacheKey for and stores the authority information in cache
     * @param state
     * @param authority
     */
    BrowserCacheManager.prototype.setAuthorityCache = function (authority, state) {
        // Cache authorityKey
        var authorityCacheKey = this.generateAuthorityKey(state);
        this.setItem(authorityCacheKey, authority);
    };
    /**
     * Gets the cached authority based on the cached state. Returns empty if no cached state found.
     */
    BrowserCacheManager.prototype.getCachedAuthority = function (cachedState) {
        var stateCacheKey = this.generateStateKey(cachedState);
        var state = this.getTemporaryCache(stateCacheKey);
        if (!state) {
            return null;
        }
        var authorityCacheKey = this.generateAuthorityKey(state);
        return this.getTemporaryCache(authorityCacheKey);
    };
    /**
     * Updates account, authority, and state in cache
     * @param serverAuthenticationRequest
     * @param account
     */
    BrowserCacheManager.prototype.updateCacheEntries = function (state, nonce, authorityInstance) {
        // Cache the request state
        var stateCacheKey = this.generateStateKey(state);
        this.setTemporaryCache(stateCacheKey, state, false);
        // Cache the nonce
        var nonceCacheKey = this.generateNonceKey(state);
        this.setTemporaryCache(nonceCacheKey, nonce, false);
        // Cache authorityKey
        this.setAuthorityCache(authorityInstance, state);
    };
    /**
     * Reset all temporary cache items
     * @param state
     */
    BrowserCacheManager.prototype.resetRequestCache = function (state) {
        var _this = this;
        // check state and remove associated cache items
        this.getKeys().forEach(function (key) {
            if (!StringUtils.isEmpty(state) && key.indexOf(state) !== -1) {
                _this.removeItem(key);
            }
        });
        // delete generic interactive request parameters
        if (state) {
            this.removeItem(this.generateStateKey(state));
            this.removeItem(this.generateNonceKey(state));
            this.removeItem(this.generateAuthorityKey(state));
        }
        this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
        this.removeItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
        this.removeItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
        this.removeItem(this.generateCacheKey(TemporaryCacheKeys.INTERACTION_STATUS_KEY));
    };
    BrowserCacheManager.prototype.cleanRequestByState = function (stateString) {
        // Interaction is completed - remove interaction status.
        if (stateString) {
            var stateKey = this.generateStateKey(stateString);
            var cachedState = this.getItem(stateKey);
            this.resetRequestCache(cachedState || "");
        }
    };
    BrowserCacheManager.prototype.cleanRequestByInteractionType = function (interactionType) {
        var _this = this;
        this.getKeys().forEach(function (key) {
            if (key.indexOf(TemporaryCacheKeys.REQUEST_STATE) === -1) {
                return;
            }
            var value = _this.browserStorage.getItem(key);
            var parsedState = BrowserProtocolUtils.extractBrowserRequestState(_this.cryptoImpl, value);
            if (parsedState.interactionType === interactionType) {
                _this.resetRequestCache(value);
            }
        });
    };
    BrowserCacheManager.prototype.cacheCodeRequest = function (authCodeRequest, browserCrypto) {
        var encodedValue = browserCrypto.base64Encode(JSON.stringify(authCodeRequest));
        this.setTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, encodedValue, true);
    };
    /**
     * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
     */
    BrowserCacheManager.prototype.getCachedRequest = function (state, browserCrypto) {
        try {
            // Get token request from cache and parse as TokenExchangeParameters.
            var encodedTokenRequest = this.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, true);
            var parsedRequest = JSON.parse(browserCrypto.base64Decode(encodedTokenRequest));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
            // Get cached authority and use if no authority is cached with request.
            if (StringUtils.isEmpty(parsedRequest.authority)) {
                var authorityCacheKey = this.generateAuthorityKey(state);
                var cachedAuthority = this.getTemporaryCache(authorityCacheKey);
                parsedRequest.authority = cachedAuthority;
            }
            return parsedRequest;
        }
        catch (err) {
            throw BrowserAuthError.createTokenRequestCacheError(err);
        }
    };
    return BrowserCacheManager;
}(CacheManager));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements the Fetch API for GET and POST requests. See more here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    /**
     * Fetch Client for REST endpoints - Get request
     * @param url
     * @param headers
     * @param body
     */
    FetchClient.prototype.sendGetRequestAsync = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch(url, {
                            method: HTTP_REQUEST_TYPE.GET,
                            headers: this.getFetchHeaders(options)
                        })];
                    case 1:
                        response = _b.sent();
                        _a = {
                            headers: this.getHeaderDict(response.headers)
                        };
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.body = (_b.sent()),
                            _a.status = response.status,
                            _a)];
                }
            });
        });
    };
    /**
     * Fetch Client for REST endpoints - Post request
     * @param url
     * @param headers
     * @param body
     */
    FetchClient.prototype.sendPostRequestAsync = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var reqBody, response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        reqBody = (options && options.body) || "";
                        return [4 /*yield*/, fetch(url, {
                                method: HTTP_REQUEST_TYPE.POST,
                                headers: this.getFetchHeaders(options),
                                body: reqBody
                            })];
                    case 1:
                        response = _b.sent();
                        _a = {
                            headers: this.getHeaderDict(response.headers)
                        };
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, (_a.body = (_b.sent()),
                            _a.status = response.status,
                            _a)];
                }
            });
        });
    };
    /**
     * Get Fetch API Headers object from string map
     * @param inputHeaders
     */
    FetchClient.prototype.getFetchHeaders = function (options) {
        var headers = new Headers();
        if (!(options && options.headers)) {
            return headers;
        }
        Object.keys(options.headers).forEach(function (key) {
            headers.append(key, options.headers[key]);
        });
        return headers;
    };
    FetchClient.prototype.getHeaderDict = function (headers) {
        var headerDict = {};
        headers.forEach(function (value, key) {
            headerDict[key] = value;
        });
        return headerDict;
    };
    return FetchClient;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This client implements the XMLHttpRequest class to send GET and POST requests.
 */
var XhrClient = /** @class */ (function () {
    function XhrClient() {
    }
    /**
     * XhrClient for REST endpoints - Get request
     * @param url
     * @param headers
     * @param body
     */
    XhrClient.prototype.sendGetRequestAsync = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.GET, options)];
            });
        });
    };
    /**
     * XhrClient for REST endpoints - Post request
     * @param url
     * @param headers
     * @param body
     */
    XhrClient.prototype.sendPostRequestAsync = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.POST, options)];
            });
        });
    };
    /**
     * Helper for XhrClient requests.
     * @param url
     * @param method
     * @param options
     */
    XhrClient.prototype.sendRequestAsync = function (url, method, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, /* async: */ true);
            _this.setXhrHeaders(xhr, options);
            xhr.onload = function () {
                if (xhr.status < 200 || xhr.status >= 300) {
                    reject(xhr.responseText);
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    var networkResponse = {
                        headers: _this.getHeaderDict(xhr),
                        body: jsonResponse,
                        status: xhr.status
                    };
                    resolve(networkResponse);
                }
                catch (e) {
                    reject(xhr.responseText);
                }
            };
            xhr.onerror = function () {
                reject(xhr.status);
            };
            if (method === "POST" && options.body) {
                xhr.send(options.body);
            }
            else if (method === "GET") {
                xhr.send();
            }
            else {
                throw BrowserAuthError.createHttpMethodNotImplementedError(method);
            }
        });
    };
    /**
     * Helper to set XHR headers for request.
     * @param xhr
     * @param options
     */
    XhrClient.prototype.setXhrHeaders = function (xhr, options) {
        if (options && options.headers) {
            Object.keys(options.headers).forEach(function (key) {
                xhr.setRequestHeader(key, options.headers[key]);
            });
        }
    };
    /**
     * Gets a string map of the headers received in the response.
     *
     * Algorithm comes from https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
     * @param xhr
     */
    XhrClient.prototype.getHeaderDict = function (xhr) {
        var headerString = xhr.getAllResponseHeaders();
        var headerArr = headerString.trim().split(/[\r\n]+/);
        var headerDict = {};
        headerArr.forEach(function (value) {
            var parts = value.split(": ");
            var headerName = parts.shift();
            var headerVal = parts.join(": ");
            headerDict[headerName] = headerVal;
        });
        return headerDict;
    };
    return XhrClient;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Utility class for browser specific functions
 */
var BrowserUtils = /** @class */ (function () {
    function BrowserUtils() {
    }
    // #region Window Navigation and URL management
    /**
     * Used to redirect the browser to the STS authorization endpoint
     * @param {string} urlNavigate - URL of the authorization endpoint
     * @param {boolean} noHistory - boolean flag, uses .replace() instead of .assign() if true
     */
    BrowserUtils.navigateWindow = function (urlNavigate, navigationTimeout, logger, noHistory) {
        if (noHistory) {
            window.location.replace(urlNavigate);
        }
        else {
            window.location.assign(urlNavigate);
        }
        // To block code from running after navigation, this should not throw if navigation succeeds
        return new Promise(function (resolve) {
            setTimeout(function () {
                logger.warning("Expected to navigate away from the current page but timeout occurred.");
                resolve();
            }, navigationTimeout);
        });
    };
    /**
     * Clears hash from window url.
     */
    BrowserUtils.clearHash = function () {
        // Office.js sets history.replaceState to null
        if (typeof history.replaceState === "function") {
            // Full removes "#" from url
            history.replaceState(null, null, "" + window.location.pathname + window.location.search);
        }
        else {
            window.location.hash = "";
        }
    };
    /**
     * Replaces current hash with hash from provided url
     */
    BrowserUtils.replaceHash = function (url) {
        var urlParts = url.split("#");
        urlParts.shift(); // Remove part before the hash
        window.location.hash = urlParts.length > 0 ? urlParts.join("#") : "";
    };
    /**
     * Returns boolean of whether the current window is in an iframe or not.
     */
    BrowserUtils.isInIframe = function () {
        return window.parent !== window;
    };
    // #endregion
    /**
     * Returns current window URL as redirect uri
     */
    BrowserUtils.getCurrentUri = function () {
        return window.location.href.split("?")[0].split("#")[0];
    };
    /**
     * Gets the homepage url for the current window location.
     */
    BrowserUtils.getHomepage = function () {
        var currentUrl = new UrlString(window.location.href);
        var urlComponents = currentUrl.getUrlComponents();
        return urlComponents.Protocol + "//" + urlComponents.HostNameAndPort + "/";
    };
    /**
     * Returns best compatible network client object.
     */
    BrowserUtils.getBrowserNetworkClient = function () {
        if (window.fetch && window.Headers) {
            return new FetchClient();
        }
        else {
            return new XhrClient();
        }
    };
    /**
     * Throws error if we have completed an auth and are
     * attempting another auth request inside an iframe.
     */
    BrowserUtils.blockReloadInHiddenIframes = function () {
        var isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
        // return an error if called from the hidden iframe created by the msal js silent calls
        if (isResponseHash && BrowserUtils.isInIframe()) {
            throw BrowserAuthError.createBlockReloadInHiddenIframeError();
        }
    };
    /**
     * Block redirect operations in iframes unless explicitly allowed
     * @param interactionType Interaction type for the request
     * @param allowRedirectInIframe Config value to allow redirects when app is inside an iframe
     */
    BrowserUtils.blockRedirectInIframe = function (interactionType, allowRedirectInIframe) {
        var isIframedApp = BrowserUtils.isInIframe();
        if (interactionType === InteractionType.Redirect && isIframedApp && !allowRedirectInIframe) {
            // If we are not in top frame, we shouldn't redirect. This is also handled by the service.
            throw BrowserAuthError.createRedirectInIframeError(isIframedApp);
        }
    };
    /**
     * Throws error if token requests are made in non-browser environment
     * @param isBrowserEnvironment Flag indicating if environment is a browser.
     */
    BrowserUtils.blockNonBrowserEnvironment = function (isBrowserEnvironment) {
        if (!isBrowserEnvironment) {
            throw BrowserAuthError.createNonBrowserEnvironmentError();
        }
    };
    /**
     * Returns boolean of whether current browser is an Internet Explorer or Edge browser.
     */
    BrowserUtils.detectIEOrEdge = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        var msie11 = ua.indexOf("Trident/");
        var msedge = ua.indexOf("Edge/");
        var isIE = msie > 0 || msie11 > 0;
        var isEdge = msedge > 0;
        return isIE || isEdge;
    };
    return BrowserUtils;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
// Default timeout for popup windows and iframes in milliseconds
var DEFAULT_POPUP_TIMEOUT_MS = 60000;
var DEFAULT_IFRAME_TIMEOUT_MS = 6000;
var DEFAULT_REDIRECT_TIMEOUT_MS = 30000;
/**
 * MSAL function that sets the default options when not explicitly configured from app developer
 *
 * @param auth
 * @param cache
 * @param system
 *
 * @returns Configuration object
 */
function buildConfiguration(_a) {
    var userInputAuth = _a.auth, userInputCache = _a.cache, userInputSystem = _a.system;
    // Default auth options for browser
    var DEFAULT_AUTH_OPTIONS = {
        clientId: "",
        authority: "" + Constants.DEFAULT_AUTHORITY,
        knownAuthorities: [],
        cloudDiscoveryMetadata: "",
        redirectUri: "",
        postLogoutRedirectUri: "",
        navigateToLoginRequestUrl: true,
        clientCapabilities: [],
        protocolMode: ProtocolMode.AAD
    };
    // Default cache options for browser
    var DEFAULT_CACHE_OPTIONS = {
        cacheLocation: BrowserCacheLocation.SessionStorage,
        storeAuthStateInCookie: false
    };
    // Default logger options for browser
    var DEFAULT_LOGGER_OPTIONS = {
        loggerCallback: function () { },
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false
    };
    // Default system options for browser
    var DEFAULT_BROWSER_SYSTEM_OPTIONS = __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), { loggerOptions: DEFAULT_LOGGER_OPTIONS, networkClient: BrowserUtils.getBrowserNetworkClient(), loadFrameTimeout: 0, 
        // If loadFrameTimeout is provided, use that as default.
        windowHashTimeout: (userInputSystem && userInputSystem.loadFrameTimeout) || DEFAULT_POPUP_TIMEOUT_MS, iframeHashTimeout: (userInputSystem && userInputSystem.loadFrameTimeout) || DEFAULT_IFRAME_TIMEOUT_MS, navigateFrameWait: BrowserUtils.detectIEOrEdge() ? 500 : 0, redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS, asyncPopups: false, allowRedirectInIframe: false });
    var overlayedConfig = {
        auth: __assign(__assign({}, DEFAULT_AUTH_OPTIONS), userInputAuth),
        cache: __assign(__assign({}, DEFAULT_CACHE_OPTIONS), userInputCache),
        system: __assign(__assign({}, DEFAULT_BROWSER_SYSTEM_OPTIONS), userInputSystem)
    };
    return overlayedConfig;
}

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * Abstract class which defines operations for a browser interaction handling class.
 */
var InteractionHandler = /** @class */ (function () {
    function InteractionHandler(authCodeModule, storageImpl) {
        this.authModule = authCodeModule;
        this.browserStorage = storageImpl;
    }
    /**
     * Function to handle response parameters from hash.
     * @param locationHash
     */
    InteractionHandler.prototype.handleCodeResponse = function (locationHash, authority, networkModule) {
        return __awaiter(this, void 0, void 0, function () {
            var serverParams, stateKey, requestState, authCodeResponse, nonceKey, cachedNonce, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Check that location hash isn't empty.
                        if (StringUtils.isEmpty(locationHash)) {
                            throw BrowserAuthError.createEmptyHashError(locationHash);
                        }
                        serverParams = BrowserProtocolUtils.parseServerResponseFromHash(locationHash);
                        stateKey = this.browserStorage.generateStateKey(serverParams.state);
                        requestState = this.browserStorage.getTemporaryCache(stateKey);
                        authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
                        nonceKey = this.browserStorage.generateNonceKey(requestState);
                        cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
                        // Assign code to request
                        this.authCodeRequest.code = authCodeResponse.code;
                        if (!authCodeResponse.cloud_instance_host_name) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authCodeResponse.nonce = cachedNonce;
                        authCodeResponse.state = requestState;
                        return [4 /*yield*/, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
                    case 3:
                        tokenResponse = _a.sent();
                        this.browserStorage.cleanRequestByState(serverParams.state);
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    InteractionHandler.prototype.updateTokenEndpointAuthority = function (cloudInstanceHostname, authority, networkModule) {
        return __awaiter(this, void 0, void 0, function () {
            var cloudInstanceAuthorityUri, cloudInstanceAuthority;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!authority.isAuthorityAlias(cloudInstanceHostname)) return [3 /*break*/, 2];
                        cloudInstanceAuthorityUri = "https://" + cloudInstanceHostname + "/" + authority.tenant + "/";
                        return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(cloudInstanceAuthorityUri, networkModule, authority.protocolMode)];
                    case 1:
                        cloudInstanceAuthority = _a.sent();
                        this.authModule.updateAuthority(cloudInstanceAuthority);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return InteractionHandler;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var RedirectHandler = /** @class */ (function (_super) {
    __extends(RedirectHandler, _super);
    function RedirectHandler(authCodeModule, storageImpl, browserCrypto) {
        var _this = _super.call(this, authCodeModule, storageImpl) || this;
        _this.browserCrypto = browserCrypto;
        return _this;
    }
    /**
     * Redirects window to given URL.
     * @param urlNavigate
     */
    RedirectHandler.prototype.initiateAuthRequest = function (requestUrl, authCodeRequest, params) {
        // Navigate if valid URL
        if (!StringUtils.isEmpty(requestUrl)) {
            // Cache start page, returns to this page after redirectUri if navigateToLoginRequestUrl is true
            if (params.redirectStartPage) {
                this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, params.redirectStartPage, true);
            }
            // Set interaction status in the library.
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.INTERACTION_STATUS_KEY, BrowserConstants.INTERACTION_IN_PROGRESS_VALUE, true);
            this.browserStorage.cacheCodeRequest(authCodeRequest, this.browserCrypto);
            this.authModule.logger.infoPii("Navigate to:" + requestUrl);
            // If onRedirectNavigate is implemented, invoke it and provide requestUrl
            if (typeof params.onRedirectNavigate === "function") {
                this.authModule.logger.verbose("Invoking onRedirectNavigate callback");
                var navigate = params.onRedirectNavigate(requestUrl);
                // Returning false from onRedirectNavigate will stop navigation
                if (navigate !== false) {
                    this.authModule.logger.verbose("onRedirectNavigate did not return false, navigating");
                    return BrowserUtils.navigateWindow(requestUrl, params.redirectTimeout, this.authModule.logger);
                }
                else {
                    this.authModule.logger.verbose("onRedirectNavigate returned false, stopping navigation");
                    return Promise.resolve();
                }
            }
            else {
                // Navigate window to request URL
                this.authModule.logger.verbose("Navigating window to navigate url");
                return BrowserUtils.navigateWindow(requestUrl, params.redirectTimeout, this.authModule.logger);
            }
        }
        else {
            // Throw error if request URL is empty.
            this.authModule.logger.info("Navigate url is empty");
            throw BrowserAuthError.createEmptyNavigationUriError();
        }
    };
    /**
     * Handle authorization code response in the window.
     * @param hash
     */
    RedirectHandler.prototype.handleCodeResponse = function (locationHash, authority, networkModule, clientId) {
        return __awaiter(this, void 0, void 0, function () {
            var serverParams, stateKey, requestState, authCodeResponse, nonceKey, cachedNonce, tokenResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Check that location hash isn't empty.
                        if (StringUtils.isEmpty(locationHash)) {
                            throw BrowserAuthError.createEmptyHashError(locationHash);
                        }
                        // Interaction is completed - remove interaction status.
                        this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.INTERACTION_STATUS_KEY));
                        serverParams = BrowserProtocolUtils.parseServerResponseFromHash(locationHash);
                        stateKey = this.browserStorage.generateStateKey(serverParams.state);
                        requestState = this.browserStorage.getTemporaryCache(stateKey);
                        authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
                        nonceKey = this.browserStorage.generateNonceKey(requestState);
                        cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
                        this.authCodeRequest = this.browserStorage.getCachedRequest(requestState, this.browserCrypto);
                        // Assign code to request
                        this.authCodeRequest.code = authCodeResponse.code;
                        if (!authCodeResponse.cloud_instance_host_name) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authCodeResponse.nonce = cachedNonce;
                        authCodeResponse.state = requestState;
                        // Remove throttle if it exists
                        if (clientId) {
                            ThrottlingUtils.removeThrottle(this.browserStorage, clientId, this.authCodeRequest.authority, this.authCodeRequest.scopes);
                        }
                        return [4 /*yield*/, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
                    case 3:
                        tokenResponse = _a.sent();
                        this.browserStorage.cleanRequestByState(serverParams.state);
                        return [2 /*return*/, tokenResponse];
                }
            });
        });
    };
    return RedirectHandler;
}(InteractionHandler));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * This class implements the interaction handler base class for browsers. It is written specifically for handling
 * popup window scenarios. It includes functions for monitoring the popup window for a hash.
 */
var PopupHandler = /** @class */ (function (_super) {
    __extends(PopupHandler, _super);
    function PopupHandler(authCodeModule, storageImpl) {
        var _this = _super.call(this, authCodeModule, storageImpl) || this;
        // Properly sets this reference for the unload event.
        _this.unloadWindow = _this.unloadWindow.bind(_this);
        return _this;
    }
    /**
     * Opens a popup window with given request Url.
     * @param requestUrl
     */
    PopupHandler.prototype.initiateAuthRequest = function (requestUrl, authCodeRequest, params) {
        // Check that request url is not empty.
        if (!StringUtils.isEmpty(requestUrl)) {
            // Save auth code request
            this.authCodeRequest = authCodeRequest;
            // Set interaction status in the library.
            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.INTERACTION_STATUS_KEY, BrowserConstants.INTERACTION_IN_PROGRESS_VALUE, true);
            this.authModule.logger.infoPii("Navigate to:" + requestUrl);
            // Open the popup window to requestUrl.
            return this.openPopup(requestUrl, params.popup);
        }
        else {
            // Throw error if request URL is empty.
            this.authModule.logger.error("Navigate url is empty");
            throw BrowserAuthError.createEmptyNavigationUriError();
        }
    };
    /**
     * Monitors a window until it loads a url with a known hash, or hits a specified timeout.
     * @param popupWindow - window that is being monitored
     * @param timeout - milliseconds until timeout
     * @param urlNavigate - url that was navigated to
     */
    PopupHandler.prototype.monitorPopupForHash = function (popupWindow, timeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (timeout < DEFAULT_POPUP_TIMEOUT_MS) {
                _this.authModule.logger.warning("system.loadFrameTimeout or system.windowHashTimeout set to lower (" + timeout + "ms) than the default (" + DEFAULT_POPUP_TIMEOUT_MS + "ms). This may result in timeouts.");
            }
            var maxTicks = timeout / BrowserConstants.POLL_INTERVAL_MS;
            var ticks = 0;
            var intervalId = setInterval(function () {
                if (popupWindow.closed) {
                    // Window is closed
                    _this.cleanPopup();
                    clearInterval(intervalId);
                    reject(BrowserAuthError.createUserCancelledError());
                    return;
                }
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = popupWindow.location.href;
                }
                catch (e) { }
                // Don't process blank pages or cross domain
                if (StringUtils.isEmpty(href) || href === "about:blank") {
                    return;
                }
                // Only run clock when we are on same domain
                ticks++;
                var contentHash = popupWindow.location.hash;
                if (UrlString.hashContainsKnownProperties(contentHash)) {
                    // Success case
                    _this.cleanPopup(popupWindow);
                    clearInterval(intervalId);
                    resolve(contentHash);
                    return;
                }
                else if (ticks > maxTicks) {
                    // Timeout error
                    _this.cleanPopup(popupWindow);
                    clearInterval(intervalId);
                    reject(BrowserAuthError.createMonitorPopupTimeoutError());
                    return;
                }
            }, BrowserConstants.POLL_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     *
     * Configures popup window for login.
     *
     * @param urlNavigate
     * @param title
     * @param popUpWidth
     * @param popUpHeight
     * @ignore
     * @hidden
     */
    PopupHandler.prototype.openPopup = function (urlNavigate, popup) {
        try {
            var popupWindow = void 0;
            // Popup window passed in, setting url to navigate to
            if (popup) {
                popupWindow = popup;
                popupWindow.location.assign(urlNavigate);
            }
            else if (typeof popup === "undefined") {
                // Popup will be undefined if it was not passed in
                popupWindow = PopupHandler.openSizedPopup(urlNavigate);
            }
            // Popup will be null if popups are blocked
            if (!popupWindow) {
                throw BrowserAuthError.createEmptyWindowCreatedError();
            }
            if (popupWindow.focus) {
                popupWindow.focus();
            }
            this.currentWindow = popupWindow;
            window.addEventListener("beforeunload", this.unloadWindow);
            return popupWindow;
        }
        catch (e) {
            this.authModule.logger.error("error opening popup " + e.message);
            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.INTERACTION_STATUS_KEY));
            throw BrowserAuthError.createPopupWindowError(e.toString());
        }
    };
    PopupHandler.openSizedPopup = function (urlNavigate) {
        if (urlNavigate === void 0) { urlNavigate = "about:blank"; }
        /**
         * adding winLeft and winTop to account for dual monitor
         * using screenLeft and screenTop for IE8 and earlier
         */
        var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
        var winTop = window.screenTop ? window.screenTop : window.screenY;
        /**
         * window.innerWidth displays browser window"s height and width excluding toolbars
         * using document.documentElement.clientWidth for IE8 and earlier
         */
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var left = Math.max(0, ((width / 2) - (BrowserConstants.POPUP_WIDTH / 2)) + winLeft);
        var top = Math.max(0, ((height / 2) - (BrowserConstants.POPUP_HEIGHT / 2)) + winTop);
        return window.open(urlNavigate, Constants.LIBRARY_NAME, "width=" + BrowserConstants.POPUP_WIDTH + ", height=" + BrowserConstants.POPUP_HEIGHT + ", top=" + top + ", left=" + left);
    };
    /**
     * Event callback to unload main window.
     */
    PopupHandler.prototype.unloadWindow = function (e) {
        this.browserStorage.cleanRequestByInteractionType(InteractionType.Popup);
        this.currentWindow.close();
        // Guarantees browser unload will happen, so no other errors will be thrown.
        delete e["returnValue"];
    };
    /**
     * Closes popup, removes any state vars created during popup calls.
     * @param popupWindow
     */
    PopupHandler.prototype.cleanPopup = function (popupWindow) {
        if (popupWindow) {
            // Close window.
            popupWindow.close();
        }
        // Remove window unload function
        window.removeEventListener("beforeunload", this.unloadWindow);
        // Interaction is completed - remove interaction status.
        this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.INTERACTION_STATUS_KEY));
    };
    return PopupHandler;
}(InteractionHandler));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var SilentHandler = /** @class */ (function (_super) {
    __extends(SilentHandler, _super);
    function SilentHandler(authCodeModule, storageImpl, navigateFrameWait) {
        var _this = _super.call(this, authCodeModule, storageImpl) || this;
        _this.navigateFrameWait = navigateFrameWait;
        return _this;
    }
    /**
     * Creates a hidden iframe to given URL using user-requested scopes as an id.
     * @param urlNavigate
     * @param userRequestScopes
     */
    SilentHandler.prototype.initiateAuthRequest = function (requestUrl, authCodeRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (StringUtils.isEmpty(requestUrl)) {
                            // Throw error if request URL is empty.
                            this.authModule.logger.info("Navigate url is empty");
                            throw BrowserAuthError.createEmptyNavigationUriError();
                        }
                        // Save auth code request
                        this.authCodeRequest = authCodeRequest;
                        if (!this.navigateFrameWait) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadFrame(requestUrl)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = this.loadFrameSync(requestUrl);
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    /**
     * Monitors an iframe content window until it loads a url with a known hash, or hits a specified timeout.
     * @param iframe
     * @param timeout
     */
    SilentHandler.prototype.monitorIframeForHash = function (iframe, timeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (timeout < DEFAULT_IFRAME_TIMEOUT_MS) {
                _this.authModule.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + timeout + "ms) than the default (" + DEFAULT_IFRAME_TIMEOUT_MS + "ms). This may result in timeouts.");
            }
            /*
             * Polling for iframes can be purely timing based,
             * since we don't need to account for interaction.
             */
            var nowMark = window.performance.now();
            var timeoutMark = nowMark + timeout;
            var intervalId = setInterval(function () {
                if (window.performance.now() > timeoutMark) {
                    _this.removeHiddenIframe(iframe);
                    clearInterval(intervalId);
                    reject(BrowserAuthError.createMonitorIframeTimeoutError());
                    return;
                }
                var href;
                try {
                    /*
                     * Will throw if cross origin,
                     * which should be caught and ignored
                     * since we need the interval to keep running while on STS UI.
                     */
                    href = iframe.contentWindow.location.href;
                }
                catch (e) { }
                if (StringUtils.isEmpty(href)) {
                    return;
                }
                var contentHash = iframe.contentWindow.location.hash;
                if (UrlString.hashContainsKnownProperties(contentHash)) {
                    // Success case
                    _this.removeHiddenIframe(iframe);
                    clearInterval(intervalId);
                    resolve(contentHash);
                    return;
                }
            }, BrowserConstants.POLL_INTERVAL_MS);
        });
    };
    /**
     * @hidden
     * Loads iframe with authorization endpoint URL
     * @ignore
     */
    SilentHandler.prototype.loadFrame = function (urlNavigate) {
        /*
         * This trick overcomes iframe navigation in IE
         * IE does not load the page consistently in iframe
         */
        var _this = this;
        return new Promise(function (resolve, reject) {
            var frameHandle = _this.createHiddenIframe();
            setTimeout(function () {
                if (!frameHandle) {
                    reject("Unable to load iframe");
                    return;
                }
                frameHandle.src = urlNavigate;
                resolve(frameHandle);
            }, _this.navigateFrameWait);
        });
    };
    /**
     * @hidden
     * Loads the iframe synchronously when the navigateTimeFrame is set to `0`
     * @param urlNavigate
     * @param frameName
     * @param logger
     */
    SilentHandler.prototype.loadFrameSync = function (urlNavigate) {
        var frameHandle = this.createHiddenIframe();
        frameHandle.src = urlNavigate;
        return frameHandle;
    };
    /**
     * @hidden
     * Creates a new hidden iframe or gets an existing one for silent token renewal.
     * @ignore
     */
    SilentHandler.prototype.createHiddenIframe = function () {
        var authFrame = document.createElement("iframe");
        authFrame.style.visibility = "hidden";
        authFrame.style.position = "absolute";
        authFrame.style.width = authFrame.style.height = "0";
        authFrame.style.border = "0";
        authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
        document.getElementsByTagName("body")[0].appendChild(authFrame);
        return authFrame;
    };
    /**
     * @hidden
     * Removes a hidden iframe from the page.
     * @ignore
     */
    SilentHandler.prototype.removeHiddenIframe = function (iframe) {
        if (document.body === iframe.parentNode) {
            document.body.removeChild(iframe);
        }
    };
    return SilentHandler;
}(InteractionHandler));

var name$1 = "@azure/msal-browser";
var version$1 = "2.8.0";

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var EventType;
(function (EventType) {
    EventType["LOGIN_START"] = "msal:loginStart";
    EventType["LOGIN_SUCCESS"] = "msal:loginSuccess";
    EventType["LOGIN_FAILURE"] = "msal:loginFailure";
    EventType["ACQUIRE_TOKEN_START"] = "msal:acquireTokenStart";
    EventType["ACQUIRE_TOKEN_SUCCESS"] = "msal:acquireTokenSuccess";
    EventType["ACQUIRE_TOKEN_FAILURE"] = "msal:acquireTokenFailure";
    EventType["ACQUIRE_TOKEN_NETWORK_START"] = "msal:acquireTokenFromNetworkStart";
    EventType["SSO_SILENT_START"] = "msal:ssoSilentStart";
    EventType["SSO_SILENT_SUCCESS"] = "msal:ssoSilentSuccess";
    EventType["SSO_SILENT_FAILURE"] = "msal:ssoSilentFailure";
    EventType["HANDLE_REDIRECT_START"] = "msal:handleRedirectStart";
    EventType["HANDLE_REDIRECT_END"] = "msal:handleRedirectEnd";
    EventType["LOGOUT_START"] = "msal:logoutStart";
    EventType["LOGOUT_SUCCESS"] = "msal:logoutSuccess";
    EventType["LOGOUT_FAILURE"] = "msal:logoutFailure";
})(EventType || (EventType = {}));

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var ClientApplication = /** @class */ (function () {
    /**
     * @constructor
     * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     * - redirect_uri: the uri of your application registered in the portal.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
     * Full B2C functionality will be available in this library in future versions.
     *
     * @param {@link (Configuration:type)} configuration object for the MSAL PublicClientApplication instance
     */
    function ClientApplication(configuration) {
        /*
         * If loaded in an environment where window is not available,
         * set internal flag to false so that further requests fail.
         * This is to support server-side rendering environments.
         */
        this.isBrowserEnvironment = typeof window !== "undefined";
        if (!this.isBrowserEnvironment) {
            return;
        }
        // Set the configuration.
        this.config = buildConfiguration(configuration);
        // Initialize the crypto class.
        this.browserCrypto = new CryptoOps();
        // Initialize the network module class.
        this.networkClient = this.config.system.networkClient;
        // Initialize logger
        this.logger = new Logger(this.config.system.loggerOptions, name$1, version$1);
        // Initialize the browser storage class.
        this.browserStorage = new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger);
        // Array of events
        this.eventCallbacks = new Map();
        // Initialize default authority instance
        TrustedAuthority.setTrustedAuthoritiesFromConfig(this.config.auth.knownAuthorities, this.config.auth.cloudDiscoveryMetadata);
        this.defaultAuthority = null;
    }
    // #region Redirect Flow
    /**
     * Event handler function which allows users to fire events after the PublicClientApplication object
     * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
     * auth flows.
     * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
     * @returns {Promise.<AuthenticationResult | null>} token response or null. If the return value is null, then no auth redirect was detected.
     */
    ClientApplication.prototype.handleRedirectPromise = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var loggedInAccounts;
            var _this = this;
            return __generator(this, function (_a) {
                this.emitEvent(EventType.HANDLE_REDIRECT_START, InteractionType.Redirect);
                loggedInAccounts = this.getAllAccounts();
                if (this.isBrowserEnvironment) {
                    return [2 /*return*/, this.handleRedirectResponse(hash)
                            .then(function (result) {
                            if (result) {
                                // Emit login event if number of accounts change
                                var isLoggingIn = loggedInAccounts.length < _this.getAllAccounts().length;
                                if (isLoggingIn) {
                                    _this.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Redirect, result);
                                }
                                else {
                                    _this.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Redirect, result);
                                }
                            }
                            _this.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
                            return result;
                        })
                            .catch(function (e) {
                            // Emit login event if there is an account
                            if (loggedInAccounts.length > 0) {
                                _this.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e);
                            }
                            else {
                                _this.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e);
                            }
                            _this.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
                            throw e;
                        })];
                }
                return [2 /*return*/, null];
            });
        });
    };
    /**
     * Checks if navigateToLoginRequestUrl is set, and:
     * - if true, performs logic to cache and navigate
     * - if false, handles hash string and parses response
     */
    ClientApplication.prototype.handleRedirectResponse = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var responseHash, loginRequestUrl, loginRequestUrlNormalized, currentUrlNormalized, handleHashResult, homepage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.interactionInProgress()) {
                            this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
                            return [2 /*return*/, null];
                        }
                        responseHash = this.getRedirectResponseHash(hash || window.location.hash);
                        if (StringUtils.isEmpty(responseHash)) {
                            // Not a recognized server response hash or hash not associated with a redirect request
                            return [2 /*return*/, null];
                        }
                        loginRequestUrl = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, true);
                        loginRequestUrlNormalized = UrlString.removeHashFromUrl(loginRequestUrl || "");
                        currentUrlNormalized = UrlString.removeHashFromUrl(window.location.href);
                        if (!(loginRequestUrlNormalized === currentUrlNormalized && this.config.auth.navigateToLoginRequestUrl)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.handleHash(responseHash)];
                    case 1:
                        handleHashResult = _a.sent();
                        if (loginRequestUrl.indexOf("#") > -1) {
                            // Replace current hash with non-msal hash, if present
                            BrowserUtils.replaceHash(loginRequestUrl);
                        }
                        return [2 /*return*/, handleHashResult];
                    case 2:
                        if (!!this.config.auth.navigateToLoginRequestUrl) return [3 /*break*/, 3];
                        return [2 /*return*/, this.handleHash(responseHash)];
                    case 3:
                        if (!!BrowserUtils.isInIframe()) return [3 /*break*/, 7];
                        /*
                         * Returned from authority using redirect - need to perform navigation before processing response
                         * Cache the hash to be retrieved after the next redirect
                         */
                        this.browserStorage.setTemporaryCache(TemporaryCacheKeys.URL_HASH, responseHash, true);
                        if (!(!loginRequestUrl || loginRequestUrl === "null")) return [3 /*break*/, 5];
                        homepage = BrowserUtils.getHomepage();
                        // Cache the homepage under ORIGIN_URI to ensure cached hash is processed on homepage
                        this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, homepage, true);
                        this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
                        return [4 /*yield*/, BrowserUtils.navigateWindow(homepage, this.config.system.redirectNavigationTimeout, this.logger, true)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5: 
                    // Navigate to page that initiated the redirect request
                    return [4 /*yield*/, BrowserUtils.navigateWindow(loginRequestUrl, this.config.system.redirectNavigationTimeout, this.logger, true)];
                    case 6:
                        // Navigate to page that initiated the redirect request
                        _a.sent();
                        _a.label = 7;
                    case 7: return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Gets the response hash for a redirect request
     * Returns null if interactionType in the state value is not "redirect" or the hash does not contain known properties
     * @returns {string}
     */
    ClientApplication.prototype.getRedirectResponseHash = function (hash) {
        // Get current location hash from window or cache.
        var isResponseHash = UrlString.hashContainsKnownProperties(hash);
        var cachedHash = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.URL_HASH, true);
        this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
        var responseHash = isResponseHash ? hash : cachedHash;
        if (responseHash) {
            // Deserialize hash fragment response parameters.
            var serverParams = UrlString.getDeserializedHash(responseHash);
            var platformStateObj = BrowserProtocolUtils.extractBrowserRequestState(this.browserCrypto, serverParams.state);
            if (platformStateObj.interactionType !== InteractionType.Redirect) {
                return null;
            }
            else {
                BrowserUtils.clearHash();
                return responseHash;
            }
        }
        this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
        return null;
    };
    /**
     * Checks if hash exists and handles in window.
     * @param responseHash
     * @param interactionHandler
     */
    ClientApplication.prototype.handleHash = function (responseHash) {
        return __awaiter(this, void 0, void 0, function () {
            var encodedTokenRequest, cachedRequest, serverTelemetryManager, serverParams, currentAuthority, authClient, interactionHandler, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encodedTokenRequest = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, true);
                        cachedRequest = JSON.parse(this.browserCrypto.base64Decode(encodedTokenRequest));
                        serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.handleRedirectPromise, cachedRequest.correlationId);
                        serverParams = BrowserProtocolUtils.parseServerResponseFromHash(responseHash);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        currentAuthority = this.browserStorage.getCachedAuthority(serverParams.state);
                        return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, currentAuthority)];
                    case 2:
                        authClient = _a.sent();
                        interactionHandler = new RedirectHandler(authClient, this.browserStorage, this.browserCrypto);
                        return [4 /*yield*/, interactionHandler.handleCodeResponse(responseHash, authClient.authority, this.networkClient, this.config.auth.clientId)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_1 = _a.sent();
                        serverTelemetryManager.cacheFailedRequest(e_1);
                        this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
                        throw e_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
     * the page, so any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param {@link (RedirectRequest:type)}
     */
    ClientApplication.prototype.acquireTokenRedirect = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var isLoggedIn, validRequest, serverTelemetryManager, authCodeRequest, authClient, interactionHandler, navigateUrl, redirectStartPage, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Preflight request
                        this.preflightBrowserEnvironmentCheck(InteractionType.Redirect);
                        isLoggedIn = this.getAllAccounts().length > 0;
                        if (isLoggedIn) {
                            this.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Redirect, request);
                        }
                        else {
                            this.emitEvent(EventType.LOGIN_START, InteractionType.Redirect, request);
                        }
                        validRequest = this.preflightInteractiveRequest(request, InteractionType.Redirect);
                        serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenRedirect, validRequest.correlationId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.initializeAuthorizationCodeRequest(validRequest)];
                    case 2:
                        authCodeRequest = _a.sent();
                        return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority)];
                    case 3:
                        authClient = _a.sent();
                        interactionHandler = new RedirectHandler(authClient, this.browserStorage, this.browserCrypto);
                        return [4 /*yield*/, authClient.getAuthCodeUrl(validRequest)];
                    case 4:
                        navigateUrl = _a.sent();
                        redirectStartPage = (request && request.redirectStartPage) || window.location.href;
                        // Show the UI once the url has been created. Response will come back in the hash, which will be handled in the handleRedirectCallback function.
                        return [2 /*return*/, interactionHandler.initiateAuthRequest(navigateUrl, authCodeRequest, {
                                redirectTimeout: this.config.system.redirectNavigationTimeout,
                                redirectStartPage: redirectStartPage,
                                onRedirectNavigate: request.onRedirectNavigate
                            })];
                    case 5:
                        e_2 = _a.sent();
                        // If logged in, emit acquire token events
                        if (isLoggedIn) {
                            this.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e_2);
                        }
                        else {
                            this.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e_2);
                        }
                        serverTelemetryManager.cacheFailedRequest(e_2);
                        this.browserStorage.cleanRequestByState(validRequest.state);
                        throw e_2;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region Popup Flow
    /**
     * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
     * @param {@link (PopupRequest:type)}
     *
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    ClientApplication.prototype.acquireTokenPopup = function (request) {
        try {
            this.preflightBrowserEnvironmentCheck(InteractionType.Popup);
        }
        catch (e) {
            // Since this function is syncronous we need to reject
            return Promise.reject(e);
        }
        // asyncPopups flag is true. Acquires token without first opening popup. Popup will be opened later asynchronously.
        if (this.config.system.asyncPopups) {
            return this.acquireTokenPopupAsync(request);
        }
        else {
            // asyncPopups flag is set to false. Opens popup before acquiring token.
            var popup = PopupHandler.openSizedPopup();
            return this.acquireTokenPopupAsync(request, popup);
        }
    };
    /**
     * Helper which obtains an access_token for your API via opening a popup window in the user's browser
     * @param {@link (PopupRequest:type)}
     *
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    ClientApplication.prototype.acquireTokenPopupAsync = function (request, popup) {
        return __awaiter(this, void 0, void 0, function () {
            var loggedInAccounts, validRequest, serverTelemetryManager, authCodeRequest, authClient, navigateUrl, interactionHandler, popupParameters, popupWindow, hash, result, isLoggingIn, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loggedInAccounts = this.getAllAccounts();
                        if (loggedInAccounts.length > 0) {
                            this.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Popup, request);
                        }
                        else {
                            this.emitEvent(EventType.LOGIN_START, InteractionType.Popup, request);
                        }
                        validRequest = this.preflightInteractiveRequest(request, InteractionType.Popup);
                        serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenPopup, validRequest.correlationId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, this.initializeAuthorizationCodeRequest(validRequest)];
                    case 2:
                        authCodeRequest = _a.sent();
                        return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority)];
                    case 3:
                        authClient = _a.sent();
                        return [4 /*yield*/, authClient.getAuthCodeUrl(validRequest)];
                    case 4:
                        navigateUrl = _a.sent();
                        interactionHandler = new PopupHandler(authClient, this.browserStorage);
                        popupParameters = {
                            popup: popup
                        };
                        popupWindow = interactionHandler.initiateAuthRequest(navigateUrl, authCodeRequest, popupParameters);
                        return [4 /*yield*/, interactionHandler.monitorPopupForHash(popupWindow, this.config.system.windowHashTimeout)];
                    case 5:
                        hash = _a.sent();
                        // Remove throttle if it exists
                        ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, authCodeRequest.authority, authCodeRequest.scopes);
                        return [4 /*yield*/, interactionHandler.handleCodeResponse(hash, authClient.authority, this.networkClient)];
                    case 6:
                        result = _a.sent();
                        isLoggingIn = loggedInAccounts.length < this.getAllAccounts().length;
                        if (isLoggingIn) {
                            this.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Popup, result);
                        }
                        else {
                            this.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Popup, result);
                        }
                        return [2 /*return*/, result];
                    case 7:
                        e_3 = _a.sent();
                        if (loggedInAccounts.length > 0) {
                            this.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Popup, null, e_3);
                        }
                        else {
                            this.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Popup, null, e_3);
                        }
                        serverTelemetryManager.cacheFailedRequest(e_3);
                        this.browserStorage.cleanRequestByState(validRequest.state);
                        throw e_3;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region Silent Flow
    /**
     * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
     * - Any browser using a form of Intelligent Tracking Prevention
     * - If there is not an established session with the service
     *
     * In these cases, the request must be done inside a popup or full frame redirect.
     *
     * For the cases where interaction is required, you cannot send a request with prompt=none.
     *
     * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
     * you session on the server still exists.
     * @param {@link AuthorizationUrlRequest}
     *
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    ClientApplication.prototype.ssoSilent = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var silentTokenResult, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
                        this.emitEvent(EventType.SSO_SILENT_START, InteractionType.Silent, request);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.acquireTokenByIframe(request)];
                    case 2:
                        silentTokenResult = _a.sent();
                        this.emitEvent(EventType.SSO_SILENT_SUCCESS, InteractionType.Silent, silentTokenResult);
                        return [2 /*return*/, silentTokenResult];
                    case 3:
                        e_4 = _a.sent();
                        this.emitEvent(EventType.SSO_SILENT_FAILURE, InteractionType.Silent, null, e_4);
                        throw e_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This function uses a hidden iframe to fetch an authorization code from the eSTS. To be used for silent refresh token acquisition and renewal.
     * @param {@link AuthorizationUrlRequest}
     * @param request
     */
    ClientApplication.prototype.acquireTokenByIframe = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var silentRequest, serverTelemetryManager, authCodeRequest, authClient, navigateUrl, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Check that we have some SSO data
                        if (StringUtils.isEmpty(request.loginHint) && StringUtils.isEmpty(request.sid) && (!request.account || StringUtils.isEmpty(request.account.username))) {
                            throw BrowserAuthError.createSilentSSOInsufficientInfoError();
                        }
                        // Check that prompt is set to none, throw error if it is set to anything else.
                        if (request.prompt && request.prompt !== PromptValue.NONE) {
                            throw BrowserAuthError.createSilentPromptValueError(request.prompt);
                        }
                        silentRequest = this.initializeAuthorizationRequest(__assign(__assign({}, request), { prompt: PromptValue.NONE }), InteractionType.Silent);
                        serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.ssoSilent, silentRequest.correlationId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.initializeAuthorizationCodeRequest(silentRequest)];
                    case 2:
                        authCodeRequest = _a.sent();
                        return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, silentRequest.authority)];
                    case 3:
                        authClient = _a.sent();
                        return [4 /*yield*/, authClient.getAuthCodeUrl(silentRequest)];
                    case 4:
                        navigateUrl = _a.sent();
                        return [4 /*yield*/, this.silentTokenHelper(navigateUrl, authCodeRequest, authClient)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        e_5 = _a.sent();
                        serverTelemetryManager.cacheFailedRequest(e_5);
                        this.browserStorage.cleanRequestByState(silentRequest.state);
                        throw e_5;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Use this function to obtain a token before every call to the API / resource provider
     *
     * MSAL return's a cached token when available
     * Or it send's a request to the STS to obtain a new token using a refresh token.
     *
     * @param {@link (SilentRequest:type)}
     *
     * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     *
     */
    ClientApplication.prototype.acquireTokenByRefreshToken = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var silentRequest, serverTelemetryManager, refreshTokenClient, e_6, isServerError, isInteractionRequiredError, isInvalidGrantError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.emitEvent(EventType.ACQUIRE_TOKEN_NETWORK_START, InteractionType.Silent, request);
                        // block the reload if it occurred inside a hidden iframe
                        BrowserUtils.blockReloadInHiddenIframes();
                        silentRequest = __assign(__assign({}, request), this.initializeBaseRequest(request));
                        serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow, silentRequest.correlationId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 7]);
                        return [4 /*yield*/, this.createRefreshTokenClient(serverTelemetryManager, silentRequest.authority)];
                    case 2:
                        refreshTokenClient = _a.sent();
                        return [4 /*yield*/, refreshTokenClient.acquireTokenByRefreshToken(silentRequest)];
                    case 3: 
                    // Send request to renew token. Auth module will throw errors if token cannot be renewed.
                    return [2 /*return*/, _a.sent()];
                    case 4:
                        e_6 = _a.sent();
                        serverTelemetryManager.cacheFailedRequest(e_6);
                        isServerError = e_6 instanceof ServerError;
                        isInteractionRequiredError = e_6 instanceof InteractionRequiredAuthError;
                        isInvalidGrantError = (e_6.errorCode === BrowserConstants.INVALID_GRANT_ERROR);
                        if (!(isServerError && isInvalidGrantError && !isInteractionRequiredError)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.acquireTokenByIframe(request)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: throw e_6;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Helper which acquires an authorization code silently using a hidden iframe from given url
     * using the scopes requested as part of the id, and exchanges the code for a set of OAuth tokens.
     * @param navigateUrl
     * @param userRequestScopes
     */
    ClientApplication.prototype.silentTokenHelper = function (navigateUrl, authCodeRequest, authClient) {
        return __awaiter(this, void 0, void 0, function () {
            var silentHandler, msalFrame, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        silentHandler = new SilentHandler(authClient, this.browserStorage, this.config.system.navigateFrameWait);
                        return [4 /*yield*/, silentHandler.initiateAuthRequest(navigateUrl, authCodeRequest)];
                    case 1:
                        msalFrame = _a.sent();
                        return [4 /*yield*/, silentHandler.monitorIframeForHash(msalFrame, this.config.system.iframeHashTimeout)];
                    case 2:
                        hash = _a.sent();
                        // Handle response from hash string
                        return [2 /*return*/, silentHandler.handleCodeResponse(hash, authClient.authority, this.networkClient)];
                }
            });
        });
    };
    // #endregion
    // #region Logout
    /**
     * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
     * Default behaviour is to redirect the user to `window.location.href`.
     * @param {@link (EndSessionRequest:type)}
     */
    ClientApplication.prototype.logout = function (logoutRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var validLogoutRequest, authClient, logoutUri, navigate, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.preflightBrowserEnvironmentCheck(InteractionType.Redirect);
                        this.emitEvent(EventType.LOGOUT_START, InteractionType.Redirect, logoutRequest);
                        validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
                        return [4 /*yield*/, this.createAuthCodeClient(null, logoutRequest && logoutRequest.authority)];
                    case 1:
                        authClient = _a.sent();
                        logoutUri = authClient.getLogoutUri(validLogoutRequest);
                        this.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Redirect, validLogoutRequest);
                        // Check if onRedirectNavigate is implemented, and invoke it if so
                        if (logoutRequest && typeof logoutRequest.onRedirectNavigate === "function") {
                            navigate = logoutRequest.onRedirectNavigate(logoutUri);
                            if (navigate !== false) {
                                this.logger.verbose("Logout onRedirectNavigate did not return false, navigating");
                                return [2 /*return*/, BrowserUtils.navigateWindow(logoutUri, this.config.system.redirectNavigationTimeout, this.logger)];
                            }
                            else {
                                this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
                            }
                        }
                        else {
                            return [2 /*return*/, BrowserUtils.navigateWindow(logoutUri, this.config.system.redirectNavigationTimeout, this.logger)];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_7 = _a.sent();
                        this.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Redirect, null, e_7);
                        throw e_7;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // #endregion
    // #region Account APIs
    /**
     * Returns all accounts that MSAL currently has data for.
     * (the account object is created at the time of successful login)
     * or empty array when no accounts are found
     * @returns {@link AccountInfo[]} - Array of account objects in cache
     */
    ClientApplication.prototype.getAllAccounts = function () {
        return this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
    };
    /**
     * Returns the signed in account matching username.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found.
     * This API is provided for convenience but getAccountById should be used for best reliability
     * @returns {@link AccountInfo} - the account object stored in MSAL
     */
    ClientApplication.prototype.getAccountByUsername = function (userName) {
        var allAccounts = this.getAllAccounts();
        if (!StringUtils.isEmpty(userName) && allAccounts && allAccounts.length) {
            return allAccounts.filter(function (accountObj) { return accountObj.username.toLowerCase() === userName.toLowerCase(); })[0] || null;
        }
        else {
            return null;
        }
    };
    /**
     * Returns the signed in account matching homeAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @returns {@link AccountInfo} - the account object stored in MSAL
     */
    ClientApplication.prototype.getAccountByHomeId = function (homeAccountId) {
        var allAccounts = this.getAllAccounts();
        if (!StringUtils.isEmpty(homeAccountId) && allAccounts && allAccounts.length) {
            return allAccounts.filter(function (accountObj) { return accountObj.homeAccountId === homeAccountId; })[0] || null;
        }
        else {
            return null;
        }
    };
    /**
     * Returns the signed in account matching localAccountId.
     * (the account object is created at the time of successful login)
     * or null when no matching account is found
     * @returns {@link AccountInfo} - the account object stored in MSAL
     */
    ClientApplication.prototype.getAccountByLocalId = function (localAccountId) {
        var allAccounts = this.getAllAccounts();
        if (!StringUtils.isEmpty(localAccountId) && allAccounts && allAccounts.length) {
            return allAccounts.filter(function (accountObj) { return accountObj.localAccountId === localAccountId; })[0] || null;
        }
        else {
            return null;
        }
    };
    // #endregion
    // #region Helpers
    /**
     *
     * Use to get the redirect uri configured in MSAL or null.
     * @returns {string} redirect URL
     *
     */
    ClientApplication.prototype.getRedirectUri = function (requestRedirectUri) {
        var redirectUri = requestRedirectUri || this.config.auth.redirectUri || BrowserUtils.getCurrentUri();
        return UrlString.getAbsoluteUrl(redirectUri, BrowserUtils.getCurrentUri());
    };
    /**
     * Use to get the post logout redirect uri configured in MSAL or null.
     *
     * @returns {string} post logout redirect URL
     */
    ClientApplication.prototype.getPostLogoutRedirectUri = function (requestPostLogoutRedirectUri) {
        var postLogoutRedirectUri = requestPostLogoutRedirectUri || this.config.auth.postLogoutRedirectUri || BrowserUtils.getCurrentUri();
        return UrlString.getAbsoluteUrl(postLogoutRedirectUri, BrowserUtils.getCurrentUri());
    };
    /**
     * Used to get a discovered version of the default authority.
     */
    ClientApplication.prototype.getDiscoveredDefaultAuthority = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.defaultAuthority) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.config.auth.protocolMode)];
                    case 1:
                        _a.defaultAuthority = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.defaultAuthority];
                }
            });
        });
    };
    /**
     * Helper to check whether interaction is in progress.
     */
    ClientApplication.prototype.interactionInProgress = function () {
        // Check whether value in cache is present and equal to expected value
        return (this.browserStorage.getTemporaryCache(TemporaryCacheKeys.INTERACTION_STATUS_KEY, true)) === BrowserConstants.INTERACTION_IN_PROGRESS_VALUE;
    };
    /**
     * Creates an Authorization Code Client with the given authority, or the default authority.
     * @param authorityUrl
     */
    ClientApplication.prototype.createAuthCodeClient = function (serverTelemetryManager, authorityUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var clientConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl)];
                    case 1:
                        clientConfig = _a.sent();
                        return [2 /*return*/, new AuthorizationCodeClient(clientConfig)];
                }
            });
        });
    };
    /**
     * Creates an Silent Flow Client with the given authority, or the default authority.
     * @param authorityUrl
     */
    ClientApplication.prototype.createSilentFlowClient = function (serverTelemetryManager, authorityUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var clientConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl)];
                    case 1:
                        clientConfig = _a.sent();
                        return [2 /*return*/, new SilentFlowClient(clientConfig)];
                }
            });
        });
    };
    /**
     * Creates a Refresh Client with the given authority, or the default authority.
     * @param authorityUrl
     */
    ClientApplication.prototype.createRefreshTokenClient = function (serverTelemetryManager, authorityUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var clientConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl)];
                    case 1:
                        clientConfig = _a.sent();
                        return [2 /*return*/, new RefreshTokenClient(clientConfig)];
                }
            });
        });
    };
    /**
     * Creates a Client Configuration object with the given request authority, or the default authority.
     * @param requestAuthority
     */
    ClientApplication.prototype.getClientConfiguration = function (serverTelemetryManager, requestAuthority) {
        return __awaiter(this, void 0, void 0, function () {
            var discoveredAuthority, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!StringUtils.isEmpty(requestAuthority) && requestAuthority !== this.config.auth.authority)) return [3 /*break*/, 2];
                        return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(requestAuthority, this.config.system.networkClient, this.config.auth.protocolMode)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getDiscoveredDefaultAuthority()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        discoveredAuthority = _a;
                        return [2 /*return*/, {
                                authOptions: {
                                    clientId: this.config.auth.clientId,
                                    authority: discoveredAuthority,
                                    knownAuthorities: this.config.auth.knownAuthorities,
                                    cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                                    clientCapabilities: this.config.auth.clientCapabilities,
                                    protocolMode: this.config.auth.protocolMode
                                },
                                systemOptions: {
                                    tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds
                                },
                                loggerOptions: {
                                    loggerCallback: this.config.system.loggerOptions.loggerCallback,
                                    piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled
                                },
                                cryptoInterface: this.browserCrypto,
                                networkInterface: this.networkClient,
                                storageInterface: this.browserStorage,
                                serverTelemetryManager: serverTelemetryManager,
                                libraryInfo: {
                                    sku: BrowserConstants.MSAL_SKU,
                                    version: version$1,
                                    cpu: "",
                                    os: ""
                                }
                            }];
                }
            });
        });
    };
    /**
     * Helper to validate app environment before making a request.
     */
    ClientApplication.prototype.preflightInteractiveRequest = function (request, interactionType) {
        // block the reload if it occurred inside a hidden iframe
        BrowserUtils.blockReloadInHiddenIframes();
        // Check if interaction is in progress. Throw error if true.
        if (this.interactionInProgress()) {
            throw BrowserAuthError.createInteractionInProgressError();
        }
        return this.initializeAuthorizationRequest(request, interactionType);
    };
    /**
     * Helper to validate app environment before making an auth request
     * * @param request
     */
    ClientApplication.prototype.preflightBrowserEnvironmentCheck = function (interactionType) {
        // Block request if not in browser environment
        BrowserUtils.blockNonBrowserEnvironment(this.isBrowserEnvironment);
        // Block redirects if in an iframe
        BrowserUtils.blockRedirectInIframe(interactionType, this.config.system.allowRedirectInIframe);
        // Block auth requests inside a hidden iframe
        BrowserUtils.blockReloadInHiddenIframes();
        // Block redirects if memory storage is enabled but storeAuthStateInCookie is not
        if (interactionType === InteractionType.Redirect &&
            this.config.cache.cacheLocation === BrowserCacheLocation.MemoryStorage &&
            !this.config.cache.storeAuthStateInCookie) {
            throw BrowserConfigurationAuthError.createInMemoryRedirectUnavailableError();
        }
    };
    /**
     * Initializer function for all request APIs
     * @param request
     */
    ClientApplication.prototype.initializeBaseRequest = function (request) {
        var authority = request.authority;
        if (StringUtils.isEmpty(authority)) {
            authority = this.config.auth.authority;
        }
        var scopes = __spread(((request && request.scopes) || []));
        var correlationId = (request && request.correlationId) || this.browserCrypto.createNewGuid();
        var validatedRequest = __assign(__assign({}, request), { correlationId: correlationId,
            authority: authority,
            scopes: scopes });
        return validatedRequest;
    };
    ClientApplication.prototype.initializeServerTelemetryManager = function (apiId, correlationId, forceRefresh) {
        var telemetryPayload = {
            clientId: this.config.auth.clientId,
            correlationId: correlationId,
            apiId: apiId,
            forceRefresh: forceRefresh || false
        };
        return new ServerTelemetryManager(telemetryPayload, this.browserStorage);
    };
    /**
     * Helper to initialize required request parameters for interactive APIs and ssoSilent()
     * @param request
     */
    ClientApplication.prototype.initializeAuthorizationRequest = function (request, interactionType) {
        var redirectUri = this.getRedirectUri(request.redirectUri);
        var browserState = {
            interactionType: interactionType
        };
        var state = ProtocolUtils.setRequestState(this.browserCrypto, (request && request.state) || "", browserState);
        var nonce = request.nonce;
        if (StringUtils.isEmpty(nonce)) {
            nonce = this.browserCrypto.createNewGuid();
        }
        var authenticationScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
        var validatedRequest = __assign(__assign({}, this.initializeBaseRequest(request)), { redirectUri: redirectUri, state: state, nonce: nonce, responseMode: ResponseMode.FRAGMENT, authenticationScheme: authenticationScheme });
        // Check for ADAL SSO
        if (StringUtils.isEmpty(validatedRequest.loginHint)) {
            // Only check for adal token if no SSO params are being used
            var adalIdTokenString = this.browserStorage.getTemporaryCache(PersistentCacheKeys.ADAL_ID_TOKEN);
            if (!StringUtils.isEmpty(adalIdTokenString)) {
                var adalIdToken = new AuthToken(adalIdTokenString, this.browserCrypto);
                this.browserStorage.removeItem(PersistentCacheKeys.ADAL_ID_TOKEN);
                if (adalIdToken.claims && adalIdToken.claims.upn) {
                    validatedRequest.loginHint = adalIdToken.claims.upn;
                }
            }
        }
        this.browserStorage.updateCacheEntries(validatedRequest.state, validatedRequest.nonce, validatedRequest.authority);
        return validatedRequest;
    };
    /**
     * Generates an auth code request tied to the url request.
     * @param request
     */
    ClientApplication.prototype.initializeAuthorizationCodeRequest = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var generatedPkceParams, authCodeRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browserCrypto.generatePkceCodes()];
                    case 1:
                        generatedPkceParams = _a.sent();
                        authCodeRequest = __assign(__assign({}, request), { redirectUri: request.redirectUri, code: "", codeVerifier: generatedPkceParams.verifier });
                        request.codeChallenge = generatedPkceParams.challenge;
                        request.codeChallengeMethod = Constants.S256_CODE_CHALLENGE_METHOD;
                        return [2 /*return*/, authCodeRequest];
                }
            });
        });
    };
    /**
     * Initializer for the logout request.
     * @param logoutRequest
     */
    ClientApplication.prototype.initializeLogoutRequest = function (logoutRequest) {
        var validLogoutRequest = __assign({ correlationId: this.browserCrypto.createNewGuid() }, logoutRequest);
        validLogoutRequest.postLogoutRedirectUri = this.getPostLogoutRedirectUri(logoutRequest ? logoutRequest.postLogoutRedirectUri : "");
        return validLogoutRequest;
    };
    /**
     * Emits events by calling callback with event message
     * @param eventType
     * @param interactionType
     * @param payload
     * @param error
     */
    ClientApplication.prototype.emitEvent = function (eventType, interactionType, payload, error) {
        var _this = this;
        if (this.isBrowserEnvironment) {
            var message_1 = {
                eventType: eventType,
                interactionType: interactionType || null,
                payload: payload || null,
                error: error || null,
                timestamp: Date.now()
            };
            this.logger.info("Emitting event: " + eventType);
            this.eventCallbacks.forEach(function (callback, callbackId) {
                _this.logger.verbose("Emitting event to callback " + callbackId + ": " + eventType);
                callback.apply(null, [message_1]);
            });
        }
    };
    /**
     * Adds event callbacks to array
     * @param callback
     */
    ClientApplication.prototype.addEventCallback = function (callback) {
        if (this.isBrowserEnvironment) {
            var callbackId = this.browserCrypto.createNewGuid();
            this.eventCallbacks.set(callbackId, callback);
            this.logger.verbose("Event callback registered with id: " + callbackId);
            return callbackId;
        }
        return null;
    };
    ClientApplication.prototype.removeEventCallback = function (callbackId) {
        this.eventCallbacks.delete(callbackId);
        this.logger.verbose("Event callback " + callbackId + " removed.");
    };
    /**
     * Returns the logger instance
     */
    ClientApplication.prototype.getLogger = function () {
        return this.logger;
    };
    /**
     * Replaces the default logger set in configurations with new Logger with new configurations
     * @param logger Logger instance
     */
    ClientApplication.prototype.setLogger = function (logger) {
        this.logger = logger;
    };
    return ClientApplication;
}());

/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
/**
 * The PublicClientApplication class is the object exposed by the library to perform authentication and authorization functions in Single Page Applications
 * to obtain JWT tokens as described in the OAuth 2.0 Authorization Code Flow with PKCE specification.
 */
var PublicClientApplication = /** @class */ (function (_super) {
    __extends(PublicClientApplication, _super);
    /**
     * @constructor
     * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
     *
     * Important attributes in the Configuration object for auth are:
     * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
     * - authority: the authority URL for your application.
     * - redirect_uri: the uri of your application registered in the portal.
     *
     * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
     * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
     * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
     * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
     * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
     * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
     *
     * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
     * Full B2C functionality will be available in this library in future versions.
     *
     * @param {@link (Configuration:type)} configuration object for the MSAL PublicClientApplication instance
     */
    function PublicClientApplication(configuration) {
        return _super.call(this, configuration) || this;
    }
    /**
     * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
     * any code that follows this function will not execute.
     *
     * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
     * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
     *
     * @param {@link (RedirectRequest:type)}
     */
    PublicClientApplication.prototype.loginRedirect = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.acquireTokenRedirect(request || DEFAULT_REQUEST)];
            });
        });
    };
    /**
     * Use when initiating the login process via opening a popup window in the user's browser
     *
     * @param {@link (PopupRequest:type)}
     *
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    PublicClientApplication.prototype.loginPopup = function (request) {
        return this.acquireTokenPopup(request || DEFAULT_REQUEST);
    };
    /**
     * Silently acquire an access token for a given set of scopes. Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.
     *
     * @param {@link (SilentRequest:type)}
     * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
     */
    PublicClientApplication.prototype.acquireTokenSilent = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var silentRequest, serverTelemetryManager, silentAuthClient, cachedToken, e_1, tokenRenewalResult, tokenRenewalError_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
                        silentRequest = __assign(__assign(__assign({}, request), this.initializeBaseRequest(request)), { forceRefresh: request.forceRefresh || false });
                        this.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Silent, request);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 9]);
                        serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow, silentRequest.correlationId);
                        return [4 /*yield*/, this.createSilentFlowClient(serverTelemetryManager, silentRequest.authority)];
                    case 2:
                        silentAuthClient = _a.sent();
                        return [4 /*yield*/, silentAuthClient.acquireCachedToken(silentRequest)];
                    case 3:
                        cachedToken = _a.sent();
                        this.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, cachedToken);
                        return [2 /*return*/, cachedToken];
                    case 4:
                        e_1 = _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.acquireTokenByRefreshToken(silentRequest)];
                    case 6:
                        tokenRenewalResult = _a.sent();
                        this.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, tokenRenewalResult);
                        return [2 /*return*/, tokenRenewalResult];
                    case 7:
                        tokenRenewalError_1 = _a.sent();
                        this.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Silent, null, tokenRenewalError_1);
                        throw tokenRenewalError_1;
                    case 8: return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    return PublicClientApplication;
}(ClientApplication));

/**
 * Config method for creating request used for logging out the provided account
 * Based on the @azure/msal-browser package
 * @param user account information of the user to be logged out.
 */
var logoutRequest = function logoutRequest(user) {
  return {
    account: user
  };
};
/**
 * Config method for that returns the default login request.
 * If other scopes or prompt parameter is needed then this can be provided upon creating a new AuthenticationProvider
 * Based on the @azure/msal-browser package
 */

var defaultLoginRequest = {
  scopes: ['openid', 'profile', 'User.Read', 'offline_access'],
  prompt: 'select_account'
};
/**
 * Config method for that returns the a login request using the account information usually stored on the AuthenticationProvider instance.
 * Method used to silently sign in/re-authenticate a user
 * Based on the @azure/msal-browser package
 */

var loginSilentlyRequest = function loginSilentlyRequest(user) {
  return {
    account: user,
    forceRefresh: false,
    scopes: ['openid', 'profile', 'User.Read', 'offline_access']
  };
};

/**
 * Echo Core Authentication provider class for creating providers that provide logout-, login- and getAccessToken-methods.
 * Can be extended if needed
 * Based on the @azure/msal-browser package
 * @param configuration @azure/msal-browser Configuration object used for authentication
 * @param loginRequest Silent request used for login, can be specified if default is not not enough:
 * @var defaultLoginRequest = {
        account: user,
        forceRefresh: false,
        scopes: ['openid', 'profile', 'User.Read', 'offline_access']
    };
 */

var AuthenticationProvider = function AuthenticationProvider(configuration) {
  var _this = this;

  var loginRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultLoginRequest;

  _classCallCheck(this, AuthenticationProvider);

  this.userProperties = {};
  /**
   * Authentication provider method for handling login
   * Based on the @azure/msal-browser package
   * @param logRequest method for providing log for login authentication outcomes
   */

  this.handleLogin = function (logRequest) {
    return tslib_1(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _this2 = this;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.publicClient.handleRedirectPromise().then(function (response) {
                return tslib_1(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          this.isAuthenticated = false;

                          if (!response) {
                            _context.next = 7;
                            break;
                          }

                          logRequest && logRequest('Got response');
                          this.userProperties.account = response.account;
                          this.isAuthenticated = true;
                          _context.next = 15;
                          break;

                        case 7:
                          if (!(this.publicClient.getAllAccounts().length === 0)) {
                            _context.next = 12;
                            break;
                          }

                          logRequest && logRequest('No response and no users');
                          this.login();
                          _context.next = 15;
                          break;

                        case 12:
                          logRequest && logRequest('No response but I have users, attempting sso-silent or acquire token with redirect');
                          _context.next = 15;
                          return this.ssoSilentOrRedirectToAuthenticate();

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };
  /**
   * Authentication provider method that tries to acquire token silently
   * If acquiring token silently is successful, update account and set is authenticated to true
   * If acquiring token silently fails, check if it is because interaction is required and redirect sign in if it is
   * Based on the @azure/msal-browser package
   */


  this.ssoSilentOrRedirectToAuthenticate = function () {
    return tslib_1(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _this3 = this;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.publicClient.acquireTokenSilent(loginSilentlyRequest(this.publicClient.getAllAccounts()[0])).then(function (response) {
                _this3.userProperties.account = response.account;
                _this3.isAuthenticated = true;
              })["catch"](function (er) {
                console.log('Silent token acquisition failed.');

                if (er instanceof InteractionRequiredAuthError) {
                  console.log('Acquiring token using redirect');

                  _this3.publicClient.acquireTokenRedirect(_this3.loginRequest).then();
                } else {
                  console.error(er);
                }
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
  };
  /**
   * Authentication provider method that tries to acquire token silently
   * If acquiring token silently is successful, update account and set is authenticated to true
   * If acquiring token silently fails, check if it is because interaction is required and redirect sign in if it is
   * Based on the @azure/msal-browser package
   * @returns authenticationResult stating if authentication was successful or not
   */


  this.aquireTokenSilentOrRedirectToAuthenticate = function (silentRequest, redirectRequest) {
    return tslib_1(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var _this4 = this;

      var authenticationResult;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.publicClient.acquireTokenSilent(silentRequest).then(function (response) {
                authenticationResult = response;
              })["catch"](function (er) {
                if (er instanceof InteractionRequiredAuthError) {
                  _this4.publicClient.acquireTokenRedirect(redirectRequest)["catch"](console.error).then();
                } else {
                  _this4.userProperties.loginError = er;
                  console.error(er);
                }
              });

            case 2:
              return _context4.abrupt("return", authenticationResult ? authenticationResult : null);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
  };
  /**
   * Authentication provider method for forcing redirect login used when no user is already signed in
   * Based on the @azure/msal-browser package
   */


  this.login = function () {
    return tslib_1(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.publicClient.loginRedirect(this.loginRequest);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
  };
  /**
   * Authentication provider method for signing out a user
   * Based on the @azure/msal-browser package
   */


  this.logout = function () {
    if (_this.userProperties.account) {
      _this.publicClient.logout(logoutRequest(_this.userProperties.account));
    }
  };
  /**
   * Authentication provider method for getting the users authentication token
   * Based on the @azure/msal-browser package
   * @returns valid access token if request was successful, undefined if not.
   */


  this.getAccessToken = function (silentRequest) {
    return tslib_1(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var adResult;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.aquireTokenSilentOrRedirectToAuthenticate(silentRequest, this.loginRequest);

            case 2:
              adResult = _context6.sent;
              return _context6.abrupt("return", adResult ? adResult.accessToken : undefined);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));
  };

  this.publicClient = new PublicClientApplication(configuration);
  this.loginRequest = loginRequest;
  this.isAuthenticated = false;
};

var webClientId = env().REACT_APP_AZURE_AD_CLIENT_ID;
var tenant = env().REACT_APP_AZURE_AD_TENNANT;
var authority = "https://login.microsoftonline.com/".concat(tenant);
var echoConfig = {
  auth: {
    authority: authority,
    clientId: webClientId,
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    navigateToLoginRequestUrl: true
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true
  }
};
/**
 * Echo Authentication provider instance used as main auth provider for echo
 * Based on the @azure/msal-browser package
 * @param config configuration object specific to for echo application
 */

var EchoAuthProvider = new AuthenticationProvider(echoConfig);

/**
 * Echo Core Action for updating the globalState
 * @param ctx use `getGlobalContest` for ctx
 * @param update callback function for updating the state.
 */

function dispatch(ctx, update) {
  reactAtom_4(ctx.state, update);
}
/**
 * Echo Core Action for reading the globalState
 * @param ctx use `getGlobalContest` for ctx
 * @param read callback function for reading state parameters.
 */

function readState(ctx, read) {
  var state = reactAtom_3(ctx.state);
  return read(state);
}

var PersistEchoSetting = /*#__PURE__*/function () {
  function PersistEchoSetting() {
    var echoStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : echoBase.storage;
    var defaultSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : settings;

    _classCallCheck(this, PersistEchoSetting);

    this.echoStorage = echoStorage;
    this.defaultSettings = defaultSettings;
  }
  /**
   * Persist setting data in LocalStorage for later use.
   * @export
   * @param {Settings} settings
   */


  _createClass(PersistEchoSetting, [{
    key: "persistSettingsInLocalStorage",
    value: function persistSettingsInLocalStorage(settings) {
      var _this = this;

      Object.keys(settings).forEach(function (key) {
        _this.echoStorage.setItem(key, settings[key]);
      });
    }
    /**
     * Core function returning application setting from LocalStorage
     * or default settings
     * @export
     * @return {*}  {Settings} localStorage or defaultSettings
     */

  }, {
    key: "getSettingsFromLocalStorage",
    value: function getSettingsFromLocalStorage() {
      var _this2 = this;

      var newSettings = this.defaultSettings;
      Object.keys(this.defaultSettings).forEach(function (key) {
        var data = _this2.echoStorage.getItem(key);

        if (data) {
          newSettings[key] = data;
        }
      });
      return newSettings;
    }
    /**
     * Core function returning partial of the global setting from LocalStorage,
     * @export
     * @return {*}  {Partial<Readonly<T>} localStorage or defaultSettings
     */

  }, {
    key: "getSettingsFormLocalStorageByType",
    value: function getSettingsFormLocalStorageByType() {
      var _this3 = this;

      var newSettings = {};
      Object.keys(this.defaultSettings).forEach(function (key) {
        var data = _this3.echoStorage.getItem(key);

        if (data) {
          newSettings[key] = data;
        }
      });
      return newSettings;
    }
    /**
     * Core function removing all user settings form localStorage
     * @export
     */

  }, {
    key: "removeAllSettingsFromLocalStorage",
    value: function removeAllSettingsFromLocalStorage() {
      var _this4 = this;

      Object.keys(this.defaultSettings).forEach(function (key) {
        _this4.echoStorage.removeItem(key);
      });
    }
    /**
     * Core function removing user settings form localStorage by key
     * @param {string} key for select setting to remove
     * @export
     */

  }, {
    key: "removeSettingFromLocalStorageByKey",
    value: function removeSettingFromLocalStorageByKey(key) {
      this.echoStorage.removeItem(key);
    }
  }]);

  return PersistEchoSetting;
}();
var persistEchoSetting = new PersistEchoSetting();

/**
 * Function used for updating specific settings value in the global state.
 *
 * @export Function Echo Core.
 * @param {K} key is keyof Settings
 * @param {Settings[K]} data associated with the key
 */

function updateSettingByKey(key, data) {
  var settings = Object.assign({}, getSettings());
  settings[key] = data;
  dispatch(getCoreContext(), function (state) {
    persistEchoSetting.persistSettingsInLocalStorage(settings);
    var newState = Object.assign(Object.assign({}, state), {
      settings: settings
    });
    return newState;
  });
}
/**
 * Function used for updating one or more items in the settings at the global state.
 * @export Function Echo Core.
 * @param {Settings} settings
 */

function setSetting(partialSettings) {
  var settings = Object.assign(Object.assign({}, getSettings()), partialSettings);
  dispatch(getCoreContext(), function (state) {
    persistEchoSetting.persistSettingsInLocalStorage(settings);
    var newState = Object.assign(Object.assign({}, state), {
      settings: settings
    });
    return newState;
  });
}
/**
 * Function for getting the settings form the global state.
 * @export Function Echo Core.
 * @return {*}  {Readonly<Settings>}
 */

function getSettings() {
  return readState(getCoreContext(), function (state) {
    return state.settings;
  });
}
/**
 * Function for returning settings by key form the global state. The return object is Readonly.
 * @export Function from Echo Core
 * @template K is in key of `Settings`
 * @param {K} key
 * @return {*}  {Readonly<Settings[K]>}
 */

function getSettingsByKey(key) {
  return getSettings()[key];
}

/**
 * Echo Core function for adding user information to echo core state.
 * @param userProfile use for updating user profile.
 * @param userPhotoUrl use for updating user photo url.
 *
 */

function setUserInformation(userProfile, userPhotoUrl) {
  dispatch(getCoreContext(), function (state) {
    return Object.assign(Object.assign({}, state), {
      userProfile: userProfile,
      userPhotoUrl: userPhotoUrl
    });
  });
}

var ClassObserver = /*#__PURE__*/function () {
  function ClassObserver() {
    _classCallCheck(this, ClassObserver);

    this.id = 0;
    this.observers = [];
  }

  _createClass(ClassObserver, [{
    key: "addSubscriber",
    value: function addSubscriber(callback, type) {
      this.id++;
      var functionCallback = {
        id: this.id,
        callback: callback,
        type: type
      };
      this.observers.push(functionCallback);
      return this.id;
    }
  }, {
    key: "removeSubscriber",
    value: function removeSubscriber(id) {
      this.observers = this.observers.filter(function (item) {
        return item.id !== id;
      });
    }
  }, {
    key: "notify",
    value: function notify(data, type) {
      this.observers.forEach(function (observer) {
        if (observer.type === type) {
          observer.callback(data);
        }
      });
    }
  }]);

  return ClassObserver;
}();

new ClassObserver();
var ObserverClass = ClassObserver;

var ECHO_CORE_MAIN = 'echoCoreMain';
var ECHO_CORE_SEARCH = 'echoCoreSearch';
var PANEL_KEY = 'panel';
var ACTIVE_PANEL_KEY = 'active-panel';

var PanelHandlerClass = /*#__PURE__*/function (_ObserverClass) {
  _inherits(PanelHandlerClass, _ObserverClass);

  var _super = _createSuper(PanelHandlerClass);

  // eslint-disable-next-line
  function PanelHandlerClass() {
    var _this;

    _classCallCheck(this, PanelHandlerClass);

    _this = _super.call(this);

    _this.registerCorePanels = function (searchPanel, mainMenu) {
      _this.mainMenu = mainMenu;
      _this.searchPanel = searchPanel;
    };

    _this.getCorePanels = function () {
      var addSearch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!_this.searchPanel || !_this.mainMenu) return [];
      var panels = [];
      if (addSearch) panels.push(_this.searchPanel);
      panels.push(_this.mainMenu);
      return panels;
    };

    _this.combinePanels = function (modulePanels, addSearch, corePanels) {
      var panels = [].concat(_toConsumableArray(corePanels(addSearch)), _toConsumableArray(modulePanels));

      _this.notify(panels, PANEL_KEY);

      return panels;
    };

    return _this;
  }

  return PanelHandlerClass;
}(ObserverClass);

var PanelHandler = new PanelHandlerClass();

var graphConfig = {
  graphProfileEndpoint: 'https://graph.microsoft.com/v1.0/me',
  graphProfilePictureEndpoint: 'https://graph.microsoft.com/v1.0/me/photo/$value'
};
/**
 * Method returning graph api request for a user.
 * Method is used to authenticate user before calling the graph api
 * Based on the @azure/msal-browser package
 * @param user to authenticate
 */

var graphApiRequest = function graphApiRequest(user) {
  return {
    account: user,
    forceRefresh: false,
    scopes: ['openid', 'profile', 'User.Read', 'offline_access']
  };
};

/**
 * Graph method for fetching a users profile
 * Method authenticates user based on EchoAuthProvider user information
 * @returns User profile or undefined if user is not authenticated
 */

var graphGetProfile = function graphGetProfile() {
  return tslib_1(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var authenticationResult, userProfile;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (EchoAuthProvider.userProperties.account) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.next = 4;
            return EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate(graphApiRequest(EchoAuthProvider.userProperties.account), EchoAuthProvider.loginRequest);

          case 4:
            authenticationResult = _context.sent;

            if (!authenticationResult) {
              _context.next = 12;
              break;
            }

            _context.next = 8;
            return getUserProfile(graphConfig.graphProfileEndpoint, authenticationResult.accessToken);

          case 8:
            userProfile = _context.sent;
            return _context.abrupt("return", userProfile);

          case 12:
            return _context.abrupt("return");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};
/**
 * Graph method for fetching a users profile picture
 * Method authenticates user based on EchoAuthProvider user information
 * @returns User profile picture or undefined if user is not authenticated
 */

var graphGetProfilePicture = function graphGetProfilePicture() {
  return tslib_1(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var authenticationResult, userProfilePictureUrl;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (EchoAuthProvider.userProperties.account) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            _context2.next = 4;
            return EchoAuthProvider.aquireTokenSilentOrRedirectToAuthenticate(graphApiRequest(EchoAuthProvider.userProperties.account), EchoAuthProvider.loginRequest);

          case 4:
            authenticationResult = _context2.sent;

            if (!authenticationResult) {
              _context2.next = 12;
              break;
            }

            _context2.next = 8;
            return getUserProfilePicture(graphConfig.graphProfilePictureEndpoint, authenticationResult.accessToken);

          case 8:
            userProfilePictureUrl = _context2.sent;
            return _context2.abrupt("return", userProfilePictureUrl);

          case 12:
            return _context2.abrupt("return");

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
};
/**
 * Graph method that calls fetch user profile from graph api and handles response
 * @param endpoint graph endpoint to call, based on graph config values
 * @param token users access token used in graph fetch call
 * @returns User profile or undefined if response is not successful
 */

var getUserProfile = function getUserProfile(endpoint, token) {
  return tslib_1(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var profile, headers, bearer, options, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            profile = undefined;
            headers = new Headers();
            bearer = "Bearer ".concat(token);
            headers.append('Authorization', bearer);
            options = {
              method: 'GET',
              headers: headers
            };

            if (isDevelopment() || env().REACT_APP_LOGGER_ACTIVE) {
              console.log('request for user profile made to Graph API at: ' + new Date().toString());
            }

            _context3.next = 8;
            return fetch(endpoint, options);

          case 8:
            response = _context3.sent;

            if (response && response.ok) {
              profile = response.json();
            }

            return _context3.abrupt("return", profile);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
};
/**
 * Graph method that calls profile picture endpoint on graph api and handles response
 * @param endpoint graph endpoint to call, based on graph config values
 * @param token users access token used in graph fetch call
 * @returns User profile picture or undefined if response is not successful
 */

var getUserProfilePicture = function getUserProfilePicture(endpoint, token) {
  return tslib_1(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var pictureUrl, headers, options, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            headers = new Headers();
            headers.append('Authorization', 'Bearer ' + token);
            headers.append('Content-Type', 'image/jpeg');
            options = {
              method: 'GET',
              headers: headers
            };

            if (isDevelopment() || env().REACT_APP_LOGGER_ACTIVE) {
              console.log('request for user profile picture made to Graph API at: ' + new Date().toString());
            }

            _context4.next = 7;
            return fetch(endpoint, options);

          case 7:
            response = _context4.sent;

            if (!(response && response.ok)) {
              _context4.next = 11;
              break;
            }

            _context4.next = 11;
            return response.blob().then(function (data) {
              if (data !== null) {
                window.URL = window.URL || window.webkitURL;
                pictureUrl = window.URL.createObjectURL(data);
              }
            });

          case 11:
            return _context4.abrupt("return", pictureUrl);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
};

/**
 * Method for setting up the echo core basics:
 * - authenticate user
 * - registerer panels based on config element
 * - retrieving the settings form local storage.
 * @param coreConfig object that defines application configurations.
 * Which panels should be on the left, and which should be on the right
 * logger function to be used for authentication
 */

function setup(coreConfig) {
  return tslib_1(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return authenticate(coreConfig);

          case 2:
            PanelHandler.registerCorePanels(coreConfig.leftPanel, coreConfig.rightPanel);
            setSetting(persistEchoSetting.getSettingsFromLocalStorage());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}
/**
 * Method for authenticating users in echo
 * @param coreConfig object that defines application configurations.
 * logger function to be used for authentication
 */

function authenticate(coreConfig) {
  return tslib_1(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return EchoAuthProvider.handleLogin(coreConfig.authProviderLogFunc);

          case 2:
            getGraphProfile();
            return _context2.abrupt("return", EchoAuthProvider.isAuthenticated);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}
/**
 * Method for fetching graph user information users in echo
 * If user is not authenticated, then graph information will never be fetched
 */

function getGraphProfile() {
  return tslib_1(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _yield$Promise$all, _yield$Promise$all2, profile, userPhoto;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!EchoAuthProvider.isAuthenticated) {
              _context3.next = 8;
              break;
            }

            _context3.next = 3;
            return Promise.all([graphGetProfile(), graphGetProfilePicture()]);

          case 3:
            _yield$Promise$all = _context3.sent;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            profile = _yield$Promise$all2[0];
            userPhoto = _yield$Promise$all2[1];
            setUserInformation(profile, userPhoto);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}

/**
 * Hook for running the callback once on mount.
 * @param callback The callback to be invoked on mounting.
 */

function useInitial(callback) {
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  react.useLayoutEffect(function () {
    if (!mounted) {
      callback();
      setMounted(true);
    }
  }, [callback, mounted]);
}

var rootLoadingElement = document.getElementById('rootloading');
/**
 * Echo core hook for initializing echo core setup
 * @param config configuration object specific to for echo application
 * @returns whether user is authenticated or not
 */

var useEchoSetup = function useEchoSetup(config) {
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAuthenticated = _useState2[0],
      setIsAuthenticated = _useState2[1];

  useInitial(function () {
    return tslib_1(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              rootLoadingElement && rootLoadingElement.remove();
              _context.next = 3;
              return setup(config);

            case 3:
              setIsAuthenticated(EchoAuthProvider.isAuthenticated);
              setSetting(persistEchoSetting.getSettingsFromLocalStorage());

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  });
  return isAuthenticated;
};

/**
 * Echo Core function for getting the graph user photo url from the echo core state.
 */

function useUserPhoto() {
  var _useAtom = reactAtom_2(CoreContext.state),
      userPhotoUrl = _useAtom.userPhotoUrl;

  return userPhotoUrl;
}

/**
 * Echo Core function for getting the graph user profile from echo core state.
 */

function useUserProfile() {
  var _useAtom = reactAtom_2(CoreContext.state),
      userProfile = _useAtom.userProfile;

  return userProfile;
}

/**
 * Echo core function for updating the legend State.
 * @export Function from Echo Core
 * @param {Partial<LegendOptions>} { isActive: boolean; selectedLegendType: string; }
 */

function setLegendOption(legendOptions) {
  dispatch(getCoreContext(), function (state) {
    return Object.assign(Object.assign({}, state), {
      legendOptions: Object.assign(Object.assign({}, state.legendOptions), legendOptions)
    });
  });
}

/**
 * Core Action for registering panels
 * @param panels
 * @param options
 */

function registerPanels() {
  var panels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var addSearch = options.addSearch,
      searchActive = options.searchActive,
      customPanelActive = options.customPanelActive,
      panelWrapper = options.panelWrapper,
      panel = options.panel,
      panelButton = options.panelButton;
  var newPanels = PanelHandler.combinePanels(panels, addSearch === undefined ? true : addSearch, PanelHandler.getCorePanels);
  var activePanel = customPanelActive ? customPanelActive : searchActive ? ECHO_CORE_SEARCH : '';
  dispatch(getCoreContext(), function (s) {
    return Object.assign(Object.assign({}, s), {
      panels: newPanels,
      ui: Object.assign(Object.assign({}, s.ui), {
        panelWrapper: panelWrapper,
        panel: panel,
        panelButton: panelButton
      }),
      activePanel: activePanel
    });
  });
  /**
   * reason for setTimeout is conflict with registerPanel and notify.
   * TODO: add RXJS
   */

  setTimeout(function () {
    PanelHandler.notify(readState(getCoreContext(), function (state) {
      return state.panels;
    }), PANEL_KEY);
    PanelHandler.notify(readState(getCoreContext(), function (state) {
      return state.activePanel;
    }), ACTIVE_PANEL_KEY);
  }, 200);
}

var AuthenticationError = /*#__PURE__*/function (_BaseError) {
  _inherits(AuthenticationError, _BaseError);

  var _super = _createSuper(AuthenticationError);

  function AuthenticationError() {
    _classCallCheck(this, AuthenticationError);

    return _super.apply(this, arguments);
  }

  return AuthenticationError;
}(echoBase.BaseError);
/**
 * Base Client class providing methods for performing a fetch with authentication and acquiring AccessToken.
 * @param authProvider used for fetching token to be used in fetch
 * @getSilentRequest returns the silent request used to perform the action of fetching the authentication provider token
 */

var BaseClient$1 = /*#__PURE__*/function () {
  function BaseClient(authProvider, getSilentRequest) {
    _classCallCheck(this, BaseClient);

    this.authProvider = authProvider;
    this.getSilentRequest = getSilentRequest;
  }
  /**
   * Function for silently acquiring AccessToken.
   *
   * @return {*}  {(Promise<string | undefined>)}
   * @memberof BaseClient
   */


  _createClass(BaseClient, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      return tslib_1(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var authenticationResult;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.authProvider.userProperties.account) {
                  _context.next = 2;
                  break;
                }

                throw new echoBase.ArgumentError({
                  argumentName: 'authProvider.userProperties.account'
                });

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.authProvider.aquireTokenSilentOrRedirectToAuthenticate(this.getSilentRequest(this.authProvider.userProperties.account), this.authProvider.loginRequest);

              case 5:
                authenticationResult = _context.sent;
                return _context.abrupt("return", authenticationResult ? authenticationResult.accessToken : '');

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                throw new AuthenticationError({
                  message: 'failed to authenticate',
                  exception: _context.t0
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));
    }
    /**
     * Returns true if user is authenticated
     *
     * @return {*}  {boolean}
     * @memberof BaseClient
     */

  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return this.authProvider.isAuthenticated;
    }
    /**
     * Fetch with accessToken from authProvider.
     *
     * @return {*}  {Promise<Response>}
     * @memberof BaseClient
     */

  }, {
    key: "fetch",
    value: function fetch(url) {
      var headerOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
      var body = arguments.length > 3 ? arguments[3] : undefined;
      var signal = arguments.length > 4 ? arguments[4] : undefined;
      return tslib_1(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var accessToken;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.authProvider.userProperties.account) {
                  _context2.next = 2;
                  break;
                }

                throw new echoBase.ArgumentError({
                  argumentName: 'authProvider.userProperties.account'
                });

              case 2:
                _context2.next = 4;
                return this.getAccessToken();

              case 4:
                accessToken = _context2.sent;
                _context2.next = 7;
                return this.fetchWithToken(url, accessToken, headerOptions, method, body, signal);

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
    /**
     * Fetch with specific accessToken.
     *
     * @return {*}  {Promise<Response>}
     * @memberof BaseClient
     */

  }, {
    key: "fetchWithToken",
    value: function fetchWithToken(endpoint, token) {
      var headerOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';
      var body = arguments.length > 4 ? arguments[4] : undefined;
      var signal = arguments.length > 5 ? arguments[5] : undefined;
      return tslib_1(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var statusCode, headers, response, contentType, errorInstance;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                statusCode = 0;
                _context3.prev = 1;
                headers = Object.assign(Object.assign({
                  Authorization: 'Bearer ' + token
                }, headerOptions), body && {
                  'Content-Type': 'application/json'
                });
                _context3.next = 5;
                return fetch(endpoint, {
                  method: method,
                  headers: headers,
                  body: body,
                  signal: signal
                });

              case 5:
                response = _context3.sent;
                if (response.status) statusCode = response.status;

                if (!(response && !response.ok)) {
                  _context3.next = 18;
                  break;
                }

                contentType = response.headers.get('content-type');

                if (!(contentType && contentType.indexOf('application/json') !== -1)) {
                  _context3.next = 15;
                  break;
                }

                _context3.next = 12;
                return response.json();

              case 12:
                throw _context3.sent;

              case 15:
                _context3.next = 17;
                return response.text();

              case 17:
                throw _context3.sent;

              case 18:
                return _context3.abrupt("return", response);

              case 21:
                _context3.prev = 21;
                _context3.t0 = _context3["catch"](1);
                errorInstance = echoBase.initializeError(echoBase.NetworkError, {
                  httpStatusCode: statusCode,
                  url: endpoint,
                  exception: _context3.t0
                });
                throw errorInstance;

              case 25:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 21]]);
      }));
    }
    /**
     * use fetchWithToken instead
     * @deprecated
     */

  }, {
    key: "fetchFromUrl",
    value: function fetchFromUrl(url, accessToken, headerOptions) {
      var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';
      var body = arguments.length > 4 ? arguments[4] : undefined;
      var signal = arguments.length > 5 ? arguments[5] : undefined;
      return tslib_1(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.fetchWithToken(url, accessToken, headerOptions, method, body, signal);

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }]);

  return BaseClient;
}();

var echoClientId = env().REACT_APP_API_CLIENT_ID;
var echoRequest = function echoRequest(user) {
  return {
    account: user,
    forceRefresh: false,
    scopes: [echoClientId + '/.default']
  };
};

/**
 * Echo client extends base client class and uses echo auth provider for fetch
 */

var EchoClient = /*#__PURE__*/function (_BaseClient) {
  _inherits(EchoClient, _BaseClient);

  var _super = _createSuper(EchoClient);

  function EchoClient(authProvider, getSilentRequest) {
    _classCallCheck(this, EchoClient);

    return _super.call(this, authProvider, getSilentRequest);
  }

  return EchoClient;
}(BaseClient$1);
var echoClient = new EchoClient(EchoAuthProvider, echoRequest);

/**
 * Function Used for updating the modules global state.
 * @param moduleState Kan be any type of data, The module can provide its own state.
 * This state wil be over written when new module is mounted.
 */

function setModuleState(moduleState) {
  dispatch(getCoreContext(), function (state) {
    return Object.assign(Object.assign({}, state), {
      moduleState: moduleState
    });
  });
}

/**
 * Hook for handling the application module state object.
 * @param initialState The initial state object used for registering.
 * this parameter is default undefined for preventing initialization on every render.
 */

function useAppModuleState() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var state = reactAtom_2(getCoreState());
  useInitial(function () {
    initialState && setModuleState(initialState);
  });
  return state.moduleState;
}

var NetworkError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkError = void 0;


/**
 * Network Error class represent a Network error ocurred during any given HTTP request
 * @param message an error message in human readable format
 * @param httpStatusCode HTTP error code
 * @param url A URL endpoint where the connection was initiated
 * @param exception a generated exception
 * @export
 * @class NetworkError
 * @extends {BaseError}
 */
var NetworkError = /** @class */ (function (_super) {
    tslib.__extends(NetworkError, _super);
    function NetworkError(_a) {
        var message = _a.message, httpStatusCode = _a.httpStatusCode, url = _a.url, exception = _a.exception;
        var _this = _super.call(this, { message: message || '', exception: exception }) || this;
        _this.getUrl = function () {
            return _this.properties.url;
        };
        _this.addProperties({ url: url, httpStatusCode: httpStatusCode });
        !message && (_this.message = _this.name + " " + httpStatusCode + " " + url);
        return _this;
    }
    return NetworkError;
}(BaseError_1.default));
exports.NetworkError = NetworkError;
exports.default = NetworkError;

});

unwrapExports(NetworkError_1);
var NetworkError_2 = NetworkError_1.NetworkError;

var BackendError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


var BackendError = /** @class */ (function (_super) {
    tslib.__extends(BackendError, _super);
    function BackendError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BackendError;
}(NetworkError_1.default));
exports.default = BackendError;

});

unwrapExports(BackendError_1);

var ForbiddenError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


var ForbiddenError = /** @class */ (function (_super) {
    tslib.__extends(ForbiddenError, _super);
    function ForbiddenError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ForbiddenError;
}(NetworkError_1.default));
exports.default = ForbiddenError;

});

unwrapExports(ForbiddenError_1);

var NotFoundError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


var NotFoundError = /** @class */ (function (_super) {
    tslib.__extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(NetworkError_1.default));
exports.default = NotFoundError;

});

unwrapExports(NotFoundError_1);

var ValidationError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });


var ValidationError = /** @class */ (function (_super) {
    tslib.__extends(ValidationError, _super);
    function ValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ValidationError;
}(NetworkError_1.default));
exports.default = ValidationError;

});

unwrapExports(ValidationError_1);

var network = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = exports.NotFoundError = exports.ForbiddenError = exports.BackendError = void 0;

tslib.__exportStar(BackendError_1, exports);
var BackendError_1$1 = BackendError_1;
Object.defineProperty(exports, "BackendError", { enumerable: true, get: function () { return BackendError_1$1.default; } });
tslib.__exportStar(ForbiddenError_1, exports);
var ForbiddenError_1$1 = ForbiddenError_1;
Object.defineProperty(exports, "ForbiddenError", { enumerable: true, get: function () { return ForbiddenError_1$1.default; } });
tslib.__exportStar(NotFoundError_1, exports);
var NotFoundError_1$1 = NotFoundError_1;
Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function () { return NotFoundError_1$1.default; } });
tslib.__exportStar(ValidationError_1, exports);
var ValidationError_1$1 = ValidationError_1;
Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function () { return ValidationError_1$1.default; } });

});

unwrapExports(network);
var network_1 = network.ValidationError;
var network_2 = network.NotFoundError;
var network_3 = network.ForbiddenError;
var network_4 = network.BackendError;

/**
 * Echo Core Function for updating moduleState by key.
 * @param state Module state defined by module creator.
 * @param key to update.
 * @param data provided to update given key.
 *
 * `For use in Echo Core only.`
 */

function setSpecificModuleState(state, key, data) {
  var newState = Object.assign(Object.assign({}, state), _defineProperty({}, key, data));
  setModuleState(newState);
}

/**
 * update module State with specific parameter
 * @param key The key of the object to update.
 * @param data The data related to key.
 */

function updateSpecificModuleState(key, data) {
  setSpecificModuleState(readModuleState(), key, data);
}
/**
 * Update module State.
 * @param data The data for updating the module state.
 */

function updateModuleState(data) {
  setModuleState(data);
}
/**
 * Readonly for module state
 * @return the current module state.
 */

function readModuleState() {
  return readState(getCoreContext(), function (state) {
    return Object.assign({}, state.moduleState);
  });
}

/**
 * Hook for running the callback once on umount.
 * @param callback The callback to be invoked on unrounding.
 */

function useCleanup(callback) {
  react.useLayoutEffect(function () {
    return function () {
      callback();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/**
 *Echo Core hook for handling non-default panel ui.
 * @return {PanelUI}  Reads the ui state and returns a partial ui-object of type PanelUI
 */

function usePanelUI() {
  var _useAtom = reactAtom_2(CoreContext.state),
      ui = _useAtom.ui;

  return ui;
}

/**
 * Echo Core hook for for handling panels defaults to left panel.
 * @param panelType can be set to `left`, `right` og `all`.
 * @returns {UsePanels} Returns and object `modulePanel`
 * , `setActivePanel`, `activePanel`, `isPanelActive` and `panelUI`.
 */

function usePanels() {
  var panelType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : String(exports.PanelType.left);

  var _useState = react.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      modulePanels = _useState2[0],
      setModulePanels = _useState2[1];

  var _useState3 = react.useState(readState(getCoreContext(), function (state) {
    return state.activePanel;
  })),
      _useState4 = _slicedToArray(_useState3, 2),
      activePanel = _useState4[0],
      setPanel = _useState4[1];

  var panelUI = usePanelUI();

  var _useState5 = react.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isPanelActive = _useState6[0],
      setIsPanelActive = _useState6[1];

  react.useEffect(function () {
    function handleUpdatePanels(panels) {
      var data = panelType === exports.PanelType.all ? panels : panels.filter(function (panel) {
        return panel.panelType === panelType;
      });
      setModulePanels(data);
    }

    var panelId = PanelHandler.addSubscriber(handleUpdatePanels, PANEL_KEY);
    return function () {
      PanelHandler.removeSubscriber(panelId);
    };
  }, [panelType]);
  react.useEffect(function () {
    if (!!modulePanels.find(function (panel) {
      return panel.key === activePanel;
    })) setIsPanelActive(true);else setIsPanelActive(false);
  }, [activePanel, modulePanels]);
  react.useEffect(function () {
    function handleActivePanel(key) {
      setPanel(key);
    }

    var activePanelId = PanelHandler.addSubscriber(handleActivePanel, ACTIVE_PANEL_KEY);
    return function () {
      PanelHandler.removeSubscriber(activePanelId);
    };
  }, []);
  var setActivePanel = react.useCallback(function (key) {
    dispatch(getCoreContext(), function (s) {
      return Object.assign(Object.assign({}, s), {
        activePanel: key
      });
    });
    PanelHandler.notify(readState(getCoreContext(), function (state) {
      return state.activePanel;
    }), ACTIVE_PANEL_KEY);
  }, []);
  return {
    modulePanels: modulePanels,
    setActivePanel: setActivePanel,
    activePanel: activePanel,
    isPanelActive: isPanelActive,
    panelUI: panelUI
  };
}

var PersistPlantsData = /*#__PURE__*/function () {
  function PersistPlantsData(echoStorage, defaultPlantsData) {
    _classCallCheck(this, PersistPlantsData);

    this.echoStorage = echoStorage;
    this.defaultPlantsData = defaultPlantsData;
    this.key = 'plantsData';
  }
  /**
   * Persist list of plants in LocalStorage.
   * @export
   * @param {PlantsData} data
   */


  _createClass(PersistPlantsData, [{
    key: "persistPlantsDataInLocalStorage",
    value: function persistPlantsDataInLocalStorage(data) {
      this.echoStorage.setItem(this.key, data);
    }
    /**
     * Function for returning plantsData from LocalStorage
     * @export
     * @return {*}  {PlantsData} localStorage
     */

  }, {
    key: "getPlantsDataFromLocalStorage",
    value: function getPlantsDataFromLocalStorage() {
      var newPlantsData = this.defaultPlantsData;
      var data = this.echoStorage.getItem(this.key);

      if (data && typeof data !== 'string') {
        newPlantsData = data;
      }

      return newPlantsData;
    }
  }]);

  return PersistPlantsData;
}();
var persistPlantsData = new PersistPlantsData(echoBase.storage, plantsData);

/**
 * Function for updating plantsData in global state.
 * @export
 * @param {Partial<PlantsData>} partialPlantsData
 */

function setPlantsData(partialPlantsData) {
  var plantsData = Object.assign(Object.assign({}, getPlantsData()), partialPlantsData);
  dispatch(getCoreContext(), function (state) {
    persistPlantsData.persistPlantsDataInLocalStorage(plantsData);
    var newState = Object.assign(Object.assign({}, state), {
      plantsData: plantsData
    });
    return newState;
  });
}
/**
 * Function for getting plantsData from the global state.
 * @export
 * @return {*}  {Readonly<PlantsData>}
 */

function getPlantsData() {
  return readState(getCoreContext(), function (state) {
    return state.plantsData;
  });
}
/**
 * Function for getting list of plants from the global state.
 * @export
 * @return {*}  {Readonly<Plant[]>}
 */

function getPlants() {
  return getPlantsData().plants;
}

function useGlobalState(select) {
  var state = reactAtom_2(getCoreState());
  return typeof select === 'function' ? select(state) : state;
}

/**
 * Hook for returning plantsData from the global state.
 * @export
 * @return {*}  {PlantsData}
 */

function usePlantsData() {
  var _useGlobalState = useGlobalState(),
      plantsData = _useGlobalState.plantsData;

  return plantsData;
}
/**
 * Hook for returning list of plants from the global state.
 * @export
 * @return {*}  {Plant[]}
 */

function usePlants() {
  return usePlantsData().plants;
}

/**
 * Used for setting or updating the selected plant.
 *
 * @export Function from Echo Core.
 * @param {PlantSettings} plantSettings selected plant data object.
 */

function setSelectedPlant(plantSettings) {
  setSetting({
    plantSettings: plantSettings
  });
  persistEchoSetting.persistSettingsInLocalStorage({
    plantSettings: plantSettings
  });
}
/**
 * Used from retrieving the selected PlantData.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */

function getSelectedPlant() {
  var _readState = readState(getCoreContext(), function (state) {
    return state.settings.plantSettings;
  }),
      instCode = _readState.instCode,
      sapPlantId = _readState.sapPlantId,
      proCoSysPlantId = _readState.proCoSysPlantId,
      plantName = _readState.plantName;

  return {
    instCode: instCode,
    sapPlantId: sapPlantId,
    proCoSysPlantId: proCoSysPlantId,
    plantName: plantName
  };
}
/**
 * Used from retrieving the selected instCode.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */

function getInstCode() {
  return getSelectedPlant().instCode;
}
/**
 * Used from retrieving the selected sapPlantId.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */

function getSapPlantId() {
  return getSelectedPlant().sapPlantId;
}
/**
 * Used from retrieving the selected proCoSysPlantId.
 *
 * @export Function from Echo Core.
 * @return {*}  {PlantSettings}
 */

function getProCoSysPlantId() {
  return getSelectedPlant().proCoSysPlantId;
}

var CoreSettings = function CoreSettings() {
  _classCallCheck(this, CoreSettings);

  // Global Settings Actions
  this.updateSettingByKey = updateSettingByKey;
  this.setSetting = setSetting;
  this.getSettings = getSettings;
  this.getSettingsByKey = getSettingsByKey;
  /**
   * Plant specific actions to Get and Set Plant date
   * @param {PlantSettings} plantSettings Parameter for both get and set.
   * @memberof CoreSettings
   */

  this.plant = {
    getSelected: getSelectedPlant,
    setSelected: setSelectedPlant
  }; // Persist the EchoSetting

  this.persistSetting = persistEchoSetting;
};

var EchoSettings = new CoreSettings();

/**
 * Internal Echo Core hook function for getting the settings from echo core state.
 * @return {*}  {Settings}
 */

function useSettings() {
  var _useGlobalState = useGlobalState(),
      settings = _useGlobalState.settings;

  return settings;
}
/**
 * Echo Core hook function for getting the plant settings from echo core state.
 * and function updating the plantSettings.
 * @export Hook fom Echo Core
 * @return {*}  {UsePlantSettings}
 */


function usePlantSettings() {
  var _useSettings$plantSet = useSettings().plantSettings,
      instCode = _useSettings$plantSet.instCode,
      sapPlantId = _useSettings$plantSet.sapPlantId,
      plantName = _useSettings$plantSet.plantName,
      proCoSysPlantId = _useSettings$plantSet.proCoSysPlantId;
  return {
    instCode: instCode,
    sapPlantId: sapPlantId,
    plantName: plantName,
    proCoSysPlantId: proCoSysPlantId
  };
}

/**
 * Util for returning uniq array.
 * @param array of type T
 */
function makeUniqBy(prop, arr) {
  var set = new Set();
  return arr.filter(function (o) {
    return !set.has(o[prop]) && set.add(o[prop]);
  });
}

var EchoEnv = new Env();
var Core = function Core() {
  _classCallCheck(this, Core);

  this.useEchoSetup = useEchoSetup;
  this.registerPanels = registerPanels;
  this.useAppModuleState = useAppModuleState;
  this.useLegendOptions = useLegendOptions;
  this.useUserProfile = useUserProfile;
  this.useUserPhoto = useUserPhoto;
  this.useAuthenticate = useAuthenticate;
  this.setLegendOption = setLegendOption;
  this.ECHO_CORE_MAIN = ECHO_CORE_MAIN;
  this.ECHO_CORE_SEARCH = ECHO_CORE_SEARCH;
  this.EchoAuthProvider = EchoAuthProvider;
  this.EchoClient = echoClient;
};
var EchoCore = new Core();

Object.defineProperty(exports, 'ArgumentError', {
  enumerable: true,
  get: function () {
    return echoBase__default['default'];
  }
});
Object.defineProperty(exports, 'BaseError', {
  enumerable: true,
  get: function () {
    return echoBase__default['default'];
  }
});
Object.defineProperty(exports, 'EchoEvents', {
  enumerable: true,
  get: function () {
    return echoBase.EchoEvents;
  }
});
Object.defineProperty(exports, 'NetworkError', {
  enumerable: true,
  get: function () {
    return echoBase__default['default'];
  }
});
Object.defineProperty(exports, 'eventHub', {
  enumerable: true,
  get: function () {
    return echoBase__default['default'];
  }
});
Object.defineProperty(exports, 'storage', {
  enumerable: true,
  get: function () {
    return echoBase.storage;
  }
});
exports.AppError = AppError;
exports.AuthenticationProvider = AuthenticationProvider;
exports.BackendError = network_4;
exports.BaseClient = BaseClient$1;
exports.Core = Core;
exports.EchoEnv = EchoEnv;
exports.EchoSettings = EchoSettings;
exports.ForbiddenError = network_3;
exports.NotFoundError = network_2;
exports.ObserverClass = ObserverClass;
exports.PanelHandler = PanelHandler;
exports.ValidationError = network_1;
exports.default = EchoCore;
exports.getInstCode = getInstCode;
exports.getPlants = getPlants;
exports.getPlantsData = getPlantsData;
exports.getProCoSysPlantId = getProCoSysPlantId;
exports.getSapPlantId = getSapPlantId;
exports.getSelectedPlant = getSelectedPlant;
exports.makeUniqBy = makeUniqBy;
exports.readModuleState = readModuleState;
exports.setPlantsData = setPlantsData;
exports.setSelectedPlant = setSelectedPlant;
exports.updateModuleState = updateModuleState;
exports.updateSpecificModuleState = updateSpecificModuleState;
exports.useAppModuleState = useAppModuleState;
exports.useCleanup = useCleanup;
exports.useGlobalState = useGlobalState;
exports.useInitial = useInitial;
exports.usePanels = usePanels;
exports.usePlantSettings = usePlantSettings;
exports.usePlants = usePlants;
exports.usePlantsData = usePlantsData;
