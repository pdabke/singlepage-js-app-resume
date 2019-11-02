!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).SPValidator=r()}(this,function(){"use strict";var e={RETURN_SUCCESS:0,RETURN_LOGIN_REQUIRED:-1,RETURN_APP_ERROR:-2,RETURN_ACCESS_DENIED:-3,RETURN_INTERNAL_ERROR:-4,RETURN_NO_CONNECTION:-5,RETURN_INVALID_REQUEST:-6,SINGLE_SITE_ACCESS_TYPES:[{label:"msg_protected",value:"PROTECTED"},{label:"msg_public",value:"PUBLIC"}],MULTI_SITE_ACCESS_TYPES:[{label:"msg_private",value:"PRIVATE"},{label:"msg_protected",value:"PROTECTED"},{label:"msg_public",value:"PUBLIC"}],FILE_ACCESS_TYPE_PUBLIC:"PUBLIC",FILE_ACCESS_TYPE_PRIVATE:"PRIVATE",FILE_ACCESS_TYPE_AVATAR:"AVATAR",ROLE_SUPERADMIN:"SUPERADMIN",ROLE_ADMIN:"ADMIN",ROLE_MODERATOR:"MODERATOR",ROLE_REVIEWER:"REVIEWER",ROLE_MEMBER:"MEMBER",ROLE_GUEST:"GUEST",ROLE_PLATINUM:"PLATINUM",ROLE_GOLD:"GOLD",ROLE_SILVER:"SILVER",ROLE_BRONZE:"BRONZE",ROLES:[{label:"msg_role_superadmin",value:"SUPERADMIN"},{label:"msg_role_admin",value:"ADMIN"},{label:"msg_role_moderator",value:"MODERATOR"},{label:"msg_role_reviewer",value:"REVIEWER"},{label:"msg_role_member",value:"MEMBER"},{label:"msg_role_guest",value:"GUEST"},{label:"msg_role_platinum",value:"PLATINUM"},{label:"msg_role_gold",value:"GOLD"},{label:"msg_role_silver",value:"SILVER"},{label:"msg_role_bronze",value:"BRONZE"}],FORM_FIELD_HIDDEN:"hidden",FORM_FIELD_TEXTAREA:"textarea",FORM_FIELD_HTML:"html",FORM_FIELD_TEXT:"text",FORM_FIELD_PASSWORD:"password",FORM_FIELD_SELECT:"select",FORM_FIELD_CHECKBOX:"checkbox",FORM_FIELD_RADIO:"radio",FORM_FIELD_DATE:"date",FORM_FIELD_TIMESTAMP:"timestamp",FORM_FIELD_FILE:"file",FORM_FIELD_GROUP:"group",DATA_TYPE_INT:"int",DATA_TYPE_FLOAT:"float",DATA_TYPE_EMAIL:"email",DATA_TYPE_URL:"url",DATA_TYPE_US_PHONE:"us-phone",DATA_TYPE_OBJECT:"object",DATA_TYPE_ARRAY:"array",CODE_REGISTRATION:0,CODE_PASSWORD_RESET:1},r={emailRegex:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,urlRegex:/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi,isValidUSPhone:function(e){return 10===e.match(/\d/g).length},isValidEmail:function(e){return e.match(r.emailRegex)},isValidURL:function(e){return e.match(r.urlRegex)},validateField:function(_,l){if(_.type==e.FORM_FIELD_HIDDEN||_.type==e.FORM_FIELD_GROUP)return null;var a=null;if(_.required&&(!l&&0!==l||l instanceof Array&&0==l.length))a=_.type==e.FORM_FIELD_CHECKBOX?"error_checkbox_required":_.type==e.FORM_FIELD_RADIO?"error_radio_required":_.type==e.FORM_FIELD_SELECT?"error_select_required":_.type==e.FORM_FIELD_FILE?"error_file_required":"error_required";else{if(null==l||null==l||"string"==typeof l&&""==l.trim())return null;if(_.customValidator)a=_.customValidator(_,l);else if(_.propValidator)_.propValidator(l)||(a="error_invalid_value");else if(_.dataType==e.DATA_TYPE_EMAIL){if(r.isValidEmail(l))return null;a="error_invalid_email"}else if(_.dataType==e.DATA_TYPE_URL){if(r.isValidURL(l))return null;a="error_invalid_url"}else if(_.dataType==e.DATA_TYPE_US_PHONE){if(r.isValidUSPhone(l))return null;a="error_invalid_phone_number"}else if(_.dataType==e.DATA_TYPE_OBJECT)try{return JSON.parse(l),null}catch(e){a="error_invalid_json"}else if(_.dataType==e.DATA_TYPE_ARRAY)try{let e=JSON.parse(l);if(Array.isArray(e))return null;a="error_invalid_array"}catch(e){a="error_invalid_array"}else if(_.pattern&&!_.pattern.test(l))a="error_invalid_value";else if(_.dataType==e.DATA_TYPE_INT)if(Array.isArray(l)){for(let e=0;e<fielValue.length;e++)if(l[e]!=parseInt(l,10)){a="error_must_be_int";break}}else l!=parseInt(l,10)&&(a="error_must_be_int");else if(_.dataType==e.DATA_TYPE_FLOAT)if(Array.isArray(l)){for(let e=0;e<fielValue.length;e++)if(l[e]!=parseFloat(l,10)){a="error_must_be_float";break}}else l!=parseFloat(l,10)&&(a="error_must_be_float");else _.minValue&&l<_.minValue?a="error_value_cannot_be_less_than":_.maxValue&&l>_.maxValue?a="error_value_cannot_be_greater_than":_.minLength&&l.length<_.minLength?a="error_length_cannot_be_less_than":_.maxLength&&l.length>_.maxLength&&(a="error_length_cannot_be_greater_than")}return _.errorMsg&&a&&(a=_.errorMsg),a},validateForm:function(e,_,l){var a=r.validateFields(e.fields,_,l);if(a>0)return a;if(e.constraints){var t=e.constraints.length;for(let r=0;r<t;i++){var E=e.constraints[r](e,_);if(null!=E){for(let e in E)l[e]=E[e],a++;return a}}}return a},validateFields:function(_,l,a){var t=_.length,E=0;for(let n=0;n<t;n++)if(_[n].type!=e.FORM_FIELD_HIDDEN)if(_[n].type==e.FORM_FIELD_GROUP)E+=this.validateFields(_[n].fields,l,a);else{var i=r.validateField(_[n],l[_[n].name]);a[_[n].name]=i,null!=i&&E++}return E}};return r});
