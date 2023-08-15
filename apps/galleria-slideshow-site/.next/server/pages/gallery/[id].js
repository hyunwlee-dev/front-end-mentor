"use strict";
(() => {
var exports = {};
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 8984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_gallery_id_tsx__WEBPACK_IMPORTED_MODULE_0__.ZP),
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ private_next_pages_gallery_id_tsx__WEBPACK_IMPORTED_MODULE_0__.Fe),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ private_next_pages_gallery_id_tsx__WEBPACK_IMPORTED_MODULE_0__.b1)
/* harmony export */ });
/* harmony import */ var private_next_pages_gallery_id_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9223);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_gallery_id_tsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_gallery_id_tsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LD": () => (/* reexport */ Art),
  "dk": () => (/* reexport */ Description),
  "$_": () => (/* reexport */ Footer)
});

// EXTERNAL MODULE: ../../.yarn/cache/react-npm-18.2.0-1eae08fee2-88e38092da.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1261);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../packages/hook/src/index.ts + 6 modules
var src = __webpack_require__(7484);
// EXTERNAL MODULE: ../../.yarn/__virtual__/next-virtual-f9f3e99ae8/0/cache/next-npm-13.4.4-eea4a310b2-d84686f3ca.zip/node_modules/next/image.js
var next_image = __webpack_require__(6414);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/types/mediaQuery.ts
var MediaQuery;
(function(MediaQuery) {
    MediaQuery[MediaQuery["MOBILE"] = 568] = "MOBILE";
    MediaQuery[MediaQuery["TABLET"] = 767] = "TABLET";
    MediaQuery[MediaQuery["DESKTOP"] = 992] = "DESKTOP";
    MediaQuery[MediaQuery["LARGEDESKTOP"] = 1200] = "LARGEDESKTOP";
})(MediaQuery || (MediaQuery = {}));


;// CONCATENATED MODULE: ./src/components/gallery/art/Artist.tsx





const Artist = ({ className , artData  })=>{
    const tabletReached = (0,src/* useMediaQuery */.ac)(MediaQuery.TABLET);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: artData.artist.image,
            width: !tabletReached ? 64 : artData.sizes.artist.width,
            height: !tabletReached ? 64 : artData.sizes.artist.height,
            alt: `${artData.name} image`
        })
    });
};


;// CONCATENATED MODULE: ./src/components/gallery/art/ArtImage.tsx





const ArtImage = ({ className , artData  })=>{
    const tabletReached = (0,src/* useMediaQuery */.ac)(MediaQuery.TABLET);
    const largeDesktopReached = (0,src/* useMediaQuery */.ac)(MediaQuery.TABLET);
    const { large: largeSrc , small: smallSrc  } = artData.images.hero;
    const { large , small  } = artData.sizes.hero;
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `${className}`,
        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
            src: tabletReached ? largeSrc : smallSrc,
            width: largeDesktopReached ? 500 : tabletReached ? large.width : small.width,
            height: tabletReached ? large.height : small.height,
            alt: `${artData.name} image`
        })
    });
};


// EXTERNAL MODULE: ../../packages/ui/src/index.ts + 14 modules
var ui_src = __webpack_require__(1784);
;// CONCATENATED MODULE: ./src/components/gallery/art/ArtExtensionButton.tsx




const ArtExtensionButton = ({ toggle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_src/* Button */.zx, {
        type: "button",
        onClick: toggle,
        className: "absolute top-5 left-5 hover:bg-dark-gray hover:opacity-90 tablet:top-auto tablet:bottom-5 tablet:z-10 bg-black flex px-5 py-3 gap-2 items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                src: "/shared/icon-view-image.svg",
                width: 10,
                height: 10,
                alt: "view-image"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "text-white font-sans text-xs font-bold tracking-widest uppercase",
                children: "view image"
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/components/gallery/art/ArtCompact.tsx


const ArtCompact = ({ artData  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("article", {
        className: "bg-white px-6 py-4 absolute bottom-16 left-0 right-24 tablet:right-auto tablet:bottom-auto tablet:left-1/3 tablet:px-10 tablet:py-5 tablet:top-0 large-desktop:left-1/2 flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "text-2xl font-bold tablet:text-6xl",
                children: artData.name
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "text-dark-gray pt-2 tablet:py-5",
                children: artData.artist.name
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/components/gallery/art/index.ts





;// CONCATENATED MODULE: ./src/components/gallery/Art.tsx



const Art = ({ className , artData , toggle  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: `${className} relative`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-transparent tablet:flex tablet:flex-row tablet:gap-10 tablet:items-end relative",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(ArtImage, {
                        artData: artData
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Artist, {
                        className: "tablet:flex-shrink-0 translate-y-8 tablet:-translate-y-10",
                        artData: artData
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ArtExtensionButton, {
                        toggle: toggle
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ArtCompact, {
                artData: artData
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/components/gallery/Description.tsx


const Description = ({ className , artData  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: `${className} pt-24 large-desktop:pt-36 text-dark-gray relative`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "text-8xl top-8 large-desktop:text-[200px] text-light-gray font-bold absolute tablet:top-10 large-desktop:top-0 right-0 tablet:left-0 -z-10",
                children: artData.year
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-sm leading-8 font-bold",
                children: artData.description
            }),
            /*#__PURE__*/ jsx_runtime.jsx("a", {
                className: "inline-block text-sm px-5 pt-20 uppercase underline",
                href: artData.source,
                children: "go to source"
            })
        ]
    });
};


// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/db/data.json
var data = __webpack_require__(9002);
// EXTERNAL MODULE: ./src/utils/index.ts + 1 modules
var utils = __webpack_require__(4126);
;// CONCATENATED MODULE: ./src/components/gallery/Footer.tsx







const Footer = ({ className , artData , setDirection , setExitDirection  })=>{
    const router = (0,router_.useRouter)();
    const next = utils/* artTable */.mU[artData.index === data.length - 1 ? 0 : artData.index + 1];
    const prev = utils/* artTable */.mU[artData.index === 0 ? data.length - 1 : artData.index - 1];
    const percent = (artData.index + 1) / data.length * 100;
    const click2Prev = ()=>{
        router.push(`/gallery/${prev}`);
        setDirection(-1000);
        setExitDirection(1000);
    };
    const click2Next = ()=>{
        router.push(`/gallery/${next}`);
        setDirection(1000);
        setExitDirection(-1000);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
        className: `${className} h-32 relative`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(ui_src/* ProgressBar */.ko, {
                className: "h-[2px] w-auto bg-med-gray [&>div]:h-[2px] [&>div]:bg-black",
                completed: percent
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "text-2xl absolute top-1/3 -translate-y-1/2",
                children: artData.name
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "text-sm absolute top-2/3 -translate-y-1/2",
                children: artData.artist.name
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ui_src/* Button */.zx, {
                className: "absolute top-1/2 right-24 -translate-y-1/2",
                onClick: click2Prev,
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: "/shared/icon-back-button.svg",
                    width: 24,
                    height: 24,
                    alt: "slide back button"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ui_src/* Button */.zx, {
                className: "absolute top-1/2 right-10 -translate-y-1/2",
                onClick: click2Next,
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: "/shared/icon-next-button.svg",
                    width: 24,
                    height: 24,
                    alt: "slide next button"
                })
            })
        ]
    });
};


;// CONCATENATED MODULE: ./src/components/gallery/index.ts





/***/ }),

/***/ 1363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ GalleryContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1261);
/* harmony import */ var _hyunwlee_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7484);
/* harmony import */ var _hyunwlee_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1784);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6414);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6938);
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9416);







const GalleryContainer = ({ artData  })=>{
    const { isShown , toggle  } = (0,_hyunwlee_hook__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .dd)();
    const modalContent = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hyunwlee_ui__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                className: "text-sm text-white tracking-widest uppercase absolute -top-9 right-0 hover:text-dark-gray",
                onClick: toggle,
                children: "close"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                src: artData.images.gallery,
                width: artData.sizes.gallery.width,
                height: artData.sizes.gallery.height,
                alt: artData.name
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "large-desktop:flex large-desktop:flex-row large-desktop:flex-nowrap large-desktop:h-full large-desktop:gap-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gallery__WEBPACK_IMPORTED_MODULE_6__/* .Art */ .LD, {
                        className: "large-desktop:flex-auto large-desktop:min-w-[400px]",
                        artData: artData,
                        toggle: toggle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gallery__WEBPACK_IMPORTED_MODULE_6__/* .Description */ .dk, {
                        className: "large-desktop:flex large-desktop:flex-col large-desktop:h-full large-desktop:items-space; large-desktop:pr-10 large-desktop:min-w-[400px] large-desktop:w-[40%]",
                        artData: artData
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Modal */ .u_, {
                isShown: isShown,
                hide: toggle,
                modalContent: modalContent,
                headerText: artData.name
            })
        ]
    });
};



/***/ }),

/***/ 9223:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fe": () => (/* binding */ getStaticPaths),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "b1": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1261);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6938);
/* harmony import */ var _components_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9416);
/* harmony import */ var _containers_GalleryContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1363);
/* harmony import */ var _contexts_DirectionContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3314);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4126);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Gallery = ({ artData  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { direction , setDirection , exitDirection , setExitDirection  } = (0,_contexts_DirectionContext__WEBPACK_IMPORTED_MODULE_7__/* .useDirectionState */ .v)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .BaseLayout */ .IE, {
        footerSide: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_gallery__WEBPACK_IMPORTED_MODULE_5__/* .Footer */ .$_, {
            className: "px-10 min-[1370px]:px-0",
            artData: artData,
            setDirection: setDirection,
            setExitDirection: setExitDirection
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
            initial: {
                x: direction,
                opacity: 0
            },
            animate: {
                x: 0,
                opacity: 1
            },
            exit: {
                x: exitDirection,
                opacity: 0
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_containers_GalleryContainer__WEBPACK_IMPORTED_MODULE_6__/* .GalleryContainer */ .l, {
                artData: artData
            })
        }, router.asPath)
    });
};
const getStaticPaths = async ()=>{
    const paths = await (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .getAllArtIds */ .qg)();
    return {
        paths,
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const { id  } = params;
    const artData = await (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .getArt */ .Tf)(id);
    return {
        props: {
            artData
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ac": () => (/* reexport */ useMediaQuery),
  "dd": () => (/* reexport */ useModal)
});

// UNUSED EXPORTS: useToggle

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ../../packages/hook/src/useToggle/useToggle.tsx

const useToggle = (initialState = false)=>{
    const [visible, setVisibility] = useState(initialState);
    const toggle = useCallback(()=>setVisibility((prev)=>!prev), []);
    const setToggleStatus = useCallback((value)=>setVisibility(Boolean(value)), []);
    return {
        visible,
        toggle,
        setToggleStatus
    };
};


;// CONCATENATED MODULE: ../../packages/hook/src/useToggle/index.ts


;// CONCATENATED MODULE: ../../packages/hook/src/useMediaQuery/useMediaQuery.tsx

const useMediaQuery = (width)=>{
    const [targetReached, setTargetReached] = (0,external_react_.useState)(false);
    const updateTarget = (0,external_react_.useCallback)((e)=>{
        if (e.matches) setTargetReached(true);
        else setTargetReached(false);
    }, []);
    (0,external_react_.useEffect)(()=>{
        const media = window.matchMedia(`(min-width: ${width}px)`);
        media.addEventListener("change", updateTarget);
        if (media.matches) setTargetReached(true);
        return ()=>media.removeEventListener("change", updateTarget);
    }, []);
    return targetReached;
};


;// CONCATENATED MODULE: ../../packages/hook/src/useMediaQuery/index.ts


;// CONCATENATED MODULE: ../../packages/hook/src/useModal/useModal.tsx

const useModal = ()=>{
    const [isShown, setIsShown] = (0,external_react_.useState)(false);
    const toggle = (0,external_react_.useCallback)(()=>{
        setIsShown(!isShown);
    }, [
        isShown
    ]);
    const onKeyDown = (event)=>{
        if (event.key === "Escape" && isShown) setIsShown(false);
    };
    (0,external_react_.useEffect)(()=>{
        isShown ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
        document.addEventListener("keydown", onKeyDown);
        return ()=>{
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [
        isShown
    ]);
    return {
        isShown,
        toggle
    };
};


;// CONCATENATED MODULE: ../../packages/hook/src/useModal/index.ts


;// CONCATENATED MODULE: ../../packages/hook/src/index.ts





/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [261,64,729,784,938,314], () => (__webpack_exec__(8984)));
module.exports = __webpack_exports__;

})();