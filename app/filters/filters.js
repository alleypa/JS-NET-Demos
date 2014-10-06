
(function () {

    'use strict';  

    angular
        .module('app.filter')
        .filter("unique", uniqueNess)
        .filter("range", range)
        .filter("pageCount", pageCount);

    function uniqueNess() {

        return function (data, propertyName) {

            if (angular.isArray(data) && angular.isString(propertyName)) {
                
                var i, val,
                    results = [],
                    keys = {};

                for (i = 0; i < data.length; i += 1) {
                    val = data[i][propertyName];

                    if(angular.isUndefined(keys[val])){ // this is done here to evaluate uniqueness in category
                        keys[val] = true;
                        results.push(val);
                    }
                }

                return results;
            }
            return data;            
        };
    }

    range.$inject = ['$filter'];
    function range($filter) {

        return function (data, page, size) {

            if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
                
                var start_index = (page - 1) * size;

                if (data.length < start_index) {
                    return [];
                }
                               
                return $filter("limitTo")(data.splice(start_index), size);
            }
            return data;
        };
    }

    function pageCount() {

        return function (data, size) {

            if (angular.isArray(data)) {
                var i,
                    result = [];

                for (i = 0; i < Math.ceil(data.length / size); i += 1) {
                    result.push(i);
                }

                return result;                   
            }
            return data;
        };

        /*
            This function returns an array that contains the number of 
            pages the data array(filtered one) can be displayed. So if
            data array is [1, 2, 3, 4, 5, 6] and we want to show 2 contents
            at a time. Then data.length/2 = 3pgs. i.e. pg1 = [1,2], pg2 = [3, 4]
            pg 3 = [5, 6]. This is based on Math.ceil and also cater for odd divisions
        */
    }
}());



//var x = [];
//x.splice(); // count number to delete from the number start (zero based). modify source
//x.slice(); 

/* Range Algorithm ([a, b, c, d, e, f, g, h, i, j] ~ these represent the products
say page 1 selected = (1-1) * 3 = 0; data.splice(0) returns [a, b, c, d, e, f, g, h, i, j] firs view is [a, b, c] based on size 3
""  ""   2 selected = (2-1) * 3 = 3; data.splice(3) returns [d, e, f, g, h, i, j] first view is [d, e, f] based on size 3
""  ""   3 selected = (3-1) * 3 = 6; data.slicke(6) returns [g, h, i, j] first view is [g, h, i, j]  based on size 3
*/