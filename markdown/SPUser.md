# SPUser resource type

This class is primarily used with the PageContext class. It provides contextual 
information for the current user visiting the page.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|id      | public |  number | The ID that identifies the SPUser on the server |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [SPUser](SPUser.md) | This class is primarily used with the PageContext class |
|getOdataObject      | public |  IOdataUser | Returns an ODATA object containing additional information for this user, if available |
|load      | public |  void | Assigns all properties of the object, then assigns the "state" property  to PageContextItemState |
|updateOdataObject      | public |  void | Updates the ODATA object that will be returned when getOdataObject() is called |


