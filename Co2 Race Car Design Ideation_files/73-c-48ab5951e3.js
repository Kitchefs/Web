(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[73,589],{"0crz":function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
var l=a("pQTu")
var r=a("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
a("jQeR")
a("0sPK")
var o=l["default"].scoped("lib.text_helper")
var s=a("5Ky4")
var c,d,m
c="LINK-PLACEHOLDER"
d=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=m={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(s["a"])(o.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+i.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,a,n,i,l,r,o,_
i=[]
l=[]
e=e.replace(d,(function(e,t){var a
l.push(e===c?c:(a=e,"http://"===a.slice(0,7)||"https://"===a.slice(0,8)||(a="http://"+a),i.push(a),"<a href='"+Object(s["a"])(a)+"'>"+Object(s["a"])(e)+"</a>"))
return c}))
e=Object(s["a"])(e)
e=e.replace(new RegExp(c,"g"),(function(e,t){return l.shift()}))
e=e.replace(/\n/g,"<br />\n")
r=[]
o=[]
_=e.split("\n")
for(t=0,a=_.length;t<a;t++){n=_[t]
if(n.match(/^(&gt;|>)/))o.push(n)
else{o.length&&r.push(m.quoteClump(o))
o=[]
r.push(n)}}o.length&&r.push(m.quoteClump(o))
return r.join("\n")},delimit:function(e){var t,a,n,i,l
if(isNaN(e))return String(e)
l=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
a=Math.floor(t)
i=t===a?"":String(t).replace(/^\d+\./,".")
while(a>=1e3){n=String(a).replace(/\d+(\d\d\d)$/,",$1")
a=Math.floor(a/1e3)
i=n+i}return l+String(a)+i},truncateText:function(e,t){var a,n,i,l,r,s
null==t&&(t={})
n=null!=(l=t.max)?l:30
a=o.t("ellipsis","...")
s=o.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,s).trim()
if(!e||e.length<=n)return e
r=0
while(true){i=e.indexOf(s,r+1)
if(i<0||i>n-a.length)break
r=i}r||(r=n-a.length)
return e.substring(0,r)+a},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},"7WS/":function(e,t,a){"use strict"
var n=a("pQTu")
var i=a("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"play_media_comment_35257210":"تشغيل تعليق الوسائط.","play_media_comment_by_name_from_createdat_515b3b":"تشغيل تعليق الوسائط بواسطة %{name} من %{createdAt}."},"cy":{"play_media_comment_35257210":"Chwarae sylw ar gyfryngau.","play_media_comment_by_name_from_createdat_515b3b":"Chwarae sylw ar gyfryngau gan %{name} o %{createdAt}."},"da":{"play_media_comment_35257210":"Afspil medie kommentar.","play_media_comment_by_name_from_createdat_515b3b":"Afspil mediekommentar af %{name} fra %{createdAt}."},"da-x-k12":{"play_media_comment_35257210":"Afspil medie kommentar.","play_media_comment_by_name_from_createdat_515b3b":"Afspil mediekommentar af %{name} fra %{createdAt}."},"de":{"play_media_comment_35257210":"Medienkommentar wiedergeben","play_media_comment_by_name_from_createdat_515b3b":"Medienkommentar durch %{name} von %{createdAt} wiedergeben."},"en-AU":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-AU-x-unimelb":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-CA":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-lbs":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-ukhe":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"es":{"play_media_comment_35257210":"Reproducir comentario de multimedia.","play_media_comment_by_name_from_createdat_515b3b":"Reproducir comentario de multimedia de %{name} desde %{createdAt}."},"fi":{"play_media_comment_35257210":"Toista mediakommentti.","play_media_comment_by_name_from_createdat_515b3b":"Toista mediakommenttia %{name} kohteesta %{createdAt}."},"fr":{"play_media_comment_35257210":"Lancer le commentaire sur média.","play_media_comment_by_name_from_createdat_515b3b":"Lancer le commentaire sur média par %{name} à partir de %{createdAt}."},"fr-CA":{"play_media_comment_35257210":"Lire le commentaire du support","play_media_comment_by_name_from_createdat_515b3b":"Lire le commentaire du support par %{name} du %{createdAt}."},"ht":{"play_media_comment_35257210":"Jwe kòmantè medya.","play_media_comment_by_name_from_createdat_515b3b":"Jwe kòmantè medya pa %{name} de %{createdAt}."},"is":{"play_media_comment_35257210":"Spila miðilsathugasemd.","play_media_comment_by_name_from_createdat_515b3b":"Spila miðilsathugasemd eftir %{name} frá %{createdAt}."},"it":{"play_media_comment_35257210":"Commento sulla riproduzione del contenuto multimediale.","play_media_comment_by_name_from_createdat_515b3b":"Commento sulla riproduzione del contenuto multimediale da parte di %{name} da %{createdAt}."},"ja":{"play_media_comment_35257210":"メディア コメントの再生。","play_media_comment_by_name_from_createdat_515b3b":"%{name}まで%{createdAt}からのメディアのコメントを再生します。"},"mi":{"play_media_comment_35257210":"Mahia ngā korero pāpāho","play_media_comment_by_name_from_createdat_515b3b":"Mahia ngā korero pāpāho ma %{name} mai te %{createdAt}."},"nb":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nb-x-k12":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nl":{"play_media_comment_35257210":"Media-opmerking afspelen","play_media_comment_by_name_from_createdat_515b3b":"Speel media-opmerking door %{name} van %{createdAt} af."},"nn":{"play_media_comment_35257210":"Spel av medieinnhald.","play_media_comment_by_name_from_createdat_515b3b":"Spel av mediekommentar frå %{name} den %{createdAt}."},"pl":{"play_media_comment_35257210":"Odtwórz komentarz multimedialny.","play_media_comment_by_name_from_createdat_515b3b":"Odtwórz komentarz multimedialny %{name} z %{createdAt}."},"pt":{"play_media_comment_35257210":"Reproduzir comentário de mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentários de mídia %{name} de %{createdAt}."},"pt-BR":{"play_media_comment_35257210":"Reproduzir comentário em mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentário em mídia por %{name} de %{createdAt}."},"ru":{"play_media_comment_35257210":"Воспроизведение мультимедийного комментария.","play_media_comment_by_name_from_createdat_515b3b":"Воспроизвести мультимедийный комментарии %{name} из %{createdAt}."},"sl":{"play_media_comment_35257210":"Predvajaj komentar v obliki medija.","play_media_comment_by_name_from_createdat_515b3b":"Predvajaj komentar v obliki medija %{name}, ki je bil ustvarjen ob/dne %{createdAt}."},"sv":{"play_media_comment_35257210":"Spela upp mediekommentar.","play_media_comment_by_name_from_createdat_515b3b":"Spela upp mediekommentar av %{name} från %{createdAt}."},"sv-x-k12":{"play_media_comment_35257210":"Spela upp mediekommentar.","play_media_comment_by_name_from_createdat_515b3b":"Spela upp mediekommentar av %{name} från %{createdAt}."},"zh-Hans":{"play_media_comment_35257210":"播放媒体评论。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}的来自%{createdAt}的媒体评论。"},"zh-Hant":{"play_media_comment_35257210":"播放媒體評論。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}於%{createdAt}創建的媒體評論。"}}'))
a("jQeR")
a("0sPK")
var l=n["default"].scoped("mediaCommentThumbnail")
var r=a("GLiE")
var o=a.n(r)
var s=a("5Ky4")
var c=a("ouhR")
var d=a.n(c)
var m=a("hX7l")
const _={normal:{width:140,height:100},small:{width:70,height:50}}
function u(e,t,a){if(!INST.kalturaSettings)return console.log("Kaltura has not been enabled for this account")
let n,i
const r=d()(e)
try{const e=document.createElement("a")
e.href=r.attr("href")
i=e}catch(e){}if(i&&Object(m["a"])(i.search).no_preview)return
const o=_[t]||_.normal
const c=r.data("media_comment_id")||d.a.trim(r.find(".media_comment_id:first").text())||(n=r.attr("id"))&&n.match(/^media_comment_/)&&n.substring(14)||d.a.trim(r.parent().find(".media_comment_id:first").text())
const u=r.data("author")
const h=r.data("created_at")
let p
p=u&&h?l.t("Play media comment by %{name} from %{createdAt}.",{name:u,createdAt:h}):l.t("Play media comment.")
if(c){const e="https://".concat(INST.kalturaSettings.resource_domain)
const n="".concat(e,"/p/").concat(INST.kalturaSettings.partner_id,"/thumbnail/entry_id/").concat(c,"/width/")+"".concat(o.width,"/height/").concat(o.height,"/bgcolor/000000/type/2/vid_sec/5")
const i=d()("<span\n        style='background-image: url(".concat(Object(s["a"])(n),");'\n        class='media_comment_thumbnail media_comment_thumbnail-").concat(Object(s["a"])(t),"'\n      >\n        <span class='media_comment_thumbnail_play_button'>\n          <span class='screenreader-only'>\n            ").concat(Object(s["a"])(p),"\n          </span>\n        </span>\n      </span>"))
const l=r.closest("p")
l.attr("title")||l.attr("title",Object(s["a"])(p))
let m=r
if(a){m=r.clone().empty().removeClass("instructure_file_link")
const e=r.parent(".instructure_file_link_holder")
e.length?m.appendTo(e):r.after(m)}else r.empty()
m.data("download",m.attr("href")).prop("href","#").addClass("instructure_inline_media_comment").append(i).css({backgroundImage:"",padding:0})}}d.a.fn.mediaCommentThumbnail=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal"
let t=arguments.length>1?arguments[1]:void 0
return this.each((function(){o.a.defer(u,this,e,t)}))}},B1vq:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
a("s/PJ")
i.a.fn.scrollToVisible=function(e){const t={}
const a=i()(e)
if(0===a.length)return
let n=a.offset(),l=a.outerWidth(),r=a.outerHeight(),o=n.top,s=o+r,c=n.left,d=c+l,m="html,body"==this.selector?i.a.windowScrollTop():this.scrollTop(),_=this.scrollLeft(),u=this.outerHeight(),h=this.outerWidth()
if("html,body"!=this.selector){let e=i()("body").offset()
this.each((function(){try{e=i()(this).offset()
return false}catch(e){}}))
o-=e.top
s-=e.top
c-=e.left
d-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){u=i()(window).height()
i()("#wizard_box:visible").length>0&&(u-=i()("#wizard_box:visible").height())
h=i()(window).width()
o-=m
c-=_
s-=m
d-=_}o<0||u<r&&s>u?t.scrollTop=o+m:s>u&&(t.scrollTop=s+m-u+20)
c<0?t.scrollLeft=c+_:d>h&&(t.scrollLeft=d+_-h+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},OShF:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
var l=a("5Ky4")
a("JI1W")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=i()(this)
i.a.each(["name","id","class"],(a,n)=>{t.attr(n)&&t.attr(n,t.attr(n).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let n=false
if(e.data)for(var t in e.data){if(e.except&&-1!=i.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=i.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const r=this.find("."+t)
var a=e.avoid||""
r.each((function(){const r=i()(this)
if(r.length>0&&0===r.closest(a).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=i.a.inArray(t,e.htmlValues)){r.html(i.a.raw(e.data[t].toString()))
if(r.hasClass("user_content")){n=true
r.removeClass("enhanced")
r.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==r[0].tagName.toUpperCase())r.val(e.data[t])
else try{const a=e.data[t].toString()
r.html(Object(l["a"])(a))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,a,n,l=i()(this)
for(const r in e.hrefValues){if(!e.hrefValues.hasOwnProperty(r))continue
const o=e.hrefValues[r]
if(t=l.attr("href")){const a=i.a.replaceTags(t,o,encodeURIComponent(e.data[o]))
const n=l.text()===l.html()?l.text():null
if(t!==a){l.attr("href",a)
n&&l.text(n)}}(a=l.attr("rel"))&&l.attr("rel",i.a.replaceTags(a,o,e.data[o]));(n=l.attr("name"))&&l.attr("name",i.a.replaceTags(n,o,e.data[o]))}}))
n&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,a={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const l=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
n=i.a.trim(l.text())
"&nbsp;"===l.html()&&(n="")
1===n.length&&160===n.charCodeAt(0)&&(n="")
a[e]=n})}if(e.dataValues)for(t in e.dataValues){var n=this.data(e.dataValues[t])
n&&(a[e.dataValues[t]]=n)}if(e.htmlValues)for(t in e.htmlValues){const l=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
n=null
n=l.hasClass("user_content")&&l.data("unenhanced_content_html")?l.data("unenhanced_content_html"):i.a.trim(l.html())
a[e.htmlValues[t]]=n}return a}
i.a.fn.getTemplateValue=function(e,t){const a=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(a)[e]}},cuKi:function(e,t,a){"use strict"
a.d(t,"a",(function(){return l}))
var n=a("GLiE")
var i=a.n(n)
function l(e){return i()(e).reduce((e,t,a)=>{let n=a.split("][")
let l=n.length-1
if(/\[/.test(n[0])&&/\]$/.test(n[l])){n[l]=n[l].replace(/\]$/,"")
n=n.shift().split("[").concat(n)
l=n.length-1}else l=0
if(l){let i=0
let r=e
while(i<=l){a=""===n[i]?r.length:n[i]
r=r[a]=i<l?r[a]||(n[i+1]&&isNaN(n[i+1])?{}:[]):t
i++}}else i.a.isArray(e[a])?e[a].push(t):null!=e[a]?e[a]=[e[a],t]:e[a]=t
return e},{})}},hX7l:function(e,t,a){"use strict"
a.d(t,"a",(function(){return r}))
var n=a("ODXe")
var i=a("cuKi")
const l={true:true,false:false,null:null}
function r(e,t){if(!e||"boolean"===typeof e){const e=window.location.search
if(!e)return{}
return r(e,...arguments)}const a={}
e.replace(/\+/g," ").split("&").forEach(e=>{let i=e.split("="),r=Object(n["a"])(i,2),o=r[0],s=r[1]
o=decodeURIComponent(o)
s=decodeURIComponent(s)
t&&(s=s&&!isNaN(s)?+s:"undefined"===s?void 0:void 0!==l[s]?l[s]:s)
a[o]=s})
return Object(i["a"])(a)}},p6Wi:function(e,t,a){"use strict"
var n=a("pQTu")
var i=a("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
a("jQeR")
a("0sPK")
var l=n["default"].scoped("instructure_misc_plugins")
var r=a("ouhR")
var o=a.n(r)
var s=a("5Ky4")
var c=a("JD5e")
a("jYyc")
a("YGE8")
a("B1vq")
a("s/PJ")
o.a.fn.setOptions=function(e,t){let a=e?"<option value=''>"+Object(s["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(s["a"])(e)
a+='<option value="'+t+'">'+t+"</option>"})
return this.html(o.a.raw(a))}
o.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
o.a.fn.scrollbarWidth=function(){const e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const a=t.innerWidth()
e.css("overflow-y","scroll")
const n=t.innerWidth()
e.remove()
return a-n}
o.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
o.a.fn.undim=function(e){return this.animate({opacity:1},e)}
o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
const t=this
let a=null
let n=true
e.noMessage=e.noMessage||e.no_message
const i=function(){if(!n){e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const n=e.prepareData?e.prepareData.call(t,a):{}
n.authenticity_token=Object(c["a"])()
o.a.ajaxJSON(e.url,"DELETE",n,a=>{e.success.call(t,a)},(a,n,i,l)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,a,n,i,l):o.a.ajaxJSON.unhandledXHRs.push(n)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){n=false
const t="object"===typeof e.dialog?e.dialog:{}
const r=e.url.includes("assignments")?"btn-danger":"btn-primary"
a=o()(e.message).dialog(o.a.extend({},{modal:true,close:i,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:r,click(){n=true
o()(this).dialog("close")}}]},t))
return}n=confirm(e.message)}i()}
o.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
o.a.fn.fragmentChange=function(e){if(e&&true!==e){const a=(window.location.search||"").replace(/^\?/,"").split("&")
let n=null
for(var t=0;t<a.length;t++){const e=a[t]
e&&0===e.indexOf("hash=")&&(n="#"+e.substring(5))}this.bind("document_fragment_change",e)
const i=this
let l=false
for(t=0;t<o.a._checkFragments.fragmentList.length;t++){const e=o.a._checkFragments.fragmentList[t]
e.doc[0]==i[0]&&(l=true)}l||o.a._checkFragments.fragmentList.push({doc:i,fragment:""})
o()(window).bind("hashchange",o.a._checkFragments)
setTimeout(()=>{n&&n.length>0?i.triggerHandler("document_fragment_change",n):i&&i[0]&&i[0].location&&i[0].location.hash.length>0&&i.triggerHandler("document_fragment_change",i[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
o.a._checkFragments=function(){const e=o.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const a=e[t]
const n=a.doc
if(n[0].location.hash!=a.fragment){n.triggerHandler("document_fragment_change",n[0].location.hash)
a.fragment=n[0].location.hash
o.a._checkFragments.fragmentList[t]=a}}}
o.a._checkFragments.fragmentList=[]
o.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
o.a.fn.showIf=function(e){if(o.a.isFunction(e))return this.each((function(t){o()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
o.a.fn.disableIf=function(e){o.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
o.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}o()(".indicator_box").remove()
let a=this.offset()
e&&e.offset&&(a=e.offset)
const n=this.width()
const i=this.height()
const l=(e.container||this).zIndex()
t=o()(document.createElement("div"))
t.css({width:n+6,height:i+6,top:a.top-3,left:a.left-3,zIndex:l+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
o()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()}))
e&&e.scroll&&o()("html,body").scrollToVisible(t)}
o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
o.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
o.a.fn.fillWindowWithMe=function(e){const t=o.a.extend({minHeight:400},e),a=o()(this),n=o()("#wrapper"),i=o()("#main"),l=o()("#not_right_side"),r=o()(window),s=o()(this).add(t.alsoResize)
function c(){s.height(0)
const e=r.height()-(n.offset().top+n.outerHeight())+(i.height()-l.height()),c=Math.max(400,e)
s.height(c)
o.a.isFunction(t.onResize)&&t.onResize.call(a,c)}c()
r.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
o.a.fn.autoGrowInput=function(e){e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||o()(this).width(),a="",n=o()(this),i=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"}),l=function(){setTimeout(()=>{if(a===(a=n.val()))return
i.text(a)
const l=i.width(),r=l+e.comfortZone>=t?l+e.comfortZone:t,o=n.width(),s=r<o&&r>=t||r>t&&r<e.maxWidth
s&&n.width(r)})}
i.insertAfter(n)
o()(this).bind("keyup keydown blur update change",l)}))
return this}
o.a}}])

//# sourceMappingURL=73-c-48ab5951e3.js.map