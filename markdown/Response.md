# Response class




### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|string|ResponseType      | type: | string,ResponseType |  |
|string      | statusText: | string |  |
|number      | status: | number |  |
|boolean      | ok: | boolean |  |
|Headers      | headers: | [Headers](Headers.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor)      | public | [Response](Response.md) |  |
|[Response](#response)      | clone(): | [Response](Response.md) |  |
|[string,](#string,)      | redirect(url: | [Response](Response.md) |  |




## constructor



##### Signature
constructor(body?: BodyInit, init?: ResponseInit)

#### Returns
Response

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| body?     | undefined | %optional% undefined |
| init?     | undefined | %optional% undefined |


## Response



##### Signature
Response

#### Returns
Response

#### Parameters
None


## string,



##### Signature
string, status: number): Response

#### Returns
Response

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| url     | undefined | %optional% undefined |
| status     | undefined | %optional% undefined |

