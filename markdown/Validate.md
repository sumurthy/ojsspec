# Validate class





This class implements provides a standard way to validate properties and function parameters. 
Unlike an assertion, the Validate checks are always performed and will always throw an error, 
even in a production release. As such, be careful not to overuse these checks in a way 
that might impact performance.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[isNonemptyString](#isnonemptystring~p7xu9)     | public, _static_ | void | Throws an exception if the specified string is null,undefined,or an empty string |
|[isNotNullOrUndefined](#isnotnullorundefined~v0mm9)     | public, _static_ | void | Throws an exception if the specified value is null or undefined |
|[isTrue](#istrue~1ea89)     | public, _static_ | void | Throws an exception if the specified value is not true |




## isNonemptyString

Throws an exception if the specified string is null,undefined,or an empty string.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | string | undefined |
| `variableName`    | string | undefined |


## isNotNullOrUndefined

Throws an exception if the specified value is null or undefined.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | any | undefined |
| `variableName`    | string | undefined |


## isTrue

Throws an exception if the specified value is not true.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | boolean | undefined |
| `variableName`    | string | undefined |

