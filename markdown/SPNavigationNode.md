# SPNavigationNode resource type

This class is primarily used with the PageContext class. It provides quick launch 
navigation information for the hosting application.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|id      | public |  number | The numeric ID that identifies the SPNavigationNode on the server |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [SPNavigationNode](SPNavigationNode.md) | This class is primarily used with the PageContext class |
|getOdataObject      | public |  IOdataNavigationNode | Returns an ODATA object containing additional navigation information if available |
|load      | public |  void | Assigns all properties of the object, then assigns the "state" property  to PageContextItemState |
|updateOdataObject      | public |  void | Updates the ODATA object that will be returned when getOdataObject() is called |


