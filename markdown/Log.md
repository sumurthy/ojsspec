# Log class

The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[error](#error)     | public, _static_ | `void` | The source provides context information for the logged error |
|[info](#info)     | public, _static_ | `void` | more context information (e |
|[verbose](#verbose)     | public, _static_ | `void` | more context information (e |
|[warn](#warn)     | public, _static_ | `void` | more context information (e |




## error

The source provides context information for the logged error. 
If the source's length is more than 20, only the first 20 characters are kept.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string |  |
| `error`    | Error |  |
| `scope`    | [ServiceScope](ServiceScope.md) | _Optional._ |


## info

more context information (e.g., web part information) to the logged message.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string |  |
| `message`    | string |  |
| `scope`    | [ServiceScope](ServiceScope.md) | _Optional._ |


## verbose

more context information (e.g., web part information) to the logged message.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string |  |
| `message`    | string |  |
| `scope`    | [ServiceScope](ServiceScope.md) | _Optional._ |


## warn

more context information (e.g., web part information) to the logged message.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string |  |
| `message`    | string |  |
| `scope`    | [ServiceScope](ServiceScope.md) | _Optional._ |

