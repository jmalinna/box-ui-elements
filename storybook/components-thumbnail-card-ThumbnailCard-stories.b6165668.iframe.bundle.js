(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[48442],{"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/thumbnail-card/ThumbnailCard.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".thumbnail-card{display:flex;flex:1 0 250px;flex-direction:column;min-width:250px;max-width:400px;height:200px;border:1px solid #e8e8e8;border-radius:8px;box-shadow:0 5px 10px 0 rgba(198,198,198,.2)}.thumbnail-card.is-highlight-applied:hover:not(:focus){border:1px solid #2486fc}.thumbnail-card-details{display:flex;flex:1;align-items:center;padding:0 12px 0 12px;line-height:16px;border-top:1px solid #f4f4f4;border-bottom-right-radius:8px;border-bottom-left-radius:8px}.thumbnail-card-details .thumbnail-card-details-content{display:flex;flex:1;flex-direction:row;align-items:center;justify-content:space-between;overflow:hidden}.thumbnail-card-details .thumbnail-card-details-content .ThumbnailCardDetails-bodyText{width:110px}.thumbnail-card-details .thumbnail-card-title,.thumbnail-card-details .thumbnail-card-subtitle{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.thumbnail-card-details .thumbnail-card-subtitle{color:#6f6f6f}.thumbnail-card-thumbnail-container{display:flex;align-items:center;width:100%;height:144px;background-color:#f4f4f4;border-top-left-radius:8px;border-top-right-radius:8px}.thumbnail-card-thumbnail-container .thumbnail-card-thumbnail-viewport{position:relative;width:100%;height:144px;max-height:144px;overflow:hidden;text-align:center;border-top-left-radius:8px;border-top-right-radius:8px}.thumbnail-card-thumbnail-container .thumbnail-card-thumbnail-viewport img,.thumbnail-card-thumbnail-container .thumbnail-card-thumbnail-viewport svg{max-width:100%;max-height:144px;vertical-align:middle}.thumbnail-card-thumbnail-container .thumbnail-card-thumbnail-viewport img{box-shadow:0 0 8px 0 rgba(177,177,177,.5)}","",{version:3,sources:["webpack://./src/components/thumbnail-card/ThumbnailCard.scss","webpack://./src/styles/constants/_colors.scss","webpack://./src/components/thumbnail-card/_variables.scss"],names:[],mappings:"AAGA,gBACI,YAAA,CACA,cAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,YAAA,CACA,wBAAA,CACA,iBAAA,CACA,4CAAA,CAKA,uDACI,wBAAA,CAIR,wBACI,YAAA,CACA,MAAA,CACA,kBAAA,CACA,qBAAA,CACA,gBAAA,CACA,4BAAA,CACA,8BAAA,CACA,6BAAA,CAEA,wDACI,YAAA,CACA,MAAA,CACA,kBAAA,CACA,kBAAA,CACA,6BAAA,CACA,eAAA,CAEA,uFACI,WAAA,CAIR,+FAEI,eAAA,CACA,kBAAA,CACA,sBAAA,CAGJ,iDACI,aChCM,CDoCd,oCACI,YAAA,CACA,kBAAA,CACA,UAAA,CACA,YEzDe,CF0Df,wBCnCU,CDoCV,0BAAA,CACA,2BAAA,CAEA,uEACI,iBAAA,CACA,UAAA,CACA,YEjEW,CFkEX,gBElEW,CFmEX,eAAA,CACA,iBAAA,CACA,0BAAA,CACA,2BAAA,CAEA,sJAEI,cAAA,CACA,gBE3EO,CF4EP,qBAAA,CAGJ,2EACI,yCAAA",sourcesContent:["@import '../../styles/variables';\n@import './variables';\n\n.thumbnail-card {\n    display: flex;\n    flex: 1 0 $thumbnail-card-min-width;\n    flex-direction: column;\n    min-width: $thumbnail-card-min-width;\n    max-width: $thumbnail-card-max-width;\n    height: 200px;\n    border: $thumbnail-card-border solid $bdl-gray-10;\n    border-radius: $bdl-border-radius-size-large;\n    box-shadow: 0 5px 10px 0 rgba(198, 198, 198, .2);\n}\n\n// We should apply border to the card only when it is hovered\n.thumbnail-card.is-highlight-applied {\n    &:hover:not(:focus) {\n        border: 1px solid $bdl-light-blue;\n    }\n}\n\n.thumbnail-card-details {\n    display: flex;\n    flex: 1;\n    align-items: center;\n    padding: 0 12px 0 12px;\n    line-height: 16px;\n    border-top: 1px solid $bdl-gray-05;\n    border-bottom-right-radius: 8px;\n    border-bottom-left-radius: 8px;\n\n    .thumbnail-card-details-content {\n        display: flex;\n        flex: 1;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        overflow: hidden;\n\n        .ThumbnailCardDetails-bodyText {\n            width: 110px;\n        }\n    }\n\n    .thumbnail-card-title,\n    .thumbnail-card-subtitle {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n    }\n\n    .thumbnail-card-subtitle {\n        color: $bdl-gray-65;\n    }\n}\n\n.thumbnail-card-thumbnail-container {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: $thumbnail-height;\n    background-color: $bdl-gray-05;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n\n    .thumbnail-card-thumbnail-viewport {\n        position: relative;\n        width: 100%;\n        height: $thumbnail-height;\n        max-height: $thumbnail-height;\n        overflow: hidden;\n        text-align: center;\n        border-top-left-radius: 8px;\n        border-top-right-radius: 8px;\n\n        img,\n        svg {\n            max-width: 100%;\n            max-height: $thumbnail-height;\n            vertical-align: middle;\n        }\n\n        img {\n            box-shadow: 0 0 8px 0 rgba(177, 177, 177, .5);\n        }\n    }\n}\n","// Box Design Language Colors\n// confirm with design before extending\n\n$white: #fff !default;\n$black: #000 !default;\n$countBadgeBackground: #e9163c !default;\n\n// Box/Primary Blues\n$bdl-box-blue: #0061d5 !default;\n$bdl-box-blue-80: #3381dd !default;\n$bdl-box-blue-50: #7fb0ea !default;\n$bdl-box-blue-40: #99c0ee !default;\n$bdl-box-blue-30: #b2cff2 !default;\n$bdl-box-blue-20: #ccdff7 !default;\n$bdl-box-blue-10: #e5effa !default;\n$bdl-box-blue-05: #f2f7fd !default;\n$bdl-box-blue-02: #fafcfe !default;\n\n// Box/Primary Grays\n$bdl-gray: #222 !default;\n$bdl-gray-80: #4e4e4e !default;\n$bdl-gray-65: #6f6f6f !default;\n$bdl-gray-50: #909090 !default;\n$bdl-gray-40: #a7a7a7 !default;\n$bdl-gray-30: #bcbcbc !default;\n$bdl-gray-20: #d3d3d3 !default;\n$bdl-gray-10: #e8e8e8 !default;\n$bdl-gray-05: #f4f4f4 !default;\n$bdl-gray-02: #fbfbfb !default;\n\n// Dark Blues\n$bdl-dark-blue: #003c84 !default;\n$bdl-dark-blue-50: #7f9dc1 !default;\n$bdl-dark-blue-20: #ccd8e6 !default;\n$bdl-dark-blue-10: #e5ebf2 !default;\n$bdl-dark-blue-05: #f2f5f9 !default;\n$bdl-dark-blue-02: #fafbfd !default;\n\n// Light Blues\n$bdl-light-blue: #2486fc !default;\n$bdl-light-blue-50: #91c2fd !default;\n$bdl-light-blue-20: #d3e7fe !default;\n$bdl-light-blue-10: #e9f2fe !default;\n$bdl-light-blue-05: #f4f9ff !default;\n$bdl-light-blue-02: #fbfdff !default;\n\n// Yelloranges\n$bdl-yellorange: #f5b31b !default;\n$bdl-yellorange-50: #fad98d !default;\n$bdl-yellorange-20: #fdf0d1 !default;\n$bdl-yellorange-10: #fef7e8 !default;\n$bdl-yellorange-05: #fefbf3 !default;\n$bdl-yellorange-02: #fffefb !default;\n\n// Yellows\n$bdl-yellow: #ffd700 !default;\n$bdl-yellow-50: #ffeb7f !default;\n$bdl-yellow-20: #fff7cc !default;\n$bdl-yellow-10: #fffbe5 !default;\n$bdl-yellow-05: #fffdf2 !default;\n$bdl-yellow-02: #fffefa !default;\n\n// Green Lights\n$bdl-green-light: #26c281 !default;\n$bdl-green-light-50: #92e0c0 !default;\n$bdl-green-light-20: #d4f3e6 !default;\n$bdl-green-light-10: #e9f8f2 !default;\n$bdl-green-light-05: #f4fcf8 !default;\n$bdl-green-light-02: #fbfefd !default;\n\n// Grimaces\n$bdl-grimace: #4826c2 !default;\n$bdl-grimace-50: #a392e0 !default;\n$bdl-grimace-20: #dad4f3 !default;\n$bdl-grimace-10: #ece9f8 !default;\n$bdl-grimace-05: #f6f4fc !default;\n$bdl-grimace-02: #fbfbfe !default;\n\n// Orange\n$bdl-orange: #f1811a !default;\n$bdl-orange-50: #f8c08c !default;\n$bdl-orange-20: #fce6d1 !default;\n$bdl-orange-10: #fdf2e8 !default;\n$bdl-orange-05: #fef8f3 !default;\n$bdl-orange-02: #fffdfb !default;\n\n// Purple Rains\n$bdl-purple-rain: #9f3fed !default;\n$bdl-purple-rain-50: #cf9ff6 !default;\n$bdl-purple-rain-20: #ecd9fb !default;\n$bdl-purple-rain-10: #f5ebfd !default;\n$bdl-purple-rain-05: #faf5fe !default;\n$bdl-purple-rain-02: #fdfbff !default;\n\n// Watermelon Reds\n$bdl-watermelon-red: #ed3757 !default;\n$bdl-watermelon-red-50: #f69bab !default;\n$bdl-watermelon-red-20: #fbd7dd !default;\n$bdl-watermelon-red-10: #fdebee !default;\n$bdl-watermelon-red-05: #fef5f6 !default;\n$bdl-watermelon-red-02: #fffbfc !default;\n","// Border width\n$thumbnail-card-border: 1px;\n\n// Fixed max-height of the thumbnails in the cards\n$thumbnail-height: 144px;\n\n// Width dimension of the cards\n$thumbnail-card-min-width: 250px;\n$thumbnail-card-max-width: $thumbnail-card-min-width + 150px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/thumbnail-card/ThumbnailCard.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>ThumbnailCard_stories,highlightOnHover:()=>highlightOnHover});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),tooltip=__webpack_require__("./src/components/tooltip/index.ts"),dom=__webpack_require__("./src/utils/dom.js");const Title=({title})=>{const textRef=react.useRef(null),isTextOverflowed=(0,dom.qZ)(textRef);return react.createElement(tooltip.Ay,{isDisabled:!isTextOverflowed,text:title},react.createElement("div",{ref:textRef,className:"thumbnail-card-title"},title))},ThumbnailCardDetails=({actionItem,icon,subtitle,title})=>react.createElement("div",{className:"thumbnail-card-details"},icon,react.createElement("div",{className:"thumbnail-card-details-content"},react.createElement("div",{className:"ThumbnailCardDetails-bodyText"},react.createElement(Title,{title}),subtitle&&react.createElement("div",{className:"thumbnail-card-subtitle"},subtitle)),actionItem)),thumbnail_card_ThumbnailCardDetails=ThumbnailCardDetails;ThumbnailCardDetails.__docgenInfo={description:"",methods:[],displayName:"ThumbnailCardDetails",props:{actionItem:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<any>",elements:[{name:"any"}]},description:""},icon:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},subtitle:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},title:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""}}};const ThumbnailCardThumbnail=({thumbnail})=>react.createElement("div",{className:"thumbnail-card-thumbnail-container"},react.createElement("div",{className:"thumbnail-card-thumbnail-viewport"},thumbnail)),thumbnail_card_ThumbnailCardThumbnail=ThumbnailCardThumbnail;ThumbnailCardThumbnail.__docgenInfo={description:"",methods:[],displayName:"ThumbnailCardThumbnail",props:{thumbnail:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""}}};var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ThumbnailCard=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/thumbnail-card/ThumbnailCard.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ThumbnailCard.A,options);ThumbnailCard.A&&ThumbnailCard.A.locals&&ThumbnailCard.A.locals;const _excluded=["actionItem","className","icon","highlightOnHover","subtitle","title","thumbnail"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const ThumbnailCard_ThumbnailCard=_ref=>{let{actionItem,className="",icon,highlightOnHover=!1,subtitle,title,thumbnail}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);return react.createElement("div",_extends({role:"button",tabIndex:"0",className:classnames_default()("thumbnail-card",className,{"is-highlight-applied":highlightOnHover})},rest),react.createElement(thumbnail_card_ThumbnailCardThumbnail,{thumbnail}),react.createElement(thumbnail_card_ThumbnailCardDetails,{actionItem,icon,subtitle,title}))},components_thumbnail_card_ThumbnailCard=ThumbnailCard_ThumbnailCard;ThumbnailCard_ThumbnailCard.__docgenInfo={description:"",methods:[],displayName:"ThumbnailCard",props:{actionItem:{required:!1,flowType:{name:"ReactElement",raw:"React.Element<any>",elements:[{name:"any"}]},description:""},className:{required:!1,flowType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},highlightOnHover:{required:!1,flowType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},subtitle:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},thumbnail:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""},title:{required:!0,flowType:{name:"ReactNode",raw:"React.Node"},description:""}}};const thumbnail=react.createElement("div",null,"Thumbnail"),basic=()=>react.createElement(components_thumbnail_card_ThumbnailCard,{thumbnail,title:"Title"}),highlightOnHover=()=>react.createElement(components_thumbnail_card_ThumbnailCard,{highlightOnHover:!0,thumbnail,title:"Title"}),ThumbnailCard_stories={title:"Components/ThumbnailCard",component:components_thumbnail_card_ThumbnailCard,parameters:{notes:"`import ThumbnailCard from 'box-ui-elements/es/components/thumbnail-card/ThumbnailCard';`\n"}},__namedExportsOrder=["basic","highlightOnHover"];basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"() => <ThumbnailCard thumbnail={thumbnail} title={title} />",...basic.parameters?.docs?.source}}},highlightOnHover.parameters={...highlightOnHover.parameters,docs:{...highlightOnHover.parameters?.docs,source:{originalSource:"() => <ThumbnailCard highlightOnHover thumbnail={thumbnail} title={title} />",...highlightOnHover.parameters?.docs?.source}}}},"./src/utils/dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B6:()=>isInputElement,Bm:()=>isFocusableElement,Ml:()=>isLeftClick,Rt:()=>scrollIntoView,XC:()=>focus,qZ:()=>useIsContentOverflowed});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/scroll-into-view-if-needed/es/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants.js");__webpack_require__("./src/utils/domPolyfill.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function isInputElement(element){if(!(element&&element instanceof HTMLElement))return!1;const tag=element.tagName.toLowerCase();return"input"===tag||"select"===tag||"textarea"===tag||"div"===tag&&!!element.getAttribute("contenteditable")}function isFocusableElement(element){if(!(element&&element instanceof HTMLElement))return!1;const tag=element.tagName.toLowerCase(),isCheckbox=element.classList.contains("checkbox-pointer-target")||element.parentElement instanceof HTMLElement&&element.parentElement.classList.contains("checkbox-label"),isButton=element.classList.contains("btn-content")||element.parentElement instanceof HTMLElement&&element.parentElement.classList.contains("btn")||element.parentElement instanceof HTMLElement&&element.parentElement.classList.contains("bdl-Button")||!1;return isInputElement(element)||"button"===tag||"a"===tag||"option"===tag||isCheckbox||isButton}function isLeftClick(event){return!(0!==event.button||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey)}function focus(root,selector,focusRoot=!0){if(!root)return;if(!selector)return void root.focus();const element=root.querySelector(selector);element&&"function"==typeof element.focus?element.focus():focusRoot&&root.focus()}function scrollIntoView(itemEl,options={}){if(itemEl){const parentEl=itemEl.closest(`.body, .modal, .${_constants__WEBPACK_IMPORTED_MODULE_1__.WGB}`);(0,scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_3__.A)(itemEl,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({scrollMode:"if-needed",boundary:parentEl},options))}}function useIsContentOverflowed(contentRef){const[isContentOverflowed,setIsContentOverflowed]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{const{current}=contentRef;if(!current)return;const{offsetWidth,scrollWidth}=current,willOverflow=offsetWidth<scrollWidth;willOverflow!==isContentOverflowed&&setIsContentOverflowed(willOverflow)})),isContentOverflowed}},"./src/utils/domPolyfill.js":()=>{window.Element.prototype.closest=function closest(s){window.Element.prototype.matches||(window.Element.prototype.matches=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector);let el=this;do{if(el.matches(s))return el;el=el.parentElement||el.parentNode}while(null!==el&&1===el.nodeType);return null}},"./src/components/tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.Ay,Zj:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.Zj,ts:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.ts});var _Tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/tooltip/Tooltip.tsx")},"./node_modules/lodash/get.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js");module.exports=function get(object,path,defaultValue){var result=null==object?void 0:baseGet(object,path);return void 0===result?defaultValue:result}},"./node_modules/lodash/noop.js":module=>{module.exports=function noop(){}},"./node_modules/react-intl/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XU:()=>FormattedDate,Gr:()=>FormattedNumber,YK:()=>defineMessages});var DisplayName,DisplayNameParts,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),components_useIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");!function(DisplayName){DisplayName.formatDate="FormattedDate",DisplayName.formatTime="FormattedTime",DisplayName.formatNumber="FormattedNumber",DisplayName.formatList="FormattedList",DisplayName.formatDisplayName="FormattedDisplayName"}(DisplayName||(DisplayName={})),function(DisplayNameParts){DisplayNameParts.formatDate="FormattedDateParts",DisplayNameParts.formatTime="FormattedTimeParts",DisplayNameParts.formatNumber="FormattedNumberParts",DisplayNameParts.formatList="FormattedListParts"}(DisplayNameParts||(DisplayNameParts={}));var FormattedNumberParts=function(props){var intl=(0,components_useIntl.A)(),value=props.value,children=props.children,formatProps=(0,tslib_es6.Tt)(props,["value","children"]);return children(intl.formatNumberToParts(value,formatProps))};FormattedNumberParts.displayName="FormattedNumberParts";function createFormattedDateTimePartsComponent(name){var ComponentParts=function(props){var intl=(0,components_useIntl.A)(),value=props.value,children=props.children,formatProps=(0,tslib_es6.Tt)(props,["value","children"]),date="string"==typeof value?new Date(value||0):value;return children("formatDate"===name?intl.formatDateToParts(date,formatProps):intl.formatTimeToParts(date,formatProps))};return ComponentParts.displayName=DisplayNameParts[name],ComponentParts}function createFormattedComponent(name){var Component=function(props){var intl=(0,components_useIntl.A)(),value=props.value,children=props.children,formatProps=(0,tslib_es6.Tt)(props,["value","children"]),formattedValue=intl[name](value,formatProps);if("function"==typeof children)return children(formattedValue);var Text=intl.textComponent||react.Fragment;return react.createElement(Text,null,formattedValue)};return Component.displayName=DisplayName[name],Component}function defineMessages(msgs){return msgs}FormattedNumberParts.displayName="FormattedNumberParts";var FormattedDate=createFormattedComponent("formatDate"),FormattedNumber=(createFormattedComponent("formatTime"),createFormattedComponent("formatNumber"));createFormattedComponent("formatList"),createFormattedComponent("formatDisplayName"),createFormattedDateTimePartsComponent("formatDate"),createFormattedDateTimePartsComponent("formatTime")},"./node_modules/react-intl/lib/src/components/useIntl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>useIntl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_injectIntl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function useIntl(){var intl=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__.ob);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.HM)(intl),intl}},"./node_modules/scroll-into-view-if-needed/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function t(t){return"object"==typeof t&&null!=t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}__webpack_require__.d(__webpack_exports__,{A:()=>es});var i=function(e,i){var o=window,l=i.scrollMode,d=i.block,f=i.inline,h=i.boundary,u=i.skipOverflowHiddenElements,s="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var a,c,g=document.scrollingElement||document.documentElement,p=[],m=e;t(m)&&s(m);){if((m=null==(c=(a=m).parentElement)?a.getRootNode().host||null:c)===g){p.push(m);break}null!=m&&m===document.body&&n(m)&&!n(document.documentElement)||null!=m&&n(m,u)&&p.push(m)}for(var w=o.visualViewport?o.visualViewport.width:innerWidth,v=o.visualViewport?o.visualViewport.height:innerHeight,W=window.scrollX||pageXOffset,H=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),y=b.height,E=b.width,M=b.top,V=b.right,x=b.bottom,I=b.left,C="start"===d||"nearest"===d?M:"end"===d?x:M+y/2,R="center"===f?I+E/2:"end"===f?V:I,T=[],k=0;k<p.length;k++){var B=p[k],D=B.getBoundingClientRect(),O=D.height,X=D.width,Y=D.top,L=D.right,S=D.bottom,j=D.left;if("if-needed"===l&&M>=0&&I>=0&&x<=v&&V<=w&&M>=Y&&x<=S&&I>=j&&V<=L)return T;var N=getComputedStyle(B),q=parseInt(N.borderLeftWidth,10),z=parseInt(N.borderTopWidth,10),A=parseInt(N.borderRightWidth,10),F=parseInt(N.borderBottomWidth,10),G=0,J=0,K="offsetWidth"in B?B.offsetWidth-B.clientWidth-q-A:0,P="offsetHeight"in B?B.offsetHeight-B.clientHeight-z-F:0,Q="offsetWidth"in B?0===B.offsetWidth?0:X/B.offsetWidth:0,U="offsetHeight"in B?0===B.offsetHeight?0:O/B.offsetHeight:0;if(g===B)G="start"===d?C:"end"===d?C-v:"nearest"===d?r(H,H+v,v,z,F,H+C,H+C+y,y):C-v/2,J="start"===f?R:"center"===f?R-w/2:"end"===f?R-w:r(W,W+w,w,q,A,W+R,W+R+E,E),G=Math.max(0,G+H),J=Math.max(0,J+W);else{G="start"===d?C-Y-z:"end"===d?C-S+F+P:"nearest"===d?r(Y,S,O,z,F+P,C,C+y,y):C-(Y+O/2)+P/2,J="start"===f?R-j-q:"center"===f?R-(j+X/2)+K/2:"end"===f?R-L+A+K:r(j,L,X,q,A+K,R,R+E,E);var Z=B.scrollLeft,$=B.scrollTop;C+=$-(G=Math.max(0,Math.min($+G/U,B.scrollHeight-O/U+P))),R+=Z-(J=Math.max(0,Math.min(Z+J/Q,B.scrollWidth-X/Q+K)))}T.push({el:B,top:G,left:J})}return T};function isOptionsObject(options){return options===Object(options)&&0!==Object.keys(options).length}const es=function scrollIntoView(target,options){var isTargetAttached=target.isConnected||target.ownerDocument.documentElement.contains(target);if(isOptionsObject(options)&&"function"==typeof options.behavior)return options.behavior(isTargetAttached?i(target,options):[]);if(isTargetAttached){var computeOptions=function getOptions(options){return!1===options?{block:"end",inline:"nearest"}:isOptionsObject(options)?options:{block:"start",inline:"nearest"}}(options);return function defaultBehavior(actions,behavior){void 0===behavior&&(behavior="auto");var canSmoothScroll="scrollBehavior"in document.body.style;actions.forEach((function(_ref){var el=_ref.el,top=_ref.top,left=_ref.left;el.scroll&&canSmoothScroll?el.scroll({top,left,behavior}):(el.scrollTop=top,el.scrollLeft=left)}))}(i(target,computeOptions),computeOptions.behavior)}}}}]);