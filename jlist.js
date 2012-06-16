/*
    Title: jlist.js
    Version: 1.3.0 (Semantic versioning: http://semver.org)
    Last update: 16th June, 2012
    Written by: David Waterston (david@davidwaterston.com)
    Github repository and documentation: http://davidwaterston.github.com/jlist

    Description:
    A small, lightweight file that adds list handling functions to Javascript.

    Quick start:
    For a detailed explanation of each of functions available refer to the documentation in the file jlist-info.md that is included in the
    package in the github repository.

    JSLint & JSHint Quality Checking:
    This library passes all JSLint (http://www.javascriptlint.com) and JSHint (http://jshint.com) tests.

    Licence:
    Copyright (c) 2012 David Waterston. Made in Scotland.
    You may use this library under the terms of the MIT License, detailed below.
    More information can be found at http://www.opensource.org/licenses/mit-license.php.

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
    (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,
    publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to
    do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
    IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var jList = (function () {

    "use strict";

    function numberCompareAsc(a, b) {
        return a - b;
    }

    function numberCompareDesc(a, b) {
        return b - a;
    }

    function quoteString(str) {
        return str.replace(/([.?*+\^$\[\]\\(){}\-])/g, "\\$1");
    }



    return {

        listLen : function (list, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            if (list === "") {
                return 0;
            }
            return list.split(delimiter).length;
        },


        listFind : function (list, value, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            var i,
                arr = list.split(delimiter);

            if (arr.indexOf !== undefined) {
                return arr.indexOf(value) + 1;
            }

            for (i = 0; i < list.length; i += 1) {
                if (arr[i] === value) {
                    return i + 1;
                }
            }

            return 0;
        },


        listFindNoCase : function (list, value, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            list = list.toUpperCase();
            value = String(value).toUpperCase();

            return this.listFind(list, value, delimiter);
        },


        listGetAt : function (list, position, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            var arr = list.split(delimiter);
            if (position >= 1 && position <= arr.length) {
                return arr[position - 1];
            }
            return "";
        },


        listFirst : function (list, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            return this.listGetAt(list, 1, delimiter);
        },


        listLast : function (list, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            return this.listGetAt(list, this.listLen(list, delimiter), delimiter);
        },


        listRest : function (list, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            var arr = list.split(delimiter);

            arr.splice(0, 1);
            return arr.join(delimiter);
        },


        listSetAt : function (list, position, value, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            if (list === '') {
                if (position === 1) {
                    return value;
                }
                return '';
            }

            var arr = list.split(delimiter);

            if (position >= 1 && position <= arr.length) {
                arr[position - 1] = value;
                return arr.join(delimiter);
            }
            return list;
        },


        listDeleteAt : function (list, position, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            var arr = list.split(delimiter);

            if (position >= 1 && position <= arr.length) {
                arr.splice(position - 1, 1);
                return arr.join(delimiter);
            }
            return list;
        },


        listPrepend : function (list, value, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            return value + (list !== "" ? (delimiter + list) : "");
        },


        listAppend : function (list, value, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            return (list !== "" ? (list + delimiter) : "") + value;
        },


        listInsertAt : function (list, position, value, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            if (list === '') {
                if (position === 1) {
                    return value;
                }
                return '';
            }

            var arr = list.split(delimiter);
            if (position >= 1 && position <= arr.length) {
                arr.splice(position - 1, 0, value);
                return arr.join(delimiter);
            }

            return list;
        },


        listSort : function (list, sort_type, sort_order, delimiter) {
            sort_type = (typeof sort_type === "undefined") ? "alpha" : sort_type.toLowerCase();
            sort_order = (typeof sort_order === "undefined") ? "asc" : sort_order.toLowerCase();
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            sort_type = sort_type.toLowerCase();
            sort_order = sort_order.toLowerCase();

            var arr = list.split(delimiter);

            if (sort_type === "alpha") {
                arr.sort();
                if (sort_order === "desc") {
                    arr.reverse();
                }
            } else {
                if (sort_order === "asc") {
                    arr.sort(numberCompareAsc);
                } else {
                    arr.sort(numberCompareDesc);
                }
            }

            return arr.join(delimiter);
        },


        listQualify : function (list, qualifier, delimiter) {
            qualifier = (typeof qualifier === "'") ? "," : qualifier;
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            if (list === '') {
                return list;
            }

            var arr = list.split(delimiter),
                i = arr.length - 1;

            while (i >= 0) {
                arr[i] = qualifier + arr[i] + qualifier;
                i -= 1;
            }

            return arr.join(delimiter);
        },


        listReverse : function (list, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            var arr = list.split(delimiter);

            arr.reverse();
            return arr.join(delimiter);
        },


        listRemoveDuplicates : function (list, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            var arr = list.split(delimiter),
                i,
                id,
                len = arr.length,
                out = [],
                obj = {};

            for (i = 0; i < len; i += 1) {
                id = arr[i];
                if (!obj[id]) {
                    obj[id] = {};
                    out.push(id);
                }
            }
            return out.join(delimiter);
        },


        listRemoveDuplicatesNoCase : function (list, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            var arr = list.split(delimiter),
                i,
                id,
                len = arr.length,
                idUpper,
                out = [],
                obj = {};

            for (i = 0; i < len; i += 1) {
                id = arr[i];
                idUpper = id.toUpperCase();
                if (!obj[idUpper]) {
                    obj[idUpper] = {};
                    out.push(id);
                }
            }

            return out.join(delimiter);
        },


        listChangeDelims : function (list, new_delimiter, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;
            var re = new RegExp(quoteString(delimiter), "g");

            return list.replace(re, new_delimiter);
        },


        listValueCount : function (list, value, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            value = String(value);

            var arr = list.split(delimiter),
                i = arr.length,
                matchCount = 0;

            while (i) {
                i -= 1;
                if (arr[i] === value) {
                    matchCount += 1;
                }
            }

            return matchCount;
        },


        listValueCountNoCase : function (list, value, delimiter) {
            delimiter = (typeof delimiter === "undefined") ? "," : delimiter;

            list = list.toUpperCase();
            value = String(value).toUpperCase();

            return this.listValueCount(list, value, delimiter);
        }


    };

}());