/// <reference path="../typings/tsd.d.ts" />

/**
 * This abstract class implements the the base functionality for a client side web part. Every client side web part
 * needs to inherit from this class. Along with the base functionality, this class provides some APIs that can be
 * used by the web part. These APIs fall in two catagories.
 * 
 * The first category of APIs provide data and functionality. Example, the web part context (i.e. this.context). This
 * API should be used to access contextual data relevant to this web part instance.
 * 
 * The second category of APIs provide a base implementation for the web part lifecycle and can be overridden for an
 * updated implementation. The render() API is the only API that is mandatory to be implemented/overridden by a web
 * part. All other life cycle APIs have a base implementation and can be overridden based on the needs of the web part.
 * Please refer to the documentation of the individual APIs to make the right decision.
 */
declare class BaseClientSideWebPart<TProperties> {
  /**
   * Constructor for the BaseClientSideWebPart class.
   * If a sub class overrides the constructor, it needs to call super(context) as the first line of its constructor.
   * 
   * @param context - web part context.
   * 
   * e.g.
   *   constructor(conext: IWebPartContext) {
   *     super(context);
   *     .
   *     . class specific constructor code ..
   *   }
   */
  constructor(ctx: IWebPartContext);

  /**
   * This property points to the accessible title of web part made available to screen readers. The base implementation
   * returns that default title in the manifest. Web parts that want to provide more descriptive title containing
   * contextual information need to override this API.
   * 
   * @readonly
   */
  protected accessibleTitle: string;
  /**
   * This API should be used to clear the error message from the web part display area.
   */
  protected clearError(): void;
  /**
   * This API should be used to invoke the PropertyPane to help configure the web part.
   * 
   * @param boolean - If specified and true - refresh a PropertyPane that's already been open, but not open
   * if it is not already open.
   */
  protected configureStart(refreshOnly?: boolean): void;
  /**
   * This property is a pointer to the web part context.
   * @see IWebPartContex for more details.
   * 
   * @readonly
   */
  protected context: IWebPartContext;

  /**
   * This API is called once during the lifetime of the web part during the intial render and just before the onInit
   * API call. The purpose of this API is to help a web part developer deserialize the web part data and manage the
   * versioning of their data as the web part code evolves. The web part data may have been persisted with an older
   * or newer version of the web part code. This API gives the web part developer an opportunity to re-structure their
   * data to the appropriate data schema. The persisted data contains the version number information. That information
   * can be used to make decisions on how to re-structure the data.
   * 
   * @param data - web part persisted data.
   * @returns - web part property bag.
   * 
   */
  protected deserialize(data: IWebPartData): TProperties;
  /**
   * This property is used to change the web part's PropertyPane interaction from Reactive to NonReactive. The default
   * behaviour is Reactive. Where,
   * Reactive implies that changes made in the PropertyPane are transmitted to the web part instantly and the user can
   * see instant updates. This helps the page creator get instant feedback and decide if they should keep the new
   * configuration changes or not.
   * NonReactive implies that the configuraiton changes are transmitted to the web part only after 'Apply' PropertyPane
   * button is clicked.
   * 
   * @readonly
   */
  protected disableReactivePropertyChanges: boolean;
  /**
   * This property is the current display mode of the web part.
   * 
   * @readonly
   */
  protected displayMode: DisplayMode;

  /**
   * This API is called at the end of the web part lifecycle. It should be overridden to dispose any
   * resources that the web part is holding onto.
   */
  protected dispose(): void;
  /**
   * This property is a pointer to the root DOM element of the web part. This is a DIV element and contains the whole
   * DOM subtree of the web part.
   * 
   * @readonly
   */
  protected domElement: HTMLElement;



  /**
   * This API is called before a web part is serialized. The default implementation is a no-op. A web part developer
   * is expected to override this API when the web part's state is not fully reflected in the property bag i.e.
   * this.properties. In the overridden method, the web part developer is expected to update the state of the web
   * part property bag. This way the web part serialization process will use the upto date state of the web part.
   * 
   * @returns - reference to searchable properties and properties that need link fixup. Please read
   * the documentation of IHtmlProperties interface for more details.
   */
  protected onBeforeSerialize(): IHtmlProperties;
  /**
   * This API is called when the display mode of a web part is changed. The default implementation of this API calls
   * the web part render method to re-render the web part with the new display mode. If a web part developer does not
   * want a full re-render to happen on display mode change, they can override this API and perform specific updates
   * to the web part DOM to switch its display mode.
   * 
   * @param oldDisplayMode - The old display mode.
   * 
   */
  protected onDisplayModeChanged(oldDisplayMode: DisplayMode): void;

  /**
   * This API should be overridden to perform long running operations e.g. data fetching from a remote service before
   * the initial rendering of the web part. The loading indicator is displayed during the lifetime of this method.
   * This API is called only once during the lifecycle of a web part.
   */
  protected onInit < T >(): Promise<T>;
  /**
   * This API is invoked on property changes in the PropertyPane when the PropertyPane is being used in Reactive mode.
   * The base implementation of this API updates the web part property bag and re-render the web part. This API also
   * invokes the web part host's setDirty API.
   * 
   * @param propertyPath - JSON path of the property in the property bag.
   * @param newValue - New value of the property.
   */
  protected onPropertyChange(propertyPath: string, newValue: any): void;
  /**
   * This API is called when the current web part configuration process is completed. ConfigurationComplete event
   * is fired when user switches between web parts while the PropertyPane is open, and this event handler is called
   * for the previously selected web part.
   * 
   */
  protected onPropertyConfigurationComplete(): void;
  /**
   * This API is involed when the PropertyPane is rendered.
   */
  protected onPropertyPaneRendered(): void;
  /**
   * this API is invoked when the the changes are applied on the PropertyPane when the PropertyPane is used in
   * Non-Reactive mode. This API is not invoked when the PropertyPane is used in Reactive mode.
   */
  protected onPropertyPaneSave(): void;
  /**
   * This property points to the preview image for the web part. The base implementation returns undefined. Web parts
   * that want to provide a valid preview image url need to override this API. The preview image url can be used to
   * create a preview of the web part or of the page on which the web part is present.
   * 
   * @readonly
   */
  protected previewImageUrl: string;

  /**
   * This property is the pointer to the custom property bag of the web part.
   * 
   * @readonly
   */
  protected properties: TProperties;

  /**
   * This property is the pointer to the web part configuration settings. If the web part wants to use the PropertyPane
   * for configuration, this API needs to be overridden and the web part needs to return the set of properties it wants
   * to display in the PropertyPane.
   * 
   * @see IPropertyPane and other PropertyPane integration wiki documentation for more details.
   * 
   * @readonly
   */
  protected propertyPaneSettings: IPropertyPaneSettings;
  /**
   * This API is called to render the web part. There is no base implementation of this API and the web part is
   * required to override this API.
   */
  public render(): void;
  /**
   * This property indicates whether the web part was rendered from the default properties, as opposed to using
   * serialized state from the last time that the web part was saved.
   * 
   * @readonly
   */
  protected renderedFromDefaultProperties: boolean;

  /**
   * This property indicates whether the web part has been rendered once or not. After the first time rendering,
   * the value of this property is always true. Till a full re-render of the web part happens.
   * 
   * @readonly
   */
  protected renderedOnce: boolean;

  /**
   * This API should be used to render an error message in the web part display area. Also logs the error message
   * using the trace logger.
   * 
   * @param error - An error object containing the error message to render.
   */
  protected renderError(error: Error): void;
}





/**
 * Combines any number of URL paths.
 */
export function combineURLPaths(...url: string[]): string;

/**
 * Get's the path name from an absolute url.
 * 
 */
export function getPathNameFromAbsoluteUrl(url: string): string;

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.Interface to be implemented by a component that should display the loading indicator and
 * error messages for a webpart.
 */
interface IClientSideWebPartStatusRenderer {
  /**
   * Clear the webpart error message.
   * @param domElement - the webpart container div.
   */
  clearError(domElement: HTMLElement): void;
  /**
   * Clear the loading indicator.
   * @param domElement - the webpart container div.
   */
  clearLoadingIndicator(domElement: Element): void;
  /**
   * Display a loading spinner.
   * @param domElement - the webpart container div.
   * @param loadingMessage - the message to be displayed when the loading spinner id displayed.
   */
  displayLoadingIndicator(domElement: Element, loadingMessage: string): void;
  /**
   * Render the provided error message in the webpart container div.
   * @param domElement - the webpart container div.
   * @param error - the error message.
   */
  renderError(domElement: HTMLElement, error: Error | string): void;
}







/**
 * Structure of the data that a webpart developer can return on the onBeforeSerialize() API.
 * The outcome contains 3 kay/value dictionaries for properties that need to be search indexed.
 * Both keys and values are expected to be strings and will be HTML encoded during serialization.
 * 
 * {
 *   searchableProperties: { 'prop1': 'value_of_prop1' },
 *   linkProperties: { 'prop2': 'http://www.contoso.com/page1.aspx' },
 *   imageLinkPropertes: { 'prop3': 'http://www.contoso.com/imag.png' }
 * }
 * 
 * This input would get translated to the following HTML string.
 * 
 * "<div data-sp-prop-name='prop1'>value1</div>
 * <link data-sp-prop-name='prop2' href='http://www.contoso.com/page1.aspx'>
 * <img data-sp-prop-name='prop2' href='http://www.contoso.com/image.png'>"
 * 
 */
interface IHtmlProperties {
  imageLinkProperties: {
    [ propName: string ]: string
  }
  linkProperties: {
    [ propName: string ]: string
  }
  searchableProperties: {
    [ propName: string ]: string
  }
}

/**
 * Represents an OData SP.List object.  For more information about this object
 * see the MSDN documentation here:
 * https://msdn.microsoft.com/en-us/library/office/jj860569.aspx
 */
interface IOdataList {
  BaseTemplate: number;
  /**
   * Example: "/Date(1453294804000)/"
   */
  Created: string;
  CurrentChangeToken: IODataChangeToken;
  Description: string;
  /**
   * Example: "MyListTitleList"
   */
  EntityTypeName: string;
  Hidden: boolean;
  /**
   * Example: "/Guid(9fb9199b-65f2-4a4a-b597-11d1a44422c1)/"
   */
  Id: string;
  /**
   * Example: "/Date(1453294809000)/"
   */
  LastItemDeletedDate: string;
  /**
   * Example: "/Date(1453294809000)/"
   */
  LastItemModifiedDate: string;
  /**
   * Example: "SP.Data.MyListTitleListItem"
   */
  ListItemEntityTypeFullName: string;
  /**
   * Example: "/sites/PubSite"
   */
  ParentWebUrl: string;
  /**
   * Example: "/Guid(22a9ef51-737b-4ff2-9346-694633fe4416)/"
   */
  TemplateFeatureId: string;
  /**
   * Example: "Pages"
   */
  Title: string;
}

/**
 * Represents an OData SP.ListItem object.  For more information about this object
 * see the MSDN documentation here:
 * https://msdn.microsoft.com/en-us/library/office/jj860569.aspx
 */
interface IOdataListItem {
  /**
   * Example: { StrinValue: "0x010100C5..." }
   */
  ContentTypeId: {
    StringValue: string
  }
  ID: number;
  Title: string;
  /**
   * Example: "/Guid(d5369f3b-bd7a-412a-9c0f-7f0650bb5489)/"
   */
  UniqueId: string;
}

/**
 * Represents an OData SP.User object.  For more information about this object
 * see the MSDN documentation here:
 * https://msdn.microsoft.com/en-us/library/office/jj860569.aspx
 */
interface IOdataUser {
  /**
   * Example: "someone@example.com"
   */
  Email: string;
  Id: number;
  IsSiteAdmin: boolean;
  /**
   * Example: "i:0#.w|domain\user"
   */
  LoginName: string;
  PrincipalType: number;
  /**
   * Example: "DOMAIN\user"
   */
  Title: string;
  UserId: IOdataUserId;
}

/**
 * Represents an OData SP.UserId object.  For more information about this object
 * see the MSDN documentation here:
 * https://msdn.microsoft.com/en-us/library/office/jj860569.aspx
 */
interface IOdataUserId {
  /**
   * Example: "s-1-5-21-2127521184-1604012920-1887927527-2632426"
   */
  NameId: string;
  /**
   * Example: "urn:office:idp:activedirectory"
   */
  NameIdIssuer: string;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneButton related interfaces.PropertyPane button props.
 */
interface IPropertyPaneButtonProps {
  /**
   * Detailed description of the button for the benefit of screen readers.
   * 
   * Besides the compound button, other button types will need more information provided to screen reader.
   */
  ariaDescription ?: string;
  /**
   * The aria label of the button for the benefit of screen readers.
   */
  ariaLabel ?: string;
  /**
   * The type of button to render.
   * @defaultvalue ButtonType.normal.
   */
  buttonType ?: PropertyPaneButtonType;
  /**
   * Description of the action this button takes.
   * Only used for compound buttons.
   */
  description ?: string;
  /**
   * Whether the button is disabled.
   */
  disabled ?: boolean;
  /**
   * The button icon shown in command or hero type.
   */
  icon ?: string;
  /**
   * A callback which is invoked on the button click, which takes in the existing value for the bound property
   * and returns the new value and which is then used to update the properties bag. This update will result in
   * the re-render of the PropertyPane with the new props.
   * 
   * @param {value} - Value associated with element's target property in the properties bag.
   * @returns - New value for the target property, which will eventually be updated in the properties bag.
   * 
   * @internalremarks: This is the only place where the web part developer's is allowed to pass in the callback
   * for an individual element. This is because, button click does not result in any property change, and hence
   * cannot fire the 'onChange'' event for a property, and ends up becoming a no-op. To avoid this, giving the
   * control back to the web part, so that web part can make act acordingly.
   * 
   * todo: VSO# 233578:PropertyPane Button OnClick event api.
   */
  onClick: (value: any) => any;
  /**
   * Display text of the element.
   */
  text: string;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneCheckbox props.
 */
interface IPropertyPaneCheckboxProps {
  /**
   * Whether the checkbox is checked or not.
   * @defaultvalue false.
   */
  isChecked ?: boolean;
  /**
   * Whether the checkbox is enabled or not.
   * @defaultvalue true.
   */
  isEnabled ?: boolean;
  /**
   * Label to display next to the checkbox.
   */
  text ?: string;
}

interface IPropertyPaneChoiceGroupOption {
  /**
   * The width and height of the image in px for choice field.
   */
  imageSize?: {
    height: number
    width: number ,
  }
  /**
   * The src of image for choice field.
   */
  imageSrc ?: string;
  /**
   * Whether the options is checked or not.
   * @defaultvalue false.
   */
  isChecked ?: boolean;
  /**
   * Whether the option is disabled or not.
   * @defaultvalue false.
   */
  isDisabled ?: boolean;
  /**
   * A required key to uniquely identify the option.
   */
  key: string | number;
  /**
   * The src of image for choice field which is selected.
   */
  selectedImageSrc ?: string;
  /**
   * The text string for the option.
   */
  text: string;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneChoiceGroup related interfaces.PropertyPane ChoiceGroup props.
 */
interface IPropertyPaneChoiceGroupProps {
  /**
   * Descriptive label for the choice group.
   */
  label ?: string;
  /**
   * The options for the choice group.
   */
  options: IPropertyPaneChoiceGroupOption[];
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file CustomPropertyPaneField related interfaces.PropertyPane CustomPropertyField props.
 */
interface IPropertyPaneCustomFieldProps {
  /**
   * Event callback for onDispose.
   */
  onDispose ?: (elem: HTMLElement) => void;
  /**
   * onRender will be called once the custom field mounted to the host element.
   */
  onRender: (elem: HTMLElement) => void;
}

/**
 * Web part - PropertyPane data contract.
 */
interface IPropertyPaneData {

  /**
   * Event callback for 'Close' click.
   */
  onClose: () => void;
  /**
   * Event callback fired when the configuration is completed for the web part.
   */
  onConfigurationComplete: () => void;
  /**
   * Event callback fired when the focus is handed back to the web part
   */
  onLostFocus: () => void;
  /**
   * Notification event fired when the property has already been validated and modified.
   */
  onPropertyChange: (propertyName: string, newValue: any) => void;
  /**
   * Event callback fired after the PropertyPane is rendered.
   */
  onRendered: () => void;
  /**
   * Event callback for 'Apply' click.
   */
  onSave: () => void;
  /**
   * Property bag from the web part.
   */
  properties: any;

  /**
   * Web part configuration settings.
   */
  settings: IPropertyPaneSettings;



}

interface IPropertyPaneDropdownOption {
  /**
   * Index for this option.
   */
  index ?: number;
  /**
   * Whether this option is currently selected.
   */
  isSelected ?: boolean;
  /**
   * A key to uniquely identify this option.
   */
  key: string | number;
  /**
   * Text to render for this option.
   */
  text: string;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneDropdown props.
 */
interface IPropertyPaneDropdownProps {
  /**
   * Whether or not the Dropdown is disabled.
   */
  isDisabled ?: boolean;
  /**
   * Descriptive label for the Dropdown.
   */
  label: string;
  /**
   * Collection of options for this Dropdown.
   */
  options ?: IPropertyPaneDropdownOption[];
  /**
   * The key of the initially selected option.
   */
  selectedKey ?: string | number;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneField related interfaces.PropertyPane field.
 */
interface IPropertyPaneField<TProperties> {
  /**
   * Strongly typed properties object. Specific to each field type.
   * Example: Checkbox has ICheckboxProps, TextField has ITextField props.
   * 
   * 
   */
  properties: TProperties;
  /**
   * Target property from the web part's property bag.
   */
  targetProperty: string;
  /**
   * Type of the PropertyPane field.
   */
  type: IPropertyPaneFieldType;
}

enum IPropertyPaneFieldType {
  Button = 11,
  CheckBox = 2,
  ChoiceGroup = 10,
  Custom = 1,
  Dropdown = 6,
  Heading = 9,
  HorizontalRule = 12,
  // (undocumented)
  Label = 7,
  // (undocumented)
  Link = 13,
  Slider = 8,
  TextField = 3,
  Toggle = 5
}

/**
 * PropertyPane group. Group is part of the PropertyPanePage.
 */
interface IPropertyPaneGroup {
  /**
   * List of PropertyPane fields.
   */
  groupFields: IPropertyPaneField<any>[];
  /**
   * Display name for the group.
   */
  groupName ?: string;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneLabel props.
 */
interface IPropertyPaneLabelProps {
  /**
   * Whether the associated form field is required or not.
   * If true, a red asterisk is displayed to the right of the label.
   * @defaultvalue false.
   */
  required ?: boolean;
  /**
   * Display text fot the label.
   */
  text: string;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneLink props.
 */
interface IPropertyPaneLinkProps {
  /**
   * Location to which the link is targetted to.
   */
  href: string;
  /**
   *  The props of pop up window.
   */
  popupWindowProps ?: IPopupWindowProps;
  /**
   * This attribute specifies where to display the linked resource.
   * Following values can be used:
   * _self - (default) Load the response in the current page.
   * _blank - Load the response into a new unnamed tab.
   * _parent - Load the response in the parent of the current page.
   *           If no parent exists, then this option behaves same as '_self'
   * _top - Load the response into the original window.
   */
  target ?: string;
  /**
   * Display text for the link.
   */
  text: string;
}

/**
 * PropertyPanePage interface.
 */
interface IPropertyPanePage {
  /**
   * Indicates whether the groups on the PropertyPanePage are displayed as accordion or not.
   */
  displayGroupsAsAccordion ?: boolean;
  /**
   * List of groups to be displayed on the PropertyPane page.
   */
  groups: IPropertyPaneGroup[];
  /**
   * PropertyPane page header.
   */
  header ?: IPropertyPanePageHeader;
}

/**
 * PropertyPane header.
 *   This header remains same for all the pages.
 */
interface IPropertyPanePageHeader {
  /**
   * Header to display.
   */
  description: string;
  /**
   * Image url for the background image.
   */
  image ?: string;
}

/**
 * Web part configuration settings
 */
interface IPropertyPaneSettings {
  /**
   * Page to be displayed on the PropertyPane.
   */
  currentPage ?: number;
  /**
   * Total number of pages on the PropertyPane.
   */
  pages: IPropertyPanePage[];
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneSlider props.
 */
interface IPropertyPaneSliderProps {
  /**
   * A description of the Slider for the benefit of screen readers.
   */
  ariaLabel ?: string;
  /**
   * Whether or not the Slider is disabled.
   */
  disabled ?: boolean;
  /**
   * Description label of the Slider.
   */
  label ?: string;
  /**
   * The max value of the Slider.
   */
  max: number;
  /**
   * The min value of the Slider.
   */
  min: number;
  /**
   * Whether to show the value on the right of the Slider.
   * If you want to show the value by yourself, you may want to set this value to false.
   */
  showValue ?: boolean;
  /**
   * The difference between the two adjacent values of the Slider.
   * @default 1.
   */
  step ?: number;
  /**
   * The initial value of the Slider. Use this if you intend to pass in a new value as a result of onChange events.
   * 
   * @default to min.
   */
  value ?: number;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneTextField props.PropertyPaneTextField component props.
 */
interface IPropertyPaneTextFieldProps {
  /**
   * Aria Label for textfield, if any.
   */
  ariaLabel ?: string;
  /**
   * Text field will start to validate after users stop typing for `deferredValidationTime` milliseconds.
   * @default 200.
   */
  deferredValidationTime ?: number;
  /**
   * The textfield input description.
   */
  description ?: string;
  /**
   * Default value of the textfield, if any.
   */
  errorMessage ?: string;
  /**
   * Label for the textfield.
   */
  label ?: string;
  /**
   * Whether or not the textfield is a multiline textfield.
   * @default false.
   */
  multiline ?: boolean;
  /**
   * The method is used to get the validation error message and determine whether the input value is valid or not.
   * 
   *   When it returns string:
   *   - If valid, it returns empty string.
   *   - If invalid, it returns the error message string and the text field will
   *     show a red border and show an error message below the text field.
   * 
   *   When it returns Promise<string>:
   *   - The resolved value is display as error message.
   *   - The rejected, the value is thrown away.
   * 
   */
  onGetErrorMessage ?: (value: string) => string | Promise<string>;
  /**
   * placeholder text to be displayed in the Textfield.
   */
  placeholder ?: string;
  /**
   * Whether or not the multiline textfield is resizable.
   * @default true.
   */
  resizable ?: boolean;
  /**
   * Whether or not the textfield is underlined.
   * @default false.
   */
  underlined ?: boolean;
  /**
   * Current value of the textfield. Only provide this if the textfield is a controlled component where you
   * are maintaining its current state.
   */
  value ?: string;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file PropertyPaneToggle props.PropertyPaneToggle component props.
 */
interface IPropertyPaneToggleProps {
  /**
   * Checked state of the toggle.
   * If you are maintaining state yourself, use this property.
   */
  checked ?: boolean;
  /**
   * Optional disabled flag.
   */
  disabled ?: boolean;
  /**
   * A key to uniquely identify the field.
   */
  key ?: string | number;
  /**
   * A label for the toggle.
   */
  label: string;
  /**
   * Test display when toggle is OFF.
   */
  offText ?: string;
  /**
   * Text to display when toggle is ON.
   */
  onText ?: string;
}







/**
 * Configuration event callback
 */
interface IWebPartConfigurationEventCallback {
}

/**
 * Web part context interface.
 */
interface IWebPartContext extends IClientSideComponentContext<IClientSideWebPartManifestInstance<any>> {
  /**
   * BasicHttpClient instance scoped to this web part.
   */
  basicHttpClient: BasicHttpClient;
  /**
   * Function to open the PropertyPane to help configure this web part.
   */
  configureStart: (id: string, propertyPaneState?: PropertyPaneState) => void;
  /**
   * Reference to the DOM element that hosts this client side component.
   */
  domElement: HTMLElement;
  /**
   * Environment that webparts are hosted in.
   */
  environment: Environment;

  /**
   * Web part host.
   */
  host: IWebPartHost;
  /**
   * HttpClient instance scoped to this web part.
   */
  httpClient: HttpClient;
  /**
   * Web part instance id. This is a globally unique value.
   */
  instanceId: string;
  /**
   * Client side component manifest.
   */
  manifest: TManifest;
  /**
   * SharePoint page context.
   */
  pageContext: PageContext;
  /**
   * Service scope instance that is scoped to this particular web part.
   */
  serviceScope: ServiceScope;
  /**
   * Web part status renderer.
   */
  statusRenderer: IClientSideWebPartStatusRenderer;
  /**
   * Web part tag to be used for logging and telemetry.
   */
  webPartTag: string;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file IWebPartData.tsThis structure represents the the serialized state of a webpart. When the serialize() API is called on
 * a webpart, the output should be this structure. The structure of the 'properties' field is owned by the
 * webpart and is specific to the webpart. Each webpart can decide the set of properties it wants to
 * serialialize.
 */
interface IWebPartData {
  /**
   * Definition: HTML markup equivalent for searchable properties and properties that need link fixup.
   * format: pseudo HTML
   * mandatory: no.
   * type: string
   * supported values: a string containing pseudo HTML.
   * example: "<div>searchable_property_value</div><link href='http://contoso.com/path_of_link.aspx' />"
   * experimental: no
   */
  htmlProperties ?: string;
  /**
   * Definition: universally unique webpart Type id.
   * Usage: uniquely identify a webpart.
   * Required: yes
   * Type: GUID
   * Supported values: any GUID
   * Example: "dbef608d-3ad5-4f8f-b139-d916f2f0a294"
   */
  id: string;
  /**
   * Definition: universally unique instance id of the webpart. A web part can have multiple instances on a page.
   *             This id is expected to be universally unique accross time and page boundaries.
   * how used: used by the framework to uniquely identify an instance of a webpart.
   * mandatory: yes.
   * type: string
   * supported values: a unique string. Could be GUID or other uniquely identifiable formats.
   * example: ["dbef608d-3ad5-4f8f-b139-d916f2f0a294"]
   * experimental: yes
   */
  instanceId: string;
  /**
   * Definition: webpart specific properties. The individual webpart owns the definition of these properties.
   * how used: used by the webpart to manage its internal metadata and config data. The framework code never
   *           touches these properties.
   * mandatory: yes.
   * type: string
   * supported values: any JSON stringifiable object hierarchy.
   * example: { 'value': 'text value' }
   */
  properties ?: any;
  /**
   * Definition: webpart title.
   * Usage: display the name of the webpart in the toolbox, webpart gallery and the page.
   * Required: yes
   * Type: string
   * Supported values: string less than 100 characters
   * Example: "Text"
   */
  title: string;
  /**
   * Definition: webpart version.
   * Usage: versioning and evolving a webpart safely.
   * Required: yes
   * Type: string representing a semantic version (http://semver.org)
   * Supported values: MAJOR.MINOR.PATCH
   * Example: "1.0.0"
   */
  version: string;
}



/**
 * A web part host is a component, control or a page that hosts client side web parts.
 * The web part infrastructure provides many features inbuilt e.g. an HttpClient to make
 * server requests and the SPPageContext. The porpose of this interface is not to replicate
 * those feature. This interface outlines the services and features where there needs to be
 * a direct interaction between the host and the web part infrastructure. This interface also
 * outlines some services where the web part host may want to override the default
 * implementations provided by the infrastructure. Let us discuss some examples:
 * 
 *  - APIs like setDirty, webPartConfigurationEventCallback help the web part infrastucture
 *    communicate the fact that some web part is in a dirty state  or web part communication
 *    events to the host.
 * 
 * - In future we expect that this interface will be used to provide services where the host
 *   might want to override the default implemenations. e.g.
 *   - the web part status rendering service. The default implementation of this service
 *     provides an office fabric spinny. But a certain host could easily want to show a
 *     different spinny.
 * 
 *   - The event aggregation service. Currently the web part manager hosts a single event
 *     event aggregator. But there are possibilities when a page can have multiple hosts
 *     and each host may want to scope its event aggregation service.
 */
interface IWebPartHost extends IServiceScopeProvider {
  /**
   * ServiceScope provides a formalized way for components to register and consume dependencies
   * ("services"), and to enable different implementations to be registered in different scopes.
   * This improves modularity by decoupling components from their dependencies in an extensible way.
   * serviceScope: ServiceScope;
   */
  serviceScope: ServiceScope;
  setDirty ?: (instanceId: string, data?: any) => void;
  /**
   * Web part configuration event callback.
   */
  webPartConfigurationEventCallback ?: IWebPartConfigurationEventCallback;
}

declare class MockWebPartContext {
  public basicHttpClient: BasicHttpClient = {} as any;
  public configureStart: (id: string, propertyPaneState?: PropertyPaneState) => void = {} as any;
  public domElement: HTMLElement = document.createElement('div');
  public environment: Environment = {} as any;
  public eventAggregator: IEventAggregator = {} as any;
  public host: IWebPartHost = {} as any;
  public httpClient: HttpClient = {} as any;
  public instanceId: string = 'wpInstanceId';
  public manifest: IClientSideWebPartManifestInstance<{}> = new MockWebPartManifestInstance();
  public pageContext: PageContext = {} as any;
  public serviceScope: ServiceScope = {} as any;
  public statusRenderer: IClientSideWebPartStatusRenderer = {} as any;
  public webPartTag: string = 'WebPart.daf0b71c-6de8-4ef7-b511-faae7c388708.0ae4973a-70e3-451e-9f1f-3f25e5455a60';
}

/**
 * Helper method to create a Button on the PropertyPane.
 * @param targetProperty - Target property the Button is associated to.
 * @param properties - Strongly typed Button properties.
 */
export function PropertyPaneButton(targetProperty: string,
  properties: IPropertyPaneButtonProps): IPropertyPaneField<IPropertyPaneButtonProps>;

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
 * Helper method to create a Checkbox on the PropertyPane.
 * @param targetProperty - Target property the checkbox is associated to.
 * @param properties - Strongly typed Checkbox properties.
 */
export function PropertyPaneCheckbox(targetProperty: string,
  properties: IPropertyPaneCheckboxProps): IPropertyPaneField<IPropertyPaneCheckboxProps>;

/**
 * Helper method to create a Choice Group on the PropertyPane.
 * @param targetProperty - Target property the choice group is associated to.
 * @param properties - Strongly typed Choice Group properties.
 */
export function PropertyPaneChoiceGroup(targetProperty: string,
  properties: IPropertyPaneChoiceGroupProps): IPropertyPaneField<IPropertyPaneChoiceGroupProps>;

/**
 * Helper method to create a Choice Group on the PropertyPane.
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
export function PropertyPaneLabel(targetProperty: string,
  properties: IPropertyPaneLabelProps): IPropertyPaneField<IPropertyPaneLabelProps>;

/**
 * Helper method to create a Link on the PropertyPane.
 * @param targetProperty - Target property the Link is associated to.
 * @param properties - Strongly typed Link properties.
 */
export function PropertyPaneLink(targetProperty: string,
  properties: IPropertyPaneLinkProps): IPropertyPaneField<IPropertyPaneLinkProps>;

/**
 * Helper method to create a Slider on the PropertyPane.
 * @param targetProperty - Target property the slider is associated to.
 * @param properties - Strongly typed Slider properties.
 */
export function PropertyPaneSlider(targetProperty: string,
  properties: IPropertyPaneSliderProps): IPropertyPaneField<IPropertyPaneSliderProps>;

/**
 * Helper method to create a TextField on the PropertyPane.
 * @param targetProperty - Target property the textfield is associated to.
 * @param properties - Strongly typed TextField properties.
 */
export function PropertyPaneTextField(targetProperty: string,
  properties: IPropertyPaneTextFieldProps): IPropertyPaneField<IPropertyPaneTextFieldProps>;

/**
 * Helper method to create a Toggle on the PropertyPane.
 * @param targetProperty - Target property the toggle is associated to.
 * @param properties - Strongly typed Toggle properties.
 */
export function PropertyPaneToggle(targetProperty: string,
  properties: IPropertyPaneToggleProps): IPropertyPaneField<IPropertyPaneToggleProps>;















enum WebPartConfigurationEvent {
  // (undocumented)
  ApplyClicked = 4,
  // (undocumented)
  CloseComplete = 3,
  // (undocumented)
  ConfigurationComplete = 1,
  // (undocumented)
  LostFocus = 5,
  // (undocumented)
  OpenComplete = 2
}

