(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[244],{"0jNN":function(e,t,r){"use strict"
var n=Object.prototype.hasOwnProperty
var i=Array.isArray
var o=function(){var e=[]
for(var t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}()
var a=function(e){while(e.length>1){var t=e.pop()
var r=t.obj[t.prop]
if(i(r)){var n=[]
for(var o=0;o<r.length;++o)"undefined"!==typeof r[o]&&n.push(r[o])
t.obj[t.prop]=n}}}
var s=function(e,t){var r=t&&t.plainObjects?Object.create(null):{}
for(var n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n])
return r}
var l=function e(t,r,o){if(!r)return t
if("object"!==typeof r){if(i(t))t.push(r)
else{if(!t||"object"!==typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=true)}return t}if(!t||"object"!==typeof t)return[t].concat(r)
var a=t
i(t)&&!i(r)&&(a=s(t,o))
if(i(t)&&i(r)){r.forEach((function(r,i){if(n.call(t,i)){var a=t[i]
a&&"object"===typeof a&&r&&"object"===typeof r?t[i]=e(a,r,o):t.push(r)}else t[i]=r}))
return t}return Object.keys(r).reduce((function(t,i){var a=r[i]
n.call(t,i)?t[i]=e(t[i],a,o):t[i]=a
return t}),a)}
var d=function(e,t){return Object.keys(t).reduce((function(e,r){e[r]=t[r]
return e}),e)}
var c=function(e,t,r){var n=e.replace(/\+/g," ")
if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(n)}catch(e){return n}}
var _=function(e,t,r){if(0===e.length)return e
var n=e
"symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e))
if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
var i=""
for(var a=0;a<n.length;++a){var s=n.charCodeAt(a)
if(45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122){i+=n.charAt(a)
continue}if(s<128){i+=o[s]
continue}if(s<2048){i+=o[192|s>>6]+o[128|63&s]
continue}if(s<55296||s>=57344){i+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]
continue}a+=1
s=65536+((1023&s)<<10|1023&n.charCodeAt(a))
i+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s]}return i}
var u=function(e){var t=[{obj:{o:e},prop:"o"}]
var r=[]
for(var n=0;n<t.length;++n){var i=t[n]
var o=i.obj[i.prop]
var s=Object.keys(o)
for(var l=0;l<s.length;++l){var d=s[l]
var c=o[d]
if("object"===typeof c&&null!==c&&-1===r.indexOf(c)){t.push({obj:o,prop:d})
r.push(c)}}}a(t)
return e}
var p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}
var f=function(e){if(!e||"object"!==typeof e)return false
return!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}
var h=function(e,t){return[].concat(e,t)}
e.exports={arrayToObject:s,assign:d,combine:h,compact:u,decode:c,encode:_,isBuffer:f,isRegExp:p,merge:l}},"97gy":function(e,t,r){"use strict"
r.d(t,"a",(function(){return p}))
var n=r("VTBJ")
var i=r("1OyB")
var o=r("vuIU")
var a=r("md7G")
var s=r("foSv")
var l=r("Ji7U")
var d=r("q1tI")
var c=r.n(d)
var _=r("hPGw")
var u=c.a.createElement("path",{d:"M1743.858 267.012L710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var p=function(e){Object(l["a"])(t,e)
function t(){Object(i["a"])(this,t)
return Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}Object(o["a"])(t,[{key:"render",value:function(){return c.a.createElement(_["a"],Object.assign({},this.props,{name:"IconCheckMark",viewBox:"0 0 1920 1920"}),u)}}])
t.displayName="IconCheckMarkSolid"
return t}(d["Component"])
p.glyphName="check-mark"
p.variant="Solid"
p.propTypes=Object(n["a"])({},_["a"].propTypes)},B1vq:function(e,t,r){"use strict"
var n=r("ouhR")
var i=r.n(n)
r("s/PJ")
i.a.fn.scrollToVisible=function(e){const t={}
const r=i()(e)
if(0===r.length)return
let n=r.offset(),o=r.outerWidth(),a=r.outerHeight(),s=n.top,l=s+a,d=n.left,c=d+o,_="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),u=this.scrollLeft(),p=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let e=i()("body").offset()
this.each((function(){try{e=i()(this).offset()
return false}catch(e){}}))
s-=e.top
l-=e.top
d-=e.left
c-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=i()(window).height()
i()("#wizard_box:visible").length>0&&(p-=i()("#wizard_box:visible").height())
f=i()(window).width()
s-=_
d-=u
l-=_
c-=u}s<0||p<a&&l>p?t.scrollTop=s+_:l>p&&(t.scrollTop=l+_-p+20)
d<0?t.scrollLeft=d+u:c>f&&(t.scrollLeft=c+u-f+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},H4Sz:function(e,t,r){"use strict"
var n=r("An8g")
var i=r("ouhR")
var o=r.n(i)
var a=r("q1tI")
var s=r.n(a)
r("17x9")
var l=r("i8i4")
var d=r.n(l)
var c=r("P4VU")
r("MWZS")
var _=r("mykf")
var u=r("etQE")
var p=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var f=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))
var h=Object(n["a"])("div",{})
class g extends s.a.Component{constructor(e){super(e)
this.getMaxIFrameWidth=()=>{if(this.state.tools){let e=0
for(let t=0;t<this.state.tools.length;t++){const r=this.state.tools[t]
const n=this["tool_iframe_".concat(r.definition_id)].offsetWidth
n>e&&(e=n)}return e}return null}
this.handleAlertFocus=e=>{const t={iframeStyle:{border:"2px solid #008EE2",width:"".concat(this.getMaxIFrameWidth()-4,"px")}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.handleAlertBlur=e=>{const t={iframeStyle:{border:"none",width:"100%"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.state={tools:[],beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",iframeStyle:{}}}componentWillMount(){this.getTools()}componentDidMount(){if(this.state.tools)for(let e=0;e<this.state.tools.length;e++){const t=this.state.tools[e]
this["tool_iframe_".concat(t.definition_id)].setAttribute("allow",Object(_["a"])())}}async getTools(){const e=encodeURI("".concat(this.getDefinitionsUrl(),"?placements[]=").concat(this.props.placement))
try{const t=Object(u["e"])(e)||fetch(e,u["d"])
const r=await Object(u["b"])(t)
r.forEach(e=>e.launch=this.getLaunch(e))
this.setState({tools:r})}catch(e){o.a.flashError(c["a"].t("Error retrieving assignment external tools"))}}getDefinitionsUrl(){return"/api/v1/courses/".concat(this.props.courseId,"/lti_apps/launch_definitions")}getLaunch(e){const t=e.placements[this.props.placement].url
let r="?borderless=true&url=".concat(encodeURIComponent(t),"&placement=").concat(this.props.placement)
this.props.assignmentId&&(r+="&assignment_id=".concat(this.props.assignmentId))
const n="/courses/".concat(this.props.courseId,"/external_tools/retrieve")
return n+r}renderTool(e){const t={}
o.a.extend(t,this.state.iframeStyle)
if(e.placements[this.props.placement].launch_height){t.height=e.placements[this.props.placement].launch_height
t.minHeight="unset"}e.placements[this.props.placement].launch_width&&(t.width=e.placements[this.props.placement].launch_width)
return s.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:c["a"].t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_".concat(e.definition_id)]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert ".concat(this.state.beforeExternalContentAlertClass)
const t="after_external_content_info_alert ".concat(this.state.afterExternalContentAlertClass)
return Object(n["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,p,c["a"].t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,f,c["a"].t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return h
return Object(n["a"])("div",{},void 0,Object(n["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}g.defaultProps={assignmentId:void 0}
const v=function(e,t,r,i){const o=Object(n["a"])(g,{placement:t,courseId:r,assignmentId:i})
d.a.render(o,e)}
const m={configTools:g,attach:v}
t["a"]=m},KuFa:function(e,t,r){"use strict"
r.r(t)
var n=r("An8g")
var i=r("u7Gu")
var o=r("EcmN")
var a=r("ouhR")
var s=r.n(a)
r("q1tI")
var l=r("i8i4")
var d=r.n(l)
var c=r("x1Tw")
var _=r("Qyje")
var u=r.n(_)
var p=r("Et5h")
var f=r("7FZx")
var h=r("FIFq")
var g=r.n(h)
var v=function(e,t){return function(){return e.apply(t,arguments)}},m=function(e,t){for(var r in t)b.call(t,r)&&(e[r]=t[r])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},b={}.hasOwnProperty
var y=function(e){m(t,e)
function t(){this.toggleSpeedgraderLink=v(this.toggleSpeedgraderLink,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.model.on("change:published",this.toggleSpeedgraderLink)}
t.prototype.toggleSpeedgraderLink=function(){return this.model.get("published")?this.$el.removeClass("hidden"):this.$el.addClass("hidden")}
return t}(g.a.View)
var x=r("goGJ")
var k=r("oMlh")
var w=r("GXQz")
r("Z+Ib")
var j=r("y8OA")
var E=r("H4Sz")
var O=r("mKSb")
var N=r("i+HM")
var S=r("ppA4")
var C=r("6V2X")
const A=new j["default"]
A.init({itemType:"assignment",page:"show"})
function T(e){if("0"!==e){c["a"].put("/api/v1/courses/".concat(ENV.COURSE_ID,"/gradebook_settings"),u.a.stringify({gradebook_settings:{filter_rows_by:{student_group_id:e}}}))
ENV.selected_student_group_id=e
I()
D()}}function D(){const e=ENV.SETTINGS.filter_speed_grader_by_student_group&&!ENV.selected_student_group_id
const t=document.getElementById("speed_grader_link_mount_point")
t&&d.a.render(Object(n["a"])(N["a"],{disabled:e,href:ENV.speed_grader_url,disabledTip:o["a"].t("Must select a student group first")}),t)}function I(){const e=document.getElementById("student_group_filter_mount_point")
e&&d.a.render(Object(n["a"])(O["a"],{categories:ENV.group_categories,label:o["a"].t("Select Group to Grade"),onChange:T,value:ENV.selected_student_group_id}),e)}const z=Promise.all([r.e(2),r.e(51),r.e(591)]).then(r.bind(null,"/j35"))
s()(()=>{const e=s()("#assignment_publish_button")
if(e.length>0){const t=new p["a"]({id:e.attr("data-id"),unpublishable:!e.hasClass("disabled"),published:e.hasClass("published")})
t.doNotParse()
new y({model:t,el:"#assignment-speedgrader-link"}).render()
const r=new f["a"]({model:t,el:e})
r.render()
r.on("publish",()=>s()("#moderated_grading_button").show())
r.on("unpublish",()=>s()("#moderated_grading_button").hide())}z.then(()=>{s()("#sequence_footer").moduleSequenceFooter({courseID:ENV.COURSE_ID,assetType:"Assignment",assetID:ENV.ASSIGNMENT_ID,location:window.location})})
return Object(x["a"])()})
s()(()=>s()("#content").on("click","#mark-as-done-checkbox",(function(){return k["a"].toggle(this)})))
function F(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
e&&e.preventDefault()
d.a.render(Object(n["a"])(S["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentShare:{content_type:"assignment",content_id:ENV.ASSIGNMENT_ID},onDismiss:()=>{F(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}function B(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
e&&e.preventDefault()
d.a.render(Object(n["a"])(C["a"],{open:t,sourceCourseId:ENV.COURSE_ID,contentSelection:{assignments:[ENV.ASSIGNMENT_ID]},onDismiss:()=>{B(null,false)
s()(".al-trigger").focus()}}),document.getElementById("direct-share-mount-point"))}s()(()=>{s()(".direct-share-send-to-menu-item").click(F)
s()(".direct-share-copy-to-menu-item").click(B)})
s()(()=>{if(ENV.speed_grader_url){ENV.SETTINGS.filter_speed_grader_by_student_group&&I()
D()}})
s()(()=>{s()(".upload_submissions_link").click(e=>{e.preventDefault()
s()("#re_upload_submissions_form").slideToggle()})
s()(".download_submissions_link").click((function(e){e.preventDefault()
i["a"].downloadSubmissions(s()(this).attr("href"))
s()(".upload_submissions_link").slideDown()}))
s()("#re_upload_submissions_form").submit((function(e){const t=s()(this).getFormData()
if(t.submissions_zip){if(!t.submissions_zip.match(/\.zip$/)){e.preventDefault()
e.stopPropagation()
s()(this).formErrors({submissions_zip:o["a"].t("Please upload files as a .zip")})}}else{e.preventDefault()
e.stopPropagation()}}))
s()("#edit_assignment_form").bind("assignment_updated",(e,t)=>{t.assignment&&t.assignment.peer_reviews?s()(".assignment_peer_reviews_link").slideDown():s()(".assignment_peer_reviews_link").slideUp()})})
s()(()=>{const e=document.getElementById("crs-graphs")
const t=document.getElementById("not_right_side")
w["default"].init(e,t)
document.getElementById("assignment_external_tools")&&E["a"].attach(document.getElementById("assignment_external_tools"),"assignment_view",parseInt(ENV.COURSE_ID,10),parseInt(ENV.ASSIGNMENT_ID,10))})},P4VU:function(e,t,r){"use strict"
var n=r("pQTu")
var i=r("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"error_retrieving_assignment_external_tools_9102d343":"خطأ أثناء استعادة الأدوات الخارجية للمهمة","error_retrieving_similarity_detection_tools_d6d4f9e9":"خطأ أثناء استعادة أدوات اكتشاف التشابه","external_tool_tool_id_6028b3b1":"أداة خارجية %{tool_id}","the_following_content_is_partner_provided_ed1da756":"المحتوى التالي تم إدخاله بواسطة شريك","the_preceding_content_is_partner_provided_d753928c":"المحتوى السابق تم إدخاله بواسطة شريك"},"cy":{"error_retrieving_assignment_external_tools_9102d343":"Gwall wrth adfer adnoddau allanol aseiniad","error_retrieving_similarity_detection_tools_d6d4f9e9":"Gwall wrth adfer adnoddau adnabod tebygrwydd","external_tool_tool_id_6028b3b1":"Adnodd Allanol %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Mae’r cynnwys canlynol yn cael ei ddarparu gan bartner","the_preceding_content_is_partner_provided_d753928c":"Mae’r cynnwys blaenorol yn cael ei ddarparu gan bartner"},"da":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"da-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"de":{"error_retrieving_assignment_external_tools_9102d343":"Fehler beim Abrufen aufgabenexterner-Tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fehler beim Abrufen der Similarity-Detection-Tools","external_tool_tool_id_6028b3b1":"Externes Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner."},"en-AU":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-AU-x-unimelb":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-CA":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-lbs":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving task external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-ukhe":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"es":{"error_retrieving_assignment_external_tools_9102d343":"Error al recuperar las herramientas externas de la tarea","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error al consultar las herramientas de detección de similitud","external_tool_tool_id_6028b3b1":"Herramienta Externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"El siguiente contenido está proporcionado por un socio","the_preceding_content_is_partner_provided_d753928c":"El contenido anterior está proporcionado por un socio"},"fa":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"خطا در بازیابی ابزارهای تشخیص شباهت","the_following_content_is_partner_provided_ed1da756":"محتوای زیر توسط شریک فراهم شده است","the_preceding_content_is_partner_provided_d753928c":"محتوای پیشین توسط شریک ارائه شده است"},"fi":{"error_retrieving_assignment_external_tools_9102d343":"Virhe noudettaessa tehtävän ulkoisia työkaluja","error_retrieving_similarity_detection_tools_d6d4f9e9":"Virhe noudettaessa samanlaisuuden havaintotyökaluja","external_tool_tool_id_6028b3b1":"Ulkoinen työkalu %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Seuraava sisältö on kumppanin toimittajaa","the_preceding_content_is_partner_provided_d753928c":"edeltävä sisältö on kumppanin toimittamaa"},"fr":{"error_retrieving_assignment_external_tools_9102d343":"Outils externes de récupération d\'erreur des travaux","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similitude.","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par un partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu qui précède était fourni par un partenaire"},"fr-CA":{"error_retrieving_assignment_external_tools_9102d343":"Erreur lors de la récupération des outils externes des tâches","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similarité","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par le partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu précédent est fourni par le partenaire"},"he":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"תקלה בהעלאת כלי זיהוי העתקות"},"ht":{"error_retrieving_assignment_external_tools_9102d343":"Erè pandan rekiperasyon zouti ekstèn sesyon an","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erè pandan rekiperasyon zouti deteksyon resanblans yo","external_tool_tool_id_6028b3b1":"Zouti Ekstèn %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Kontni annapre a se yon asosye ki bay li","the_preceding_content_is_partner_provided_d753928c":"Kontni anvan an se yon asosye ki bay li"},"is":{"error_retrieving_assignment_external_tools_9102d343":"Villa við að ná í ytri tól verkefnis","error_retrieving_similarity_detection_tools_d6d4f9e9":"Villa við endurheimt líkindagreiningartóla","external_tool_tool_id_6028b3b1":"Ytra tól %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Eftirfarandi efni er gefið upp af samstarfsaðila","the_preceding_content_is_partner_provided_d753928c":"Framangreint efni er gefið upp af samstarfsaðila"},"it":{"error_retrieving_assignment_external_tools_9102d343":"Errore recupero strumenti esterni compito","error_retrieving_similarity_detection_tools_d6d4f9e9":"Errore durante il recupero degli strumenti di rilevamento similarità","external_tool_tool_id_6028b3b1":"Strumento esterno %{tool_id}","the_following_content_is_partner_provided_ed1da756":"I contenuti seguenti sono forniti dal partner","the_preceding_content_is_partner_provided_d753928c":"I contenuti precedenti sono forniti dal partner"},"ja":{"error_retrieving_assignment_external_tools_9102d343":"課題外部ツールの取得中にエラーが発生しました","error_retrieving_similarity_detection_tools_d6d4f9e9":"類似性検知ツールの取得中にエラーが発生しました","external_tool_tool_id_6028b3b1":"外部ツール%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下のコンテンツはパートナーが提供しています","the_preceding_content_is_partner_provided_d753928c":"上記のコンテンツはパートナーが提供しています"},"mi":{"error_retrieving_assignment_external_tools_9102d343":"Hapa ki te tiki i ngā whakataunga taputapu o waho","error_retrieving_similarity_detection_tools_d6d4f9e9":"I hapa i te wā e tiki ana taputapu rapunga ritenga.","external_tool_tool_id_6028b3b1":"Taputapu o waho %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Ko ngā kōrero e whai ake nei he hoa mahi","the_preceding_content_is_partner_provided_d753928c":"Ko te tuhinga o mua he hoa mahi"},"nb":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nb-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nl":{"error_retrieving_assignment_external_tools_9102d343":"Fout bij het ophalen van externe tools voor opdrachten","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fout bij het ophalen van tools voor vergelijkbaarheidsdetectie","external_tool_tool_id_6028b3b1":"Externe tool %{tool_id}","the_following_content_is_partner_provided_ed1da756":"De volgende inhoud is door een partner geleverd","the_preceding_content_is_partner_provided_d753928c":"De voorgaande inhoud is door een partner geleverd"},"nn":{"error_retrieving_assignment_external_tools_9102d343":"Det oppstod ein feil under henting av oppgåve frå eksternt verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Det oppstod ein feil ved framhenting av verktøy for likskapskontroll","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Følgande innhald er lagt til av partnar","the_preceding_content_is_partner_provided_d753928c":"Det føregåande innhaldet er lagt til av partnar"},"pl":{"error_retrieving_assignment_external_tools_9102d343":"Błąd pobierania zewnętrznych narzędzi do zadań","error_retrieving_similarity_detection_tools_d6d4f9e9":"Błąd pobierania narzędzi do wykrywania podobieństw","external_tool_tool_id_6028b3b1":"Narzędzie zewnętrzne %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Następującą zawartość dostarcza partner","the_preceding_content_is_partner_provided_d753928c":"Poprzednią zawartość dostarcza partner"},"pt":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas de atribuição","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta Externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O parceiro fornece o seguinte conteúdo","the_preceding_content_is_partner_provided_d753928c":"O conteúdo anterior é parceiro fornecido"},"pt-BR":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas da tarefa","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar as ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta externa %{tool_id}","the_following_content_is_partner_provided_ed1da756":"O seguinte conteúdo é fornecido por parceiro","the_preceding_content_is_partner_provided_d753928c":"O conteúdo precedente é fornecido por parceiro"},"ru":{"error_retrieving_assignment_external_tools_9102d343":"Ошибка при получении внешних инструментов задания","error_retrieving_similarity_detection_tools_d6d4f9e9":"Ошибка при считывании инструментов обнаружения сходства","external_tool_tool_id_6028b3b1":"Внешний инструмент %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Последующий контент предоставляется партнером","the_preceding_content_is_partner_provided_d753928c":"Предыдущий контент предоставляется партнером"},"sl":{"error_retrieving_assignment_external_tools_9102d343":"Napaka pri pridobivanju zunanjih orodij za nalogo","error_retrieving_similarity_detection_tools_d6d4f9e9":"Napaka pri pridobivanju orodij za zaznavanje ujemanja","external_tool_tool_id_6028b3b1":"Zunanje orodje %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Naslednjo vsebino zagotavljajo partnerji.","the_preceding_content_is_partner_provided_d753928c":"Predhodno vsebino zagotavljajo partnerji."},"sv":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av verktyg för likhetsidentifiering","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Följande innehåll har tillhandahållits av partner","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet har tillhandahållits av partner"},"sv-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av verktyg för likhetsidentifiering","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","the_following_content_is_partner_provided_ed1da756":"Följande innehåll har tillhandahållits av partner","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet har tillhandahållits av partner"},"uk":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Помилка отримання параметрів виявлення схожості","the_following_content_is_partner_provided_ed1da756":"Наступний контент наданий партнером","the_preceding_content_is_partner_provided_d753928c":"Попередній контент наданий партнером"},"zh-Hans":{"error_retrieving_assignment_external_tools_9102d343":"提取作业外部工具时出错","error_retrieving_similarity_detection_tools_d6d4f9e9":"检索相似性检测工具时发生错误","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下内容由合作伙伴提供","the_preceding_content_is_partner_provided_d753928c":"以上内容由合作伙伴提供"},"zh-Hant":{"error_retrieving_assignment_external_tools_9102d343":"檢索作業外部工具時出錯","error_retrieving_similarity_detection_tools_d6d4f9e9":"檢索相似性檢測工具錯誤","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","the_following_content_is_partner_provided_ed1da756":"以下內容由合作夥伴提供","the_preceding_content_is_partner_provided_d753928c":"上述內容由合作夥伴提供"}}'))
r("jQeR")
r("0sPK")
t["a"]=n["default"].scoped("moderated_grading")},QSc6:function(e,t,r){"use strict"
var n=r("0jNN")
var i=r("sxOR")
var o=Object.prototype.hasOwnProperty
var a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}}
var s=Array.isArray
var l=Array.prototype.push
var d=function(e,t){l.apply(e,s(t)?t:[t])}
var c=Date.prototype.toISOString
var _=i["default"]
var u={addQueryPrefix:false,allowDots:false,charset:"utf-8",charsetSentinel:false,delimiter:"&",encode:true,encoder:n.encode,encodeValuesOnly:false,format:_,formatter:i.formatters[_],indices:false,serializeDate:function(e){return c.call(e)},skipNulls:false,strictNullHandling:false}
var p=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e}
var f=function e(t,r,i,o,a,l,c,_,f,h,g,v,m){var b=t
"function"===typeof c?b=c(r,b):b instanceof Date?b=h(b):"comma"===i&&s(b)&&(b=b.join(","))
if(null===b){if(o)return l&&!v?l(r,u.encoder,m,"key"):r
b=""}if(p(b)||n.isBuffer(b)){if(l){var y=v?r:l(r,u.encoder,m,"key")
return[g(y)+"="+g(l(b,u.encoder,m,"value"))]}return[g(r)+"="+g(String(b))]}var x=[]
if("undefined"===typeof b)return x
var k
if(s(c))k=c
else{var w=Object.keys(b)
k=_?w.sort(_):w}for(var j=0;j<k.length;++j){var E=k[j]
if(a&&null===b[E])continue
s(b)?d(x,e(b[E],"function"===typeof i?i(r,E):r,i,o,a,l,c,_,f,h,g,v,m)):d(x,e(b[E],r+(f?"."+E:"["+E+"]"),i,o,a,l,c,_,f,h,g,v,m))}return x}
var h=function(e){if(!e)return u
if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||u.charset
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var r=i["default"]
if("undefined"!==typeof e.format){if(!o.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.")
r=e.format}var n=i.formatters[r]
var a=u.filter;("function"===typeof e.filter||s(e.filter))&&(a=e.filter)
return{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:u.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?u.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:u.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?u.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:u.encode,encoder:"function"===typeof e.encoder?e.encoder:u.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:u.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:u.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:u.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:u.strictNullHandling}}
e.exports=function(e,t){var r=e
var n=h(t)
var i
var o
if("function"===typeof n.filter){o=n.filter
r=o("",r)}else if(s(n.filter)){o=n.filter
i=o}var l=[]
if("object"!==typeof r||null===r)return""
var c
c=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var _=a[c]
i||(i=Object.keys(r))
n.sort&&i.sort(n.sort)
for(var u=0;u<i.length;++u){var p=i[u]
if(n.skipNulls&&null===r[p])continue
d(l,f(r[p],p,_,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var g=l.join(n.delimiter)
var v=true===n.addQueryPrefix?"?":""
n.charsetSentinel&&("iso-8859-1"===n.charset?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&")
return g.length>0?v+g:""}},Qyje:function(e,t,r){"use strict"
var n=r("QSc6")
var i=r("nmq7")
var o=r("sxOR")
e.exports={formats:o,parse:i,stringify:n}},eAd9:function(e,t,r){(function(t){var r=false
var n
var i
function o(){if("undefined"!==typeof n)return n
var e=document.documentElement
var t=document.createElement("div")
t.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(t)
n=t.offsetWidth-t.clientWidth
e.removeChild(t)
return n}function a(){return document.documentElement.scrollHeight>window.innerHeight}function s(e){if("undefined"===typeof document||r)return
var t=document.documentElement
i=window.pageYOffset
a()?t.style.width="calc(100% - "+o()+"px)":t.style.width="100%"
t.style.position="fixed"
t.style.top=-i+"px"
t.style.overflow="hidden"
r=true}function l(){if("undefined"===typeof document||!r)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,i)
r=false}function d(){if(r){l()
return}s()}var c={on:s,off:l,toggle:d}
"undefined"!==typeof e.exports?e.exports=c:t.noScroll=c})(this)},goGJ:function(e,t,r){"use strict"
r.d(t,"a",(function(){return o}))
var n=r("ouhR")
var i=r.n(n)
r("rEd+")
function o(){return i()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=i()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return i()(t).html()}catch(e){}}})}},"i+HM":function(e,t,r){"use strict"
var n=r("An8g")
var i=r("VTBJ")
var o=r("q1tI")
var a=r.n(o)
r("17x9")
var s=r("5Shj")
var l=r("EcmN")
function d(e){return a.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function c(e){const t=e.className?"icon-speed-grader ".concat(e.className):"icon-speed-grader"
let r={className:t,href:e.href}
e.disabled&&(r=Object(i["a"])({},r,{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(n["a"])(s["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,d(r)):d(r)}t["a"]=c},mKSb:function(e,t,r){"use strict"
var n=r("An8g")
r("17x9")
var i=r("sTNg")
var o=r("EcmN")
r("q1tI")
function a(e){return Object(n["a"])("option",{value:e.id},e.id,e.name)}function s(e){return Object(n["a"])("optgroup",{label:e.name},"group_category_".concat(e.id),e.groups.map(e=>a(e)))}function l(e){return Object(n["a"])(i["FormField"],{id:"student-group-filter",label:e.label},void 0,Object(n["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(n["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",o["a"].t("Select One")),e.categories.map(e=>s(e))))}t["a"]=l},mykf:function(e,t,r){"use strict"
const n=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=n},nmq7:function(e,t,r){"use strict"
var n=r("0jNN")
var i=Object.prototype.hasOwnProperty
var o=Array.isArray
var a={allowDots:false,allowPrototypes:false,arrayLimit:20,charset:"utf-8",charsetSentinel:false,comma:false,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:false,interpretNumericEntities:false,parameterLimit:1e3,parseArrays:true,plainObjects:false,strictNullHandling:false}
var s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))}
var l="utf8=%26%2310003%3B"
var d="utf8=%E2%9C%93"
var c=function(e,t){var r={}
var c=t.ignoreQueryPrefix?e.replace(/^\?/,""):e
var _=Infinity===t.parameterLimit?void 0:t.parameterLimit
var u=c.split(t.delimiter,_)
var p=-1
var f
var h=t.charset
if(t.charsetSentinel)for(f=0;f<u.length;++f)if(0===u[f].indexOf("utf8=")){u[f]===d?h="utf-8":u[f]===l&&(h="iso-8859-1")
p=f
f=u.length}for(f=0;f<u.length;++f){if(f===p)continue
var g=u[f]
var v=g.indexOf("]=")
var m=-1===v?g.indexOf("="):v+1
var b,y
if(-1===m){b=t.decoder(g,a.decoder,h,"key")
y=t.strictNullHandling?null:""}else{b=t.decoder(g.slice(0,m),a.decoder,h,"key")
y=t.decoder(g.slice(m+1),a.decoder,h,"value")}y&&t.interpretNumericEntities&&"iso-8859-1"===h&&(y=s(y))
y&&"string"===typeof y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(","))
g.indexOf("[]=")>-1&&(y=o(y)?[y]:y)
i.call(r,b)?r[b]=n.combine(r[b],y):r[b]=y}return r}
var _=function(e,t,r){var n=t
for(var i=e.length-1;i>=0;--i){var o
var a=e[i]
if("[]"===a&&r.parseArrays)o=[].concat(n)
else{o=r.plainObjects?Object.create(null):{}
var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a
var l=parseInt(s,10)
if(r.parseArrays||""!==s)if(!isNaN(l)&&a!==s&&String(l)===s&&l>=0&&r.parseArrays&&l<=r.arrayLimit){o=[]
o[l]=n}else o[s]=n
else o={0:n}}n=o}return n}
var u=function(e,t,r){if(!e)return
var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e
var o=/(\[[^[\]]*])/
var a=/(\[[^[\]]*])/g
var s=r.depth>0&&o.exec(n)
var l=s?n.slice(0,s.index):n
var d=[]
if(l){if(!r.plainObjects&&i.call(Object.prototype,l)&&!r.allowPrototypes)return
d.push(l)}var c=0
while(r.depth>0&&null!==(s=a.exec(n))&&c<r.depth){c+=1
if(!r.plainObjects&&i.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return
d.push(s[1])}s&&d.push("["+n.slice(s.index)+"]")
return _(d,t,r)}
var p=function(e){if(!e)return a
if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined")
var t="undefined"===typeof e.charset?a.charset:e.charset
return{allowDots:"undefined"===typeof e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:a.comma,decoder:"function"===typeof e.decoder?e.decoder:a.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"===typeof e.depth||false===e.depth?+e.depth:a.depth,ignoreQueryPrefix:true===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:false!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}
e.exports=function(e,t){var r=p(t)
if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{}
var i="string"===typeof e?c(e,r):e
var o=r.plainObjects?Object.create(null):{}
var a=Object.keys(i)
for(var s=0;s<a.length;++s){var l=a[s]
var d=u(l,i[l],r)
o=n.merge(o,d,r)}return n.compact(o)}},oMlh:function(e,t,r){"use strict"
var n=r("ouhR")
var i=r.n(n)
r("jYyc")
t["a"]={toggle(e){const t=i()(e).data.bind(i()(e))
return i.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
i()(e).toggleClass("btn-success")
i()("i",e).toggleClass("icon-empty icon-complete")
i()(".mark-done-labels span",e).toggleClass("visible")})}}},p6Wi:function(e,t,r){"use strict"
var n=r("pQTu")
var i=r("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
r("jQeR")
r("0sPK")
var o=n["default"].scoped("instructure_misc_plugins")
var a=r("ouhR")
var s=r.n(a)
var l=r("5Ky4")
var d=r("JD5e")
r("jYyc")
r("YGE8")
r("B1vq")
r("s/PJ")
s.a.fn.setOptions=function(e,t){let r=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
r+='<option value="'+t+'">'+t+"</option>"})
return this.html(s.a.raw(r))}
s.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
s.a.fn.scrollbarWidth=function(){const e=s()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const r=t.innerWidth()
e.css("overflow-y","scroll")
const n=t.innerWidth()
e.remove()
return r-n}
s.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
s.a.fn.undim=function(e){return this.animate({opacity:1},e)}
s.a.fn.confirmDelete=function(e){e=s.a.extend({},s.a.fn.confirmDelete.defaults,e)
const t=this
let r=null
let n=true
e.noMessage=e.noMessage||e.no_message
const i=function(){if(!n){e.cancelled&&s.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const n=e.prepareData?e.prepareData.call(t,r):{}
n.authenticity_token=Object(d["a"])()
s.a.ajaxJSON(e.url,"DELETE",n,r=>{e.success.call(t,r)},(r,n,i,o)=>{e.error&&s.a.isFunction(e.error)?e.error.call(t,r,n,i,o):s.a.ajaxJSON.unhandledXHRs.push(n)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!s.a.skipConfirmations){if(e.dialog){n=false
const t="object"===typeof e.dialog?e.dialog:{}
const a=e.url.includes("assignments")?"btn-danger":"btn-primary"
r=s()(e.message).dialog(s.a.extend({},{modal:true,close:i,buttons:[{text:o.t("#buttons.cancel","Cancel"),click(){s()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:a,click(){n=true
s()(this).dialog("close")}}]},t))
return}n=confirm(e.message)}i()}
s.a.fn.confirmDelete.defaults={get message(){return o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
s.a.fn.fragmentChange=function(e){if(e&&true!==e){const r=(window.location.search||"").replace(/^\?/,"").split("&")
let n=null
for(var t=0;t<r.length;t++){const e=r[t]
e&&0===e.indexOf("hash=")&&(n="#"+e.substring(5))}this.bind("document_fragment_change",e)
const i=this
let o=false
for(t=0;t<s.a._checkFragments.fragmentList.length;t++){const e=s.a._checkFragments.fragmentList[t]
e.doc[0]==i[0]&&(o=true)}o||s.a._checkFragments.fragmentList.push({doc:i,fragment:""})
s()(window).bind("hashchange",s.a._checkFragments)
setTimeout(()=>{n&&n.length>0?i.triggerHandler("document_fragment_change",n):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
s.a._checkFragments=function(){const e=s.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const r=e[t]
const n=r.doc
if(n[0].location.hash!=r.fragment){n.triggerHandler("document_fragment_change",n[0].location.hash)
r.fragment=n[0].location.hash
s.a._checkFragments.fragmentList[t]=r}}}
s.a._checkFragments.fragmentList=[]
s.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
s.a.fn.showIf=function(e){if(s.a.isFunction(e))return this.each((function(t){s()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
s.a.fn.disableIf=function(e){s.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
s.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}s()(".indicator_box").remove()
let r=this.offset()
e&&e.offset&&(r=e.offset)
const n=this.width()
const i=this.height()
const o=(e.container||this).zIndex()
t=s()(document.createElement("div"))
t.css({width:n+6,height:i+6,top:r.top-3,left:r.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){s()(this).stop().fadeOut("fast",(function(){s()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
s()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){s()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){s()(this).remove()}))
e&&e.scroll&&s()("html,body").scrollToVisible(t)}
s.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
s.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
s.a.fn.fillWindowWithMe=function(e){const t=s.a.extend({minHeight:400},e),r=s()(this),n=s()("#wrapper"),i=s()("#main"),o=s()("#not_right_side"),a=s()(window),l=s()(this).add(t.alsoResize)
function d(){l.height(0)
const e=a.height()-(n.offset().top+n.outerHeight())+(i.height()-o.height()),d=Math.max(400,e)
l.height(d)
s.a.isFunction(t.onResize)&&t.onResize.call(r,d)}d()
a.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",d)
return this}
s.a.fn.autoGrowInput=function(e){e=s.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||s()(this).width(),r="",n=s()(this),i=s()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(()=>{if(r===(r=n.val()))return
i.text(r)
const o=i.width(),a=o+e.comfortZone>=t?o+e.comfortZone:t,s=n.width(),l=a<s&&a>=t||a>t&&a<e.maxWidth
l&&n.width(a)})}
i.insertAfter(n)
s()(this).bind("keyup keydown blur update change",o)}))
return this}
s.a},sxOR:function(e,t,r){"use strict"
var n=String.prototype.replace
var i=/%20/g
var o=r("0jNN")
var a={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=o.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return String(e)}}},a)},ysUD:function(e,t,r){"use strict"
var n=r("VTBJ")
var i=r("rePB")
var o=r("1OyB")
var a=r("vuIU")
var s=r("md7G")
var l=r("foSv")
var d=r("Ji7U")
var c=r("q1tI")
var _=r.n(c)
var u=r("17x9")
var p=r.n(u)
var f=r("TSYQ")
var h=r.n(f)
var g=r("eAd9")
var v=r.n(g)
var m=r("J2CL")
var b=r("sQ3t")
var y=r("jtGx")
function x(e){var t=e.colors,r=e.borders,n=e.stacking
return{zIndex:n.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:t.borderBrand,borderRadius:r.radiusMedium,borderWidth:r.widthSmall}}x.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
r.d(t,"a",(function(){return N}))
var k,w,j,E
var O={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var N=(k=Object(m["themeable"])(x,O),k(w=(E=j=function(e){Object(d["a"])(t,e)
function t(){var e
var r
Object(o["a"])(this,t)
for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a]
r=Object(s["a"])(this,(e=Object(l["a"])(t)).call.apply(e,[this].concat(i)))
r.handleElementRef=function(e){r.props.elementRef(e)}
r.contentRef=function(e){r._content=e}
return r}Object(a["a"])(t,[{key:"componentDidMount",value:function(){this.props.fullscreen&&v.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&v.a.off()}},{key:"render",value:function(){var e
var r=Object(b["a"])(this.props.children,{ref:this.contentRef})
var o=h()((e={},Object(i["a"])(e,O.root,true),Object(i["a"])(e,O[this.props.placement],true),Object(i["a"])(e,O.fullscreen,this.props.fullscreen),e))
var a=Object(n["a"])({},Object(y["a"])(this.props,t.propTypes),{className:o,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){a.onClick=this.props.onClick
a.tabIndex=-1}return _.a.createElement("span",a,r)}}])
t.displayName="Mask"
return t}(c["Component"]),j.propTypes={onDismiss:p.a.func,placement:p.a.oneOf(["top","center","bottom","stretch"]),fullscreen:p.a.bool,children:p.a.node,onClick:p.a.func,elementRef:p.a.func},j.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},E))||w)}}])

//# sourceMappingURL=assignment_show-c-761aeb058f.js.map