# SPNavigationNodeCollection resource type

This class is primarily used with the PageContext class. It provides navigation 
information for the hosting application.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|items      | public |  SPNavigationNode[] | Returns all navigation nodes in the collection |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [SPNavigationNodeCollection](SPNavigationNodeCollection.md) | This class is primarily used with the PageContext class |
|getOdataObject      | public |  IOdataNavigationNode[] | Returns an ODATA object containing additional navigation information if available |
|updateOdataObject      | public |  void | Updates the ODATA object that will be returned when getOdataObject() is called |


