# UrlUtilities class





small,and extremely common. Do not add advanced parsing logic to this file. 
Common helper functions for working with URLs. These utilities are intended to be simple, 
small, and extremely common. Do not add advanced parsing logic to this file.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`convertToODataStringLiteral`](#converttoodatastringliteral)     | `public, _static_` | `string` | convertToODataStringLiteral("'example list'") ---> "'''example list'''"  Converts a variable to an OData string literal and escapes apostrophes |
|[`removeEndSlash`](#removeendslash)     | `public, _static_` | `string` | removeEndSlash('/') ---> ''  Removes any slash characters from the end of the URL |





### convertToODataStringLiteral

convertToODataStringLiteral("'example list'") ---> "'''example list'''" 
Converts a variable to an OData string literal and escapes apostrophes. 
OData specification: 
https://tools.oasis-open.org/version-control/ 
browse/wsvn/odata/trunk/spec/ABNF/odata-abnf-construction-rules.txt 
SQUOTE-in-string = SQUOTE SQUOTE ; two consecutive single quotes represent one within a string literal 
Examples: 
convertToODataStringLiteral("example's list") ---> "'example''s list'" 
convertToODataStringLiteral("example list") ---> "'example list'" 
convertToODataStringLiteral("'example list'") ---> "'''example list'''"

#### Signature
`convertToODataStringLiteral(value: string): string`

#### Returns
`string`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | `string` |  |


### removeEndSlash

removeEndSlash('/') ---> '' 
Removes any slash characters from the end of the URL. 
This function assumes that the input is already a valid absolute or server-relative URL. 
Examples: 
removeEndSlash('http://example.com/') ---> 'http://example.com' 
removeEndSlash('/example') ---> '/example' 
removeEndSlash('/') ---> ''

#### Signature
`removeEndSlash(url: string): string`

#### Returns
`string`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | `string` | the URL to be normalized  Removes any slash characters from the end of the URL |

