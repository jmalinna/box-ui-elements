"use strict";(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[94236],{"./src/components/media-query/stories/MediaQuery.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomHook:()=>CustomHook,HigherOrderComponent:()=>HigherOrderComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MediaQuery_stories});var react=__webpack_require__("./node_modules/react/index.js"),constants=__webpack_require__("./src/components/media-query/constants.js");var useMediaQuery=__webpack_require__("./src/components/media-query/useMediaQuery.js"),withMediaQuery=__webpack_require__("./src/components/media-query/withMediaQuery.js");const CustomHook=()=>{const{hover,isTouchDevice,pointer,size,viewWidth,viewHeight}=(0,useMediaQuery.A)();return react.createElement("div",null,react.createElement("p",null,react.createElement("b",null,"Hover:"),react.createElement("span",null,` ${hover}`)),react.createElement("p",null,react.createElement("b",null,"Pointer:"),react.createElement("span",null,` ${pointer}`)),react.createElement("p",null,react.createElement("b",null,"Is Touch Device:"),react.createElement("span",null,` ${String(isTouchDevice)}`)),react.createElement("p",null,react.createElement("b",null,"View Dimensions:"),react.createElement("span",null,` ${viewWidth}px (w) x ${viewHeight}px (h)`)),size===constants.nj.small&&react.createElement("h4",null,"This view is small"),size===constants.nj.medium&&react.createElement("h3",null,"This view is medium"),size===constants.nj.large&&react.createElement("h2",null,"This view is large"),size===constants.nj.xlarge&&react.createElement("h1",null,"This view is xlarge"))},HigherOrderComponent=(0,withMediaQuery.A)((props=>{const{hover,isTouchDevice,pointer,size,viewWidth,viewHeight}=props;return react.createElement("div",null,react.createElement("p",null,react.createElement("b",null,"Hover:"),react.createElement("span",null,` ${hover}`)),react.createElement("p",null,react.createElement("b",null,"Pointer:"),react.createElement("span",null,` ${pointer}`)),react.createElement("p",null,react.createElement("b",null,"Is Touch Device:"),react.createElement("span",null,` ${String(isTouchDevice)}`)),react.createElement("p",null,react.createElement("b",null,"View Dimensions:"),react.createElement("span",null,` ${viewWidth}px (w) x ${viewHeight}px (h)`)),"small"===size&&react.createElement("h4",null,"This view is small"),"medium"===size&&react.createElement("h3",null,"This view is medium"),"large"===size&&react.createElement("h2",null,"This view is large"),"x-large"===size&&react.createElement("h1",null,"This view is xlarge"))})),MediaQuery_stories={title:"Components/MediaQuery",component:useMediaQuery.A,parameters:{notes:"`import useMediaQuery from 'box-ui-elements/es/components/media-query/useMediaQuery';`\n\nThe `useMediaQuery` hook returns properties composed of specific media queries and view dimensions.\nThese properties can be used to implement custom component rendering or behavior.\n\n## Return props\n\n| Property        | Description                                           |\n| --------------- | ----------------------------------------------------- |\n| `anyHover`      | `hover`, `none`                                       |\n| `anyPointer`    | `none`, `coarse`, `fine`                              |\n| `hover`         | `hover`, `none`                                       |\n| `pointer`       | `none`, `coarse`, `fine`                              |\n| `isTouchDevice` | `true` if `hover` is `none` and `pointer` is `coarse` |\n| `size`          | `small`, `medium`, `large`, `x-large`                 |\n| `viewHeight`    | view height in px of last query change                |\n| `viewWidth`     | view width in px of last query change                 |\n\n## `size` properties\n\n| Size      | Query                                        |\n| --------- | -------------------------------------------- |\n| `small`   | `(max-width: 374px)`                         |\n| `medium`  | `(min-width: 375px) and (max-width: 767px)`  |\n| `large`   | `(min-width: 768px) and (max-width: 1023px)` |\n| `x-large` | `(min-width: 1024px)`                        |\n\n## Demo\n\nChange device size in \"Canvas\" or in browser developer tools\n",viewport:{defaultViewport:"tablet"}}},__namedExportsOrder=["CustomHook","HigherOrderComponent"];CustomHook.parameters={...CustomHook.parameters,docs:{...CustomHook.parameters?.docs,source:{originalSource:"() => {\n  const {\n    hover,\n    isTouchDevice,\n    pointer,\n    size,\n    viewWidth,\n    viewHeight\n  } = useMediaQuery();\n  return <div>\n            <p>\n                <b>Hover:</b>\n                <span>{` ${hover}`}</span>\n            </p>\n            <p>\n                <b>Pointer:</b>\n                <span>{` ${pointer}`}</span>\n            </p>\n            <p>\n                <b>Is Touch Device:</b>\n                <span>{` ${String(isTouchDevice)}`}</span>\n            </p>\n            <p>\n                <b>View Dimensions:</b>\n                <span>{` ${viewWidth}px (w) x ${viewHeight}px (h)`}</span>\n            </p>\n            {size === VIEW_SIZE_TYPE.small && <h4>This view is small</h4>}\n            {size === VIEW_SIZE_TYPE.medium && <h3>This view is medium</h3>}\n            {size === VIEW_SIZE_TYPE.large && <h2>This view is large</h2>}\n            {size === VIEW_SIZE_TYPE.xlarge && <h1>This view is xlarge</h1>}\n        </div>;\n}",...CustomHook.parameters?.docs?.source}}},HigherOrderComponent.parameters={...HigherOrderComponent.parameters,docs:{...HigherOrderComponent.parameters?.docs,source:{originalSource:"withMediaQuery(DemoComponent)",...HigherOrderComponent.parameters?.docs?.source}}}},"./src/components/media-query/constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kk:()=>SIZE_SMALL,ND:()=>POINTER_TYPE,Oq:()=>SIZE_LARGE,Yu:()=>POINTER_COARSE,Yw:()=>SIZE_MEDIUM,d8:()=>ANY_POINTER_COARSE,kT:()=>ANY_POINTER_FINE,l6:()=>HOVER,nj:()=>VIEW_SIZE_TYPE,o$:()=>ANY_HOVER,y$:()=>HOVER_TYPE,zk:()=>POINTER_FINE});var _styles_variables__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/variables.js");const SIZE_SMALL=_styles_variables__WEBPACK_IMPORTED_MODULE_0__.smallScreen,SIZE_MEDIUM=_styles_variables__WEBPACK_IMPORTED_MODULE_0__.mediumScreen,SIZE_LARGE=_styles_variables__WEBPACK_IMPORTED_MODULE_0__.largeScreen,HOVER="(hover: hover)",ANY_HOVER="(any-hover: hover)",POINTER_FINE="(pointer: fine)",POINTER_COARSE="(pointer: coarse)",ANY_POINTER_FINE="(any-pointer: fine)",ANY_POINTER_COARSE="(any-pointer: coarse)",POINTER_TYPE={fine:"fine",coarse:"coarse",none:"none"},HOVER_TYPE={hover:"hover",none:"none"},VIEW_SIZE_TYPE={small:"small",medium:"medium",large:"large",xlarge:"x-large"}},"./src/components/media-query/useMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_responsive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-responsive/dist/esm/index.js"),_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/media-query/constants.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const getPointerCapabilities=(isFine,isCoarse)=>isFine||isCoarse?isFine?_constants__WEBPACK_IMPORTED_MODULE_0__.ND.fine:_constants__WEBPACK_IMPORTED_MODULE_0__.ND.coarse:_constants__WEBPACK_IMPORTED_MODULE_0__.ND.none;function formatQuery(query){return"string"==typeof query?query:(0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.Qz)(query)}function useQuery(query,onQueryChange){return(0,react_responsive__WEBPACK_IMPORTED_MODULE_1__.Ub)({query:formatQuery(query)},null,onQueryChange)}const __WEBPACK_DEFAULT_EXPORT__=function useMediaQuery(){const deviceCapabilities=function useDeviceCapabilities(){const isHover=useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.l6),anyHover=useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.o$)?_constants__WEBPACK_IMPORTED_MODULE_0__.y$.hover:_constants__WEBPACK_IMPORTED_MODULE_0__.y$.none,hover=isHover?_constants__WEBPACK_IMPORTED_MODULE_0__.y$.hover:_constants__WEBPACK_IMPORTED_MODULE_0__.y$.none,pointer=getPointerCapabilities(useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.zk),useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.Yu));return{anyHover,hover,anyPointer:getPointerCapabilities(useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.kT),useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.d8)),pointer,isTouchDevice:hover===_constants__WEBPACK_IMPORTED_MODULE_0__.y$.none&&pointer===_constants__WEBPACK_IMPORTED_MODULE_0__.ND.coarse}}(),deviceSize=function useDeviceSize(){const isSmall=useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.Kk),isMedium=useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.Yw),isLarge=useQuery(_constants__WEBPACK_IMPORTED_MODULE_0__.Oq);return isSmall?_constants__WEBPACK_IMPORTED_MODULE_0__.nj.small:isMedium?_constants__WEBPACK_IMPORTED_MODULE_0__.nj.medium:isLarge?_constants__WEBPACK_IMPORTED_MODULE_0__.nj.large:_constants__WEBPACK_IMPORTED_MODULE_0__.nj.xlarge}(),viewDimensions={viewWidth:window.innerWidth,viewHeight:window.innerHeight};return _objectSpread(_objectSpread(_objectSpread({},deviceCapabilities),viewDimensions),{},{size:deviceSize})}},"./src/components/media-query/withMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/media-query/useMediaQuery.js");const _excluded=["children"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const __WEBPACK_DEFAULT_EXPORT__=function withMediaQuery(WrappedComponent){return _ref=>{let{children}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);const mediaProps=(0,_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__.A)();return react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent,_extends({},rest,mediaProps),children)}}},"./src/styles/variables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{avatarColors:()=>avatarColors,bdlBorderRadiusSize:()=>bdlBorderRadiusSize,bdlBorderRadiusSizeLarge:()=>bdlBorderRadiusSizeLarge,bdlBorderRadiusSizeMed:()=>bdlBorderRadiusSizeMed,bdlBorderRadiusSizeXlarge:()=>bdlBorderRadiusSizeXlarge,bdlBoxBlue:()=>bdlBoxBlue,bdlBoxBlue02:()=>bdlBoxBlue02,bdlBoxBlue05:()=>bdlBoxBlue05,bdlBoxBlue10:()=>bdlBoxBlue10,bdlBoxBlue20:()=>bdlBoxBlue20,bdlBoxBlue30:()=>bdlBoxBlue30,bdlBoxBlue40:()=>bdlBoxBlue40,bdlBoxBlue50:()=>bdlBoxBlue50,bdlBoxBlue80:()=>bdlBoxBlue80,bdlBtnBorderWidth:()=>bdlBtnBorderWidth,bdlBtnHeight:()=>bdlBtnHeight,bdlBtnHeightLarge:()=>bdlBtnHeightLarge,bdlBtnIconSize:()=>bdlBtnIconSize,bdlBtnPaddingHorizontal:()=>bdlBtnPaddingHorizontal,bdlBtnTextIconSize:()=>bdlBtnTextIconSize,bdlDarkBlue:()=>bdlDarkBlue,bdlDarkBlue02:()=>bdlDarkBlue02,bdlDarkBlue05:()=>bdlDarkBlue05,bdlDarkBlue10:()=>bdlDarkBlue10,bdlDarkBlue20:()=>bdlDarkBlue20,bdlDarkBlue50:()=>bdlDarkBlue50,bdlFontSize:()=>bdlFontSize,bdlFontSizeDejaBlue:()=>bdlFontSizeDejaBlue,bdlFontSizeMinimum:()=>bdlFontSizeMinimum,bdlGray:()=>bdlGray,bdlGray02:()=>bdlGray02,bdlGray05:()=>bdlGray05,bdlGray10:()=>bdlGray10,bdlGray20:()=>bdlGray20,bdlGray30:()=>bdlGray30,bdlGray40:()=>bdlGray40,bdlGray50:()=>bdlGray50,bdlGray65:()=>bdlGray65,bdlGray80:()=>bdlGray80,bdlGreenLight:()=>bdlGreenLight,bdlGreenLight02:()=>bdlGreenLight02,bdlGreenLight05:()=>bdlGreenLight05,bdlGreenLight10:()=>bdlGreenLight10,bdlGreenLight20:()=>bdlGreenLight20,bdlGreenLight50:()=>bdlGreenLight50,bdlGridUnit:()=>bdlGridUnit,bdlGridUnitPx:()=>bdlGridUnitPx,bdlGrimace:()=>bdlGrimace,bdlGrimace02:()=>bdlGrimace02,bdlGrimace05:()=>bdlGrimace05,bdlGrimace10:()=>bdlGrimace10,bdlGrimace20:()=>bdlGrimace20,bdlGrimace50:()=>bdlGrimace50,bdlHeaderBoxShadow:()=>bdlHeaderBoxShadow,bdlHeaderHeight:()=>bdlHeaderHeight,bdlLightBlue:()=>bdlLightBlue,bdlLightBlue02:()=>bdlLightBlue02,bdlLightBlue05:()=>bdlLightBlue05,bdlLightBlue10:()=>bdlLightBlue10,bdlLightBlue20:()=>bdlLightBlue20,bdlLightBlue50:()=>bdlLightBlue50,bdlLineHeight:()=>bdlLineHeight,bdlOrange:()=>bdlOrange,bdlOrange02:()=>bdlOrange02,bdlOrange05:()=>bdlOrange05,bdlOrange10:()=>bdlOrange10,bdlOrange20:()=>bdlOrange20,bdlOrange50:()=>bdlOrange50,bdlPurpleRain:()=>bdlPurpleRain,bdlPurpleRain02:()=>bdlPurpleRain02,bdlPurpleRain05:()=>bdlPurpleRain05,bdlPurpleRain10:()=>bdlPurpleRain10,bdlPurpleRain20:()=>bdlPurpleRain20,bdlPurpleRain50:()=>bdlPurpleRain50,bdlTimingFunction:()=>bdlTimingFunction,bdlTransitionDurationBase:()=>bdlTransitionDurationBase,bdlWatermelonRed:()=>bdlWatermelonRed,bdlWatermelonRed02:()=>bdlWatermelonRed02,bdlWatermelonRed05:()=>bdlWatermelonRed05,bdlWatermelonRed10:()=>bdlWatermelonRed10,bdlWatermelonRed20:()=>bdlWatermelonRed20,bdlWatermelonRed50:()=>bdlWatermelonRed50,bdlYellorange:()=>bdlYellorange,bdlYellorange02:()=>bdlYellorange02,bdlYellorange05:()=>bdlYellorange05,bdlYellorange10:()=>bdlYellorange10,bdlYellorange20:()=>bdlYellorange20,bdlYellorange50:()=>bdlYellorange50,bdlYellow:()=>bdlYellow,bdlYellow02:()=>bdlYellow02,bdlYellow05:()=>bdlYellow05,bdlYellow10:()=>bdlYellow10,bdlYellow20:()=>bdlYellow20,bdlYellow50:()=>bdlYellow50,black:()=>black,countBadgeBackground:()=>countBadgeBackground,largeScreen:()=>largeScreen,mediumScreen:()=>mediumScreen,menuZIndex:()=>menuZIndex,modalDialogZIndex:()=>modalDialogZIndex,notificationsWrapperZIndex:()=>notificationsWrapperZIndex,overlayZIndex:()=>overlayZIndex,sizeLargeMax:()=>sizeLargeMax,sizeLargeMin:()=>sizeLargeMin,sizeMediumMax:()=>sizeMediumMax,sizeMediumMin:()=>sizeMediumMin,sizeSmallMax:()=>sizeSmallMax,sizeSmallMediumMax:()=>sizeSmallMediumMax,sizeSmallMediumMin:()=>sizeSmallMediumMin,sizeXlargeMax:()=>sizeXlargeMax,smallMediumScreen:()=>smallMediumScreen,smallScreen:()=>smallScreen,submenuZIndex:()=>submenuZIndex,tooltipZIndex:()=>tooltipZIndex,white:()=>white,xlargeScreen:()=>xlargeScreen});const white="#fff",black="#000",countBadgeBackground="#e9163c",bdlBoxBlue="#0061d5",bdlBoxBlue80="#3381dd",bdlBoxBlue50="#7fb0ea",bdlBoxBlue40="#99c0ee",bdlBoxBlue30="#b2cff2",bdlBoxBlue20="#ccdff7",bdlBoxBlue10="#e5effa",bdlBoxBlue05="#f2f7fd",bdlBoxBlue02="#fafcfe",bdlGray="#222",bdlGray80="#4e4e4e",bdlGray65="#6f6f6f",bdlGray50="#909090",bdlGray40="#a7a7a7",bdlGray30="#bcbcbc",bdlGray20="#d3d3d3",bdlGray10="#e8e8e8",bdlGray05="#f4f4f4",bdlGray02="#fbfbfb",bdlDarkBlue="#003c84",bdlDarkBlue50="#7f9dc1",bdlDarkBlue20="#ccd8e6",bdlDarkBlue10="#e5ebf2",bdlDarkBlue05="#f2f5f9",bdlDarkBlue02="#fafbfd",bdlLightBlue="#2486fc",bdlLightBlue50="#91c2fd",bdlLightBlue20="#d3e7fe",bdlLightBlue10="#e9f2fe",bdlLightBlue05="#f4f9ff",bdlLightBlue02="#fbfdff",bdlYellorange="#f5b31b",bdlYellorange50="#fad98d",bdlYellorange20="#fdf0d1",bdlYellorange10="#fef7e8",bdlYellorange05="#fefbf3",bdlYellorange02="#fffefb",bdlYellow="#ffd700",bdlYellow50="#ffeb7f",bdlYellow20="#fff7cc",bdlYellow10="#fffbe5",bdlYellow05="#fffdf2",bdlYellow02="#fffefa",bdlGreenLight="#26c281",bdlGreenLight50="#92e0c0",bdlGreenLight20="#d4f3e6",bdlGreenLight10="#e9f8f2",bdlGreenLight05="#f4fcf8",bdlGreenLight02="#fbfefd",bdlGrimace="#4826c2",bdlGrimace50="#a392e0",bdlGrimace20="#dad4f3",bdlGrimace10="#ece9f8",bdlGrimace05="#f6f4fc",bdlGrimace02="#fbfbfe",bdlOrange="#f1811a",bdlOrange50="#f8c08c",bdlOrange20="#fce6d1",bdlOrange10="#fdf2e8",bdlOrange05="#fef8f3",bdlOrange02="#fffdfb",bdlPurpleRain="#9f3fed",bdlPurpleRain50="#cf9ff6",bdlPurpleRain20="#ecd9fb",bdlPurpleRain10="#f5ebfd",bdlPurpleRain05="#faf5fe",bdlPurpleRain02="#fdfbff",bdlWatermelonRed="#ed3757",bdlWatermelonRed50="#f69bab",bdlWatermelonRed20="#fbd7dd",bdlWatermelonRed10="#fdebee",bdlWatermelonRed05="#fef5f6",bdlWatermelonRed02="#fffbfc",bdlLineHeight="20px",bdlFontSize="13px",bdlFontSizeMinimum="11px",bdlFontSizeDejaBlue="14px",avatarColors=["#0061d5","#003c84","#6f6f6f","#222","#4826c2","#9f3fed"],modalDialogZIndex="160",menuZIndex="170",submenuZIndex="171",overlayZIndex="190",tooltipZIndex="190",notificationsWrapperZIndex="200",bdlBorderRadiusSize="4px",bdlBorderRadiusSizeMed="6px",bdlBorderRadiusSizeLarge="8px",bdlBorderRadiusSizeXlarge="12px",bdlHeaderBoxShadow=["0 0 10px 0 rgba(0","0","0","0.05)"],bdlGridUnit="4px",bdlGridUnitPx="4",bdlHeaderHeight="64px",bdlBtnBorderWidth="1px",bdlBtnHeight="32px",bdlBtnHeightLarge="40px",bdlBtnIconSize="20px",bdlBtnTextIconSize="16px",bdlBtnPaddingHorizontal="16px",bdlTransitionDurationBase="0.15s",bdlTimingFunction=["cubic-bezier(0","0","0.6","1)"],sizeSmallMediumMin="375px",sizeMediumMin="461px",sizeLargeMin="768px",sizeSmallMax="374px",sizeSmallMediumMax="460px",sizeMediumMax="767px",sizeLargeMax="1023px",sizeXlargeMax="1219px",smallScreen="(max-width: 374px)",smallMediumScreen="(max-width: 460px)",mediumScreen="(max-width: 767px)",largeScreen="(max-width: 1023px)",xlargeScreen="(max-width: 1219px)"},"./node_modules/css-mediaquery/index.js":(__unused_webpack_module,exports)=>{exports.Y=function matchQuery(mediaQuery,values){return parseQuery(mediaQuery).some((function(query){var inverse=query.inverse,typeMatch="all"===query.type||values.type===query.type;if(typeMatch&&inverse||!typeMatch&&!inverse)return!1;var expressionsMatch=query.expressions.every((function(expression){var feature=expression.feature,modifier=expression.modifier,expValue=expression.value,value=values[feature];if(!value)return!1;switch(feature){case"orientation":case"scan":return value.toLowerCase()===expValue.toLowerCase();case"width":case"height":case"device-width":case"device-height":expValue=toPx(expValue),value=toPx(value);break;case"resolution":expValue=toDpi(expValue),value=toDpi(value);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":expValue=toDecimal(expValue),value=toDecimal(value);break;case"grid":case"color":case"color-index":case"monochrome":expValue=parseInt(expValue,10)||1,value=parseInt(value,10)||0}switch(modifier){case"min":return value>=expValue;case"max":return value<=expValue;default:return value===expValue}}));return expressionsMatch&&!inverse||!expressionsMatch&&inverse}))};var RE_MEDIA_QUERY=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,RE_MQ_EXPRESSION=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,RE_MQ_FEATURE=/^(?:(min|max)-)?(.+)/,RE_LENGTH_UNIT=/(em|rem|px|cm|mm|in|pt|pc)?$/,RE_RESOLUTION_UNIT=/(dpi|dpcm|dppx)?$/;function parseQuery(mediaQuery){return mediaQuery.split(",").map((function(query){var captures=(query=query.trim()).match(RE_MEDIA_QUERY),modifier=captures[1],type=captures[2],expressions=captures[3]||"",parsed={};return parsed.inverse=!!modifier&&"not"===modifier.toLowerCase(),parsed.type=type?type.toLowerCase():"all",expressions=expressions.match(/\([^\)]+\)/g)||[],parsed.expressions=expressions.map((function(expression){var captures=expression.match(RE_MQ_EXPRESSION),feature=captures[1].toLowerCase().match(RE_MQ_FEATURE);return{modifier:feature[1],feature:feature[2],value:captures[2]}})),parsed}))}function toDecimal(ratio){var numbers,decimal=Number(ratio);return decimal||(decimal=(numbers=ratio.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/numbers[2]),decimal}function toDpi(resolution){var value=parseFloat(resolution);switch(String(resolution).match(RE_RESOLUTION_UNIT)[1]){case"dpcm":return value/2.54;case"dppx":return 96*value;default:return value}}function toPx(length){var value=parseFloat(length);switch(String(length).match(RE_LENGTH_UNIT)[1]){case"em":case"rem":return 16*value;case"cm":return 96*value/2.54;case"mm":return 96*value/2.54/10;case"in":return 96*value;case"pt":return 72*value;case"pc":return 72*value/12;default:return value}}},"./node_modules/matchmediaquery/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var staticMatch=__webpack_require__("./node_modules/css-mediaquery/index.js").Y,dynamicMatch="undefined"!=typeof window?window.matchMedia:null;function Mql(query,values,forceStatic){var mql,self=this;function update(evt){self.matches=evt.matches,self.media=evt.media}dynamicMatch&&!forceStatic&&(mql=dynamicMatch.call(window,query)),mql?(this.matches=mql.matches,this.media=mql.media,mql.addListener(update)):(this.matches=staticMatch(query,values),this.media=query),this.addListener=function addListener(listener){mql&&mql.addListener(listener)},this.removeListener=function removeListener(listener){mql&&mql.removeListener(listener)},this.dispose=function dispose(){mql&&mql.removeListener(update)}}module.exports=function matchMedia(query,values,forceStatic){return new Mql(query,values,forceStatic)}},"./node_modules/react-responsive/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Qz:()=>toQuery,Ub:()=>useMediaQuery});var react=__webpack_require__("./node_modules/react/index.js"),matchmediaquery=__webpack_require__("./node_modules/matchmediaquery/index.js"),matchmediaquery_default=__webpack_require__.n(matchmediaquery),uppercasePattern=/[A-Z]/g,msPattern=/^ms-/,cache={};function toHyphenLower(match){return"-"+match.toLowerCase()}const hyphenate_style_name=function hyphenateStyleName(name){if(cache.hasOwnProperty(name))return cache[name];var hName=name.replace(uppercasePattern,toHyphenLower);return cache[name]=msPattern.test(hName)?"-"+hName:hName};function shallowEqualObjects(objA,objB){if(objA===objB)return!0;if(!objA||!objB)return!1;const aKeys=Object.keys(objA),bKeys=Object.keys(objB),len=aKeys.length;if(bKeys.length!==len)return!1;for(let i=0;i<len;i++){const key=aKeys[i];if(objA[key]!==objB[key]||!Object.prototype.hasOwnProperty.call(objB,key))return!1}return!0}var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const stringOrNumber=prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),types={all:prop_types_default().bool,grid:prop_types_default().bool,aural:prop_types_default().bool,braille:prop_types_default().bool,handheld:prop_types_default().bool,print:prop_types_default().bool,projection:prop_types_default().bool,screen:prop_types_default().bool,tty:prop_types_default().bool,tv:prop_types_default().bool,embossed:prop_types_default().bool},matchers={orientation:prop_types_default().oneOf(["portrait","landscape"]),scan:prop_types_default().oneOf(["progressive","interlace"]),aspectRatio:prop_types_default().string,deviceAspectRatio:prop_types_default().string,height:stringOrNumber,deviceHeight:stringOrNumber,width:stringOrNumber,deviceWidth:stringOrNumber,color:prop_types_default().bool,colorIndex:prop_types_default().bool,monochrome:prop_types_default().bool,resolution:stringOrNumber,type:Object.keys(types)},{type,...featureMatchers}=matchers,features={minAspectRatio:prop_types_default().string,maxAspectRatio:prop_types_default().string,minDeviceAspectRatio:prop_types_default().string,maxDeviceAspectRatio:prop_types_default().string,minHeight:stringOrNumber,maxHeight:stringOrNumber,minDeviceHeight:stringOrNumber,maxDeviceHeight:stringOrNumber,minWidth:stringOrNumber,maxWidth:stringOrNumber,minDeviceWidth:stringOrNumber,maxDeviceWidth:stringOrNumber,minColor:prop_types_default().number,maxColor:prop_types_default().number,minColorIndex:prop_types_default().number,maxColorIndex:prop_types_default().number,minMonochrome:prop_types_default().number,maxMonochrome:prop_types_default().number,minResolution:stringOrNumber,maxResolution:stringOrNumber,...featureMatchers};var mq={all:{...types,...features},types,matchers,features};const toQuery=obj=>{const rules=[];return Object.keys(mq.all).forEach((k=>{const v=obj[k];null!=v&&rules.push(((k,v)=>{const realKey=hyphenate_style_name(k);return"number"==typeof v&&(v=`${v}px`),!0===v?realKey:!1===v?`not ${realKey}`:`(${realKey}: ${v})`})(k,v))})),rules.join(" and ")},Context=(0,react.createContext)(void 0),hyphenateKeys=obj=>{if(!obj)return;return Object.keys(obj).reduce(((result,key)=>(result[hyphenate_style_name(key)]=obj[key],result)),{})},useIsUpdate=()=>{const ref=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{ref.current=!0}),[]),ref.current},useQuery=settings=>{const getQuery=()=>(settings=>settings.query||toQuery(settings))(settings),[query,setQuery]=(0,react.useState)(getQuery);return(0,react.useEffect)((()=>{const newQuery=getQuery();query!==newQuery&&setQuery(newQuery)}),[settings]),query},useMediaQuery=(settings,device,onChange)=>{const deviceSettings=(deviceFromProps=>{const deviceFromContext=(0,react.useContext)(Context),getDevice=()=>hyphenateKeys(deviceFromProps)||hyphenateKeys(deviceFromContext),[device,setDevice]=(0,react.useState)(getDevice);return(0,react.useEffect)((()=>{const newDevice=getDevice();shallowEqualObjects(device,newDevice)||setDevice(newDevice)}),[deviceFromProps,deviceFromContext]),device})(device),query=useQuery(settings);if(!query)throw new Error("Invalid or missing MediaQuery!");const mq=((query,device)=>{const getMatchMedia=()=>matchmediaquery_default()(query,device||{},!!device),[mq,setMq]=(0,react.useState)(getMatchMedia),isUpdate=useIsUpdate();return(0,react.useEffect)((()=>{if(isUpdate){const newMq=getMatchMedia();return setMq(newMq),()=>{newMq&&newMq.dispose()}}}),[query,device]),mq})(query,deviceSettings),matches=(mediaQuery=>{const[matches,setMatches]=(0,react.useState)(mediaQuery.matches);return(0,react.useEffect)((()=>{const updateMatches=ev=>{setMatches(ev.matches)};return mediaQuery.addListener(updateMatches),setMatches(mediaQuery.matches),()=>{mediaQuery.removeListener(updateMatches)}}),[mediaQuery]),matches})(mq),isUpdate=useIsUpdate();return(0,react.useEffect)((()=>{isUpdate&&onChange&&onChange(matches)}),[matches]),(0,react.useEffect)((()=>()=>{mq&&mq.dispose()}),[]),matches}}}]);