"use strict";
exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 1784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "zx": () => (/* reexport */ Button),
  "W2": () => (/* reexport */ Container),
  "UJ": () => (/* reexport */ DefaultHead),
  "ko": () => (/* reexport */ ProgressBar)
});

// UNUSED EXPORTS: A11yHidden, Input, Label

// EXTERNAL MODULE: ../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1261);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../packages/ui/src/components/A11yHidden/A11yHidden.tsx


// @ts-ignore
const A11yHidden = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(({ as , children  }, ref)=>{
    const Element = as || "span";
    return /*#__PURE__*/ _jsx(Element, {
        style: {
            overflow: "hidden",
            position: "absolute",
            clip: "rect(1px, 1px, 1px, 1px)",
            clipPath: "circle(0)",
            width: "1px",
            height: "1px",
            margin: "-1px",
            border: "0",
            padding: "0",
            whiteSpace: "nowrap"
        },
        ref: ref,
        children: children
    });
})));


;// CONCATENATED MODULE: ../../packages/ui/src/components/A11yHidden/index.ts


;// CONCATENATED MODULE: ../../packages/ui/src/components/Button/Button.tsx


// @ts-ignore
const Button = /*#__PURE__*/ external_react_.forwardRef(({ as , className ="" , children , ...restProps }, ref)=>{
    const Element = as || "button";
    return /*#__PURE__*/ jsx_runtime.jsx(Element, {
        className: className,
        ref: ref,
        ...restProps,
        children: children
    });
});


;// CONCATENATED MODULE: ../../packages/ui/src/components/Button/index.ts


;// CONCATENATED MODULE: ../../packages/ui/src/components/DefaultHead/DefaultHead.tsx


const DefaultHead = ({ title , description , url , ogi  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:url",
                content: url
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image",
                content: ogi
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:url",
                content: url
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "twitter:image",
                content: ogi
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            })
        ]
    });
};
DefaultHead.defaultProps = {
    title: process.env.NEXT_PUBLIC_TITLE,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_URL,
    ogi: process.env.NEXT_PUBLIC_OG_IMAGE
};


;// CONCATENATED MODULE: ../../packages/ui/src/components/DefaultHead/index.ts


;// CONCATENATED MODULE: ../../packages/ui/src/components/Input/Input.tsx


// @ts-ignore
const Input = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(({ as , className ="" , id , type ="text" , ...restProps }, ref)=>{
    const Element = as || "input";
    return /*#__PURE__*/ _jsx(Element, {
        className: className,
        id: id,
        type: type,
        ref: ref,
        ...restProps
    });
})));


;// CONCATENATED MODULE: ../../packages/ui/src/components/Input/index.ts


;// CONCATENATED MODULE: ../../packages/ui/src/components/Container/Container.tsx


// @ts-ignore
const Container = /*#__PURE__*/ external_react_.forwardRef(({ as , className ="" , children , ...restProps }, ref)=>{
    const Element = as || "div";
    return /*#__PURE__*/ jsx_runtime.jsx(Element, {
        className: className,
        ref: ref,
        ...restProps,
        children: children
    });
});


;// CONCATENATED MODULE: ../../packages/ui/src/components/Container/index.ts


;// CONCATENATED MODULE: ../../packages/ui/src/components/Label/Label.tsx


// @ts-ignore
const Label = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(({ as , className ="" , htmlFor , children , ...restProps }, ref)=>{
    return /*#__PURE__*/ _jsx("label", {
        htmlFor: htmlFor,
        className: className,
        ref: ref,
        ...restProps,
        children: children
    });
})));


;// CONCATENATED MODULE: ../../packages/ui/src/components/Label/index.ts


;// CONCATENATED MODULE: ../../packages/ui/src/components/ProgressBar/ProgressBar.tsx


const ProgressBar = ({ className , completed , isVisibleAmount =false  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            style: {
                width: `${completed}%`
            },
            children: isVisibleAmount && /*#__PURE__*/ jsx_runtime.jsx("span", {
                children: `${completed}%`
            })
        })
    });
};


;// CONCATENATED MODULE: ../../packages/ui/src/components/ProgressBar/index.ts


;// CONCATENATED MODULE: ../../packages/ui/src/index.ts









/***/ })

};
;