# SPSite resource type

This class is primarily used with the PageContext class. It provides contextual 
information for the SharePoint site collection that hosts the page.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|id      | public |  string | The GUID that identifies the SPSite on the server |
|serverRelativeUrl      | public |  string | Returns a server-relative URL for this SPSite |
|title      | public |  string | Returns the title of the current site collection |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [SPSite](SPSite.md) | This class is primarily used with the PageContext class |
|load      | public |  void | Assigns all properties of the object, then assigns the "state" property  to PageContextItemState |


