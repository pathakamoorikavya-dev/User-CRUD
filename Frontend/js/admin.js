
const API='http://127.0.0.1:8000';
fetch(API+'/users',{headers:{Authorization:'Bearer '+localStorage.token}})
.then(r=>r.json()).then(d=>content.innerHTML='<pre>'+JSON.stringify(d,null,2)+'</pre>');
