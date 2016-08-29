# Validate class

This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[static](#static)      | public | void | Throws an exception if the specified value is not true |




## static

Throws an exception if the specified value is not true.

##### Signature
static isTrue(value: boolean, variableName: string): void

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| value     | undefined | %optional% undefined |
| variableName     | undefined | %optional% undefined |

