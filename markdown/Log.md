# Log class





The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[error](#error~o8xg9)     | public, _static_ | void | The source provides context information for the logged error |
|[info](#info~z4ee9)     | public, _static_ | void | more context information (e |
|[verbose](#verbose~j0n09)     | public, _static_ | void | more context information (e |
|[warn](#warn~l5949)     | public, _static_ | void | more context information (e |




## error

The source provides context information for the logged error. 
If the source's length is more than 20, only the first 20 characters are kept.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string | undefined |
| `error`    | Error | undefined |
| `scope`    | [ServiceScope](ServiceScope.md) | _Optional._undefined |


## info

more context information (e.g.,web part information) to the logged message.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string | undefined |
| `message`    | string | undefined |
| `scope`    | [ServiceScope](ServiceScope.md) | _Optional._undefined |


## verbose

more context information (e.g.,web part information) to the logged message.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string | undefined |
| `message`    | string | undefined |
| `scope`    | [ServiceScope](ServiceScope.md) | _Optional._undefined |


## warn

more context information (e.g.,web part information) to the logged message.

##### Signature

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string | undefined |
| `message`    | string | undefined |
| `scope`    | [ServiceScope](ServiceScope.md) | _Optional._undefined |

