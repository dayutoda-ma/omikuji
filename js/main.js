'use strict';
{
  const btn =document.getElementById('btn');

  btn.addEventListener('click',() => {
    const results = ['大吉','ｋｓｊｆ','くｊｄｆ','gg','kjg'];

    btn.textContent = results[ Math.floor(Math.random() * results.length)];
    //btn.textContent=n




  });
}
