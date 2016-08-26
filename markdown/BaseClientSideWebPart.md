# BaseClientSideWebPart resource type

This abstract class implements the the base functionality for a client side web part. Every client side web part 
needs to inherit from this class. Along with the base functionality, this class provides some APIs that can be 
used by the web part. These APIs fall in two catagories. 
 
The first category of APIs provide data and functionality. Example, the web part context (i.e. this.context). This 
API should be used to access contextual data relevant to this web part instance. 
 
The second category of APIs provide a base implementation for the web part lifecycle and can be overridden for an 
updated implementation. The render() API is the only API that is mandatory to be implemented/overridden by a web 
part. All other life cycle APIs have a base implementation and can be overridden based on the needs of the web part. 
Please refer to the documentation of the individual APIs to make the right decision.


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|accessibleTitle      | protected | string | This property points to the accessible title of web part made available to screen readers |
|context      | protected | [IWebPartContext](IWebPartContext.md) | This property is a pointer to the web part context |
|disableReactivePropertyChanges      | protected | boolean | This property is used to change the web part's PropertyPane interaction from Reactive to NonReactive |
|displayMode      | protected | DisplayMode | This property is the current display mode of the web part |
|domElement      | protected | HTMLElement | This property is a pointer to the root DOM element of the web part |
|previewImageUrl      | protected | string | This property points to the preview image for the web part |
|properties      | protected | TProperties | This property is the pointer to the custom property bag of the web part |
|propertyPaneSettings      | protected | [IPropertyPaneSettings](IPropertyPaneSettings.md) | This property is the pointer to the web part configuration settings |
|renderedFromDefaultProperties      | protected | boolean | This property indicates whether the web part was rendered from the default properties, as opposed to using  serialized state from the last time that the web part was saved |
|renderedOnce      | protected | boolean | This property indicates whether the web part has been rendered once or not |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|constructor      | public | [BaseClientSideWebPart](BaseClientSideWebPart.md) | e |
|clearError      | protected | void | This API should be used to clear the error message from the web part display area |
|configureStart      | protected | void | if it is not already open |
|deserialize      | protected | TProperties | This API is called once during the lifetime of the web part during the intial render and just before the onInit  API call |
|dispose      | protected | void | This API is called at the end of the web part lifecycle |
|onBeforeSerialize      | protected | [IHtmlProperties](IHtmlProperties.md) | the documentation of IHtmlProperties interface for more details |
|onDisplayModeChanged      | protected | void | This API is called when the display mode of a web part is changed |
|onInit      | protected | Promise<T> | This API should be overridden to perform long running operations e |
|onPropertyChange      | protected | void | This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode |
|onPropertyConfigurationComplete      | protected | void | This API is called when the current web part configuration process is completed |
|onPropertyPaneRendered      | protected | void | This API is involed when the PropertyPane is rendered |
|onPropertyPaneSave      | protected | void | this API is invoked when the the changes are applied on the PropertyPane when the PropertyPane is used in  Non-Reactive mode |
|render      | public | void | This API is called to render the web part |
|renderError      | protected | void | This API should be used to render an error message in the web part display area |


