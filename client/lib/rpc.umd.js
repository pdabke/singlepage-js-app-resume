!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SPRPC=t()}(this,function(){"use strict";var e={RETURN_SUCCESS:0,RETURN_LOGIN_REQUIRED:-1,RETURN_APP_ERROR:-2,RETURN_ACCESS_DENIED:-3,RETURN_INTERNAL_ERROR:-4,RETURN_NO_CONNECTION:-5,RETURN_INVALID_REQUEST:-6,SINGLE_SITE_ACCESS_TYPES:[{label:"msg_protected",value:"PROTECTED"},{label:"msg_public",value:"PUBLIC"}],MULTI_SITE_ACCESS_TYPES:[{label:"msg_private",value:"PRIVATE"},{label:"msg_protected",value:"PROTECTED"},{label:"msg_public",value:"PUBLIC"}],FILE_ACCESS_TYPE_PUBLIC:"PUBLIC",FILE_ACCESS_TYPE_PRIVATE:"PRIVATE",FILE_ACCESS_TYPE_AVATAR:"AVATAR",ROLE_SUPERADMIN:"SUPERADMIN",ROLE_ADMIN:"ADMIN",ROLE_MODERATOR:"MODERATOR",ROLE_REVIEWER:"REVIEWER",ROLE_MEMBER:"MEMBER",ROLE_GUEST:"GUEST",ROLE_PLATINUM:"PLATINUM",ROLE_GOLD:"GOLD",ROLE_SILVER:"SILVER",ROLE_BRONZE:"BRONZE",ROLES:[{label:"msg_role_superadmin",value:"SUPERADMIN"},{label:"msg_role_admin",value:"ADMIN"},{label:"msg_role_moderator",value:"MODERATOR"},{label:"msg_role_reviewer",value:"REVIEWER"},{label:"msg_role_member",value:"MEMBER"},{label:"msg_role_guest",value:"GUEST"},{label:"msg_role_platinum",value:"PLATINUM"},{label:"msg_role_gold",value:"GOLD"},{label:"msg_role_silver",value:"SILVER"},{label:"msg_role_bronze",value:"BRONZE"}],FORM_FIELD_HIDDEN:"hidden",FORM_FIELD_TEXTAREA:"textarea",FORM_FIELD_HTML:"html",FORM_FIELD_TEXT:"text",FORM_FIELD_PASSWORD:"password",FORM_FIELD_SELECT:"select",FORM_FIELD_CHECKBOX:"checkbox",FORM_FIELD_RADIO:"radio",FORM_FIELD_DATE:"date",FORM_FIELD_TIMESTAMP:"timestamp",FORM_FIELD_FILE:"file",FORM_FIELD_GROUP:"group",DATA_TYPE_INT:"int",DATA_TYPE_FLOAT:"float",DATA_TYPE_EMAIL:"email",DATA_TYPE_URL:"url",DATA_TYPE_US_PHONE:"us-phone",DATA_TYPE_OBJECT:"object",DATA_TYPE_ARRAY:"array",CODE_REGISTRATION:0,CODE_PASSWORD_RESET:1},t={locale:"en-US",appMessages:{},getMessage:(e,r)=>e?r&&r[e]?r[e]:t.appMessages[e]?t.appMessages[e]:e:"",localize(e,r,o){let a=t.getMessage(e,r);return t.evaluate(a,o)},evaluate(e,t){if(!t)return e;var r=e;return Object.keys(t).forEach(function(e){let o=new RegExp("\\{\\s*"+e+"\\s*\\}","g");r=r.replace(o,t[e])}),r},computeErrorArg:function(e,t){return"error_value_cannot_be_less_than"==e?t.minValue:"error_value_cannot_be_greater_than"==e?t.maxValue:"error_length_cannot_be_less_than"==e?t.minLength:"error_length_cannot_be_greater_than"==e?t.maxLength:void 0}},r=!1,o={init:function(){var e=document.createElement("div");e.innerHTML='<div class="modal fade" id="sp-modal" tabindex="-1" role="dialog" aria-hidden="true">        <div class="modal-dialog modal-dialog-centered pt-1" role="document">          <div class="modal-content">            <div class="modal-header">              <h5 class="modal-title" id="sp-modal-title">Modal title</h5>              <button id="sp-modal-close" type="button" class="close" data-dismiss="modal" aria-label="Close">                <span aria-hidden="true">&times;</span>              </button>            </div>            <div class="modal-body" id="sp-modal-body">            </div>            <div class="modal-footer" id="sp-modal-footer">              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>              <button type="button" class="btn btn-primary">Save changes</button>            </div>          </div>        </div>      </div>';var t=e.firstChild;document.body.appendChild(t),document.getElementById("sp-modal-close").onclick=o.hideDialog},hideDialog:function(){var e=document.getElementById("sp-modal");e.className="modal fade",e.style.display="none";var t=document.getElementById("sp-modal-backdrop");t&&t.parentNode.removeChild(t),r=!1},showDialogHelper:function(){var e=document.getElementById("sp-modal");e.className="modal fade show",e.style.display="block",o.createModalBackdrop(o.hideDialog)},createModalBackdrop(){var e=document.createElement("div");e.className="modal-backdrop fade show random",e.id="sp-modal-backdrop",document.body.appendChild(e)},createDialogCallback:function(e,t){return function(){o.hideDialog(),t(e)}},showDialog:function(e,a,n,l){if(r)setTimeout(function(){o.showDialog(e,a,n,l)},1e3);else{r=!0,document.getElementById("sp-modal-title").innerHTML=t.localize(e),document.getElementById("sp-modal-body").innerHTML=t.localize(a);for(var s=document.getElementById("sp-modal-footer");s.firstChild;)s.removeChild(s.firstChild);n||(n=["msg_ok"]);var i=n.length;for(let e=0;e<i;e++)n[e].length;for(let e=0;e<i;e++){var R=0==e?"btn btn-primary":"btn btn-secondary",E=document.createElement("button");E.className=R,E.appendChild(document.createTextNode(t.localize(n[e]))),s.appendChild(E),E.onclick=l?o.createDialogCallback(e,l):o.hideDialog}o.showDialogHelper()}},showErrorDialog:function(e,r,a){o.showDialog('<span class="text-danger">'+t.localize("msg_error")+"</span>",e,r,a)},showSuccessDialog:function(e,r){o.showDialog('<span class="text-success">'+t.localize("msg_success")+"</span>",e,null,r)}},a={computeSiteURL:function(){var e=["/sp-files"],t=window.location.href;-1!=t.indexOf("#")&&(t=t.substring(0,t.indexOf("#")-1));for(let r=0;r<e.length;r++)if(-1!=t.indexOf(e[r]))return t.substring(0,t.indexOf(e[r]));return-1===t.indexOf("/",t.indexOf("//")+2)?t:t.substring(0,t.lastIndexOf("/"),t.indexOf("//")+2)},mixin:function(e,t){t&&a.isObject(t)&&Object.keys(t).forEach(function(r){var o=t[r];e[r]&&a.isObject(o)?a.mixin(e[r],o):e[r]=o})},isObject:function(e){return!!e&&("object"==typeof e&&!Array.isArray(e))},unescapeHTML:function(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent},toTitleCase:(e,t)=>e=(e=t?e.replace(/(_|-|\s+)\w/g,function(e){return" "+e[e.length-1].toUpperCase()}):e.replace(/(_|-|\s+)\w/g,function(e){return e[e.length-1].toUpperCase()}))[0].toUpperCase()+e.substring(1)},n={siteURL:a.computeSiteURL(),serviceURL:a.computeSiteURL(),invoke:function(t,r,a,l,s){var i=t,R=r,E=a,_=l,d=s,u=new XMLHttpRequest;u.withCredentials=!0,u.open("POST",n.serviceURL,!0),u.setRequestHeader("Content-Type","application/json; charset=UTF-8"),u.setRequestHeader("SP-Site-URL",n.serviceURL);var c={};c.service=t,c.method=r,c.params=a,u.onloadend=function(){if(0!=u.status){var t=u.responseText?u.responseText:"{}",r=null;try{r=JSON.parse(t)}catch(e){return void o.showErrorDialog("error_generic")}if(r.status==e.RETURN_SUCCESS)l&&l(r.result);else{if(!s){if(status==e.RETURN_NO_CONNECTION)return void o.showErrorDialog("error_no_connection",["msg_retry"],function(){n.invoke(i,R,E,_,d)});{let t="error_generic";return r.status==e.RETURN_ACCESS_DENIED?t="error_access_denied":r.status==e.RETURN_APP_ERROR?t=r.error?r.error:"error_generic":r.status==e.RETURN_INTERNAL_ERROR?t="error_internal":r.status==e.RETURN_LOGIN_REQUIRED&&(t="error_login_required"),void o.showErrorDialog(t)}}r.status==e.RETURN_APP_ERROR?s(e.RETURN_APP_ERROR,r.error,r.result):r.status==e.RETURN_LOGIN_REQUIRED?s(e.RETURN_LOGIN_REQUIRED,"error_login_required",null):r.status==e.RETURN_ACCESS_DENIED?s(e.RETURN_LOGIN_REQUIRED,"error_access_denied",null):s(e.RETURN_INTERNAL_ERROR,"error_internal",null)}}},u.onerror=function(){s?s(e.RETURN_NO_CONNECTION,"error_no_connection",null):o.showErrorDialog("error_no_connection",["msg_retry"],function(){n.invoke(i,R,E,_,d)})},u.send(JSON.stringify(c))},uploadFiles:function(t,r,o,a){var l=new XMLHttpRequest;l.withCredentials=!0,l.open("POST",n.serviceURL,!0),l.setRequestHeader("SP-Site-URL",n.serviceURL),l.setRequestHeader("SP-File-Upload",r);var s=new FormData;s.append("num_files",t.length);for(let e=0;e<t.length;e++)s.append("attachments"+e,t[e]);l.onloadend=function(){if(0!=l.status)if(200==l.status){var t=l.responseText;if(t){var r=JSON.parse(t);r.status==e.RETURN_SUCCESS?o(r.result):r.status==e.RETURN_APP_ERROR?a(e.RETURN_APP_ERROR,r.error,r.result):r.status==e.RETURN_LOGIN_REQUIRED?a(e.RETURN_LOGIN_REQUIRED,"error_login_required",null):r.status==e.RETURN_ACCESS_DENIED?a(e.RETURN_LOGIN_REQUIRED,"error_access_denied",null):a(e.RETURN_INTERNAL_ERROR,"error_internal",null)}else a(e.RETURN_INTERNAL_ERROR,"Oops! Something went wrong. Please try your request at a later time.",null)}else a(e.RETURN_INTERNAL_ERROR,"Oops! Something went wrong. Please try your request at a later time.",null)},l.onerror=function(){a(e.RETURN_INTERNAL_ERROR,"Failed to connect to our servers. Please check your Wi-Fi or cellular data settings for this app.",null)},l.send(s)}};return n});
