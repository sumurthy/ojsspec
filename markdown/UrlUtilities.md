# UrlUtilities class

Common helper functions for working with URLs. These utilities are intended to be simple, 
small, and extremely common. Do not add advanced parsing logic to this file.





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|`[static](#static) `     | public | `string` | Removes any slash characters from the end of the URL |




## static

Removes any slash characters from the end of the URL. 
This function assumes that the input is already a valid absolute or server-relative URL. 
Examples: 
removeEndSlash('http://example.com/') ---> 'http://example.com' 
removeEndSlash('/example') ---> '/example' 
removeEndSlash('/') ---> ''

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url `    | `undefined` | _%optional%_ undefined |

