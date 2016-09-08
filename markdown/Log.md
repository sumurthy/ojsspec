# Log class





The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`error`](#error)     | `public, _static_` | `void` | Logs an error |
|[`info`](#info)     | `public, _static_` | `void` | Logs an informational message |
|[`verbose`](#verbose)     | `public, _static_` | `void` | Logs a verbose message |
|[`warn`](#warn)     | `public, _static_` | `void` | Logs a warning |




### error

Logs an error

#### Signature
`public error(source: string,error: Error,scope?: ServiceScope): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` |  |
| `error`    | `Error` |  |
| `scope`    | [`ServiceScope`](servicescope.md) | _Optional._ |


### info

Logs an informational message

#### Signature
`public info(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` |  |
| `message`    | `string` |  |
| `scope`    | [`ServiceScope`](servicescope.md) | _Optional._ |


### verbose

Logs a verbose message

#### Signature
`public verbose(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` |  |
| `message`    | `string` |  |
| `scope`    | [`ServiceScope`](servicescope.md) | _Optional._ |


### warn

Logs a warning

#### Signature
`public warn(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` |  |
| `message`    | `string` |  |
| `scope`    | [`ServiceScope`](servicescope.md) | _Optional._ |

