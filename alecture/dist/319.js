(self.webpackChunkalecture=self.webpackChunkalecture||[]).push([[319],{6319:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>d});var t=a(8678),n=a(3564),r=a(7294),c=a(9669),s=a.n(c),m=a(8100),u=a(3046),i=a(5977),o=a(3727);const d=()=>{const{data:e,error:l,revalidate:a}=(0,m.ZP)("/api/users",n.Z),[c,d]=(0,t.Z)(""),[p,E]=(0,t.Z)(""),[v,,k]=(0,t.Z)(""),[h,,g]=(0,t.Z)(""),[w,b]=(0,r.useState)(!1),[C,_]=(0,r.useState)(""),[I,f]=(0,r.useState)(!1),j=(0,r.useCallback)((e=>{k(e.target.value),b(e.target.value!==h)}),[h]),y=(0,r.useCallback)((e=>{g(e.target.value),b(e.target.value!==v)}),[v]),Z=(0,r.useCallback)((e=>{e.preventDefault(),!w&&p&&(console.log("서버로 회원가입하기"),_(""),f(!1),s().post("/api/users",{email:c,nickname:p,password:v}).then((e=>{console.log(e),f(!0)})).catch((e=>{console.log(e.response),_(e.response.data)})).finally((()=>{})))}),[c,p,v,h,w]);return void 0===e?r.createElement("div",null,"로딩중..."):e?r.createElement(i.l_,{to:"/workspace/sleact/channel/일반"}):r.createElement("div",{id:"container"},r.createElement(u.h4,null,"Sleact"),r.createElement(u.l0,{onSubmit:Z},r.createElement(u.__,{id:"email-label"},r.createElement("span",null,"이메일 주소"),r.createElement("div",null,r.createElement(u.II,{type:"email",id:"email",name:"email",value:c,onChange:d}))),r.createElement(u.__,{id:"nickname-label"},r.createElement("span",null,"닉네임"),r.createElement("div",null,r.createElement(u.II,{type:"text",id:"nickname",name:"nickname",value:p,onChange:E}))),r.createElement(u.__,{id:"password-label"},r.createElement("span",null,"비밀번호"),r.createElement("div",null,r.createElement(u.II,{type:"password",id:"password",name:"password",value:v,onChange:j}))),r.createElement(u.__,{id:"password-check-label"},r.createElement("span",null,"비밀번호 확인"),r.createElement("div",null,r.createElement(u.II,{type:"password",id:"password-check",name:"password-check",value:h,onChange:y})),w&&r.createElement(u.jj,null,"비밀번호가 일치하지 않습니다."),!p&&r.createElement(u.jj,null,"닉네임을 입력해주세요."),C&&r.createElement(u.jj,null,C),I&&r.createElement(u.fB,null,"회원가입되었습니다! 로그인해주세요.")),r.createElement(u.zx,{type:"submit"},"회원가입")),r.createElement(u.Ji,null,"이미 회원이신가요? ",r.createElement(o.rU,{to:"/login"},"로그인 하러가기")))}}}]);