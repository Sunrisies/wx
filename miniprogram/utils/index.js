'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var config;
var hasRequiredConfig;

function requireConfig () {
	if (hasRequiredConfig) return config;
	hasRequiredConfig = 1;
	config = {
	    // LaTex公式、yuml解析服务架设参见 https://github.com/sbfkcel/markdown-server

	    // 数学公式解析API
	    latex:{
	        api:'http://towxml.vvadd.com/?tex'
	    },

	    // yuml图解析APPI
	    yuml:{
	        api:'http://towxml.vvadd.com/?yuml'
	    },

	    // markdown解析配置，保留需要的选项即可
	    markdown:[
	        'sub',                      // 下标支持
	        'sup',                      // 上标支持
	        'ins',                      // 文本删除线支持
	        'mark',                     // 文本高亮支持
	        'emoji',                    // emoji表情支持
	        'todo'                      // todo支持
	    ],

	    // 代码高亮配置，保留需要的选项即可（尽量越少越好，不要随意调整顺序。部分高亮有顺序依赖）
	    highlight:[
	        'c-like',
	        'c',
	        'bash',
	        'css',
	        'dart',
	        'go',
	        'java',
	        'javascript',
	        'json',
	        'less',
	        'scss',
	        'shell',
	        'xml',
	        'htmlbars',
	        'nginx',
	        'php',
	        'python',
	        'python-repl',
	        'typescript',
	        
	        // 'csharp',
	        // 'http',
	        // 'swift',
	        // 'yaml',
	        // 'markdown',
	        // 'powershell',
	        // 'ruby',
	        // 'makefile',
	        // 'lua',
	        // 'stylus',
	        // 'basic',
	        // '1c',
	        // 'abnf',
	        // 'accesslog',
	        // 'actionscript',
	        // 'ada',
	        // 'angelscript',
	        // 'apache',
	        // 'applescript',
	        // 'arcade',
	        // 'cpp',
	        // 'arduino',
	        // 'armasm',
	        // 'asciidoc',
	        // 'aspectj',
	        // 'autohotkey',
	        // 'autoit',
	        // 'avrasm',
	        // 'awk',
	        // 'axapta',
	        // 'bnf',
	        // 'brainfuck',
	        // 'cal',
	        // 'capnproto',
	        // 'ceylon',
	        // 'clean',
	        // 'clojure-repl',
	        // 'clojure',
	        // 'cmake',
	        // 'coffeescript',
	        // 'coq',
	        // 'cos',
	        // 'crmsh',
	        // 'crystal',
	        // 'csp',
	        // 'd',
	        // 'delphi',
	        // 'diff',
	        // 'django',
	        // 'dns',
	        // 'dockerfile',
	        // 'dos',
	        // 'dsconfig',
	        // 'dts',
	        // 'dust',
	        // 'ebnf',
	        // 'elixir',
	        // 'elm',
	        // 'erb',
	        // 'erlang-repl',
	        // 'erlang',
	        // 'excel',
	        // 'fix',
	        // 'flix',
	        // 'fortran',
	        // 'fsharp',
	        // 'gams',
	        // 'gauss',
	        // 'gcode',
	        // 'gherkin',
	        // 'glsl',
	        // 'gml',
	        // 'golo',
	        // 'gradle',
	        // 'groovy',
	        // 'haml',
	        // 'handlebars',
	        // 'haskell',
	        // 'haxe',
	        // 'hsp',
	        // 'hy',
	        // 'inform7',
	        // 'ini',
	        // 'irpf90',
	        // 'isbl',
	        // 'jboss-cli',
	        // 'julia-repl',
	        // 'julia',
	        // 'kotlin',
	        // 'lasso',
	        // 'latex',
	        // 'ldif',
	        // 'leaf',
	        // 'lisp',
	        // 'livecodeserver',
	        // 'livescript',
	        // 'llvm',
	        // 'lsl',
	        // 'mathematica',
	        // 'matlab',
	        // 'maxima',
	        // 'mel',
	        // 'mercury',
	        // 'mipsasm',
	        // 'mizar',
	        // 'mojolicious',
	        // 'monkey',
	        // 'moonscript',
	        // 'n1ql',
	        // 'nim',
	        // 'nix',
	        // 'nsis',
	        // 'objectivec',
	        // 'ocaml',
	        // 'openscad',
	        // 'oxygene',
	        // 'parser3',
	        // 'perl',
	        // 'pf',
	        // 'pgsql',
	        // 'php-template',
	        // 'plaintext',
	        // 'pony',
	        // 'processing',
	        // 'profile',
	        // 'prolog',
	        // 'properties',
	        // 'protobuf',
	        // 'puppet',
	        // 'purebasic',
	        // 'q',
	        // 'qml',
	        // 'r',
	        // 'reasonml',
	        // 'rib',
	        // 'roboconf',
	        // 'routeros',
	        // 'rsl',
	        // 'ruleslanguage',
	        // 'rust',
	        // 'sas',
	        // 'scala',
	        // 'scheme',
	        // 'scilab',
	        // 'smali',
	        // 'smalltalk',
	        // 'sml',
	        // 'sqf',
	        // 'sql',
	        // 'stan',
	        // 'stata',
	        // 'step21',
	        // 'subunit',
	        // 'taggerscript',
	        // 'tap',
	        // 'tcl',
	        // 'thrift',
	        // 'tp',
	        // 'twig',
	        // 'vala',
	        // 'vbnet',
	        // 'vbscript-html',
	        // 'vbscript',
	        // 'verilog',
	        // 'vhdl',
	        // 'vim',
	        // 'x86asm',
	        // 'xl',
	        // 'xquery',
	        // 'zephir'
	    ],

	    // wxml原生标签，该系列标签将不会被转换
	    wxml:[
	        'view',
	        'video',
	        'text',
	        'image',
	        'navigator',
	        'swiper',
	        'swiper-item',
	        'block',
	        'form',
	        'input',
	        'textarea',
	        'button',
	        'checkbox-group',
	        'checkbox',
	        'radio-group',
	        'radio',
	        'rich-text',

	        // 可以解析的标签（html或markdown中会很少使用）
	        // 'canvas',
	        // 'map',
	        // 'slider',
	        // 'scroll-view',
	        // 'movable-area',
	        // 'movable-view',
	        // 'progress',
	        // 'label',
	        // 'switch',
	        // 'picker',
	        // 'picker-view',
	        // 'switch',
	        // 'contact-button'
	    ],

	    // 自定义组件
	    components:[
	        'audio-player',             // 音频组件，建议保留，由于小程序原生audio存在诸多问题，towxml解决了原生音频播放器的相关问题
	        'echarts',                  // echarts图表支持
	        'latex',                    // 数学公式支持
	        'table',                    // 表格支持
	        'todogroup',                // todo支持
	        'yuml',                     // yuml图表支持
	        'img'                       // 图片解析组件
	    ],

	    // 保留原本的元素属性（建议不要变动）
	    attrs:[
	        'class',
	        'data',
	        'id',
	        'style'
	    ],

	    // 事件绑定方式（catch或bind），catch 会阻止事件向上冒泡。更多请参考：https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html
	    bindType:'catch',

	    // 需要激活的事件
	    events:[
	        // 'touchstart',
	        // 'touchmove',
	        // 'touchcancel',
	        // 'touchend',
	        'tap',                      // 用于元素的点击事件
	        'change',                   // 用于todoList的change事件
	    ],

	    // 图片倍数
	    dpr:1,

	    // 代码块显示行号
	    showLineNumber:true
	};
	return config;
}

var highlight_1;
var hasRequiredHighlight$1;

function requireHighlight$1 () {
	if (hasRequiredHighlight$1) return highlight_1;
	hasRequiredHighlight$1 = 1;
function deepFreeze(e){Object.freeze(e);var n="function"==typeof e;return Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!=typeof e[t]&&"function"!=typeof e[t]||n&&("caller"===t||"callee"===t||"arguments"===t)||Object.isFrozen(e[t])||deepFreeze(e[t]);}),e}function escapeHTML(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function inherit(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n];}),t}function tag(e){return e.nodeName.toLowerCase()}function nodeStream(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),tag(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n}function mergeStreams(e,n,t){var r=0,a="",i=[];function s(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){a+="<"+tag(e)+[].map.call(e.attributes,function(e){return " "+e.nodeName+'="'+escapeHTML(e.value).replace(/"/g,"&quot;")+'"'}).join("")+">";}function l(e){a+="</"+tag(e)+">";}function c(e){("start"===e.event?o:l)(e.node);}for(;e.length||n.length;){var u=s();if(a+=escapeHTML(t.substring(r,u[0].offset)),r=u[0].offset,u===e){i.reverse().forEach(l);do{c(u.splice(0,1)[0]),u=s();}while(u===e&&u.length&&u[0].offset===r);i.reverse().forEach(o);}else "start"===u[0].event?i.push(u[0].node):i.pop(),c(u.splice(0,1)[0]);}return a+escapeHTML(t.substr(r))}var utils=Object.freeze({__proto__:null,escapeHTML:escapeHTML,inherit:inherit,nodeStream:nodeStream,mergeStreams:mergeStreams});const SPAN_CLOSE="</span>",emitsWrappingTags=e=>!!e.kind;class HTMLRenderer{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this);}addText(e){this.buffer+=escapeHTML(e);}openNode(e){if(!emitsWrappingTags(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n);}closeNode(e){emitsWrappingTags(e)&&(this.buffer+=SPAN_CLOSE);}span(e){this.buffer+=`<span class="${e}">`;}value(){return this.buffer}}class TokenTree{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode];}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e);}openNode(e){let n={kind:e,children:[]};this.add(n),this.stack.push(n);}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return "string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){e.children&&(e.children.every(e=>"string"==typeof e)?(e.text=e.children.join(""),delete e.children):e.children.forEach(e=>{"string"!=typeof e&&TokenTree._collapse(e);}));}}class TokenTreeEmitter extends TokenTree{constructor(e){super(),this.options=e;}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode());}addText(e){""!==e&&this.add(e);}addSublanguage(e,n){let t=e.root;t.kind=n,t.sublanguage=true,this.add(t);}toHTML(){return new HTMLRenderer(this,this.options).value()}finalize(){}}function escape(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function source(e){return e&&e.source||e}function countMatchGroups(e){return new RegExp(e.toString()+"|").exec("").length-1}function startsWith(e,n){var t=e&&e.exec(n);return t&&0===t.index}function join(e,n){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,a="",i=0;i<e.length;i++){var s=r+=1,o=source(e[i]);for(i>0&&(a+=n),a+="(";o.length>0;){var l=t.exec(o);if(null==l){a+=o;break}a+=o.substring(0,l.index),o=o.substring(l.index+l[0].length),"\\"==l[0][0]&&l[1]?a+="\\"+String(Number(l[1])+s):(a+=l[0],"("==l[0]&&r++);}a+=")";}return a}const IDENT_RE="[a-zA-Z]\\w*",NUMBER_RE="\\b\\d+(\\.\\d+)?",C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[BACKSLASH_ESCAPE]},QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[BACKSLASH_ESCAPE]},PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT=function(e,n,t){var r=inherit({className:"comment",begin:e,end:n,contains:[]},t||{});return r.contains.push(PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},C_LINE_COMMENT_MODE=COMMENT("//","$"),C_BLOCK_COMMENT_MODE=COMMENT("/\\*","\\*/"),HASH_COMMENT_MODE=COMMENT("#","$"),NUMBER_MODE={className:"number",begin:NUMBER_RE,relevance:0},C_NUMBER_MODE={className:"number",begin:C_NUMBER_RE,relevance:0},BINARY_NUMBER_MODE={className:"number",begin:"\\b(0b[01]+)",relevance:0},CSS_NUMBER_MODE={className:"number",begin:NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE={begin:/(?=\/[^\/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[BACKSLASH_ESCAPE]}]}]},TITLE_MODE={className:"title",begin:IDENT_RE,relevance:0},UNDERSCORE_TITLE_MODE={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var MODES=Object.freeze({__proto__:null,IDENT_RE:IDENT_RE,UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:NUMBER_RE,C_NUMBER_RE:C_NUMBER_RE,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:RE_STARTERS_RE,BACKSLASH_ESCAPE:BACKSLASH_ESCAPE,APOS_STRING_MODE:APOS_STRING_MODE,QUOTE_STRING_MODE:QUOTE_STRING_MODE,PHRASAL_WORDS_MODE:PHRASAL_WORDS_MODE,COMMENT:COMMENT,C_LINE_COMMENT_MODE:C_LINE_COMMENT_MODE,C_BLOCK_COMMENT_MODE:C_BLOCK_COMMENT_MODE,HASH_COMMENT_MODE:HASH_COMMENT_MODE,NUMBER_MODE:NUMBER_MODE,C_NUMBER_MODE:C_NUMBER_MODE,BINARY_NUMBER_MODE:BINARY_NUMBER_MODE,CSS_NUMBER_MODE:CSS_NUMBER_MODE,REGEXP_MODE:REGEXP_MODE,TITLE_MODE:TITLE_MODE,UNDERSCORE_TITLE_MODE:UNDERSCORE_TITLE_MODE,METHOD_GUARD:METHOD_GUARD}),COMMON_KEYWORDS="of and for in not or if then".split(" ");function compileLanguage(e){function n(n,t){return new RegExp(source(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0;}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=countMatchGroups(e)+1;}compile(){0===this.regexes.length&&(this.exec=(()=>null));let e=this.regexes.map(e=>e[1]);this.matcherRe=n(join(e,"|"),true),this.lastIndex=0;}exec(e){this.matcherRe.lastIndex=this.lastIndex;let n=this.matcherRe.exec(e);if(!n)return null;let t=n.findIndex((e,n)=>n>0&&void 0!=e),r=this.matchIndexes[t];return Object.assign(n,r)}}class r{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0;}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];let n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}considerAll(){this.regexIndex=0;}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++;}exec(e){let n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&(this.regexIndex=0)),t}}function a(e){let n=e.input[e.index-1],t=e.input[e.index+e[0].length];if("."===n||"."===t)return {ignoreMatch:true}}if(e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");!function t(i,s){i.compiled||(i.compiled=true,i.__onBegin=null,i.keywords=i.keywords||i.beginKeywords,i.keywords&&(i.keywords=compileKeywords(i.keywords,e.case_insensitive)),i.lexemesRe=n(i.lexemes||/\w+/,true),s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?=\\b|\\s)",i.__onBegin=a),i.begin||(i.begin=/\B|\b/),i.beginRe=n(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=n(i.end)),i.terminator_end=source(i.end)||"",i.endsWithParent&&s.terminator_end&&(i.terminator_end+=(i.end?"|":"")+s.terminator_end)),i.illegal&&(i.illegalRe=n(i.illegal)),null==i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(e){return expand_or_clone_mode("self"===e?i:e)})),i.contains.forEach(function(e){t(e,i);}),i.starts&&t(i.starts,s),i.matcher=function(e){let n=new r;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminator_end&&n.addRule(e.terminator_end,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(i));}(e);}function dependencyOnParent(e){return !!e&&(e.endsWithParent||dependencyOnParent(e.starts))}function expand_or_clone_mode(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return inherit(e,{variants:null},n)})),e.cached_variants?e.cached_variants:dependencyOnParent(e)?inherit(e,{starts:e.starts?inherit(e.starts):null}):Object.isFrozen(e)?inherit(e):e}function compileKeywords(e,n){var t={};return "string"==typeof e?r("keyword",e):Object.keys(e).forEach(function(n){r(n,e[n]);}),t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach(function(n){var r=n.split("|");t[r[0]]=[e,scoreForKeyword(r[0],r[1])];});}}function scoreForKeyword(e,n){return n?Number(n):commonKeyword(e)?0:1}function commonKeyword(e){return COMMON_KEYWORDS.includes(e.toLowerCase())}var version="10.0.0-beta.0";const escape$1=escapeHTML,inherit$1=inherit,{nodeStream:nodeStream$1,mergeStreams:mergeStreams$1}=utils,HLJS=function(e){var n=[],t={},r={},a=[],i=true,s=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,o="Could not find the language '{}', did you forget to load/include a language module?",l={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:false,languages:void 0,__emitter:TokenTreeEmitter};function c(e){return l.noHighlightRe.test(e)}function u(e,n,t,r){var a={code:n,language:e};R("before:highlight",a);var i=a.result?a.result:d(a.language,a.code,t,r);return i.code=a.code,R("after:highlight",i),i}function d(e,n,r,a){var s=n;function c(e,n){var t=R.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function u(){null!=b.subLanguage?function(){if(""!==S){var e="string"==typeof b.subLanguage;if(!e||t[b.subLanguage]){var n=e?d(b.subLanguage,S,true,v[b.subLanguage]):g(S,b.subLanguage.length?b.subLanguage:void 0);b.relevance>0&&(T+=n.relevance),e&&(v[b.subLanguage]=n.top),N.addSublanguage(n.emitter,n.language);}else N.addText(S);}}():function(){var e,n,t,r;if(b.keywords){for(n=0,b.lexemesRe.lastIndex=0,t=b.lexemesRe.exec(S),r="";t;){r+=S.substring(n,t.index);var a=null;(e=c(b,t))?(N.addText(r),r="",T+=e[1],a=e[0],N.addKeyword(t[0],a)):r+=t[0],n=b.lexemesRe.lastIndex,t=b.lexemesRe.exec(S);}r+=S.substr(n),N.addText(r);}else N.addText(S);}(),S="";}function h(e){e.className&&N.openNode(e.className),b=Object.create(e,{parent:{value:b}});}function f(e){var n=e[0],t=e.rule;if(t.__onBegin){if((t.__onBegin(e)||{}).ignoreMatch)return function(e){return 0===b.matcher.regexIndex?(S+=e[0],1):(w=true,0)}(n)}return t&&t.endSameAsBegin&&(t.endRe=escape(n)),t.skip?S+=n:(t.excludeBegin&&(S+=n),u(),t.returnBegin||t.excludeBegin||(S=n)),h(t),t.returnBegin?0:n.length}function E(e){var n=e[0],t=s.substr(e.index),r=function e(n,t){if(startsWith(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(b,t);if(r){var a=b;a.skip?S+=n:(a.returnEnd||a.excludeEnd||(S+=n),u(),a.excludeEnd&&(S=n));do{b.className&&N.closeNode(),b.skip||b.subLanguage||(T+=b.relevance),b=b.parent;}while(b!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),h(r.starts)),a.returnEnd?0:n.length}}var _={};function m(n,t){var a,o=t&&t[0];if(S+=n,null==o)return u(),0;if("begin"==_.type&&"end"==t.type&&_.index==t.index&&""===o){if(S+=s.slice(t.index,t.index+1),!i)throw (a=new Error("0 width match regex")).languageName=e,a.badRule=_.rule,a;return 1}if(_=t,"begin"===t.type)return f(t);if("illegal"===t.type&&!r)throw (a=new Error('Illegal lexeme "'+o+'" for mode "'+(b.className||"<unnamed>")+'"')).mode=b,a;if("end"===t.type){var l=E(t);if(void 0!=l)return l}return S+=o,o.length}var R=p(e);if(!R)throw console.error(o.replace("{}",e)),new Error('Unknown language: "'+e+'"');compileLanguage(R);var M,b=a||R,v={},N=new l.__emitter(l);!function(){for(var e=[],n=b;n!==R;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>N.openNode(e));}();var O,x,S="",T=0,D=0;try{var w=!1;for(b.matcher.considerAll();w?w=!1:(b.matcher.lastIndex=D,b.matcher.considerAll()),O=b.matcher.exec(s);){x=m(s.substring(D,O.index),O),D=O.index+x;}return m(s.substr(D)),N.closeAllNodes(),N.finalize(),M=N.toHTML(),{relevance:T,value:M,language:e,illegal:!1,emitter:N,top:b}}catch(n){if(n.message&&n.message.includes("Illegal"))return {illegal:true,illegalBy:{msg:n.message,context:s.slice(D-100,D+100),mode:n.mode},sofar:M,relevance:0,value:escape$1(s),emitter:N};if(i)return {relevance:0,value:escape$1(s),emitter:N,language:e,top:b,errorRaised:n};throw n}}function g(e,n){n=n||l.languages||Object.keys(t);var r={relevance:0,emitter:new l.__emitter(l),value:escape$1(e)},a=r;return n.filter(p).filter(m).forEach(function(n){var t=d(n,e,false);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>r.relevance&&(a=r,r=t);}),a.language&&(r.second_best=a),r}function h(e){return l.tabReplace||l.useBR?e.replace(s,function(e,n){return l.useBR&&"\n"===e?"<br>":l.tabReplace?n.replace(/\t/g,l.tabReplace):""}):e}function f(e){var n,t,a,i,s,d=function(e){var n,t=e.className+" ";if(t+=e.parentNode?e.parentNode.className:"",n=l.languageDetectRe.exec(t)){var r=p(n[1]);return r||(console.warn(o.replace("{}",n[1])),console.warn("Falling back to no-highlight mode for this block.",e)),r?n[1]:"no-highlight"}return t.split(/\s+/).find(e=>c(e)||p(e))}(e);c(d)||(R("before:highlightBlock",{block:e,language:d}),l.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,s=n.textContent,a=d?u(d,s,true):g(s),(t=nodeStream$1(n)).length&&((i=document.createElement("div")).innerHTML=a.value,a.value=mergeStreams$1(t,nodeStream$1(i),s)),a.value=h(a.value),R("after:highlightBlock",{block:e,result:a}),e.innerHTML=a.value,e.className=function(e,n,t){var a=n?r[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),e.includes(a)||i.push(a),i.join(" ").trim()}(e.className,d,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}));}function E(){if(!E.called){E.called=true;var e=document.querySelectorAll("pre code");n.forEach.call(e,f);}}var _={disableAutodetect:true};function p(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function m(e){var n=p(e);return n&&!n.disableAutodetect}function R(e,n){var t=e;a.forEach(function(e){e[t]&&e[t](n);});}Object.assign(e,{highlight:u,highlightAuto:g,fixMarkup:h,highlightBlock:f,configure:function(e){l=inherit$1(l,e);},initHighlighting:E,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",E,false);},registerLanguage:function(n,a){var s;try{s=a(e);}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!i)throw e;console.error(e),s=_;}s.name||(s.name=n),t[n]=s,s.rawDefinition=a.bind(null,e),s.aliases&&s.aliases.forEach(function(e){r[e]=n;});},listLanguages:function(){return Object.keys(t)},getLanguage:p,requireLanguage:function(e){var n=p(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:m,inherit:inherit$1,addPlugin:function(e,n){a.push(e);}}),e.debugMode=function(){i=false;},e.safeMode=function(){i=true;},e.versionString=version;for(const e in MODES)"object"==typeof MODES[e]&&deepFreeze(MODES[e]);return Object.assign(e,MODES),e};var highlight=HLJS({});highlight_1=highlight;
	return highlight_1;
}

var highlight;
var hasRequiredHighlight;

function requireHighlight () {
	if (hasRequiredHighlight) return highlight;
	hasRequiredHighlight = 1;
	requireConfig();
	    const hljs = requireHighlight$1();
	// config.highlight.forEach(item => {
	//     hljs.registerLanguage(item, require(`./languages/${item}`).default);
	// });
	//@registerLanguage

	highlight = hljs;
	return highlight;
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var markdown$1 = {exports: {}};

var hasRequiredMarkdown$1;

function requireMarkdown$1 () {
	if (hasRequiredMarkdown$1) return markdown$1.exports;
	hasRequiredMarkdown$1 = 1;
	(function (module, exports) {
		!function(e){module.exports=e();}(function(){return function e(r,t,n){function s(i,a){if(!t[i]){if(!r[i]){var c="function"==typeof commonjsRequire&&commonjsRequire;if(!a&&c)return c(i,true);if(o)return o(i,true);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[i]={exports:{}};r[i][0].call(u.exports,function(e){var t=r[i][1][e];return s(t?t:e)},u,u.exports,e,r,t,n);}return t[i].exports}for(var o="function"==typeof commonjsRequire&&commonjsRequire,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,r,t){r.exports=e("entities/maps/entities.json");},{"entities/maps/entities.json":52}],2:[function(e,r,t){r.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"];},{}],3:[function(e,r,t){var n="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",s="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",o=new RegExp("^(?:"+n+"|"+s+"|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),i=new RegExp("^(?:"+n+"|"+s+")");r.exports.HTML_TAG_RE=o,r.exports.HTML_OPEN_CLOSE_TAG_RE=i;},{}],4:[function(e,r,t){function n(e){return Object.prototype.toString.call(e)}function s(e){return "[object String]"===n(e)}function o(e,r){return y.call(e,r)}function i(e){return Array.prototype.slice.call(arguments,1).forEach(function(r){if(r){if("object"!=typeof r)throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){e[t]=r[t];});}}),e}function a(e,r,t){return [].concat(e.slice(0,r),t,e.slice(r+1))}function c(e){return !(e>=55296&&e<=57343)&&(!(e>=64976&&e<=65007)&&(65535!=(65535&e)&&65534!=(65535&e)&&(!(e>=0&&e<=8)&&(11!==e&&(!(e>=14&&e<=31)&&(!(e>=127&&e<=159)&&!(e>1114111)))))))}function l(e){if(e>65535){e-=65536;var r=55296+(e>>10),t=56320+(1023&e);return String.fromCharCode(r,t)}return String.fromCharCode(e)}function u(e,r){var t=0;return o(w,r)?w[r]:35===r.charCodeAt(0)&&A.test(r)&&(t="x"===r[1].toLowerCase()?parseInt(r.slice(2),16):parseInt(r.slice(1),10),c(t))?l(t):e}function p(e){return e.indexOf("\\")<0?e:e.replace(x,"$1")}function h(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(C,function(e,r,t){return r?r:u(e,t)})}function f(e){return q[e]}function d(e){return D.test(e)?e.replace(/[&<>"]/g,f):e}function m(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function _(e){switch(e){case 9:case 32:return  true}return  false}function g(e){if(e>=8192&&e<=8202)return  true;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return  true}return  false}function b(e){return E.test(e)}function k(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return  true;default:return  false}}function v(e){return e.trim().replace(/\s+/g," ").toUpperCase()}var y=Object.prototype.hasOwnProperty,x=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,C=new RegExp(x.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),A=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,w=e("./entities"),D=/[&<>"]/,q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},E=e("uc.micro/categories/P/regex");t.lib={},t.lib.mdurl=e("mdurl"),t.lib.ucmicro=e("uc.micro"),t.assign=i,t.isString=s,t.has=o,t.unescapeMd=p,t.unescapeAll=h,t.isValidEntityCode=c,t.fromCodePoint=l,t.escapeHtml=d,t.arrayReplaceAt=a,t.isSpace=_,t.isWhiteSpace=g,t.isMdAsciiPunct=k,t.isPunctChar=b,t.escapeRE=m,t.normalizeReference=v;},{"./entities":1,mdurl:58,"uc.micro":65,"uc.micro/categories/P/regex":63}],5:[function(e,r,t){t.parseLinkLabel=e("./parse_link_label"),t.parseLinkDestination=e("./parse_link_destination"),t.parseLinkTitle=e("./parse_link_title");},{"./parse_link_destination":6,"./parse_link_label":7,"./parse_link_title":8}],6:[function(e,r,t){var n=e("../common/utils").isSpace,s=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var o,i,a=r,c={ok:false,pos:0,lines:0,str:""};if(60===e.charCodeAt(r)){for(r++;r<t;){if(10===(o=e.charCodeAt(r))||n(o))return c;if(62===o)return c.pos=r+1,c.str=s(e.slice(a+1,r)),c.ok=true,c;92===o&&r+1<t?r+=2:r++;}return c}for(i=0;r<t&&32!==(o=e.charCodeAt(r))&&!(o<32||127===o);)if(92===o&&r+1<t)r+=2;else {if(40===o&&++i>1)break;if(41===o&&--i<0)break;r++;}return a===r?c:(c.str=s(e.slice(a,r)),c.lines=0,c.pos=r,c.ok=true,c)};},{"../common/utils":4}],7:[function(e,r,t){r.exports=function(e,r,t){var n,s,o,i,a=-1,c=e.posMax,l=e.pos;for(e.pos=r+1,n=1;e.pos<c;){if(93===(o=e.src.charCodeAt(e.pos))&&0===--n){s=true;break}if(i=e.pos,e.md.inline.skipToken(e),91===o)if(i===e.pos-1)n++;else if(t)return e.pos=l,-1}return s&&(a=e.pos),e.pos=l,a};},{}],8:[function(e,r,t){var n=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var s,o,i=0,a=r,c={ok:false,pos:0,lines:0,str:""};if(r>=t)return c;if(34!==(o=e.charCodeAt(r))&&39!==o&&40!==o)return c;for(r++,40===o&&(o=41);r<t;){if((s=e.charCodeAt(r))===o)return c.pos=r+1,c.lines=i,c.str=n(e.slice(a+1,r)),c.ok=true,c;10===s?i++:92===s&&r+1<t&&(r++,10===e.charCodeAt(r)&&i++),r++;}return c};},{"../common/utils":4}],9:[function(e,r,t){function n(e){var r=e.trim().toLowerCase();return !g.test(r)||!!b.test(r)}function s(e){var r=d.parse(e,true);if(r.hostname&&(!r.protocol||k.indexOf(r.protocol)>=0))try{r.hostname=m.toASCII(r.hostname);}catch(e){}return d.encode(d.format(r))}function o(e){var r=d.parse(e,true);if(r.hostname&&(!r.protocol||k.indexOf(r.protocol)>=0))try{r.hostname=m.toUnicode(r.hostname);}catch(e){}return d.decode(d.format(r))}function i(e,r){if(!(this instanceof i))return new i(e,r);r||a.isString(e)||(r=e||{},e="default"),this.inline=new h,this.block=new p,this.core=new u,this.renderer=new l,this.linkify=new f,this.validateLink=n,this.normalizeLink=s,this.normalizeLinkText=o,this.utils=a,this.helpers=a.assign({},c),this.options={},this.configure(e),r&&this.set(r);}var a=e("./common/utils"),c=e("./helpers"),l=e("./renderer"),u=e("./parser_core"),p=e("./parser_block"),h=e("./parser_inline"),f=e("linkify-it"),d=e("mdurl"),m=e("punycode"),_={default:e("./presets/default"),zero:e("./presets/zero"),commonmark:e("./presets/commonmark")},g=/^(vbscript|javascript|file|data):/,b=/^data:image\/(gif|png|jpeg|webp);/,k=["http:","https:","mailto:"];i.prototype.set=function(e){return a.assign(this.options,e),this},i.prototype.configure=function(e){var r,t=this;if(a.isString(e)&&(r=e,!(e=_[r])))throw new Error('Wrong `markdown-it` preset "'+r+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&t[r].ruler2.enableOnly(e.components[r].rules2);}),this},i.prototype.enable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,true));},this),t=t.concat(this.inline.ruler2.enable(e,true));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},i.prototype.disable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,true));},this),t=t.concat(this.inline.ruler2.disable(e,true));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},i.prototype.use=function(e){var r=[this].concat(Array.prototype.slice.call(arguments,1));if(e&&e.apply){return e.apply(e,r),this}},i.prototype.parse=function(e,r){if("string"!=typeof e)throw new Error("Input data should be a String");var t=new this.core.State(e,this,r);return this.core.process(t),t.tokens},i.prototype.render=function(e,r){return r=r||{},this.renderer.render(this.parse(e,r),this.options,r)},i.prototype.parseInline=function(e,r){var t=new this.core.State(e,this,r);return t.inlineMode=true,this.core.process(t),t.tokens},i.prototype.renderInline=function(e,r){return r=r||{},this.renderer.render(this.parseInline(e,r),this.options,r)},r.exports=i;},{"./common/utils":4,"./helpers":5,"./parser_block":10,"./parser_core":11,"./parser_inline":12,"./presets/commonmark":13,"./presets/default":14,"./presets/zero":15,"./renderer":16,"linkify-it":53,mdurl:58,punycode:60}],10:[function(e,r,t){function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()});}var s=e("./ruler"),o=[["table",e("./rules_block/table"),["paragraph","reference"]],["code",e("./rules_block/code")],["fence",e("./rules_block/fence"),["paragraph","reference","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","reference","list"]],["hr",e("./rules_block/hr"),["paragraph","reference","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","reference","blockquote"]],["reference",e("./rules_block/reference")],["heading",e("./rules_block/heading"),["paragraph","reference","blockquote"]],["lheading",e("./rules_block/lheading")],["html_block",e("./rules_block/html_block"),["paragraph","reference","blockquote"]],["paragraph",e("./rules_block/paragraph")]];n.prototype.tokenize=function(e,r,t){for(var n,s=this.ruler.getRules(""),o=s.length,i=r,a=false,c=e.md.options.maxNesting;i<t&&(e.line=i=e.skipEmptyLines(i),!(i>=t))&&!(e.sCount[i]<e.blkIndent);){if(e.level>=c){e.line=t;break}for(n=0;n<o&&!s[n](e,i,t,false);n++);e.tight=!a,e.isEmpty(e.line-1)&&(a=true),(i=e.line)<t&&e.isEmpty(i)&&(a=true,i++,e.line=i);}},n.prototype.parse=function(e,r,t,n){var s;e&&(s=new this.State(e,r,t,n),this.tokenize(s,s.line,s.lineMax));},n.prototype.State=e("./rules_block/state_block"),r.exports=n;},{"./ruler":17,"./rules_block/blockquote":18,"./rules_block/code":19,"./rules_block/fence":20,"./rules_block/heading":21,"./rules_block/hr":22,"./rules_block/html_block":23,"./rules_block/lheading":24,"./rules_block/list":25,"./rules_block/paragraph":26,"./rules_block/reference":27,"./rules_block/state_block":28,"./rules_block/table":29}],11:[function(e,r,t){function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1]);}var s=e("./ruler"),o=[["normalize",e("./rules_core/normalize")],["block",e("./rules_core/block")],["inline",e("./rules_core/inline")],["linkify",e("./rules_core/linkify")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")]];n.prototype.process=function(e){var r,t,n;for(n=this.ruler.getRules(""),r=0,t=n.length;r<t;r++)n[r](e);},n.prototype.State=e("./rules_core/state_core"),r.exports=n;},{"./ruler":17,"./rules_core/block":30,"./rules_core/inline":31,"./rules_core/linkify":32,"./rules_core/normalize":33,"./rules_core/replacements":34,"./rules_core/smartquotes":35,"./rules_core/state_core":36}],12:[function(e,r,t){function n(){var e;for(this.ruler=new s,e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1]);for(this.ruler2=new s,e=0;e<i.length;e++)this.ruler2.push(i[e][0],i[e][1]);}var s=e("./ruler"),o=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["strikethrough",e("./rules_inline/strikethrough").tokenize],["emphasis",e("./rules_inline/emphasis").tokenize],["link",e("./rules_inline/link")],["image",e("./rules_inline/image")],["autolink",e("./rules_inline/autolink")],["html_inline",e("./rules_inline/html_inline")],["entity",e("./rules_inline/entity")]],i=[["balance_pairs",e("./rules_inline/balance_pairs")],["strikethrough",e("./rules_inline/strikethrough").postProcess],["emphasis",e("./rules_inline/emphasis").postProcess],["text_collapse",e("./rules_inline/text_collapse")]];n.prototype.skipToken=function(e){var r,t,n=e.pos,s=this.ruler.getRules(""),o=s.length,i=e.md.options.maxNesting,a=e.cache;if(void 0!==a[n])return void(e.pos=a[n]);if(e.level<i)for(t=0;t<o&&(e.level++,r=s[t](e,true),e.level--,!r);t++);else e.pos=e.posMax;r||e.pos++,a[n]=e.pos;},n.prototype.tokenize=function(e){for(var r,t,n=this.ruler.getRules(""),s=n.length,o=e.posMax,i=e.md.options.maxNesting;e.pos<o;){if(e.level<i)for(t=0;t<s&&!(r=n[t](e,false));t++);if(r){if(e.pos>=o)break}else e.pending+=e.src[e.pos++];}e.pending&&e.pushPending();},n.prototype.parse=function(e,r,t,n){var s,o,i,a=new this.State(e,r,t,n);for(this.tokenize(a),o=this.ruler2.getRules(""),i=o.length,s=0;s<i;s++)o[s](a);},n.prototype.State=e("./rules_inline/state_inline"),r.exports=n;},{"./ruler":17,"./rules_inline/autolink":37,"./rules_inline/backticks":38,"./rules_inline/balance_pairs":39,"./rules_inline/emphasis":40,"./rules_inline/entity":41,"./rules_inline/escape":42,"./rules_inline/html_inline":43,"./rules_inline/image":44,"./rules_inline/link":45,"./rules_inline/newline":46,"./rules_inline/state_inline":47,"./rules_inline/strikethrough":48,"./rules_inline/text":49,"./rules_inline/text_collapse":50}],13:[function(e,r,t){r.exports={options:{html:true,xhtmlOut:true,breaks:false,langPrefix:"language-",linkify:false,typographer:false,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}};},{}],14:[function(e,r,t){r.exports={options:{html:false,xhtmlOut:false,breaks:false,langPrefix:"language-",linkify:false,typographer:false,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}};},{}],15:[function(e,r,t){r.exports={options:{html:false,xhtmlOut:false,breaks:false,langPrefix:"language-",linkify:false,typographer:false,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}};},{}],16:[function(e,r,t){function n(){this.rules=s({},a);}var s=e("./common/utils").assign,o=e("./common/utils").unescapeAll,i=e("./common/utils").escapeHtml,a={};a.code_inline=function(e,r,t,n,s){var o=e[r];return "<code"+s.renderAttrs(o)+">"+i(e[r].content)+"</code>"},a.code_block=function(e,r,t,n,s){var o=e[r];return "<pre"+s.renderAttrs(o)+"><code>"+i(e[r].content)+"</code></pre>\n"},a.fence=function(e,r,t,n,s){var a,c,l,u,p=e[r],h=p.info?o(p.info).trim():"",f="";return h&&(f=h.split(/\s+/g)[0]),a=t.highlight?t.highlight(p.content,f)||i(p.content):i(p.content),0===a.indexOf("<pre")?a+"\n":h?(c=p.attrIndex("class"),l=p.attrs?p.attrs.slice():[],c<0?l.push(["class",t.langPrefix+f]):l[c][1]+=" "+t.langPrefix+f,u={attrs:l},"<pre><code"+s.renderAttrs(u)+">"+a+"</code></pre>\n"):"<pre><code"+s.renderAttrs(p)+">"+a+"</code></pre>\n"},a.image=function(e,r,t,n,s){var o=e[r];return o.attrs[o.attrIndex("alt")][1]=s.renderInlineAsText(o.children,t,n),s.renderToken(e,r,t)},a.hardbreak=function(e,r,t){return t.xhtmlOut?"<br />\n":"<br>\n"},a.softbreak=function(e,r,t){return t.breaks?t.xhtmlOut?"<br />\n":"<br>\n":"\n"},a.text=function(e,r){return i(e[r].content)},a.html_block=function(e,r){return e[r].content},a.html_inline=function(e,r){return e[r].content},n.prototype.renderAttrs=function(e){var r,t,n;if(!e.attrs)return "";for(n="",r=0,t=e.attrs.length;r<t;r++)n+=" "+i(e.attrs[r][0])+'="'+i(e.attrs[r][1])+'"';return n},n.prototype.renderToken=function(e,r,t){var n,s="",o=false,i=e[r];return i.hidden?"":(i.block&&i.nesting!==-1&&r&&e[r-1].hidden&&(s+="\n"),s+=(i.nesting===-1?"</":"<")+i.tag,s+=this.renderAttrs(i),0===i.nesting&&t.xhtmlOut&&(s+=" /"),i.block&&(o=true,1===i.nesting&&r+1<e.length&&(n=e[r+1],"inline"===n.type||n.hidden?o=false:n.nesting===-1&&n.tag===i.tag&&(o=false))),s+=o?">\n":">")},n.prototype.renderInline=function(e,r,t){for(var n,s="",o=this.rules,i=0,a=e.length;i<a;i++)n=e[i].type,s+=void 0!==o[n]?o[n](e,i,r,t,this):this.renderToken(e,i,r);return s},n.prototype.renderInlineAsText=function(e,r,t){for(var n="",s=0,o=e.length;s<o;s++)"text"===e[s].type?n+=e[s].content:"image"===e[s].type&&(n+=this.renderInlineAsText(e[s].children,r,t));return n},n.prototype.render=function(e,r,t){var n,s,o,i="",a=this.rules;for(n=0,s=e.length;n<s;n++)o=e[n].type,i+="inline"===o?this.renderInline(e[n].children,r,t):void 0!==a[o]?a[e[n].type](e,n,r,t,this):this.renderToken(e,n,r,t);return i},r.exports=n;},{"./common/utils":4}],17:[function(e,r,t){function n(){this.__rules__=[],this.__cache__=null;}n.prototype.__find__=function(e){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===e)return r;return  -1},n.prototype.__compile__=function(){var e=this,r=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){r.indexOf(e)<0&&r.push(e);});}),e.__cache__={},r.forEach(function(r){e.__cache__[r]=[],e.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||e.__cache__[r].push(t.fn));});});},n.prototype.at=function(e,r,t){var n=this.__find__(e),s=t||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=r,this.__rules__[n].alt=s.alt||[],this.__cache__=null;},n.prototype.before=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(s===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:r,enabled:true,fn:t,alt:o.alt||[]}),this.__cache__=null;},n.prototype.after=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(s===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:r,enabled:true,fn:t,alt:o.alt||[]}),this.__cache__=null;},n.prototype.push=function(e,r,t){var n=t||{};this.__rules__.push({name:e,enabled:true,fn:r,alt:n.alt||[]}),this.__cache__=null;},n.prototype.enable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=true,t.push(e);},this),this.__cache__=null,t},n.prototype.enableOnly=function(e,r){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=false;}),this.enable(e,r);},n.prototype.disable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(n<0){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=false,t.push(e);},this),this.__cache__=null,t},n.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},r.exports=n;},{}],18:[function(e,r,t){var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,y,x,C,A,w=e.lineMax,D=e.bMarks[r]+e.tShift[r],q=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return  false;if(62!==e.src.charCodeAt(D++))return  false;if(s)return  true;for(c=d=e.sCount[r]+D-(e.bMarks[r]+e.tShift[r]),32===e.src.charCodeAt(D)?(D++,c++,d++,o=false,y=true):9===e.src.charCodeAt(D)?(y=true,(e.bsCount[r]+d)%4==3?(D++,c++,d++,o=false):o=true):y=false,m=[e.bMarks[r]],e.bMarks[r]=D;D<q&&(i=e.src.charCodeAt(D),n(i));)9===i?d+=4-(d+e.bsCount[r]+(o?1:0))%4:d++,D++;for(_=[e.bsCount[r]],e.bsCount[r]=e.sCount[r]+1+(y?1:0),p=D>=q,k=[e.sCount[r]],e.sCount[r]=d-c,v=[e.tShift[r]],e.tShift[r]=D-e.bMarks[r],C=e.md.block.ruler.getRules("blockquote"),b=e.parentType,e.parentType="blockquote",f=r+1;f<t&&(l=e.sCount[f]<e.blkIndent,D=e.bMarks[f]+e.tShift[f],q=e.eMarks[f],!(D>=q));f++)if(62!==e.src.charCodeAt(D++)||l){if(p)break;for(x=false,a=0,u=C.length;a<u;a++)if(C[a](e,f,t,true)){x=true;break}if(x){e.lineMax=f,0!==e.blkIndent&&(m.push(e.bMarks[f]),_.push(e.bsCount[f]),v.push(e.tShift[f]),k.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}if(l)break;m.push(e.bMarks[f]),_.push(e.bsCount[f]),v.push(e.tShift[f]),k.push(e.sCount[f]),e.sCount[f]=-1;}else {for(c=d=e.sCount[f]+D-(e.bMarks[f]+e.tShift[f]),32===e.src.charCodeAt(D)?(D++,c++,d++,o=false,y=true):9===e.src.charCodeAt(D)?(y=true,(e.bsCount[f]+d)%4==3?(D++,c++,d++,o=false):o=true):y=false,m.push(e.bMarks[f]),e.bMarks[f]=D;D<q&&(i=e.src.charCodeAt(D),n(i));)9===i?d+=4-(d+e.bsCount[f]+(o?1:0))%4:d++,D++;p=D>=q,_.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+(y?1:0),k.push(e.sCount[f]),e.sCount[f]=d-c,v.push(e.tShift[f]),e.tShift[f]=D-e.bMarks[f];}for(g=e.blkIndent,e.blkIndent=0,A=e.push("blockquote_open","blockquote",1),A.markup=">",A.map=h=[r,0],e.md.block.tokenize(e,r,f),A=e.push("blockquote_close","blockquote",-1),A.markup=">",e.lineMax=w,e.parentType=b,h[1]=e.line,a=0;a<v.length;a++)e.bMarks[a+r]=m[a],e.tShift[a+r]=v[a],e.sCount[a+r]=k[a],e.bsCount[a+r]=_[a];return e.blkIndent=g,true};},{"../common/utils":4}],19:[function(e,r,t){r.exports=function(e,r,t){var n,s,o;if(e.sCount[r]-e.blkIndent<4)return  false;for(s=n=r+1;n<t;)if(e.isEmpty(n))n++;else {if(!(e.sCount[n]-e.blkIndent>=4))break;n++,s=n;}return e.line=s,o=e.push("code_block","code",0),o.content=e.getLines(r,s,4+e.blkIndent,true),o.map=[r,e.line],true};},{}],20:[function(e,r,t){r.exports=function(e,r,t,n){var s,o,i,a,c,l,u,p=false,h=e.bMarks[r]+e.tShift[r],f=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return  false;if(h+3>f)return  false;if(126!==(s=e.src.charCodeAt(h))&&96!==s)return  false;if(c=h,h=e.skipChars(h,s),(o=h-c)<3)return  false;if(u=e.src.slice(c,h),i=e.src.slice(h,f),i.indexOf(String.fromCharCode(s))>=0)return  false;if(n)return  true;for(a=r;!(++a>=t)&&(h=c=e.bMarks[a]+e.tShift[a],f=e.eMarks[a],!(h<f&&e.sCount[a]<e.blkIndent));)if(e.src.charCodeAt(h)===s&&!(e.sCount[a]-e.blkIndent>=4||(h=e.skipChars(h,s))-c<o||(h=e.skipSpaces(h))<f)){p=true;break}return o=e.sCount[r],e.line=a+(p?1:0),l=e.push("fence","code",0),l.info=i,l.content=e.getLines(r+1,a,o,true),l.markup=u,l.map=[r,e.line],true};},{}],21:[function(e,r,t){var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return  false;if(35!==(o=e.src.charCodeAt(l))||l>=u)return  false;for(i=1,o=e.src.charCodeAt(++l);35===o&&l<u&&i<=6;)i++,o=e.src.charCodeAt(++l);return !(i>6||l<u&&!n(o))&&(!!s||(u=e.skipSpacesBack(u,l),a=e.skipCharsBack(u,35,l),a>l&&n(e.src.charCodeAt(a-1))&&(u=a),e.line=r+1,c=e.push("heading_open","h"+String(i),1),c.markup="########".slice(0,i),c.map=[r,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[r,e.line],c.children=[],c=e.push("heading_close","h"+String(i),-1),c.markup="########".slice(0,i),true))};},{"../common/utils":4}],22:[function(e,r,t){var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return  false;if(42!==(o=e.src.charCodeAt(l++))&&45!==o&&95!==o)return  false;for(i=1;l<u;){if((a=e.src.charCodeAt(l++))!==o&&!n(a))return  false;a===o&&i++;}return !(i<3)&&(!!s||(e.line=r+1,c=e.push("hr","hr",0),c.map=[r,e.line],c.markup=Array(i+1).join(String.fromCharCode(o)),true))};},{"../common/utils":4}],23:[function(e,r,t){var n=e("../common/html_blocks"),s=e("../common/html_re").HTML_OPEN_CLOSE_TAG_RE,o=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,true],[/^<!--/,/-->/,true],[/^<\?/,/\?>/,true],[/^<![A-Z]/,/>/,true],[/^<!\[CDATA\[/,/\]\]>/,true],[new RegExp("^</?("+n.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,true],[new RegExp(s.source+"\\s*$"),/^$/,false]];r.exports=function(e,r,t,n){var s,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(e.sCount[r]-e.blkIndent>=4)return  false;if(!e.md.options.html)return  false;if(60!==e.src.charCodeAt(l))return  false;for(c=e.src.slice(l,u),s=0;s<o.length&&!o[s][0].test(c);s++);if(s===o.length)return  false;if(n)return o[s][2];if(i=r+1,!o[s][1].test(c))for(;i<t&&!(e.sCount[i]<e.blkIndent);i++)if(l=e.bMarks[i]+e.tShift[i],u=e.eMarks[i],c=e.src.slice(l,u),o[s][1].test(c)){0!==c.length&&i++;break}return e.line=i,a=e.push("html_block","",0),a.map=[r,i],a.content=e.getLines(r,i,e.blkIndent,true),true};},{"../common/html_blocks":2,"../common/html_re":3}],24:[function(e,r,t){r.exports=function(e,r,t){var n,s,o,i,a,c,l,u,p,h,f=r+1,d=e.md.block.ruler.getRules("paragraph");if(e.sCount[r]-e.blkIndent>=4)return  false;for(h=e.parentType,e.parentType="paragraph";f<t&&!e.isEmpty(f);f++)if(!(e.sCount[f]-e.blkIndent>3)){if(e.sCount[f]>=e.blkIndent&&(c=e.bMarks[f]+e.tShift[f],l=e.eMarks[f],c<l&&(45===(p=e.src.charCodeAt(c))||61===p)&&(c=e.skipChars(c,p),(c=e.skipSpaces(c))>=l))){u=61===p?1:2;break}if(!(e.sCount[f]<0)){for(s=false,o=0,i=d.length;o<i;o++)if(d[o](e,f,t,true)){s=true;break}if(s)break}}return !!u&&(n=e.getLines(r,f,e.blkIndent,false).trim(),e.line=f+1,a=e.push("heading_open","h"+String(u),1),a.markup=String.fromCharCode(p),a.map=[r,e.line],a=e.push("inline","",0),a.content=n,a.map=[r,e.line-1],a.children=[],a=e.push("heading_close","h"+String(u),-1),a.markup=String.fromCharCode(p),e.parentType=h,true)};},{}],25:[function(e,r,t){function n(e,r){var t,n,s,o;return n=e.bMarks[r]+e.tShift[r],s=e.eMarks[r],t=e.src.charCodeAt(n++),42!==t&&45!==t&&43!==t?-1:n<s&&(o=e.src.charCodeAt(n),!i(o))?-1:n}function s(e,r){var t,n=e.bMarks[r]+e.tShift[r],s=n,o=e.eMarks[r];if(s+1>=o)return  -1;if((t=e.src.charCodeAt(s++))<48||t>57)return  -1;for(;;){if(s>=o)return  -1;t=e.src.charCodeAt(s++);{if(!(t>=48&&t<=57)){if(41===t||46===t)break;return  -1}if(s-n>=10)return  -1}}return s<o&&(t=e.src.charCodeAt(s),!i(t))?-1:s}function o(e,r){var t,n,s=e.level+2;for(t=r+2,n=e.tokens.length-2;t<n;t++)e.tokens[t].level===s&&"paragraph_open"===e.tokens[t].type&&(e.tokens[t+2].hidden=true,e.tokens[t].hidden=true,t+=2);}var i=e("../common/utils").isSpace;r.exports=function(e,r,t,a){var c,l,u,p,h,f,d,m,_,g,b,k,v,y,x,C,A,w,D,q,E,S,F,L,z,T,I,R,M=false,B=true;if(e.sCount[r]-e.blkIndent>=4)return  false;if(a&&"paragraph"===e.parentType&&e.tShift[r]>=e.blkIndent&&(M=true),(F=s(e,r))>=0){if(d=true,z=e.bMarks[r]+e.tShift[r],v=Number(e.src.substr(z,F-z-1)),M&&1!==v)return  false}else {if(!((F=n(e,r))>=0))return  false;d=false;}if(M&&e.skipSpaces(F)>=e.eMarks[r])return  false;if(k=e.src.charCodeAt(F-1),a)return  true;for(b=e.tokens.length,d?(R=e.push("ordered_list_open","ol",1),1!==v&&(R.attrs=[["start",v]])):R=e.push("bullet_list_open","ul",1),R.map=g=[r,0],R.markup=String.fromCharCode(k),x=r,L=false,I=e.md.block.ruler.getRules("list"),D=e.parentType,e.parentType="list";x<t;){for(S=F,y=e.eMarks[x],f=C=e.sCount[x]+F-(e.bMarks[r]+e.tShift[r]);S<y&&(c=e.src.charCodeAt(S),i(c));)9===c?C+=4-(C+e.bsCount[x])%4:C++,S++;if(l=S,h=l>=y?1:C-f,h>4&&(h=1),p=f+h,R=e.push("list_item_open","li",1),R.markup=String.fromCharCode(k),R.map=m=[r,0],A=e.blkIndent,E=e.tight,q=e.tShift[r],w=e.sCount[r],e.blkIndent=p,e.tight=true,e.tShift[r]=l-e.bMarks[r],e.sCount[r]=C,l>=y&&e.isEmpty(r+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,r,t,true),e.tight&&!L||(B=false),L=e.line-r>1&&e.isEmpty(e.line-1),e.blkIndent=A,e.tShift[r]=q,e.sCount[r]=w,e.tight=E,R=e.push("list_item_close","li",-1),R.markup=String.fromCharCode(k),x=r=e.line,m[1]=x,l=e.bMarks[r],x>=t)break;if(e.sCount[x]<e.blkIndent)break;for(T=false,u=0,_=I.length;u<_;u++)if(I[u](e,x,t,true)){T=true;break}if(T)break;if(d){if((F=s(e,x))<0)break}else if((F=n(e,x))<0)break;if(k!==e.src.charCodeAt(F-1))break}return R=d?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1),R.markup=String.fromCharCode(k),g[1]=x,e.line=x,e.parentType=D,B&&o(e,b),true};},{"../common/utils":4}],26:[function(e,r,t){r.exports=function(e,r){var t,n,s,o,i,a,c=r+1,l=e.md.block.ruler.getRules("paragraph"),u=e.lineMax;for(a=e.parentType,e.parentType="paragraph";c<u&&!e.isEmpty(c);c++)if(!(e.sCount[c]-e.blkIndent>3||e.sCount[c]<0)){for(n=false,s=0,o=l.length;s<o;s++)if(l[s](e,c,u,true)){n=true;break}if(n)break}return t=e.getLines(r,c,e.blkIndent,false).trim(),e.line=c,i=e.push("paragraph_open","p",1),i.map=[r,e.line],i=e.push("inline","",0),i.content=t,i.map=[r,e.line],i.children=[],i=e.push("paragraph_close","p",-1),e.parentType=a,true};},{}],27:[function(e,r,t){var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r,t,o){var i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,y,x=0,C=e.bMarks[r]+e.tShift[r],A=e.eMarks[r],w=r+1;if(e.sCount[r]-e.blkIndent>=4)return  false;if(91!==e.src.charCodeAt(C))return  false;for(;++C<A;)if(93===e.src.charCodeAt(C)&&92!==e.src.charCodeAt(C-1)){if(C+1===A)return  false;if(58!==e.src.charCodeAt(C+1))return  false;break}for(l=e.lineMax,v=e.md.block.ruler.getRules("reference"),m=e.parentType,e.parentType="reference";w<l&&!e.isEmpty(w);w++)if(!(e.sCount[w]-e.blkIndent>3||e.sCount[w]<0)){for(k=false,p=0,h=v.length;p<h;p++)if(v[p](e,w,l,true)){k=true;break}if(k)break}for(b=e.getLines(r,w,e.blkIndent,false).trim(),A=b.length,C=1;C<A;C++){if(91===(i=b.charCodeAt(C)))return  false;if(93===i){d=C;break}10===i?x++:92===i&&++C<A&&10===b.charCodeAt(C)&&x++;}if(d<0||58!==b.charCodeAt(d+1))return  false;for(C=d+2;C<A;C++)if(10===(i=b.charCodeAt(C)))x++;else if(!s(i))break;if(_=e.md.helpers.parseLinkDestination(b,C,A),!_.ok)return  false;if(u=e.md.normalizeLink(_.str),!e.md.validateLink(u))return  false;for(C=_.pos,x+=_.lines,a=C,c=x,g=C;C<A;C++)if(10===(i=b.charCodeAt(C)))x++;else if(!s(i))break;for(_=e.md.helpers.parseLinkTitle(b,C,A),C<A&&g!==C&&_.ok?(y=_.str,C=_.pos,x+=_.lines):(y="",C=a,x=c);C<A&&(i=b.charCodeAt(C),s(i));)C++;if(C<A&&10!==b.charCodeAt(C)&&y)for(y="",C=a,x=c;C<A&&(i=b.charCodeAt(C),s(i));)C++;return !(C<A&&10!==b.charCodeAt(C))&&(!!(f=n(b.slice(1,d)))&&(!!o||(void 0===e.env.references&&(e.env.references={}),void 0===e.env.references[f]&&(e.env.references[f]={title:y,href:u}),e.parentType=m,e.line=r+x+1,true)))};},{"../common/utils":4}],28:[function(e,r,t){function n(e,r,t,n){var s,i,a,c,l,u,p,h;for(this.src=e,this.md=r,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=false,this.ddIndent=-1,this.parentType="root",this.level=0,this.result="",i=this.src,h=false,a=c=u=p=0,l=i.length;c<l;c++){if(s=i.charCodeAt(c),!h){if(o(s)){u++,9===s?p+=4-p%4:p++;continue}h=true;}10!==s&&c!==l-1||(10!==s&&c++,this.bMarks.push(a),this.eMarks.push(c),this.tShift.push(u),this.sCount.push(p),this.bsCount.push(0),h=false,u=0,p=0,a=c+1);}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1;}var s=e("../token"),o=e("../common/utils").isSpace;n.prototype.push=function(e,r,t){var n=new s(e,r,t);return n.block=true,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n},n.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},n.prototype.skipEmptyLines=function(e){for(var r=this.lineMax;e<r&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},n.prototype.skipSpaces=function(e){for(var r,t=this.src.length;e<t&&(r=this.src.charCodeAt(e),o(r));e++);return e},n.prototype.skipSpacesBack=function(e,r){if(e<=r)return e;for(;e>r;)if(!o(this.src.charCodeAt(--e)))return e+1;return e},n.prototype.skipChars=function(e,r){for(var t=this.src.length;e<t&&this.src.charCodeAt(e)===r;e++);return e},n.prototype.skipCharsBack=function(e,r,t){if(e<=t)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e},n.prototype.getLines=function(e,r,t,n){var s,i,a,c,l,u,p,h=e;if(e>=r)return "";for(u=new Array(r-e),s=0;h<r;h++,s++){for(i=0,p=c=this.bMarks[h],
		l=h+1<r||n?this.eMarks[h]+1:this.eMarks[h];c<l&&i<t;){if(a=this.src.charCodeAt(c),o(a))9===a?i+=4-(i+this.bsCount[h])%4:i++;else {if(!(c-p<this.tShift[h]))break;i++;}c++;}u[s]=i>t?new Array(i-t+1).join(" ")+this.src.slice(c,l):this.src.slice(c,l);}return u.join("")},n.prototype.Token=s,r.exports=n;},{"../common/utils":4,"../token":51}],29:[function(e,r,t){function n(e,r){var t=e.bMarks[r]+e.blkIndent,n=e.eMarks[r];return e.src.substr(t,n-t)}function s(e){var r,t=[],n=0,s=e.length,o=0,i=0,a=false,c=0;for(r=e.charCodeAt(n);n<s;)96===r?a?(a=false,c=n):o%2==0&&(a=true,c=n):124!==r||o%2!=0||a||(t.push(e.substring(i,n)),i=n+1),92===r?o++:o=0,n++,n===s&&a&&(a=false,n=c+1),r=e.charCodeAt(n);return t.push(e.substring(i)),t}var o=e("../common/utils").isSpace;r.exports=function(e,r,t,i){var a,c,l,u,p,h,f,d,m,_,g,b;if(r+2>t)return  false;if(p=r+1,e.sCount[p]<e.blkIndent)return  false;if(e.sCount[p]-e.blkIndent>=4)return  false;if((l=e.bMarks[p]+e.tShift[p])>=e.eMarks[p])return  false;if(124!==(a=e.src.charCodeAt(l++))&&45!==a&&58!==a)return  false;for(;l<e.eMarks[p];){if(124!==(a=e.src.charCodeAt(l))&&45!==a&&58!==a&&!o(a))return  false;l++;}for(c=n(e,r+1),h=c.split("|"),m=[],u=0;u<h.length;u++){if(!(_=h[u].trim())){if(0===u||u===h.length-1)continue;return  false}if(!/^:?-+:?$/.test(_))return  false;58===_.charCodeAt(_.length-1)?m.push(58===_.charCodeAt(0)?"center":"right"):58===_.charCodeAt(0)?m.push("left"):m.push("");}if(c=n(e,r).trim(),c.indexOf("|")===-1)return  false;if(e.sCount[r]-e.blkIndent>=4)return  false;if(h=s(c.replace(/^\||\|$/g,"")),(f=h.length)>m.length)return  false;if(i)return  true;for(d=e.push("table_open","table",1),d.map=g=[r,0],d=e.push("thead_open","thead",1),d.map=[r,r+1],d=e.push("tr_open","tr",1),d.map=[r,r+1],u=0;u<h.length;u++)d=e.push("th_open","th",1),d.map=[r,r+1],m[u]&&(d.attrs=[["style","text-align:"+m[u]]]),d=e.push("inline","",0),d.content=h[u].trim(),d.map=[r,r+1],d.children=[],d=e.push("th_close","th",-1);for(d=e.push("tr_close","tr",-1),d=e.push("thead_close","thead",-1),d=e.push("tbody_open","tbody",1),d.map=b=[r+2,0],p=r+2;p<t&&!(e.sCount[p]<e.blkIndent)&&(c=n(e,p).trim(),c.indexOf("|")!==-1)&&!(e.sCount[p]-e.blkIndent>=4);p++){for(h=s(c.replace(/^\||\|$/g,"")),d=e.push("tr_open","tr",1),u=0;u<f;u++)d=e.push("td_open","td",1),m[u]&&(d.attrs=[["style","text-align:"+m[u]]]),d=e.push("inline","",0),d.content=h[u]?h[u].trim():"",d.children=[],d=e.push("td_close","td",-1);d=e.push("tr_close","tr",-1);}return d=e.push("tbody_close","tbody",-1),d=e.push("table_close","table",-1),g[1]=b[1]=p,e.line=p,true};},{"../common/utils":4}],30:[function(e,r,t){r.exports=function(e){var r;e.inlineMode?(r=new e.Token("inline","",0),r.content=e.src,r.map=[0,1],r.children=[],e.tokens.push(r)):e.md.block.parse(e.src,e.md,e.env,e.tokens);};},{}],31:[function(e,r,t){r.exports=function(e){var r,t,n,s=e.tokens;for(t=0,n=s.length;t<n;t++)r=s[t],"inline"===r.type&&e.md.inline.parse(r.content,e.md,e.env,r.children);};},{}],32:[function(e,r,t){function n(e){return /^<a[>\s]/i.test(e)}function s(e){return /^<\/a\s*>/i.test(e)}var o=e("../common/utils").arrayReplaceAt;r.exports=function(e){var r,t,i,a,c,l,u,p,h,f,d,m,_,g,b,k,v,y=e.tokens;if(e.md.options.linkify)for(t=0,i=y.length;t<i;t++)if("inline"===y[t].type&&e.md.linkify.pretest(y[t].content))for(a=y[t].children,_=0,r=a.length-1;r>=0;r--)if(l=a[r],"link_close"!==l.type){if("html_inline"===l.type&&(n(l.content)&&_>0&&_--,s(l.content)&&_++),!(_>0)&&"text"===l.type&&e.md.linkify.test(l.content)){for(h=l.content,v=e.md.linkify.match(h),u=[],m=l.level,d=0,p=0;p<v.length;p++)g=v[p].url,b=e.md.normalizeLink(g),e.md.validateLink(b)&&(k=v[p].text,k=v[p].schema?"mailto:"!==v[p].schema||/^mailto:/i.test(k)?e.md.normalizeLinkText(k):e.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,""),f=v[p].index,f>d&&(c=new e.Token("text","",0),c.content=h.slice(d,f),c.level=m,u.push(c)),c=new e.Token("link_open","a",1),c.attrs=[["href",b]],c.level=m++,c.markup="linkify",c.info="auto",u.push(c),c=new e.Token("text","",0),c.content=k,c.level=m,u.push(c),c=new e.Token("link_close","a",-1),c.level=--m,c.markup="linkify",c.info="auto",u.push(c),d=v[p].lastIndex);d<h.length&&(c=new e.Token("text","",0),c.content=h.slice(d),c.level=m,u.push(c)),y[t].children=a=o(a,r,u);}}else for(r--;a[r].level!==l.level&&"link_open"!==a[r].type;)r--;};},{"../common/utils":4}],33:[function(e,r,t){r.exports=function(e){var r;r=e.src.replace(/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,"\n"),r=r.replace(/\u0000/g,"\ufffd"),e.src=r;};},{}],34:[function(e,r,t){function n(e,r){return c[r.toLowerCase()]}function s(e){var r,t,s=0;for(r=e.length-1;r>=0;r--)t=e[r],"text"!==t.type||s||(t.content=t.content.replace(/\((c|tm|r|p)\)/gi,n)),"link_open"===t.type&&"auto"===t.info&&s--,"link_close"===t.type&&"auto"===t.info&&s++;}function o(e){var r,t,n=0;for(r=e.length-1;r>=0;r--)t=e[r],"text"!==t.type||n||i.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xb1").replace(/\.{2,}/g,"\u2026").replace(/([?!])\u2026/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1\u2014$2").replace(/(^|\s)--(\s|$)/gm,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1\u2013$2")),"link_open"===t.type&&"auto"===t.info&&n--,"link_close"===t.type&&"auto"===t.info&&n++;}var i=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,a=/\((c|tm|r|p)\)/i,c={c:"\xa9",r:"\xae",p:"\xa7",tm:"\u2122"};r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&(a.test(e.tokens[r].content)&&s(e.tokens[r].children),i.test(e.tokens[r].content)&&o(e.tokens[r].children));};},{}],35:[function(e,r,t){function n(e,r,t){return e.substr(0,r)+t+e.substr(r+1)}function s(e,r){var t,s,c,u,p,h,f,d,m,_,g,b,k,v,y,x,C,A,w,D,q;for(w=[],t=0;t<e.length;t++){for(s=e[t],f=e[t].level,C=w.length-1;C>=0&&!(w[C].level<=f);C--);if(w.length=C+1,"text"===s.type){c=s.content,p=0,h=c.length;e:for(;p<h&&(l.lastIndex=p,u=l.exec(c));){if(y=x=true,p=u.index+1,A="'"===u[0],m=32,u.index-1>=0)m=c.charCodeAt(u.index-1);else for(C=t-1;C>=0;C--)if("text"===e[C].type){m=e[C].content.charCodeAt(e[C].content.length-1);break}if(_=32,p<h)_=c.charCodeAt(p);else for(C=t+1;C<e.length;C++)if("text"===e[C].type){_=e[C].content.charCodeAt(0);break}if(g=a(m)||i(String.fromCharCode(m)),b=a(_)||i(String.fromCharCode(_)),k=o(m),v=o(_),v?y=false:b&&(k||g||(y=false)),k?x=false:g&&(v||b||(x=false)),34===_&&'"'===u[0]&&m>=48&&m<=57&&(x=y=false),y&&x&&(y=false,x=b),y||x){if(x)for(C=w.length-1;C>=0&&(d=w[C],!(w[C].level<f));C--)if(d.single===A&&w[C].level===f){d=w[C],A?(D=r.md.options.quotes[2],q=r.md.options.quotes[3]):(D=r.md.options.quotes[0],q=r.md.options.quotes[1]),s.content=n(s.content,u.index,q),e[d.token].content=n(e[d.token].content,d.pos,D),p+=q.length-1,d.token===t&&(p+=D.length-1),c=s.content,h=c.length,w.length=C;continue e}y?w.push({token:t,pos:u.index,single:A,level:f}):x&&A&&(s.content=n(s.content,u.index,"\u2019"));}else A&&(s.content=n(s.content,u.index,"\u2019"));}}}}var o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct,c=/['"]/,l=/['"]/g;r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&c.test(e.tokens[r].content)&&s(e.tokens[r].children,e);};},{"../common/utils":4}],36:[function(e,r,t){function n(e,r,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=false,this.md=r;}var s=e("../token");n.prototype.Token=s,r.exports=n;},{"../token":51}],37:[function(e,r,t){var n=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,s=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;r.exports=function(e,r){var t,o,i,a,c,l,u=e.pos;return 60===e.src.charCodeAt(u)&&(t=e.src.slice(u),!(t.indexOf(">")<0)&&(s.test(t)?(o=t.match(s),a=o[0].slice(1,-1),c=e.md.normalizeLink(a),!!e.md.validateLink(c)&&(r||(l=e.push("link_open","a",1),l.attrs=[["href",c]],l.markup="autolink",l.info="auto",l=e.push("text","",0),l.content=e.md.normalizeLinkText(a),l=e.push("link_close","a",-1),l.markup="autolink",l.info="auto"),e.pos+=o[0].length,true)):!!n.test(t)&&(i=t.match(n),a=i[0].slice(1,-1),c=e.md.normalizeLink("mailto:"+a),!!e.md.validateLink(c)&&(r||(l=e.push("link_open","a",1),l.attrs=[["href",c]],l.markup="autolink",l.info="auto",l=e.push("text","",0),l.content=e.md.normalizeLinkText(a),l=e.push("link_close","a",-1),l.markup="autolink",l.info="auto"),e.pos+=i[0].length,true))))};},{}],38:[function(e,r,t){r.exports=function(e,r){var t,n,s,o,i,a,c=e.pos;if(96!==e.src.charCodeAt(c))return  false;for(t=c,c++,n=e.posMax;c<n&&96===e.src.charCodeAt(c);)c++;for(s=e.src.slice(t,c),o=i=c;(o=e.src.indexOf("`",i))!==-1;){for(i=o+1;i<n&&96===e.src.charCodeAt(i);)i++;if(i-o===s.length)return r||(a=e.push("code_inline","code",0),a.markup=s,a.content=e.src.slice(c,o).replace(/[ \n]+/g," ").trim()),e.pos=i,true}return r||(e.pending+=s),e.pos+=s.length,true};},{}],39:[function(e,r,t){r.exports=function(e){var r,t,n,s,o=e.delimiters,i=e.delimiters.length;for(r=0;r<i;r++)if(n=o[r],n.close)for(t=r-n.jump-1;t>=0;){if(s=o[t],s.open&&s.marker===n.marker&&s.end<0&&s.level===n.level){var a=(s.close||n.open)&&void 0!==s.length&&void 0!==n.length&&(s.length+n.length)%3==0;if(!a){n.jump=r-t,n.open=false,s.end=r,s.jump=0;break}}t-=s.jump+1;}};},{}],40:[function(e,r,t){r.exports.tokenize=function(e,r){var t,n,s,o=e.pos,i=e.src.charCodeAt(o);if(r)return  false;if(95!==i&&42!==i)return  false;for(n=e.scanDelims(e.pos,42===i),t=0;t<n.length;t++)s=e.push("text","",0),s.content=String.fromCharCode(i),e.delimiters.push({marker:i,length:n.length,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,true},r.exports.postProcess=function(e){var r,t,n,s,o,i,a=e.delimiters,c=e.delimiters.length;for(r=0;r<c;r++)t=a[r],95!==t.marker&&42!==t.marker||t.end!==-1&&(n=a[t.end],i=r+1<c&&a[r+1].end===t.end-1&&a[r+1].token===t.token+1&&a[t.end-1].token===n.token-1&&a[r+1].marker===t.marker,o=String.fromCharCode(t.marker),s=e.tokens[t.token],s.type=i?"strong_open":"em_open",s.tag=i?"strong":"em",s.nesting=1,s.markup=i?o+o:o,s.content="",s=e.tokens[n.token],s.type=i?"strong_close":"em_close",s.tag=i?"strong":"em",s.nesting=-1,s.markup=i?o+o:o,s.content="",i&&(e.tokens[a[r+1].token].content="",e.tokens[a[t.end-1].token].content="",r++));};},{}],41:[function(e,r,t){var n=e("../common/entities"),s=e("../common/utils").has,o=e("../common/utils").isValidEntityCode,i=e("../common/utils").fromCodePoint;r.exports=function(e,r){var t,a,c=e.pos,l=e.posMax;if(38!==e.src.charCodeAt(c))return  false;if(c+1<l)if(35===e.src.charCodeAt(c+1)){if(a=e.src.slice(c).match(/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i))return r||(t="x"===a[1][0].toLowerCase()?parseInt(a[1].slice(1),16):parseInt(a[1],10),e.pending+=i(o(t)?t:65533)),e.pos+=a[0].length,true}else if((a=e.src.slice(c).match(/^&([a-z][a-z0-9]{1,31});/i))&&s(n,a[1]))return r||(e.pending+=n[a[1]]),e.pos+=a[0].length,true;return r||(e.pending+="&"),e.pos++,true};},{"../common/entities":1,"../common/utils":4}],42:[function(e,r,t){for(var n=e("../common/utils").isSpace,s=[],o=0;o<256;o++)s.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){s[e.charCodeAt(0)]=1;}),r.exports=function(e,r){var t,o=e.pos,i=e.posMax;if(92!==e.src.charCodeAt(o))return  false;if(++o<i){if((t=e.src.charCodeAt(o))<256&&0!==s[t])return r||(e.pending+=e.src[o]),e.pos+=2,true;if(10===t){for(r||e.push("hardbreak","br",0),o++;o<i&&(t=e.src.charCodeAt(o),n(t));)o++;return e.pos=o,true}}return r||(e.pending+="\\"),e.pos++,true};},{"../common/utils":4}],43:[function(e,r,t){function n(e){var r=32|e;return r>=97&&r<=122}var s=e("../common/html_re").HTML_TAG_RE;r.exports=function(e,r){var t,o,i,a,c=e.pos;return !!e.md.options.html&&(i=e.posMax,!(60!==e.src.charCodeAt(c)||c+2>=i)&&(!(33!==(t=e.src.charCodeAt(c+1))&&63!==t&&47!==t&&!n(t))&&(!!(o=e.src.slice(c).match(s))&&(r||(a=e.push("html_inline","",0),a.content=e.src.slice(c,c+o[0].length)),e.pos+=o[0].length,true))))};},{"../common/html_re":3}],44:[function(e,r,t){var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r){var t,o,i,a,c,l,u,p,h,f,d,m,_,g="",b=e.pos,k=e.posMax;if(33!==e.src.charCodeAt(e.pos))return  false;if(91!==e.src.charCodeAt(e.pos+1))return  false;if(l=e.pos+2,(c=e.md.helpers.parseLinkLabel(e,e.pos+1,false))<0)return  false;if((u=c+1)<k&&40===e.src.charCodeAt(u)){for(u++;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);if(u>=k)return  false;for(_=u,h=e.md.helpers.parseLinkDestination(e.src,u,e.posMax),h.ok&&(g=e.md.normalizeLink(h.str),e.md.validateLink(g)?u=h.pos:g=""),_=u;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);if(h=e.md.helpers.parseLinkTitle(e.src,u,e.posMax),u<k&&_!==u&&h.ok)for(f=h.str,u=h.pos;u<k&&(o=e.src.charCodeAt(u),s(o)||10===o);u++);else f="";if(u>=k||41!==e.src.charCodeAt(u))return e.pos=b,false;u++;}else {if(void 0===e.env.references)return  false;if(u<k&&91===e.src.charCodeAt(u)?(_=u+1,u=e.md.helpers.parseLinkLabel(e,u),u>=0?a=e.src.slice(_,u++):u=c+1):u=c+1,a||(a=e.src.slice(l,c)),!(p=e.env.references[n(a)]))return e.pos=b,false;g=p.href,f=p.title;}return r||(i=e.src.slice(l,c),e.md.inline.parse(i,e.md,e.env,m=[]),d=e.push("image","img",0),d.attrs=t=[["src",g],["alt",""]],d.children=m,d.content=i,f&&t.push(["title",f])),e.pos=u,e.posMax=k,true};},{"../common/utils":4}],45:[function(e,r,t){var n=e("../common/utils").normalizeReference,s=e("../common/utils").isSpace;r.exports=function(e,r){var t,o,i,a,c,l,u,p,h,f,d="",m=e.pos,_=e.posMax,g=e.pos,b=true;if(91!==e.src.charCodeAt(e.pos))return  false;if(c=e.pos+1,(a=e.md.helpers.parseLinkLabel(e,e.pos,true))<0)return  false;if((l=a+1)<_&&40===e.src.charCodeAt(l)){for(b=false,l++;l<_&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);if(l>=_)return  false;for(g=l,u=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),u.ok&&(d=e.md.normalizeLink(u.str),e.md.validateLink(d)?l=u.pos:d=""),g=l;l<_&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);if(u=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<_&&g!==l&&u.ok)for(h=u.str,l=u.pos;l<_&&(o=e.src.charCodeAt(l),s(o)||10===o);l++);else h="";(l>=_||41!==e.src.charCodeAt(l))&&(b=true),l++;}if(b){if(void 0===e.env.references)return  false;if(l<_&&91===e.src.charCodeAt(l)?(g=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?i=e.src.slice(g,l++):l=a+1):l=a+1,i||(i=e.src.slice(c,a)),!(p=e.env.references[n(i)]))return e.pos=m,false;d=p.href,h=p.title;}return r||(e.pos=c,e.posMax=a,f=e.push("link_open","a",1),f.attrs=t=[["href",d]],h&&t.push(["title",h]),e.md.inline.tokenize(e),f=e.push("link_close","a",-1)),e.pos=l,e.posMax=_,true};},{"../common/utils":4}],46:[function(e,r,t){var n=e("../common/utils").isSpace;r.exports=function(e,r){var t,s,o=e.pos;if(10!==e.src.charCodeAt(o))return  false;for(t=e.pending.length-1,s=e.posMax,r||(t>=0&&32===e.pending.charCodeAt(t)?t>=1&&32===e.pending.charCodeAt(t-1)?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),o++;o<s&&n(e.src.charCodeAt(o));)o++;return e.pos=o,true};},{"../common/utils":4}],47:[function(e,r,t){function n(e,r,t,n){this.src=e,this.env=t,this.md=r,this.tokens=n,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[];}var s=e("../token"),o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct;n.prototype.pushPending=function(){var e=new s("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},n.prototype.push=function(e,r,t){this.pending&&this.pushPending();var n=new s(e,r,t);return t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.pendingLevel=this.level,this.tokens.push(n),n},n.prototype.scanDelims=function(e,r){var t,n,s,c,l,u,p,h,f,d=e,m=true,_=true,g=this.posMax,b=this.src.charCodeAt(e);for(t=e>0?this.src.charCodeAt(e-1):32;d<g&&this.src.charCodeAt(d)===b;)d++;return s=d-e,n=d<g?this.src.charCodeAt(d):32,p=a(t)||i(String.fromCharCode(t)),f=a(n)||i(String.fromCharCode(n)),u=o(t),h=o(n),h?m=false:f&&(u||p||(m=false)),u?_=false:p&&(h||f||(_=false)),r?(c=m,l=_):(c=m&&(!_||p),l=_&&(!m||f)),{can_open:c,can_close:l,length:s}},n.prototype.Token=s,r.exports=n;},{"../common/utils":4,"../token":51}],48:[function(e,r,t){r.exports.tokenize=function(e,r){var t,n,s,o,i,a=e.pos,c=e.src.charCodeAt(a);if(r)return  false;if(126!==c)return  false;if(n=e.scanDelims(e.pos,true),o=n.length,i=String.fromCharCode(c),o<2)return  false;for(o%2&&(s=e.push("text","",0),s.content=i,o--),t=0;t<o;t+=2)s=e.push("text","",0),s.content=i+i,e.delimiters.push({marker:c,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,true},r.exports.postProcess=function(e){var r,t,n,s,o,i=[],a=e.delimiters,c=e.delimiters.length;for(r=0;r<c;r++)n=a[r],126===n.marker&&n.end!==-1&&(s=a[n.end],o=e.tokens[n.token],o.type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",o=e.tokens[s.token],o.type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="","text"===e.tokens[s.token-1].type&&"~"===e.tokens[s.token-1].content&&i.push(s.token-1));for(;i.length;){for(r=i.pop(),t=r+1;t<e.tokens.length&&"s_close"===e.tokens[t].type;)t++;t--,r!==t&&(o=e.tokens[t],e.tokens[t]=e.tokens[r],e.tokens[r]=o);}};},{}],49:[function(e,r,t){function n(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return  true;default:return  false}}r.exports=function(e,r){for(var t=e.pos;t<e.posMax&&!n(e.src.charCodeAt(t));)t++;return t!==e.pos&&(r||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,true)};},{}],50:[function(e,r,t){r.exports=function(e){var r,t,n=0,s=e.tokens,o=e.tokens.length;for(r=t=0;r<o;r++)n+=s[r].nesting,s[r].level=n,"text"===s[r].type&&r+1<o&&"text"===s[r+1].type?s[r+1].content=s[r].content+s[r+1].content:(r!==t&&(s[t]=s[r]),t++);r!==t&&(s.length=t);};},{}],51:[function(e,r,t){function n(e,r,t){this.type=e,this.tag=r,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=false,this.hidden=false;}n.prototype.attrIndex=function(e){var r,t,n;if(!this.attrs)return  -1;for(r=this.attrs,t=0,n=r.length;t<n;t++)if(r[t][0]===e)return t;return  -1},n.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e];},n.prototype.attrSet=function(e,r){var t=this.attrIndex(e),n=[e,r];t<0?this.attrPush(n):this.attrs[t]=n;},n.prototype.attrGet=function(e){var r=this.attrIndex(e),t=null;return r>=0&&(t=this.attrs[r][1]),t},n.prototype.attrJoin=function(e,r){var t=this.attrIndex(e);t<0?this.attrPush([e,r]):this.attrs[t][1]=this.attrs[t][1]+" "+r;},r.exports=n;},{}],52:[function(e,r,t){r.exports={Aacute:"\xc1",aacute:"\xe1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223e",acd:"\u223f",acE:"\u223e\u0333",Acirc:"\xc2",acirc:"\xe2",acute:"\xb4",Acy:"\u0410",acy:"\u0430",AElig:"\xc6",aelig:"\xe6",af:"\u2061",Afr:"\ud835\udd04",afr:"\ud835\udd1e",Agrave:"\xc0",agrave:"\xe0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03b1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2a3f",amp:"&",AMP:"&",andand:"\u2a55",And:"\u2a53",and:"\u2227",andd:"\u2a5c",andslope:"\u2a58",andv:"\u2a5a",ang:"\u2220",ange:"\u29a4",angle:"\u2220",angmsdaa:"\u29a8",angmsdab:"\u29a9",angmsdac:"\u29aa",angmsdad:"\u29ab",angmsdae:"\u29ac",angmsdaf:"\u29ad",angmsdag:"\u29ae",angmsdah:"\u29af",angmsd:"\u2221",angrt:"\u221f",angrtvb:"\u22be",angrtvbd:"\u299d",angsph:"\u2222",angst:"\xc5",angzarr:"\u237c",Aogon:"\u0104",aogon:"\u0105",Aopf:"\ud835\udd38",aopf:"\ud835\udd52",apacir:"\u2a6f",ap:"\u2248",apE:"\u2a70",ape:"\u224a",apid:"\u224b",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224a",Aring:"\xc5",aring:"\xe5",Ascr:"\ud835\udc9c",ascr:"\ud835\udcb6",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224d",Atilde:"\xc3",atilde:"\xe3",Auml:"\xc4",auml:"\xe4",awconint:"\u2233",awint:"\u2a11",backcong:"\u224c",backepsilon:"\u03f6",backprime:"\u2035",backsim:"\u223d",backsimeq:"\u22cd",Backslash:"\u2216",Barv:"\u2ae7",barvee:"\u22bd",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23b5",bbrktbrk:"\u23b6",bcong:"\u224c",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201e",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29b0",bepsi:"\u03f6",bernou:"\u212c",Bernoullis:"\u212c",Beta:"\u0392",beta:"\u03b2",beth:"\u2136",between:"\u226c",Bfr:"\ud835\udd05",bfr:"\ud835\udd1f",bigcap:"\u22c2",bigcirc:"\u25ef",bigcup:"\u22c3",bigodot:"\u2a00",bigoplus:"\u2a01",bigotimes:"\u2a02",bigsqcup:"\u2a06",bigstar:"\u2605",bigtriangledown:"\u25bd",bigtriangleup:"\u25b3",biguplus:"\u2a04",bigvee:"\u22c1",bigwedge:"\u22c0",bkarow:"\u290d",blacklozenge:"\u29eb",blacksquare:"\u25aa",blacktriangle:"\u25b4",blacktriangledown:"\u25be",blacktriangleleft:"\u25c2",blacktriangleright:"\u25b8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20e5",bnequiv:"\u2261\u20e5",bNot:"\u2aed",bnot:"\u2310",Bopf:"\ud835\udd39",bopf:"\ud835\udd53",bot:"\u22a5",bottom:"\u22a5",bowtie:"\u22c8",boxbox:"\u29c9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250c",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252c",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229f",boxplus:"\u229e",boxtimes:"\u22a0",boxul:"\u2518",boxuL:"\u255b",boxUl:"\u255c",boxUL:"\u255d",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255a",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253c",boxvH:"\u256a",boxVh:"\u256b",boxVH:"\u256c",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251c",boxvR:"\u255e",boxVr:"\u255f",boxVR:"\u2560",bprime:"\u2035",breve:"\u02d8",Breve:"\u02d8",brvbar:"\xa6",bscr:"\ud835\udcb7",Bscr:"\u212c",bsemi:"\u204f",bsim:"\u223d",bsime:"\u22cd",bsolb:"\u29c5",bsol:"\\",bsolhsub:"\u27c8",bull:"\u2022",bullet:"\u2022",bump:"\u224e",bumpE:"\u2aae",bumpe:"\u224f",Bumpeq:"\u224e",bumpeq:"\u224f",Cacute:"\u0106",cacute:"\u0107",capand:"\u2a44",capbrcup:"\u2a49",capcap:"\u2a4b",cap:"\u2229",Cap:"\u22d2",capcup:"\u2a47",capdot:"\u2a40",CapitalDifferentialD:"\u2145",caps:"\u2229\ufe00",caret:"\u2041",caron:"\u02c7",Cayleys:"\u212d",ccaps:"\u2a4d",Ccaron:"\u010c",ccaron:"\u010d",Ccedil:"\xc7",ccedil:"\xe7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2a4c",ccupssm:"\u2a50",Cdot:"\u010a",cdot:"\u010b",cedil:"\xb8",Cedilla:"\xb8",cemptyv:"\u29b2",cent:"\xa2",centerdot:"\xb7",CenterDot:"\xb7",cfr:"\ud835\udd20",Cfr:"\u212d",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03a7",chi:"\u03c7",circ:"\u02c6",circeq:"\u2257",circlearrowleft:"\u21ba",circlearrowright:"\u21bb",circledast:"\u229b",circledcirc:"\u229a",circleddash:"\u229d",CircleDot:"\u2299",circledR:"\xae",circledS:"\u24c8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25cb",cirE:"\u29c3",cire:"\u2257",cirfnint:"\u2a10",cirmid:"\u2aef",cirscir:"\u29c2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201d",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2a74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2a6d",Congruent:"\u2261",conint:"\u222e",Conint:"\u222f",ContourIntegral:"\u222e",copf:"\ud835\udd54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xa9",COPY:"\xa9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21b5",cross:"\u2717",Cross:"\u2a2f",Cscr:"\ud835\udc9e",cscr:"\ud835\udcb8",csub:"\u2acf",csube:"\u2ad1",csup:"\u2ad0",csupe:"\u2ad2",ctdot:"\u22ef",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22de",cuesc:"\u22df",cularr:"\u21b6",cularrp:"\u293d",cupbrcap:"\u2a48",cupcap:"\u2a46",CupCap:"\u224d",cup:"\u222a",Cup:"\u22d3",cupcup:"\u2a4a",cupdot:"\u228d",cupor:"\u2a45",cups:"\u222a\ufe00",curarr:"\u21b7",curarrm:"\u293c",curlyeqprec:"\u22de",curlyeqsucc:"\u22df",curlyvee:"\u22ce",curlywedge:"\u22cf",curren:"\xa4",curvearrowleft:"\u21b6",curvearrowright:"\u21b7",cuvee:"\u22ce",cuwed:"\u22cf",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232d",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21a1",dArr:"\u21d3",dash:"\u2010",Dashv:"\u2ae4",dashv:"\u22a3",dbkarow:"\u290f",dblac:"\u02dd",Dcaron:"\u010e",dcaron:"\u010f",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21ca",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2a77",deg:"\xb0",Del:"\u2207",Delta:"\u0394",delta:"\u03b4",demptyv:"\u29b1",dfisht:"\u297f",Dfr:"\ud835\udd07",dfr:"\ud835\udd21",dHar:"\u2965",dharl:"\u21c3",dharr:"\u21c2",DiacriticalAcute:"\xb4",DiacriticalDot:"\u02d9",DiacriticalDoubleAcute:"\u02dd",DiacriticalGrave:"`",DiacriticalTilde:"\u02dc",diam:"\u22c4",diamond:"\u22c4",Diamond:"\u22c4",diamondsuit:"\u2666",diams:"\u2666",die:"\xa8",DifferentialD:"\u2146",digamma:"\u03dd",disin:"\u22f2",div:"\xf7",divide:"\xf7",divideontimes:"\u22c7",divonx:"\u22c7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231e",dlcrop:"\u230d",dollar:"$",Dopf:"\ud835\udd3b",dopf:"\ud835\udd55",Dot:"\xa8",dot:"\u02d9",DotDot:"\u20dc",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22a1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222f",DoubleDot:"\xa8",DoubleDownArrow:"\u21d3",DoubleLeftArrow:"\u21d0",DoubleLeftRightArrow:"\u21d4",DoubleLeftTee:"\u2ae4",DoubleLongLeftArrow:"\u27f8",DoubleLongLeftRightArrow:"\u27fa",DoubleLongRightArrow:"\u27f9",DoubleRightArrow:"\u21d2",DoubleRightTee:"\u22a8",DoubleUpArrow:"\u21d1",DoubleUpDownArrow:"\u21d5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21d3",DownArrowUpArrow:"\u21f5",DownBreve:"\u0311",downdownarrows:"\u21ca",downharpoonleft:"\u21c3",downharpoonright:"\u21c2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295e",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21bd",DownRightTeeVector:"\u295f",DownRightVectorBar:"\u2957",DownRightVector:"\u21c1",DownTeeArrow:"\u21a7",DownTee:"\u22a4",drbkarow:"\u2910",drcorn:"\u231f",drcrop:"\u230c",Dscr:"\ud835\udc9f",dscr:"\ud835\udcb9",DScy:"\u0405",dscy:"\u0455",dsol:"\u29f6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22f1",dtri:"\u25bf",dtrif:"\u25be",duarr:"\u21f5",duhar:"\u296f",dwangle:"\u29a6",DZcy:"\u040f",dzcy:"\u045f",dzigrarr:"\u27ff",Eacute:"\xc9",eacute:"\xe9",easter:"\u2a6e",Ecaron:"\u011a",ecaron:"\u011b",Ecirc:"\xca",ecirc:"\xea",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042d",ecy:"\u044d",eDDot:"\u2a77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\ud835\udd08",efr:"\ud835\udd22",eg:"\u2a9a",Egrave:"\xc8",egrave:"\xe8",egs:"\u2a96",egsdot:"\u2a98",el:"\u2a99",Element:"\u2208",elinters:"\u23e7",ell:"\u2113",els:"\u2a95",elsdot:"\u2a97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25fb",emptyv:"\u2205",EmptyVerySmallSquare:"\u25ab",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014a",eng:"\u014b",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\ud835\udd3c",eopf:"\ud835\udd56",epar:"\u22d5",eparsl:"\u29e3",eplus:"\u2a71",epsi:"\u03b5",Epsilon:"\u0395",epsilon:"\u03b5",epsiv:"\u03f5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2a96",eqslantless:"\u2a95",Equal:"\u2a75",equals:"=",EqualTilde:"\u2242",equest:"\u225f",Equilibrium:"\u21cc",equiv:"\u2261",equivDD:"\u2a78",eqvparsl:"\u29e5",erarr:"\u2971",erDot:"\u2253",escr:"\u212f",Escr:"\u2130",esdot:"\u2250",Esim:"\u2a73",esim:"\u2242",Eta:"\u0397",eta:"\u03b7",ETH:"\xd0",eth:"\xf0",Euml:"\xcb",euml:"\xeb",euro:"\u20ac",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\ufb03",fflig:"\ufb00",ffllig:"\ufb04",Ffr:"\ud835\udd09",ffr:"\ud835\udd23",filig:"\ufb01",FilledSmallSquare:"\u25fc",FilledVerySmallSquare:"\u25aa",fjlig:"fj",flat:"\u266d",fllig:"\ufb02",fltns:"\u25b1",fnof:"\u0192",Fopf:"\ud835\udd3d",fopf:"\ud835\udd57",forall:"\u2200",ForAll:"\u2200",fork:"\u22d4",forkv:"\u2ad9",Fouriertrf:"\u2131",fpartint:"\u2a0d",frac12:"\xbd",frac13:"\u2153",frac14:"\xbc",frac15:"\u2155",frac16:"\u2159",frac18:"\u215b",frac23:"\u2154",frac25:"\u2156",frac34:"\xbe",frac35:"\u2157",frac38:"\u215c",frac45:"\u2158",frac56:"\u215a",frac58:"\u215d",frac78:"\u215e",frasl:"\u2044",frown:"\u2322",fscr:"\ud835\udcbb",Fscr:"\u2131",gacute:"\u01f5",Gamma:"\u0393",gamma:"\u03b3",Gammad:"\u03dc",gammad:"\u03dd",gap:"\u2a86",Gbreve:"\u011e",gbreve:"\u011f",Gcedil:"\u0122",Gcirc:"\u011c",gcirc:"\u011d",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2a8c",gel:"\u22db",geq:"\u2265",geqq:"\u2267",geqslant:"\u2a7e",gescc:"\u2aa9",ges:"\u2a7e",gesdot:"\u2a80",gesdoto:"\u2a82",gesdotol:"\u2a84",gesl:"\u22db\ufe00",gesles:"\u2a94",Gfr:"\ud835\udd0a",gfr:"\ud835\udd24",gg:"\u226b",Gg:"\u22d9",ggg:"\u22d9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2aa5",gl:"\u2277",glE:"\u2a92",glj:"\u2aa4",gnap:"\u2a8a",gnapprox:"\u2a8a",gne:"\u2a88",gnE:"\u2269",gneq:"\u2a88",gneqq:"\u2269",gnsim:"\u22e7",Gopf:"\ud835\udd3e",gopf:"\ud835\udd58",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22db",GreaterFullEqual:"\u2267",GreaterGreater:"\u2aa2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2a7e",GreaterTilde:"\u2273",Gscr:"\ud835\udca2",gscr:"\u210a",gsim:"\u2273",gsime:"\u2a8e",gsiml:"\u2a90",gtcc:"\u2aa7",gtcir:"\u2a7a",gt:">",GT:">",Gt:"\u226b",gtdot:"\u22d7",gtlPar:"\u2995",gtquest:"\u2a7c",gtrapprox:"\u2a86",gtrarr:"\u2978",gtrdot:"\u22d7",gtreqless:"\u22db",gtreqqless:"\u2a8c",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\ufe00",gvnE:"\u2269\ufe00",Hacek:"\u02c7",hairsp:"\u200a",half:"\xbd",hamilt:"\u210b",HARDcy:"\u042a",hardcy:"\u044a",harrcir:"\u2948",harr:"\u2194",hArr:"\u21d4",harrw:"\u21ad",Hat:"^",hbar:"\u210f",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22b9",hfr:"\ud835\udd25",Hfr:"\u210c",HilbertSpace:"\u210b",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21ff",homtht:"\u223b",hookleftarrow:"\u21a9",hookrightarrow:"\u21aa",hopf:"\ud835\udd59",Hopf:"\u210d",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\ud835\udcbd",Hscr:"\u210b",hslash:"\u210f",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224e",HumpEqual:"\u224f",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xcd",iacute:"\xed",ic:"\u2063",Icirc:"\xce",icirc:"\xee",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xa1",iff:"\u21d4",ifr:"\ud835\udd26",Ifr:"\u2111",Igrave:"\xcc",igrave:"\xec",ii:"\u2148",iiiint:"\u2a0c",iiint:"\u222d",iinfin:"\u29dc",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012a",imacr:"\u012b",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22b7",imped:"\u01b5",Implies:"\u21d2",incare:"\u2105",in:"\u2208",infin:"\u221e",infintie:"\u29dd",inodot:"\u0131",intcal:"\u22ba",int:"\u222b",Int:"\u222c",integers:"\u2124",Integral:"\u222b",intercal:"\u22ba",Intersection:"\u22c2",intlarhk:"\u2a17",intprod:"\u2a3c",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012e",iogon:"\u012f",Iopf:"\ud835\udd40",iopf:"\ud835\udd5a",Iota:"\u0399",iota:"\u03b9",iprod:"\u2a3c",iquest:"\xbf",iscr:"\ud835\udcbe",Iscr:"\u2110",isin:"\u2208",isindot:"\u22f5",isinE:"\u22f9",isins:"\u22f4",isinsv:"\u22f3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xcf",iuml:"\xef",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\ud835\udd0d",jfr:"\ud835\udd27",jmath:"\u0237",Jopf:"\ud835\udd41",
		jopf:"\ud835\udd5b",Jscr:"\ud835\udca5",jscr:"\ud835\udcbf",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039a",kappa:"\u03ba",kappav:"\u03f0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041a",kcy:"\u043a",Kfr:"\ud835\udd0e",kfr:"\ud835\udd28",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040c",kjcy:"\u045c",Kopf:"\ud835\udd42",kopf:"\ud835\udd5c",Kscr:"\ud835\udca6",kscr:"\ud835\udcc0",lAarr:"\u21da",Lacute:"\u0139",lacute:"\u013a",laemptyv:"\u29b4",lagran:"\u2112",Lambda:"\u039b",lambda:"\u03bb",lang:"\u27e8",Lang:"\u27ea",langd:"\u2991",langle:"\u27e8",lap:"\u2a85",Laplacetrf:"\u2112",laquo:"\xab",larrb:"\u21e4",larrbfs:"\u291f",larr:"\u2190",Larr:"\u219e",lArr:"\u21d0",larrfs:"\u291d",larrhk:"\u21a9",larrlp:"\u21ab",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21a2",latail:"\u2919",lAtail:"\u291b",lat:"\u2aab",late:"\u2aad",lates:"\u2aad\ufe00",lbarr:"\u290c",lBarr:"\u290e",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298b",lbrksld:"\u298f",lbrkslu:"\u298d",Lcaron:"\u013d",lcaron:"\u013e",Lcedil:"\u013b",lcedil:"\u013c",lceil:"\u2308",lcub:"{",Lcy:"\u041b",lcy:"\u043b",ldca:"\u2936",ldquo:"\u201c",ldquor:"\u201e",ldrdhar:"\u2967",ldrushar:"\u294b",ldsh:"\u21b2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27e8",LeftArrowBar:"\u21e4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21d0",LeftArrowRightArrow:"\u21c6",leftarrowtail:"\u21a2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27e6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21c3",LeftFloor:"\u230a",leftharpoondown:"\u21bd",leftharpoonup:"\u21bc",leftleftarrows:"\u21c7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21d4",leftrightarrows:"\u21c6",leftrightharpoons:"\u21cb",leftrightsquigarrow:"\u21ad",LeftRightVector:"\u294e",LeftTeeArrow:"\u21a4",LeftTee:"\u22a3",LeftTeeVector:"\u295a",leftthreetimes:"\u22cb",LeftTriangleBar:"\u29cf",LeftTriangle:"\u22b2",LeftTriangleEqual:"\u22b4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21bf",LeftVectorBar:"\u2952",LeftVector:"\u21bc",lEg:"\u2a8b",leg:"\u22da",leq:"\u2264",leqq:"\u2266",leqslant:"\u2a7d",lescc:"\u2aa8",les:"\u2a7d",lesdot:"\u2a7f",lesdoto:"\u2a81",lesdotor:"\u2a83",lesg:"\u22da\ufe00",lesges:"\u2a93",lessapprox:"\u2a85",lessdot:"\u22d6",lesseqgtr:"\u22da",lesseqqgtr:"\u2a8b",LessEqualGreater:"\u22da",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2aa1",lesssim:"\u2272",LessSlantEqual:"\u2a7d",LessTilde:"\u2272",lfisht:"\u297c",lfloor:"\u230a",Lfr:"\ud835\udd0f",lfr:"\ud835\udd29",lg:"\u2276",lgE:"\u2a91",lHar:"\u2962",lhard:"\u21bd",lharu:"\u21bc",lharul:"\u296a",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21c7",ll:"\u226a",Ll:"\u22d8",llcorner:"\u231e",Lleftarrow:"\u21da",llhard:"\u296b",lltri:"\u25fa",Lmidot:"\u013f",lmidot:"\u0140",lmoustache:"\u23b0",lmoust:"\u23b0",lnap:"\u2a89",lnapprox:"\u2a89",lne:"\u2a87",lnE:"\u2268",lneq:"\u2a87",lneqq:"\u2268",lnsim:"\u22e6",loang:"\u27ec",loarr:"\u21fd",lobrk:"\u27e6",longleftarrow:"\u27f5",LongLeftArrow:"\u27f5",Longleftarrow:"\u27f8",longleftrightarrow:"\u27f7",LongLeftRightArrow:"\u27f7",Longleftrightarrow:"\u27fa",longmapsto:"\u27fc",longrightarrow:"\u27f6",LongRightArrow:"\u27f6",Longrightarrow:"\u27f9",looparrowleft:"\u21ab",looparrowright:"\u21ac",lopar:"\u2985",Lopf:"\ud835\udd43",lopf:"\ud835\udd5d",loplus:"\u2a2d",lotimes:"\u2a34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25ca",lozenge:"\u25ca",lozf:"\u29eb",lpar:"(",lparlt:"\u2993",lrarr:"\u21c6",lrcorner:"\u231f",lrhar:"\u21cb",lrhard:"\u296d",lrm:"\u200e",lrtri:"\u22bf",lsaquo:"\u2039",lscr:"\ud835\udcc1",Lscr:"\u2112",lsh:"\u21b0",Lsh:"\u21b0",lsim:"\u2272",lsime:"\u2a8d",lsimg:"\u2a8f",lsqb:"[",lsquo:"\u2018",lsquor:"\u201a",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2aa6",ltcir:"\u2a79",lt:"<",LT:"<",Lt:"\u226a",ltdot:"\u22d6",lthree:"\u22cb",ltimes:"\u22c9",ltlarr:"\u2976",ltquest:"\u2a7b",ltri:"\u25c3",ltrie:"\u22b4",ltrif:"\u25c2",ltrPar:"\u2996",lurdshar:"\u294a",luruhar:"\u2966",lvertneqq:"\u2268\ufe00",lvnE:"\u2268\ufe00",macr:"\xaf",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21a6",mapsto:"\u21a6",mapstodown:"\u21a7",mapstoleft:"\u21a4",mapstoup:"\u21a5",marker:"\u25ae",mcomma:"\u2a29",Mcy:"\u041c",mcy:"\u043c",mdash:"\u2014",mDDot:"\u223a",measuredangle:"\u2221",MediumSpace:"\u205f",Mellintrf:"\u2133",Mfr:"\ud835\udd10",mfr:"\ud835\udd2a",mho:"\u2127",micro:"\xb5",midast:"*",midcir:"\u2af0",mid:"\u2223",middot:"\xb7",minusb:"\u229f",minus:"\u2212",minusd:"\u2238",minusdu:"\u2a2a",MinusPlus:"\u2213",mlcp:"\u2adb",mldr:"\u2026",mnplus:"\u2213",models:"\u22a7",Mopf:"\ud835\udd44",mopf:"\ud835\udd5e",mp:"\u2213",mscr:"\ud835\udcc2",Mscr:"\u2133",mstpos:"\u223e",Mu:"\u039c",mu:"\u03bc",multimap:"\u22b8",mumap:"\u22b8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20d2",nap:"\u2249",napE:"\u2a70\u0338",napid:"\u224b\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266e",naturals:"\u2115",natur:"\u266e",nbsp:"\xa0",nbump:"\u224e\u0338",nbumpe:"\u224f\u0338",ncap:"\u2a43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2a6d\u0338",ncup:"\u2a42",Ncy:"\u041d",ncy:"\u043d",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21d7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200b",NegativeThickSpace:"\u200b",NegativeThinSpace:"\u200b",NegativeVeryThinSpace:"\u200b",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226b",NestedLessLess:"\u226a",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",Nfr:"\ud835\udd11",nfr:"\ud835\udd2b",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2a7e\u0338",nges:"\u2a7e\u0338",nGg:"\u22d9\u0338",ngsim:"\u2275",nGt:"\u226b\u20d2",ngt:"\u226f",ngtr:"\u226f",nGtv:"\u226b\u0338",nharr:"\u21ae",nhArr:"\u21ce",nhpar:"\u2af2",ni:"\u220b",nis:"\u22fc",nisd:"\u22fa",niv:"\u220b",NJcy:"\u040a",njcy:"\u045a",nlarr:"\u219a",nlArr:"\u21cd",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219a",nLeftarrow:"\u21cd",nleftrightarrow:"\u21ae",nLeftrightarrow:"\u21ce",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2a7d\u0338",nles:"\u2a7d\u0338",nless:"\u226e",nLl:"\u22d8\u0338",nlsim:"\u2274",nLt:"\u226a\u20d2",nlt:"\u226e",nltri:"\u22ea",nltrie:"\u22ec",nLtv:"\u226a\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xa0",nopf:"\ud835\udd5f",Nopf:"\u2115",Not:"\u2aec",not:"\xac",NotCongruent:"\u2262",NotCupCap:"\u226d",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226f",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226b\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2a7e\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224e\u0338",NotHumpEqual:"\u224f\u0338",notin:"\u2209",notindot:"\u22f5\u0338",notinE:"\u22f9\u0338",notinva:"\u2209",notinvb:"\u22f7",notinvc:"\u22f6",NotLeftTriangleBar:"\u29cf\u0338",NotLeftTriangle:"\u22ea",NotLeftTriangleEqual:"\u22ec",NotLess:"\u226e",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226a\u0338",NotLessSlantEqual:"\u2a7d\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2aa2\u0338",NotNestedLessLess:"\u2aa1\u0338",notni:"\u220c",notniva:"\u220c",notnivb:"\u22fe",notnivc:"\u22fd",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2aaf\u0338",NotPrecedesSlantEqual:"\u22e0",NotReverseElement:"\u220c",NotRightTriangleBar:"\u29d0\u0338",NotRightTriangle:"\u22eb",NotRightTriangleEqual:"\u22ed",NotSquareSubset:"\u228f\u0338",NotSquareSubsetEqual:"\u22e2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22e3",NotSubset:"\u2282\u20d2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2ab0\u0338",NotSucceedsSlantEqual:"\u22e1",NotSucceedsTilde:"\u227f\u0338",NotSuperset:"\u2283\u20d2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2afd\u20e5",npart:"\u2202\u0338",npolint:"\u2a14",npr:"\u2280",nprcue:"\u22e0",nprec:"\u2280",npreceq:"\u2aaf\u0338",npre:"\u2aaf\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219b",nrArr:"\u21cf",nrarrw:"\u219d\u0338",nrightarrow:"\u219b",nRightarrow:"\u21cf",nrtri:"\u22eb",nrtrie:"\u22ed",nsc:"\u2281",nsccue:"\u22e1",nsce:"\u2ab0\u0338",Nscr:"\ud835\udca9",nscr:"\ud835\udcc3",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22e2",nsqsupe:"\u22e3",nsub:"\u2284",nsubE:"\u2ac5\u0338",nsube:"\u2288",nsubset:"\u2282\u20d2",nsubseteq:"\u2288",nsubseteqq:"\u2ac5\u0338",nsucc:"\u2281",nsucceq:"\u2ab0\u0338",nsup:"\u2285",nsupE:"\u2ac6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20d2",nsupseteq:"\u2289",nsupseteqq:"\u2ac6\u0338",ntgl:"\u2279",Ntilde:"\xd1",ntilde:"\xf1",ntlg:"\u2278",ntriangleleft:"\u22ea",ntrianglelefteq:"\u22ec",ntriangleright:"\u22eb",ntrianglerighteq:"\u22ed",Nu:"\u039d",nu:"\u03bd",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224d\u20d2",nvdash:"\u22ac",nvDash:"\u22ad",nVdash:"\u22ae",nVDash:"\u22af",nvge:"\u2265\u20d2",nvgt:">\u20d2",nvHarr:"\u2904",nvinfin:"\u29de",nvlArr:"\u2902",nvle:"\u2264\u20d2",nvlt:"<\u20d2",nvltrie:"\u22b4\u20d2",nvrArr:"\u2903",nvrtrie:"\u22b5\u20d2",nvsim:"\u223c\u20d2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21d6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xd3",oacute:"\xf3",oast:"\u229b",Ocirc:"\xd4",ocirc:"\xf4",ocir:"\u229a",Ocy:"\u041e",ocy:"\u043e",odash:"\u229d",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2a38",odot:"\u2299",odsold:"\u29bc",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29bf",Ofr:"\ud835\udd12",ofr:"\ud835\udd2c",ogon:"\u02db",Ograve:"\xd2",ograve:"\xf2",ogt:"\u29c1",ohbar:"\u29b5",ohm:"\u03a9",oint:"\u222e",olarr:"\u21ba",olcir:"\u29be",olcross:"\u29bb",oline:"\u203e",olt:"\u29c0",Omacr:"\u014c",omacr:"\u014d",Omega:"\u03a9",omega:"\u03c9",Omicron:"\u039f",omicron:"\u03bf",omid:"\u29b6",ominus:"\u2296",Oopf:"\ud835\udd46",oopf:"\ud835\udd60",opar:"\u29b7",OpenCurlyDoubleQuote:"\u201c",OpenCurlyQuote:"\u2018",operp:"\u29b9",oplus:"\u2295",orarr:"\u21bb",Or:"\u2a54",or:"\u2228",ord:"\u2a5d",order:"\u2134",orderof:"\u2134",ordf:"\xaa",ordm:"\xba",origof:"\u22b6",oror:"\u2a56",orslope:"\u2a57",orv:"\u2a5b",oS:"\u24c8",Oscr:"\ud835\udcaa",oscr:"\u2134",Oslash:"\xd8",oslash:"\xf8",osol:"\u2298",Otilde:"\xd5",otilde:"\xf5",otimesas:"\u2a36",Otimes:"\u2a37",otimes:"\u2297",Ouml:"\xd6",ouml:"\xf6",ovbar:"\u233d",OverBar:"\u203e",OverBrace:"\u23de",OverBracket:"\u23b4",OverParenthesis:"\u23dc",para:"\xb6",parallel:"\u2225",par:"\u2225",parsim:"\u2af3",parsl:"\u2afd",part:"\u2202",PartialD:"\u2202",Pcy:"\u041f",pcy:"\u043f",percnt:"%",period:".",permil:"\u2030",perp:"\u22a5",pertenk:"\u2031",Pfr:"\ud835\udd13",pfr:"\ud835\udd2d",Phi:"\u03a6",phi:"\u03c6",phiv:"\u03d5",phmmat:"\u2133",phone:"\u260e",Pi:"\u03a0",pi:"\u03c0",pitchfork:"\u22d4",piv:"\u03d6",planck:"\u210f",planckh:"\u210e",plankv:"\u210f",plusacir:"\u2a23",plusb:"\u229e",pluscir:"\u2a22",plus:"+",plusdo:"\u2214",plusdu:"\u2a25",pluse:"\u2a72",PlusMinus:"\xb1",plusmn:"\xb1",plussim:"\u2a26",plustwo:"\u2a27",pm:"\xb1",Poincareplane:"\u210c",pointint:"\u2a15",popf:"\ud835\udd61",Popf:"\u2119",pound:"\xa3",prap:"\u2ab7",Pr:"\u2abb",pr:"\u227a",prcue:"\u227c",precapprox:"\u2ab7",prec:"\u227a",preccurlyeq:"\u227c",Precedes:"\u227a",PrecedesEqual:"\u2aaf",PrecedesSlantEqual:"\u227c",PrecedesTilde:"\u227e",preceq:"\u2aaf",precnapprox:"\u2ab9",precneqq:"\u2ab5",precnsim:"\u22e8",pre:"\u2aaf",prE:"\u2ab3",precsim:"\u227e",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2ab9",prnE:"\u2ab5",prnsim:"\u22e8",prod:"\u220f",Product:"\u220f",profalar:"\u232e",profline:"\u2312",profsurf:"\u2313",prop:"\u221d",Proportional:"\u221d",Proportion:"\u2237",propto:"\u221d",prsim:"\u227e",prurel:"\u22b0",Pscr:"\ud835\udcab",pscr:"\ud835\udcc5",Psi:"\u03a8",psi:"\u03c8",puncsp:"\u2008",Qfr:"\ud835\udd14",qfr:"\ud835\udd2e",qint:"\u2a0c",qopf:"\ud835\udd62",Qopf:"\u211a",qprime:"\u2057",Qscr:"\ud835\udcac",qscr:"\ud835\udcc6",quaternions:"\u210d",quatint:"\u2a16",quest:"?",questeq:"\u225f",quot:'"',QUOT:'"',rAarr:"\u21db",race:"\u223d\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221a",raemptyv:"\u29b3",rang:"\u27e9",Rang:"\u27eb",rangd:"\u2992",range:"\u29a5",rangle:"\u27e9",raquo:"\xbb",rarrap:"\u2975",rarrb:"\u21e5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21a0",rArr:"\u21d2",rarrfs:"\u291e",rarrhk:"\u21aa",rarrlp:"\u21ac",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21a3",rarrw:"\u219d",ratail:"\u291a",rAtail:"\u291c",ratio:"\u2236",rationals:"\u211a",rbarr:"\u290d",rBarr:"\u290f",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298c",rbrksld:"\u298e",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201d",rdquor:"\u201d",rdsh:"\u21b3",real:"\u211c",realine:"\u211b",realpart:"\u211c",reals:"\u211d",Re:"\u211c",rect:"\u25ad",reg:"\xae",REG:"\xae",ReverseElement:"\u220b",ReverseEquilibrium:"\u21cb",ReverseUpEquilibrium:"\u296f",rfisht:"\u297d",rfloor:"\u230b",rfr:"\ud835\udd2f",Rfr:"\u211c",rHar:"\u2964",rhard:"\u21c1",rharu:"\u21c0",rharul:"\u296c",Rho:"\u03a1",rho:"\u03c1",rhov:"\u03f1",RightAngleBracket:"\u27e9",RightArrowBar:"\u21e5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21d2",RightArrowLeftArrow:"\u21c4",rightarrowtail:"\u21a3",RightCeiling:"\u2309",RightDoubleBracket:"\u27e7",RightDownTeeVector:"\u295d",RightDownVectorBar:"\u2955",RightDownVector:"\u21c2",RightFloor:"\u230b",rightharpoondown:"\u21c1",rightharpoonup:"\u21c0",rightleftarrows:"\u21c4",rightleftharpoons:"\u21cc",rightrightarrows:"\u21c9",rightsquigarrow:"\u219d",RightTeeArrow:"\u21a6",RightTee:"\u22a2",RightTeeVector:"\u295b",rightthreetimes:"\u22cc",RightTriangleBar:"\u29d0",RightTriangle:"\u22b3",RightTriangleEqual:"\u22b5",RightUpDownVector:"\u294f",RightUpTeeVector:"\u295c",RightUpVectorBar:"\u2954",RightUpVector:"\u21be",RightVectorBar:"\u2953",RightVector:"\u21c0",ring:"\u02da",risingdotseq:"\u2253",rlarr:"\u21c4",rlhar:"\u21cc",rlm:"\u200f",rmoustache:"\u23b1",rmoust:"\u23b1",rnmid:"\u2aee",roang:"\u27ed",roarr:"\u21fe",robrk:"\u27e7",ropar:"\u2986",ropf:"\ud835\udd63",Ropf:"\u211d",roplus:"\u2a2e",rotimes:"\u2a35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2a12",rrarr:"\u21c9",Rrightarrow:"\u21db",rsaquo:"\u203a",rscr:"\ud835\udcc7",Rscr:"\u211b",rsh:"\u21b1",Rsh:"\u21b1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22cc",rtimes:"\u22ca",rtri:"\u25b9",rtrie:"\u22b5",rtrif:"\u25b8",rtriltri:"\u29ce",RuleDelayed:"\u29f4",ruluhar:"\u2968",rx:"\u211e",Sacute:"\u015a",sacute:"\u015b",sbquo:"\u201a",scap:"\u2ab8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2abc",sc:"\u227b",sccue:"\u227d",sce:"\u2ab0",scE:"\u2ab4",Scedil:"\u015e",scedil:"\u015f",Scirc:"\u015c",scirc:"\u015d",scnap:"\u2aba",scnE:"\u2ab6",scnsim:"\u22e9",scpolint:"\u2a13",scsim:"\u227f",Scy:"\u0421",scy:"\u0441",sdotb:"\u22a1",sdot:"\u22c5",sdote:"\u2a66",searhk:"\u2925",searr:"\u2198",seArr:"\u21d8",searrow:"\u2198",sect:"\xa7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\ud835\udd16",sfr:"\ud835\udd30",sfrown:"\u2322",sharp:"\u266f",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xad",Sigma:"\u03a3",sigma:"\u03c3",sigmaf:"\u03c2",sigmav:"\u03c2",sim:"\u223c",simdot:"\u2a6a",sime:"\u2243",simeq:"\u2243",simg:"\u2a9e",simgE:"\u2aa0",siml:"\u2a9d",simlE:"\u2a9f",simne:"\u2246",simplus:"\u2a24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2a33",smeparsl:"\u29e4",smid:"\u2223",smile:"\u2323",smt:"\u2aaa",smte:"\u2aac",smtes:"\u2aac\ufe00",SOFTcy:"\u042c",softcy:"\u044c",solbar:"\u233f",solb:"\u29c4",sol:"/",Sopf:"\ud835\udd4a",sopf:"\ud835\udd64",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\ufe00",sqcup:"\u2294",sqcups:"\u2294\ufe00",Sqrt:"\u221a",sqsub:"\u228f",sqsube:"\u2291",sqsubset:"\u228f",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25a1",Square:"\u25a1",SquareIntersection:"\u2293",SquareSubset:"\u228f",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25aa",squ:"\u25a1",squf:"\u25aa",srarr:"\u2192",Sscr:"\ud835\udcae",sscr:"\ud835\udcc8",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22c6",Star:"\u22c6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03f5",straightphi:"\u03d5",strns:"\xaf",sub:"\u2282",Sub:"\u22d0",subdot:"\u2abd",subE:"\u2ac5",sube:"\u2286",subedot:"\u2ac3",submult:"\u2ac1",subnE:"\u2acb",subne:"\u228a",subplus:"\u2abf",subrarr:"\u2979",subset:"\u2282",Subset:"\u22d0",subseteq:"\u2286",subseteqq:"\u2ac5",SubsetEqual:"\u2286",subsetneq:"\u228a",subsetneqq:"\u2acb",subsim:"\u2ac7",subsub:"\u2ad5",subsup:"\u2ad3",succapprox:"\u2ab8",succ:"\u227b",succcurlyeq:"\u227d",Succeeds:"\u227b",SucceedsEqual:"\u2ab0",SucceedsSlantEqual:"\u227d",SucceedsTilde:"\u227f",succeq:"\u2ab0",succnapprox:"\u2aba",succneqq:"\u2ab6",succnsim:"\u22e9",succsim:"\u227f",SuchThat:"\u220b",sum:"\u2211",Sum:"\u2211",sung:"\u266a",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"\u2283",Sup:"\u22d1",supdot:"\u2abe",supdsub:"\u2ad8",supE:"\u2ac6",supe:"\u2287",supedot:"\u2ac4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27c9",suphsub:"\u2ad7",suplarr:"\u297b",supmult:"\u2ac2",supnE:"\u2acc",supne:"\u228b",supplus:"\u2ac0",supset:"\u2283",Supset:"\u22d1",supseteq:"\u2287",supseteqq:"\u2ac6",supsetneq:"\u228b",supsetneqq:"\u2acc",supsim:"\u2ac8",supsub:"\u2ad4",supsup:"\u2ad6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21d9",swarrow:"\u2199",swnwar:"\u292a",szlig:"\xdf",Tab:"\t",target:"\u2316",Tau:"\u03a4",tau:"\u03c4",tbrk:"\u23b4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20db",telrec:"\u2315",Tfr:"\ud835\udd17",tfr:"\ud835\udd31",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03b8",thetasym:"\u03d1",thetav:"\u03d1",thickapprox:"\u2248",thicksim:"\u223c",ThickSpace:"\u205f\u200a",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223c",THORN:"\xde",thorn:"\xfe",tilde:"\u02dc",Tilde:"\u223c",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2a31",timesb:"\u22a0",times:"\xd7",timesd:"\u2a30",tint:"\u222d",toea:"\u2928",topbot:"\u2336",topcir:"\u2af1",top:"\u22a4",Topf:"\ud835\udd4b",topf:"\ud835\udd65",topfork:"\u2ada",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25b5",triangledown:"\u25bf",triangleleft:"\u25c3",trianglelefteq:"\u22b4",triangleq:"\u225c",triangleright:"\u25b9",trianglerighteq:"\u22b5",tridot:"\u25ec",trie:"\u225c",triminus:"\u2a3a",TripleDot:"\u20db",triplus:"\u2a39",trisb:"\u29cd",tritime:"\u2a3b",trpezium:"\u23e2",Tscr:"\ud835\udcaf",tscr:"\ud835\udcc9",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040b",tshcy:"\u045b",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226c",twoheadleftarrow:"\u219e",twoheadrightarrow:"\u21a0",Uacute:"\xda",uacute:"\xfa",uarr:"\u2191",Uarr:"\u219f",uArr:"\u21d1",Uarrocir:"\u2949",Ubrcy:"\u040e",ubrcy:"\u045e",Ubreve:"\u016c",ubreve:"\u016d",Ucirc:"\xdb",ucirc:"\xfb",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21c5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296e",ufisht:"\u297e",Ufr:"\ud835\udd18",ufr:"\ud835\udd32",Ugrave:"\xd9",ugrave:"\xf9",uHar:"\u2963",uharl:"\u21bf",uharr:"\u21be",uhblk:"\u2580",ulcorn:"\u231c",ulcorner:"\u231c",ulcrop:"\u230f",ultri:"\u25f8",Umacr:"\u016a",umacr:"\u016b",uml:"\xa8",UnderBar:"_",UnderBrace:"\u23df",UnderBracket:"\u23b5",UnderParenthesis:"\u23dd",Union:"\u22c3",UnionPlus:"\u228e",Uogon:"\u0172",uogon:"\u0173",Uopf:"\ud835\udd4c",uopf:"\ud835\udd66",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21d1",UpArrowDownArrow:"\u21c5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21d5",UpEquilibrium:"\u296e",upharpoonleft:"\u21bf",upharpoonright:"\u21be",uplus:"\u228e",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03c5",Upsi:"\u03d2",upsih:"\u03d2",Upsilon:"\u03a5",upsilon:"\u03c5",UpTeeArrow:"\u21a5",UpTee:"\u22a5",upuparrows:"\u21c8",urcorn:"\u231d",urcorner:"\u231d",urcrop:"\u230e",Uring:"\u016e",uring:"\u016f",urtri:"\u25f9",Uscr:"\ud835\udcb0",uscr:"\ud835\udcca",utdot:"\u22f0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25b5",utrif:"\u25b4",uuarr:"\u21c8",Uuml:"\xdc",uuml:"\xfc",uwangle:"\u29a7",vangrt:"\u299c",varepsilon:"\u03f5",varkappa:"\u03f0",varnothing:"\u2205",varphi:"\u03d5",varpi:"\u03d6",varpropto:"\u221d",varr:"\u2195",vArr:"\u21d5",varrho:"\u03f1",varsigma:"\u03c2",varsubsetneq:"\u228a\ufe00",varsubsetneqq:"\u2acb\ufe00",varsupsetneq:"\u228b\ufe00",varsupsetneqq:"\u2acc\ufe00",vartheta:"\u03d1",vartriangleleft:"\u22b2",vartriangleright:"\u22b3",vBar:"\u2ae8",Vbar:"\u2aeb",vBarv:"\u2ae9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22a2",vDash:"\u22a8",Vdash:"\u22a9",VDash:"\u22ab",Vdashl:"\u2ae6",veebar:"\u22bb",vee:"\u2228",Vee:"\u22c1",veeeq:"\u225a",vellip:"\u22ee",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200a",Vfr:"\ud835\udd19",vfr:"\ud835\udd33",vltri:"\u22b2",vnsub:"\u2282\u20d2",vnsup:"\u2283\u20d2",Vopf:"\ud835\udd4d",vopf:"\ud835\udd67",vprop:"\u221d",vrtri:"\u22b3",Vscr:"\ud835\udcb1",vscr:"\ud835\udccb",vsubnE:"\u2acb\ufe00",vsubne:"\u228a\ufe00",vsupnE:"\u2acc\ufe00",vsupne:"\u228b\ufe00",Vvdash:"\u22aa",vzigzag:"\u299a",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2a5f",wedge:"\u2227",Wedge:"\u22c0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\ud835\udd1a",wfr:"\ud835\udd34",Wopf:"\ud835\udd4e",wopf:"\ud835\udd68",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\ud835\udcb2",wscr:"\ud835\udccc",xcap:"\u22c2",xcirc:"\u25ef",xcup:"\u22c3",xdtri:"\u25bd",Xfr:"\ud835\udd1b",xfr:"\ud835\udd35",xharr:"\u27f7",xhArr:"\u27fa",Xi:"\u039e",xi:"\u03be",xlarr:"\u27f5",xlArr:"\u27f8",xmap:"\u27fc",xnis:"\u22fb",xodot:"\u2a00",Xopf:"\ud835\udd4f",xopf:"\ud835\udd69",xoplus:"\u2a01",xotime:"\u2a02",xrarr:"\u27f6",xrArr:"\u27f9",Xscr:"\ud835\udcb3",xscr:"\ud835\udccd",xsqcup:"\u2a06",xuplus:"\u2a04",xutri:"\u25b3",xvee:"\u22c1",xwedge:"\u22c0",Yacute:"\xdd",yacute:"\xfd",YAcy:"\u042f",yacy:"\u044f",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042b",ycy:"\u044b",yen:"\xa5",Yfr:"\ud835\udd1c",yfr:"\ud835\udd36",YIcy:"\u0407",yicy:"\u0457",Yopf:"\ud835\udd50",yopf:"\ud835\udd6a",Yscr:"\ud835\udcb4",yscr:"\ud835\udcce",YUcy:"\u042e",yucy:"\u044e",yuml:"\xff",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017a",Zcaron:"\u017d",zcaron:"\u017e",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017b",zdot:"\u017c",zeetrf:"\u2128",ZeroWidthSpace:"\u200b",Zeta:"\u0396",zeta:"\u03b6",zfr:"\ud835\udd37",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21dd",zopf:"\ud835\udd6b",Zopf:"\u2124",Zscr:"\ud835\udcb5",zscr:"\ud835\udccf",zwj:"\u200d",zwnj:"\u200c"};},{}],53:[function(e,r,t){function n(e){return Array.prototype.slice.call(arguments,1).forEach(function(r){r&&Object.keys(r).forEach(function(t){e[t]=r[t];});}),e}function s(e){return Object.prototype.toString.call(e)}function o(e){return "[object String]"===s(e)}function i(e){return "[object Object]"===s(e)}function a(e){return "[object RegExp]"===s(e)}function c(e){return "[object Function]"===s(e)}function l(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function u(e){return Object.keys(e||{}).reduce(function(e,r){return e||b.hasOwnProperty(r)},false)}function p(e){e.__index__=-1,e.__text_cache__="";}function h(e){return function(r,t){var n=r.slice(t);return e.test(n)?n.match(e)[0].length:0}}function f(){return function(e,r){r.normalize(e);}}function d(r){function t(e){return e.replace("%TLDS%",s.src_tlds)}function n(e,r){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+r)}var s=r.re=e("./lib/re")(r.__opts__),u=r.__tlds__.slice();r.onCompile(),r.__tlds_replaced__||u.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),u.push(s.src_xn),s.src_tlds=u.join("|"),s.email_fuzzy=RegExp(t(s.tpl_email_fuzzy),"i"),s.link_fuzzy=RegExp(t(s.tpl_link_fuzzy),"i"),s.link_no_ip_fuzzy=RegExp(t(s.tpl_link_no_ip_fuzzy),"i"),s.host_fuzzy_test=RegExp(t(s.tpl_host_fuzzy_test),"i");var d=[];r.__compiled__={},Object.keys(r.__schemas__).forEach(function(e){var t=r.__schemas__[e];if(null!==t){var s={validate:null,link:null};return r.__compiled__[e]=s,i(t)?(a(t.validate)?s.validate=h(t.validate):c(t.validate)?s.validate=t.validate:n(e,t),void(c(t.normalize)?s.normalize=t.normalize:t.normalize?n(e,t):s.normalize=f())):o(t)?void d.push(e):void n(e,t)}}),d.forEach(function(e){r.__compiled__[r.__schemas__[e]]&&(r.__compiled__[e].validate=r.__compiled__[r.__schemas__[e]].validate,r.__compiled__[e].normalize=r.__compiled__[r.__schemas__[e]].normalize);}),r.__compiled__[""]={validate:null,normalize:f()};var m=Object.keys(r.__compiled__).filter(function(e){return e.length>0&&r.__compiled__[e]}).map(l).join("|");r.re.schema_test=RegExp("(^|(?!_)(?:[><\uff5c]|"+s.src_ZPCc+"))("+m+")","i"),r.re.schema_search=RegExp("(^|(?!_)(?:[><\uff5c]|"+s.src_ZPCc+"))("+m+")","ig"),r.re.pretest=RegExp("("+r.re.schema_test.source+")|("+r.re.host_fuzzy_test.source+")|@","i"),p(r);}function m(e,r){var t=e.__index__,n=e.__last_index__,s=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+r,this.lastIndex=n+r,this.raw=s,this.text=s,this.url=s;}function _(e,r){var t=new m(e,r);return e.__compiled__[t.schema].normalize(t,e),t}function g(e,r){if(!(this instanceof g))return new g(e,r);r||u(e)&&(r=e,e={}),this.__opts__=n({},b,r),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=n({},k,e),this.__compiled__={},this.__tlds__=v,this.__tlds_replaced__=false,this.re={},d(this);}var b={fuzzyLink:true,fuzzyEmail:true,fuzzyIP:false},k={"http:":{validate:function(e,r,t){var n=e.slice(r);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,r,t){var n=e.slice(r);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?r>=3&&":"===e[r-3]?0:r>=3&&"/"===e[r-3]?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,r,t){var n=e.slice(r);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},v="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");g.prototype.add=function(e,r){return this.__schemas__[e]=r,d(this),this},g.prototype.set=function(e){return this.__opts__=n(this.__opts__,e),this},g.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return  false;var r,t,n,s,o,i,a,c;if(this.re.schema_test.test(e))for(a=this.re.schema_search,a.lastIndex=0;null!==(r=a.exec(e));)if(s=this.testSchemaAt(e,r[2],a.lastIndex)){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+s;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||c<this.__index__)&&null!==(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(o=t.index+t[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=t.index+t[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&e.indexOf("@")>=0&&null!==(n=e.match(this.re.email_fuzzy))&&(o=n.index+n[1].length,i=n.index+n[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=i)),this.__index__>=0},g.prototype.pretest=function(e){return this.re.pretest.test(e)},g.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0},g.prototype.match=function(e){var r=0,t=[];this.__index__>=0&&this.__text_cache__===e&&(t.push(_(this,r)),r=this.__last_index__);for(var n=r?e.slice(r):e;this.test(n);)t.push(_(this,r)),n=n.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null},g.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,r,t){return e!==t[r-1]}).reverse(),d(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=true,d(this),this)},g.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url);},g.prototype.onCompile=function(){},r.exports=g;},{"./lib/re":54}],54:[function(e,r,t){r.exports=function(r){var t={};t.src_Any=e("uc.micro/properties/Any/regex").source,t.src_Cc=e("uc.micro/categories/Cc/regex").source,t.src_Z=e("uc.micro/categories/Z/regex").source,t.src_P=e("uc.micro/categories/P/regex").source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");return t.src_pseudo_letter="(?:(?![><\uff5c]|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|[><\uff5c]|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|[><\uff5c]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+t.src_ZCc+"|[.]).|"+(r&&r["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+t.src_ZCc+").|\\!(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-(?!-)|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|[><\uff5c]|\\(|"+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|"+t.src_ZPCc+"))((?![$+<=>^`|\uff5c])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|"+t.src_ZPCc+"))((?![$+<=>^`|\uff5c])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t};},{
		"uc.micro/categories/Cc/regex":61,"uc.micro/categories/P/regex":63,"uc.micro/categories/Z/regex":64,"uc.micro/properties/Any/regex":66}],55:[function(e,r,t){function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),n.push(t);for(r=0;r<e.length;r++)t=e.charCodeAt(r),n[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return n}function s(e,r){var t;return "string"!=typeof r&&(r=s.defaultChars),t=n(r),e.replace(/(%[a-f0-9]{2})+/gi,function(e){var r,n,s,o,i,a,c,l="";for(r=0,n=e.length;r<n;r+=3)s=parseInt(e.slice(r+1,r+3),16),s<128?l+=t[s]:192==(224&s)&&r+3<n&&128==(192&(o=parseInt(e.slice(r+4,r+6),16)))?(c=s<<6&1984|63&o,l+=c<128?"\ufffd\ufffd":String.fromCharCode(c),r+=3):224==(240&s)&&r+6<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),128==(192&o)&&128==(192&i))?(c=s<<12&61440|o<<6&4032|63&i,l+=c<2048||c>=55296&&c<=57343?"\ufffd\ufffd\ufffd":String.fromCharCode(c),r+=6):240==(248&s)&&r+9<n&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),a=parseInt(e.slice(r+10,r+12),16),128==(192&o)&&128==(192&i)&&128==(192&a))?(c=s<<18&1835008|o<<12&258048|i<<6&4032|63&a,c<65536||c>1114111?l+="\ufffd\ufffd\ufffd\ufffd":(c-=65536,l+=String.fromCharCode(55296+(c>>10),56320+(1023&c))),r+=9):l+="\ufffd";return l})}var o={};s.defaultChars=";/?:@&=+$,#",s.componentChars="",r.exports=s;},{}],56:[function(e,r,t){function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;r<128;r++)t=String.fromCharCode(r),/^[0-9a-z]$/i.test(t)?n.push(t):n.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2));for(r=0;r<e.length;r++)n[e.charCodeAt(r)]=e[r];return n}function s(e,r,t){var o,i,a,c,l,u="";for("string"!=typeof r&&(t=r,r=s.defaultChars),void 0===t&&(t=true),l=n(r),o=0,i=e.length;o<i;o++)if(a=e.charCodeAt(o),t&&37===a&&o+2<i&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3)))u+=e.slice(o,o+3),o+=2;else if(a<128)u+=l[a];else if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&o+1<i&&(c=e.charCodeAt(o+1))>=56320&&c<=57343){u+=encodeURIComponent(e[o]+e[o+1]),o++;continue}u+="%EF%BF%BD";}else u+=encodeURIComponent(e[o]);return u}var o={};s.defaultChars=";/?:@&=+$,-_.!~*'()#",s.componentChars="-_.!~*'()",r.exports=s;},{}],57:[function(e,r,t){r.exports=function(e){var r="";return r+=e.protocol||"",r+=e.slashes?"//":"",r+=e.auth?e.auth+"@":"",r+=e.hostname&&e.hostname.indexOf(":")!==-1?"["+e.hostname+"]":e.hostname||"",r+=e.port?":"+e.port:"",r+=e.pathname||"",r+=e.search||"",r+=e.hash||""};},{}],58:[function(e,r,t){r.exports.encode=e("./encode"),r.exports.decode=e("./decode"),r.exports.format=e("./format"),r.exports.parse=e("./parse");},{"./decode":55,"./encode":56,"./format":57,"./parse":59}],59:[function(e,r,t){function n(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null;}function s(e,r){if(e&&e instanceof n)return e;var t=new n;return t.parse(e,r),t}var o=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,a=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["<",">",'"',"`"," ","\r","\n","\t"],l=["{","}","|","\\","^","`"].concat(c),u=["'"].concat(l),p=["%","/","?",";","#"].concat(u),h=["/","?","#"],f={javascript:true,"javascript:":true},d={http:true,https:true,ftp:true,gopher:true,file:true,"http:":true,"https:":true,"ftp:":true,"gopher:":true,"file:":true};n.prototype.parse=function(e,r){var t,n,s,i,c,l=e;if(l=l.trim(),!r&&1===e.split("#").length){var u=a.exec(l);if(u)return this.pathname=u[1],u[2]&&(this.search=u[2]),this}var m=o.exec(l);if(m&&(m=m[0],s=m.toLowerCase(),this.protocol=m,l=l.substr(m.length)),(r||m||l.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(c="//"===l.substr(0,2))||m&&f[m]||(l=l.substr(2),this.slashes=true)),!f[m]&&(c||m&&!d[m])){var _=-1;for(t=0;t<h.length;t++)(i=l.indexOf(h[t]))!==-1&&(_===-1||i<_)&&(_=i);var g,b;for(b=_===-1?l.lastIndexOf("@"):l.lastIndexOf("@",_),b!==-1&&(g=l.slice(0,b),l=l.slice(b+1),this.auth=g),_=-1,t=0;t<p.length;t++)(i=l.indexOf(p[t]))!==-1&&(_===-1||i<_)&&(_=i);_===-1&&(_=l.length),":"===l[_-1]&&_--;var k=l.slice(0,_);l=l.slice(_),this.parseHost(k),this.hostname=this.hostname||"";var v="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!v){var y=this.hostname.split(/\./);for(t=0,n=y.length;t<n;t++){var x=y[t];if(x&&!x.match(/^[+a-z0-9A-Z_-]{0,63}$/)){for(var C="",A=0,w=x.length;A<w;A++)C+=x.charCodeAt(A)>127?"x":x[A];if(!C.match(/^[+a-z0-9A-Z_-]{0,63}$/)){var D=y.slice(0,t),q=y.slice(t+1),E=x.match(/^([+a-z0-9A-Z_-]{0,63})(.*)$/);E&&(D.push(E[1]),q.unshift(E[2])),q.length&&(l=q.join(".")+l),this.hostname=D.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2));}var S=l.indexOf("#");S!==-1&&(this.hash=l.substr(S),l=l.slice(0,S));var F=l.indexOf("?");return F!==-1&&(this.search=l.substr(F),l=l.slice(0,F)),l&&(this.pathname=l),d[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this},n.prototype.parseHost=function(e){var r=i.exec(e);r&&(r=r[0],":"!==r&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e);},r.exports=s;},{}],60:[function(r,t,n){(function(r){!function(s){function o(e){throw new RangeError(w[e])}function i(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function a(e,r){var t=e.split("@"),n="";return t.length>1&&(n=t[0]+"@",e=t[1]),e=e.replace(/[\x2E\u3002\uFF0E\uFF61]/g,"."),n+i(e.split("."),r).join(".")}function c(e){for(var r,t,n=[],s=0,o=e.length;s<o;)r=e.charCodeAt(s++),r>=55296&&r<=56319&&s<o?(t=e.charCodeAt(s++),56320==(64512&t)?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),s--)):n.push(r);return n}function l(e){return i(e,function(e){var r="";return e>65535&&(e-=65536,r+=q(e>>>10&1023|55296),e=56320|1023&e),r+=q(e)}).join("")}function u(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:36}function p(e,r){return e+22+75*(e<26)-((0!=r)<<5)}function h(e,r,t){var n=0;for(e=t?D(e/700):e>>1,e+=D(e/r);e>455;n+=36)e=D(e/35);return D(n+36*e/(e+38))}function f(e){var r,t,n,s,i,a,c,p,f,d,m=[],_=e.length,g=0,b=128,k=72;for(t=e.lastIndexOf("-"),t<0&&(t=0),n=0;n<t;++n)e.charCodeAt(n)>=128&&o("not-basic"),m.push(e.charCodeAt(n));for(s=t>0?t+1:0;s<_;){for(i=g,a=1,c=36;s>=_&&o("invalid-input"),p=u(e.charCodeAt(s++)),(p>=36||p>D((x-g)/a))&&o("overflow"),g+=p*a,f=c<=k?1:c>=k+26?26:c-k,!(p<f);c+=36)d=36-f,a>D(x/d)&&o("overflow"),a*=d;r=m.length+1,k=h(g-i,r,0==i),D(g/r)>x-b&&o("overflow"),b+=D(g/r),g%=r,m.splice(g++,0,b);}return l(m)}function d(e){var r,t,n,s,i,a,l,u,f,d,m,_,g,b,k,v=[];for(e=c(e),_=e.length,r=128,t=0,i=72,a=0;a<_;++a)(m=e[a])<128&&v.push(q(m));for(n=s=v.length,s&&v.push("-");n<_;){for(l=x,a=0;a<_;++a)(m=e[a])>=r&&m<l&&(l=m);for(g=n+1,l-r>D((x-t)/g)&&o("overflow"),t+=(l-r)*g,r=l,a=0;a<_;++a)if(m=e[a],m<r&&++t>x&&o("overflow"),m==r){for(u=t,f=36;d=f<=i?1:f>=i+26?26:f-i,!(u<d);f+=36)k=u-d,b=36-d,v.push(q(p(d+k%b,0))),u=D(k/b);v.push(q(p(u,0))),i=h(t,g,n==s),t=0,++n;}++t,++r;}return v.join("")}function m(e){return a(e,function(e){return C.test(e)?f(e.slice(4).toLowerCase()):e})}function _(e){return a(e,function(e){return A.test(e)?"xn--"+d(e):e})}var g="object"==typeof n&&n&&!n.nodeType&&n,b="object"==typeof t&&t&&!t.nodeType&&t,k="object"==typeof r&&r;k.global!==k&&k.window!==k&&k.self!==k||(s=k);var v,y,x=2147483647,C=/^xn--/,A=/[^\x20-\x7E]/,w={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=Math.floor,q=String.fromCharCode;if(v={version:"1.4.1",ucs2:{decode:c,encode:l},decode:f,encode:d,toASCII:_,toUnicode:m},"function"=="undefined");else if(g&&b)if(t.exports==g)b.exports=v;else for(y in v)v.hasOwnProperty(y)&&(g[y]=v[y]);else s.punycode=v;}(this);}).call(this,"undefined"!=typeof commonjsGlobal?commonjsGlobal:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});},{}],61:[function(e,r,t){r.exports=/[\0-\x1F\x7F-\x9F]/;},{}],62:[function(e,r,t){r.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;},{}],63:[function(e,r,t){r.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;},{}],64:[function(e,r,t){r.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;},{}],65:[function(e,r,t){t.Any=e("./properties/Any/regex"),t.Cc=e("./categories/Cc/regex"),t.Cf=e("./categories/Cf/regex"),t.P=e("./categories/P/regex"),t.Z=e("./categories/Z/regex");},{"./categories/Cc/regex":61,"./categories/Cf/regex":62,"./categories/P/regex":63,"./categories/Z/regex":64,"./properties/Any/regex":66}],66:[function(e,r,t){r.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;},{}],67:[function(e,r,t){r.exports=e("./lib/");},{"./lib/":9}]},{},[67])(67)}); 
	} (markdown$1));
	return markdown$1.exports;
}

var markdown;
var hasRequiredMarkdown;

function requireMarkdown () {
	if (hasRequiredMarkdown) return markdown;
	hasRequiredMarkdown = 1;
	let hljs;
	hljs = requireHighlight();

	const config = requireConfig(),
	    mdOption = (()=>{
	        let result = {
	            html: true,
	            xhtmlOut: true,
	            typographer: true,
	            breaks: true,
	        };

	        if(config.highlight.length && hljs){
	            result.highlight = (code,lang,callback)=>{
	                let lineLen = code.split(/\r|\n/ig).length,
	                    result = hljs.highlightAuto(code).value;

	                    // 代码块多换行的问题
	                    result = result.replace(/(\r|\n){2,}/g, str => {
	                        return new Array(str.length).join("<p>&nbsp;</p>")
	                    });
	                    result = result.replace(/\r|\n/g, str => {
	                        return "<br/>"
	                    });

	                    // 代码空格处理
	                    result = result.replace(/>[^<]+</g,str => {
	                        return str.replace(/\s/g,"&nbsp;");
	                    }).replace(/\t/g,new Array(4).join("&nbsp;"));

	                if(config.showLineNumber){
	                    let lineStr = (()=>{
	                        let str = `<ul class="h2w__lineNum">`;
	                        for(let i=0;i<lineLen-1;i++){
	                            str += `<li class="h2w__lineNumLine">${i+1}</li>`;
	                        }
	                        str += `</ul>`;
	                        return str;
	                    })();
	                    return lineStr + result;
	                }	                return result;
	            };
	        }	        return result;
	    })(),
	    md = requireMarkdown$1()(mdOption);

	// 应用Markdown解析扩展，包括自定义组件（['sub','sup','ins','mark','emoji','todo','latex','yuml','echarts']）
	// [...config.markdown,...config.components].forEach(item => {
	//     if(!/^audio-player|table|todogroup|img$/.test(item)){
	//         md.use(require(`./plugins/${item}`));
	//     };
	// });
	//@regMarkdownPlugins

	// 定义emoji渲染规则
	md.renderer.rules.emoji = (token,index)=>{
	    let item = token[index];
	    return `<g-emoji class="h2w__emoji h2w__emoji--${item.markup}">${item.content}</g-emoji>`;
	};

	// 导出模块
	markdown = str => {
	    return md.render(str);
	};
	return markdown;
}

var domelementtype = {};

var hasRequiredDomelementtype;

function requireDomelementtype () {
	if (hasRequiredDomelementtype) return domelementtype;
	hasRequiredDomelementtype = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
		/** Types of elements found in htmlparser2's DOM */
		var ElementType;
		(function (ElementType) {
		    /** Type for the root element of a document */
		    ElementType["Root"] = "root";
		    /** Type for Text */
		    ElementType["Text"] = "text";
		    /** Type for <? ... ?> */
		    ElementType["Directive"] = "directive";
		    /** Type for <!-- ... --> */
		    ElementType["Comment"] = "comment";
		    /** Type for <script> tags */
		    ElementType["Script"] = "script";
		    /** Type for <style> tags */
		    ElementType["Style"] = "style";
		    /** Type for Any tag */
		    ElementType["Tag"] = "tag";
		    /** Type for <![CDATA[ ... ]]> */
		    ElementType["CDATA"] = "cdata";
		    /** Type for <!doctype ...> */
		    ElementType["Doctype"] = "doctype";
		})(ElementType = exports.ElementType || (exports.ElementType = {}));
		/**
		 * Tests whether an element is a tag or not.
		 *
		 * @param elem Element to test
		 */
		function isTag(elem) {
		    return (elem.type === ElementType.Tag ||
		        elem.type === ElementType.Script ||
		        elem.type === ElementType.Style);
		}
		exports.isTag = isTag;
		// Exports for backwards compatibility
		/** Type for the root element of a document */
		exports.Root = ElementType.Root;
		/** Type for Text */
		exports.Text = ElementType.Text;
		/** Type for <? ... ?> */
		exports.Directive = ElementType.Directive;
		/** Type for <!-- ... --> */
		exports.Comment = ElementType.Comment;
		/** Type for <script> tags */
		exports.Script = ElementType.Script;
		/** Type for <style> tags */
		exports.Style = ElementType.Style;
		/** Type for Any tag */
		exports.Tag = ElementType.Tag;
		/** Type for <![CDATA[ ... ]]> */
		exports.CDATA = ElementType.CDATA;
		/** Type for <!doctype ...> */
		exports.Doctype = ElementType.Doctype; 
	} (domelementtype));
	return domelementtype;
}

var node = {};

var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node;
	hasRequiredNode = 1;
	var __extends = (node && node.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __assign = (node && node.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	Object.defineProperty(node, "__esModule", { value: true });
	node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.CDATA = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
	var domelementtype_1 = requireDomelementtype();
	/**
	 * This object will be used as the prototype for Nodes when creating a
	 * DOM-Level-1-compliant structure.
	 */
	var Node = /** @class */ (function () {
	    function Node() {
	        /** Parent of the node */
	        this.parent = null;
	        /** Previous sibling */
	        this.prev = null;
	        /** Next sibling */
	        this.next = null;
	        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
	        this.startIndex = null;
	        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
	        this.endIndex = null;
	    }
	    Object.defineProperty(Node.prototype, "parentNode", {
	        // Read-write aliases for properties
	        /**
	         * Same as {@link parent}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.parent;
	        },
	        set: function (parent) {
	            this.parent = parent;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "previousSibling", {
	        /**
	         * Same as {@link prev}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.prev;
	        },
	        set: function (prev) {
	            this.prev = prev;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Node.prototype, "nextSibling", {
	        /**
	         * Same as {@link next}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.next;
	        },
	        set: function (next) {
	            this.next = next;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    /**
	     * Clone this node, and optionally its children.
	     *
	     * @param recursive Clone child nodes as well.
	     * @returns A clone of the node.
	     */
	    Node.prototype.cloneNode = function (recursive) {
	        if (recursive === void 0) { recursive = false; }
	        return cloneNode(this, recursive);
	    };
	    return Node;
	}());
	node.Node = Node;
	/**
	 * A node that contains some data.
	 */
	var DataNode = /** @class */ (function (_super) {
	    __extends(DataNode, _super);
	    /**
	     * @param data The content of the data node
	     */
	    function DataNode(data) {
	        var _this = _super.call(this) || this;
	        _this.data = data;
	        return _this;
	    }
	    Object.defineProperty(DataNode.prototype, "nodeValue", {
	        /**
	         * Same as {@link data}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.data;
	        },
	        set: function (data) {
	            this.data = data;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return DataNode;
	}(Node));
	node.DataNode = DataNode;
	/**
	 * Text within the document.
	 */
	var Text = /** @class */ (function (_super) {
	    __extends(Text, _super);
	    function Text() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.type = domelementtype_1.ElementType.Text;
	        return _this;
	    }
	    Object.defineProperty(Text.prototype, "nodeType", {
	        get: function () {
	            return 3;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Text;
	}(DataNode));
	node.Text = Text;
	/**
	 * Comments within the document.
	 */
	var Comment = /** @class */ (function (_super) {
	    __extends(Comment, _super);
	    function Comment() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.type = domelementtype_1.ElementType.Comment;
	        return _this;
	    }
	    Object.defineProperty(Comment.prototype, "nodeType", {
	        get: function () {
	            return 8;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Comment;
	}(DataNode));
	node.Comment = Comment;
	/**
	 * Processing instructions, including doc types.
	 */
	var ProcessingInstruction = /** @class */ (function (_super) {
	    __extends(ProcessingInstruction, _super);
	    function ProcessingInstruction(name, data) {
	        var _this = _super.call(this, data) || this;
	        _this.name = name;
	        _this.type = domelementtype_1.ElementType.Directive;
	        return _this;
	    }
	    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
	        get: function () {
	            return 1;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return ProcessingInstruction;
	}(DataNode));
	node.ProcessingInstruction = ProcessingInstruction;
	/**
	 * A `Node` that can have children.
	 */
	var NodeWithChildren = /** @class */ (function (_super) {
	    __extends(NodeWithChildren, _super);
	    /**
	     * @param children Children of the node. Only certain node types can have children.
	     */
	    function NodeWithChildren(children) {
	        var _this = _super.call(this) || this;
	        _this.children = children;
	        return _this;
	    }
	    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
	        // Aliases
	        /** First child of the node. */
	        get: function () {
	            var _a;
	            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
	        /** Last child of the node. */
	        get: function () {
	            return this.children.length > 0
	                ? this.children[this.children.length - 1]
	                : null;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
	        /**
	         * Same as {@link children}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.children;
	        },
	        set: function (children) {
	            this.children = children;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return NodeWithChildren;
	}(Node));
	node.NodeWithChildren = NodeWithChildren;
	var CDATA = /** @class */ (function (_super) {
	    __extends(CDATA, _super);
	    function CDATA() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.type = domelementtype_1.ElementType.CDATA;
	        return _this;
	    }
	    Object.defineProperty(CDATA.prototype, "nodeType", {
	        get: function () {
	            return 4;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return CDATA;
	}(NodeWithChildren));
	node.CDATA = CDATA;
	/**
	 * The root node of the document.
	 */
	var Document = /** @class */ (function (_super) {
	    __extends(Document, _super);
	    function Document() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.type = domelementtype_1.ElementType.Root;
	        return _this;
	    }
	    Object.defineProperty(Document.prototype, "nodeType", {
	        get: function () {
	            return 9;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Document;
	}(NodeWithChildren));
	node.Document = Document;
	/**
	 * An element within the DOM.
	 */
	var Element = /** @class */ (function (_super) {
	    __extends(Element, _super);
	    /**
	     * @param name Name of the tag, eg. `div`, `span`.
	     * @param attribs Object mapping attribute names to attribute values.
	     * @param children Children of the node.
	     */
	    function Element(name, attribs, children, type) {
	        if (children === void 0) { children = []; }
	        if (type === void 0) { type = name === "script"
	            ? domelementtype_1.ElementType.Script
	            : name === "style"
	                ? domelementtype_1.ElementType.Style
	                : domelementtype_1.ElementType.Tag; }
	        var _this = _super.call(this, children) || this;
	        _this.name = name;
	        _this.attribs = attribs;
	        _this.type = type;
	        return _this;
	    }
	    Object.defineProperty(Element.prototype, "nodeType", {
	        get: function () {
	            return 1;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Element.prototype, "tagName", {
	        // DOM Level 1 aliases
	        /**
	         * Same as {@link name}.
	         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
	         */
	        get: function () {
	            return this.name;
	        },
	        set: function (name) {
	            this.name = name;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Element.prototype, "attributes", {
	        get: function () {
	            var _this = this;
	            return Object.keys(this.attribs).map(function (name) {
	                var _a, _b;
	                return ({
	                    name: name,
	                    value: _this.attribs[name],
	                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
	                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
	                });
	            });
	        },
	        enumerable: false,
	        configurable: true
	    });
	    return Element;
	}(NodeWithChildren));
	node.Element = Element;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node is a `Element`, `false` otherwise.
	 */
	function isTag(node) {
	    return (0, domelementtype_1.isTag)(node);
	}
	node.isTag = isTag;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
	 */
	function isCDATA(node) {
	    return node.type === domelementtype_1.ElementType.CDATA;
	}
	node.isCDATA = isCDATA;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Text`, `false` otherwise.
	 */
	function isText(node) {
	    return node.type === domelementtype_1.ElementType.Text;
	}
	node.isText = isText;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `Comment`, `false` otherwise.
	 */
	function isComment(node) {
	    return node.type === domelementtype_1.ElementType.Comment;
	}
	node.isComment = isComment;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */
	function isDirective(node) {
	    return node.type === domelementtype_1.ElementType.Directive;
	}
	node.isDirective = isDirective;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
	 */
	function isDocument(node) {
	    return node.type === domelementtype_1.ElementType.Root;
	}
	node.isDocument = isDocument;
	/**
	 * @param node Node to check.
	 * @returns `true` if the node has children, `false` otherwise.
	 */
	function hasChildren(node) {
	    return Object.prototype.hasOwnProperty.call(node, "children");
	}
	node.hasChildren = hasChildren;
	/**
	 * Clone a node, and optionally its children.
	 *
	 * @param recursive Clone child nodes as well.
	 * @returns A clone of the node.
	 */
	function cloneNode(node, recursive) {
	    if (recursive === void 0) { recursive = false; }
	    var result;
	    if (isText(node)) {
	        result = new Text(node.data);
	    }
	    else if (isComment(node)) {
	        result = new Comment(node.data);
	    }
	    else if (isTag(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
	        children.forEach(function (child) { return (child.parent = clone_1); });
	        if (node.namespace != null) {
	            clone_1.namespace = node.namespace;
	        }
	        if (node["x-attribsNamespace"]) {
	            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
	        }
	        if (node["x-attribsPrefix"]) {
	            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
	        }
	        result = clone_1;
	    }
	    else if (isCDATA(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_2 = new CDATA(children);
	        children.forEach(function (child) { return (child.parent = clone_2); });
	        result = clone_2;
	    }
	    else if (isDocument(node)) {
	        var children = recursive ? cloneChildren(node.children) : [];
	        var clone_3 = new Document(children);
	        children.forEach(function (child) { return (child.parent = clone_3); });
	        if (node["x-mode"]) {
	            clone_3["x-mode"] = node["x-mode"];
	        }
	        result = clone_3;
	    }
	    else if (isDirective(node)) {
	        var instruction = new ProcessingInstruction(node.name, node.data);
	        if (node["x-name"] != null) {
	            instruction["x-name"] = node["x-name"];
	            instruction["x-publicId"] = node["x-publicId"];
	            instruction["x-systemId"] = node["x-systemId"];
	        }
	        result = instruction;
	    }
	    else {
	        throw new Error("Not implemented yet: ".concat(node.type));
	    }
	    result.startIndex = node.startIndex;
	    result.endIndex = node.endIndex;
	    if (node.sourceCodeLocation != null) {
	        result.sourceCodeLocation = node.sourceCodeLocation;
	    }
	    return result;
	}
	node.cloneNode = cloneNode;
	function cloneChildren(childs) {
	    var children = childs.map(function (child) { return cloneNode(child, true); });
	    for (var i = 1; i < children.length; i++) {
	        children[i].prev = children[i - 1];
	        children[i - 1].next = children[i];
	    }
	    return children;
	}
	return node;
}

var domhandler;
var hasRequiredDomhandler;

function requireDomhandler () {
	if (hasRequiredDomhandler) return domhandler;
	hasRequiredDomhandler = 1;
	var domelementtype_1 = requireDomelementtype();
	var node_js_1 = requireNode();
	var defaultOpts = {
	    withStartIndices: false,
	    withEndIndices: false,
	    xmlMode: false,
	};
	var DomHandler = /** @class */ (function () {
	    /**
	     * @param callback Called once parsing has completed.
	     * @param options Settings for the handler.
	     * @param elementCB Callback whenever a tag is closed.
	     */
	    function DomHandler(callback, options, elementCB) {
	        /** The elements of the DOM */
	        this.dom = [];
	        /** The root element for the DOM */
	        this.root = new node_js_1.Document(this.dom);
	        /** Indicated whether parsing has been completed. */
	        this.done = false;
	        /** Stack of open tags. */
	        this.tagStack = [this.root];
	        /** A data node that is still being written to. */
	        this.lastNode = null;
	        /** Reference to the parser instance. Used for location information. */
	        this.parser = null;
	        // Make it possible to skip arguments, for backwards-compatibility
	        if (typeof options === "function") {
	            elementCB = options;
	            options = defaultOpts;
	        }
	        if (typeof callback === "object") {
	            options = callback;
	            callback = undefined;
	        }
	        this.callback = callback !== null && callback !== void 0 ? callback : null;
	        this.options = options !== null && options !== void 0 ? options : defaultOpts;
	        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
	    }
	    DomHandler.prototype.onparserinit = function (parser) {
	        this.parser = parser;
	    };
	    // Resets the handler back to starting state
	    DomHandler.prototype.onreset = function () {
	        this.dom = [];
	        this.root = new node_js_1.Document(this.dom);
	        this.done = false;
	        this.tagStack = [this.root];
	        this.lastNode = null;
	        this.parser = null;
	    };
	    // Signals the handler that parsing is done
	    DomHandler.prototype.onend = function () {
	        if (this.done)
	            return;
	        this.done = true;
	        this.parser = null;
	        this.handleCallback(null);
	    };
	    DomHandler.prototype.onerror = function (error) {
	        this.handleCallback(error);
	    };
	    DomHandler.prototype.onclosetag = function () {
	        this.lastNode = null;
	        var elem = this.tagStack.pop();
	        if (this.options.withEndIndices) {
	            elem.endIndex = this.parser.endIndex;
	        }
	        if (this.elementCB)
	            this.elementCB(elem);
	    };
	    DomHandler.prototype.onopentag = function (name, attribs) {
	        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
	        var element = new node_js_1.Element(name, attribs, undefined, type);
	        this.addNode(element);
	        this.tagStack.push(element);
	    };
	    DomHandler.prototype.ontext = function (data) {
	        var lastNode = this.lastNode;
	        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
	            lastNode.data += data;
	            if (this.options.withEndIndices) {
	                lastNode.endIndex = this.parser.endIndex;
	            }
	        }
	        else {
	            var node = new node_js_1.Text(data);
	            this.addNode(node);
	            this.lastNode = node;
	        }
	    };
	    DomHandler.prototype.oncomment = function (data) {
	        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
	            this.lastNode.data += data;
	            return;
	        }
	        var node = new node_js_1.Comment(data);
	        this.addNode(node);
	        this.lastNode = node;
	    };
	    DomHandler.prototype.oncommentend = function () {
	        this.lastNode = null;
	    };
	    DomHandler.prototype.oncdatastart = function () {
	        var text = new node_js_1.Text("");
	        var node = new node_js_1.CDATA([text]);
	        this.addNode(node);
	        text.parent = node;
	        this.lastNode = text;
	    };
	    DomHandler.prototype.oncdataend = function () {
	        this.lastNode = null;
	    };
	    DomHandler.prototype.onprocessinginstruction = function (name, data) {
	        var node = new node_js_1.ProcessingInstruction(name, data);
	        this.addNode(node);
	    };
	    DomHandler.prototype.handleCallback = function (error) {
	        if (typeof this.callback === "function") {
	            this.callback(error, this.dom);
	        }
	        else if (error) {
	            throw error;
	        }
	    };
	    DomHandler.prototype.addNode = function (node) {
	        var parent = this.tagStack[this.tagStack.length - 1];
	        var previousSibling = parent.children[parent.children.length - 1];
	        if (this.options.withStartIndices) {
	            node.startIndex = this.parser.startIndex;
	        }
	        if (this.options.withEndIndices) {
	            node.endIndex = this.parser.endIndex;
	        }
	        parent.children.push(node);
	        if (previousSibling) {
	            node.prev = previousSibling;
	            previousSibling.next = node;
	        }
	        node.parent = parent;
	        this.lastNode = null;
	    };
	    return DomHandler;
	}());
	domhandler = DomHandler;
	return domhandler;
}

var Tokenizer = {exports: {}};

var decode = {};

var decodeDataHtml = {};

var hasRequiredDecodeDataHtml;

function requireDecodeDataHtml () {
	if (hasRequiredDecodeDataHtml) return decodeDataHtml;
	hasRequiredDecodeDataHtml = 1;
	// Generated using scripts/write-decode-map.ts
	Object.defineProperty(decodeDataHtml, "__esModule", { value: true });
	decodeDataHtml.default = new Uint16Array(
	// prettier-ignore
	"\u1d41<\xd5\u0131\u028a\u049d\u057b\u05d0\u0675\u06de\u07a2\u07d6\u080f\u0a4a\u0a91\u0da1\u0e6d\u0f09\u0f26\u10ca\u1228\u12e1\u1415\u149d\u14c3\u14df\u1525\0\0\0\0\0\0\u156b\u16cd\u198d\u1c12\u1ddd\u1f7e\u2060\u21b0\u228d\u23c0\u23fb\u2442\u2824\u2912\u2d08\u2e48\u2fce\u3016\u32ba\u3639\u37ac\u38fe\u3a28\u3a71\u3ae0\u3b2e\u0800EMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig\u803b\xc6\u40c6P\u803b&\u4026cute\u803b\xc1\u40c1reve;\u4102\u0100iyx}rc\u803b\xc2\u40c2;\u4410r;\uc000\ud835\udd04rave\u803b\xc0\u40c0pha;\u4391acr;\u4100d;\u6a53\u0100gp\x9d\xa1on;\u4104f;\uc000\ud835\udd38plyFunction;\u6061ing\u803b\xc5\u40c5\u0100cs\xbe\xc3r;\uc000\ud835\udc9cign;\u6254ilde\u803b\xc3\u40c3ml\u803b\xc4\u40c4\u0400aceforsu\xe5\xfb\xfe\u0117\u011c\u0122\u0127\u012a\u0100cr\xea\xf2kslash;\u6216\u0176\xf6\xf8;\u6ae7ed;\u6306y;\u4411\u0180crt\u0105\u010b\u0114ause;\u6235noullis;\u612ca;\u4392r;\uc000\ud835\udd05pf;\uc000\ud835\udd39eve;\u42d8c\xf2\u0113mpeq;\u624e\u0700HOacdefhilorsu\u014d\u0151\u0156\u0180\u019e\u01a2\u01b5\u01b7\u01ba\u01dc\u0215\u0273\u0278\u027ecy;\u4427PY\u803b\xa9\u40a9\u0180cpy\u015d\u0162\u017aute;\u4106\u0100;i\u0167\u0168\u62d2talDifferentialD;\u6145leys;\u612d\u0200aeio\u0189\u018e\u0194\u0198ron;\u410cdil\u803b\xc7\u40c7rc;\u4108nint;\u6230ot;\u410a\u0100dn\u01a7\u01adilla;\u40b8terDot;\u40b7\xf2\u017fi;\u43a7rcle\u0200DMPT\u01c7\u01cb\u01d1\u01d6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01e2\u01f8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020foubleQuote;\u601duote;\u6019\u0200lnpu\u021e\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6a74\u0180git\u022f\u0236\u023aruent;\u6261nt;\u622fourIntegral;\u622e\u0100fr\u024c\u024e;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6a2fcr;\uc000\ud835\udc9ep\u0100;C\u0284\u0285\u62d3ap;\u624d\u0580DJSZacefios\u02a0\u02ac\u02b0\u02b4\u02b8\u02cb\u02d7\u02e1\u02e6\u0333\u048d\u0100;o\u0179\u02a5trahd;\u6911cy;\u4402cy;\u4405cy;\u440f\u0180grs\u02bf\u02c4\u02c7ger;\u6021r;\u61a1hv;\u6ae4\u0100ay\u02d0\u02d5ron;\u410e;\u4414l\u0100;t\u02dd\u02de\u6207a;\u4394r;\uc000\ud835\udd07\u0100af\u02eb\u0327\u0100cm\u02f0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031ccute;\u40b4o\u0174\u030b\u030d;\u42d9bleAcute;\u42ddrave;\u4060ilde;\u42dcond;\u62c4ferentialD;\u6146\u0470\u033d\0\0\0\u0342\u0354\0\u0405f;\uc000\ud835\udd3b\u0180;DE\u0348\u0349\u034d\u40a8ot;\u60dcqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03cf\u03e2\u03f8ontourIntegra\xec\u0239o\u0274\u0379\0\0\u037b\xbb\u0349nArrow;\u61d3\u0100eo\u0387\u03a4ft\u0180ART\u0390\u0396\u03a1rrow;\u61d0ightArrow;\u61d4e\xe5\u02cang\u0100LR\u03ab\u03c4eft\u0100AR\u03b3\u03b9rrow;\u67f8ightArrow;\u67faightArrow;\u67f9ight\u0100AT\u03d8\u03derrow;\u61d2ee;\u62a8p\u0241\u03e9\0\0\u03efrrow;\u61d1ownArrow;\u61d5erticalBar;\u6225n\u0300ABLRTa\u0412\u042a\u0430\u045e\u047f\u037crrow\u0180;BU\u041d\u041e\u0422\u6193ar;\u6913pArrow;\u61f5reve;\u4311eft\u02d2\u043a\0\u0446\0\u0450ightVector;\u6950eeVector;\u695eector\u0100;B\u0459\u045a\u61bdar;\u6956ight\u01d4\u0467\0\u0471eeVector;\u695fector\u0100;B\u047a\u047b\u61c1ar;\u6957ee\u0100;A\u0486\u0487\u62a4rrow;\u61a7\u0100ct\u0492\u0497r;\uc000\ud835\udc9frok;\u4110\u0800NTacdfglmopqstux\u04bd\u04c0\u04c4\u04cb\u04de\u04e2\u04e7\u04ee\u04f5\u0521\u052f\u0536\u0552\u055d\u0560\u0565G;\u414aH\u803b\xd0\u40d0cute\u803b\xc9\u40c9\u0180aiy\u04d2\u04d7\u04dcron;\u411arc\u803b\xca\u40ca;\u442dot;\u4116r;\uc000\ud835\udd08rave\u803b\xc8\u40c8ement;\u6208\u0100ap\u04fa\u04fecr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65fberySmallSquare;\u65ab\u0100gp\u0526\u052aon;\u4118f;\uc000\ud835\udd3csilon;\u4395u\u0100ai\u053c\u0549l\u0100;T\u0542\u0543\u6a75ilde;\u6242librium;\u61cc\u0100ci\u0557\u055ar;\u6130m;\u6a73a;\u4397ml\u803b\xcb\u40cb\u0100ip\u056a\u056fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058d\u05b2\u05ccy;\u4424r;\uc000\ud835\udd09lled\u0253\u0597\0\0\u05a3mallSquare;\u65fcerySmallSquare;\u65aa\u0370\u05ba\0\u05bf\0\0\u05c4f;\uc000\ud835\udd3dAll;\u6200riertrf;\u6131c\xf2\u05cb\u0600JTabcdfgorst\u05e8\u05ec\u05ef\u05fa\u0600\u0612\u0616\u061b\u061d\u0623\u066c\u0672cy;\u4403\u803b>\u403emma\u0100;d\u05f7\u05f8\u4393;\u43dcreve;\u411e\u0180eiy\u0607\u060c\u0610dil;\u4122rc;\u411c;\u4413ot;\u4120r;\uc000\ud835\udd0a;\u62d9pf;\uc000\ud835\udd3eeater\u0300EFGLST\u0635\u0644\u064e\u0656\u065b\u0666qual\u0100;L\u063e\u063f\u6265ess;\u62dbullEqual;\u6267reater;\u6aa2ess;\u6277lantEqual;\u6a7eilde;\u6273cr;\uc000\ud835\udca2;\u626b\u0400Aacfiosu\u0685\u068b\u0696\u069b\u069e\u06aa\u06be\u06caRDcy;\u442a\u0100ct\u0690\u0694ek;\u42c7;\u405eirc;\u4124r;\u610clbertSpace;\u610b\u01f0\u06af\0\u06b2f;\u610dizontalLine;\u6500\u0100ct\u06c3\u06c5\xf2\u06a9rok;\u4126mp\u0144\u06d0\u06d8ownHum\xf0\u012fqual;\u624f\u0700EJOacdfgmnostu\u06fa\u06fe\u0703\u0707\u070e\u071a\u071e\u0721\u0728\u0744\u0778\u078b\u078f\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803b\xcd\u40cd\u0100iy\u0713\u0718rc\u803b\xce\u40ce;\u4418ot;\u4130r;\u6111rave\u803b\xcc\u40cc\u0180;ap\u0720\u072f\u073f\u0100cg\u0734\u0737r;\u412ainaryI;\u6148lie\xf3\u03dd\u01f4\u0749\0\u0762\u0100;e\u074d\u074e\u622c\u0100gr\u0753\u0758ral;\u622bsection;\u62c2isible\u0100CT\u076c\u0772omma;\u6063imes;\u6062\u0180gpt\u077f\u0783\u0788on;\u412ef;\uc000\ud835\udd40a;\u4399cr;\u6110ilde;\u4128\u01eb\u079a\0\u079ecy;\u4406l\u803b\xcf\u40cf\u0280cfosu\u07ac\u07b7\u07bc\u07c2\u07d0\u0100iy\u07b1\u07b5rc;\u4134;\u4419r;\uc000\ud835\udd0dpf;\uc000\ud835\udd41\u01e3\u07c7\0\u07ccr;\uc000\ud835\udca5rcy;\u4408kcy;\u4404\u0380HJacfos\u07e4\u07e8\u07ec\u07f1\u07fd\u0802\u0808cy;\u4425cy;\u440cppa;\u439a\u0100ey\u07f6\u07fbdil;\u4136;\u441ar;\uc000\ud835\udd0epf;\uc000\ud835\udd42cr;\uc000\ud835\udca6\u0580JTaceflmost\u0825\u0829\u082c\u0850\u0863\u09b3\u09b8\u09c7\u09cd\u0a37\u0a47cy;\u4409\u803b<\u403c\u0280cmnpr\u0837\u083c\u0841\u0844\u084dute;\u4139bda;\u439bg;\u67ealacetrf;\u6112r;\u619e\u0180aey\u0857\u085c\u0861ron;\u413ddil;\u413b;\u441b\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087e\u08a9\u08b1\u08e0\u08e6\u08fc\u092f\u095b\u0390\u096a\u0100nr\u0883\u088fgleBracket;\u67e8row\u0180;BR\u0899\u089a\u089e\u6190ar;\u61e4ightArrow;\u61c6eiling;\u6308o\u01f5\u08b7\0\u08c3bleBracket;\u67e6n\u01d4\u08c8\0\u08d2eeVector;\u6961ector\u0100;B\u08db\u08dc\u61c3ar;\u6959loor;\u630aight\u0100AV\u08ef\u08f5rrow;\u6194ector;\u694e\u0100er\u0901\u0917e\u0180;AV\u0909\u090a\u0910\u62a3rrow;\u61a4ector;\u695aiangle\u0180;BE\u0924\u0925\u0929\u62b2ar;\u69cfqual;\u62b4p\u0180DTV\u0937\u0942\u094cownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61bfar;\u6958ector\u0100;B\u0965\u0966\u61bcar;\u6952ight\xe1\u039cs\u0300EFGLST\u097e\u098b\u0995\u099d\u09a2\u09adqualGreater;\u62daullEqual;\u6266reater;\u6276ess;\u6aa1lantEqual;\u6a7dilde;\u6272r;\uc000\ud835\udd0f\u0100;e\u09bd\u09be\u62d8ftarrow;\u61daidot;\u413f\u0180npw\u09d4\u0a16\u0a1bg\u0200LRlr\u09de\u09f7\u0a02\u0a10eft\u0100AR\u09e6\u09ecrrow;\u67f5ightArrow;\u67f7ightArrow;\u67f6eft\u0100ar\u03b3\u0a0aight\xe1\u03bfight\xe1\u03caf;\uc000\ud835\udd43er\u0100LR\u0a22\u0a2ceftArrow;\u6199ightArrow;\u6198\u0180cht\u0a3e\u0a40\u0a42\xf2\u084c;\u61b0rok;\u4141;\u626a\u0400acefiosu\u0a5a\u0a5d\u0a60\u0a77\u0a7c\u0a85\u0a8b\u0a8ep;\u6905y;\u441c\u0100dl\u0a65\u0a6fiumSpace;\u605flintrf;\u6133r;\uc000\ud835\udd10nusPlus;\u6213pf;\uc000\ud835\udd44c\xf2\u0a76;\u439c\u0480Jacefostu\u0aa3\u0aa7\u0aad\u0ac0\u0b14\u0b19\u0d91\u0d97\u0d9ecy;\u440acute;\u4143\u0180aey\u0ab4\u0ab9\u0aberon;\u4147dil;\u4145;\u441d\u0180gsw\u0ac7\u0af0\u0b0eative\u0180MTV\u0ad3\u0adf\u0ae8ediumSpace;\u600bhi\u0100cn\u0ae6\u0ad8\xeb\u0ad9eryThi\xee\u0ad9ted\u0100GL\u0af8\u0b06reaterGreate\xf2\u0673essLes\xf3\u0a48Line;\u400ar;\uc000\ud835\udd11\u0200Bnpt\u0b22\u0b28\u0b37\u0b3areak;\u6060BreakingSpace;\u40a0f;\u6115\u0680;CDEGHLNPRSTV\u0b55\u0b56\u0b6a\u0b7c\u0ba1\u0beb\u0c04\u0c5e\u0c84\u0ca6\u0cd8\u0d61\u0d85\u6aec\u0100ou\u0b5b\u0b64ngruent;\u6262pCap;\u626doubleVerticalBar;\u6226\u0180lqx\u0b83\u0b8a\u0b9bement;\u6209ual\u0100;T\u0b92\u0b93\u6260ilde;\uc000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0bb6\u0bb7\u0bbd\u0bc9\u0bd3\u0bd8\u0be5\u626fqual;\u6271ullEqual;\uc000\u2267\u0338reater;\uc000\u226b\u0338ess;\u6279lantEqual;\uc000\u2a7e\u0338ilde;\u6275ump\u0144\u0bf2\u0bfdownHump;\uc000\u224e\u0338qual;\uc000\u224f\u0338e\u0100fs\u0c0a\u0c27tTriangle\u0180;BE\u0c1a\u0c1b\u0c21\u62eaar;\uc000\u29cf\u0338qual;\u62ecs\u0300;EGLST\u0c35\u0c36\u0c3c\u0c44\u0c4b\u0c58\u626equal;\u6270reater;\u6278ess;\uc000\u226a\u0338lantEqual;\uc000\u2a7d\u0338ilde;\u6274ested\u0100GL\u0c68\u0c79reaterGreater;\uc000\u2aa2\u0338essLess;\uc000\u2aa1\u0338recedes\u0180;ES\u0c92\u0c93\u0c9b\u6280qual;\uc000\u2aaf\u0338lantEqual;\u62e0\u0100ei\u0cab\u0cb9verseElement;\u620cghtTriangle\u0180;BE\u0ccb\u0ccc\u0cd2\u62ebar;\uc000\u29d0\u0338qual;\u62ed\u0100qu\u0cdd\u0d0cuareSu\u0100bp\u0ce8\u0cf9set\u0100;E\u0cf0\u0cf3\uc000\u228f\u0338qual;\u62e2erset\u0100;E\u0d03\u0d06\uc000\u2290\u0338qual;\u62e3\u0180bcp\u0d13\u0d24\u0d4eset\u0100;E\u0d1b\u0d1e\uc000\u2282\u20d2qual;\u6288ceeds\u0200;EST\u0d32\u0d33\u0d3b\u0d46\u6281qual;\uc000\u2ab0\u0338lantEqual;\u62e1ilde;\uc000\u227f\u0338erset\u0100;E\u0d58\u0d5b\uc000\u2283\u20d2qual;\u6289ilde\u0200;EFT\u0d6e\u0d6f\u0d75\u0d7f\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uc000\ud835\udca9ilde\u803b\xd1\u40d1;\u439d\u0700Eacdfgmoprstuv\u0dbd\u0dc2\u0dc9\u0dd5\u0ddb\u0de0\u0de7\u0dfc\u0e02\u0e20\u0e22\u0e32\u0e3f\u0e44lig;\u4152cute\u803b\xd3\u40d3\u0100iy\u0dce\u0dd3rc\u803b\xd4\u40d4;\u441eblac;\u4150r;\uc000\ud835\udd12rave\u803b\xd2\u40d2\u0180aei\u0dee\u0df2\u0df6cr;\u414cga;\u43a9cron;\u439fpf;\uc000\ud835\udd46enCurly\u0100DQ\u0e0e\u0e1aoubleQuote;\u601cuote;\u6018;\u6a54\u0100cl\u0e27\u0e2cr;\uc000\ud835\udcaaash\u803b\xd8\u40d8i\u016c\u0e37\u0e3cde\u803b\xd5\u40d5es;\u6a37ml\u803b\xd6\u40d6er\u0100BP\u0e4b\u0e60\u0100ar\u0e50\u0e53r;\u603eac\u0100ek\u0e5a\u0e5c;\u63deet;\u63b4arenthesis;\u63dc\u0480acfhilors\u0e7f\u0e87\u0e8a\u0e8f\u0e92\u0e94\u0e9d\u0eb0\u0efcrtialD;\u6202y;\u441fr;\uc000\ud835\udd13i;\u43a6;\u43a0usMinus;\u40b1\u0100ip\u0ea2\u0eadncareplan\xe5\u069df;\u6119\u0200;eio\u0eb9\u0eba\u0ee0\u0ee4\u6abbcedes\u0200;EST\u0ec8\u0ec9\u0ecf\u0eda\u627aqual;\u6aaflantEqual;\u627cilde;\u627eme;\u6033\u0100dp\u0ee9\u0eeeuct;\u620fortion\u0100;a\u0225\u0ef9l;\u621d\u0100ci\u0f01\u0f06r;\uc000\ud835\udcab;\u43a8\u0200Ufos\u0f11\u0f16\u0f1b\u0f1fOT\u803b\"\u4022r;\uc000\ud835\udd14pf;\u611acr;\uc000\ud835\udcac\u0600BEacefhiorsu\u0f3e\u0f43\u0f47\u0f60\u0f73\u0fa7\u0faa\u0fad\u1096\u10a9\u10b4\u10bearr;\u6910G\u803b\xae\u40ae\u0180cnr\u0f4e\u0f53\u0f56ute;\u4154g;\u67ebr\u0100;t\u0f5c\u0f5d\u61a0l;\u6916\u0180aey\u0f67\u0f6c\u0f71ron;\u4158dil;\u4156;\u4420\u0100;v\u0f78\u0f79\u611cerse\u0100EU\u0f82\u0f99\u0100lq\u0f87\u0f8eement;\u620builibrium;\u61cbpEquilibrium;\u696fr\xbb\u0f79o;\u43a1ght\u0400ACDFTUVa\u0fc1\u0feb\u0ff3\u1022\u1028\u105b\u1087\u03d8\u0100nr\u0fc6\u0fd2gleBracket;\u67e9row\u0180;BL\u0fdc\u0fdd\u0fe1\u6192ar;\u61e5eftArrow;\u61c4eiling;\u6309o\u01f5\u0ff9\0\u1005bleBracket;\u67e7n\u01d4\u100a\0\u1014eeVector;\u695dector\u0100;B\u101d\u101e\u61c2ar;\u6955loor;\u630b\u0100er\u102d\u1043e\u0180;AV\u1035\u1036\u103c\u62a2rrow;\u61a6ector;\u695biangle\u0180;BE\u1050\u1051\u1055\u62b3ar;\u69d0qual;\u62b5p\u0180DTV\u1063\u106e\u1078ownVector;\u694feeVector;\u695cector\u0100;B\u1082\u1083\u61bear;\u6954ector\u0100;B\u1091\u1092\u61c0ar;\u6953\u0100pu\u109b\u109ef;\u611dndImplies;\u6970ightarrow;\u61db\u0100ch\u10b9\u10bcr;\u611b;\u61b1leDelayed;\u69f4\u0680HOacfhimoqstu\u10e4\u10f1\u10f7\u10fd\u1119\u111e\u1151\u1156\u1161\u1167\u11b5\u11bb\u11bf\u0100Cc\u10e9\u10eeHcy;\u4429y;\u4428FTcy;\u442ccute;\u415a\u0280;aeiy\u1108\u1109\u110e\u1113\u1117\u6abcron;\u4160dil;\u415erc;\u415c;\u4421r;\uc000\ud835\udd16ort\u0200DLRU\u112a\u1134\u113e\u1149ownArrow\xbb\u041eeftArrow\xbb\u089aightArrow\xbb\u0fddpArrow;\u6191gma;\u43a3allCircle;\u6218pf;\uc000\ud835\udd4a\u0272\u116d\0\0\u1170t;\u621aare\u0200;ISU\u117b\u117c\u1189\u11af\u65a1ntersection;\u6293u\u0100bp\u118f\u119eset\u0100;E\u1197\u1198\u628fqual;\u6291erset\u0100;E\u11a8\u11a9\u6290qual;\u6292nion;\u6294cr;\uc000\ud835\udcaear;\u62c6\u0200bcmp\u11c8\u11db\u1209\u120b\u0100;s\u11cd\u11ce\u62d0et\u0100;E\u11cd\u11d5qual;\u6286\u0100ch\u11e0\u1205eeds\u0200;EST\u11ed\u11ee\u11f4\u11ff\u627bqual;\u6ab0lantEqual;\u627dilde;\u627fTh\xe1\u0f8c;\u6211\u0180;es\u1212\u1213\u1223\u62d1rset\u0100;E\u121c\u121d\u6283qual;\u6287et\xbb\u1213\u0580HRSacfhiors\u123e\u1244\u1249\u1255\u125e\u1271\u1276\u129f\u12c2\u12c8\u12d1ORN\u803b\xde\u40deADE;\u6122\u0100Hc\u124e\u1252cy;\u440by;\u4426\u0100bu\u125a\u125c;\u4009;\u43a4\u0180aey\u1265\u126a\u126fron;\u4164dil;\u4162;\u4422r;\uc000\ud835\udd17\u0100ei\u127b\u1289\u01f2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128e\u1298kSpace;\uc000\u205f\u200aSpace;\u6009lde\u0200;EFT\u12ab\u12ac\u12b2\u12bc\u623cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uc000\ud835\udd4bipleDot;\u60db\u0100ct\u12d6\u12dbr;\uc000\ud835\udcafrok;\u4166\u0ae1\u12f7\u130e\u131a\u1326\0\u132c\u1331\0\0\0\0\0\u1338\u133d\u1377\u1385\0\u13ff\u1404\u140a\u1410\u0100cr\u12fb\u1301ute\u803b\xda\u40dar\u0100;o\u1307\u1308\u619fcir;\u6949r\u01e3\u1313\0\u1316y;\u440eve;\u416c\u0100iy\u131e\u1323rc\u803b\xdb\u40db;\u4423blac;\u4170r;\uc000\ud835\udd18rave\u803b\xd9\u40d9acr;\u416a\u0100di\u1341\u1369er\u0100BP\u1348\u135d\u0100ar\u134d\u1350r;\u405fac\u0100ek\u1357\u1359;\u63dfet;\u63b5arenthesis;\u63ddon\u0100;P\u1370\u1371\u62c3lus;\u628e\u0100gp\u137b\u137fon;\u4172f;\uc000\ud835\udd4c\u0400ADETadps\u1395\u13ae\u13b8\u13c4\u03e8\u13d2\u13d7\u13f3rrow\u0180;BD\u1150\u13a0\u13a4ar;\u6912ownArrow;\u61c5ownArrow;\u6195quilibrium;\u696eee\u0100;A\u13cb\u13cc\u62a5rrow;\u61a5own\xe1\u03f3er\u0100LR\u13de\u13e8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13f9\u13fa\u43d2on;\u43a5ing;\u416ecr;\uc000\ud835\udcb0ilde;\u4168ml\u803b\xdc\u40dc\u0480Dbcdefosv\u1427\u142c\u1430\u1433\u143e\u1485\u148a\u1490\u1496ash;\u62abar;\u6aeby;\u4412ash\u0100;l\u143b\u143c\u62a9;\u6ae6\u0100er\u1443\u1445;\u62c1\u0180bty\u144c\u1450\u147aar;\u6016\u0100;i\u144f\u1455cal\u0200BLST\u1461\u1465\u146a\u1474ar;\u6223ine;\u407ceparator;\u6758ilde;\u6240ThinSpace;\u600ar;\uc000\ud835\udd19pf;\uc000\ud835\udd4dcr;\uc000\ud835\udcb1dash;\u62aa\u0280cefos\u14a7\u14ac\u14b1\u14b6\u14bcirc;\u4174dge;\u62c0r;\uc000\ud835\udd1apf;\uc000\ud835\udd4ecr;\uc000\ud835\udcb2\u0200fios\u14cb\u14d0\u14d2\u14d8r;\uc000\ud835\udd1b;\u439epf;\uc000\ud835\udd4fcr;\uc000\ud835\udcb3\u0480AIUacfosu\u14f1\u14f5\u14f9\u14fd\u1504\u150f\u1514\u151a\u1520cy;\u442fcy;\u4407cy;\u442ecute\u803b\xdd\u40dd\u0100iy\u1509\u150drc;\u4176;\u442br;\uc000\ud835\udd1cpf;\uc000\ud835\udd50cr;\uc000\ud835\udcb4ml;\u4178\u0400Hacdefos\u1535\u1539\u153f\u154b\u154f\u155d\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417d;\u4417ot;\u417b\u01f2\u1554\0\u155boWidt\xe8\u0ad9a;\u4396r;\u6128pf;\u6124cr;\uc000\ud835\udcb5\u0be1\u1583\u158a\u1590\0\u15b0\u15b6\u15bf\0\0\0\0\u15c6\u15db\u15eb\u165f\u166d\0\u1695\u169b\u16b2\u16b9\0\u16becute\u803b\xe1\u40e1reve;\u4103\u0300;Ediuy\u159c\u159d\u15a1\u15a3\u15a8\u15ad\u623e;\uc000\u223e\u0333;\u623frc\u803b\xe2\u40e2te\u80bb\xb4\u0306;\u4430lig\u803b\xe6\u40e6\u0100;r\xb2\u15ba;\uc000\ud835\udd1erave\u803b\xe0\u40e0\u0100ep\u15ca\u15d6\u0100fp\u15cf\u15d4sym;\u6135\xe8\u15d3ha;\u43b1\u0100ap\u15dfc\u0100cl\u15e4\u15e7r;\u4101g;\u6a3f\u0264\u15f0\0\0\u160a\u0280;adsv\u15fa\u15fb\u15ff\u1601\u1607\u6227nd;\u6a55;\u6a5clope;\u6a58;\u6a5a\u0380;elmrsz\u1618\u1619\u161b\u161e\u163f\u164f\u1659\u6220;\u69a4e\xbb\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163a\u163c\u163e;\u69a8;\u69a9;\u69aa;\u69ab;\u69ac;\u69ad;\u69ae;\u69aft\u0100;v\u1645\u1646\u621fb\u0100;d\u164c\u164d\u62be;\u699d\u0100pt\u1654\u1657h;\u6222\xbb\xb9arr;\u637c\u0100gp\u1663\u1667on;\u4105f;\uc000\ud835\udd52\u0380;Eaeiop\u12c1\u167b\u167d\u1682\u1684\u1687\u168a;\u6a70cir;\u6a6f;\u624ad;\u624bs;\u4027rox\u0100;e\u12c1\u1692\xf1\u1683ing\u803b\xe5\u40e5\u0180cty\u16a1\u16a6\u16a8r;\uc000\ud835\udcb6;\u402amp\u0100;e\u12c1\u16af\xf1\u0288ilde\u803b\xe3\u40e3ml\u803b\xe4\u40e4\u0100ci\u16c2\u16c8onin\xf4\u0272nt;\u6a11\u0800Nabcdefiklnoprsu\u16ed\u16f1\u1730\u173c\u1743\u1748\u1778\u177d\u17e0\u17e6\u1839\u1850\u170d\u193d\u1948\u1970ot;\u6aed\u0100cr\u16f6\u171ek\u0200ceps\u1700\u1705\u170d\u1713ong;\u624cpsilon;\u43f6rime;\u6035im\u0100;e\u171a\u171b\u623dq;\u62cd\u0176\u1722\u1726ee;\u62bded\u0100;g\u172c\u172d\u6305e\xbb\u172drk\u0100;t\u135c\u1737brk;\u63b6\u0100oy\u1701\u1741;\u4431quo;\u601e\u0280cmprt\u1753\u175b\u1761\u1764\u1768aus\u0100;e\u010a\u0109ptyv;\u69b0s\xe9\u170cno\xf5\u0113\u0180ahw\u176f\u1771\u1773;\u43b2;\u6136een;\u626cr;\uc000\ud835\udd1fg\u0380costuvw\u178d\u179d\u17b3\u17c1\u17d5\u17db\u17de\u0180aiu\u1794\u1796\u179a\xf0\u0760rc;\u65efp\xbb\u1371\u0180dpt\u17a4\u17a8\u17adot;\u6a00lus;\u6a01imes;\u6a02\u0271\u17b9\0\0\u17becup;\u6a06ar;\u6605riangle\u0100du\u17cd\u17d2own;\u65bdp;\u65b3plus;\u6a04e\xe5\u1444\xe5\u14adarow;\u690d\u0180ako\u17ed\u1826\u1835\u0100cn\u17f2\u1823k\u0180lst\u17fa\u05ab\u1802ozenge;\u69ebriangle\u0200;dlr\u1812\u1813\u1818\u181d\u65b4own;\u65beeft;\u65c2ight;\u65b8k;\u6423\u01b1\u182b\0\u1833\u01b2\u182f\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183e\u184d\u0100;q\u1843\u1846\uc000=\u20e5uiv;\uc000\u2261\u20e5t;\u6310\u0200ptwx\u1859\u185e\u1867\u186cf;\uc000\ud835\udd53\u0100;t\u13cb\u1863om\xbb\u13cctie;\u62c8\u0600DHUVbdhmptuv\u1885\u1896\u18aa\u18bb\u18d7\u18db\u18ec\u18ff\u1905\u190a\u1910\u1921\u0200LRlr\u188e\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18a1\u18a2\u18a4\u18a6\u18a8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18b3\u18b5\u18b7\u18b9;\u655d;\u655a;\u655c;\u6559\u0380;HLRhlr\u18ca\u18cb\u18cd\u18cf\u18d1\u18d3\u18d5\u6551;\u656c;\u6563;\u6560;\u656b;\u6562;\u655fox;\u69c9\u0200LRlr\u18e4\u18e6\u18e8\u18ea;\u6555;\u6552;\u6510;\u650c\u0280;DUdu\u06bd\u18f7\u18f9\u18fb\u18fd;\u6565;\u6568;\u652c;\u6534inus;\u629flus;\u629eimes;\u62a0\u0200LRlr\u1919\u191b\u191d\u191f;\u655b;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193b\u6502;\u656a;\u6561;\u655e;\u653c;\u6524;\u651c\u0100ev\u0123\u1942bar\u803b\xa6\u40a6\u0200ceio\u1951\u1956\u195a\u1960r;\uc000\ud835\udcb7mi;\u604fm\u0100;e\u171a\u171cl\u0180;bh\u1968\u1969\u196b\u405c;\u69c5sub;\u67c8\u016c\u1974\u197el\u0100;e\u1979\u197a\u6022t\xbb\u197ap\u0180;Ee\u012f\u1985\u1987;\u6aae\u0100;q\u06dc\u06db\u0ce1\u19a7\0\u19e8\u1a11\u1a15\u1a32\0\u1a37\u1a50\0\0\u1ab4\0\0\u1ac1\0\0\u1b21\u1b2e\u1b4d\u1b52\0\u1bfd\0\u1c0c\u0180cpr\u19ad\u19b2\u19ddute;\u4107\u0300;abcds\u19bf\u19c0\u19c4\u19ca\u19d5\u19d9\u6229nd;\u6a44rcup;\u6a49\u0100au\u19cf\u19d2p;\u6a4bp;\u6a47ot;\u6a40;\uc000\u2229\ufe00\u0100eo\u19e2\u19e5t;\u6041\xee\u0693\u0200aeiu\u19f0\u19fb\u1a01\u1a05\u01f0\u19f5\0\u19f8s;\u6a4don;\u410ddil\u803b\xe7\u40e7rc;\u4109ps\u0100;s\u1a0c\u1a0d\u6a4cm;\u6a50ot;\u410b\u0180dmn\u1a1b\u1a20\u1a26il\u80bb\xb8\u01adptyv;\u69b2t\u8100\xa2;e\u1a2d\u1a2e\u40a2r\xe4\u01b2r;\uc000\ud835\udd20\u0180cei\u1a3d\u1a40\u1a4dy;\u4447ck\u0100;m\u1a47\u1a48\u6713ark\xbb\u1a48;\u43c7r\u0380;Ecefms\u1a5f\u1a60\u1a62\u1a6b\u1aa4\u1aaa\u1aae\u65cb;\u69c3\u0180;el\u1a69\u1a6a\u1a6d\u42c6q;\u6257e\u0261\u1a74\0\0\u1a88rrow\u0100lr\u1a7c\u1a81eft;\u61baight;\u61bb\u0280RSacd\u1a92\u1a94\u1a96\u1a9a\u1a9f\xbb\u0f47;\u64c8st;\u629birc;\u629aash;\u629dnint;\u6a10id;\u6aefcir;\u69c2ubs\u0100;u\u1abb\u1abc\u6663it\xbb\u1abc\u02ec\u1ac7\u1ad4\u1afa\0\u1b0aon\u0100;e\u1acd\u1ace\u403a\u0100;q\xc7\xc6\u026d\u1ad9\0\0\u1ae2a\u0100;t\u1ade\u1adf\u402c;\u4040\u0180;fl\u1ae8\u1ae9\u1aeb\u6201\xee\u1160e\u0100mx\u1af1\u1af6ent\xbb\u1ae9e\xf3\u024d\u01e7\u1afe\0\u1b07\u0100;d\u12bb\u1b02ot;\u6a6dn\xf4\u0246\u0180fry\u1b10\u1b14\u1b17;\uc000\ud835\udd54o\xe4\u0254\u8100\xa9;s\u0155\u1b1dr;\u6117\u0100ao\u1b25\u1b29rr;\u61b5ss;\u6717\u0100cu\u1b32\u1b37r;\uc000\ud835\udcb8\u0100bp\u1b3c\u1b44\u0100;e\u1b41\u1b42\u6acf;\u6ad1\u0100;e\u1b49\u1b4a\u6ad0;\u6ad2dot;\u62ef\u0380delprvw\u1b60\u1b6c\u1b77\u1b82\u1bac\u1bd4\u1bf9arr\u0100lr\u1b68\u1b6a;\u6938;\u6935\u0270\u1b72\0\0\u1b75r;\u62dec;\u62dfarr\u0100;p\u1b7f\u1b80\u61b6;\u693d\u0300;bcdos\u1b8f\u1b90\u1b96\u1ba1\u1ba5\u1ba8\u622arcap;\u6a48\u0100au\u1b9b\u1b9ep;\u6a46p;\u6a4aot;\u628dr;\u6a45;\uc000\u222a\ufe00\u0200alrv\u1bb5\u1bbf\u1bde\u1be3rr\u0100;m\u1bbc\u1bbd\u61b7;\u693cy\u0180evw\u1bc7\u1bd4\u1bd8q\u0270\u1bce\0\0\u1bd2re\xe3\u1b73u\xe3\u1b75ee;\u62ceedge;\u62cfen\u803b\xa4\u40a4earrow\u0100lr\u1bee\u1bf3eft\xbb\u1b80ight\xbb\u1bbde\xe4\u1bdd\u0100ci\u1c01\u1c07onin\xf4\u01f7nt;\u6231lcty;\u632d\u0980AHabcdefhijlorstuwz\u1c38\u1c3b\u1c3f\u1c5d\u1c69\u1c75\u1c8a\u1c9e\u1cac\u1cb7\u1cfb\u1cff\u1d0d\u1d7b\u1d91\u1dab\u1dbb\u1dc6\u1dcdr\xf2\u0381ar;\u6965\u0200glrs\u1c48\u1c4d\u1c52\u1c54ger;\u6020eth;\u6138\xf2\u1133h\u0100;v\u1c5a\u1c5b\u6010\xbb\u090a\u016b\u1c61\u1c67arow;\u690fa\xe3\u0315\u0100ay\u1c6e\u1c73ron;\u410f;\u4434\u0180;ao\u0332\u1c7c\u1c84\u0100gr\u02bf\u1c81r;\u61catseq;\u6a77\u0180glm\u1c91\u1c94\u1c98\u803b\xb0\u40b0ta;\u43b4ptyv;\u69b1\u0100ir\u1ca3\u1ca8sht;\u697f;\uc000\ud835\udd21ar\u0100lr\u1cb3\u1cb5\xbb\u08dc\xbb\u101e\u0280aegsv\u1cc2\u0378\u1cd6\u1cdc\u1ce0m\u0180;os\u0326\u1cca\u1cd4nd\u0100;s\u0326\u1cd1uit;\u6666amma;\u43ddin;\u62f2\u0180;io\u1ce7\u1ce8\u1cf8\u40f7de\u8100\xf7;o\u1ce7\u1cf0ntimes;\u62c7n\xf8\u1cf7cy;\u4452c\u026f\u1d06\0\0\u1d0arn;\u631eop;\u630d\u0280lptuw\u1d18\u1d1d\u1d22\u1d49\u1d55lar;\u4024f;\uc000\ud835\udd55\u0280;emps\u030b\u1d2d\u1d37\u1d3d\u1d42q\u0100;d\u0352\u1d33ot;\u6251inus;\u6238lus;\u6214quare;\u62a1blebarwedg\xe5\xfan\u0180adh\u112e\u1d5d\u1d67ownarrow\xf3\u1c83arpoon\u0100lr\u1d72\u1d76ef\xf4\u1cb4igh\xf4\u1cb6\u0162\u1d7f\u1d85karo\xf7\u0f42\u026f\u1d8a\0\0\u1d8ern;\u631fop;\u630c\u0180cot\u1d98\u1da3\u1da6\u0100ry\u1d9d\u1da1;\uc000\ud835\udcb9;\u4455l;\u69f6rok;\u4111\u0100dr\u1db0\u1db4ot;\u62f1i\u0100;f\u1dba\u1816\u65bf\u0100ah\u1dc0\u1dc3r\xf2\u0429a\xf2\u0fa6angle;\u69a6\u0100ci\u1dd2\u1dd5y;\u445fgrarr;\u67ff\u0900Dacdefglmnopqrstux\u1e01\u1e09\u1e19\u1e38\u0578\u1e3c\u1e49\u1e61\u1e7e\u1ea5\u1eaf\u1ebd\u1ee1\u1f2a\u1f37\u1f44\u1f4e\u1f5a\u0100Do\u1e06\u1d34o\xf4\u1c89\u0100cs\u1e0e\u1e14ute\u803b\xe9\u40e9ter;\u6a6e\u0200aioy\u1e22\u1e27\u1e31\u1e36ron;\u411br\u0100;c\u1e2d\u1e2e\u6256\u803b\xea\u40ealon;\u6255;\u444dot;\u4117\u0100Dr\u1e41\u1e45ot;\u6252;\uc000\ud835\udd22\u0180;rs\u1e50\u1e51\u1e57\u6a9aave\u803b\xe8\u40e8\u0100;d\u1e5c\u1e5d\u6a96ot;\u6a98\u0200;ils\u1e6a\u1e6b\u1e72\u1e74\u6a99nters;\u63e7;\u6113\u0100;d\u1e79\u1e7a\u6a95ot;\u6a97\u0180aps\u1e85\u1e89\u1e97cr;\u4113ty\u0180;sv\u1e92\u1e93\u1e95\u6205et\xbb\u1e93p\u01001;\u1e9d\u1ea4\u0133\u1ea1\u1ea3;\u6004;\u6005\u6003\u0100gs\u1eaa\u1eac;\u414bp;\u6002\u0100gp\u1eb4\u1eb8on;\u4119f;\uc000\ud835\udd56\u0180als\u1ec4\u1ece\u1ed2r\u0100;s\u1eca\u1ecb\u62d5l;\u69e3us;\u6a71i\u0180;lv\u1eda\u1edb\u1edf\u43b5on\xbb\u1edb;\u43f5\u0200csuv\u1eea\u1ef3\u1f0b\u1f23\u0100io\u1eef\u1e31rc\xbb\u1e2e\u0269\u1ef9\0\0\u1efb\xed\u0548ant\u0100gl\u1f02\u1f06tr\xbb\u1e5dess\xbb\u1e7a\u0180aei\u1f12\u1f16\u1f1als;\u403dst;\u625fv\u0100;D\u0235\u1f20D;\u6a78parsl;\u69e5\u0100Da\u1f2f\u1f33ot;\u6253rr;\u6971\u0180cdi\u1f3e\u1f41\u1ef8r;\u612fo\xf4\u0352\u0100ah\u1f49\u1f4b;\u43b7\u803b\xf0\u40f0\u0100mr\u1f53\u1f57l\u803b\xeb\u40ebo;\u60ac\u0180cip\u1f61\u1f64\u1f67l;\u4021s\xf4\u056e\u0100eo\u1f6c\u1f74ctatio\xee\u0559nential\xe5\u0579\u09e1\u1f92\0\u1f9e\0\u1fa1\u1fa7\0\0\u1fc6\u1fcc\0\u1fd3\0\u1fe6\u1fea\u2000\0\u2008\u205allingdotse\xf1\u1e44y;\u4444male;\u6640\u0180ilr\u1fad\u1fb3\u1fc1lig;\u8000\ufb03\u0269\u1fb9\0\0\u1fbdg;\u8000\ufb00ig;\u8000\ufb04;\uc000\ud835\udd23lig;\u8000\ufb01lig;\uc000fj\u0180alt\u1fd9\u1fdc\u1fe1t;\u666dig;\u8000\ufb02ns;\u65b1of;\u4192\u01f0\u1fee\0\u1ff3f;\uc000\ud835\udd57\u0100ak\u05bf\u1ff7\u0100;v\u1ffc\u1ffd\u62d4;\u6ad9artint;\u6a0d\u0100ao\u200c\u2055\u0100cs\u2011\u2052\u03b1\u201a\u2030\u2038\u2045\u2048\0\u2050\u03b2\u2022\u2025\u2027\u202a\u202c\0\u202e\u803b\xbd\u40bd;\u6153\u803b\xbc\u40bc;\u6155;\u6159;\u615b\u01b3\u2034\0\u2036;\u6154;\u6156\u02b4\u203e\u2041\0\0\u2043\u803b\xbe\u40be;\u6157;\u615c5;\u6158\u01b6\u204c\0\u204e;\u615a;\u615d8;\u615el;\u6044wn;\u6322cr;\uc000\ud835\udcbb\u0880Eabcdefgijlnorstv\u2082\u2089\u209f\u20a5\u20b0\u20b4\u20f0\u20f5\u20fa\u20ff\u2103\u2112\u2138\u0317\u213e\u2152\u219e\u0100;l\u064d\u2087;\u6a8c\u0180cmp\u2090\u2095\u209dute;\u41f5ma\u0100;d\u209c\u1cda\u43b3;\u6a86reve;\u411f\u0100iy\u20aa\u20aerc;\u411d;\u4433ot;\u4121\u0200;lqs\u063e\u0642\u20bd\u20c9\u0180;qs\u063e\u064c\u20c4lan\xf4\u0665\u0200;cdl\u0665\u20d2\u20d5\u20e5c;\u6aa9ot\u0100;o\u20dc\u20dd\u6a80\u0100;l\u20e2\u20e3\u6a82;\u6a84\u0100;e\u20ea\u20ed\uc000\u22db\ufe00s;\u6a94r;\uc000\ud835\udd24\u0100;g\u0673\u061bmel;\u6137cy;\u4453\u0200;Eaj\u065a\u210c\u210e\u2110;\u6a92;\u6aa5;\u6aa4\u0200Eaes\u211b\u211d\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6a8arox\xbb\u2124\u0100;q\u212e\u212f\u6a88\u0100;q\u212e\u211bim;\u62e7pf;\uc000\ud835\udd58\u0100ci\u2143\u2146r;\u610am\u0180;el\u066b\u214e\u2150;\u6a8e;\u6a90\u8300>;cdlqr\u05ee\u2160\u216a\u216e\u2173\u2179\u0100ci\u2165\u2167;\u6aa7r;\u6a7aot;\u62d7Par;\u6995uest;\u6a7c\u0280adels\u2184\u216a\u2190\u0656\u219b\u01f0\u2189\0\u218epro\xf8\u209er;\u6978q\u0100lq\u063f\u2196les\xf3\u2088i\xed\u066b\u0100en\u21a3\u21adrtneqq;\uc000\u2269\ufe00\xc5\u21aa\u0500Aabcefkosy\u21c4\u21c7\u21f1\u21f5\u21fa\u2218\u221d\u222f\u2268\u227dr\xf2\u03a0\u0200ilmr\u21d0\u21d4\u21d7\u21dbrs\xf0\u1484f\xbb\u2024il\xf4\u06a9\u0100dr\u21e0\u21e4cy;\u444a\u0180;cw\u08f4\u21eb\u21efir;\u6948;\u61adar;\u610firc;\u4125\u0180alr\u2201\u220e\u2213rts\u0100;u\u2209\u220a\u6665it\xbb\u220alip;\u6026con;\u62b9r;\uc000\ud835\udd25s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223a\u223e\u2243\u225e\u2263rr;\u61fftht;\u623bk\u0100lr\u2249\u2253eftarrow;\u61a9ightarrow;\u61aaf;\uc000\ud835\udd59bar;\u6015\u0180clt\u226f\u2274\u2278r;\uc000\ud835\udcbdas\xe8\u21f4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xbb\u1c5b\u0ae1\u22a3\0\u22aa\0\u22b8\u22c5\u22ce\0\u22d5\u22f3\0\0\u22f8\u2322\u2367\u2362\u237f\0\u2386\u23aa\u23b4cute\u803b\xed\u40ed\u0180;iy\u0771\u22b0\u22b5rc\u803b\xee\u40ee;\u4438\u0100cx\u22bc\u22bfy;\u4435cl\u803b\xa1\u40a1\u0100fr\u039f\u22c9;\uc000\ud835\udd26rave\u803b\xec\u40ec\u0200;ino\u073e\u22dd\u22e9\u22ee\u0100in\u22e2\u22e6nt;\u6a0ct;\u622dfin;\u69dcta;\u6129lig;\u4133\u0180aop\u22fe\u231a\u231d\u0180cgt\u2305\u2308\u2317r;\u412b\u0180elp\u071f\u230f\u2313in\xe5\u078ear\xf4\u0720h;\u4131f;\u62b7ed;\u41b5\u0280;cfot\u04f4\u232c\u2331\u233d\u2341are;\u6105in\u0100;t\u2338\u2339\u621eie;\u69dddo\xf4\u2319\u0280;celp\u0757\u234c\u2350\u235b\u2361al;\u62ba\u0100gr\u2355\u2359er\xf3\u1563\xe3\u234darhk;\u6a17rod;\u6a3c\u0200cgpt\u236f\u2372\u2376\u237by;\u4451on;\u412ff;\uc000\ud835\udd5aa;\u43b9uest\u803b\xbf\u40bf\u0100ci\u238a\u238fr;\uc000\ud835\udcben\u0280;Edsv\u04f4\u239b\u239d\u23a1\u04f3;\u62f9ot;\u62f5\u0100;v\u23a6\u23a7\u62f4;\u62f3\u0100;i\u0777\u23aelde;\u4129\u01eb\u23b8\0\u23bccy;\u4456l\u803b\xef\u40ef\u0300cfmosu\u23cc\u23d7\u23dc\u23e1\u23e7\u23f5\u0100iy\u23d1\u23d5rc;\u4135;\u4439r;\uc000\ud835\udd27ath;\u4237pf;\uc000\ud835\udd5b\u01e3\u23ec\0\u23f1r;\uc000\ud835\udcbfrcy;\u4458kcy;\u4454\u0400acfghjos\u240b\u2416\u2422\u2427\u242d\u2431\u2435\u243bppa\u0100;v\u2413\u2414\u43ba;\u43f0\u0100ey\u241b\u2420dil;\u4137;\u443ar;\uc000\ud835\udd28reen;\u4138cy;\u4445cy;\u445cpf;\uc000\ud835\udd5ccr;\uc000\ud835\udcc0\u0b80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248d\u2491\u250e\u253d\u255a\u2580\u264e\u265e\u2665\u2679\u267d\u269a\u26b2\u26d8\u275d\u2768\u278b\u27c0\u2801\u2812\u0180art\u2477\u247a\u247cr\xf2\u09c6\xf2\u0395ail;\u691barr;\u690e\u0100;g\u0994\u248b;\u6a8bar;\u6962\u0963\u24a5\0\u24aa\0\u24b1\0\0\0\0\0\u24b5\u24ba\0\u24c6\u24c8\u24cd\0\u24f9ute;\u413amptyv;\u69b4ra\xee\u084cbda;\u43bbg\u0180;dl\u088e\u24c1\u24c3;\u6991\xe5\u088e;\u6a85uo\u803b\xab\u40abr\u0400;bfhlpst\u0899\u24de\u24e6\u24e9\u24eb\u24ee\u24f1\u24f5\u0100;f\u089d\u24e3s;\u691fs;\u691d\xeb\u2252p;\u61abl;\u6939im;\u6973l;\u61a2\u0180;ae\u24ff\u2500\u2504\u6aabil;\u6919\u0100;s\u2509\u250a\u6aad;\uc000\u2aad\ufe00\u0180abr\u2515\u2519\u251drr;\u690crk;\u6772\u0100ak\u2522\u252cc\u0100ek\u2528\u252a;\u407b;\u405b\u0100es\u2531\u2533;\u698bl\u0100du\u2539\u253b;\u698f;\u698d\u0200aeuy\u2546\u254b\u2556\u2558ron;\u413e\u0100di\u2550\u2554il;\u413c\xec\u08b0\xe2\u2529;\u443b\u0200cqrs\u2563\u2566\u256d\u257da;\u6936uo\u0100;r\u0e19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694bh;\u61b2\u0280;fgqs\u258b\u258c\u0989\u25f3\u25ff\u6264t\u0280ahlrt\u2598\u25a4\u25b7\u25c2\u25e8rrow\u0100;t\u0899\u25a1a\xe9\u24f6arpoon\u0100du\u25af\u25b4own\xbb\u045ap\xbb\u0966eftarrows;\u61c7ight\u0180ahs\u25cd\u25d6\u25derrow\u0100;s\u08f4\u08a7arpoon\xf3\u0f98quigarro\xf7\u21f0hreetimes;\u62cb\u0180;qs\u258b\u0993\u25falan\xf4\u09ac\u0280;cdgs\u09ac\u260a\u260d\u261d\u2628c;\u6aa8ot\u0100;o\u2614\u2615\u6a7f\u0100;r\u261a\u261b\u6a81;\u6a83\u0100;e\u2622\u2625\uc000\u22da\ufe00s;\u6a93\u0280adegs\u2633\u2639\u263d\u2649\u264bppro\xf8\u24c6ot;\u62d6q\u0100gq\u2643\u2645\xf4\u0989gt\xf2\u248c\xf4\u099bi\xed\u09b2\u0180ilr\u2655\u08e1\u265asht;\u697c;\uc000\ud835\udd29\u0100;E\u099c\u2663;\u6a91\u0161\u2669\u2676r\u0100du\u25b2\u266e\u0100;l\u0965\u2673;\u696alk;\u6584cy;\u4459\u0280;acht\u0a48\u2688\u268b\u2691\u2696r\xf2\u25c1orne\xf2\u1d08ard;\u696bri;\u65fa\u0100io\u269f\u26a4dot;\u4140ust\u0100;a\u26ac\u26ad\u63b0che\xbb\u26ad\u0200Eaes\u26bb\u26bd\u26c9\u26d4;\u6268p\u0100;p\u26c3\u26c4\u6a89rox\xbb\u26c4\u0100;q\u26ce\u26cf\u6a87\u0100;q\u26ce\u26bbim;\u62e6\u0400abnoptwz\u26e9\u26f4\u26f7\u271a\u272f\u2741\u2747\u2750\u0100nr\u26ee\u26f1g;\u67ecr;\u61fdr\xeb\u08c1g\u0180lmr\u26ff\u270d\u2714eft\u0100ar\u09e6\u2707ight\xe1\u09f2apsto;\u67fcight\xe1\u09fdparrow\u0100lr\u2725\u2729ef\xf4\u24edight;\u61ac\u0180afl\u2736\u2739\u273dr;\u6985;\uc000\ud835\udd5dus;\u6a2dimes;\u6a34\u0161\u274b\u274fst;\u6217\xe1\u134e\u0180;ef\u2757\u2758\u1800\u65cange\xbb\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277c\u2785\u2787r\xf2\u08a8orne\xf2\u1d8car\u0100;d\u0f98\u2783;\u696d;\u600eri;\u62bf\u0300achiqt\u2798\u279d\u0a40\u27a2\u27ae\u27bbquo;\u6039r;\uc000\ud835\udcc1m\u0180;eg\u09b2\u27aa\u27ac;\u6a8d;\u6a8f\u0100bu\u252a\u27b3o\u0100;r\u0e1f\u27b9;\u601arok;\u4142\u8400<;cdhilqr\u082b\u27d2\u2639\u27dc\u27e0\u27e5\u27ea\u27f0\u0100ci\u27d7\u27d9;\u6aa6r;\u6a79re\xe5\u25f2mes;\u62c9arr;\u6976uest;\u6a7b\u0100Pi\u27f5\u27f9ar;\u6996\u0180;ef\u2800\u092d\u181b\u65c3r\u0100du\u2807\u280dshar;\u694ahar;\u6966\u0100en\u2817\u2821rtneqq;\uc000\u2268\ufe00\xc5\u281e\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288e\u2893\u28a0\u28a5\u28a8\u28da\u28e2\u28e4\u0a83\u28f3\u2902Dot;\u623a\u0200clpr\u284e\u2852\u2863\u287dr\u803b\xaf\u40af\u0100et\u2857\u2859;\u6642\u0100;e\u285e\u285f\u6720se\xbb\u285f\u0100;s\u103b\u2868to\u0200;dlu\u103b\u2873\u2877\u287bow\xee\u048cef\xf4\u090f\xf0\u13d1ker;\u65ae\u0100oy\u2887\u288cmma;\u6a29;\u443cash;\u6014asuredangle\xbb\u1626r;\uc000\ud835\udd2ao;\u6127\u0180cdn\u28af\u28b4\u28c9ro\u803b\xb5\u40b5\u0200;acd\u1464\u28bd\u28c0\u28c4s\xf4\u16a7ir;\u6af0ot\u80bb\xb7\u01b5us\u0180;bd\u28d2\u1903\u28d3\u6212\u0100;u\u1d3c\u28d8;\u6a2a\u0163\u28de\u28e1p;\u6adb\xf2\u2212\xf0\u0a81\u0100dp\u28e9\u28eeels;\u62a7f;\uc000\ud835\udd5e\u0100ct\u28f8\u28fdr;\uc000\ud835\udcc2pos\xbb\u159d\u0180;lm\u2909\u290a\u290d\u43bctimap;\u62b8\u0c00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297e\u2989\u2998\u29da\u29e9\u2a15\u2a1a\u2a58\u2a5d\u2a83\u2a95\u2aa4\u2aa8\u2b04\u2b07\u2b44\u2b7f\u2bae\u2c34\u2c67\u2c7c\u2ce9\u0100gt\u2947\u294b;\uc000\u22d9\u0338\u0100;v\u2950\u0bcf\uc000\u226b\u20d2\u0180elt\u295a\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61cdightarrow;\u61ce;\uc000\u22d8\u0338\u0100;v\u297b\u0c47\uc000\u226a\u20d2ightarrow;\u61cf\u0100Dd\u298e\u2993ash;\u62afash;\u62ae\u0280bcnpt\u29a3\u29a7\u29ac\u29b1\u29ccla\xbb\u02deute;\u4144g;\uc000\u2220\u20d2\u0280;Eiop\u0d84\u29bc\u29c0\u29c5\u29c8;\uc000\u2a70\u0338d;\uc000\u224b\u0338s;\u4149ro\xf8\u0d84ur\u0100;a\u29d3\u29d4\u666el\u0100;s\u29d3\u0b38\u01f3\u29df\0\u29e3p\u80bb\xa0\u0b37mp\u0100;e\u0bf9\u0c00\u0280aeouy\u29f4\u29fe\u2a03\u2a10\u2a13\u01f0\u29f9\0\u29fb;\u6a43on;\u4148dil;\u4146ng\u0100;d\u0d7e\u2a0aot;\uc000\u2a6d\u0338p;\u6a42;\u443dash;\u6013\u0380;Aadqsx\u0b92\u2a29\u2a2d\u2a3b\u2a41\u2a45\u2a50rr;\u61d7r\u0100hr\u2a33\u2a36k;\u6924\u0100;o\u13f2\u13f0ot;\uc000\u2250\u0338ui\xf6\u0b63\u0100ei\u2a4a\u2a4ear;\u6928\xed\u0b98ist\u0100;s\u0ba0\u0b9fr;\uc000\ud835\udd2b\u0200Eest\u0bc5\u2a66\u2a79\u2a7c\u0180;qs\u0bbc\u2a6d\u0be1\u0180;qs\u0bbc\u0bc5\u2a74lan\xf4\u0be2i\xed\u0bea\u0100;r\u0bb6\u2a81\xbb\u0bb7\u0180Aap\u2a8a\u2a8d\u2a91r\xf2\u2971rr;\u61aear;\u6af2\u0180;sv\u0f8d\u2a9c\u0f8c\u0100;d\u2aa1\u2aa2\u62fc;\u62facy;\u445a\u0380AEadest\u2ab7\u2aba\u2abe\u2ac2\u2ac5\u2af6\u2af9r\xf2\u2966;\uc000\u2266\u0338rr;\u619ar;\u6025\u0200;fqs\u0c3b\u2ace\u2ae3\u2aeft\u0100ar\u2ad4\u2ad9rro\xf7\u2ac1ightarro\xf7\u2a90\u0180;qs\u0c3b\u2aba\u2aealan\xf4\u0c55\u0100;s\u0c55\u2af4\xbb\u0c36i\xed\u0c5d\u0100;r\u0c35\u2afei\u0100;e\u0c1a\u0c25i\xe4\u0d90\u0100pt\u2b0c\u2b11f;\uc000\ud835\udd5f\u8180\xac;in\u2b19\u2b1a\u2b36\u40acn\u0200;Edv\u0b89\u2b24\u2b28\u2b2e;\uc000\u22f9\u0338ot;\uc000\u22f5\u0338\u01e1\u0b89\u2b33\u2b35;\u62f7;\u62f6i\u0100;v\u0cb8\u2b3c\u01e1\u0cb8\u2b41\u2b43;\u62fe;\u62fd\u0180aor\u2b4b\u2b63\u2b69r\u0200;ast\u0b7b\u2b55\u2b5a\u2b5flle\xec\u0b7bl;\uc000\u2afd\u20e5;\uc000\u2202\u0338lint;\u6a14\u0180;ce\u0c92\u2b70\u2b73u\xe5\u0ca5\u0100;c\u0c98\u2b78\u0100;e\u0c92\u2b7d\xf1\u0c98\u0200Aait\u2b88\u2b8b\u2b9d\u2ba7r\xf2\u2988rr\u0180;cw\u2b94\u2b95\u2b99\u619b;\uc000\u2933\u0338;\uc000\u219d\u0338ghtarrow\xbb\u2b95ri\u0100;e\u0ccb\u0cd6\u0380chimpqu\u2bbd\u2bcd\u2bd9\u2b04\u0b78\u2be4\u2bef\u0200;cer\u0d32\u2bc6\u0d37\u2bc9u\xe5\u0d45;\uc000\ud835\udcc3ort\u026d\u2b05\0\0\u2bd6ar\xe1\u2b56m\u0100;e\u0d6e\u2bdf\u0100;q\u0d74\u0d73su\u0100bp\u2beb\u2bed\xe5\u0cf8\xe5\u0d0b\u0180bcp\u2bf6\u2c11\u2c19\u0200;Ees\u2bff\u2c00\u0d22\u2c04\u6284;\uc000\u2ac5\u0338et\u0100;e\u0d1b\u2c0bq\u0100;q\u0d23\u2c00c\u0100;e\u0d32\u2c17\xf1\u0d38\u0200;Ees\u2c22\u2c23\u0d5f\u2c27\u6285;\uc000\u2ac6\u0338et\u0100;e\u0d58\u2c2eq\u0100;q\u0d60\u2c23\u0200gilr\u2c3d\u2c3f\u2c45\u2c47\xec\u0bd7lde\u803b\xf1\u40f1\xe7\u0c43iangle\u0100lr\u2c52\u2c5ceft\u0100;e\u0c1a\u2c5a\xf1\u0c26ight\u0100;e\u0ccb\u2c65\xf1\u0cd7\u0100;m\u2c6c\u2c6d\u43bd\u0180;es\u2c74\u2c75\u2c79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2c8f\u2c94\u2c99\u2c9e\u2ca3\u2cb0\u2cb6\u2cd3\u2ce3ash;\u62adarr;\u6904p;\uc000\u224d\u20d2ash;\u62ac\u0100et\u2ca8\u2cac;\uc000\u2265\u20d2;\uc000>\u20d2nfin;\u69de\u0180Aet\u2cbd\u2cc1\u2cc5rr;\u6902;\uc000\u2264\u20d2\u0100;r\u2cca\u2ccd\uc000<\u20d2ie;\uc000\u22b4\u20d2\u0100At\u2cd8\u2cdcrr;\u6903rie;\uc000\u22b5\u20d2im;\uc000\u223c\u20d2\u0180Aan\u2cf0\u2cf4\u2d02rr;\u61d6r\u0100hr\u2cfa\u2cfdk;\u6923\u0100;o\u13e7\u13e5ear;\u6927\u1253\u1a95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2d2d\0\u2d38\u2d48\u2d60\u2d65\u2d72\u2d84\u1b07\0\0\u2d8d\u2dab\0\u2dc8\u2dce\0\u2ddc\u2e19\u2e2b\u2e3e\u2e43\u0100cs\u2d31\u1a97ute\u803b\xf3\u40f3\u0100iy\u2d3c\u2d45r\u0100;c\u1a9e\u2d42\u803b\xf4\u40f4;\u443e\u0280abios\u1aa0\u2d52\u2d57\u01c8\u2d5alac;\u4151v;\u6a38old;\u69bclig;\u4153\u0100cr\u2d69\u2d6dir;\u69bf;\uc000\ud835\udd2c\u036f\u2d79\0\0\u2d7c\0\u2d82n;\u42dbave\u803b\xf2\u40f2;\u69c1\u0100bm\u2d88\u0df4ar;\u69b5\u0200acit\u2d95\u2d98\u2da5\u2da8r\xf2\u1a80\u0100ir\u2d9d\u2da0r;\u69beoss;\u69bbn\xe5\u0e52;\u69c0\u0180aei\u2db1\u2db5\u2db9cr;\u414dga;\u43c9\u0180cdn\u2dc0\u2dc5\u01cdron;\u43bf;\u69b6pf;\uc000\ud835\udd60\u0180ael\u2dd4\u2dd7\u01d2r;\u69b7rp;\u69b9\u0380;adiosv\u2dea\u2deb\u2dee\u2e08\u2e0d\u2e10\u2e16\u6228r\xf2\u1a86\u0200;efm\u2df7\u2df8\u2e02\u2e05\u6a5dr\u0100;o\u2dfe\u2dff\u6134f\xbb\u2dff\u803b\xaa\u40aa\u803b\xba\u40bagof;\u62b6r;\u6a56lope;\u6a57;\u6a5b\u0180clo\u2e1f\u2e21\u2e27\xf2\u2e01ash\u803b\xf8\u40f8l;\u6298i\u016c\u2e2f\u2e34de\u803b\xf5\u40f5es\u0100;a\u01db\u2e3as;\u6a36ml\u803b\xf6\u40f6bar;\u633d\u0ae1\u2e5e\0\u2e7d\0\u2e80\u2e9d\0\u2ea2\u2eb9\0\0\u2ecb\u0e9c\0\u2f13\0\0\u2f2b\u2fbc\0\u2fc8r\u0200;ast\u0403\u2e67\u2e72\u0e85\u8100\xb6;l\u2e6d\u2e6e\u40b6le\xec\u0403\u0269\u2e78\0\0\u2e7bm;\u6af3;\u6afdy;\u443fr\u0280cimpt\u2e8b\u2e8f\u2e93\u1865\u2e97nt;\u4025od;\u402eil;\u6030enk;\u6031r;\uc000\ud835\udd2d\u0180imo\u2ea8\u2eb0\u2eb4\u0100;v\u2ead\u2eae\u43c6;\u43d5ma\xf4\u0a76ne;\u660e\u0180;tv\u2ebf\u2ec0\u2ec8\u43c0chfork\xbb\u1ffd;\u43d6\u0100au\u2ecf\u2edfn\u0100ck\u2ed5\u2eddk\u0100;h\u21f4\u2edb;\u610e\xf6\u21f4s\u0480;abcdemst\u2ef3\u2ef4\u1908\u2ef9\u2efd\u2f04\u2f06\u2f0a\u2f0e\u402bcir;\u6a23ir;\u6a22\u0100ou\u1d40\u2f02;\u6a25;\u6a72n\u80bb\xb1\u0e9dim;\u6a26wo;\u6a27\u0180ipu\u2f19\u2f20\u2f25ntint;\u6a15f;\uc000\ud835\udd61nd\u803b\xa3\u40a3\u0500;Eaceinosu\u0ec8\u2f3f\u2f41\u2f44\u2f47\u2f81\u2f89\u2f92\u2f7e\u2fb6;\u6ab3p;\u6ab7u\xe5\u0ed9\u0100;c\u0ece\u2f4c\u0300;acens\u0ec8\u2f59\u2f5f\u2f66\u2f68\u2f7eppro\xf8\u2f43urlye\xf1\u0ed9\xf1\u0ece\u0180aes\u2f6f\u2f76\u2f7approx;\u6ab9qq;\u6ab5im;\u62e8i\xed\u0edfme\u0100;s\u2f88\u0eae\u6032\u0180Eas\u2f78\u2f90\u2f7a\xf0\u2f75\u0180dfp\u0eec\u2f99\u2faf\u0180als\u2fa0\u2fa5\u2faalar;\u632eine;\u6312urf;\u6313\u0100;t\u0efb\u2fb4\xef\u0efbrel;\u62b0\u0100ci\u2fc0\u2fc5r;\uc000\ud835\udcc5;\u43c8ncsp;\u6008\u0300fiopsu\u2fda\u22e2\u2fdf\u2fe5\u2feb\u2ff1r;\uc000\ud835\udd2epf;\uc000\ud835\udd62rime;\u6057cr;\uc000\ud835\udcc6\u0180aeo\u2ff8\u3009\u3013t\u0100ei\u2ffe\u3005rnion\xf3\u06b0nt;\u6a16st\u0100;e\u3010\u3011\u403f\xf1\u1f19\xf4\u0f14\u0a80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30e0\u310e\u312b\u3147\u3162\u3172\u318e\u3206\u3215\u3224\u3229\u3258\u326e\u3272\u3290\u32b0\u32b7\u0180art\u3047\u304a\u304cr\xf2\u10b3\xf2\u03ddail;\u691car\xf2\u1c65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307f\u308f\u3094\u30cc\u0100eu\u306d\u3071;\uc000\u223d\u0331te;\u4155i\xe3\u116emptyv;\u69b3g\u0200;del\u0fd1\u3089\u308b\u308d;\u6992;\u69a5\xe5\u0fd1uo\u803b\xbb\u40bbr\u0580;abcfhlpstw\u0fdc\u30ac\u30af\u30b7\u30b9\u30bc\u30be\u30c0\u30c3\u30c7\u30cap;\u6975\u0100;f\u0fe0\u30b4s;\u6920;\u6933s;\u691e\xeb\u225d\xf0\u272el;\u6945im;\u6974l;\u61a3;\u619d\u0100ai\u30d1\u30d5il;\u691ao\u0100;n\u30db\u30dc\u6236al\xf3\u0f1e\u0180abr\u30e7\u30ea\u30eer\xf2\u17e5rk;\u6773\u0100ak\u30f3\u30fdc\u0100ek\u30f9\u30fb;\u407d;\u405d\u0100es\u3102\u3104;\u698cl\u0100du\u310a\u310c;\u698e;\u6990\u0200aeuy\u3117\u311c\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xec\u0ff2\xe2\u30fa;\u4440\u0200clqs\u3134\u3137\u313d\u3144a;\u6937dhar;\u6969uo\u0100;r\u020e\u020dh;\u61b3\u0180acg\u314e\u315f\u0f44l\u0200;ips\u0f78\u3158\u315b\u109cn\xe5\u10bbar\xf4\u0fa9t;\u65ad\u0180ilr\u3169\u1023\u316esht;\u697d;\uc000\ud835\udd2f\u0100ao\u3177\u3186r\u0100du\u317d\u317f\xbb\u047b\u0100;l\u1091\u3184;\u696c\u0100;v\u318b\u318c\u43c1;\u43f1\u0180gns\u3195\u31f9\u31fcht\u0300ahlrst\u31a4\u31b0\u31c2\u31d8\u31e4\u31eerrow\u0100;t\u0fdc\u31ada\xe9\u30c8arpoon\u0100du\u31bb\u31bfow\xee\u317ep\xbb\u1092eft\u0100ah\u31ca\u31d0rrow\xf3\u0feaarpoon\xf3\u0551ightarrows;\u61c9quigarro\xf7\u30cbhreetimes;\u62ccg;\u42daingdotse\xf1\u1f32\u0180ahm\u320d\u3210\u3213r\xf2\u0feaa\xf2\u0551;\u600foust\u0100;a\u321e\u321f\u63b1che\xbb\u321fmid;\u6aee\u0200abpt\u3232\u323d\u3240\u3252\u0100nr\u3237\u323ag;\u67edr;\u61fer\xeb\u1003\u0180afl\u3247\u324a\u324er;\u6986;\uc000\ud835\udd63us;\u6a2eimes;\u6a35\u0100ap\u325d\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6a12ar\xf2\u31e3\u0200achq\u327b\u3280\u10bc\u3285quo;\u603ar;\uc000\ud835\udcc7\u0100bu\u30fb\u328ao\u0100;r\u0214\u0213\u0180hir\u3297\u329b\u32a0re\xe5\u31f8mes;\u62cai\u0200;efl\u32aa\u1059\u1821\u32ab\u65b9tri;\u69celuhar;\u6968;\u611e\u0d61\u32d5\u32db\u32df\u332c\u3338\u3371\0\u337a\u33a4\0\0\u33ec\u33f0\0\u3428\u3448\u345a\u34ad\u34b1\u34ca\u34f1\0\u3616\0\0\u3633cute;\u415bqu\xef\u27ba\u0500;Eaceinpsy\u11ed\u32f3\u32f5\u32ff\u3302\u330b\u330f\u331f\u3326\u3329;\u6ab4\u01f0\u32fa\0\u32fc;\u6ab8on;\u4161u\xe5\u11fe\u0100;d\u11f3\u3307il;\u415frc;\u415d\u0180Eas\u3316\u3318\u331b;\u6ab6p;\u6abaim;\u62e9olint;\u6a13i\xed\u1204;\u4441ot\u0180;be\u3334\u1d47\u3335\u62c5;\u6a66\u0380Aacmstx\u3346\u334a\u3357\u335b\u335e\u3363\u336drr;\u61d8r\u0100hr\u3350\u3352\xeb\u2228\u0100;o\u0a36\u0a34t\u803b\xa7\u40a7i;\u403bwar;\u6929m\u0100in\u3369\xf0nu\xf3\xf1t;\u6736r\u0100;o\u3376\u2055\uc000\ud835\udd30\u0200acoy\u3382\u3386\u3391\u33a0rp;\u666f\u0100hy\u338b\u338fcy;\u4449;\u4448rt\u026d\u3399\0\0\u339ci\xe4\u1464ara\xec\u2e6f\u803b\xad\u40ad\u0100gm\u33a8\u33b4ma\u0180;fv\u33b1\u33b2\u33b2\u43c3;\u43c2\u0400;deglnpr\u12ab\u33c5\u33c9\u33ce\u33d6\u33de\u33e1\u33e6ot;\u6a6a\u0100;q\u12b1\u12b0\u0100;E\u33d3\u33d4\u6a9e;\u6aa0\u0100;E\u33db\u33dc\u6a9d;\u6a9fe;\u6246lus;\u6a24arr;\u6972ar\xf2\u113d\u0200aeit\u33f8\u3408\u340f\u3417\u0100ls\u33fd\u3404lsetm\xe9\u336ahp;\u6a33parsl;\u69e4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341c\u341d\u6aaa\u0100;s\u3422\u3423\u6aac;\uc000\u2aac\ufe00\u0180flp\u342e\u3433\u3442tcy;\u444c\u0100;b\u3438\u3439\u402f\u0100;a\u343e\u343f\u69c4r;\u633ff;\uc000\ud835\udd64a\u0100dr\u344d\u0402es\u0100;u\u3454\u3455\u6660it\xbb\u3455\u0180csu\u3460\u3479\u349f\u0100au\u3465\u346fp\u0100;s\u1188\u346b;\uc000\u2293\ufe00p\u0100;s\u11b4\u3475;\uc000\u2294\ufe00u\u0100bp\u347f\u348f\u0180;es\u1197\u119c\u3486et\u0100;e\u1197\u348d\xf1\u119d\u0180;es\u11a8\u11ad\u3496et\u0100;e\u11a8\u349d\xf1\u11ae\u0180;af\u117b\u34a6\u05b0r\u0165\u34ab\u05b1\xbb\u117car\xf2\u1148\u0200cemt\u34b9\u34be\u34c2\u34c5r;\uc000\ud835\udcc8tm\xee\xf1i\xec\u3415ar\xe6\u11be\u0100ar\u34ce\u34d5r\u0100;f\u34d4\u17bf\u6606\u0100an\u34da\u34edight\u0100ep\u34e3\u34eapsilo\xee\u1ee0h\xe9\u2eafs\xbb\u2852\u0280bcmnp\u34fb\u355e\u1209\u358b\u358e\u0480;Edemnprs\u350e\u350f\u3511\u3515\u351e\u3523\u352c\u3531\u3536\u6282;\u6ac5ot;\u6abd\u0100;d\u11da\u351aot;\u6ac3ult;\u6ac1\u0100Ee\u3528\u352a;\u6acb;\u628alus;\u6abfarr;\u6979\u0180eiu\u353d\u3552\u3555t\u0180;en\u350e\u3545\u354bq\u0100;q\u11da\u350feq\u0100;q\u352b\u3528m;\u6ac7\u0100bp\u355a\u355c;\u6ad5;\u6ad3c\u0300;acens\u11ed\u356c\u3572\u3579\u357b\u3326ppro\xf8\u32faurlye\xf1\u11fe\xf1\u11f3\u0180aes\u3582\u3588\u331bppro\xf8\u331aq\xf1\u3317g;\u666a\u0680123;Edehlmnps\u35a9\u35ac\u35af\u121c\u35b2\u35b4\u35c0\u35c9\u35d5\u35da\u35df\u35e8\u35ed\u803b\xb9\u40b9\u803b\xb2\u40b2\u803b\xb3\u40b3;\u6ac6\u0100os\u35b9\u35bct;\u6abeub;\u6ad8\u0100;d\u1222\u35c5ot;\u6ac4s\u0100ou\u35cf\u35d2l;\u67c9b;\u6ad7arr;\u697bult;\u6ac2\u0100Ee\u35e4\u35e6;\u6acc;\u628blus;\u6ac0\u0180eiu\u35f4\u3609\u360ct\u0180;en\u121c\u35fc\u3602q\u0100;q\u1222\u35b2eq\u0100;q\u35e7\u35e4m;\u6ac8\u0100bp\u3611\u3613;\u6ad4;\u6ad6\u0180Aan\u361c\u3620\u362drr;\u61d9r\u0100hr\u3626\u3628\xeb\u222e\u0100;o\u0a2b\u0a29war;\u692alig\u803b\xdf\u40df\u0be1\u3651\u365d\u3660\u12ce\u3673\u3679\0\u367e\u36c2\0\0\0\0\0\u36db\u3703\0\u3709\u376c\0\0\0\u3787\u0272\u3656\0\0\u365bget;\u6316;\u43c4r\xeb\u0e5f\u0180aey\u3666\u366b\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uc000\ud835\udd31\u0200eiko\u3686\u369d\u36b5\u36bc\u01f2\u368b\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369b\u43b8ym;\u43d1\u0100cn\u36a2\u36b2k\u0100as\u36a8\u36aeppro\xf8\u12c1im\xbb\u12acs\xf0\u129e\u0100as\u36ba\u36ae\xf0\u12c1rn\u803b\xfe\u40fe\u01ec\u031f\u36c6\u22e7es\u8180\xd7;bd\u36cf\u36d0\u36d8\u40d7\u0100;a\u190f\u36d5r;\u6a31;\u6a30\u0180eps\u36e1\u36e3\u3700\xe1\u2a4d\u0200;bcf\u0486\u36ec\u36f0\u36f4ot;\u6336ir;\u6af1\u0100;o\u36f9\u36fc\uc000\ud835\udd65rk;\u6ada\xe1\u3362rime;\u6034\u0180aip\u370f\u3712\u3764d\xe5\u1248\u0380adempst\u3721\u374d\u3740\u3751\u3757\u375c\u375fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65b5own\xbb\u1dbbeft\u0100;e\u2800\u373e\xf1\u092e;\u625cight\u0100;e\u32aa\u374b\xf1\u105aot;\u65ecinus;\u6a3alus;\u6a39b;\u69cdime;\u6a3bezium;\u63e2\u0180cht\u3772\u377d\u3781\u0100ry\u3777\u377b;\uc000\ud835\udcc9;\u4446cy;\u445brok;\u4167\u0100io\u378b\u378ex\xf4\u1777head\u0100lr\u3797\u37a0eftarro\xf7\u084fightarrow\xbb\u0f5d\u0900AHabcdfghlmoprstuw\u37d0\u37d3\u37d7\u37e4\u37f0\u37fc\u380e\u381c\u3823\u3834\u3851\u385d\u386b\u38a9\u38cc\u38d2\u38ea\u38f6r\xf2\u03edar;\u6963\u0100cr\u37dc\u37e2ute\u803b\xfa\u40fa\xf2\u1150r\u01e3\u37ea\0\u37edy;\u445eve;\u416d\u0100iy\u37f5\u37farc\u803b\xfb\u40fb;\u4443\u0180abh\u3803\u3806\u380br\xf2\u13adlac;\u4171a\xf2\u13c3\u0100ir\u3813\u3818sht;\u697e;\uc000\ud835\udd32rave\u803b\xf9\u40f9\u0161\u3827\u3831r\u0100lr\u382c\u382e\xbb\u0957\xbb\u1083lk;\u6580\u0100ct\u3839\u384d\u026f\u383f\0\0\u384arn\u0100;e\u3845\u3846\u631cr\xbb\u3846op;\u630fri;\u65f8\u0100al\u3856\u385acr;\u416b\u80bb\xa8\u0349\u0100gp\u3862\u3866on;\u4173f;\uc000\ud835\udd66\u0300adhlsu\u114b\u3878\u387d\u1372\u3891\u38a0own\xe1\u13b3arpoon\u0100lr\u3888\u388cef\xf4\u382digh\xf4\u382fi\u0180;hl\u3899\u389a\u389c\u43c5\xbb\u13faon\xbb\u389aparrows;\u61c8\u0180cit\u38b0\u38c4\u38c8\u026f\u38b6\0\0\u38c1rn\u0100;e\u38bc\u38bd\u631dr\xbb\u38bdop;\u630eng;\u416fri;\u65f9cr;\uc000\ud835\udcca\u0180dir\u38d9\u38dd\u38e2ot;\u62f0lde;\u4169i\u0100;f\u3730\u38e8\xbb\u1813\u0100am\u38ef\u38f2r\xf2\u38a8l\u803b\xfc\u40fcangle;\u69a7\u0780ABDacdeflnoprsz\u391c\u391f\u3929\u392d\u39b5\u39b8\u39bd\u39df\u39e4\u39e8\u39f3\u39f9\u39fd\u3a01\u3a20r\xf2\u03f7ar\u0100;v\u3926\u3927\u6ae8;\u6ae9as\xe8\u03e1\u0100nr\u3932\u3937grt;\u699c\u0380eknprst\u34e3\u3946\u394b\u3952\u395d\u3964\u3996app\xe1\u2415othin\xe7\u1e96\u0180hir\u34eb\u2ec8\u3959op\xf4\u2fb5\u0100;h\u13b7\u3962\xef\u318d\u0100iu\u3969\u396dgm\xe1\u33b3\u0100bp\u3972\u3984setneq\u0100;q\u397d\u3980\uc000\u228a\ufe00;\uc000\u2acb\ufe00setneq\u0100;q\u398f\u3992\uc000\u228b\ufe00;\uc000\u2acc\ufe00\u0100hr\u399b\u399fet\xe1\u369ciangle\u0100lr\u39aa\u39afeft\xbb\u0925ight\xbb\u1051y;\u4432ash\xbb\u1036\u0180elr\u39c4\u39d2\u39d7\u0180;be\u2dea\u39cb\u39cfar;\u62bbq;\u625alip;\u62ee\u0100bt\u39dc\u1468a\xf2\u1469r;\uc000\ud835\udd33tr\xe9\u39aesu\u0100bp\u39ef\u39f1\xbb\u0d1c\xbb\u0d59pf;\uc000\ud835\udd67ro\xf0\u0efbtr\xe9\u39b4\u0100cu\u3a06\u3a0br;\uc000\ud835\udccb\u0100bp\u3a10\u3a18n\u0100Ee\u3980\u3a16\xbb\u397en\u0100Ee\u3992\u3a1e\xbb\u3990igzag;\u699a\u0380cefoprs\u3a36\u3a3b\u3a56\u3a5b\u3a54\u3a61\u3a6airc;\u4175\u0100di\u3a40\u3a51\u0100bg\u3a45\u3a49ar;\u6a5fe\u0100;q\u15fa\u3a4f;\u6259erp;\u6118r;\uc000\ud835\udd34pf;\uc000\ud835\udd68\u0100;e\u1479\u3a66at\xe8\u1479cr;\uc000\ud835\udccc\u0ae3\u178e\u3a87\0\u3a8b\0\u3a90\u3a9b\0\0\u3a9d\u3aa8\u3aab\u3aaf\0\0\u3ac3\u3ace\0\u3ad8\u17dc\u17dftr\xe9\u17d1r;\uc000\ud835\udd35\u0100Aa\u3a94\u3a97r\xf2\u03c3r\xf2\u09f6;\u43be\u0100Aa\u3aa1\u3aa4r\xf2\u03b8r\xf2\u09eba\xf0\u2713is;\u62fb\u0180dpt\u17a4\u3ab5\u3abe\u0100fl\u3aba\u17a9;\uc000\ud835\udd69im\xe5\u17b2\u0100Aa\u3ac7\u3acar\xf2\u03cer\xf2\u0a01\u0100cq\u3ad2\u17b8r;\uc000\ud835\udccd\u0100pt\u17d6\u3adcr\xe9\u17d4\u0400acefiosu\u3af0\u3afd\u3b08\u3b0c\u3b11\u3b15\u3b1b\u3b21c\u0100uy\u3af6\u3afbte\u803b\xfd\u40fd;\u444f\u0100iy\u3b02\u3b06rc;\u4177;\u444bn\u803b\xa5\u40a5r;\uc000\ud835\udd36cy;\u4457pf;\uc000\ud835\udd6acr;\uc000\ud835\udcce\u0100cm\u3b26\u3b29y;\u444el\u803b\xff\u40ff\u0500acdefhiosw\u3b42\u3b48\u3b54\u3b58\u3b64\u3b69\u3b6d\u3b74\u3b7a\u3b80cute;\u417a\u0100ay\u3b4d\u3b52ron;\u417e;\u4437ot;\u417c\u0100et\u3b5d\u3b61tr\xe6\u155fa;\u43b6r;\uc000\ud835\udd37cy;\u4436grarr;\u61ddpf;\uc000\ud835\udd6bcr;\uc000\ud835\udccf\u0100jn\u3b85\u3b87;\u600dj;\u600c"
	    .split("")
	    .map(function (c) { return c.charCodeAt(0); }));
	
	return decodeDataHtml;
}

var decodeDataXml = {};

var hasRequiredDecodeDataXml;

function requireDecodeDataXml () {
	if (hasRequiredDecodeDataXml) return decodeDataXml;
	hasRequiredDecodeDataXml = 1;
	// Generated using scripts/write-decode-map.ts
	Object.defineProperty(decodeDataXml, "__esModule", { value: true });
	decodeDataXml.default = new Uint16Array(
	// prettier-ignore
	"\u0200aglq\t\x15\x18\x1b\u026d\x0f\0\0\x12p;\u4026os;\u4027t;\u403et;\u403cuot;\u4022"
	    .split("")
	    .map(function (c) { return c.charCodeAt(0); }));
	
	return decodeDataXml;
}

var decode_codepoint = {};

var hasRequiredDecode_codepoint;

function requireDecode_codepoint () {
	if (hasRequiredDecode_codepoint) return decode_codepoint;
	hasRequiredDecode_codepoint = 1;
	(function (exports) {
		// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
		var _a;
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.replaceCodePoint = exports.fromCodePoint = void 0;
		var decodeMap = new Map([
		    [0, 65533],
		    [128, 8364],
		    [130, 8218],
		    [131, 402],
		    [132, 8222],
		    [133, 8230],
		    [134, 8224],
		    [135, 8225],
		    [136, 710],
		    [137, 8240],
		    [138, 352],
		    [139, 8249],
		    [140, 338],
		    [142, 381],
		    [145, 8216],
		    [146, 8217],
		    [147, 8220],
		    [148, 8221],
		    [149, 8226],
		    [150, 8211],
		    [151, 8212],
		    [152, 732],
		    [153, 8482],
		    [154, 353],
		    [155, 8250],
		    [156, 339],
		    [158, 382],
		    [159, 376],
		]);
		exports.fromCodePoint = 
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
		(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
		    var output = "";
		    if (codePoint > 0xffff) {
		        codePoint -= 0x10000;
		        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
		        codePoint = 0xdc00 | (codePoint & 0x3ff);
		    }
		    output += String.fromCharCode(codePoint);
		    return output;
		};
		function replaceCodePoint(codePoint) {
		    var _a;
		    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
		        return 0xfffd;
		    }
		    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
		}
		exports.replaceCodePoint = replaceCodePoint;
		function decodeCodePoint(codePoint) {
		    return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
		}
		exports.default = decodeCodePoint;
		
	} (decode_codepoint));
	return decode_codepoint;
}

var hasRequiredDecode;

function requireDecode () {
	if (hasRequiredDecode) return decode;
	hasRequiredDecode = 1;
	(function (exports) {
		var __importDefault = (decode && decode.__importDefault) || function (mod) {
		    return (mod && mod.__esModule) ? mod : { "default": mod };
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
		var decode_data_html_js_1 = __importDefault(requireDecodeDataHtml());
		exports.htmlDecodeTree = decode_data_html_js_1.default;
		var decode_data_xml_js_1 = __importDefault(requireDecodeDataXml());
		exports.xmlDecodeTree = decode_data_xml_js_1.default;
		var decode_codepoint_js_1 = __importDefault(requireDecode_codepoint());
		exports.decodeCodePoint = decode_codepoint_js_1.default;
		var decode_codepoint_js_2 = requireDecode_codepoint();
		Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.replaceCodePoint; } });
		Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.fromCodePoint; } });
		var CharCodes;
		(function (CharCodes) {
		    CharCodes[CharCodes["NUM"] = 35] = "NUM";
		    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
		    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
		    CharCodes[CharCodes["NINE"] = 57] = "NINE";
		    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
		    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
		    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
		    /** Bit that needs to be set to convert an upper case ASCII character to lower case */
		    CharCodes[CharCodes["To_LOWER_BIT"] = 32] = "To_LOWER_BIT";
		})(CharCodes || (CharCodes = {}));
		var BinTrieFlags;
		(function (BinTrieFlags) {
		    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
		    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
		    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
		})(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
		function getDecoder(decodeTree) {
		    return function decodeHTMLBinary(str, strict) {
		        var ret = "";
		        var lastIdx = 0;
		        var strIdx = 0;
		        while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
		            ret += str.slice(lastIdx, strIdx);
		            lastIdx = strIdx;
		            // Skip the "&"
		            strIdx += 1;
		            // If we have a numeric entity, handle this separately.
		            if (str.charCodeAt(strIdx) === CharCodes.NUM) {
		                // Skip the leading "&#". For hex entities, also skip the leading "x".
		                var start = strIdx + 1;
		                var base = 10;
		                var cp = str.charCodeAt(start);
		                if ((cp | CharCodes.To_LOWER_BIT) === CharCodes.LOWER_X) {
		                    base = 16;
		                    strIdx += 1;
		                    start += 1;
		                }
		                do
		                    cp = str.charCodeAt(++strIdx);
		                while ((cp >= CharCodes.ZERO && cp <= CharCodes.NINE) ||
		                    (base === 16 &&
		                        (cp | CharCodes.To_LOWER_BIT) >= CharCodes.LOWER_A &&
		                        (cp | CharCodes.To_LOWER_BIT) <= CharCodes.LOWER_F));
		                if (start !== strIdx) {
		                    var entity = str.substring(start, strIdx);
		                    var parsed = parseInt(entity, base);
		                    if (str.charCodeAt(strIdx) === CharCodes.SEMI) {
		                        strIdx += 1;
		                    }
		                    else if (strict) {
		                        continue;
		                    }
		                    ret += (0, decode_codepoint_js_1.default)(parsed);
		                    lastIdx = strIdx;
		                }
		                continue;
		            }
		            var resultIdx = 0;
		            var excess = 1;
		            var treeIdx = 0;
		            var current = decodeTree[treeIdx];
		            for (; strIdx < str.length; strIdx++, excess++) {
		                treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
		                if (treeIdx < 0)
		                    break;
		                current = decodeTree[treeIdx];
		                var masked = current & BinTrieFlags.VALUE_LENGTH;
		                // If the branch is a value, store it and continue
		                if (masked) {
		                    // If we have a legacy entity while parsing strictly, just skip the number of bytes
		                    if (!strict || str.charCodeAt(strIdx) === CharCodes.SEMI) {
		                        resultIdx = treeIdx;
		                        excess = 0;
		                    }
		                    // The mask is the number of bytes of the value, including the current byte.
		                    var valueLength = (masked >> 14) - 1;
		                    if (valueLength === 0)
		                        break;
		                    treeIdx += valueLength;
		                }
		            }
		            if (resultIdx !== 0) {
		                var valueLength = (decodeTree[resultIdx] & BinTrieFlags.VALUE_LENGTH) >> 14;
		                ret +=
		                    valueLength === 1
		                        ? String.fromCharCode(decodeTree[resultIdx] & ~BinTrieFlags.VALUE_LENGTH)
		                        : valueLength === 2
		                            ? String.fromCharCode(decodeTree[resultIdx + 1])
		                            : String.fromCharCode(decodeTree[resultIdx + 1], decodeTree[resultIdx + 2]);
		                lastIdx = strIdx - excess + 1;
		            }
		        }
		        return ret + str.slice(lastIdx);
		    };
		}
		function determineBranch(decodeTree, current, nodeIdx, char) {
		    var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
		    var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
		    // Case 1: Single branch encoded in jump offset
		    if (branchCount === 0) {
		        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
		    }
		    // Case 2: Multiple branches encoded in jump table
		    if (jumpOffset) {
		        var value = char - jumpOffset;
		        return value < 0 || value >= branchCount
		            ? -1
		            : decodeTree[nodeIdx + value] - 1;
		    }
		    // Case 3: Multiple branches encoded in dictionary
		    // Binary search for the character.
		    var lo = nodeIdx;
		    var hi = lo + branchCount - 1;
		    while (lo <= hi) {
		        var mid = (lo + hi) >>> 1;
		        var midVal = decodeTree[mid];
		        if (midVal < char) {
		            lo = mid + 1;
		        }
		        else if (midVal > char) {
		            hi = mid - 1;
		        }
		        else {
		            return decodeTree[mid + branchCount];
		        }
		    }
		    return -1;
		}
		exports.determineBranch = determineBranch;
		var htmlDecoder = getDecoder(decode_data_html_js_1.default);
		var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
		/**
		 * Decodes an HTML string, allowing for entities not terminated by a semi-colon.
		 *
		 * @param str The string to decode.
		 * @returns The decoded string.
		 */
		function decodeHTML(str) {
		    return htmlDecoder(str, false);
		}
		exports.decodeHTML = decodeHTML;
		/**
		 * Decodes an HTML string, requiring all entities to be terminated by a semi-colon.
		 *
		 * @param str The string to decode.
		 * @returns The decoded string.
		 */
		function decodeHTMLStrict(str) {
		    return htmlDecoder(str, true);
		}
		exports.decodeHTMLStrict = decodeHTMLStrict;
		/**
		 * Decodes an XML string, requiring all entities to be terminated by a semi-colon.
		 *
		 * @param str The string to decode.
		 * @returns The decoded string.
		 */
		function decodeXML(str) {
		    return xmlDecoder(str, true);
		}
		exports.decodeXML = decodeXML;
		
	} (decode));
	return decode;
}

var hasRequiredTokenizer;

function requireTokenizer () {
	if (hasRequiredTokenizer) return Tokenizer.exports;
	hasRequiredTokenizer = 1;
	(function (module, exports) {
		var decode_js_1 = requireDecode();
		var CharCodes;
		(function (CharCodes) {
		    CharCodes[CharCodes["Tab"] = 9] = "Tab";
		    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
		    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
		    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
		    CharCodes[CharCodes["Space"] = 32] = "Space";
		    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
		    CharCodes[CharCodes["Num"] = 35] = "Num";
		    CharCodes[CharCodes["Amp"] = 38] = "Amp";
		    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
		    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
		    CharCodes[CharCodes["Dash"] = 45] = "Dash";
		    CharCodes[CharCodes["Slash"] = 47] = "Slash";
		    CharCodes[CharCodes["Zero"] = 48] = "Zero";
		    CharCodes[CharCodes["Nine"] = 57] = "Nine";
		    CharCodes[CharCodes["Semi"] = 59] = "Semi";
		    CharCodes[CharCodes["Lt"] = 60] = "Lt";
		    CharCodes[CharCodes["Eq"] = 61] = "Eq";
		    CharCodes[CharCodes["Gt"] = 62] = "Gt";
		    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
		    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
		    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
		    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
		    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
		    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
		    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
		    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
		    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
		})(CharCodes || (CharCodes = {}));
		/** All the states the tokenizer can be in. */
		var State;
		(function (State) {
		    State[State["Text"] = 1] = "Text";
		    State[State["BeforeTagName"] = 2] = "BeforeTagName";
		    State[State["InTagName"] = 3] = "InTagName";
		    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
		    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
		    State[State["InClosingTagName"] = 6] = "InClosingTagName";
		    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
		    // Attributes
		    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
		    State[State["InAttributeName"] = 9] = "InAttributeName";
		    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
		    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
		    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
		    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
		    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
		    // Declarations
		    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
		    State[State["InDeclaration"] = 16] = "InDeclaration";
		    // Processing instructions
		    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
		    // Comments & CDATA
		    State[State["BeforeComment"] = 18] = "BeforeComment";
		    State[State["CDATASequence"] = 19] = "CDATASequence";
		    State[State["InSpecialComment"] = 20] = "InSpecialComment";
		    State[State["InCommentLike"] = 21] = "InCommentLike";
		    // Special tags
		    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
		    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
		    State[State["InSpecialTag"] = 24] = "InSpecialTag";
		    State[State["BeforeEntity"] = 25] = "BeforeEntity";
		    State[State["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
		    State[State["InNamedEntity"] = 27] = "InNamedEntity";
		    State[State["InNumericEntity"] = 28] = "InNumericEntity";
		    State[State["InHexEntity"] = 29] = "InHexEntity";
		})(State || (State = {}));
		function isWhitespace(c) {
		    return (c === CharCodes.Space ||
		        c === CharCodes.NewLine ||
		        c === CharCodes.Tab ||
		        c === CharCodes.FormFeed ||
		        c === CharCodes.CarriageReturn);
		}
		function isEndOfTagSection(c) {
		    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
		}
		function isNumber(c) {
		    return c >= CharCodes.Zero && c <= CharCodes.Nine;
		}
		function isASCIIAlpha(c) {
		    return ((c >= CharCodes.LowerA && c <= CharCodes.LowerZ) ||
		        (c >= CharCodes.UpperA && c <= CharCodes.UpperZ));
		}
		function isHexDigit(c) {
		    return ((c >= CharCodes.UpperA && c <= CharCodes.UpperF) ||
		        (c >= CharCodes.LowerA && c <= CharCodes.LowerF));
		}
		var QuoteType;
		(function (QuoteType) {
		    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
		    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
		    QuoteType[QuoteType["Single"] = 2] = "Single";
		    QuoteType[QuoteType["Double"] = 3] = "Double";
		})(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
		/**
		 * Sequences used to match longer strings.
		 *
		 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
		 * sequences with an increased offset.
		 */
		var Sequences = {
		    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
		    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]),
		    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]),
		    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
		    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
		    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
		};
		var Tokenizer = /** @class */ (function () {
		    function Tokenizer(_a, cbs) {
		        var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
		        this.cbs = cbs;
		        /** The current state the tokenizer is in. */
		        this.state = State.Text;
		        /** The read buffer. */
		        this.buffer = "";
		        /** The beginning of the section that is currently being read. */
		        this.sectionStart = 0;
		        /** The index within the buffer that we are currently looking at. */
		        this.index = 0;
		        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
		        this.baseState = State.Text;
		        /** For special parsing behavior inside of script and style tags. */
		        this.isSpecial = false;
		        /** Indicates whether the tokenizer has been paused. */
		        this.running = true;
		        /** The offset of the current buffer. */
		        this.offset = 0;
		        this.sequenceIndex = 0;
		        this.trieIndex = 0;
		        this.trieCurrent = 0;
		        /** For named entities, the index of the value. For numeric entities, the code point. */
		        this.entityResult = 0;
		        this.entityExcess = 0;
		        this.xmlMode = xmlMode;
		        this.decodeEntities = decodeEntities;
		        this.entityTrie = xmlMode ? decode_js_1.xmlDecodeTree : decode_js_1.htmlDecodeTree;
		    }
		    Tokenizer.prototype.reset = function () {
		        this.state = State.Text;
		        this.buffer = "";
		        this.sectionStart = 0;
		        this.index = 0;
		        this.baseState = State.Text;
		        this.currentSequence = undefined;
		        this.running = true;
		        this.offset = 0;
		    };
		    Tokenizer.prototype.write = function (chunk) {
		        this.offset += this.buffer.length;
		        this.buffer = chunk;
		        this.parse();
		    };
		    Tokenizer.prototype.end = function () {
		        if (this.running)
		            this.finish();
		    };
		    Tokenizer.prototype.pause = function () {
		        this.running = false;
		    };
		    Tokenizer.prototype.resume = function () {
		        this.running = true;
		        if (this.index < this.buffer.length + this.offset) {
		            this.parse();
		        }
		    };
		    /**
		     * The current index within all of the written data.
		     */
		    Tokenizer.prototype.getIndex = function () {
		        return this.index;
		    };
		    /**
		     * The start of the current section.
		     */
		    Tokenizer.prototype.getSectionStart = function () {
		        return this.sectionStart;
		    };
		    Tokenizer.prototype.stateText = function (c) {
		        if (c === CharCodes.Lt ||
		            (!this.decodeEntities && this.fastForwardTo(CharCodes.Lt))) {
		            if (this.index > this.sectionStart) {
		                this.cbs.ontext(this.sectionStart, this.index);
		            }
		            this.state = State.BeforeTagName;
		            this.sectionStart = this.index;
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.state = State.BeforeEntity;
		        }
		    };
		    Tokenizer.prototype.stateSpecialStartSequence = function (c) {
		        var isEnd = this.sequenceIndex === this.currentSequence.length;
		        var isMatch = isEnd
		            ? // If we are at the end of the sequence, make sure the tag name has ended
		                isEndOfTagSection(c)
		            : // Otherwise, do a case-insensitive comparison
		                (c | 0x20) === this.currentSequence[this.sequenceIndex];
		        if (!isMatch) {
		            this.isSpecial = false;
		        }
		        else if (!isEnd) {
		            this.sequenceIndex++;
		            return;
		        }
		        this.sequenceIndex = 0;
		        this.state = State.InTagName;
		        this.stateInTagName(c);
		    };
		    /** Look for an end tag. For <title> tags, also decode entities. */
		    Tokenizer.prototype.stateInSpecialTag = function (c) {
		        if (this.sequenceIndex === this.currentSequence.length) {
		            if (c === CharCodes.Gt || isWhitespace(c)) {
		                var endOfText = this.index - this.currentSequence.length;
		                if (this.sectionStart < endOfText) {
		                    // Spoof the index so that reported locations match up.
		                    var actualIndex = this.index;
		                    this.index = endOfText;
		                    this.cbs.ontext(this.sectionStart, endOfText);
		                    this.index = actualIndex;
		                }
		                this.isSpecial = false;
		                this.sectionStart = endOfText + 2; // Skip over the `</`
		                this.stateInClosingTagName(c);
		                return; // We are done; skip the rest of the function.
		            }
		            this.sequenceIndex = 0;
		        }
		        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
		            this.sequenceIndex += 1;
		        }
		        else if (this.sequenceIndex === 0) {
		            if (this.currentSequence === Sequences.TitleEnd) {
		                // We have to parse entities in <title> tags.
		                if (this.decodeEntities && c === CharCodes.Amp) {
		                    this.state = State.BeforeEntity;
		                }
		            }
		            else if (this.fastForwardTo(CharCodes.Lt)) {
		                // Outside of <title> tags, we can fast-forward.
		                this.sequenceIndex = 1;
		            }
		        }
		        else {
		            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
		            this.sequenceIndex = Number(c === CharCodes.Lt);
		        }
		    };
		    Tokenizer.prototype.stateCDATASequence = function (c) {
		        if (c === Sequences.Cdata[this.sequenceIndex]) {
		            if (++this.sequenceIndex === Sequences.Cdata.length) {
		                this.state = State.InCommentLike;
		                this.currentSequence = Sequences.CdataEnd;
		                this.sequenceIndex = 0;
		                this.sectionStart = this.index + 1;
		            }
		        }
		        else {
		            this.sequenceIndex = 0;
		            this.state = State.InDeclaration;
		            this.stateInDeclaration(c); // Reconsume the character
		        }
		    };
		    /**
		     * When we wait for one specific character, we can speed things up
		     * by skipping through the buffer until we find it.
		     *
		     * @returns Whether the character was found.
		     */
		    Tokenizer.prototype.fastForwardTo = function (c) {
		        while (++this.index < this.buffer.length + this.offset) {
		            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
		                return true;
		            }
		        }
		        /*
		         * We increment the index at the end of the `parse` loop,
		         * so set it to `buffer.length - 1` here.
		         *
		         * TODO: Refactor `parse` to increment index before calling states.
		         */
		        this.index = this.buffer.length + this.offset - 1;
		        return false;
		    };
		    /**
		     * Comments and CDATA end with `-->` and `]]>`.
		     *
		     * Their common qualities are:
		     * - Their end sequences have a distinct character they start with.
		     * - That character is then repeated, so we have to check multiple repeats.
		     * - All characters but the start character of the sequence can be skipped.
		     */
		    Tokenizer.prototype.stateInCommentLike = function (c) {
		        if (c === this.currentSequence[this.sequenceIndex]) {
		            if (++this.sequenceIndex === this.currentSequence.length) {
		                if (this.currentSequence === Sequences.CdataEnd) {
		                    this.cbs.oncdata(this.sectionStart, this.index, 2);
		                }
		                else {
		                    this.cbs.oncomment(this.sectionStart, this.index, 2);
		                }
		                this.sequenceIndex = 0;
		                this.sectionStart = this.index + 1;
		                this.state = State.Text;
		            }
		        }
		        else if (this.sequenceIndex === 0) {
		            // Fast-forward to the first character of the sequence
		            if (this.fastForwardTo(this.currentSequence[0])) {
		                this.sequenceIndex = 1;
		            }
		        }
		        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
		            // Allow long sequences, eg. --->, ]]]>
		            this.sequenceIndex = 0;
		        }
		    };
		    /**
		     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
		     *
		     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
		     * We allow anything that wouldn't end the tag.
		     */
		    Tokenizer.prototype.isTagStartChar = function (c) {
		        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
		    };
		    Tokenizer.prototype.startSpecial = function (sequence, offset) {
		        this.isSpecial = true;
		        this.currentSequence = sequence;
		        this.sequenceIndex = offset;
		        this.state = State.SpecialStartSequence;
		    };
		    Tokenizer.prototype.stateBeforeTagName = function (c) {
		        if (c === CharCodes.ExclamationMark) {
		            this.state = State.BeforeDeclaration;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.Questionmark) {
		            this.state = State.InProcessingInstruction;
		            this.sectionStart = this.index + 1;
		        }
		        else if (this.isTagStartChar(c)) {
		            var lower = c | 0x20;
		            this.sectionStart = this.index;
		            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
		                this.startSpecial(Sequences.TitleEnd, 3);
		            }
		            else {
		                this.state =
		                    !this.xmlMode && lower === Sequences.ScriptEnd[2]
		                        ? State.BeforeSpecialS
		                        : State.InTagName;
		            }
		        }
		        else if (c === CharCodes.Slash) {
		            this.state = State.BeforeClosingTagName;
		        }
		        else {
		            this.state = State.Text;
		            this.stateText(c);
		        }
		    };
		    Tokenizer.prototype.stateInTagName = function (c) {
		        if (isEndOfTagSection(c)) {
		            this.cbs.onopentagname(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		    };
		    Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
		        if (isWhitespace(c)) ;
		        else if (c === CharCodes.Gt) {
		            this.state = State.Text;
		        }
		        else {
		            this.state = this.isTagStartChar(c)
		                ? State.InClosingTagName
		                : State.InSpecialComment;
		            this.sectionStart = this.index;
		        }
		    };
		    Tokenizer.prototype.stateInClosingTagName = function (c) {
		        if (c === CharCodes.Gt || isWhitespace(c)) {
		            this.cbs.onclosetag(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.state = State.AfterClosingTagName;
		            this.stateAfterClosingTagName(c);
		        }
		    };
		    Tokenizer.prototype.stateAfterClosingTagName = function (c) {
		        // Skip everything until ">"
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    };
		    Tokenizer.prototype.stateBeforeAttributeName = function (c) {
		        if (c === CharCodes.Gt) {
		            this.cbs.onopentagend(this.index);
		            if (this.isSpecial) {
		                this.state = State.InSpecialTag;
		                this.sequenceIndex = 0;
		            }
		            else {
		                this.state = State.Text;
		            }
		            this.baseState = this.state;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.Slash) {
		            this.state = State.InSelfClosingTag;
		        }
		        else if (!isWhitespace(c)) {
		            this.state = State.InAttributeName;
		            this.sectionStart = this.index;
		        }
		    };
		    Tokenizer.prototype.stateInSelfClosingTag = function (c) {
		        if (c === CharCodes.Gt) {
		            this.cbs.onselfclosingtag(this.index);
		            this.state = State.Text;
		            this.baseState = State.Text;
		            this.sectionStart = this.index + 1;
		            this.isSpecial = false; // Reset special state, in case of self-closing special tags
		        }
		        else if (!isWhitespace(c)) {
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		    };
		    Tokenizer.prototype.stateInAttributeName = function (c) {
		        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
		            this.cbs.onattribname(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.state = State.AfterAttributeName;
		            this.stateAfterAttributeName(c);
		        }
		    };
		    Tokenizer.prototype.stateAfterAttributeName = function (c) {
		        if (c === CharCodes.Eq) {
		            this.state = State.BeforeAttributeValue;
		        }
		        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
		            this.cbs.onattribend(QuoteType.NoValue, this.index);
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		        else if (!isWhitespace(c)) {
		            this.cbs.onattribend(QuoteType.NoValue, this.index);
		            this.state = State.InAttributeName;
		            this.sectionStart = this.index;
		        }
		    };
		    Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
		        if (c === CharCodes.DoubleQuote) {
		            this.state = State.InAttributeValueDq;
		            this.sectionStart = this.index + 1;
		        }
		        else if (c === CharCodes.SingleQuote) {
		            this.state = State.InAttributeValueSq;
		            this.sectionStart = this.index + 1;
		        }
		        else if (!isWhitespace(c)) {
		            this.sectionStart = this.index;
		            this.state = State.InAttributeValueNq;
		            this.stateInAttributeValueNoQuotes(c); // Reconsume token
		        }
		    };
		    Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
		        if (c === quote ||
		            (!this.decodeEntities && this.fastForwardTo(quote))) {
		            this.cbs.onattribdata(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.cbs.onattribend(quote === CharCodes.DoubleQuote
		                ? QuoteType.Double
		                : QuoteType.Single, this.index);
		            this.state = State.BeforeAttributeName;
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.baseState = this.state;
		            this.state = State.BeforeEntity;
		        }
		    };
		    Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
		        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
		    };
		    Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
		        this.handleInAttributeValue(c, CharCodes.SingleQuote);
		    };
		    Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
		        if (isWhitespace(c) || c === CharCodes.Gt) {
		            this.cbs.onattribdata(this.sectionStart, this.index);
		            this.sectionStart = -1;
		            this.cbs.onattribend(QuoteType.Unquoted, this.index);
		            this.state = State.BeforeAttributeName;
		            this.stateBeforeAttributeName(c);
		        }
		        else if (this.decodeEntities && c === CharCodes.Amp) {
		            this.baseState = this.state;
		            this.state = State.BeforeEntity;
		        }
		    };
		    Tokenizer.prototype.stateBeforeDeclaration = function (c) {
		        if (c === CharCodes.OpeningSquareBracket) {
		            this.state = State.CDATASequence;
		            this.sequenceIndex = 0;
		        }
		        else {
		            this.state =
		                c === CharCodes.Dash
		                    ? State.BeforeComment
		                    : State.InDeclaration;
		        }
		    };
		    Tokenizer.prototype.stateInDeclaration = function (c) {
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.cbs.ondeclaration(this.sectionStart, this.index);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    };
		    Tokenizer.prototype.stateInProcessingInstruction = function (c) {
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    };
		    Tokenizer.prototype.stateBeforeComment = function (c) {
		        if (c === CharCodes.Dash) {
		            this.state = State.InCommentLike;
		            this.currentSequence = Sequences.CommentEnd;
		            // Allow short comments (eg. <!-->)
		            this.sequenceIndex = 2;
		            this.sectionStart = this.index + 1;
		        }
		        else {
		            this.state = State.InDeclaration;
		        }
		    };
		    Tokenizer.prototype.stateInSpecialComment = function (c) {
		        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
		            this.cbs.oncomment(this.sectionStart, this.index, 0);
		            this.state = State.Text;
		            this.sectionStart = this.index + 1;
		        }
		    };
		    Tokenizer.prototype.stateBeforeSpecialS = function (c) {
		        var lower = c | 0x20;
		        if (lower === Sequences.ScriptEnd[3]) {
		            this.startSpecial(Sequences.ScriptEnd, 4);
		        }
		        else if (lower === Sequences.StyleEnd[3]) {
		            this.startSpecial(Sequences.StyleEnd, 4);
		        }
		        else {
		            this.state = State.InTagName;
		            this.stateInTagName(c); // Consume the token again
		        }
		    };
		    Tokenizer.prototype.stateBeforeEntity = function (c) {
		        // Start excess with 1 to include the '&'
		        this.entityExcess = 1;
		        this.entityResult = 0;
		        if (c === CharCodes.Num) {
		            this.state = State.BeforeNumericEntity;
		        }
		        else if (c === CharCodes.Amp) ;
		        else {
		            this.trieIndex = 0;
		            this.trieCurrent = this.entityTrie[0];
		            this.state = State.InNamedEntity;
		            this.stateInNamedEntity(c);
		        }
		    };
		    Tokenizer.prototype.stateInNamedEntity = function (c) {
		        this.entityExcess += 1;
		        this.trieIndex = (0, decode_js_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
		        if (this.trieIndex < 0) {
		            this.emitNamedEntity();
		            this.index--;
		            return;
		        }
		        this.trieCurrent = this.entityTrie[this.trieIndex];
		        var masked = this.trieCurrent & decode_js_1.BinTrieFlags.VALUE_LENGTH;
		        // If the branch is a value, store it and continue
		        if (masked) {
		            // The mask is the number of bytes of the value, including the current byte.
		            var valueLength = (masked >> 14) - 1;
		            // If we have a legacy entity while parsing strictly, just skip the number of bytes
		            if (!this.allowLegacyEntity() && c !== CharCodes.Semi) {
		                this.trieIndex += valueLength;
		            }
		            else {
		                // Add 1 as we have already incremented the excess
		                var entityStart = this.index - this.entityExcess + 1;
		                if (entityStart > this.sectionStart) {
		                    this.emitPartial(this.sectionStart, entityStart);
		                }
		                // If this is a surrogate pair, consume the next two bytes
		                this.entityResult = this.trieIndex;
		                this.trieIndex += valueLength;
		                this.entityExcess = 0;
		                this.sectionStart = this.index + 1;
		                if (valueLength === 0) {
		                    this.emitNamedEntity();
		                }
		            }
		        }
		    };
		    Tokenizer.prototype.emitNamedEntity = function () {
		        this.state = this.baseState;
		        if (this.entityResult === 0) {
		            return;
		        }
		        var valueLength = (this.entityTrie[this.entityResult] & decode_js_1.BinTrieFlags.VALUE_LENGTH) >>
		            14;
		        switch (valueLength) {
		            case 1:
		                this.emitCodePoint(this.entityTrie[this.entityResult] &
		                    ~decode_js_1.BinTrieFlags.VALUE_LENGTH);
		                break;
		            case 2:
		                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
		                break;
		            case 3: {
		                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
		                this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
		            }
		        }
		    };
		    Tokenizer.prototype.stateBeforeNumericEntity = function (c) {
		        if ((c | 0x20) === CharCodes.LowerX) {
		            this.entityExcess++;
		            this.state = State.InHexEntity;
		        }
		        else {
		            this.state = State.InNumericEntity;
		            this.stateInNumericEntity(c);
		        }
		    };
		    Tokenizer.prototype.emitNumericEntity = function (strict) {
		        var entityStart = this.index - this.entityExcess - 1;
		        var numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
		        if (numberStart !== this.index) {
		            // Emit leading data if any
		            if (entityStart > this.sectionStart) {
		                this.emitPartial(this.sectionStart, entityStart);
		            }
		            this.sectionStart = this.index + Number(strict);
		            this.emitCodePoint((0, decode_js_1.replaceCodePoint)(this.entityResult));
		        }
		        this.state = this.baseState;
		    };
		    Tokenizer.prototype.stateInNumericEntity = function (c) {
		        if (c === CharCodes.Semi) {
		            this.emitNumericEntity(true);
		        }
		        else if (isNumber(c)) {
		            this.entityResult = this.entityResult * 10 + (c - CharCodes.Zero);
		            this.entityExcess++;
		        }
		        else {
		            if (this.allowLegacyEntity()) {
		                this.emitNumericEntity(false);
		            }
		            else {
		                this.state = this.baseState;
		            }
		            this.index--;
		        }
		    };
		    Tokenizer.prototype.stateInHexEntity = function (c) {
		        if (c === CharCodes.Semi) {
		            this.emitNumericEntity(true);
		        }
		        else if (isNumber(c)) {
		            this.entityResult = this.entityResult * 16 + (c - CharCodes.Zero);
		            this.entityExcess++;
		        }
		        else if (isHexDigit(c)) {
		            this.entityResult =
		                this.entityResult * 16 + ((c | 0x20) - CharCodes.LowerA + 10);
		            this.entityExcess++;
		        }
		        else {
		            if (this.allowLegacyEntity()) {
		                this.emitNumericEntity(false);
		            }
		            else {
		                this.state = this.baseState;
		            }
		            this.index--;
		        }
		    };
		    Tokenizer.prototype.allowLegacyEntity = function () {
		        return (!this.xmlMode &&
		            (this.baseState === State.Text ||
		                this.baseState === State.InSpecialTag));
		    };
		    /**
		     * Remove data that has already been consumed from the buffer.
		     */
		    Tokenizer.prototype.cleanup = function () {
		        // If we are inside of text or attributes, emit what we already have.
		        if (this.running && this.sectionStart !== this.index) {
		            if (this.state === State.Text ||
		                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
		                this.cbs.ontext(this.sectionStart, this.index);
		                this.sectionStart = this.index;
		            }
		            else if (this.state === State.InAttributeValueDq ||
		                this.state === State.InAttributeValueSq ||
		                this.state === State.InAttributeValueNq) {
		                this.cbs.onattribdata(this.sectionStart, this.index);
		                this.sectionStart = this.index;
		            }
		        }
		    };
		    Tokenizer.prototype.shouldContinue = function () {
		        return this.index < this.buffer.length + this.offset && this.running;
		    };
		    /**
		     * Iterates through the buffer, calling the function corresponding to the current state.
		     *
		     * States that are more likely to be hit are higher up, as a performance improvement.
		     */
		    Tokenizer.prototype.parse = function () {
		        while (this.shouldContinue()) {
		            var c = this.buffer.charCodeAt(this.index - this.offset);
		            if (this.state === State.Text) {
		                this.stateText(c);
		            }
		            else if (this.state === State.SpecialStartSequence) {
		                this.stateSpecialStartSequence(c);
		            }
		            else if (this.state === State.InSpecialTag) {
		                this.stateInSpecialTag(c);
		            }
		            else if (this.state === State.CDATASequence) {
		                this.stateCDATASequence(c);
		            }
		            else if (this.state === State.InAttributeValueDq) {
		                this.stateInAttributeValueDoubleQuotes(c);
		            }
		            else if (this.state === State.InAttributeName) {
		                this.stateInAttributeName(c);
		            }
		            else if (this.state === State.InCommentLike) {
		                this.stateInCommentLike(c);
		            }
		            else if (this.state === State.InSpecialComment) {
		                this.stateInSpecialComment(c);
		            }
		            else if (this.state === State.BeforeAttributeName) {
		                this.stateBeforeAttributeName(c);
		            }
		            else if (this.state === State.InTagName) {
		                this.stateInTagName(c);
		            }
		            else if (this.state === State.InClosingTagName) {
		                this.stateInClosingTagName(c);
		            }
		            else if (this.state === State.BeforeTagName) {
		                this.stateBeforeTagName(c);
		            }
		            else if (this.state === State.AfterAttributeName) {
		                this.stateAfterAttributeName(c);
		            }
		            else if (this.state === State.InAttributeValueSq) {
		                this.stateInAttributeValueSingleQuotes(c);
		            }
		            else if (this.state === State.BeforeAttributeValue) {
		                this.stateBeforeAttributeValue(c);
		            }
		            else if (this.state === State.BeforeClosingTagName) {
		                this.stateBeforeClosingTagName(c);
		            }
		            else if (this.state === State.AfterClosingTagName) {
		                this.stateAfterClosingTagName(c);
		            }
		            else if (this.state === State.BeforeSpecialS) {
		                this.stateBeforeSpecialS(c);
		            }
		            else if (this.state === State.InAttributeValueNq) {
		                this.stateInAttributeValueNoQuotes(c);
		            }
		            else if (this.state === State.InSelfClosingTag) {
		                this.stateInSelfClosingTag(c);
		            }
		            else if (this.state === State.InDeclaration) {
		                this.stateInDeclaration(c);
		            }
		            else if (this.state === State.BeforeDeclaration) {
		                this.stateBeforeDeclaration(c);
		            }
		            else if (this.state === State.BeforeComment) {
		                this.stateBeforeComment(c);
		            }
		            else if (this.state === State.InProcessingInstruction) {
		                this.stateInProcessingInstruction(c);
		            }
		            else if (this.state === State.InNamedEntity) {
		                this.stateInNamedEntity(c);
		            }
		            else if (this.state === State.BeforeEntity) {
		                this.stateBeforeEntity(c);
		            }
		            else if (this.state === State.InHexEntity) {
		                this.stateInHexEntity(c);
		            }
		            else if (this.state === State.InNumericEntity) {
		                this.stateInNumericEntity(c);
		            }
		            else {
		                // `this._state === State.BeforeNumericEntity`
		                this.stateBeforeNumericEntity(c);
		            }
		            this.index++;
		        }
		        this.cleanup();
		    };
		    Tokenizer.prototype.finish = function () {
		        if (this.state === State.InNamedEntity) {
		            this.emitNamedEntity();
		        }
		        // If there is remaining data, emit it in a reasonable way
		        if (this.sectionStart < this.index) {
		            this.handleTrailingData();
		        }
		        this.cbs.onend();
		    };
		    /** Handle any trailing data. */
		    Tokenizer.prototype.handleTrailingData = function () {
		        var endIndex = this.buffer.length + this.offset;
		        if (this.state === State.InCommentLike) {
		            if (this.currentSequence === Sequences.CdataEnd) {
		                this.cbs.oncdata(this.sectionStart, endIndex, 0);
		            }
		            else {
		                this.cbs.oncomment(this.sectionStart, endIndex, 0);
		            }
		        }
		        else if (this.state === State.InNumericEntity &&
		            this.allowLegacyEntity()) {
		            this.emitNumericEntity(false);
		            // All trailing data will have been consumed
		        }
		        else if (this.state === State.InHexEntity &&
		            this.allowLegacyEntity()) {
		            this.emitNumericEntity(false);
		            // All trailing data will have been consumed
		        }
		        else if (this.state === State.InTagName ||
		            this.state === State.BeforeAttributeName ||
		            this.state === State.BeforeAttributeValue ||
		            this.state === State.AfterAttributeName ||
		            this.state === State.InAttributeName ||
		            this.state === State.InAttributeValueSq ||
		            this.state === State.InAttributeValueDq ||
		            this.state === State.InAttributeValueNq ||
		            this.state === State.InClosingTagName) ;
		        else {
		            this.cbs.ontext(this.sectionStart, endIndex);
		        }
		    };
		    Tokenizer.prototype.emitPartial = function (start, endIndex) {
		        if (this.baseState !== State.Text &&
		            this.baseState !== State.InSpecialTag) {
		            this.cbs.onattribdata(start, endIndex);
		        }
		        else {
		            this.cbs.ontext(start, endIndex);
		        }
		    };
		    Tokenizer.prototype.emitCodePoint = function (cp) {
		        if (this.baseState !== State.Text &&
		            this.baseState !== State.InSpecialTag) {
		            this.cbs.onattribentity(cp);
		        }
		        else {
		            this.cbs.ontextentity(cp);
		        }
		    };
		    return Tokenizer;
		}());
		module.exports = {
		  default:Tokenizer,
		  QuoteType
		}; 
	} (Tokenizer, Tokenizer.exports));
	return Tokenizer.exports;
}

var Parser_1;
var hasRequiredParser;

function requireParser () {
	if (hasRequiredParser) return Parser_1;
	hasRequiredParser = 1;
	var Tokenizer_js_1 = requireTokenizer();
	var decode_js_1 = requireDecode();
	var formTags = new Set([
	    "input",
	    "option",
	    "optgroup",
	    "select",
	    "button",
	    "datalist",
	    "textarea",
	]);
	var pTag = new Set(["p"]);
	var tableSectionTags = new Set(["thead", "tbody"]);
	var ddtTags = new Set(["dd", "dt"]);
	var rtpTags = new Set(["rt", "rp"]);
	var openImpliesClose = new Map([
	    ["tr", new Set(["tr", "th", "td"])],
	    ["th", new Set(["th"])],
	    ["td", new Set(["thead", "th", "td"])],
	    ["body", new Set(["head", "link", "script"])],
	    ["li", new Set(["li"])],
	    ["p", pTag],
	    ["h1", pTag],
	    ["h2", pTag],
	    ["h3", pTag],
	    ["h4", pTag],
	    ["h5", pTag],
	    ["h6", pTag],
	    ["select", formTags],
	    ["input", formTags],
	    ["output", formTags],
	    ["button", formTags],
	    ["datalist", formTags],
	    ["textarea", formTags],
	    ["option", new Set(["option"])],
	    ["optgroup", new Set(["optgroup", "option"])],
	    ["dd", ddtTags],
	    ["dt", ddtTags],
	    ["address", pTag],
	    ["article", pTag],
	    ["aside", pTag],
	    ["blockquote", pTag],
	    ["details", pTag],
	    ["div", pTag],
	    ["dl", pTag],
	    ["fieldset", pTag],
	    ["figcaption", pTag],
	    ["figure", pTag],
	    ["footer", pTag],
	    ["form", pTag],
	    ["header", pTag],
	    ["hr", pTag],
	    ["main", pTag],
	    ["nav", pTag],
	    ["ol", pTag],
	    ["pre", pTag],
	    ["section", pTag],
	    ["table", pTag],
	    ["ul", pTag],
	    ["rt", rtpTags],
	    ["rp", rtpTags],
	    ["tbody", tableSectionTags],
	    ["tfoot", tableSectionTags],
	]);
	var voidElements = new Set([
	    "area",
	    "base",
	    "basefont",
	    "br",
	    "col",
	    "command",
	    "embed",
	    "frame",
	    "hr",
	    "img",
	    "input",
	    "isindex",
	    "keygen",
	    "link",
	    "meta",
	    "param",
	    "source",
	    "track",
	    "wbr",
	]);
	var foreignContextElements = new Set(["math", "svg"]);
	var htmlIntegrationElements = new Set([
	    "mi",
	    "mo",
	    "mn",
	    "ms",
	    "mtext",
	    "annotation-xml",
	    "foreignobject",
	    "desc",
	    "title",
	]);
	var reNameEnd = /\s|\//;
	var Parser = /** @class */ (function () {
	    function Parser(cbs, options) {
	        if (options === void 0) { options = {}; }
	        var _a, _b, _c, _d, _e;
	        this.options = options;
	        /** The start index of the last event. */
	        this.startIndex = 0;
	        /** The end index of the last event. */
	        this.endIndex = 0;
	        /**
	         * Store the start index of the current open tag,
	         * so we can update the start index for attributes.
	         */
	        this.openTagStart = 0;
	        this.tagname = "";
	        this.attribname = "";
	        this.attribvalue = "";
	        this.attribs = null;
	        this.stack = [];
	        this.foreignContext = [];
	        this.buffers = [];
	        this.bufferOffset = 0;
	        /** The index of the last written buffer. Used when resuming after a `pause()`. */
	        this.writeIndex = 0;
	        /** Indicates whether the parser has finished running / `.end` has been called. */
	        this.ended = false;
	        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
	        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
	        this.lowerCaseAttributeNames =
	            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
	        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_js_1.default)(this.options, this);
	        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
	    }
	    // Tokenizer event handlers
	    /** @internal */
	    Parser.prototype.ontext = function (start, endIndex) {
	        var _a, _b;
	        var data = this.getSlice(start, endIndex);
	        this.endIndex = endIndex - 1;
	        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
	        this.startIndex = endIndex;
	    };
	    /** @internal */
	    Parser.prototype.ontextentity = function (cp) {
	        var _a, _b;
	        /*
	         * Entities can be emitted on the character, or directly after.
	         * We use the section start here to get accurate indices.
	         */
	        var idx = this.tokenizer.getSectionStart();
	        this.endIndex = idx - 1;
	        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, decode_js_1.fromCodePoint)(cp));
	        this.startIndex = idx;
	    };
	    Parser.prototype.isVoidElement = function (name) {
	        return !this.options.xmlMode && voidElements.has(name);
	    };
	    /** @internal */
	    Parser.prototype.onopentagname = function (start, endIndex) {
	        this.endIndex = endIndex;
	        var name = this.getSlice(start, endIndex);
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        this.emitOpenTag(name);
	    };
	    Parser.prototype.emitOpenTag = function (name) {
	        var _a, _b, _c, _d;
	        this.openTagStart = this.startIndex;
	        this.tagname = name;
	        var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
	        if (impliesClose) {
	            while (this.stack.length > 0 &&
	                impliesClose.has(this.stack[this.stack.length - 1])) {
	                var el = this.stack.pop();
	                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, el, true);
	            }
	        }
	        if (!this.isVoidElement(name)) {
	            this.stack.push(name);
	            if (foreignContextElements.has(name)) {
	                this.foreignContext.push(true);
	            }
	            else if (htmlIntegrationElements.has(name)) {
	                this.foreignContext.push(false);
	            }
	        }
	        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
	        if (this.cbs.onopentag)
	            this.attribs = {};
	    };
	    Parser.prototype.endOpenTag = function (isImplied) {
	        var _a, _b;
	        this.startIndex = this.openTagStart;
	        if (this.attribs) {
	            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
	            this.attribs = null;
	        }
	        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
	            this.cbs.onclosetag(this.tagname, true);
	        }
	        this.tagname = "";
	    };
	    /** @internal */
	    Parser.prototype.onopentagend = function (endIndex) {
	        this.endIndex = endIndex;
	        this.endOpenTag(false);
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.onclosetag = function (start, endIndex) {
	        var _a, _b, _c, _d, _e, _f;
	        this.endIndex = endIndex;
	        var name = this.getSlice(start, endIndex);
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        if (foreignContextElements.has(name) ||
	            htmlIntegrationElements.has(name)) {
	            this.foreignContext.pop();
	        }
	        if (!this.isVoidElement(name)) {
	            var pos = this.stack.lastIndexOf(name);
	            if (pos !== -1) {
	                if (this.cbs.onclosetag) {
	                    var count = this.stack.length - pos;
	                    while (count--) {
	                        // We know the stack has sufficient elements.
	                        this.cbs.onclosetag(this.stack.pop(), count !== 0);
	                    }
	                }
	                else
	                    this.stack.length = pos;
	            }
	            else if (!this.options.xmlMode && name === "p") {
	                // Implicit open before close
	                this.emitOpenTag("p");
	                this.closeCurrentTag(true);
	            }
	        }
	        else if (!this.options.xmlMode && name === "br") {
	            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
	            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
	            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
	            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
	        }
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.onselfclosingtag = function (endIndex) {
	        this.endIndex = endIndex;
	        if (this.options.xmlMode ||
	            this.options.recognizeSelfClosing ||
	            this.foreignContext[this.foreignContext.length - 1]) {
	            this.closeCurrentTag(false);
	            // Set `startIndex` for next node
	            this.startIndex = endIndex + 1;
	        }
	        else {
	            // Ignore the fact that the tag is self-closing.
	            this.onopentagend(endIndex);
	        }
	    };
	    Parser.prototype.closeCurrentTag = function (isOpenImplied) {
	        var _a, _b;
	        var name = this.tagname;
	        this.endOpenTag(isOpenImplied);
	        // Self-closing tags will be on the top of the stack
	        if (this.stack[this.stack.length - 1] === name) {
	            // If the opening tag isn't implied, the closing tag has to be implied.
	            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
	            this.stack.pop();
	        }
	    };
	    /** @internal */
	    Parser.prototype.onattribname = function (start, endIndex) {
	        this.startIndex = start;
	        var name = this.getSlice(start, endIndex);
	        this.attribname = this.lowerCaseAttributeNames
	            ? name.toLowerCase()
	            : name;
	    };
	    /** @internal */
	    Parser.prototype.onattribdata = function (start, endIndex) {
	        this.attribvalue += this.getSlice(start, endIndex);
	    };
	    /** @internal */
	    Parser.prototype.onattribentity = function (cp) {
	        this.attribvalue += (0, decode_js_1.fromCodePoint)(cp);
	    };
	    /** @internal */
	    Parser.prototype.onattribend = function (quote, endIndex) {
	        var _a, _b;
	        this.endIndex = endIndex;
	        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === Tokenizer_js_1.QuoteType.Double
	            ? '"'
	            : quote === Tokenizer_js_1.QuoteType.Single
	                ? "'"
	                : quote === Tokenizer_js_1.QuoteType.NoValue
	                    ? undefined
	                    : null);
	        if (this.attribs &&
	            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
	            this.attribs[this.attribname] = this.attribvalue;
	        }
	        this.attribvalue = "";
	    };
	    Parser.prototype.getInstructionName = function (value) {
	        var idx = value.search(reNameEnd);
	        var name = idx < 0 ? value : value.substr(0, idx);
	        if (this.lowerCaseTagNames) {
	            name = name.toLowerCase();
	        }
	        return name;
	    };
	    /** @internal */
	    Parser.prototype.ondeclaration = function (start, endIndex) {
	        this.endIndex = endIndex;
	        var value = this.getSlice(start, endIndex);
	        if (this.cbs.onprocessinginstruction) {
	            var name = this.getInstructionName(value);
	            this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
	        }
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.onprocessinginstruction = function (start, endIndex) {
	        this.endIndex = endIndex;
	        var value = this.getSlice(start, endIndex);
	        if (this.cbs.onprocessinginstruction) {
	            var name = this.getInstructionName(value);
	            this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
	        }
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.oncomment = function (start, endIndex, offset) {
	        var _a, _b, _c, _d;
	        this.endIndex = endIndex;
	        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
	        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.oncdata = function (start, endIndex, offset) {
	        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
	        this.endIndex = endIndex;
	        var value = this.getSlice(start, endIndex - offset);
	        if (this.options.xmlMode || this.options.recognizeCDATA) {
	            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
	            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
	            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
	        }
	        else {
	            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[".concat(value, "]]"));
	            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
	        }
	        // Set `startIndex` for next node
	        this.startIndex = endIndex + 1;
	    };
	    /** @internal */
	    Parser.prototype.onend = function () {
	        var _a, _b;
	        if (this.cbs.onclosetag) {
	            // Set the end index for all remaining tags
	            this.endIndex = this.startIndex;
	            for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true))
	                ;
	        }
	        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
	    };
	    /**
	     * Resets the parser to a blank state, ready to parse a new HTML document
	     */
	    Parser.prototype.reset = function () {
	        var _a, _b, _c, _d;
	        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
	        this.tokenizer.reset();
	        this.tagname = "";
	        this.attribname = "";
	        this.attribs = null;
	        this.stack.length = 0;
	        this.startIndex = 0;
	        this.endIndex = 0;
	        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
	        this.buffers.length = 0;
	        this.bufferOffset = 0;
	        this.writeIndex = 0;
	        this.ended = false;
	    };
	    /**
	     * Resets the parser, then parses a complete document and
	     * pushes it to the handler.
	     *
	     * @param data Document to parse.
	     */
	    Parser.prototype.parseComplete = function (data) {
	        this.reset();
	        this.end(data);
	    };
	    Parser.prototype.getSlice = function (start, end) {
	        while (start - this.bufferOffset >= this.buffers[0].length) {
	            this.shiftBuffer();
	        }
	        var str = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
	        while (end - this.bufferOffset > this.buffers[0].length) {
	            this.shiftBuffer();
	            str += this.buffers[0].slice(0, end - this.bufferOffset);
	        }
	        return str;
	    };
	    Parser.prototype.shiftBuffer = function () {
	        this.bufferOffset += this.buffers[0].length;
	        this.writeIndex--;
	        this.buffers.shift();
	    };
	    /**
	     * Parses a chunk of data and calls the corresponding callbacks.
	     *
	     * @param chunk Chunk to parse.
	     */
	    Parser.prototype.write = function (chunk) {
	        var _a, _b;
	        if (this.ended) {
	            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
	            return;
	        }
	        this.buffers.push(chunk);
	        if (this.tokenizer.running) {
	            this.tokenizer.write(chunk);
	            this.writeIndex++;
	        }
	    };
	    /**
	     * Parses the end of the buffer and clears the stack, calls onend.
	     *
	     * @param chunk Optional final chunk to parse.
	     */
	    Parser.prototype.end = function (chunk) {
	        var _a, _b;
	        if (this.ended) {
	            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, Error(".end() after done!"));
	            return;
	        }
	        if (chunk)
	            this.write(chunk);
	        this.ended = true;
	        this.tokenizer.end();
	    };
	    /**
	     * Pauses parsing. The parser won't emit events until `resume` is called.
	     */
	    Parser.prototype.pause = function () {
	        this.tokenizer.pause();
	    };
	    /**
	     * Resumes parsing after `pause` was called.
	     */
	    Parser.prototype.resume = function () {
	        this.tokenizer.resume();
	        while (this.tokenizer.running &&
	            this.writeIndex < this.buffers.length) {
	            this.tokenizer.write(this.buffers[this.writeIndex++]);
	        }
	        if (this.ended)
	            this.tokenizer.end();
	    };
	    /**
	     * Alias of `write`, for backwards compatibility.
	     *
	     * @param chunk Chunk to parse.
	     * @deprecated
	     */
	    Parser.prototype.parseChunk = function (chunk) {
	        this.write(chunk);
	    };
	    /**
	     * Alias of `end`, for backwards compatibility.
	     *
	     * @param chunk Optional final chunk to parse.
	     * @deprecated
	     */
	    Parser.prototype.done = function (chunk) {
	        this.end(chunk);
	    };
	    return Parser;
	}());

	Parser_1 = Parser;
	return Parser_1;
}

var parse2;
var hasRequiredParse2;

function requireParse2 () {
	if (hasRequiredParse2) return parse2;
	hasRequiredParse2 = 1;
	var DomHandler = requireDomhandler();
	var Parser = requireParser();
	function parseDocument(data, options) {
	    var handler = new DomHandler(undefined, options);
	    new Parser(handler, options).end(data);
	    return handler.root.children;
	}
	parse2 = parseDocument;
	return parse2;
}

var parse;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse;
	hasRequiredParse = 1;
	const parse2 = requireParse2(),
	    // parse5 = require('./parse5/index').parse,
	    config = requireConfig(),

	    // html与wxml转换关系
	    correspondTag = (()=>{
	        let result = {
	                a:'navigator',
	                todogroup:'checkbox-group',
	                audio:'audio-player'
	            };
	        
	        // 该系列的标签都转换为text
	        // ['span','b','strong','i','em','code','sub','sup','g-emoji','mark','ins','u'].forEach(item => {
	        //     result[item] = 'text';
	        // });

	        // 该系列小程序原生tag，不需转换
	        [...config.wxml,...config.components].forEach(item => {
	            result[item] = item;
	        });
	        return result;
	    })(),

	    // 元素与html对应的wxml标签名
	    getWxmlTag = tagStr => !tagStr ? undefined : correspondTag[tagStr] || 'view',

	    // 依赖父级的元素
	    relyList = ['li'],

	    // 精简数据，并初始化相关事件等
	    initObj = (obj,option)=>{
	        const result = {
	                theme:option.theme || 'light',
	                _e:{}
	            },
	            events = commonjsGlobal._events = {},
	            base = option.base;

	        // 主题保存到全局
	        commonjsGlobal._theme = result.theme;

	        // 事件添加到全局中，各个组件在触发事件时会从全局调用
	        if(option.events){
	            for(let key in option.events){
	                events[key] = option.events[key];
	            }	        }
	        // 遍历原始数据，处理成能解析的数据
	        let eachFn;
	        (eachFn = (arr,obj,_e,isRichTextContent) => {
	            obj.children = obj.children || [];
	            _e.child = _e.child || [];
	            let child = obj.children,
	                child_e = _e.child;
	            
	            arr.forEach(item => {
	                if(item.type === 'comment'){
	                    return;
	                }	                let o = {
	                        type:item.type === 'text' ? 'text' : isRichTextContent ? 'node' : item.type
	                    },
	                    e = {},
	                    attrs = o.attrs = item.attribs || {};
	                if(item.type === 'text'){
	                    o.text = e.text = item.data;
	                }else {
	                    if(isRichTextContent){
	                        o.name = item.name;
	                    }else {
	                        o.tag = getWxmlTag(item.name);      // 转换之后的标签
	                        // o.tag = o.tag === 'text' ? 'view' : o.tag;
	                        e.tag = item.name;                  // 原始
	                        o.attrs = item.attribs;
	                        e.attrs = JSON.parse(JSON.stringify(attrs));
	                    }	                    attrs.class = attrs.class ? `h2w__${item.name} ${attrs.class}` : `h2w__${item.name}`;
	                    
	                    // 处理资源相对路径
	                    if(base && attrs.src){
	                        let src = attrs.src;
	                        switch (src.indexOf('//')) {
	                            case 0:
	                                attrs.src = `https:${src}`;
	                            break;
	                            case -1:
	                                attrs.src = `${base}${src}`;
	                            break;
	                        }	                    }	                }
	                o.rely = relyList.indexOf(e.tag) > -1;      // 判断是否不能嵌套其它标签
	                
	                if(item.children){
	                    eachFn(item.children,o,e,isRichTextContent || item.name === 'rich-text');
	                }	                child.push(o);
	                child_e.push(e);
	            });
	        })(obj,result,result._e,false);
	        return result;
	    };

	parse = (str,option) => {
	    str = (()=>{
	        let re = /<body[^>]*>([\s\S]*)<\/body>/i;
	        if(re.test(str)){
	            let result = re.exec(str);
	            return result[1] || str;
	        }else {
	            return str;
	        }	    })();
	    return initObj(parse2(str,{decodeEntities:true}),option);
	};
	return parse;
}

var towxml;
var hasRequiredTowxml;

function requireTowxml () {
	if (hasRequiredTowxml) return towxml;
	hasRequiredTowxml = 1;
	const md = requireMarkdown(),
	    parse = requireParse();

	towxml = (str,type,option)=>{
	    option = option || {};
	    let result;
	    switch (type) {
	        case 'markdown':
	            result = parse(md(str),option);
	        break;
	        case 'html':
	            result = parse(str,option);
	        break;
	        default:
	            throw new Error('Invalid type, only markdown and html are supported');
	    }	    return result;
	};
	return towxml;
}

var towxmlExports = requireTowxml();
var index = /*@__PURE__*/getDefaultExportFromCjs(towxmlExports);

module.exports = index;
