import{a as S,S as v,i as a}from"./assets/vendor-CIF6YjI2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const P="https://pixabay.com/api/",q="56179959-a7008e00e45022e107cf5162b";async function u(r,e){return(await S.get(P,{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),M=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const e=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>
        <div class="info">
          <p><b>Likes</b> ${o.likes}</p>
          <p><b>Views</b> ${o.views}</p>
          <p><b>Comments</b> ${o.comments}</p>
          <p><b>Downloads</b> ${o.downloads}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),M.refresh()}function B(){f.innerHTML=""}function g(){h.classList.remove("hidden")}function p(){h.classList.add("hidden")}function L(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}const $=document.querySelector(".form"),O=document.querySelector(".load-more");let i="",n=1,l=0;const w=15;$.addEventListener("submit",x);O.addEventListener("click",E);async function x(r){if(r.preventDefault(),i=r.currentTarget.elements.searchText.value.trim(),!!i){n=1,B(),b(),g();try{const e=await u(i,n);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}l=e.totalHits,y(e.hits),Math.ceil(l/w)>1?L():a.info({message:"We're sorry, but you've reached the end of search results."})}catch{a.error({message:"Something went wrong. Please try again."})}finally{p()}}}async function E(){n+=1,b(),g();try{const r=await u(i,n);y(r.hits),H();const e=Math.ceil(l/w);n>=e?a.info({message:"We're sorry, but you've reached the end of search results."}):L()}catch{a.error({message:"Something went wrong. Please try again."})}finally{p()}}function H(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
