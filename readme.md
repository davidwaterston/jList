# **jList** 
v1.6.0

##What does it do?
*jList* is a collection of functions that bring *ColdFusion*-style list handling to Javascript.  
A list is simply a string. What makes this string different (from any other string) is that it contains "delimiters". Delimiters (sometimes referred to as "separators") are used to separate each item in the list.    
For instance, the string "carrots,peas,lettuce,tomato" could be described as a "comma delimited" or "comma separated" list. Although commas are the most common delimiter for lists, any character can be used - "Monkey:Rabbit:Mouse:Elephant" is no less a list than the comma delimited list.
Once you start to use jList you will quickly realise that there are many situations where treating a string as a list is a simpler and more intuitive way to manipulate data than the built-in alternatives offered by Javascript. 
	
##What's included?
There are 12 files included with this package. The first, and most important,  four are:   

- **readme.md**  
This file.

- **jlist-examples.htm**      
Examples of each of the functions in action.

- **jlist.js**    
The Javascript source code of the library.

- **jlist-min.js**    
The Javascript source code minified using UglifyJS.  

The next seven files are part of a comprehensive *Jasmine* test suite that allows modifications to the library to be quickly and easily regression tested. They are:

- **test.htm**  
Open this file in a browser to run the *Jasmine* test suite against the regular version of the library, jlist.js.

- **test minimised version.htm**      
Open this file in a browser to run the *Jasmine* test suite against the minified version of the library, jlist-min.js.

- **jlist-spec.js**  
The test suite specifications - these are the actual tests that are run by opening either of the preceding two files.

- **jasmine-html.js**, **jasmine.css**, **jasmine,js** and **MIT.LICENSE**  
These are the files required by *Jasmine*. They were not written by me and are subject to a separate licence.

Finally, there is:

- **codekit-config.json**  
A configuration file for the project for users of [CodeKit](http://incident57.com/codekit/) on the Mac. If you don't use CodeKit (and you're probably wasting a lot of development time if you don't) then you can safely ignore this file. Otherwise,  when adding the project to CodeKit it will pick up these settings automatically.
  
    

For this release there are 30 functions included. They are, in alphabetical order:

- **[listAppend](#listAppend)**  
Concatenates an element to a list.  
- **[listChangeDelims](#listChangeDelims)**   
Changes a list delimiter.
- **[listConcatenate](#listConcatenate)**   
Adds one list to the end of another.
- **[listContains](#listContains)**  
Determines the index of the first list element that contains a specified substring.  
The search is case-sensitive.
- **[listContainsNoCase](#listContainsNoCase)**  
Determines the index of the first list element that contains a specified substring.  
The search is not case-sensitive.
- **[listDeleteAt](#listDeleteAt)**  
Deletes an element from a list.  
- **[listDifference](#listDifference)**  
Gets the elements that are unique to two different lists.  
- **[listFind](#listFind)**  
Determines the index of the first list element in which a specified value occurs. The search is case-sensitive.  
- **[listFindNoCase](#listFindNoCase)**  
Determines the index of the first list element in which a specified value occurs. The search is case-insensitive.
- **[listFirst](#listFirst)**  
Gets the first element of a list.
- **[listGetAt](#listGetAt)**  
Gets a list element at a specified position.
- **[listInsertAt](#listInsertAt)**  
Inserts an element into a list.
- **[listIntersection](#listIntersection)**  
Gets the elements that are common to two different lists.
- **[listLast](#listLast)**  
Gets the last element of a list.
- **[listLen](#listLen)**  
Determines the number of elements in a list.
- **[listPrepend](#listPrepend)**  
Inserts an element at the beginning of a list.
- **[listQualify](#listQualify)**  
Inserts a string at the beginning and end of list elements.
- **[listRemove](#listRemove)**  
Removes elements in one list from another list. Matching is case-sensitive.
- **[listRemoveNoCase](#listRemoveNoCase)**  
Removes elements in one list from another list. Matching is not case-sensitive.
- **[listRemoveDuplicates](#listRemoveDuplicates)**  
Removes duplicate elements from a list. Matching is case-sensitive.
- **[listRemoveDuplicatesNoCase](#listRemoveDuplicatesNoCase)**  
Removes duplicate elements from a list. Matching is not case-sensitive.
- **[listReplace](#listReplace)**  
Replaces instances of one element in a list with another element. Matching is case-sensitive.
- **[listReplaceNoCase](#listReplaceNoCase)**  
Replaces instances of one element in a list with another element. Matching is not case-sensitive.
- **[listRest](#listRest)**  
Gets a list, without its first element.
- **[listReverse](#listReverse)**  
Reverses the order of elements in a list.
- **[listSetAt](#listSetAt)**  
Replaces the contents of a list element.
- **[listSort](#listSort)**  
Sorts list elements according to a sort type and sort order.
- **[listUnion](#listUnion)**  
Gets the elements that two lists have in common.
- **[listValueCount](#listValueCount)**   
Counts the instances of a specified value in a list. The search is case-sensitive.    
- **[listValueCountNoCase](#listValueCountNoCase)**    
Counts the instances of a specified value in a list. The search is not case-sensitive.   

More detailed documentation for each of these functions can be found later in this document.  
    
##Quick start
jList requires only that you include the *jlist.js* or *jlist-min.js* file in your source:

	<script src="jlist-min.js"></script>
	
Alternatively you may use a script loader such as LABjs or RequireJS or concatenate the file with one or more other Javascript files to improve loading times.
It's recommended that you use the minified version (*jlist-min.js*) in production to reduce the loading time. The original, commented, pre-minification source is also included and you may find this more useful when debugging, making your own changes or just for learning.  
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
- The unminified version of the source validates clean in [jsLint (Edition 2012-08-23)](http://jslint.com).
- Written by [David Waterston] (http://dvolvr.davidwaterston.com)
- Github repository: [http://davidwaterston.github.com/jList](http://davidwaterston.github.com/jList)
- Planning and task management in [Trello](https://trello.com/board/jlist/504b80ff3a6c80626f306215)
- Developed using [Sublime Text 2](http://www.sublimetext.com/2), [CodeBox](http://www.shpakovski.com/codebox) and [CodeKit](http://incident57.com/codekit/).
- Tested using [Jasmine 1.2.0](http://pivotal.github.com/jasmine).
- Documentation written in [Markdown](http://daringfireball.net/projects/markdown/) using [Byword](http://bywordapp.com/).
- Pushed to [GitHub](http://davidwaterston.github.com/jlist) using [Tower](http://www.git-tower.com). 
- Made in Scotland.

---

#Usage details

<a name="listAppend"></a>
##listAppend  

**Description**  
Concatenates an element to a list.  

**Availability**  
v1.0

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
| jList.listAppend('elem1,elem2','') | elem1,elem2, |
| jList.listAppend('','elem1,elem2') | elem1,elem2 |
| jList.listAppend('cat-dog-mouse','hamster','-') | cat-dog-mouse-hamster |

**jsFiddle**

[http://jsfiddle.net/davidwaterston/KDNUf](http://jsfiddle.net/davidwaterston/KDNUf)

---

<a name="listChangeDelims"></a>
##listChangeDelims  

**Description**  
Changes a list delimiter.

**Availability**    
v1.3  

**Function syntax**  
listChangeDelims(list, new_delimiter [, delimiter ])

**Returns**  
A copy of the list, with the *delimiter* character replaced by *new_delimiter*.  

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| new_delimiter | Delimiter string or a variable that contains one. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |  

**Usage**  
 
The following table shows examples of *listChangeDelims* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listChangeDelims('a,e,c,b,d', '=') | a=e=c=b=d |    
| jList.listChangeDelims('a.e.c.b.d', ',', '.') | a,e,c,b,d |      
| jList.listChangeDelims('a,e,c,b,d','-','!') | a,e,c,b,d |  
| jList.listChangeDelims('a,e,c,b,d','-',',') | a-e-c-b-d |  

**jsFiddle**

[http://jsfiddle.net/davidwaterston/uvvHF](http://jsfiddle.net/davidwaterston/uvvHF)

---

<a name="listConcatenate"></a>
##listConcatenate  

**Description**  
Adds one list to the end of another.  

**Availability**  
v1.6

**Function syntax**  
listConcatenate(list1, list2 [, delimiter ])

**Returns**  
A new list, with *list2* concatenated to *list1*.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list1 | A list or a variable that contains one. |   
| list2 | A list or a variable that contains one. |   
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |  

**Usage**

If both *list1* and *list2* are not empty, jList inserts a delimiter character between *list1* and *list2*.  
The following table shows examples of *listConcatenate* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listConcatenate('elem1,elem2', 'rabbit,dog' ) | elem1,elem2,rabbit,dog |
| jList.listConcatenate('elem1,elem2','') | elem1,elem2 |
| jList.listConcatenate('','elem1,elem2') | elem1,elem2 |
| jList.listConcatenate('cat-dog-mouse','hamster','-') | cat-dog-mouse-hamster |

**jsFiddle**

[http://jsfiddle.net/davidwaterston/KDNUf](http://jsfiddle.net/davidwaterston/KDNUf)

---

<a name="listContains"></a>
##listContains  

**Description**  
Determines the index of the first list element that contains a specified substring. The search is case-sensitive.

**Availability**    
v1.5.0  

**Function syntax**  
listContains(list, substring [, delimiter ])

**Returns**  
Index of the first list element that contains *substring*. If not found, returns zero.  

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| substring | A string or a variable that contains one. Item for which to search. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |  

**Usage**  
 
The following table shows examples of *listContains* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listContains('cat,dog,mouse,rabbit,dog', 'og') | 2 |    
| jList.listContains('cat.dog.mouse.rabbit.dog', 'og', '.') | 2 |      
| jList.listContains('cat,dog,mouse,rabbit,dog', 'OG') | 0 |  
| jList.listContains('cat.dog.mouse.rabbit.dog', 'Rab', '.') | 0 |  
| jList.listContains('cat,dog,mouse,rabbit,dog', 'tr') | 0 |  

**jsFiddle**

[http://jsfiddle.net/davidwaterston/mjJ2n](http://jsfiddle.net/davidwaterston/mjJ2n)  
  
---

<a name="listContainsNoCase"></a>
##listContainsNoCase  

**Description**  
Determines the index of the first list element that contains a specified substring. The search is not case-sensitive.

**Availability**    
v1.5.0  

**Function syntax**  
listContainsNoCase(list, substring [, delimiter ])

**Returns**  
Index of the first list element that contains *substring*. If not found, returns zero.  

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |   
| substring | A string or a variable that contains one. Item for which to search. |  
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |  

**Usage**  
 
The following table shows examples of *listContainsNoCase* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listContainsNoCase('cat,dog,mouse,rabbit,dog', 'og') | 2 |    
| jList.listContainsNoCase('cat.dog.mouse.rabbit.dog', 'og', '.') | 2 |      
| jList.listContainsNoCase('cat,dog,mouse,rabbit,dog', 'OG') | 2 |  
| jList.listContainsNoCase('cat.dog.mouse.rabbit.dog', 'Rab', '.') | 4 |  
| jList.listContains('cat,dog,mouse,rabbit,dog', 'tr') | 0 | 

**jsFiddle**

[http://jsfiddle.net/davidwaterston/ku4rP](http://jsfiddle.net/davidwaterston/ku4rP)  

---

<a name="listDeleteAt"></a>
##listDeleteAt  

**Description**  
Deletes an element from a list.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/j6pEP](http://jsfiddle.net/davidwaterston/j6pEP)  

---

<a name="listFind"></a>
##listFind  

**Description**  
Determines the index of the first list element in which a specified value occurs. The search is case-sensitive.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/LAfBn](http://jsfiddle.net/davidwaterston/LAfBn)

---

<a name="listFindNoCase"></a>
##listFindNoCase   

**Description**  
Determines the index of the first list element in which a specified value occurs. The search is case-insensitive.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/TXt2T](http://jsfiddle.net/davidwaterston/TXt2T)

---

<a name="listFirst"></a>
##listFirst   

**Description**  
Gets the first element of a list.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/FEQWc](http://jsfiddle.net/davidwaterston/FEQWc) 

---

<a name="listGetAt"></a>
##listGetAt   

**Description**  
Gets a list element at a specified position.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/7khW6](http://jsfiddle.net/davidwaterston/7khW6)  

---

<a name="listInsertAt"></a>
##listInsertAt    

**Description**  
Inserts an element into a list.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/9D26p](http://jsfiddle.net/davidwaterston/9D26p)  

---

<a name="listLast"></a>
##listLast   

**Description**  
Gets the last element of a list.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/BbLD8](http://jsfiddle.net/davidwaterston/BbLD8)  

---

<a name="listLen"></a>
##listLen   

**Description**  
Determines the number of elements in a list.  

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/Uz4P2](http://jsfiddle.net/davidwaterston/Uz4P2) 

---

<a name="listPrepend"></a>
##listPrepend   

**Description**  
Inserts an element at the beginning of a list.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/n8AXz](http://jsfiddle.net/davidwaterston/n8AXz)  

---

<a name="listQualify"></a>
##listQualify   

**Description**  
Inserts a string at the beginning and end of all list elements.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/ArLh9](http://jsfiddle.net/davidwaterston/ArLh9)  

---

<a name="listRemoveDuplicates"></a>
##listRemoveDuplicates   

**Description**  
Removes all duplicate elements from a list. Where an element matches one which appears earlier in the list it is removed. Matching is case-sensitive.

**Availability**  
v1.1  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/qHvHg](http://jsfiddle.net/davidwaterston/qHvHg) 

---

<a name="listRemoveDuplicatesNoCase"></a>
##listRemoveDuplicatesNoCase   

**Description**  
Removes all duplicate elements from a list. Where an element matches one which appears earlier in the list it is removed. Matching is not case-sensitive.

**Availability**  
v1.1  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/8NpEY](http://jsfiddle.net/davidwaterston/8NpEY)

---

<a name="listRest"></a>
##listRest   

**Description**  
Gets a list, without its first element.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/Q6Hh4](http://jsfiddle.net/davidwaterston/Q6Hh4)  

---

<a name="listReverse"></a>
##listReverse   

**Description**  
Reverses the order of elements in a list.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/vsmXu](http://jsfiddle.net/davidwaterston/vsmXu)  

---

<a name="listSetAt"></a>
##listSetAt   

**Description**  
Replaces the contents of a list element.

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/CTN2w](http://jsfiddle.net/davidwaterston/CTN2w) 

---

<a name="listSort"></a>
##listSort   

**Description**  
Sorts list elements according to a sort type and sort order.  

**Availability**  
v1.0  

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

**jsFiddle**

[http://jsfiddle.net/davidwaterston/ff2zy](http://jsfiddle.net/davidwaterston/ff2zy)

---


<a name="listValueCount"></a>
##listValueCount   

**Description**  
Counts instances of a specified value in a list. The search is case-sensitive.    

**Availability**  
v1.3  

**Function syntax**  
listValueCount(list, value [, delimiter ])  

**Returns**  
The number of instances of *value* in the list.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| value | Item for which to search. Can be a string or number, or a variable that contains one. The search is case-sensitive. |   
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listValueCount* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listValueCount('a,e,a,c,a,b,a,d', 'a') | 4 |   
| jList.listValueCount('a,e,a,c,a,b,a,d', 'A') | 0 |   
| jList.listValueCount('a,e,A,c,a,b,A,d', 'A') | 2 |   
| jList.listValueCount('a;e;A;c;a;b;A;d', 'A') | 0 |   
| jList.listValueCount('a;e;A;c;a;b;A;d', 'A', ';') | 2 |   
| jList.listValueCount('John,Mark,Steve,Alan,John,john', 'john') | 1 |   
| jList.listValueCount('1,2,3,1,2,3', 3) | 2 |   
| jList.listValueCount('1,2,3,1,2,3', '3') | 2 |    

**jsFiddle**

[http://jsfiddle.net/davidwaterston/WPyED](http://jsfiddle.net/davidwaterston/WPyED)  

---

<a name="listValueCountNoCase"></a>
##listValueCountNoCase   

**Description**  
Counts instances of a specified value in a list. The search is not case-sensitive.    

**Availability**  
v1.3  

**Function syntax**  
listValueCountNoCase(list, value [, delimiter ])  

**Returns**  
The number of instances of *value* in the list.

**Parameters**   

| Parameter | Description |  
| :--------- | :---------- |  
| list | A list or a variable that contains one. |  
| value | Item for which to search. Can be a string or number, or a variable that contains one. The search is not case-sensitive. |   
| delimiter | A string or a variable that contains one. The character that separates list elements. The default value is comma. |   

**Usage**
 
The following table shows examples of *listValueCountNoCase* processing:

| Statement | Output |  
| :-- | :-- |
| jList.listValueCountNoCase('a,e,a,c,a,b,a,d', 'a') | 4 |   
| jList.listValueCountNoCase('a,e,a,c,a,b,a,d', 'A') | 4 |   
| jList.listValueCountNoCase('a,e,A,c,a,b,A,d', 'A') | 4 |   
| jList.listValueCountNoCase('a;e;A;c;a;b;A;d', 'A') | 0 |   
| jList.listValueCountNoCase('a;e;A;c;a;b;A;d', 'A', ';') | 4 |   
| jList.listValueCountNoCase('John,Mark,Steve,Alan,John,john', 'john') | 3 |   
| jList.listValueCountNoCase('1,2,3,1,2,3', 3) | 2 |   
| jList.listValueCountNoCase('1,2,3,1,2,3', '3') | 2 |    

**jsFiddle**

[http://jsfiddle.net/davidwaterston/4gVnX](http://jsfiddle.net/davidwaterston/4gVnX)

---


#jsFiddle
In addition to the examples included in the file *jlist-test.htm*, all functions are available in *jsFiddle* for ad-hoc testing:  
  
[Full list of *fiddles*](http://jsfiddle.net/user/davidwaterston/fiddles)  
  
[listAppend](http://jsfiddle.net/davidwaterston/KDNUf)  
[listChangeDelims](http://jsfiddle.net/davidwaterston/uvvHF)  
[listContains](http://jsfiddle.net/davidwaterston/mjJ2n)  
[listContainsNoCase](http://jsfiddle.net/davidwaterston/ku4rP)  
[listDeleteAt](http://jsfiddle.net/davidwaterston/j6pEP)  
[listFind](http://jsfiddle.net/davidwaterston/LAfBn)  
[listFindNoCase](http://jsfiddle.net/davidwaterston/TXt2T)  
[listFirst](http://jsfiddle.net/davidwaterston/FEQWc)  
[listGetAt](http://jsfiddle.net/davidwaterston/7khW6)  
[listInsertAt](http://jsfiddle.net/davidwaterston/9D26p)  
[listLast](http://jsfiddle.net/davidwaterston/BbLD8)  
[listLen](http://jsfiddle.net/davidwaterston/Uz4P2)  
[listPrepend](http://jsfiddle.net/davidwaterston/n8AXz)  
[listQualify](http://jsfiddle.net/davidwaterston/ArLh9)  
[listRemoveDuplicates](http://jsfiddle.net/davidwaterston/qHvHg)  
[listRemoveDuplicatesNoCase](http://jsfiddle.net/davidwaterston/8NpEY)  
[listRest](http://jsfiddle.net/davidwaterston/Q6Hh4)  
[listReverse](http://jsfiddle.net/davidwaterston/vsmXu)  
[listSetAt](http://jsfiddle.net/davidwaterston/CTN2w)  
[listSort](http://jsfiddle.net/davidwaterston/ff2zy)  
[listValueCount](http://jsfiddle.net/davidwaterston/WPyED)  
[listValueCountNoCase](http://jsfiddle.net/davidwaterston/4gVnX)  

#Version History

| Version | Release Date | Details |   
| :-- | :-- | :-- |    
| 1.5.0 | 10th September, 2012 | Added two new functions - *[listContains](#listContains)*  and *[listContainsNoCase](#listContainsNoCase)*. |
| 1.4.1 | 8th September, 2012 | Bug fix to *[listFind](#listFind)* (and indirectly *[listFindNoCase](#listFindNoCase)* to resolve a problem with older (pre-9) versions of Internet Explorer. |
| 1.4.0 | 3rd September, 2012 | Added extra parameter checking to each function, replaced 'typeof undefined' checks with '=== undefined' to ensure compatibility with jsLint Edition 2012-08-23. Added the *Jasmine* test suite with 250 tests. |
| 1.3.0 | 16th June, 2012 | Added three new functions - *[listChangeDelims](#listChangeDelims)*, *[listValueCount](#listValueCount)* and *[listValueCountNoCase](#listValueCountNoCase)*. |
| 1.2.0 | 21st May, 2012 | Minor changes to *[listRemoveDuplicates](#listRemoveDuplicates)* and *[listRemoveDuplicatesNoCase](#listRemoveDuplicatesNoCase)* to improve performance with larger lists (100,000+ elements). |
| 1.1.0 | 18th May, 2012 | Added two new functions - *[listRemoveDuplicates](#listRemoveDuplicates)* and *[listRemoveDuplicatesNoCase](#listRemoveDuplicatesNoCase)*.|
| &nbsp; | &nbsp; | Updated sample code and documentation. |  
| &nbsp; | &nbsp; | Added this version history. |     
| 1.0.0 | 15th May, 2012 | Initial release. |  

#Future Plans

Current and planned work for jList is public and detailed in [Trello](https://trello.com/board/jlist/504b80ff3a6c80626f306215).



      
