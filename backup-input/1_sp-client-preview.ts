/// <reference path="../typings/tsd.d.ts" />
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
  properties: ICheckboxProps | ITextFieldProps | IToggleProps | IDropdownProps |
  ICustomPropertyPaneFieldProps | ILabelProps | ISliderProps | IChoiceGroupProps |
  IButtonProps | ILinkProps | any;

  forEach(callbackfn: (value: T) => void): void;


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

declare class MockWebPartContext <TEstClassGenerics> implements Thenable  <R>  {
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
  /**
     * It is an error to call ServiceScope.consume() before finish() has been called.
     * The most reliable way to protect your component against this error is to perform the
     * consume() calls inside a whenFinished() callback.  If the service scope is already
     * finished, then the callback will be executed immediately; otherwise, it will be executed
     * later when the scope is finished.
     * @param callback - A block of code that needs to call ServiceScope.consume()
     */
    public whenFinished(callback: () => void): void;
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
  properties: IPropertyPaneToggleProps):
  IPropertyPaneField<IPropertyPaneToggleProps>;















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


/**
 * This interface specifies the set of properties that can be pre-configured by a Web Part developer. Each
 * pre-configured instance of the Web Part will need a copy of these properties. Organization admins and
 * content authors can modify these properties on a need basis.
 *
 * @public
 */

interface IClientSideWebPartManifestEntry<TProperties> {
  /**
   * Definition: Description of the web part represented as a dictionary of locale keys to description values. This
   *  value will be displayed to the user in the toolbox. This description should be used in the Toolbox tooltip and
   *  other display areas. The Web Part developer may give an initial description to the webpart. The organization admin
   *  and page author will have the ability to change this description as per need.
   * Usage: display the description of the webpart in the toolbox tooltip, webpart gallery and the page.
   * Required: yes
   * Type: Object
   * Localized: yes
   * Supported values: a dictionary of locale keys to strings. Should always have a 'default' key.
   * Example: "A tool for displaying neat information."
   *          {
   *            "default": "A tool for displaying neat information.",
   *            "en-us": "A tool for displaying neat information.",
   *            "fr-fr": "Un outil d’affichage des informations soignées.",
   *            "zh": "用於顯示整潔資訊的工具。"
   *          }
   */
  description: ILocalizedString;
  /**
   * @todo - does this group also affect the webpart gallery in the ClassicPage scenario
   *
   * Definition: This field is used to help decide the Toolbox group for the Web Part in the authoring
   *  experience. In the server rendered page, the Web Part gallery is equivalent of the Toolbox. If no value is
   *  provided, the Web Part will be displayed in the "Custom" group.
   * Usage: display of the Web Part icon in a specific group in the authoring toolbox.
   * Required: no
   * Localized: yes
   * Supported values: string
   * Example: { "default": "Media Web Parts" }
   *
   * @beta
   */
  group ?: ILocalizedString;
  groupId: string;
  /**
   * Definition: The icon for the WebPart, to be displayed in the toolbox, represented an image URL. The image at the
   *  URL must be exactly 38x38 px (SPPPLAT VSO#218660 to fix the size of the icon image).
   *  If the '{@link officeFabricIconFontName}' field does not have a value, this field must have a value.
   * Required: no
   * Type: string
   * Localized: no
   * Supported values: Any absolute URL.
   * Example: "https://contoso.akamaihd.net/files/myWebpartIcon.png"
   */
  iconImageUrl ?: string;
  /**
   * Definition: The icon for the Web Part, to be displayed in the toolbox, represented as a character name in the
   *  Office 365 icon font file. The icon font is specified here: http://o365icons.cloudapp.net/. If this field has
   *  a value, the '{@link iconImageUrl}' field will be ignored.
   * Required: no
   * Type: string
   * Localized: no
   * Supported values: Any character name in the Office 365 Icon Font.
   * Example: "graph"
   */
  officeFabricIconFontName ?: string;
  /**
   * Definition: every Web Part is expected to have some custom properties. e.g. an image Web Part may have the image
   *  url and caption text as custom properties, a list Web Part may have the list id and list title as custom
   *  properties, and so on. The Web Part framework is transparent to these properties. It just acts as a conduit to
   *  pass these properties in and out to the Web Parts. The Web Part developer fully controls the schema of these
   *  properties. The Web Part developer should follow versioning rules (@todo: pointer to Web Part versioning document)
   *  to evolve these properties.
   *
   * Usage: rendering of the Web Part.
   * Required: yes
   * Localized: no
   * Supported values: any
   * Example: {"imageSource": "https://contoso.akamaihd.net/files/contosoLogo.jpg", "captionText": "Contoso logo"}"
   */
  properties: TProperties;
  /**
   * Definition: Title of the web part represented as a single a dictionary of locale keys to title values. This
   *  value will be displayed to the user in the toolbox. This title should be used in the Toolbox and other display
   *  areas. The Web Part developer may give an initial title to the webpart. The organization admin and page author
   *  will have the ability to change this title as per need.
   * Usage: display the name of the webpart in the toolbox, webpart gallery and the page.
   * Required: yes
   * Type: Object
   * Localized: yes
   * Supported values: a dictionary of locale keys to strings. Should always have a 'default' key.
   * Example: "My Webpart"
   *          {
   *            "default": "My WebPart"
   *            "en-us": "My WebPart",
   *            "fr-fr": "Ma WebPart",
   *            "zh": "我的 web 部件"
   *          }
   */
  title: ILocalizedString;
}



/**
 * Web part context interface.
 */
interface IWebPartContext<TestGenerics> extends IClientSideComponentContext  <IClientSideWebPartManifestInstance  <any>> {
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
