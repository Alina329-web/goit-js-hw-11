import{a as p,S as d,i as a}from"./assets/vendor-BXBCZzWk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y="47416764-2d3f1aece90e621ecf55ea406",g="https://pixabay.com/api/";function h(o){return p.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw console.error("Error fetch:",t),t})}const u=document.querySelector(".gallery");let c;function L(o){const t=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:r,views:s,comments:f,downloads:m})=>`
      <a href="${n}" class="gallery-item">
        <img src="${i}" alt="${e}" />
        <div class="info">
          <p>Likes: ${r}</p>
          <p>Views: ${s}</p>
          <p>Comments: ${f}</p>
          <p>Downloads: ${m}</p>
        </div>
      </a>
    `).join("");u.innerHTML=t,c?c.refresh():c=new d(".gallery-item",{captionsData:"alt",captionDelay:250})}function b(){u.innerHTML=""}const q=document.querySelector(".form"),l=document.querySelector(".loader");q.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(),l.style.display="block",h(t).then(i=>{if(i.hits.length===0){a.info({message:"No images found"});return}L(i.hits)}).catch(i=>{a.error({message:"Error fetching images. Please try again."})}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=index.js.map
