import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),s=e.querySelector('input[name="email"]'),r=e.querySelector('textarea[name="message"]');s.addEventListener("focus",()=>{s.placeholder="Type area"}),s.addEventListener("blur",()=>{s.placeholder="",s.value=""}),r.addEventListener("focus",()=>{r.placeholder="Type message"}),r.addEventListener("blur",()=>{r.placeholder="",r.value=""}),e.addEventListener("input",a=>{if(a.target.tagName==="INPUT"||a.target.tagName==="TEXTAREA"){const t={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))}}),window.addEventListener("load",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);e.email.value=t.email,e.message.value=t.message}}),e.addEventListener("submit",a=>{a.preventDefault();const t=e.email.value.trim(),o=e.message.value.trim();t&&o&&(console.log({email:t,message:o}),localStorage.removeItem("feedback-form-state"),e.reset())})});
//# sourceMappingURL=commonHelpers2.js.map
