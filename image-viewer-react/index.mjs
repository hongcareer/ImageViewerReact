import Je, { useRef as tt, useState as Ot, useEffect as wr } from "react";
import Xe from "react-dom";
var pe = { exports: {} }, At = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function xr() {
  if (Ce)
    return At;
  Ce = 1;
  var o = Je, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function n(a, c, l) {
    var u, f = {}, v = null, y = null;
    l !== void 0 && (v = "" + l), c.key !== void 0 && (v = "" + c.key), c.ref !== void 0 && (y = c.ref);
    for (u in c)
      r.call(c, u) && !s.hasOwnProperty(u) && (f[u] = c[u]);
    if (a && a.defaultProps)
      for (u in c = a.defaultProps, c)
        f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: t, type: a, key: v, ref: y, props: f, _owner: i.current };
  }
  return At.Fragment = e, At.jsx = n, At.jsxs = n, At;
}
var Mt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function Ar() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Je, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), n = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m = Symbol.iterator, O = "@@iterator";
    function U(h) {
      if (h === null || typeof h != "object")
        return null;
      var p = m && h[m] || h[O];
      return typeof p == "function" ? p : null;
    }
    var M = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(h) {
      {
        for (var p = arguments.length, g = new Array(p > 1 ? p - 1 : 0), T = 1; T < p; T++)
          g[T - 1] = arguments[T];
        J("error", h, g);
      }
    }
    function J(h, p, g) {
      {
        var T = M.ReactDebugCurrentFrame, P = T.getStackAddendum();
        P !== "" && (p += "%s", g = g.concat([P]));
        var E = g.map(function(b) {
          return String(b);
        });
        E.unshift("Warning: " + p), Function.prototype.apply.call(console[h], console, E);
      }
    }
    var Gt = !1, ut = !1, Tt = !1, Yt = !1, Qt = !1, Bt;
    Bt = Symbol.for("react.module.reference");
    function Zt(h) {
      return !!(typeof h == "string" || typeof h == "function" || h === r || h === s || Qt || h === i || h === l || h === u || Yt || h === y || Gt || ut || Tt || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === f || h.$$typeof === n || h.$$typeof === a || h.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      h.$$typeof === Bt || h.getModuleId !== void 0));
    }
    function Jt(h, p, g) {
      var T = h.displayName;
      if (T)
        return T;
      var P = p.displayName || p.name || "";
      return P !== "" ? g + "(" + P + ")" : g;
    }
    function st(h) {
      return h.displayName || "Context";
    }
    function j(h) {
      if (h == null)
        return null;
      if (typeof h.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
        return h.displayName || h.name || null;
      if (typeof h == "string")
        return h;
      switch (h) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case a:
            var p = h;
            return st(p) + ".Consumer";
          case n:
            var g = h;
            return st(g._context) + ".Provider";
          case c:
            return Jt(h, h.render, "ForwardRef");
          case f:
            var T = h.displayName || null;
            return T !== null ? T : j(h.type) || "Memo";
          case v: {
            var P = h, E = P._payload, b = P._init;
            try {
              return j(b(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, nt = 0, G, at, lt, Dt, A, _, St;
    function kt() {
    }
    kt.__reactDisabledLog = !0;
    function bt() {
      {
        if (nt === 0) {
          G = console.log, at = console.info, lt = console.warn, Dt = console.error, A = console.group, _ = console.groupCollapsed, St = console.groupEnd;
          var h = {
            configurable: !0,
            enumerable: !0,
            value: kt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: h,
            log: h,
            warn: h,
            error: h,
            group: h,
            groupCollapsed: h,
            groupEnd: h
          });
        }
        nt++;
      }
    }
    function _t() {
      {
        if (nt--, nt === 0) {
          var h = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, h, {
              value: G
            }),
            info: K({}, h, {
              value: at
            }),
            warn: K({}, h, {
              value: lt
            }),
            error: K({}, h, {
              value: Dt
            }),
            group: K({}, h, {
              value: A
            }),
            groupCollapsed: K({}, h, {
              value: _
            }),
            groupEnd: K({}, h, {
              value: St
            })
          });
        }
        nt < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pt = M.ReactCurrentDispatcher, Et;
    function pt(h, p, g) {
      {
        if (Et === void 0)
          try {
            throw Error();
          } catch (P) {
            var T = P.stack.trim().match(/\n( *(at )?)/);
            Et = T && T[1] || "";
          }
        return `
` + Et + h;
      }
    }
    var wt = !1, d;
    {
      var S = typeof WeakMap == "function" ? WeakMap : Map;
      d = new S();
    }
    function w(h, p) {
      if (!h || wt)
        return "";
      {
        var g = d.get(h);
        if (g !== void 0)
          return g;
      }
      var T;
      wt = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = Pt.current, Pt.current = null, bt();
      try {
        if (p) {
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
            } catch ($) {
              T = $;
            }
            Reflect.construct(h, [], b);
          } else {
            try {
              b.call();
            } catch ($) {
              T = $;
            }
            h.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            T = $;
          }
          h();
        }
      } catch ($) {
        if ($ && T && typeof $.stack == "string") {
          for (var k = $.stack.split(`
`), z = T.stack.split(`
`), B = k.length - 1, X = z.length - 1; B >= 1 && X >= 0 && k[B] !== z[X]; )
            X--;
          for (; B >= 1 && X >= 0; B--, X--)
            if (k[B] !== z[X]) {
              if (B !== 1 || X !== 1)
                do
                  if (B--, X--, X < 0 || k[B] !== z[X]) {
                    var W = `
` + k[B].replace(" at new ", " at ");
                    return h.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", h.displayName)), typeof h == "function" && d.set(h, W), W;
                  }
                while (B >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        wt = !1, Pt.current = E, _t(), Error.prepareStackTrace = P;
      }
      var dt = h ? h.displayName || h.name : "", De = dt ? pt(dt) : "";
      return typeof h == "function" && d.set(h, De), De;
    }
    function H(h, p, g) {
      return w(h, !1);
    }
    function Q(h) {
      var p = h.prototype;
      return !!(p && p.isReactComponent);
    }
    function Y(h, p, g) {
      if (h == null)
        return "";
      if (typeof h == "function")
        return w(h, Q(h));
      if (typeof h == "string")
        return pt(h);
      switch (h) {
        case l:
          return pt("Suspense");
        case u:
          return pt("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case c:
            return H(h.render);
          case f:
            return Y(h.type, p, g);
          case v: {
            var T = h, P = T._payload, E = T._init;
            try {
              return Y(E(P), p, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Xt = Object.prototype.hasOwnProperty, Te = {}, Se = M.ReactDebugCurrentFrame;
    function Ct(h) {
      if (h) {
        var p = h._owner, g = Y(h.type, h._source, p ? p.type : null);
        Se.setExtraStackFrame(g);
      } else
        Se.setExtraStackFrame(null);
    }
    function sr(h, p, g, T, P) {
      {
        var E = Function.call.bind(Xt);
        for (var b in h)
          if (E(h, b)) {
            var k = void 0;
            try {
              if (typeof h[b] != "function") {
                var z = Error((T || "React class") + ": " + g + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              k = h[b](p, b, T, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              k = B;
            }
            k && !(k instanceof Error) && (Ct(P), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", g, b, typeof k), Ct(null)), k instanceof Error && !(k.message in Te) && (Te[k.message] = !0, Ct(P), D("Failed %s type: %s", g, k.message), Ct(null));
          }
      }
    }
    var nr = Array.isArray;
    function $t(h) {
      return nr(h);
    }
    function ar(h) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, g = p && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return g;
      }
    }
    function lr(h) {
      try {
        return ke(h), !1;
      } catch {
        return !0;
      }
    }
    function ke(h) {
      return "" + h;
    }
    function be(h) {
      if (lr(h))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(h)), ke(h);
    }
    var xt = M.ReactCurrentOwner, hr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Ee, te;
    te = {};
    function cr(h) {
      if (Xt.call(h, "ref")) {
        var p = Object.getOwnPropertyDescriptor(h, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return h.ref !== void 0;
    }
    function ur(h) {
      if (Xt.call(h, "key")) {
        var p = Object.getOwnPropertyDescriptor(h, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return h.key !== void 0;
    }
    function pr(h, p) {
      if (typeof h.ref == "string" && xt.current && p && xt.current.stateNode !== p) {
        var g = j(xt.current.type);
        te[g] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(xt.current.type), h.ref), te[g] = !0);
      }
    }
    function fr(h, p) {
      {
        var g = function() {
          Pe || (Pe = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        g.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function dr(h, p) {
      {
        var g = function() {
          Ee || (Ee = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        g.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var vr = function(h, p, g, T, P, E, b) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: h,
        key: p,
        ref: g,
        props: b,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function gr(h, p, g, T, P) {
      {
        var E, b = {}, k = null, z = null;
        g !== void 0 && (be(g), k = "" + g), ur(p) && (be(p.key), k = "" + p.key), cr(p) && (z = p.ref, pr(p, P));
        for (E in p)
          Xt.call(p, E) && !hr.hasOwnProperty(E) && (b[E] = p[E]);
        if (h && h.defaultProps) {
          var B = h.defaultProps;
          for (E in B)
            b[E] === void 0 && (b[E] = B[E]);
        }
        if (k || z) {
          var X = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          k && fr(b, X), z && dr(b, X);
        }
        return vr(h, k, z, P, T, xt.current, b);
      }
    }
    var ee = M.ReactCurrentOwner, we = M.ReactDebugCurrentFrame;
    function ft(h) {
      if (h) {
        var p = h._owner, g = Y(h.type, h._source, p ? p.type : null);
        we.setExtraStackFrame(g);
      } else
        we.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function oe(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }
    function xe() {
      {
        if (ee.current) {
          var h = j(ee.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
    }
    function yr(h) {
      {
        if (h !== void 0) {
          var p = h.fileName.replace(/^.*[\\\/]/, ""), g = h.lineNumber;
          return `

Check your code at ` + p + ":" + g + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function mr(h) {
      {
        var p = xe();
        if (!p) {
          var g = typeof h == "string" ? h : h.displayName || h.name;
          g && (p = `

Check the top-level render call using <` + g + ">.");
        }
        return p;
      }
    }
    function Me(h, p) {
      {
        if (!h._store || h._store.validated || h.key != null)
          return;
        h._store.validated = !0;
        var g = mr(p);
        if (Ae[g])
          return;
        Ae[g] = !0;
        var T = "";
        h && h._owner && h._owner !== ee.current && (T = " It was passed a child from " + j(h._owner.type) + "."), ft(h), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, T), ft(null);
      }
    }
    function Ye(h, p) {
      {
        if (typeof h != "object")
          return;
        if ($t(h))
          for (var g = 0; g < h.length; g++) {
            var T = h[g];
            oe(T) && Me(T, p);
          }
        else if (oe(h))
          h._store && (h._store.validated = !0);
        else if (h) {
          var P = U(h);
          if (typeof P == "function" && P !== h.entries)
            for (var E = P.call(h), b; !(b = E.next()).done; )
              oe(b.value) && Me(b.value, p);
        }
      }
    }
    function Tr(h) {
      {
        var p = h.type;
        if (p == null || typeof p == "string")
          return;
        var g;
        if (typeof p == "function")
          g = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === f))
          g = p.propTypes;
        else
          return;
        if (g) {
          var T = j(p);
          sr(g, h.props, "prop", T, h);
        } else if (p.PropTypes !== void 0 && !re) {
          re = !0;
          var P = j(p);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(h) {
      {
        for (var p = Object.keys(h.props), g = 0; g < p.length; g++) {
          var T = p[g];
          if (T !== "children" && T !== "key") {
            ft(h), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), ft(null);
            break;
          }
        }
        h.ref !== null && (ft(h), D("Invalid attribute `ref` supplied to `React.Fragment`."), ft(null));
      }
    }
    function Be(h, p, g, T, P, E) {
      {
        var b = Zt(h);
        if (!b) {
          var k = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = yr(P);
          z ? k += z : k += xe();
          var B;
          h === null ? B = "null" : $t(h) ? B = "array" : h !== void 0 && h.$$typeof === t ? (B = "<" + (j(h.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : B = typeof h, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, k);
        }
        var X = gr(h, p, g, P, E);
        if (X == null)
          return X;
        if (b) {
          var W = p.children;
          if (W !== void 0)
            if (T)
              if ($t(W)) {
                for (var dt = 0; dt < W.length; dt++)
                  Ye(W[dt], h);
                Object.freeze && Object.freeze(W);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(W, h);
        }
        return h === r ? Sr(X) : Tr(X), X;
      }
    }
    function kr(h, p, g) {
      return Be(h, p, g, !0);
    }
    function br(h, p, g) {
      return Be(h, p, g, !1);
    }
    var Pr = br, Er = kr;
    Mt.Fragment = r, Mt.jsx = Pr, Mt.jsxs = Er;
  }()), Mt;
}
process.env.NODE_ENV === "production" ? pe.exports = xr() : pe.exports = Ar();
var I = pe.exports;
/*!
 * better-scroll / better-scroll
 * (c) 2016-2023 ustbhuangyi
 * Released under the MIT License.
 */
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
var fe = function(o, t) {
  return fe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
  }, fe(o, t);
};
function qt(o, t) {
  fe(o, t);
  function e() {
    this.constructor = o;
  }
  o.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var V = function() {
  return V = Object.assign || function(t) {
    for (var e, r = 1, i = arguments.length; r < i; r++) {
      e = arguments[r];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, V.apply(this, arguments);
};
function ie(o, t, e, r) {
  function i(s) {
    return s instanceof e ? s : new e(function(n) {
      n(s);
    });
  }
  return new (e || (e = Promise))(function(s, n) {
    function a(u) {
      try {
        l(r.next(u));
      } catch (f) {
        n(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        n(f);
      }
    }
    function l(u) {
      u.done ? s(u.value) : i(u.value).then(a, c);
    }
    l((r = r.apply(o, t || [])).next());
  });
}
function se(o, t) {
  var e = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, n;
  return n = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (n[Symbol.iterator] = function() {
    return this;
  }), n;
  function a(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (r = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return e.label++, { value: l[1], done: !1 };
          case 5:
            e.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (s = e.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              e = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              e.label = l[1];
              break;
            }
            if (l[0] === 6 && e.label < s[1]) {
              e.label = s[1], s = l;
              break;
            }
            if (s && e.label < s[2]) {
              e.label = s[2], e.ops.push(l);
              break;
            }
            s[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        l = t.call(o, e);
      } catch (u) {
        l = [6, u], i = 0;
      } finally {
        r = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function jt() {
  for (var o = 0, t = 0, e = arguments.length; t < e; t++)
    o += arguments[t].length;
  for (var r = Array(o), i = 0, t = 0; t < e; t++)
    for (var s = arguments[t], n = 0, a = s.length; n < a; n++, i++)
      r[i] = s[n];
  return r;
}
var Mr = [
  {
    sourceKey: "scroller.scrollBehaviorX.currentPos",
    key: "x"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.currentPos",
    key: "y"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.hasScroll",
    key: "hasHorizontalScroll"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.hasScroll",
    key: "hasVerticalScroll"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.contentSize",
    key: "scrollerWidth"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.contentSize",
    key: "scrollerHeight"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.maxScrollPos",
    key: "maxScrollX"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.maxScrollPos",
    key: "maxScrollY"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.minScrollPos",
    key: "minScrollX"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.minScrollPos",
    key: "minScrollY"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.movingDirection",
    key: "movingDirectionX"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.movingDirection",
    key: "movingDirectionY"
  },
  {
    sourceKey: "scroller.scrollBehaviorX.direction",
    key: "directionX"
  },
  {
    sourceKey: "scroller.scrollBehaviorY.direction",
    key: "directionY"
  },
  {
    sourceKey: "scroller.actions.enabled",
    key: "enabled"
  },
  {
    sourceKey: "scroller.animater.pending",
    key: "pending"
  },
  {
    sourceKey: "scroller.animater.stop",
    key: "stop"
  },
  {
    sourceKey: "scroller.scrollTo",
    key: "scrollTo"
  },
  {
    sourceKey: "scroller.scrollBy",
    key: "scrollBy"
  },
  {
    sourceKey: "scroller.scrollToElement",
    key: "scrollToElement"
  },
  {
    sourceKey: "scroller.resetPosition",
    key: "resetPosition"
  }
];
function q(o) {
  console.error("[BScroll warn]: " + o);
}
function He(o, t) {
  if (!o)
    throw new Error("[BScroll] " + t);
}
var Z = typeof window < "u", yt = Z && navigator.userAgent.toLowerCase(), Yr = !!(yt && /wechatdevtools/.test(yt)), Br = yt && yt.indexOf("android") > 0, Dr = function() {
  if (typeof yt == "string") {
    var o = /os (\d\d?_\d(_\d)?)/, t = o.exec(yt);
    if (!t)
      return !1;
    var e = t[1].split("_").map(function(r) {
      return parseInt(r, 10);
    });
    return e[0] === 13 && e[1] >= 4;
  }
  return !1;
}(), _e = !1;
if (Z) {
  var Xr = "test-passive";
  try {
    var Ie = {};
    Object.defineProperty(Ie, "passive", {
      get: function() {
        _e = !0;
      }
    }), window.addEventListener(Xr, function() {
    }, Ie);
  } catch {
  }
}
function N() {
  return window.performance && window.performance.now && window.performance.timing ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
var F = function(o, t) {
  for (var e in t)
    o[e] = t[e];
  return o;
};
function de(o) {
  return o == null;
}
function Cr(o, t) {
  return Math.sqrt(o * o + t * t);
}
function C(o, t, e) {
  return o < t ? t : o > e ? e : o;
}
function vt(o, t) {
  if (o.findIndex)
    return o.findIndex(t);
  var e = -1;
  return o.some(function(r, i, s) {
    var n = t(r, i, s);
    if (n)
      return e = i, n;
  }), e;
}
var ye = Z && document.createElement("div").style, gt = function() {
  if (!Z)
    return !1;
  for (var o = [
    {
      key: "standard",
      value: "transform"
    },
    {
      key: "webkit",
      value: "webkitTransform"
    },
    {
      key: "Moz",
      value: "MozTransform"
    },
    {
      key: "O",
      value: "OTransform"
    },
    {
      key: "ms",
      value: "msTransform"
    }
  ], t = 0, e = o; t < e.length; t++) {
    var r = e[t];
    if (ye[r.value] !== void 0)
      return r.key;
  }
  return !1;
}();
function et(o) {
  return gt === !1 ? o : gt === "standard" ? o === "transitionEnd" ? "transitionend" : o : gt + o.charAt(0).toUpperCase() + o.substr(1);
}
function $e(o) {
  return typeof o == "string" ? document.querySelector(o) : o;
}
function Or(o, t, e, r) {
  var i = _e ? {
    passive: !1,
    capture: !!r
  } : !!r;
  o.addEventListener(t, e, i);
}
function Hr(o, t, e, r) {
  o.removeEventListener(t, e, {
    capture: !!r
  });
}
function ht(o) {
  o.cancelable && o.preventDefault();
}
function Re(o) {
  for (var t = 0, e = 0; o; )
    t -= o.offsetLeft, e -= o.offsetTop, o = o.offsetParent;
  return {
    left: t,
    top: e
  };
}
function Ir(o) {
  var t = o.getBoundingClientRect();
  return {
    left: -(t.left + window.pageXOffset),
    top: -(t.top + window.pageYOffset)
  };
}
var Rr = gt && gt !== "standard" ? "-" + gt.toLowerCase() + "-" : "", Fr = et("transform"), tr = et("transition"), zr = Z && et("perspective") in ye, Fe = Z && ("ontouchstart" in window || Yr), Lr = Z && tr in ye, x = {
  transform: Fr,
  transition: tr,
  transitionTimingFunction: et("transitionTimingFunction"),
  transitionDuration: et("transitionDuration"),
  transitionDelay: et("transitionDelay"),
  transformOrigin: et("transformOrigin"),
  transitionEnd: et("transitionEnd"),
  transitionProperty: et("transitionProperty")
}, ne = {
  touchstart: 1,
  touchmove: 1,
  touchend: 1,
  touchcancel: 1,
  mousedown: 2,
  mousemove: 2,
  mouseup: 2
};
function ct(o) {
  if (o instanceof window.SVGElement) {
    var t = o.getBoundingClientRect();
    return {
      top: t.top,
      left: t.left,
      width: t.width,
      height: t.height
    };
  } else
    return {
      top: o.offsetTop,
      left: o.offsetLeft,
      width: o.offsetWidth,
      height: o.offsetHeight
    };
}
function mt(o, t) {
  for (var e in t)
    if (t[e].test(o[e]))
      return !0;
  return !1;
}
var Nr = mt;
function Wr(o, t) {
  var e = document.createEvent("Event");
  e.initEvent(t, !0, !0), e.pageX = o.pageX, e.pageY = o.pageY, o.target.dispatchEvent(e);
}
function er(o, t) {
  t === void 0 && (t = "click");
  var e;
  o.type === "mouseup" ? e = o : (o.type === "touchend" || o.type === "touchcancel") && (e = o.changedTouches[0]);
  var r = {};
  e && (r.screenX = e.screenX || 0, r.screenY = e.screenY || 0, r.clientX = e.clientX || 0, r.clientY = e.clientY || 0);
  var i, s = !0, n = !0, a = o.ctrlKey, c = o.shiftKey, l = o.altKey, u = o.metaKey, f = {
    ctrlKey: a,
    shiftKey: c,
    altKey: l,
    metaKey: u
  };
  if (typeof MouseEvent < "u")
    try {
      i = new MouseEvent(t, F(V({
        bubbles: s,
        cancelable: n
      }, f), r));
    } catch {
      v();
    }
  else
    v();
  function v() {
    i = document.createEvent("Event"), i.initEvent(t, s, n), F(i, r);
  }
  i.forwardedTouchEvent = !0, i._constructed = !0, o.target.dispatchEvent(i);
}
function Ur(o) {
  er(o, "dblclick");
}
function jr(o, t) {
  var e = t.firstChild;
  e ? qr(o, e) : t.appendChild(o);
}
function qr(o, t) {
  var e = t.parentNode;
  e.insertBefore(o, t);
}
function Vr(o, t) {
  o.removeChild(t);
}
function Ht(o, t) {
  var e = new RegExp("(^|\\s)" + t + "(\\s|$)");
  return e.test(o.className);
}
function Kr(o) {
  return Array.prototype.slice.call(o, 0);
}
function Gr(o) {
  return {
    width: o.clientWidth,
    height: o.clientHeight
  };
}
var R = {
  // easeOutQuint
  swipe: {
    style: "cubic-bezier(0.23, 1, 0.32, 1)",
    fn: function(o) {
      return 1 + --o * o * o * o * o;
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    fn: function(o) {
      return o * (2 - o);
    }
  },
  // easeOutQuart
  bounce: {
    style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    fn: function(o) {
      return 1 - --o * o * o * o;
    }
  }
}, Qr = 1e3 / 60, ot = Z && window;
function rr() {
}
var me = function() {
  return Z ? ot.requestAnimationFrame || ot.webkitRequestAnimationFrame || ot.mozRequestAnimationFrame || ot.oRequestAnimationFrame || // if all else fails, use setTimeout
  function(o) {
    return window.setTimeout(o, o.interval || Qr);
  } : rr;
}(), it = function() {
  return Z ? ot.cancelAnimationFrame || ot.webkitCancelAnimationFrame || ot.mozCancelAnimationFrame || ot.oCancelAnimationFrame || function(o) {
    window.clearTimeout(o);
  } : rr;
}(), ze = function(o) {
}, ae = {
  enumerable: !0,
  configurable: !0,
  get: ze,
  set: ze
}, Zr = function(o, t) {
  for (var e = t.split("."), r = 0; r < e.length - 1; r++)
    if (o = o[e[r]], typeof o != "object" || !o)
      return;
  var i = e.pop();
  return typeof o[i] == "function" ? function() {
    return o[i].apply(o, arguments);
  } : o[i];
}, Jr = function(o, t, e) {
  for (var r = t.split("."), i, s = 0; s < r.length - 1; s++)
    i = r[s], o[i] || (o[i] = {}), o = o[i];
  o[r.pop()] = e;
};
function _r(o, t, e) {
  ae.get = function() {
    return Zr(this, t);
  }, ae.set = function(i) {
    Jr(this, t, i);
  }, Object.defineProperty(o, e, ae);
}
var rt = (
  /** @class */
  function() {
    function o(t) {
      this.events = {}, this.eventTypes = {}, this.registerType(t);
    }
    return o.prototype.on = function(t, e, r) {
      return r === void 0 && (r = this), this.hasType(t), this.events[t] || (this.events[t] = []), this.events[t].push([e, r]), this;
    }, o.prototype.once = function(t, e, r) {
      var i = this;
      r === void 0 && (r = this), this.hasType(t);
      var s = function() {
        for (var n = [], a = 0; a < arguments.length; a++)
          n[a] = arguments[a];
        i.off(t, s);
        var c = e.apply(r, n);
        if (c === !0)
          return c;
      };
      return s.fn = e, this.on(t, s), this;
    }, o.prototype.off = function(t, e) {
      if (!t && !e)
        return this.events = {}, this;
      if (t) {
        if (this.hasType(t), !e)
          return this.events[t] = [], this;
        var r = this.events[t];
        if (!r)
          return this;
        for (var i = r.length; i--; )
          (r[i][0] === e || r[i][0] && r[i][0].fn === e) && r.splice(i, 1);
        return this;
      }
    }, o.prototype.trigger = function(t) {
      for (var e = [], r = 1; r < arguments.length; r++)
        e[r - 1] = arguments[r];
      this.hasType(t);
      var i = this.events[t];
      if (i)
        for (var s = i.length, n = jt(i), a, c = 0; c < s; c++) {
          var l = n[c], u = l[0], f = l[1];
          if (u && (a = u.apply(f, e), a === !0))
            return a;
        }
    }, o.prototype.registerType = function(t) {
      var e = this;
      t.forEach(function(r) {
        e.eventTypes[r] = r;
      });
    }, o.prototype.destroy = function() {
      this.events = {}, this.eventTypes = {};
    }, o.prototype.hasType = function(t) {
      var e = this.eventTypes, r = e[t] === t;
      r || q('EventEmitter has used unknown event type: "' + t + '", should be oneof [' + ("" + Object.keys(e).map(function(i) {
        return JSON.stringify(i);
      })) + "]");
    }, o;
  }()
), L = (
  /** @class */
  function() {
    function o(t, e) {
      this.wrapper = t, this.events = e, this.addDOMEvents();
    }
    return o.prototype.destroy = function() {
      this.removeDOMEvents(), this.events = [];
    }, o.prototype.addDOMEvents = function() {
      this.handleDOMEvents(Or);
    }, o.prototype.removeDOMEvents = function() {
      this.handleDOMEvents(Hr);
    }, o.prototype.handleDOMEvents = function(t) {
      var e = this, r = this.wrapper;
      this.events.forEach(function(i) {
        t(r, i.name, e, !!i.capture);
      });
    }, o.prototype.handleEvent = function(t) {
      var e = t.type;
      this.events.some(function(r) {
        return r.name === e ? (r.handler(t), !0) : !1;
      });
    }, o;
  }()
), $r = (
  /** @class */
  /* @__PURE__ */ function() {
    function o() {
    }
    return o;
  }()
), to = (
  /** @class */
  function(o) {
    qt(t, o);
    function t() {
      var e = o.call(this) || this;
      return e.startX = 0, e.startY = 0, e.scrollX = !1, e.scrollY = !0, e.freeScroll = !1, e.directionLockThreshold = 0, e.eventPassthrough = "", e.click = !1, e.dblclick = !1, e.tap = "", e.bounce = {
        top: !0,
        bottom: !0,
        left: !0,
        right: !0
      }, e.bounceTime = 800, e.momentum = !0, e.momentumLimitTime = 300, e.momentumLimitDistance = 15, e.swipeTime = 2500, e.swipeBounceTime = 500, e.deceleration = 15e-4, e.flickLimitTime = 200, e.flickLimitDistance = 100, e.resizePolling = 60, e.probeType = 0, e.stopPropagation = !1, e.preventDefault = !0, e.preventDefaultException = {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/
      }, e.tagException = {
        tagName: /^TEXTAREA$/
      }, e.HWCompositing = !0, e.useTransition = !0, e.bindToWrapper = !1, e.bindToTarget = !1, e.disableMouse = Fe, e.disableTouch = !Fe, e.autoBlur = !0, e.autoEndDistance = 5, e.outOfBoundaryDampingFactor = 1 / 3, e.specifiedIndexAsContent = 0, e.quadrant = 1, e;
    }
    return t.prototype.merge = function(e) {
      if (!e)
        return this;
      for (var r in e) {
        if (r === "bounce") {
          this.bounce = this.resolveBounce(e[r]);
          continue;
        }
        this[r] = e[r];
      }
      return this;
    }, t.prototype.process = function() {
      return this.translateZ = this.HWCompositing && zr ? " translateZ(1px)" : "", this.useTransition = this.useTransition && Lr, this.preventDefault = !this.eventPassthrough && this.preventDefault, this.scrollX = this.eventPassthrough === "horizontal" ? !1 : this.scrollX, this.scrollY = this.eventPassthrough === "vertical" ? !1 : this.scrollY, this.freeScroll = this.freeScroll && !this.eventPassthrough, this.scrollX = this.freeScroll ? !0 : this.scrollX, this.scrollY = this.freeScroll ? !0 : this.scrollY, this.directionLockThreshold = this.eventPassthrough ? 0 : this.directionLockThreshold, this;
    }, t.prototype.resolveBounce = function(e) {
      var r = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0
      }, i = {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
      }, s;
      return typeof e == "object" ? s = F(r, e) : s = e ? r : i, s;
    }, t;
  }($r)
), eo = (
  /** @class */
  function() {
    function o(t, e) {
      this.wrapper = t, this.options = e, this.hooks = new rt([
        "beforeStart",
        "start",
        "move",
        "end",
        "click"
      ]), this.handleDOMEvents();
    }
    return o.prototype.handleDOMEvents = function() {
      var t = this.options, e = t.bindToWrapper, r = t.disableMouse, i = t.disableTouch, s = t.click, n = this.wrapper, a = e ? n : window, c = [], l = [], u = !i, f = !r;
      s && c.push({
        name: "click",
        handler: this.click.bind(this),
        capture: !0
      }), u && (c.push({
        name: "touchstart",
        handler: this.start.bind(this)
      }), l.push({
        name: "touchmove",
        handler: this.move.bind(this)
      }, {
        name: "touchend",
        handler: this.end.bind(this)
      }, {
        name: "touchcancel",
        handler: this.end.bind(this)
      })), f && (c.push({
        name: "mousedown",
        handler: this.start.bind(this)
      }), l.push({
        name: "mousemove",
        handler: this.move.bind(this)
      }, {
        name: "mouseup",
        handler: this.end.bind(this)
      })), this.wrapperEventRegister = new L(n, c), this.targetEventRegister = new L(a, l);
    }, o.prototype.beforeHandler = function(t, e) {
      var r = this.options, i = r.preventDefault, s = r.stopPropagation, n = r.preventDefaultException, a = {
        start: function() {
          return i && !mt(t.target, n);
        },
        end: function() {
          return i && !mt(t.target, n);
        },
        move: function() {
          return i;
        }
      };
      a[e]() && t.preventDefault(), s && t.stopPropagation();
    }, o.prototype.setInitiated = function(t) {
      t === void 0 && (t = 0), this.initiated = t;
    }, o.prototype.start = function(t) {
      var e = ne[t.type];
      if (!(this.initiated && this.initiated !== e)) {
        if (this.setInitiated(e), Nr(t.target, this.options.tagException)) {
          this.setInitiated();
          return;
        }
        if (!(e === 2 && t.button !== 0) && !this.hooks.trigger(this.hooks.eventTypes.beforeStart, t)) {
          this.beforeHandler(t, "start");
          var r = t.touches ? t.touches[0] : t;
          this.pointX = r.pageX, this.pointY = r.pageY, this.hooks.trigger(this.hooks.eventTypes.start, t);
        }
      }
    }, o.prototype.move = function(t) {
      if (ne[t.type] === this.initiated) {
        this.beforeHandler(t, "move");
        var e = t.touches ? t.touches[0] : t, r = e.pageX - this.pointX, i = e.pageY - this.pointY;
        if (this.pointX = e.pageX, this.pointY = e.pageY, !this.hooks.trigger(this.hooks.eventTypes.move, {
          deltaX: r,
          deltaY: i,
          e: t
        })) {
          var s = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, n = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, a = this.pointX - s, c = this.pointY - n, l = this.options.autoEndDistance;
          (a > document.documentElement.clientWidth - l || c > document.documentElement.clientHeight - l || a < l || c < l) && this.end(t);
        }
      }
    }, o.prototype.end = function(t) {
      ne[t.type] === this.initiated && (this.setInitiated(), this.beforeHandler(t, "end"), this.hooks.trigger(this.hooks.eventTypes.end, t));
    }, o.prototype.click = function(t) {
      this.hooks.trigger(this.hooks.eventTypes.click, t);
    }, o.prototype.setContent = function(t) {
      t !== this.wrapper && (this.wrapper = t, this.rebindDOMEvents());
    }, o.prototype.rebindDOMEvents = function() {
      this.wrapperEventRegister.destroy(), this.targetEventRegister.destroy(), this.handleDOMEvents();
    }, o.prototype.destroy = function() {
      this.wrapperEventRegister.destroy(), this.targetEventRegister.destroy(), this.hooks.destroy();
    }, o;
  }()
), le = {
  x: ["translateX", "px"],
  y: ["translateY", "px"]
}, ro = (
  /** @class */
  function() {
    function o(t) {
      this.setContent(t), this.hooks = new rt(["beforeTranslate", "translate"]);
    }
    return o.prototype.getComputedPosition = function() {
      var t = window.getComputedStyle(this.content, null), e = t[x.transform].split(")")[0].split(", "), r = +(e[12] || e[4]) || 0, i = +(e[13] || e[5]) || 0;
      return {
        x: r,
        y: i
      };
    }, o.prototype.translate = function(t) {
      var e = [];
      Object.keys(t).forEach(function(r) {
        if (le[r]) {
          var i = le[r][0];
          if (i) {
            var s = le[r][1], n = t[r];
            e.push(i + "(" + n + s + ")");
          }
        }
      }), this.hooks.trigger(this.hooks.eventTypes.beforeTranslate, e, t), this.style[x.transform] = e.join(" "), this.hooks.trigger(this.hooks.eventTypes.translate, t);
    }, o.prototype.setContent = function(t) {
      this.content !== t && (this.content = t, this.style = t.style);
    }, o.prototype.destroy = function() {
      this.hooks.destroy();
    }, o;
  }()
), or = (
  /** @class */
  function() {
    function o(t, e, r) {
      this.translater = e, this.options = r, this.timer = 0, this.hooks = new rt([
        "move",
        "end",
        "beforeForceStop",
        "forceStop",
        "callStop",
        "time",
        "timeFunction"
      ]), this.setContent(t);
    }
    return o.prototype.translate = function(t) {
      this.translater.translate(t);
    }, o.prototype.setPending = function(t) {
      this.pending = t;
    }, o.prototype.setForceStopped = function(t) {
      this.forceStopped = t;
    }, o.prototype.setCallStop = function(t) {
      this.callStopWhenPending = t;
    }, o.prototype.setContent = function(t) {
      this.content !== t && (this.content = t, this.style = t.style, this.stop());
    }, o.prototype.clearTimer = function() {
      this.timer && (it(this.timer), this.timer = 0);
    }, o.prototype.destroy = function() {
      this.hooks.destroy(), it(this.timer);
    }, o;
  }()
), oo = function(o, t, e, r) {
  var i = function(l, u) {
    var f = l - u, v = f > 0 ? -1 : f < 0 ? 1 : 0;
    return v;
  }, s = i(t.x, o.x), n = i(t.y, o.y), a = e.x - r.x, c = e.y - r.y;
  return s * a <= 0 && n * c <= 0;
}, io = (
  /** @class */
  function(o) {
    qt(t, o);
    function t() {
      return o !== null && o.apply(this, arguments) || this;
    }
    return t.prototype.startProbe = function(e, r) {
      var i = this, s = e, n = function() {
        var a = i.translater.getComputedPosition();
        oo(e, r, a, s) && i.hooks.trigger(i.hooks.eventTypes.move, a), i.pending || (i.callStopWhenPending ? i.callStopWhenPending = !1 : i.hooks.trigger(i.hooks.eventTypes.end, a)), s = a, i.pending && (i.timer = me(n));
      };
      this.callStopWhenPending && this.setCallStop(!1), it(this.timer), n();
    }, t.prototype.transitionTime = function(e) {
      e === void 0 && (e = 0), this.style[x.transitionDuration] = e + "ms", this.hooks.trigger(this.hooks.eventTypes.time, e);
    }, t.prototype.transitionTimingFunction = function(e) {
      this.style[x.transitionTimingFunction] = e, this.hooks.trigger(this.hooks.eventTypes.timeFunction, e);
    }, t.prototype.transitionProperty = function() {
      this.style[x.transitionProperty] = x.transform;
    }, t.prototype.move = function(e, r, i, s) {
      this.setPending(i > 0), this.transitionTimingFunction(s), this.transitionProperty(), this.transitionTime(i), this.translate(r);
      var n = this.options.probeType === 3;
      i && n && this.startProbe(e, r), i || (this._reflow = this.content.offsetHeight, n && this.hooks.trigger(this.hooks.eventTypes.move, r), this.hooks.trigger(this.hooks.eventTypes.end, r));
    }, t.prototype.doStop = function() {
      var e = this.pending;
      if (this.setForceStopped(!1), this.setCallStop(!1), e) {
        this.setPending(!1), it(this.timer);
        var r = this.translater.getComputedPosition(), i = r.x, s = r.y;
        this.transitionTime(), this.translate({ x: i, y: s }), this.setForceStopped(!0), this.setCallStop(!0), this.hooks.trigger(this.hooks.eventTypes.forceStop, { x: i, y: s });
      }
      return e;
    }, t.prototype.stop = function() {
      var e = this.doStop();
      e && this.hooks.trigger(this.hooks.eventTypes.callStop);
    }, t;
  }(or)
), so = (
  /** @class */
  function(o) {
    qt(t, o);
    function t() {
      return o !== null && o.apply(this, arguments) || this;
    }
    return t.prototype.move = function(e, r, i, s) {
      if (!i) {
        this.translate(r), this.options.probeType === 3 && this.hooks.trigger(this.hooks.eventTypes.move, r), this.hooks.trigger(this.hooks.eventTypes.end, r);
        return;
      }
      this.animate(e, r, i, s);
    }, t.prototype.animate = function(e, r, i, s) {
      var n = this, a = N(), c = a + i, l = this.options.probeType === 3, u = function() {
        var f = N();
        if (f >= c) {
          n.translate(r), l && n.hooks.trigger(n.hooks.eventTypes.move, r), n.hooks.trigger(n.hooks.eventTypes.end, r);
          return;
        }
        f = (f - a) / i;
        var v = s(f), y = {};
        Object.keys(r).forEach(function(m) {
          var O = e[m], U = r[m];
          y[m] = (U - O) * v + O;
        }), n.translate(y), l && n.hooks.trigger(n.hooks.eventTypes.move, y), n.pending && (n.timer = me(u)), n.pending || (n.callStopWhenPending ? n.callStopWhenPending = !1 : n.hooks.trigger(n.hooks.eventTypes.end, r));
      };
      this.setPending(!0), this.callStopWhenPending && this.setCallStop(!1), it(this.timer), u();
    }, t.prototype.doStop = function() {
      var e = this.pending;
      if (this.setForceStopped(!1), this.setCallStop(!1), e) {
        this.setPending(!1), it(this.timer);
        var r = this.translater.getComputedPosition();
        this.setForceStopped(!0), this.setCallStop(!0), this.hooks.trigger(this.hooks.eventTypes.forceStop, r);
      }
      return e;
    }, t.prototype.stop = function() {
      var e = this.doStop();
      e && this.hooks.trigger(this.hooks.eventTypes.callStop);
    }, t;
  }(or)
);
function no(o, t, e) {
  var r = e.useTransition, i = {};
  return Object.defineProperty(i, "probeType", {
    enumerable: !0,
    configurable: !1,
    get: function() {
      return e.probeType;
    }
  }), r ? new io(o, t, i) : new so(o, t, i);
}
var Le = (
  /** @class */
  function() {
    function o(t, e, r) {
      this.wrapper = t, this.options = r, this.hooks = new rt([
        "beforeComputeBoundary",
        "computeBoundary",
        "momentum",
        "end",
        "ignoreHasScroll"
      ]), this.refresh(e);
    }
    return o.prototype.start = function() {
      this.dist = 0, this.setMovingDirection(
        0
        /* Default */
      ), this.setDirection(
        0
        /* Default */
      );
    }, o.prototype.move = function(t) {
      return t = this.hasScroll ? t : 0, this.setMovingDirection(t), this.performDampingAlgorithm(t, this.options.outOfBoundaryDampingFactor);
    }, o.prototype.setMovingDirection = function(t) {
      this.movingDirection = t > 0 ? -1 : t < 0 ? 1 : 0;
    }, o.prototype.setDirection = function(t) {
      this.direction = t > 0 ? -1 : t < 0 ? 1 : 0;
    }, o.prototype.performDampingAlgorithm = function(t, e) {
      var r = this.currentPos + t;
      return (r > this.minScrollPos || r < this.maxScrollPos) && (r > this.minScrollPos && this.options.bounces[0] || r < this.maxScrollPos && this.options.bounces[1] ? r = this.currentPos + t * e : r = r > this.minScrollPos ? this.minScrollPos : this.maxScrollPos), r;
    }, o.prototype.end = function(t) {
      var e = {
        duration: 0
      }, r = Math.abs(this.currentPos - this.startPos);
      if (this.options.momentum && t < this.options.momentumLimitTime && r > this.options.momentumLimitDistance) {
        var i = this.direction === -1 && this.options.bounces[0] || this.direction === 1 && this.options.bounces[1] ? this.wrapperSize : 0;
        e = this.hasScroll ? this.momentum(this.currentPos, this.startPos, t, this.maxScrollPos, this.minScrollPos, i, this.options) : { destination: this.currentPos, duration: 0 };
      } else
        this.hooks.trigger(this.hooks.eventTypes.end, e);
      return e;
    }, o.prototype.momentum = function(t, e, r, i, s, n, a) {
      a === void 0 && (a = this.options);
      var c = t - e, l = Math.abs(c) / r, u = a.deceleration, f = a.swipeBounceTime, v = a.swipeTime, y = Math.min(v, l * 2 / u), m = {
        destination: t + l * l / u * (c < 0 ? -1 : 1),
        duration: y,
        rate: 15
      };
      return this.hooks.trigger(this.hooks.eventTypes.momentum, m, c), m.destination < i ? (m.destination = n ? Math.max(i - n / 4, i - n / m.rate * l) : i, m.duration = f) : m.destination > s && (m.destination = n ? Math.min(s + n / 4, s + n / m.rate * l) : s, m.duration = f), m.destination = Math.round(m.destination), m;
    }, o.prototype.updateDirection = function() {
      var t = this.currentPos - this.absStartPos;
      this.setDirection(t);
    }, o.prototype.refresh = function(t) {
      var e = this.options.rect, r = e.size, i = e.position, s = window.getComputedStyle(this.wrapper, null).position === "static", n = ct(this.wrapper);
      this.wrapperSize = this.wrapper[r === "width" ? "clientWidth" : "clientHeight"], this.setContent(t);
      var a = ct(this.content);
      this.contentSize = a[r], this.relativeOffset = a[i], s && (this.relativeOffset -= n[i]), this.computeBoundary(), this.setDirection(
        0
        /* Default */
      );
    }, o.prototype.setContent = function(t) {
      t !== this.content && (this.content = t, this.resetState());
    }, o.prototype.resetState = function() {
      this.currentPos = 0, this.startPos = 0, this.dist = 0, this.setDirection(
        0
        /* Default */
      ), this.setMovingDirection(
        0
        /* Default */
      ), this.resetStartPos();
    }, o.prototype.computeBoundary = function() {
      this.hooks.trigger(this.hooks.eventTypes.beforeComputeBoundary);
      var t = {
        minScrollPos: 0,
        maxScrollPos: this.wrapperSize - this.contentSize
      };
      t.maxScrollPos < 0 && (t.maxScrollPos -= this.relativeOffset, this.options.specifiedIndexAsContent === 0 && (t.minScrollPos = -this.relativeOffset)), this.hooks.trigger(this.hooks.eventTypes.computeBoundary, t), this.minScrollPos = t.minScrollPos, this.maxScrollPos = t.maxScrollPos, this.hasScroll = this.options.scrollable && this.maxScrollPos < this.minScrollPos, !this.hasScroll && this.minScrollPos < this.maxScrollPos && (this.maxScrollPos = this.minScrollPos, this.contentSize = this.wrapperSize);
    }, o.prototype.updatePosition = function(t) {
      this.currentPos = t;
    }, o.prototype.getCurrentPos = function() {
      return this.currentPos;
    }, o.prototype.checkInBoundary = function() {
      var t = this.adjustPosition(this.currentPos), e = t === this.getCurrentPos();
      return {
        position: t,
        inBoundary: e
      };
    }, o.prototype.adjustPosition = function(t) {
      return !this.hasScroll && !this.hooks.trigger(this.hooks.eventTypes.ignoreHasScroll) ? t = this.minScrollPos : t > this.minScrollPos ? t = this.minScrollPos : t < this.maxScrollPos && (t = this.maxScrollPos), t;
    }, o.prototype.updateStartPos = function() {
      this.startPos = this.currentPos;
    }, o.prototype.updateAbsStartPos = function() {
      this.absStartPos = this.currentPos;
    }, o.prototype.resetStartPos = function() {
      this.updateStartPos(), this.updateAbsStartPos();
    }, o.prototype.getAbsDist = function(t) {
      return this.dist += t, Math.abs(this.dist);
    }, o.prototype.destroy = function() {
      this.hooks.destroy();
    }, o;
  }()
), It, Rt, Ft, zt, Ne = (It = {}, It.yes = function(o) {
  return !0;
}, It.no = function(o) {
  return ht(o), !1;
}, It), ao = (Rt = {}, Rt.horizontal = (Ft = {}, Ft.yes = "horizontal", Ft.no = "vertical", Ft), Rt.vertical = (zt = {}, zt.yes = "vertical", zt.no = "horizontal", zt), Rt), lo = (
  /** @class */
  function() {
    function o(t, e, r) {
      this.directionLockThreshold = t, this.freeScroll = e, this.eventPassthrough = r, this.reset();
    }
    return o.prototype.reset = function() {
      this.directionLocked = "";
    }, o.prototype.checkMovingDirection = function(t, e, r) {
      return this.computeDirectionLock(t, e), this.handleEventPassthrough(r);
    }, o.prototype.adjustDelta = function(t, e) {
      return this.directionLocked === "horizontal" ? e = 0 : this.directionLocked === "vertical" && (t = 0), {
        deltaX: t,
        deltaY: e
      };
    }, o.prototype.computeDirectionLock = function(t, e) {
      this.directionLocked === "" && !this.freeScroll && (t > e + this.directionLockThreshold ? this.directionLocked = "horizontal" : e >= t + this.directionLockThreshold ? this.directionLocked = "vertical" : this.directionLocked = "none");
    }, o.prototype.handleEventPassthrough = function(t) {
      var e = ao[this.directionLocked];
      if (e) {
        if (this.eventPassthrough === e.yes)
          return Ne.yes(t);
        if (this.eventPassthrough === e.no)
          return Ne.no(t);
      }
      return !1;
    }, o;
  }()
), ho = function(o, t, e) {
  return e === 2 ? [t, -o] : e === 3 ? [-o, -t] : e === 4 ? [-t, o] : [o, t];
}, co = (
  /** @class */
  function() {
    function o(t, e, r, i, s) {
      this.hooks = new rt([
        "start",
        "beforeMove",
        "scrollStart",
        "scroll",
        "beforeEnd",
        "end",
        "scrollEnd",
        "contentNotMoved",
        "detectMovingDirection",
        "coordinateTransformation"
      ]), this.scrollBehaviorX = t, this.scrollBehaviorY = e, this.actionsHandler = r, this.animater = i, this.options = s, this.directionLockAction = new lo(s.directionLockThreshold, s.freeScroll, s.eventPassthrough), this.enabled = !0, this.bindActionsHandler();
    }
    return o.prototype.bindActionsHandler = function() {
      var t = this;
      this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start, function(e) {
        return t.enabled ? t.handleStart(e) : !0;
      }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move, function(e) {
        var r = e.deltaX, i = e.deltaY, s = e.e;
        if (!t.enabled)
          return !0;
        var n = ho(r, i, t.options.quadrant), a = n[0], c = n[1], l = {
          deltaX: a,
          deltaY: c
        };
        return t.hooks.trigger(t.hooks.eventTypes.coordinateTransformation, l), t.handleMove(l.deltaX, l.deltaY, s);
      }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end, function(e) {
        return t.enabled ? t.handleEnd(e) : !0;
      }), this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click, function(e) {
        t.enabled && !e._constructed && t.handleClick(e);
      });
    }, o.prototype.handleStart = function(t) {
      var e = N();
      this.fingerMoved = !1, this.contentMoved = !1, this.startTime = e, this.directionLockAction.reset(), this.scrollBehaviorX.start(), this.scrollBehaviorY.start(), this.animater.doStop(), this.scrollBehaviorX.resetStartPos(), this.scrollBehaviorY.resetStartPos(), this.hooks.trigger(this.hooks.eventTypes.start, t);
    }, o.prototype.handleMove = function(t, e, r) {
      if (!this.hooks.trigger(this.hooks.eventTypes.beforeMove, r)) {
        var i = this.scrollBehaviorX.getAbsDist(t), s = this.scrollBehaviorY.getAbsDist(e), n = N();
        if (this.checkMomentum(i, s, n))
          return !0;
        if (this.directionLockAction.checkMovingDirection(i, s, r))
          return this.actionsHandler.setInitiated(), !0;
        var a = this.directionLockAction.adjustDelta(t, e), c = this.scrollBehaviorX.getCurrentPos(), l = this.scrollBehaviorX.move(a.deltaX), u = this.scrollBehaviorY.getCurrentPos(), f = this.scrollBehaviorY.move(a.deltaY);
        if (!this.hooks.trigger(this.hooks.eventTypes.detectMovingDirection)) {
          this.fingerMoved || (this.fingerMoved = !0);
          var v = l !== c || f !== u;
          !this.contentMoved && !v && this.hooks.trigger(this.hooks.eventTypes.contentNotMoved), !this.contentMoved && v && (this.contentMoved = !0, this.hooks.trigger(this.hooks.eventTypes.scrollStart)), this.contentMoved && v && (this.animater.translate({
            x: l,
            y: f
          }), this.dispatchScroll(n));
        }
      }
    }, o.prototype.dispatchScroll = function(t) {
      t - this.startTime > this.options.momentumLimitTime && (this.startTime = t, this.scrollBehaviorX.updateStartPos(), this.scrollBehaviorY.updateStartPos(), this.options.probeType === 1 && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos())), this.options.probeType > 1 && this.hooks.trigger(this.hooks.eventTypes.scroll, this.getCurrentPos());
    }, o.prototype.checkMomentum = function(t, e, r) {
      return r - this.endTime > this.options.momentumLimitTime && e < this.options.momentumLimitDistance && t < this.options.momentumLimitDistance;
    }, o.prototype.handleEnd = function(t) {
      if (!this.hooks.trigger(this.hooks.eventTypes.beforeEnd, t)) {
        var e = this.getCurrentPos();
        if (this.scrollBehaviorX.updateDirection(), this.scrollBehaviorY.updateDirection(), this.hooks.trigger(this.hooks.eventTypes.end, t, e))
          return !0;
        e = this.ensureIntegerPos(e), this.animater.translate(e), this.endTime = N();
        var r = this.endTime - this.startTime;
        this.hooks.trigger(this.hooks.eventTypes.scrollEnd, e, r);
      }
    }, o.prototype.ensureIntegerPos = function(t) {
      this.ensuringInteger = !0;
      var e = t.x, r = t.y, i = this.scrollBehaviorX, s = i.minScrollPos, n = i.maxScrollPos, a = this.scrollBehaviorY, c = a.minScrollPos, l = a.maxScrollPos;
      return e = e > 0 ? Math.ceil(e) : Math.floor(e), r = r > 0 ? Math.ceil(r) : Math.floor(r), e = C(e, n, s), r = C(r, l, c), { x: e, y: r };
    }, o.prototype.handleClick = function(t) {
      mt(t.target, this.options.preventDefaultException) || (ht(t), t.stopPropagation());
    }, o.prototype.getCurrentPos = function() {
      return {
        x: this.scrollBehaviorX.getCurrentPos(),
        y: this.scrollBehaviorY.getCurrentPos()
      };
    }, o.prototype.refresh = function() {
      this.endTime = 0;
    }, o.prototype.destroy = function() {
      this.hooks.destroy();
    }, o;
  }()
);
function uo(o) {
  var t = [
    "click",
    "bindToWrapper",
    "disableMouse",
    "disableTouch",
    "preventDefault",
    "stopPropagation",
    "tagException",
    "preventDefaultException",
    "autoEndDistance"
  ].reduce(function(e, r) {
    return e[r] = o[r], e;
  }, {});
  return t;
}
function We(o, t, e, r) {
  var i = [
    "momentum",
    "momentumLimitTime",
    "momentumLimitDistance",
    "deceleration",
    "swipeBounceTime",
    "swipeTime",
    "outOfBoundaryDampingFactor",
    "specifiedIndexAsContent"
  ].reduce(function(s, n) {
    return s[n] = o[n], s;
  }, {});
  return i.scrollable = !!o[t], i.bounces = e, i.rect = r, i;
}
function ve(o, t, e) {
  e.forEach(function(r) {
    var i, s;
    typeof r == "string" ? i = s = r : (i = r.source, s = r.target), o.on(i, function() {
      for (var n = [], a = 0; a < arguments.length; a++)
        n[a] = arguments[a];
      return t.trigger.apply(t, jt([s], n));
    });
  });
}
function po(o, t) {
  for (var e = Object.keys(o), r = 0, i = e; r < i.length; r++) {
    var s = i[r];
    if (o[s] !== t[s])
      return !1;
  }
  return !0;
}
var Ue = 1, fo = (
  /** @class */
  function() {
    function o(t, e, r) {
      this.wrapper = t, this.content = e, this.resizeTimeout = 0, this.hooks = new rt([
        "beforeStart",
        "beforeMove",
        "beforeScrollStart",
        "scrollStart",
        "scroll",
        "beforeEnd",
        "scrollEnd",
        "resize",
        "touchEnd",
        "end",
        "flick",
        "scrollCancel",
        "momentum",
        "scrollTo",
        "minDistanceScroll",
        "scrollToElement",
        "beforeRefresh"
      ]), this.options = r;
      var i = this.options.bounce, s = i.left, n = i.right, a = i.top, c = i.bottom;
      this.scrollBehaviorX = new Le(t, e, We(r, "scrollX", [s, n], {
        size: "width",
        position: "left"
      })), this.scrollBehaviorY = new Le(t, e, We(r, "scrollY", [a, c], {
        size: "height",
        position: "top"
      })), this.translater = new ro(this.content), this.animater = no(this.content, this.translater, this.options), this.actionsHandler = new eo(this.options.bindToTarget ? this.content : t, uo(this.options)), this.actions = new co(this.scrollBehaviorX, this.scrollBehaviorY, this.actionsHandler, this.animater, this.options);
      var l = this.resize.bind(this);
      this.resizeRegister = new L(window, [
        {
          name: "orientationchange",
          handler: l
        },
        {
          name: "resize",
          handler: l
        }
      ]), this.registerTransitionEnd(), this.init();
    }
    return o.prototype.init = function() {
      var t = this;
      this.bindTranslater(), this.bindAnimater(), this.bindActions(), this.hooks.on(this.hooks.eventTypes.scrollEnd, function() {
        t.togglePointerEvents(!0);
      });
    }, o.prototype.registerTransitionEnd = function() {
      this.transitionEndRegister = new L(this.content, [
        {
          name: x.transitionEnd,
          handler: this.transitionEnd.bind(this)
        }
      ]);
    }, o.prototype.bindTranslater = function() {
      var t = this, e = this.translater.hooks;
      e.on(e.eventTypes.beforeTranslate, function(r) {
        t.options.translateZ && r.push(t.options.translateZ);
      }), e.on(e.eventTypes.translate, function(r) {
        var i = t.getCurrentPos();
        if (t.updatePositions(r), t.actions.ensuringInteger === !0) {
          t.actions.ensuringInteger = !1;
          return;
        }
        (r.x !== i.x || r.y !== i.y) && t.togglePointerEvents(!1);
      });
    }, o.prototype.bindAnimater = function() {
      var t = this;
      this.animater.hooks.on(this.animater.hooks.eventTypes.end, function(e) {
        t.resetPosition(t.options.bounceTime) || (t.animater.setPending(!1), t.hooks.trigger(t.hooks.eventTypes.scrollEnd, e));
      }), ve(this.animater.hooks, this.hooks, [
        {
          source: this.animater.hooks.eventTypes.move,
          target: this.hooks.eventTypes.scroll
        },
        {
          source: this.animater.hooks.eventTypes.forceStop,
          target: this.hooks.eventTypes.scrollEnd
        }
      ]);
    }, o.prototype.bindActions = function() {
      var t = this, e = this.actions;
      ve(e.hooks, this.hooks, [
        {
          source: e.hooks.eventTypes.start,
          target: this.hooks.eventTypes.beforeStart
        },
        {
          source: e.hooks.eventTypes.start,
          target: this.hooks.eventTypes.beforeScrollStart
        },
        {
          source: e.hooks.eventTypes.beforeMove,
          target: this.hooks.eventTypes.beforeMove
        },
        {
          source: e.hooks.eventTypes.scrollStart,
          target: this.hooks.eventTypes.scrollStart
        },
        {
          source: e.hooks.eventTypes.scroll,
          target: this.hooks.eventTypes.scroll
        },
        {
          source: e.hooks.eventTypes.beforeEnd,
          target: this.hooks.eventTypes.beforeEnd
        }
      ]), e.hooks.on(e.hooks.eventTypes.end, function(r, i) {
        if (t.hooks.trigger(t.hooks.eventTypes.touchEnd, i), t.hooks.trigger(t.hooks.eventTypes.end, i) || !e.fingerMoved && (t.hooks.trigger(t.hooks.eventTypes.scrollCancel), t.checkClick(r)))
          return !0;
        if (t.resetPosition(t.options.bounceTime, R.bounce))
          return t.animater.setForceStopped(!1), !0;
      }), e.hooks.on(e.hooks.eventTypes.scrollEnd, function(r, i) {
        var s = Math.abs(r.x - t.scrollBehaviorX.startPos), n = Math.abs(r.y - t.scrollBehaviorY.startPos);
        if (t.checkFlick(i, s, n)) {
          t.animater.setForceStopped(!1), t.hooks.trigger(t.hooks.eventTypes.flick);
          return;
        }
        if (t.momentum(r, i)) {
          t.animater.setForceStopped(!1);
          return;
        }
        e.contentMoved && t.hooks.trigger(t.hooks.eventTypes.scrollEnd, r), t.animater.forceStopped && t.animater.setForceStopped(!1);
      });
    }, o.prototype.checkFlick = function(t, e, r) {
      var i = 1;
      if (this.hooks.events.flick.length > 1 && t < this.options.flickLimitTime && e < this.options.flickLimitDistance && r < this.options.flickLimitDistance && (r > i || e > i))
        return !0;
    }, o.prototype.momentum = function(t, e) {
      var r = {
        time: 0,
        easing: R.swiper,
        newX: t.x,
        newY: t.y
      }, i = this.scrollBehaviorX.end(e), s = this.scrollBehaviorY.end(e);
      if (r.newX = de(i.destination) ? r.newX : i.destination, r.newY = de(s.destination) ? r.newY : s.destination, r.time = Math.max(i.duration, s.duration), this.hooks.trigger(this.hooks.eventTypes.momentum, r, this), r.newX !== t.x || r.newY !== t.y)
        return (r.newX > this.scrollBehaviorX.minScrollPos || r.newX < this.scrollBehaviorX.maxScrollPos || r.newY > this.scrollBehaviorY.minScrollPos || r.newY < this.scrollBehaviorY.maxScrollPos) && (r.easing = R.swipeBounce), this.scrollTo(r.newX, r.newY, r.time, r.easing), !0;
    }, o.prototype.checkClick = function(t) {
      var e = {
        preventClick: this.animater.forceStopped
      };
      if (this.hooks.trigger(this.hooks.eventTypes.checkClick))
        return this.animater.setForceStopped(!1), !0;
      if (!e.preventClick) {
        var r = this.options.dblclick, i = !1;
        if (r && this.lastClickTime) {
          var s = r.delay, n = s === void 0 ? 300 : s;
          N() - this.lastClickTime < n && (i = !0, Ur(t));
        }
        return this.options.tap && Wr(t, this.options.tap), this.options.click && !mt(t.target, this.options.preventDefaultException) && er(t), this.lastClickTime = i ? null : N(), !0;
      }
      return !1;
    }, o.prototype.resize = function() {
      var t = this;
      this.actions.enabled && (Br && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(function() {
        t.hooks.trigger(t.hooks.eventTypes.resize);
      }, this.options.resizePolling));
    }, o.prototype.transitionEnd = function(t) {
      if (!(t.target !== this.content || !this.animater.pending)) {
        var e = this.animater;
        e.transitionTime(), this.resetPosition(this.options.bounceTime, R.bounce) || (this.animater.setPending(!1), this.options.probeType !== 3 && this.hooks.trigger(this.hooks.eventTypes.scrollEnd, this.getCurrentPos()));
      }
    }, o.prototype.togglePointerEvents = function(t) {
      t === void 0 && (t = !0);
      for (var e = this.content.children.length ? this.content.children : [this.content], r = t ? "auto" : "none", i = 0; i < e.length; i++) {
        var s = e[i];
        s.isBScrollContainer || (s.style.pointerEvents = r);
      }
    }, o.prototype.refresh = function(t) {
      var e = this.setContent(t);
      this.hooks.trigger(this.hooks.eventTypes.beforeRefresh), this.scrollBehaviorX.refresh(t), this.scrollBehaviorY.refresh(t), e && (this.translater.setContent(t), this.animater.setContent(t), this.transitionEndRegister.destroy(), this.registerTransitionEnd(), this.options.bindToTarget && this.actionsHandler.setContent(t)), this.actions.refresh(), this.wrapperOffset = Re(this.wrapper);
    }, o.prototype.setContent = function(t) {
      var e = t !== this.content;
      return e && (this.content = t), e;
    }, o.prototype.scrollBy = function(t, e, r, i) {
      r === void 0 && (r = 0);
      var s = this.getCurrentPos(), n = s.x, a = s.y;
      i = i || R.bounce, t += n, e += a, this.scrollTo(t, e, r, i);
    }, o.prototype.scrollTo = function(t, e, r, i, s) {
      r === void 0 && (r = 0), i === void 0 && (i = R.bounce), s === void 0 && (s = {
        start: {},
        end: {}
      });
      var n = this.options.useTransition ? i.style : i.fn, a = this.getCurrentPos(), c = V({ x: a.x, y: a.y }, s.start), l = V({
        x: t,
        y: e
      }, s.end);
      if (this.hooks.trigger(this.hooks.eventTypes.scrollTo, l), !po(c, l)) {
        var u = Math.abs(l.x - c.x), f = Math.abs(l.y - c.y);
        u < Ue && f < Ue && (r = 0, this.hooks.trigger(this.hooks.eventTypes.minDistanceScroll)), this.animater.move(c, l, r, n);
      }
    }, o.prototype.scrollToElement = function(t, e, r, i, s) {
      var n = $e(t), a = Re(n), c = function(u, f, v) {
        return typeof u == "number" ? u : u ? Math.round(f / 2 - v / 2) : 0;
      };
      r = c(r, n.offsetWidth, this.wrapper.offsetWidth), i = c(i, n.offsetHeight, this.wrapper.offsetHeight);
      var l = function(u, f, v, y) {
        return u -= f, u = y.adjustPosition(u - v), u;
      };
      a.left = l(a.left, this.wrapperOffset.left, r, this.scrollBehaviorX), a.top = l(a.top, this.wrapperOffset.top, i, this.scrollBehaviorY), !this.hooks.trigger(this.hooks.eventTypes.scrollToElement, n, a) && this.scrollTo(a.left, a.top, e, s);
    }, o.prototype.resetPosition = function(t, e) {
      t === void 0 && (t = 0), e === void 0 && (e = R.bounce);
      var r = this.scrollBehaviorX.checkInBoundary(), i = r.position, s = r.inBoundary, n = this.scrollBehaviorY.checkInBoundary(), a = n.position, c = n.inBoundary;
      return s && c ? !1 : (Dr && this.reflow(), this.scrollTo(i, a, t, e), !0);
    }, o.prototype.reflow = function() {
      this._reflow = this.content.offsetHeight;
    }, o.prototype.updatePositions = function(t) {
      this.scrollBehaviorX.updatePosition(t.x), this.scrollBehaviorY.updatePosition(t.y);
    }, o.prototype.getCurrentPos = function() {
      return this.actions.getCurrentPos();
    }, o.prototype.enable = function() {
      this.actions.enabled = !0;
    }, o.prototype.disable = function() {
      it(this.animater.timer), this.actions.enabled = !1;
    }, o.prototype.destroy = function() {
      var t = this, e = [
        "resizeRegister",
        "transitionEndRegister",
        "actionsHandler",
        "actions",
        "hooks",
        "animater",
        "translater",
        "scrollBehaviorX",
        "scrollBehaviorY"
      ];
      e.forEach(function(r) {
        return t[r].destroy();
      });
    }, o;
  }()
), Vt = (
  /** @class */
  function(o) {
    qt(t, o);
    function t(e, r) {
      var i = o.call(this, [
        "refresh",
        "contentChanged",
        "enable",
        "disable",
        "beforeScrollStart",
        "scrollStart",
        "scroll",
        "scrollEnd",
        "scrollCancel",
        "touchEnd",
        "flick",
        "destroy"
      ]) || this, s = $e(e);
      return s ? (i.plugins = {}, i.options = new to().merge(r).process(), i.setContent(s).valid && (i.hooks = new rt([
        "refresh",
        "enable",
        "disable",
        "destroy",
        "beforeInitialScrollTo",
        "contentChanged"
      ]), i.init(s)), i) : (q("Can not resolve the wrapper DOM."), i);
    }
    return t.use = function(e) {
      var r = e.pluginName, i = t.plugins.some(function(s) {
        return e === s.ctor;
      });
      return i ? t : de(r) ? (q("Plugin Class must specify plugin's name in static property by 'pluginName' field."), t) : (t.pluginsMap[r] = !0, t.plugins.push({
        name: r,
        applyOrder: e.applyOrder,
        ctor: e
      }), t);
    }, t.prototype.setContent = function(e) {
      var r = !1, i = !0, s = e.children[this.options.specifiedIndexAsContent];
      return s ? (r = this.content !== s, r && (this.content = s)) : (q("The wrapper need at least one child element to be content element to scroll."), i = !1), {
        valid: i,
        contentChanged: r
      };
    }, t.prototype.init = function(e) {
      var r = this;
      this.wrapper = e, e.isBScrollContainer = !0, this.scroller = new fo(e, this.content, this.options), this.scroller.hooks.on(this.scroller.hooks.eventTypes.resize, function() {
        r.refresh();
      }), this.eventBubbling(), this.handleAutoBlur(), this.enable(), this.proxy(Mr), this.applyPlugins(), this.refreshWithoutReset(this.content);
      var i = this.options, s = i.startX, n = i.startY, a = {
        x: s,
        y: n
      };
      this.hooks.trigger(this.hooks.eventTypes.beforeInitialScrollTo, a) || this.scroller.scrollTo(a.x, a.y);
    }, t.prototype.applyPlugins = function() {
      var e = this, r = this.options;
      t.plugins.sort(function(i, s) {
        var n, a = (n = {}, n.pre = -1, n.post = 1, n), c = i.applyOrder ? a[i.applyOrder] : 0, l = s.applyOrder ? a[s.applyOrder] : 0;
        return c - l;
      }).forEach(function(i) {
        var s = i.ctor;
        r[i.name] && typeof s == "function" && (e.plugins[i.name] = new s(e));
      });
    }, t.prototype.handleAutoBlur = function() {
      this.options.autoBlur && this.on(this.eventTypes.beforeScrollStart, function() {
        var e = document.activeElement;
        e && (e.tagName === "INPUT" || e.tagName === "TEXTAREA") && e.blur();
      });
    }, t.prototype.eventBubbling = function() {
      ve(this.scroller.hooks, this, [
        this.eventTypes.beforeScrollStart,
        this.eventTypes.scrollStart,
        this.eventTypes.scroll,
        this.eventTypes.scrollEnd,
        this.eventTypes.scrollCancel,
        this.eventTypes.touchEnd,
        this.eventTypes.flick
      ]);
    }, t.prototype.refreshWithoutReset = function(e) {
      this.scroller.refresh(e), this.hooks.trigger(this.hooks.eventTypes.refresh, e), this.trigger(this.eventTypes.refresh, e);
    }, t.prototype.proxy = function(e) {
      var r = this;
      e.forEach(function(i) {
        var s = i.key, n = i.sourceKey;
        _r(r, n, s);
      });
    }, t.prototype.refresh = function() {
      var e = this.setContent(this.wrapper), r = e.contentChanged, i = e.valid;
      if (i) {
        var s = this.content;
        this.refreshWithoutReset(s), r && (this.hooks.trigger(this.hooks.eventTypes.contentChanged, s), this.trigger(this.eventTypes.contentChanged, s)), this.scroller.resetPosition();
      }
    }, t.prototype.enable = function() {
      this.scroller.enable(), this.hooks.trigger(this.hooks.eventTypes.enable), this.trigger(this.eventTypes.enable);
    }, t.prototype.disable = function() {
      this.scroller.disable(), this.hooks.trigger(this.hooks.eventTypes.disable), this.trigger(this.eventTypes.disable);
    }, t.prototype.destroy = function() {
      this.hooks.trigger(this.hooks.eventTypes.destroy), this.trigger(this.eventTypes.destroy), this.scroller.destroy();
    }, t.prototype.eventRegister = function(e) {
      this.registerType(e);
    }, t.plugins = [], t.pluginsMap = {}, t;
  }(rt)
);
function Kt(o, t) {
  var e = new Vt(o, t);
  return e;
}
Kt.use = Vt.use;
Kt.plugins = Vt.plugins;
Kt.pluginsMap = Vt.pluginsMap;
var ge = Kt, vo = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.wheelEndTimer = 0, this.wheelMoveTimer = 0, this.wheelStart = !1, this.init();
    }
    return o.prototype.init = function() {
      this.handleBScroll(), this.handleOptions(), this.handleHooks(), this.registerEvent();
    }, o.prototype.handleBScroll = function() {
      this.scroll.registerType([
        "alterOptions",
        "mousewheelStart",
        "mousewheelMove",
        "mousewheelEnd"
      ]);
    }, o.prototype.handleOptions = function() {
      var t = this.scroll.options.mouseWheel === !0 ? {} : this.scroll.options.mouseWheel, e = {
        speed: 20,
        invert: !1,
        easeTime: 300,
        discreteTime: 400,
        throttleTime: 0,
        dampingFactor: 0.1
      };
      this.mouseWheelOpt = F(e, t);
    }, o.prototype.handleHooks = function() {
      this.hooksFn = [], this.registerHooks(this.scroll.hooks, "destroy", this.destroy);
    }, o.prototype.registerEvent = function() {
      this.eventRegister = new L(this.scroll.scroller.wrapper, [
        {
          name: "wheel",
          handler: this.wheelHandler.bind(this)
        },
        {
          name: "mousewheel",
          handler: this.wheelHandler.bind(this)
        },
        {
          name: "DOMMouseScroll",
          handler: this.wheelHandler.bind(this)
        }
      ]);
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.wheelHandler = function(t) {
      if (this.scroll.enabled) {
        this.beforeHandler(t), this.wheelStart || (this.wheelStartHandler(t), this.wheelStart = !0);
        var e = this.getWheelDelta(t);
        this.wheelMoveHandler(e), this.wheelEndDetector(e);
      }
    }, o.prototype.wheelStartHandler = function(t) {
      this.cleanCache();
      var e = this.scroll.scroller, r = e.scrollBehaviorX, i = e.scrollBehaviorY;
      r.setMovingDirection(
        0
        /* Default */
      ), i.setMovingDirection(
        0
        /* Default */
      ), r.setDirection(
        0
        /* Default */
      ), i.setDirection(
        0
        /* Default */
      ), this.scroll.trigger(this.scroll.eventTypes.alterOptions, this.mouseWheelOpt), this.scroll.trigger(this.scroll.eventTypes.mousewheelStart);
    }, o.prototype.cleanCache = function() {
      this.deltaCache = [];
    }, o.prototype.wheelMoveHandler = function(t) {
      var e = this, r = this.mouseWheelOpt, i = r.throttleTime, s = r.dampingFactor;
      if (i && this.wheelMoveTimer)
        this.deltaCache.push(t);
      else {
        var n = this.deltaCache.reduce(function(y, m) {
          return {
            x: y.x + m.x,
            y: y.y + m.y
          };
        }, { x: 0, y: 0 });
        this.cleanCache();
        var a = this.scroll.scroller, c = a.scrollBehaviorX, l = a.scrollBehaviorY;
        c.setMovingDirection(-t.directionX), l.setMovingDirection(-t.directionY), c.setDirection(t.x), l.setDirection(t.y);
        var u = c.performDampingAlgorithm(Math.round(t.x) + n.x, s), f = l.performDampingAlgorithm(Math.round(t.y) + n.x, s);
        if (!this.scroll.trigger(this.scroll.eventTypes.mousewheelMove, {
          x: u,
          y: f
        })) {
          var v = this.getEaseTime();
          (u !== this.scroll.x || f !== this.scroll.y) && this.scroll.scrollTo(u, f, v);
        }
        i && (this.wheelMoveTimer = window.setTimeout(function() {
          e.wheelMoveTimer = 0;
        }, i));
      }
    }, o.prototype.wheelEndDetector = function(t) {
      var e = this;
      window.clearTimeout(this.wheelEndTimer), this.wheelEndTimer = window.setTimeout(function() {
        e.wheelStart = !1, window.clearTimeout(e.wheelMoveTimer), e.wheelMoveTimer = 0, e.scroll.trigger(e.scroll.eventTypes.mousewheelEnd, t);
      }, this.mouseWheelOpt.discreteTime);
    }, o.prototype.getWheelDelta = function(t) {
      var e = this.mouseWheelOpt, r = e.speed, i = e.invert, s = 0, n = 0, a = i ? -1 : 1;
      switch (!0) {
        case "deltaX" in t:
          t.deltaMode === 1 ? (s = -t.deltaX * r, n = -t.deltaY * r) : (s = -t.deltaX, n = -t.deltaY);
          break;
        case "wheelDeltaX" in t:
          s = t.wheelDeltaX / 120 * r, n = t.wheelDeltaY / 120 * r;
          break;
        case "wheelDelta" in t:
          s = n = t.wheelDelta / 120 * r;
          break;
        case "detail" in t:
          s = n = -t.detail / 3 * r;
          break;
      }
      s *= a, n *= a, this.scroll.hasVerticalScroll || (Math.abs(n) > Math.abs(s) && (s = n), n = 0), this.scroll.hasHorizontalScroll || (s = 0);
      var c = s > 0 ? -1 : s < 0 ? 1 : 0, l = n > 0 ? -1 : n < 0 ? 1 : 0;
      return {
        x: s,
        y: n,
        directionX: c,
        directionY: l
      };
    }, o.prototype.beforeHandler = function(t) {
      var e = this.scroll.options, r = e.preventDefault, i = e.stopPropagation, s = e.preventDefaultException;
      r && !mt(t.target, s) && ht(t), i && t.stopPropagation();
    }, o.prototype.getEaseTime = function() {
      var t = 100, e = this.mouseWheelOpt.easeTime;
      return e < t && q("easeTime should be greater than 100.If mouseWheel easeTime is too small,scrollEnd will be triggered many times."), Math.max(e, t);
    }, o.prototype.destroy = function() {
      this.eventRegister.destroy(), window.clearTimeout(this.wheelEndTimer), window.clearTimeout(this.wheelMoveTimer), this.hooksFn.forEach(function(t) {
        var e = t[0], r = t[1], i = t[2];
        e.off(r, i);
      });
    }, o.pluginName = "mouseWheel", o.applyOrder = "pre", o;
  }()
), go = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.stopObserver = !1, this.init();
    }
    return o.prototype.init = function() {
      this.handleMutationObserver(), this.handleHooks();
    }, o.prototype.handleMutationObserver = function() {
      var t = this;
      if (typeof MutationObserver < "u") {
        var e = 0;
        this.observer = new MutationObserver(function(r) {
          t.mutationObserverHandler(r, e);
        }), this.startObserve(this.observer);
      } else
        this.checkDOMUpdate();
    }, o.prototype.handleHooks = function() {
      var t = this;
      this.hooksFn = [], this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, function() {
        t.stopObserve(), t.handleMutationObserver();
      }), this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.enable, function() {
        t.stopObserver && t.handleMutationObserver();
      }), this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.disable, function() {
        t.stopObserve();
      }), this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.destroy, function() {
        t.destroy();
      });
    }, o.prototype.mutationObserverHandler = function(t, e) {
      var r = this;
      if (!this.shouldNotRefresh()) {
        for (var i = !1, s = !1, n = 0; n < t.length; n++) {
          var a = t[n];
          if (a.type !== "attributes") {
            i = !0;
            break;
          } else if (a.target !== this.scroll.scroller.content) {
            s = !0;
            break;
          }
        }
        i ? this.scroll.refresh() : s && (clearTimeout(e), e = window.setTimeout(function() {
          r.shouldNotRefresh() || r.scroll.refresh();
        }, 60));
      }
    }, o.prototype.startObserve = function(t) {
      var e = {
        attributes: !0,
        childList: !0,
        subtree: !0
      };
      t.observe(this.scroll.scroller.content, e);
    }, o.prototype.shouldNotRefresh = function() {
      var t = this.scroll.scroller, e = t.scrollBehaviorX, r = t.scrollBehaviorY, i = e.currentPos > e.minScrollPos || e.currentPos < e.maxScrollPos || r.currentPos > r.minScrollPos || r.currentPos < r.maxScrollPos;
      return t.animater.pending || i;
    }, o.prototype.checkDOMUpdate = function() {
      var t = this, e = this.scroll.scroller.content, r = ct(e), i = r.width, s = r.height, n = function() {
        if (!t.stopObserver) {
          r = ct(e);
          var c = r.width, l = r.height;
          (i !== c || s !== l) && t.scroll.refresh(), i = c, s = l, a();
        }
      }, a = function() {
        setTimeout(function() {
          n();
        }, 1e3);
      };
      a();
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.stopObserve = function() {
      this.stopObserver = !0, this.observer && this.observer.disconnect();
    }, o.prototype.destroy = function() {
      this.stopObserve(), this.hooksFn.forEach(function(t) {
        var e = t[0], r = t[1], i = t[2];
        e.off(r, i);
      }), this.hooksFn.length = 0;
    }, o.pluginName = "observeDOM", o;
  }()
), yo = "plugins.pullDownRefresh", mo = [
  {
    key: "finishPullDown",
    name: "finishPullDown"
  },
  {
    key: "openPullDown",
    name: "openPullDown"
  },
  {
    key: "closePullDown",
    name: "closePullDown"
  },
  {
    key: "autoPullDownRefresh",
    name: "autoPullDownRefresh"
  }
], To = mo.map(function(o) {
  return {
    key: o.key,
    sourceKey: yo + "." + o.name
  };
}), he = "pullingDown", je = "enterThreshold", qe = "leaveThreshold", So = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.pulling = 0, this.thresholdBoundary = 0, this.init();
    }
    return o.prototype.setPulling = function(t) {
      this.pulling = t;
    }, o.prototype.setThresholdBoundary = function(t) {
      this.thresholdBoundary = t;
    }, o.prototype.init = function() {
      this.handleBScroll(), this.handleOptions(this.scroll.options.pullDownRefresh), this.handleHooks(), this.watch();
    }, o.prototype.handleBScroll = function() {
      this.scroll.registerType([
        he,
        je,
        qe
      ]), this.scroll.proxy(To);
    }, o.prototype.handleOptions = function(t) {
      t === void 0 && (t = {}), t = t === !0 ? {} : t;
      var e = {
        threshold: 90,
        stop: 40
      };
      this.options = F(e, t), this.scroll.options.probeType = 3;
    }, o.prototype.handleHooks = function() {
      var t = this;
      this.hooksFn = [];
      var e = this.scroll.scroller, r = e.scrollBehaviorY;
      this.currentMinScrollY = this.cachedOriginanMinScrollY = r.minScrollPos, this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, function() {
        t.finishPullDown();
      }), this.registerHooks(r.hooks, r.hooks.eventTypes.computeBoundary, function(i) {
        i.maxScrollPos > 0 && (i.maxScrollPos = -1), i.minScrollPos = t.currentMinScrollY;
      }), this.hasMouseWheelPlugin() && (this.registerHooks(this.scroll, this.scroll.eventTypes.alterOptions, function(i) {
        var s = 300, n = 350;
        i.discreteTime = s, i.easeTime = n;
      }), this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelEnd, function() {
        e.hooks.trigger(e.hooks.eventTypes.end);
      }));
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.hasMouseWheelPlugin = function() {
      return !!this.scroll.eventTypes.alterOptions;
    }, o.prototype.watch = function() {
      var t = this.scroll.scroller;
      this.watching = !0, this.registerHooks(t.hooks, t.hooks.eventTypes.end, this.checkPullDown), this.registerHooks(this.scroll, this.scroll.eventTypes.scrollStart, this.resetStateBeforeScrollStart), this.registerHooks(this.scroll, this.scroll.eventTypes.scroll, this.checkLocationOfThresholdBoundary), this.hasMouseWheelPlugin() && this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelStart, this.resetStateBeforeScrollStart);
    }, o.prototype.resetStateBeforeScrollStart = function() {
      this.isFetchingStatus() || (this.setPulling(
        1
        /* MOVING */
      ), this.setThresholdBoundary(
        0
        /* DEFAULT */
      ));
    }, o.prototype.checkLocationOfThresholdBoundary = function() {
      if (this.pulling === 1) {
        var t = this.scroll, e = this.thresholdBoundary !== 1 && this.locateInsideThresholdBoundary(), r = this.thresholdBoundary !== 2 && !this.locateInsideThresholdBoundary();
        e && (this.setThresholdBoundary(
          1
          /* INSIDE */
        ), t.trigger(je)), r && (this.setThresholdBoundary(
          2
          /* OUTSIDE */
        ), t.trigger(qe));
      }
    }, o.prototype.locateInsideThresholdBoundary = function() {
      return this.scroll.y <= this.options.threshold;
    }, o.prototype.unwatch = function() {
      var t = this.scroll, e = t.scroller;
      this.watching = !1, e.hooks.off(e.hooks.eventTypes.end, this.checkPullDown), t.off(t.eventTypes.scrollStart, this.resetStateBeforeScrollStart), t.off(t.eventTypes.scroll, this.checkLocationOfThresholdBoundary), this.hasMouseWheelPlugin() && t.off(t.eventTypes.mousewheelStart, this.resetStateBeforeScrollStart);
    }, o.prototype.checkPullDown = function() {
      var t = this.options, e = t.threshold, r = t.stop;
      return this.scroll.y < e ? !1 : (this.pulling === 1 && (this.modifyBehaviorYBoundary(r), this.setPulling(
        2
        /* FETCHING */
      ), this.scroll.trigger(he)), this.scroll.scrollTo(this.scroll.x, r, this.scroll.options.bounceTime, R.bounce), this.isFetchingStatus());
    }, o.prototype.isFetchingStatus = function() {
      return this.pulling === 2;
    }, o.prototype.modifyBehaviorYBoundary = function(t) {
      var e = this.scroll.scroller.scrollBehaviorY;
      this.cachedOriginanMinScrollY = e.minScrollPos, this.currentMinScrollY = t, e.computeBoundary();
    }, o.prototype.finishPullDown = function() {
      if (this.isFetchingStatus()) {
        var t = this.scroll.scroller.scrollBehaviorY;
        this.currentMinScrollY = this.cachedOriginanMinScrollY, t.computeBoundary(), this.setPulling(
          0
          /* DEFAULT */
        ), this.scroll.resetPosition(this.scroll.options.bounceTime, R.bounce);
      }
    }, o.prototype.openPullDown = function(t) {
      t === void 0 && (t = {}), this.handleOptions(t), this.watching || this.watch();
    }, o.prototype.closePullDown = function() {
      this.unwatch();
    }, o.prototype.autoPullDownRefresh = function() {
      var t = this.options, e = t.threshold, r = t.stop;
      this.isFetchingStatus() || !this.watching || (this.modifyBehaviorYBoundary(r), this.scroll.trigger(this.scroll.eventTypes.scrollStart), this.scroll.scrollTo(this.scroll.x, e), this.setPulling(
        2
        /* FETCHING */
      ), this.scroll.trigger(he), this.scroll.scrollTo(this.scroll.x, r, this.scroll.options.bounceTime, R.bounce));
    }, o.pluginName = "pullDownRefresh", o;
  }()
), ko = "plugins.pullUpLoad", bo = [
  {
    key: "finishPullUp",
    name: "finishPullUp"
  },
  {
    key: "openPullUp",
    name: "openPullUp"
  },
  {
    key: "closePullUp",
    name: "closePullUp"
  },
  {
    key: "autoPullUpLoad",
    name: "autoPullUpLoad"
  }
], Po = bo.map(function(o) {
  return {
    key: o.key,
    sourceKey: ko + "." + o.name
  };
}), Ve = "pullingUp", Eo = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.pulling = !1, this.watching = !1, this.init();
    }
    return o.prototype.init = function() {
      this.handleBScroll(), this.handleOptions(this.scroll.options.pullUpLoad), this.handleHooks(), this.watch();
    }, o.prototype.handleBScroll = function() {
      this.scroll.registerType([Ve]), this.scroll.proxy(Po);
    }, o.prototype.handleOptions = function(t) {
      t === void 0 && (t = {}), t = t === !0 ? {} : t;
      var e = {
        threshold: 0
      };
      this.options = F(e, t), this.scroll.options.probeType = 3;
    }, o.prototype.handleHooks = function() {
      var t = this;
      this.hooksFn = [];
      var e = this.scroll.scroller.scrollBehaviorY;
      this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.contentChanged, function() {
        t.finishPullUp();
      }), this.registerHooks(e.hooks, e.hooks.eventTypes.computeBoundary, function(r) {
        r.maxScrollPos > 0 && (r.maxScrollPos = -1);
      });
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.watch = function() {
      this.watching || (this.watching = !0, this.registerHooks(this.scroll, this.scroll.eventTypes.scroll, this.checkPullUp));
    }, o.prototype.unwatch = function() {
      this.watching = !1, this.scroll.off(this.scroll.eventTypes.scroll, this.checkPullUp);
    }, o.prototype.checkPullUp = function(t) {
      var e = this, r = this.options.threshold;
      this.scroll.movingDirectionY === 1 && t.y <= this.scroll.maxScrollY + r && (this.pulling = !0, this.scroll.once(this.scroll.eventTypes.scrollEnd, function() {
        e.pulling = !1;
      }), this.unwatch(), this.scroll.trigger(Ve));
    }, o.prototype.finishPullUp = function() {
      var t = this;
      this.scroll.scroller.scrollBehaviorY.setMovingDirection(
        0
        /* Default */
      ), this.pulling ? this.scroll.once(this.scroll.eventTypes.scrollEnd, function() {
        t.watch();
      }) : this.watch();
    }, o.prototype.openPullUp = function(t) {
      t === void 0 && (t = {}), this.handleOptions(t), this.watch();
    }, o.prototype.closePullUp = function() {
      this.unwatch();
    }, o.prototype.autoPullUpLoad = function() {
      var t = this.options.threshold, e = this.scroll.scroller.scrollBehaviorY;
      if (!(this.pulling || !this.watching)) {
        var r = -1, i = e.maxScrollPos + t + r;
        this.scroll.scroller.scrollBehaviorY.setMovingDirection(r), this.scroll.scrollTo(this.scroll.x, i, this.scroll.options.bounceTime);
      }
    }, o.pluginName = "pullUpLoad", o;
  }()
), wo = (
  /** @class */
  function() {
    function o(t, e) {
      this.indicator = t, this.options = e, this.hooks = new rt(["touchStart", "touchMove", "touchEnd"]), this.registerEvents();
    }
    return o.prototype.registerEvents = function() {
      var t = this.options, e = t.disableMouse, r = t.disableTouch, i = [], s = [], n = [];
      e || (i.push({
        name: "mousedown",
        handler: this.start.bind(this)
      }), s.push({
        name: "mousemove",
        handler: this.move.bind(this)
      }), n.push({
        name: "mouseup",
        handler: this.end.bind(this)
      })), r || (i.push({
        name: "touchstart",
        handler: this.start.bind(this)
      }), s.push({
        name: "touchmove",
        handler: this.move.bind(this)
      }), n.push({
        name: "touchend",
        handler: this.end.bind(this)
      }, {
        name: "touchcancel",
        handler: this.end.bind(this)
      })), this.startEventRegister = new L(this.indicator.indicatorEl, i), this.moveEventRegister = new L(window, s), this.endEventRegister = new L(window, n);
    }, o.prototype.BScrollIsDisabled = function() {
      return !this.indicator.scroll.enabled;
    }, o.prototype.start = function(t) {
      if (!this.BScrollIsDisabled()) {
        var e = t.touches ? t.touches[0] : t;
        ht(t), t.stopPropagation(), this.initiated = !0, this.lastPoint = e[this.indicator.keysMap.point], this.hooks.trigger(this.hooks.eventTypes.touchStart);
      }
    }, o.prototype.move = function(t) {
      if (this.initiated) {
        var e = t.touches ? t.touches[0] : t, r = e[this.indicator.keysMap.point];
        ht(t), t.stopPropagation();
        var i = r - this.lastPoint;
        this.lastPoint = r, this.hooks.trigger(this.hooks.eventTypes.touchMove, i);
      }
    }, o.prototype.end = function(t) {
      this.initiated && (this.initiated = !1, ht(t), t.stopPropagation(), this.hooks.trigger(this.hooks.eventTypes.touchEnd));
    }, o.prototype.destroy = function() {
      this.startEventRegister.destroy(), this.moveEventRegister.destroy(), this.endEventRegister.destroy();
    }, o;
  }()
), xo = (
  /** @class */
  function() {
    function o(t, e) {
      this.scroll = t, this.options = e, this.hooksFn = [], this.wrapper = e.wrapper, this.direction = e.direction, this.indicatorEl = this.wrapper.children[0], this.keysMap = this.getKeysMap(), this.handleFade(), this.handleHooks();
    }
    return o.prototype.handleFade = function() {
      this.options.fade && (this.wrapper.style.opacity = "0");
    }, o.prototype.handleHooks = function() {
      var t = this, e = this.options, r = e.fade, i = e.interactive, s = e.scrollbarTrackClickable, n = this.scroll, a = n.hooks, c = n.scroller.translater.hooks, l = n.scroller.animater.hooks;
      if (this.registerHooks(a, a.eventTypes.refresh, this.refresh), this.registerHooks(c, c.eventTypes.translate, function(m) {
        var O = t.keysMap.hasScroll;
        t.scroll[O] && t.updatePosition(m);
      }), this.registerHooks(l, l.eventTypes.time, this.transitionTime), this.registerHooks(l, l.eventTypes.timeFunction, this.transitionTimingFunction), r && (this.registerHooks(n, n.eventTypes.scrollEnd, function() {
        t.fade();
      }), this.registerHooks(n, n.eventTypes.scrollStart, function() {
        t.fade(!0);
      }), n.eventTypes.mousewheelStart && n.eventTypes.mousewheelEnd && (this.registerHooks(n, n.eventTypes.mousewheelStart, function() {
        t.fade(!0);
      }), this.registerHooks(n, n.eventTypes.mousewheelMove, function() {
        t.fade(!0);
      }), this.registerHooks(n, n.eventTypes.mousewheelEnd, function() {
        t.fade();
      }))), i) {
        var u = this.scroll.options, f = u.disableMouse, v = u.disableTouch;
        this.eventHandler = new wo(this, {
          disableMouse: f,
          disableTouch: v
        });
        var y = this.eventHandler.hooks;
        this.registerHooks(y, y.eventTypes.touchStart, this.startHandler), this.registerHooks(y, y.eventTypes.touchMove, this.moveHandler), this.registerHooks(y, y.eventTypes.touchEnd, this.endHandler);
      }
      s && this.bindClick();
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.bindClick = function() {
      var t = this.wrapper;
      this.clickEventRegister = new L(t, [
        {
          name: "click",
          handler: this.handleClick.bind(this)
        }
      ]);
    }, o.prototype.handleClick = function(t) {
      var e = this.calculateclickOffsetPos(t), r = this.scroll, i = r.x, s = r.y;
      i = this.direction === "horizontal" ? e : i, s = this.direction === "vertical" ? e : s, this.scroll.scrollTo(i, s, this.options.scrollbarTrackOffsetTime);
    }, o.prototype.calculateclickOffsetPos = function(t) {
      var e = this.keysMap, r = e.point, i = e.domRect, s = this.options.scrollbarTrackOffsetType, n = t[r] - this.wrapperRect[i], a = n < this.currentPos ? -1 : 1, c = 0, l = this.currentPos;
      return s === "step" ? c = this.scrollInfo.baseSize * a : (c = 0, l = n), this.newPos(l, c, this.scrollInfo);
    }, o.prototype.getKeysMap = function() {
      return this.direction === "vertical" ? {
        hasScroll: "hasVerticalScroll",
        size: "height",
        wrapperSize: "clientHeight",
        scrollerSize: "scrollerHeight",
        maxScrollPos: "maxScrollY",
        pos: "y",
        point: "pageY",
        translateProperty: "translateY",
        domRect: "top"
      } : {
        hasScroll: "hasHorizontalScroll",
        size: "width",
        wrapperSize: "clientWidth",
        scrollerSize: "scrollerWidth",
        maxScrollPos: "maxScrollX",
        pos: "x",
        point: "pageX",
        translateProperty: "translateX",
        domRect: "left"
      };
    }, o.prototype.fade = function(t) {
      var e = this.options, r = e.fadeInTime, i = e.fadeOutTime, s = t ? r : i, n = this.wrapper;
      n.style[x.transitionDuration] = s + "ms", n.style.opacity = t ? "1" : "0";
    }, o.prototype.refresh = function() {
      var t = this.keysMap.hasScroll, e = this.scroll, r = e.x, i = e.y;
      if (this.wrapperRect = this.wrapper.getBoundingClientRect(), this.canScroll(e[t])) {
        var s = this.keysMap, n = s.wrapperSize, a = s.scrollerSize, c = s.maxScrollPos;
        this.scrollInfo = this.refreshScrollInfo(this.wrapper[n], e[a], e[c], this.indicatorEl[n]), this.updatePosition({
          x: r,
          y: i
        });
      }
    }, o.prototype.transitionTime = function(t) {
      t === void 0 && (t = 0), this.indicatorEl.style[x.transitionDuration] = t + "ms";
    }, o.prototype.transitionTimingFunction = function(t) {
      this.indicatorEl.style[x.transitionTimingFunction] = t;
    }, o.prototype.canScroll = function(t) {
      return this.wrapper.style.display = t ? "block" : "none", t;
    }, o.prototype.refreshScrollInfo = function(t, e, r, i) {
      var s = Math.max(Math.round(t * t / (e || t || 1)), this.options.minSize);
      this.options.isCustom && (s = i);
      var n = t - s, a = n / r;
      return {
        baseSize: s,
        maxScrollPos: n,
        minScrollPos: 0,
        sizeRatio: a
      };
    }, o.prototype.updatePosition = function(t) {
      var e = this.caculatePosAndSize(t, this.scrollInfo), r = e.pos, i = e.size;
      this.refreshStyle(i, r), this.currentPos = r;
    }, o.prototype.caculatePosAndSize = function(t, e) {
      var r = this.keysMap.pos, i = e.sizeRatio, s = e.baseSize, n = e.maxScrollPos, a = e.minScrollPos, c = this.options.minSize, l = Math.round(i * t[r]), u;
      return l < a ? (u = Math.max(s + l * 3, c), l = a) : l > n ? (u = Math.max(s - (l - n) * 3, c), l = n + s - u) : u = s, {
        pos: l,
        size: u
      };
    }, o.prototype.refreshStyle = function(t, e) {
      var r = this.keysMap, i = r.translateProperty, s = r.size, n = this.scroll.options.translateZ;
      this.indicatorEl.style[s] = t + "px", this.indicatorEl.style[x.transform] = i + "(" + e + "px)" + n;
    }, o.prototype.startHandler = function() {
      this.moved = !1, this.startTime = N(), this.transitionTime(), this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.beforeScrollStart);
    }, o.prototype.moveHandler = function(t) {
      if (!this.moved && !this.indicatorNotMoved(t) && (this.moved = !0, this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollStart)), this.moved) {
        var e = this.newPos(this.currentPos, t, this.scrollInfo);
        this.syncBScroll(e);
      }
    }, o.prototype.endHandler = function() {
      if (this.moved) {
        var t = this.scroll, e = t.x, r = t.y;
        this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollEnd, {
          x: e,
          y: r
        });
      }
    }, o.prototype.indicatorNotMoved = function(t) {
      var e = this.currentPos, r = this.scrollInfo, i = r.maxScrollPos, s = r.minScrollPos, n = e === s && t <= 0 || e === i && t >= 0;
      return n;
    }, o.prototype.syncBScroll = function(t) {
      var e = N(), r = this.scroll, i = r.x, s = r.y, n = r.options, a = r.scroller, c = r.maxScrollY, l = r.minScrollY, u = r.maxScrollX, f = r.minScrollX, v = n.probeType, y = n.momentumLimitTime, m = { x: i, y: s };
      this.direction === "vertical" ? m.y = C(t, c, l) : m.x = C(t, u, f), a.translater.translate(m), e - this.startTime > y && (this.startTime = e, v === 1 && a.hooks.trigger(a.hooks.eventTypes.scroll, m)), v > 1 && a.hooks.trigger(a.hooks.eventTypes.scroll, m);
    }, o.prototype.newPos = function(t, e, r) {
      var i = r.maxScrollPos, s = r.sizeRatio, n = r.minScrollPos, a = t + e;
      return a = C(a, n, i), Math.round(a / s);
    }, o.prototype.destroy = function() {
      var t = this.options, e = t.interactive, r = t.scrollbarTrackClickable, i = t.isCustom;
      e && this.eventHandler.destroy(), r && this.clickEventRegister.destroy(), i || this.wrapper.parentNode.removeChild(this.wrapper), this.hooksFn.forEach(function(s) {
        var n = s[0], a = s[1], c = s[2];
        n.off(a, c);
      }), this.hooksFn.length = 0;
    }, o;
  }()
), Ao = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.handleOptions(), this.createIndicators(), this.handleHooks();
    }
    return o.prototype.handleHooks = function() {
      var t = this, e = this.scroll;
      e.hooks.on(e.hooks.eventTypes.destroy, function() {
        for (var r = 0, i = t.indicators; r < i.length; r++) {
          var s = i[r];
          s.destroy();
        }
      });
    }, o.prototype.handleOptions = function() {
      var t = this.scroll.options.scrollbar === !0 ? {} : this.scroll.options.scrollbar, e = {
        fade: !0,
        fadeInTime: 250,
        fadeOutTime: 500,
        interactive: !1,
        customElements: [],
        minSize: 8,
        scrollbarTrackClickable: !1,
        scrollbarTrackOffsetType: "step",
        scrollbarTrackOffsetTime: 300
      };
      this.options = F(e, t);
    }, o.prototype.createIndicators = function() {
      for (var t, e = this.scroll, r = [], i = ["scrollX", "scrollY"], s = [
        "horizontal",
        "vertical"
      ], n = this.options.customElements, a = 0; a < i.length; a++) {
        var c = i[a];
        if (e.options[c]) {
          var l = n.shift(), u = s[a], f = !1, v = l || this.createScrollbarElement(u);
          v !== l ? e.wrapper.appendChild(v) : f = !0, t = V(V({ wrapper: v, direction: u }, this.options), { isCustom: f }), r.push(new xo(e, t));
        }
      }
      this.indicators = r;
    }, o.prototype.createScrollbarElement = function(t, e) {
      e === void 0 && (e = this.options.scrollbarTrackClickable);
      var r = document.createElement("div"), i = document.createElement("div");
      return r.style.cssText = "position:absolute;z-index:9999;overflow:hidden;", i.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;", i.className = "bscroll-indicator", t === "horizontal" ? (r.style.cssText += "height:7px;left:2px;right:2px;bottom:0;", i.style.height = "100%", r.className = "bscroll-horizontal-scrollbar") : (r.style.cssText += "width:7px;bottom:2px;top:2px;right:1px;", i.style.width = "100%", r.className = "bscroll-vertical-scrollbar"), e || (r.style.cssText += "pointer-events:none;"), r.appendChild(i), r;
    }, o.pluginName = "scrollbar", o;
  }()
), ir = {
  pageX: 0,
  pageY: 0,
  x: 0,
  y: 0
}, Mo = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  cx: 0,
  cy: 0
}, Yo = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.init();
    }
    return o.prototype.init = function() {
      var t = this.scroll.scroller, e = t.scrollBehaviorX, r = t.scrollBehaviorY;
      this.wrapperWidth = e.wrapperSize, this.wrapperHeight = r.wrapperSize, this.scrollerHeight = r.contentSize, this.scrollerWidth = e.contentSize, this.pages = this.buildPagesMatrix(this.wrapperWidth, this.wrapperHeight), this.pageLengthOfX = this.pages ? this.pages.length : 0, this.pageLengthOfY = this.pages && this.pages[0] ? this.pages[0].length : 0;
    }, o.prototype.getPageStats = function(t, e) {
      return this.pages[t] && this.pages[t][e] ? this.pages[t][e] : Mo;
    }, o.prototype.getNearestPageIndex = function(t, e) {
      for (var r = 0, i = 0, s = this.pages.length; r < s - 1 && !(t >= this.pages[r][0].cx); r++)
        ;
      for (s = this.pages[r] ? this.pages[r].length : 0; i < s - 1 && !(e >= this.pages[0][i].cy); i++)
        ;
      return {
        pageX: r,
        pageY: i
      };
    }, o.prototype.buildPagesMatrix = function(t, e) {
      var r = [], i = 0, s, n, a, c = 0, l, u = this.scroll.scroller.scrollBehaviorX.maxScrollPos, f = this.scroll.scroller.scrollBehaviorY.maxScrollPos;
      for (n = Math.round(t / 2), a = Math.round(e / 2); i > -this.scrollerWidth; ) {
        for (r[c] = [], l = 0, s = 0; s > -this.scrollerHeight; )
          r[c][l] = {
            x: Math.max(i, u),
            y: Math.max(s, f),
            width: t,
            height: e,
            cx: i - n,
            cy: s - a
          }, s -= e, l++;
        i -= t, c++;
      }
      return r;
    }, o;
  }()
), Bo = (
  /** @class */
  function() {
    function o(t, e) {
      this.scroll = t, this.slideOptions = e, this.slideX = !1, this.slideY = !1, this.currentPage = F({}, ir);
    }
    return o.prototype.refresh = function() {
      this.pagesMatrix = new Yo(this.scroll), this.checkSlideLoop(), this.currentPage = this.getAdjustedCurrentPage();
    }, o.prototype.getAdjustedCurrentPage = function() {
      var t = this.currentPage, e = t.pageX, r = t.pageY;
      e = Math.min(e, this.pagesMatrix.pageLengthOfX - 1), r = Math.min(r, this.pagesMatrix.pageLengthOfY - 1), this.loopX && (e = Math.min(e, this.pagesMatrix.pageLengthOfX - 2)), this.loopY && (r = Math.min(r, this.pagesMatrix.pageLengthOfY - 2));
      var i = this.pagesMatrix.getPageStats(e, r), s = i.x, n = i.y;
      return { pageX: e, pageY: r, x: s, y: n };
    }, o.prototype.setCurrentPage = function(t) {
      this.currentPage = t;
    }, o.prototype.getInternalPage = function(t, e) {
      t >= this.pagesMatrix.pageLengthOfX ? t = this.pagesMatrix.pageLengthOfX - 1 : t < 0 && (t = 0), e >= this.pagesMatrix.pageLengthOfY ? e = this.pagesMatrix.pageLengthOfY - 1 : e < 0 && (e = 0);
      var r = this.pagesMatrix.getPageStats(t, e), i = r.x, s = r.y;
      return {
        pageX: t,
        pageY: e,
        x: i,
        y: s
      };
    }, o.prototype.getInitialPage = function(t, e) {
      t === void 0 && (t = !1), e === void 0 && (e = !1);
      var r = this.slideOptions, i = r.startPageXIndex, s = r.startPageYIndex, n = this.loopX ? 1 : 0, a = this.loopY ? 1 : 0, c = t ? n : this.currentPage.pageX, l = t ? a : this.currentPage.pageY;
      e ? (c = this.loopX ? i + 1 : i, l = this.loopY ? s + 1 : s) : (c = t ? n : this.currentPage.pageX, l = t ? a : this.currentPage.pageY);
      var u = this.pagesMatrix.getPageStats(c, l), f = u.x, v = u.y;
      return {
        pageX: c,
        pageY: l,
        x: f,
        y: v
      };
    }, o.prototype.getExposedPage = function(t) {
      var e = F({}, t);
      return this.loopX && (e.pageX = this.fixedPage(e.pageX, this.pagesMatrix.pageLengthOfX - 2)), this.loopY && (e.pageY = this.fixedPage(e.pageY, this.pagesMatrix.pageLengthOfY - 2)), e;
    }, o.prototype.getExposedPageByPageIndex = function(t, e) {
      var r = {
        pageX: t,
        pageY: e
      };
      this.loopX && (r.pageX = t + 1), this.loopY && (r.pageY = e + 1);
      var i = this.pagesMatrix.getPageStats(r.pageX, r.pageY), s = i.x, n = i.y;
      return {
        x: s,
        y: n,
        pageX: t,
        pageY: e
      };
    }, o.prototype.getWillChangedPage = function(t) {
      return t = F({}, t), this.loopX && (t.pageX = this.fixedPage(t.pageX, this.pagesMatrix.pageLengthOfX - 2), t.x = this.pagesMatrix.getPageStats(t.pageX + 1, 0).x), this.loopY && (t.pageY = this.fixedPage(t.pageY, this.pagesMatrix.pageLengthOfY - 2), t.y = this.pagesMatrix.getPageStats(0, t.pageY + 1).y), t;
    }, o.prototype.fixedPage = function(t, e) {
      for (var r = [], i = 0; i < e; i++)
        r.push(i);
      return r.unshift(e - 1), r.push(0), r[t];
    }, o.prototype.getPageStats = function() {
      return this.pagesMatrix.getPageStats(this.currentPage.pageX, this.currentPage.pageY);
    }, o.prototype.getValidPageIndex = function(t, e) {
      var r = this.pagesMatrix.pageLengthOfX - 1, i = this.pagesMatrix.pageLengthOfY - 1, s = 0, n = 0;
      return this.loopX && (t += 1, s = s + 1, r = r - 1), this.loopY && (e += 1, n = n + 1, i = i - 1), t = C(t, s, r), e = C(e, n, i), {
        pageX: t,
        pageY: e
      };
    }, o.prototype.nextPageIndex = function() {
      return this.getPageIndexByDirection(
        "positive"
        /* Positive */
      );
    }, o.prototype.prevPageIndex = function() {
      return this.getPageIndexByDirection(
        "negative"
        /* Negative */
      );
    }, o.prototype.getNearestPage = function(t, e) {
      var r = this.pagesMatrix.getNearestPageIndex(t, e), i = r.pageX, s = r.pageY, n = this.pagesMatrix.getPageStats(i, 0).x, a = this.pagesMatrix.getPageStats(0, s).y;
      return {
        x: n,
        y: a,
        pageX: i,
        pageY: s
      };
    }, o.prototype.getPageByDirection = function(t, e, r) {
      var i = t.pageX, s = t.pageY;
      i === this.currentPage.pageX && (i = C(i + e, 0, this.pagesMatrix.pageLengthOfX - 1)), s === this.currentPage.pageY && (s = C(s + r, 0, this.pagesMatrix.pageLengthOfY - 1));
      var n = this.pagesMatrix.getPageStats(i, 0).x, a = this.pagesMatrix.getPageStats(0, s).y;
      return {
        x: n,
        y: a,
        pageX: i,
        pageY: s
      };
    }, o.prototype.resetLoopPage = function() {
      if (this.loopX) {
        if (this.currentPage.pageX === 0)
          return {
            pageX: this.pagesMatrix.pageLengthOfX - 2,
            pageY: this.currentPage.pageY
          };
        if (this.currentPage.pageX === this.pagesMatrix.pageLengthOfX - 1)
          return {
            pageX: 1,
            pageY: this.currentPage.pageY
          };
      }
      if (this.loopY) {
        if (this.currentPage.pageY === 0)
          return {
            pageX: this.currentPage.pageX,
            pageY: this.pagesMatrix.pageLengthOfY - 2
          };
        if (this.currentPage.pageY === this.pagesMatrix.pageLengthOfY - 1)
          return {
            pageX: this.currentPage.pageX,
            pageY: 1
          };
      }
    }, o.prototype.getPageIndexByDirection = function(t) {
      var e = this.currentPage.pageX, r = this.currentPage.pageY;
      return this.slideX && (e = t === "negative" ? e - 1 : e + 1), this.slideY && (r = t === "negative" ? r - 1 : r + 1), {
        pageX: e,
        pageY: r
      };
    }, o.prototype.checkSlideLoop = function() {
      this.wannaLoop = this.slideOptions.loop, this.pagesMatrix.pageLengthOfX > 1 ? this.slideX = !0 : this.slideX = !1, this.pagesMatrix.pages[0] && this.pagesMatrix.pageLengthOfY > 1 ? this.slideY = !0 : this.slideY = !1, this.loopX = this.wannaLoop && this.slideX, this.loopY = this.wannaLoop && this.slideY, this.slideX && this.slideY && q("slide does not support two direction at the same time.");
    }, o;
  }()
), Do = "plugins.slide", Xo = [
  {
    key: "next",
    name: "next"
  },
  {
    key: "prev",
    name: "prev"
  },
  {
    key: "goToPage",
    name: "goToPage"
  },
  {
    key: "getCurrentPage",
    name: "getCurrentPage"
  },
  {
    key: "startPlay",
    name: "startPlay"
  },
  {
    key: "pausePlay",
    name: "pausePlay"
  }
], Co = Xo.map(function(o) {
  return {
    key: o.key,
    sourceKey: Do + "." + o.name
  };
}), Oo = function(o, t) {
  return o.pageX === t.pageX && o.pageY === t.pageY;
}, Ho = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.cachedClonedPageDOM = [], this.resetLooping = !1, this.autoplayTimer = 0, this.satisfyInitialization() && this.init();
    }
    return o.prototype.satisfyInitialization = function() {
      return this.scroll.scroller.content.children.length <= 0 ? (q("slide need at least one slide page to be initialised.please check your DOM layout."), !1) : !0;
    }, o.prototype.init = function() {
      this.willChangeToPage = F({}, ir), this.handleBScroll(), this.handleOptions(), this.handleHooks(), this.createPages();
    }, o.prototype.createPages = function() {
      this.pages = new Bo(this.scroll, this.options);
    }, o.prototype.handleBScroll = function() {
      this.scroll.registerType(["slideWillChange", "slidePageChanged"]), this.scroll.proxy(Co);
    }, o.prototype.handleOptions = function() {
      var t = this.scroll.options.slide === !0 ? {} : this.scroll.options.slide, e = {
        loop: !0,
        threshold: 0.1,
        speed: 400,
        easing: R.bounce,
        listenFlick: !0,
        autoplay: !0,
        interval: 3e3,
        startPageXIndex: 0,
        startPageYIndex: 0
      };
      this.options = F(e, t);
    }, o.prototype.handleLoop = function(t) {
      var e = this.options.loop, r = this.scroll.scroller.content, i = r.children.length;
      e && (r !== t ? (this.resetLoopChangedStatus(), this.removeClonedSlidePage(t), i > 1 && this.cloneFirstAndLastSlidePage(r)) : i === 3 && this.initialised ? (this.removeClonedSlidePage(r), this.moreToOnePageInLoop = !0, this.oneToMorePagesInLoop = !1) : i > 1 ? (this.initialised && this.cachedClonedPageDOM.length === 0 ? (this.oneToMorePagesInLoop = !0, this.moreToOnePageInLoop = !1) : (this.removeClonedSlidePage(r), this.resetLoopChangedStatus()), this.cloneFirstAndLastSlidePage(r)) : this.resetLoopChangedStatus());
    }, o.prototype.resetLoopChangedStatus = function() {
      this.moreToOnePageInLoop = !1, this.oneToMorePagesInLoop = !1;
    }, o.prototype.handleHooks = function() {
      var t = this, e = this.scroll.hooks, r = this.scroll.scroller.hooks, i = this.options.listenFlick;
      this.prevContent = this.scroll.scroller.content, this.hooksFn = [], this.registerHooks(this.scroll, this.scroll.eventTypes.beforeScrollStart, this.pausePlay), this.registerHooks(this.scroll, this.scroll.eventTypes.scrollEnd, this.modifyCurrentPage), this.registerHooks(this.scroll, this.scroll.eventTypes.scrollEnd, this.startPlay), this.scroll.eventTypes.mousewheelMove && (this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelMove, function() {
        return !0;
      }), this.registerHooks(this.scroll, this.scroll.eventTypes.mousewheelEnd, function(s) {
        (s.directionX === 1 || s.directionY === 1) && t.next(), (s.directionX === -1 || s.directionY === -1) && t.prev();
      })), this.registerHooks(e, e.eventTypes.refresh, this.refreshHandler), this.registerHooks(e, e.eventTypes.destroy, this.destroy), this.registerHooks(r, r.eventTypes.beforeRefresh, function() {
        t.handleLoop(t.prevContent), t.setSlideInlineStyle();
      }), this.registerHooks(r, r.eventTypes.momentum, this.modifyScrollMetaHandler), this.registerHooks(r, r.eventTypes.scroll, this.scrollHandler), this.registerHooks(r, r.eventTypes.checkClick, this.startPlay), i && this.registerHooks(r, r.eventTypes.flick, this.flickHandler);
    }, o.prototype.startPlay = function() {
      var t = this, e = this.options, r = e.interval, i = e.autoplay;
      i && (clearTimeout(this.autoplayTimer), this.autoplayTimer = window.setTimeout(function() {
        t.next();
      }, r));
    }, o.prototype.pausePlay = function() {
      this.options.autoplay && clearTimeout(this.autoplayTimer);
    }, o.prototype.setSlideInlineStyle = function() {
      var t = [
        {
          direction: "scrollX",
          sizeType: "offsetWidth",
          styleType: "width"
        },
        {
          direction: "scrollY",
          sizeType: "offsetHeight",
          styleType: "height"
        }
      ], e = this.scroll.scroller, r = e.content, i = e.wrapper, s = this.scroll.options;
      t.forEach(function(n) {
        var a = n.direction, c = n.sizeType, l = n.styleType;
        if (s[a]) {
          for (var u = i[c], f = r.children, v = f.length, y = 0; y < v; y++) {
            var m = f[y];
            m.style[l] = u + "px";
          }
          r.style[l] = u * v + "px";
        }
      });
    }, o.prototype.next = function(t, e) {
      var r = this.pages.nextPageIndex(), i = r.pageX, s = r.pageY;
      this.goTo(i, s, t, e);
    }, o.prototype.prev = function(t, e) {
      var r = this.pages.prevPageIndex(), i = r.pageX, s = r.pageY;
      this.goTo(i, s, t, e);
    }, o.prototype.goToPage = function(t, e, r, i) {
      var s = this.pages.getValidPageIndex(t, e);
      this.goTo(s.pageX, s.pageY, r, i);
    }, o.prototype.getCurrentPage = function() {
      return this.exposedPage || this.pages.getInitialPage(!1, !0);
    }, o.prototype.setCurrentPage = function(t) {
      this.pages.setCurrentPage(t), this.exposedPage = this.pages.getExposedPage(t);
    }, o.prototype.nearestPage = function(t, e) {
      var r = this.scroll.scroller, i = r.scrollBehaviorX, s = r.scrollBehaviorY, n = i.maxScrollPos, a = i.minScrollPos, c = s.maxScrollPos, l = s.minScrollPos;
      return this.pages.getNearestPage(C(t, n, a), C(e, c, l));
    }, o.prototype.satisfyThreshold = function(t, e) {
      var r = this.scroll.scroller, i = r.scrollBehaviorX, s = r.scrollBehaviorY, n = !0;
      return Math.abs(t - i.absStartPos) <= this.thresholdX && Math.abs(e - s.absStartPos) <= this.thresholdY && (n = !1), n;
    }, o.prototype.refreshHandler = function(t) {
      var e = this;
      if (this.satisfyInitialization()) {
        this.pages.refresh(), this.computeThreshold();
        var r = this.contentChanged = this.prevContent !== t;
        r && (this.prevContent = t);
        var i = this.pages.getInitialPage(this.oneToMorePagesInLoop || this.moreToOnePageInLoop, r || !this.initialised);
        this.initialised ? this.goTo(i.pageX, i.pageY, 0) : this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.beforeInitialScrollTo, function(s) {
          e.initialised = !0, s.x = i.x, s.y = i.y;
        }), this.startPlay();
      }
    }, o.prototype.computeThreshold = function() {
      var t = this.options.threshold;
      if (t % 1 === 0)
        this.thresholdX = t, this.thresholdY = t;
      else {
        var e = this.pages.getPageStats(), r = e.width, i = e.height;
        this.thresholdX = Math.round(r * t), this.thresholdY = Math.round(i * t);
      }
    }, o.prototype.cloneFirstAndLastSlidePage = function(t) {
      var e = t.children, r = e[e.length - 1].cloneNode(!0), i = e[0].cloneNode(!0);
      jr(r, t), t.appendChild(i), this.cachedClonedPageDOM = [r, i];
    }, o.prototype.removeClonedSlidePage = function(t) {
      var e = t && t.children || [];
      e.length && this.cachedClonedPageDOM.forEach(function(r) {
        Vr(t, r);
      }), this.cachedClonedPageDOM = [];
    }, o.prototype.modifyCurrentPage = function(t) {
      var e = this.getCurrentPage(), r = e.pageX, i = e.pageY, s = this.nearestPage(t.x, t.y);
      if (this.setCurrentPage(s), this.contentChanged)
        return this.contentChanged = !1, !0;
      var n = this.getCurrentPage(), a = n.pageX, c = n.pageY;
      if (this.pageWillChangeTo(s), this.oneToMorePagesInLoop)
        return this.oneToMorePagesInLoop = !1, !0;
      if (this.moreToOnePageInLoop && r === 0 && i === 0)
        return this.moreToOnePageInLoop = !1, !0;
      if (r !== a || i !== c) {
        var l = this.pages.getExposedPageByPageIndex(a, c);
        this.scroll.trigger(this.scroll.eventTypes.slidePageChanged, l);
      }
      if (this.resetLooping) {
        this.resetLooping = !1;
        return;
      }
      var u = this.pages.resetLoopPage();
      if (u)
        return this.resetLooping = !0, this.goTo(u.pageX, u.pageY, 0), !0;
    }, o.prototype.goTo = function(t, e, r, i) {
      var s = this.pages.getInternalPage(t, e), n = i || this.options.easing || R.bounce, a = s.x, c = s.y, l = a - this.scroll.scroller.scrollBehaviorX.currentPos, u = c - this.scroll.scroller.scrollBehaviorY.currentPos;
      if (!l && !u) {
        this.scroll.scroller.togglePointerEvents(!0);
        return;
      }
      r = r === void 0 ? this.getEaseTime(l, u) : r, this.scroll.scroller.scrollTo(a, c, r, n);
    }, o.prototype.flickHandler = function() {
      var t = this.scroll.scroller, e = t.scrollBehaviorX, r = t.scrollBehaviorY, i = e.currentPos, s = e.startPos, n = e.direction, a = r.currentPos, c = r.startPos, l = r.direction, u = this.pages.currentPage, f = u.pageX, v = u.pageY, y = this.getEaseTime(i - s, a - c);
      this.goTo(f + n, v + l, y);
    }, o.prototype.getEaseTime = function(t, e) {
      return this.options.speed || Math.max(Math.max(Math.min(Math.abs(t), 1e3), Math.min(Math.abs(e), 1e3)), 300);
    }, o.prototype.modifyScrollMetaHandler = function(t) {
      var e = this.scroll.scroller, r = e.scrollBehaviorX, i = e.scrollBehaviorY, s = e.animater, n = t.newX, a = t.newY, c = this.satisfyThreshold(n, a) || s.forceStopped ? this.pages.getPageByDirection(this.nearestPage(n, a), r.direction, i.direction) : this.pages.currentPage;
      t.time = this.getEaseTime(t.newX - c.x, t.newY - c.y), t.newX = c.x, t.newY = c.y, t.easing = this.options.easing || R.bounce;
    }, o.prototype.scrollHandler = function(t) {
      var e = t.x, r = t.y;
      if (this.satisfyThreshold(e, r)) {
        var i = this.nearestPage(e, r);
        this.pageWillChangeTo(i);
      }
    }, o.prototype.pageWillChangeTo = function(t) {
      var e = this.pages.getWillChangedPage(t);
      Oo(this.willChangeToPage, e) || (this.willChangeToPage = e, this.scroll.trigger(this.scroll.eventTypes.slideWillChange, this.willChangeToPage));
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.destroy = function() {
      var t = this.scroll.scroller.content, e = this.options, r = e.loop, i = e.autoplay;
      r && this.removeClonedSlidePage(t), i && clearTimeout(this.autoplayTimer), this.hooksFn.forEach(function(s) {
        var n = s[0], a = s[1], c = s[2];
        n.eventTypes[a] && n.off(a, c);
      }), this.hooksFn.length = 0;
    }, o.pluginName = "slide", o;
  }()
), Io = "plugins.wheel", Ro = [
  {
    key: "wheelTo",
    name: "wheelTo"
  },
  {
    key: "getSelectedIndex",
    name: "getSelectedIndex"
  },
  {
    key: "restorePosition",
    name: "restorePosition"
  }
], Fo = Ro.map(function(o) {
  return {
    key: o.key,
    sourceKey: Io + "." + o.name
  };
}), Ke = "wheelIndexChanged", zo = {
  rate: 4
}, Lo = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.init();
    }
    return o.prototype.init = function() {
      this.handleBScroll(), this.handleOptions(), this.handleHooks(), this.refreshBoundary(), this.setSelectedIndex(this.options.selectedIndex);
    }, o.prototype.handleBScroll = function() {
      this.scroll.proxy(Fo), this.scroll.registerType([Ke]);
    }, o.prototype.handleOptions = function() {
      var t = this.scroll.options.wheel === !0 ? {} : this.scroll.options.wheel, e = {
        wheelWrapperClass: "wheel-scroll",
        wheelItemClass: "wheel-item",
        rotate: 25,
        adjustTime: 400,
        selectedIndex: 0,
        wheelDisabledItemClass: "wheel-disabled-item"
      };
      this.options = F(e, t);
    }, o.prototype.handleHooks = function() {
      var t = this, e = this.scroll, r = this.scroll.scroller, i = r.actionsHandler, s = r.scrollBehaviorX, n = r.scrollBehaviorY, a = r.animater, c = r.content;
      e.on(e.eventTypes.scrollEnd, function(l) {
        var u = t.findNearestValidWheel(l.y).index;
        if (r.animater.forceStopped && !t.isAdjustingPosition)
          return t.target = t.items[u], !0;
        t.setSelectedIndex(u), t.isAdjustingPosition && (t.isAdjustingPosition = !1);
      }), this.scroll.hooks.on(this.scroll.hooks.eventTypes.refresh, function(l) {
        l !== c && (c = l, t.setSelectedIndex(t.options.selectedIndex, !0)), t.rotateX(t.scroll.y), t.wheelTo(t.selectedIndex, 0);
      }), this.scroll.hooks.on(this.scroll.hooks.eventTypes.beforeInitialScrollTo, function(l) {
        l.x = 0, l.y = -(t.selectedIndex * t.itemHeight);
      }), r.hooks.on(r.hooks.eventTypes.checkClick, function() {
        var l = Kr(t.items).indexOf(t.target);
        return l === -1 || t.wheelTo(l, t.options.adjustTime, R.swipe), !0;
      }), r.hooks.on(r.hooks.eventTypes.scrollTo, function(l) {
        l.y = t.findNearestValidWheel(l.y).y;
      }), r.hooks.on(r.hooks.eventTypes.minDistanceScroll, function() {
        var l = r.animater;
        l.forceStopped === !0 && (l.forceStopped = !1);
      }), r.hooks.on(r.hooks.eventTypes.scrollToElement, function(l, u) {
        if (Ht(l, t.options.wheelItemClass))
          u.top = t.findNearestValidWheel(u.top).y;
        else
          return !0;
      }), i.hooks.on(i.hooks.eventTypes.beforeStart, function(l) {
        t.target = l.target;
      }), s.hooks.on(s.hooks.eventTypes.computeBoundary, function(l) {
        l.maxScrollPos = 0, l.minScrollPos = 0;
      }), n.hooks.on(n.hooks.eventTypes.computeBoundary, function(l) {
        t.items = t.scroll.scroller.content.children, t.checkWheelAllDisabled(), t.itemHeight = t.items.length > 0 ? n.contentSize / t.items.length : 0, l.maxScrollPos = -t.itemHeight * (t.items.length - 1), l.minScrollPos = 0;
      }), n.hooks.on(n.hooks.eventTypes.momentum, function(l) {
        l.rate = zo.rate, l.destination = t.findNearestValidWheel(l.destination).y;
      }), n.hooks.on(n.hooks.eventTypes.end, function(l) {
        var u = t.findNearestValidWheel(n.currentPos);
        l.destination = u.y, l.duration = t.options.adjustTime;
      }), a.hooks.on(a.hooks.eventTypes.time, function(l) {
        t.transitionDuration(l);
      }), a.hooks.on(a.hooks.eventTypes.timeFunction, function(l) {
        t.timeFunction(l);
      }), a.hooks.on(a.hooks.eventTypes.callStop, function() {
        var l = t.findNearestValidWheel(t.scroll.y).index;
        t.isAdjustingPosition = !0, t.wheelTo(l, 0);
      }), a.translater.hooks.on(a.translater.hooks.eventTypes.translate, function(l) {
        t.rotateX(l.y);
      });
    }, o.prototype.refreshBoundary = function() {
      var t = this.scroll.scroller, e = t.scrollBehaviorX, r = t.scrollBehaviorY, i = t.content;
      e.refresh(i), r.refresh(i);
    }, o.prototype.setSelectedIndex = function(t, e) {
      e === void 0 && (e = !1);
      var r = this.selectedIndex;
      this.selectedIndex = t, r !== t && !e && this.scroll.trigger(Ke, t);
    }, o.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, o.prototype.wheelTo = function(t, e, r) {
      t === void 0 && (t = 0), e === void 0 && (e = 0);
      var i = -t * this.itemHeight;
      this.scroll.scrollTo(0, i, e, r);
    }, o.prototype.restorePosition = function() {
      var t = this.scroll.pending;
      if (t) {
        var e = this.getSelectedIndex();
        this.scroll.scroller.animater.clearTimer(), this.wheelTo(e, 0);
      }
    }, o.prototype.transitionDuration = function(t) {
      for (var e = 0; e < this.items.length; e++)
        this.items[e].style[x.transitionDuration] = t + "ms";
    }, o.prototype.timeFunction = function(t) {
      for (var e = 0; e < this.items.length; e++)
        this.items[e].style[x.transitionTimingFunction] = t;
    }, o.prototype.rotateX = function(t) {
      for (var e = this.options.rotate, r = e === void 0 ? 25 : e, i = 0; i < this.items.length; i++) {
        var s = r * (t / this.itemHeight + i), n = s.toFixed(3);
        this.items[i].style[x.transform] = "rotateX(" + n + "deg)";
      }
    }, o.prototype.findNearestValidWheel = function(t) {
      t = t > 0 ? 0 : t < this.scroll.maxScrollY ? this.scroll.maxScrollY : t;
      for (var e = Math.abs(Math.round(-t / this.itemHeight)), r = e, i = this.items, s = this.options.wheelDisabledItemClass; e >= 0 && Ht(i[e], s); )
        e--;
      if (e < 0)
        for (e = r; e <= i.length - 1 && Ht(i[e], s); )
          e++;
      return e === i.length && (e = r), {
        index: this.wheelItemsAllDisabled ? -1 : e,
        y: -e * this.itemHeight
      };
    }, o.prototype.checkWheelAllDisabled = function() {
      var t = this.options.wheelDisabledItemClass, e = this.items;
      this.wheelItemsAllDisabled = !0;
      for (var r = 0; r < e.length; r++)
        if (!Ht(e[r], t)) {
          this.wheelItemsAllDisabled = !1;
          break;
        }
    }, o.pluginName = "wheel", o;
  }()
), No = "plugins.zoom", Wo = [
  {
    key: "zoomTo",
    name: "zoomTo"
  }
], Uo = Wo.map(function(o) {
  return {
    key: o.key,
    sourceKey: No + "." + o.name
  };
}), Lt = 2, Nt = 1, jo = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.scale = Nt, this.prevScale = 1, this.init();
    }
    return o.prototype.init = function() {
      this.handleBScroll(), this.handleOptions(), this.handleHooks(), this.tryInitialZoomTo(this.zoomOpt);
    }, o.prototype.zoomTo = function(t, e, r, i) {
      var s = this.resolveOrigin(e, r), n = s.originX, a = s.originY, c = {
        x: n,
        y: a,
        baseScale: this.scale
      };
      this._doZoomTo(t, c, i, !0);
    }, o.prototype.handleBScroll = function() {
      this.scroll.proxy(Uo), this.scroll.registerType([
        "beforeZoomStart",
        "zoomStart",
        "zooming",
        "zoomEnd"
      ]);
    }, o.prototype.handleOptions = function() {
      var t = this.scroll.options.zoom === !0 ? {} : this.scroll.options.zoom, e = {
        start: 1,
        min: 1,
        max: 4,
        initialOrigin: [0, 0],
        minimalZoomDistance: 5,
        bounceTime: 800
      };
      this.zoomOpt = F(e, t);
    }, o.prototype.handleHooks = function() {
      var t = this, e = this.scroll, r = this.scroll.scroller;
      this.wrapper = this.scroll.scroller.wrapper, this.setTransformOrigin(this.scroll.scroller.content);
      var i = r.scrollBehaviorX, s = r.scrollBehaviorY;
      this.hooksFn = [], this.registerHooks(e.hooks, e.hooks.eventTypes.contentChanged, function(n) {
        t.setTransformOrigin(n), t.scale = Nt, t.tryInitialZoomTo(t.zoomOpt);
      }), this.registerHooks(e.hooks, e.hooks.eventTypes.beforeInitialScrollTo, function() {
        if (t.zoomOpt.start !== Nt)
          return !0;
      }), this.registerHooks(i.hooks, i.hooks.eventTypes.beforeComputeBoundary, function() {
        var n = ct(t.scroll.scroller.content);
        i.contentSize = Math.floor(n.width * t.scale);
      }), this.registerHooks(s.hooks, s.hooks.eventTypes.beforeComputeBoundary, function() {
        var n = ct(t.scroll.scroller.content);
        s.contentSize = Math.floor(n.height * t.scale);
      }), this.registerHooks(r.actions.hooks, r.actions.hooks.eventTypes.start, function(n) {
        var a = n.touches && n.touches.length || 0;
        t.fingersOperation(a), a === Lt && t.zoomStart(n);
      }), this.registerHooks(r.actions.hooks, r.actions.hooks.eventTypes.beforeMove, function(n) {
        var a = n.touches && n.touches.length || 0;
        if (t.fingersOperation(a), a === Lt)
          return t.zoom(n), !0;
      }), this.registerHooks(r.actions.hooks, r.actions.hooks.eventTypes.beforeEnd, function(n) {
        var a = t.fingersOperation();
        if (a === Lt)
          return t.zoomEnd(), !0;
      }), this.registerHooks(r.translater.hooks, r.translater.hooks.eventTypes.beforeTranslate, function(n, a) {
        var c = a.scale ? a.scale : t.prevScale;
        t.prevScale = c, n.push("scale(" + c + ")");
      }), this.registerHooks(r.hooks, r.hooks.eventTypes.scrollEnd, function() {
        t.fingersOperation() === Lt && t.scroll.trigger(t.scroll.eventTypes.zoomEnd, {
          scale: t.scale
        });
      }), this.registerHooks(this.scroll.hooks, "destroy", this.destroy);
    }, o.prototype.setTransformOrigin = function(t) {
      t.style[x.transformOrigin] = "0 0";
    }, o.prototype.tryInitialZoomTo = function(t) {
      var e = t.start, r = t.initialOrigin, i = this.scroll.scroller, s = i.scrollBehaviorX, n = i.scrollBehaviorY;
      e !== Nt && (this.resetBoundaries([s, n]), this.zoomTo(e, r[0], r[1], 0));
    }, o.prototype.fingersOperation = function(t) {
      if (typeof t == "number")
        this.numberOfFingers = t;
      else
        return this.numberOfFingers;
    }, o.prototype._doZoomTo = function(t, e, r, i) {
      var s = this;
      r === void 0 && (r = this.zoomOpt.bounceTime), i === void 0 && (i = !1);
      var n = this.zoomOpt, a = n.min, c = n.max, l = this.scale, u = C(t, a, c);
      (function() {
        if (r === 0) {
          s.scroll.trigger(s.scroll.eventTypes.zooming, {
            scale: u
          });
          return;
        }
        if (r > 0) {
          var f, v = N(), y = v + r, m = function() {
            var O = N();
            if (O >= y) {
              s.scroll.trigger(s.scroll.eventTypes.zooming, {
                scale: u
              }), it(f);
              return;
            }
            var U = R.bounce.fn((O - v) / r), M = U * (u - l) + l;
            s.scroll.trigger(s.scroll.eventTypes.zooming, {
              scale: M
            }), f = me(m);
          };
          m();
        }
      })(), this.fingersOperation(2), this._zoomTo(u, l, e, r, i);
    }, o.prototype._zoomTo = function(t, e, r, i, s) {
      s === void 0 && (s = !1);
      var n = t / r.baseScale;
      this.setScale(t);
      var a = this.scroll.scroller, c = a.scrollBehaviorX, l = a.scrollBehaviorY;
      this.resetBoundaries([c, l]);
      var u = this.getNewPos(r.x, n, c, !0, s), f = this.getNewPos(r.y, n, l, !0, s);
      (c.currentPos !== Math.round(u) || l.currentPos !== Math.round(f) || t !== e) && a.scrollTo(u, f, i, R.bounce, {
        start: {
          scale: e
        },
        end: {
          scale: t
        }
      });
    }, o.prototype.resolveOrigin = function(t, e) {
      var r = this.scroll.scroller, i = r.scrollBehaviorX, s = r.scrollBehaviorY, n = {
        left: function() {
          return 0;
        },
        top: function() {
          return 0;
        },
        right: function() {
          return i.contentSize;
        },
        bottom: function() {
          return s.contentSize;
        },
        center: function(a) {
          var c = a === 0 ? i.contentSize : s.contentSize;
          return c / 2;
        }
      };
      return {
        originX: typeof t == "number" ? t : n[t](0),
        originY: typeof e == "number" ? e : n[e](1)
      };
    }, o.prototype.zoomStart = function(t) {
      var e = t.touches[0], r = t.touches[1];
      this.startDistance = this.getFingerDistance(t), this.startScale = this.scale;
      var i = Ir(this.wrapper), s = i.left, n = i.top;
      this.origin = {
        x: Math.abs(e.pageX + r.pageX) / 2 + s - this.scroll.x,
        y: Math.abs(e.pageY + r.pageY) / 2 + n - this.scroll.y,
        baseScale: this.startScale
      }, this.scroll.trigger(this.scroll.eventTypes.beforeZoomStart);
    }, o.prototype.zoom = function(t) {
      var e = this.getFingerDistance(t);
      if (!(!this.zoomed && Math.abs(e - this.startDistance) < this.zoomOpt.minimalZoomDistance)) {
        var r = this.dampingScale(e / this.startDistance * this.startScale), i = r / this.startScale;
        this.setScale(r), this.zoomed || (this.zoomed = !0, this.scroll.trigger(this.scroll.eventTypes.zoomStart));
        var s = this.scroll.scroller, n = s.scrollBehaviorX, a = s.scrollBehaviorY, c = this.getNewPos(this.origin.x, i, n, !1, !1), l = this.getNewPos(this.origin.y, i, a, !1, !1);
        this.scroll.trigger(this.scroll.eventTypes.zooming, {
          scale: this.scale
        }), s.translater.translate({ x: c, y: l, scale: r });
      }
    }, o.prototype.zoomEnd = function() {
      if (this.zoomed) {
        if (this.shouldRebound()) {
          this._doZoomTo(this.scale, this.origin, this.zoomOpt.bounceTime);
          return;
        }
        this.scroll.trigger(this.scroll.eventTypes.zoomEnd, { scale: this.scale });
      }
    }, o.prototype.getFingerDistance = function(t) {
      var e = t.touches[0], r = t.touches[1], i = Math.abs(e.pageX - r.pageX), s = Math.abs(e.pageY - r.pageY);
      return Cr(i, s);
    }, o.prototype.shouldRebound = function() {
      var t = this.zoomOpt, e = t.min, r = t.max, i = this.scale;
      if (i !== C(i, e, r))
        return !0;
      var s = this.scroll.scroller, n = s.scrollBehaviorX, a = s.scrollBehaviorY;
      this.resetBoundaries([n, a]);
      var c = n.checkInBoundary().inBoundary, l = n.checkInBoundary().inBoundary;
      return !(c && l);
    }, o.prototype.dampingScale = function(t) {
      var e = this.zoomOpt, r = e.min, i = e.max;
      return t < r ? t = 0.5 * r * Math.pow(2, t / r) : t > i && (t = 2 * i * Math.pow(0.5, i / t)), t;
    }, o.prototype.setScale = function(t) {
      this.scale = t;
    }, o.prototype.resetBoundaries = function(t) {
      t.forEach(function(e) {
        return e.computeBoundary();
      });
    }, o.prototype.getNewPos = function(t, e, r, i, s) {
      s === void 0 && (s = !1);
      var n = t - t * e + (s ? r.currentPos : r.startPos);
      return i && (n = C(n, r.maxScrollPos, r.minScrollPos)), n > 0 ? Math.floor(n) : Math.ceil(n);
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.destroy = function() {
      this.hooksFn.forEach(function(t) {
        var e = t[0], r = t[1], i = t[2];
        e.off(r, i);
      }), this.hooksFn.length = 0;
    }, o.pluginName = "zoom", o;
  }()
), qo = (
  /** @class */
  function() {
    function o(t) {
      this.ancestors = [], this.descendants = [], this.hooksManager = [], this.analyzed = !1, this.selfScroll = t;
    }
    return o.create = function(t) {
      return new o(t);
    }, o.prototype.hasAncestors = function(t) {
      var e = vt(this.ancestors, function(r) {
        var i = r[0];
        return i === t;
      });
      return e > -1;
    }, o.prototype.hasDescendants = function(t) {
      var e = vt(this.descendants, function(r) {
        var i = r[0];
        return i === t;
      });
      return e > -1;
    }, o.prototype.addAncestor = function(t, e) {
      var r = this.ancestors;
      r.push([t, e]), r.sort(function(i, s) {
        return i[1] - s[1];
      });
    }, o.prototype.addDescendant = function(t, e) {
      var r = this.descendants;
      r.push([t, e]), r.sort(function(i, s) {
        return i[1] - s[1];
      });
    }, o.prototype.removeAncestor = function(t) {
      var e = this.ancestors;
      if (e.length) {
        var r = vt(this.ancestors, function(i) {
          var s = i[0];
          return s === t;
        });
        if (r > -1)
          return e.splice(r, 1);
      }
    }, o.prototype.removeDescendant = function(t) {
      var e = this.descendants;
      if (e.length) {
        var r = vt(this.descendants, function(i) {
          var s = i[0];
          return s === t;
        });
        if (r > -1)
          return e.splice(r, 1);
      }
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r), this.hooksManager.push([t, e, r]);
    }, o.prototype.setAnalyzed = function(t) {
      t === void 0 && (t = !1), this.analyzed = t;
    }, o.prototype.purge = function() {
      var t = this;
      this.ancestors.forEach(function(e) {
        var r = e[0];
        r.removeDescendant(t);
      }), this.descendants.forEach(function(e) {
        var r = e[0];
        r.removeAncestor(t);
      }), this.hooksManager.forEach(function(e) {
        var r = e[0], i = e[1], s = e[2];
        r.off(i, s);
      }), this.hooksManager = [];
    }, o;
  }()
), Vo = "plugins.nestedScroll", Ko = [
  {
    key: "purgeNestedScroll",
    name: "purgeNestedScroll"
  }
], Go = Ko.map(function(o) {
  return {
    key: o.key,
    sourceKey: Vo + "." + o.name
  };
}), Qo = "INTERNAL_NESTED_SCROLL", Zo = function(o) {
  o.forEach(function(t) {
    t.pending && (t.stop(), t.resetPosition());
  });
}, Ge = function(o) {
  o.forEach(function(t) {
    t.enable();
  });
}, Wt = function(o, t) {
  o.forEach(function(e) {
    (e.hasHorizontalScroll === t.hasHorizontalScroll || e.hasVerticalScroll === t.hasVerticalScroll) && e.disable();
  });
}, Jo = function(o) {
  o.forEach(function(t) {
    var e = t.scroller, r = e.actions, i = e.scrollBehaviorX, s = e.scrollBehaviorY;
    r.fingerMoved = !0, r.contentMoved = !1, r.directionLockAction.reset(), i.start(), s.start(), i.resetStartPos(), s.resetStartPos(), r.startTime = +/* @__PURE__ */ new Date();
  });
}, _o = function(o) {
  var t = o.hasHorizontalScroll, e = o.hasVerticalScroll, r = o.x, i = o.y, s = o.minScrollX, n = o.maxScrollX, a = o.minScrollY, c = o.maxScrollY, l = o.movingDirectionX, u = o.movingDirectionY, f = !1, v = r >= s && l === -1, y = r <= n && l === 1, m = i >= a && u === -1, O = i <= c && u === 1;
  return e ? f = m || O : t && (f = v || y), f;
}, $o = function(o) {
  var t = o.hasHorizontalScroll, e = o.hasVerticalScroll, r = o.x, i = o.y, s = o.minScrollX, n = o.maxScrollX, a = o.minScrollY, c = o.maxScrollY, l = !1, u = r > s, f = r < n, v = i > a, y = i < c;
  return e ? l = v || y : t && (l = u || f), l;
}, ti = function(o) {
  o.scroller.reflow(), o.resetPosition(
    0
    /* Immediately */
  );
}, ei = function(o, t) {
  for (var e = 0, r = o.parentNode; r && r !== t; )
    e++, r = r.parentNode;
  return e;
}, ri = (
  /** @class */
  function() {
    function o(t) {
      var e = this.handleOptions(t), r = o.instancesMap[e];
      return r || (r = o.instancesMap[e] = this, r.store = [], r.hooksFn = []), r.init(t), r;
    }
    return o.getAllNestedScrolls = function() {
      var t = o.instancesMap;
      return Object.keys(t).map(function(e) {
        return t[e];
      });
    }, o.purgeAllNestedScrolls = function() {
      var t = o.getAllNestedScrolls();
      t.forEach(function(e) {
        return e.purgeNestedScroll();
      });
    }, o.prototype.handleOptions = function(t) {
      var e = t.options.nestedScroll === !0 ? {} : t.options.nestedScroll, r = {
        groupId: Qo
      };
      this.options = F(r, e);
      var i = typeof this.options.groupId;
      return i !== "string" && i !== "number" && q("groupId must be string or number for NestedScroll plugin"), this.options.groupId;
    }, o.prototype.init = function(t) {
      t.proxy(Go), this.addBScroll(t), this.buildBScrollGraph(), this.analyzeBScrollGraph(), this.ensureEventInvokeSequence(), this.handleHooks(t);
    }, o.prototype.handleHooks = function(t) {
      var e = this;
      this.registerHooks(t.hooks, t.hooks.eventTypes.destroy, function() {
        e.deleteScroll(t);
      });
    }, o.prototype.deleteScroll = function(t) {
      var e = t.wrapper;
      e.isBScrollContainer = void 0;
      var r = this.store, i = this.hooksFn, s = vt(r, function(v) {
        return v.selfScroll === t;
      });
      if (s > -1) {
        var n = r[s];
        n.purge(), r.splice(s, 1);
      }
      var a = vt(i, function(v) {
        var y = v[0];
        return y === t.hooks;
      });
      if (a > -1) {
        var c = i[a], l = c[0], u = c[1], f = c[2];
        l.off(u, f), i.splice(a, 1);
      }
    }, o.prototype.addBScroll = function(t) {
      this.store.push(qo.create(t));
    }, o.prototype.buildBScrollGraph = function() {
      for (var t = this.store, e, r, i, s, n = this.store.length, a = 0; a < n; a++) {
        e = t[a], i = e.selfScroll.wrapper;
        for (var c = 0; c < n; c++)
          if (r = t[c], s = r.selfScroll.wrapper, e !== r && i.contains(s)) {
            var l = ei(s, i);
            e.hasDescendants(r) || e.addDescendant(r, l), r.hasAncestors(e) || r.addAncestor(e, l);
          }
      }
    }, o.prototype.analyzeBScrollGraph = function() {
      this.store.forEach(function(t) {
        if (!t.analyzed) {
          var e = t.ancestors, r = t.descendants, i = t.selfScroll, s = function() {
            var c = e.map(function(u) {
              var f = u[0];
              return f.selfScroll;
            }), l = r.map(function(u) {
              var f = u[0];
              return f.selfScroll;
            });
            Zo(jt(c, l)), $o(i) && ti(i), Jo(c), Wt(c, i);
          }, n = function() {
            var c = e.map(function(u) {
              var f = u[0];
              return f.selfScroll;
            }), l = r.map(function(u) {
              var f = u[0];
              return f.selfScroll;
            });
            Ge(jt(c, l));
          };
          t.registerHooks(i, i.eventTypes.beforeScrollStart, s), t.registerHooks(i, i.eventTypes.touchEnd, n);
          var a = i.scroller.actions.hooks;
          t.registerHooks(a, a.eventTypes.detectMovingDirection, function() {
            var c = e.map(function(y) {
              var m = y[0];
              return m.selfScroll;
            }), l = c[0], u = c.slice(1), f = i.scroller.actions.contentMoved, v = c.length === 0;
            if (f)
              Wt(c, i);
            else if (!v && _o(i))
              return Wt([i], i), l && Ge([l]), Wt(u, i), !0;
          }), t.setAnalyzed(!0);
        }
      });
    }, o.prototype.ensureEventInvokeSequence = function() {
      var t = this.store.slice(), e = t.sort(function(r, i) {
        return r.descendants.length - i.descendants.length;
      });
      e.forEach(function(r) {
        var i = r.selfScroll;
        i.scroller.actionsHandler.rebindDOMEvents();
      });
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.purgeNestedScroll = function() {
      var t = this.options.groupId;
      this.store.forEach(function(e) {
        e.purge();
      }), this.store = [], this.hooksFn.forEach(function(e) {
        var r = e[0], i = e[1], s = e[2];
        r.off(i, s);
      }), this.hooksFn = [], delete o.instancesMap[t];
    }, o.pluginName = "nestedScroll", o.instancesMap = {}, o;
  }()
), Qe = 10, Ze = 30, oi = (
  /** @class */
  function() {
    function o(t, e) {
      this.wrapperHeight = t, this.tombstoneHeight = e, this.lastDirection = 1, this.lastPos = 0;
    }
    return o.prototype.calculate = function(t, e) {
      var r = t - this.lastPos;
      this.lastPos = t;
      var i = this.getDirection(r), s = this.calculateIndex(0, t, e), n = this.calculateIndex(s, t + this.wrapperHeight, e);
      return i === 1 ? (s -= Qe, n += Ze) : (s -= Ze, n += Qe), s < 0 && (s = 0), {
        start: s,
        end: n
      };
    }, o.prototype.getDirection = function(t) {
      var e;
      if (t > 0)
        e = 1;
      else if (t < 0)
        e = 0;
      else
        return this.lastDirection;
      return this.lastDirection = e, e;
    }, o.prototype.calculateIndex = function(t, e, r) {
      if (e <= 0)
        return t;
      for (var i = t, s = r[i] && r[i].pos !== -1 ? r[i].pos : 0, n = s, a = 0; i < r.length && r[i].pos < e; )
        n = r[i].pos, i++;
      return i === r.length && (a = Math.floor((e - n) / this.tombstoneHeight)), i += a, i;
    }, o.prototype.resetState = function() {
      this.lastDirection = 1, this.lastPos = 0;
    }, o;
  }()
), ii = (
  /** @class */
  /* @__PURE__ */ function() {
    function o() {
      this.data = null, this.dom = null, this.tombstone = null, this.width = 0, this.height = 0, this.pos = 0;
    }
    return o;
  }()
), si = (
  /** @class */
  function() {
    function o(t, e, r) {
      this.fetchFn = e, this.onFetchFinish = r, this.loadedNum = 0, this.fetching = !1, this.hasMore = !0, this.list = t || [];
    }
    return o.prototype.update = function(t) {
      return ie(this, void 0, void 0, function() {
        var e;
        return se(this, function(r) {
          return this.hasMore || (t = Math.min(t, this.list.length)), t > this.list.length && (e = t - this.list.length, this.addEmptyData(e)), [2, this.checkToFetch(t)];
        });
      });
    }, o.prototype.add = function(t) {
      for (var e = 0; e < t.length; e++)
        this.list[this.loadedNum] ? this.list[this.loadedNum] = V(V({}, this.list[this.loadedNum]), { data: t[e] }) : this.list[this.loadedNum] = { data: t[e] }, this.loadedNum++;
      return this.list;
    }, o.prototype.addEmptyData = function(t) {
      for (var e = 0; e < t; e++)
        this.list.push(new ii());
      return this.list;
    }, o.prototype.fetch = function(t) {
      return ie(this, void 0, void 0, function() {
        var e;
        return se(this, function(r) {
          switch (r.label) {
            case 0:
              return this.fetching ? [2, []] : (this.fetching = !0, [4, this.fetchFn(t)]);
            case 1:
              return e = r.sent(), this.fetching = !1, [2, e];
          }
        });
      });
    }, o.prototype.checkToFetch = function(t) {
      return ie(this, void 0, void 0, function() {
        var e, r, i;
        return se(this, function(s) {
          switch (s.label) {
            case 0:
              return this.hasMore ? t <= this.loadedNum ? [
                2
                /*return*/
              ] : (e = t - this.loadedNum, [4, this.fetch(e)]) : [
                2
                /*return*/
              ];
            case 1:
              return r = s.sent(), r instanceof Array && r.length ? (this.add(r), i = this.onFetchFinish(this.list, !0), [2, this.checkToFetch(i)]) : (typeof r == "boolean" && r === !1 && (this.hasMore = !1, this.list.splice(this.loadedNum), this.onFetchFinish(this.list, !1)), [
                2
                /*return*/
              ]);
          }
        });
      });
    }, o.prototype.getList = function() {
      return this.list;
    }, o.prototype.resetState = function() {
      this.loadedNum = 0, this.fetching = !1, this.hasMore = !0, this.list = [];
    }, o;
  }()
), Ut = (
  /** @class */
  function() {
    function o(t) {
      this.create = t, this.cached = [], this.width = 0, this.height = 0, this.initialed = !1, this.getSize();
    }
    return o.isTombstone = function(t) {
      return t && t.classList ? t.classList.contains("tombstone") : !1;
    }, o.prototype.getSize = function() {
      if (!this.initialed) {
        var t = this.create();
        t.style.position = "absolute", document.body.appendChild(t), t.style.display = "", this.height = t.offsetHeight, this.width = t.offsetWidth, document.body.removeChild(t), this.cached.push(t);
      }
    }, o.prototype.getOne = function() {
      var t = this.cached.pop();
      if (t) {
        var e = t.style;
        return e.display = "", e.opacity = "1", e[x.transform] = "", e[x.transition] = "", t;
      }
      return this.create();
    }, o.prototype.recycle = function(t) {
      for (var e = 0, r = t; e < r.length; e++) {
        var i = r[e];
        i.style.display = "none", this.cached.push(i);
      }
      return this.cached;
    }, o.prototype.recycleOne = function(t) {
      return this.cached.push(t), this.cached;
    }, o;
  }()
), ce = 200, ni = (
  /** @class */
  function() {
    function o(t, e, r) {
      this.renderFn = e, this.tombstone = r, this.unusedDom = [], this.timers = [], this.setContent(t);
    }
    return o.prototype.update = function(t, e, r) {
      e >= t.length && (e = t.length - 1), r > t.length && (r = t.length), this.collectUnusedDom(t, e, r), this.createDom(t, e, r), this.cacheHeight(t, e, r);
      var i = this.positionDom(t, e, r), s = i.startPos, n = i.startDelta, a = i.endPos;
      return {
        start: e,
        startPos: s,
        startDelta: n,
        end: r,
        endPos: a
      };
    }, o.prototype.collectUnusedDom = function(t, e, r) {
      for (var i = 0; i < t.length; i++) {
        if (i === e) {
          i = r - 1;
          continue;
        }
        if (t[i].dom) {
          var s = t[i].dom;
          Ut.isTombstone(s) ? (this.tombstone.recycleOne(s), s.style.display = "none") : this.unusedDom.push(s), t[i].dom = null;
        }
      }
      return t;
    }, o.prototype.createDom = function(t, e, r) {
      for (var i = e; i < r; i++) {
        var s = t[i].dom, n = t[i].data;
        if (s)
          if (Ut.isTombstone(s) && n)
            t[i].tombstone = s, t[i].dom = null;
          else
            continue;
        s = n ? this.renderFn(n, this.unusedDom.pop()) : this.tombstone.getOne(), s.style.position = "absolute", t[i].dom = s, t[i].pos = -1, this.content.appendChild(s);
      }
    }, o.prototype.cacheHeight = function(t, e, r) {
      for (var i = e; i < r; i++)
        t[i].data && !t[i].height && (t[i].height = t[i].dom.offsetHeight);
    }, o.prototype.positionDom = function(t, e, r) {
      for (var i = this, s = [], n = this.getStartPos(t, e, r), a = n.start, c = n.delta, l = a, u = e; u < r; u++) {
        var f = t[u].tombstone;
        if (f) {
          var v = f.style;
          v[x.transition] = Rr + "transform " + ce + "ms, opacity " + ce + "ms", v[x.transform] = "translateY(" + l + "px)", v.opacity = "0", t[u].tombstone = null, s.push(f);
        }
        t[u].dom && t[u].pos !== l && (t[u].dom.style[x.transform] = "translateY(" + l + "px)", t[u].pos = l), l += t[u].height || this.tombstone.height;
      }
      var y = window.setTimeout(function() {
        i.tombstone.recycle(s);
      }, ce);
      return this.timers.push(y), {
        startPos: a,
        startDelta: c,
        endPos: l
      };
    }, o.prototype.getStartPos = function(t, e, r) {
      if (t[e] && t[e].pos !== -1)
        return {
          start: t[e].pos,
          delta: 0
        };
      for (var i = t[0].pos === -1 ? 0 : t[0].pos, s = 0; s < e; s++)
        i += t[s].height || this.tombstone.height;
      var n = i, a;
      for (a = e; a < r; a++)
        if (!Ut.isTombstone(t[a].dom) && t[a].pos !== -1) {
          i = t[a].pos;
          break;
        }
      var c = a;
      if (c < r)
        for (; c > e; )
          i -= t[c - 1].height, c--;
      var l = n - i;
      return {
        start: i,
        delta: l
      };
    }, o.prototype.removeTombstone = function() {
      for (var t = this.content.querySelectorAll(".tombstone"), e = t.length - 1; e >= 0; e--)
        this.content.removeChild(t[e]);
    }, o.prototype.setContent = function(t) {
      t !== this.content && (this.content = t);
    }, o.prototype.destroy = function() {
      this.removeTombstone(), this.timers.forEach(function(t) {
        clearTimeout(t);
      });
    }, o.prototype.resetState = function() {
      this.destroy(), this.timers = [], this.unusedDom = [];
    }, o;
  }()
), ai = -2e3, li = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.start = 0, this.end = 0, this.init();
    }
    return o.prototype.init = function() {
      var t = this;
      this.handleOptions();
      var e = this.options, r = e.fetch, i = e.render, s = e.createTombstone;
      this.tombstone = new Ut(s), this.indexCalculator = new oi(this.scroll.scroller.scrollBehaviorY.wrapperSize, this.tombstone.height), this.domManager = new ni(this.scroll.scroller.content, i, this.tombstone), this.dataManager = new si([], r, this.onFetchFinish.bind(this)), this.scroll.on(this.scroll.eventTypes.destroy, this.destroy, this), this.scroll.on(this.scroll.eventTypes.scroll, this.update, this), this.scroll.on(this.scroll.eventTypes.contentChanged, function(a) {
        t.domManager.setContent(a), t.indexCalculator.resetState(), t.domManager.resetState(), t.dataManager.resetState(), t.update({ y: 0 });
      });
      var n = this.scroll.scroller.scrollBehaviorY;
      n.hooks.on(n.hooks.eventTypes.computeBoundary, this.modifyBoundary, this), this.update({ y: 0 });
    }, o.prototype.modifyBoundary = function(t) {
      t.maxScrollPos = ai;
    }, o.prototype.handleOptions = function() {
      var t = this.scroll.options.infinity;
      t && (typeof t.fetch != "function" && q("Infinity plugin need fetch Function to new data."), typeof t.render != "function" && q("Infinity plugin need render Function to render each item."), typeof t.render != "function" && q("Infinity plugin need createTombstone Function to create tombstone."), this.options = t), this.scroll.options.probeType = 3;
    }, o.prototype.update = function(t) {
      var e = Math.round(-t.y), r = this.indexCalculator.calculate(e, this.dataManager.getList()), i = r.start, s = r.end;
      this.start = i, this.end = s, this.dataManager.update(s), this.updateDom(this.dataManager.getList());
    }, o.prototype.onFetchFinish = function(t, e) {
      var r = this.updateDom(t).end;
      return e || (this.domManager.removeTombstone(), this.scroll.scroller.animater.stop(), this.scroll.resetPosition()), r;
    }, o.prototype.updateDom = function(t) {
      var e = this.domManager.update(t, this.start, this.end), r = e.end, i = e.startPos, s = e.endPos, n = e.startDelta;
      return n && (this.scroll.minScrollY = n), s > this.scroll.maxScrollY && (this.scroll.maxScrollY = -(s - this.scroll.scroller.scrollBehaviorY.wrapperSize)), {
        end: r,
        startPos: i,
        endPos: s
      };
    }, o.prototype.destroy = function() {
      for (var t = this.scroll.scroller, e = t.content, r = t.scrollBehaviorY; e.firstChild; )
        e.removeChild(e.firstChild);
      this.domManager.destroy(), this.scroll.off("scroll", this.update), this.scroll.off("destroy", this.destroy), r.hooks.off(r.hooks.eventTypes.computeBoundary);
    }, o.pluginName = "infinity", o;
  }()
), hi = "plugins.movable", ci = [
  {
    key: "putAt",
    name: "putAt"
  }
], ui = ci.map(function(o) {
  return {
    key: o.key,
    sourceKey: hi + "." + o.name
  };
}), pi = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.handleBScroll(), this.handleHooks();
    }
    return o.prototype.handleBScroll = function() {
      this.scroll.proxy(ui);
    }, o.prototype.handleHooks = function() {
      var t = this;
      this.hooksFn = [];
      var e = this.scroll.scroller, r = e.scrollBehaviorX, i = e.scrollBehaviorY, s = function(n, a) {
        n.maxScrollPos > 0 && (n.minScrollPos = a.wrapperSize - a.contentSize, n.maxScrollPos = 0);
      };
      this.registerHooks(r.hooks, r.hooks.eventTypes.ignoreHasScroll, function() {
        return !0;
      }), this.registerHooks(r.hooks, r.hooks.eventTypes.computeBoundary, function(n) {
        s(n, r);
      }), this.registerHooks(i.hooks, i.hooks.eventTypes.ignoreHasScroll, function() {
        return !0;
      }), this.registerHooks(i.hooks, i.hooks.eventTypes.computeBoundary, function(n) {
        s(n, i);
      }), this.registerHooks(this.scroll.hooks, this.scroll.hooks.eventTypes.destroy, function() {
        t.destroy();
      });
    }, o.prototype.putAt = function(t, e, r, i) {
      r === void 0 && (r = this.scroll.options.bounceTime), i === void 0 && (i = R.bounce);
      var s = this.resolvePostion(t, e);
      this.scroll.scrollTo(s.x, s.y, r, i);
    }, o.prototype.resolvePostion = function(t, e) {
      var r = this.scroll.scroller, i = r.scrollBehaviorX, s = r.scrollBehaviorY, n = {
        left: function() {
          return 0;
        },
        top: function() {
          return 0;
        },
        right: function() {
          return i.minScrollPos;
        },
        bottom: function() {
          return s.minScrollPos;
        },
        center: function(a) {
          var c = a === 0 ? i.minScrollPos : s.minScrollPos;
          return c / 2;
        }
      };
      return {
        x: typeof t == "number" ? t : n[t](0),
        y: typeof e == "number" ? e : n[e](1)
      };
    }, o.prototype.destroy = function() {
      this.hooksFn.forEach(function(t) {
        var e = t[0], r = t[1], i = t[2];
        e.off(r, i);
      }), this.hooksFn.length = 0;
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.pluginName = "movable", o.applyOrder = "pre", o;
  }()
), fi = function(o) {
  return o.tagName.toLowerCase() === "img";
}, di = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.refreshTimer = 0, this.init();
    }
    return o.prototype.init = function() {
      this.handleOptions(this.scroll.options.observeImage), this.bindEventsToWrapper();
    }, o.prototype.handleOptions = function(t) {
      t === void 0 && (t = {}), t = t === !0 ? {} : t;
      var e = {
        debounceTime: 100
      };
      this.options = F(e, t);
    }, o.prototype.bindEventsToWrapper = function() {
      var t = this.scroll.scroller.wrapper;
      this.imageLoadEventRegister = new L(t, [
        {
          name: "load",
          handler: this.load.bind(this),
          capture: !0
        }
      ]), this.imageErrorEventRegister = new L(t, [
        {
          name: "error",
          handler: this.load.bind(this),
          capture: !0
        }
      ]);
    }, o.prototype.load = function(t) {
      var e = this, r = t.target, i = this.options.debounceTime;
      r && fi(r) && (i === 0 ? this.scroll.refresh() : (clearTimeout(this.refreshTimer), this.refreshTimer = window.setTimeout(function() {
        e.scroll.refresh();
      }, this.options.debounceTime)));
    }, o.pluginName = "observeImage", o;
  }()
), vi = function(o) {
  var t = {
    ratioX: 0,
    ratioY: 0
  };
  return o && (typeof o == "number" ? t.ratioX = t.ratioY = o : typeof o == "object" && o && (t.ratioX = o.x || 0, t.ratioY = o.y || 0)), t;
}, ue = function(o) {
  ht(o), o.stopPropagation();
}, gi = (
  /** @class */
  function() {
    function o(t, e) {
      this.scroll = t, this.options = e, this.currentPos = {
        x: 0,
        y: 0
      }, this.hooksFn = [], this.handleDOM(), this.handleHooks(), this.handleInteractive();
    }
    return o.prototype.handleDOM = function() {
      var t = this.options, e = t.relationElement, r = t.relationElementHandleElementIndex, i = r === void 0 ? 0 : r;
      this.wrapper = e, this.indicatorEl = this.wrapper.children[i];
    }, o.prototype.handleHooks = function() {
      var t = this, e = this.scroll, r = e.hooks, i = e.scroller.translater.hooks, s = e.scroller.animater.hooks;
      this.registerHooks(r, r.eventTypes.refresh, this.refresh), this.registerHooks(i, i.eventTypes.translate, function(n) {
        t.updatePosition(n);
      }), this.registerHooks(s, s.eventTypes.time, this.transitionTime), this.registerHooks(s, s.eventTypes.timeFunction, this.transitionTimingFunction);
    }, o.prototype.transitionTime = function(t) {
      t === void 0 && (t = 0), this.indicatorEl.style[x.transitionDuration] = t + "ms";
    }, o.prototype.transitionTimingFunction = function(t) {
      this.indicatorEl.style[x.transitionTimingFunction] = t;
    }, o.prototype.handleInteractive = function() {
      this.options.interactive !== !1 && this.registerEvents();
    }, o.prototype.registerHooks = function(t, e, r) {
      t.on(e, r, this), this.hooksFn.push([t, e, r]);
    }, o.prototype.registerEvents = function() {
      var t = this.scroll.options, e = t.disableMouse, r = t.disableTouch, i = [], s = [], n = [];
      e || (i.push({
        name: "mousedown",
        handler: this.start.bind(this)
      }), s.push({
        name: "mousemove",
        handler: this.move.bind(this)
      }), n.push({
        name: "mouseup",
        handler: this.end.bind(this)
      })), r || (i.push({
        name: "touchstart",
        handler: this.start.bind(this)
      }), s.push({
        name: "touchmove",
        handler: this.move.bind(this)
      }), n.push({
        name: "touchend",
        handler: this.end.bind(this)
      }, {
        name: "touchcancel",
        handler: this.end.bind(this)
      })), this.startEventRegister = new L(this.indicatorEl, i), this.moveEventRegister = new L(window, s), this.endEventRegister = new L(window, n);
    }, o.prototype.refresh = function() {
      var t = this.scroll, e = t.x, r = t.y, i = t.hasHorizontalScroll, s = t.hasVerticalScroll, n = t.maxScrollX, a = t.maxScrollY, c = vi(this.options.ratio), l = c.ratioX, u = c.ratioY, f = Gr(this.wrapper), v = f.width, y = f.height, m = ct(this.indicatorEl), O = m.width, U = m.height;
      i && (this.maxScrollX = v - O, this.translateXSign = this.maxScrollX > 0 ? -1 : 1, this.minScrollX = 0, this.ratioX = l || Math.abs(this.maxScrollX / n)), s && (this.maxScrollY = y - U, this.translateYSign = this.maxScrollY > 0 ? -1 : 1, this.minScrollY = 0, this.ratioY = u || Math.abs(this.maxScrollY / a)), this.updatePosition({
        x: e,
        y: r
      });
    }, o.prototype.start = function(t) {
      if (!this.BScrollIsDisabled()) {
        var e = t.touches ? t.touches[0] : t;
        ue(t), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = N(), this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.beforeScrollStart);
      }
    }, o.prototype.BScrollIsDisabled = function() {
      return !this.scroll.enabled;
    }, o.prototype.move = function(t) {
      if (this.initiated) {
        var e = t.touches ? t.touches[0] : t, r = e.pageX, i = e.pageY;
        ue(t);
        var s = r - this.lastPointX, n = i - this.lastPointY;
        if (this.lastPointX = r, this.lastPointY = i, !this.moved && !this.indicatorNotMoved(s, n) && (this.moved = !0, this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollStart)), this.moved) {
          var a = this.getBScrollPosByRatio(this.currentPos, s, n);
          this.syncBScroll(a);
        }
      }
    }, o.prototype.end = function(t) {
      if (this.initiated && (this.initiated = !1, ue(t), this.moved)) {
        var e = this.scroll, r = e.x, i = e.y;
        this.scroll.scroller.hooks.trigger(this.scroll.scroller.hooks.eventTypes.scrollEnd, {
          x: r,
          y: i
        });
      }
    }, o.prototype.getBScrollPosByRatio = function(t, e, r) {
      var i = t.x, s = t.y, n = this.scroll, a = n.hasHorizontalScroll, c = n.hasVerticalScroll, l = n.minScrollX, u = n.maxScrollX, f = n.minScrollY, v = n.maxScrollY, y = this.scroll, m = y.x, O = y.y;
      if (a) {
        var U = C(i + e, Math.min(this.minScrollX, this.maxScrollX), Math.max(this.minScrollX, this.maxScrollX)), M = Math.round(U / this.ratioX * this.translateXSign);
        m = C(M, u, l);
      }
      if (c) {
        var D = C(s + r, Math.min(this.minScrollY, this.maxScrollY), Math.max(this.minScrollY, this.maxScrollY)), J = Math.round(D / this.ratioY * this.translateYSign);
        O = C(J, v, f);
      }
      return { x: m, y: O };
    }, o.prototype.indicatorNotMoved = function(t, e) {
      var r = this.currentPos, i = r.x, s = r.y, n = i === this.minScrollX && t <= 0 || i === this.maxScrollX && t >= 0, a = s === this.minScrollY && e <= 0 || s === this.maxScrollY && e >= 0;
      return n && a;
    }, o.prototype.syncBScroll = function(t) {
      var e = N(), r = this.scroll, i = r.options, s = r.scroller, n = i.probeType, a = i.momentumLimitTime;
      s.translater.translate(t), e - this.startTime > a && (this.startTime = e, n === 1 && s.hooks.trigger(s.hooks.eventTypes.scroll, t)), n > 1 && s.hooks.trigger(s.hooks.eventTypes.scroll, t);
    }, o.prototype.updatePosition = function(t) {
      var e = this.getIndicatorPosByRatio(t);
      this.applyTransformProperty(e), this.currentPos = V({}, e);
    }, o.prototype.applyTransformProperty = function(t) {
      var e = this.scroll.options.translateZ, r = [
        "translateX(" + t.x + "px)",
        "translateY(" + t.y + "px)",
        "" + e
      ];
      this.indicatorEl.style[x.transform] = r.join(" ");
    }, o.prototype.getIndicatorPosByRatio = function(t) {
      var e = t.x, r = t.y, i = this.scroll, s = i.hasHorizontalScroll, n = i.hasVerticalScroll, a = V({}, this.currentPos);
      if (s) {
        var c = Math.round(this.ratioX * e * this.translateXSign);
        a.x = C(c, Math.min(this.minScrollX, this.maxScrollX), Math.max(this.minScrollX, this.maxScrollX));
      }
      if (n) {
        var l = Math.round(this.ratioY * r * this.translateYSign);
        a.y = C(l, Math.min(this.minScrollY, this.maxScrollY), Math.max(this.minScrollY, this.maxScrollY));
      }
      return a;
    }, o.prototype.destroy = function() {
      this.options.interactive !== !1 && (this.startEventRegister.destroy(), this.moveEventRegister.destroy(), this.endEventRegister.destroy()), this.hooksFn.forEach(function(t) {
        var e = t[0], r = t[1], i = t[2];
        e.off(r, i);
      }), this.hooksFn.length = 0;
    }, o;
  }()
), yi = (
  /** @class */
  function() {
    function o(t) {
      this.scroll = t, this.options = [], this.indicators = [], this.handleOptions(), this.handleHooks();
    }
    return o.prototype.handleOptions = function() {
      var t = this.scroll.options.indicators;
      He(Array.isArray(t), "'indicators' must be an array.");
      for (var e = 0, r = t; e < r.length; e++) {
        var i = r[e];
        He(!!i.relationElement, "'relationElement' must be a HTMLElement."), this.createIndicators(i);
      }
    }, o.prototype.createIndicators = function(t) {
      this.indicators.push(new gi(this.scroll, t));
    }, o.prototype.handleHooks = function() {
      var t = this, e = this.scroll.hooks;
      e.on(e.eventTypes.destroy, function() {
        for (var r = 0, i = t.indicators; r < i.length; r++) {
          var s = i[r];
          s.destroy();
        }
        t.indicators = [];
      });
    }, o.pluginName = "indicators", o;
  }()
);
ge.use(vo).use(go).use(So).use(Eo).use(Ao).use(Ho).use(Lo).use(jo).use(ri).use(li).use(pi).use(di).use(yi);
const mi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAASFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrhKybAAAAGHRSTlMAuG6TpneuoRQrlLZ9Ni0WBSeKcV1GIxECP2onAAAArElEQVQ4y+3Tyw6DIBCFYY/cBKkUb33/Ny0j7AoZVqZN+m1Q+ROicYYbPB9LV6U0YLlsSRUxzjmRrGqPtc7O+GQOPixcaB8tMpNvZeRfxm4zlaHj85yGTh86vKg8esoznW7K9aQkKqSaaHcDEHOn0aCptAD2K1RoUrSvaSUSkGMFPad9A6xXCGAcKkYAtApAfHvoAd8VBu8DHxb/8P6Q/3EJPwoFP1wZP66/5A1ptgYIU4bN7wAAAABJRU5ErkJggg==", Ti = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAASFBMVEUAAAA/P0FDQ0NAQEBAQEE/P0E/P0FAQEE/P0FAQEFAQEBAQEJBQUFAQEFAQEBAQEBCQkJCQkI9PT0/P0FBQUFAQEFAQEBAQEH5OB2hAAAAF3RSTlMAmgd34djJ8+m/uox+WUA8Mh8VhVOqZHpXMi0AAADwSURBVDjL3ZRbEoMgDEUFwbcIimb/O20YBoEObeSzvT9MwgnMDY/m97TNo+x7Oc7bN4q3A9waWv6JswIyCVvmDnDqllWpdenA6ShxJ6CYCaFhLj7L6wmdZrQorWndrnue293+9s0vVovARdJlc+8t1uq7SXdjNKbbDBzQRyyKk+hoyM4DK02cjEUGJ9IzmtFJUwIb9DMn4AiwlMEFYExACbB6H4wxDCQO3tGKQQL2AMr7CAp2FUBfC9Jb15qh21PfcPoI6y8Ffc3oi3vyR08BNfEnj0t6kn6ufPIk/QEEkvxSPHlRn5QnPUiLXxdv/kwvwsYdZUgogJUAAAAASUVORK5CYII=", Si = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAATlBMVEUAAABCQkI/P0FAQEE/P0E/P0FAQEE/P0E/P0FAQEFAQEBBQUFBQUFAQEBBQUFAQEFAQEBAQEBCQkJCQkI9PT1BQUFAQEFAQEFAQEBAQEHLxLcDAAAAGXRSTlMAB5nhidnz6cm/up5+d3ZZQDwyHxVTyKpk10L+SQAAAONJREFUOMvdlNkOgjAQRamlLLKDCOf/f1RrI2GS6sCjnpemk5M2t8skv8eQli7LXJkO3yzT5mzkrfnkzRaBneNeiqeou77v6gJPGvMWnlTTezpVPFni69lxXxltbM0ZuN9k7XYHZlkzFqz3pOmrMnsLhH0FI9CKSg5VLGEFubgPYIqJEzDIyEUSpZDBS6jjYg3lbuqge4VvLhvNK24Hbidm0PuxYUfjKz1kZ0V967Nh9OM5f+D6FZ5/FPoz0x/uYo59BbiaI5/LBVP/ruYaTL0BbKbWUoK5ak0qmEHUMetqkj/jAb5VHhQYelDvAAAAAElFTkSuQmCC", ki = "data:image/png;base64,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", bi = "data:image/png;base64,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";
function Pi(o) {
  const t = tt(null), e = tt(null), r = tt(null), i = o.ImgList;
  let [s, n] = Ot(0), [a, c] = Ot(1), [l, u] = Ot(0), f = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(window.navigator.userAgent) || document.documentElement.clientWidth < 744, [v, y] = Ot(i.length == 1 || f ? "h" : o.toolInfo.layout);
  const O = [...[
    {
      icon: mi,
      func: nt
    },
    {
      icon: Ti,
      func: K,
      type: "in"
    },
    {
      icon: Si,
      func: K,
      type: "out"
    }
  ], ...o.toolInfo.fullTool];
  function U(d) {
    n(d), o.toolInfo.smallClickFunc(i[d], d);
  }
  const M = tt(null), D = (d) => {
    let S = d || v;
    o.ImgList.length > 1 && (S == "h" ? M.current = new ge(".small-list", {
      scrollX: !0,
      eventPassthrough: "vertical",
      probeType: 3
    }) : M.current = new ge(".small-list", {
      scrollY: !0,
      probeType: 3
    }), M.current.refresh());
  };
  let J = tt([]);
  wr(() => {
    D(), J.current = r.current ? Array.from(r.current) : null;
  }, []);
  async function Gt() {
    let d = v;
    v == "h" ? d = "v" : d = "h", y(d), M.current.scrollTo(0, 0, 300), setTimeout(() => {
      D(d);
    }, 2e3);
  }
  const ut = document.documentElement.clientHeight, Tt = document.documentElement.clientWidth;
  function Yt(d) {
    if (d == "r") {
      if (s >= i.length - 1) {
        n(i.length - 1);
        return;
      }
      n(++s), v == "v" ? Qt() : Zt();
    } else if (d == "l") {
      if (s <= 0) {
        n(0);
        return;
      }
      n(--s), v == "v" ? Bt() : Jt();
    }
  }
  function Qt() {
    let d = J.current[s][1], S = st(d, 10, ut - 10, "bottom", "top");
    console.log(S, ut - d.offsetTop - 100), S[0] === "lower" ? M.current.scrollTo(0, ut - d.offsetTop - 100, 300) : (S[0] === "upper" || S[2] < 92) && M.current.scrollTo(0, -d.offsetTop + 28, 300);
  }
  function Bt() {
    let d = J.current[s][1];
    st(d, 10, ut - 10, "top")[0] === "upper" && M.current.scrollTo(0, -d.offsetTop, 300);
  }
  function Zt() {
    let d = J.current[s][1], S = st(d, 0, Tt - 40, "right", "left");
    S[0] === "lower" ? M.current.scrollTo(Tt - d.offsetLeft - 110, 0, 300) : (S[0] === "upper" || S[2] < 92) && M.current.scrollTo(-d.offsetLeft + 28, 0, 300);
  }
  function Jt() {
    let d = J.current[s][1];
    st(d, 10, Tt - 10, "left")[0] === "upper" && M.current.scrollTo(-d.offsetLeft, 0, 300);
  }
  function st(d, S, w, H, Q) {
    const Y = d.getBoundingClientRect();
    return console.log(Y), [Y[H] < S ? "upper" : Y[H] < w ? "in" : "lower", Y[H], Y[Q]];
  }
  function j(d) {
    const S = Math.sign(-d.deltaY), w = a + 0.1 * S;
    c(w), (w <= 0.1 || w >= 10) && c(Math.max(Math.min(w, 10), 0.1)), d.target.style.transform = `translateX(-50%) translateY(-50%) scale(${w}) rotate(${l}deg)`;
  }
  function K(d) {
    console.log(d);
    let S = a;
    d == "in" ? S = a + 0.1 : S = a - 0.1, c(S), (S <= 0.1 || S >= 10) && (S = Math.max(Math.min(S, 10), 0.1), c(S)), e.current.style.transform = `translateX(-50%) translateY(-50%) scale(${S}) rotate(${l}deg)`;
  }
  function nt() {
    const d = l + 90;
    u(d), e.current.style.transform = `translateX(-50%) translateY(-50%) scale(${a}) rotate(${d}deg)`;
  }
  let G = !1, at = 0, lt = 0;
  function Dt(d) {
    let S = d.target, w = d.pageX - S.offsetLeft, H = d.pageY - S.offsetTop;
    G = !1, at = d.clientX, lt = d.clientY, t.current.addEventListener("mousemove", Q);
    function Q(Y) {
      Math.abs(Y.clientX - at) > 10 || Math.abs(Y.clientY - lt) > 10 ? (G = !0, S.style.left = Y.pageX - w + "px", S.style.top = Y.pageY - H + "px") : G = !1;
    }
    window.addEventListener("mouseup", (Y) => {
      G || o.toolInfo.clickFunc(Y.target.currentSrc), t.current.removeEventListener("mousemove", Q);
    });
  }
  let A = null;
  const _ = tt(null), St = tt(0), kt = tt(0), bt = tt(1);
  function _t(d) {
    _.current = d.target, bt.current = d.touches.length, bt.current == 1 ? (St.current = d.changedTouches[0].clientX - _.current.offsetLeft, kt.current = d.changedTouches[0].clientY - _.current.offsetTop, G = !1, at = d.changedTouches[0].clientX, lt = d.changedTouches[0].clientX) : A = {
      //多点触屏的第一点
      startX: d.touches[0].pageX,
      startY: d.touches[0].pageY,
      endX: d.touches[0].pageX,
      endY: d.touches[0].pageY,
      //多点触屏的第二点  单点触屏时记录坐标为 -1 
      startX2: d.touches[1] ? d.touches[1].pageX : -1,
      startY2: d.touches[1] ? d.touches[1].pageY : -1,
      endX2: d.touches[1] ? d.touches[1].pageX : -1,
      endY2: d.touches[1] ? d.touches[1].pageY : -1
    };
  }
  function Pt(d) {
    if (_.current, bt.current == 1) {
      let w = d.changedTouches[0].clientX, H = d.changedTouches[0].clientY;
      if (Math.abs(w - at) > 10 || Math.abs(H - lt) > 10) {
        G = !0;
        const Q = w - St.current, Y = H - kt.current;
        _.current.style.left = Q + "px", _.current.style.top = Y + "px";
      } else
        G = !1;
    } else {
      if (A === null)
        return;
      A.endX = d.touches[0].pageX, A.endY = d.touches[0].pageY, A.endX2 = d.touches[1] ? d.touches[1].pageX : -1, A.endY2 = d.touches[1] ? d.touches[1].pageY : -1;
      var S = function(w, H, Q, Y) {
        return Math.hypot(Q - w, Y - H);
      };
      if (A.startX2 != -1 && A.endX2 != -1 && A.startY2 != -1 && A.endY2 != -1) {
        let w = S(A.startX, A.startY, A.startX2, A.startY2), H = S(A.endX, A.endY, A.endX2, A.endY2);
        w < H ? a <= 4 && (a += 0.03) : w > H && a >= 0.6 && (a -= 0.03), pt(a, d);
      }
    }
  }
  function Et(d) {
  }
  function pt(d, S) {
    S.target.style.transform = `translateX(-50%) translateY(-50%) scale(${d}) rotate(${l}deg)`;
  }
  function wt() {
    return r.current || (r.current = /* @__PURE__ */ new Map()), r.current;
  }
  return /* @__PURE__ */ I.jsx(I.Fragment, { children: /* @__PURE__ */ I.jsxs("div", { className: "container " + (v == "h" ? "active" : ""), children: [
    o.toolInfo.layoutChange && o.ImgList.length > 1 && !f ? /* @__PURE__ */ I.jsxs("div", { onClick: Gt, className: "horv " + (v == "h" ? "active" : ""), children: [
      /* @__PURE__ */ I.jsx("div", { className: "v" }),
      /* @__PURE__ */ I.jsx("div", { className: "h" })
    ] }) : "",
    /* @__PURE__ */ I.jsxs("div", { ref: t, className: "img-wraper " + (v == "h" ? "active" : ""), children: [
      /* @__PURE__ */ I.jsx(
        "img",
        {
          className: "v-img",
          onWheel: j,
          onMouseDown: Dt,
          onTouchStart: _t,
          onTouchMove: Pt,
          onTouchEnd: Et,
          src: i[s],
          ref: e
        }
      ),
      /* @__PURE__ */ I.jsx("img", { src: ki, onClick: Yt.bind(null, "l"), className: "img-l" }),
      /* @__PURE__ */ I.jsx("img", { src: bi, onClick: Yt.bind(null, "r"), className: "img-l" })
    ] }),
    /* @__PURE__ */ I.jsxs("div", { className: "rightSmall " + (v == "h" ? "active" : ""), children: [
      /* @__PURE__ */ I.jsx("div", { className: "toolbar " + (v == "h" ? "active" : ""), children: O.map((d) => /* @__PURE__ */ I.jsx("div", { className: "tool-wrapper", children: /* @__PURE__ */ I.jsx("img", { src: d.icon, alt: "", onClick: d.func.bind(null, d.type) }) })) }),
      o.ImgList.length > 1 ? /* @__PURE__ */ I.jsx("div", { className: "small-list " + (v == "h" ? "active" : ""), children: /* @__PURE__ */ I.jsx(
        "div",
        {
          className: "img-list " + (v == "h" ? "active" : ""),
          style: {
            width: v == "h" ? 82 * i.length + 18 + "px" : "",
            height: v == "v" ? 82 * i.length + 18 + "px" : ""
          },
          children: i.map((d, S) => /* @__PURE__ */ I.jsx(
            "img",
            {
              src: d,
              onClick: U.bind(null, S),
              ref: (w) => {
                const H = wt();
                w ? H.set(d, w) : H.delete(d);
              },
              className: (S == s ? "imgA " : "") + (v == "h" ? "active" : "")
            },
            S
          ))
        }
      ) }) : ""
    ] })
  ] }) });
}
const xi = (o) => {
  const t = document.createElement("div");
  document.body.appendChild(t);
  const e = () => {
    Xe.unmountComponentAtNode(t) && t.parentNode && t.parentNode.removeChild(t);
  };
  return Xe.render(
    /* @__PURE__ */ I.jsx(
      Pi,
      {
        ...o,
        visible: !0,
        onClose: e
      }
    ),
    t
  ), {
    close: e
  };
};
export {
  Pi as ImgViewer,
  xi as createImgViewer
};
