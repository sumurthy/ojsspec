# BasicHttpClient resource type

BasicHttpClient implements a basic set of features for performing REST operations. 
The subclass HttpClient extends this basic functionality with SharePoint-specific 
enhancements.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|serviceScope      | protected | [ServiceScope](ServiceScope.md) | Calls fetch(), but sets the method to 'POST' |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [BasicHttpClient](BasicHttpClient.md) | BasicHttpClient implements a basic set of features for performing REST operations |
|fetch      | public | Promise<Response> | Performs a REST service call |
|fetchCore      | protected | Promise<Response> | Performs a REST service call |
|get      | public | Promise<Response> | Calls fetch(), but sets the method to 'GET' |
|post      | public | Promise<Response> | Calls fetch(), but sets the method to 'POST' |


