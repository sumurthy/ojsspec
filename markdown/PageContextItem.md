# PageContextItem resource type

This is an abstract base class for the SPSite, SPWeb, SPList, SPListItem, 
and ApplicationContext classes. It defines the "state" of these objects.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|state      | public |  PageContextItemState | Indicates whether the context item is uninitialized, waiting to be loaded,  or ready to use |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [PageContextItem](PageContextItem.md) | [constructor description] |
|getPageContext      | public |  PageContext | Returns the PageContext that owns this object |
|validateLoad      | protected |  void | Reports an error if the object has already been loaded |


