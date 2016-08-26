# BaseClientSideWebPart resource type

Implements the minimal functionality for a webpart. This class also provides a bunch of parameter 
validate and access to readonly properties like the displayMode, properties, manifest, instanceId, 
domElement, and so on...


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|disableReactivePropertyChanges      | protected |  boolean | Indicates whether the Web Part's configuration is reactive or not |
|displayMode      | protected |  DisplayMode | Display mode of the Web Part |
|domElement      | protected |  HTMLElement | [domElement description] |
|host      | protected |  IWebPartHost | [host description] |
|instanceId      | protected |  string | [instanceId description] |
|manifest      | protected |  IClientSideWebPartManifest<any> | Web Part's manifest |
|properties      | protected |  P | Property bag of the Web Part |
|propertyPaneSettings      | protected |  IPropertyPaneSettings | Configuration settings of the Web Part for the PropertyPane |
|renderedFromDefaultProperties      | protected |  boolean | Indicates whether the Web Part was rendered from the default properties,  as opposed to using serialized values from the last time that the web part was saved |
|renderedOnce      | protected |  boolean | Indicates whether the Web Part has been rendered once or not |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [BaseClientSideWebPart](BaseClientSideWebPart.md) | Contructor for the BaseClientSideWebPart  If a sub classe overrids the constructor, it needs to call super(context) as the first line of constructor |
|clearError      | protected |  void | Clear the error message from the web part display area |
|configureStartInternal      | protected |  void | !!! WARNING !!! Microsoft owns the right to change any line of code below this line |
|connectWebParts      | public |  void | Connects the web parts |
|dispose      | public |  void | [dispose description] |
|getPropertyPaneSettings      | public |  IPropertyPaneData | [getPropertyPaneSettings description] |
|onBeforeRender      | public |  Promise<T> |  |
|onBeforeSerialize      | public |  IHtmlProperties |  |
|onEvent      | public |  void |  |
|onPropertyChange      | protected |  void | Event handler for the property change on the PropertyPane |
|onPropertyConfigurationComplete      | protected |  void | Event handler called when the configuration is completed for the Web Part |
|onPropertyPaneRendered      | protected |  void | Event handler called when the PropertyPane is rendered |
|onPropertyPaneSave      | protected |  void | Event handler called when the changes are applied on the PropertyPane |
|render      | public |  void |  |
|renderError      | protected |  void | Render an error message in the web part display area |
|serialize      | public |  IWebPartData |  |
|updateIWebPartData      | protected |  void | Updates the Web Part data |
|static      | public |  void | validates the common params within the context |


