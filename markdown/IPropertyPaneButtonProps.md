# IPropertyPaneButtonProps interface





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|ariaDescription      | string | Detailed description of the button for the benefit of screen readers |
|ariaLabel      | string | The aria label of the button for the benefit of screen readers |
|buttonType      | PropertyPaneButtonType | The type of button to render |
|description      | string | Description of the action this button takes |
|disabled      | boolean | Whether the button is disabled |
|icon      | string | The button icon shown in command or hero type |
|text:      | string | Display text of the element |





## Functions

| Function	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|onClick:      | undefined |  | for an individual element |



## onClick:

for an individual element. This is because, button click does not result in any property change, and hence 
cannot fire the 'onChange'' event for a property, and ends up becoming a no-op. To avoid this, giving the 
control back to the web part, so that web part can make act acordingly. 
 
todo: VSO# 233578:PropertyPane Button OnClick event api.

##### Signature
undefined

#### Returns
any

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| value     | undefined | %optional% undefined |

