(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{394:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本主题遵循“"),a("strong",[s._v("约定优于配置")]),s._v("”原则，如果你想构建一个结构化的站点，需要遵循下面这些约定，约定可以为你省去很多配置，轻松拥有一个结构清晰的站点。")]),s._v(" "),a("p",[s._v("你需要在"),a("code",[s._v("config.js")]),s._v("中有如下配置：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("themeConfig")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("sidebar")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'structuring'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在运行开发服务"),a("code",[s._v("npm run dev")]),s._v("或打包"),a("code",[s._v("npm run build")]),s._v("时主题内部将会按照目录约定自动生成一个结构化的"),a("strong",[s._v("侧边栏、目录页、面包屑等")]),s._v("数据。")]),s._v(" "),a("p",[s._v("在源目录（一般是"),a("code",[s._v("docs")]),s._v("）文件夹中，除了"),a("code",[s._v(".vuepress")]),s._v("、"),a("code",[s._v("@pages")]),s._v("、"),a("code",[s._v("_posts")]),s._v("、"),a("code",[s._v("index.md 或 README.md")]),s._v("之外的"),a("strong",[s._v("文件夹")]),s._v("将会为其生成对应的侧边栏。生成的顺序取自序号，标题取自文件（夹）名称。")]),s._v(" "),a("h3",{attrs:{id:"命名约定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名约定"}},[s._v("#")]),s._v(" 命名约定")]),s._v(" "),a("ul",[a("li",[s._v("无论是"),a("strong",[s._v("文件")]),s._v("还是"),a("strong",[s._v("文件夹")]),s._v("，请为其名称添加上正确的"),a("strong",[s._v("正整数序号")]),s._v("和"),a("code",[s._v(".")]),s._v("，从"),a("code",[s._v("00")]),s._v("或"),a("code",[s._v("01")]),s._v("开始累计，如"),a("code",[s._v("01.文件夹")]),s._v("、"),a("code",[s._v("02.文件.md")]),s._v("，我们将会按照序号的顺序来决定其在侧边栏当中的顺序。")]),s._v(" "),a("li",[s._v("同一级别目录别内即使只有一个文件或文件夹也要为其加上序号。\n")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("序号只是用于决定先后顺序，并不一定需要连着，如"),a("code",[s._v("01、02、03...")]),s._v("，实际工作中可能会在两个文章中间插入一篇新的文章，因此为了方便可以采用间隔序号"),a("code",[s._v("10、20、30...")]),s._v("，后面如果需要在"),a("code",[s._v("10")]),s._v("和"),a("code",[s._v("20")]),s._v("中间插入一篇新文章，可以给定序号"),a("code",[s._v("15")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"级别说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#级别说明"}},[s._v("#")]),s._v(" 级别说明")]),s._v(" "),a("p",[s._v("源目录（一般是"),a("code",[s._v("docs")]),s._v("）底下的级别现在我们称之为"),a("code",[s._v("一级目录")]),s._v("，"),a("code",[s._v("一级目录")]),s._v("的下一级为"),a("code",[s._v("二级目录")]),s._v("，以此类推，最多只能到"),a("code",[s._v("四级目录")]),s._v("。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("一级目录")]),s._v(" "),a("ol",[a("li",[a("code",[s._v(".vuepress")]),s._v("、"),a("code",[s._v("@pages")]),s._v("、"),a("code",[s._v("_posts")]),s._v("、"),a("code",[s._v("index.md 或 README.md")]),s._v(" 这些文件(文件夹)不参与数据生成。")]),s._v(" "),a("li",[s._v("序号非必须。（如一些专栏，可以不用序号)")])])]),s._v(" "),a("li",[a("strong",[s._v("二级目录")]),s._v(" "),a("ol",[a("li",[s._v("该级别下可以同时放文件夹和"),a("code",[s._v(".md")]),s._v("文件，但是两者序号要连贯（参考下面的例子中的"),a("code",[s._v("其他")]),s._v("）。")]),s._v(" "),a("li",[s._v("必须有序号")])])]),s._v(" "),a("li",[a("strong",[s._v("三级目录")]),s._v(" "),a("ul",[a("li",[s._v("(同上)")])])]),s._v(" "),a("li",[a("strong",[s._v("四级目录")]),s._v(" "),a("Badge",{attrs:{text:"v1.6.0 +"}}),s._v(" "),a("ol",[a("li",[s._v("该级别下"),a("strong",[s._v("只能")]),s._v("放"),a("code",[s._v(".md")]),s._v("文件。")]),s._v(" "),a("li",[s._v("必须有序号")])])],1)]),s._v(" "),a("p",[s._v("所有级别内至少有一个文件或文件夹。")]),s._v(" "),a("h3",{attrs:{id:"目录结构例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构例子"}},[s._v("#")]),s._v(" 目录结构例子")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v(".\n├── docs\n│   │  (不参与数据生成)\n│   ├── .vuepress\n│   ├── @pages\n│   ├── _posts\n│   ├── index.md\n│   │\n│   │ (以下部分参与数据生成)\n│   ├── 《JavaScript教程》专栏 (一级目录)\n│   │   ├── 01.章节1 (二级目录)\n│   │   |   ├── 01.js1.md (三级目录-文件)\n│   │   |   ├── 02.js2.md\n│   │   |   └── 03.js3.md\n│   │   └── 02.章节2 (二级目录)\n│   │   |   ├── 01.jsa.md\n│   │   |   ├── 02.小节 (三级目录)\n│   │   |   |   └── 01.jsxx.md (四级目录-文件)\n│   ├── 01.前端\n│   │   ├── 01.JavaScript\n│   │   |   ├── 01.js1.md\n│   │   |   ├── 02.js2.md\n│   │   |   └── 03.js3.md\n│   │   └── 02.vue\n│   │   |   ├── 01.vue1.md\n│   │   |   └── 02.vue2.md\n│   ├── 02.其他\n│   │   ├── 01.学习\n│   │   |   ├── 01.xxa.md\n│   │   |   └── 02.xxb.md\n│   │   ├── 02.学习笔记\n│   │   |   ├── 01.xxa.md\n│   │   |   └── 02.xxb.md\n│   │   ├── 03.文件x.md\n│   │   └── 04.文件xx.md\n│   └── 03.关于我\n│   │   └── 01.关于我.md\n.   .\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h3",{attrs:{id:"如何知道侧边栏数据有没有正确生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何知道侧边栏数据有没有正确生成"}},[s._v("#")]),s._v(" 如何知道侧边栏数据有没有正确生成？")]),s._v(" "),a("p",[s._v("在运行开发服务时("),a("code",[s._v("npm run dev")]),s._v(")，在命令行查看打印记录，如果正确生成会有这样的"),a("code",[s._v("绿色")]),s._v("提示记录：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tip: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" sidebar data. 侧边栏数据添加成功。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果有未按约定的文件，会有"),a("code",[s._v("黄色")]),s._v("警告记录，如：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("warning:  该文件"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("序号出错，请填写正确的序号。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);