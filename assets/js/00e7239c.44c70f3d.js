"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[414],{4137:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var s=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,s,r=function(t,e){if(null==t)return{};var n,s,r={},a=Object.keys(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=s.createContext({}),p=function(t){var e=s.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return s.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},u=s.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||c[f]||a;return n?s.createElement(d,o(o({ref:e},m),{},{components:n})):s.createElement(d,o({ref:e},m))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},425:(t,e,n)=>{n.d(e,{Z:()=>o});var s=n(7294),r=n(6010);const a="tabItem_Ymn6";function o(t){let{children:e,hidden:n,className:o}=t;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:n},e)}},4259:(t,e,n)=>{n.d(e,{Z:()=>f});var s=n(7462),r=n(7294),a=n(6010),o=n(1048),i=n(3609),l=n(1943),p=n(2957);const m="tabList__CuJ",c="tabItem_LNqP";function u(t){var e;const{lazy:n,block:o,defaultValue:u,values:f,groupId:d,className:g}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??b.map((t=>{let{props:{value:e,label:n,attributes:s}}=t;return{value:e,label:n,attributes:s}})),j=(0,i.l)(h,((t,e)=>t.value===e.value));if(j.length>0)throw new Error(`Docusaurus error: Duplicate values "${j.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(e=b.find((t=>t.props.default)))?void 0:e.props.value)??b[0].props.value;if(null!==y&&!h.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:v}=(0,l.U)(),[k,x]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,p.o5)();if(null!=d){const t=T[d];null!=t&&t!==k&&h.some((e=>e.value===t))&&x(t)}const C=t=>{const e=t.currentTarget,n=w.indexOf(e),s=h[n].value;s!==k&&(N(e),x(s),null!=d&&v(d,String(s)))},S=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{const e=w.indexOf(t.currentTarget)+1;n=w[e]??w[0];break}case"ArrowLeft":{const e=w.indexOf(t.currentTarget)-1;n=w[e]??w[w.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},g)},h.map((t=>{let{value:e,label:n,attributes:o}=t;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,key:e,ref:t=>w.push(t),onKeyDown:S,onFocus:C,onClick:C},o,{className:(0,a.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":k===e})}),n??e)}))),n?(0,r.cloneElement)(b.filter((t=>t.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==k})))))}function f(t){const e=(0,o.Z)();return r.createElement(u,(0,s.Z)({key:String(e)},t))}},3859:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var s=n(7462),r=(n(7294),n(4137)),a=n(4259),o=n(425);const i={title:"AST transformers option"},l=void 0,p={unversionedId:"getting-started/options/astTransformers",id:"getting-started/options/astTransformers",title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/docs/getting-started/options/astTransformers.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/next/getting-started/options/astTransformers",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/astTransformers.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1664467734,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{title:"AST transformers option"}},m={},c=[{value:"Examples",id:"examples",level:3},{value:"Basic Transformers",id:"basic-transformers",level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",level:4},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",level:3}],u={toc:c};function f(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,s.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does hoisting for a few ",(0,r.kt)("inlineCode",{parentName:"p"},"jest")," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," to include into compilation process."),(0,r.kt)("p",null,"The option is ",(0,r.kt)("inlineCode",{parentName:"p"},"astTransformers")," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"before")," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"require")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"define")," )."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"after")," means your transformers get run after TS ones, which gets transpiled syntax."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"afterDeclarations")," means your transformers get run during ",(0,r.kt)("inlineCode",{parentName:"li"},"d.ts")," generation phase, allowing you to transform output type declarations.")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"basic-transformers"},"Basic Transformers"),(0,r.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "astTransformers": {\n            "before": ["my-custom-transformer"]\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("h4",{id:"configuring-transformers-with-options"},"Configuring transformers with options"),(0,r.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n"))),(0,r.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,r.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "astTransformers": {\n            "before": [\n              {\n                "path": "my-custom-transformer-that-needs-extra-opts",\n                "options": {} // extra options to pass to transformers here\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,r.kt)("h3",{id:"writing-custom-typescript-ast-transformers"},"Writing custom TypeScript AST transformers"),(0,r.kt)("p",null,"To write a custom TypeScript AST transformers, one can take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers"},"the one")," that ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," is using."))}f.isMDXComponent=!0}}]);