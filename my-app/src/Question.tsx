import React from 'react'

export default function Question() {
    function fetchData(){
        fetch("https://api.stackexchange.com/2.2/questions?pagesize=100&order=asc&sort=month&site=stackoverflow").then(response =>{
          return response.json();   
      }).then(data =>{
            const html = data.items.map((date:any)=>{
                 return `<tr><td>${date.owner.display_name}</td><td>${date.title}</td><td>${date.creation_date}</td></tr>`;
             }).join('');
             const myElement: HTMLTableElement | null =  document.querySelector("#table");
             if(myElement){myElement.insertAdjacentHTML("afterend",html);}
            var p = document.querySelectorAll("tr");
            console.log(p.length);
            for(let i=0;i<p.length;i++){
                p[i].addEventListener("click",function(){
                    const Div: HTMLDivElement | null =    document.querySelector(".modal");
                    if(Div){ Div.classList.toggle("show-modal");}
                    const anch: HTMLAnchorElement | null =    document.querySelector("a");
                    if(anch){ anch.setAttribute("href",data.items[i-1].link); }
                    const head: HTMLElement | null =    document.querySelector("h4");
                    if(head){head.innerHTML=data.items[i-1].title;}
                    const anchor: HTMLAnchorElement | null =    document.querySelector("a");
                    if(anchor){anchor.innerHTML=data.items[i-1].link;}
                    const span: HTMLSpanElement | null =    document.querySelector(".close-button");
                    if(span) {span.addEventListener("click",function(){
                     const d: HTMLDivElement | null =    document.querySelector(".modal");
                    if(d){d.classList.remove("show-modal")};
                    });}
                 });
                }
         });
    }
    fetchData();
    return (
        <div>
                    <div className="modal">
    <div className="modal-content">
        <span className="close-button">&times;</span>
        <h4>Title:</h4>
        <h3>Answer:</h3>
         <a href="">Link:</a>
    </div>
</div>
        </div>
    )
}
