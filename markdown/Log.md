# Log class

The Log class provides static methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[static](#static)      | public | void | more context information (e |




## static

more context information (e.g., web part information) to the logged message.

##### Signature
static warn(source: string, message: string, scope?: ServiceScope): void

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| source     | undefined | %optional% undefined |
| message     | undefined | %optional% undefined |
| scope?     | undefined | %optional% undefined |

