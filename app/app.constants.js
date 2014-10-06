
(function () {

    'use strict';

    angular
        .module("sportsStore")
        .constant("productListActiveClass", "btn-primary")
        .constant("productListPageCount", 3)
        .constant("dataUrl", "https://api.parse.com/1/classes/Products")
}());


/*
    To similuate an error change to this "https://api.parse.com/5/classes/Products" 
    then status 404 will be returned. Though not working as expected. I needed to change the 
    header parameters...

*/