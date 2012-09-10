describe( 'jList library v1.5.0', function () {  

  describe('Public interfaces', function () {

    it('01. Is defined as an object', function () {
        expect( typeof jList ).toEqual('object');
    });

    var functionList = [
        'listAppend',
        'listContains',
        'listContainsNoCase',
        'listChangeDelims',
        'listDeleteAt',
        'listFind',
        'listFindNoCase',
        'listFirst',
        'listGetAt',
        'listInsertAt',
        'listLast',
        'listLen',
        'listPrepend',
        'listQualify',
        'listRemoveDuplicates',
        'listRemoveDuplicatesNoCase',
        'listRest',
        'listReverse',
        'listSetAt',
        'listSort',
        'listValueCount',
        'listValueCountNoCase'
    ];

    var functionName,
          i,
          len = functionList.length,
          testNo = 1;

     for ( i=0; i < len; i += 1 ) {

        testNo++;
        testNo = ('0' + testNo).slice (-2);
        functionName = functionList[i];

        it(testNo + '. Has a public function named ' + functionName, function () {
            expect( typeof( jList[functionName] ) ).toBe('function');
        });   
             
    } 

    it(testNo + '. Does not allow public access to the private function named numberCompareAsc', function () {
        expect( jList.numberCompareAsc ).not.toBeDefined();
    });

    it(testNo + '. Does not allow public access to the private function named numberCompareDesc', function () {
        expect( jList.numberCompareDesc ).not.toBeDefined();
    });

    it(testNo + '. Does not allow public access to the private function named quoteString', function () {
        expect( jList.quoteString ).not.toBeDefined();
    });

  });


  describe( 'listAppend: Concatenates an element to a list.', function () {  

    it ('01. Throws an error when no parameters are passed in', function () {  
        expect( function(){ jList.listAppend(); } ).toThrow('Missing parameter: list and value must be provided');  
    }); 

    it ('02. Throws an error when only 1 parameter is passed in', function () {  
        expect( function(){ jList.listAppend('cat,dog'); } ).toThrow('Missing parameter: list and value must be provided');  
    }); 

    it ('03. Concatenates an element to an empty list that uses the default delimiter', function () {  
        expect( jList.listAppend('', 'rabbit') ).toEqual('rabbit');  
    }); 

    it ('04. Concatenates an element to a list  that uses the default delimiter and is populated with a single element', function () {  
        expect( jList.listAppend('cat', 'rabbit') ).toEqual('cat,rabbit');  
    }); 

    it ('05. Concatenates an element to a list  that uses the default delimiter and is populated with multiple elements', function () {  
        expect( jList.listAppend('cat,dog', 'rabbit' ) ).toEqual('cat,dog,rabbit');  
    }); 

    it ('06. Concatenates an element to an empty list that uses a custom delimiter', function () {  
        expect( jList.listAppend('', 'rabbit', '~') ).toEqual('rabbit');  
    }); 

    it ('07. Concatenates an element to a list that uses a custom delimiter and is populated with a single element', function () {  
        expect( jList.listAppend('cat', 'rabbit', '~') ).toEqual('cat~rabbit');  
    }); 

    it ('08. Concatenates an element to a list that uses a custom delimiter and is populated with multiple elements', function () {  
        expect( jList.listAppend('cat~dog', 'rabbit', '~') ).toEqual('cat~dog~rabbit');  
    }); 

  });  


    describe( 'listContains: Determines the index of the first list element that contains a specified substring. The search is case-sensitive.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listContains(); } ).toThrow('Missing parameter: list and substring must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listContains('cat,dog'); } ).toThrow('Missing parameter: list and substring must be provided');  
        }); 

        it ('03. Finds a matching element in a list that uses the default delimiter', function () {  
            expect( jList.listContains('cat,dog,mouse','do') ).toEqual(2);  
        }); 

        it ('04. Finds a matching element in a list that uses a custom delimiter', function () {  
            expect( jList.listContains('cat!dog!mouse','se','!') ).toEqual(3);  
        }); 

        it ('05. Finds a matching element in a list that uses the default delimiter. Match at pos 1 because of delimiter mismatch (default delimiter)', function () {  
            expect( jList.listContains('cat!dog!mouse','mo') ).toEqual(1);  
        }); 

        it ('06. Finds a matching element in a list that uses the default delimiter. Match at pos 1 because of delimiter mismatch (custom delimiter)', function () {  
            expect( jList.listContains('cat,dog,mouse','mous','-') ).toEqual(1);  
        }); 

        it ('07. Fails to find a matching element in a list that uses the default delimiter because it is not present', function () {  
            expect( jList.listContains('cat,dog,mouse','dot') ).toEqual(0);  
        }); 

        it ('08. Fails to find a matching element in a list that uses a custom delimiter because it is not present', function () {  
            expect( jList.listContains('cat!dog!mouse','ate','!') ).toEqual(0);  
        }); 

        it ('09. Fails to find a matching element in a list that uses the default delimiter because of case mismatch', function () {  
            expect( jList.listContains('cat,dog,mouse','Og') ).toEqual(0);  
        }); 

        it ('10. Fails to find a matching element in a list that uses a custom delimiter because of case mismatch', function () {  
            expect( jList.listContains('cat!dog!mouse','SE','!') ).toEqual(0);  
        }); 

    });  


    describe( 'listContainsNoCase: Determines the index of the first list element that contains a specified substring. The search is not case-sensitive.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listContainsNoCase(); } ).toThrow('Missing parameter: list and substring must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listContainsNoCase('cat,dog'); } ).toThrow('Missing parameter: list and substring must be provided');  
        }); 

        it ('03. Finds a matching element in a list that uses the default delimiter', function () {  
            expect( jList.listContainsNoCase('cat,dog,mouse','do') ).toEqual(2);  
        }); 

        it ('04. Finds a matching element in a list that uses a custom delimiter', function () {  
            expect( jList.listContainsNoCase('cat!dog!mouse','se','!') ).toEqual(3);  
        }); 

        it ('05. Finds a matching element in a list that uses the default delimiter. Match at pos 1 because of delimiter mismatch (default delimiter)', function () {  
            expect( jList.listContainsNoCase('cat!dog!mouse','mo') ).toEqual(1);  
        }); 

        it ('06. Finds a matching element in a list that uses the default delimiter. Match at pos 1 because of delimiter mismatch (custom delimiter)', function () {  
            expect( jList.listContainsNoCase('cat!dog!mouse','mous','-') ).toEqual(1);  
        }); 

        it ('07. Fails to find a matching element in a list that uses the default delimiter because it is not present', function () {  
            expect( jList.listContainsNoCase('cat,dog,mouse','dot') ).toEqual(0);  
        }); 

        it ('08. Fails to find a matching element in a list that uses a custom delimiter because it is not present', function () {  
            expect( jList.listContainsNoCase('cat!dog!mouse','ate','!') ).toEqual(0);  
        }); 

        it ('09. Finds a matching element in a list that uses the default delimiter despite a case mismatch', function () {  
            expect( jList.listContainsNoCase('cat,dog,mouse','Og') ).toEqual(2);  
        }); 

        it ('10. Finds a matching element in a list that uses a custom delimiter despite a case mismatch', function () {  
            expect( jList.listContainsNoCase('cat!dog!mouse','SE','!') ).toEqual(3);  
        }); 

    });  

describe( 'listChangeDelims: Changes a list delimiter.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listChangeDelims(); } ).toThrow('Missing parameter: list and new_delimiter must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listChangeDelims('cat,dog'); } ).toThrow('Missing parameter: list and new_delimiter must be provided');  
        }); 

        it ('03. Makes no change to a list which has only one element and the default delimiter', function () {  
            expect( jList.listChangeDelims('cat', '=') ).toEqual('cat');  
        }); 

        it ('04. Makes no change to a list which has only one element and a custom delimiter', function () {  
            expect( jList.listChangeDelims('cat','=','!') ).toEqual('cat');  
        }); 

        it ('05. Makes no changes when the specified delimiter is not used in the list', function () {  
            expect( jList.listChangeDelims('cat,dog,mouse,rabbit,monkey','-','!') ).toEqual('cat,dog,mouse,rabbit,monkey');  
        }); 

        it ('06. Changes the list delimiter from the default value', function () {  
            expect( jList.listChangeDelims('cat,dog,mouse,rabbit,monkey', '=') ).toEqual('cat=dog=mouse=rabbit=monkey');  
        }); 

        it ('07. Changes the list delimiter from a custom value', function () {  
            expect( jList.listChangeDelims('cat=dog=mouse=rabbit=monkey','!','=') ).toEqual('cat!dog!mouse!rabbit!monkey');  
        }); 

    });  


    describe( 'listDeleteAt: Deletes an element from a list.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listDeleteAt(); } ).toThrow('Missing parameter: list and position must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listDeleteAt('cat,dog'); } ).toThrow('Missing parameter: list and position must be provided');  
        }); 

        it ('03. Removes an element from a list that uses the default delimiter', function () {  
            expect( jList.listDeleteAt('cat,dog,mouse',2) ).toEqual('cat,mouse');  
        }); 

        it ('04. Removes an element from a list that uses a custom delimiter', function () {  
            expect( jList.listDeleteAt('cat!dog!mouse',2,'!') ).toEqual('cat!mouse');  
        }); 

        it ('05. Makes no changes when the specified delimiter is not used in the list', function () {  
            expect( jList.listDeleteAt('cat!dog!mouse',2,'-') ).toEqual('cat!dog!mouse');  
        }); 

        it ('06. Makes no changes when a custom delimiter is used in the list but a default delimiter is requested', function () {  
            expect( jList.listDeleteAt('cat!dog!mouse',2) ).toEqual('cat!dog!mouse');  
        }); 

        it ('07. Makes no changes when the list is empty and the default delimiter is used', function () {  
            expect( jList.listDeleteAt('',2) ).toEqual('');  
        }); 

        it ('08. Makes no changes when the list is empty and a custom delimiter is used', function () {  
            expect( jList.listDeleteAt('',2,'!') ).toEqual('');  
        }); 

        it ('09. Makes no changes to a list using the default delimiter when the item to be deleted is not present in the list', function () {  
            expect( jList.listDeleteAt('cat,dog,mouse',4) ).toEqual('cat,dog,mouse');  
        }); 

        it ('10. Makes no changes to a list using a custom delimiter when the item to be deleted is not present in the list', function () {  
            expect( jList.listDeleteAt('cat!dog!mouse',4,'!') ).toEqual('cat!dog!mouse');  
        }); 

        it ('11. Removes all items from a list using the default delimiter when item 1 is to be deleted and there is a delimiter mismatch', function () {  
            expect( jList.listDeleteAt('cat!dog!mouse',1) ).toEqual('');  
        }); 

        it ('12. Removes all items from a list using a custom delimiter when item 1 is to be deleted and there is a delimiter mismatch', function () {  
            expect( jList.listDeleteAt('cat!dog!mouse',1,'-') ).toEqual('');  
        }); 

    });  


    describe( 'listFind: Determines the index of the first list element in which a specified value occurs. The search is case-sensitive.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listFind(); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listFind('cat,dog'); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('03. Finds a matching element in a list that uses the default delimiter', function () {  
            expect( jList.listFind('cat,dog,mouse','mouse') ).toEqual(3);  
        }); 

        it ('04. Finds a matching element in a list that uses a custom delimiter', function () {  
            expect( jList.listFind('cat!dog!mouse','mouse','!') ).toEqual(3);  
        }); 

        it ('05. Fails to find a matching element in a list that uses the default delimiter because of delimiter mismatch', function () {  
            expect( jList.listFind('cat,dog,mouse','mouse','!') ).toEqual(0);  
        }); 

        it ('06. Fails to find a matching element in a list that uses a custom delimiter because of delimiter mismatch (none specified)', function () {  
            expect( jList.listFind('cat!dog!mouse','mouse') ).toEqual(0);  
        }); 

        it ('07. Fails to find a matching element in a list that uses a custom delimiter because of delimiter mismatch (incorrect delimiter specified)', function () {  
            expect( jList.listFind('cat!dog!mouse','mouse','-') ).toEqual(0);  
        }); 

        it ('08. Fails to find a matching element in a list that uses the default delimiter because it is not present', function () {  
            expect( jList.listFind('cat,dog,mouse','monkey') ).toEqual(0);  
        }); 

        it ('09. Fails to find a matching element in a list that uses a custom delimiter because it is not present', function () {  
            expect( jList.listFind('cat!dog!mouse','monkey','!') ).toEqual(0);  
        }); 

        it ('10. Fails to find a matching element in a list that uses the default delimiter because of case mismatch', function () {  
            expect( jList.listFind('cat,dog,mouse','Elem1') ).toEqual(0);  
        }); 

        it ('11. Fails to find a matching element in a list that uses a custom delimiter because of case mismatch', function () {  
            expect( jList.listFind('cat!dog!mouse','eleM2','!') ).toEqual(0);  
        }); 


    });  


    describe( 'listFindNoCase: Determines the index of the first list element in which a specified value occurs. The search is case-insensitive.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listFindNoCase(); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listFindNoCase('cat,dog'); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('03. Finds a matching element with the same case, in a list that uses the default delimiter', function () {  
            expect( jList.listFindNoCase('cat,dog,mouse','mouse') ).toEqual(3);  
        }); 

        it ('04. Finds a matching element with different case, in a list that uses the default delimiter', function () {  
            expect( jList.listFindNoCase('cat,dog,mouse','Mouse') ).toEqual(3);  
        }); 

        it ('05. Finds a matching element with the same case, in a list that uses a custom delimiter', function () {  
            expect( jList.listFindNoCase('cat!dog!mouse','moUSE','!') ).toEqual(3);  
        }); 

        it ('06. Fails to find a matching element in a list that uses the default delimiter because of delimiter mismatch', function () {  
            expect( jList.listFindNoCase('cat,dog,mouse','mouse','!') ).toEqual(0);  
        }); 

        it ('07. Fails to find a matching element in a list that uses a custom delimiter because of delimiter mismatch (none specified)', function () {  
            expect( jList.listFindNoCase('cat!dog!mouse','mouse') ).toEqual(0);  
        }); 

        it ('08. Fails to find a matching element in a list that uses a custom delimiter because of delimiter mismatch (incorrect delimiter specified)', function () {  
            expect( jList.listFindNoCase('cat!dog!mouse','mouse','-') ).toEqual(0);  
        }); 

        it ('09. Fails to find a matching element in a list that uses the default delimiter because it is not present', function () {  
            expect( jList.listFindNoCase('cat,dog,mouse','monkey') ).toEqual(0);  
        }); 

        it ('10. Fails to find a matching element in a list that uses a custom delimiter because it is not present', function () {  
            expect( jList.listFindNoCase('cat!dog!mouse','monkey','!') ).toEqual(0);  
        }); 

    });  


    describe( 'listFirst: Gets the first element of a list.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listFirst(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Returns the first element from a list that uses the default delimiter', function () {  
            expect( jList.listFirst('cat,dog,mouse') ).toEqual('cat');  
        }); 

        it ('03. Returns the first element from a list that uses a custom delimiter', function () {  
            expect( jList.listFirst('cat!dog!mouse','!') ).toEqual('cat');  
        }); 

        it ('04. Returns the whole list when the wrong delimiter is specified, from a list that uses the default delimiter', function () {  
            expect( jList.listFirst('cat,dog,mouse','!') ).toEqual('cat,dog,mouse');  
        }); 

        it ('05. Returns the whole list when the wrong delimiter is specified, from a list that uses a custom delimiter', function () {  
            expect( jList.listFirst('cat-dog-mouse','!') ).toEqual('cat-dog-mouse');  
        }); 

        it ('06. Returns an empty string when the list is empty, from a list that uses the default delimiter', function () {  
            expect( jList.listFirst('') ).toEqual('');  
        }); 

        it ('07. Returns an empty string when the list is empty, from a list that uses a custom delimiter', function () {  
            expect( jList.listFirst('','!') ).toEqual('');  
        }); 

    });  


    describe( 'listGetAt: Gets a list element at a specified position.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listGetAt(); } ).toThrow('Missing parameter: list and position must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listGetAt('cat,dog'); } ).toThrow('Missing parameter: list and position must be provided');  
        }); 

        it ('03. Returns the requested element from a list that uses the default delimiter', function () {  
            expect( jList.listGetAt('cat,dog,mouse',3) ).toEqual('mouse');  
        }); 

        it ('04. Returns the requested element from a list that uses a custom delimiter', function () {  
            expect( jList.listGetAt('cat!dog!mouse',2,'!') ).toEqual('dog');  
        });

        it ('05. Returns the whole list when the wrong delimiter is specified, from a list that uses the default delimiter', function () {  
            expect( jList.listGetAt('cat,dog,mouse',1,'!') ).toEqual('cat,dog,mouse');  
        }); 

        it ('06. Returns the whole list when the wrong delimiter is specified, from a list that uses a custom delimiter', function () {  
            expect( jList.listGetAt('cat-dog-mouse',1,'!') ).toEqual('cat-dog-mouse');  
        }); 

        it ('07. Returns an empty string when the list is empty, from a list that uses the default delimiter', function () {  
            expect( jList.listGetAt('',1) ).toEqual('');  
        }); 

        it ('08. Returns an empty string when the list is empty, from a list that uses a custom delimiter', function () {  
            expect( jList.listGetAt('',1,'!') ).toEqual('');  
        }); 

        it ('09. Returns an empty string when the wrong delimiter is specified, from a list that uses the default delimiter, and the element to get is missing', function () {  
            expect( jList.listGetAt('cat,dog,mouse',2,'!') ).toEqual('');  
        }); 

        it ('10. Returns an empty string when the wrong delimiter is specified, from a list that uses a custom delimiter, and the element to get is missing', function () {  
            expect( jList.listGetAt('cat-dog-mouse',2,'!') ).toEqual('');  
        }); 

    });  


    describe( 'listInsertAt: Inserts an element into a list.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listInsertAt(); } ).toThrow('Missing parameter: list, position and value must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listInsertAt('cat,dog'); } ).toThrow('Missing parameter: list, position and value must be provided');  
        }); 

        it ('03. Throws an error when only 2 parameters are passed in', function () {  
            expect( function(){ jList.listInsertAt('cat,dog', 1); } ).toThrow('Missing parameter: list, position and value must be provided');  
        }); 

        it ('04. Returns an unchanged (empty) list when the list is empty and the insert position is more than 1 (list uses the default delimiter)', function () {  
            expect( jList.listInsertAt('', 2, 'cat') ).toEqual('');  
        }); 

        it ('05. Returns an unchanged (empty) list when the list is empty and the insert position is more than 1 (list uses a custom delimiter)', function () {  
            expect( jList.listInsertAt('', 2, 'cat', '!') ).toEqual('');  
        }); 

        it ('06. Returns an unchanged list when the list has one element and the insert position is more than the list length (list uses the default delimiter)', function () {  
            expect( jList.listInsertAt('cat', 2, 'dog') ).toEqual('cat');  
        }); 

        it ('07. Returns an unchanged list when the list has one element and the insert position is more than the list length (list uses a custom delimiter)', function () {  
            expect( jList.listInsertAt('cat', 2, 'dog', '!') ).toEqual('cat');  
        }); 

        it ('08. Returns an unchanged list when the list has multiple elements and the insert position is more than the list length (list uses the default delimiter)', function () {  
            expect( jList.listInsertAt('cat,dog,mouse', 5, 'monkey') ).toEqual('cat,dog,mouse');  
        }); 

        it ('09. Returns an unchanged list when the list has one element and the insert position is more than the list length (list uses a custom delimiter)', function () {  
            expect( jList.listInsertAt('cat!dog!mouse', 4, 'monkey', '!') ).toEqual('cat!dog!mouse');  
        }); 

        it ('10. Returns an unchanged (empty) list when the list is empty and the insert position is 0 (list uses the default delimiter)', function () {  
            expect( jList.listInsertAt('', 0, 'cat') ).toEqual('');  
        }); 

        it ('11. Returns an unchanged (empty) list when the list is empty and the insert position is 0 (list uses a custom delimiter)', function () {  
            expect( jList.listInsertAt('', 0, 'cat', '!') ).toEqual('');  
        }); 

        it ('12. Returns an unchanged list when the list has one element and the insert position is 0 (list uses the default delimiter', function () {  
            expect( jList.listInsertAt('cat', 0, 'dog') ).toEqual('cat');  
        }); 

        it ('13. Returns an unchanged list when the list has one element and the insert position is 0 (list uses a custom delimiter', function () {  
            expect( jList.listInsertAt('cat', 0, 'dog', '!') ).toEqual('cat');  
        }); 

        it ('14. Returns an unchanged list when the list has multiple elements and the insert position is 0 (list uses the default delimiter)', function () {  
            expect( jList.listInsertAt('cat,dog', 0, 'mouse') ).toEqual('cat,dog');  
        }); 

        it ('15. Returns an unchanged list when the list has one element and the insert position is 0 (list uses a custom delimiter)', function () {  
            expect( jList.listInsertAt('cat!dog', 0, 'mouse', '!') ).toEqual('cat!dog');  
        }); 

        it ('16. Returns a changed list when the list has one element and the insert position is 1 (list uses the default delimiter)', function () {  
            expect( jList.listInsertAt('cat', 1, 'dog') ).toEqual('dog,cat');  
        }); 

        it ('15. Returns a changed list when the list has one element and the insert position is 1 (list uses a custom delimiter)', function () {  
            expect( jList.listInsertAt('cat', 1, 'dog', '!') ).toEqual('dog!cat');  
        }); 

        it ('16. Returns a changed list when the list has multiple elements and the insert position is less than the list length (list uses the default delimiter)', function () {  
            expect( jList.listInsertAt('cat,dog,mouse', 2, 'monkey') ).toEqual('cat,monkey,dog,mouse');  
        }); 

        it ('17. Returns a changed list when the list has one element and the insert position is less than the list length (list uses a custom delimiter)', function () {  
            expect( jList.listInsertAt('cat!dog!mouse', 2, 'monkey', '!') ).toEqual('cat!monkey!dog!mouse');  
        }); 

        it ('18. Returns a changed list when the list has multiple elements and the insert position is equal to the list length (list uses the default delimiter)', function () {  
            expect( jList.listInsertAt('cat,dog,mouse', 3, 'monkey') ).toEqual('cat,dog,monkey,mouse');  
        }); 

        it ('19. Returns a changed list when the list has one element and the insert position is equal to the list length (list uses a custom delimiter)', function () {  
            expect( jList.listInsertAt('cat!dog!mouse', 3, 'monkey', '!') ).toEqual('cat!dog!monkey!mouse');  
        }); 

    });  


    describe( 'listLast: Gets the last element of a list.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listLast(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Returns the last element from a list that uses the default delimiter', function () {  
            expect( jList.listLast('cat,dog,mouse') ).toEqual('mouse');  
        }); 

        it ('03. Returns the last element from a list that uses a custom delimiter', function () {  
            expect( jList.listLast('cat!dog!mouse!monkey','!') ).toEqual('monkey');  
        }); 

        it ('04. Returns the whole list when the wrong delimiter is specified, from a list that uses the default delimiter', function () {  
            expect( jList.listLast('cat,dog,mouse','!') ).toEqual('cat,dog,mouse');  
        }); 

        it ('05. Returns the whole list when the wrong delimiter is specified, from a list that uses a custom delimiter', function () {  
            expect( jList.listLast('cat-dog-mouse','!') ).toEqual('cat-dog-mouse');  
        }); 

        it ('06. Returns an empty string when the list is empty, from a list that uses the default delimiter', function () {  
            expect( jList.listLast('') ).toEqual('');  
        }); 

        it ('07. Returns an empty string when the list is empty, from a list that uses a custom delimiter', function () {  
            expect( jList.listLast('','!') ).toEqual('');  
        }); 

    });  


    describe( 'listLen: Determines the number of elements in a list.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listLen(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Returns the number of elements in a list that uses the default delimiter', function () {  
            expect( jList.listLen('cat,dog,mouse') ).toEqual(3);  
        }); 

        it ('03. Returns the number of elements in a list that uses a custom delimiter', function () {  
            expect( jList.listLen('cat!dog','!') ).toEqual(2);  
        }); 

        it ('04. Returns the number of elements, including an empty element, in a list that uses the default delimiter', function () {  
            expect( jList.listLen('cat,,mouse') ).toEqual(3);  
        }); 

        it ('05. Returns the number of elements, including an empty element, in a list that uses the default delimiter', function () {  
            expect( jList.listLen('cat!','!') ).toEqual(2);  
        }); 

        it ('06. Returns the number of elements in an empty list that uses the default delimiter', function () {  
            expect( jList.listLen('') ).toEqual(0);  
        }); 

        it ('07. Returns the number of elements in an empty list that uses a custom delimiter', function () {  
            expect( jList.listLen('','!') ).toEqual(0);  
        }); 

    });  


    describe( 'listPrepend: Inserts an element at the beginning of a list.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listPrepend(); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listPrepend('cat,dog'); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('03. Prepends an element to an empty list that uses the default delimiter', function () {  
            expect( jList.listPrepend('', 'rabbit' ) ).toEqual('rabbit');  
        }); 

        it ('04. Prepends an element to a list  that uses the default delimiter and is populated with a single element', function () {  
            expect( jList.listPrepend('cat', 'rabbit' ) ).toEqual('rabbit,cat');  
        }); 

        it ('05. Prepends an element to a list  that uses the default delimiter and is populated with multiple elements', function () {  
            expect( jList.listPrepend('cat,dog', 'rabbit' ) ).toEqual('rabbit,cat,dog');  
        }); 

        it ('06. Prepends an element to an empty list that uses a custom delimiter', function () {  
            expect( jList.listPrepend('', 'rabbit', '~' ) ).toEqual('rabbit');  
        }); 

        it ('07. Prepends an element to a list that uses a custom delimiter and is populated with a single element', function () {  
            expect( jList.listPrepend('cat', 'rabbit', '~') ).toEqual('rabbit~cat');  
        }); 

        it ('08. Prepends an element to a list that uses a custom delimiter and is populated with multiple elements', function () {  
            expect( jList.listPrepend('cat~dog', 'rabbit','~') ).toEqual('rabbit~cat~dog');  
        }); 

    });  


    describe( 'listQualify: Inserts a string at the beginning and end of list elements.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listQualify(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Wraps the default qualifier round element in a single element list', function () {  
            expect( jList.listQualify('rabbit') ).toEqual("'rabbit'");  
        }); 

        it ('03. Wraps a custom qualifier round the element in a single element list', function () {  
            expect( jList.listQualify('rabbit','!') ).toEqual('!rabbit!');  
        }); 

        it ('04. Wraps the default qualifier round the elements in a multi element list', function () {  
            expect( jList.listQualify('rabbit,cat,dog') ).toEqual("'rabbit','cat','dog'");  
        }); 

        it ('05. Wraps a custom qualifier round the elements in a multi element list', function () {  
            expect( jList.listQualify('rabbit,cat,dog','!') ).toEqual('!rabbit!,!cat!,!dog!');  
        }); 

        it ('06. Returns an empty list when the input list is empty and the qualifier is left to default', function () {  
            expect( jList.listQualify('') ).toEqual('');  
        }); 

        it ('07. Returns an empty list when the input list is empty and a custom qualifier is specified', function () {  
            expect( jList.listQualify('','!') ).toEqual('');  
        }); 

    });  


    describe( 'listRemoveDuplicates: Removes duplicate elements from a list. Matching is case-sensitive.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listRemoveDuplicates(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Returns an empty list when the input list is empty and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('') ).toEqual('');  
        }); 

        it ('03. Returns an empty list when the input list is empty and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('','!') ).toEqual('');  
        });

        it ('04. Returns an unchanged list when the input list has one element and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit') ).toEqual('rabbit');  
        }); 

        it ('05. Returns an unchanged list when the input list has one element and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit','!') ).toEqual('rabbit');  
        }); 

        it ('06. Returns an unchanged list when the input list has multiple, non-duplicate, elements and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit,cat,dog') ).toEqual('rabbit,cat,dog');  
        }); 

        it ('07. Returns an unchanged list when the input list has multiple, non-duplicate, elements and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit!cat!dog','!') ).toEqual('rabbit!cat!dog');  
        }); 

        it ('08. Returns a changed list when the input list has multiple elements with duplicates and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit,cat,dog,rabbit') ).toEqual('rabbit,cat,dog');  
        }); 

        it ('09. Returns an unchanged list when the input list has multiple elements with duplicates and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit!cat!dog!cat','!') ).toEqual('rabbit!cat!dog');  
        }); 

        it ('10. Returns a changed list when the input list has multiple elements with many duplicates and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit,cat,dog,rabbit,rabbit,dog,cat') ).toEqual('rabbit,cat,dog');  
        }); 

        it ('11. Returns a changed list when the input list has multiple elements with many duplicates and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit!cat!dog!cat!cat!cat!rabbit!cat!dog','!') ).toEqual('rabbit!cat!dog');  
        }); 

        it ('12. Returns an unchanged list when the input list has multiple elements with duplicates different only by case and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit,cat,dog,RABBIT,Rabbit,Dog,CAT') ).toEqual('rabbit,cat,dog,RABBIT,Rabbit,Dog,CAT');  
        }); 

        it ('13. Returns an unchanged list when the input list has multiple elements with duplicates different only by case and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit!cat!dog!RABBIT!Rabbit!Dog!CAT','!') ).toEqual('rabbit!cat!dog!RABBIT!Rabbit!Dog!CAT');  
        }); 

        it ('14. Returns an unchanged list when the input list has elements with duplicates but multiple delimiters exist. The default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit,cat,rabbit!cat') ).toEqual('rabbit,cat,rabbit!cat');  
        }); 

        it ('15. Returns an unchanged list when the input list has elements with duplicates but multiple delimiters exist. A custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicates('rabbit,cat,rabbit!cat','!') ).toEqual('rabbit,cat,rabbit!cat');  
        }); 

    });  


    describe( 'listRemoveDuplicatesNoCase: Removes duplicate elements from a list. Matching is not case-sensitive.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listRemoveDuplicatesNoCase(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Returns an empty list when the input list is empty and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('') ).toEqual('');  
        }); 

        it ('03. Returns an empty list when the input list is empty and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('','!') ).toEqual('');  
        });

        it ('04. Returns an unchanged list when the input list has one element and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit') ).toEqual('rabbit');  
        }); 

        it ('05. Returns an unchanged list when the input list has one element and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit','!') ).toEqual('rabbit');  
        }); 

        it ('06. Returns an unchanged list when the input list has multiple, non-duplicate, elements and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit,cat,dog') ).toEqual('rabbit,cat,dog');  
        }); 

        it ('07. Returns an unchanged list when the input list has multiple, non-duplicate, elements and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit!cat!dog','!') ).toEqual('rabbit!cat!dog');  
        }); 

        it ('08. Returns a changed list when the input list has multiple elements with duplicates and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit,cat,dog,rabbit') ).toEqual('rabbit,cat,dog');  
        }); 

        it ('09. Returns a changed list when the input list has multiple elements with duplicates and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit!cat!dog!cat','!') ).toEqual('rabbit!cat!dog');  
        }); 

        it ('10. Returns a changed list when the input list has multiple elements with many duplicates and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit,cat,dog,rabbit,rabbit,dog,cat') ).toEqual('rabbit,cat,dog');  
        }); 

        it ('11. Returns a changed list when the input list has multiple elements with many duplicates and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit!cat!dog!cat!cat!cat!rabbit!cat!dog','!') ).toEqual('rabbit!cat!dog');  
        }); 

        it ('12. Returns a changed list when the input list has multiple elements with duplicates including by case and default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit,cat,dog,RABBIT,Rabbit,Dog,CAT') ).toEqual('rabbit,cat,dog');  
        }); 

        it ('13. Returns a changed list when the input list has multiple elements with duplicates including by case and a custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit!cat!dog!RABBIT!Rabbit!Dog!CAT','!') ).toEqual('rabbit!cat!dog');  
        }); 

        it ('14. Returns an unchanged list when the input list has elements with duplicates but multiple delimiters exist. The default delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit,cat,rabbit!cat') ).toEqual('rabbit,cat,rabbit!cat');  
        }); 

        it ('15. Returns an unchanged list when the input list has elements with duplicates but multiple delimiters exist. A custom delimiter is specified', function () {  
            expect( jList.listRemoveDuplicatesNoCase('rabbit,cat,rabbit!cat','!') ).toEqual('rabbit,cat,rabbit!cat');  
        }); 

    });  


    describe( 'listRest: Gets a list, without its first element.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listRest(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Returns all but the first element from a list that uses the default delimiter', function () {  
            expect( jList.listRest('cat,dog,mouse') ).toEqual('dog,mouse');  
        }); 

        it ('03. Returns all but the first element from a list that uses a custom delimiter', function () {  
            expect( jList.listRest('cat!dog!mouse!monkey','!') ).toEqual('dog!mouse!monkey');  
        }); 

        it ('04. Returns an empty list when the wrong delimiter is specified, from a list that uses the default delimiter', function () {  
            expect( jList.listRest('cat,dog,mouse','!') ).toEqual('');  
        }); 

        it ('05. Returns and empty list when the wrong delimiter is specified, from a list that uses a custom delimiter', function () {  
            expect( jList.listRest('cat-dog-mouse','!') ).toEqual('');  
        }); 

        it ('06. Returns an empty list when the list is empty, from a list that uses the default delimiter', function () {  
            expect( jList.listRest('') ).toEqual('');  
        }); 

        it ('07. Returns an empty list when the list is empty, from a list that uses a custom delimiter', function () {  
            expect( jList.listRest('','!') ).toEqual('');  
        }); 

    });  


    describe( 'listReverse: Reverses the order of elements in a list.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listReverse(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Returns an empty string when the list is empty, from a list that uses the default delimiter', function () {  
            expect( jList.listReverse('','!') ).toEqual('');  
        }); 

        it ('03. Returns an empty string when the list is empty, from a list that uses a custom delimiter', function () {  
            expect( jList.listReverse('','!') ).toEqual('');  
        }); 

        it ('04. Returns an unchanged list when the list has one element and uses the default delimiter', function () {  
            expect( jList.listReverse('rabbit','!') ).toEqual('rabbit');  
        }); 

        it ('05. Returns an unchanged list when the list has one element and uses uses a custom delimiter', function () {  
            expect( jList.listReverse('rabbit','!') ).toEqual('rabbit');  
        }); 

        it ('06. Returns an reversed list when the list has multiple elements and uses the default delimiter', function () {  
            expect( jList.listReverse('rabbit,cat,MONKEY') ).toEqual('MONKEY,cat,rabbit');  
        }); 

        it ('07. Returns a reversed list when the list has one element and uses uses a custom delimiter', function () {  
            expect( jList.listReverse('Rabbit!rabbit!cat!DOG','!') ).toEqual('DOG!cat!rabbit!Rabbit');  
        }); 

        it ('08. Returns an unchanged list when the list has multiple elements but the delimiter supplied (default) is wrong', function () {  
            expect( jList.listReverse('Rabbit!rabbit!cat!DOG') ).toEqual('Rabbit!rabbit!cat!DOG');  
        }); 

        it ('09. Returns an unchanged list when the list has multiple elements but the delimiter supplied (custom) is wrong', function () {  
            expect( jList.listReverse('Rabbit!rabbit!cat!DOG','-') ).toEqual('Rabbit!rabbit!cat!DOG');  
        }); 
    });  


    describe( 'listSetAt: Replaces the contents of a list element.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listSetAt(); } ).toThrow('Missing parameter: list, position and value must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listSetAt('cat,dog'); } ).toThrow('Missing parameter: list, position and value must be provided');  
        }); 

        it ('03. Throws an error when only 2 parameters are passed in', function () {  
            expect( function(){ jList.listSetAt('cat,dog',1); } ).toThrow('Missing parameter: list, position and value must be provided');  
        }); 

        it ('04. Returns an updated list when the list contains one element, using the default delimiter', function () {  
            expect( jList.listSetAt('cat',1,'monkey') ).toEqual('monkey');  
        }); 

        it ('05. Returns an updated list when the list contains one element, using a custom delimiter', function () {  
            expect( jList.listSetAt('rabbit',1,'mouse','!') ).toEqual('mouse');  
        }); 

        it ('06. Returns an updated list when the list contains multiple elements, using the default delimiter', function () {  
            expect( jList.listSetAt('cat,dog,mouse,rabbit',3,'monkey') ).toEqual('cat,dog,monkey,rabbit');  
        }); 

        it ('07. Returns an updated list when the list contains multiple elements, using a custom delimiter', function () {  
            expect( jList.listSetAt('rabbit!dog!monkey!hamster',2,'mouse','!') ).toEqual('rabbit!mouse!monkey!hamster');  
        }); 

        it ('08. Replaces a one element list when the list contains multiple elements and the wrong delimiter is specified', function () {  
            expect( jList.listSetAt('cat,dog,mouse,rabbit',1,'monkey','!') ).toEqual('monkey');  
        }); 

        it ('09. Returns an unchanged (empty) list when the list is empty and the set position is 0 (list uses the default delimiter)', function () {  
            expect( jList.listSetAt('', 0,'mouse') ).toEqual('');  
        }); 

        it ('10. Returns an unchanged (empty) list when the list is empty and the set position is 0 (list uses a custom delimiter)', function () {  
            expect( jList.listSetAt('', 0,'mouse','!') ).toEqual('');  
        }); 
       
        it ('11. Returns an unchanged list when the list contains one element and the set position is 0 (list uses the default delimiter)', function () {  
            expect( jList.listSetAt('cat', 0,'mouse') ).toEqual('cat');  
        }); 

        it ('12. Returns an unchanged (empty) list when the list contains one element and the set position is 0 (list uses a custom delimiter)', function () {  
            expect( jList.listSetAt('cat', 0,'mouse','!') ).toEqual('cat');  
        }); 

        it ('13. Returns an unchanged list when the list contains muliple elements and the set position is 0 (list uses the default delimiter)', function () {  
            expect( jList.listSetAt('cat,dog', 0,'mouse') ).toEqual('cat,dog');  
        }); 

        it ('14. Returns an unchanged (empty) list when the list contains multiple elements and the set position is 0 (list uses a custom delimiter)', function () {  
            expect( jList.listSetAt('cat,dog', 0,'mouse','!') ).toEqual('cat,dog');  
        }); 

        it ('15. Returns an unchanged (empty) list when the list is empty and the set position is 1 (list uses the default delimiter)', function () {  
            expect( jList.listSetAt('', 1,'mouse') ).toEqual('');  
        }); 

        it ('16. Returns an unchanged (empty) list when the list is empty and the set position is 1 (list uses a custom delimiter)', function () {  
            expect( jList.listSetAt('', 1,'mouse','!') ).toEqual('');  
        }); 
       
        it ('17. Returns an unchanged list when the list contains one element and the set position is greater than 1 (list uses the default delimiter)', function () {  
            expect( jList.listSetAt('cat', 2,'mouse') ).toEqual('cat');  
        }); 

        it ('18. Returns an unchanged list when the list contains one element and the set position is greater than 1 (list uses a custom delimiter)', function () {  
            expect( jList.listSetAt('cat', 2,'mouse','!') ).toEqual('cat');  
        }); 

        it ('19. Returns an unchanged list when the list contains muliple elements and the set position is greater than the list length (list uses the default delimiter)', function () {  
            expect( jList.listSetAt('cat,dog', 4,'mouse') ).toEqual('cat,dog');  
        }); 

        it ('20. Returns an unchanged list when the list contains multiple elements and the set position is greater than the list length (list uses a custom delimiter)', function () {  
            expect( jList.listSetAt('cat,dog', 3,'mouse','!') ).toEqual('cat,dog');  
        }); 
    });  


    describe( 'listSort: Sorts list elements according to a sort type and sort order.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listSort(); } ).toThrow('Missing parameter: list must be provided');  
        }); 

        it ('02. Returns an empty string when the list is empty and the default delimiter is used', function () {  
            expect( jList.listSort('','alpha','asc','!') ).toEqual('');  
        }); 

        it ('03. Returns an empty string when the list is empty and a custom delimiter is used', function () {  
            expect( jList.listSort('','alpha','asc','!') ).toEqual('');  
        }); 

        it ('04. Returns an updated list when the list contains one element, using the default delimiter', function () {  
            expect( jList.listSort('cat') ).toEqual('cat');  
        }); 

        it ('05. Returns an updated list when the list contains one element, using a custom delimiter', function () {  
            expect( jList.listSort('mouse','alpha','asc','!') ).toEqual('mouse');  
        }); 

        it ('06. Returns an updated, sorted list when the list contains multiple alpha elements, using the default delimiter. Sorted ascending.', function () {  
            expect( jList.listSort('hamster,cat,rabbit,deer') ).toEqual('cat,deer,hamster,rabbit');  
        }); 

        it ('07. Returns an updated, sorted list when the list contains multiple alpha elements, using the default delimiter. Sorted descending.', function () {  
            expect( jList.listSort('hamster,cat,rabbit,deer','alpha','desc') ).toEqual('rabbit,hamster,deer,cat');  
        }); 

        it ('08. Returns an updated, sorted list when the list contains multiple alpha elements, using a custom delimiter. Sorted ascending.', function () {  
            expect( jList.listSort('hamster!cat!rabbit!deer','alpha','asc','!') ).toEqual('cat!deer!hamster!rabbit');  
        }); 

        it ('09. Returns an updated, sorted list when the list contains multiple alpha elements, using a custom delimiter. Sorted descending.', function () {  
            expect( jList.listSort('hamster!cat!rabbit!deer','alpha','desc','!') ).toEqual('rabbit!hamster!deer!cat');  
        }); 

        it ('10. Returns an updated, sorted list when the list contains multiple mixed-case, alpha elements, using the default delimiter. Sorted ascending.', function () {  
            expect( jList.listSort('hamster,CAT,rabbit,Deer,deer') ).toEqual('CAT,Deer,deer,hamster,rabbit');  
        }); 

        it ('11. Returns an updated, sorted list when the list contains multiple mixed-case, alpha elements, using the default delimiter. Sorted descending.', function () {  
            expect( jList.listSort('hamster,CAT,rabbit,Deer,deer','alpha','desc') ).toEqual('rabbit,hamster,deer,Deer,CAT');  
        }); 

        it ('12. Returns an updated, sorted list when the list contains multiple mixed-case, alpha elements, using a custom delimiter. Sorted ascending.', function () {  
            expect( jList.listSort('HAMSTER!cat!hamster!rabbit!deer!Hamster','alpha','asc','!') ).toEqual('HAMSTER!Hamster!cat!deer!hamster!rabbit');  
        }); 

        it ('13. Returns an updated, sorted list when the list contains multiple mixed-case, alpha elements, using a custom delimiter. Sorted descending.', function () {  
            expect( jList.listSort('HAMSTER!cat!hamster!rabbit!deer!Hamster','alpha','desc','!') ).toEqual('rabbit!hamster!deer!cat!Hamster!HAMSTER');  
        }); 

        it ('14. Returns an updated, sorted list when the list contains multiple numeric elements, using the default delimiter. Sorted ascending.', function () {  
            expect( jList.listSort('7,11,5,1,999,88,5','numeric') ).toEqual('1,5,5,7,11,88,999');  
        }); 

        it ('15. Returns an updated, sorted list when the list contains multiple numeric elements, using the default delimiter. Sorted descending.', function () {  
            expect( jList.listSort('7,11,5,1,999,88,5','numeric','desc') ).toEqual('999,88,11,7,5,5,1');  
        }); 

        it ('16. Returns an updated, sorted list when the list contains multiple numeric elements, using a custom delimiter. Sorted ascending.', function () {  
            expect( jList.listSort('7!11!5!1!999!88!5','numeric','asc','!') ).toEqual('1!5!5!7!11!88!999');  
        }); 

        it ('17. Returns an updated, sorted list when the list contains multiple numeric elements, using a custom delimiter. Sorted descending.', function () {  
            expect( jList.listSort('7!11!5!1!999!88!5','numeric','desc','!') ).toEqual('999!88!11!7!5!5!1');  
        }); 

        it ('18. Returns an updated, "mis-sorted" list when the list contains multiple numeric elements, sorted alphabetically, using the default delimiter. Sorted ascending.', function () {  
            expect( jList.listSort('7,11,5,1,999,88,5') ).toEqual('1,11,5,5,7,88,999');  
        }); 

        it ('19. Returns an updated, "mis-sorted" list when the list contains multiple numeric elements, sorted alphabetically, using the default delimiter. Sorted descending.', function () {  
            expect( jList.listSort('7,11,5,1,999,88,5','alpha','desc') ).toEqual('999,88,7,5,5,11,1');  
        }); 

        it ('20. Returns an updated, "mis-sorted" list when the list contains multiple numeric elements, sorted alphabetically, using a custom delimiter. Sorted ascending.', function () {  
            expect( jList.listSort('7!11!5!1!999!88!5','alpha','asc','!') ).toEqual('1!11!5!5!7!88!999');  
        }); 

        it ('21. Returns an updated, "mis-sorted" list when the list contains multiple numeric elements, sorted alphabetically, using a custom delimiter. Sorted descending.', function () {  
            expect( jList.listSort('7!11!5!1!999!88!5','alpha','desc','!') ).toEqual('999!88!7!5!5!11!1');  
        }); 

    });  


    describe( 'listValueCount: Counts the instances of a specified value in a list. The search is case-sensitive.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listValueCount(); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listValueCount('cat,dog'); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('03. Returns 0 when the list is empty and the default delimiter is used', function () {  
            expect( jList.listValueCount('','monkey') ).toEqual(0);  
        }); 

        it ('04. Returns 0 when the list is empty and a custom delimiter is used', function () {  
            expect( jList.listValueCount('','monkey','!') ).toEqual(0);  
        }); 

        it ('05. Returns the count when the list has one (matching) element and the default delimiter is used', function () {  
            expect( jList.listValueCount('monkey','monkey') ).toEqual(1);  
        }); 

        it ('06. Returns the count when the list has one (matching) element and a custom delimiter is used', function () {  
            expect( jList.listValueCount('monkey','monkey','!') ).toEqual(1);  
        }); 

        it ('07. Returns the count when the list has multiple elements (one matching) and the default delimiter is used', function () {  
            expect( jList.listValueCount('cat,monkey,rabbit,dog','monkey') ).toEqual(1);  
        }); 

        it ('08. Returns the count when the list has multiple elements (one matching) and a custom delimiter is used', function () {  
            expect( jList.listValueCount('cat!monkey!rabbit!dog','monkey','!') ).toEqual(1);  
        }); 

        it ('09. Returns the count when the list has multiple elements (multiple matching) and the default delimiter is used', function () {  
            expect( jList.listValueCount('cat,monkey,rabbit,dog,monkey,monkey','monkey') ).toEqual(3);  
        }); 

        it ('10. Returns the count when the list has multiple elements (multiple matching) and a custom delimiter is used', function () {  
            expect( jList.listValueCount('cat!monkey!cat!rabbit!dog','cat','!') ).toEqual(2);  
        }); 

        it ('11. Returns 0 when the list has "matching" elements but with different case and the default delimiter is used', function () {  
            expect( jList.listValueCount('cat,Monkey,rabbit,dog','monkey') ).toEqual(0);  
        }); 

        it ('12. Returns 0 when the list has "matching" elements but with different case and a custom delimiter is used', function () {  
            expect( jList.listValueCount('cat!monkey!Cat!CAt!rabbit!dog','CAT','!') ).toEqual(0);  
        }); 

    });  


    describe( 'listValueCountNoCase: Counts the instances of a specified value in a list. The search is not case-sensitive.', function () {  

        it ('01. Throws an error when no parameters are passed in', function () {  
            expect( function(){ jList.listValueCountNoCase(); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('02. Throws an error when only 1 parameter is passed in', function () {  
            expect( function(){ jList.listValueCountNoCase('cat,dog'); } ).toThrow('Missing parameter: list and value must be provided');  
        }); 

        it ('03. Returns 0 when the list is empty and the default delimiter is used', function () {  
            expect( jList.listValueCountNoCase('','monkey') ).toEqual(0);  
        }); 

        it ('04. Returns 0 when the list is empty and a custom delimiter is used', function () {  
            expect( jList.listValueCountNoCase('','monkey','!') ).toEqual(0);  
        }); 

        it ('05. Returns the count when the list has one (matching) element and the default delimiter is used', function () {  
            expect( jList.listValueCountNoCase('monkey','monkey') ).toEqual(1);  
        }); 

        it ('06. Returns the count when the list has one (matching) element and a custom delimiter is used', function () {  
            expect( jList.listValueCountNoCase('monkey','monkey','!') ).toEqual(1);  
        }); 

        it ('07. Returns the count when the list has multiple elements (one matching) and the default delimiter is used', function () {  
            expect( jList.listValueCountNoCase('cat,monkey,rabbit,dog','monkey') ).toEqual(1);  
        }); 

        it ('08. Returns the count when the list has multiple elements (one matching) and a custom delimiter is used', function () {  
            expect( jList.listValueCountNoCase('cat!monkey!rabbit!dog','monkey','!') ).toEqual(1);  
        }); 

        it ('09. Returns the count when the list has multiple elements (multiple matching) and the default delimiter is used', function () {  
            expect( jList.listValueCountNoCase('cat,monkey,rabbit,dog,monkey,monkey','monkey') ).toEqual(3);  
        }); 

        it ('10. Returns the count when the list has multiple elements (multiple matching) and a custom delimiter is used', function () {  
            expect( jList.listValueCountNoCase('cat!monkey!cat!rabbit!dog','cat','!') ).toEqual(2);  
        }); 

        it ('11. Returns the count when the list has matching elements but with different case and the default delimiter is used', function () {  
            expect( jList.listValueCountNoCase('cat,Monkey,rabbit,dog,MONKEY,monkey','monkey') ).toEqual(3);  
        }); 

        it ('12. Returns the count when the list has matching elements but with different case and a custom delimiter is used', function () {  
            expect( jList.listValueCountNoCase('cat!monkey!Cat!CAt!rabbit!dog','CAT','!') ).toEqual(3);  
        }); 

    });  


});  