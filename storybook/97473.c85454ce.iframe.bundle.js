"use strict";(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[97473],{"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/menu/Menu.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.aria-menu{margin-top:4px;padding:12px;background-color:#fff;border:1px solid #e8e8e8;border-radius:8px;box-shadow:0 4px 12px 0 rgba(0,0,0,.1);margin:0;white-space:nowrap;list-style:none;background:#fff}.aria-menu:not(.should-outline-focus):focus{outline:none}.aria-menu [role=separator]{height:0;margin:8px 4px;border:0;border-top:1px solid #e8e8e8}.aria-menu a,.aria-menu a:hover,.aria-menu a:focus,.aria-menu .lnk,.aria-menu .lnk:hover,.aria-menu .lnk:focus{text-decoration:none}.aria-menu .bdl-MenuHeader{display:none}.menu-item{position:relative;display:flex;align-items:center;min-height:30px;color:#222;cursor:pointer;padding:8px 48px 8px 8px;border-radius:8px;cursor:pointer}.menu-item.is-active{background-color:rgba(34,34,34,.05)}.menu-item.menu-section-header{color:#000;font-weight:bold;font-size:10px}.menu-item[aria-disabled]{cursor:default;opacity:.4}.menu-item.is-select-item{position:relative;padding-left:38px}.menu-item.is-select-item.is-selected::before{position:absolute;top:10px;left:14px;width:6px;height:12px;margin:auto;border-color:#222;border-style:none solid solid none;border-width:2px;transform:rotate(45deg);content:""}.menu-item:not([aria-disabled]):focus,.menu-item:not([aria-disabled]):hover{color:#222;background-color:#f4f4f4}.menu-item svg:not(.menu-item-arrow){margin-right:16px}',"",{version:3,sources:["webpack://./src/components/menu/Menu.scss","webpack://./src/styles/mixins/_overlay.scss","webpack://./src/styles/constants/_layout.scss","webpack://./src/styles/constants/_colors.scss"],names:[],mappings:"AAGA,WCwBI,cCTY,CDUZ,YAAA,CACA,qBE1BI,CF2BJ,wBAAA,CACA,iBCpB2B,CDiC3B,sCAAA,CDtCA,QAAA,CACA,kBAAA,CACA,eAAA,CACA,eGNI,CHQJ,4CACI,YAAA,CAGJ,4BACI,QAAA,CACA,cAAA,CACA,QAAA,CACA,4BAAA,CAGJ,+GAMI,oBAAA,CAGJ,2BACI,YAAA,CAIR,WACI,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,eAAA,CACA,UGtBO,CHuBP,cAAA,CClCA,wBAAA,CACA,iBCE2B,CDD3B,cAAA,CAEA,qBACI,mCAAA,CDiCJ,+BACI,UG3CA,CH4CA,gBAAA,CACA,cAAA,CAGJ,0BACI,cAAA,CACA,UAAA,CAGJ,0BACI,iBAAA,CACA,iBAAA,CAGA,8CACI,iBAAA,CACA,QAAA,CACA,SAAA,CACA,SAAA,CACA,WAAA,CACA,WAAA,CACA,iBGlDD,CHmDC,kCAAA,CACA,gBAAA,CACA,uBAAA,CACA,UAAA,CAKJ,4EAEI,UG7DD,CH8DC,wBGtDE,CH0DV,qCACI,iBAAA",sourcesContent:["@import '../../styles/variables';\n@import '../../styles/mixins/overlay';\n\n.aria-menu {\n    @include bdl-Overlay-container;\n\n    margin: 0;\n    white-space: nowrap;\n    list-style: none;\n    background: $white;\n\n    &:not(.should-outline-focus):focus {\n        outline: none;\n    }\n\n    [role='separator'] {\n        height: 0;\n        margin: ($bdl-grid-unit * 2) $bdl-grid-unit;\n        border: 0;\n        border-top: 1px solid $bdl-gray-10;\n    }\n\n    a,\n    a:hover,\n    a:focus,\n    .lnk,\n    .lnk:hover,\n    .lnk:focus {\n        text-decoration: none;\n    }\n\n    .bdl-MenuHeader {\n        display: none;\n    }\n}\n\n.menu-item {\n    position: relative;\n    display: flex;\n    align-items: center;\n    min-height: 30px;\n    color: $bdl-gray;\n    cursor: pointer;\n\n    @include bdl-Overlay-listItemContainer;\n\n    &.menu-section-header {\n        color: $black;\n        font-weight: bold;\n        font-size: 10px;\n    }\n\n    &[aria-disabled] {\n        cursor: default;\n        opacity: .4;\n    }\n\n    &.is-select-item {\n        position: relative;\n        padding-left: 38px;\n\n        /* checkmark */\n        &.is-selected::before {\n            position: absolute;\n            top: 10px;\n            left: 14px;\n            width: 6px;\n            height: 12px;\n            margin: auto;\n            border-color: $bdl-gray;\n            border-style: none solid solid none;\n            border-width: 2px;\n            transform: rotate(45deg);\n            content: '';\n        }\n    }\n\n    &:not([aria-disabled]) {\n        &:focus,\n        &:hover {\n            color: $bdl-gray;\n            background-color: $bdl-gray-05;\n        }\n    }\n\n    svg:not(.menu-item-arrow) {\n        margin-right: $bdl-grid-unit * 4;\n    }\n}\n","@import '../variables';\n\n/**\n * Mixin to make standard the style for selected items in flyout lists\n * Example:\n * - data list components\n */\n@mixin bdl-Overlay-listItemContainer {\n    padding: ($bdl-grid-unit * 2) ($bdl-grid-unit * 12) ($bdl-grid-unit * 2) ($bdl-grid-unit * 2);\n    border-radius: $bdl-border-radius-size-large;\n    cursor: pointer;\n\n    &.is-active {\n        background-color: fade-out($bdl-gray, .95);\n    }\n}\n\n/**\n * Mixin to make standard the container treatment for any overlapping containers (Overlays)\n * Component Examples:\n * - Flyout\n * - Overlay\n * - Pill Selector Dropdown\n * Feature Examples:\n * - Header Flyout\n */\n@mixin bdl-Overlay-container {\n    margin-top: $bdl-grid-unit;\n    padding: $bdl-grid-unit * 3;\n    background-color: $white;\n    border: 1px solid $bdl-gray-10;\n    border-radius: $bdl-border-radius-size-large;\n\n    @include bdl-Overlay-containerShadow;\n}\n\n/**\n * Mixin to make standard the shadow treatment for any overlapping containers\n * Example:\n * - custom flyouts with different border designs\n * - tooltips\n * - FTUX tooltip guides\n */\n@mixin bdl-Overlay-containerShadow {\n    box-shadow: 0 $bdl-grid-unit ($bdl-grid-unit * 3) 0 rgba($black, .1);\n}\n","// Z-Indexes\n$modal-dialog-z-index: 160 !default;\n$menu-z-index: 170 !default;\n$submenu-z-index: 171 !default;\n$overlay-z-index: 190 !default;\n$tooltip-z-index: 190 !default;\n$notifications-wrapper-z-index: 200 !default;\n\n// Borders\n$bdl-border-radius-size: 4px;\n$bdl-border-radius-size-med: $bdl-border-radius-size * 1.5;\n$bdl-border-radius-size-large: $bdl-border-radius-size * 2;\n$bdl-border-radius-size-xlarge: $bdl-border-radius-size * 3;\n\n// Drop shadows\n$bdl-header-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);\n\n// Spacing\n$bdl-grid-unit: 4px !default;\n$bdl-grid-unit-px: 4 !default; // unitless grid unit (defined in pixels for manual multiplication in JS)\n\n// Headers\n$bdl-header-height: 64px;\n","// Box Design Language Colors\n// confirm with design before extending\n\n$white: #fff !default;\n$black: #000 !default;\n$countBadgeBackground: #e9163c !default;\n\n// Box/Primary Blues\n$bdl-box-blue: #0061d5 !default;\n$bdl-box-blue-80: #3381dd !default;\n$bdl-box-blue-50: #7fb0ea !default;\n$bdl-box-blue-40: #99c0ee !default;\n$bdl-box-blue-30: #b2cff2 !default;\n$bdl-box-blue-20: #ccdff7 !default;\n$bdl-box-blue-10: #e5effa !default;\n$bdl-box-blue-05: #f2f7fd !default;\n$bdl-box-blue-02: #fafcfe !default;\n\n// Box/Primary Grays\n$bdl-gray: #222 !default;\n$bdl-gray-80: #4e4e4e !default;\n$bdl-gray-65: #6f6f6f !default;\n$bdl-gray-50: #909090 !default;\n$bdl-gray-40: #a7a7a7 !default;\n$bdl-gray-30: #bcbcbc !default;\n$bdl-gray-20: #d3d3d3 !default;\n$bdl-gray-10: #e8e8e8 !default;\n$bdl-gray-05: #f4f4f4 !default;\n$bdl-gray-02: #fbfbfb !default;\n\n// Dark Blues\n$bdl-dark-blue: #003c84 !default;\n$bdl-dark-blue-50: #7f9dc1 !default;\n$bdl-dark-blue-20: #ccd8e6 !default;\n$bdl-dark-blue-10: #e5ebf2 !default;\n$bdl-dark-blue-05: #f2f5f9 !default;\n$bdl-dark-blue-02: #fafbfd !default;\n\n// Light Blues\n$bdl-light-blue: #2486fc !default;\n$bdl-light-blue-50: #91c2fd !default;\n$bdl-light-blue-20: #d3e7fe !default;\n$bdl-light-blue-10: #e9f2fe !default;\n$bdl-light-blue-05: #f4f9ff !default;\n$bdl-light-blue-02: #fbfdff !default;\n\n// Yelloranges\n$bdl-yellorange: #f5b31b !default;\n$bdl-yellorange-50: #fad98d !default;\n$bdl-yellorange-20: #fdf0d1 !default;\n$bdl-yellorange-10: #fef7e8 !default;\n$bdl-yellorange-05: #fefbf3 !default;\n$bdl-yellorange-02: #fffefb !default;\n\n// Yellows\n$bdl-yellow: #ffd700 !default;\n$bdl-yellow-50: #ffeb7f !default;\n$bdl-yellow-20: #fff7cc !default;\n$bdl-yellow-10: #fffbe5 !default;\n$bdl-yellow-05: #fffdf2 !default;\n$bdl-yellow-02: #fffefa !default;\n\n// Green Lights\n$bdl-green-light: #26c281 !default;\n$bdl-green-light-50: #92e0c0 !default;\n$bdl-green-light-20: #d4f3e6 !default;\n$bdl-green-light-10: #e9f8f2 !default;\n$bdl-green-light-05: #f4fcf8 !default;\n$bdl-green-light-02: #fbfefd !default;\n\n// Grimaces\n$bdl-grimace: #4826c2 !default;\n$bdl-grimace-50: #a392e0 !default;\n$bdl-grimace-20: #dad4f3 !default;\n$bdl-grimace-10: #ece9f8 !default;\n$bdl-grimace-05: #f6f4fc !default;\n$bdl-grimace-02: #fbfbfe !default;\n\n// Orange\n$bdl-orange: #f1811a !default;\n$bdl-orange-50: #f8c08c !default;\n$bdl-orange-20: #fce6d1 !default;\n$bdl-orange-10: #fdf2e8 !default;\n$bdl-orange-05: #fef8f3 !default;\n$bdl-orange-02: #fffdfb !default;\n\n// Purple Rains\n$bdl-purple-rain: #9f3fed !default;\n$bdl-purple-rain-50: #cf9ff6 !default;\n$bdl-purple-rain-20: #ecd9fb !default;\n$bdl-purple-rain-10: #f5ebfd !default;\n$bdl-purple-rain-05: #faf5fe !default;\n$bdl-purple-rain-02: #fdfbff !default;\n\n// Watermelon Reds\n$bdl-watermelon-red: #ed3757 !default;\n$bdl-watermelon-red-50: #f69bab !default;\n$bdl-watermelon-red-20: #fbd7dd !default;\n$bdl-watermelon-red-10: #fdebee !default;\n$bdl-watermelon-red-05: #fef5f6 !default;\n$bdl-watermelon-red-02: #fffbfc !default;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/menu/Menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_menu_Menu});var react=__webpack_require__("./node_modules/react/index.js"),omit=__webpack_require__("./node_modules/lodash/omit.js"),omit_default=__webpack_require__.n(omit),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),MenuContext=__webpack_require__("./src/components/menu/MenuContext.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Menu=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/menu/Menu.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Menu.A,options);Menu.A&&Menu.A.locals&&Menu.A.locals;const _excluded=["children","className","isHidden","setRef","shouldOutlineFocus"];function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const MENU_ITEM_SELECTOR=".menu-item:not([aria-disabled])",TOP_LEVEL_MENU_ITEM_SELECTOR=`ul:not(.submenu) > ${MENU_ITEM_SELECTOR}, ul:not(.submenu) > li > ${MENU_ITEM_SELECTOR}, ul:not(.submenu) > span > ${MENU_ITEM_SELECTOR}`,SUBMENU_ITEM_SELECTOR=`ul.submenu > ${MENU_ITEM_SELECTOR}, ul.submenu > li > ${MENU_ITEM_SELECTOR}, ul.submenu > span > ${MENU_ITEM_SELECTOR}`;function stopPropagationAndPreventDefault(event){event.stopPropagation(),event.preventDefault()}class Menu_Menu extends react.Component{constructor(_props){super(_props),_defineProperty(this,"setInitialFocusIndex",((props=this.props)=>{const{initialFocusIndex,isHidden}=props;isHidden||void 0===initialFocusIndex||("number"==typeof initialFocusIndex?setTimeout((()=>{this.setFocus(initialFocusIndex)}),0):null===initialFocusIndex&&setTimeout((()=>{this.menuEl&&this.menuEl.focus()}),0))})),_defineProperty(this,"setMenuItemEls",(()=>{const{isSubmenu,menuItemSelector}=this.props,selector=menuItemSelector||(isSubmenu?SUBMENU_ITEM_SELECTOR:TOP_LEVEL_MENU_ITEM_SELECTOR);this.menuItemEls=this.menuEl?[].slice.call(this.menuEl.querySelectorAll(selector)):[]})),_defineProperty(this,"getMenuItemElFromEventTarget",(target=>{let menuItemEl=null,menuIndex=-1;for(let i=0;i<this.menuItemEls.length;i+=1)if(this.menuItemEls[i].contains(target)){menuItemEl=this.menuItemEls[i],menuIndex=i;break}return{menuItemEl,menuIndex}})),_defineProperty(this,"setFocus",(index=>{if(!this.menuItemEls.length)return;const numMenuItems=this.menuItemEls.length;this.focusIndex=index>=numMenuItems?0:index<0?numMenuItems-1:index,this.menuItemEls[this.focusIndex].focus()})),_defineProperty(this,"focusFirstItem",(()=>{this.setFocus(0)})),_defineProperty(this,"focusLastItem",(()=>{this.setFocus(-1)})),_defineProperty(this,"focusNextItem",(()=>{this.setFocus(this.focusIndex+1)})),_defineProperty(this,"focusPreviousItem",(()=>{this.setFocus(this.focusIndex-1)})),_defineProperty(this,"fireOnCloseHandler",((isKeyboardEvent,event)=>{const{onClose}=this.props;onClose&&onClose(isKeyboardEvent,event)})),_defineProperty(this,"handleClick",(event=>{const{menuItemEl}=event.target instanceof Node?this.getMenuItemElFromEventTarget(event.target):{};menuItemEl&&this.fireOnCloseHandler(!1,event)})),_defineProperty(this,"handleKeyDown",(event=>{const{isSubmenu,initialFocusIndex}=this.props;switch(event.key){case"ArrowDown":stopPropagationAndPreventDefault(event),null!==initialFocusIndex||this.keyboardPressed?this.focusNextItem():this.focusFirstItem();break;case"ArrowUp":stopPropagationAndPreventDefault(event),this.focusPreviousItem();break;case"ArrowLeft":if(!isSubmenu)return;stopPropagationAndPreventDefault(event),this.fireOnCloseHandler(!0,event);break;case"Home":case"PageUp":stopPropagationAndPreventDefault(event),this.focusFirstItem();break;case"End":case"PageDown":stopPropagationAndPreventDefault(event),this.focusLastItem();break;case"Escape":stopPropagationAndPreventDefault(event),this.fireOnCloseHandler(!0,event);break;case"Tab":this.fireOnCloseHandler(!0,event);break;case" ":case"Enter":stopPropagationAndPreventDefault(event),event.target instanceof HTMLElement&&event.target.click()}this.keyboardPressed=!0})),this.focusIndex=0,this.menuEl=null,this.menuItemEls=[]}componentDidMount(){this.setMenuItemEls(),this.setInitialFocusIndex()}componentDidUpdate({isHidden:prevIsHidden,children:prevChildren}){const{children,isHidden,isSubmenu}=this.props;if(isSubmenu&&prevIsHidden&&!isHidden&&(this.setMenuItemEls(),this.setInitialFocusIndex(this.props)),react.Children.toArray(prevChildren).length!==react.Children.toArray(children).length){const focusedMenuItemEl=this.menuItemEls[this.focusIndex];this.setMenuItemEls();const{menuIndex}=this.getMenuItemElFromEventTarget(focusedMenuItemEl),isFocusedElementMissing=-1===menuIndex,isFocusIndexOutOfBounds=this.focusIndex>=this.menuItemEls.length;this.setFocus(isFocusedElementMissing&&!isFocusIndexOutOfBounds?this.focusIndex:menuIndex)}}render(){const _this$props=this.props,{children,className,isHidden,setRef,shouldOutlineFocus}=_this$props,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_this$props,_excluded),menuProps=omit_default()(rest,["onClose","initialFocusIndex","isSubmenu","menuItemSelector"]);return menuProps.className=classnames_default()("aria-menu",className,{"is-hidden":isHidden,"should-outline-focus":shouldOutlineFocus}),menuProps.ref=ref=>{this.menuEl=ref,setRef&&setRef(ref)},void 0===menuProps.role&&(menuProps.role="menu"),menuProps.tabIndex=-1,menuProps.onClick=this.handleClick,menuProps.onKeyDown=this.handleKeyDown,react.createElement("ul",menuProps,react.createElement(MenuContext.A.Provider,{value:{closeMenu:this.fireOnCloseHandler}},children))}}_defineProperty(Menu_Menu,"defaultProps",{className:"",isSubmenu:!1,isHidden:!1});const components_menu_Menu=Menu_Menu;try{Menu_Menu.displayName="Menu",Menu_Menu.__docgenInfo={description:"",displayName:"Menu",props:{children:{defaultValue:null,description:"children - menu items",name:"children",required:!0,type:{name:"ReactChild | ReactNode[] | ReactChild[]"}},className:{defaultValue:{value:""},description:"className - CSS class name for the menu",name:"className",required:!1,type:{name:"string"}},initialFocusIndex:{defaultValue:null,description:"initialFocusIndex - focuses a specific menu item index when menu is mounted",name:"initialFocusIndex",required:!1,type:{name:"number"}},isHidden:{defaultValue:{value:"false"},description:"isHidden - whether the menu’s content is hidden",name:"isHidden",required:!1,type:{name:"boolean"}},isSubmenu:{defaultValue:{value:"false"},description:"isSubmenu - whether this is a submenu of another menu",name:"isSubmenu",required:!1,type:{name:"boolean"}},menuItemSelector:{defaultValue:null,description:"menuItemSelector - overrides the default menu selector",name:"menuItemSelector",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"onClick - function called when the menu is clicked",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLUListElement, MouseEvent>) => void"}},onClose:{defaultValue:null,description:"onClick - function called when the menu is closed",name:"onClose",required:!1,type:{name:"(isKeyboardEvent?: boolean, event?: MouseEvent<HTMLUListElement, MouseEvent> | KeyboardEvent<HTMLElement>) => void"}},onKeyDown:{defaultValue:null,description:"onClick - function called when a key is pressed within the menu",name:"onKeyDown",required:!1,type:{name:"(event: KeyboardEvent<HTMLUListElement>) => void"}},ref:{defaultValue:null,description:"ref - reference to the menu element in the DOM",name:"ref",required:!1,type:{name:"string | ((instance: HTMLUListElement) => void) | RefObject<HTMLUListElement>"}},role:{defaultValue:null,description:"role - ARIA role for the menu",name:"role",required:!1,type:{name:"string"}},setRef:{defaultValue:null,description:"setRef - will fire this callback when menu should \"close'",name:"setRef",required:!1,type:{name:"Function"}},shouldOutlineFocus:{defaultValue:null,description:"shouldOutlineFocus - whether the focused menu item should have an outline",name:"shouldOutlineFocus",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"tabIndex - indicator of whether the menu is focusable",name:"tabIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/menu/Menu.tsx#Menu"]={docgenInfo:Menu_Menu.__docgenInfo,name:"Menu",path:"src/components/menu/Menu.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/menu/MenuContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/noop.js"),lodash_noop__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_1__);const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.createContext({closeMenu:lodash_noop__WEBPACK_IMPORTED_MODULE_1___default()})}}]);