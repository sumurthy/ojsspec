# SPList resource type

This class is primarily used with the PageContext class. It provides contextual 
information for the SharePoint site collection that is hosting the page.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|description      | public |  string | The description of the list |
|id      | public |  string | The GUID that identifies the SPList on the server |
|parentWeb      | public |  SPWeb | The parent SPWeb that this list belongs to |
|title      | public |  string | The title of the list |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [SPList](SPList.md) | This class is primarily used with the PageContext class |
|getOdataObject      | public |  IOdataList | Returns an ODATA object containing additional information for this list, if available |
|load      | public |  void | Assigns all properties of the object, then assigns the "state" property  to PageContextItemState |
|updateOdataObject      | public |  void | Updates the ODATA object that will be returned when getOdataObject() is called |


