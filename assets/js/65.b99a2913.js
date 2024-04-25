(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{524:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[s._v("首先我们需要先理解一下什么事编译时和运行时，在语言层面，先来聊一下前端开发者最常遇见的两种语言"),t("code",[s._v("JavaScript")]),s._v("和"),t("code",[s._v("Java")])])]),s._v(" "),t("h1",{attrs:{id:"编译时与运行时"}},[s._v("编译时与运行时")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("Java")]),s._v("的代码就是被编译为"),t("code",[s._v(".class")]),s._v(" 文件才能运行，这个编译过程就是编译时，运行 "),t("code",[s._v(".class")]),s._v(" 文件就是运行时")]),s._v(" "),t("li",[s._v("我们在浏览器直接输入一些"),t("code",[s._v("JavaScript")]),s._v("代码，就可以执行，并没有经过编译成某个文件。所以我的理解是解释型语言是没有编译时，只有运行时。")])]),s._v(" "),t("h2",{attrs:{id:"javascript的编译时和运行时"}},[s._v("JavaScript的编译时和运行时")]),s._v(" "),t("p",[s._v("JavaScript的编译时或运行时，一般指的是现代框架（"),t("code",[s._v("react")]),s._v("、"),t("code",[s._v("vue")]),s._v("）是采用那种思路来实现的。")]),s._v(" "),t("h3",{attrs:{id:"运行时"}},[s._v("运行时")]),s._v(" "),t("p",[s._v("一个纯运行时框架就是在我们将DOM的数据结构传入到渲染函数时，就可以直接渲染出真实的DOM结构元素。在我们的项目开发中，假设提供一个被叫做"),t("code",[s._v("render")]),s._v("的"),t("code",[s._v("API")]),s._v("，通过给该render函数传入源数据并调用，就可以得到真实的DOM结构，那么我们可以认为该render函数就是一个运行时。"),t("br"),s._v("\n现在有以下数据需要生成dom并挂载到body上")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node是一个虚拟DOM树")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tag为元素的标签")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// children为数组时表示子元素，为字符串时表示文本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" node "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("tag")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("children")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("tag")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'h1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("children")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'运行时'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("现在需要一个render函数来处理上面的数据")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("render")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" el "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果子元素是文本节点，则创建文本节点。")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createTextNode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("children"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("child")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("child"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("el"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("有了render函数，我们就可以调用并传参，来实现dom的渲染")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" div "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'div'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" div"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最后打印的结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* \n<div>\n    <div>\n        <h1>运行时</h1>\n    </div>\n</div>\n*/")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("观察上面的代码，其实在"),t("code",[s._v("Vue")]),s._v("的框架中已经提供了类似的API供我们使用，可以使你利用"),t("code",[s._v("JavaScript")]),s._v("的丰富表达力来完全编程式地声明组件最终的渲染输出。不过为什么我们在使用单文件组件的时候，大多都使用模版语法，这是因为较运行时的"),t("code",[s._v("render")]),s._v("函数的数据，模板语法更直观、书写更方便、语义化更强。")]),s._v(" "),t("h3",{attrs:{id:"编译时"}},[s._v("编译时")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("Vue")]),s._v("项目的单文件组件中，我们一般使用的是"),t("code",[s._v("template")]),s._v("模版语法，例如")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("编译时"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("现在要想将以上模板代码编译成正在的"),t("code",[s._v("dom")]),s._v("结构，就需要先解析上面的模版结构，这里就需要实现一个"),t("code",[s._v("compiler")]),s._v("方法去解析代码，关于"),t("code",[s._v("compiler")]),s._v("的实现稍微较为复杂，其原理可以参考"),t("a",{attrs:{href:"https://kfhechenglong.github.io/blog/vue/vue3/vue%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86/%E5%9B%BE%E8%A7%A3vue3.0%E7%BC%96%E8%AF%91%E5%99%A8%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86.html#%E6%A6%82%E8%A7%88",target:"_blank",rel:"noopener noreferrer"}},[s._v("编译器核心原理"),t("OutboundLink")],1),s._v("这篇文章")]),s._v(" "),t("h3",{attrs:{id:"运行-编译时"}},[s._v("运行+编译时")]),s._v(" "),t("p",[s._v("现在有了运行时、编译时的简单示例，那么上面的代码可以这样使用:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" html "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\n<div>\n    <h1>编译时 + 运行时</h1>\n</div>\n")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译，先将模板字符串编译成虚拟DOM树状结构")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" compilerData "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("compiler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在使用render函数生成真正的dom结构并挂载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compilerData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("上面就变成了一个简单的编译时+运行时的框架。它既支持运行时，用户可以直接提供数据对象从而无须编译；又支持编译时，用户可以提供 "),t("code",[s._v("HTML")]),s._v("字符串，我们将其编译为数据对象后再交给运行时处理。"),t("br"),s._v("\n如果上面的代码稍微做一下修改，将"),t("code",[s._v("render")]),s._v("的工作直接放到"),t("code",[s._v("compiler")]),s._v("里面去实现，这样我们就省去了调用"),t("code",[s._v("render")]),s._v("的步骤，这样就变成了一个纯粹的编译时框架，我们不需要提供任何数据，只需要提供模版代码就行。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[s._v("总结")]),s._v(" "),t("p",[s._v("现在我们已经大概了解了什么是"),t("code",[s._v("运行时")]),s._v("、"),t("code",[s._v("编译时")]),s._v("、"),t("code",[s._v("编译+运行时")]),s._v("、纯编译时等框架的区别，其实在我们使用的现代框架中Vue就是一个"),t("code",[s._v("编译+运行时")]),s._v("的框架。由于它没有编译的过程，因此我们没办法分析用户提供的内容，但是如果加入编译步骤，可能就大不一样了，我们可以分析用户提供的内容，看看哪些内容未来可能会改变，哪些内容永远不会改变，这样我们就可以在编译的时候提取这些信息，然后将其传递给"),t("code",[s._v("Render")]),s._v("函数，"),t("code",[s._v("Render")]),s._v("函数得到这些信息之后，就可以做进一步的优化了。然而，假如我们设计的框架是纯编译时的，那么它也可以分析用户提供的内容。由于不需要任何运行时，而是直接编译成可执行的"),t("code",[s._v("JavaScript")]),s._v("代码，因此性能可能会更好，但是这种做法有损灵活性，即用户提供的内容必须编译后才能用。")]),s._v(" "),t("p",[s._v("另外，"),t("code",[s._v("Vue")]),s._v("的文件名中带有"),t("code",[s._v("runtime")]),s._v("的"),t("code",[s._v("Vue")]),s._v("构建版本未包含模板编译器，例如 "),t("code",[s._v("vue.runtime.esm-bundler.js")])])])}),[],!1,null,null,null);t.default=e.exports}}]);