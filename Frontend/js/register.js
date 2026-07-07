
const API='http://127.0.0.1:8000';
async function registerUser(){
 const r=await fetch(API+'/register',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({name:name.value,email:email.value,password:password.value,role:role.value})});
 const d=await r.json(); msg.innerText=d.message||d.detail;
}
