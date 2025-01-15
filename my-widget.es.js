import we, { useState as fe } from "react";
var k = { exports: {} }, C = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Ce() {
  if (de) return C;
  de = 1;
  var i = Symbol.for("react.transitional.element"), T = Symbol.for("react.fragment");
  function E(x, s, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      c = {};
      for (var g in s)
        g !== "key" && (c[g] = s[g]);
    } else c = s;
    return s = c.ref, {
      $$typeof: i,
      type: x,
      key: f,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return C.Fragment = T, C.jsx = E, C.jsxs = E, C;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function Ae() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Y:
          return "Fragment";
        case he:
          return "Portal";
        case L:
          return "Profiler";
        case F:
          return "StrictMode";
        case W:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case I:
            return (e.displayName || "Context") + ".Provider";
          case Z:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case U:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case q:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function T(e) {
      return "" + e;
    }
    function E(e) {
      try {
        T(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), T(e);
      }
    }
    function x() {
    }
    function s() {
      if (j === 0) {
        D = console.log, ee = console.info, re = console.warn, te = console.error, oe = console.group, ne = console.groupCollapsed, ae = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: x,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      j++;
    }
    function c() {
      if (j--, j === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: h({}, e, { value: D }),
          info: h({}, e, { value: ee }),
          warn: h({}, e, { value: re }),
          error: h({}, e, { value: te }),
          group: h({}, e, { value: oe }),
          groupCollapsed: h({}, e, { value: ne }),
          groupEnd: h({}, e, { value: ae })
        });
      }
      0 > j && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function f(e) {
      if (z === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          z = r && r[1] || "", le = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + z + e + le;
    }
    function g(e, r) {
      if (!e || V) return "";
      var t = G.get(e);
      if (t !== void 0) return t;
      V = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = _.H, _.H = null, s();
      try {
        var l = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var b = function() {
                  throw Error();
                };
                if (Object.defineProperty(b.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(b, []);
                  } catch (v) {
                    var N = v;
                  }
                  Reflect.construct(e, [], b);
                } else {
                  try {
                    b.call();
                  } catch (v) {
                    N = v;
                  }
                  e.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (v) {
                  N = v;
                }
                (b = e()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (v) {
              if (v && N && typeof v.stack == "string")
                return [v.stack, N.stack];
            }
            return [null, null];
          }
        };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          l.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          l.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = l.DetermineComponentFrameRoot(), d = o[0], y = o[1];
        if (d && y) {
          var u = d.split(`
`), R = y.split(`
`);
          for (o = a = 0; a < u.length && !u[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; o < R.length && !R[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (a === u.length || o === R.length)
            for (a = u.length - 1, o = R.length - 1; 1 <= a && 0 <= o && u[a] !== R[o]; )
              o--;
          for (; 1 <= a && 0 <= o; a--, o--)
            if (u[a] !== R[o]) {
              if (a !== 1 || o !== 1)
                do
                  if (a--, o--, 0 > o || u[a] !== R[o]) {
                    var w = `
` + u[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, w), w;
                  }
                while (1 <= a && 0 <= o);
              break;
            }
        }
      } finally {
        V = !1, _.H = n, c(), Error.prepareStackTrace = t;
      }
      return u = (u = e ? e.displayName || e.name : "") ? f(u) : "", typeof e == "function" && G.set(e, u), u;
    }
    function p(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return g(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return f(e);
      switch (e) {
        case W:
          return f("Suspense");
        case $:
          return f("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return e = g(e.render, !1), e;
          case U:
            return p(e.type);
          case q:
            r = e._payload, e = e._init;
            try {
              return p(e(r));
            } catch {
            }
        }
      return "";
    }
    function S() {
      var e = _.A;
      return e === null ? null : e.getOwner();
    }
    function ge(e) {
      if (K.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function be(e, r) {
      function t() {
        ue || (ue = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function me() {
      var e = i(this.type);
      return se[e] || (se[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function xe(e, r, t, n, l, a) {
      return t = a.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: a,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: me
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function H(e, r, t, n, l, a) {
      if (typeof e == "string" || typeof e == "function" || e === Y || e === L || e === F || e === W || e === $ || e === Re || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === U || e.$$typeof === I || e.$$typeof === Z || e.$$typeof === M || e.$$typeof === ye || e.getModuleId !== void 0)) {
        var o = r.children;
        if (o !== void 0)
          if (n)
            if (J(o)) {
              for (n = 0; n < o.length; n++)
                X(o[n], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else X(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : J(e) ? n = "array" : e !== void 0 && e.$$typeof === P ? (n = "<" + (i(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          o
        );
      if (K.call(r, "key")) {
        o = i(e);
        var d = Object.keys(r).filter(function(u) {
          return u !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", ie[o + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          d,
          o
        ), ie[o + n] = !0);
      }
      if (o = null, t !== void 0 && (E(t), o = "" + t), ge(r) && (E(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else t = r;
      return o && be(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), xe(e, o, a, l, S(), t);
    }
    function X(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== je) {
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            O(n) && B(n, r);
          }
        else if (O(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = Q && e[Q] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            O(e.value) && B(e.value, r);
      }
    }
    function O(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function B(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = pe(r), !ce[r])) {
        ce[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== S() && (t = null, typeof e._owner.tag == "number" ? t = i(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var n = _.getCurrentStack;
        _.getCurrentStack = function() {
          var l = p(e.type);
          return n && (l += n() || ""), l;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), _.getCurrentStack = n;
      }
    }
    function pe(e) {
      var r = "", t = S();
      return t && (t = i(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = i(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var _e = we, P = Symbol.for("react.transitional.element"), he = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), I = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), Re = Symbol.for("react.offscreen"), Q = Symbol.iterator, Te = Symbol.for("react.client.reference"), _ = _e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, h = Object.assign, ye = Symbol.for("react.client.reference"), J = Array.isArray, j = 0, D, ee, re, te, oe, ne, ae;
    x.__reactDisabledLog = !0;
    var z, le, V = !1, G = new (typeof WeakMap == "function" ? WeakMap : Map)(), je = Symbol.for("react.client.reference"), ue, se = {}, ie = {}, ce = {};
    A.Fragment = Y, A.jsx = function(e, r, t, n, l) {
      return H(e, r, t, !1, n, l);
    }, A.jsxs = function(e, r, t, n, l) {
      return H(e, r, t, !0, n, l);
    };
  }()), A;
}
var Ee;
function Ne() {
  return Ee || (Ee = 1, process.env.NODE_ENV === "production" ? k.exports = Ce() : k.exports = Ae()), k.exports;
}
var m = Ne();
const Se = ({ name: i, age: T, onSendData: E }) => {
  const [x, s] = fe(""), [c, f] = fe(""), g = () => {
    E && E({ name: x, age: c });
  };
  return /* @__PURE__ */ m.jsxs("div", { style: { padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }, children: [
    /* @__PURE__ */ m.jsx("h3", { children: "Widget" }),
    /* @__PURE__ */ m.jsxs("p", { children: [
      "Received Name: ",
      i
    ] }),
    /* @__PURE__ */ m.jsxs("p", { children: [
      "Received Age: ",
      T
    ] }),
    /* @__PURE__ */ m.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ m.jsx(
        "input",
        {
          type: "text",
          placeholder: "Enter Name",
          value: x,
          onChange: (p) => s(p.target.value),
          style: { marginRight: "10px" }
        }
      ),
      /* @__PURE__ */ m.jsx(
        "input",
        {
          type: "number",
          placeholder: "Enter Age",
          value: c,
          onChange: (p) => f(p.target.value),
          style: { marginRight: "10px" }
        }
      ),
      /* @__PURE__ */ m.jsx("button", { onClick: g, children: "Send Data" })
    ] })
  ] });
};
export {
  Se as default
};
