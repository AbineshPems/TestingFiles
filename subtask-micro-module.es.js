import * as Ee from "react";
import F0, { createContext as Y3, useContext as q3, useEffect as mn, useState as W, useRef as st } from "react";
import { message as nn, Input as P0, Checkbox as ha, DatePicker as $0, Select as Ht, TimePicker as di, Spin as vi, Form as vt, Modal as ga, Button as Vs, Tag as li } from "antd";
import Ct from "axios";
import $n from "moment";
var D0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pa(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var j0 = { exports: {} }, L2 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks;
function V3() {
  if (ks) return L2;
  ks = 1;
  var u = F0, l = Symbol.for("react.element"), i = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, v = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(S, A, F) {
    var $, j = {}, V = null, J = null;
    F !== void 0 && (V = "" + F), A.key !== void 0 && (V = "" + A.key), A.ref !== void 0 && (J = A.ref);
    for ($ in A) g.call(A, $) && !x.hasOwnProperty($) && (j[$] = A[$]);
    if (S && S.defaultProps) for ($ in A = S.defaultProps, A) j[$] === void 0 && (j[$] = A[$]);
    return { $$typeof: l, type: S, key: V, ref: J, props: j, _owner: v.current };
  }
  return L2.Fragment = i, L2.jsx = E, L2.jsxs = E, L2;
}
var I2 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gs;
function k3() {
  return Gs || (Gs = 1, process.env.NODE_ENV !== "production" && function() {
    var u = F0, l = Symbol.for("react.element"), i = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), S = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), X = Symbol.iterator, ye = "@@iterator";
    function re(d) {
      if (d === null || typeof d != "object")
        return null;
      var N = X && d[X] || d[ye];
      return typeof N == "function" ? N : null;
    }
    var K = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ue(d) {
      {
        for (var N = arguments.length, U = new Array(N > 1 ? N - 1 : 0), te = 1; te < N; te++)
          U[te - 1] = arguments[te];
        we("error", d, U);
      }
    }
    function we(d, N, U) {
      {
        var te = K.ReactDebugCurrentFrame, Te = te.getStackAddendum();
        Te !== "" && (N += "%s", U = U.concat([Te]));
        var Ae = U.map(function(Ce) {
          return String(Ce);
        });
        Ae.unshift("Warning: " + N), Function.prototype.apply.call(console[d], console, Ae);
      }
    }
    var De = !1, he = !1, We = !1, be = !1, Ge = !1, Fe;
    Fe = Symbol.for("react.module.reference");
    function me(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === g || d === x || Ge || d === v || d === F || d === $ || be || d === J || De || he || We || typeof d == "object" && d !== null && (d.$$typeof === V || d.$$typeof === j || d.$$typeof === E || d.$$typeof === S || d.$$typeof === A || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === Fe || d.getModuleId !== void 0));
    }
    function ie(d, N, U) {
      var te = d.displayName;
      if (te)
        return te;
      var Te = N.displayName || N.name || "";
      return Te !== "" ? U + "(" + Te + ")" : U;
    }
    function tn(d) {
      return d.displayName || "Context";
    }
    function ce(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && ue("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case g:
          return "Fragment";
        case i:
          return "Portal";
        case x:
          return "Profiler";
        case v:
          return "StrictMode";
        case F:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case S:
            var N = d;
            return tn(N) + ".Consumer";
          case E:
            var U = d;
            return tn(U._context) + ".Provider";
          case A:
            return ie(d, d.render, "ForwardRef");
          case j:
            var te = d.displayName || null;
            return te !== null ? te : ce(d.type) || "Memo";
          case V: {
            var Te = d, Ae = Te._payload, Ce = Te._init;
            try {
              return ce(Ce(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, L = 0, M, Z, y, H, I, k, O;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function q() {
      {
        if (L === 0) {
          M = console.log, Z = console.info, y = console.warn, H = console.error, I = console.group, k = console.groupCollapsed, O = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        L++;
      }
    }
    function ge() {
      {
        if (L--, L === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, d, {
              value: M
            }),
            info: z({}, d, {
              value: Z
            }),
            warn: z({}, d, {
              value: y
            }),
            error: z({}, d, {
              value: H
            }),
            group: z({}, d, {
              value: I
            }),
            groupCollapsed: z({}, d, {
              value: k
            }),
            groupEnd: z({}, d, {
              value: O
            })
          });
        }
        L < 0 && ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pe = K.ReactCurrentDispatcher, Ue;
    function ze(d, N, U) {
      {
        if (Ue === void 0)
          try {
            throw Error();
          } catch (Te) {
            var te = Te.stack.trim().match(/\n( *(at )?)/);
            Ue = te && te[1] || "";
          }
        return `
` + Ue + d;
      }
    }
    var $e = !1, Re;
    {
      var R = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new R();
    }
    function ve(d, N) {
      if (!d || $e)
        return "";
      {
        var U = Re.get(d);
        if (U !== void 0)
          return U;
      }
      var te;
      $e = !0;
      var Te = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = Pe.current, Pe.current = null, q();
      try {
        if (N) {
          var Ce = function() {
            throw Error();
          };
          if (Object.defineProperty(Ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ce, []);
            } catch (on) {
              te = on;
            }
            Reflect.construct(d, [], Ce);
          } else {
            try {
              Ce.call();
            } catch (on) {
              te = on;
            }
            d.call(Ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (on) {
            te = on;
          }
          d();
        }
      } catch (on) {
        if (on && te && typeof on.stack == "string") {
          for (var de = on.stack.split(`
`), hn = te.stack.split(`
`), Ke = de.length - 1, Qe = hn.length - 1; Ke >= 1 && Qe >= 0 && de[Ke] !== hn[Qe]; )
            Qe--;
          for (; Ke >= 1 && Qe >= 0; Ke--, Qe--)
            if (de[Ke] !== hn[Qe]) {
              if (Ke !== 1 || Qe !== 1)
                do
                  if (Ke--, Qe--, Qe < 0 || de[Ke] !== hn[Qe]) {
                    var On = `
` + de[Ke].replace(" at new ", " at ");
                    return d.displayName && On.includes("<anonymous>") && (On = On.replace("<anonymous>", d.displayName)), typeof d == "function" && Re.set(d, On), On;
                  }
                while (Ke >= 1 && Qe >= 0);
              break;
            }
        }
      } finally {
        $e = !1, Pe.current = Ae, ge(), Error.prepareStackTrace = Te;
      }
      var Kn = d ? d.displayName || d.name : "", ot = Kn ? ze(Kn) : "";
      return typeof d == "function" && Re.set(d, ot), ot;
    }
    function je(d, N, U) {
      return ve(d, !1);
    }
    function Xe(d) {
      var N = d.prototype;
      return !!(N && N.isReactComponent);
    }
    function yn(d, N, U) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return ve(d, Xe(d));
      if (typeof d == "string")
        return ze(d);
      switch (d) {
        case F:
          return ze("Suspense");
        case $:
          return ze("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case A:
            return je(d.render);
          case j:
            return yn(d.type, N, U);
          case V: {
            var te = d, Te = te._payload, Ae = te._init;
            try {
              return yn(Ae(Te), N, U);
            } catch {
            }
          }
        }
      return "";
    }
    var an = Object.prototype.hasOwnProperty, cn = {}, Vn = K.ReactDebugCurrentFrame;
    function kn(d) {
      if (d) {
        var N = d._owner, U = yn(d.type, d._source, N ? N.type : null);
        Vn.setExtraStackFrame(U);
      } else
        Vn.setExtraStackFrame(null);
    }
    function at(d, N, U, te, Te) {
      {
        var Ae = Function.call.bind(an);
        for (var Ce in d)
          if (Ae(d, Ce)) {
            var de = void 0;
            try {
              if (typeof d[Ce] != "function") {
                var hn = Error((te || "React class") + ": " + U + " type `" + Ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[Ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw hn.name = "Invariant Violation", hn;
              }
              de = d[Ce](N, Ce, te, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              de = Ke;
            }
            de && !(de instanceof Error) && (kn(Te), ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", U, Ce, typeof de), kn(null)), de instanceof Error && !(de.message in cn) && (cn[de.message] = !0, kn(Te), ue("Failed %s type: %s", U, de.message), kn(null));
          }
      }
    }
    var wn = Array.isArray;
    function Gn(d) {
      return wn(d);
    }
    function _t(d) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, U = N && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return U;
      }
    }
    function D(d) {
      try {
        return Le(d), !1;
      } catch {
        return !0;
      }
    }
    function Le(d) {
      return "" + d;
    }
    function Se(d) {
      if (D(d))
        return ue("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _t(d)), Le(d);
    }
    var Ye = K.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, Oe;
    function l2(d) {
      if (an.call(d, "ref")) {
        var N = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function u2(d) {
      if (an.call(d, "key")) {
        var N = Object.getOwnPropertyDescriptor(d, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function c2(d, N) {
      typeof d.ref == "string" && Ye.current;
    }
    function f2(d, N) {
      {
        var U = function() {
          Ve || (Ve = !0, ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        U.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function d2(d, N) {
      {
        var U = function() {
          Oe || (Oe = !0, ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        U.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var h2 = function(d, N, U, te, Te, Ae, Ce) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: d,
        key: N,
        ref: U,
        props: Ce,
        // Record the component responsible for creating this element.
        _owner: Ae
      };
      return de._store = {}, Object.defineProperty(de._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(de, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function g2(d, N, U, te, Te) {
      {
        var Ae, Ce = {}, de = null, hn = null;
        U !== void 0 && (Se(U), de = "" + U), u2(N) && (Se(N.key), de = "" + N.key), l2(N) && (hn = N.ref, c2(N, Te));
        for (Ae in N)
          an.call(N, Ae) && !qe.hasOwnProperty(Ae) && (Ce[Ae] = N[Ae]);
        if (d && d.defaultProps) {
          var Ke = d.defaultProps;
          for (Ae in Ke)
            Ce[Ae] === void 0 && (Ce[Ae] = Ke[Ae]);
        }
        if (de || hn) {
          var Qe = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          de && f2(Ce, Qe), hn && d2(Ce, Qe);
        }
        return h2(d, de, hn, Te, te, Ye.current, Ce);
      }
    }
    var p2 = K.ReactCurrentOwner, H2 = K.ReactDebugCurrentFrame;
    function yt(d) {
      if (d) {
        var N = d._owner, U = yn(d.type, d._source, N ? N.type : null);
        H2.setExtraStackFrame(U);
      } else
        H2.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function zt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === l;
    }
    function U2() {
      {
        if (p2.current) {
          var d = ce(p2.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function Z0(d) {
      return "";
    }
    var Z2 = {};
    function z0(d) {
      {
        var N = U2();
        if (!N) {
          var U = typeof d == "string" ? d : d.displayName || d.name;
          U && (N = `

Check the top-level render call using <` + U + ">.");
        }
        return N;
      }
    }
    function m2(d, N) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var U = z0(N);
        if (Z2[U])
          return;
        Z2[U] = !0;
        var te = "";
        d && d._owner && d._owner !== p2.current && (te = " It was passed a child from " + ce(d._owner.type) + "."), yt(d), ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, te), yt(null);
      }
    }
    function z2(d, N) {
      {
        if (typeof d != "object")
          return;
        if (Gn(d))
          for (var U = 0; U < d.length; U++) {
            var te = d[U];
            zt(te) && m2(te, N);
          }
        else if (zt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var Te = re(d);
          if (typeof Te == "function" && Te !== d.entries)
            for (var Ae = Te.call(d), Ce; !(Ce = Ae.next()).done; )
              zt(Ce.value) && m2(Ce.value, N);
        }
      }
    }
    function Y0(d) {
      {
        var N = d.type;
        if (N == null || typeof N == "string")
          return;
        var U;
        if (typeof N == "function")
          U = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === A || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === j))
          U = N.propTypes;
        else
          return;
        if (U) {
          var te = ce(N);
          at(U, d.props, "prop", te, d);
        } else if (N.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var Te = ce(N);
          ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Te || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function q0(d) {
      {
        for (var N = Object.keys(d.props), U = 0; U < N.length; U++) {
          var te = N[U];
          if (te !== "children" && te !== "key") {
            yt(d), ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), yt(null);
            break;
          }
        }
        d.ref !== null && (yt(d), ue("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
      }
    }
    var Yt = {};
    function Y2(d, N, U, te, Te, Ae) {
      {
        var Ce = me(d);
        if (!Ce) {
          var de = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var hn = Z0();
          hn ? de += hn : de += U2();
          var Ke;
          d === null ? Ke = "null" : Gn(d) ? Ke = "array" : d !== void 0 && d.$$typeof === l ? (Ke = "<" + (ce(d.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof d, ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, de);
        }
        var Qe = g2(d, N, U, Te, Ae);
        if (Qe == null)
          return Qe;
        if (Ce) {
          var On = N.children;
          if (On !== void 0)
            if (te)
              if (Gn(On)) {
                for (var Kn = 0; Kn < On.length; Kn++)
                  z2(On[Kn], d);
                Object.freeze && Object.freeze(On);
              } else
                ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              z2(On, d);
        }
        if (an.call(N, "key")) {
          var ot = ce(d), on = Object.keys(N).filter(function(J0) {
            return J0 !== "key";
          }), C2 = on.length > 0 ? "{key: someKey, " + on.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Yt[ot + C2]) {
            var K0 = on.length > 0 ? "{" + on.join(": ..., ") + ": ...}" : "{}";
            ue(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, C2, ot, K0, ot), Yt[ot + C2] = !0;
          }
        }
        return d === g ? q0(Qe) : Y0(Qe), Qe;
      }
    }
    function v2(d, N, U) {
      return Y2(d, N, U, !0);
    }
    function V0(d, N, U) {
      return Y2(d, N, U, !1);
    }
    var k0 = V0, G0 = v2;
    I2.Fragment = g, I2.jsx = k0, I2.jsxs = G0;
  }()), I2;
}
var Ks;
function G3() {
  return Ks || (Ks = 1, process.env.NODE_ENV === "production" ? j0.exports = V3() : j0.exports = k3()), j0.exports;
}
var c = G3();
const xt = Ct.create({
  // baseURL: `https://walrus-app-md9cy.ondigitalocean.app/api/v1`,
  baseURL: "https://walrus-app-md9cy.ondigitalocean.app/api/v1"
});
xt.interceptors.request.use(
  (u) => {
    const l = localStorage.getItem("sessionToken");
    return l && (u.headers.Authorization = `Bearer ${l}`), u.baseURLOverride && (u.baseURL = u.baseURLOverride), u;
  },
  (u) => Promise.reject(u)
);
xt.interceptors.response.use(
  (u) => u,
  (u) => (u.response && u.response.status === 401 && (window.location.href = "/login"), Promise.reject(u))
);
var ma = /* @__PURE__ */ Y3({});
function vn() {
  return vn = Object.assign ? Object.assign.bind() : function(u) {
    for (var l = 1; l < arguments.length; l++) {
      var i = arguments[l];
      for (var g in i) ({}).hasOwnProperty.call(i, g) && (u[g] = i[g]);
    }
    return u;
  }, vn.apply(null, arguments);
}
function K3(u) {
  if (Array.isArray(u)) return u;
}
function J3(u, l) {
  var i = u == null ? null : typeof Symbol < "u" && u[Symbol.iterator] || u["@@iterator"];
  if (i != null) {
    var g, v, x, E, S = [], A = !0, F = !1;
    try {
      if (x = (i = i.call(u)).next, l !== 0) for (; !(A = (g = x.call(i)).done) && (S.push(g.value), S.length !== l); A = !0) ;
    } catch ($) {
      F = !0, v = $;
    } finally {
      try {
        if (!A && i.return != null && (E = i.return(), Object(E) !== E)) return;
      } finally {
        if (F) throw v;
      }
    }
    return S;
  }
}
function Js(u, l) {
  (l == null || l > u.length) && (l = u.length);
  for (var i = 0, g = Array(l); i < l; i++) g[i] = u[i];
  return g;
}
function X3(u, l) {
  if (u) {
    if (typeof u == "string") return Js(u, l);
    var i = {}.toString.call(u).slice(8, -1);
    return i === "Object" && u.constructor && (i = u.constructor.name), i === "Map" || i === "Set" ? Array.from(u) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Js(u, l) : void 0;
  }
}
function Q3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function va(u, l) {
  return K3(u) || J3(u, l) || X3(u, l) || Q3();
}
function Ut(u) {
  "@babel/helpers - typeof";
  return Ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, Ut(u);
}
function e7(u, l) {
  if (Ut(u) != "object" || !u) return u;
  var i = u[Symbol.toPrimitive];
  if (i !== void 0) {
    var g = i.call(u, l || "default");
    if (Ut(g) != "object") return g;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(u);
}
function n7(u) {
  var l = e7(u, "string");
  return Ut(l) == "symbol" ? l : l + "";
}
function Sn(u, l, i) {
  return (l = n7(l)) in u ? Object.defineProperty(u, l, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : u[l] = i, u;
}
function t7(u, l) {
  if (u == null) return {};
  var i = {};
  for (var g in u) if ({}.hasOwnProperty.call(u, g)) {
    if (l.includes(g)) continue;
    i[g] = u[g];
  }
  return i;
}
function Ca(u, l) {
  if (u == null) return {};
  var i, g, v = t7(u, l);
  if (Object.getOwnPropertySymbols) {
    var x = Object.getOwnPropertySymbols(u);
    for (g = 0; g < x.length; g++) i = x[g], l.includes(i) || {}.propertyIsEnumerable.call(u, i) && (v[i] = u[i]);
  }
  return v;
}
var ui = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Xs;
function r7() {
  return Xs || (Xs = 1, function(u) {
    (function() {
      var l = {}.hasOwnProperty;
      function i() {
        for (var x = "", E = 0; E < arguments.length; E++) {
          var S = arguments[E];
          S && (x = v(x, g(S)));
        }
        return x;
      }
      function g(x) {
        if (typeof x == "string" || typeof x == "number")
          return x;
        if (typeof x != "object")
          return "";
        if (Array.isArray(x))
          return i.apply(null, x);
        if (x.toString !== Object.prototype.toString && !x.toString.toString().includes("[native code]"))
          return x.toString();
        var E = "";
        for (var S in x)
          l.call(x, S) && x[S] && (E = v(E, S));
        return E;
      }
      function v(x, E) {
        return E ? x ? x + " " + E : x + E : x;
      }
      u.exports ? (i.default = i, u.exports = i) : window.classNames = i;
    })();
  }(ui)), ui.exports;
}
var i7 = r7();
const s7 = /* @__PURE__ */ pa(i7), dn = Math.round;
function ci(u, l) {
  const i = u.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], g = i.map((v) => parseFloat(v));
  for (let v = 0; v < 3; v += 1)
    g[v] = l(g[v] || 0, i[v] || "", v);
  return i[3] ? g[3] = i[3].includes("%") ? g[3] / 100 : g[3] : g[3] = 1, g;
}
const Qs = (u, l, i) => i === 0 ? u : u / 100;
function F2(u, l) {
  const i = l || 255;
  return u > i ? i : u < 0 ? 0 : u;
}
class a2 {
  constructor(l) {
    Sn(this, "isValid", !0), Sn(this, "r", 0), Sn(this, "g", 0), Sn(this, "b", 0), Sn(this, "a", 1), Sn(this, "_h", void 0), Sn(this, "_s", void 0), Sn(this, "_l", void 0), Sn(this, "_v", void 0), Sn(this, "_max", void 0), Sn(this, "_min", void 0), Sn(this, "_brightness", void 0);
    function i(g) {
      return g[0] in l && g[1] in l && g[2] in l;
    }
    if (l) if (typeof l == "string") {
      let v = function(x) {
        return g.startsWith(x);
      };
      const g = l.trim();
      /^#?[A-F\d]{3,8}$/i.test(g) ? this.fromHexString(g) : v("rgb") ? this.fromRgbString(g) : v("hsl") ? this.fromHslString(g) : (v("hsv") || v("hsb")) && this.fromHsvString(g);
    } else if (l instanceof a2)
      this.r = l.r, this.g = l.g, this.b = l.b, this.a = l.a, this._h = l._h, this._s = l._s, this._l = l._l, this._v = l._v;
    else if (i("rgb"))
      this.r = F2(l.r), this.g = F2(l.g), this.b = F2(l.b), this.a = typeof l.a == "number" ? F2(l.a, 1) : 1;
    else if (i("hsl"))
      this.fromHsl(l);
    else if (i("hsv"))
      this.fromHsv(l);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(l));
  }
  // ======================= Setter =======================
  setR(l) {
    return this._sc("r", l);
  }
  setG(l) {
    return this._sc("g", l);
  }
  setB(l) {
    return this._sc("b", l);
  }
  setA(l) {
    return this._sc("a", l, 1);
  }
  setHue(l) {
    const i = this.toHsv();
    return i.h = l, this._c(i);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function l(x) {
      const E = x / 255;
      return E <= 0.03928 ? E / 12.92 : Math.pow((E + 0.055) / 1.055, 2.4);
    }
    const i = l(this.r), g = l(this.g), v = l(this.b);
    return 0.2126 * i + 0.7152 * g + 0.0722 * v;
  }
  getHue() {
    if (typeof this._h > "u") {
      const l = this.getMax() - this.getMin();
      l === 0 ? this._h = 0 : this._h = dn(60 * (this.r === this.getMax() ? (this.g - this.b) / l + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / l + 2 : (this.r - this.g) / l + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const l = this.getMax() - this.getMin();
      l === 0 ? this._s = 0 : this._s = l / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(l = 10) {
    const i = this.getHue(), g = this.getSaturation();
    let v = this.getLightness() - l / 100;
    return v < 0 && (v = 0), this._c({
      h: i,
      s: g,
      l: v,
      a: this.a
    });
  }
  lighten(l = 10) {
    const i = this.getHue(), g = this.getSaturation();
    let v = this.getLightness() + l / 100;
    return v > 1 && (v = 1), this._c({
      h: i,
      s: g,
      l: v,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(l, i = 50) {
    const g = this._c(l), v = i / 100, x = (S) => (g[S] - this[S]) * v + this[S], E = {
      r: dn(x("r")),
      g: dn(x("g")),
      b: dn(x("b")),
      a: dn(x("a") * 100) / 100
    };
    return this._c(E);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(l = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, l);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(l = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, l);
  }
  onBackground(l) {
    const i = this._c(l), g = this.a + i.a * (1 - this.a), v = (x) => dn((this[x] * this.a + i[x] * i.a * (1 - this.a)) / g);
    return this._c({
      r: v("r"),
      g: v("g"),
      b: v("b"),
      a: g
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(l) {
    return this.r === l.r && this.g === l.g && this.b === l.b && this.a === l.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let l = "#";
    const i = (this.r || 0).toString(16);
    l += i.length === 2 ? i : "0" + i;
    const g = (this.g || 0).toString(16);
    l += g.length === 2 ? g : "0" + g;
    const v = (this.b || 0).toString(16);
    if (l += v.length === 2 ? v : "0" + v, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const x = dn(this.a * 255).toString(16);
      l += x.length === 2 ? x : "0" + x;
    }
    return l;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const l = this.getHue(), i = dn(this.getSaturation() * 100), g = dn(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${l},${i}%,${g}%,${this.a})` : `hsl(${l},${i}%,${g}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(l, i, g) {
    const v = this.clone();
    return v[l] = F2(i, g), v;
  }
  _c(l) {
    return new this.constructor(l);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(l) {
    const i = l.replace("#", "");
    function g(v, x) {
      return parseInt(i[v] + i[x || v], 16);
    }
    i.length < 6 ? (this.r = g(0), this.g = g(1), this.b = g(2), this.a = i[3] ? g(3) / 255 : 1) : (this.r = g(0, 1), this.g = g(2, 3), this.b = g(4, 5), this.a = i[6] ? g(6, 7) / 255 : 1);
  }
  fromHsl({
    h: l,
    s: i,
    l: g,
    a: v
  }) {
    if (this._h = l % 360, this._s = i, this._l = g, this.a = typeof v == "number" ? v : 1, i <= 0) {
      const V = dn(g * 255);
      this.r = V, this.g = V, this.b = V;
    }
    let x = 0, E = 0, S = 0;
    const A = l / 60, F = (1 - Math.abs(2 * g - 1)) * i, $ = F * (1 - Math.abs(A % 2 - 1));
    A >= 0 && A < 1 ? (x = F, E = $) : A >= 1 && A < 2 ? (x = $, E = F) : A >= 2 && A < 3 ? (E = F, S = $) : A >= 3 && A < 4 ? (E = $, S = F) : A >= 4 && A < 5 ? (x = $, S = F) : A >= 5 && A < 6 && (x = F, S = $);
    const j = g - F / 2;
    this.r = dn((x + j) * 255), this.g = dn((E + j) * 255), this.b = dn((S + j) * 255);
  }
  fromHsv({
    h: l,
    s: i,
    v: g,
    a: v
  }) {
    this._h = l % 360, this._s = i, this._v = g, this.a = typeof v == "number" ? v : 1;
    const x = dn(g * 255);
    if (this.r = x, this.g = x, this.b = x, i <= 0)
      return;
    const E = l / 60, S = Math.floor(E), A = E - S, F = dn(g * (1 - i) * 255), $ = dn(g * (1 - i * A) * 255), j = dn(g * (1 - i * (1 - A)) * 255);
    switch (S) {
      case 0:
        this.g = j, this.b = F;
        break;
      case 1:
        this.r = $, this.b = F;
        break;
      case 2:
        this.r = F, this.b = j;
        break;
      case 3:
        this.r = F, this.g = $;
        break;
      case 4:
        this.r = j, this.g = F;
        break;
      case 5:
      default:
        this.g = F, this.b = $;
        break;
    }
  }
  fromHsvString(l) {
    const i = ci(l, Qs);
    this.fromHsv({
      h: i[0],
      s: i[1],
      v: i[2],
      a: i[3]
    });
  }
  fromHslString(l) {
    const i = ci(l, Qs);
    this.fromHsl({
      h: i[0],
      s: i[1],
      l: i[2],
      a: i[3]
    });
  }
  fromRgbString(l) {
    const i = ci(l, (g, v) => (
      // Convert percentage to number. e.g. 50% -> 128
      v.includes("%") ? dn(g / 100 * 255) : g
    ));
    this.r = i[0], this.g = i[1], this.b = i[2], this.a = i[3];
  }
}
var L0 = 2, ea = 0.16, a7 = 0.05, o7 = 0.05, l7 = 0.15, xa = 5, _a = 4, u7 = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function na(u, l, i) {
  var g;
  return Math.round(u.h) >= 60 && Math.round(u.h) <= 240 ? g = i ? Math.round(u.h) - L0 * l : Math.round(u.h) + L0 * l : g = i ? Math.round(u.h) + L0 * l : Math.round(u.h) - L0 * l, g < 0 ? g += 360 : g >= 360 && (g -= 360), g;
}
function ta(u, l, i) {
  if (u.h === 0 && u.s === 0)
    return u.s;
  var g;
  return i ? g = u.s - ea * l : l === _a ? g = u.s + ea : g = u.s + a7 * l, g > 1 && (g = 1), i && l === xa && g > 0.1 && (g = 0.1), g < 0.06 && (g = 0.06), Math.round(g * 100) / 100;
}
function ra(u, l, i) {
  var g;
  return i ? g = u.v + o7 * l : g = u.v - l7 * l, g = Math.max(0, Math.min(1, g)), Math.round(g * 100) / 100;
}
function c7(u) {
  for (var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = [], g = new a2(u), v = g.toHsv(), x = xa; x > 0; x -= 1) {
    var E = new a2({
      h: na(v, x, !0),
      s: ta(v, x, !0),
      v: ra(v, x, !0)
    });
    i.push(E);
  }
  i.push(g);
  for (var S = 1; S <= _a; S += 1) {
    var A = new a2({
      h: na(v, S),
      s: ta(v, S),
      v: ra(v, S)
    });
    i.push(A);
  }
  return l.theme === "dark" ? u7.map(function(F) {
    var $ = F.index, j = F.amount;
    return new a2(l.backgroundColor || "#141414").mix(i[$], j).toHexString();
  }) : i.map(function(F) {
    return F.toHexString();
  });
}
var hi = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
hi.primary = hi[5];
function ia(u, l) {
  var i = Object.keys(u);
  if (Object.getOwnPropertySymbols) {
    var g = Object.getOwnPropertySymbols(u);
    l && (g = g.filter(function(v) {
      return Object.getOwnPropertyDescriptor(u, v).enumerable;
    })), i.push.apply(i, g);
  }
  return i;
}
function it(u) {
  for (var l = 1; l < arguments.length; l++) {
    var i = arguments[l] != null ? arguments[l] : {};
    l % 2 ? ia(Object(i), !0).forEach(function(g) {
      Sn(u, g, i[g]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(i)) : ia(Object(i)).forEach(function(g) {
      Object.defineProperty(u, g, Object.getOwnPropertyDescriptor(i, g));
    });
  }
  return u;
}
function f7() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function d7(u, l) {
  if (!u)
    return !1;
  if (u.contains)
    return u.contains(l);
  for (var i = l; i; ) {
    if (i === u)
      return !0;
    i = i.parentNode;
  }
  return !1;
}
var sa = "data-rc-order", aa = "data-rc-priority", h7 = "rc-util-key", gi = /* @__PURE__ */ new Map();
function ya() {
  var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = u.mark;
  return l ? l.startsWith("data-") ? l : "data-".concat(l) : h7;
}
function Ci(u) {
  if (u.attachTo)
    return u.attachTo;
  var l = document.querySelector("head");
  return l || document.body;
}
function g7(u) {
  return u === "queue" ? "prependQueue" : u ? "prepend" : "append";
}
function xi(u) {
  return Array.from((gi.get(u) || u).children).filter(function(l) {
    return l.tagName === "STYLE";
  });
}
function wa(u) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!f7())
    return null;
  var i = l.csp, g = l.prepend, v = l.priority, x = v === void 0 ? 0 : v, E = g7(g), S = E === "prependQueue", A = document.createElement("style");
  A.setAttribute(sa, E), S && x && A.setAttribute(aa, "".concat(x)), i != null && i.nonce && (A.nonce = i == null ? void 0 : i.nonce), A.innerHTML = u;
  var F = Ci(l), $ = F.firstChild;
  if (g) {
    if (S) {
      var j = (l.styles || xi(F)).filter(function(V) {
        if (!["prepend", "prependQueue"].includes(V.getAttribute(sa)))
          return !1;
        var J = Number(V.getAttribute(aa) || 0);
        return x >= J;
      });
      if (j.length)
        return F.insertBefore(A, j[j.length - 1].nextSibling), A;
    }
    F.insertBefore(A, $);
  } else
    F.appendChild(A);
  return A;
}
function p7(u) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = Ci(l);
  return (l.styles || xi(i)).find(function(g) {
    return g.getAttribute(ya(l)) === u;
  });
}
function m7(u, l) {
  var i = gi.get(u);
  if (!i || !d7(document, i)) {
    var g = wa("", l), v = g.parentNode;
    gi.set(u, v), u.removeChild(g);
  }
}
function v7(u, l) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, g = Ci(i), v = xi(g), x = it(it({}, i), {}, {
    styles: v
  });
  m7(g, x);
  var E = p7(l, x);
  if (E) {
    var S, A;
    if ((S = x.csp) !== null && S !== void 0 && S.nonce && E.nonce !== ((A = x.csp) === null || A === void 0 ? void 0 : A.nonce)) {
      var F;
      E.nonce = (F = x.csp) === null || F === void 0 ? void 0 : F.nonce;
    }
    return E.innerHTML !== u && (E.innerHTML = u), E;
  }
  var $ = wa(u, x);
  return $.setAttribute(ya(x), l), $;
}
function ba(u) {
  var l;
  return u == null || (l = u.getRootNode) === null || l === void 0 ? void 0 : l.call(u);
}
function C7(u) {
  return ba(u) instanceof ShadowRoot;
}
function x7(u) {
  return C7(u) ? ba(u) : null;
}
var pi = {}, _i = [], _7 = function(l) {
  _i.push(l);
};
function y7(u, l) {
  if (process.env.NODE_ENV !== "production" && !u && console !== void 0) {
    var i = _i.reduce(function(g, v) {
      return v(g ?? "", "warning");
    }, l);
    i && console.error("Warning: ".concat(i));
  }
}
function w7(u, l) {
  if (process.env.NODE_ENV !== "production" && !u && console !== void 0) {
    var i = _i.reduce(function(g, v) {
      return v(g ?? "", "note");
    }, l);
    i && console.warn("Note: ".concat(i));
  }
}
function b7() {
  pi = {};
}
function Ea(u, l, i) {
  !l && !pi[i] && (u(!1, i), pi[i] = !0);
}
function W0(u, l) {
  Ea(y7, u, l);
}
function E7(u, l) {
  Ea(w7, u, l);
}
W0.preMessage = _7;
W0.resetWarned = b7;
W0.noteOnce = E7;
function T7(u) {
  return u.replace(/-(.)/g, function(l, i) {
    return i.toUpperCase();
  });
}
function S7(u, l) {
  W0(u, "[@ant-design/icons] ".concat(l));
}
function oa(u) {
  return Ut(u) === "object" && typeof u.name == "string" && typeof u.theme == "string" && (Ut(u.icon) === "object" || typeof u.icon == "function");
}
function la() {
  var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(u).reduce(function(l, i) {
    var g = u[i];
    switch (i) {
      case "class":
        l.className = g, delete l.class;
        break;
      default:
        delete l[i], l[T7(i)] = g;
    }
    return l;
  }, {});
}
function mi(u, l, i) {
  return i ? /* @__PURE__ */ F0.createElement(u.tag, it(it({
    key: l
  }, la(u.attrs)), i), (u.children || []).map(function(g, v) {
    return mi(g, "".concat(l, "-").concat(u.tag, "-").concat(v));
  })) : /* @__PURE__ */ F0.createElement(u.tag, it({
    key: l
  }, la(u.attrs)), (u.children || []).map(function(g, v) {
    return mi(g, "".concat(l, "-").concat(u.tag, "-").concat(v));
  }));
}
function Ta(u) {
  return c7(u)[0];
}
function Sa(u) {
  return u ? Array.isArray(u) ? u : [u] : [];
}
var O7 = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, N7 = function(l) {
  var i = q3(ma), g = i.csp, v = i.prefixCls, x = O7;
  v && (x = x.replace(/anticon/g, v)), mn(function() {
    var E = l.current, S = x7(E);
    v7(x, "@ant-design-icons", {
      prepend: !0,
      csp: g,
      attachTo: S
    });
  }, []);
}, R7 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], B2 = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function A7(u) {
  var l = u.primaryColor, i = u.secondaryColor;
  B2.primaryColor = l, B2.secondaryColor = i || Ta(l), B2.calculated = !!i;
}
function M7() {
  return it({}, B2);
}
var o2 = function(l) {
  var i = l.icon, g = l.className, v = l.onClick, x = l.style, E = l.primaryColor, S = l.secondaryColor, A = Ca(l, R7), F = Ee.useRef(), $ = B2;
  if (E && ($ = {
    primaryColor: E,
    secondaryColor: S || Ta(E)
  }), N7(F), S7(oa(i), "icon should be icon definiton, but got ".concat(i)), !oa(i))
    return null;
  var j = i;
  return j && typeof j.icon == "function" && (j = it(it({}, j), {}, {
    icon: j.icon($.primaryColor, $.secondaryColor)
  })), mi(j.icon, "svg-".concat(j.name), it(it({
    className: g,
    onClick: v,
    style: x,
    "data-icon": j.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, A), {}, {
    ref: F
  }));
};
o2.displayName = "IconReact";
o2.getTwoToneColors = M7;
o2.setTwoToneColors = A7;
function Oa(u) {
  var l = Sa(u), i = va(l, 2), g = i[0], v = i[1];
  return o2.setTwoToneColors({
    primaryColor: g,
    secondaryColor: v
  });
}
function D7() {
  var u = o2.getTwoToneColors();
  return u.calculated ? [u.primaryColor, u.secondaryColor] : u.primaryColor;
}
var j7 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Oa(hi.primary);
var Cn = /* @__PURE__ */ Ee.forwardRef(function(u, l) {
  var i = u.className, g = u.icon, v = u.spin, x = u.rotate, E = u.tabIndex, S = u.onClick, A = u.twoToneColor, F = Ca(u, j7), $ = Ee.useContext(ma), j = $.prefixCls, V = j === void 0 ? "anticon" : j, J = $.rootClassName, X = s7(J, V, Sn(Sn({}, "".concat(V, "-").concat(g.name), !!g.name), "".concat(V, "-spin"), !!v || g.name === "loading"), i), ye = E;
  ye === void 0 && S && (ye = -1);
  var re = x ? {
    msTransform: "rotate(".concat(x, "deg)"),
    transform: "rotate(".concat(x, "deg)")
  } : void 0, K = Sa(A), ue = va(K, 2), we = ue[0], De = ue[1];
  return /* @__PURE__ */ Ee.createElement("span", vn({
    role: "img",
    "aria-label": g.name
  }, F, {
    ref: l,
    tabIndex: ye,
    onClick: S,
    className: X
  }), /* @__PURE__ */ Ee.createElement(o2, {
    icon: g,
    primaryColor: we,
    secondaryColor: De,
    style: re
  }));
});
Cn.displayName = "AntdIcon";
Cn.getTwoToneColor = D7;
Cn.setTwoToneColor = Oa;
var L7 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, name: "calendar", theme: "outlined" }, I7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: L7
  }));
}, B0 = /* @__PURE__ */ Ee.forwardRef(I7);
process.env.NODE_ENV !== "production" && (B0.displayName = "CalendarOutlined");
var F7 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, P7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: F7
  }));
}, Na = /* @__PURE__ */ Ee.forwardRef(P7);
process.env.NODE_ENV !== "production" && (Na.displayName = "CheckOutlined");
var $7 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, name: "clock-circle", theme: "outlined" }, B7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: $7
  }));
}, W2 = /* @__PURE__ */ Ee.forwardRef(B7);
process.env.NODE_ENV !== "production" && (W2.displayName = "ClockCircleOutlined");
var W7 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, name: "close-circle", theme: "outlined" }, H7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: W7
  }));
}, Ra = /* @__PURE__ */ Ee.forwardRef(H7);
process.env.NODE_ENV !== "production" && (Ra.displayName = "CloseCircleOutlined");
var U7 = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Z7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: U7
  }));
}, yi = /* @__PURE__ */ Ee.forwardRef(Z7);
process.env.NODE_ENV !== "production" && (yi.displayName = "CloseOutlined");
var z7 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" }, Y7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: z7
  }));
}, Aa = /* @__PURE__ */ Ee.forwardRef(Y7);
process.env.NODE_ENV !== "production" && (Aa.displayName = "DeleteOutlined");
var q7 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, V7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: q7
  }));
}, H0 = /* @__PURE__ */ Ee.forwardRef(V7);
process.env.NODE_ENV !== "production" && (H0.displayName = "DownOutlined");
var k7 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, name: "edit", theme: "outlined" }, G7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: k7
  }));
}, U0 = /* @__PURE__ */ Ee.forwardRef(G7);
process.env.NODE_ENV !== "production" && (U0.displayName = "EditOutlined");
var K7 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file", theme: "outlined" }, J7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: K7
  }));
}, Ma = /* @__PURE__ */ Ee.forwardRef(J7);
process.env.NODE_ENV !== "production" && (Ma.displayName = "FileOutlined");
var X7 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z" } }] }, name: "filter", theme: "outlined" }, Q7 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: X7
  }));
}, Da = /* @__PURE__ */ Ee.forwardRef(Q7);
process.env.NODE_ENV !== "production" && (Da.displayName = "FilterOutlined");
var e8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184zm656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z" } }] }, name: "flag", theme: "outlined" }, n8 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: e8
  }));
}, Mt = /* @__PURE__ */ Ee.forwardRef(n8);
process.env.NODE_ENV !== "production" && (Mt.displayName = "FlagOutlined");
var t8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "more", theme: "outlined" }, r8 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: t8
  }));
}, ja = /* @__PURE__ */ Ee.forwardRef(r8);
process.env.NODE_ENV !== "production" && (ja.displayName = "MoreOutlined");
var i8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { tag: "path", attrs: { d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, name: "plus", theme: "outlined" }, s8 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: i8
  }));
}, La = /* @__PURE__ */ Ee.forwardRef(s8);
process.env.NODE_ENV !== "production" && (La.displayName = "PlusOutlined");
var a8 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" } }] }, name: "team", theme: "outlined" }, o8 = function(l, i) {
  return /* @__PURE__ */ Ee.createElement(Cn, vn({}, l, {
    ref: i,
    icon: a8
  }));
}, Ia = /* @__PURE__ */ Ee.forwardRef(o8);
process.env.NODE_ENV !== "production" && (Ia.displayName = "TeamOutlined");
var I0 = { exports: {} }, l8 = I0.exports, ua;
function u8() {
  return ua || (ua = 1, function(u, l) {
    (function(i, g) {
      u.exports = g();
    })(l8, function() {
      var i = 1e3, g = 6e4, v = 36e5, x = "millisecond", E = "second", S = "minute", A = "hour", F = "day", $ = "week", j = "month", V = "quarter", J = "year", X = "date", ye = "Invalid Date", re = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, K = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, ue = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(z) {
        var L = ["th", "st", "nd", "rd"], M = z % 100;
        return "[" + z + (L[(M - 20) % 10] || L[M] || L[0]) + "]";
      } }, we = function(z, L, M) {
        var Z = String(z);
        return !Z || Z.length >= L ? z : "" + Array(L + 1 - Z.length).join(M) + z;
      }, De = { s: we, z: function(z) {
        var L = -z.utcOffset(), M = Math.abs(L), Z = Math.floor(M / 60), y = M % 60;
        return (L <= 0 ? "+" : "-") + we(Z, 2, "0") + ":" + we(y, 2, "0");
      }, m: function z(L, M) {
        if (L.date() < M.date()) return -z(M, L);
        var Z = 12 * (M.year() - L.year()) + (M.month() - L.month()), y = L.clone().add(Z, j), H = M - y < 0, I = L.clone().add(Z + (H ? -1 : 1), j);
        return +(-(Z + (M - y) / (H ? y - I : I - y)) || 0);
      }, a: function(z) {
        return z < 0 ? Math.ceil(z) || 0 : Math.floor(z);
      }, p: function(z) {
        return { M: j, y: J, w: $, d: F, D: X, h: A, m: S, s: E, ms: x, Q: V }[z] || String(z || "").toLowerCase().replace(/s$/, "");
      }, u: function(z) {
        return z === void 0;
      } }, he = "en", We = {};
      We[he] = ue;
      var be = "$isDayjsObject", Ge = function(z) {
        return z instanceof tn || !(!z || !z[be]);
      }, Fe = function z(L, M, Z) {
        var y;
        if (!L) return he;
        if (typeof L == "string") {
          var H = L.toLowerCase();
          We[H] && (y = H), M && (We[H] = M, y = H);
          var I = L.split("-");
          if (!y && I.length > 1) return z(I[0]);
        } else {
          var k = L.name;
          We[k] = L, y = k;
        }
        return !Z && y && (he = y), y || !Z && he;
      }, me = function(z, L) {
        if (Ge(z)) return z.clone();
        var M = typeof L == "object" ? L : {};
        return M.date = z, M.args = arguments, new tn(M);
      }, ie = De;
      ie.l = Fe, ie.i = Ge, ie.w = function(z, L) {
        return me(z, { locale: L.$L, utc: L.$u, x: L.$x, $offset: L.$offset });
      };
      var tn = function() {
        function z(M) {
          this.$L = Fe(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[be] = !0;
        }
        var L = z.prototype;
        return L.parse = function(M) {
          this.$d = function(Z) {
            var y = Z.date, H = Z.utc;
            if (y === null) return /* @__PURE__ */ new Date(NaN);
            if (ie.u(y)) return /* @__PURE__ */ new Date();
            if (y instanceof Date) return new Date(y);
            if (typeof y == "string" && !/Z$/i.test(y)) {
              var I = y.match(re);
              if (I) {
                var k = I[2] - 1 || 0, O = (I[7] || "0").substring(0, 3);
                return H ? new Date(Date.UTC(I[1], k, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, O)) : new Date(I[1], k, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, O);
              }
            }
            return new Date(y);
          }(M), this.init();
        }, L.init = function() {
          var M = this.$d;
          this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
        }, L.$utils = function() {
          return ie;
        }, L.isValid = function() {
          return this.$d.toString() !== ye;
        }, L.isSame = function(M, Z) {
          var y = me(M);
          return this.startOf(Z) <= y && y <= this.endOf(Z);
        }, L.isAfter = function(M, Z) {
          return me(M) < this.startOf(Z);
        }, L.isBefore = function(M, Z) {
          return this.endOf(Z) < me(M);
        }, L.$g = function(M, Z, y) {
          return ie.u(M) ? this[Z] : this.set(y, M);
        }, L.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, L.valueOf = function() {
          return this.$d.getTime();
        }, L.startOf = function(M, Z) {
          var y = this, H = !!ie.u(Z) || Z, I = ie.p(M), k = function($e, Re) {
            var R = ie.w(y.$u ? Date.UTC(y.$y, Re, $e) : new Date(y.$y, Re, $e), y);
            return H ? R : R.endOf(F);
          }, O = function($e, Re) {
            return ie.w(y.toDate()[$e].apply(y.toDate("s"), (H ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Re)), y);
          }, P = this.$W, q = this.$M, ge = this.$D, Pe = "set" + (this.$u ? "UTC" : "");
          switch (I) {
            case J:
              return H ? k(1, 0) : k(31, 11);
            case j:
              return H ? k(1, q) : k(0, q + 1);
            case $:
              var Ue = this.$locale().weekStart || 0, ze = (P < Ue ? P + 7 : P) - Ue;
              return k(H ? ge - ze : ge + (6 - ze), q);
            case F:
            case X:
              return O(Pe + "Hours", 0);
            case A:
              return O(Pe + "Minutes", 1);
            case S:
              return O(Pe + "Seconds", 2);
            case E:
              return O(Pe + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, L.endOf = function(M) {
          return this.startOf(M, !1);
        }, L.$set = function(M, Z) {
          var y, H = ie.p(M), I = "set" + (this.$u ? "UTC" : ""), k = (y = {}, y[F] = I + "Date", y[X] = I + "Date", y[j] = I + "Month", y[J] = I + "FullYear", y[A] = I + "Hours", y[S] = I + "Minutes", y[E] = I + "Seconds", y[x] = I + "Milliseconds", y)[H], O = H === F ? this.$D + (Z - this.$W) : Z;
          if (H === j || H === J) {
            var P = this.clone().set(X, 1);
            P.$d[k](O), P.init(), this.$d = P.set(X, Math.min(this.$D, P.daysInMonth())).$d;
          } else k && this.$d[k](O);
          return this.init(), this;
        }, L.set = function(M, Z) {
          return this.clone().$set(M, Z);
        }, L.get = function(M) {
          return this[ie.p(M)]();
        }, L.add = function(M, Z) {
          var y, H = this;
          M = Number(M);
          var I = ie.p(Z), k = function(q) {
            var ge = me(H);
            return ie.w(ge.date(ge.date() + Math.round(q * M)), H);
          };
          if (I === j) return this.set(j, this.$M + M);
          if (I === J) return this.set(J, this.$y + M);
          if (I === F) return k(1);
          if (I === $) return k(7);
          var O = (y = {}, y[S] = g, y[A] = v, y[E] = i, y)[I] || 1, P = this.$d.getTime() + M * O;
          return ie.w(P, this);
        }, L.subtract = function(M, Z) {
          return this.add(-1 * M, Z);
        }, L.format = function(M) {
          var Z = this, y = this.$locale();
          if (!this.isValid()) return y.invalidDate || ye;
          var H = M || "YYYY-MM-DDTHH:mm:ssZ", I = ie.z(this), k = this.$H, O = this.$m, P = this.$M, q = y.weekdays, ge = y.months, Pe = y.meridiem, Ue = function(Re, R, ve, je) {
            return Re && (Re[R] || Re(Z, H)) || ve[R].slice(0, je);
          }, ze = function(Re) {
            return ie.s(k % 12 || 12, Re, "0");
          }, $e = Pe || function(Re, R, ve) {
            var je = Re < 12 ? "AM" : "PM";
            return ve ? je.toLowerCase() : je;
          };
          return H.replace(K, function(Re, R) {
            return R || function(ve) {
              switch (ve) {
                case "YY":
                  return String(Z.$y).slice(-2);
                case "YYYY":
                  return ie.s(Z.$y, 4, "0");
                case "M":
                  return P + 1;
                case "MM":
                  return ie.s(P + 1, 2, "0");
                case "MMM":
                  return Ue(y.monthsShort, P, ge, 3);
                case "MMMM":
                  return Ue(ge, P);
                case "D":
                  return Z.$D;
                case "DD":
                  return ie.s(Z.$D, 2, "0");
                case "d":
                  return String(Z.$W);
                case "dd":
                  return Ue(y.weekdaysMin, Z.$W, q, 2);
                case "ddd":
                  return Ue(y.weekdaysShort, Z.$W, q, 3);
                case "dddd":
                  return q[Z.$W];
                case "H":
                  return String(k);
                case "HH":
                  return ie.s(k, 2, "0");
                case "h":
                  return ze(1);
                case "hh":
                  return ze(2);
                case "a":
                  return $e(k, O, !0);
                case "A":
                  return $e(k, O, !1);
                case "m":
                  return String(O);
                case "mm":
                  return ie.s(O, 2, "0");
                case "s":
                  return String(Z.$s);
                case "ss":
                  return ie.s(Z.$s, 2, "0");
                case "SSS":
                  return ie.s(Z.$ms, 3, "0");
                case "Z":
                  return I;
              }
              return null;
            }(Re) || I.replace(":", "");
          });
        }, L.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, L.diff = function(M, Z, y) {
          var H, I = this, k = ie.p(Z), O = me(M), P = (O.utcOffset() - this.utcOffset()) * g, q = this - O, ge = function() {
            return ie.m(I, O);
          };
          switch (k) {
            case J:
              H = ge() / 12;
              break;
            case j:
              H = ge();
              break;
            case V:
              H = ge() / 3;
              break;
            case $:
              H = (q - P) / 6048e5;
              break;
            case F:
              H = (q - P) / 864e5;
              break;
            case A:
              H = q / v;
              break;
            case S:
              H = q / g;
              break;
            case E:
              H = q / i;
              break;
            default:
              H = q;
          }
          return y ? H : ie.a(H);
        }, L.daysInMonth = function() {
          return this.endOf(j).$D;
        }, L.$locale = function() {
          return We[this.$L];
        }, L.locale = function(M, Z) {
          if (!M) return this.$L;
          var y = this.clone(), H = Fe(M, Z, !0);
          return H && (y.$L = H), y;
        }, L.clone = function() {
          return ie.w(this.$d, this);
        }, L.toDate = function() {
          return new Date(this.valueOf());
        }, L.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, L.toISOString = function() {
          return this.$d.toISOString();
        }, L.toString = function() {
          return this.$d.toUTCString();
        }, z;
      }(), ce = tn.prototype;
      return me.prototype = ce, [["$ms", x], ["$s", E], ["$m", S], ["$H", A], ["$W", F], ["$M", j], ["$y", J], ["$D", X]].forEach(function(z) {
        ce[z[1]] = function(L) {
          return this.$g(L, z[0], z[1]);
        };
      }), me.extend = function(z, L) {
        return z.$i || (z(L, tn, me), z.$i = !0), me;
      }, me.locale = Fe, me.isDayjs = Ge, me.unix = function(z) {
        return me(1e3 * z);
      }, me.en = We[he], me.Ls = We, me.p = {}, me;
    });
  }(I0)), I0.exports;
}
var c8 = u8();
const Fa = /* @__PURE__ */ pa(c8), { Option: P2 } = Ht, Pa = ({ isVisible: u, handleCancel: l, onTaskCreated: i }) => {
  const g = "6752c051f2aa54277e047a99", [v, x] = W({
    name: "",
    description: "",
    dueDate: null,
    // reminderDate: null,
    reminder: null,
    priority: "medium",
    team: "",
    assignee: ""
  }), [E, S] = W([]), [A, F] = W([]), [$, j] = W(!1), [V, J] = W(0), [X, ye] = W(0), [re, K] = W(!1), [ue, we] = W(!1), [De, he] = W({}), [We, be] = W(1), [Ge, Fe] = W(!1);
  mn(() => {
    u && me();
  }, [u]);
  const me = async () => {
    var O, P;
    try {
      const q = await xt.get(
        "https://walrus-app-md9cy.ondigitalocean.app/api/v1/teams/names"
      );
      S(q.data.data.teams || []), (P = (O = q.data) == null ? void 0 : O.data) != null && P.moreToCome && Fe(q.data.data.moreToCome);
    } catch {
      nn.error("Failed to fetch teams.");
    }
  }, ie = async () => {
    var O, P;
    if (Ge)
      try {
        const q = await xt.get(
          `https://walrus-app-md9cy.ondigitalocean.app/api/v1/teams/names?page=${We}`
        ), ge = q.data.data.teams;
        S((Pe) => [...Pe, ...ge]), (P = (O = q.data) == null ? void 0 : O.data) != null && P.moreToCome ? be((Pe) => Pe + 1) : Fe(!1);
      } catch (q) {
        console.error("Error fetching user teams:", q), nn.error("Failed to fetch more teams.");
      }
  }, tn = ({ label: O, value: P, onChange: q, options: ge, onScrollEnd: Pe, isScrollable: Ue }) => {
    var yn;
    const [ze, $e] = W(!1), Re = st(null), R = st(null), ve = () => $e(!ze), je = (an) => {
      Re.current && !Re.current.contains(an.target) && $e(!1);
    }, Xe = (an) => {
      const { scrollTop: cn, scrollHeight: Vn, clientHeight: kn } = an.target;
      cn + kn >= Vn && Pe && ($e(!0), Pe());
    };
    return mn(() => (ze ? document.addEventListener("mousedown", je) : document.removeEventListener("mousedown", je), () => {
      document.removeEventListener("mousedown", je);
    }), [ze]), /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: "relative",
        ref: Re,
        style: { width: "auto", minWidth: "200px" },
        children: [
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "px-4 py-2 border rounded-md bg-white text-black cursor-pointer flex justify-between items-center",
              onClick: ve,
              style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
              children: [
                /* @__PURE__ */ c.jsx("span", { children: P && ((yn = ge.find((an) => an._id === P)) == null ? void 0 : yn.name) || O }),
                /* @__PURE__ */ c.jsx(H0, {})
              ]
            }
          ),
          ze && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "absolute z-50 bg-white border rounded-md shadow-lg mt-2",
              style: {
                maxHeight: Ue ? "150px" : "auto",
                overflowY: Ue ? "auto" : "visible",
                width: "100%"
              },
              onScroll: Ue ? Xe : void 0,
              ref: R,
              children: /* @__PURE__ */ c.jsxs("div", { children: [
                /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    className: "px-4 py-2 hover:bg-[#D1F8F0] cursor-pointer",
                    onClick: () => {
                      q({ target: { value: "" } }), $e(!1);
                    },
                    style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
                    children: O
                  },
                  ""
                ),
                ge.map((an) => /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    className: "px-4 py-2 hover:bg-[#D1F8F0] cursor-pointer",
                    onClick: () => {
                      q({ target: { value: an._id } }), $e(!1);
                    },
                    style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
                    children: an.name
                  },
                  an._id
                ))
              ] })
            }
          )
        ]
      }
    );
  }, ce = () => {
    const O = {};
    return console.log(v.name), v.name.trim() || (O.name = "* Task name is required."), v.dueDate || (O.dueDate = "* Due date is required."), v.team && !v.assignee && (O.assigneeErr = "* Select an Assignee."), v.reminder && $n(v.reminder).isAfter(v.dueDate) && (O.reminder = "Reminder must be before the due date."), console.log(O), he(O), Object.keys(O).length === 0;
  }, z = (O) => {
    const { name: P, value: q } = O.target;
    x((ge) => ({ ...ge, [P]: q })), P === "description" && ye(q.length);
  }, L = (O) => {
    const P = O.target.value;
    x((q) => ({ ...q, name: P })), J(P.length), he((q) => ({ ...q, name: "" }));
  }, M = (O, P) => {
    x((q) => {
      const ge = {
        ...q,
        [O]: P ? P.toISOString() : null
      };
      if (O === "dueDate" && ge.reminder) {
        const Pe = new Date(ge.reminder), Ue = P ? new Date(P) : null;
        Ue && Pe > Ue && (ge.reminder = Ue.toISOString());
      }
      return ge;
    });
  }, Z = (O) => {
    x(O ? (P) => ({
      ...P,
      reminder: O.toISOString()
      // Convert date to ISO format
    }) : (P) => ({
      ...P,
      reminder: null
    }));
  }, y = (O) => {
    const P = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), q = v.dueDate ? new Date(v.dueDate) : null;
    return O && O < P || // Disable dates before today
    (q ? O > q : O > P);
  }, H = (O) => {
    const P = E.find((q) => q._id === O);
    x((q) => ({
      ...q,
      team: O
    })), re || (F((P == null ? void 0 : P.members) || []), x((q) => ({
      ...q,
      assignee: ""
    }))), he((q) => ({ ...q, assigneeErr: "" }));
  }, I = (O) => {
    if (he((P) => ({ ...P, assigneeErr: "" })), K(O.target.checked), x((P) => ({
      ...P,
      assignee: O.target.checked ? g : ""
    })), F([]), !O.target.checked) {
      const P = E.find((q) => q._id === v.team);
      F((P == null ? void 0 : P.members) || []);
    }
  }, k = async () => {
    if (!ce()) return;
    j(!0);
    const O = Object.keys(v).reduce((P, q) => (v[q] !== "" && v[q] !== null && (P[q] = v[q]), P), {});
    try {
      await xt.post(
        "https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks",
        O
      ), nn.success("Task created successfully"), i && (console.log("Triggering onTaskCreated callback"), i()), l();
    } catch {
      nn.error("Failed to create task");
    } finally {
      j(!1);
    }
  };
  return mn(() => {
    u || (x({
      name: "",
      description: "",
      dueDate: null,
      // reminderDate: null,
      reminder: null,
      priority: "medium",
      team: "",
      assignee: ""
    }), J(0), ye(0), K(!1), he({}));
  }, [u]), u ? /* @__PURE__ */ c.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50", children: /* @__PURE__ */ c.jsxs("div", { className: "relative flex flex-col w-[900px] max-h-[650px] p-12 bg-white  rounded-lg shadow-lg", children: [
    /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "absolute top-4 right-4 text-gray-600 hover:text-gray-800",
        onClick: l,
        children: /* @__PURE__ */ c.jsx(yi, {})
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
      ue ? /* @__PURE__ */ c.jsx(
        P0,
        {
          value: v.name,
          onChange: L,
          maxLength: 30,
          autoFocus: !0,
          onBlur: () => we(!1),
          className: "text-center font-bold w-3/5 focus:outline-none focus:ring-0 focus:border-black"
        }
      ) : /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2 cursor-pointer", children: [
        /* @__PURE__ */ c.jsx(
          "h2",
          {
            className: "text-2xl font-semibold",
            onClick: () => we(!0),
            children: v.name || "Add Task Name"
          }
        ),
        /* @__PURE__ */ c.jsx(U0, { onClick: () => we(!0) })
      ] }),
      /* @__PURE__ */ c.jsx("span", { className: "text-sm text-gray-500", children: `${V}/30` }),
      /* @__PURE__ */ c.jsx("span", { className: "text-red-500 text-sm", children: De.name })
    ] }),
    /* @__PURE__ */ c.jsx("div", { className: "w-full flex justify-end", children: /* @__PURE__ */ c.jsx(
      ha,
      {
        checked: re,
        onChange: I,
        className: "ml-4 text-base",
        children: "Self Assign"
      }
    ) }),
    /* @__PURE__ */ c.jsxs("div", { className: "w-full mt-6", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center ", children: [
        /* @__PURE__ */ c.jsxs("label", { className: "block text-gray-600", children: [
          "Task Description ",
          /* @__PURE__ */ c.jsx("span", { className: "text-gray-400", children: "(Optional)" })
        ] }),
        /* @__PURE__ */ c.jsx("span", { className: "text-sm text-gray-500", children: `${X}/100` })
      ] }),
      /* @__PURE__ */ c.jsx(
        P0,
        {
          maxLength: 100,
          value: v.description,
          onChange: z,
          name: "description",
          className: "w-full"
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "w-full mt-6", children: [
      /* @__PURE__ */ c.jsx("label", { className: "block text-gray-600", children: "Select Due Date*" }),
      /* @__PURE__ */ c.jsx(
        $0,
        {
          onChange: (O) => {
            M("dueDate", O), he((P) => ({ ...P, dueDate: "" }));
          },
          suffixIcon: /* @__PURE__ */ c.jsx(B0, {}),
          className: "w-full",
          inputReadOnly: !0,
          disabledDate: (O) => O && O < $n().startOf("day")
        }
      ),
      /* @__PURE__ */ c.jsx("span", { className: "text-red-500 text-sm", children: De.dueDate })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between gap-6 mt-6", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "w-1/2", children: [
        /* @__PURE__ */ c.jsxs("label", { className: "block text-gray-600", children: [
          "Team ",
          /* @__PURE__ */ c.jsx("span", { className: "text-gray-400", children: "(Optional)" })
        ] }),
        /* @__PURE__ */ c.jsx(
          tn,
          {
            label: "Select a team",
            value: v.team,
            onChange: (O) => H(O.target.value),
            options: E,
            onScrollEnd: ie,
            isScrollable: !0
          }
        )
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "w-1/2", children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-gray-600", children: "Assigned to" }),
        /* @__PURE__ */ c.jsxs(
          Ht,
          {
            value: v.assignee,
            onChange: (O) => x((P) => ({ ...P, assignee: O })),
            className: "w-full",
            placeholder: "Select an assignee",
            disabled: !v.team && !re,
            children: [
              re && /* @__PURE__ */ c.jsx(P2, { value: g, children: userName }, "self-assign"),
              A.map((O) => /* @__PURE__ */ c.jsx(P2, { value: O._id, children: O.name || "Unnamed Member" }, O._id))
            ]
          }
        ),
        /* @__PURE__ */ c.jsx("span", { className: "text-red-500 text-sm", children: De.assigneeErr })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between gap-6 mt-6", children: [
      /* @__PURE__ */ c.jsxs("div", { className: "w-1/2", children: [
        /* @__PURE__ */ c.jsx("label", { className: "block text-gray-600", children: "Mark Priority" }),
        /* @__PURE__ */ c.jsxs(
          Ht,
          {
            value: v.priority,
            onChange: (O) => x((P) => ({ ...P, priority: O })),
            className: "w-full",
            children: [
              /* @__PURE__ */ c.jsxs(P2, { value: "high", children: [
                /* @__PURE__ */ c.jsx(Mt, { style: { color: "red", marginRight: "8px" } }),
                "High"
              ] }),
              /* @__PURE__ */ c.jsxs(P2, { value: "medium", children: [
                /* @__PURE__ */ c.jsx(Mt, { style: { color: "orange", marginRight: "8px" } }),
                "Medium"
              ] }),
              /* @__PURE__ */ c.jsxs(P2, { value: "low", children: [
                /* @__PURE__ */ c.jsx(Mt, { style: { color: "yellow", marginRight: "8px" } }),
                "Low"
              ] })
            ]
          }
        )
      ] }),
      re || v.assignee == g ? /* @__PURE__ */ c.jsxs("div", { className: "w-1/2", children: [
        /* @__PURE__ */ c.jsxs("label", { className: "block text-gray-600", children: [
          "Set a Reminder ",
          /* @__PURE__ */ c.jsx("span", { className: "text-gray-400", children: "(Optional)" })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ c.jsx(
            $0,
            {
              value: v.reminder ? Fa(v.reminder) : null,
              onChange: Z,
              disabledDate: y,
              suffixIcon: /* @__PURE__ */ c.jsx(B0, {}),
              className: "w-full",
              inputReadOnly: !0
            }
          ),
          /* @__PURE__ */ c.jsx(
            di,
            {
              onChange: (O) => M("reminder", O),
              suffixIcon: /* @__PURE__ */ c.jsx(W2, {}),
              className: "w-full",
              disabled: !v.reminder
            }
          )
        ] }),
        /* @__PURE__ */ c.jsx("span", { className: "text-red-500 text-sm", children: De.reminder })
      ] }) : /* @__PURE__ */ c.jsx("div", { className: "w-1/2" })
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end gap-4 mt-6", children: [
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: l,
          className: "px-4 py-2 text-[#1B2028] bg-[#C4CBD8] rounded-md",
          children: "Close"
        }
      ),
      /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: k,
          className: `px-6 py-2 text-[#192028] bg-[#41EAD4] rounded-md ${$ ? "cursor-not-allowed opacity-50" : ""}`,
          disabled: $,
          children: $ ? /* @__PURE__ */ c.jsx(vi, { size: "small" }) : "Save"
        }
      )
    ] })
  ] }) }) : null;
}, { Option: fi } = Ht, $a = ({ visible: u, onClose: l, task: i, onTaskCreated: g }) => {
  const [v] = vt.useForm(), [x, E] = W(!1), [S, A] = W(""), [F, $] = W(0), [j, V] = W(0), [J, X] = W([]), [ye, re] = W([]), [K, ue] = W(!1), we = "6752c051f2aa54277e047a99", De = "admin", [he, We] = W(""), [be, Ge] = W(!0), [Fe, me] = W(1), [ie, tn] = W(!0);
  console.log(i), mn(() => {
    u && (async () => {
      try {
        const I = await Ct.get("https://walrus-app-md9cy.ondigitalocean.app/api/v1/teams/names");
        X(I.data.data.teams || []);
      } catch {
        nn.error("Failed to fetch teams.");
      }
    })();
  }, [u]);
  const ce = async () => {
    try {
      const y = `https://walrus-app-md9cy.ondigitalocean.app/api/v1/teams/${i.team_id}/members`, H = await Ct.get(y), k = (H.data.data.memberList || []).map((O) => ({
        name: O.userName,
        // Transform userName to name
        _id: O.id
        // Use id as _id
      }));
      re(k), console.log(H.data.data.memberList, k, "response.data.data.memberList ");
    } catch {
      re([]), nn.error("Failed to fetch teams.");
    }
  }, z = async () => {
    var y, H;
    if (be)
      try {
        const I = await Ct.get(
          `https://walrus-app-md9cy.ondigitalocean.app/api/v1/teams/names?page=${Fe}`
        ), k = I.data.data.teams;
        X((O) => [...O, ...k]), (H = (y = I.data) == null ? void 0 : y.data) != null && H.moreToCome ? me((O) => O + 1) : Ge(!1);
      } catch (I) {
        console.error("Error fetching user teams:", I), nn.error("Failed to fetch more teams.");
      }
  };
  mn(() => {
    i && (A(i.name), V(i.name.length), v.setFieldsValue({
      description: i.description,
      dueDate: Fa(i.dueDate),
      priority: i.priority,
      assignedTo: i.assignee_id,
      // reminderDate: task.reminder ? dayjs(task.reminder) : null,
      team: i.team
    }), $(i.description ? i.description.length : 0), i.team && (J.find((y) => (y == null ? void 0 : y._id) === i.team), i.team_id && ie && (tn(!1), ce())), (i.team_id == "" || i.team_id == null || i.assigner_id == i.assignee_id && i.team_id != null) && (ue(!0), re([{ _id: we, name: De }]), v.setFieldsValue({ assignedTo: we })));
  }, [i, J, v]), console.log({ assigneeList: ye });
  const L = (y) => {
    if (!K) {
      v.setFieldsValue({ assignedTo: "" });
      const H = J.find((I) => (I == null ? void 0 : I._id) === y);
      re((H == null ? void 0 : H.members) || []);
    }
    v.setFieldsValue({ team: y });
  }, M = (y) => {
    const H = y.target.checked;
    ue(H), H ? v.setFieldsValue({ assignedTo: we }) : v.setFieldsValue({ assignedTo: i.assignee_id });
  };
  console.log("Assigned To:", v.getFieldValue("assignedTo"));
  const Z = async () => {
    var y, H;
    try {
      const I = await v.validateFields();
      E(!0);
      const k = {};
      if (S !== i.name && (k.name = S), S == "" && S !== i.name) {
        We("* Name is required");
        return;
      }
      if (I.description !== i.description && (k.description = I.description), ((y = I.dueDate) == null ? void 0 : y.toISOString()) !== i.dueDate && (k.dueDate = (H = I.dueDate) == null ? void 0 : H.toISOString()), I.priority !== i.priority && (k.priority = I.priority), (K ? De : I.assignedTo) !== i.assignee_id && (k.assignee = K ? we : I.assignedTo), I.team !== i.team && (k.team = I.team), Object.keys(k).length === 0) {
        nn.info("No changes to save."), E(!1);
        return;
      }
      (await Ct.patch(
        `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks/${i == null ? void 0 : i._id}`,
        k
      )).status === 200 && (nn.success("Task updated successfully"), g(), l());
    } catch {
      nn.error("Failed to update task.");
    } finally {
      E(!1);
    }
  };
  return /* @__PURE__ */ c.jsx(
    ga,
    {
      title: null,
      visible: u,
      onCancel: l,
      footer: null,
      width: 850,
      padding: 40,
      children: /* @__PURE__ */ c.jsxs("div", { className: "w-full  mx-auto text-center px-50 py-30 p-8", children: [
        /* @__PURE__ */ c.jsx("div", { className: "mb-4", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ c.jsx(
            P0,
            {
              value: S,
              onChange: (y) => {
                We(""), A(y.target.value), V(y.target.value.length);
              },
              className: "font-bold text-xl w-3/5  text-center border-none outline-none shadow-none",
              placeholder: "Edit Task Name",
              maxLength: 30,
              prefix: /* @__PURE__ */ c.jsx(U0, {}),
              style: { width: "30%" }
            }
          ),
          /* @__PURE__ */ c.jsx("span", { className: "text-gray-500 text-sm", children: `${j}/30` }),
          he && /* @__PURE__ */ c.jsx("span", { className: "text-red-500 text-sm", children: he })
        ] }) }),
        /* @__PURE__ */ c.jsxs(vt, { form: v, layout: "vertical", className: "w-full", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ c.jsx("span", {}),
            /* @__PURE__ */ c.jsx(
              ha,
              {
                className: "text-base",
                onChange: M,
                checked: K,
                children: "Self Assign"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(
            vt.Item,
            {
              label: "Task Description (Optional)",
              name: "description",
              className: "mb-2",
              children: /* @__PURE__ */ c.jsx(
                P0,
                {
                  placeholder: "Enter task description",
                  maxLength: 100,
                  onChange: (y) => {
                    $(y.target.value.length), v.setFieldsValue({ description: y.target.value });
                  },
                  className: "w-full"
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(
            vt.Item,
            {
              name: "dueDate",
              label: "Select Due Date",
              rules: [{ required: !0, message: "Please select due date" }],
              children: /* @__PURE__ */ c.jsx(
                $0,
                {
                  placeholder: "Select due date",
                  suffixIcon: /* @__PURE__ */ c.jsx(B0, {}),
                  className: "w-full",
                  inputReadOnly: !0
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ c.jsx(
              vt.Item,
              {
                name: "team",
                label: "Team (Optional)",
                className: "flex-1",
                children: /* @__PURE__ */ c.jsx(
                  Ht,
                  {
                    placeholder: "Select team",
                    options: J.map((y) => ({
                      value: y == null ? void 0 : y._id,
                      label: y.name
                    })),
                    onChange: L,
                    className: "w-full",
                    dropdownRender: (y) => /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        onScroll: (H) => {
                          const { scrollTop: I, scrollHeight: k, clientHeight: O } = H.target;
                          I + O >= k && z();
                        },
                        style: {
                          maxHeight: "6.5em",
                          // Approx. 3 lines (adjust based on line height)
                          overflowY: "scroll"
                          // Enable vertical scrolling
                        },
                        children: y
                      }
                    )
                  }
                )
              }
            ),
            /* @__PURE__ */ c.jsx(
              vt.Item,
              {
                name: "assignedTo",
                label: "Assigned To",
                className: "flex-1",
                children: /* @__PURE__ */ c.jsx(
                  Ht,
                  {
                    placeholder: "Select assignee",
                    options: K ? [
                      {
                        value: we,
                        // Use the current user's ID
                        label: De
                        // Use the current user's name
                      }
                    ] : ye.map((y) => ({
                      value: y == null ? void 0 : y._id,
                      label: y.name || "Unnamed Member"
                    })),
                    disabled: K,
                    className: "w-full"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ c.jsx(
              vt.Item,
              {
                name: "priority",
                label: "Mark Priority",
                className: "flex-1",
                children: /* @__PURE__ */ c.jsxs(
                  Ht,
                  {
                    defaultValue: "high",
                    className: "w-full",
                    children: [
                      /* @__PURE__ */ c.jsxs(fi, { value: "high", children: [
                        /* @__PURE__ */ c.jsx(Mt, { style: { color: "red", marginRight: "8px" } }),
                        "High"
                      ] }),
                      /* @__PURE__ */ c.jsxs(fi, { value: "medium", children: [
                        /* @__PURE__ */ c.jsx(Mt, { style: { color: "orange", marginRight: "8px" } }),
                        "Medium"
                      ] }),
                      /* @__PURE__ */ c.jsxs(fi, { value: "low", children: [
                        /* @__PURE__ */ c.jsx(Mt, { style: { color: "yellow", marginRight: "8px" } }),
                        "Low"
                      ] })
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ c.jsx(
              vt.Item,
              {
                name: "reminderDate",
                className: "flex-1"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(vt.Item, { children: /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end items-center gap-4", children: [
            /* @__PURE__ */ c.jsx(
              Vs,
              {
                className: "bg-gray-300 text-black border-none rounded-10 h-10 w-20 cursor-default",
                onClick: l,
                style: {
                  backgroundColor: "#d1d5db",
                  color: "black",
                  pointerEvents: x ? "none" : "auto"
                },
                disabled: x,
                children: "Close"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Vs,
              {
                className: `flex items-center justify-center bg-teal-400 text-black border-none rounded-10 h-10 w-20 ${x ? "cursor-not-allowed opacity-75" : ""}`,
                onClick: Z,
                disabled: x,
                style: {
                  backgroundColor: "#41EAD4",
                  color: "black",
                  pointerEvents: x ? "none" : "auto",
                  transition: "none"
                },
                children: x ? /* @__PURE__ */ c.jsx(vi, { size: "small" }) : "Save"
              }
            )
          ] }) })
        ] })
      ] })
    }
  );
}, f8 = "data:image/svg+xml,%3csvg%20width='250'%20height='260'%20viewBox='0%200%20250%20260'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%20clip-path='url(%23clip0_2660_357861)'%3e%3cpath%20d='M96.9057%20260C149.944%20260%20192.94%20252.397%20192.94%20243.019C192.94%20233.641%20149.944%20226.039%2096.9057%20226.039C43.8673%20226.039%200.871094%20233.641%200.871094%20243.019C0.871094%20252.397%2043.8673%20260%2096.9057%20260Z'%20fill='%23E1E5EC'/%3e%3cpath%20d='M155.274%20187.873C207.109%20187.873%20249.129%20145.816%20249.129%2093.9365C249.129%2042.0568%20207.109%200%20155.274%200C103.439%200%2061.418%2042.0568%2061.418%2093.9365C61.418%20145.816%20103.439%20187.873%20155.274%20187.873Z'%20fill='%23768090'/%3e%3cpath%20opacity='0.05'%20d='M155.274%20171.484C198.065%20171.484%20232.755%20136.765%20232.755%2093.9362C232.755%2051.1079%20198.065%2016.3887%20155.274%2016.3887C112.482%2016.3887%2077.793%2051.1079%2077.793%2093.9362C77.793%20136.765%20112.482%20171.484%20155.274%20171.484Z'%20fill='black'/%3e%3cpath%20opacity='0.05'%20d='M155.272%20157.494C190.343%20157.494%20218.774%20129.038%20218.774%2093.9369C218.774%2058.8353%20190.343%2030.3799%20155.272%2030.3799C120.2%2030.3799%2091.7695%2058.8353%2091.7695%2093.9369C91.7695%20129.038%20120.2%20157.494%20155.272%20157.494Z'%20fill='black'/%3e%3cpath%20opacity='0.05'%20d='M155.272%20139.506C180.418%20139.506%20200.802%20119.104%20200.802%2093.9364C200.802%2068.7692%20180.418%2048.3672%20155.272%2048.3672C130.127%2048.3672%20109.742%2068.7692%20109.742%2093.9364C109.742%20119.104%20130.127%20139.506%20155.272%20139.506Z'%20fill='black'/%3e%3cpath%20d='M62.2482%20102.343C62.2482%20102.343%2054.8693%20123.131%2058.1488%20130.516C61.4283%20137.902%2066.6209%20145.013%2066.6209%20145.013C66.6209%20145.013%2064.7078%20103.71%2062.2482%20102.343Z'%20fill='%23D0CDE1'/%3e%3cpath%20opacity='0.1'%20d='M62.2482%20102.343C62.2482%20102.343%2054.8693%20123.131%2058.1488%20130.516C61.4283%20137.902%2066.6209%20145.013%2066.6209%20145.013C66.6209%20145.013%2064.7078%20103.71%2062.2482%20102.343Z'%20fill='black'/%3e%3cpath%20d='M67.442%20150.485C67.442%20150.485%2066.8954%20155.682%2066.6221%20155.955C66.3488%20156.229%2066.8954%20156.776%2066.6221%20157.596C66.3488%20158.417%2066.0755%20159.511%2066.6221%20159.785C67.1687%20160.058%2063.6159%20184.129%2063.6159%20184.129C63.6159%20184.129%2054.8705%20195.617%2058.4233%20213.67L59.5165%20231.996C59.5165%20231.996%2067.9886%20232.543%2067.9886%20229.534C67.9886%20229.534%2067.442%20225.979%2067.442%20224.337C67.442%20222.696%2068.8085%20222.696%2067.9886%20221.876C67.1687%20221.055%2067.1687%20220.508%2067.1687%20220.508C67.1687%20220.508%2068.5352%20219.414%2068.2619%20219.14C67.9886%20218.867%2070.7215%20199.446%2070.7215%20199.446C70.7215%20199.446%2073.7278%20196.437%2073.7278%20194.796V193.155C73.7278%20193.155%2075.0942%20189.599%2075.0942%20189.326C75.0942%20189.052%2082.4732%20172.367%2082.4732%20172.367L85.4794%20184.402L88.7589%20201.635C88.7589%20201.635%2090.3987%20217.226%2093.6782%20223.243C93.6782%20223.243%2099.4174%20242.937%2099.4174%20242.39C99.4174%20241.843%20108.983%20240.476%20108.709%20238.014C108.436%20235.552%20102.97%20201.087%20102.97%20201.087L104.337%20149.938L67.442%20150.485Z'%20fill='%231B2028'/%3e%3cpath%20d='M60.0647%20230.628C60.0647%20230.628%2052.6858%20245.125%2057.6051%20245.672C62.5244%20246.219%2064.4374%20246.219%2066.6238%20244.031C67.819%20242.835%2070.2395%20241.23%2072.1884%20240.02C73.3431%20239.315%2074.2759%20238.299%2074.8799%20237.087C75.4838%20235.876%2075.7344%20234.519%2075.6029%20233.172C75.4588%20231.833%2074.9592%20230.731%2073.7294%20230.628C70.4499%20230.355%2066.6238%20227.346%2066.6238%20227.346L60.0647%20230.628Z'%20fill='%231B2028'/%3e%3cpath%20d='M100.783%20241.296C100.783%20241.296%2093.4045%20255.793%2098.3238%20256.34C103.243%20256.887%20105.156%20256.887%20107.343%20254.699C108.538%20253.503%20110.958%20251.898%20112.907%20250.688C114.062%20249.983%20114.995%20248.967%20115.599%20247.755C116.203%20246.544%20116.453%20245.187%20116.322%20243.84C116.178%20242.501%20115.678%20241.399%20114.448%20241.296C111.169%20241.022%20107.343%20238.014%20107.343%20238.014L100.783%20241.296Z'%20fill='%231B2028'/%3e%3cpath%20d='M92.9843%2078.6193C99.3291%2078.6193%20104.473%2073.4714%20104.473%2067.1212C104.473%2060.7709%2099.3291%2055.623%2092.9843%2055.623C86.6395%2055.623%2081.4961%2060.7709%2081.4961%2067.1212C81.4961%2073.4714%2086.6395%2078.6193%2092.9843%2078.6193Z'%20fill='%23FFB8B8'/%3e%3cpath%20d='M85.6015%2070.8994C85.6015%2070.8994%2077.3956%2086.0113%2076.7391%2086.0113C76.0827%2086.0113%2091.5097%2090.939%2091.5097%2090.939C91.5097%2090.939%2095.7768%2076.4842%2096.4332%2075.1702L85.6015%2070.8994Z'%20fill='%23FFB8B8'/%3e%3cpath%20d='M98.1869%2087.4358C98.1869%2087.4358%2081.7893%2078.4093%2080.1495%2078.6829C78.5097%2078.9564%2061.0189%2094.274%2061.2922%20100.565C61.5655%20106.856%2063.7519%20117.25%2063.7519%20117.25C63.7519%20117.25%2064.5718%20146.245%2066.2115%20146.518C67.8513%20146.792%2065.9382%20151.715%2066.4848%20151.715C67.0314%20151.715%20104.746%20151.715%20105.019%20150.895C105.292%20150.074%2098.1869%2087.4358%2098.1869%2087.4358Z'%20fill='%23D0CDE1'/%3e%3cpath%20d='M107.341%20152.399C107.341%20152.399%20112.533%20168.264%20108.161%20167.717C103.788%20167.17%20101.875%20154.041%20101.875%20154.041L107.341%20152.399Z'%20fill='%23FFB8B8'/%3e%3cpath%20d='M93.4059%2086.4782C93.4059%2086.4782%2083.294%2088.6664%2084.9338%20102.343C86.5735%20116.019%2089.5798%20129.696%2089.5798%20129.696L99.6916%20151.852L100.785%20155.955L108.164%20154.04L102.698%20122.31C102.698%20122.31%20100.785%2088.3929%2098.3252%2087.2988C96.7741%2086.6369%2095.0875%2086.3556%2093.4059%2086.4782Z'%20fill='%23D0CDE1'/%3e%3cpath%20opacity='0.1'%20d='M87.2539%20129.286L99.8256%20151.715L89.2337%20128.081L87.2539%20129.286Z'%20fill='black'/%3e%3cpath%20d='M104.424%2063.7349L104.462%2062.8562L106.208%2063.2913C106.189%2063.0092%20106.11%2062.7346%20105.974%2062.4863C105.839%2062.2381%20105.652%2062.0221%20105.425%2061.8534L107.286%2061.7493C105.725%2059.5292%20103.73%2057.6487%20101.423%2056.2216C99.1157%2054.7944%2096.5433%2053.8501%2093.8612%2053.4457C89.8374%2052.862%2085.3571%2053.7066%2082.5979%2056.6954C81.2595%2058.1451%2080.4186%2059.9887%2079.8204%2061.8695C78.7186%2065.3336%2078.4942%2069.4629%2080.7915%2072.2787C83.1264%2075.1404%2087.2048%2075.701%2090.8793%2076.0552C92.1722%2076.1798%2093.5272%2076.2958%2094.7253%2075.7937C94.8586%2074.4183%2094.6827%2073.0304%2094.2104%2071.7319C94.0137%2071.3299%2093.9197%2070.8854%2093.9368%2070.4381C94.1002%2069.344%2095.5583%2069.0684%2096.6537%2069.2162C97.7491%2069.364%2099.0662%2069.5902%2099.786%2068.7506C100.282%2068.1723%20100.252%2067.3302%20100.318%2066.571C100.497%2064.5042%20104.405%2064.1682%20104.424%2063.7349Z'%20fill='%231B2028'/%3e%3cpath%20d='M174.886%20245.357C182.278%20245.357%20188.271%20239.359%20188.271%20231.96C188.271%20224.561%20182.278%20218.562%20174.886%20218.562C167.493%20218.562%20161.5%20224.561%20161.5%20231.96C161.5%20239.359%20167.493%20245.357%20174.886%20245.357Z'%20fill='%2341EAD4'/%3e%3cpath%20d='M17.6826%20240.683C25.0753%20240.683%2031.0683%20234.685%2031.0683%20227.286C31.0683%20219.887%2025.0753%20213.889%2017.6826%20213.889C10.2899%20213.889%204.29688%20219.887%204.29688%20227.286C4.29688%20234.685%2010.2899%20240.683%2017.6826%20240.683Z'%20fill='%2341EAD4'/%3e%3cpath%20d='M17.6814%20219.185C23.011%20219.185%2027.3316%20214.861%2027.3316%20209.527C27.3316%20204.192%2023.011%20199.868%2017.6814%20199.868C12.3518%20199.868%208.03125%20204.192%208.03125%20209.527C8.03125%20214.861%2012.3518%20219.185%2017.6814%20219.185Z'%20fill='%2341EAD4'/%3e%3cpath%20d='M17.6805%20201.426C21.4629%20201.426%2024.529%20198.357%2024.529%20194.571C24.529%20190.786%2021.4629%20187.717%2017.6805%20187.717C13.8982%20187.717%2010.832%20190.786%2010.832%20194.571C10.832%20198.357%2013.8982%20201.426%2017.6805%20201.426Z'%20fill='%2341EAD4'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2660_357861'%3e%3crect%20width='248.258'%20height='260'%20fill='white'%20transform='translate(0.871094)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var $2 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var d8 = $2.exports, ca;
function h8() {
  return ca || (ca = 1, function(u, l) {
    (function() {
      var i, g = "4.17.21", v = 200, x = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", E = "Expected a function", S = "Invalid `variable` option passed into `_.template`", A = "__lodash_hash_undefined__", F = 500, $ = "__lodash_placeholder__", j = 1, V = 2, J = 4, X = 1, ye = 2, re = 1, K = 2, ue = 4, we = 8, De = 16, he = 32, We = 64, be = 128, Ge = 256, Fe = 512, me = 30, ie = "...", tn = 800, ce = 16, z = 1, L = 2, M = 3, Z = 1 / 0, y = 9007199254740991, H = 17976931348623157e292, I = NaN, k = 4294967295, O = k - 1, P = k >>> 1, q = [
        ["ary", be],
        ["bind", re],
        ["bindKey", K],
        ["curry", we],
        ["curryRight", De],
        ["flip", Fe],
        ["partial", he],
        ["partialRight", We],
        ["rearg", Ge]
      ], ge = "[object Arguments]", Pe = "[object Array]", Ue = "[object AsyncFunction]", ze = "[object Boolean]", $e = "[object Date]", Re = "[object DOMException]", R = "[object Error]", ve = "[object Function]", je = "[object GeneratorFunction]", Xe = "[object Map]", yn = "[object Number]", an = "[object Null]", cn = "[object Object]", Vn = "[object Promise]", kn = "[object Proxy]", at = "[object RegExp]", wn = "[object Set]", Gn = "[object String]", _t = "[object Symbol]", D = "[object Undefined]", Le = "[object WeakMap]", Se = "[object WeakSet]", Ye = "[object ArrayBuffer]", qe = "[object DataView]", Ve = "[object Float32Array]", Oe = "[object Float64Array]", l2 = "[object Int8Array]", u2 = "[object Int16Array]", c2 = "[object Int32Array]", f2 = "[object Uint8Array]", d2 = "[object Uint8ClampedArray]", h2 = "[object Uint16Array]", g2 = "[object Uint32Array]", p2 = /\b__p \+= '';/g, H2 = /\b(__p \+=) '' \+/g, yt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Zt = /&(?:amp|lt|gt|quot|#39);/g, zt = /[&<>"']/g, U2 = RegExp(Zt.source), Z0 = RegExp(zt.source), Z2 = /<%-([\s\S]+?)%>/g, z0 = /<%([\s\S]+?)%>/g, m2 = /<%=([\s\S]+?)%>/g, z2 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Y0 = /^\w*$/, q0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yt = /[\\^$.*+?()[\]{}|]/g, Y2 = RegExp(Yt.source), v2 = /^\s+/, V0 = /\s/, k0 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, G0 = /\{\n\/\* \[wrapped with (.+)\] \*/, d = /,? & /, N = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, U = /[()=,{}\[\]\/\s]/, te = /\\(\\)?/g, Te = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ae = /\w*$/, Ce = /^[-+]0x[0-9a-f]+$/i, de = /^0b[01]+$/i, hn = /^\[object .+?Constructor\]$/, Ke = /^0o[0-7]+$/i, Qe = /^(?:0|[1-9]\d*)$/, On = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Kn = /($^)/, ot = /['\n\r\u2028\u2029\\]/g, on = "\\ud800-\\udfff", C2 = "\\u0300-\\u036f", K0 = "\\ufe20-\\ufe2f", J0 = "\\u20d0-\\u20ff", wi = C2 + K0 + J0, bi = "\\u2700-\\u27bf", Ei = "a-z\\xdf-\\xf6\\xf8-\\xff", Ba = "\\xac\\xb1\\xd7\\xf7", Wa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ha = "\\u2000-\\u206f", Ua = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ti = "A-Z\\xc0-\\xd6\\xd8-\\xde", Si = "\\ufe0e\\ufe0f", Oi = Ba + Wa + Ha + Ua, X0 = "['’]", Za = "[" + on + "]", Ni = "[" + Oi + "]", q2 = "[" + wi + "]", Ri = "\\d+", za = "[" + bi + "]", Ai = "[" + Ei + "]", Mi = "[^" + on + Oi + Ri + bi + Ei + Ti + "]", Q0 = "\\ud83c[\\udffb-\\udfff]", Ya = "(?:" + q2 + "|" + Q0 + ")", Di = "[^" + on + "]", er = "(?:\\ud83c[\\udde6-\\uddff]){2}", nr = "[\\ud800-\\udbff][\\udc00-\\udfff]", qt = "[" + Ti + "]", ji = "\\u200d", Li = "(?:" + Ai + "|" + Mi + ")", qa = "(?:" + qt + "|" + Mi + ")", Ii = "(?:" + X0 + "(?:d|ll|m|re|s|t|ve))?", Fi = "(?:" + X0 + "(?:D|LL|M|RE|S|T|VE))?", Pi = Ya + "?", $i = "[" + Si + "]?", Va = "(?:" + ji + "(?:" + [Di, er, nr].join("|") + ")" + $i + Pi + ")*", ka = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ga = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Bi = $i + Pi + Va, Ka = "(?:" + [za, er, nr].join("|") + ")" + Bi, Ja = "(?:" + [Di + q2 + "?", q2, er, nr, Za].join("|") + ")", Xa = RegExp(X0, "g"), Qa = RegExp(q2, "g"), tr = RegExp(Q0 + "(?=" + Q0 + ")|" + Ja + Bi, "g"), eo = RegExp([
        qt + "?" + Ai + "+" + Ii + "(?=" + [Ni, qt, "$"].join("|") + ")",
        qa + "+" + Fi + "(?=" + [Ni, qt + Li, "$"].join("|") + ")",
        qt + "?" + Li + "+" + Ii,
        qt + "+" + Fi,
        Ga,
        ka,
        Ri,
        Ka
      ].join("|"), "g"), no = RegExp("[" + ji + on + wi + Si + "]"), to = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ro = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], io = -1, Ze = {};
      Ze[Ve] = Ze[Oe] = Ze[l2] = Ze[u2] = Ze[c2] = Ze[f2] = Ze[d2] = Ze[h2] = Ze[g2] = !0, Ze[ge] = Ze[Pe] = Ze[Ye] = Ze[ze] = Ze[qe] = Ze[$e] = Ze[R] = Ze[ve] = Ze[Xe] = Ze[yn] = Ze[cn] = Ze[at] = Ze[wn] = Ze[Gn] = Ze[Le] = !1;
      var He = {};
      He[ge] = He[Pe] = He[Ye] = He[qe] = He[ze] = He[$e] = He[Ve] = He[Oe] = He[l2] = He[u2] = He[c2] = He[Xe] = He[yn] = He[cn] = He[at] = He[wn] = He[Gn] = He[_t] = He[f2] = He[d2] = He[h2] = He[g2] = !0, He[R] = He[ve] = He[Le] = !1;
      var so = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, ao = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, oo = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, lo = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, uo = parseFloat, co = parseInt, Wi = typeof D0 == "object" && D0 && D0.Object === Object && D0, fo = typeof self == "object" && self && self.Object === Object && self, gn = Wi || fo || Function("return this")(), rr = l && !l.nodeType && l, Dt = rr && !0 && u && !u.nodeType && u, Hi = Dt && Dt.exports === rr, ir = Hi && Wi.process, Bn = function() {
        try {
          var p = Dt && Dt.require && Dt.require("util").types;
          return p || ir && ir.binding && ir.binding("util");
        } catch {
        }
      }(), Ui = Bn && Bn.isArrayBuffer, Zi = Bn && Bn.isDate, zi = Bn && Bn.isMap, Yi = Bn && Bn.isRegExp, qi = Bn && Bn.isSet, Vi = Bn && Bn.isTypedArray;
      function Dn(p, _, C) {
        switch (C.length) {
          case 0:
            return p.call(_);
          case 1:
            return p.call(_, C[0]);
          case 2:
            return p.call(_, C[0], C[1]);
          case 3:
            return p.call(_, C[0], C[1], C[2]);
        }
        return p.apply(_, C);
      }
      function ho(p, _, C, Y) {
        for (var se = -1, Ne = p == null ? 0 : p.length; ++se < Ne; ) {
          var ln = p[se];
          _(Y, ln, C(ln), p);
        }
        return Y;
      }
      function Wn(p, _) {
        for (var C = -1, Y = p == null ? 0 : p.length; ++C < Y && _(p[C], C, p) !== !1; )
          ;
        return p;
      }
      function go(p, _) {
        for (var C = p == null ? 0 : p.length; C-- && _(p[C], C, p) !== !1; )
          ;
        return p;
      }
      function ki(p, _) {
        for (var C = -1, Y = p == null ? 0 : p.length; ++C < Y; )
          if (!_(p[C], C, p))
            return !1;
        return !0;
      }
      function wt(p, _) {
        for (var C = -1, Y = p == null ? 0 : p.length, se = 0, Ne = []; ++C < Y; ) {
          var ln = p[C];
          _(ln, C, p) && (Ne[se++] = ln);
        }
        return Ne;
      }
      function V2(p, _) {
        var C = p == null ? 0 : p.length;
        return !!C && Vt(p, _, 0) > -1;
      }
      function sr(p, _, C) {
        for (var Y = -1, se = p == null ? 0 : p.length; ++Y < se; )
          if (C(_, p[Y]))
            return !0;
        return !1;
      }
      function ke(p, _) {
        for (var C = -1, Y = p == null ? 0 : p.length, se = Array(Y); ++C < Y; )
          se[C] = _(p[C], C, p);
        return se;
      }
      function bt(p, _) {
        for (var C = -1, Y = _.length, se = p.length; ++C < Y; )
          p[se + C] = _[C];
        return p;
      }
      function ar(p, _, C, Y) {
        var se = -1, Ne = p == null ? 0 : p.length;
        for (Y && Ne && (C = p[++se]); ++se < Ne; )
          C = _(C, p[se], se, p);
        return C;
      }
      function po(p, _, C, Y) {
        var se = p == null ? 0 : p.length;
        for (Y && se && (C = p[--se]); se--; )
          C = _(C, p[se], se, p);
        return C;
      }
      function or(p, _) {
        for (var C = -1, Y = p == null ? 0 : p.length; ++C < Y; )
          if (_(p[C], C, p))
            return !0;
        return !1;
      }
      var mo = lr("length");
      function vo(p) {
        return p.split("");
      }
      function Co(p) {
        return p.match(N) || [];
      }
      function Gi(p, _, C) {
        var Y;
        return C(p, function(se, Ne, ln) {
          if (_(se, Ne, ln))
            return Y = Ne, !1;
        }), Y;
      }
      function k2(p, _, C, Y) {
        for (var se = p.length, Ne = C + (Y ? 1 : -1); Y ? Ne-- : ++Ne < se; )
          if (_(p[Ne], Ne, p))
            return Ne;
        return -1;
      }
      function Vt(p, _, C) {
        return _ === _ ? Ao(p, _, C) : k2(p, Ki, C);
      }
      function xo(p, _, C, Y) {
        for (var se = C - 1, Ne = p.length; ++se < Ne; )
          if (Y(p[se], _))
            return se;
        return -1;
      }
      function Ki(p) {
        return p !== p;
      }
      function Ji(p, _) {
        var C = p == null ? 0 : p.length;
        return C ? cr(p, _) / C : I;
      }
      function lr(p) {
        return function(_) {
          return _ == null ? i : _[p];
        };
      }
      function ur(p) {
        return function(_) {
          return p == null ? i : p[_];
        };
      }
      function Xi(p, _, C, Y, se) {
        return se(p, function(Ne, ln, Be) {
          C = Y ? (Y = !1, Ne) : _(C, Ne, ln, Be);
        }), C;
      }
      function _o(p, _) {
        var C = p.length;
        for (p.sort(_); C--; )
          p[C] = p[C].value;
        return p;
      }
      function cr(p, _) {
        for (var C, Y = -1, se = p.length; ++Y < se; ) {
          var Ne = _(p[Y]);
          Ne !== i && (C = C === i ? Ne : C + Ne);
        }
        return C;
      }
      function fr(p, _) {
        for (var C = -1, Y = Array(p); ++C < p; )
          Y[C] = _(C);
        return Y;
      }
      function yo(p, _) {
        return ke(_, function(C) {
          return [C, p[C]];
        });
      }
      function Qi(p) {
        return p && p.slice(0, r1(p) + 1).replace(v2, "");
      }
      function jn(p) {
        return function(_) {
          return p(_);
        };
      }
      function dr(p, _) {
        return ke(_, function(C) {
          return p[C];
        });
      }
      function x2(p, _) {
        return p.has(_);
      }
      function e1(p, _) {
        for (var C = -1, Y = p.length; ++C < Y && Vt(_, p[C], 0) > -1; )
          ;
        return C;
      }
      function n1(p, _) {
        for (var C = p.length; C-- && Vt(_, p[C], 0) > -1; )
          ;
        return C;
      }
      function wo(p, _) {
        for (var C = p.length, Y = 0; C--; )
          p[C] === _ && ++Y;
        return Y;
      }
      var bo = ur(so), Eo = ur(ao);
      function To(p) {
        return "\\" + lo[p];
      }
      function So(p, _) {
        return p == null ? i : p[_];
      }
      function kt(p) {
        return no.test(p);
      }
      function Oo(p) {
        return to.test(p);
      }
      function No(p) {
        for (var _, C = []; !(_ = p.next()).done; )
          C.push(_.value);
        return C;
      }
      function hr(p) {
        var _ = -1, C = Array(p.size);
        return p.forEach(function(Y, se) {
          C[++_] = [se, Y];
        }), C;
      }
      function t1(p, _) {
        return function(C) {
          return p(_(C));
        };
      }
      function Et(p, _) {
        for (var C = -1, Y = p.length, se = 0, Ne = []; ++C < Y; ) {
          var ln = p[C];
          (ln === _ || ln === $) && (p[C] = $, Ne[se++] = C);
        }
        return Ne;
      }
      function G2(p) {
        var _ = -1, C = Array(p.size);
        return p.forEach(function(Y) {
          C[++_] = Y;
        }), C;
      }
      function Ro(p) {
        var _ = -1, C = Array(p.size);
        return p.forEach(function(Y) {
          C[++_] = [Y, Y];
        }), C;
      }
      function Ao(p, _, C) {
        for (var Y = C - 1, se = p.length; ++Y < se; )
          if (p[Y] === _)
            return Y;
        return -1;
      }
      function Mo(p, _, C) {
        for (var Y = C + 1; Y--; )
          if (p[Y] === _)
            return Y;
        return Y;
      }
      function Gt(p) {
        return kt(p) ? jo(p) : mo(p);
      }
      function Jn(p) {
        return kt(p) ? Lo(p) : vo(p);
      }
      function r1(p) {
        for (var _ = p.length; _-- && V0.test(p.charAt(_)); )
          ;
        return _;
      }
      var Do = ur(oo);
      function jo(p) {
        for (var _ = tr.lastIndex = 0; tr.test(p); )
          ++_;
        return _;
      }
      function Lo(p) {
        return p.match(tr) || [];
      }
      function Io(p) {
        return p.match(eo) || [];
      }
      var Fo = function p(_) {
        _ = _ == null ? gn : Kt.defaults(gn.Object(), _, Kt.pick(gn, ro));
        var C = _.Array, Y = _.Date, se = _.Error, Ne = _.Function, ln = _.Math, Be = _.Object, gr = _.RegExp, Po = _.String, Hn = _.TypeError, K2 = C.prototype, $o = Ne.prototype, Jt = Be.prototype, J2 = _["__core-js_shared__"], X2 = $o.toString, Ie = Jt.hasOwnProperty, Bo = 0, i1 = function() {
          var e = /[^.]+$/.exec(J2 && J2.keys && J2.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        }(), Q2 = Jt.toString, Wo = X2.call(Be), Ho = gn._, Uo = gr(
          "^" + X2.call(Ie).replace(Yt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), e0 = Hi ? _.Buffer : i, Tt = _.Symbol, n0 = _.Uint8Array, s1 = e0 ? e0.allocUnsafe : i, t0 = t1(Be.getPrototypeOf, Be), a1 = Be.create, o1 = Jt.propertyIsEnumerable, r0 = K2.splice, l1 = Tt ? Tt.isConcatSpreadable : i, _2 = Tt ? Tt.iterator : i, jt = Tt ? Tt.toStringTag : i, i0 = function() {
          try {
            var e = $t(Be, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        }(), Zo = _.clearTimeout !== gn.clearTimeout && _.clearTimeout, zo = Y && Y.now !== gn.Date.now && Y.now, Yo = _.setTimeout !== gn.setTimeout && _.setTimeout, s0 = ln.ceil, a0 = ln.floor, pr = Be.getOwnPropertySymbols, qo = e0 ? e0.isBuffer : i, u1 = _.isFinite, Vo = K2.join, ko = t1(Be.keys, Be), un = ln.max, xn = ln.min, Go = Y.now, Ko = _.parseInt, c1 = ln.random, Jo = K2.reverse, mr = $t(_, "DataView"), y2 = $t(_, "Map"), vr = $t(_, "Promise"), Xt = $t(_, "Set"), w2 = $t(_, "WeakMap"), b2 = $t(Be, "create"), o0 = w2 && new w2(), Qt = {}, Xo = Bt(mr), Qo = Bt(y2), el = Bt(vr), nl = Bt(Xt), tl = Bt(w2), l0 = Tt ? Tt.prototype : i, E2 = l0 ? l0.valueOf : i, f1 = l0 ? l0.toString : i;
        function a(e) {
          if (en(e) && !ae(e) && !(e instanceof xe)) {
            if (e instanceof Un)
              return e;
            if (Ie.call(e, "__wrapped__"))
              return ds(e);
          }
          return new Un(e);
        }
        var e2 = /* @__PURE__ */ function() {
          function e() {
          }
          return function(n) {
            if (!Je(n))
              return {};
            if (a1)
              return a1(n);
            e.prototype = n;
            var t = new e();
            return e.prototype = i, t;
          };
        }();
        function u0() {
        }
        function Un(e, n) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = i;
        }
        a.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: Z2,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: z0,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: m2,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: a
          }
        }, a.prototype = u0.prototype, a.prototype.constructor = a, Un.prototype = e2(u0.prototype), Un.prototype.constructor = Un;
        function xe(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = k, this.__views__ = [];
        }
        function rl() {
          var e = new xe(this.__wrapped__);
          return e.__actions__ = Nn(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Nn(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Nn(this.__views__), e;
        }
        function il() {
          if (this.__filtered__) {
            var e = new xe(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function sl() {
          var e = this.__wrapped__.value(), n = this.__dir__, t = ae(e), r = n < 0, s = t ? e.length : 0, o = vu(0, s, this.__views__), f = o.start, h = o.end, m = h - f, w = r ? h : f - 1, b = this.__iteratees__, T = b.length, B = 0, G = xn(m, this.__takeCount__);
          if (!t || !r && s == m && G == m)
            return I1(e, this.__actions__);
          var ee = [];
          e:
            for (; m-- && B < G; ) {
              w += n;
              for (var le = -1, ne = e[w]; ++le < T; ) {
                var pe = b[le], _e = pe.iteratee, Fn = pe.type, Tn = _e(ne);
                if (Fn == L)
                  ne = Tn;
                else if (!Tn) {
                  if (Fn == z)
                    continue e;
                  break e;
                }
              }
              ee[B++] = ne;
            }
          return ee;
        }
        xe.prototype = e2(u0.prototype), xe.prototype.constructor = xe;
        function Lt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function al() {
          this.__data__ = b2 ? b2(null) : {}, this.size = 0;
        }
        function ol(e) {
          var n = this.has(e) && delete this.__data__[e];
          return this.size -= n ? 1 : 0, n;
        }
        function ll(e) {
          var n = this.__data__;
          if (b2) {
            var t = n[e];
            return t === A ? i : t;
          }
          return Ie.call(n, e) ? n[e] : i;
        }
        function ul(e) {
          var n = this.__data__;
          return b2 ? n[e] !== i : Ie.call(n, e);
        }
        function cl(e, n) {
          var t = this.__data__;
          return this.size += this.has(e) ? 0 : 1, t[e] = b2 && n === i ? A : n, this;
        }
        Lt.prototype.clear = al, Lt.prototype.delete = ol, Lt.prototype.get = ll, Lt.prototype.has = ul, Lt.prototype.set = cl;
        function lt(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function fl() {
          this.__data__ = [], this.size = 0;
        }
        function dl(e) {
          var n = this.__data__, t = c0(n, e);
          if (t < 0)
            return !1;
          var r = n.length - 1;
          return t == r ? n.pop() : r0.call(n, t, 1), --this.size, !0;
        }
        function hl(e) {
          var n = this.__data__, t = c0(n, e);
          return t < 0 ? i : n[t][1];
        }
        function gl(e) {
          return c0(this.__data__, e) > -1;
        }
        function pl(e, n) {
          var t = this.__data__, r = c0(t, e);
          return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
        }
        lt.prototype.clear = fl, lt.prototype.delete = dl, lt.prototype.get = hl, lt.prototype.has = gl, lt.prototype.set = pl;
        function ut(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.clear(); ++n < t; ) {
            var r = e[n];
            this.set(r[0], r[1]);
          }
        }
        function ml() {
          this.size = 0, this.__data__ = {
            hash: new Lt(),
            map: new (y2 || lt)(),
            string: new Lt()
          };
        }
        function vl(e) {
          var n = w0(this, e).delete(e);
          return this.size -= n ? 1 : 0, n;
        }
        function Cl(e) {
          return w0(this, e).get(e);
        }
        function xl(e) {
          return w0(this, e).has(e);
        }
        function _l(e, n) {
          var t = w0(this, e), r = t.size;
          return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
        }
        ut.prototype.clear = ml, ut.prototype.delete = vl, ut.prototype.get = Cl, ut.prototype.has = xl, ut.prototype.set = _l;
        function It(e) {
          var n = -1, t = e == null ? 0 : e.length;
          for (this.__data__ = new ut(); ++n < t; )
            this.add(e[n]);
        }
        function yl(e) {
          return this.__data__.set(e, A), this;
        }
        function wl(e) {
          return this.__data__.has(e);
        }
        It.prototype.add = It.prototype.push = yl, It.prototype.has = wl;
        function Xn(e) {
          var n = this.__data__ = new lt(e);
          this.size = n.size;
        }
        function bl() {
          this.__data__ = new lt(), this.size = 0;
        }
        function El(e) {
          var n = this.__data__, t = n.delete(e);
          return this.size = n.size, t;
        }
        function Tl(e) {
          return this.__data__.get(e);
        }
        function Sl(e) {
          return this.__data__.has(e);
        }
        function Ol(e, n) {
          var t = this.__data__;
          if (t instanceof lt) {
            var r = t.__data__;
            if (!y2 || r.length < v - 1)
              return r.push([e, n]), this.size = ++t.size, this;
            t = this.__data__ = new ut(r);
          }
          return t.set(e, n), this.size = t.size, this;
        }
        Xn.prototype.clear = bl, Xn.prototype.delete = El, Xn.prototype.get = Tl, Xn.prototype.has = Sl, Xn.prototype.set = Ol;
        function d1(e, n) {
          var t = ae(e), r = !t && Wt(e), s = !t && !r && At(e), o = !t && !r && !s && i2(e), f = t || r || s || o, h = f ? fr(e.length, Po) : [], m = h.length;
          for (var w in e)
            (n || Ie.call(e, w)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
            (w == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            s && (w == "offset" || w == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            o && (w == "buffer" || w == "byteLength" || w == "byteOffset") || // Skip index properties.
            ht(w, m))) && h.push(w);
          return h;
        }
        function h1(e) {
          var n = e.length;
          return n ? e[Nr(0, n - 1)] : i;
        }
        function Nl(e, n) {
          return b0(Nn(e), Ft(n, 0, e.length));
        }
        function Rl(e) {
          return b0(Nn(e));
        }
        function Cr(e, n, t) {
          (t !== i && !Qn(e[n], t) || t === i && !(n in e)) && ct(e, n, t);
        }
        function T2(e, n, t) {
          var r = e[n];
          (!(Ie.call(e, n) && Qn(r, t)) || t === i && !(n in e)) && ct(e, n, t);
        }
        function c0(e, n) {
          for (var t = e.length; t--; )
            if (Qn(e[t][0], n))
              return t;
          return -1;
        }
        function Al(e, n, t, r) {
          return St(e, function(s, o, f) {
            n(r, s, t(s), f);
          }), r;
        }
        function g1(e, n) {
          return e && tt(n, fn(n), e);
        }
        function Ml(e, n) {
          return e && tt(n, An(n), e);
        }
        function ct(e, n, t) {
          n == "__proto__" && i0 ? i0(e, n, {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0
          }) : e[n] = t;
        }
        function xr(e, n) {
          for (var t = -1, r = n.length, s = C(r), o = e == null; ++t < r; )
            s[t] = o ? i : Qr(e, n[t]);
          return s;
        }
        function Ft(e, n, t) {
          return e === e && (t !== i && (e = e <= t ? e : t), n !== i && (e = e >= n ? e : n)), e;
        }
        function Zn(e, n, t, r, s, o) {
          var f, h = n & j, m = n & V, w = n & J;
          if (t && (f = s ? t(e, r, s, o) : t(e)), f !== i)
            return f;
          if (!Je(e))
            return e;
          var b = ae(e);
          if (b) {
            if (f = xu(e), !h)
              return Nn(e, f);
          } else {
            var T = _n(e), B = T == ve || T == je;
            if (At(e))
              return $1(e, h);
            if (T == cn || T == ge || B && !s) {
              if (f = m || B ? {} : rs(e), !h)
                return m ? lu(e, Ml(f, e)) : ou(e, g1(f, e));
            } else {
              if (!He[T])
                return s ? e : {};
              f = _u(e, T, h);
            }
          }
          o || (o = new Xn());
          var G = o.get(e);
          if (G)
            return G;
          o.set(e, f), Ds(e) ? e.forEach(function(ne) {
            f.add(Zn(ne, n, t, ne, e, o));
          }) : As(e) && e.forEach(function(ne, pe) {
            f.set(pe, Zn(ne, n, t, pe, e, o));
          });
          var ee = w ? m ? Br : $r : m ? An : fn, le = b ? i : ee(e);
          return Wn(le || e, function(ne, pe) {
            le && (pe = ne, ne = e[pe]), T2(f, pe, Zn(ne, n, t, pe, e, o));
          }), f;
        }
        function Dl(e) {
          var n = fn(e);
          return function(t) {
            return p1(t, e, n);
          };
        }
        function p1(e, n, t) {
          var r = t.length;
          if (e == null)
            return !r;
          for (e = Be(e); r--; ) {
            var s = t[r], o = n[s], f = e[s];
            if (f === i && !(s in e) || !o(f))
              return !1;
          }
          return !0;
        }
        function m1(e, n, t) {
          if (typeof e != "function")
            throw new Hn(E);
          return D2(function() {
            e.apply(i, t);
          }, n);
        }
        function S2(e, n, t, r) {
          var s = -1, o = V2, f = !0, h = e.length, m = [], w = n.length;
          if (!h)
            return m;
          t && (n = ke(n, jn(t))), r ? (o = sr, f = !1) : n.length >= v && (o = x2, f = !1, n = new It(n));
          e:
            for (; ++s < h; ) {
              var b = e[s], T = t == null ? b : t(b);
              if (b = r || b !== 0 ? b : 0, f && T === T) {
                for (var B = w; B--; )
                  if (n[B] === T)
                    continue e;
                m.push(b);
              } else o(n, T, r) || m.push(b);
            }
          return m;
        }
        var St = Z1(nt), v1 = Z1(yr, !0);
        function jl(e, n) {
          var t = !0;
          return St(e, function(r, s, o) {
            return t = !!n(r, s, o), t;
          }), t;
        }
        function f0(e, n, t) {
          for (var r = -1, s = e.length; ++r < s; ) {
            var o = e[r], f = n(o);
            if (f != null && (h === i ? f === f && !In(f) : t(f, h)))
              var h = f, m = o;
          }
          return m;
        }
        function Ll(e, n, t, r) {
          var s = e.length;
          for (t = oe(t), t < 0 && (t = -t > s ? 0 : s + t), r = r === i || r > s ? s : oe(r), r < 0 && (r += s), r = t > r ? 0 : Ls(r); t < r; )
            e[t++] = n;
          return e;
        }
        function C1(e, n) {
          var t = [];
          return St(e, function(r, s, o) {
            n(r, s, o) && t.push(r);
          }), t;
        }
        function pn(e, n, t, r, s) {
          var o = -1, f = e.length;
          for (t || (t = wu), s || (s = []); ++o < f; ) {
            var h = e[o];
            n > 0 && t(h) ? n > 1 ? pn(h, n - 1, t, r, s) : bt(s, h) : r || (s[s.length] = h);
          }
          return s;
        }
        var _r = z1(), x1 = z1(!0);
        function nt(e, n) {
          return e && _r(e, n, fn);
        }
        function yr(e, n) {
          return e && x1(e, n, fn);
        }
        function d0(e, n) {
          return wt(n, function(t) {
            return gt(e[t]);
          });
        }
        function Pt(e, n) {
          n = Nt(n, e);
          for (var t = 0, r = n.length; e != null && t < r; )
            e = e[rt(n[t++])];
          return t && t == r ? e : i;
        }
        function _1(e, n, t) {
          var r = n(e);
          return ae(e) ? r : bt(r, t(e));
        }
        function bn(e) {
          return e == null ? e === i ? D : an : jt && jt in Be(e) ? mu(e) : Ru(e);
        }
        function wr(e, n) {
          return e > n;
        }
        function Il(e, n) {
          return e != null && Ie.call(e, n);
        }
        function Fl(e, n) {
          return e != null && n in Be(e);
        }
        function Pl(e, n, t) {
          return e >= xn(n, t) && e < un(n, t);
        }
        function br(e, n, t) {
          for (var r = t ? sr : V2, s = e[0].length, o = e.length, f = o, h = C(o), m = 1 / 0, w = []; f--; ) {
            var b = e[f];
            f && n && (b = ke(b, jn(n))), m = xn(b.length, m), h[f] = !t && (n || s >= 120 && b.length >= 120) ? new It(f && b) : i;
          }
          b = e[0];
          var T = -1, B = h[0];
          e:
            for (; ++T < s && w.length < m; ) {
              var G = b[T], ee = n ? n(G) : G;
              if (G = t || G !== 0 ? G : 0, !(B ? x2(B, ee) : r(w, ee, t))) {
                for (f = o; --f; ) {
                  var le = h[f];
                  if (!(le ? x2(le, ee) : r(e[f], ee, t)))
                    continue e;
                }
                B && B.push(ee), w.push(G);
              }
            }
          return w;
        }
        function $l(e, n, t, r) {
          return nt(e, function(s, o, f) {
            n(r, t(s), o, f);
          }), r;
        }
        function O2(e, n, t) {
          n = Nt(n, e), e = os(e, n);
          var r = e == null ? e : e[rt(Yn(n))];
          return r == null ? i : Dn(r, e, t);
        }
        function y1(e) {
          return en(e) && bn(e) == ge;
        }
        function Bl(e) {
          return en(e) && bn(e) == Ye;
        }
        function Wl(e) {
          return en(e) && bn(e) == $e;
        }
        function N2(e, n, t, r, s) {
          return e === n ? !0 : e == null || n == null || !en(e) && !en(n) ? e !== e && n !== n : Hl(e, n, t, r, N2, s);
        }
        function Hl(e, n, t, r, s, o) {
          var f = ae(e), h = ae(n), m = f ? Pe : _n(e), w = h ? Pe : _n(n);
          m = m == ge ? cn : m, w = w == ge ? cn : w;
          var b = m == cn, T = w == cn, B = m == w;
          if (B && At(e)) {
            if (!At(n))
              return !1;
            f = !0, b = !1;
          }
          if (B && !b)
            return o || (o = new Xn()), f || i2(e) ? es(e, n, t, r, s, o) : gu(e, n, m, t, r, s, o);
          if (!(t & X)) {
            var G = b && Ie.call(e, "__wrapped__"), ee = T && Ie.call(n, "__wrapped__");
            if (G || ee) {
              var le = G ? e.value() : e, ne = ee ? n.value() : n;
              return o || (o = new Xn()), s(le, ne, t, r, o);
            }
          }
          return B ? (o || (o = new Xn()), pu(e, n, t, r, s, o)) : !1;
        }
        function Ul(e) {
          return en(e) && _n(e) == Xe;
        }
        function Er(e, n, t, r) {
          var s = t.length, o = s, f = !r;
          if (e == null)
            return !o;
          for (e = Be(e); s--; ) {
            var h = t[s];
            if (f && h[2] ? h[1] !== e[h[0]] : !(h[0] in e))
              return !1;
          }
          for (; ++s < o; ) {
            h = t[s];
            var m = h[0], w = e[m], b = h[1];
            if (f && h[2]) {
              if (w === i && !(m in e))
                return !1;
            } else {
              var T = new Xn();
              if (r)
                var B = r(w, b, m, e, n, T);
              if (!(B === i ? N2(b, w, X | ye, r, T) : B))
                return !1;
            }
          }
          return !0;
        }
        function w1(e) {
          if (!Je(e) || Eu(e))
            return !1;
          var n = gt(e) ? Uo : hn;
          return n.test(Bt(e));
        }
        function Zl(e) {
          return en(e) && bn(e) == at;
        }
        function zl(e) {
          return en(e) && _n(e) == wn;
        }
        function Yl(e) {
          return en(e) && R0(e.length) && !!Ze[bn(e)];
        }
        function b1(e) {
          return typeof e == "function" ? e : e == null ? Mn : typeof e == "object" ? ae(e) ? S1(e[0], e[1]) : T1(e) : Ys(e);
        }
        function Tr(e) {
          if (!M2(e))
            return ko(e);
          var n = [];
          for (var t in Be(e))
            Ie.call(e, t) && t != "constructor" && n.push(t);
          return n;
        }
        function ql(e) {
          if (!Je(e))
            return Nu(e);
          var n = M2(e), t = [];
          for (var r in e)
            r == "constructor" && (n || !Ie.call(e, r)) || t.push(r);
          return t;
        }
        function Sr(e, n) {
          return e < n;
        }
        function E1(e, n) {
          var t = -1, r = Rn(e) ? C(e.length) : [];
          return St(e, function(s, o, f) {
            r[++t] = n(s, o, f);
          }), r;
        }
        function T1(e) {
          var n = Hr(e);
          return n.length == 1 && n[0][2] ? ss(n[0][0], n[0][1]) : function(t) {
            return t === e || Er(t, e, n);
          };
        }
        function S1(e, n) {
          return Zr(e) && is(n) ? ss(rt(e), n) : function(t) {
            var r = Qr(t, e);
            return r === i && r === n ? ei(t, e) : N2(n, r, X | ye);
          };
        }
        function h0(e, n, t, r, s) {
          e !== n && _r(n, function(o, f) {
            if (s || (s = new Xn()), Je(o))
              Vl(e, n, f, t, h0, r, s);
            else {
              var h = r ? r(Yr(e, f), o, f + "", e, n, s) : i;
              h === i && (h = o), Cr(e, f, h);
            }
          }, An);
        }
        function Vl(e, n, t, r, s, o, f) {
          var h = Yr(e, t), m = Yr(n, t), w = f.get(m);
          if (w) {
            Cr(e, t, w);
            return;
          }
          var b = o ? o(h, m, t + "", e, n, f) : i, T = b === i;
          if (T) {
            var B = ae(m), G = !B && At(m), ee = !B && !G && i2(m);
            b = m, B || G || ee ? ae(h) ? b = h : rn(h) ? b = Nn(h) : G ? (T = !1, b = $1(m, !0)) : ee ? (T = !1, b = B1(m, !0)) : b = [] : j2(m) || Wt(m) ? (b = h, Wt(h) ? b = Is(h) : (!Je(h) || gt(h)) && (b = rs(m))) : T = !1;
          }
          T && (f.set(m, b), s(b, m, r, o, f), f.delete(m)), Cr(e, t, b);
        }
        function O1(e, n) {
          var t = e.length;
          if (t)
            return n += n < 0 ? t : 0, ht(n, t) ? e[n] : i;
        }
        function N1(e, n, t) {
          n.length ? n = ke(n, function(o) {
            return ae(o) ? function(f) {
              return Pt(f, o.length === 1 ? o[0] : o);
            } : o;
          }) : n = [Mn];
          var r = -1;
          n = ke(n, jn(Q()));
          var s = E1(e, function(o, f, h) {
            var m = ke(n, function(w) {
              return w(o);
            });
            return { criteria: m, index: ++r, value: o };
          });
          return _o(s, function(o, f) {
            return au(o, f, t);
          });
        }
        function kl(e, n) {
          return R1(e, n, function(t, r) {
            return ei(e, r);
          });
        }
        function R1(e, n, t) {
          for (var r = -1, s = n.length, o = {}; ++r < s; ) {
            var f = n[r], h = Pt(e, f);
            t(h, f) && R2(o, Nt(f, e), h);
          }
          return o;
        }
        function Gl(e) {
          return function(n) {
            return Pt(n, e);
          };
        }
        function Or(e, n, t, r) {
          var s = r ? xo : Vt, o = -1, f = n.length, h = e;
          for (e === n && (n = Nn(n)), t && (h = ke(e, jn(t))); ++o < f; )
            for (var m = 0, w = n[o], b = t ? t(w) : w; (m = s(h, b, m, r)) > -1; )
              h !== e && r0.call(h, m, 1), r0.call(e, m, 1);
          return e;
        }
        function A1(e, n) {
          for (var t = e ? n.length : 0, r = t - 1; t--; ) {
            var s = n[t];
            if (t == r || s !== o) {
              var o = s;
              ht(s) ? r0.call(e, s, 1) : Mr(e, s);
            }
          }
          return e;
        }
        function Nr(e, n) {
          return e + a0(c1() * (n - e + 1));
        }
        function Kl(e, n, t, r) {
          for (var s = -1, o = un(s0((n - e) / (t || 1)), 0), f = C(o); o--; )
            f[r ? o : ++s] = e, e += t;
          return f;
        }
        function Rr(e, n) {
          var t = "";
          if (!e || n < 1 || n > y)
            return t;
          do
            n % 2 && (t += e), n = a0(n / 2), n && (e += e);
          while (n);
          return t;
        }
        function fe(e, n) {
          return qr(as(e, n, Mn), e + "");
        }
        function Jl(e) {
          return h1(s2(e));
        }
        function Xl(e, n) {
          var t = s2(e);
          return b0(t, Ft(n, 0, t.length));
        }
        function R2(e, n, t, r) {
          if (!Je(e))
            return e;
          n = Nt(n, e);
          for (var s = -1, o = n.length, f = o - 1, h = e; h != null && ++s < o; ) {
            var m = rt(n[s]), w = t;
            if (m === "__proto__" || m === "constructor" || m === "prototype")
              return e;
            if (s != f) {
              var b = h[m];
              w = r ? r(b, m, h) : i, w === i && (w = Je(b) ? b : ht(n[s + 1]) ? [] : {});
            }
            T2(h, m, w), h = h[m];
          }
          return e;
        }
        var M1 = o0 ? function(e, n) {
          return o0.set(e, n), e;
        } : Mn, Ql = i0 ? function(e, n) {
          return i0(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ti(n),
            writable: !0
          });
        } : Mn;
        function eu(e) {
          return b0(s2(e));
        }
        function zn(e, n, t) {
          var r = -1, s = e.length;
          n < 0 && (n = -n > s ? 0 : s + n), t = t > s ? s : t, t < 0 && (t += s), s = n > t ? 0 : t - n >>> 0, n >>>= 0;
          for (var o = C(s); ++r < s; )
            o[r] = e[r + n];
          return o;
        }
        function nu(e, n) {
          var t;
          return St(e, function(r, s, o) {
            return t = n(r, s, o), !t;
          }), !!t;
        }
        function g0(e, n, t) {
          var r = 0, s = e == null ? r : e.length;
          if (typeof n == "number" && n === n && s <= P) {
            for (; r < s; ) {
              var o = r + s >>> 1, f = e[o];
              f !== null && !In(f) && (t ? f <= n : f < n) ? r = o + 1 : s = o;
            }
            return s;
          }
          return Ar(e, n, Mn, t);
        }
        function Ar(e, n, t, r) {
          var s = 0, o = e == null ? 0 : e.length;
          if (o === 0)
            return 0;
          n = t(n);
          for (var f = n !== n, h = n === null, m = In(n), w = n === i; s < o; ) {
            var b = a0((s + o) / 2), T = t(e[b]), B = T !== i, G = T === null, ee = T === T, le = In(T);
            if (f)
              var ne = r || ee;
            else w ? ne = ee && (r || B) : h ? ne = ee && B && (r || !G) : m ? ne = ee && B && !G && (r || !le) : G || le ? ne = !1 : ne = r ? T <= n : T < n;
            ne ? s = b + 1 : o = b;
          }
          return xn(o, O);
        }
        function D1(e, n) {
          for (var t = -1, r = e.length, s = 0, o = []; ++t < r; ) {
            var f = e[t], h = n ? n(f) : f;
            if (!t || !Qn(h, m)) {
              var m = h;
              o[s++] = f === 0 ? 0 : f;
            }
          }
          return o;
        }
        function j1(e) {
          return typeof e == "number" ? e : In(e) ? I : +e;
        }
        function Ln(e) {
          if (typeof e == "string")
            return e;
          if (ae(e))
            return ke(e, Ln) + "";
          if (In(e))
            return f1 ? f1.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
        }
        function Ot(e, n, t) {
          var r = -1, s = V2, o = e.length, f = !0, h = [], m = h;
          if (t)
            f = !1, s = sr;
          else if (o >= v) {
            var w = n ? null : du(e);
            if (w)
              return G2(w);
            f = !1, s = x2, m = new It();
          } else
            m = n ? [] : h;
          e:
            for (; ++r < o; ) {
              var b = e[r], T = n ? n(b) : b;
              if (b = t || b !== 0 ? b : 0, f && T === T) {
                for (var B = m.length; B--; )
                  if (m[B] === T)
                    continue e;
                n && m.push(T), h.push(b);
              } else s(m, T, t) || (m !== h && m.push(T), h.push(b));
            }
          return h;
        }
        function Mr(e, n) {
          return n = Nt(n, e), e = os(e, n), e == null || delete e[rt(Yn(n))];
        }
        function L1(e, n, t, r) {
          return R2(e, n, t(Pt(e, n)), r);
        }
        function p0(e, n, t, r) {
          for (var s = e.length, o = r ? s : -1; (r ? o-- : ++o < s) && n(e[o], o, e); )
            ;
          return t ? zn(e, r ? 0 : o, r ? o + 1 : s) : zn(e, r ? o + 1 : 0, r ? s : o);
        }
        function I1(e, n) {
          var t = e;
          return t instanceof xe && (t = t.value()), ar(n, function(r, s) {
            return s.func.apply(s.thisArg, bt([r], s.args));
          }, t);
        }
        function Dr(e, n, t) {
          var r = e.length;
          if (r < 2)
            return r ? Ot(e[0]) : [];
          for (var s = -1, o = C(r); ++s < r; )
            for (var f = e[s], h = -1; ++h < r; )
              h != s && (o[s] = S2(o[s] || f, e[h], n, t));
          return Ot(pn(o, 1), n, t);
        }
        function F1(e, n, t) {
          for (var r = -1, s = e.length, o = n.length, f = {}; ++r < s; ) {
            var h = r < o ? n[r] : i;
            t(f, e[r], h);
          }
          return f;
        }
        function jr(e) {
          return rn(e) ? e : [];
        }
        function Lr(e) {
          return typeof e == "function" ? e : Mn;
        }
        function Nt(e, n) {
          return ae(e) ? e : Zr(e, n) ? [e] : fs(Me(e));
        }
        var tu = fe;
        function Rt(e, n, t) {
          var r = e.length;
          return t = t === i ? r : t, !n && t >= r ? e : zn(e, n, t);
        }
        var P1 = Zo || function(e) {
          return gn.clearTimeout(e);
        };
        function $1(e, n) {
          if (n)
            return e.slice();
          var t = e.length, r = s1 ? s1(t) : new e.constructor(t);
          return e.copy(r), r;
        }
        function Ir(e) {
          var n = new e.constructor(e.byteLength);
          return new n0(n).set(new n0(e)), n;
        }
        function ru(e, n) {
          var t = n ? Ir(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.byteLength);
        }
        function iu(e) {
          var n = new e.constructor(e.source, Ae.exec(e));
          return n.lastIndex = e.lastIndex, n;
        }
        function su(e) {
          return E2 ? Be(E2.call(e)) : {};
        }
        function B1(e, n) {
          var t = n ? Ir(e.buffer) : e.buffer;
          return new e.constructor(t, e.byteOffset, e.length);
        }
        function W1(e, n) {
          if (e !== n) {
            var t = e !== i, r = e === null, s = e === e, o = In(e), f = n !== i, h = n === null, m = n === n, w = In(n);
            if (!h && !w && !o && e > n || o && f && m && !h && !w || r && f && m || !t && m || !s)
              return 1;
            if (!r && !o && !w && e < n || w && t && s && !r && !o || h && t && s || !f && s || !m)
              return -1;
          }
          return 0;
        }
        function au(e, n, t) {
          for (var r = -1, s = e.criteria, o = n.criteria, f = s.length, h = t.length; ++r < f; ) {
            var m = W1(s[r], o[r]);
            if (m) {
              if (r >= h)
                return m;
              var w = t[r];
              return m * (w == "desc" ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function H1(e, n, t, r) {
          for (var s = -1, o = e.length, f = t.length, h = -1, m = n.length, w = un(o - f, 0), b = C(m + w), T = !r; ++h < m; )
            b[h] = n[h];
          for (; ++s < f; )
            (T || s < o) && (b[t[s]] = e[s]);
          for (; w--; )
            b[h++] = e[s++];
          return b;
        }
        function U1(e, n, t, r) {
          for (var s = -1, o = e.length, f = -1, h = t.length, m = -1, w = n.length, b = un(o - h, 0), T = C(b + w), B = !r; ++s < b; )
            T[s] = e[s];
          for (var G = s; ++m < w; )
            T[G + m] = n[m];
          for (; ++f < h; )
            (B || s < o) && (T[G + t[f]] = e[s++]);
          return T;
        }
        function Nn(e, n) {
          var t = -1, r = e.length;
          for (n || (n = C(r)); ++t < r; )
            n[t] = e[t];
          return n;
        }
        function tt(e, n, t, r) {
          var s = !t;
          t || (t = {});
          for (var o = -1, f = n.length; ++o < f; ) {
            var h = n[o], m = r ? r(t[h], e[h], h, t, e) : i;
            m === i && (m = e[h]), s ? ct(t, h, m) : T2(t, h, m);
          }
          return t;
        }
        function ou(e, n) {
          return tt(e, Ur(e), n);
        }
        function lu(e, n) {
          return tt(e, ns(e), n);
        }
        function m0(e, n) {
          return function(t, r) {
            var s = ae(t) ? ho : Al, o = n ? n() : {};
            return s(t, e, Q(r, 2), o);
          };
        }
        function n2(e) {
          return fe(function(n, t) {
            var r = -1, s = t.length, o = s > 1 ? t[s - 1] : i, f = s > 2 ? t[2] : i;
            for (o = e.length > 3 && typeof o == "function" ? (s--, o) : i, f && En(t[0], t[1], f) && (o = s < 3 ? i : o, s = 1), n = Be(n); ++r < s; ) {
              var h = t[r];
              h && e(n, h, r, o);
            }
            return n;
          });
        }
        function Z1(e, n) {
          return function(t, r) {
            if (t == null)
              return t;
            if (!Rn(t))
              return e(t, r);
            for (var s = t.length, o = n ? s : -1, f = Be(t); (n ? o-- : ++o < s) && r(f[o], o, f) !== !1; )
              ;
            return t;
          };
        }
        function z1(e) {
          return function(n, t, r) {
            for (var s = -1, o = Be(n), f = r(n), h = f.length; h--; ) {
              var m = f[e ? h : ++s];
              if (t(o[m], m, o) === !1)
                break;
            }
            return n;
          };
        }
        function uu(e, n, t) {
          var r = n & re, s = A2(e);
          function o() {
            var f = this && this !== gn && this instanceof o ? s : e;
            return f.apply(r ? t : this, arguments);
          }
          return o;
        }
        function Y1(e) {
          return function(n) {
            n = Me(n);
            var t = kt(n) ? Jn(n) : i, r = t ? t[0] : n.charAt(0), s = t ? Rt(t, 1).join("") : n.slice(1);
            return r[e]() + s;
          };
        }
        function t2(e) {
          return function(n) {
            return ar(Zs(Us(n).replace(Xa, "")), e, "");
          };
        }
        function A2(e) {
          return function() {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new e();
              case 1:
                return new e(n[0]);
              case 2:
                return new e(n[0], n[1]);
              case 3:
                return new e(n[0], n[1], n[2]);
              case 4:
                return new e(n[0], n[1], n[2], n[3]);
              case 5:
                return new e(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var t = e2(e.prototype), r = e.apply(t, n);
            return Je(r) ? r : t;
          };
        }
        function cu(e, n, t) {
          var r = A2(e);
          function s() {
            for (var o = arguments.length, f = C(o), h = o, m = r2(s); h--; )
              f[h] = arguments[h];
            var w = o < 3 && f[0] !== m && f[o - 1] !== m ? [] : Et(f, m);
            if (o -= w.length, o < t)
              return K1(
                e,
                n,
                v0,
                s.placeholder,
                i,
                f,
                w,
                i,
                i,
                t - o
              );
            var b = this && this !== gn && this instanceof s ? r : e;
            return Dn(b, this, f);
          }
          return s;
        }
        function q1(e) {
          return function(n, t, r) {
            var s = Be(n);
            if (!Rn(n)) {
              var o = Q(t, 3);
              n = fn(n), t = function(h) {
                return o(s[h], h, s);
              };
            }
            var f = e(n, t, r);
            return f > -1 ? s[o ? n[f] : f] : i;
          };
        }
        function V1(e) {
          return dt(function(n) {
            var t = n.length, r = t, s = Un.prototype.thru;
            for (e && n.reverse(); r--; ) {
              var o = n[r];
              if (typeof o != "function")
                throw new Hn(E);
              if (s && !f && y0(o) == "wrapper")
                var f = new Un([], !0);
            }
            for (r = f ? r : t; ++r < t; ) {
              o = n[r];
              var h = y0(o), m = h == "wrapper" ? Wr(o) : i;
              m && zr(m[0]) && m[1] == (be | we | he | Ge) && !m[4].length && m[9] == 1 ? f = f[y0(m[0])].apply(f, m[3]) : f = o.length == 1 && zr(o) ? f[h]() : f.thru(o);
            }
            return function() {
              var w = arguments, b = w[0];
              if (f && w.length == 1 && ae(b))
                return f.plant(b).value();
              for (var T = 0, B = t ? n[T].apply(this, w) : b; ++T < t; )
                B = n[T].call(this, B);
              return B;
            };
          });
        }
        function v0(e, n, t, r, s, o, f, h, m, w) {
          var b = n & be, T = n & re, B = n & K, G = n & (we | De), ee = n & Fe, le = B ? i : A2(e);
          function ne() {
            for (var pe = arguments.length, _e = C(pe), Fn = pe; Fn--; )
              _e[Fn] = arguments[Fn];
            if (G)
              var Tn = r2(ne), Pn = wo(_e, Tn);
            if (r && (_e = H1(_e, r, s, G)), o && (_e = U1(_e, o, f, G)), pe -= Pn, G && pe < w) {
              var sn = Et(_e, Tn);
              return K1(
                e,
                n,
                v0,
                ne.placeholder,
                t,
                _e,
                sn,
                h,
                m,
                w - pe
              );
            }
            var et = T ? t : this, mt = B ? et[e] : e;
            return pe = _e.length, h ? _e = Au(_e, h) : ee && pe > 1 && _e.reverse(), b && m < pe && (_e.length = m), this && this !== gn && this instanceof ne && (mt = le || A2(mt)), mt.apply(et, _e);
          }
          return ne;
        }
        function k1(e, n) {
          return function(t, r) {
            return $l(t, e, n(r), {});
          };
        }
        function C0(e, n) {
          return function(t, r) {
            var s;
            if (t === i && r === i)
              return n;
            if (t !== i && (s = t), r !== i) {
              if (s === i)
                return r;
              typeof t == "string" || typeof r == "string" ? (t = Ln(t), r = Ln(r)) : (t = j1(t), r = j1(r)), s = e(t, r);
            }
            return s;
          };
        }
        function Fr(e) {
          return dt(function(n) {
            return n = ke(n, jn(Q())), fe(function(t) {
              var r = this;
              return e(n, function(s) {
                return Dn(s, r, t);
              });
            });
          });
        }
        function x0(e, n) {
          n = n === i ? " " : Ln(n);
          var t = n.length;
          if (t < 2)
            return t ? Rr(n, e) : n;
          var r = Rr(n, s0(e / Gt(n)));
          return kt(n) ? Rt(Jn(r), 0, e).join("") : r.slice(0, e);
        }
        function fu(e, n, t, r) {
          var s = n & re, o = A2(e);
          function f() {
            for (var h = -1, m = arguments.length, w = -1, b = r.length, T = C(b + m), B = this && this !== gn && this instanceof f ? o : e; ++w < b; )
              T[w] = r[w];
            for (; m--; )
              T[w++] = arguments[++h];
            return Dn(B, s ? t : this, T);
          }
          return f;
        }
        function G1(e) {
          return function(n, t, r) {
            return r && typeof r != "number" && En(n, t, r) && (t = r = i), n = pt(n), t === i ? (t = n, n = 0) : t = pt(t), r = r === i ? n < t ? 1 : -1 : pt(r), Kl(n, t, r, e);
          };
        }
        function _0(e) {
          return function(n, t) {
            return typeof n == "string" && typeof t == "string" || (n = qn(n), t = qn(t)), e(n, t);
          };
        }
        function K1(e, n, t, r, s, o, f, h, m, w) {
          var b = n & we, T = b ? f : i, B = b ? i : f, G = b ? o : i, ee = b ? i : o;
          n |= b ? he : We, n &= ~(b ? We : he), n & ue || (n &= -4);
          var le = [
            e,
            n,
            s,
            G,
            T,
            ee,
            B,
            h,
            m,
            w
          ], ne = t.apply(i, le);
          return zr(e) && ls(ne, le), ne.placeholder = r, us(ne, e, n);
        }
        function Pr(e) {
          var n = ln[e];
          return function(t, r) {
            if (t = qn(t), r = r == null ? 0 : xn(oe(r), 292), r && u1(t)) {
              var s = (Me(t) + "e").split("e"), o = n(s[0] + "e" + (+s[1] + r));
              return s = (Me(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - r));
            }
            return n(t);
          };
        }
        var du = Xt && 1 / G2(new Xt([, -0]))[1] == Z ? function(e) {
          return new Xt(e);
        } : si;
        function J1(e) {
          return function(n) {
            var t = _n(n);
            return t == Xe ? hr(n) : t == wn ? Ro(n) : yo(n, e(n));
          };
        }
        function ft(e, n, t, r, s, o, f, h) {
          var m = n & K;
          if (!m && typeof e != "function")
            throw new Hn(E);
          var w = r ? r.length : 0;
          if (w || (n &= -97, r = s = i), f = f === i ? f : un(oe(f), 0), h = h === i ? h : oe(h), w -= s ? s.length : 0, n & We) {
            var b = r, T = s;
            r = s = i;
          }
          var B = m ? i : Wr(e), G = [
            e,
            n,
            t,
            r,
            s,
            b,
            T,
            o,
            f,
            h
          ];
          if (B && Ou(G, B), e = G[0], n = G[1], t = G[2], r = G[3], s = G[4], h = G[9] = G[9] === i ? m ? 0 : e.length : un(G[9] - w, 0), !h && n & (we | De) && (n &= -25), !n || n == re)
            var ee = uu(e, n, t);
          else n == we || n == De ? ee = cu(e, n, h) : (n == he || n == (re | he)) && !s.length ? ee = fu(e, n, t, r) : ee = v0.apply(i, G);
          var le = B ? M1 : ls;
          return us(le(ee, G), e, n);
        }
        function X1(e, n, t, r) {
          return e === i || Qn(e, Jt[t]) && !Ie.call(r, t) ? n : e;
        }
        function Q1(e, n, t, r, s, o) {
          return Je(e) && Je(n) && (o.set(n, e), h0(e, n, i, Q1, o), o.delete(n)), e;
        }
        function hu(e) {
          return j2(e) ? i : e;
        }
        function es(e, n, t, r, s, o) {
          var f = t & X, h = e.length, m = n.length;
          if (h != m && !(f && m > h))
            return !1;
          var w = o.get(e), b = o.get(n);
          if (w && b)
            return w == n && b == e;
          var T = -1, B = !0, G = t & ye ? new It() : i;
          for (o.set(e, n), o.set(n, e); ++T < h; ) {
            var ee = e[T], le = n[T];
            if (r)
              var ne = f ? r(le, ee, T, n, e, o) : r(ee, le, T, e, n, o);
            if (ne !== i) {
              if (ne)
                continue;
              B = !1;
              break;
            }
            if (G) {
              if (!or(n, function(pe, _e) {
                if (!x2(G, _e) && (ee === pe || s(ee, pe, t, r, o)))
                  return G.push(_e);
              })) {
                B = !1;
                break;
              }
            } else if (!(ee === le || s(ee, le, t, r, o))) {
              B = !1;
              break;
            }
          }
          return o.delete(e), o.delete(n), B;
        }
        function gu(e, n, t, r, s, o, f) {
          switch (t) {
            case qe:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                return !1;
              e = e.buffer, n = n.buffer;
            case Ye:
              return !(e.byteLength != n.byteLength || !o(new n0(e), new n0(n)));
            case ze:
            case $e:
            case yn:
              return Qn(+e, +n);
            case R:
              return e.name == n.name && e.message == n.message;
            case at:
            case Gn:
              return e == n + "";
            case Xe:
              var h = hr;
            case wn:
              var m = r & X;
              if (h || (h = G2), e.size != n.size && !m)
                return !1;
              var w = f.get(e);
              if (w)
                return w == n;
              r |= ye, f.set(e, n);
              var b = es(h(e), h(n), r, s, o, f);
              return f.delete(e), b;
            case _t:
              if (E2)
                return E2.call(e) == E2.call(n);
          }
          return !1;
        }
        function pu(e, n, t, r, s, o) {
          var f = t & X, h = $r(e), m = h.length, w = $r(n), b = w.length;
          if (m != b && !f)
            return !1;
          for (var T = m; T--; ) {
            var B = h[T];
            if (!(f ? B in n : Ie.call(n, B)))
              return !1;
          }
          var G = o.get(e), ee = o.get(n);
          if (G && ee)
            return G == n && ee == e;
          var le = !0;
          o.set(e, n), o.set(n, e);
          for (var ne = f; ++T < m; ) {
            B = h[T];
            var pe = e[B], _e = n[B];
            if (r)
              var Fn = f ? r(_e, pe, B, n, e, o) : r(pe, _e, B, e, n, o);
            if (!(Fn === i ? pe === _e || s(pe, _e, t, r, o) : Fn)) {
              le = !1;
              break;
            }
            ne || (ne = B == "constructor");
          }
          if (le && !ne) {
            var Tn = e.constructor, Pn = n.constructor;
            Tn != Pn && "constructor" in e && "constructor" in n && !(typeof Tn == "function" && Tn instanceof Tn && typeof Pn == "function" && Pn instanceof Pn) && (le = !1);
          }
          return o.delete(e), o.delete(n), le;
        }
        function dt(e) {
          return qr(as(e, i, ps), e + "");
        }
        function $r(e) {
          return _1(e, fn, Ur);
        }
        function Br(e) {
          return _1(e, An, ns);
        }
        var Wr = o0 ? function(e) {
          return o0.get(e);
        } : si;
        function y0(e) {
          for (var n = e.name + "", t = Qt[n], r = Ie.call(Qt, n) ? t.length : 0; r--; ) {
            var s = t[r], o = s.func;
            if (o == null || o == e)
              return s.name;
          }
          return n;
        }
        function r2(e) {
          var n = Ie.call(a, "placeholder") ? a : e;
          return n.placeholder;
        }
        function Q() {
          var e = a.iteratee || ri;
          return e = e === ri ? b1 : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function w0(e, n) {
          var t = e.__data__;
          return bu(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
        }
        function Hr(e) {
          for (var n = fn(e), t = n.length; t--; ) {
            var r = n[t], s = e[r];
            n[t] = [r, s, is(s)];
          }
          return n;
        }
        function $t(e, n) {
          var t = So(e, n);
          return w1(t) ? t : i;
        }
        function mu(e) {
          var n = Ie.call(e, jt), t = e[jt];
          try {
            e[jt] = i;
            var r = !0;
          } catch {
          }
          var s = Q2.call(e);
          return r && (n ? e[jt] = t : delete e[jt]), s;
        }
        var Ur = pr ? function(e) {
          return e == null ? [] : (e = Be(e), wt(pr(e), function(n) {
            return o1.call(e, n);
          }));
        } : ai, ns = pr ? function(e) {
          for (var n = []; e; )
            bt(n, Ur(e)), e = t0(e);
          return n;
        } : ai, _n = bn;
        (mr && _n(new mr(new ArrayBuffer(1))) != qe || y2 && _n(new y2()) != Xe || vr && _n(vr.resolve()) != Vn || Xt && _n(new Xt()) != wn || w2 && _n(new w2()) != Le) && (_n = function(e) {
          var n = bn(e), t = n == cn ? e.constructor : i, r = t ? Bt(t) : "";
          if (r)
            switch (r) {
              case Xo:
                return qe;
              case Qo:
                return Xe;
              case el:
                return Vn;
              case nl:
                return wn;
              case tl:
                return Le;
            }
          return n;
        });
        function vu(e, n, t) {
          for (var r = -1, s = t.length; ++r < s; ) {
            var o = t[r], f = o.size;
            switch (o.type) {
              case "drop":
                e += f;
                break;
              case "dropRight":
                n -= f;
                break;
              case "take":
                n = xn(n, e + f);
                break;
              case "takeRight":
                e = un(e, n - f);
                break;
            }
          }
          return { start: e, end: n };
        }
        function Cu(e) {
          var n = e.match(G0);
          return n ? n[1].split(d) : [];
        }
        function ts(e, n, t) {
          n = Nt(n, e);
          for (var r = -1, s = n.length, o = !1; ++r < s; ) {
            var f = rt(n[r]);
            if (!(o = e != null && t(e, f)))
              break;
            e = e[f];
          }
          return o || ++r != s ? o : (s = e == null ? 0 : e.length, !!s && R0(s) && ht(f, s) && (ae(e) || Wt(e)));
        }
        function xu(e) {
          var n = e.length, t = new e.constructor(n);
          return n && typeof e[0] == "string" && Ie.call(e, "index") && (t.index = e.index, t.input = e.input), t;
        }
        function rs(e) {
          return typeof e.constructor == "function" && !M2(e) ? e2(t0(e)) : {};
        }
        function _u(e, n, t) {
          var r = e.constructor;
          switch (n) {
            case Ye:
              return Ir(e);
            case ze:
            case $e:
              return new r(+e);
            case qe:
              return ru(e, t);
            case Ve:
            case Oe:
            case l2:
            case u2:
            case c2:
            case f2:
            case d2:
            case h2:
            case g2:
              return B1(e, t);
            case Xe:
              return new r();
            case yn:
            case Gn:
              return new r(e);
            case at:
              return iu(e);
            case wn:
              return new r();
            case _t:
              return su(e);
          }
        }
        function yu(e, n) {
          var t = n.length;
          if (!t)
            return e;
          var r = t - 1;
          return n[r] = (t > 1 ? "& " : "") + n[r], n = n.join(t > 2 ? ", " : " "), e.replace(k0, `{
/* [wrapped with ` + n + `] */
`);
        }
        function wu(e) {
          return ae(e) || Wt(e) || !!(l1 && e && e[l1]);
        }
        function ht(e, n) {
          var t = typeof e;
          return n = n ?? y, !!n && (t == "number" || t != "symbol" && Qe.test(e)) && e > -1 && e % 1 == 0 && e < n;
        }
        function En(e, n, t) {
          if (!Je(t))
            return !1;
          var r = typeof n;
          return (r == "number" ? Rn(t) && ht(n, t.length) : r == "string" && n in t) ? Qn(t[n], e) : !1;
        }
        function Zr(e, n) {
          if (ae(e))
            return !1;
          var t = typeof e;
          return t == "number" || t == "symbol" || t == "boolean" || e == null || In(e) ? !0 : Y0.test(e) || !z2.test(e) || n != null && e in Be(n);
        }
        function bu(e) {
          var n = typeof e;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
        }
        function zr(e) {
          var n = y0(e), t = a[n];
          if (typeof t != "function" || !(n in xe.prototype))
            return !1;
          if (e === t)
            return !0;
          var r = Wr(t);
          return !!r && e === r[0];
        }
        function Eu(e) {
          return !!i1 && i1 in e;
        }
        var Tu = J2 ? gt : oi;
        function M2(e) {
          var n = e && e.constructor, t = typeof n == "function" && n.prototype || Jt;
          return e === t;
        }
        function is(e) {
          return e === e && !Je(e);
        }
        function ss(e, n) {
          return function(t) {
            return t == null ? !1 : t[e] === n && (n !== i || e in Be(t));
          };
        }
        function Su(e) {
          var n = O0(e, function(r) {
            return t.size === F && t.clear(), r;
          }), t = n.cache;
          return n;
        }
        function Ou(e, n) {
          var t = e[1], r = n[1], s = t | r, o = s < (re | K | be), f = r == be && t == we || r == be && t == Ge && e[7].length <= n[8] || r == (be | Ge) && n[7].length <= n[8] && t == we;
          if (!(o || f))
            return e;
          r & re && (e[2] = n[2], s |= t & re ? 0 : ue);
          var h = n[3];
          if (h) {
            var m = e[3];
            e[3] = m ? H1(m, h, n[4]) : h, e[4] = m ? Et(e[3], $) : n[4];
          }
          return h = n[5], h && (m = e[5], e[5] = m ? U1(m, h, n[6]) : h, e[6] = m ? Et(e[5], $) : n[6]), h = n[7], h && (e[7] = h), r & be && (e[8] = e[8] == null ? n[8] : xn(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = s, e;
        }
        function Nu(e) {
          var n = [];
          if (e != null)
            for (var t in Be(e))
              n.push(t);
          return n;
        }
        function Ru(e) {
          return Q2.call(e);
        }
        function as(e, n, t) {
          return n = un(n === i ? e.length - 1 : n, 0), function() {
            for (var r = arguments, s = -1, o = un(r.length - n, 0), f = C(o); ++s < o; )
              f[s] = r[n + s];
            s = -1;
            for (var h = C(n + 1); ++s < n; )
              h[s] = r[s];
            return h[n] = t(f), Dn(e, this, h);
          };
        }
        function os(e, n) {
          return n.length < 2 ? e : Pt(e, zn(n, 0, -1));
        }
        function Au(e, n) {
          for (var t = e.length, r = xn(n.length, t), s = Nn(e); r--; ) {
            var o = n[r];
            e[r] = ht(o, t) ? s[o] : i;
          }
          return e;
        }
        function Yr(e, n) {
          if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
            return e[n];
        }
        var ls = cs(M1), D2 = Yo || function(e, n) {
          return gn.setTimeout(e, n);
        }, qr = cs(Ql);
        function us(e, n, t) {
          var r = n + "";
          return qr(e, yu(r, Mu(Cu(r), t)));
        }
        function cs(e) {
          var n = 0, t = 0;
          return function() {
            var r = Go(), s = ce - (r - t);
            if (t = r, s > 0) {
              if (++n >= tn)
                return arguments[0];
            } else
              n = 0;
            return e.apply(i, arguments);
          };
        }
        function b0(e, n) {
          var t = -1, r = e.length, s = r - 1;
          for (n = n === i ? r : n; ++t < n; ) {
            var o = Nr(t, s), f = e[o];
            e[o] = e[t], e[t] = f;
          }
          return e.length = n, e;
        }
        var fs = Su(function(e) {
          var n = [];
          return e.charCodeAt(0) === 46 && n.push(""), e.replace(q0, function(t, r, s, o) {
            n.push(s ? o.replace(te, "$1") : r || t);
          }), n;
        });
        function rt(e) {
          if (typeof e == "string" || In(e))
            return e;
          var n = e + "";
          return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
        }
        function Bt(e) {
          if (e != null) {
            try {
              return X2.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function Mu(e, n) {
          return Wn(q, function(t) {
            var r = "_." + t[0];
            n & t[1] && !V2(e, r) && e.push(r);
          }), e.sort();
        }
        function ds(e) {
          if (e instanceof xe)
            return e.clone();
          var n = new Un(e.__wrapped__, e.__chain__);
          return n.__actions__ = Nn(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
        }
        function Du(e, n, t) {
          (t ? En(e, n, t) : n === i) ? n = 1 : n = un(oe(n), 0);
          var r = e == null ? 0 : e.length;
          if (!r || n < 1)
            return [];
          for (var s = 0, o = 0, f = C(s0(r / n)); s < r; )
            f[o++] = zn(e, s, s += n);
          return f;
        }
        function ju(e) {
          for (var n = -1, t = e == null ? 0 : e.length, r = 0, s = []; ++n < t; ) {
            var o = e[n];
            o && (s[r++] = o);
          }
          return s;
        }
        function Lu() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var n = C(e - 1), t = arguments[0], r = e; r--; )
            n[r - 1] = arguments[r];
          return bt(ae(t) ? Nn(t) : [t], pn(n, 1));
        }
        var Iu = fe(function(e, n) {
          return rn(e) ? S2(e, pn(n, 1, rn, !0)) : [];
        }), Fu = fe(function(e, n) {
          var t = Yn(n);
          return rn(t) && (t = i), rn(e) ? S2(e, pn(n, 1, rn, !0), Q(t, 2)) : [];
        }), Pu = fe(function(e, n) {
          var t = Yn(n);
          return rn(t) && (t = i), rn(e) ? S2(e, pn(n, 1, rn, !0), i, t) : [];
        });
        function $u(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === i ? 1 : oe(n), zn(e, n < 0 ? 0 : n, r)) : [];
        }
        function Bu(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === i ? 1 : oe(n), n = r - n, zn(e, 0, n < 0 ? 0 : n)) : [];
        }
        function Wu(e, n) {
          return e && e.length ? p0(e, Q(n, 3), !0, !0) : [];
        }
        function Hu(e, n) {
          return e && e.length ? p0(e, Q(n, 3), !0) : [];
        }
        function Uu(e, n, t, r) {
          var s = e == null ? 0 : e.length;
          return s ? (t && typeof t != "number" && En(e, n, t) && (t = 0, r = s), Ll(e, n, t, r)) : [];
        }
        function hs(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var s = t == null ? 0 : oe(t);
          return s < 0 && (s = un(r + s, 0)), k2(e, Q(n, 3), s);
        }
        function gs(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var s = r - 1;
          return t !== i && (s = oe(t), s = t < 0 ? un(r + s, 0) : xn(s, r - 1)), k2(e, Q(n, 3), s, !0);
        }
        function ps(e) {
          var n = e == null ? 0 : e.length;
          return n ? pn(e, 1) : [];
        }
        function Zu(e) {
          var n = e == null ? 0 : e.length;
          return n ? pn(e, Z) : [];
        }
        function zu(e, n) {
          var t = e == null ? 0 : e.length;
          return t ? (n = n === i ? 1 : oe(n), pn(e, n)) : [];
        }
        function Yu(e) {
          for (var n = -1, t = e == null ? 0 : e.length, r = {}; ++n < t; ) {
            var s = e[n];
            r[s[0]] = s[1];
          }
          return r;
        }
        function ms(e) {
          return e && e.length ? e[0] : i;
        }
        function qu(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var s = t == null ? 0 : oe(t);
          return s < 0 && (s = un(r + s, 0)), Vt(e, n, s);
        }
        function Vu(e) {
          var n = e == null ? 0 : e.length;
          return n ? zn(e, 0, -1) : [];
        }
        var ku = fe(function(e) {
          var n = ke(e, jr);
          return n.length && n[0] === e[0] ? br(n) : [];
        }), Gu = fe(function(e) {
          var n = Yn(e), t = ke(e, jr);
          return n === Yn(t) ? n = i : t.pop(), t.length && t[0] === e[0] ? br(t, Q(n, 2)) : [];
        }), Ku = fe(function(e) {
          var n = Yn(e), t = ke(e, jr);
          return n = typeof n == "function" ? n : i, n && t.pop(), t.length && t[0] === e[0] ? br(t, i, n) : [];
        });
        function Ju(e, n) {
          return e == null ? "" : Vo.call(e, n);
        }
        function Yn(e) {
          var n = e == null ? 0 : e.length;
          return n ? e[n - 1] : i;
        }
        function Xu(e, n, t) {
          var r = e == null ? 0 : e.length;
          if (!r)
            return -1;
          var s = r;
          return t !== i && (s = oe(t), s = s < 0 ? un(r + s, 0) : xn(s, r - 1)), n === n ? Mo(e, n, s) : k2(e, Ki, s, !0);
        }
        function Qu(e, n) {
          return e && e.length ? O1(e, oe(n)) : i;
        }
        var ec = fe(vs);
        function vs(e, n) {
          return e && e.length && n && n.length ? Or(e, n) : e;
        }
        function nc(e, n, t) {
          return e && e.length && n && n.length ? Or(e, n, Q(t, 2)) : e;
        }
        function tc(e, n, t) {
          return e && e.length && n && n.length ? Or(e, n, i, t) : e;
        }
        var rc = dt(function(e, n) {
          var t = e == null ? 0 : e.length, r = xr(e, n);
          return A1(e, ke(n, function(s) {
            return ht(s, t) ? +s : s;
          }).sort(W1)), r;
        });
        function ic(e, n) {
          var t = [];
          if (!(e && e.length))
            return t;
          var r = -1, s = [], o = e.length;
          for (n = Q(n, 3); ++r < o; ) {
            var f = e[r];
            n(f, r, e) && (t.push(f), s.push(r));
          }
          return A1(e, s), t;
        }
        function Vr(e) {
          return e == null ? e : Jo.call(e);
        }
        function sc(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (t && typeof t != "number" && En(e, n, t) ? (n = 0, t = r) : (n = n == null ? 0 : oe(n), t = t === i ? r : oe(t)), zn(e, n, t)) : [];
        }
        function ac(e, n) {
          return g0(e, n);
        }
        function oc(e, n, t) {
          return Ar(e, n, Q(t, 2));
        }
        function lc(e, n) {
          var t = e == null ? 0 : e.length;
          if (t) {
            var r = g0(e, n);
            if (r < t && Qn(e[r], n))
              return r;
          }
          return -1;
        }
        function uc(e, n) {
          return g0(e, n, !0);
        }
        function cc(e, n, t) {
          return Ar(e, n, Q(t, 2), !0);
        }
        function fc(e, n) {
          var t = e == null ? 0 : e.length;
          if (t) {
            var r = g0(e, n, !0) - 1;
            if (Qn(e[r], n))
              return r;
          }
          return -1;
        }
        function dc(e) {
          return e && e.length ? D1(e) : [];
        }
        function hc(e, n) {
          return e && e.length ? D1(e, Q(n, 2)) : [];
        }
        function gc(e) {
          var n = e == null ? 0 : e.length;
          return n ? zn(e, 1, n) : [];
        }
        function pc(e, n, t) {
          return e && e.length ? (n = t || n === i ? 1 : oe(n), zn(e, 0, n < 0 ? 0 : n)) : [];
        }
        function mc(e, n, t) {
          var r = e == null ? 0 : e.length;
          return r ? (n = t || n === i ? 1 : oe(n), n = r - n, zn(e, n < 0 ? 0 : n, r)) : [];
        }
        function vc(e, n) {
          return e && e.length ? p0(e, Q(n, 3), !1, !0) : [];
        }
        function Cc(e, n) {
          return e && e.length ? p0(e, Q(n, 3)) : [];
        }
        var xc = fe(function(e) {
          return Ot(pn(e, 1, rn, !0));
        }), _c = fe(function(e) {
          var n = Yn(e);
          return rn(n) && (n = i), Ot(pn(e, 1, rn, !0), Q(n, 2));
        }), yc = fe(function(e) {
          var n = Yn(e);
          return n = typeof n == "function" ? n : i, Ot(pn(e, 1, rn, !0), i, n);
        });
        function wc(e) {
          return e && e.length ? Ot(e) : [];
        }
        function bc(e, n) {
          return e && e.length ? Ot(e, Q(n, 2)) : [];
        }
        function Ec(e, n) {
          return n = typeof n == "function" ? n : i, e && e.length ? Ot(e, i, n) : [];
        }
        function kr(e) {
          if (!(e && e.length))
            return [];
          var n = 0;
          return e = wt(e, function(t) {
            if (rn(t))
              return n = un(t.length, n), !0;
          }), fr(n, function(t) {
            return ke(e, lr(t));
          });
        }
        function Cs(e, n) {
          if (!(e && e.length))
            return [];
          var t = kr(e);
          return n == null ? t : ke(t, function(r) {
            return Dn(n, i, r);
          });
        }
        var Tc = fe(function(e, n) {
          return rn(e) ? S2(e, n) : [];
        }), Sc = fe(function(e) {
          return Dr(wt(e, rn));
        }), Oc = fe(function(e) {
          var n = Yn(e);
          return rn(n) && (n = i), Dr(wt(e, rn), Q(n, 2));
        }), Nc = fe(function(e) {
          var n = Yn(e);
          return n = typeof n == "function" ? n : i, Dr(wt(e, rn), i, n);
        }), Rc = fe(kr);
        function Ac(e, n) {
          return F1(e || [], n || [], T2);
        }
        function Mc(e, n) {
          return F1(e || [], n || [], R2);
        }
        var Dc = fe(function(e) {
          var n = e.length, t = n > 1 ? e[n - 1] : i;
          return t = typeof t == "function" ? (e.pop(), t) : i, Cs(e, t);
        });
        function xs(e) {
          var n = a(e);
          return n.__chain__ = !0, n;
        }
        function jc(e, n) {
          return n(e), e;
        }
        function E0(e, n) {
          return n(e);
        }
        var Lc = dt(function(e) {
          var n = e.length, t = n ? e[0] : 0, r = this.__wrapped__, s = function(o) {
            return xr(o, e);
          };
          return n > 1 || this.__actions__.length || !(r instanceof xe) || !ht(t) ? this.thru(s) : (r = r.slice(t, +t + (n ? 1 : 0)), r.__actions__.push({
            func: E0,
            args: [s],
            thisArg: i
          }), new Un(r, this.__chain__).thru(function(o) {
            return n && !o.length && o.push(i), o;
          }));
        });
        function Ic() {
          return xs(this);
        }
        function Fc() {
          return new Un(this.value(), this.__chain__);
        }
        function Pc() {
          this.__values__ === i && (this.__values__ = js(this.value()));
          var e = this.__index__ >= this.__values__.length, n = e ? i : this.__values__[this.__index__++];
          return { done: e, value: n };
        }
        function $c() {
          return this;
        }
        function Bc(e) {
          for (var n, t = this; t instanceof u0; ) {
            var r = ds(t);
            r.__index__ = 0, r.__values__ = i, n ? s.__wrapped__ = r : n = r;
            var s = r;
            t = t.__wrapped__;
          }
          return s.__wrapped__ = e, n;
        }
        function Wc() {
          var e = this.__wrapped__;
          if (e instanceof xe) {
            var n = e;
            return this.__actions__.length && (n = new xe(this)), n = n.reverse(), n.__actions__.push({
              func: E0,
              args: [Vr],
              thisArg: i
            }), new Un(n, this.__chain__);
          }
          return this.thru(Vr);
        }
        function Hc() {
          return I1(this.__wrapped__, this.__actions__);
        }
        var Uc = m0(function(e, n, t) {
          Ie.call(e, t) ? ++e[t] : ct(e, t, 1);
        });
        function Zc(e, n, t) {
          var r = ae(e) ? ki : jl;
          return t && En(e, n, t) && (n = i), r(e, Q(n, 3));
        }
        function zc(e, n) {
          var t = ae(e) ? wt : C1;
          return t(e, Q(n, 3));
        }
        var Yc = q1(hs), qc = q1(gs);
        function Vc(e, n) {
          return pn(T0(e, n), 1);
        }
        function kc(e, n) {
          return pn(T0(e, n), Z);
        }
        function Gc(e, n, t) {
          return t = t === i ? 1 : oe(t), pn(T0(e, n), t);
        }
        function _s(e, n) {
          var t = ae(e) ? Wn : St;
          return t(e, Q(n, 3));
        }
        function ys(e, n) {
          var t = ae(e) ? go : v1;
          return t(e, Q(n, 3));
        }
        var Kc = m0(function(e, n, t) {
          Ie.call(e, t) ? e[t].push(n) : ct(e, t, [n]);
        });
        function Jc(e, n, t, r) {
          e = Rn(e) ? e : s2(e), t = t && !r ? oe(t) : 0;
          var s = e.length;
          return t < 0 && (t = un(s + t, 0)), A0(e) ? t <= s && e.indexOf(n, t) > -1 : !!s && Vt(e, n, t) > -1;
        }
        var Xc = fe(function(e, n, t) {
          var r = -1, s = typeof n == "function", o = Rn(e) ? C(e.length) : [];
          return St(e, function(f) {
            o[++r] = s ? Dn(n, f, t) : O2(f, n, t);
          }), o;
        }), Qc = m0(function(e, n, t) {
          ct(e, t, n);
        });
        function T0(e, n) {
          var t = ae(e) ? ke : E1;
          return t(e, Q(n, 3));
        }
        function ef(e, n, t, r) {
          return e == null ? [] : (ae(n) || (n = n == null ? [] : [n]), t = r ? i : t, ae(t) || (t = t == null ? [] : [t]), N1(e, n, t));
        }
        var nf = m0(function(e, n, t) {
          e[t ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function tf(e, n, t) {
          var r = ae(e) ? ar : Xi, s = arguments.length < 3;
          return r(e, Q(n, 4), t, s, St);
        }
        function rf(e, n, t) {
          var r = ae(e) ? po : Xi, s = arguments.length < 3;
          return r(e, Q(n, 4), t, s, v1);
        }
        function sf(e, n) {
          var t = ae(e) ? wt : C1;
          return t(e, N0(Q(n, 3)));
        }
        function af(e) {
          var n = ae(e) ? h1 : Jl;
          return n(e);
        }
        function of(e, n, t) {
          (t ? En(e, n, t) : n === i) ? n = 1 : n = oe(n);
          var r = ae(e) ? Nl : Xl;
          return r(e, n);
        }
        function lf(e) {
          var n = ae(e) ? Rl : eu;
          return n(e);
        }
        function uf(e) {
          if (e == null)
            return 0;
          if (Rn(e))
            return A0(e) ? Gt(e) : e.length;
          var n = _n(e);
          return n == Xe || n == wn ? e.size : Tr(e).length;
        }
        function cf(e, n, t) {
          var r = ae(e) ? or : nu;
          return t && En(e, n, t) && (n = i), r(e, Q(n, 3));
        }
        var ff = fe(function(e, n) {
          if (e == null)
            return [];
          var t = n.length;
          return t > 1 && En(e, n[0], n[1]) ? n = [] : t > 2 && En(n[0], n[1], n[2]) && (n = [n[0]]), N1(e, pn(n, 1), []);
        }), S0 = zo || function() {
          return gn.Date.now();
        };
        function df(e, n) {
          if (typeof n != "function")
            throw new Hn(E);
          return e = oe(e), function() {
            if (--e < 1)
              return n.apply(this, arguments);
          };
        }
        function ws(e, n, t) {
          return n = t ? i : n, n = e && n == null ? e.length : n, ft(e, be, i, i, i, i, n);
        }
        function bs(e, n) {
          var t;
          if (typeof n != "function")
            throw new Hn(E);
          return e = oe(e), function() {
            return --e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = i), t;
          };
        }
        var Gr = fe(function(e, n, t) {
          var r = re;
          if (t.length) {
            var s = Et(t, r2(Gr));
            r |= he;
          }
          return ft(e, r, n, t, s);
        }), Es = fe(function(e, n, t) {
          var r = re | K;
          if (t.length) {
            var s = Et(t, r2(Es));
            r |= he;
          }
          return ft(n, r, e, t, s);
        });
        function Ts(e, n, t) {
          n = t ? i : n;
          var r = ft(e, we, i, i, i, i, i, n);
          return r.placeholder = Ts.placeholder, r;
        }
        function Ss(e, n, t) {
          n = t ? i : n;
          var r = ft(e, De, i, i, i, i, i, n);
          return r.placeholder = Ss.placeholder, r;
        }
        function Os(e, n, t) {
          var r, s, o, f, h, m, w = 0, b = !1, T = !1, B = !0;
          if (typeof e != "function")
            throw new Hn(E);
          n = qn(n) || 0, Je(t) && (b = !!t.leading, T = "maxWait" in t, o = T ? un(qn(t.maxWait) || 0, n) : o, B = "trailing" in t ? !!t.trailing : B);
          function G(sn) {
            var et = r, mt = s;
            return r = s = i, w = sn, f = e.apply(mt, et), f;
          }
          function ee(sn) {
            return w = sn, h = D2(pe, n), b ? G(sn) : f;
          }
          function le(sn) {
            var et = sn - m, mt = sn - w, qs = n - et;
            return T ? xn(qs, o - mt) : qs;
          }
          function ne(sn) {
            var et = sn - m, mt = sn - w;
            return m === i || et >= n || et < 0 || T && mt >= o;
          }
          function pe() {
            var sn = S0();
            if (ne(sn))
              return _e(sn);
            h = D2(pe, le(sn));
          }
          function _e(sn) {
            return h = i, B && r ? G(sn) : (r = s = i, f);
          }
          function Fn() {
            h !== i && P1(h), w = 0, r = m = s = h = i;
          }
          function Tn() {
            return h === i ? f : _e(S0());
          }
          function Pn() {
            var sn = S0(), et = ne(sn);
            if (r = arguments, s = this, m = sn, et) {
              if (h === i)
                return ee(m);
              if (T)
                return P1(h), h = D2(pe, n), G(m);
            }
            return h === i && (h = D2(pe, n)), f;
          }
          return Pn.cancel = Fn, Pn.flush = Tn, Pn;
        }
        var hf = fe(function(e, n) {
          return m1(e, 1, n);
        }), gf = fe(function(e, n, t) {
          return m1(e, qn(n) || 0, t);
        });
        function pf(e) {
          return ft(e, Fe);
        }
        function O0(e, n) {
          if (typeof e != "function" || n != null && typeof n != "function")
            throw new Hn(E);
          var t = function() {
            var r = arguments, s = n ? n.apply(this, r) : r[0], o = t.cache;
            if (o.has(s))
              return o.get(s);
            var f = e.apply(this, r);
            return t.cache = o.set(s, f) || o, f;
          };
          return t.cache = new (O0.Cache || ut)(), t;
        }
        O0.Cache = ut;
        function N0(e) {
          if (typeof e != "function")
            throw new Hn(E);
          return function() {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, n[0]);
              case 2:
                return !e.call(this, n[0], n[1]);
              case 3:
                return !e.call(this, n[0], n[1], n[2]);
            }
            return !e.apply(this, n);
          };
        }
        function mf(e) {
          return bs(2, e);
        }
        var vf = tu(function(e, n) {
          n = n.length == 1 && ae(n[0]) ? ke(n[0], jn(Q())) : ke(pn(n, 1), jn(Q()));
          var t = n.length;
          return fe(function(r) {
            for (var s = -1, o = xn(r.length, t); ++s < o; )
              r[s] = n[s].call(this, r[s]);
            return Dn(e, this, r);
          });
        }), Kr = fe(function(e, n) {
          var t = Et(n, r2(Kr));
          return ft(e, he, i, n, t);
        }), Ns = fe(function(e, n) {
          var t = Et(n, r2(Ns));
          return ft(e, We, i, n, t);
        }), Cf = dt(function(e, n) {
          return ft(e, Ge, i, i, i, n);
        });
        function xf(e, n) {
          if (typeof e != "function")
            throw new Hn(E);
          return n = n === i ? n : oe(n), fe(e, n);
        }
        function _f(e, n) {
          if (typeof e != "function")
            throw new Hn(E);
          return n = n == null ? 0 : un(oe(n), 0), fe(function(t) {
            var r = t[n], s = Rt(t, 0, n);
            return r && bt(s, r), Dn(e, this, s);
          });
        }
        function yf(e, n, t) {
          var r = !0, s = !0;
          if (typeof e != "function")
            throw new Hn(E);
          return Je(t) && (r = "leading" in t ? !!t.leading : r, s = "trailing" in t ? !!t.trailing : s), Os(e, n, {
            leading: r,
            maxWait: n,
            trailing: s
          });
        }
        function wf(e) {
          return ws(e, 1);
        }
        function bf(e, n) {
          return Kr(Lr(n), e);
        }
        function Ef() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return ae(e) ? e : [e];
        }
        function Tf(e) {
          return Zn(e, J);
        }
        function Sf(e, n) {
          return n = typeof n == "function" ? n : i, Zn(e, J, n);
        }
        function Of(e) {
          return Zn(e, j | J);
        }
        function Nf(e, n) {
          return n = typeof n == "function" ? n : i, Zn(e, j | J, n);
        }
        function Rf(e, n) {
          return n == null || p1(e, n, fn(n));
        }
        function Qn(e, n) {
          return e === n || e !== e && n !== n;
        }
        var Af = _0(wr), Mf = _0(function(e, n) {
          return e >= n;
        }), Wt = y1(/* @__PURE__ */ function() {
          return arguments;
        }()) ? y1 : function(e) {
          return en(e) && Ie.call(e, "callee") && !o1.call(e, "callee");
        }, ae = C.isArray, Df = Ui ? jn(Ui) : Bl;
        function Rn(e) {
          return e != null && R0(e.length) && !gt(e);
        }
        function rn(e) {
          return en(e) && Rn(e);
        }
        function jf(e) {
          return e === !0 || e === !1 || en(e) && bn(e) == ze;
        }
        var At = qo || oi, Lf = Zi ? jn(Zi) : Wl;
        function If(e) {
          return en(e) && e.nodeType === 1 && !j2(e);
        }
        function Ff(e) {
          if (e == null)
            return !0;
          if (Rn(e) && (ae(e) || typeof e == "string" || typeof e.splice == "function" || At(e) || i2(e) || Wt(e)))
            return !e.length;
          var n = _n(e);
          if (n == Xe || n == wn)
            return !e.size;
          if (M2(e))
            return !Tr(e).length;
          for (var t in e)
            if (Ie.call(e, t))
              return !1;
          return !0;
        }
        function Pf(e, n) {
          return N2(e, n);
        }
        function $f(e, n, t) {
          t = typeof t == "function" ? t : i;
          var r = t ? t(e, n) : i;
          return r === i ? N2(e, n, i, t) : !!r;
        }
        function Jr(e) {
          if (!en(e))
            return !1;
          var n = bn(e);
          return n == R || n == Re || typeof e.message == "string" && typeof e.name == "string" && !j2(e);
        }
        function Bf(e) {
          return typeof e == "number" && u1(e);
        }
        function gt(e) {
          if (!Je(e))
            return !1;
          var n = bn(e);
          return n == ve || n == je || n == Ue || n == kn;
        }
        function Rs(e) {
          return typeof e == "number" && e == oe(e);
        }
        function R0(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= y;
        }
        function Je(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function en(e) {
          return e != null && typeof e == "object";
        }
        var As = zi ? jn(zi) : Ul;
        function Wf(e, n) {
          return e === n || Er(e, n, Hr(n));
        }
        function Hf(e, n, t) {
          return t = typeof t == "function" ? t : i, Er(e, n, Hr(n), t);
        }
        function Uf(e) {
          return Ms(e) && e != +e;
        }
        function Zf(e) {
          if (Tu(e))
            throw new se(x);
          return w1(e);
        }
        function zf(e) {
          return e === null;
        }
        function Yf(e) {
          return e == null;
        }
        function Ms(e) {
          return typeof e == "number" || en(e) && bn(e) == yn;
        }
        function j2(e) {
          if (!en(e) || bn(e) != cn)
            return !1;
          var n = t0(e);
          if (n === null)
            return !0;
          var t = Ie.call(n, "constructor") && n.constructor;
          return typeof t == "function" && t instanceof t && X2.call(t) == Wo;
        }
        var Xr = Yi ? jn(Yi) : Zl;
        function qf(e) {
          return Rs(e) && e >= -9007199254740991 && e <= y;
        }
        var Ds = qi ? jn(qi) : zl;
        function A0(e) {
          return typeof e == "string" || !ae(e) && en(e) && bn(e) == Gn;
        }
        function In(e) {
          return typeof e == "symbol" || en(e) && bn(e) == _t;
        }
        var i2 = Vi ? jn(Vi) : Yl;
        function Vf(e) {
          return e === i;
        }
        function kf(e) {
          return en(e) && _n(e) == Le;
        }
        function Gf(e) {
          return en(e) && bn(e) == Se;
        }
        var Kf = _0(Sr), Jf = _0(function(e, n) {
          return e <= n;
        });
        function js(e) {
          if (!e)
            return [];
          if (Rn(e))
            return A0(e) ? Jn(e) : Nn(e);
          if (_2 && e[_2])
            return No(e[_2]());
          var n = _n(e), t = n == Xe ? hr : n == wn ? G2 : s2;
          return t(e);
        }
        function pt(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = qn(e), e === Z || e === -1 / 0) {
            var n = e < 0 ? -1 : 1;
            return n * H;
          }
          return e === e ? e : 0;
        }
        function oe(e) {
          var n = pt(e), t = n % 1;
          return n === n ? t ? n - t : n : 0;
        }
        function Ls(e) {
          return e ? Ft(oe(e), 0, k) : 0;
        }
        function qn(e) {
          if (typeof e == "number")
            return e;
          if (In(e))
            return I;
          if (Je(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = Je(n) ? n + "" : n;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Qi(e);
          var t = de.test(e);
          return t || Ke.test(e) ? co(e.slice(2), t ? 2 : 8) : Ce.test(e) ? I : +e;
        }
        function Is(e) {
          return tt(e, An(e));
        }
        function Xf(e) {
          return e ? Ft(oe(e), -9007199254740991, y) : e === 0 ? e : 0;
        }
        function Me(e) {
          return e == null ? "" : Ln(e);
        }
        var Qf = n2(function(e, n) {
          if (M2(n) || Rn(n)) {
            tt(n, fn(n), e);
            return;
          }
          for (var t in n)
            Ie.call(n, t) && T2(e, t, n[t]);
        }), Fs = n2(function(e, n) {
          tt(n, An(n), e);
        }), M0 = n2(function(e, n, t, r) {
          tt(n, An(n), e, r);
        }), e6 = n2(function(e, n, t, r) {
          tt(n, fn(n), e, r);
        }), n6 = dt(xr);
        function t6(e, n) {
          var t = e2(e);
          return n == null ? t : g1(t, n);
        }
        var r6 = fe(function(e, n) {
          e = Be(e);
          var t = -1, r = n.length, s = r > 2 ? n[2] : i;
          for (s && En(n[0], n[1], s) && (r = 1); ++t < r; )
            for (var o = n[t], f = An(o), h = -1, m = f.length; ++h < m; ) {
              var w = f[h], b = e[w];
              (b === i || Qn(b, Jt[w]) && !Ie.call(e, w)) && (e[w] = o[w]);
            }
          return e;
        }), i6 = fe(function(e) {
          return e.push(i, Q1), Dn(Ps, i, e);
        });
        function s6(e, n) {
          return Gi(e, Q(n, 3), nt);
        }
        function a6(e, n) {
          return Gi(e, Q(n, 3), yr);
        }
        function o6(e, n) {
          return e == null ? e : _r(e, Q(n, 3), An);
        }
        function l6(e, n) {
          return e == null ? e : x1(e, Q(n, 3), An);
        }
        function u6(e, n) {
          return e && nt(e, Q(n, 3));
        }
        function c6(e, n) {
          return e && yr(e, Q(n, 3));
        }
        function f6(e) {
          return e == null ? [] : d0(e, fn(e));
        }
        function d6(e) {
          return e == null ? [] : d0(e, An(e));
        }
        function Qr(e, n, t) {
          var r = e == null ? i : Pt(e, n);
          return r === i ? t : r;
        }
        function h6(e, n) {
          return e != null && ts(e, n, Il);
        }
        function ei(e, n) {
          return e != null && ts(e, n, Fl);
        }
        var g6 = k1(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Q2.call(n)), e[n] = t;
        }, ti(Mn)), p6 = k1(function(e, n, t) {
          n != null && typeof n.toString != "function" && (n = Q2.call(n)), Ie.call(e, n) ? e[n].push(t) : e[n] = [t];
        }, Q), m6 = fe(O2);
        function fn(e) {
          return Rn(e) ? d1(e) : Tr(e);
        }
        function An(e) {
          return Rn(e) ? d1(e, !0) : ql(e);
        }
        function v6(e, n) {
          var t = {};
          return n = Q(n, 3), nt(e, function(r, s, o) {
            ct(t, n(r, s, o), r);
          }), t;
        }
        function C6(e, n) {
          var t = {};
          return n = Q(n, 3), nt(e, function(r, s, o) {
            ct(t, s, n(r, s, o));
          }), t;
        }
        var x6 = n2(function(e, n, t) {
          h0(e, n, t);
        }), Ps = n2(function(e, n, t, r) {
          h0(e, n, t, r);
        }), _6 = dt(function(e, n) {
          var t = {};
          if (e == null)
            return t;
          var r = !1;
          n = ke(n, function(o) {
            return o = Nt(o, e), r || (r = o.length > 1), o;
          }), tt(e, Br(e), t), r && (t = Zn(t, j | V | J, hu));
          for (var s = n.length; s--; )
            Mr(t, n[s]);
          return t;
        });
        function y6(e, n) {
          return $s(e, N0(Q(n)));
        }
        var w6 = dt(function(e, n) {
          return e == null ? {} : kl(e, n);
        });
        function $s(e, n) {
          if (e == null)
            return {};
          var t = ke(Br(e), function(r) {
            return [r];
          });
          return n = Q(n), R1(e, t, function(r, s) {
            return n(r, s[0]);
          });
        }
        function b6(e, n, t) {
          n = Nt(n, e);
          var r = -1, s = n.length;
          for (s || (s = 1, e = i); ++r < s; ) {
            var o = e == null ? i : e[rt(n[r])];
            o === i && (r = s, o = t), e = gt(o) ? o.call(e) : o;
          }
          return e;
        }
        function E6(e, n, t) {
          return e == null ? e : R2(e, n, t);
        }
        function T6(e, n, t, r) {
          return r = typeof r == "function" ? r : i, e == null ? e : R2(e, n, t, r);
        }
        var Bs = J1(fn), Ws = J1(An);
        function S6(e, n, t) {
          var r = ae(e), s = r || At(e) || i2(e);
          if (n = Q(n, 4), t == null) {
            var o = e && e.constructor;
            s ? t = r ? new o() : [] : Je(e) ? t = gt(o) ? e2(t0(e)) : {} : t = {};
          }
          return (s ? Wn : nt)(e, function(f, h, m) {
            return n(t, f, h, m);
          }), t;
        }
        function O6(e, n) {
          return e == null ? !0 : Mr(e, n);
        }
        function N6(e, n, t) {
          return e == null ? e : L1(e, n, Lr(t));
        }
        function R6(e, n, t, r) {
          return r = typeof r == "function" ? r : i, e == null ? e : L1(e, n, Lr(t), r);
        }
        function s2(e) {
          return e == null ? [] : dr(e, fn(e));
        }
        function A6(e) {
          return e == null ? [] : dr(e, An(e));
        }
        function M6(e, n, t) {
          return t === i && (t = n, n = i), t !== i && (t = qn(t), t = t === t ? t : 0), n !== i && (n = qn(n), n = n === n ? n : 0), Ft(qn(e), n, t);
        }
        function D6(e, n, t) {
          return n = pt(n), t === i ? (t = n, n = 0) : t = pt(t), e = qn(e), Pl(e, n, t);
        }
        function j6(e, n, t) {
          if (t && typeof t != "boolean" && En(e, n, t) && (n = t = i), t === i && (typeof n == "boolean" ? (t = n, n = i) : typeof e == "boolean" && (t = e, e = i)), e === i && n === i ? (e = 0, n = 1) : (e = pt(e), n === i ? (n = e, e = 0) : n = pt(n)), e > n) {
            var r = e;
            e = n, n = r;
          }
          if (t || e % 1 || n % 1) {
            var s = c1();
            return xn(e + s * (n - e + uo("1e-" + ((s + "").length - 1))), n);
          }
          return Nr(e, n);
        }
        var L6 = t2(function(e, n, t) {
          return n = n.toLowerCase(), e + (t ? Hs(n) : n);
        });
        function Hs(e) {
          return ni(Me(e).toLowerCase());
        }
        function Us(e) {
          return e = Me(e), e && e.replace(On, bo).replace(Qa, "");
        }
        function I6(e, n, t) {
          e = Me(e), n = Ln(n);
          var r = e.length;
          t = t === i ? r : Ft(oe(t), 0, r);
          var s = t;
          return t -= n.length, t >= 0 && e.slice(t, s) == n;
        }
        function F6(e) {
          return e = Me(e), e && Z0.test(e) ? e.replace(zt, Eo) : e;
        }
        function P6(e) {
          return e = Me(e), e && Y2.test(e) ? e.replace(Yt, "\\$&") : e;
        }
        var $6 = t2(function(e, n, t) {
          return e + (t ? "-" : "") + n.toLowerCase();
        }), B6 = t2(function(e, n, t) {
          return e + (t ? " " : "") + n.toLowerCase();
        }), W6 = Y1("toLowerCase");
        function H6(e, n, t) {
          e = Me(e), n = oe(n);
          var r = n ? Gt(e) : 0;
          if (!n || r >= n)
            return e;
          var s = (n - r) / 2;
          return x0(a0(s), t) + e + x0(s0(s), t);
        }
        function U6(e, n, t) {
          e = Me(e), n = oe(n);
          var r = n ? Gt(e) : 0;
          return n && r < n ? e + x0(n - r, t) : e;
        }
        function Z6(e, n, t) {
          e = Me(e), n = oe(n);
          var r = n ? Gt(e) : 0;
          return n && r < n ? x0(n - r, t) + e : e;
        }
        function z6(e, n, t) {
          return t || n == null ? n = 0 : n && (n = +n), Ko(Me(e).replace(v2, ""), n || 0);
        }
        function Y6(e, n, t) {
          return (t ? En(e, n, t) : n === i) ? n = 1 : n = oe(n), Rr(Me(e), n);
        }
        function q6() {
          var e = arguments, n = Me(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var V6 = t2(function(e, n, t) {
          return e + (t ? "_" : "") + n.toLowerCase();
        });
        function k6(e, n, t) {
          return t && typeof t != "number" && En(e, n, t) && (n = t = i), t = t === i ? k : t >>> 0, t ? (e = Me(e), e && (typeof n == "string" || n != null && !Xr(n)) && (n = Ln(n), !n && kt(e)) ? Rt(Jn(e), 0, t) : e.split(n, t)) : [];
        }
        var G6 = t2(function(e, n, t) {
          return e + (t ? " " : "") + ni(n);
        });
        function K6(e, n, t) {
          return e = Me(e), t = t == null ? 0 : Ft(oe(t), 0, e.length), n = Ln(n), e.slice(t, t + n.length) == n;
        }
        function J6(e, n, t) {
          var r = a.templateSettings;
          t && En(e, n, t) && (n = i), e = Me(e), n = M0({}, n, r, X1);
          var s = M0({}, n.imports, r.imports, X1), o = fn(s), f = dr(s, o), h, m, w = 0, b = n.interpolate || Kn, T = "__p += '", B = gr(
            (n.escape || Kn).source + "|" + b.source + "|" + (b === m2 ? Te : Kn).source + "|" + (n.evaluate || Kn).source + "|$",
            "g"
          ), G = "//# sourceURL=" + (Ie.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++io + "]") + `
`;
          e.replace(B, function(ne, pe, _e, Fn, Tn, Pn) {
            return _e || (_e = Fn), T += e.slice(w, Pn).replace(ot, To), pe && (h = !0, T += `' +
__e(` + pe + `) +
'`), Tn && (m = !0, T += `';
` + Tn + `;
__p += '`), _e && (T += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), w = Pn + ne.length, ne;
          }), T += `';
`;
          var ee = Ie.call(n, "variable") && n.variable;
          if (!ee)
            T = `with (obj) {
` + T + `
}
`;
          else if (U.test(ee))
            throw new se(S);
          T = (m ? T.replace(p2, "") : T).replace(H2, "$1").replace(yt, "$1;"), T = "function(" + (ee || "obj") + `) {
` + (ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (h ? ", __e = _.escape" : "") + (m ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + T + `return __p
}`;
          var le = zs(function() {
            return Ne(o, G + "return " + T).apply(i, f);
          });
          if (le.source = T, Jr(le))
            throw le;
          return le;
        }
        function X6(e) {
          return Me(e).toLowerCase();
        }
        function Q6(e) {
          return Me(e).toUpperCase();
        }
        function e3(e, n, t) {
          if (e = Me(e), e && (t || n === i))
            return Qi(e);
          if (!e || !(n = Ln(n)))
            return e;
          var r = Jn(e), s = Jn(n), o = e1(r, s), f = n1(r, s) + 1;
          return Rt(r, o, f).join("");
        }
        function n3(e, n, t) {
          if (e = Me(e), e && (t || n === i))
            return e.slice(0, r1(e) + 1);
          if (!e || !(n = Ln(n)))
            return e;
          var r = Jn(e), s = n1(r, Jn(n)) + 1;
          return Rt(r, 0, s).join("");
        }
        function t3(e, n, t) {
          if (e = Me(e), e && (t || n === i))
            return e.replace(v2, "");
          if (!e || !(n = Ln(n)))
            return e;
          var r = Jn(e), s = e1(r, Jn(n));
          return Rt(r, s).join("");
        }
        function r3(e, n) {
          var t = me, r = ie;
          if (Je(n)) {
            var s = "separator" in n ? n.separator : s;
            t = "length" in n ? oe(n.length) : t, r = "omission" in n ? Ln(n.omission) : r;
          }
          e = Me(e);
          var o = e.length;
          if (kt(e)) {
            var f = Jn(e);
            o = f.length;
          }
          if (t >= o)
            return e;
          var h = t - Gt(r);
          if (h < 1)
            return r;
          var m = f ? Rt(f, 0, h).join("") : e.slice(0, h);
          if (s === i)
            return m + r;
          if (f && (h += m.length - h), Xr(s)) {
            if (e.slice(h).search(s)) {
              var w, b = m;
              for (s.global || (s = gr(s.source, Me(Ae.exec(s)) + "g")), s.lastIndex = 0; w = s.exec(b); )
                var T = w.index;
              m = m.slice(0, T === i ? h : T);
            }
          } else if (e.indexOf(Ln(s), h) != h) {
            var B = m.lastIndexOf(s);
            B > -1 && (m = m.slice(0, B));
          }
          return m + r;
        }
        function i3(e) {
          return e = Me(e), e && U2.test(e) ? e.replace(Zt, Do) : e;
        }
        var s3 = t2(function(e, n, t) {
          return e + (t ? " " : "") + n.toUpperCase();
        }), ni = Y1("toUpperCase");
        function Zs(e, n, t) {
          return e = Me(e), n = t ? i : n, n === i ? Oo(e) ? Io(e) : Co(e) : e.match(n) || [];
        }
        var zs = fe(function(e, n) {
          try {
            return Dn(e, i, n);
          } catch (t) {
            return Jr(t) ? t : new se(t);
          }
        }), a3 = dt(function(e, n) {
          return Wn(n, function(t) {
            t = rt(t), ct(e, t, Gr(e[t], e));
          }), e;
        });
        function o3(e) {
          var n = e == null ? 0 : e.length, t = Q();
          return e = n ? ke(e, function(r) {
            if (typeof r[1] != "function")
              throw new Hn(E);
            return [t(r[0]), r[1]];
          }) : [], fe(function(r) {
            for (var s = -1; ++s < n; ) {
              var o = e[s];
              if (Dn(o[0], this, r))
                return Dn(o[1], this, r);
            }
          });
        }
        function l3(e) {
          return Dl(Zn(e, j));
        }
        function ti(e) {
          return function() {
            return e;
          };
        }
        function u3(e, n) {
          return e == null || e !== e ? n : e;
        }
        var c3 = V1(), f3 = V1(!0);
        function Mn(e) {
          return e;
        }
        function ri(e) {
          return b1(typeof e == "function" ? e : Zn(e, j));
        }
        function d3(e) {
          return T1(Zn(e, j));
        }
        function h3(e, n) {
          return S1(e, Zn(n, j));
        }
        var g3 = fe(function(e, n) {
          return function(t) {
            return O2(t, e, n);
          };
        }), p3 = fe(function(e, n) {
          return function(t) {
            return O2(e, t, n);
          };
        });
        function ii(e, n, t) {
          var r = fn(n), s = d0(n, r);
          t == null && !(Je(n) && (s.length || !r.length)) && (t = n, n = e, e = this, s = d0(n, fn(n)));
          var o = !(Je(t) && "chain" in t) || !!t.chain, f = gt(e);
          return Wn(s, function(h) {
            var m = n[h];
            e[h] = m, f && (e.prototype[h] = function() {
              var w = this.__chain__;
              if (o || w) {
                var b = e(this.__wrapped__), T = b.__actions__ = Nn(this.__actions__);
                return T.push({ func: m, args: arguments, thisArg: e }), b.__chain__ = w, b;
              }
              return m.apply(e, bt([this.value()], arguments));
            });
          }), e;
        }
        function m3() {
          return gn._ === this && (gn._ = Ho), this;
        }
        function si() {
        }
        function v3(e) {
          return e = oe(e), fe(function(n) {
            return O1(n, e);
          });
        }
        var C3 = Fr(ke), x3 = Fr(ki), _3 = Fr(or);
        function Ys(e) {
          return Zr(e) ? lr(rt(e)) : Gl(e);
        }
        function y3(e) {
          return function(n) {
            return e == null ? i : Pt(e, n);
          };
        }
        var w3 = G1(), b3 = G1(!0);
        function ai() {
          return [];
        }
        function oi() {
          return !1;
        }
        function E3() {
          return {};
        }
        function T3() {
          return "";
        }
        function S3() {
          return !0;
        }
        function O3(e, n) {
          if (e = oe(e), e < 1 || e > y)
            return [];
          var t = k, r = xn(e, k);
          n = Q(n), e -= k;
          for (var s = fr(r, n); ++t < e; )
            n(t);
          return s;
        }
        function N3(e) {
          return ae(e) ? ke(e, rt) : In(e) ? [e] : Nn(fs(Me(e)));
        }
        function R3(e) {
          var n = ++Bo;
          return Me(e) + n;
        }
        var A3 = C0(function(e, n) {
          return e + n;
        }, 0), M3 = Pr("ceil"), D3 = C0(function(e, n) {
          return e / n;
        }, 1), j3 = Pr("floor");
        function L3(e) {
          return e && e.length ? f0(e, Mn, wr) : i;
        }
        function I3(e, n) {
          return e && e.length ? f0(e, Q(n, 2), wr) : i;
        }
        function F3(e) {
          return Ji(e, Mn);
        }
        function P3(e, n) {
          return Ji(e, Q(n, 2));
        }
        function $3(e) {
          return e && e.length ? f0(e, Mn, Sr) : i;
        }
        function B3(e, n) {
          return e && e.length ? f0(e, Q(n, 2), Sr) : i;
        }
        var W3 = C0(function(e, n) {
          return e * n;
        }, 1), H3 = Pr("round"), U3 = C0(function(e, n) {
          return e - n;
        }, 0);
        function Z3(e) {
          return e && e.length ? cr(e, Mn) : 0;
        }
        function z3(e, n) {
          return e && e.length ? cr(e, Q(n, 2)) : 0;
        }
        return a.after = df, a.ary = ws, a.assign = Qf, a.assignIn = Fs, a.assignInWith = M0, a.assignWith = e6, a.at = n6, a.before = bs, a.bind = Gr, a.bindAll = a3, a.bindKey = Es, a.castArray = Ef, a.chain = xs, a.chunk = Du, a.compact = ju, a.concat = Lu, a.cond = o3, a.conforms = l3, a.constant = ti, a.countBy = Uc, a.create = t6, a.curry = Ts, a.curryRight = Ss, a.debounce = Os, a.defaults = r6, a.defaultsDeep = i6, a.defer = hf, a.delay = gf, a.difference = Iu, a.differenceBy = Fu, a.differenceWith = Pu, a.drop = $u, a.dropRight = Bu, a.dropRightWhile = Wu, a.dropWhile = Hu, a.fill = Uu, a.filter = zc, a.flatMap = Vc, a.flatMapDeep = kc, a.flatMapDepth = Gc, a.flatten = ps, a.flattenDeep = Zu, a.flattenDepth = zu, a.flip = pf, a.flow = c3, a.flowRight = f3, a.fromPairs = Yu, a.functions = f6, a.functionsIn = d6, a.groupBy = Kc, a.initial = Vu, a.intersection = ku, a.intersectionBy = Gu, a.intersectionWith = Ku, a.invert = g6, a.invertBy = p6, a.invokeMap = Xc, a.iteratee = ri, a.keyBy = Qc, a.keys = fn, a.keysIn = An, a.map = T0, a.mapKeys = v6, a.mapValues = C6, a.matches = d3, a.matchesProperty = h3, a.memoize = O0, a.merge = x6, a.mergeWith = Ps, a.method = g3, a.methodOf = p3, a.mixin = ii, a.negate = N0, a.nthArg = v3, a.omit = _6, a.omitBy = y6, a.once = mf, a.orderBy = ef, a.over = C3, a.overArgs = vf, a.overEvery = x3, a.overSome = _3, a.partial = Kr, a.partialRight = Ns, a.partition = nf, a.pick = w6, a.pickBy = $s, a.property = Ys, a.propertyOf = y3, a.pull = ec, a.pullAll = vs, a.pullAllBy = nc, a.pullAllWith = tc, a.pullAt = rc, a.range = w3, a.rangeRight = b3, a.rearg = Cf, a.reject = sf, a.remove = ic, a.rest = xf, a.reverse = Vr, a.sampleSize = of, a.set = E6, a.setWith = T6, a.shuffle = lf, a.slice = sc, a.sortBy = ff, a.sortedUniq = dc, a.sortedUniqBy = hc, a.split = k6, a.spread = _f, a.tail = gc, a.take = pc, a.takeRight = mc, a.takeRightWhile = vc, a.takeWhile = Cc, a.tap = jc, a.throttle = yf, a.thru = E0, a.toArray = js, a.toPairs = Bs, a.toPairsIn = Ws, a.toPath = N3, a.toPlainObject = Is, a.transform = S6, a.unary = wf, a.union = xc, a.unionBy = _c, a.unionWith = yc, a.uniq = wc, a.uniqBy = bc, a.uniqWith = Ec, a.unset = O6, a.unzip = kr, a.unzipWith = Cs, a.update = N6, a.updateWith = R6, a.values = s2, a.valuesIn = A6, a.without = Tc, a.words = Zs, a.wrap = bf, a.xor = Sc, a.xorBy = Oc, a.xorWith = Nc, a.zip = Rc, a.zipObject = Ac, a.zipObjectDeep = Mc, a.zipWith = Dc, a.entries = Bs, a.entriesIn = Ws, a.extend = Fs, a.extendWith = M0, ii(a, a), a.add = A3, a.attempt = zs, a.camelCase = L6, a.capitalize = Hs, a.ceil = M3, a.clamp = M6, a.clone = Tf, a.cloneDeep = Of, a.cloneDeepWith = Nf, a.cloneWith = Sf, a.conformsTo = Rf, a.deburr = Us, a.defaultTo = u3, a.divide = D3, a.endsWith = I6, a.eq = Qn, a.escape = F6, a.escapeRegExp = P6, a.every = Zc, a.find = Yc, a.findIndex = hs, a.findKey = s6, a.findLast = qc, a.findLastIndex = gs, a.findLastKey = a6, a.floor = j3, a.forEach = _s, a.forEachRight = ys, a.forIn = o6, a.forInRight = l6, a.forOwn = u6, a.forOwnRight = c6, a.get = Qr, a.gt = Af, a.gte = Mf, a.has = h6, a.hasIn = ei, a.head = ms, a.identity = Mn, a.includes = Jc, a.indexOf = qu, a.inRange = D6, a.invoke = m6, a.isArguments = Wt, a.isArray = ae, a.isArrayBuffer = Df, a.isArrayLike = Rn, a.isArrayLikeObject = rn, a.isBoolean = jf, a.isBuffer = At, a.isDate = Lf, a.isElement = If, a.isEmpty = Ff, a.isEqual = Pf, a.isEqualWith = $f, a.isError = Jr, a.isFinite = Bf, a.isFunction = gt, a.isInteger = Rs, a.isLength = R0, a.isMap = As, a.isMatch = Wf, a.isMatchWith = Hf, a.isNaN = Uf, a.isNative = Zf, a.isNil = Yf, a.isNull = zf, a.isNumber = Ms, a.isObject = Je, a.isObjectLike = en, a.isPlainObject = j2, a.isRegExp = Xr, a.isSafeInteger = qf, a.isSet = Ds, a.isString = A0, a.isSymbol = In, a.isTypedArray = i2, a.isUndefined = Vf, a.isWeakMap = kf, a.isWeakSet = Gf, a.join = Ju, a.kebabCase = $6, a.last = Yn, a.lastIndexOf = Xu, a.lowerCase = B6, a.lowerFirst = W6, a.lt = Kf, a.lte = Jf, a.max = L3, a.maxBy = I3, a.mean = F3, a.meanBy = P3, a.min = $3, a.minBy = B3, a.stubArray = ai, a.stubFalse = oi, a.stubObject = E3, a.stubString = T3, a.stubTrue = S3, a.multiply = W3, a.nth = Qu, a.noConflict = m3, a.noop = si, a.now = S0, a.pad = H6, a.padEnd = U6, a.padStart = Z6, a.parseInt = z6, a.random = j6, a.reduce = tf, a.reduceRight = rf, a.repeat = Y6, a.replace = q6, a.result = b6, a.round = H3, a.runInContext = p, a.sample = af, a.size = uf, a.snakeCase = V6, a.some = cf, a.sortedIndex = ac, a.sortedIndexBy = oc, a.sortedIndexOf = lc, a.sortedLastIndex = uc, a.sortedLastIndexBy = cc, a.sortedLastIndexOf = fc, a.startCase = G6, a.startsWith = K6, a.subtract = U3, a.sum = Z3, a.sumBy = z3, a.template = J6, a.times = O3, a.toFinite = pt, a.toInteger = oe, a.toLength = Ls, a.toLower = X6, a.toNumber = qn, a.toSafeInteger = Xf, a.toString = Me, a.toUpper = Q6, a.trim = e3, a.trimEnd = n3, a.trimStart = t3, a.truncate = r3, a.unescape = i3, a.uniqueId = R3, a.upperCase = s3, a.upperFirst = ni, a.each = _s, a.eachRight = ys, a.first = ms, ii(a, function() {
          var e = {};
          return nt(a, function(n, t) {
            Ie.call(a.prototype, t) || (e[t] = n);
          }), e;
        }(), { chain: !1 }), a.VERSION = g, Wn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          a[e].placeholder = a;
        }), Wn(["drop", "take"], function(e, n) {
          xe.prototype[e] = function(t) {
            t = t === i ? 1 : un(oe(t), 0);
            var r = this.__filtered__ && !n ? new xe(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = xn(t, r.__takeCount__) : r.__views__.push({
              size: xn(t, k),
              type: e + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, xe.prototype[e + "Right"] = function(t) {
            return this.reverse()[e](t).reverse();
          };
        }), Wn(["filter", "map", "takeWhile"], function(e, n) {
          var t = n + 1, r = t == z || t == M;
          xe.prototype[e] = function(s) {
            var o = this.clone();
            return o.__iteratees__.push({
              iteratee: Q(s, 3),
              type: t
            }), o.__filtered__ = o.__filtered__ || r, o;
          };
        }), Wn(["head", "last"], function(e, n) {
          var t = "take" + (n ? "Right" : "");
          xe.prototype[e] = function() {
            return this[t](1).value()[0];
          };
        }), Wn(["initial", "tail"], function(e, n) {
          var t = "drop" + (n ? "" : "Right");
          xe.prototype[e] = function() {
            return this.__filtered__ ? new xe(this) : this[t](1);
          };
        }), xe.prototype.compact = function() {
          return this.filter(Mn);
        }, xe.prototype.find = function(e) {
          return this.filter(e).head();
        }, xe.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, xe.prototype.invokeMap = fe(function(e, n) {
          return typeof e == "function" ? new xe(this) : this.map(function(t) {
            return O2(t, e, n);
          });
        }), xe.prototype.reject = function(e) {
          return this.filter(N0(Q(e)));
        }, xe.prototype.slice = function(e, n) {
          e = oe(e);
          var t = this;
          return t.__filtered__ && (e > 0 || n < 0) ? new xe(t) : (e < 0 ? t = t.takeRight(-e) : e && (t = t.drop(e)), n !== i && (n = oe(n), t = n < 0 ? t.dropRight(-n) : t.take(n - e)), t);
        }, xe.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, xe.prototype.toArray = function() {
          return this.take(k);
        }, nt(xe.prototype, function(e, n) {
          var t = /^(?:filter|find|map|reject)|While$/.test(n), r = /^(?:head|last)$/.test(n), s = a[r ? "take" + (n == "last" ? "Right" : "") : n], o = r || /^find/.test(n);
          s && (a.prototype[n] = function() {
            var f = this.__wrapped__, h = r ? [1] : arguments, m = f instanceof xe, w = h[0], b = m || ae(f), T = function(pe) {
              var _e = s.apply(a, bt([pe], h));
              return r && B ? _e[0] : _e;
            };
            b && t && typeof w == "function" && w.length != 1 && (m = b = !1);
            var B = this.__chain__, G = !!this.__actions__.length, ee = o && !B, le = m && !G;
            if (!o && b) {
              f = le ? f : new xe(this);
              var ne = e.apply(f, h);
              return ne.__actions__.push({ func: E0, args: [T], thisArg: i }), new Un(ne, B);
            }
            return ee && le ? e.apply(this, h) : (ne = this.thru(T), ee ? r ? ne.value()[0] : ne.value() : ne);
          });
        }), Wn(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var n = K2[e], t = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(e);
          a.prototype[e] = function() {
            var s = arguments;
            if (r && !this.__chain__) {
              var o = this.value();
              return n.apply(ae(o) ? o : [], s);
            }
            return this[t](function(f) {
              return n.apply(ae(f) ? f : [], s);
            });
          };
        }), nt(xe.prototype, function(e, n) {
          var t = a[n];
          if (t) {
            var r = t.name + "";
            Ie.call(Qt, r) || (Qt[r] = []), Qt[r].push({ name: n, func: t });
          }
        }), Qt[v0(i, K).name] = [{
          name: "wrapper",
          func: i
        }], xe.prototype.clone = rl, xe.prototype.reverse = il, xe.prototype.value = sl, a.prototype.at = Lc, a.prototype.chain = Ic, a.prototype.commit = Fc, a.prototype.next = Pc, a.prototype.plant = Bc, a.prototype.reverse = Wc, a.prototype.toJSON = a.prototype.valueOf = a.prototype.value = Hc, a.prototype.first = a.prototype.head, _2 && (a.prototype[_2] = $c), a;
      }, Kt = Fo();
      Dt ? ((Dt.exports = Kt)._ = Kt, rr._ = Kt) : gn._ = Kt;
    }).call(d8);
  }($2, $2.exports)), $2.exports;
}
var g8 = h8();
const p8 = ({
  isVisible: u,
  onClose: l,
  taskId: i,
  // Pass the task ID for the API call
  currentReminder: g,
  containerRef: v
  // Use the ref to ensure alignment within Ongoing
}) => {
  const x = g, E = st(null), [S, A] = W(
    x ? $n(x) : $n()
  ), [F, $] = W(
    x ? $n(x) : $n()
  ), [j, V] = W(!0);
  mn(() => {
    function re(K) {
      E.current && !E.current.contains(K.target) && l();
    }
    return document.addEventListener("mousedown", re), () => {
      document.removeEventListener("mousedown", re);
    };
  }, [E, l]);
  const J = (re) => {
    $(re);
  }, X = async () => {
    const re = $n(S).set({
      hour: F.hour(),
      minute: F.minute()
    }).toISOString();
    try {
      (await Ct.patch(
        `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks/${i}`,
        { reminder: re }
      )).status === 200 && (nn.success("Reminder updated successfully!"), l());
    } catch (K) {
      nn.error("Failed to update reminder."), console.error("Error updating reminder:", K);
    }
  }, ye = v != null && v.current ? {
    position: "absolute",
    left: v.current.getBoundingClientRect().left + "px",
    top: v.current.getBoundingClientRect().top + 20 + "px",
    width: "345px",
    maxHeight: "90vh",
    overflowY: "auto"
  } : {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "345px",
    maxHeight: "90vh",
    overflowY: "auto"
  };
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: u && /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: E,
      className: "p-4 bg-white rounded-lg shadow-lg z-50",
      style: ye,
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between gap-2 mb-4", children: [
          /* @__PURE__ */ c.jsx(
            $0,
            {
              value: S,
              format: "DD/MM/YYYY",
              onClick: () => V(!0),
              className: "rounded-md",
              style: { width: "calc(50% - 4px)", height: "40px" },
              open: !1
            }
          ),
          /* @__PURE__ */ c.jsx(
            di,
            {
              value: F,
              format: "hh:mm A",
              onClick: () => V(!1),
              suffixIcon: /* @__PURE__ */ c.jsx(W2, {}),
              use12Hours: !0,
              className: "rounded-md",
              style: { width: "calc(50% - 4px)", height: "40px" },
              open: !1
            }
          )
        ] }),
        j ? /* @__PURE__ */ c.jsxs("div", { className: "border-t pt-2", children: [
          /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between text-gray-500 mb-2", children: [
            /* @__PURE__ */ c.jsx("button", { onClick: () => A(S.clone().subtract(1, "month")), children: "<" }),
            /* @__PURE__ */ c.jsx("span", { className: "font-medium", children: $n(S).format("MMMM YYYY") }),
            /* @__PURE__ */ c.jsx("button", { onClick: () => A(S.clone().add(1, "month")), children: ">" })
          ] }),
          /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-7 text-center text-gray-500 font-medium mb-2", children: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((re) => /* @__PURE__ */ c.jsx("span", { children: re }, re)) }),
          /* @__PURE__ */ c.jsx("div", { className: "grid grid-cols-7 text-center gap-y-2", children: Array.from({ length: S.daysInMonth() }, (re, K) => /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `py-1 cursor-pointer ${S.date() === K + 1 ? "text-teal-600 border border-teal-600 rounded-full" : "text-gray-700"}`,
              onClick: () => A(S.clone().date(K + 1)),
              children: K + 1
            },
            K
          )) })
        ] }) : /* @__PURE__ */ c.jsx("div", { className: "border-t pt-2", children: /* @__PURE__ */ c.jsx(
          di,
          {
            value: F,
            format: "hh:mm A",
            onChange: J,
            suffixIcon: /* @__PURE__ */ c.jsx(W2, {}),
            use12Hours: !0,
            className: "rounded-md w-full"
          }
        ) }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end mt-4 gap-2", children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: l,
              className: "bg-gray-200 text-gray-700 px-4 py-2 rounded-md",
              children: "Close"
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: X,
              className: "bg-teal-600 text-white px-4 py-2 rounded-md",
              children: "Save"
            }
          )
        ] })
      ]
    }
  ) });
}, m8 = ({ isVisible: u, onClose: l, onDelete: i, task: g }) => {
  const [v, x] = W(!1), E = async () => {
    x(!0);
    try {
      await i();
    } catch (S) {
      console.error("Error deleting task:", S);
    } finally {
      x(!1);
    }
  };
  return /* @__PURE__ */ c.jsxs(
    ga,
    {
      visible: u,
      onCancel: l,
      footer: null,
      closable: !1,
      centered: !0,
      bodyStyle: { padding: "30px" },
      width: 780,
      children: [
        /* @__PURE__ */ c.jsx(
          "button",
          {
            onClick: l,
            className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none",
            children: /* @__PURE__ */ c.jsx(yi, { style: { fontSize: "20px" } })
          }
        ),
        /* @__PURE__ */ c.jsx("div", { className: "flex justify-center items-center w-16 h-16 rounded-full mx-auto", children: /* @__PURE__ */ c.jsx(
          Ra,
          {
            style: {
              fontSize: "40px",
              // Adjust size to match your design
              color: "#FF6F61"
              // Red color to match the design
            }
          }
        ) }),
        /* @__PURE__ */ c.jsx("h2", { className: "text-2xl font-semibold text-gray-900 text-center", children: "Delete" }),
        /* @__PURE__ */ c.jsxs("p", { className: "text-gray-600 text-center mt-2", children: [
          "Are you sure you want to delete the task ",
          /* @__PURE__ */ c.jsx("strong", { children: g == null ? void 0 : g.name }),
          "? ",
          /* @__PURE__ */ c.jsx("br", {}),
          "This task will be deleted permanently."
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "flex justify-end gap-4 mt-6", children: [
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: l,
              className: "bg-gray-300 text-gray-700 px-4 py-2 rounded-md focus:outline-none",
              style: { minWidth: "100px", minHeight: "40px" },
              children: "Close"
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              onClick: E,
              className: `flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md focus:outline-none ${v ? "cursor-not-allowed opacity-75" : ""}`,
              disabled: v,
              style: { minWidth: "100px", minHeight: "40px" },
              children: v ? /* @__PURE__ */ c.jsx(vi, { size: "small" }) : "Delete"
            }
          )
        ] })
      ]
    }
  );
}, v8 = () => /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center p-4 mb-4 bg-[#F5FFFD] shadow-sm border border-gray-200 rounded-lg relative animate-pulse", children: [
  /* @__PURE__ */ c.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-gray-300 rounded-l-lg" }),
  /* @__PURE__ */ c.jsxs("div", { className: "flex items-center ml-4", children: [
    /* @__PURE__ */ c.jsx("div", { className: "w-5 h-5 bg-gray-300 rounded-full mr-3 flex-shrink-0" }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ c.jsx("div", { className: "h-4 bg-gray-300 rounded w-32 mb-2" }),
      /* @__PURE__ */ c.jsx("div", { className: "h-3 bg-gray-300 rounded w-20" })
    ] })
  ] }),
  /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-16 relative", children: [
    /* @__PURE__ */ c.jsx("div", { className: "h-4 bg-gray-300 rounded w-20" }),
    /* @__PURE__ */ c.jsx("div", { className: "h-4 bg-gray-300 rounded w-10" }),
    /* @__PURE__ */ c.jsx("div", { className: "h-4 bg-gray-300 rounded w-5" })
  ] })
] }), C8 = ({
  tasks: u,
  setTasks: l,
  fetchNextPage: i,
  triggerCompletedRefresh: g,
  onTaskCreated: v
}) => {
  const [x, E] = W(!1), [S, A] = W(!1), [F, $] = W(!1), [j, V] = W(null), [J, X] = W(null), [ye, re] = W($n()), [K, ue] = W($n()), [we, De] = W({}), [he, We] = W(null), [be, Ge] = W(null), Fe = st(null), [me, ie] = W(0), [tn, ce] = W(!0), [z, L] = W(!0), M = st(null);
  mn(() => {
    const R = (ve) => {
      ve.target.closest("#dropdowns") || X(!1);
    };
    return J && document.addEventListener("click", R), () => {
      document.removeEventListener("click", R);
    };
  }, [J]);
  const Z = () => E(!0), y = () => E(!1), H = (R) => {
    We(R), A(!0), X(null);
  }, I = () => A(!1), k = (R) => {
    Ge(R), $(!0), X(null);
  }, O = () => $(!1), P = async () => {
    try {
      (await Ct.delete(
        `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks/${be._id}`
      )).status === 200 && (nn.success(`Task deleted: ${be.name}`), l(
        (ve) => ve.filter((je) => je._id !== be._id)
      ), $(!1));
    } catch {
      nn.error("Failed to delete task");
    }
  }, q = g8.throttle(() => {
    if (Fe.current) {
      const { scrollTop: R, scrollHeight: ve, clientHeight: je } = Fe.current;
      R + je >= ve - 1 && z && !tn && (i(me + 1), ie(me + 1));
    }
  }, 200);
  mn(() => {
    const R = Fe.current;
    return R && R.addEventListener("scroll", q), () => {
      R && R.removeEventListener("scroll", q);
    };
  }, [me, z, tn]), mn(() => {
    setTimeout(() => ce(!1), 2e3);
  }, []);
  const ge = (R) => {
    De((ve) => ({
      ...ve,
      [R]: !ve[R]
    })), Pe(R);
  }, Pe = async (R) => {
    try {
      (await Ct.patch(
        `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks/${R}/`,
        { markDone: !0 }
      )).status === 200 && (nn.success("Task marked as completed!"), l(
        (je) => je.filter((Xe) => Xe._id !== R)
      ), g());
    } catch {
      nn.error("Failed to mark task as completed");
    }
  }, Ue = (R) => {
    V(j === R ? null : R);
  }, ze = (R) => /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "absolute bg-white shadow-lg rounded-lg p-2 z-50",
      style: {
        top: "100%",
        left: "40%",
        transform: "translateX(-90%)",
        whiteSpace: "nowrap",
        overflow: "visible"
      },
      children: [
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: "p-2 cursor-pointer hover:bg-[#D1F8F0] flex items-center",
            onClick: () => H(R),
            children: [
              /* @__PURE__ */ c.jsx(U0, { className: "mr-2 text-gray-600" }),
              /* @__PURE__ */ c.jsx("span", { className: "text-gray-700", children: "Edit Task" })
            ]
          }
        ),
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: "p-2 cursor-pointer hover:bg-[#D1F8F0] flex items-center",
            onClick: () => k(R),
            children: [
              /* @__PURE__ */ c.jsx(Aa, { className: "mr-2 text-gray-600" }),
              /* @__PURE__ */ c.jsx("span", { className: "text-gray-700", children: "Delete Task" })
            ]
          }
        )
      ]
    }
  ), $e = (R) => {
    switch (R) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-orange-500";
      case "low":
        return "text-yellow-400";
      default:
        return "text-gray-500";
    }
  }, Re = (R) => {
    const ve = $n(), je = $n(R.dueDate), Xe = ve.diff(je, "days");
    return Xe <= 0 ? null : `Overdue by ${Xe} days`;
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "relative bg-white shadow-md rounded-lg p-4 max-w-full h-full", children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        className: "relative flex items-center justify-start px-4 py-2 mb-4 w-full bg-white rounded-lg shadow-sm gap-2",
        onClick: Z,
        children: [
          /* @__PURE__ */ c.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-red-600 rounded-l-lg" }),
          /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-center border border-red-600 rounded-md p-1", children: /* @__PURE__ */ c.jsx(La, { className: "text-red-600 text-sm" }) }),
          /* @__PURE__ */ c.jsx("span", { className: "text-gray-600 text-sm", children: "Add Task" })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: Fe,
        className: u.length > 0 ? "max-h-[300px] overflow-y-auto pr-2" : "",
        children: tn ? Array(5).fill().map((R, ve) => /* @__PURE__ */ c.jsx(v8, {}, ve)) : u.length === 0 ? /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ c.jsx("img", { src: f8, alt: "No Active Tasks", className: "mb-4" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-lg font-semibold text-gray-700", children: "Task List Empty" }),
          /* @__PURE__ */ c.jsx("p", { className: "text-sm text-gray-500", children: "You don’t have any active tasks right now." })
        ] }) : u.map((R, ve) => (
          // <div
          //   key={index}
          //   className="relative flex justify-between items-center p-1 mb-1 bg-[#F5FFFD] shadow-sm border border-gray-200 rounded-lg"
          // >
          //   <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-200 rounded-l-lg" />
          //   <div className="flex items-center">
          //     <div className="flex flex-col ml-2">
          //       <div className="flex items-center mb-0.5">
          //         {((task.user_id === task.assigner_id) || (task.user_id === task.assignee_id)) ? (
          //           <div
          //             className={`w-4 h-4 border ${clickedTasks[task._id]
          //                 ? "bg-teal-300 border-teal-300"
          //                 : "bg-white border-teal-200"
          //               } rounded-full mr-1 flex-shrink-0 flex items-center justify-center cursor-pointer`}
          //             onClick={() => handleClick(task._id)}
          //           >
          //             {clickedTasks[task._id] && (
          //               <CheckOutlined className="text-white text-xs" />
          //             )}
          //           </div>
          //         ) : (
          //           <div
          //             className="w-4 h-4 rounded-full mr-1 flex-shrink-0"
          //             style={{ visibility: "hidden" }}
          //           ></div>
          //         )}
          //         {/* <div
          //           className={`w-4 h-4 border ${clickedTasks[task._id]
          //               ? "bg-teal-300 border-teal-300"
          //               : "bg-white border-teal-200"
          //             } rounded-full mr-1 flex-shrink-0 flex items-center justify-center cursor-pointer`}
          //           onClick={() => handleClick(task._id)}
          //         >
          //           {clickedTasks[task._id] && (
          //             <CheckOutlined className="text-white text-xs" />
          //           )}
          //         </div> */}
          //         <h3 className="text-sm font-semibold text-gray-900 mr-1">
          //           {task.name.length > 20
          //             ? `${task.name.substring(0, 20)}...`
          //             : task.name}
          //         </h3>
          //         {getOverdueText(task) && (
          //           <span className="flex items-center justify-center h-4 px-2 text-xs text-red-600 border border-red-600 bg-white rounded-full">
          //             {getOverdueText(task)}
          //           </span>
          //         )}
          //       </div>
          //       <p className="text-xs text-gray-600 mb-0.5 ml-6">
          //         {task.description}
          //       </p>
          //       <p className="text-xs text-gray-500 mb-0.5 ml-6">
          //         Due on {moment(task.dueDate).format("DD/MM/YYYY")}
          //       </p>
          //     </div>
          //   </div>
          //   <div className="flex items-center space-x-16 relative">
          //     <div className="flex space-x-32">
          //       <div className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
          //         {task.assigner}{" "}
          //       </div>
          //       <div className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
          //         {task.assignee}
          //       </div>
          //       <div className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700">
          //         {task.team}
          //       </div>
          //     </div>
          //   </div>
          //   <div className="flex items-center space-x-16 relative">
          //     <FlagOutlined className={getFlagColor(task.priority)} />
          //     {(task.user_id === task.assignee_id) ? (
          //       <div className="w-5 h-5 flex items-center justify-center">
          //         {task.assigner === task.assignee && (
          //           <ClockCircleOutlined
          //             className="text-gray-500 cursor-pointer"
          //             onClick={() => handleClockClick(task._id)}
          //           />
          //         )}
          //       </div>
          //     ) : (
          //       <div className="w-5 h-5 flex items-center justify-center">
          //       </div>
          //     )}
          //     <div className="relative" ref={dropdownRef}>
          //     {(task.user_id === task.assigner_id) && (
          //       <MoreOutlined
          //         className="text-gray-500 cursor-pointer"
          //         onClick={(e) => {
          //           e.stopPropagation();
          //           setDropdownVisible(
          //             dropdownVisible === task._id ? null : task._id
          //           );
          //         }}
          //       />
          //       )}
          //       {dropdownVisible === task._id && customDropdown(task)}
          //     </div>
          //     {calendarVisible === task._id && (
          //       <EditReminderModal
          //         isVisible={calendarVisible === task._id}
          //         onClose={() => setCalendarVisible(null)}
          //         task={task}
          //         selectedDate={selectedDate}
          //         setSelectedDate={setSelectedDate}
          //         selectedTime={selectedTime}
          //         setSelectedTime={setSelectedTime}
          //         taskId={task._id}
          //       />
          //     )}
          //   </div>
          // </div>
          /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "relative flex justify-between items-center p-1 mb-1 bg-[#F5FFFD] shadow-sm border border-gray-200 rounded-lg",
              children: [
                /* @__PURE__ */ c.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-teal-200 rounded-l-lg" }),
                /* @__PURE__ */ c.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col ml-2", children: [
                  /* @__PURE__ */ c.jsxs("div", { className: "flex items-center mb-0.5", children: [
                    R.user_id === R.assigner_id || R.user_id === R.assignee_id ? /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: `w-4 h-4 border ${we[R._id] ? "bg-teal-300 border-teal-300" : "bg-white border-teal-200"} rounded-full mr-1 flex-shrink-0 flex items-center justify-center cursor-pointer`,
                        onClick: () => ge(R._id),
                        children: we[R._id] && /* @__PURE__ */ c.jsx(Na, { className: "text-white text-xs" })
                      }
                    ) : /* @__PURE__ */ c.jsx(
                      "div",
                      {
                        className: "w-4 h-4 rounded-full mr-1 flex-shrink-0",
                        style: { visibility: "hidden" }
                      }
                    ),
                    /* @__PURE__ */ c.jsx("h3", { className: "text-sm font-semibold text-gray-900 mr-1", children: R.name.length > 20 ? `${R.name.substring(0, 20)}...` : R.name }),
                    Re(R) && /* @__PURE__ */ c.jsx("span", { className: "flex items-center justify-center h-4 px-2 text-xs text-red-600 border border-red-600 bg-white rounded-full", children: Re(R) })
                  ] }),
                  /* @__PURE__ */ c.jsx(
                    "p",
                    {
                      className: "text-xs text-gray-600 mb-0.5 ml-6",
                      title: R.description || "No description available",
                      children: R.description ? R.description.length > 30 ? `${R.description.substring(0, 30)}...` : R.description : "No description available"
                    }
                  ),
                  /* @__PURE__ */ c.jsxs("p", { className: "text-xs text-gray-500 mb-0.5 ml-6", children: [
                    "Due on ",
                    $n(R.dueDate).format("DD/MM/YYYY")
                  ] })
                ] }) }),
                /* @__PURE__ */ c.jsx("div", { className: "flex items-center space-x-16 relative", children: /* @__PURE__ */ c.jsxs("div", { className: "flex space-x-32", children: [
                  /* @__PURE__ */ c.jsx("div", { className: "px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700", children: R.assigner }),
                  /* @__PURE__ */ c.jsx("div", { className: "px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700", children: R.assignee }),
                  /* @__PURE__ */ c.jsx("div", { className: "px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700", children: R.team })
                ] }) }),
                /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-16 relative", children: [
                  /* @__PURE__ */ c.jsx(Mt, { className: $e(R.priority) }),
                  R.user_id === R.assignee_id ? /* @__PURE__ */ c.jsx("div", { className: "w-5 h-5 flex items-center justify-center", children: R.assigner === R.assignee && /* @__PURE__ */ c.jsx(
                    W2,
                    {
                      className: "text-gray-500 cursor-pointer",
                      onClick: () => Ue(R._id)
                    }
                  ) }) : /* @__PURE__ */ c.jsx("div", { className: "w-5 h-5 flex items-center justify-center" }),
                  /* @__PURE__ */ c.jsxs("div", { className: "relative", ref: M, children: [
                    R.user_id === R.assigner_id && /* @__PURE__ */ c.jsx(
                      ja,
                      {
                        className: "text-gray-500 cursor-pointer",
                        onClick: (je) => {
                          je.stopPropagation(), X(J === R._id ? null : R._id);
                        }
                      }
                    ),
                    J === R._id && ze(R)
                  ] }),
                  j === R._id && /* @__PURE__ */ c.jsx(
                    p8,
                    {
                      isVisible: j === R._id,
                      onClose: () => V(null),
                      task: R,
                      selectedDate: ye,
                      setSelectedDate: re,
                      selectedTime: K,
                      setSelectedTime: ue,
                      taskId: R._id
                    }
                  )
                ] })
              ]
            },
            R._id
          )
        ))
      }
    ),
    x && /* @__PURE__ */ c.jsx(
      Pa,
      {
        isVisible: x,
        handleCancel: y,
        onTaskCreated: v
      }
    ),
    S && /* @__PURE__ */ c.jsx(
      $a,
      {
        visible: S,
        onClose: I,
        task: he,
        onTaskUpdated: (R) => {
          l(
            (ve) => ve.map(
              (je) => je._id === R._id ? R : je
            )
          );
        },
        onTaskCreated: v
      }
    ),
    F && /* @__PURE__ */ c.jsx(
      m8,
      {
        isVisible: F,
        onClose: O,
        onDelete: P,
        task: be
      }
    )
  ] });
}, fa = ({ label: u, value: l, onChange: i, options: g }) => /* @__PURE__ */ c.jsxs("div", { className: "relative w-[150px]", children: [
  /* @__PURE__ */ c.jsxs(
    "select",
    {
      className: "w-full px-4 py-2 border rounded-md bg-white text-black appearance-none cursor-pointer",
      value: l,
      onChange: i,
      children: [
        /* @__PURE__ */ c.jsx("option", { value: "", children: u }),
        g.map((v) => /* @__PURE__ */ c.jsx("option", { value: v._id, children: v.name }, v._id))
      ]
    }
  ),
  /* @__PURE__ */ c.jsx(H0, { className: "absolute right-2 top-1/2 transform -translate-y-1/2" })
] }), x8 = ({ label: u, value: l, onChange: i, options: g, onScrollEnd: v, isScrollable: x }) => {
  var J;
  const [E, S] = W(!1), A = st(null), F = st(null), $ = () => S(!E), j = (X) => {
    A.current && !A.current.contains(X.target) && S(!1);
  }, V = (X) => {
    const { scrollTop: ye, scrollHeight: re, clientHeight: K } = X.target;
    ye + K >= re && v && v();
  };
  return mn(() => (E ? document.addEventListener("mousedown", j) : document.removeEventListener("mousedown", j), () => {
    document.removeEventListener("mousedown", j);
  }), [E]), /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: "relative",
      ref: A,
      style: { width: "auto", minWidth: "200px" },
      children: [
        /* @__PURE__ */ c.jsxs(
          "div",
          {
            className: "px-4 py-2 border rounded-md bg-white text-black cursor-pointer flex justify-between items-center",
            onClick: $,
            style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
            children: [
              /* @__PURE__ */ c.jsx("span", { children: l && ((J = g.find((X) => X._id === l)) == null ? void 0 : J.name) || u }),
              /* @__PURE__ */ c.jsx(H0, {})
            ]
          }
        ),
        E && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: "absolute z-50 bg-white border rounded-md shadow-lg mt-2",
            style: {
              maxHeight: x ? "150px" : "auto",
              overflowY: x ? "auto" : "visible",
              width: "100%"
            },
            onScroll: x ? V : void 0,
            ref: F,
            children: /* @__PURE__ */ c.jsxs("div", { children: [
              /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: "px-4 py-2 hover:bg-[#D1F8F0] cursor-pointer",
                  onClick: () => {
                    i({ target: { value: "" } }), S(!1);
                  },
                  style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
                  children: u
                },
                ""
              ),
              g.map((X) => /* @__PURE__ */ c.jsx(
                "div",
                {
                  className: "px-4 py-2 hover:bg-[#D1F8F0] cursor-pointer",
                  onClick: () => {
                    i({ target: { value: X._id } }), S(!1);
                  },
                  style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
                  children: X.name
                },
                X._id
              ))
            ] })
          }
        )
      ]
    }
  );
}, da = ({ icon: u, label: l, onClick: i }) => /* @__PURE__ */ c.jsxs(
  "div",
  {
    className: "flex items-center px-4 py-2 hover:bg-[#D1F8F0] text-[#1B2028] rounded-lg cursor-pointer",
    onClick: i,
    children: [
      /* @__PURE__ */ c.jsx(u, { className: "text-[#798897] mr-2" }),
      /* @__PURE__ */ c.jsx("span", { children: l })
    ]
  }
), _8 = ({
  assigner: u,
  setAssigner: l,
  assignee: i,
  setAssignee: g,
  team: v,
  setTeam: x,
  onlySelf: E,
  setOnlySelf: S,
  userTeams: A,
  availableUsers: F,
  setAvailableUsers: $,
  userId: j,
  assigneeList: V,
  assignerList: J,
  setAssigneeList: X,
  setAssignerList: ye,
  fetchMoreUserTeams: re
}) => {
  const [K, ue] = W(!1), [we, De] = W(!1), [he, We] = W({ top: 0, left: 0 }), be = st(null), Ge = st(null), Fe = () => {
    if (!K && be.current) {
      const ce = be.current.getBoundingClientRect();
      We({
        top: ce.bottom + window.scrollY,
        left: ce.right - 199 + window.scrollX
      });
    }
    ue(!K);
  }, me = (ce) => {
    Ge.current && !Ge.current.contains(ce.target) && !be.current.contains(ce.target) && ue(!1);
  }, ie = () => {
    De(!1), S("teamFilter"), x("teamFilterActive"), ue(!K);
  };
  mn(() => (K ? document.addEventListener("mousedown", me) : document.removeEventListener("mousedown", me), () => {
    document.removeEventListener("mousedown", me);
  }), [K]), mn(() => {
    if (!v)
      $([{ _id: j, name: "Self" }]), X([{ _id: j, name: "Self" }]), ye([{ _id: j, name: "Self" }]);
    else {
      const ce = A.find((z) => z._id === v);
      if (ce) {
        const L = ce.members.filter((M) => M.name).map((M) => ({ _id: M._id, name: M.name }));
        $(L), X(L), ye(L);
      } else
        $([]), X([]), ye([]);
    }
  }, [v, A, j]);
  const tn = () => {
    De(!0), l(j), g(j), x(""), S("onlySelf"), X([{ _id: j, name: "Self" }]), ye([{ _id: j, name: "Self" }]), ue(!K);
  };
  return /* @__PURE__ */ c.jsxs("div", { children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center mb-4 p-4", children: [
      /* @__PURE__ */ c.jsx("h1", { className: "text-[20px] font-semibold leading-[28px] text-[#192028]", children: "To-Do List" }),
      /* @__PURE__ */ c.jsxs(
        "button",
        {
          ref: be,
          className: "relative z-10 flex items-center border border-[#D9DEE7] rounded-md text-[#1B2028] bg-white h-[40px] w-[150px] justify-center",
          onClick: Fe,
          "aria-haspopup": "true",
          "aria-expanded": K,
          children: [
            /* @__PURE__ */ c.jsx("span", { className: "flex-grow text-center pl-4", children: "Filter" }),
            /* @__PURE__ */ c.jsx("span", { className: "flex items-center justify-center border border-[#41EAD4] rounded-md h-[40px] w-[40px] bg-white", children: /* @__PURE__ */ c.jsx(Da, { className: "text-[#41EAD4] text-[14px]" }) })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between p-4 max-w-[1130px] max-h-[1124px]", children: [
      /* @__PURE__ */ c.jsx(
        fa,
        {
          label: "Assigner",
          value: u,
          onChange: (ce) => l(ce.target.value),
          options: J || []
        }
      ),
      /* @__PURE__ */ c.jsx(
        fa,
        {
          label: "Assignee",
          value: i,
          onChange: (ce) => g(ce.target.value),
          options: V || []
        }
      ),
      we ? /* @__PURE__ */ c.jsx("div", { className: "relative" }) : /* @__PURE__ */ c.jsx(
        x8,
        {
          label: "Team",
          value: v,
          onChange: (ce) => x(ce.target.value),
          options: A.map((ce) => ({ _id: ce._id, name: ce.name })),
          onScrollEnd: re,
          isScrollable: !0
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx("hr", { className: "border-t border-[#E0E0E0] mb-4" }),
    K && /* @__PURE__ */ c.jsxs(
      "div",
      {
        ref: Ge,
        className: "absolute z-50 flex flex-col p-1 rounded-lg bg-white shadow-lg w-[199px]",
        style: { top: he.top, left: he.left },
        children: [
          /* @__PURE__ */ c.jsx(
            da,
            {
              icon: Ma,
              label: "Self Assigned",
              onClick: tn
            }
          ),
          /* @__PURE__ */ c.jsx(
            da,
            {
              icon: Ia,
              label: "Team Assigned",
              onClick: ie
            }
          )
        ]
      }
    )
  ] });
}, y8 = "data:image/svg+xml,%3csvg%20width='242'%20height='260'%20viewBox='0%200%20242%20260'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.5'%20clip-path='url(%23clip0_2660_357150)'%3e%3cpath%20d='M112.6%20259.967C35.8278%20259.967%20-40.9443%20259.964%20-117.716%20259.997C-118.911%20259.997%20-119.18%20259.728%20-119.18%20258.534C-119.147%20172.851%20-119.147%2087.1675%20-119.18%201.48441C-119.18%200.290186%20-118.911%200.0212127%20-117.716%200.0214846C35.934%200.0526998%20189.584%200.0526998%20343.235%200.0214846C344.429%200.0212671%20344.699%200.29024%20344.698%201.48441C344.665%2087.1675%20344.665%20172.851%20344.698%20258.534C344.699%20259.728%20344.429%20259.997%20343.235%20259.997C266.357%20259.964%20189.478%20259.967%20112.6%20259.967Z'%20fill='%23FCFCFC'/%3e%3cpath%20d='M40.7807%20234.892C36.5835%20233.881%2034.0521%20230.993%2033.9574%20226.675C33.8272%20220.733%2033.8898%20214.786%2033.8916%20208.842C33.9064%20160.003%2033.9288%20111.165%2033.9426%2062.326C33.9449%2053.7266%2033.9813%2045.1265%2033.8825%2036.5281C33.8162%2030.7651%2037.5426%2027.1908%2043.49%2027.2668C59.0427%2027.4657%2074.6001%2027.3018%2090.1557%2027.2826C91.0524%2028.5364%2090.4555%2029.954%2090.5979%2031.2892C91.1306%2035.0491%2087.6954%2038.3946%2083.841%2038.1191C81.9524%2037.984%2080.0325%2037.955%2078.1342%2038.2442C75.9624%2038.5752%2074.2772%2039.6199%2073.1352%2041.5201C72.7567%2042.15%2072.417%2042.8354%2071.6304%2043.0864C70.7952%2043.3113%2069.9419%2043.2558%2069.0947%2043.2565C62.5127%2043.262%2055.9307%2043.2562%2049.3487%2043.261C46.7502%2043.2628%2046.7114%2043.2984%2046.7112%2045.9483C46.7078%2076.4666%2046.7093%20106.985%2046.7092%20137.503C46.7091%20164.412%2046.7086%20191.322%2046.7099%20218.231C46.71%20221.212%2046.714%20221.196%2049.6788%20221.224C50.8371%20221.235%2052.0195%20221.047%2053.143%20221.512C53.7565%20221.864%2053.8734%20222.512%2054.1059%20223.101C55.0179%20225.415%2056.5722%20226.802%2059.1921%20226.996C67.4101%20227.604%2075.6358%20227.157%2083.8567%20227.264C87.4135%20227.31%2090.9606%20227.495%2094.4949%20227.82C96.927%20228.043%2097.1824%20228.473%2097.3573%20230.944C97.5942%20234.29%2097.5942%20234.29%20100.872%20234.29C128.258%20234.29%20155.643%20234.287%20183.029%20234.303C184.059%20234.304%20185.171%20234.025%20186.079%20234.826C185.891%20235.583%20185.236%20235.536%20184.679%20235.607C183.995%20235.694%20183.302%20235.651%20182.612%20235.651C136.88%20235.652%2091.148%20235.645%2045.4158%20235.682C43.7905%20235.683%2042.2938%20235.34%2040.7807%20234.892Z'%20fill='%234ED2BF'/%3e%3cpath%20d='M40.7812%20234.892C79.0396%20235.287%20117.299%20234.985%20155.558%20235.079C165.058%20235.103%20174.558%20235.089%20184.058%20235.075C184.729%20235.074%20185.444%20235.266%20186.067%20234.822C186.469%20234.272%20187.128%20234.148%20187.684%20233.856C190.439%20232.405%20191.988%20230.161%20192.179%20227.027C192.224%20226.286%20192.201%20225.542%20192.201%20224.8C192.202%20192.449%20192.2%20160.098%20192.204%20127.748C192.204%20123.771%20192.154%20119.793%20192.271%20115.82C192.229%20114.446%20192.911%20113.265%20193.338%20112.023C194.56%20108.468%20195.845%20104.934%20197.155%20101.41C197.378%20100.973%20197.625%20100.548%20197.797%20100.086C201.677%2089.3283%20205.716%2078.6299%20209.636%2067.888C209.853%2067.2938%20210%2066.6563%20210.621%2066.3158C213.382%2062.7146%20216.452%2059.3837%20219.83%2055.7734C219.83%2057.5641%20219.83%2059.0591%20219.83%2060.5542C220.34%2061.186%20220.269%2061.9433%20220.271%2062.6768C220.282%2065.7387%20220.282%2068.8005%20220.272%2071.8623C220.269%2073.1326%20220.283%2074.3944%20220.669%2075.6249C220.861%2076.2398%20220.877%2076.8759%20220.691%2077.5002C219.803%2080.4851%20218.845%2083.4487%20217.982%2086.4414C217.848%2086.9073%20217.589%2087.3029%20217.244%2087.6421C215.876%2090.7415%20215.189%2094.0628%20214.125%2097.2623C212.542%20102.026%20211.092%20106.835%20209.656%20111.646C209.43%20112.403%20209.054%20112.519%20208.416%20112.513C206.825%20112.497%20205.231%20112.556%20203.643%20112.486C202.623%20112.442%20202.195%20112.753%20202.257%20113.823C202.33%20115.092%20202.27%20116.368%20202.27%20117.641C202.269%20142.039%20202.269%20166.437%20202.271%20190.835C202.271%20191.578%20202.294%20192.32%20202.306%20193.062C202.788%20193.633%20202.79%20194.328%20202.793%20195.015C202.808%20199.395%20202.799%20203.775%20202.8%20208.156C202.801%20208.909%20202.7%20209.628%20202.296%20210.28C202.284%20218.398%20202.291%20226.515%20202.255%20234.632C202.235%20239.131%20199.438%20242.816%20195.194%20244.122C194.514%20244.331%20193.843%20244.367%20193.156%20244.367C146.144%20244.369%2099.1319%20244.374%2052.12%20244.358C47.924%20244.357%2045.3626%20241.745%2043.2873%20238.494C42.8615%20237.827%2042.4237%20237.115%2042.2351%20236.363C42.0218%20235.511%2041.4707%20235.178%2040.7812%20234.892Z'%20fill='%23D9DEE7'/%3e%3cpath%20d='M133.537%2027.3636C150.033%2027.3506%20166.529%2027.4108%20183.024%2027.276C187.453%2027.2399%20190.604%2028.7633%20192.391%2032.8658C193.08%2033.6295%20193.195%2034.5954%20193.199%2035.5396C193.243%2045.4197%20193.32%2055.3%20193.171%2065.1762C192.913%2067.4105%20191.904%2069.4131%20191.149%2071.4902C189.02%2077.3469%20186.876%2083.2001%20184.584%2088.9948C183.749%2091.1071%20183.797%2092.9914%20185.219%2094.7914C185.355%2095.0907%20185.39%2095.4023%20185.326%2095.7241C185.127%2096.2004%20184.896%2096.6682%20184.887%2097.2048C183.14%20102.529%20180.979%20107.699%20179.089%20112.97C178.697%20114.063%20178.418%20115.206%20177.878%20116.235C177.663%20116.646%20177.592%20117.564%20176.682%20116.997C176.627%20117.107%20176.679%20117.211%20176.714%20117.308C176.899%20117.828%20176.936%20118.363%20176.677%20118.849C176.343%20119.473%20176.05%20119.236%20175.821%20118.735C175.546%20117.797%20175.636%20116.837%20175.635%20115.887C175.63%2092.6681%20175.632%2069.4493%20175.631%2046.2306C175.63%2043.2625%20175.627%2043.2708%20172.659%2043.2577C166.669%2043.2315%20160.678%2043.3272%20154.689%2043.2052C153.609%2043.2318%20152.522%2043.3419%20151.468%2042.9847C150.963%2042.723%20150.78%2042.2085%20150.511%2041.759C149.021%2039.2652%20146.773%2038.1402%20143.917%2038.103C142.385%2038.083%20140.852%2038.1038%20139.32%2038.0881C135.525%2038.0492%20133.126%2035.6735%20133.021%2031.8523C133.005%2031.2715%20133.009%2030.6903%20133.013%2030.1079C133.039%2029.164%20132.731%2028.1566%20133.537%2027.3636Z'%20fill='%234ED2BF'/%3e%3cpath%20d='M133.531%2027.3625C133.5%2028.333%20133.47%2029.3035%20133.44%2030.274C132.642%2031.0108%20131.645%2030.8212%20130.709%2030.8222C118.45%2030.8351%20106.191%2030.8371%2093.9313%2030.8203C92.6475%2030.8185%2091.4008%2030.8725%2090.2518%2031.5165C90.2186%2030.1057%2090.1855%2028.6948%2090.1523%2027.2837C90.2634%2026.0729%2090.039%2024.8481%2090.3806%2023.6433C91.0754%2021.1935%2092.8122%2019.7642%2095.3503%2019.7592C106.339%2019.7375%20117.328%2019.7329%20128.317%2019.7533C131.153%2019.7585%20133.29%2021.99%20133.441%2024.9785C133.481%2025.7727%20133.501%2026.5679%20133.531%2027.3625Z'%20fill='%23AEB8CA'/%3e%3cpath%20d='M217.238%2087.6443C217.947%2084.3001%20219.143%2081.0977%20220.102%2077.8263C220.235%2077.3733%20220.528%2076.9451%20220.409%2076.4606C219.114%2071.1984%20220.075%2065.8555%20219.824%2060.5566C224.433%2060.5616%20229.042%2060.5969%20233.65%2060.5501C234.757%2060.5388%20235.108%2060.875%20235.102%2061.9935C235.062%2069.9916%20235.065%2077.99%20235.099%2085.9882C235.104%2087.0343%20234.76%2087.3907%20233.726%2087.3408C228.225%2087.0752%20222.74%2087.7991%20217.238%2087.6443Z'%20fill='%23DFF6FD'/%3e%3cpath%20d='M202.297%20210.281C202.3%20204.541%20202.303%20198.802%20202.307%20193.063C207.603%20193.067%20212.899%20193.106%20218.193%20193.051C219.419%20193.039%20219.847%20193.352%20219.826%20194.643C219.751%20199.249%20219.759%20203.857%20219.822%20208.463C219.839%20209.664%20219.454%20209.997%20218.28%20209.983C213.621%20209.924%20208.96%20209.958%20204.3%20209.96C203.616%20209.961%20202.915%20209.867%20202.297%20210.281Z'%20fill='%23E0F6FD'/%3e%3cpath%20d='M210.621%2066.3171C206.463%2077.6667%20202.306%2089.0162%20198.148%20100.366C197.738%20100.719%20197.268%20100.685%20196.808%20100.528C195.021%2099.9203%20193.235%2099.3075%20191.601%2098.3334C190.93%2097.5866%20191.33%2096.8314%20191.617%2096.1023C194.515%2088.7524%20197.15%2081.3049%20199.916%2073.906C200.992%2071.0256%20202.01%2068.1236%20203.089%2065.244C203.291%2064.7058%20203.366%2064.0986%20203.872%2063.7148C206.284%2064.1608%20208.478%2065.1728%20210.621%2066.3171Z'%20fill='%23768090'/%3e%3cpath%20d='M203.87%2063.7141C203.148%2067.1323%20201.663%2070.2954%20200.505%2073.5636C198.236%2079.9667%20195.791%2086.3077%20193.409%2092.6708C192.893%2094.0513%20192.356%2095.4254%20191.787%2096.7846C191.594%2097.2438%20191.391%2097.6516%20191.761%2098.0991C191.652%2098.2159%20191.522%2098.3623%20191.368%2098.3303C189.102%2097.8574%20186.882%2097.2591%20185%2095.8132C185.021%2095.555%20185.043%2095.2969%20185.064%2095.0387C185.047%2094.3139%20185.31%2093.6458%20185.482%2092.9586C186.892%2088.5834%20188.782%2084.3841%20190.201%2080.0127C190.912%2078.3257%20191.567%2076.6178%20192.113%2074.8689C193.359%2071.4958%20194.587%2068.1155%20195.893%2064.7649C196.198%2064.2282%20196.42%2063.6583%20196.551%2063.0527C196.749%2062.5341%20196.91%2061.9839%20197.538%2061.8066C199.734%2062.1609%20201.833%2062.8356%20203.87%2063.7141Z'%20fill='%23768090'/%3e%3cpath%20d='M197.543%2061.8061C197.307%2062.2755%20197.07%2062.7449%20196.834%2063.2143C195.749%2063.6579%20194.744%2064.207%20193.951%2065.1119C193.655%2065.4507%20193.307%2065.8498%20192.736%2065.6665C192.713%2057.8445%20192.696%2050.0225%20192.663%2042.2007C192.649%2039.0867%20192.801%2035.967%20192.391%2032.8643C196.71%2033.5107%20199.44%2036.1847%20201.28%2039.9266C202.057%2041.5084%20202.283%2043.2285%20202.275%2044.9998C202.257%2049.019%20202.308%2053.0384%20202.331%2057.0577C202.711%2057.9138%20201.997%2058.3078%20201.565%2058.7901C200.678%2059.7793%20199.709%2060.6781%20198.447%2061.1879C198.146%2061.394%20197.844%2061.6%20197.543%2061.8061Z'%20fill='%23D9DEE7'/%3e%3cpath%20d='M203.648%2056.3905C205.673%2053.0773%20207.697%2049.764%20209.575%2046.6895C209.575%2050.2067%20209.575%2053.9438%20209.575%2057.681C208.64%2058.3467%20207.813%2057.5555%20206.932%2057.4902C205.855%2057.0713%20204.597%2057.1901%20203.648%2056.3905Z'%20fill='%231B2028'/%3e%3cpath%20d='M207.019%2057.1406C207.91%2057.1401%20208.657%2057.8243%20209.578%2057.6815C210.322%2060.0322%20209.591%2062.4845%20210.217%2065.002C208.107%2064.2126%20206.171%2063.488%20204.234%2062.7635C204.509%2061.0377%20205.288%2059.4767%20205.856%2057.8474C206.036%2057.3288%20206.553%2057.2494%20207.019%2057.1406Z'%20fill='%23AEB1CB'/%3e%3cpath%20d='M207.021%2057.1412C206.249%2057.4672%20206.075%2058.1981%20205.844%2058.8876C205.397%2060.2171%20205.113%2061.6138%20204.236%2062.7643C202.306%2062.2393%20200.376%2061.7146%20198.445%2061.1896C199.426%2060.276%20200.414%2059.3695%20201.385%2058.4462C201.796%2058.0557%20202.25%2057.6819%20202.328%2057.0591C202.897%2057.0889%20203.162%2056.5153%20203.654%2056.3917C204.833%2056.3864%20205.93%2056.7502%20207.021%2057.1412Z'%20fill='%23D9DBE6'/%3e%3cpath%20d='M154.504%2042.7645C161.344%2042.7552%20168.184%2042.7796%20175.023%2042.7063C176.29%2042.6927%20176.211%2043.356%20176.211%2044.1874C176.209%2053.3073%20176.212%2062.4272%20176.221%2071.5472C176.236%2087.3996%20176.256%20103.252%20176.274%20119.104C176.659%20119.74%20176.375%20120.347%20176.15%20120.927C173.945%20126.598%20172.028%20132.376%20169.783%20138.031C167.609%20143.893%20165.384%20149.736%20163.338%20155.644C162.638%20157.665%20162.75%20157.834%20164.809%20158.407C166.086%20158.763%20167.349%20159.161%20168.605%20159.586C170.089%20160.215%20171.609%20160.735%20173.162%20161.167C173.751%20161.332%20174.406%20161.412%20174.707%20162.079C174.751%20162.653%20174.564%20163.083%20173.972%20163.261C171.959%20162.879%20170.073%20162.072%20168.112%20161.512C166.9%20161.127%20165.73%20160.624%20164.509%20160.259C163.644%20160.001%20163.278%20160.174%20163.182%20161.159C162.929%20163.745%20162.958%20166.342%20162.742%20168.926C162.627%20170.298%20163.875%20170.263%20164.564%20170.809C164.698%20170.911%20164.799%20171.039%20164.872%20171.19C164.845%20173.55%20163.717%20175.588%20162.957%20177.734C161.662%20178.217%20161.625%20179.338%20161.578%20180.512C162.158%20179.668%20162.587%20178.789%20163.123%20177.976C164.368%20175.925%20165.568%20173.844%20167.031%20171.934C168.453%20170.165%20169.575%20168.187%20170.9%20166.353C171.44%20165.607%20171.792%20164.656%20172.791%20164.328C173.648%20164.947%20173.082%20165.676%20172.906%20166.333C171.282%20172.369%20169.105%20178.245%20167.693%20184.342C167.24%20186.301%20166.856%20188.277%20166.294%20190.15C169.081%20186.277%20172.286%20182.674%20175.262%20178.889C175.645%20178.402%20176.16%20177.987%20176.519%20178.973C176.724%20179.759%20176.677%20180.559%20176.677%20181.353C176.681%20193.826%20176.68%20206.3%20176.68%20218.773C176.68%20218.985%20176.68%20219.198%20176.676%20219.41C176.634%20221.922%20176.318%20222.265%20173.805%20222.268C161.755%20222.283%20149.705%20222.275%20137.655%20222.275C110.583%20222.275%2083.5107%20222.276%2056.4384%20222.271C55.3337%20222.271%2054.1938%20222.429%2053.1915%20221.756C51.3363%20221.727%2049.4772%20221.614%2047.6272%20221.698C46.3887%20221.755%2046.1537%20221.31%2046.1563%20220.156C46.1942%20203.335%2046.1828%20186.513%2046.1836%20169.692C46.1855%20128.248%2046.1874%2086.8048%2046.1903%2045.3613C46.1905%2042.7312%2046.1939%2042.7318%2048.8984%2042.7362C56.5929%2042.7488%2064.2875%2042.7609%2071.982%2042.7731C72.8779%2044.1028%2072.3216%2045.5975%2072.469%2047.011C72.4081%2047.8835%2072.4816%2048.76%2072.4398%2049.6335C72.3985%2050.4946%2072.696%2051.1359%2073.4995%2051.5078C74.5147%2052.2868%2075.4155%2053.1932%2076.2593%2054.1396C77.2595%2055.2613%2078.4409%2055.6392%2079.9248%2055.6375C104.204%2055.6098%20128.483%2055.6243%20152.762%2055.607C154.558%2055.6057%20156.441%2055.6938%20157.471%2053.7096C158.617%2051.5016%20158.859%2049.2701%20157.619%2047.0246C157.054%2046.0001%20156.314%2045.0984%20155.439%2044.308C154.981%2043.8937%20154.387%2043.5375%20154.504%2042.7645Z'%20fill='%23F7F8FD'/%3e%3cpath%20d='M53.1953%20221.755C62.8513%20221.731%2072.5073%20221.688%2082.1633%20221.685C112.887%20221.676%20143.611%20221.669%20174.335%20221.719C175.879%20221.722%20176.246%20221.337%20176.239%20219.809C176.172%20206.491%20176.199%20193.173%20176.195%20179.856C176.195%20179.379%20176.163%20178.902%20176.145%20178.426C175.486%20177.725%20175.667%20176.841%20175.655%20176.018C175.577%20170.798%20175.738%20165.579%20175.707%20160.362C175.684%20159.334%20176.018%20158.377%20176.395%20157.449C178.363%20152.595%20180.052%20147.637%20181.913%20142.744C184.419%20136.327%20186.751%20129.845%20189.109%20123.373C189.907%20121.182%20190.803%20119.028%20191.567%20116.824C191.76%20116.266%20191.848%20115.542%20192.624%20115.371C192.632%20134.41%20192.641%20153.448%20192.648%20172.487C192.655%20190.571%20192.663%20208.656%20192.664%20226.741C192.664%20230.904%20189.855%20234.326%20186.066%20234.822C178%20234.811%20169.934%20234.793%20161.868%20234.791C140.747%20234.786%20119.625%20234.788%2098.5035%20234.787C97.9747%20234.787%2097.446%20234.787%2096.6228%20234.787C98.0942%20233.685%2096.8733%20232.693%2096.8163%20231.675C96.6273%20228.301%2096.4963%20228.277%2093.0822%20228.101C83.3867%20227.601%2073.6853%20227.827%2063.9865%20227.823C61.966%20227.822%2059.9848%20227.512%2057.9775%20227.433C56.1465%20227.36%2053.8812%20224.931%2053.5107%20222.97C53.4331%20222.56%2053.3018%20222.16%2053.1953%20221.755Z'%20fill='%234ED2BF'/%3e%3cpath%20d='M72.0262%2047.2033C72.0123%2045.7265%2071.9983%2044.2496%2071.9844%2042.7728C73.481%2039.1291%2076.2346%2037.5155%2080.1256%2037.6938C81.2379%2037.7447%2082.3619%2037.6233%2083.4674%2037.7244C87.0571%2038.0527%2090.3325%2035.7443%2090.2535%2031.5171C90.3846%2030.308%2091.2078%2030.2937%2092.1701%2030.2952C105.24%2030.3159%20118.31%2030.3088%20131.379%2030.3063C132.067%2030.3062%20132.754%2030.2858%20133.442%2030.2744C133.461%2030.3781%20133.493%2030.4817%20133.498%2030.5865C133.781%2036.3302%20135.233%2037.7179%20140.957%2037.7217C142.07%2037.7225%20143.183%2037.7464%20144.296%2037.7449C147.847%2037.7401%20150.182%2039.4732%20151.458%2042.7312C152.099%2045.2072%20152.243%2047.7268%20152.05%2050.264C152.016%2050.7073%20152.069%2051.4194%20151.216%2051.28C150.845%2050.8445%20150.762%2050.3029%20150.808%2049.7801C150.934%2048.351%20150.27%2047.995%20148.924%2048.0054C141.179%2048.0654%20133.434%2048.0336%20125.688%2048.0339C108.766%2048.0345%2091.843%2048.041%2074.9204%2048.019C73.9087%2048.0175%2072.7473%2048.3293%2072.0262%2047.2033Z'%20fill='%2359616E'/%3e%3cpath%20d='M192.624%20115.374C190.099%20122.138%20187.593%20128.909%20185.04%20135.662C184.149%20138.022%20183.458%20140.462%20182.268%20142.705C181.682%20143.134%20181.149%20142.762%20180.635%20142.557C179.213%20141.987%20177.719%20141.615%20176.326%20140.968C175.859%20140.789%20175.376%20140.633%20175.117%20140.148C177.981%20133.709%20180.206%20127.023%20182.651%20120.424C185.082%20113.863%20187.508%20107.299%20189.906%20100.726C190.154%20100.047%20190.314%2099.275%20191.056%2098.8867C193.428%2099.1232%20195.557%2099.9808%20197.459%20101.414C196.209%20105.805%20194.375%20109.992%20192.951%20114.323C192.837%20114.671%20192.732%20115.023%20192.624%20115.374Z'%20fill='%231B2028'/%3e%3cpath%20d='M197.456%20101.413C195.327%20100.709%20193.359%2099.5654%20191.142%2099.0996C188.843%2098.8307%20186.722%2098.0567%20184.749%2096.8577C184.548%2096.4421%20184.565%2096.0784%20184.998%2095.8145C187.252%2096.5763%20189.506%2097.3383%20191.759%2098.1002C193.908%2098.7983%20195.844%20100.097%20198.145%20100.366C197.966%20100.748%20197.841%20101.166%20197.456%20101.413Z'%20fill='%23F0EFEE'/%3e%3cpath%20d='M151.301%2051.2887C151.811%2049.549%20151.444%2047.7802%20151.472%2046.0248C151.489%2044.9273%20151.465%2043.8291%20151.46%2042.7314C152.477%2042.7427%20153.492%2042.7538%20154.508%2042.7649C155.557%2043.8658%20156.774%2044.7822%20157.677%2046.05C159.575%2048.7157%20159.361%2053.057%20157.003%2055.287C156.073%2056.1658%20154.748%2056.0925%20153.548%2056.0949C142.351%2056.1168%20131.153%2056.1138%20119.955%2056.114C106.475%2056.1143%2092.9957%2056.0913%2079.5162%2056.1381C78.1309%2056.1428%2077.0764%2055.8323%2076.1886%2054.7527C75.2828%2053.6511%2074.0646%2052.8315%2073.2578%2051.6288C73.7352%2051.0327%2074.4219%2050.9344%2075.1132%2050.8578C75.6946%2050.7935%2076.2796%2050.8056%2076.8636%2050.8055C100.755%2050.804%20124.647%2050.8024%20148.538%2050.8124C149.477%2050.8128%20150.467%2050.6341%20151.301%2051.2887Z'%20fill='%23C1DCF6'/%3e%3cpath%20d='M184.75%2096.8584C186.966%2097.3616%20189.039%2098.2746%20191.143%2099.1003C189.424%20102.671%20188.267%20106.461%20186.886%20110.161C183.339%20119.663%20179.88%20129.197%20176.397%20138.724C176.164%20139.36%20175.74%20139.788%20175.196%20140.136C175.129%20140.224%20175.038%20140.345%20174.959%20140.328C172.961%20139.893%20170.935%20139.527%20169.289%20138.167C171.618%20131.814%20173.946%20125.461%20176.275%20119.107C176.736%20118.24%20176.372%20117.273%20176.588%20116.249C176.731%20116.579%20176.825%20116.794%20176.997%20117.189C179.619%20110.314%20182.184%20103.586%20184.75%2096.8584Z'%20fill='%2359616E'/%3e%3cpath%20d='M192.733%2065.6674C193.387%2065.0674%20194.027%2064.4532%20194.696%2063.8716C195.303%2063.3439%20195.966%2062.9331%20196.831%2063.2144C196.872%2063.8037%20196.727%2064.3188%20196.245%2064.7006C194.578%2065.4825%20193.858%2066.9105%20193.268%2068.5879C190.895%2075.3298%20188.425%2082.0382%20185.813%2088.6924C185.327%2089.9297%20184.823%2091.1699%20185.56%2092.4901C185.68%2092.7068%20185.721%2092.9453%20185.752%2093.1866C185.788%2093.902%20185.578%2094.5265%20185.066%2095.0388C183.366%2093.4192%20183.135%2091.5679%20183.964%2089.4005C186.977%2081.5232%20190.035%2073.6615%20192.733%2065.6674Z'%20fill='%23F1F8F9'/%3e%3cpath%20d='M185.327%2092.7873C184.158%2091.6707%20184.728%2090.4033%20185.147%2089.2571C186.651%2085.1406%20188.268%2081.0655%20189.798%2076.9581C191.014%2073.693%20192.139%2070.3939%20193.356%2067.1294C193.847%2065.8135%20194.492%2064.5676%20196.246%2064.7013C195%2068.0983%20193.753%2071.4954%20192.507%2074.8926C191.642%2076.4134%20191.256%2078.1267%20190.565%2079.7178C189.216%2083.8147%20187.17%2087.6539%20186.082%2091.848C185.976%2092.2592%20185.799%2092.6521%20185.327%2092.7873Z'%20fill='%239DB8CA'/%3e%3cpath%20d='M185.324%2092.7866C186.172%2090.4844%20186.873%2088.1308%20187.885%2085.885C188.81%2083.8339%20189.614%2081.7281%20190.47%2079.6465C190.62%2079.7787%20190.644%2079.9307%20190.542%2080.1026C189.193%2084.5543%20187.357%2088.8279%20185.751%2093.1863C185.609%2093.0533%20185.467%2092.92%20185.324%2092.7866Z'%20fill='%2359616E'/%3e%3cpath%20d='M190.544%2080.1029C190.52%2079.951%20190.497%2079.7991%20190.473%2079.6471C191.065%2078.0258%20191.342%2076.2696%20192.506%2074.8926C191.976%2076.6758%20191.373%2078.432%20190.544%2080.1029Z'%20fill='%231B2028'/%3e%3cpath%20d='M102.58%20116.318C94.3068%20116.315%2086.0335%20116.281%2077.7611%20116.346C76.2143%20116.359%2075.7516%20115.868%2075.7784%20114.344C75.8505%20110.25%2075.7898%20110.249%2079.9222%20110.248C92.1196%20110.246%20104.317%20110.264%20116.514%20110.228C120.038%20110.218%20123.562%20110.029%20127.086%20109.963C129.104%20109.926%20129.317%20110.166%20129.331%20112.102C129.363%20116.319%20129.363%20116.32%20125.171%20116.32C117.641%20116.32%20110.11%20116.32%20102.58%20116.318Z'%20fill='%23B1DFF8'/%3e%3cpath%20d='M102.524%2071.7366C94.3001%2071.7366%2086.0767%2071.7378%2077.8533%2071.7356C75.8163%2071.7351%2075.8163%2071.7299%2075.8099%2069.6978C75.7972%2065.6658%2075.7972%2065.6664%2079.833%2065.6655C95.6432%2065.6617%20111.453%2065.6574%20127.264%2065.6533C129.343%2065.6528%20129.343%2065.6527%20129.343%2067.7244C129.344%2071.7294%20129.344%2071.7297%20125.284%2071.7298C117.697%2071.73%20110.11%2071.7299%20102.524%2071.7299C102.524%2071.7322%20102.524%2071.7344%20102.524%2071.7366Z'%20fill='%23B0DDF8'/%3e%3cpath%20d='M102.732%20132.868C110.903%20132.868%20119.076%20132.904%20127.247%20132.837C128.801%20132.825%20129.409%20133.193%20129.369%20134.864C129.272%20138.934%20129.349%20138.936%20125.338%20138.935C109.63%20138.933%2093.9233%20138.931%2078.2161%20138.929C75.8099%20138.929%2075.7904%20138.929%2075.8125%20136.611C75.8535%20132.3%2075.2204%20132.898%2079.4893%20132.884C87.2366%20132.857%2094.9842%20132.876%20102.732%20132.876C102.732%20132.874%20102.732%20132.871%20102.732%20132.868Z'%20fill='%23B0DFF8'/%3e%3cpath%20d='M102.527%2087.6368C110.807%2087.6368%20119.087%2087.6702%20127.366%2087.6067C128.893%2087.5949%20129.393%2088.0471%20129.364%2089.5924C129.288%2093.7153%20129.352%2093.7142%20125.228%2093.7135C109.517%2093.7109%2093.8067%2093.71%2078.0963%2093.7079C75.8083%2093.7076%2075.7871%2093.7057%2075.8119%2091.4336C75.8599%2087.0479%2075.1893%2087.6686%2079.5985%2087.6528C87.2413%2087.6253%2094.8843%2087.6452%20102.527%2087.6452C102.527%2087.6424%20102.527%2087.6396%20102.527%2087.6368Z'%20fill='%23B2DFF9'/%3e%3cpath%20d='M102.558%20155.163C110.83%20155.162%20119.103%20155.196%20127.375%20155.13C128.843%20155.119%20129.426%20155.426%20129.367%20157.027C129.2%20161.546%20129.975%20160.901%20125.488%20160.908C109.633%20160.931%2093.7777%20160.915%2077.9224%20160.912C75.8128%20160.912%2075.8128%20160.908%2075.8091%20158.797C75.8028%20155.162%2075.8028%20155.163%2079.4906%20155.164C87.1797%20155.165%2094.8688%20155.164%20102.558%20155.163Z'%20fill='%23AFDEF8'/%3e%3cpath%20d='M151.299%2051.288C150.67%2051.3344%20150.042%2051.4213%20149.413%2051.4214C125.242%2051.4218%20101.07%2051.4111%2076.8988%2051.4172C75.6843%2051.4176%2074.4698%2051.5548%2073.2553%2051.6282C72.4271%2051.6131%2071.849%2051.4181%2071.9536%2050.3621C72.0571%2049.317%2072.0079%2048.2568%2072.0257%2047.2031C72.5459%2047.5441%2073.1316%2047.5126%2073.7164%2047.5125C99.2729%2047.5068%20124.829%2047.5082%20150.386%2047.4743C151.077%2047.4734%20151.331%2047.5417%20151.298%2048.2667C151.252%2049.2717%20151.294%2050.2807%20151.299%2051.288Z'%20fill='%23768090'/%3e%3cpath%20d='M78.0279%20204.228C72.8842%20204.228%2067.7404%20204.203%2062.5971%20204.249C61.5098%20204.258%2061.0999%20203.958%2061.1349%20202.819C61.2478%20199.133%2060.6971%20199.792%2064.1306%20199.78C73.8345%20199.745%2083.5386%20199.764%2093.2426%20199.766C95.1432%20199.767%2095.1631%20199.876%2095.2521%20202.087C95.3107%20203.545%2095.0658%20204.314%2093.2989%20204.274C88.2108%20204.162%2083.1186%20204.235%2078.0279%20204.235C78.0279%20204.232%2078.0279%20204.23%2078.0279%20204.228Z'%20fill='%23AEDFF9'/%3e%3cpath%20d='M176.447%20140.654C178.389%20141.337%20180.331%20142.02%20182.273%20142.703C180.692%20147.624%20178.815%20152.436%20176.92%20157.241C176.588%20158.083%20176.358%20158.937%20176.165%20159.811C175.71%20160.648%20176.246%20162.159%20174.566%20162.164C172.622%20161.217%20170.374%20161.088%20168.514%20159.915C168.222%20159.195%20168.567%20158.553%20168.814%20157.929C170.732%20153.097%20172.456%20148.195%20174.21%20143.304C174.426%20142.704%20174.742%20142.147%20174.976%20141.557C175.248%20140.871%20175.708%20140.551%20176.447%20140.654Z'%20fill='%23768090'/%3e%3cpath%20d='M176.443%20140.653C175.04%20141.195%20174.968%20142.606%20174.542%20143.723C172.489%20149.104%20170.514%20154.515%20168.511%20159.915C166.842%20159.412%20165.198%20158.785%20163.496%20158.447C162.235%20158.197%20162.241%20157.539%20162.541%20156.656C163.203%20154.701%20163.898%20152.756%20164.61%20150.818C166.16%20146.595%20167.73%20142.379%20169.292%20138.162C171.26%20138.82%20173.229%20139.477%20175.198%20140.133C175.613%20140.307%20176.028%20140.48%20176.443%20140.653Z'%20fill='%23AEB8CA'/%3e%3cpath%20d='M76.3708%20184.162C80.8237%20184.16%2085.2774%20184.203%2089.7292%20184.133C91.0139%20184.113%2091.5081%20184.435%2091.4582%20185.799C91.3364%20189.126%2091.7854%20188.598%2088.688%20188.608C80.1003%20188.634%2071.5123%20188.589%2062.9249%20188.647C61.5707%20188.656%2061.0492%20188.366%2061.1195%20186.905C61.2702%20183.769%2060.7447%20184.185%2063.8073%20184.17C67.995%20184.148%2072.183%20184.164%2076.3708%20184.162Z'%20fill='%23AFDFF9'/%3e%3cpath%20d='M174.559%20162.163C175.704%20161.795%20175.506%20160.515%20176.158%20159.811C176.368%20166.015%20176.21%20172.22%20176.141%20178.425C172.72%20182.697%20169.299%20186.969%20165.582%20191.61C166.231%20188.786%20166.768%20186.374%20167.342%20183.971C168.804%20177.86%20170.924%20171.939%20172.618%20165.895C172.751%20165.421%20173.206%20164.948%20172.753%20164.411C172.43%20163.472%20173.101%20163.3%20173.753%20163.112C174.214%20162.959%20174.369%20162.546%20174.559%20162.163Z'%20fill='%23AEB8CA'/%3e%3cpath%20d='M111.474%20146.877C125.273%20146.877%20139.072%20146.877%20152.871%20146.877C153.508%20146.877%20154.154%20146.811%20154.779%20146.897C155.317%20146.971%20156.285%20146.468%20156.271%20147.478C156.259%20148.357%20155.345%20148.154%20154.746%20148.154C125.82%20148.159%2096.8951%20148.157%2067.9699%20148.14C67.4613%20148.14%2066.6191%20148.437%2066.641%20147.502C66.6626%20146.586%2067.4994%20146.901%2068.0062%20146.901C82.4954%20146.884%2096.9846%20146.887%20111.474%20146.887C111.474%20146.884%20111.474%20146.88%20111.474%20146.877Z'%20fill='%23BDE3F5'/%3e%3cpath%20d='M111.327%2080.327C97.1538%2080.3248%2082.9802%2080.3248%2068.8066%2080.3248C68.5411%2080.3248%2068.2679%2080.3652%2068.012%2080.3159C67.5167%2080.2204%2066.648%2080.6547%2066.6806%2079.7224C66.7083%2078.9286%2067.5094%2079.0621%2068.0708%2079.0617C76.4582%2079.0547%2084.8456%2079.0585%2093.2329%2079.057C113.405%2079.0533%20133.577%2079.0483%20153.749%2079.0439C154.068%2079.0438%20154.391%2079.011%20154.704%2079.0514C155.219%2079.1179%20156.054%2078.7753%20156.017%2079.716C155.981%2080.627%20155.154%2080.3154%20154.645%2080.316C140.205%2080.3325%20125.766%2080.3292%20111.327%2080.327Z'%20fill='%23C1DEF3'/%3e%3cpath%20d='M111.516%20101.65C125.739%20101.65%20139.962%20101.65%20154.185%20101.65C154.557%20101.65%20154.929%20101.634%20155.299%20101.657C155.695%20101.681%20156.288%20101.533%20156.285%20102.142C156.282%20102.746%20155.686%20102.566%20155.294%20102.635C152.45%20103.137%20149.611%20102.754%20146.762%20102.657C138.705%20102.381%20130.646%20103.137%20122.596%20102.878C109.656%20102.461%2096.7179%20102.743%2083.7795%20102.638C78.6511%20102.597%2073.5222%20102.63%2068.3936%20102.626C67.9696%20102.626%2067.5446%20102.621%2067.1221%20102.59C66.8255%20102.569%2066.6276%20102.402%2066.6646%20102.077C66.6918%20101.838%2066.8644%20101.708%2067.0967%20101.697C67.5731%20101.675%2068.0504%20101.66%2068.5274%20101.66C82.8567%20101.658%2097.1861%20101.658%20111.515%20101.658C111.516%20101.656%20111.516%20101.653%20111.516%20101.65Z'%20fill='%23B9DEF3'/%3e%3cpath%20d='M66.5741%2086.6544C69.2421%2086.6344%2071.3425%2088.6732%2071.362%2091.3021C71.3829%2094.1203%2069.2874%2096.2356%2066.487%2096.223C63.9201%2096.2116%2061.8992%2094.1031%2061.8447%2091.3797C61.7929%2088.7926%2063.9129%2086.6744%2066.5741%2086.6544Z'%20fill='%23768090'/%3e%3cpath%20d='M71.738%2069.546C71.7078%2072.3345%2069.6821%2074.2837%2066.8462%2074.253C64.3412%2074.2259%2062.2365%2071.9871%2062.2227%2069.3347C62.2094%2066.7691%2064.4026%2064.6132%2067.021%2064.6182C69.6791%2064.6232%2071.7677%2066.8052%2071.738%2069.546Z'%20fill='%23768090'/%3e%3cpath%20d='M71.3435%20114.008C71.3042%20116.61%2069.094%20118.817%2066.5622%20118.783C64.0281%20118.75%2061.8624%20116.515%2061.8439%20113.915C61.8255%20111.346%2064.0298%20109.084%2066.5689%20109.065C69.1557%20109.045%2071.3835%20111.352%2071.3435%20114.008Z'%20fill='%23768090'/%3e%3cpath%20d='M66.4486%20141.188C63.8271%20141.147%2061.8107%20139.037%2061.8243%20136.35C61.8376%20133.715%2064.0957%20131.556%2066.7706%20131.623C69.2458%20131.684%2071.4055%20134.044%2071.3267%20136.602C71.2455%20139.241%2069.129%20141.23%2066.4486%20141.188Z'%20fill='%23768090'/%3e%3cpath%20d='M71.0651%20158.886C71.0751%20161.668%2068.9998%20163.761%2066.2661%20163.727C63.6738%20163.694%2061.7491%20161.601%2061.7344%20158.799C61.7208%20156.188%2063.7152%20154.176%2066.332%20154.162C68.9826%20154.148%2071.0555%20156.217%2071.0651%20158.886Z'%20fill='%23768090'/%3e%3cpath%20d='M164.707%20171.062C162.205%20170.486%20162.23%20170.488%20162.372%20168.073C162.543%20165.181%20162.667%20162.286%20162.816%20159.287C164.706%20159.851%20166.51%20160.342%20168.22%20161.124C168.643%20161.547%20168.66%20162.021%20168.47%20162.57C167.64%20164.961%20166.865%20167.372%20165.925%20169.723C165.691%20170.309%20165.437%20170.911%20164.707%20171.062Z'%20fill='%231B2028'/%3e%3cpath%20d='M164.705%20171.063C166.364%20167.923%20167.539%20164.612%20168.218%20161.125C170.102%20161.684%20172.043%20162.084%20173.757%20163.115C173.252%20163.416%20172.992%20163.906%20172.757%20164.414C171.274%20166.578%20169.784%20168.737%20168.315%20170.91C168.021%20171.345%20167.797%20171.826%20167.238%20171.986C166.269%20172.039%20165.398%20171.794%20164.664%20171.135L164.705%20171.063Z'%20fill='%231B2028'/%3e%3cpath%20d='M103.529%20199.762C104.057%20199.762%20104.585%20199.756%20105.112%20199.763C107.975%20199.801%20107.525%20199.402%20107.694%20202.278C107.791%20203.936%20107.23%20204.358%20105.653%20204.285C103.887%20204.203%20102.128%20204.772%20100.324%20204.289C99.6057%20204.097%2099.4083%20203.839%2099.3649%20203.152C99.1508%20199.761%2099.1333%20199.762%20103.529%20199.762Z'%20fill='%23AEB8CA'/%3e%3cpath%20d='M76.1611%20179.372C72.6115%20179.372%2069.0619%20179.378%2065.5123%20179.365C65.016%20179.364%2064.2495%20179.534%2064.2307%20178.827C64.2137%20178.181%2065.0142%20178.241%2065.4849%20178.162C66.8068%20177.939%2068.1088%20178.382%2069.4226%20178.392C73.8727%20178.426%2078.3231%20178.415%2082.7732%20178.403C84.0384%20178.399%2085.2755%20177.971%2086.5553%20178.121C87.1497%20178.19%2088.0732%20177.906%2088.1115%20178.762C88.1567%20179.773%2087.1734%20179.349%2086.6506%20179.355C83.1545%20179.397%2079.6576%20179.377%2076.161%20179.377C76.1611%20179.376%2076.1611%20179.374%2076.1611%20179.372Z'%20fill='%23B8E8F9'/%3e%3cpath%20d='M75.1797%20194.684C71.9492%20194.685%2068.7185%20194.697%2065.4881%20194.671C65.0154%20194.667%2064.2089%20194.959%2064.166%20194.239C64.1191%20193.455%2064.9403%20193.73%2065.399%20193.728C71.913%20193.709%2078.4272%20193.708%2084.9413%20193.73C85.3952%20193.731%2086.2236%20193.432%2086.1858%20194.227C86.1513%20194.954%2085.3425%20194.665%2084.8714%20194.668C81.641%20194.695%2078.4103%20194.682%2075.1797%20194.684Z'%20fill='%23BBE7FA'/%3e%3cpath%20d='M164.663%20171.132C165.541%20171.356%20166.504%20171.325%20167.238%20171.983C165.981%20174.023%20164.724%20176.064%20163.468%20178.104C163.059%20178.301%20162.874%20178.072%20162.75%20177.726C163.166%20175.464%20164.332%20173.419%20164.663%20171.132Z'%20fill='%23AEB7CA'/%3e%3cpath%20d='M101.374%20193.708C102.586%20193.708%20103.798%20193.696%20105.009%20193.714C105.401%20193.72%20105.948%20193.589%20105.99%20194.208C106.025%20194.727%20105.616%20194.955%20105.157%20194.957C102.478%20194.965%2099.7928%20195.148%2097.1314%20194.667C96.8536%20194.617%2096.5957%20194.529%2096.5977%20194.208C96.6003%20193.784%2096.9408%20193.724%2097.264%20193.722C98.6338%20193.713%20100.004%20193.718%20101.374%20193.718C101.374%20193.714%20101.374%20193.711%20101.374%20193.708Z'%20fill='%23C0E6F9'/%3e%3cpath%20d='M162.752%20177.727C162.991%20177.853%20163.231%20177.979%20163.47%20178.105C162.804%20179.265%20162.138%20180.425%20161.472%20181.584C161.376%20181.551%20161.28%20181.518%20161.184%20181.485C161.241%20180.562%20161.373%20179.637%20161.337%20178.718C161.292%20177.556%20161.831%20177.415%20162.752%20177.727Z'%20fill='%231B2028'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2660_357150'%3e%3crect%20width='241.15'%20height='260'%20fill='white'%20transform='translate(0.425781)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", w8 = ({ tasks: u, setTasks: l, fetchNextPage: i, completedrefresh: g, triggerOngoingRefresh: v }) => {
  W(!1);
  const [x, E] = W(1), S = st(null), [A, F] = W(!0), $ = async (V) => {
    try {
      (await Ct.patch(
        `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks/${V}`,
        { markDone: !1 }
      )).status === 200 && (nn.success("Task marked as ongoing!"), l((X) => X.filter((ye) => ye._id !== V)), v());
    } catch {
      nn.error("Failed to mark task as ongoing");
    }
  }, j = () => {
    if (S.current) {
      const { scrollTop: V, scrollHeight: J, clientHeight: X } = S.current;
      V + X >= J - 1 && (i(x + 1), E(x + 1));
    }
  };
  return mn(() => (F(!0), setTimeout(() => {
    F(!1);
  }, 1500), S.current && u.length > 0 && S.current.addEventListener("scroll", j), () => {
    S.current && u.length > 0 && S.current.removeEventListener("scroll", j);
  }), [x, u]), /* @__PURE__ */ c.jsx("div", { className: "p-5 bg-white w-full", children: /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: S,
      className: u.length > 0 ? "max-h-[300px] overflow-y-auto pr-2" : "",
      children: u.length > 0 ? u.map((V, J) => /* @__PURE__ */ c.jsxs(
        "div",
        {
          className: "flex justify-between items-center p-3 mb-2 rounded-lg bg-gray-100 shadow-sm relative",
          children: [
            /* @__PURE__ */ c.jsx("div", { className: "absolute left-0 top-0 bottom-0 w-1 bg-gray-300 rounded-l-lg" }),
            /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col justify-start gap-1 w-1/2", children: [
              /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-2", children: [
                V.user_id === V.assigner_id || V.user_id === V.assignee_id ? /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    onClick: () => $(V._id),
                    className: "w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex justify-center items-center cursor-pointer",
                    children: /* @__PURE__ */ c.jsx("div", { className: "w-3 h-3 bg-gray-400 rounded-full" })
                  }
                ) : /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    className: "w-6 h-6 "
                  }
                ),
                /* @__PURE__ */ c.jsx(
                  "div",
                  {
                    className: "font-semibold line-through",
                    title: V.name,
                    children: V.name.length > 20 ? `${V.name.substring(0, 20)}...` : V.name
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsxs("div", { className: "text-gray-500 ml-8", children: [
                "Completed on ",
                new Date(V.dueDate).toLocaleDateString(),
                " at",
                " ",
                new Date(V.dueDate).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit"
                })
              ] })
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "flex justify-between items-center w-full", children: /* @__PURE__ */ c.jsxs("div", { className: "flex items-center gap-28 w-1/2", children: [
              /* @__PURE__ */ c.jsx(li, { className: "px-4 py-1 rounded-full border border-gray-300 text-gray-900 bg-gray-100 text-center", children: V.assigner || "Unknown" }),
              /* @__PURE__ */ c.jsx(li, { className: "px-4 py-1 rounded-full border border-gray-300 text-gray-900 bg-gray-100 text-center", children: V.assignee || "Unknown" }),
              /* @__PURE__ */ c.jsx(li, { className: "px-4 py-1 rounded-full border border-gray-300 text-gray-900 bg-gray-100 text-center", children: V.team || "No Team" })
            ] }) })
          ]
        },
        J
      )) : /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col items-center justify-center mt-16", children: [
        /* @__PURE__ */ c.jsx(
          "img",
          {
            src: y8,
            alt: "No Completed Tasks",
            className: "mb-4",
            style: {
              width: "463.878px",
              height: "259.975px",
              opacity: 0.9
            }
          }
        ),
        /* @__PURE__ */ c.jsx("p", { className: "text-lg font-semibold text-center", children: "No Completed Tasks" }),
        /* @__PURE__ */ c.jsx("p", { className: "text-sm text-center text-gray-500", children: "Tasks that have been marked completed will appear here." })
      ] })
    }
  ) });
}, O8 = ({ token: u }) => {
  mn(() => {
    localStorage.setItem("sessionToken", u);
  }, []);
  const l = "6752c051f2aa54277e047a99", i = "admin", [g, v] = W([]), [x, E] = W([]), [S, A] = W([]), [F, $] = W(0), [j, V] = W(0), [J, X] = W(!0), [ye, re] = W(!0), [K, ue] = W([]), [we, De] = W([]), [he, We] = W(""), [be, Ge] = W(l), [Fe, me] = W(""), [ie, tn] = W(null), [ce, z] = W([]), [L, M] = W(!1), [Z, y] = W(!1), [H, I] = W(!1), [k, O] = W(!1), [P, q] = W(!1), [ge, Pe] = W(!1), [Ue, ze] = W(null);
  W([]), W(0), W(!0), W(!1);
  const [$e, Re] = W(1), [R, ve] = W(!1), je = () => {
    console.log("Task created, toggling taskCreated state"), O((D) => !D);
  }, Xe = () => {
    q((D) => !D);
  };
  console.log(g), console.log({ assigneeList: K });
  const yn = async () => {
    var D, Le;
    try {
      const Se = await xt.get(
        "https://walrus-app-md9cy.ondigitalocean.app/api/v1/teams/names?page=0"
      ), Ye = Se.data.data.teams;
      v(Ye);
      const qe = Ye.flatMap((Oe) => Oe.members || []), Ve = Array.from(
        new Map(qe.map((Oe) => [Oe._id, Oe])).values()
        // Ensure unique members by ID
      );
      (Le = (D = Se.data) == null ? void 0 : D.data) != null && Le.moreToCome && ve(Se.data.data.moreToCome), ue(Ve), De(Ve);
    } catch (Se) {
      console.error("Error fetching user teams:", Se), nn.error("Failed to fetch user teams.");
    }
  }, an = async () => {
    var D, Le;
    if (R)
      try {
        const Se = await xt.get(
          `https://walrus-app-md9cy.ondigitalocean.app/api/v1/teams/names?page=${$e}`
        ), Ye = Se.data.data.teams;
        v((Oe) => [...Oe, ...Ye]);
        const qe = Ye.flatMap((Oe) => Oe.members || []), Ve = Array.from(
          new Map(qe.map((Oe) => [Oe._id, Oe])).values()
        );
        ue((Oe) => [
          ...Oe,
          ...Ve
        ]), De((Oe) => [
          ...Oe,
          ...Ve
        ]), (Le = (D = Se.data) == null ? void 0 : D.data) != null && Le.moreToCome ? Re((Oe) => Oe + 1) : ve(!1);
      } catch (Se) {
        console.error("Error fetching user teams:", Se), nn.error("Failed to fetch more teams.");
      }
  };
  mn(() => {
    E([]), A([]), $(0), V(0), cn(!0, 0), Vn(!0, 0);
  }, [he, be, Fe, ie, k, P]);
  const cn = async (D = !1, Le = 0) => {
    try {
      const Se = kn(), Ye = Le <= 0 ? `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks?${Se}` : `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks?${Se}${Le > 0 ? `&page=${Le}` : ""}`, qe = await xt.get(Ye), Ve = qe.data.data.tasks || [];
      E((Oe) => D ? Ve : [...Oe, ...Ve]), X(qe.data.data.moreToCome), $(Le);
    } catch (Se) {
      console.error("Error fetching ongoing tasks:", Se), nn.error("Failed to fetch ongoing tasks.");
    }
  }, Vn = async (D = !1, Le = 0) => {
    try {
      const Se = kn(), Ye = Le === 0 ? `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks?${Se}&completed=true` : `https://walrus-app-md9cy.ondigitalocean.app/api/v1/tasks?${Se}&completed=true&page=${Le}`, qe = await xt.get(Ye), Ve = qe.data.data.tasks || [];
      A((Oe) => D ? Ve : [...Oe, ...Ve]), re(qe.data.data.moreToCome), V(Le);
    } catch (Se) {
      console.error("Error fetching completed tasks:", Se), nn.error("Failed to fetch completed tasks.");
    }
  }, kn = () => {
    const D = {};
    return ie == "teamFilter" ? D.teamFilter = "true" : ie == "onlySelf" ? D.onlySelf = "true" : Fe && (D.team = Fe), he && (D.assigner = he), be && (D.assignee = be), new URLSearchParams(D).toString();
  };
  mn(() => {
    console.log("fetchUserTeams useEffect", {}), yn();
  }, [i]);
  const at = () => {
    if (J) {
      const D = F + 1;
      $(D), cn(!1, D);
    }
  }, wn = () => {
    if (ye) {
      const D = j + 1;
      V(D), Vn(!1, D);
    }
  }, Gn = () => {
    cn(!0, 0);
  }, _t = () => {
    Vn(!0, 0);
  };
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(
      _8,
      {
        assigner: he,
        setAssigner: We,
        assignee: be,
        setAssignee: Ge,
        team: Fe,
        setTeam: me,
        onlySelf: ie,
        setOnlySelf: tn,
        userTeams: g,
        availableUsers: ce,
        setAvailableUsers: z,
        userId: l,
        assigneeList: K,
        setAssigneeList: ue,
        assignerList: we,
        setAssignerList: De,
        fetchMoreUserTeams: an
      }
    ),
    /* @__PURE__ */ c.jsx(
      Pa,
      {
        isVisible: H,
        handleCancel: () => I(!1),
        onTaskCreated: je
      }
    ),
    /* @__PURE__ */ c.jsx(
      $a,
      {
        visible: ge,
        onClose: () => Pe(!1),
        task: Ue,
        onTaskUpdated: Xe
      }
    ),
    /* @__PURE__ */ c.jsx("div", { className: "p-5", children: /* @__PURE__ */ c.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ c.jsx("div", { className: "mb-10 h-3/5", children: /* @__PURE__ */ c.jsx(
        C8,
        {
          tasks: x.map((D) => {
            var Le, Se, Ye, qe, Ve, Oe;
            return {
              _id: D == null ? void 0 : D._id,
              name: D == null ? void 0 : D.name,
              description: D == null ? void 0 : D.description,
              dueDate: D == null ? void 0 : D.dueDate,
              priority: D == null ? void 0 : D.priority,
              assigner: ((Le = D == null ? void 0 : D.assigner) == null ? void 0 : Le.name) || "Unassigned",
              assigner_id: ((Se = D == null ? void 0 : D.assigner) == null ? void 0 : Se._id) || null,
              assignee: ((Ye = D == null ? void 0 : D.assignee) == null ? void 0 : Ye.name) || "Unassigned",
              assignee_id: ((qe = D == null ? void 0 : D.assignee) == null ? void 0 : qe._id) || null,
              user_id: l,
              team: ((Ve = D.team) == null ? void 0 : Ve.name) || "Unassigned",
              team_id: ((Oe = D.team) == null ? void 0 : Oe._id) || null
            };
          }),
          setTasks: E,
          fetchNextPage: at,
          ongoingRefresh: L,
          triggerCompletedRefresh: _t,
          onTaskCreated: je
        }
      ) }),
      /* @__PURE__ */ c.jsx("div", { className: "h-2/5", children: /* @__PURE__ */ c.jsx(
        w8,
        {
          tasks: S.map((D) => {
            var Le, Se, Ye, qe, Ve;
            return {
              _id: D == null ? void 0 : D._id,
              name: D == null ? void 0 : D.name,
              description: D == null ? void 0 : D.description,
              dueDate: D == null ? void 0 : D.dueDate,
              priority: D == null ? void 0 : D.priority,
              assigner: ((Le = D == null ? void 0 : D.assigner) == null ? void 0 : Le.name) || "Unassigned",
              assigner_id: ((Se = D == null ? void 0 : D.assigner) == null ? void 0 : Se._id) || null,
              assignee: ((Ye = D == null ? void 0 : D.assignee) == null ? void 0 : Ye.name) || "Unassigned",
              assignee_id: ((qe = D == null ? void 0 : D.assignee) == null ? void 0 : qe._id) || null,
              user_id: l,
              team: ((Ve = D.team) == null ? void 0 : Ve.name) || "Unassigned"
            };
          }),
          setTasks: A,
          fetchNextPage: wn,
          completedrefresh: Z,
          triggerOngoingRefresh: Gn
        }
      ) })
    ] }) })
  ] });
};
export {
  O8 as default
};
