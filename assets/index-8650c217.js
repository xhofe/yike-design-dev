import{d as U,dJ as W,dK as X,r as i,dw as e,c as Z,dL as x,o as u,b as r,j as f,n,e3 as m,g as d,e2 as ee,e as b,eR as ae,es as le,t as V,eS as se,ey as te,w as oe,e1 as ne,F as ue,d_ as re}from"./index-5311f08a.js";import{u as de}from"./use-form-item-e0c7d766.js";const ie=["id","name","placeholder","disabled","readonly","required","type","value","aria-disabled"],pe={key:0},ce=U({name:"YkInput",__name:"input",props:{id:{},name:{},size:{default:"l"},type:{default:"text"},placeholder:{},modelValue:{default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},visible:{type:Boolean,default:!0},status:{default:"primary"},loading:{type:Boolean,default:!1},showCounter:{type:Boolean,default:!1},limit:{default:-1},style:{},message:{default:""},inputStyle:{}},emits:["focus","blur","clear","change","submit","keydown","update:modelValue","hoverin","hoverout"],setup(q,{expose:E,emit:t}){const s=q,o=W("input"),{disabled:$,status:h,message:g,size:R,inputStyle:T}=X(s),{mergedDisabled:c,isError:k,mergedStatus:_,mergedSize:L,validate:w}=de({disabled:$,status:h,message:g,size:R}),y=i(!1),I=s.limit>0,N=s.showCounter&&I,D=s.type==="password"&&!s.disabled&&s.visible;let l=e(s.modelValue);const z=i(l.length),p=i(),v=i(!1),C=i(!1),F=i(l.length>0),B=i(s.type),K=()=>{s.disabled||s.readonly||(v.value=!0,w("focus"),t("focus",l))},S=()=>{var a;s.disabled||s.readonly||(l=((a=p.value)==null?void 0:a.value)??"",I&&!y.value&&l.length>s.limit&&(l=l.slice(0,s.limit),p.value.value=l),F.value=l.length>0,z.value=l.length,w("change"),t("update:modelValue",l),t("change",l))},M=()=>{v.value=!1,w("blur"),t("blur",l)},P=()=>{C.value=!0,t("hoverin")},j=()=>{C.value=!1,t("hoverout")},H=()=>{p.value.value="",p.value.focus(),S(),t("clear","")},J=()=>{y.value=!0},O=()=>{y.value=!1,S()},A=a=>{a.key==="Enter"&&!y.value&&t("submit"),t("keydown",a)},G=()=>{B.value=B.value==="text"?"password":"text"},Y=Z(()=>({"yk-input__button":!0,"yk-input__button-show":F.value&&(s.clearable||s.visible)&&(v.value||C.value)})),Q=a=>{l=a,t("update:modelValue",l),t("change",l)};return x(()=>s.modelValue,a=>{l=a,t("update:modelValue",l)}),E({inputRef:p,setValue:Q}),(a,fe)=>(u(),r(ue,null,[f("div",te({class:e(o)(),style:a.style},a.$attrs,{onMouseenter:P,onMouseleave:j}),[a.$slots.prepend?(u(),r("span",{key:0,class:n(e(o)("prepend"))},[m(a.$slots,"prepend")],2)):d("",!0),f("div",{class:n([e(o)("inner"),e(o)({[`${e(h)}`]:!e(c),[`${e(h)}--focus`]:v.value&&!e(c)&&!e(k),loading:a.loading,disabled:e(c),readonly:a.readonly,rightbr0:!!a.$slots.append,leftbr0:!!a.$slots.prepend,error:e(k),"error-focus":e(k)}),e(o)([e(L)])])},[m(a.$slots,"prefix"),f("input",{id:a.id,ref_key:"inputRef",ref:p,name:a.name,placeholder:a.placeholder,disabled:e(c),readonly:a.readonly,required:a.required,class:n(e(o)("widget")),type:B.value,tabindex:"0",value:e(l),"aria-disabled":e(c),style:ee(e(T)),onFocus:K,onInput:S,onBlur:M,onCompositionstart:J,onCompositionend:O,onKeydown:A},null,46,ie),f("div",{class:n(e(o)("buttons"))},[e(D)?(u(),r("button",{key:0,"aria-label":"查看/隐藏密码",class:n(["yk-input__button",Y.value]),onClick:G},[b(e(ae))],2)):d("",!0),a.clearable&&!e($)?(u(),r("button",{key:1,"aria-label":"清空内容",class:n(["yk-input__button",Y.value]),onClick:H},[b(e(le))],2)):d("",!0)],2),a.showCounter?(u(),r("div",{key:0,class:n(e(o)("counter"))},[f("span",null,V(z.value),1),e(N)?(u(),r("span",pe," / "+V(a.limit),1)):d("",!0)],2)):d("",!0),a.loading?(u(),r("div",{key:1,class:n(e(o)("spinner"))},[b(e(se))],2)):d("",!0),m(a.$slots,"suffix")],2),a.$slots.append?(u(),r("span",{key:1,class:n(e(o)("append"))},[m(a.$slots,"append")],2)):d("",!0)],16),b(ne,{name:"fade"},{default:oe(()=>[e(g)?(u(),r("div",{key:0,class:n(e(o)("hint",[e(_)]))},V(e(g)),3)):d("",!0)]),_:1})],64))}}),me=re(ce);export{me as Y};
