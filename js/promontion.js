// btn slaider 1 to promontion
let btn_page1=document.querySelector(".btnPAGE1");
// btn slaider 2 to promontion
let btn_page2=document.querySelector(".btnPAGE2");

btn_page2.onclick=function(){
    document.querySelector('.page1-promontion').classList.add('hidden');
    document.querySelector('.page2-promontion').classList.remove('hidden');
}
btn_page1.onclick=function(){
    document.querySelector('.page1-promontion').classList.remove('hidden');
    document.querySelector('.page2-promontion').classList.add('hidden');
}
