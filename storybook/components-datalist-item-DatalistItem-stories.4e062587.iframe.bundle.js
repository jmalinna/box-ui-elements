/*! For license information please see components-datalist-item-DatalistItem-stories.4e062587.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[79348],{"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/datalist-item/DatalistItem.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".datalist-item{padding:8px 48px 8px 8px;border-radius:8px;cursor:pointer}.datalist-item.is-active{background-color:rgba(34,34,34,.05)}","",{version:3,sources:["webpack://./src/components/datalist-item/DatalistItem.scss","webpack://./src/styles/mixins/_overlay.scss","webpack://./src/styles/constants/_layout.scss"],names:[],mappings:"AAGA,eCKI,wBAAA,CACA,iBCE2B,CDD3B,cAAA,CAEA,yBACI,mCAAA",sourcesContent:["@import '../../styles/variables';\n@import '../../styles/mixins/overlay';\n\n.datalist-item {\n    @include bdl-Overlay-listItemContainer;\n}\n","@import '../variables';\n\n/**\n * Mixin to make standard the style for selected items in flyout lists\n * Example:\n * - data list components\n */\n@mixin bdl-Overlay-listItemContainer {\n    padding: ($bdl-grid-unit * 2) ($bdl-grid-unit * 12) ($bdl-grid-unit * 2) ($bdl-grid-unit * 2);\n    border-radius: $bdl-border-radius-size-large;\n    cursor: pointer;\n\n    &.is-active {\n        background-color: fade-out($bdl-gray, .95);\n    }\n}\n\n/**\n * Mixin to make standard the container treatment for any overlapping containers (Overlays)\n * Component Examples:\n * - Flyout\n * - Overlay\n * - Pill Selector Dropdown\n * Feature Examples:\n * - Header Flyout\n */\n@mixin bdl-Overlay-container {\n    margin-top: $bdl-grid-unit;\n    padding: $bdl-grid-unit * 3;\n    background-color: $white;\n    border: 1px solid $bdl-gray-10;\n    border-radius: $bdl-border-radius-size-large;\n\n    @include bdl-Overlay-containerShadow;\n}\n\n/**\n * Mixin to make standard the shadow treatment for any overlapping containers\n * Example:\n * - custom flyouts with different border designs\n * - tooltips\n * - FTUX tooltip guides\n */\n@mixin bdl-Overlay-containerShadow {\n    box-shadow: 0 $bdl-grid-unit ($bdl-grid-unit * 3) 0 rgba($black, .1);\n}\n","// Z-Indexes\n$modal-dialog-z-index: 160 !default;\n$menu-z-index: 170 !default;\n$submenu-z-index: 171 !default;\n$overlay-z-index: 190 !default;\n$tooltip-z-index: 190 !default;\n$notifications-wrapper-z-index: 200 !default;\n\n// Borders\n$bdl-border-radius-size: 4px;\n$bdl-border-radius-size-med: $bdl-border-radius-size * 1.5;\n$bdl-border-radius-size-large: $bdl-border-radius-size * 2;\n$bdl-border-radius-size-xlarge: $bdl-border-radius-size * 3;\n\n// Drop shadows\n$bdl-header-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);\n\n// Spacing\n$bdl-grid-unit: 4px !default;\n$bdl-grid-unit-px: 4 !default; // unitless grid unit (defined in pixels for manual multiplication in JS)\n\n// Headers\n$bdl-header-height: 64px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/datalist-item/DatalistItem.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DatalistItem_stories});var react=__webpack_require__("./node_modules/react/index.js"),DatalistItem=__webpack_require__("./src/components/datalist-item/DatalistItem.tsx");const Example=()=>react.createElement(DatalistItem.A,{isSelected:!0},"Text"),DatalistItem_stories={title:"Components/Dropdowns/ListItems/DatalistItem",component:DatalistItem.A,parameters:{notes:"### Description\n\n**Datalist Item (ARIA-compliant)**\n\nThis component renders a list item compatible with a datalist such as `SelectorDropdown`.\nIt handles creating a unique ID and propagating the ID up to the parent component when active.\n\nWhen using this component with `SelectorDropdown`, it is important to specify keys\nbased on the data instead of the default index so state is reset properly.\n"}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"() => {\n  return <DatalistItem isSelected>Text</DatalistItem>;\n}",...Example.parameters?.docs?.source}}}},"./src/components/datalist-item/DatalistItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_datalist_item_DatalistItem});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),omit=__webpack_require__("./node_modules/lodash/omit.js"),omit_default=__webpack_require__.n(omit),uniqueId=__webpack_require__("./node_modules/lodash/uniqueId.js"),uniqueId_default=__webpack_require__.n(uniqueId),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DatalistItem=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/datalist-item/DatalistItem.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DatalistItem.A,options);DatalistItem.A&&DatalistItem.A.locals&&DatalistItem.A.locals;const _excluded=["children","className","isActive","isSelected"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}class DatalistItem_DatalistItem extends react.Component{constructor(props){super(props),_defineProperty(this,"setActiveItemID",(()=>{const{setActiveItemID}=this.props;setActiveItemID&&setActiveItemID(this.id)})),this.id=uniqueId_default()("datalistitem")}componentDidMount(){this.props.isActive&&this.setActiveItemID()}componentDidUpdate(prevProps){this.props.isActive&&!prevProps.isActive&&this.setActiveItemID()}render(){const _this$props=this.props,{children,className,isActive,isSelected}=_this$props,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_this$props,_excluded),classes=classnames_default()("datalist-item",{"is-active":isActive},className),itemProps=omit_default()(rest,["closeDropdown","setActiveItemID"]);return react.createElement("li",_extends({},itemProps,{className:classes,id:this.id,role:"option","aria-selected":isSelected}),children)}}const components_datalist_item_DatalistItem=DatalistItem_DatalistItem;try{DatalistItem_DatalistItem.displayName="DatalistItem",DatalistItem_DatalistItem.__docgenInfo={description:"",displayName:"DatalistItem",props:{children:{defaultValue:null,description:"Content to render in the list item",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"CSS class for the list item",name:"className",required:!1,type:{name:"string"}},isActive:{defaultValue:null,description:"Set by a parent datalist component to indicate when the item is highlighted (but not necessarily selected)",name:"isActive",required:!1,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"Set by a parent datalist component to indicate when the item is selected",name:"isSelected",required:!1,type:{name:"boolean"}},setActiveItemID:{defaultValue:null,description:"Set by a parent datalist component to receive the updated active item ID",name:"setActiveItemID",required:!1,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/datalist-item/DatalistItem.tsx#DatalistItem"]={docgenInfo:DatalistItem_DatalistItem.__docgenInfo,name:"DatalistItem",path:"src/components/datalist-item/DatalistItem.tsx#DatalistItem"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/_apply.js":module=>{module.exports=function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2])}return func.apply(thisArg,args)}},"./node_modules/lodash/_baseFlatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayPush=__webpack_require__("./node_modules/lodash/_arrayPush.js"),isFlattenable=__webpack_require__("./node_modules/lodash/_isFlattenable.js");module.exports=function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;for(predicate||(predicate=isFlattenable),result||(result=[]);++index<length;){var value=array[index];depth>0&&predicate(value)?depth>1?baseFlatten(value,depth-1,predicate,isStrict,result):arrayPush(result,value):isStrict||(result[result.length]=value)}return result}},"./node_modules/lodash/_baseSetToString.js":(module,__unused_webpack_exports,__webpack_require__)=>{var constant=__webpack_require__("./node_modules/lodash/constant.js"),defineProperty=__webpack_require__("./node_modules/lodash/_defineProperty.js"),identity=__webpack_require__("./node_modules/lodash/identity.js"),baseSetToString=defineProperty?function(func,string){return defineProperty(func,"toString",{configurable:!0,enumerable:!1,value:constant(string),writable:!0})}:identity;module.exports=baseSetToString},"./node_modules/lodash/_baseSlice.js":module=>{module.exports=function baseSlice(array,start,end){var index=-1,length=array.length;start<0&&(start=-start>length?0:length+start),(end=end>length?length:end)<0&&(end+=length),length=start>end?0:end-start>>>0,start>>>=0;for(var result=Array(length);++index<length;)result[index]=array[index+start];return result}},"./node_modules/lodash/_baseUnset.js":(module,__unused_webpack_exports,__webpack_require__)=>{var castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),last=__webpack_require__("./node_modules/lodash/last.js"),parent=__webpack_require__("./node_modules/lodash/_parent.js"),toKey=__webpack_require__("./node_modules/lodash/_toKey.js");module.exports=function baseUnset(object,path){return path=castPath(path,object),null==(object=parent(object,path))||delete object[toKey(last(path))]}},"./node_modules/lodash/_customOmitClone.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isPlainObject=__webpack_require__("./node_modules/lodash/isPlainObject.js");module.exports=function customOmitClone(value){return isPlainObject(value)?void 0:value}},"./node_modules/lodash/_flatRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flatten=__webpack_require__("./node_modules/lodash/flatten.js"),overRest=__webpack_require__("./node_modules/lodash/_overRest.js"),setToString=__webpack_require__("./node_modules/lodash/_setToString.js");module.exports=function flatRest(func){return setToString(overRest(func,void 0,flatten),func+"")}},"./node_modules/lodash/_isFlattenable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),isArguments=__webpack_require__("./node_modules/lodash/isArguments.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),spreadableSymbol=Symbol?Symbol.isConcatSpreadable:void 0;module.exports=function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol])}},"./node_modules/lodash/_overRest.js":(module,__unused_webpack_exports,__webpack_require__)=>{var apply=__webpack_require__("./node_modules/lodash/_apply.js"),nativeMax=Math.max;module.exports=function overRest(func,start,transform){return start=nativeMax(void 0===start?func.length-1:start,0),function(){for(var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);++index<length;)array[index]=args[start+index];index=-1;for(var otherArgs=Array(start+1);++index<start;)otherArgs[index]=args[index];return otherArgs[start]=transform(array),apply(func,this,otherArgs)}}},"./node_modules/lodash/_parent.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseGet=__webpack_require__("./node_modules/lodash/_baseGet.js"),baseSlice=__webpack_require__("./node_modules/lodash/_baseSlice.js");module.exports=function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1))}},"./node_modules/lodash/_setToString.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSetToString=__webpack_require__("./node_modules/lodash/_baseSetToString.js"),setToString=__webpack_require__("./node_modules/lodash/_shortOut.js")(baseSetToString);module.exports=setToString},"./node_modules/lodash/_shortOut.js":module=>{var nativeNow=Date.now;module.exports=function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=16-(stamp-lastCalled);if(lastCalled=stamp,remaining>0){if(++count>=800)return arguments[0]}else count=0;return func.apply(void 0,arguments)}}},"./node_modules/lodash/constant.js":module=>{module.exports=function constant(value){return function(){return value}}},"./node_modules/lodash/flatten.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseFlatten=__webpack_require__("./node_modules/lodash/_baseFlatten.js");module.exports=function flatten(array){return(null==array?0:array.length)?baseFlatten(array,1):[]}},"./node_modules/lodash/last.js":module=>{module.exports=function last(array){var length=null==array?0:array.length;return length?array[length-1]:void 0}},"./node_modules/lodash/omit.js":(module,__unused_webpack_exports,__webpack_require__)=>{var arrayMap=__webpack_require__("./node_modules/lodash/_arrayMap.js"),baseClone=__webpack_require__("./node_modules/lodash/_baseClone.js"),baseUnset=__webpack_require__("./node_modules/lodash/_baseUnset.js"),castPath=__webpack_require__("./node_modules/lodash/_castPath.js"),copyObject=__webpack_require__("./node_modules/lodash/_copyObject.js"),customOmitClone=__webpack_require__("./node_modules/lodash/_customOmitClone.js"),flatRest=__webpack_require__("./node_modules/lodash/_flatRest.js"),getAllKeysIn=__webpack_require__("./node_modules/lodash/_getAllKeysIn.js"),omit=flatRest((function(object,paths){var result={};if(null==object)return result;var isDeep=!1;paths=arrayMap(paths,(function(path){return path=castPath(path,object),isDeep||(isDeep=path.length>1),path})),copyObject(object,getAllKeysIn(object),result),isDeep&&(result=baseClone(result,7,customOmitClone));for(var length=paths.length;length--;)baseUnset(result,paths[length]);return result}));module.exports=omit},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);