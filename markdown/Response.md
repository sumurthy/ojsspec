# Response class









### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`string|ResponseType`     | type: | string,[ResponseType](ResponseType.md) |  |
|`string`     | statusText: | string |  |
|`number`     | status: | number |  |
|`boolean`     | ok: | boolean |  |
|`Headers`     | headers: | [Headers](Headers.md) |  |
|`OBJECTERROR`     | } | } |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor~42878)     | public | [ResponseInit](ResponseInit.md) |  |
|[error](#error~42620)     | public | [Response](Response.md) |  |
|[redirect](#redirect~28395)     | public | [Response](Response.md) |  |
|[clone](#clone~16151)     | public | [Response](Response.md) |  |




## constructor



##### Signature

#### Returns
ResponseInit

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `body`    | BodyInit | _Optional._ |
| `init`    | [ResponseInit](ResponseInit.md) | _Optional._ |


## error



##### Signature

#### Returns
Response

#### Parameters
None


## redirect



##### Signature

#### Returns
Response

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string |  |
| `status`    | number |  |


## clone



##### Signature

#### Returns
Response

#### Parameters
None

