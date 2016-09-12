# PageContext class





application cache. 
The page context provides standard definitions for common SharePoint objects 
that need to be shared between the client-side application, web parts, and other 
components. Typically the data is fetched via REST queries when navigating to a 
new page, but it can also be preloaded by the web server, or filled from a custom 
application cache.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`public`     | `null` | [`SPWeb`](spweb.md) | will be defined if the PageContext was initialized |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`PageContext`](pagecontext.md) | application cache |





### constructor

application cache. 
The page context provides standard definitions for common SharePoint objects 
that need to be shared between the client-side application, web parts, and other 
components. Typically the data is fetched via REST queries when navigating to a 
new page, but it can also be preloaded by the web server, or filled from a custom 
application cache.

#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`PageContext`](pagecontext.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](servicescope.md) |  |

