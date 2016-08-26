# SPListItem resource type

This class is primarily used with the PageContext class. It provides contextual 
information for the SharePoint list item associated with the current page.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|id      | public |  number | Returns the integer that identifies this list item on the server |
|parentList      | public |  SPList | Returns the SPList that this list item belongs to |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [SPListItem](SPListItem.md) | This class is primarily used with the PageContext class |
|getOdataObject      | public |  IOdataListItem | Returns an ODATA object containing additional information for this list item, if available |
|load      | public |  void | Assigns all properties of the object, then assigns the "state" property  to PageContextItemState |
|updateOdataObject      | public |  void | Updates the ODATA object that will be returned when getOdataObject() is called |


