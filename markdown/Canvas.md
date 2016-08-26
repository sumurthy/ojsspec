# Canvas resource type

SharePoint Client-side Applications can use the SharePoint Canvas to enable rich content authoring 
as part of their experience. The SharePoint canvas provides Rich Text Editing capabilities, SharePoint 
Client-side WebPart aggregation and hosting, and a beautiful railed design experience. 



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|ServiceScope,      | constructor(serviceScope: |  ServiceScope, | Construct a new instance of the Canvas |
|HTMLElement,      | container: |  HTMLElement, | Construct a new instance of the Canvas |
|DisplayMode,      | mode: |  DisplayMode, | Construct a new instance of the Canvas |
|string,      | serializedCanvas?: |  string, | Construct a new instance of the Canvas |
|number)      | scrollThreshold?: |  number) | Construct a new instance of the Canvas |
|count      | public |  number |  |
|previewUrl      | public |  string | Get the preview image url generated from webpart manager if it is available |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|      | handleCanvasChanged?: |  () => void, | Construct a new instance of the Canvas |
|dispose      | public |  void | Unmount the Canvas from the container it was constructed with |
|openToolbox      | public |  boolean | Display the Canvas' Toolbox at a given row |
|render      | public |  void | Render the Canvas into its container DOM element |
|serialize      | public |  string | Serialize the current contents of the Canvas |


