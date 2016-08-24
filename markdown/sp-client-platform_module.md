# sp-client-platform external module


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [BaseClientSideWebPart](BaseClientSideWebPart.md)     | Implements the minimal functionality for a webpart |
| [Canvas](Canvas.md)     | SharePoint Client-side Applications can use the SharePoint Canvas to enable rich content authoring  as part of their experience |
| [ClientSideApplication](ClientSideApplication.md)     | This is the system base class for client-side applications |
| [EventAggregator](EventAggregator.md)     | Event Aggregator |
| [GuidHelpers](GuidHelpers.md)     | Get's the path name from an absolute url |
| [PageContext](PageContext.md)     | The page context represents contextual information about the SharePoint page that  is currently being viewed, such as its site URL, the client side application ID,  the current user, etc |
| [PageContextItem](PageContextItem.md)     | This is an abstract base class for the SPSite, SPWeb, SPList, SPListItem,  and ApplicationContext classes |
| [PreloadedPageData](PreloadedPageData.md)     | THIS CLASS IS DEPRECATED |
| [ReactWebPart](ReactWebPart.md)     | Implement some common functionality for a base React webpart |
| [SPList](SPList.md)     | This class is primarily used with the PageContext class |
| [SPListItem](SPListItem.md)     | This class is primarily used with the PageContext class |
| [SPNavigationNode](SPNavigationNode.md)     | This class is primarily used with the PageContext class |
| [SPNavigationNodeCollection](SPNavigationNodeCollection.md)     | This class is primarily used with the PageContext class |
| [SPSite](SPSite.md)     | This class is primarily used with the PageContext class |
| [SPUser](SPUser.md)     | This class is primarily used with the PageContext class |
| [SPWeb](SPWeb.md)     | This class is primarily used with the PageContext class |
| [TextResourceRequest](TextResourceRequest.md)     |  |



## Interfaces

| Class	   |  Description |
|:-------------|:---------------|
| [IClientSideWebPart](IClientSideWebPart.md)     | Client Side Web Part Interface  |
| [IClientSideWebPartStatusRenderer](IClientSideWebPartStatusRenderer.md)     | Interface to be implemented by a component that should display the loading indicator and  error messages for a webpart  |
| [ICustomPropertyPaneFieldProps](ICustomPropertyPaneFieldProps.md)     | CustomPropertyField props  |
| [IEvent<T>](IEvent<T>.md)     | Event object  |
| [IEventAggregator](IEventAggregator.md)     | Publis APIs for the EventAggregator  |
| [IEventCallback<T>](IEventCallback<T>.md)     | Event callback  |
| [IHtmlProperties](IHtmlProperties.md)     | Structure of the data that a webpart developer can return on the onBeforeSerialize() API  |
| [IOdataList](IOdataList.md)     | Represents an OData SP  |
| [IOdataListItem](IOdataListItem.md)     | Represents an OData SP  |
| [IOdataUser](IOdataUser.md)     | Represents an OData SP  |
| [IOdataUserId](IOdataUserId.md)     | Represents an OData SP  |
| [IOdataWeb](IOdataWeb.md)     | Represents an OData SP  |
| [IOnCustomPropertyFieldChanged](IOnCustomPropertyFieldChanged.md)     | CustomPropertyFieldChanged contract  |
| [IPropertyPaneField](IPropertyPaneField.md)     | PropertyPane field  |
| [IPropertyPaneGroup](IPropertyPaneGroup.md)     | PropertyPane group  |
| [IPropertyPaneHeader](IPropertyPaneHeader.md)     | PropertyPane header  |
| [IPropertyPanePage](IPropertyPanePage.md)     | PropertyPane page  |
| [IPropertyPaneSettings](IPropertyPaneSettings.md)     | Web Part configuration settings  |
| [IReactWebPartProps](IReactWebPartProps.md)     |   |
| [IShell](IShell.md)     | The system shell manages the initial loading of the scripts for a client-side application,  as well as constructin the ClientSideApplication object, and initializing key services such  as the page chrome, page context, HTTP client, etc  |
| [ISuiteNavManagerConfiguration](ISuiteNavManagerConfiguration.md)     | Interface for the Suite Nav Manager Configuration  |
| [IWebPartConfigurationEventCallback](IWebPartConfigurationEventCallback.md)     | Configuration event callback  |
| [IWebPartContext](IWebPartContext.md)     | Context object that needs to be passed to the WebPart constructor  |
| [IWebPartData](IWebPartData.md)     | This structure represents the the serialized state of a webpart  |
| [IWebPartEvent<T>](IWebPartEvent<T>.md)     | Structure representing webpart - webpart events  |
| [IWebPartHost](IWebPartHost.md)     |   |
| [TextResource](TextResource.md)     |   |



## Functions

| Function	   | Returns | Description |
|:-------------|:------|:---------------|
| [combineURLPaths](combineURLPaths.md) |string    | [combineURLPaths description]  |
| [getPathNameFromAbsoluteUrl](getPathNameFromAbsoluteUrl.md) |string    | Get's the path name from an absolute url  |
| [PropertyPaneCheckbox](PropertyPaneCheckbox.md) |[IPropertyPaneField](IPropertyPaneField.md)    | Helper method to create a Checkbox on the PropertyPane  |
| [PropertyPaneDropdown](PropertyPaneDropdown.md) |[IPropertyPaneField](IPropertyPaneField.md)    | Helper method to create a Dropdown on the PropertyPane  |
| [PropertyPaneHeading](PropertyPaneHeading.md) |[IPropertyPaneField](IPropertyPaneField.md)    | Helper method to create a Heading on the PropertyPane  |
| [PropertyPaneLabel](PropertyPaneLabel.md) |[IPropertyPaneField](IPropertyPaneField.md)    | Helper method to create a Label on the PropertyPane  |
| [PropertyPaneLink](PropertyPaneLink.md) |[IPropertyPaneField](IPropertyPaneField.md)    | Helper method to create a Link on the PropertyPane  |
| [PropertyPaneSlider](PropertyPaneSlider.md) |[IPropertyPaneField](IPropertyPaneField.md)    | Helper method to create a Slider on the PropertyPane  |
| [PropertyPaneTextField](PropertyPaneTextField.md) |[IPropertyPaneField](IPropertyPaneField.md)    | Continued description of the parameter  |
| [PropertyPaneToggle](PropertyPaneToggle.md) |[IPropertyPaneField](IPropertyPaneField.md)    | [PropertyPaneToggle description]  |


### Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[CanvasControlType](CanvasControlType.md)     |  |
|[HostType](HostType.md)     |  |
|[IPropertyPaneFieldType](IPropertyPaneFieldType.md)     | Enum for all the supported PropertyPane field types |
|[IPropertyPaneHeadingLevel](IPropertyPaneHeadingLevel.md)     | PropertyPane heading level |
|[WebPartConfigurationEvent](WebPartConfigurationEvent.md)     | WebPart PropertyPane configuration events  some sample text |

