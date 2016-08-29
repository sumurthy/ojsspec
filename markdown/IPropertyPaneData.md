# IPropertyPaneData interface

Web part - PropertyPane data contract.



### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`properties:`      |` any` | Property bag from the web part |
|`settings:`      |` [IPropertyPaneSettings](IPropertyPaneSettings.md)` | Web part configuration settings |





## Functions

| Function	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|onClose:      | undefined | `` | Event callback for 'Close' click |
|onConfigurationComplete:      | undefined | `` | Event callback fired when the configuration is completed for the web part |
|onLostFocus:      | undefined | `` | Event callback fired when the focus is handed back to the web part |
|onPropertyChange:      | undefined | `` | Notification event fired when the property has already been validated and modified |
|onRendered:      | undefined | `` | Event callback fired after the PropertyPane is rendered |
|onSave:      | undefined | `` | Event callback for 'Apply' click |


## onClose:

Event callback for 'Close' click.

##### Signature

#### Returns

#### Parameters
None


## onConfigurationComplete:

Event callback fired when the configuration is completed for the web part.

##### Signature

#### Returns

#### Parameters
None


## onLostFocus:

Event callback fired when the focus is handed back to the web part

##### Signature

#### Returns

#### Parameters
None


## onPropertyChange:

Notification event fired when the property has already been validated and modified.

##### Signature

#### Returns

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `propertyName`    | string |  |
| `newValue`    | any |  |


## onRendered:

Event callback fired after the PropertyPane is rendered.

##### Signature

#### Returns

#### Parameters
None


## onSave:

Event callback for 'Apply' click.

##### Signature

#### Returns

#### Parameters
None

