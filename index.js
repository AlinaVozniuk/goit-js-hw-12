import{a as w,S,i as a}from"./assets/vendor-CIF6YjI2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const v="56179959-a7008e00e45022e107cf5162b";async function u(r){return(await w.get("https://pixabay.com/api/",{params:{key:v,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page,per_page:15}})).data}const f=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const e=r.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img
            src="${s.webformatURL}"
            alt="${s.tags}"
          />
        </a>
        <div class="info">
          <p><b>Likes</b> ${s.likes}</p>
          <p><b>Views</b> ${s.views}</p>
          <p><b>Comments</b> ${s.comments}</p>
          <p><b>Downloads</b> ${s.downloads}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",e),P.refresh()}function q(){f.innerHTML=""}function g(){h.classList.remove("hidden")}function p(){h.classList.add("hidden")}function b(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}const M=document.querySelector(".form"),$=document.querySelector(".load-more");let i="",n=1,l=0;const B=15;M.addEventListener("submit",E);$.addEventListener("click",O);async function E(r){if(r.preventDefault(),i=r.currentTarget.elements.searchText.value.trim(),!!i){n=1,q(),L(),g();try{const e=await u(i,n);if(e.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}l=e.totalHits,y(e.hits),Math.ceil(l/B)>1?b():a.info({message:"We're sorry, but you've reached the end of search results."})}catch{a.error({message:"Something went wrong. Please try again."})}finally{p()}}}async function O(){n+=1,L(),g();try{const r=await u(i,n);y(r.hits),x();const e=Math.ceil(l/PER_PAGE);n>=e?a.info({message:"We're sorry, but you've reached the end of search results."}):b()}catch{a.error({message:"Something went wrong. Please try again."})}finally{p()}}function x(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
