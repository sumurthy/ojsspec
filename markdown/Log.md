# Log class





The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`error`](#error~o8xg9)     | public, _static_ | void | The source provides context information for the logged error |
|[`info`](#info~z4ee9)     | public, _static_ | void | more context information (e |
|[`verbose`](#verbose~j0n09)     | public, _static_ | void | more context information (e |
|[`warn`](#warn~l5949)     | public, _static_ | void | more context information (e |




## error

The source provides context information for the logged error. 
If the source's length is more than 20, only the first 20 characters are kept.

##### Signature
`public error(source: string,error: Error,scope?: ServiceScope): void`

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string |  |
| `error`    | Error |  |
| `scope`    | [`ServiceScope`](ServiceScope.md) | _Optional._ |


## info

more context information (e.g.,web part information) to the logged message.

##### Signature
`public info(source: string,message: string,scope?: ServiceScope): void`

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string |  |
| `message`    | string |  |
| `scope`    | [`ServiceScope`](ServiceScope.md) | _Optional._ |


## verbose

more context information (e.g.,web part information) to the logged message.

##### Signature
`public verbose(source: string,message: string,scope?: ServiceScope): void`

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string |  |
| `message`    | string |  |
| `scope`    | [`ServiceScope`](ServiceScope.md) | _Optional._ |


## warn

more context information (e.g.,web part information) to the logged message.

##### Signature
`public warn(source: string,message: string,scope?: ServiceScope): void`

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | string |  |
| `message`    | string |  |
| `scope`    | [`ServiceScope`](ServiceScope.md) | _Optional._ |

