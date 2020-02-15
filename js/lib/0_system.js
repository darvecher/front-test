!function () {
	var e = "undefined" != typeof self ? self : global;
	var n;
	if ("undefined" != typeof location) {
		var e_1 = (n = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
		-1 !== e_1 && (n = n.slice(0, e_1 + 1));
	}
	var t = /\\/g, r = "undefined" != typeof Symbol, o = r && Symbol.toStringTag, i = r ? Symbol() : "@";
	function c() {
		this[i] = {};
	}
	var l = c.prototype;
	var u;
	l["import"] = function (e, n) {
		var t = this;
		return Promise.resolve(t.resolve(e, n)).then(function (e) {
			var n = function e(n, t, r) {
				var c = n[i][t];
				if (c) {
					return c;
				}
				var l = [], u = Object.create(null);
				o && Object.defineProperty(u, o, { value: "Module" });
				var s = Promise.resolve().then(function () {
					return n.instantiate(t, r);
				}).then(function (e) {
					if (!e) {
						throw new Error("Module " + t + " did not instantiate");
					}
					var r = e[1](function (e, n) {
						c.h = !0;
						var t = !1;
						if ("object" != typeof e) {
							e in u && u[e] === n || (u[e] = n, t = !0);
						}
						else {
							for (var n_1 in e) {
								var r_1 = e[n_1];
								n_1 in u && u[n_1] === r_1 || (u[n_1] = r_1, t = !0);
							}
						}
						if (t) {
							for (var e_2 = 0; e_2 < l.length; e_2++)
								l[e_2](u);
						}
						return n;
					}, 2 === e[1].length ? {
						"import": function (e) {
							return n["import"](e, t);
						}, meta: n.createContext(t)
					} : void 0);
					return c.e = r.execute || function () {
					}, [e[0], r.setters || []];
				});
				var f = s.then(function (r) {
					return Promise.all(r[0].map(function (o, i) {
						var c = r[1][i];
						return Promise.resolve(n.resolve(o, t)).then(function (r) {
							var o = e(n, r, t);
							return Promise.resolve(o.I).then(function () {
								return c && (o.i.push(c), !o.h && o.I || c(o.n)), o;
							});
						});
					})).then(function (e) {
						c.d = e;
					});
				});
				return f["catch"](function (e) {
					c.e = null, c.er = e;
				}), c = n[i][t] = {
					id: t,
					i: l,
					n: u,
					I: s,
					L: f,
					h: !1,
					d: void 0,
					e: void 0,
					er: void 0,
					E: void 0,
					C: void 0
				};
			}(t, e);
			return n.C || function (e, n) {
				return n.C = function e(n, t, r) {
					if (!r[t.id]) {
						return r[t.id] = !0, Promise.resolve(t.L).then(function () {
							return Promise.all(t.d.map(function (t) {
								return e(n, t, r);
							}));
						});
					}
				}(e, n, {}).then(function () {
					return function e(n, t, r) {
						if (r[t.id]) {
							return;
						}
						if (r[t.id] = !0, !t.e) {
							if (t.er) {
								throw t.er;
							}
							return t.E ? t.E : void 0;
						}
						var o;
						return t.d.forEach(function (t) {
							{
								var i_1 = e(n, t, r);
								i_1 && (o = o || []).push(i_1);
							}
						}), o ? Promise.all(o).then(i) : i();
						function i() {
							try {
								var e_3 = t.e.call(s);
								if (e_3) {
									return e_3 = e_3.then(function () {
										t.C = t.n, t.E = null;
									}, function () {
									}), t.E = t.E || e_3;
								}
								t.C = t.n;
							}
							catch (e) {
								throw t.er = e, e;
							}
							finally {
								t.L = t.I = void 0, t.e = null;
							}
						}
					}(e, n, {});
				}).then(function () {
					return n.n;
				});
			}(t, n);
		});
	}, l.createContext = function (e) {
		return { url: e };
	}, l.register = function (e, n) {
		u = [e, n];
	}, l.getRegister = function () {
		var e = u;
		return u = void 0, e;
	};
	var s = Object.freeze(Object.create(null));
	var f;
	e.System = new c, "undefined" != typeof window && window.addEventListener("error", function (e) {
		f = e.error;
	});
	var d = l.register;
	l.register = function (e, n) {
		f = void 0, d.call(this, e, n);
	}, l.instantiate = function (e, n) {
		var t = this;
		return new Promise(function (r, o) {
			var i = document.createElement("script");
			i.charset = "utf-8", i.async = !0, i.crossOrigin = "anonymous", i.addEventListener("error", function () {
				o(new Error("Error loading " + e + (n ? " from " + n : "")));
			}), i.addEventListener("load", function () {
				if (document.head.removeChild(i), f) {
					return o(f), f = void 0;
				}
				r(t.getRegister());
			}), i.src = e, document.head.appendChild(i);
		});
	}, l.resolve = function (e, r) {
		var o = function (e, n) {
			if (-1 !== e.indexOf("\\") && (e = e.replace(t, "/")), "/" === e[0] && "/" === e[1]) {
				return n.slice(0, n.indexOf(":") + 1) + e;
			}
			if ("." === e[0] && ("/" === e[1] || "." === e[1] && ("/" === e[2] || 2 === e.length && (e += "/")) || 1 === e.length && (e += "/")) || "/" === e[0]) {
				var t_1 = n.slice(0, n.indexOf(":") + 1);
				var r_2;
				if (r_2 = "/" === n[t_1.length + 1] ? "file:" !== t_1 ? (r_2 = n.slice(t_1.length + 2)).slice(r_2.indexOf("/") + 1) : n.slice(8) : n.slice(t_1.length + ("/" === n[t_1.length])), "/" === e[0]) {
					return n.slice(0, n.length - r_2.length - 1) + e;
				}
				var o_1 = r_2.slice(0, r_2.lastIndexOf("/") + 1) + e, i_2 = [];
				var c_1 = -1;
				for (var e_4 = 0; e_4 < o_1.length; e_4++)
					-1 !== c_1 ? "/" === o_1[e_4] && (i_2.push(o_1.slice(c_1, e_4 + 1)), c_1 = -1) : "." === o_1[e_4] ? "." !== o_1[e_4 + 1] || "/" !== o_1[e_4 + 2] && e_4 + 2 !== o_1.length ? "/" === o_1[e_4 + 1] || e_4 + 1 === o_1.length ? e_4 += 1 : c_1 = e_4 : (i_2.pop(), e_4 += 2) : c_1 = e_4;
				return -1 !== c_1 && i_2.push(o_1.slice(c_1)), n.slice(0, n.length - r_2.length) + i_2.join("");
			}
		}(e, r || n);
		if (!o) {
			if (-1 !== e.indexOf(":")) {
				return Promise.resolve(e);
			}
			throw new Error('Cannot resolve "' + e + (r ? '" from ' + r : '"'));
		}
		return Promise.resolve(o);
	};
}();
/*
 * SystemJS named register extension
 * Supports System.register('name', [..deps..], function (_export, _context) { ... })
 *
 * Names are written to the registry as-is
 * System.register('x', ...) can be imported as System.import('x')
 */
(function () {
	var systemJSPrototype = System.constructor.prototype;
	var constructor = System.constructor;
	var SystemJS = function () {
		constructor.call(this);
		this.registerRegistry = Object.create(null);
	};
	SystemJS.prototype = systemJSPrototype;
	System = new SystemJS();
	var register = systemJSPrototype.register;
	systemJSPrototype.register = function (name, deps, declare) {
		if (typeof name !== 'string')
			return register.apply(this, arguments);
		this.registerRegistry[name] = [deps, declare];
		// Provide an empty module to signal success.
		return register.call(this, [], function () { return {}; });
	};
	var resolve = systemJSPrototype.resolve;
	systemJSPrototype.resolve = function (id, parentURL) {
		if (id[0] === '/' || id[0] === '.' && (id[1] === '/' || id[1] === '.' && id[2] === '/'))
			return resolve.call(this, id, parentURL);
		if (id in this.registerRegistry)
			return id;
		return resolve.call(this, id, parentURL);
	};
	var instantiate = systemJSPrototype.instantiate;
	systemJSPrototype.instantiate = function (url, firstParentUrl) {
		return this.registerRegistry[url] || instantiate.call(this, url, firstParentUrl);
	};
})();