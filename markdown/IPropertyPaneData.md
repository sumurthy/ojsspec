# IPropertyPaneData interface

Web part - PropertyPane data contract.



### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|properties:      | any | Property bag from the web part |
|settings:      | [IPropertyPaneSettings](IPropertyPaneSettings.md) | Web part configuration settings |





## Functions

| Function	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|onClose:      | undefined |  | Event callback for 'Close' click |
|onConfigurationComplete:      | undefined |  | Event callback fired when the configuration is completed for the web part |
|onLostFocus:      | undefined |  | Event callback fired when the focus is handed back to the web part |
|onPropertyChange:      | undefined |  | Notification event fired when the property has already been validated and modified |
|onRendered:      | undefined |  | Event callback fired after the PropertyPane is rendered |
|onSave:      | undefined |  | Event callback for 'Apply' click |



## onClose:

Event callback for 'Close' click.

##### Signature
undefined

#### Returns
void

#### Parameters
None


## onConfigurationComplete:

Event callback fired when the configuration is completed for the web part.

##### Signature
undefined

#### Returns
void

#### Parameters
None


## onLostFocus:

Event callback fired when the focus is handed back to the web part

##### Signature
undefined

#### Returns
void

#### Parameters
None


## onPropertyChange:

Notification event fired when the property has already been validated and modified.

##### Signature
undefined

#### Returns
void

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| propertyName     | undefined | %optional% undefined |
| newValue     | undefined | %optional% undefined |


## onRendered:

Event callback fired after the PropertyPane is rendered.

##### Signature
undefined

#### Returns
void

#### Parameters
None


## onSave:

Event callback for 'Apply' click.

##### Signature
undefined

#### Returns
void

#### Parameters
None

