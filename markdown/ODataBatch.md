# ODataBatch class





The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http: 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[constructor](#constructor~3egg9)     | public | [IODataBatchOptions](IODataBatchOptions.md) |  |
|[execute](#execute~6cei9)     | public | [Promise<ODataBatch>](Promise.md) | Executes the batched queries that were queued using ODataBatch |
|[fetch](#fetch~ekuc9)     | public | [Promise<Response>](Promise.md) | Queues a new request,and returns a promise that can be used to access  the server response (after execute() has completed) |
|[get](#get~xkvg9)     | public | [Promise<Response>](Promise.md) | Calls fetch(),but sets the method to 'GET' |
|[post](#post~1dus9)     | public | [Promise<Response>](Promise.md) | Calls fetch(),but sets the method to 'POST' |




## constructor



##### Signature

#### Returns
IODataBatchOptions

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [ServiceScope](ServiceScope.md) | undefined |
| `batchOptions`    | [IODataBatchOptions](IODataBatchOptions.md) | _Optional._undefined |


## execute

Executes the batched queries that were queued using ODataBatch.fetch().

##### Signature

#### Returns
Promise<ODataBatch>

#### Parameters
None


## fetch

Queues a new request,and returns a promise that can be used to access 
the server response (after execute() has completed). The parameters for 
this function are basically the same as the WHATWG API standard documented here: 
https: 
 
However, be aware that certain REST headers are ignored or not allowed inside 
a batch. See the ODATA documentation for details. 
 
When execute() is called, it will POST to a URL such as 
"http: 
guess the appropriate SPWeb URL by looking for a reserved URL segment such as "_api" 
in the first URL passed to fetch(). If not, use IODataBatchOptions.webUrl to specify it 
explicitly. 


##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string | undefined |
| `options`    | IODataBatchRequestOptions | _Optional._undefined |


## get

Calls fetch(),but sets the method to 'GET'.

##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string | undefined |
| `options`    | IODataBatchRequestOptions | _Optional._undefined |


## post

Calls fetch(),but sets the method to 'POST'.

##### Signature

#### Returns
Promise<Response>

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `url`    | string | undefined |
| `options`    | IODataBatchRequestOptions | undefined |

