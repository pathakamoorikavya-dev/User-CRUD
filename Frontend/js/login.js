
const API='http://127.0.0.1:8000';
async function login(){
 const r=await fetch(API+'/login',{method:'POST',headers:{'Content-Type':'application/json'},
 body:JSON.stringify({email:email.value,password:password.value})});
 const d=await r.json();
 if(d.access_token){localStorage.token=d.access_token;localStorage.role=d.role;
 location.href=d.role==='admin'?'admin.html':'dashboard.html';}
 else msg.innerText=d.detail||'Login failed';
}
