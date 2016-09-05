# Response class









### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`string|ResponseType`     | type: | string,[ResponseType](ResponseType.md) |  |
|`string`     | statusText: | string |  |
|`number`     | status: | number |  |
|`boolean`     | ok: | boolean |  |
|`Headers`     | headers: | [Headers](Headers.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor~3egg9)     | public | [ResponseInit](ResponseInit.md) |  |
|[error](#error~o8xg9)     | public | [Response](Response.md) |  |
|[redirect](#redirect~ikt49)     | public | [Response](Response.md) |  |
|[clone](#clone~mtkw9)     | public | [Response](Response.md) |  |




## constructor



##### Signature

#### Returns
ResponseInit

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `body`    | BodyInit | _Optional._undefined |
| `init`    | [ResponseInit](ResponseInit.md) | _Optional._undefined |


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
| `url`    | string | undefined |
| `status`    | number | undefined |


## clone



##### Signature

#### Returns
Response

#### Parameters
None

