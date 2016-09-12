# Log class





 
The Log class provides static methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`error`](#error)     | `public, _static_` | `void` | Logs an error  Logs an error |
|[`info`](#info)     | `public, _static_` | `void` | Logs an informational message  Logs an informational message |
|[`verbose`](#verbose)     | `public, _static_` | `void` | Logs a verbose message  Logs a verbose message |
|[`warn`](#warn)     | `public, _static_` | `void` | Logs a warning  Logs a warning |




### error

Logs an error 
Logs an error

#### Signature
`error(source: string,error: Error,scope?: ServiceScope): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the error is logged,e |
| `error`    | `Error` | - the error to be logged  Logs an error |
| `scope`    | [`ServiceScope`](servicescope.md) | _Optional._- the service scope that the source uses |


### info

Logs an informational message 
Logs an informational message

#### Signature
`info(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e |
| `message`    | `string` | - the message to be logged  Logs an informational message |
| `scope`    | [`ServiceScope`](servicescope.md) | _Optional._- the service scope that the source uses |


### verbose

Logs a verbose message 
Logs a verbose message

#### Signature
`verbose(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e |
| `message`    | `string` | - the message to be logged  Logs a verbose message |
| `scope`    | [`ServiceScope`](servicescope.md) | _Optional._- the service scope that the source uses |


### warn

Logs a warning 
Logs a warning

#### Signature
`warn(source: string,message: string,scope?: ServiceScope): void`

#### Returns
`void`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `source`    | `string` | - the source from where the message is logged,e |
| `message`    | `string` | - the message to be logged  Logs a warning |
| `scope`    | [`ServiceScope`](servicescope.md) | _Optional._- the service scope that the source uses |
