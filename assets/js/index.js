let tabs = document.querySelector(".tab"),
tabButton = document.querySelectorAll(".tab-button"),
contents = document.querySelectorAll(".content-tab"),
backUp = document.querySelector(".btn-backUp"),
search_button = document.querySelector(".search_button"),
search_menu = document.querySelector(".search_menu"),
search_extra = document.querySelector(".search_extra"),
close_search = document.querySelector(".close_search"),
menu_button = document.querySelector(".menu-icon"),
menu_expand = document.querySelector(".expand_menu"),
menu_extra = document.querySelector(".menu-extra"),
close_menu_target = document.querySelector(".close-menu"),
close_menu = true;

search_button.addEventListener("click",()=>{
  if(!search_menu.classList.contains("expand_menu_visible")){
    search_menu.classList.add("expand_menu_visible");
    search_extra.classList.add("search_extra");
  }
  else{
    search_menu.classList.remove("expand_menu_visible");
    search_extra.classList.remove("menu_extra");
  }
});
close_search.addEventListener("click",()=>{
  search_menu.classList.remove("expand_menu_visible");
  search_extra.classList.remove("search_extra");
});
search_menu.addEventListener("click",()=>{
  if(close_menu && search_menu.classList.contains("expand_menu_visible")){
      search_menu.classList.remove("expand_menu_visible");
  }
  close_menu = true;
});
search_extra.addEventListener("click",()=>{
  close_menu = false;
});

menu_button.addEventListener("click",()=>{
  if(!menu_expand.classList.contains("expand_menu_visible")){
    menu_expand.classList.add("expand_menu_visible");
    menu_extra.classList.add("menu-extra-open");
  }
  else{
    menu_expand.classList.remove("expand_menu_visible");
    menu_extra.classList.remove("menu-extra-open");
  }
});
close_menu_target.addEventListener("click",()=>{
    menu_expand.classList.remove("expand_menu_visible");
    menu_extra.classList.remove("menu-extra-open");
})
menu_expand.addEventListener("click",()=>{
  if(close_menu && menu_expand.classList.contains("expand_menu_visible")){
      menu_expand.classList.remove("expand_menu_visible");
  }
  close_menu = true;
});
menu_extra.addEventListener("click",()=>{
  close_menu = false;
});

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active-tab");
    });
    const element = document.getElementById(id);
    element.classList.add("active-tab");
  }
}
backUp.addEventListener("click",()=>{
    document.body.scrollTop = 0 ;
    document.documentElement.scrollTop = 0;
})
document.addEventListener("DOMContentLoaded",()=>{
    productScroll();
})
function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide; //= document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name
    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -400 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}
