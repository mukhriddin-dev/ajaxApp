"use strict";

const uzs=document.querySelector('#uzs');
const usd=document.querySelector('#usd');
const rub=document.querySelector('#rub');

uzs.addEventListener('input',()=>{

  const request=new XMLHttpRequest();

  request.open('GET', 'js/current.json');

  request.setRequestHeader('json-app','app/json;');

  request.send();

  request.addEventListener('load', ()=>{

    const datOf=JSON.parse(request.response);

    if(request.readyState===4 && request.status===200){
      usd.value=+uzs.value/datOf.current.usd;
      rub.value=+uzs.value*datOf.current.rub;
    }else{
      uzs.value="error";
    }


  })

});

