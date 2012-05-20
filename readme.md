# **jList** 
v1.1.0

##What does it do?
*jList* is a collection of functions that bring *ColdFusion*-style list handling to Javascript.  
A list is simply a string. What makes this string different (from any other string) is that it contains "delimiters". Delimiters (sometimes referred to as "separators") are used to separate each item in the list.    
For instance, the string "carrots,peas,lettuce,tomato" could be described as a "comma delimited" or "comma separated" list. Although commas are the most common delimiter for lists, any character can be used - "Monkey:Rabbit:Mouse:Elephant" is no less a list than the comma delimited list.
Once you start to use jList you will quickly realise that there are many situations where treating a string as a list is a simpler and more intuitive way to manipulate data than the built-in alternatives offered by Javascript. 
	
##What's included?
There are 4 files included with this package:   

- **readme.md**  
This file.

- **jlist-test.htm**      
A rough and ready test page showing all of the functions in action.

- **jlist.js**    
The Javascript source code of the library.

- **jlist-min.js**    
The Javascript source code minified using UglifyJS.  

For release [1.1.0](http://semver.org) there are 15 functions included. They are, in alphabetical order:

- **listAppend**  
Concatenates an element to a list.  
- **listDeleteAt**  
Deletes an element from a list.  
- **listFind**  
Determines the index of the first list element in which a specified value occurs. The search is case-sensitive.  
- **listFindNoCase**  
Determines the index of the first list element in which a specified value occurs. The search is case-insensitive.
- **listFirst**  
Gets the first element of a list.
- **listGetAt**  
Gets a list element at a specified position.
- **listInsertAt**  
Inserts an element into a list.
- **listLast**  
Gets the last element of a list.
- **listLen**  
Determines the number of elements in a list.
- **listPrepend**  
Inserts an element at the beginning of a list.
- **listQualify**  
Inserts a string at the beginning and end of list elements.
- **listRemoveDuplicates**  
Removes duplicate elements from a list. Matching is case-sensitive.
- **listRemoveDuplicatesNoCase**  
Removes duplicate elements from a list. Matching is not case-sensitive.
- **listRest**  
Gets a list, without its first element.
- **listReverse**  
Reverses the order of elements in a list.
- **listSetAt**  
Replaces the contents of a list element.
- **listSort**  
Sorts list elements according to a sort type and sort order.

More detailed documentation for each of these functions can be found later in this document.  
    
##Quick start
jList requires only that you include the *jlist.js* or *jlist-min.js* file in your source:

	<script src="jlist-min.js"></script>
	
Alternatively you may use a script loader such as LABjs or RequireJS or concatenate the file with one or more other Javascript files to improve loading times.
It's recommended that you use the minified version (*jlist-min.js*) in production to reduce the loading time. The original commented, pre-minification source is also included and you may find this more useful when debugging, making your own changes or just for learning.  
Once the script is loaded then invoking the function you want is simply a matter of prefixing the function with "jList.". The following example, which uses the listAppend and listSort functions, shows how:

	<script src="jlist-min.js"></script>
	<script>
		var l, l2;
   		l = "Susan,Janet,Steve,Bree,Michele,Jim,Mark,Elizabeth";
   		l = jList.listAppend(l, "David");
   		l2 = jList.listSort(l);
   		alert(l2);
	</script>
	
This will show an alert with the text "Bree,David,Elizabeth,Janet,Jim,Mark,Michele,Steve,Susan".

List processing is convenient for handling many strings that don't at first appear to be lists.  
For example, the URL "http://www.mysite.net/main.htm?id=1234" can be considered to be a list or, more usefully, a series of lists. To extract the top-level domain (tld) part (in this case the "net") we could think of the URL as a "dot delimited" list, within a "forward-slash delimited" list.  

	1.	var url = "http://www.mysite.net/main.htm?id=1234";
	2.	var url_part = jList.listGetAt(url,3,"/");  // returns 'www.mysite.net'
	3.	var tld = jList.listLast(url_part,".");  // returns 'net' 

In line 2 we grab the 3rd item in the list, using a delimiter of "/". In this case this is "www.mysite.net" because the first item is "http:" and the second item is empty. This is an important difference between this library and *ColdFusion* list processing - empty elements are not ignored in these functions. Notice also that we start counting the items from 1, not from zero.  
Once we have the third item stored in *url_part* (line 2) we can then treat this as a "dot delimited" list. Using the listLast function (line 3) to retrieve the rightmost item in the list but this time specifying "." as the delimiter will return "net" into the *tld* variable. 

##Browser compatibility
jList has been tested in the latest versions of:   

- Chrome
- Firefox
- Safari
- Opera
- Internet Explorer


##Licence
Copyright (c) 2012 David Waterston.

You may use this library under the terms of the MIT License, detailed below.
More information can be found at [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

##More
- *jList* is minified using [UglifyJS](http://marijnhaverbeke.nl/uglifyjs).
- Version numbers follow the [Semantic Versioning](http://semver.org) standard.
- The unminified version of the source validates clean in both [jsLint](http://jslint.com) and [jsHint](http://www.jshint.com).
- Written by David Waterston (<david@davidwaterston.com>)
- Github repository: [http://davidwaterston.github.com/jlist](http://davidwaterston.github.com/jlist)
- Developed using [Sublime Text 2](http://www.sublimetext.com/2), [CodeBox](http://www.shpakovski.com/codebox) and [CodeKit](http://incident57.com/codekit/).
- Documentation written in [Markdown](http://daringfireball.net/projects/markdown/) using [Byword](http://bywordapp.com/).
- Pushed to [GitHub](http://davidwaterston.github.com/jlist) using [Tower](http://www.git-tower.com). 
- Made in Scotland.

---

#Usage details

##listAppend  

**Description**  
Concatenates an element to a list.

**Function syntax**  
listAppend(list, value [, delimiter ])

**Returns**  
A copy of the list, with *value* appended.  

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| value | An element to be appended to *list* |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |  

**Usage**

jList inserts a delimiter character before *value*.  
The following table shows examples of *listAppend* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listAppend('elem1,elem2', 'rabbit' ) | elem1,elem2,rabbit |    
| jList.listAppend('','elem1,elem2') | elem1,elem2 |      
| jList.listAppend('cat-dog-mouse','hamster','-') | cat-dog-mouse-hamster |  

---

##listDeleteAt  

**Description**  
Deletes an element from a list.

**Function syntax**  
listDeleteAt(list, position [, delimiter ])

**Returns**  
A copy of the list, without the specified element.  

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| position | A positive integer or a variable that contains one. Position at which to delete element. The first list position is 1. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**

jList inserts a delimiter character before *value*.  
The following table shows examples of *listDeleteAt* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listDeleteAt('elem1,elem2,elem3',2) | elem1,elem3 |    
| jList.listDeleteAt('elem1,elem2',4) | elem1,elem2 |      
| jList.listDeleteAt('cat-dog-mouse',3,'-') | cat-dog |  

---

##listFind  

**Description**  
Determines the index of the first list element in which a specified value occurs. The search is case-sensitive.

**Function syntax**  
listFind(list, value [, delimiter ])

**Returns**  
The index of the first list element that contains *value*, with matching case. If not found, returns zero. The search is case-sensitive. 

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| value | A string, a number, or a variable that contains one. Item for which to search. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listFind* processing:  

| Statement | Output |  
| :-- | :-- |
| jList.listFind('elem1,elem2,elem3','elem3') | 3 |  
| jList.listFind('elem1,elem2,elem3','Elem3') | 0 |    
| jList.listFind('elem1,elem2','cat') | 0 |      
| jList.listFind('cat-dog--mouse','dog','-') | 2 |  
| jList.listFind('5-4-3-2-1',4,'-') | 2 |  

---

##listFindNoCase   

**Description**  
Determines the index of the first list element in which a specified value occurs. The search is case-insensitive.

**Function syntax**  
listFindNoCase(list, value [, delimiter ])

**Returns**  
The index of the first list element that contains *value*, with matching case. If not found, returns zero. The search is case-insensitive. 

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| value | A string, a number, or a variable that contains one. Item for which to search. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listFindNoCase* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listFindNoCase('elem1,elem2,elem3','elem3') | 3 |  
| jList.listFindNoCase('elem1,elem2,elem3','Elem3') | 3 |    
| jList.listFindNoCase('cat,dog','CAT') | 1 |      
| jList.listFindNoCase('Cat-Dog--Mouse','dog','-') | 2 |  
| jList.listFindNoCase('5-4-3-2-1',4,'-') | 2 |  

---

##listFirst   

**Description**  
Gets the first element of a list.

**Function syntax**  
listFirst(list, [, delimiter ])

**Returns**  
The first element of a list. If the list is empty, returns an empty string.  

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| value | A string, a number, or a variable that contains one. Item for which to search. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listFirst* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listFirst('elem1,elem2,elem3') | 'elem1' |  
| jList.listFirst('cat,dog','~') | 'cat,dog' |      
| jList.listFirst('Cat-Dog--Mouse','-') | 'Cat' |  
| jList.listFirst('5-4-3-2-1','-') | 5 |  

---

##listGetAt   

**Description**  
Gets a list element at a specified position.

**Function syntax**  
listGetAt(list, position, [, delimiter ])

**Returns**  
Value of the list element at position *position*. 

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| position | A positive integer or a variable that contains one. Position at which to get element. The first list position is 1. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listGetAt* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listGetAt('elem1,elem2,elem3',1) | 'elem1' |  
| jList.listGetAt('cat,dog',1,'~') | 'cat,dog' |      
| jList.listGetAt('Cat-Dog--Mouse',3,'-') | '' |  
| jList.listGetAt('5-4-3-2-1',5,'-') | 1 |  

---

##listInsertAt   

**Description**  
Inserts an element into a list.

**Function syntax**  
listInsertAt(list, position, value, [, delimiter ])

**Returns**  
A copy of the *list*, with *value* inserted at the specified *position*.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| position | A positive integer or a variable that contains one. Position at which to insert *value*. The first list position is 1. |  
| value | An element to be inserted |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listInsertAt* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listInsertAt('elem1,elem2,elem3',1,'hello') | 'hello,elem1,elem2,elem3' |   
| jList.listInsertAt('cat,dog',1,'monkey','~') | 'monkey~cat,dog' |  
| jList.listInsertAt('Cat-Dog--Mouse',3,'Elephant','-') | 'Cat-Dog-Elephant-Mouse' |    
| jList.listInsertAt('5-4-3-2-1',5,'999','-') | '5-4-3-2-999-1' |  

---

##listLast   

**Description**  
Gets the last element of a list.

**Function syntax**  
listLast(list [, delimiter ])

**Returns**  
The last element of the *list*.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listLast* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listLast('elem1,elem2,elem3') | 'elem3' |   
| jList.listLast('cat,dog','~') | 'cat,dog' |  
| jList.listLast('Cat-Dog--Mouse','-') | 'Mouse' |     

---

##listLen   

**Description**  
Determines the number of elements in a list.  

**Function syntax**  
listLen(list [, delimiter ])

**Returns**  
The number of elements in a list as an integer.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listLen* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listLen('elem1,elem2,elem3') | 3 |   
| jList.listLen('cat,dog','~') | 1 |  
| jList.listLen('Cat-Dog--Mouse','-') | 4 |     

---

##listPrepend   

**Description**  
Inserts an element at the beginning of a list.

**Function syntax**  
listPrepend(list, value [, delimiter ])

**Returns**  
A copy of the *list*, with *value* inserted at the first position.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| value | An element to be inserted at the beginning of *list*. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listPrepend* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listPrepend('elem1,elem2,elem3','elem99') | 'elem99,elem1,elem2,elem3' |   
| jList.listPrepend('cat,dog','mouse','~') | 'mouse~cat,dog' |  
| jList.listPrepend('Cat-Dog--Mouse','Rabbit','-') | 'Rabbit-Cat-Dog--Mouse' |   
| jList.listPrepend('','Rabbit','-') | 'Rabbit' |       

---

##listQualify   

**Description**  
Inserts a string at the beginning and end of all list elements.

**Function syntax**  
listQualify(list, qualifier [, delimiter ])

**Returns**  
A copy of the *list*, with *qualifier* before and after each element.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| qualifier | A string or a variable that contains one. Character or string to insert before and after the *list* elements. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listQualify* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listQualify('elem1,elem2,elem3','~') | '~elem1~,~elem2~,~elem3~' |   
| jList.listQualify('cat,dog','@','~') | '@cat,dog@' |  
| jList.listQualify('Cat-Dog--Mouse','$','-') | '$Cat$-$Dog$-$$-$Mouse$' |   

---

##listRemoveDuplicates   

**Description**  
Removes all duplicate elements from a list. Where an element matches one which appears earlier in the list it is removed. Matching is case-sensitive.

**Function syntax**  
listRemoveDuplicates(list, [, delimiter ])

**Returns**  
A copy of the *list*, with duplicate elements removed.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |    
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listRemoveDuplicates* processing:  

| Statement | Output |    
| :-- | :-- |   
| jList.listRemoveDuplicates('a,e,c,e,a,b,d') | 'a,e,c,b,d' |   
| jList.listRemoveDuplicates('a,f,c,d,A,f,C,d') | 'a,f,c,d,A,C' |   
| jList.listRemoveDuplicates('a~12~1~Z~C~A~A~a~12','~') | 'a~12~1~Z~C' |  
| jList.listRemoveDuplicates('1.1.1.1.1.1','.') | '1' |   
| jList.listRemoveDuplicates('12,3,4,1,12,4,6') | '12,3,4,1,6' |   

---

##listRemoveDuplicatesNoCase   

**Description**  
Removes all duplicate elements from a list. Where an element matches one which appears earlier in the list it is removed. Matching is not case-sensitive.

**Function syntax**  
listRemoveDuplicatesNoCase(list, [, delimiter ])

**Returns**  
A copy of the *list*, with duplicate elements removed.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |    
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listRemoveDuplicatesNoCase* processing:  

| Statement | Output |    
| :-- | :-- |   
| jList.listRemoveDuplicatesNoCase('a,e,c,e,a,b,d') | 'a,e,c,b,d' |   
| jList.listRemoveDuplicatesNoCase('a,f,c,d,A,f,C,d') | 'a,f,c,d' |   
| jList.listRemoveDuplicatesNoCase('a~12~1~Z~C','~') | 'a~12~1~Z~C' |  
| jList.listRemoveDuplicatesNoCase('1.1.1.1.1.1','.') | '1' |   
| jList.listRemoveDuplicatesNoCase('12,3,4,1,12,4,6') | '12,3,4,1,6' |   
| jList.listRemoveDuplicatesNoCase('cat,dog,rabbit,DOG,Rabbit') | 'cat,dog,rabbit' |   

---

##listRest   

**Description**  
Gets a list, without its first element.

**Function syntax**  
listRest(list [, delimiter ])

**Returns**  
A copy of *list*, without the first element. If *list* has one element, returns an empty list.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listRest* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listRest('elem1,elem2,elem3') |'elem2,elem3' |   
| jList.listRest('cat,dog','~') | '' |  
| jList.listRest('Cat-Dog--Mouse','-') | 'Dog--Mouse' |  

---

##listReverse   

**Description**  
Reverses the order of elements in a list.

**Function syntax**  
listReverse(list [, delimiter ])

**Returns**  
A copy of *list*, with the order of the elements reversed.  

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listReverse* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listReverse('elem1,elem2,elem3') |'elem3,elem2,elem1' |   
| jList.listReverse('cat,dog','~') | 'cat,dog' |  
| jList.listReverse('Cat-Dog--Mouse','-') | 'Mouse--Dog-Cat' |  

---

##listSetAt   

**Description**  
Replaces the contents of a list element.

**Function syntax**  
listSetAt(list, position, value [, delimiter ])

**Returns**  
A copy of *list*, with a new *value* assigned to the element at a specified *position*.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| position | A positive integer or a variable that contains one. Position at which to set a value. The first list position is 1. |  
| value | An element to be injected into *list*. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listSetAt* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listSetAt('elem1,elem2,elem3',1,'elem99') | 'elem99,elem1,elem2,elem3' |   
| jList.listSetAt('cat,dog',2,'hamster','~') | 'cat,dog,hamster' |  
| jList.listSetAt('Cat-Dog--Mouse',3,'Hamster','-') | 'Cat-Dog-Hamster-Mouse' |  

---

##listSort   

**Description**  
Sorts list elements according to a sort type and sort order.  

**Function syntax**  
ListSort(list, sort_type [, sort_order, delimiter ])

**Returns**  
A copy of a *list*, sorted.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| sort_type | numeric: sorts numbers |  
| &nbsp; | alpha:   sorts text alphabetically. Case sensistive. |
| sort_order | asc - ascending sort order. This is the default. |  
| &nbsp; | desc - descending sort order. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listSort* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listSort('a,e,c,b,d') | 'a,b,c,d,e' |   
| jList.listSort('a,f,c,d,A,C') | 'A,C,a,c,d,f' |  
| jList.listSort('a~12~1~Z~C','alpha','asc','~') | 'a~Z~C~12~1' |    
| jList.listSort('12,3,4,1,55,5,6','alpha','asc') | '1,12,3,4,5,55,6' |   
| jList.listSort('12,3,4,1,55,5,6','numeric','asc') | '1,3,4,5,6,12,55' |   

---

#Version History

| Version | Release Date | Details |   
| :-- | :-- | :-- |    
| 1.1.0 | 18th May, 2012 | Added two new functions - *listRemoveDuplicates* and *listRemoveDuplicatesNoCase*.|
| &nbsp; | &nbsp; | Updated sample code and documentation. |  
| &nbsp; | &nbsp; | Added this version history. |     
| 1.0.0 | 15th May, 2012 | Initial release. |    



      
