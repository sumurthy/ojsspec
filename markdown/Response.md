# Response class







### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`string|ResponseType`     | type: | string,ResponseType |  |
|`string`     | statusText: | string |  |
|`number`     | status: | number |  |
|`boolean`     | ok: | boolean |  |
|`Headers`     | headers: | [Headers](Headers.md) |  |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor~41343)     | public | [ResponseInit](ResponseInit.md) |  |
|[error](#error~56041)     | public | [Response](Response.md) |  |
|[redirect](#redirect~56718)     | public | [Response](Response.md) |  |
|[clone](#clone~86778)     | public | [Response](Response.md) |  |




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

