/// <reference path="../typings/tsd.d.ts" />

/**
  * Sample PropertyPaneButtonType description
  */
enum PropertyPaneButtonType {
  Command,
  Compound,
  // (undocumented)
  Hero,
  Icon,
  Normal,
  Primary
}

/**
 * Helper method to create a Checkbox on the PropertyPane1
 * @param targetProperty - Target property the checkbox is associated to.
 * @param properties - Strongly typed Checkbox properties.
 */
export function PropertyPaneCheckbox(targetProperty: string,
  properties: IPropertyPaneCheckboxProps): IPropertyPaneField<IPropertyPaneCheckboxProps>;

/**
 * Helper method to create a Choice Group on the PropertyPane2
 * @param targetProperty - Target property the choice group is associated to.
 * @param properties - Strongly typed Choice Group properties.
 */
export function PropertyPaneChoiceGroup(targetProperty: string,
  properties: IPropertyPaneChoiceGroupProps): IPropertyPaneField<IPropertyPaneChoiceGroupProps>;

/**
 * Helper method to create a Choice Group on the PropertyPane3
 * @param targetProperty - Target property the choice group is associated to.
 * @param properties - Strongly typed Choice Group properties.
 */
export function PropertyPaneCustomField(targetProperty: string,
  properties: IPropertyPaneCustomFieldProps): IPropertyPaneField<IPropertyPaneCustomFieldProps>;

/**
 * Helper method to create a Dropdown on the PropertyPane.
 * @param targetProperty - Target property the dropdown is associated to.
 * @param properties - Strongly typed Dropdown properties.
 */
export function PropertyPaneDropdown(targetProperty: string,
  properties: IPropertyPaneDropdownProps): IPropertyPaneField<IPropertyPaneDropdownProps>;

/**
 * Helper method to create a Horizontal Rule on the PropertyPane.
 * @param properties - Strongly typed Horizontal Rule properties.
 */
export function PropertyPaneHorizontalRule(): IPropertyPaneField<void>;

/**
 * Helper method to create a Label on the PropertyPane.
 * @param targetProperty - Target property the label is associated to.
 * @param properties - Strongly typed Label properties.
 */
}
