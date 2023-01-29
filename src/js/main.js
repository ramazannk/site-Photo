import modal from "./modules/modal";
import slide from "./modules/slider";
import forms from "./modules/form";
import mask from "./modules/mask";
import moreStyle from "./modules/moreStyle";
import calc from "./modules/calc";
import test from "./modules/test";
import filter from "./modules/filter";
import imgSize from "./modules/imgSize";
import moreDetal from "./modules/moreDetal";
import burger from "./modules/burger";
window.addEventListener('DOMContentLoaded', ()=>{
    
    modal();
    slide();
    forms();
    mask('[name="phone"]');
    moreStyle('.button-styles', '.styles .row');
    // calc();
    test();
    filter();
    imgSize();
    moreDetal('.accordion-block','.accordion-heading ');
    burger();

});