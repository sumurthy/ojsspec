# sp-client-preview external module


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [BaseClientSideWebPart](BaseClientSideWebPart.md)     | This abstract class implements the the base functionality for a client side web part |
| [MockWebPartContext](MockWebPartContext.md)     |  |



## Interfaces

| Class	   |  Description |
|:-------------|:---------------|
| [IClientSideWebPartStatusRenderer](IClientSideWebPartStatusRenderer.md)   | error messages for a webpart  |
| [IHtmlProperties](IHtmlProperties.md)   | Structure of the data that a webpart developer can return on the onBeforeSerialize() API  |
| [IOdataList](IOdataList.md)   | Represents an OData SP  |
| [IOdataListItem](IOdataListItem.md)   | Represents an OData SP  |
| [IOdataUser](IOdataUser.md)   | Represents an OData SP  |
| [IOdataUserId](IOdataUserId.md)   | Represents an OData SP  |
| [IPropertyPaneButtonProps](IPropertyPaneButtonProps.md)   |   |
| [IPropertyPaneCheckboxProps](IPropertyPaneCheckboxProps.md)   |   |
| [IPropertyPaneChoiceGroupOption](IPropertyPaneChoiceGroupOption.md)   |   |
| [IPropertyPaneChoiceGroupProps](IPropertyPaneChoiceGroupProps.md)   |   |
| [IPropertyPaneCustomFieldProps](IPropertyPaneCustomFieldProps.md)   |   |
| [IPropertyPaneData](IPropertyPaneData.md)   | Web part - PropertyPane data contract  |
| [IPropertyPaneDropdownOption](IPropertyPaneDropdownOption.md)   |   |
| [IPropertyPaneDropdownProps](IPropertyPaneDropdownProps.md)   |   |
| [IPropertyPaneField<TProperties>](IPropertyPaneField<TProperties>.md)   |   |
| [IPropertyPaneGroup](IPropertyPaneGroup.md)   | PropertyPane group  |
| [IPropertyPaneLabelProps](IPropertyPaneLabelProps.md)   |   |
| [IPropertyPaneLinkProps](IPropertyPaneLinkProps.md)   |   |
| [IPropertyPanePage](IPropertyPanePage.md)   | PropertyPanePage interface  |
| [IPropertyPanePageHeader](IPropertyPanePageHeader.md)   | PropertyPane header  |
| [IPropertyPaneSettings](IPropertyPaneSettings.md)   | Web part configuration settings  |
| [IPropertyPaneSliderProps](IPropertyPaneSliderProps.md)   |   |
| [IPropertyPaneTextFieldProps](IPropertyPaneTextFieldProps.md)   |   |
| [IPropertyPaneToggleProps](IPropertyPaneToggleProps.md)   |   |
| [IWebPartConfigurationEventCallback](IWebPartConfigurationEventCallback.md)   | Configuration event callback  |
| [IWebPartContext](IWebPartContext.md)   | Web part context interface  |
| [IWebPartData](IWebPartData.md)   | a webpart,the output should be this structure  |
| [IWebPartHost](IWebPartHost.md)   | A web part host is a component,control or a page that hosts client side web parts  |



## Functions

| Function	   | Returns | Description |
|:-------------|:------|:---------------|
| [exportcombineURLPaths](exportcombineURLPaths~18160.md) |`string `   | Combines any number of URL paths  |
| [exportgetPathNameFromAbsoluteUrl](exportgetPathNameFromAbsoluteUrl~63965.md) |`string `   | Get's the path name from an absolute url  |
| [exportPropertyPaneButton](exportPropertyPaneButton~86078.md) |`[IPropertyPaneField<IPropertyPaneButtonProps>](IPropertyPaneField.md) `   | Helper method to create a Button on the PropertyPane  |
| [exportPropertyPaneCheckbox](exportPropertyPaneCheckbox~34207.md) |`[IPropertyPaneField<IPropertyPaneCheckboxProps>](IPropertyPaneField.md) `   | Helper method to create a Checkbox on the PropertyPane  |
| [exportPropertyPaneChoiceGroup](exportPropertyPaneChoiceGroup~78657.md) |`[IPropertyPaneField<IPropertyPaneChoiceGroupProps>](IPropertyPaneField.md) `   | Helper method to create a Choice Group on the PropertyPane  |
| [exportPropertyPaneCustomField](exportPropertyPaneCustomField~33868.md) |`[IPropertyPaneField<IPropertyPaneCustomFieldProps>](IPropertyPaneField.md) `   | Helper method to create a Choice Group on the PropertyPane  |
| [exportPropertyPaneDropdown](exportPropertyPaneDropdown~21617.md) |`[IPropertyPaneField<IPropertyPaneDropdownProps>](IPropertyPaneField.md) `   | Helper method to create a Dropdown on the PropertyPane  |
| [exportPropertyPaneHorizontalRule](exportPropertyPaneHorizontalRule~23288.md) |`[IPropertyPaneField<void>](IPropertyPaneField.md) `   | Helper method to create a Horizontal Rule on the PropertyPane  |
| [exportPropertyPaneLabel](exportPropertyPaneLabel~34023.md) |`[IPropertyPaneField<IPropertyPaneLabelProps>](IPropertyPaneField.md) `   | Helper method to create a Label on the PropertyPane  |
| [exportPropertyPaneLink](exportPropertyPaneLink~52757.md) |`[IPropertyPaneField<IPropertyPaneLinkProps>](IPropertyPaneField.md) `   | Helper method to create a Link on the PropertyPane  |
| [exportPropertyPaneSlider](exportPropertyPaneSlider~91210.md) |`[IPropertyPaneField<IPropertyPaneSliderProps>](IPropertyPaneField.md) `   | Helper method to create a Slider on the PropertyPane  |
| [exportPropertyPaneTextField](exportPropertyPaneTextField~15696.md) |`[IPropertyPaneField<IPropertyPaneTextFieldProps>](IPropertyPaneField.md) `   | Helper method to create a TextField on the PropertyPane  |
| [exportPropertyPaneToggle](exportPropertyPaneToggle~64011.md) |`[IPropertyPaneField<IPropertyPaneToggleProps>](IPropertyPaneField.md) `   | Helper method to create a Toggle on the PropertyPane  |


### Enumerations

| Enumeration	   | Description|
|:-----------|:------------|
|[IPropertyPaneFieldType](IPropertyPaneFieldType.md)    |  |
|[PropertyPaneButtonType](PropertyPaneButtonType.md)    |  |
|[WebPartConfigurationEvent](WebPartConfigurationEvent.md)    |  |




