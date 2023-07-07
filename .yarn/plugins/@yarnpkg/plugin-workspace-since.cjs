/* eslint-disable */
module.exports = {
  name: '@yarnpkg/plugin-workspace-since',
  factory: function (require) {
    var plugin;
    (() => {
      var e = {
          685: e => {
            'use strict';
            function t(e, t, o) {
              e instanceof RegExp && (e = n(e, o)), t instanceof RegExp && (t = n(t, o));
              var i = r(e, t, o);
              return (
                i && {
                  start: i[0],
                  end: i[1],
                  pre: o.slice(0, i[0]),
                  body: o.slice(i[0] + e.length, i[1]),
                  post: o.slice(i[1] + t.length),
                }
              );
            }
            function n(e, t) {
              var n = t.match(e);
              return n ? n[0] : null;
            }
            function r(e, t, n) {
              var r,
                o,
                i,
                s,
                a,
                c = n.indexOf(e),
                u = n.indexOf(t, c + 1),
                d = c;
              if (c >= 0 && u > 0) {
                for (r = [], i = n.length; d >= 0 && !a; )
                  d == c
                    ? (r.push(d), (c = n.indexOf(e, d + 1)))
                    : 1 == r.length
                    ? (a = [r.pop(), u])
                    : ((o = r.pop()) < i && ((i = o), (s = u)), (u = n.indexOf(t, d + 1))),
                    (d = c < u && c >= 0 ? c : u);
                r.length && (a = [i, s]);
              }
              return a;
            }
            (e.exports = t), (t.range = r);
          },
          692: (e, t, n) => {
            var r = n(90),
              o = n(685);
            e.exports = function (e) {
              if (!e) return [];
              '{}' === e.substr(0, 2) && (e = '\\{\\}' + e.substr(2));
              return (function e(t, n) {
                var i = [],
                  s = o('{', '}', t);
                if (!s || /\$$/.test(s.pre)) return [t];
                var c,
                  u = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body),
                  p = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body),
                  g = u || p,
                  y = s.body.indexOf(',') >= 0;
                if (!g && !y) return s.post.match(/,.*\}/) ? ((t = s.pre + '{' + s.body + a + s.post), e(t)) : [t];
                if (g) c = s.body.split(/\.\./);
                else {
                  if (
                    1 ===
                    (c = (function e(t) {
                      if (!t) return [''];
                      var n = [],
                        r = o('{', '}', t);
                      if (!r) return t.split(',');
                      var i = r.pre,
                        s = r.body,
                        a = r.post,
                        c = i.split(',');
                      c[c.length - 1] += '{' + s + '}';
                      var u = e(a);
                      a.length && ((c[c.length - 1] += u.shift()), c.push.apply(c, u));
                      return n.push.apply(n, c), n;
                    })(s.body)).length
                  )
                    if (1 === (c = e(c[0], !1).map(l)).length)
                      return (w = s.post.length ? e(s.post, !1) : ['']).map(function (e) {
                        return s.pre + c[0] + e;
                      });
                }
                var v,
                  b = s.pre,
                  w = s.post.length ? e(s.post, !1) : [''];
                if (g) {
                  var x = d(c[0]),
                    S = d(c[1]),
                    E = Math.max(c[0].length, c[1].length),
                    I = 3 == c.length ? Math.abs(d(c[2])) : 1,
                    C = m;
                  S < x && ((I *= -1), (C = h));
                  var T = c.some(f);
                  v = [];
                  for (var O = x; C(O, S); O += I) {
                    var k;
                    if (p) '\\' === (k = String.fromCharCode(O)) && (k = '');
                    else if (((k = String(O)), T)) {
                      var j = E - k.length;
                      if (j > 0) {
                        var A = new Array(j + 1).join('0');
                        k = O < 0 ? '-' + A + k.slice(1) : A + k;
                      }
                    }
                    v.push(k);
                  }
                } else
                  v = r(c, function (t) {
                    return e(t, !1);
                  });
                for (var P = 0; P < v.length; P++)
                  for (var G = 0; G < w.length; G++) {
                    var _ = b + v[P] + w[G];
                    (!n || g || _) && i.push(_);
                  }
                return i;
              })(
                (function (e) {
                  return e
                    .split('\\\\')
                    .join(i)
                    .split('\\{')
                    .join(s)
                    .split('\\}')
                    .join(a)
                    .split('\\,')
                    .join(c)
                    .split('\\.')
                    .join(u);
                })(e),
                !0
              ).map(p);
            };
            var i = '\0SLASH' + Math.random() + '\0',
              s = '\0OPEN' + Math.random() + '\0',
              a = '\0CLOSE' + Math.random() + '\0',
              c = '\0COMMA' + Math.random() + '\0',
              u = '\0PERIOD' + Math.random() + '\0';
            function d(e) {
              return parseInt(e, 10) == e ? parseInt(e, 10) : e.charCodeAt(0);
            }
            function p(e) {
              return e.split(i).join('\\').split(s).join('{').split(a).join('}').split(c).join(',').split(u).join('.');
            }
            function l(e) {
              return '{' + e + '}';
            }
            function f(e) {
              return /^-?0\d/.test(e);
            }
            function m(e, t) {
              return e <= t;
            }
            function h(e, t) {
              return e >= t;
            }
          },
          90: e => {
            e.exports = function (e, n) {
              for (var r = [], o = 0; o < e.length; o++) {
                var i = n(e[o], o);
                t(i) ? r.push.apply(r, i) : r.push(i);
              }
              return r;
            };
            var t =
              Array.isArray ||
              function (e) {
                return '[object Array]' === Object.prototype.toString.call(e);
              };
          },
          846: (e, t, n) => {
            'use strict';
            const r = n(129),
              o = n(782),
              i = n(682);
            function s(e, t, n) {
              const s = o(e, t, n),
                a = r.spawn(s.command, s.args, s.options);
              return i.hookChildProcess(a, s), a;
            }
            (e.exports = s),
              (e.exports.spawn = s),
              (e.exports.sync = function (e, t, n) {
                const s = o(e, t, n),
                  a = r.spawnSync(s.command, s.args, s.options);
                return (a.error = a.error || i.verifyENOENTSync(a.status, s)), a;
              }),
              (e.exports._parse = o),
              (e.exports._enoent = i);
          },
          682: e => {
            'use strict';
            const t = 'win32' === process.platform;
            function n(e, t) {
              return Object.assign(new Error(`${t} ${e.command} ENOENT`), {
                code: 'ENOENT',
                errno: 'ENOENT',
                syscall: `${t} ${e.command}`,
                path: e.command,
                spawnargs: e.args,
              });
            }
            function r(e, r) {
              return t && 1 === e && !r.file ? n(r.original, 'spawn') : null;
            }
            e.exports = {
              hookChildProcess: function (e, n) {
                if (!t) return;
                const o = e.emit;
                e.emit = function (t, i) {
                  if ('exit' === t) {
                    const t = r(i, n);
                    if (t) return o.call(e, 'error', t);
                  }
                  return o.apply(e, arguments);
                };
              },
              verifyENOENT: r,
              verifyENOENTSync: function (e, r) {
                return t && 1 === e && !r.file ? n(r.original, 'spawnSync') : null;
              },
              notFoundError: n,
            };
          },
          782: (e, t, n) => {
            'use strict';
            const r = n(622),
              o = n(326),
              i = n(541),
              s = n(449),
              a = 'win32' === process.platform,
              c = /\.(?:com|exe)$/i,
              u = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
            function d(e) {
              if (!a) return e;
              const t = (function (e) {
                  e.file = o(e);
                  const t = e.file && s(e.file);
                  return t ? (e.args.unshift(e.file), (e.command = t), o(e)) : e.file;
                })(e),
                n = !c.test(t);
              if (e.options.forceShell || n) {
                const n = u.test(t);
                (e.command = r.normalize(e.command)),
                  (e.command = i.command(e.command)),
                  (e.args = e.args.map(e => i.argument(e, n)));
                const o = [e.command].concat(e.args).join(' ');
                (e.args = ['/d', '/s', '/c', `"${o}"`]),
                  (e.command = process.env.comspec || 'cmd.exe'),
                  (e.options.windowsVerbatimArguments = !0);
              }
              return e;
            }
            e.exports = function (e, t, n) {
              t && !Array.isArray(t) && ((n = t), (t = null));
              const r = {
                command: e,
                args: (t = t ? t.slice(0) : []),
                options: (n = Object.assign({}, n)),
                file: void 0,
                original: { command: e, args: t },
              };
              return n.shell ? r : d(r);
            };
          },
          541: e => {
            'use strict';
            const t = /([()\][%!^"`<>&|;, *?])/g;
            (e.exports.command = function (e) {
              return (e = e.replace(t, '^$1'));
            }),
              (e.exports.argument = function (e, n) {
                return (
                  (e = (e = `"${(e = (e = (e = '' + e).replace(/(\\*)"/g, '$1$1\\"')).replace(
                    /(\\*)$/,
                    '$1$1'
                  ))}"`).replace(t, '^$1')),
                  n && (e = e.replace(t, '^$1')),
                  e
                );
              });
          },
          449: (e, t, n) => {
            'use strict';
            const r = n(747),
              o = n(104);
            e.exports = function (e) {
              const t = Buffer.alloc(150);
              let n;
              try {
                (n = r.openSync(e, 'r')), r.readSync(n, t, 0, 150, 0), r.closeSync(n);
              } catch (e) {}
              return o(t.toString());
            };
          },
          326: (e, t, n) => {
            'use strict';
            const r = n(622),
              o = n(658),
              i = n(687);
            function s(e, t) {
              const n = e.options.env || process.env,
                s = process.cwd(),
                a = null != e.options.cwd,
                c = a && void 0 !== process.chdir && !process.chdir.disabled;
              if (c)
                try {
                  process.chdir(e.options.cwd);
                } catch (e) {}
              let u;
              try {
                u = o.sync(e.command, { path: n[i({ env: n })], pathExt: t ? r.delimiter : void 0 });
              } catch (e) {
              } finally {
                c && process.chdir(s);
              }
              return u && (u = r.resolve(a ? e.options.cwd : '', u)), u;
            }
            e.exports = function (e) {
              return s(e) || s(e, !0);
            };
          },
          145: (e, t, n) => {
            'use strict';
            const r = n(622),
              o = n(129),
              i = n(846),
              s = n(799),
              a = n(717),
              c = n(394),
              u = n(152),
              d = n(976),
              { spawnedKill: p, spawnedCancel: l, setupTimeout: f, setExitHandler: m } = n(304),
              { handleInput: h, getSpawnedResult: g, makeAllStream: y, validateInputSync: v } = n(800),
              { mergePromise: b, getSpawnedPromise: w } = n(578),
              { joinCommand: x, parseCommand: S } = n(736),
              E = (e, t, n = {}) => {
                const o = i._parse(e, t, n);
                return (
                  (e = o.command),
                  (t = o.args),
                  ((n = {
                    maxBuffer: 1e8,
                    buffer: !0,
                    stripFinalNewline: !0,
                    extendEnv: !0,
                    preferLocal: !1,
                    localDir: (n = o.options).cwd || process.cwd(),
                    execPath: process.execPath,
                    encoding: 'utf8',
                    reject: !0,
                    cleanup: !0,
                    all: !1,
                    windowsHide: !0,
                    ...n,
                  }).env = (({ env: e, extendEnv: t, preferLocal: n, localDir: r, execPath: o }) => {
                    const i = t ? { ...process.env, ...e } : e;
                    return n ? a.env({ env: i, cwd: r, execPath: o }) : i;
                  })(n)),
                  (n.stdio = d(n)),
                  'win32' === process.platform && 'cmd' === r.basename(e, '.exe') && t.unshift('/q'),
                  { file: e, args: t, options: n, parsed: o }
                );
              },
              I = (e, t, n) =>
                'string' == typeof t || Buffer.isBuffer(t)
                  ? e.stripFinalNewline
                    ? s(t)
                    : t
                  : void 0 === n
                  ? void 0
                  : '',
              C = (e, t, n) => {
                const r = E(e, t, n),
                  i = x(e, t);
                let s;
                try {
                  s = o.spawn(r.file, r.args, r.options);
                } catch (e) {
                  const t = new o.ChildProcess(),
                    n = Promise.reject(
                      u({
                        error: e,
                        stdout: '',
                        stderr: '',
                        all: '',
                        command: i,
                        parsed: r,
                        timedOut: !1,
                        isCanceled: !1,
                        killed: !1,
                      })
                    );
                  return b(t, n);
                }
                const a = w(s),
                  d = f(s, r.options, a),
                  v = m(s, r.options, d),
                  S = { isCanceled: !1 };
                (s.kill = p.bind(null, s.kill.bind(s))), (s.cancel = l.bind(null, s, S));
                const C = c(async () => {
                  const [{ error: e, exitCode: t, signal: n, timedOut: o }, a, c, d] = await g(s, r.options, v),
                    p = I(r.options, a),
                    l = I(r.options, c),
                    f = I(r.options, d);
                  if (e || 0 !== t || null !== n) {
                    const a = u({
                      error: e,
                      exitCode: t,
                      signal: n,
                      stdout: p,
                      stderr: l,
                      all: f,
                      command: i,
                      parsed: r,
                      timedOut: o,
                      isCanceled: S.isCanceled,
                      killed: s.killed,
                    });
                    if (!r.options.reject) return a;
                    throw a;
                  }
                  return {
                    command: i,
                    exitCode: 0,
                    stdout: p,
                    stderr: l,
                    all: f,
                    failed: !1,
                    timedOut: !1,
                    isCanceled: !1,
                    killed: !1,
                  };
                });
                return h(s, r.options.input), (s.all = y(s, r.options)), b(s, C);
              };
            (e.exports = C),
              (e.exports.sync = (e, t, n) => {
                const r = E(e, t, n),
                  i = x(e, t);
                let s;
                v(r.options);
                try {
                  s = o.spawnSync(r.file, r.args, r.options);
                } catch (e) {
                  throw u({
                    error: e,
                    stdout: '',
                    stderr: '',
                    all: '',
                    command: i,
                    parsed: r,
                    timedOut: !1,
                    isCanceled: !1,
                    killed: !1,
                  });
                }
                const a = I(r.options, s.stdout, s.error),
                  c = I(r.options, s.stderr, s.error);
                if (s.error || 0 !== s.status || null !== s.signal) {
                  const e = u({
                    stdout: a,
                    stderr: c,
                    error: s.error,
                    signal: s.signal,
                    exitCode: s.status,
                    command: i,
                    parsed: r,
                    timedOut: s.error && 'ETIMEDOUT' === s.error.code,
                    isCanceled: !1,
                    killed: null !== s.signal,
                  });
                  if (!r.options.reject) return e;
                  throw e;
                }
                return {
                  command: i,
                  exitCode: 0,
                  stdout: a,
                  stderr: c,
                  failed: !1,
                  timedOut: !1,
                  isCanceled: !1,
                  killed: !1,
                };
              }),
              (e.exports.command = (e, t) => {
                const [n, ...r] = S(e);
                return C(n, r, t);
              }),
              (e.exports.commandSync = (e, t) => {
                const [n, ...r] = S(e);
                return C.sync(n, r, t);
              }),
              (e.exports.node = (e, t, n = {}) => {
                t && !Array.isArray(t) && 'object' == typeof t && ((n = t), (t = []));
                const r = d.node(n),
                  o = process.execArgv.filter(e => !e.startsWith('--inspect')),
                  { nodePath: i = process.execPath, nodeOptions: s = o } = n;
                return C(i, [...s, e, ...(Array.isArray(t) ? t : [])], {
                  ...n,
                  stdin: void 0,
                  stdout: void 0,
                  stderr: void 0,
                  stdio: r,
                  shell: !1,
                });
              });
          },
          736: e => {
            'use strict';
            const t = / +/g;
            e.exports = {
              joinCommand: (e, t = []) => (Array.isArray(t) ? [e, ...t].join(' ') : e),
              parseCommand: e => {
                const n = [];
                for (const r of e.trim().split(t)) {
                  const e = n[n.length - 1];
                  e && e.endsWith('\\') ? (n[n.length - 1] = `${e.slice(0, -1)} ${r}`) : n.push(r);
                }
                return n;
              },
            };
          },
          152: (e, t, n) => {
            'use strict';
            const { signalsByName: r } = n(517);
            e.exports = ({
              stdout: e,
              stderr: t,
              all: n,
              error: o,
              signal: i,
              exitCode: s,
              command: a,
              timedOut: c,
              isCanceled: u,
              killed: d,
              parsed: {
                options: { timeout: p },
              },
            }) => {
              s = null === s ? void 0 : s;
              const l = void 0 === (i = null === i ? void 0 : i) ? void 0 : r[i].description,
                f = `Command ${(({
                  timedOut: e,
                  timeout: t,
                  errorCode: n,
                  signal: r,
                  signalDescription: o,
                  exitCode: i,
                  isCanceled: s,
                }) =>
                  e
                    ? `timed out after ${t} milliseconds`
                    : s
                    ? 'was canceled'
                    : void 0 !== n
                    ? 'failed with ' + n
                    : void 0 !== r
                    ? `was killed with ${r} (${o})`
                    : void 0 !== i
                    ? 'failed with exit code ' + i
                    : 'failed')({
                  timedOut: c,
                  timeout: p,
                  errorCode: o && o.code,
                  signal: i,
                  signalDescription: l,
                  exitCode: s,
                  isCanceled: u,
                })}: ${a}`,
                m = '[object Error]' === Object.prototype.toString.call(o),
                h = m ? `${f}\n${o.message}` : f,
                g = [h, t, e].filter(Boolean).join('\n');
              return (
                m ? ((o.originalMessage = o.message), (o.message = g)) : (o = new Error(g)),
                (o.shortMessage = h),
                (o.command = a),
                (o.exitCode = s),
                (o.signal = i),
                (o.signalDescription = l),
                (o.stdout = e),
                (o.stderr = t),
                void 0 !== n && (o.all = n),
                'bufferedData' in o && delete o.bufferedData,
                (o.failed = !0),
                (o.timedOut = Boolean(c)),
                (o.isCanceled = u),
                (o.killed = d && !c),
                o
              );
            };
          },
          304: (e, t, n) => {
            'use strict';
            const r = n(87),
              o = n(321),
              i = (e, t, n, r) => {
                if (!s(t, n, r)) return;
                const o = c(n),
                  i = setTimeout(() => {
                    e('SIGKILL');
                  }, o);
                i.unref && i.unref();
              },
              s = (e, { forceKillAfterTimeout: t }, n) => a(e) && !1 !== t && n,
              a = e => e === r.constants.signals.SIGTERM || ('string' == typeof e && 'SIGTERM' === e.toUpperCase()),
              c = ({ forceKillAfterTimeout: e = !0 }) => {
                if (!0 === e) return 5e3;
                if (!Number.isFinite(e) || e < 0)
                  throw new TypeError(
                    `Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`
                  );
                return e;
              };
            e.exports = {
              spawnedKill: (e, t = 'SIGTERM', n = {}) => {
                const r = e(t);
                return i(e, t, n, r), r;
              },
              spawnedCancel: (e, t) => {
                e.kill() && (t.isCanceled = !0);
              },
              setupTimeout: (e, { timeout: t, killSignal: n = 'SIGTERM' }, r) => {
                if (0 === t || void 0 === t) return r;
                if (!Number.isFinite(t) || t < 0)
                  throw new TypeError(
                    `Expected the \`timeout\` option to be a non-negative integer, got \`${t}\` (${typeof t})`
                  );
                let o;
                const i = new Promise((r, i) => {
                    o = setTimeout(() => {
                      ((e, t, n) => {
                        e.kill(t), n(Object.assign(new Error('Timed out'), { timedOut: !0, signal: t }));
                      })(e, n, i);
                    }, t);
                  }),
                  s = r.finally(() => {
                    clearTimeout(o);
                  });
                return Promise.race([i, s]);
              },
              setExitHandler: async (e, { cleanup: t, detached: n }, r) => {
                if (!t || n) return r;
                const i = o(() => {
                  e.kill();
                });
                return r.finally(() => {
                  i();
                });
              },
            };
          },
          578: e => {
            'use strict';
            const t = (async () => {})().constructor.prototype,
              n = ['then', 'catch', 'finally'].map(e => [e, Reflect.getOwnPropertyDescriptor(t, e)]);
            e.exports = {
              mergePromise: (e, t) => {
                for (const [r, o] of n) {
                  const n = 'function' == typeof t ? (...e) => Reflect.apply(o.value, t(), e) : o.value.bind(t);
                  Reflect.defineProperty(e, r, { ...o, value: n });
                }
                return e;
              },
              getSpawnedPromise: e =>
                new Promise((t, n) => {
                  e.on('exit', (e, n) => {
                    t({ exitCode: e, signal: n });
                  }),
                    e.on('error', e => {
                      n(e);
                    }),
                    e.stdin &&
                      e.stdin.on('error', e => {
                        n(e);
                      });
                }),
            };
          },
          976: e => {
            'use strict';
            const t = ['stdin', 'stdout', 'stderr'],
              n = e => {
                if (!e) return;
                const { stdio: n } = e;
                if (void 0 === n) return t.map(t => e[t]);
                if ((e => t.some(t => void 0 !== e[t]))(e))
                  throw new Error(
                    "It's not possible to provide `stdio` in combination with one of " +
                      t.map(e => `\`${e}\``).join(', ')
                  );
                if ('string' == typeof n) return n;
                if (!Array.isArray(n))
                  throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof n}\``);
                const r = Math.max(n.length, t.length);
                return Array.from({ length: r }, (e, t) => n[t]);
              };
            (e.exports = n),
              (e.exports.node = e => {
                const t = n(e);
                return 'ipc' === t
                  ? 'ipc'
                  : void 0 === t || 'string' == typeof t
                  ? [t, t, t, 'ipc']
                  : t.includes('ipc')
                  ? t
                  : [...t, 'ipc'];
              });
          },
          800: (e, t, n) => {
            'use strict';
            const r = n(504),
              o = n(420),
              i = n(359),
              s = async (e, t) => {
                if (e) {
                  e.destroy();
                  try {
                    return await t;
                  } catch (e) {
                    return e.bufferedData;
                  }
                }
              },
              a = (e, { encoding: t, buffer: n, maxBuffer: r }) => {
                if (e && n) return t ? o(e, { encoding: t, maxBuffer: r }) : o.buffer(e, { maxBuffer: r });
              };
            e.exports = {
              handleInput: (e, t) => {
                void 0 !== t && void 0 !== e.stdin && (r(t) ? t.pipe(e.stdin) : e.stdin.end(t));
              },
              makeAllStream: (e, { all: t }) => {
                if (!t || (!e.stdout && !e.stderr)) return;
                const n = i();
                return e.stdout && n.add(e.stdout), e.stderr && n.add(e.stderr), n;
              },
              getSpawnedResult: async (
                { stdout: e, stderr: t, all: n },
                { encoding: r, buffer: o, maxBuffer: i },
                c
              ) => {
                const u = a(e, { encoding: r, buffer: o, maxBuffer: i }),
                  d = a(t, { encoding: r, buffer: o, maxBuffer: i }),
                  p = a(n, { encoding: r, buffer: o, maxBuffer: 2 * i });
                try {
                  return await Promise.all([c, u, d, p]);
                } catch (r) {
                  return Promise.all([{ error: r, signal: r.signal, timedOut: r.timedOut }, s(e, u), s(t, d), s(n, p)]);
                }
              },
              validateInputSync: ({ input: e }) => {
                if (r(e)) throw new TypeError('The `input` option cannot be a stream in sync mode');
              },
            };
          },
          79: (e, t, n) => {
            'use strict';
            const { PassThrough: r } = n(413);
            e.exports = e => {
              e = { ...e };
              const { array: t } = e;
              let { encoding: n } = e;
              const o = 'buffer' === n;
              let i = !1;
              t ? (i = !(n || o)) : (n = n || 'utf8'), o && (n = null);
              const s = new r({ objectMode: i });
              n && s.setEncoding(n);
              let a = 0;
              const c = [];
              return (
                s.on('data', e => {
                  c.push(e), i ? (a = c.length) : (a += e.length);
                }),
                (s.getBufferedValue = () => (t ? c : o ? Buffer.concat(c, a) : c.join(''))),
                (s.getBufferedLength = () => a),
                s
              );
            };
          },
          420: (e, t, n) => {
            'use strict';
            const { constants: r } = n(293),
              o = n(413),
              { promisify: i } = n(669),
              s = n(79),
              a = i(o.pipeline);
            class c extends Error {
              constructor() {
                super('maxBuffer exceeded'), (this.name = 'MaxBufferError');
              }
            }
            async function u(e, t) {
              if (!e) throw new Error('Expected a stream');
              t = { maxBuffer: 1 / 0, ...t };
              const { maxBuffer: n } = t,
                o = s(t);
              return (
                await new Promise((t, i) => {
                  const s = e => {
                    e && o.getBufferedLength() <= r.MAX_LENGTH && (e.bufferedData = o.getBufferedValue()), i(e);
                  };
                  (async () => {
                    try {
                      await a(e, o), t();
                    } catch (e) {
                      s(e);
                    }
                  })(),
                    o.on('data', () => {
                      o.getBufferedLength() > n && s(new c());
                    });
                }),
                o.getBufferedValue()
              );
            }
            (e.exports = u),
              (e.exports.buffer = (e, t) => u(e, { ...t, encoding: 'buffer' })),
              (e.exports.array = (e, t) => u(e, { ...t, array: !0 })),
              (e.exports.MaxBufferError = c);
          },
          142: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SIGNALS = void 0);
            t.SIGNALS = [
              { name: 'SIGHUP', number: 1, action: 'terminate', description: 'Terminal closed', standard: 'posix' },
              {
                name: 'SIGINT',
                number: 2,
                action: 'terminate',
                description: 'User interruption with CTRL-C',
                standard: 'ansi',
              },
              {
                name: 'SIGQUIT',
                number: 3,
                action: 'core',
                description: 'User interruption with CTRL-\\',
                standard: 'posix',
              },
              {
                name: 'SIGILL',
                number: 4,
                action: 'core',
                description: 'Invalid machine instruction',
                standard: 'ansi',
              },
              { name: 'SIGTRAP', number: 5, action: 'core', description: 'Debugger breakpoint', standard: 'posix' },
              { name: 'SIGABRT', number: 6, action: 'core', description: 'Aborted', standard: 'ansi' },
              { name: 'SIGIOT', number: 6, action: 'core', description: 'Aborted', standard: 'bsd' },
              {
                name: 'SIGBUS',
                number: 7,
                action: 'core',
                description: 'Bus error due to misaligned, non-existing address or paging error',
                standard: 'bsd',
              },
              {
                name: 'SIGEMT',
                number: 7,
                action: 'terminate',
                description: 'Command should be emulated but is not implemented',
                standard: 'other',
              },
              {
                name: 'SIGFPE',
                number: 8,
                action: 'core',
                description: 'Floating point arithmetic error',
                standard: 'ansi',
              },
              {
                name: 'SIGKILL',
                number: 9,
                action: 'terminate',
                description: 'Forced termination',
                standard: 'posix',
                forced: !0,
              },
              {
                name: 'SIGUSR1',
                number: 10,
                action: 'terminate',
                description: 'Application-specific signal',
                standard: 'posix',
              },
              { name: 'SIGSEGV', number: 11, action: 'core', description: 'Segmentation fault', standard: 'ansi' },
              {
                name: 'SIGUSR2',
                number: 12,
                action: 'terminate',
                description: 'Application-specific signal',
                standard: 'posix',
              },
              {
                name: 'SIGPIPE',
                number: 13,
                action: 'terminate',
                description: 'Broken pipe or socket',
                standard: 'posix',
              },
              { name: 'SIGALRM', number: 14, action: 'terminate', description: 'Timeout or timer', standard: 'posix' },
              { name: 'SIGTERM', number: 15, action: 'terminate', description: 'Termination', standard: 'ansi' },
              {
                name: 'SIGSTKFLT',
                number: 16,
                action: 'terminate',
                description: 'Stack is empty or overflowed',
                standard: 'other',
              },
              {
                name: 'SIGCHLD',
                number: 17,
                action: 'ignore',
                description: 'Child process terminated, paused or unpaused',
                standard: 'posix',
              },
              {
                name: 'SIGCLD',
                number: 17,
                action: 'ignore',
                description: 'Child process terminated, paused or unpaused',
                standard: 'other',
              },
              {
                name: 'SIGCONT',
                number: 18,
                action: 'unpause',
                description: 'Unpaused',
                standard: 'posix',
                forced: !0,
              },
              { name: 'SIGSTOP', number: 19, action: 'pause', description: 'Paused', standard: 'posix', forced: !0 },
              {
                name: 'SIGTSTP',
                number: 20,
                action: 'pause',
                description: 'Paused using CTRL-Z or "suspend"',
                standard: 'posix',
              },
              {
                name: 'SIGTTIN',
                number: 21,
                action: 'pause',
                description: 'Background process cannot read terminal input',
                standard: 'posix',
              },
              {
                name: 'SIGBREAK',
                number: 21,
                action: 'terminate',
                description: 'User interruption with CTRL-BREAK',
                standard: 'other',
              },
              {
                name: 'SIGTTOU',
                number: 22,
                action: 'pause',
                description: 'Background process cannot write to terminal output',
                standard: 'posix',
              },
              {
                name: 'SIGURG',
                number: 23,
                action: 'ignore',
                description: 'Socket received out-of-band data',
                standard: 'bsd',
              },
              { name: 'SIGXCPU', number: 24, action: 'core', description: 'Process timed out', standard: 'bsd' },
              { name: 'SIGXFSZ', number: 25, action: 'core', description: 'File too big', standard: 'bsd' },
              { name: 'SIGVTALRM', number: 26, action: 'terminate', description: 'Timeout or timer', standard: 'bsd' },
              { name: 'SIGPROF', number: 27, action: 'terminate', description: 'Timeout or timer', standard: 'bsd' },
              {
                name: 'SIGWINCH',
                number: 28,
                action: 'ignore',
                description: 'Terminal window size changed',
                standard: 'bsd',
              },
              { name: 'SIGIO', number: 29, action: 'terminate', description: 'I/O is available', standard: 'other' },
              { name: 'SIGPOLL', number: 29, action: 'terminate', description: 'Watched event', standard: 'other' },
              {
                name: 'SIGINFO',
                number: 29,
                action: 'ignore',
                description: 'Request for process information',
                standard: 'other',
              },
              {
                name: 'SIGPWR',
                number: 30,
                action: 'terminate',
                description: 'Device running out of power',
                standard: 'systemv',
              },
              { name: 'SIGSYS', number: 31, action: 'core', description: 'Invalid system call', standard: 'other' },
              {
                name: 'SIGUNUSED',
                number: 31,
                action: 'terminate',
                description: 'Invalid system call',
                standard: 'other',
              },
            ];
          },
          517: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.signalsByNumber = t.signalsByName = void 0);
            var r = n(87),
              o = n(679),
              i = n(246);
            const s = function (
                e,
                { name: t, number: n, description: r, supported: o, action: i, forced: s, standard: a }
              ) {
                return {
                  ...e,
                  [t]: { name: t, number: n, description: r, supported: o, action: i, forced: s, standard: a },
                };
              },
              a = (0, o.getSignals)().reduce(s, {});
            t.signalsByName = a;
            const c = function (e, t) {
                const n = u(e, t);
                if (void 0 === n) return {};
                const { name: r, description: o, supported: i, action: s, forced: a, standard: c } = n;
                return { [e]: { name: r, number: e, description: o, supported: i, action: s, forced: a, standard: c } };
              },
              u = function (e, t) {
                const n = t.find(({ name: t }) => r.constants.signals[t] === e);
                return void 0 !== n ? n : t.find(t => t.number === e);
              },
              d = (function () {
                const e = (0, o.getSignals)(),
                  t = i.SIGRTMAX + 1,
                  n = Array.from({ length: t }, (t, n) => c(n, e));
                return Object.assign({}, ...n);
              })();
            t.signalsByNumber = d;
          },
          246: (e, t) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.SIGRTMAX = t.getRealtimeSignals = void 0);
            t.getRealtimeSignals = function () {
              const e = o - r + 1;
              return Array.from({ length: e }, n);
            };
            const n = function (e, t) {
                return {
                  name: 'SIGRT' + (t + 1),
                  number: r + t,
                  action: 'terminate',
                  description: 'Application-specific signal (realtime)',
                  standard: 'posix',
                };
              },
              r = 34,
              o = 64;
            t.SIGRTMAX = o;
          },
          679: (e, t, n) => {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.getSignals = void 0);
            var r = n(87),
              o = n(142),
              i = n(246);
            t.getSignals = function () {
              const e = (0, i.getRealtimeSignals)();
              return [...o.SIGNALS, ...e].map(s);
            };
            const s = function ({ name: e, number: t, description: n, action: o, forced: i = !1, standard: s }) {
              const {
                  signals: { [e]: a },
                } = r.constants,
                c = void 0 !== a;
              return { name: e, number: c ? a : t, description: n, supported: c, action: o, forced: i, standard: s };
            };
          },
          504: e => {
            'use strict';
            const t = e => null !== e && 'object' == typeof e && 'function' == typeof e.pipe;
            (t.writable = e =>
              t(e) && !1 !== e.writable && 'function' == typeof e._write && 'object' == typeof e._writableState),
              (t.readable = e =>
                t(e) && !1 !== e.readable && 'function' == typeof e._read && 'object' == typeof e._readableState),
              (t.duplex = e => t.writable(e) && t.readable(e)),
              (t.transform = e =>
                t.duplex(e) && 'function' == typeof e._transform && 'object' == typeof e._transformState),
              (e.exports = t);
          },
          768: (e, t, n) => {
            var r;
            n(747);
            function o(e, t, n) {
              if (('function' == typeof t && ((n = t), (t = {})), !n)) {
                if ('function' != typeof Promise) throw new TypeError('callback not provided');
                return new Promise(function (n, r) {
                  o(e, t || {}, function (e, t) {
                    e ? r(e) : n(t);
                  });
                });
              }
              r(e, t || {}, function (e, r) {
                e && ('EACCES' === e.code || (t && t.ignoreErrors)) && ((e = null), (r = !1)), n(e, r);
              });
            }
            (r = 'win32' === process.platform || global.TESTING_WINDOWS ? n(73) : n(721)),
              (e.exports = o),
              (o.sync = function (e, t) {
                try {
                  return r.sync(e, t || {});
                } catch (e) {
                  if ((t && t.ignoreErrors) || 'EACCES' === e.code) return !1;
                  throw e;
                }
              });
          },
          721: (e, t, n) => {
            (e.exports = o),
              (o.sync = function (e, t) {
                return i(r.statSync(e), t);
              });
            var r = n(747);
            function o(e, t, n) {
              r.stat(e, function (e, r) {
                n(e, !e && i(r, t));
              });
            }
            function i(e, t) {
              return (
                e.isFile() &&
                (function (e, t) {
                  var n = e.mode,
                    r = e.uid,
                    o = e.gid,
                    i = void 0 !== t.uid ? t.uid : process.getuid && process.getuid(),
                    s = void 0 !== t.gid ? t.gid : process.getgid && process.getgid(),
                    a = parseInt('100', 8),
                    c = parseInt('010', 8),
                    u = parseInt('001', 8),
                    d = a | c;
                  return n & u || (n & c && o === s) || (n & a && r === i) || (n & d && 0 === i);
                })(e, t)
              );
            }
          },
          73: (e, t, n) => {
            (e.exports = i),
              (i.sync = function (e, t) {
                return o(r.statSync(e), e, t);
              });
            var r = n(747);
            function o(e, t, n) {
              return (
                !(!e.isSymbolicLink() && !e.isFile()) &&
                (function (e, t) {
                  var n = void 0 !== t.pathExt ? t.pathExt : process.env.PATHEXT;
                  if (!n) return !0;
                  if (-1 !== (n = n.split(';')).indexOf('')) return !0;
                  for (var r = 0; r < n.length; r++) {
                    var o = n[r].toLowerCase();
                    if (o && e.substr(-o.length).toLowerCase() === o) return !0;
                  }
                  return !1;
                })(t, n)
              );
            }
            function i(e, t, n) {
              r.stat(e, function (r, i) {
                n(r, !r && o(i, e, t));
              });
            }
          },
          359: (e, t, n) => {
            'use strict';
            const { PassThrough: r } = n(413);
            e.exports = function () {
              var e = [],
                t = new r({ objectMode: !0 });
              return (
                t.setMaxListeners(0),
                (t.add = n),
                (t.isEmpty = o),
                t.on('unpipe', i),
                Array.prototype.slice.call(arguments).forEach(n),
                t
              );
              function n(r) {
                return Array.isArray(r)
                  ? (r.forEach(n), this)
                  : (e.push(r),
                    r.once('end', i.bind(null, r)),
                    r.once('error', t.emit.bind(t, 'error')),
                    r.pipe(t, { end: !1 }),
                    this);
              }
              function o() {
                return 0 == e.length;
              }
              function i(n) {
                !(e = e.filter(function (e) {
                  return e !== n;
                })).length &&
                  t.readable &&
                  t.end();
              }
            };
          },
          65: e => {
            'use strict';
            const t = (e, t) => {
              for (const n of Reflect.ownKeys(t)) Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              return e;
            };
            (e.exports = t), (e.exports.default = t);
          },
          197: (e, t, n) => {
            (e.exports = d), (d.Minimatch = p);
            var r = { sep: '/' };
            try {
              r = n(622);
            } catch (e) {}
            var o = (d.GLOBSTAR = p.GLOBSTAR = {}),
              i = n(692),
              s = {
                '!': { open: '(?:(?!(?:', close: '))[^/]*?)' },
                '?': { open: '(?:', close: ')?' },
                '+': { open: '(?:', close: ')+' },
                '*': { open: '(?:', close: ')*' },
                '@': { open: '(?:', close: ')' },
              },
              a = '().*{}+?[]^$\\!'.split('').reduce(function (e, t) {
                return (e[t] = !0), e;
              }, {});
            var c = /\/+/;
            function u(e, t) {
              (e = e || {}), (t = t || {});
              var n = {};
              return (
                Object.keys(t).forEach(function (e) {
                  n[e] = t[e];
                }),
                Object.keys(e).forEach(function (t) {
                  n[t] = e[t];
                }),
                n
              );
            }
            function d(e, t, n) {
              if ('string' != typeof t) throw new TypeError('glob pattern string required');
              return (
                n || (n = {}),
                !(!n.nocomment && '#' === t.charAt(0)) && ('' === t.trim() ? '' === e : new p(t, n).match(e))
              );
            }
            function p(e, t) {
              if (!(this instanceof p)) return new p(e, t);
              if ('string' != typeof e) throw new TypeError('glob pattern string required');
              t || (t = {}),
                (e = e.trim()),
                '/' !== r.sep && (e = e.split(r.sep).join('/')),
                (this.options = t),
                (this.set = []),
                (this.pattern = e),
                (this.regexp = null),
                (this.negate = !1),
                (this.comment = !1),
                (this.empty = !1),
                this.make();
            }
            function l(e, t) {
              if ((t || (t = this instanceof p ? this.options : {}), void 0 === (e = void 0 === e ? this.pattern : e)))
                throw new TypeError('undefined pattern');
              return t.nobrace || !e.match(/\{.*\}/) ? [e] : i(e);
            }
            (d.filter = function (e, t) {
              return (
                (t = t || {}),
                function (n, r, o) {
                  return d(n, e, t);
                }
              );
            }),
              (d.defaults = function (e) {
                if (!e || !Object.keys(e).length) return d;
                var t = d,
                  n = function (n, r, o) {
                    return t.minimatch(n, r, u(e, o));
                  };
                return (
                  (n.Minimatch = function (n, r) {
                    return new t.Minimatch(n, u(e, r));
                  }),
                  n
                );
              }),
              (p.defaults = function (e) {
                return e && Object.keys(e).length ? d.defaults(e).Minimatch : p;
              }),
              (p.prototype.debug = function () {}),
              (p.prototype.make = function () {
                if (this._made) return;
                var e = this.pattern,
                  t = this.options;
                if (!t.nocomment && '#' === e.charAt(0)) return void (this.comment = !0);
                if (!e) return void (this.empty = !0);
                this.parseNegate();
                var n = (this.globSet = this.braceExpand());
                t.debug && (this.debug = console.error);
                this.debug(this.pattern, n),
                  (n = this.globParts =
                    n.map(function (e) {
                      return e.split(c);
                    })),
                  this.debug(this.pattern, n),
                  (n = n.map(function (e, t, n) {
                    return e.map(this.parse, this);
                  }, this)),
                  this.debug(this.pattern, n),
                  (n = n.filter(function (e) {
                    return -1 === e.indexOf(!1);
                  })),
                  this.debug(this.pattern, n),
                  (this.set = n);
              }),
              (p.prototype.parseNegate = function () {
                var e = this.pattern,
                  t = !1,
                  n = this.options,
                  r = 0;
                if (n.nonegate) return;
                for (var o = 0, i = e.length; o < i && '!' === e.charAt(o); o++) (t = !t), r++;
                r && (this.pattern = e.substr(r));
                this.negate = t;
              }),
              (d.braceExpand = function (e, t) {
                return l(e, t);
              }),
              (p.prototype.braceExpand = l),
              (p.prototype.parse = function (e, t) {
                if (e.length > 65536) throw new TypeError('pattern is too long');
                var n = this.options;
                if (!n.noglobstar && '**' === e) return o;
                if ('' === e) return '';
                var r,
                  i = '',
                  c = !!n.nocase,
                  u = !1,
                  d = [],
                  p = [],
                  l = !1,
                  m = -1,
                  h = -1,
                  g = '.' === e.charAt(0) ? '' : n.dot ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))' : '(?!\\.)',
                  y = this;
                function v() {
                  if (r) {
                    switch (r) {
                      case '*':
                        (i += '[^/]*?'), (c = !0);
                        break;
                      case '?':
                        (i += '[^/]'), (c = !0);
                        break;
                      default:
                        i += '\\' + r;
                    }
                    y.debug('clearStateChar %j %j', r, i), (r = !1);
                  }
                }
                for (var b, w = 0, x = e.length; w < x && (b = e.charAt(w)); w++)
                  if ((this.debug('%s\t%s %s %j', e, w, i, b), u && a[b])) (i += '\\' + b), (u = !1);
                  else
                    switch (b) {
                      case '/':
                        return !1;
                      case '\\':
                        v(), (u = !0);
                        continue;
                      case '?':
                      case '*':
                      case '+':
                      case '@':
                      case '!':
                        if ((this.debug('%s\t%s %s %j <-- stateChar', e, w, i, b), l)) {
                          this.debug('  in class'), '!' === b && w === h + 1 && (b = '^'), (i += b);
                          continue;
                        }
                        y.debug('call clearStateChar %j', r), v(), (r = b), n.noext && v();
                        continue;
                      case '(':
                        if (l) {
                          i += '(';
                          continue;
                        }
                        if (!r) {
                          i += '\\(';
                          continue;
                        }
                        d.push({ type: r, start: w - 1, reStart: i.length, open: s[r].open, close: s[r].close }),
                          (i += '!' === r ? '(?:(?!(?:' : '(?:'),
                          this.debug('plType %j %j', r, i),
                          (r = !1);
                        continue;
                      case ')':
                        if (l || !d.length) {
                          i += '\\)';
                          continue;
                        }
                        v(), (c = !0);
                        var S = d.pop();
                        (i += S.close), '!' === S.type && p.push(S), (S.reEnd = i.length);
                        continue;
                      case '|':
                        if (l || !d.length || u) {
                          (i += '\\|'), (u = !1);
                          continue;
                        }
                        v(), (i += '|');
                        continue;
                      case '[':
                        if ((v(), l)) {
                          i += '\\' + b;
                          continue;
                        }
                        (l = !0), (h = w), (m = i.length), (i += b);
                        continue;
                      case ']':
                        if (w === h + 1 || !l) {
                          (i += '\\' + b), (u = !1);
                          continue;
                        }
                        if (l) {
                          var E = e.substring(h + 1, w);
                          try {
                            RegExp('[' + E + ']');
                          } catch (e) {
                            var I = this.parse(E, f);
                            (i = i.substr(0, m) + '\\[' + I[0] + '\\]'), (c = c || I[1]), (l = !1);
                            continue;
                          }
                        }
                        (c = !0), (l = !1), (i += b);
                        continue;
                      default:
                        v(), u ? (u = !1) : !a[b] || ('^' === b && l) || (i += '\\'), (i += b);
                    }
                l &&
                  ((E = e.substr(h + 1)), (I = this.parse(E, f)), (i = i.substr(0, m) + '\\[' + I[0]), (c = c || I[1]));
                for (S = d.pop(); S; S = d.pop()) {
                  var C = i.slice(S.reStart + S.open.length);
                  this.debug('setting tail', i, S),
                    (C = C.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (e, t, n) {
                      return n || (n = '\\'), t + t + n + '|';
                    })),
                    this.debug('tail=%j\n   %s', C, C, S, i);
                  var T = '*' === S.type ? '[^/]*?' : '?' === S.type ? '[^/]' : '\\' + S.type;
                  (c = !0), (i = i.slice(0, S.reStart) + T + '\\(' + C);
                }
                v(), u && (i += '\\\\');
                var O = !1;
                switch (i.charAt(0)) {
                  case '.':
                  case '[':
                  case '(':
                    O = !0;
                }
                for (var k = p.length - 1; k > -1; k--) {
                  var j = p[k],
                    A = i.slice(0, j.reStart),
                    P = i.slice(j.reStart, j.reEnd - 8),
                    G = i.slice(j.reEnd - 8, j.reEnd),
                    _ = i.slice(j.reEnd);
                  G += _;
                  var R = A.split('(').length - 1,
                    $ = _;
                  for (w = 0; w < R; w++) $ = $.replace(/\)[+*?]?/, '');
                  var N = '';
                  '' === (_ = $) && t !== f && (N = '$'), (i = A + P + _ + N + G);
                }
                '' !== i && c && (i = '(?=.)' + i);
                O && (i = g + i);
                if (t === f) return [i, c];
                if (!c)
                  return (function (e) {
                    return e.replace(/\\(.)/g, '$1');
                  })(e);
                var M = n.nocase ? 'i' : '';
                try {
                  var B = new RegExp('^' + i + '$', M);
                } catch (e) {
                  return new RegExp('$.');
                }
                return (B._glob = e), (B._src = i), B;
              });
            var f = {};
            (d.makeRe = function (e, t) {
              return new p(e, t || {}).makeRe();
            }),
              (p.prototype.makeRe = function () {
                if (this.regexp || !1 === this.regexp) return this.regexp;
                var e = this.set;
                if (!e.length) return (this.regexp = !1), this.regexp;
                var t = this.options,
                  n = t.noglobstar
                    ? '[^/]*?'
                    : t.dot
                    ? '(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?'
                    : '(?:(?!(?:\\/|^)\\.).)*?',
                  r = t.nocase ? 'i' : '',
                  i = e
                    .map(function (e) {
                      return e
                        .map(function (e) {
                          return e === o
                            ? n
                            : 'string' == typeof e
                            ? (function (e) {
                                return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
                              })(e)
                            : e._src;
                        })
                        .join('\\/');
                    })
                    .join('|');
                (i = '^(?:' + i + ')$'), this.negate && (i = '^(?!' + i + ').*$');
                try {
                  this.regexp = new RegExp(i, r);
                } catch (e) {
                  this.regexp = !1;
                }
                return this.regexp;
              }),
              (d.match = function (e, t, n) {
                var r = new p(t, (n = n || {}));
                return (
                  (e = e.filter(function (e) {
                    return r.match(e);
                  })),
                  r.options.nonull && !e.length && e.push(t),
                  e
                );
              }),
              (p.prototype.match = function (e, t) {
                if ((this.debug('match', e, this.pattern), this.comment)) return !1;
                if (this.empty) return '' === e;
                if ('/' === e && t) return !0;
                var n = this.options;
                '/' !== r.sep && (e = e.split(r.sep).join('/'));
                (e = e.split(c)), this.debug(this.pattern, 'split', e);
                var o,
                  i,
                  s = this.set;
                for (this.debug(this.pattern, 'set', s), i = e.length - 1; i >= 0 && !(o = e[i]); i--);
                for (i = 0; i < s.length; i++) {
                  var a = s[i],
                    u = e;
                  if ((n.matchBase && 1 === a.length && (u = [o]), this.matchOne(u, a, t)))
                    return !!n.flipNegate || !this.negate;
                }
                return !n.flipNegate && this.negate;
              }),
              (p.prototype.matchOne = function (e, t, n) {
                var r = this.options;
                this.debug('matchOne', { this: this, file: e, pattern: t }), this.debug('matchOne', e.length, t.length);
                for (var i = 0, s = 0, a = e.length, c = t.length; i < a && s < c; i++, s++) {
                  this.debug('matchOne loop');
                  var u,
                    d = t[s],
                    p = e[i];
                  if ((this.debug(t, d, p), !1 === d)) return !1;
                  if (d === o) {
                    this.debug('GLOBSTAR', [t, d, p]);
                    var l = i,
                      f = s + 1;
                    if (f === c) {
                      for (this.debug('** at the end'); i < a; i++)
                        if ('.' === e[i] || '..' === e[i] || (!r.dot && '.' === e[i].charAt(0))) return !1;
                      return !0;
                    }
                    for (; l < a; ) {
                      var m = e[l];
                      if ((this.debug('\nglobstar while', e, l, t, f, m), this.matchOne(e.slice(l), t.slice(f), n)))
                        return this.debug('globstar found match!', l, a, m), !0;
                      if ('.' === m || '..' === m || (!r.dot && '.' === m.charAt(0))) {
                        this.debug('dot detected!', e, l, t, f);
                        break;
                      }
                      this.debug('globstar swallow a segment, and continue'), l++;
                    }
                    return !(!n || (this.debug('\n>>> no match, partial?', e, l, t, f), l !== a));
                  }
                  if (
                    ('string' == typeof d
                      ? ((u = r.nocase ? p.toLowerCase() === d.toLowerCase() : p === d),
                        this.debug('string match', d, p, u))
                      : ((u = p.match(d)), this.debug('pattern match', d, p, u)),
                    !u)
                  )
                    return !1;
                }
                if (i === a && s === c) return !0;
                if (i === a) return n;
                if (s === c) return i === a - 1 && '' === e[i];
                throw new Error('wtf?');
              });
          },
          717: (e, t, n) => {
            'use strict';
            const r = n(622),
              o = n(687),
              i = e => {
                let t;
                e = { cwd: process.cwd(), path: process.env[o()], execPath: process.execPath, ...e };
                let n = r.resolve(e.cwd);
                const i = [];
                for (; t !== n; ) i.push(r.join(n, 'node_modules/.bin')), (t = n), (n = r.resolve(n, '..'));
                const s = r.resolve(e.cwd, e.execPath, '..');
                return i.push(s), i.concat(e.path).join(r.delimiter);
              };
            (e.exports = i),
              (e.exports.default = i),
              (e.exports.env = t => {
                const n = { ...(t = { env: process.env, ...t }).env },
                  r = o({ env: n });
                return (t.path = n[r]), (n[r] = e.exports(t)), n;
              });
          },
          394: (e, t, n) => {
            'use strict';
            const r = n(65),
              o = new WeakMap(),
              i = (e, t = {}) => {
                if ('function' != typeof e) throw new TypeError('Expected a function');
                let n,
                  i = 0;
                const s = e.displayName || e.name || '<anonymous>',
                  a = function (...r) {
                    if ((o.set(a, ++i), 1 === i)) (n = e.apply(this, r)), (e = null);
                    else if (!0 === t.throw) throw new Error(`Function \`${s}\` can only be called once`);
                    return n;
                  };
                return r(a, e), o.set(a, i), a;
              };
            (e.exports = i),
              (e.exports.default = i),
              (e.exports.callCount = e => {
                if (!o.has(e))
                  throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);
                return o.get(e);
              });
          },
          114: (e, t, n) => {
            'use strict';
            const r = n(975);
            e.exports = e => {
              if ((!Number.isInteger(e) && e !== 1 / 0) || !(e > 0))
                throw new TypeError('Expected `concurrency` to be a number from 1 and up');
              const t = new r();
              let n = 0;
              const o = async (e, r, ...o) => {
                  n++;
                  const i = (async () => e(...o))();
                  r(i);
                  try {
                    await i;
                  } catch {}
                  n--, t.size > 0 && t.dequeue()();
                },
                i = (r, ...i) =>
                  new Promise(s => {
                    ((r, i, ...s) => {
                      t.enqueue(o.bind(null, r, i, ...s)),
                        (async () => {
                          await Promise.resolve(), n < e && t.size > 0 && t.dequeue()();
                        })();
                    })(r, s, ...i);
                  });
              return (
                Object.defineProperties(i, {
                  activeCount: { get: () => n },
                  pendingCount: { get: () => t.size },
                  clearQueue: {
                    value: () => {
                      t.clear();
                    },
                  },
                }),
                i
              );
            };
          },
          687: e => {
            'use strict';
            const t = (e = {}) => {
              const t = e.env || process.env;
              return 'win32' !== (e.platform || process.platform)
                ? 'PATH'
                : Object.keys(t)
                    .reverse()
                    .find(e => 'PATH' === e.toUpperCase()) || 'Path';
            };
            (e.exports = t), (e.exports.default = t);
          },
          104: (e, t, n) => {
            'use strict';
            const r = n(367);
            e.exports = (e = '') => {
              const t = e.match(r);
              if (!t) return null;
              const [n, o] = t[0].replace(/#! ?/, '').split(' '),
                i = n.split('/').pop();
              return 'env' === i ? o : o ? `${i} ${o}` : i;
            };
          },
          367: e => {
            'use strict';
            e.exports = /^#!(.*)/;
          },
          321: (e, t, n) => {
            var r,
              o = n(357),
              i = n(330),
              s = /^win/i.test(process.platform),
              a = n(614);
            function c() {
              p &&
                ((p = !1),
                i.forEach(function (e) {
                  try {
                    process.removeListener(e, d[e]);
                  } catch (e) {}
                }),
                (process.emit = h),
                (process.reallyExit = f),
                (r.count -= 1));
            }
            function u(e, t, n) {
              r.emitted[e] || ((r.emitted[e] = !0), r.emit(e, t, n));
            }
            'function' != typeof a && (a = a.EventEmitter),
              process.__signal_exit_emitter__
                ? (r = process.__signal_exit_emitter__)
                : (((r = process.__signal_exit_emitter__ = new a()).count = 0), (r.emitted = {})),
              r.infinite || (r.setMaxListeners(1 / 0), (r.infinite = !0)),
              (e.exports = function (e, t) {
                o.equal(typeof e, 'function', 'a callback must be provided for exit handler'), !1 === p && l();
                var n = 'exit';
                t && t.alwaysLast && (n = 'afterexit');
                return (
                  r.on(n, e),
                  function () {
                    r.removeListener(n, e),
                      0 === r.listeners('exit').length && 0 === r.listeners('afterexit').length && c();
                  }
                );
              }),
              (e.exports.unload = c);
            var d = {};
            i.forEach(function (e) {
              d[e] = function () {
                process.listeners(e).length === r.count &&
                  (c(),
                  u('exit', null, e),
                  u('afterexit', null, e),
                  s && 'SIGHUP' === e && (e = 'SIGINT'),
                  process.kill(process.pid, e));
              };
            }),
              (e.exports.signals = function () {
                return i;
              }),
              (e.exports.load = l);
            var p = !1;
            function l() {
              p ||
                ((p = !0),
                (r.count += 1),
                (i = i.filter(function (e) {
                  try {
                    return process.on(e, d[e]), !0;
                  } catch (e) {
                    return !1;
                  }
                })),
                (process.emit = g),
                (process.reallyExit = m));
            }
            var f = process.reallyExit;
            function m(e) {
              (process.exitCode = e || 0),
                u('exit', process.exitCode, null),
                u('afterexit', process.exitCode, null),
                f.call(process, process.exitCode);
            }
            var h = process.emit;
            function g(e, t) {
              if ('exit' === e) {
                void 0 !== t && (process.exitCode = t);
                var n = h.apply(this, arguments);
                return u('exit', process.exitCode, null), u('afterexit', process.exitCode, null), n;
              }
              return h.apply(this, arguments);
            }
          },
          330: e => {
            (e.exports = ['SIGABRT', 'SIGALRM', 'SIGHUP', 'SIGINT', 'SIGTERM']),
              'win32' !== process.platform &&
                e.exports.push('SIGVTALRM', 'SIGXCPU', 'SIGXFSZ', 'SIGUSR2', 'SIGTRAP', 'SIGSYS', 'SIGQUIT', 'SIGIOT'),
              'linux' === process.platform && e.exports.push('SIGIO', 'SIGPOLL', 'SIGPWR', 'SIGSTKFLT', 'SIGUNUSED');
          },
          799: e => {
            'use strict';
            e.exports = e => {
              const t = 'string' == typeof e ? '\n' : '\n'.charCodeAt(),
                n = 'string' == typeof e ? '\r' : '\r'.charCodeAt();
              return (
                e[e.length - 1] === t && (e = e.slice(0, e.length - 1)),
                e[e.length - 1] === n && (e = e.slice(0, e.length - 1)),
                e
              );
            };
          },
          658: (e, t, n) => {
            const r = 'win32' === process.platform || 'cygwin' === process.env.OSTYPE || 'msys' === process.env.OSTYPE,
              o = n(622),
              i = r ? ';' : ':',
              s = n(768),
              a = e => Object.assign(new Error('not found: ' + e), { code: 'ENOENT' }),
              c = (e, t) => {
                const n = t.colon || i,
                  o =
                    e.match(/\//) || (r && e.match(/\\/))
                      ? ['']
                      : [...(r ? [process.cwd()] : []), ...(t.path || process.env.PATH || '').split(n)],
                  s = r ? t.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM' : '',
                  a = r ? s.split(n) : [''];
                return (
                  r && -1 !== e.indexOf('.') && '' !== a[0] && a.unshift(''), { pathEnv: o, pathExt: a, pathExtExe: s }
                );
              },
              u = (e, t, n) => {
                'function' == typeof t && ((n = t), (t = {})), t || (t = {});
                const { pathEnv: r, pathExt: i, pathExtExe: u } = c(e, t),
                  d = [],
                  p = n =>
                    new Promise((i, s) => {
                      if (n === r.length) return t.all && d.length ? i(d) : s(a(e));
                      const c = r[n],
                        u = /^".*"$/.test(c) ? c.slice(1, -1) : c,
                        p = o.join(u, e),
                        f = !u && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
                      i(l(f, n, 0));
                    }),
                  l = (e, n, r) =>
                    new Promise((o, a) => {
                      if (r === i.length) return o(p(n + 1));
                      const c = i[r];
                      s(e + c, { pathExt: u }, (i, s) => {
                        if (!i && s) {
                          if (!t.all) return o(e + c);
                          d.push(e + c);
                        }
                        return o(l(e, n, r + 1));
                      });
                    });
                return n ? p(0).then(e => n(null, e), n) : p(0);
              };
            (e.exports = u),
              (u.sync = (e, t) => {
                t = t || {};
                const { pathEnv: n, pathExt: r, pathExtExe: i } = c(e, t),
                  u = [];
                for (let a = 0; a < n.length; a++) {
                  const c = n[a],
                    d = /^".*"$/.test(c) ? c.slice(1, -1) : c,
                    p = o.join(d, e),
                    l = !d && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + p : p;
                  for (let e = 0; e < r.length; e++) {
                    const n = l + r[e];
                    try {
                      if (s.sync(n, { pathExt: i })) {
                        if (!t.all) return n;
                        u.push(n);
                      }
                    } catch (e) {}
                  }
                }
                if (t.all && u.length) return u;
                if (t.nothrow) return null;
                throw a(e);
              });
          },
          975: e => {
            class t {
              constructor(e) {
                (this.value = e), (this.next = void 0);
              }
            }
            class n {
              constructor() {
                this.clear();
              }
              enqueue(e) {
                const n = new t(e);
                this._head ? ((this._tail.next = n), (this._tail = n)) : ((this._head = n), (this._tail = n)),
                  this._size++;
              }
              dequeue() {
                const e = this._head;
                if (e) return (this._head = this._head.next), this._size--, e.value;
              }
              clear() {
                (this._head = void 0), (this._tail = void 0), (this._size = 0);
              }
              get size() {
                return this._size;
              }
              *[Symbol.iterator]() {
                let e = this._head;
                for (; e; ) yield e.value, (e = e.next);
              }
            }
            e.exports = n;
          },
          357: e => {
            'use strict';
            e.exports = require('assert');
          },
          293: e => {
            'use strict';
            e.exports = require('buffer');
          },
          129: e => {
            'use strict';
            e.exports = require('child_process');
          },
          614: e => {
            'use strict';
            e.exports = require('events');
          },
          747: e => {
            'use strict';
            e.exports = require('fs');
          },
          87: e => {
            'use strict';
            e.exports = require('os');
          },
          622: e => {
            'use strict';
            e.exports = require('path');
          },
          413: e => {
            'use strict';
            e.exports = require('stream');
          },
          669: e => {
            'use strict';
            e.exports = require('util');
          },
        },
        t = {};
      function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = (t[r] = { exports: {} });
        return e[r](i, i.exports, n), i.exports;
      }
      (n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.r = e => {
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(e, '__esModule', { value: !0 });
        });
      var r = {};
      (() => {
        'use strict';
        n.r(r), n.d(r, { default: () => T });
        const e = require('clipanion');
        var t = n(197);
        var o = n(145);
        async function i({ cwd: e = process.cwd() } = {}) {
          const { stdout: t } = await o('yarn', ['workspaces', 'list', '--json', '--verbose'], { cwd: e });
          return t
            .split('\n')
            .map(e => JSON.parse(e))
            .filter(e => '.' !== e.location);
        }
        var s = n(747),
          a = n(622);
        const c = require('semver');
        function u(e) {
          const t = a.resolve(e, 'package.json'),
            n = JSON.parse((0, s.readFileSync)(t, 'utf8'));
          return {
            get version() {
              return n.version;
            },
            get workspaces() {
              if (null != n.workspaces) return Array.isArray(n.workspaces) ? n.workspaces : n.workspaces.packages;
            },
            updateVersion(e) {
              const r = (0, c.parse)(n.version);
              r.inc(e), (n.version = r.version), (0, s.writeFileSync)(t, JSON.stringify(n, null, 2) + '\n');
            },
          };
        }
        async function d({ from: e, to: n, ignore: r = '', workspaceDir: s = '.' }) {
          const a = await i({ cwd: s }),
            c = a.map(e => e.location),
            d = (function ({ workspaces: e, files: t }) {
              return t.map(t => e.find(e => t.startsWith(e + '/'))).filter(e => null != e);
            })({
              workspaces: c.filter(e => u(s).workspaces.some(n => t(e, n) && !t(e, r))),
              files: await (async function ({ from: e, to: t, cwd: n = process.cwd() }) {
                const { stdout: r } = await o(
                  'git',
                  ['-c', 'core.quotepath=false', 'diff', '--name-only', `${e}...${t}`],
                  { cwd: n, shell: !0 }
                );
                return r.split('\n');
              })({ from: e, to: n, cwd: s }),
            });
          return 0 === d.length
            ? []
            : ((p = [
                ...d,
                ...d.flatMap(e =>
                  (function ({ allWorkspaces: e, dependency: t }) {
                    const n = new Set();
                    return (function e({ allWorkspaces: t, dependency: r }) {
                      if (n.has(r)) return [];
                      n.add(r);
                      const o = (function ({ allWorkspaces: e, dependency: t }) {
                        return e.filter(e => e.workspaceDependencies.includes(t));
                      })({ allWorkspaces: t, dependency: r });
                      return 0 === o.length
                        ? []
                        : [...o, ...o.flatMap(n => e({ allWorkspaces: t, dependency: n.location }))];
                    })({ allWorkspaces: e, dependency: t });
                  })({ dependency: e, allWorkspaces: a }).map(e => e.location)
                ),
              ]),
              Array.from(new Set(p))).filter(e => c.includes(e));
          var p;
        }
        var p = function (e, t, n, r) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
          return i > 3 && s && Object.defineProperty(t, n, s), s;
        };
        class l extends e.Command {
          constructor() {
            super(...arguments), (this.to = 'HEAD');
          }
          async execute() {
            var e;
            const t = await d({ from: this.from, to: null !== (e = this.to) && void 0 !== e ? e : 'HEAD' });
            0 !== t.length && this.context.stdout.write(t.join('\n'));
          }
        }
        (l.usage = e.Command.Usage({
          description: '변경사항이 있는 workspace 목록을 출력합니다.',
          details: '변경된 workspace 가 없으면 아무것도 출력하지 않습니다.',
          examples: [
            ['main 브랜치와 HEAD 사이에 변경이 있는 workspace 목록 출력', 'yarn workspaces since list main'],
            [
              'main 브랜치와 ci/main 태그 사이에 변경이 있는 workspace 목록 출력',
              'yarn workspaces since list main ci/main',
            ],
          ],
        })),
          p([e.Command.String({ required: !0, name: 'from' })], l.prototype, 'from', void 0),
          p([e.Command.String({ required: !1, name: 'to' })], l.prototype, 'to', void 0),
          p([e.Command.Path('workspaces', 'since', 'list')], l.prototype, 'execute', null);
        const f = l;
        var m = n(114);
        var h = function (e, t, n, r) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
          return i > 3 && s && Object.defineProperty(t, n, s), s;
        };
        class g extends e.Command {
          constructor() {
            super(...arguments),
              (this.to = 'HEAD'),
              (this.jobs = '1'),
              (this.include = '**'),
              (this.ignore = ''),
              (this.ignoreErrors = !1);
          }
          async execute() {
            var e, n, r;
            const i = m(Number(null !== (e = this.jobs) && void 0 !== e ? e : '1')),
              s = (
                await d({
                  from: this.from,
                  to: null !== (n = this.to) && void 0 !== n ? n : 'HEAD',
                  ignore: null !== (r = this.ignore) && void 0 !== r ? r : '',
                })
              ).filter(e => {
                var n;
                return t(e, null !== (n = this.include) && void 0 !== n ? n : '**');
              });
            0 !== s.length
              ? (this.context.stdout.write(
                  `ℹ️  아래 workspace 들에 대해 "${this.command}" 명령어를 실행합니다.\n---\n${s.join('\n')}\n---\n`
                ),
                await Promise.all(
                  s.map(e =>
                    i(async () => {
                      var t;
                      const n = a.resolve(process.cwd(), e);
                      try {
                        await (async function ({
                          workspacePath: e,
                          workspaceName: t,
                          script: n,
                          stdout: r,
                          stderr: i,
                        }) {
                          const s = n.startsWith('yarn') ? n : 'yarn ' + n;
                          try {
                            r.write(`📦  [${t}] ${s} 명령어를 실행합니다.\n`);
                            const { stdout: n } = await o.command(s, { cwd: e, buffer: !0, shell: !0 });
                            r.write(
                              [`✅  [${t}] ${s} 실행이 완료되었습니다.`, '----------STDOUT----------', n, '\n'].join(
                                '\n'
                              )
                            );
                          } catch (e) {
                            if (null == e.isCanceled) throw e;
                            if (e.stdout.includes("Couldn't find a script named")) {
                              const n = /\"(.*?)\"/.exec(e.stdout)[1];
                              if (s.replace('yarn ', '').startsWith(n))
                                return void r.write(
                                  `⚠️  [${t}] "${s}" 명령어를 찾을 수 없습니다. 실행을 건너 뜁니다.\n`
                                );
                            }
                            throw (
                              (i.write(
                                [
                                  `❌  [${t}] "${s}" 실행에 실패했습니다.`,
                                  '----------STDOUT----------',
                                  e.stdout,
                                  '----------STDERR----------',
                                  e.stderr,
                                  '\n',
                                ].join('\n')
                              ),
                              e)
                            );
                          }
                        })({
                          workspacePath: n,
                          workspaceName: e,
                          script: this.command,
                          stdout: this.context.stdout,
                          stderr: this.context.stderr,
                        });
                      } catch (e) {
                        if (null !== (t = this.ignoreErrors) && void 0 !== t && t) return;
                        process.exit(1);
                      }
                    })
                  )
                ))
              : this.context.stdout.write('ℹ️  업데이트된 workspace가 없습니다. 명령어를 실행하지 않습니다.\n');
          }
        }
        (g.usage = e.Command.Usage({
          description:
            '변경점이 있는 workspace에 대해서 주어진 명령어를 실행합니다.\n변경점은 파생됩니다. "A" workspace에 의존성을 가진 "B" workspace가 있을때 "A", "B" 모두에 대해서 run이 실행됩니다.',
          details: '변경된 workspace 가 없으면 아무것도 실행하지 않습니다.',
          examples: [
            [
              'main 브랜치와 HEAD 사이에 변경이 있는 workspace에 대해 "test" 명령어 실행',
              'yarn workspaces since run test main',
            ],
            [
              'main 브랜치와 ci/main 태그 사이에 변경이 있는 workspace에 대해 "build" 명령어 실행',
              'yarn workspaces since run build main ci/main',
            ],
          ],
        })),
          h([e.Command.String({ required: !0, name: 'command' })], g.prototype, 'command', void 0),
          h([e.Command.String({ required: !0, name: 'from' })], g.prototype, 'from', void 0),
          h([e.Command.String({ required: !1, name: 'to' })], g.prototype, 'to', void 0),
          h(
            [e.Command.String('--jobs', { description: '주어진 숫자만큼 run을 병렬적으로 실행합니다.' })],
            g.prototype,
            'jobs',
            void 0
          ),
          h(
            [
              e.Command.String('--include', {
                description: '변경된 workspace 중 run을 실행할 workspace를 glob pattern으로 지정합니다.',
              }),
            ],
            g.prototype,
            'include',
            void 0
          ),
          h(
            [
              e.Command.String('--ignore', {
                description:
                  '변경사항이 발생해도 무시할 workspace를 glob pattern으로 지정합니다.\n무시된 workspace의 변경점은 파생되지 않습니다.',
              }),
            ],
            g.prototype,
            'ignore',
            void 0
          ),
          h(
            [
              e.Command.Boolean('--ignore-errors', {
                description: 'run 실행 중 에러가 발생했을 때에도 무시하고 실행을 계속합니다.',
              }),
            ],
            g.prototype,
            'ignoreErrors',
            void 0
          ),
          h([e.Command.Path('workspaces', 'since', 'run')], g.prototype, 'execute', null);
        const y = g,
          v = { none: 'none', patch: 'patch', minor: 'minor', major: 'major' },
          b = /(chore|fix|feat|BREAKING CHANGE)\(?([^\).]*)\)?:/;
        const w = { [v.none]: 0, [v.patch]: 1, [v.minor]: 2, [v.major]: 3 };
        function x(e) {
          return e.reduce((e, t) => {
            var n, r, o;
            try {
              const { scope: i, level: s } = (function (e) {
                const t = b.exec(e);
                if (null == t) throw new Error('Invalid commit message: ' + e);
                const [, n, r] = t,
                  o = '' !== r ? r : null;
                switch (n) {
                  case 'fix':
                    return { level: v.patch, scope: o };
                  case 'feat':
                    return { level: v.minor, scope: o };
                  case 'BREAKING CHANGE':
                    return { level: v.major, scope: o };
                  default:
                    return { level: v.none, scope: o };
                }
              })(t);
              return (
                null == i ||
                  (e[i] = ((r = s), (o = null !== (n = e[i]) && void 0 !== n ? n : v.none), w[r] > w[o] ? r : o)),
                e
              );
            } catch (t) {
              if (t.message.includes('Invalid commit message')) return e;
              throw t;
            }
          }, {});
        }
        async function S(e, t) {
          const [n, r] = await Promise.all([E(e), E(t)]);
          return (async function (e, t) {
            const { stdout: n } = await o('git', ['log', `${e}..${t}`, '--pretty=format:"%H___SINCE_DELIMITER___%s"'], {
              cwd: process.cwd(),
              shell: !0,
            });
            return n.split('\n').map(e => {
              const [t, n] = e.split('___SINCE_DELIMITER___');
              return { sha: t, message: n };
            });
          })(n, r);
        }
        async function E(e) {
          const { stdout: t } = await o('git', ['rev-parse', e], { cwd: process.cwd(), shell: !0 });
          return t;
        }
        var I = function (e, t, n, r) {
          var o,
            i = arguments.length,
            s = i < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
          if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
          else
            for (var a = e.length - 1; a >= 0; a--)
              (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
          return i > 3 && s && Object.defineProperty(t, n, s), s;
        };
        class C extends e.Command {
          constructor() {
            super(...arguments), (this.to = 'HEAD'), (this.include = '**');
          }
          async execute() {
            var e, n;
            const r = (await S(this.from, null !== (e = this.to) && void 0 !== e ? e : 'HEAD'))
                .flatMap(e => e.message.split('\n'))
                .filter(e => '' !== e),
              o = Object.entries(x(r));
            if (0 === o.length) return void this.context.stdout.write('버전 변경사항이 없습니다.');
            const s = await i();
            for (const [e, r] of o) {
              if (r === v.none) continue;
              const o = s.find(({ name: t }) => t === e);
              if (null == o) continue;
              if (!t(o.location, null !== (n = this.include) && void 0 !== n ? n : '**')) continue;
              const i = u(o.location),
                a = i.version;
              i.updateVersion(r);
              const c = i.version;
              this.context.stdout.write(`ℹ️  ${e}의 버전이 변경되었습니다: ${a} ➡️  ${c}\n`);
            }
          }
        }
        (C.usage = e.Command.Usage({
          description: '변경된 패키지에 대해 Semantic Versioning을 자동으로 실행합니다.',
          details:
            '\n      from으로 부터 to까지 반영된 커밋들을 읽어들입니다.\n      읽어들인 커밋 메시지를 Conventional Commits 기준에 따라 해석하고 이에 따라 다음 패키지 버전을 결정합니다.\n    ',
          examples: [
            [
              'ci/main 태그와 HEAD 사이에 있는 커밋에 따라 업데이트된 패키지들에 대해 Semantic Version Bump',
              'yarn workspaces since version ci/main',
            ],
            [
              '"libraries/*" 디렉토리에 있는 패키지들에 대해서만 Version Bump',
              "yarn workspaces since version origin/main --include='libraries/*'",
            ],
          ],
        })),
          I([e.Command.String({ required: !0, name: 'from' })], C.prototype, 'from', void 0),
          I([e.Command.String({ required: !1, name: 'to' })], C.prototype, 'to', void 0),
          I([e.Command.String('--include')], C.prototype, 'include', void 0),
          I([e.Command.Path('workspaces', 'since', 'version')], C.prototype, 'execute', null);
        const T = { commands: [f, y, C] };
      })(),
        (plugin = r);
    })();
    return plugin;
  },
};
