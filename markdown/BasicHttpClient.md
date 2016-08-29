# BasicHttpClient class

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`serviceScope`     | protected | [ServiceScope](ServiceScope.md) | Calls fetch(), but sets the method to 'POST' |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor)     | public | [BasicHttpClient](BasicHttpClient.md) |  |
|[fetch](#fetch)     | public | Promise<Response> | Performs a REST service call |
|[fetchCore](#fetchcore)     | protected | Promise<Response> | Performs a REST service call |
|[get](#get)     | public | Promise<Response> | Calls fetch(), but sets the method to 'GET' |
|[post](#post)     | public | Promise<Response> | Calls fetch(), but sets the method to 'POST' |




## constructor



##### Signature

#### Returns
BasicHttpClient

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [ServiceScope](ServiceScope.md) |  |


## fetch

Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string |  |
| `options`    | [IBasicHttpClientOptions](IBasicHttpClientOptions.md) |  |


## fetchCore

Performs a REST service call. Although the HttpClient subclass adds 
additional enhancements, the parameters and semantics for BasicHttpClient.fetch() 
are essentially the same as the WHATWG API standard that is documented here: 
https://fetch.spec.whatwg.org/

##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `request`    | [Request](Request.md) |  |


## get

Calls fetch(), but sets the method to 'GET'.

##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string |  |
| `options`    | [IBasicHttpClientOptions](IBasicHttpClientOptions.md) | _Optional._ |


## post

Calls fetch(), but sets the method to 'POST'.

##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string |  |
| `options`    | [IBasicHttpClientOptions](IBasicHttpClientOptions.md) |  |

