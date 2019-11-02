!function(a,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(a=a||self).SpAccountSettings=s()}(this,function(){"use strict";var a=function(a,s,t,e,r,o,i,n,l,d){"boolean"!=typeof i&&(l=n,n=i,i=!1);var c,p="function"==typeof t?t.options:t;if(a&&a.render&&(p.render=a.render,p.staticRenderFns=a.staticRenderFns,p._compiled=!0,r&&(p.functional=!0)),e&&(p._scopeId=e),o?(c=function(a){(a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),s&&s.call(this,l(a)),a&&a._registeredComponents&&a._registeredComponents.add(o)},p._ssrRegister=c):s&&(c=i?function(){s.call(this,d(this.$root.$options.shadowRoot))}:function(a){s.call(this,n(a))}),c)if(p.functional){var _=p.render;p.render=function(a,s){return c.call(s),_(a,s)}}else{var v=p.beforeCreate;p.beforeCreate=v?[].concat(v,c):[c]}return t};const s={mounted:function(){this.loaded=!1},data:function(){return{loaded:!1,passwordInfo:{old_password:"",new_password:"",new_password2:""},passwordErrors:{},passwordForm:{fields:[{name:"old_password",label:"msg_old_password",required:!0,maxLength:30,type:"password",placeholder:"msg_old_password"},{name:"new_password",label:"msg_new_password",required:!0,maxLength:30,type:"password",placeholder:"msg_new_password",pattern:this.$app.config.PASSWORD_REGEX,errorMsg:"msg_password_requirements"},{name:"new_password2",label:"msg_retype_new_password",required:!0,maxLength:30,type:"password",placeholder:"msg_retype_new_password"}],constraints:[function(a,s){return s[a.fields[1].name]==s[a.fields[2].name]?null:{new_password:"error_new_passwords_must_match",new_password2:"error_new_passwords_must_match"}},function(a,s){return s[a.fields[1].name]!=s[a.fields[0].name]?null:{new_password:"error_new_passwords_cannot_be_same_as_old_password"}}]},profileForm:{},profileErrors:{},profileData:{},avatarFile:[]}},methods:{pwSuccess:function(){this.$app.modal.showDialog("Success","Password changed successfully."),this.passwordInfo.old_password="",this.passwordInfo.new_password="",this.passwordInfo.new_password2=""},updateProfileInfo:function(a){this.profileData=a.profileData,this.profileForm=a.profileForm,this.loaded=!0},profileSuccess:function(a){this.$app.user=a,this.$root.userInfo=a},processAvatarFile:function(a){this.avatarFile=a.target.files},uploadAvatar:function(){this.avatarFile&&0!=this.avatarFile.length?this.$root.rpc.uploadFiles(this.avatarFile,this.$app.constants.FILE_ACCESS_TYPE_AVATAR,this.avatarSuccess.bind(this),this.avatarFailure.bind(this)):this.$root.modal.showErrorDialog("error_please_select_file")},avatarSuccess:function(a){this.$root.userInfo.avatarURL=a,this.$root.modal.showDialog("msg_success","msg_avatar_upload_successful")},avatarFailure:function(a,s){this.$root.modal.showErrorDialog(s)}}};var t=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"sp-one-column-container mt-3"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"border-light card"},[t("div",{staticClass:"card-body"},[t("h1",{staticClass:"mb-4"},[a._v(a._s(a.$root.$i18n("msg_account_settings")))]),a._v(" "),t("nav",[t("div",{staticClass:"nav nav-tabs",attrs:{id:"nav-tab",role:"tablist"}},[t("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-update-profile-tab","data-toggle":"tab",href:"#nav-update-profile",role:"tab","aria-controls":"nav-update-profile","aria-selected":"true"}},[a._v(a._s(a.$i18n("msg_update_profile")))]),a._v(" "),t("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-change-password-tab","data-toggle":"tab",href:"#nav-change-password",role:"tab","aria-controls":"nav-change-password","aria-selected":"false"}},[a._v(a._s(a.$i18n("msg_change_password")))]),a._v(" "),t("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-upload-avatar-tab","data-toggle":"tab",href:"#nav-upload-avatar",role:"tab","aria-controls":"nav-upload-avatar","aria-selected":"false"}},[a._v(a._s(a.$i18n("msg_upload_avatar")))])])]),a._v(" "),t("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[t("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-update-profile",role:"tabpanel","aria-labelledby":"nav-update-profile-tab"}},[t("div",{staticClass:"card-body"},[t("sp-loader",{attrs:{loaded:a.loaded,service:"UserService",method:"getProfileInfo",params:"{}","success-cb":a.updateProfileInfo}}),a._v(" "),a.loaded?t("sp-form",{attrs:{"form-def":a.profileForm,"data-object":a.profileData,errors:a.profileErrors,"save-label":"msg_update","saver-service":"UserService","save-callback":a.profileSuccess,"saver-method":"updateProfile","success-message":"msg_profile_updated_successfully"}}):a._e()],1)]),a._v(" "),t("div",{staticClass:"tab-pane fade",attrs:{id:"nav-change-password",role:"tabpanel","aria-labelledby":"nav-change-password-tab"}},[t("div",{staticClass:"card-body"},[t("sp-form",{attrs:{"form-def":a.passwordForm,"data-object":a.passwordInfo,errors:a.passwordErrors,"save-label":"msg_change_password","saver-service":"SessionService","save-callback":a.pwSuccess,"saver-method":"changePassword","success-message":"msg_password_changed_successfully"}})],1)]),a._v(" "),t("div",{staticClass:"tab-pane fade",attrs:{id:"nav-upload-avatar",role:"tabpanel","aria-labelledby":"nav-upload-avatar-tab"}},[t("div",{staticClass:"mt-3"},[t("div",{staticClass:"mb-4 mt-4 text-info text-center"},[a._v(a._s(a.$i18n("msg_upload_avatar_instructions")))]),a._v(" "),t("form",{staticClass:"form-inline justify-content-center mb-4"},[t("span",{staticClass:"form-control sp-file-form-control mr-2"},[t("input",{attrs:{accept:"image/*, gif, jpg, jpeg, png",type:"file"},on:{change:a.processAvatarFile}})]),a._v(" "),t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),a.uploadAvatar(s)}}},[a._v(a._s(a.$i18n("msg_upload_avatar")))])]),a._v(" "),t("div",{staticClass:"mb-2 pt-4 pb-4 bg-light text-center"},[t("span",{staticClass:"img-thumbnail d-inline-block mr-3"},[t("img",{staticClass:"sp-avatar-md",attrs:{src:a.$root.userInfo.avatarURL}})]),a._v(" "),t("span",{staticClass:"img-thumbnail d-inline-block"},[t("img",{staticClass:"sp-avatar-sm",attrs:{src:a.$root.userInfo.avatarURL}})])])])])])])])])])])};t._withStripped=!0;return a({render:t,staticRenderFns:[]},void 0,s,void 0,!1,void 0,void 0,void 0)});
