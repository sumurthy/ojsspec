# BaseClientSideWebPart resource type

%resourcedescription%


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|disableReactivePropertyChanges:      | protected | undefined | Indicates whether the Web Part's configuration is reactive or not |
|displayMode:      | protected | undefined | Display mode of the Web Part |
|domElement:      | protected | undefined | [domElement description] |
|host:      | protected | undefined | [host description] |
|instanceId:      | protected | undefined | [instanceId description] |
|manifest:      | protected | undefined | Web Part's manifest |
|properties:      | protected | undefined | Property bag of the Web Part |
|propertyPaneSettings:      | protected | undefined | Configuration settings of the Web Part for the PropertyPane |
|renderedFromDefaultProperties:      | protected | undefined | Indicates whether the Web Part was rendered from the default properties,  as opposed to using serialized values from the last time that the web part was saved |
|renderedOnce:      | protected | undefined | Indicates whether the Web Part has been rendered once or not |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|



# Canvas resource type

%resourcedescription%


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|ServiceScope,      | constructor(serviceScope: | undefined | Construct a new instance of the Canvas |
|HTMLElement,      | container: | undefined | Construct a new instance of the Canvas |
|DisplayMode,      | mode: | undefined | Construct a new instance of the Canvas |
|string,      | serializedCanvas?: | undefined | Construct a new instance of the Canvas |
|number)      | scrollThreshold?: | undefined | Construct a new instance of the Canvas |
|count:      | public | undefined |  |
|previewUrl:      | public | undefined | Get the preview image url generated from webpart manager if it is available |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|



# ClientSideApplication resource type

%resourcedescription%


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|domElement:      | protected | undefined | Returns the DOM element where the application is expected to render its content |
|shell:      | protected | undefined | Returns a reference to the shell, which is a global singleton object that contains  the main service classes |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|



# EventAggregator resource type

%resourcedescription%


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|



# GuidHelpers resource type

%resourcedescription%


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|



# PageContext resource type

%resourcedescription%


### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|application:      | public | undefined | Contextual information for the client-side application |
|core:      | public | undefined | Contextual information for the SharePoint SPPageContextInfo object  If unsure whether this object is initialized, check the SPPageContextInfo |
|list:      | public | undefined | Contextual information for the SharePoint list that is hosting the page |
|listItem:      | public | undefined | Contextual information for the SharePoint list item that stores data for the page |
|quickLaunch:      | public | undefined | Contextual quick launch navigation information for the page |
|site:      | public | undefined | Contextual information for the SharePoint site collection that is hosting the page |
|topNav:      | public | undefined | Top navigation information for the page |
|urlQueryParameters:      | public | undefined | Object for retrieving the current page's query parameter values |
|user:      | public | undefined | Contextual information for the current SharePoint user  If unsure whether this object is initialized, check the SPPageContextInfo |
|web:      | public | undefined | Contextual information for the SharePoint site ("web") that is hosting the page |



## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|


