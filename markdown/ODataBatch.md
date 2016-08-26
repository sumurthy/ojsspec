# ODataBatch resource type

The ODataBatch class accumulates a number of REST service calls and 
transmits them as a single ODATA batch. This protocol is documented here: 
http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html 
 
The usage is to call ODataBatch.fetch() to queue each individual request, 
and then call ODataBatch.execute() to execute the batch operation. 
The execute() method returns a promise that resolves when the real REST 
call has completed. Each call to fetch() also returns a promise that will 
resolve with a Response object for that particular request. 





## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [ODataBatch](ODataBatch.md) | The ODataBatch class accumulates a number of REST service calls and  transmits them as a single ODATA batch |
|execute      | public | Promise<ODataBatch> | Executes the batched queries that were queued using ODataBatch |
|fetch      | public | Promise<Response> | Queues a new request, and returns a promise that can be used to access  the server response (after execute() has completed) |
|get      | public | Promise<Response> | Calls fetch(), but sets the method to 'GET' |
|post      | public | Promise<Response> | Calls fetch(), but sets the method to 'POST' |


