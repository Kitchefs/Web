(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[127],{"2LKJ":function(t,e,r){t.exports=g
g.Minimatch=m
var n={sep:"/"}
try{n=r("33yf")}catch(t){}var a=g.GLOBSTAR=m.GLOBSTAR={}
var i=r("TuBq")
var o={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}}
var s="[^/]"
var l=s+"*?"
var c="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?"
var u="(?:(?!(?:\\/|^)\\.).)*?"
var h=p("().*{}+?[]^$\\!")
function p(t){return t.split("").reduce((function(t,e){t[e]=true
return t}),{})}var f=/\/+/
g.filter=d
function d(t,e){e=e||{}
return function(r,n,a){return g(r,t,e)}}function v(t,e){t=t||{}
e=e||{}
var r={}
Object.keys(e).forEach((function(t){r[t]=e[t]}))
Object.keys(t).forEach((function(e){r[e]=t[e]}))
return r}g.defaults=function(t){if(!t||!Object.keys(t).length)return g
var e=g
var r=function(r,n,a){return e.minimatch(r,n,v(t,a))}
r.Minimatch=function(r,n){return new e.Minimatch(r,v(t,n))}
return r}
m.defaults=function(t){if(!t||!Object.keys(t).length)return m
return g.defaults(t).Minimatch}
function g(t,e,r){if("string"!==typeof e)throw new TypeError("glob pattern string required")
r||(r={})
if(!r.nocomment&&"#"===e.charAt(0))return false
if(""===e.trim())return""===t
return new m(e,r).match(t)}function m(t,e){if(!(this instanceof m))return new m(t,e)
if("string"!==typeof t)throw new TypeError("glob pattern string required")
e||(e={})
t=t.trim()
"/"!==n.sep&&(t=t.split(n.sep).join("/"))
this.options=e
this.set=[]
this.pattern=t
this.regexp=null
this.negate=false
this.comment=false
this.empty=false
this.make()}m.prototype.debug=function(){}
m.prototype.make=b
function b(){if(this._made)return
var t=this.pattern
var e=this.options
if(!e.nocomment&&"#"===t.charAt(0)){this.comment=true
return}if(!t){this.empty=true
return}this.parseNegate()
var r=this.globSet=this.braceExpand()
e.debug&&(this.debug=console.error)
this.debug(this.pattern,r)
r=this.globParts=r.map((function(t){return t.split(f)}))
this.debug(this.pattern,r)
r=r.map((function(t,e,r){return t.map(this.parse,this)}),this)
this.debug(this.pattern,r)
r=r.filter((function(t){return-1===t.indexOf(false)}))
this.debug(this.pattern,r)
this.set=r}m.prototype.parseNegate=y
function y(){var t=this.pattern
var e=false
var r=this.options
var n=0
if(r.nonegate)return
for(var a=0,i=t.length;a<i&&"!"===t.charAt(a);a++){e=!e
n++}n&&(this.pattern=t.substr(n))
this.negate=e}g.braceExpand=function(t,e){return j(t,e)}
m.prototype.braceExpand=j
function j(t,e){e||(e=this instanceof m?this.options:{})
t="undefined"===typeof t?this.pattern:t
if("undefined"===typeof t)throw new TypeError("undefined pattern")
if(e.nobrace||!t.match(/\{.*\}/))return[t]
return i(t)}m.prototype.parse=F
var O={}
function F(t,e){if(t.length>65536)throw new TypeError("pattern is too long")
var r=this.options
if(!r.noglobstar&&"**"===t)return a
if(""===t)return""
var n=""
var i=!!r.nocase
var c=false
var u=[]
var p=[]
var f
var d=false
var v=-1
var g=-1
var m="."===t.charAt(0)?"":r.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)"
var b=this
function y(){if(f){switch(f){case"*":n+=l
i=true
break
case"?":n+=s
i=true
break
default:n+="\\"+f}b.debug("clearStateChar %j %j",f,n)
f=false}}for(var j,F=0,w=t.length;F<w&&(j=t.charAt(F));F++){this.debug("%s\t%s %s %j",t,F,n,j)
if(c&&h[j]){n+="\\"+j
c=false
continue}switch(j){case"/":return false
case"\\":y()
c=true
continue
case"?":case"*":case"+":case"@":case"!":this.debug("%s\t%s %s %j <-- stateChar",t,F,n,j)
if(d){this.debug("  in class")
"!"===j&&F===g+1&&(j="^")
n+=j
continue}b.debug("call clearStateChar %j",f)
y()
f=j
r.noext&&y()
continue
case"(":if(d){n+="("
continue}if(!f){n+="\\("
continue}u.push({type:f,start:F-1,reStart:n.length,open:o[f].open,close:o[f].close})
n+="!"===f?"(?:(?!(?:":"(?:"
this.debug("plType %j %j",f,n)
f=false
continue
case")":if(d||!u.length){n+="\\)"
continue}y()
i=true
var C=u.pop()
n+=C.close
"!"===C.type&&p.push(C)
C.reEnd=n.length
continue
case"|":if(d||!u.length||c){n+="\\|"
c=false
continue}y()
n+="|"
continue
case"[":y()
if(d){n+="\\"+j
continue}d=true
g=F
v=n.length
n+=j
continue
case"]":if(F===g+1||!d){n+="\\"+j
c=false
continue}if(d){var x=t.substring(g+1,F)
try{RegExp("["+x+"]")}catch(t){var I=this.parse(x,O)
n=n.substr(0,v)+"\\["+I[0]+"\\]"
i=i||I[1]
d=false
continue}}i=true
d=false
n+=j
continue
default:y()
c?c=false:!h[j]||"^"===j&&d||(n+="\\")
n+=j}}if(d){x=t.substr(g+1)
I=this.parse(x,O)
n=n.substr(0,v)+"\\["+I[0]
i=i||I[1]}for(C=u.pop();C;C=u.pop()){var _=n.slice(C.reStart+C.open.length)
this.debug("setting tail",n,C)
_=_.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(t,e,r){r||(r="\\")
return e+e+r+"|"}))
this.debug("tail=%j\n   %s",_,_,C,n)
var E="*"===C.type?l:"?"===C.type?s:"\\"+C.type
i=true
n=n.slice(0,C.reStart)+E+"\\("+_}y()
c&&(n+="\\\\")
var A=false
switch(n.charAt(0)){case".":case"[":case"(":A=true}for(var S=p.length-1;S>-1;S--){var L=p[S]
var T=n.slice(0,L.reStart)
var U=n.slice(L.reStart,L.reEnd-8)
var M=n.slice(L.reEnd-8,L.reEnd)
var R=n.slice(L.reEnd)
M+=R
var D=T.split("(").length-1
var B=R
for(F=0;F<D;F++)B=B.replace(/\)[+*?]?/,"")
R=B
var N=""
""===R&&e!==O&&(N="$")
var $=T+U+R+N+M
n=$}""!==n&&i&&(n="(?=.)"+n)
A&&(n=m+n)
if(e===O)return[n,i]
if(!i)return k(t)
var z=r.nocase?"i":""
try{var J=new RegExp("^"+n+"$",z)}catch(t){return new RegExp("$.")}J._glob=t
J._src=n
return J}g.makeRe=function(t,e){return new m(t,e||{}).makeRe()}
m.prototype.makeRe=w
function w(){if(this.regexp||false===this.regexp)return this.regexp
var t=this.set
if(!t.length){this.regexp=false
return this.regexp}var e=this.options
var r=e.noglobstar?l:e.dot?c:u
var n=e.nocase?"i":""
var i=t.map((function(t){return t.map((function(t){return t===a?r:"string"===typeof t?x(t):t._src})).join("\\/")})).join("|")
i="^(?:"+i+")$"
this.negate&&(i="^(?!"+i+").*$")
try{this.regexp=new RegExp(i,n)}catch(t){this.regexp=false}return this.regexp}g.match=function(t,e,r){r=r||{}
var n=new m(e,r)
t=t.filter((function(t){return n.match(t)}))
n.options.nonull&&!t.length&&t.push(e)
return t}
m.prototype.match=C
function C(t,e){this.debug("match",t,this.pattern)
if(this.comment)return false
if(this.empty)return""===t
if("/"===t&&e)return true
var r=this.options
"/"!==n.sep&&(t=t.split(n.sep).join("/"))
t=t.split(f)
this.debug(this.pattern,"split",t)
var a=this.set
this.debug(this.pattern,"set",a)
var i
var o
for(o=t.length-1;o>=0;o--){i=t[o]
if(i)break}for(o=0;o<a.length;o++){var s=a[o]
var l=t
r.matchBase&&1===s.length&&(l=[i])
var c=this.matchOne(l,s,e)
if(c){if(r.flipNegate)return true
return!this.negate}}if(r.flipNegate)return false
return this.negate}m.prototype.matchOne=function(t,e,r){var n=this.options
this.debug("matchOne",{this:this,file:t,pattern:e})
this.debug("matchOne",t.length,e.length)
for(var i=0,o=0,s=t.length,l=e.length;i<s&&o<l;i++,o++){this.debug("matchOne loop")
var c=e[o]
var u=t[i]
this.debug(e,c,u)
if(false===c)return false
if(c===a){this.debug("GLOBSTAR",[e,c,u])
var h=i
var p=o+1
if(p===l){this.debug("** at the end")
for(;i<s;i++)if("."===t[i]||".."===t[i]||!n.dot&&"."===t[i].charAt(0))return false
return true}while(h<s){var f=t[h]
this.debug("\nglobstar while",t,h,e,p,f)
if(this.matchOne(t.slice(h),e.slice(p),r)){this.debug("globstar found match!",h,s,f)
return true}if("."===f||".."===f||!n.dot&&"."===f.charAt(0)){this.debug("dot detected!",t,h,e,p)
break}this.debug("globstar swallow a segment, and continue")
h++}if(r){this.debug("\n>>> no match, partial?",t,h,e,p)
if(h===s)return true}return false}var d
if("string"===typeof c){d=n.nocase?u.toLowerCase()===c.toLowerCase():u===c
this.debug("string match",c,u,d)}else{d=u.match(c)
this.debug("pattern match",c,u,d)}if(!d)return false}if(i===s&&o===l)return true
if(i===s)return r
if(o===l){var v=i===s-1&&""===t[i]
return v}throw new Error("wtf?")}
function k(t){return t.replace(/\\(.)/g,"$1")}function x(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}},"33yf":function(t,e,r){(function(t){function r(t,e){var r=0
for(var n=t.length-1;n>=0;n--){var a=t[n]
if("."===a)t.splice(n,1)
else if(".."===a){t.splice(n,1)
r++}else if(r){t.splice(n,1)
r--}}if(e)for(;r--;r)t.unshift("..")
return t}e.resolve=function(){var e="",n=false
for(var i=arguments.length-1;i>=-1&&!n;i--){var o=i>=0?arguments[i]:t.cwd()
if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings")
if(!o)continue
e=o+"/"+e
n="/"===o.charAt(0)}e=r(a(e.split("/"),(function(t){return!!t})),!n).join("/")
return(n?"/":"")+e||"."}
e.normalize=function(t){var n=e.isAbsolute(t),o="/"===i(t,-1)
t=r(a(t.split("/"),(function(t){return!!t})),!n).join("/")
t||n||(t=".")
t&&o&&(t+="/")
return(n?"/":"")+t}
e.isAbsolute=function(t){return"/"===t.charAt(0)}
e.join=function(){var t=Array.prototype.slice.call(arguments,0)
return e.normalize(a(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings")
return t})).join("/"))}
e.relative=function(t,r){t=e.resolve(t).substr(1)
r=e.resolve(r).substr(1)
function n(t){var e=0
for(;e<t.length;e++)if(""!==t[e])break
var r=t.length-1
for(;r>=0;r--)if(""!==t[r])break
if(e>r)return[]
return t.slice(e,r-e+1)}var a=n(t.split("/"))
var i=n(r.split("/"))
var o=Math.min(a.length,i.length)
var s=o
for(var l=0;l<o;l++)if(a[l]!==i[l]){s=l
break}var c=[]
for(l=s;l<a.length;l++)c.push("..")
c=c.concat(i.slice(s))
return c.join("/")}
e.sep="/"
e.delimiter=":"
e.dirname=function(t){"string"!==typeof t&&(t+="")
if(0===t.length)return"."
var e=t.charCodeAt(0)
var r=47===e
var n=-1
var a=true
for(var i=t.length-1;i>=1;--i){e=t.charCodeAt(i)
if(47===e){if(!a){n=i
break}}else a=false}if(-1===n)return r?"/":"."
if(r&&1===n)return"/"
return t.slice(0,n)}
function n(t){"string"!==typeof t&&(t+="")
var e=0
var r=-1
var n=true
var a
for(a=t.length-1;a>=0;--a)if(47===t.charCodeAt(a)){if(!n){e=a+1
break}}else if(-1===r){n=false
r=a+1}if(-1===r)return""
return t.slice(e,r)}e.basename=function(t,e){var r=n(t)
e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length))
return r}
e.extname=function(t){"string"!==typeof t&&(t+="")
var e=-1
var r=0
var n=-1
var a=true
var i=0
for(var o=t.length-1;o>=0;--o){var s=t.charCodeAt(o)
if(47===s){if(!a){r=o+1
break}continue}if(-1===n){a=false
n=o+1}46===s?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1)}if(-1===e||-1===n||0===i||1===i&&e===n-1&&e===r+1)return""
return t.slice(e,n)}
function a(t,e){if(t.filter)return t.filter(e)
var r=[]
for(var n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n])
return r}var i="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){e<0&&(e=t.length+e)
return t.substr(e,r)}}).call(this,r("8oxB"))},"7Lu0":function(t,e,r){"use strict"
r.d(e,"a",(function(){return f}))
var n=r("VTBJ")
var a=r("1OyB")
var i=r("vuIU")
var o=r("md7G")
var s=r("foSv")
var l=r("Ji7U")
var c=r("q1tI")
var u=r.n(c)
var h=r("hPGw")
var p=u.a.createElement("path",{d:"M572.501 747l-254.933 815.893-101.867-31.786 278.507-890.774h1105.813v-320H783.808L612.181 107H.021v1546.667c0 88.213 71.787 160 160 160h1388.054c75.946 0 141.973-54.08 156.906-128.64L1892.608 747H572.501z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(t){Object(l["a"])(e,t)
function e(){Object(a["a"])(this,e)
return Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}Object(i["a"])(e,[{key:"render",value:function(){return u.a.createElement(h["a"],Object.assign({},this.props,{name:"IconOpenFolder",viewBox:"0 0 1920 1920",bidirectional:true}),p)}}])
e.displayName="IconOpenFolderSolid"
return e}(c["Component"])
f.glyphName="open-folder"
f.variant="Solid"
f.propTypes=Object(n["a"])({},h["a"].propTypes)},IqBw:function(t,e,r){"use strict"
r.d(e,"a",(function(){return f}))
var n=r("VTBJ")
var a=r("1OyB")
var i=r("vuIU")
var o=r("md7G")
var s=r("foSv")
var l=r("Ji7U")
var c=r("q1tI")
var u=r.n(c)
var h=r("hPGw")
var p=u.a.createElement("path",{d:"M1493.602 1468.294H225.837C523.211 387.9 755.305 1443.9 983.898 1115.918c284.612-408.283 590.57-405.685 710.174 352.376h-200.47zm-816-1129.412c124.8 0 225.882 101.196 225.882 225.883 0 124.687-101.082 225.882-225.882 225.882-124.687 0-225.882-101.195-225.882-225.882 0-124.687 101.195-225.883 225.882-225.883zM-.045 1807.118h1920V113h-1920v1694.118z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(t){Object(l["a"])(e,t)
function e(){Object(a["a"])(this,e)
return Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}Object(i["a"])(e,[{key:"render",value:function(){return u.a.createElement(h["a"],Object.assign({},this.props,{name:"IconImage",viewBox:"0 0 1920 1920"}),p)}}])
e.displayName="IconImageSolid"
return e}(c["Component"])
f.glyphName="image"
f.variant="Solid"
f.propTypes=Object(n["a"])({},h["a"].propTypes)},"Op/J":function(t,e,r){"use strict"
r.r(e)
var n=r("An8g")
var a=r("VTBJ")
var i=r("M1Vv")
var o=r("q1tI")
var s=r.n(o)
var l=r("LvDl")
var c=r.n(l)
var u=r("ouhR")
var h=r.n(u)
var p=r("x1Tw")
var f=r("2LKJ")
var d=r.n(f)
var v=r("TU4e")
var g=r("VTJ5")
var m=r("5JRF")
var b=r("Xx/m")
var y=r("ysUD")
var j=r("WfMV")
var O=r("Cf7h")
var F=r("VDZY")
var w=r("7Lu0")
var C=r("XHgw")
var k=r("IqBw")
r("17x9")
const x={Accept:"application/json+canvas-string-ids"}
function I(t,e){return p["a"].get("/api/v1/".concat(t,"/").concat(e,"/folders/root"),x)}function _(t){const e=new FormData
Object.keys(t).forEach(r=>e.append(r,t[r]))
return e}function E(t,e,r,n){const i=_(Object(a["a"])({},e.upload_params,{file:t}))
const o=Object(a["a"])({"Content-Type":"multipart/form-data"},x)
p["a"].post(e.upload_url,i,o).then(t=>r(t.data)).catch(t=>n(t))}function A(t,e,r,n){p["a"].post("/api/v1/folders/".concat(e,"/files"),{name:t.name,size:t.size,parent_folder_id:e,on_duplicate:"rename"},x).then(e=>E(t,e.data,r,n)).catch(t=>n(t))}var S=r("XGn+")
var L=r("dqQ7")
var T=r("yE80")
class U extends s.a.Component{constructor(t){var e
super(t)
e=this
this.populateCollectionsList=function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=c.a.cloneDeep(e.state.collections)
t.forEach(t=>{const a=e.formatFolderInfo(t,r)
n[a.id]=a
const i=t.parent_folder_id||0
const o=n[i].collections
if(!o.includes(a.id)){o.push(a.id)
n[i].collections=e.orderedIdsFromList(n,o)}})
e.setState({collections:n})
t.forEach(t=>{e.state.openFolders.includes(t.parent_folder_id)&&e.getFolderData(t.id)})}
this.populateItemsList=t=>{const e=c.a.cloneDeep(this.state.items)
const r=c.a.cloneDeep(this.state.collections)
t.forEach(t=>{if(this.contentTypeIsAllowed(t["content-type"])){const n=this.formatFileInfo(t)
e[n.id]=n
const a=t.folder_id
const i=r[a].items
if(!i.includes(n.id)){i.push(n.id)
r[a].items=this.orderedIdsFromList(e,i)}}})
this.setState({items:e,collections:r})}
this.onFolderToggle=t=>this.onFolderClick(t.id,t)
this.onFolderClick=(t,e)=>{const r=this.state.collections[t]
let n=[]
const a=this.state.openFolders
if(!r.locked&&a.includes(t))n=n.concat(a.filter(e=>e!==t))
else if(!r.locked){n=n.concat(a)
n.push(t)
r.collections.forEach(t=>this.getFolderData(t))}return this.setState({openFolders:n,uploadFolder:t})}
this.onFileClick=t=>{const e=this.findFolderForFile(t)
this.setState({uploadFolder:e&&e.id})
this.props.selectFile(this.state.items[t.id])}
this.onInputChange=t=>{t&&this.submitFile(t[0])}
this.submitFile=t=>{this.setState({uploading:true})
A(t,this.state.uploadFolder,this.onUploadSucceed,this.onUploadFail)}
this.onUploadSucceed=t=>{this.populateItemsList([t])
this.clearUploadInfo()
const e=this.state.collections[t.folder_id]
this.setSuccessMessage(i["a"].t("Success: File uploaded"))
0===h()("button:contains('".concat(t.display_name,"')")).length&&h()("button:contains('".concat(e&&e.name,"')")).click()
const r=h()("button:contains('".concat(t.display_name,"')"))
h()(".file-browser__tree").scrollTo(r)
r.click()}
this.onUploadFail=()=>{this.clearUploadInfo()
this.setFailureMessage(i["a"].t("File upload failed"))}
this.setSuccessMessage=t=>{Object(L["c"])(t)()}
this.setFailureMessage=t=>{Object(L["b"])(t)()}
this.selectLocalFile=()=>{this.uploadInput.click()}
this.state={collections:{0:{collections:[]}},items:{},openFolders:[],uploadFolder:null,uploading:false,loadingCount:0}}componentDidMount(){this.getRootFolders()}getContextName(t){return"courses"===t?i["a"].t("Course files"):i["a"].t("Group files")}getContextInfo(t){const e=Object(O["a"])(t)
if(e&&e[0]&&e[1]){const t=this.getContextName(e[0])
return{name:t,type:e[0],id:e[1]}}}getRootFolders(){this.props.useContextAssets&&this.getContextFolders()
this.getUserFolders()}getUserFolders(){this.getRootFolderData("users","self",{name:i["a"].t("My files")})}getContextFolders(){if(!ENV.context_asset_string)return
const t=this.getContextInfo(ENV.context_asset_string)
t&&t.type&&t.id&&this.getRootFolderData(t.type,t.id,{name:t.name})}increaseLoadingCount(){let t=this.state.loadingCount
t+=1
this.setState({loadingCount:t})}decreaseLoadingCount(){let t=this.state.loadingCount
t-=1
this.setState({loadingCount:t})}getRootFolderData(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.increaseLoadingCount()
I(t,e).then(t=>this.populateRootFolder(t.data,r)).catch(t=>{this.decreaseLoadingCount()
t.response&&401!==t.response.status&&this.setFailureMessage(i["a"].t("Something went wrong"))})}populateRootFolder(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
this.decreaseLoadingCount()
this.populateCollectionsList([t],e)
this.getFolderData(t.id)}getFolderData(t){const e=this.state.collections
if(!e[t].locked){this.getPaginatedData(this.folderFileApiUrl(t,"folders"),this.populateCollectionsList)
this.getPaginatedData(this.folderFileApiUrl(t),this.populateItemsList)}}getPaginatedData(t,e){p["a"].get(t).then(t=>{e(t.data)
const r=Object(S["a"])(t.headers.link).next
r&&this.getPaginatedData(r,e)})}folderFileApiUrl(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"files"
return"/api/v1/folders/".concat(t,"/").concat(e)}contentTypeIsAllowed(t){for(const e of this.props.contentTypes)if(d()(t,e))return true
return false}formatFolderInfo(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const r=t.locked_for_user?i["a"].t("Locked"):null
const n=Object(a["a"])({api:t,id:t.id,collections:[],items:[],name:t.name,context:"/".concat(t.context_type.toLowerCase(),"s/").concat(t.context_id),canUpload:t.can_upload,locked:t.locked_for_user,descriptor:r},e)
const o=this.state.collections[t.id]
Object.assign(n,o&&{collections:o.collections,items:o.items})
return n}formatFileInfo(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const r=this.state.collections
const n=r[t.folder_id].context
const i=Object(a["a"])({api:t,id:t.id,name:t.display_name,thumbnail:t.thumbnail_url,src:"".concat(n,"/files/").concat(t.id,"/preview").concat(n.includes("user")?"?verifier=".concat(t.uuid):""),alt:t.display_name},e)
return i}orderedIdsFromList(t,e){try{const r=e.sort((e,r)=>T["a"].strings(t[e].name,t[r].name))
return r}catch(t){console.error(t)
return e}}findFolderForFile(t){const e=this.state.collections
const r=Object.keys(e).find(r=>{const n=e[r].items
if(n&&n.includes(t.id))return r})
return e[r]}clearUploadInfo(){this.setState({uploading:false})
this.uploadInput.value=""}renderUploadDialog(){if(!this.props.allowUpload)return null
const t=this.state.collections[this.state.uploadFolder]
const e=!t||t.locked||!t.canUpload
const r=e?Object(n["a"])(j["a"],{},void 0,i["a"].t("Upload not available for this folder")):""
const a=this.props.contentTypes.join(",")
return Object(n["a"])("div",{className:"image-upload__form"},void 0,s.a.createElement("input",{onChange:t=>this.onInputChange(t.target.files),ref:t=>{this.uploadInput=t},type:"file",accept:a,className:"hidden"}),Object(n["a"])(b["a"],{id:"image-upload__upload",onClick:this.selectLocalFile,disabled:e,variant:"ghost",icon:F["a"]},void 0,i["a"].t("Upload File")," ",r))}renderMask(){return this.state.uploading?Object(n["a"])(y["a"],{},void 0,Object(n["a"])(g["a"],{className:"file-browser__uploading",renderTitle:i["a"].t("File uploading")})):null}renderLoading(){return this.state.loadingCount>0?Object(n["a"])(g["a"],{className:"file-browser__loading",renderTitle:i["a"].t("Loading folders"),size:"small"}):null}render(){const t=Object(n["a"])("div",{className:"file-browser__container"},void 0,Object(n["a"])(m["a"],{},void 0,i["a"].t("Available folders")),Object(n["a"])("div",{className:"file-browser__tree"},void 0,Object(n["a"])(v["a"],{collections:this.state.collections,items:this.state.items,size:"medium",onCollectionToggle:this.onFolderToggle,onCollectionClick:this.onFolderClick,onItemClick:this.onFileClick,treeLabel:i["a"].t("Folder tree"),rootId:0,showRootCollection:false,defaultExpanded:this.state.openFolders,collectionIconExpanded:w["a"],collectionIcon:C["a"],itemIcon:k["a"],selectionType:"single"}),this.renderMask(),this.renderLoading()),this.renderUploadDialog())
return t}}U.defaultProps={allowUpload:true,contentTypes:["*/*"],useContextAssets:true}
e["default"]=U},TuBq:function(t,e,r){var n=r("icBU")
var a=r("kbA8")
t.exports=d
var i="\0SLASH"+Math.random()+"\0"
var o="\0OPEN"+Math.random()+"\0"
var s="\0CLOSE"+Math.random()+"\0"
var l="\0COMMA"+Math.random()+"\0"
var c="\0PERIOD"+Math.random()+"\0"
function u(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function h(t){return t.split("\\\\").join(i).split("\\{").join(o).split("\\}").join(s).split("\\,").join(l).split("\\.").join(c)}function p(t){return t.split(i).join("\\").split(o).join("{").split(s).join("}").split(l).join(",").split(c).join(".")}function f(t){if(!t)return[""]
var e=[]
var r=a("{","}",t)
if(!r)return t.split(",")
var n=r.pre
var i=r.body
var o=r.post
var s=n.split(",")
s[s.length-1]+="{"+i+"}"
var l=f(o)
if(o.length){s[s.length-1]+=l.shift()
s.push.apply(s,l)}e.push.apply(e,s)
return e}function d(t){if(!t)return[]
"{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2))
return y(h(t),true).map(p)}function v(t){return"{"+t+"}"}function g(t){return/^-?0\d/.test(t)}function m(t,e){return t<=e}function b(t,e){return t>=e}function y(t,e){var r=[]
var i=a("{","}",t)
if(!i||/\$$/.test(i.pre))return[t]
var o=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body)
var l=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body)
var c=o||l
var h=i.body.indexOf(",")>=0
if(!c&&!h){if(i.post.match(/,.*\}/)){t=i.pre+"{"+i.body+s+i.post
return y(t)}return[t]}var p
if(c)p=i.body.split(/\.\./)
else{p=f(i.body)
if(1===p.length){p=y(p[0],false).map(v)
if(1===p.length){var d=i.post.length?y(i.post,false):[""]
return d.map((function(t){return i.pre+p[0]+t}))}}}var j=i.pre
d=i.post.length?y(i.post,false):[""]
var O
if(c){var F=u(p[0])
var w=u(p[1])
var C=Math.max(p[0].length,p[1].length)
var k=3==p.length?Math.abs(u(p[2])):1
var x=m
var I=w<F
if(I){k*=-1
x=b}var _=p.some(g)
O=[]
for(var E=F;x(E,w);E+=k){var A
if(l){A=String.fromCharCode(E)
"\\"===A&&(A="")}else{A=String(E)
if(_){var S=C-A.length
if(S>0){var L=new Array(S+1).join("0")
A=E<0?"-"+L+A.slice(1):L+A}}}O.push(A)}}else O=n(p,(function(t){return y(t,false)}))
for(var T=0;T<O.length;T++)for(var U=0;U<d.length;U++){var M=j+O[T]+d[U];(!e||c||M)&&r.push(M)}return r}},VDZY:function(t,e,r){"use strict"
r.d(e,"a",(function(){return f}))
var n=r("VTBJ")
var a=r("1OyB")
var i=r("vuIU")
var o=r("md7G")
var s=r("foSv")
var l=r("Ji7U")
var c=r("q1tI")
var u=r.n(c)
var h=r("hPGw")
var p=u.a.createElement("path",{d:"M1467.552 1700.252l297.428-297.428 155.362 155.362L1558.527 1920H368.814L7 1558.186l155.361-155.362 297.429 297.428h1007.762zM965.902 0l517.175 517.176-155.361 155.361-251.941-251.94v1002.708H856.028V420.597l-251.941 251.94-155.362-155.361L965.901 0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var f=function(t){Object(l["a"])(e,t)
function e(){Object(a["a"])(this,e)
return Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}Object(i["a"])(e,[{key:"render",value:function(){return u.a.createElement(h["a"],Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),p)}}])
e.displayName="IconUploadSolid"
return e}(c["Component"])
f.glyphName="upload"
f.variant="Solid"
f.propTypes=Object(n["a"])({},h["a"].propTypes)},"XGn+":function(t,e,r){"use strict"
e["a"]=function(t){if(!t)return[]
const e={}
t.split(",").map(t=>t.split("; ")).forEach(t=>{const r=t[0].substring(1,t[0].length-1)
let n=t[1].split("=")
n=n[1]
n=n.substring(1,n.length-1)
e[n]=r})
return e}},icBU:function(t,e){t.exports=function(t,e){var n=[]
for(var a=0;a<t.length;a++){var i=e(t[a],a)
r(i)?n.push.apply(n,i):n.push(i)}return n}
var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},kbA8:function(t,e,r){"use strict"
t.exports=n
function n(t,e,r){t instanceof RegExp&&(t=a(t,r))
e instanceof RegExp&&(e=a(e,r))
var n=i(t,e,r)
return n&&{start:n[0],end:n[1],pre:r.slice(0,n[0]),body:r.slice(n[0]+t.length,n[1]),post:r.slice(n[1]+e.length)}}function a(t,e){var r=e.match(t)
return r?r[0]:null}n.range=i
function i(t,e,r){var n,a,i,o,s
var l=r.indexOf(t)
var c=r.indexOf(e,l+1)
var u=l
if(l>=0&&c>0){n=[]
i=r.length
while(u>=0&&!s){if(u==l){n.push(u)
l=r.indexOf(t,u+1)}else if(1==n.length)s=[n.pop(),c]
else{a=n.pop()
if(a<i){i=a
o=c}c=r.indexOf(e,u+1)}u=l<c&&l>=0?l:c}n.length&&(s=[i,o])}return s}}}])

//# sourceMappingURL=127-c-824e9a2d4a.js.map