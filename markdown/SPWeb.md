# SPWeb resource type

This class is primarily used with the PageContext class. It provides contextual 
information for the SharePoint site ("web") that hosts the page.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|id      | public |  string | The GUID that identifies the SPWeb on the server |
|parentSite      | public |  SPSite | Returns the parent site collection that this site ("web") belongs to |
|serverRelativeUrl      | public |  string | Returns a server-relative URL for this SPWeb |
|title      | public |  string | Returns the title of the SharePoint site |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [SPWeb](SPWeb.md) | This class is primarily used with the PageContext class |
|getOdataObject      | public |  IOdataWeb | Returns an ODATA object containing additional information for this SharePoint site ("web"),  if available |
|load      | public |  void | Assigns all properties of the object, then assigns the "state" property  to PageContextItemState |
|updateOdataObject      | public |  void | Updates the ODATA object that will be returned when getOdataObject() is called |


