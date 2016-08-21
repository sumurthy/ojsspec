/// <reference path="../typings/tsd.d.ts" />

/**
 * Implements the minimal functionality for a webpart. This class also provides a bunch of parameter
 * validate and access to readonly properties like the displayMode, properties, manifest, instanceId,
 * domElement, and so on...
 */
declare class BaseClientSideWebPart<P> implements IClientSideWebPart {
  /**
   * Contructor for the BaseClientSideWebPart
   * If a sub classe overrids the constructor, it needs to call super(context) as the first line of constructor
   */
  constructor(ctx: IWebPartContext);
  /**
   * Clear the error message from the web part display area.
   */
  protected clearError(): void;
  /**
   * !!! WARNING !!! Microsoft owns the right to change any line of code below this line. Please do not make
   * your implementation dependent on the behaviours in the following code.
   */
  protected configureStartInternal(): void;

  /**
   * Connects the web parts
   * @param {string[]} ids collection of strings
   */
  public connectWebParts(ids: string[]): void;
  /**
   * Indicates whether the Web Part's configuration is reactive or not.
   * Reactive - Changes made in the PropertyPane are transmitted to the Web Part instantly
   * Non-reactive - Changes are transmitted to the Web Part only after 'Apply' click.
   * @readonly
   */
  protected disableReactivePropertyChanges: boolean;
  /**
   * Display mode of the Web Part.
   * @readonly
   */
  protected displayMode: DisplayMode;

 /**
 * [dispose description]
 */
  public dispose(): void;

	/**
	 * [domElement description]
	 * @type {HTMLElement}
	 */
	protected domElement: HTMLElement;

	/**
	 * [getPropertyPaneSettings description]
	 * @return {IPropertyPaneData} [description]
	 */
  public getPropertyPaneSettings(): IPropertyPaneData;

  /**
   * [host description]
   * @type {IWebPartHost}
   * @readonly
   */
  protected host: IWebPartHost;

	/**
	 * [instanceId description]
	 * @type {string}
	 * @readonly
	 */
  protected instanceId: string;
  /**
   * Web Part's manifest.
   * @readonly
   */
  protected manifest: IClientSideWebPartManifest<any>;

  /**
   * @see IClientSideWebPart.ts
   */

  public onBeforeRender < T >(): Promise<T>;
  /**
   * @see IClientSideWebPart.ts
   */
  public onBeforeSerialize(): IHtmlProperties;
  /**
   * @see IClientSideWebPart.ts
   */
  public onEvent < T >(eventName: string, eventObject: IWebPartEvent<T>): void;
  /**
   * Event handler for the property change on the PropertyPane.
   */
  protected onPropertyChange(propertyPath: string, newValue: any): void;
  /**
   * Event handler called when the configuration is completed for the Web Part.
   * ConfigurationComplete event is fired when user switches between web parts
   * while the PropertyPane is open, and this event handler is called for the
   * previously selected web part.
   * @alpha
   */
  protected onPropertyConfigurationComplete(): void;
  /**
   * Event handler called when the PropertyPane is rendered.
   * @alpha
   */
  protected onPropertyPaneRendered(): void;
  /**
   * Event handler called when the changes are applied on the PropertyPane.
   *   This is called only in the case of non-reactive PropertyPane.
   */
  protected onPropertyPaneSave(): void;

  /**
   * Property bag of the Web Part.
   * @readonly
   */
  protected properties: P;
  /**
   * Configuration settings of the Web Part for the PropertyPane.
   * @readonly
   */
  protected propertyPaneSettings: IPropertyPaneSettings;
  /**
   * @see IClientSideWebPart.ts
   */
  public render(mode: DisplayMode = DisplayMode.Read, data?: IWebPartData): void;

  /**
   * Indicates whether the Web Part was rendered from the default properties,
   * as opposed to using serialized values from the last time that the web part was saved.
   * @readonly
   */
  protected renderedFromDefaultProperties: boolean;

  /**
   * Indicates whether the Web Part has been rendered once or not.
   * @readonly
   */
  protected renderedOnce: boolean;
  /**
   * Render an error message in the web part display area.  Also logs the error message to the IWebPartHost logger.
   *
   * @class {BaseClientSideWebPart}
   * @return {void}
   */
  protected renderError(error: Error): void;
  /**
   * @see IClientSideWebPart.ts
   */
  public serialize(): IWebPartData;
  /**
   * Updates the Web Part data.
   */
  protected updateIWebPartData(webPartData: IWebPartData): void;
  /**
   * validates the common params within the context.
   */
  public static validateCommonParams(context: ICommonWebPartContext): void;
}

/**
 * SharePoint Client-side Applications can use the SharePoint Canvas to enable rich content authoring
 * as part of their experience. The SharePoint canvas provides Rich Text Editing capabilities, SharePoint
 * Client-side WebPart aggregation and hosting, and a beautiful railed design experience.
 *
 * @public
 */
declare class Canvas {
  /**
   * Construct a new instance of the Canvas.
   */
  constructor(serviceScope: ServiceScope,
      container: HTMLElement,
      mode: DisplayMode,
      serializedCanvas?: string,
      handleCanvasChanged?: () => void,
      scrollThreshold?: number);
  /**
   * @return The number of controls in the Canvas.
   */
  public count: number;

  /**
   * Unmount the Canvas from the container it was constructed with.
   */
  public dispose(): void;
  /**
   * Display the Canvas' Toolbox at a given row. If the Toolbox is already open, the Toolbox will close
   * at its previous row and re-open at the new row.
   *
   * @return A boolean indicating whether the Toolbox successfully opened.
   */
  public openToolbox(row: number): boolean;
  /**
   * Get the preview image url generated from webpart manager if it is available.
   * The preview image is the first preview image provided by a webpart
   *
   * @return the URL of the preview image
   */
  public previewUrl: string;
  /**
   * Render the Canvas into its container DOM element. The Canvas will use the DisplayMode it was
   * constructed with.
   * If the Canvas has already been rendered once, the Canvas will clear its contents and then, if present,
   * use 'serializedCanvas' to rehydrate itself.
   */
  public render(serializedCanvas?: string): void;
  /**
   * Serialize the current contents of the Canvas. The serialized string is in a HTML format understood by
   * SharePoint's Rich Text Field. The returned string can be crawled by search. Modifying the returned
   * string outside of the Canvas is not supported.
   *
   * @return Serialized representation of the Canvas at the time the method is invoked.
   */
  public serialize(): string;
}

enum CanvasControlType {
  BodyText = 0,
  HeaderText = 1,
  QuoteText = 2,
  RTE = 4,
  WebPartZone = 3
}

/**
 * This is the system base class for client-side applications.  It manages the overall
 * life cycle of your application, and is the first entry point for your code to start
 * executing when the page loads.  The two main events are onLoad() which occurs first,
 * and onRender() which occurs after the shell has initialized the environment and
 * completed rendering the page chrome.
 */
declare class ClientSideApplication {
  constructor();
  /**
   * Returns the DOM element where the application is expected to render its content.
   * The domElement will be undefined until the onRender() event occurs.
   * IMPORTANT: The application should not access DOM elements outside of this subtree,
   * as they are system-defined and may change over time.
   */
  protected domElement: HTMLDivElement;

  /**
   * RESERVED FOR INTERNAL USAGE.  This method is invoked automatically by the system shell.
   * The application code should not call it directly.
   */
  public load(shell: IShell): void;
  /**
   * This life cycle event occurs immediately after the shell has loaded the application,
   * before the DOM is constructed.  Applications can use this event to load scripts
   * or start asynchronous operations that need to occur early in the lifecycle.
   * Inside the onLoad() event, applications may also modify the rendering of various
   * page chrome elements, for example by calling this.shell.suiteNav.setComponentVisibility(false).
   */
  protected onLoad(): void;
  /**
   * This lifecycle event occurs after the shell has constructed the DOM for the page chrome.
   * At this time, the domElement property will be initialized, and the application can begin
   * rendering its own DOM elements.
   */
  protected onRender(): void;
  /**
   * RESERVED FOR INTERNAL USAGE.  This method is invoked automatically by the system shell.
   * The application code should not call it directly.
   */
  public render(domElement: HTMLDivElement): void;
  /**
   * Returns a reference to the shell, which is a global singleton object that contains
   * the main service classes.
   */
  protected shell: IShell;

  public suiteNavConfiguration(): ISuiteNavManagerConfiguration;
}


/**
 * [combineURLPaths description]
 * @param  {string[]} ...url [description]
 * @return {string}          [description]
 */
export function combineURLPaths(...url: string[]): string;

/**
 * Event Aggregator
 */
declare class EventAggregator implements IEventAggregator {
  /**
   * Raise an event
   */
  public raiseEvent < T >(eventName: string, eventObject: IEvent<T>): void;
  /**
   * Subscribe for an event from all sources
   */
  public subscribeByEventName < T >(eventName: string, subscriberId: string, callback: IEventCallback<T>): void;
  /**
   * Subscribe for all events from a specific source.
   */
  public subscribeBySourceId < T >(sourceId: string, subscriberId: string, callback: IEventCallback<T>): void;
}

/**
 * Get's the path name from an absolute url.
 */
export function getPathNameFromAbsoluteUrl(url: string): string;

declare class GuidHelpers {
  public static generateGuid(): string;
  /**
   * Example: "/Guid(d5369f3b-bd7a-412a-9c0f-7f0650bb5489)/"
   *          -> 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489'
   * Example: "{d5369f3b-bd7a-412a-9c0f-7f0650bb5489}"
   *          -> 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489'
   */
  public static getNormalized(guid: string): string;
  public static isValid(guid: string): boolean;
  public static requireValid(guid: string): void;
}

enum HostType {
  ClassicPage = 1,
  ModernPage = 2,
  TestPage = 3,
  UnitTest = 4
}

/**
 * Client Side Web Part Interface.
 *
 * The `render` API is mandatory to be implemented by a Web Part. All other APIs have default implementations in the
 * BaseClientSideWebPart and should be overridden on a need basis.
 */
interface IClientSideWebPart {
  /**
   * Event for the webpart to start the configuration panel. A webpart needs to implement this API if they
   * want to implement a completely custom property pane.
   *
   * @alpha
   */
  configureStart ?: () => void;
  /**
   * Connect this webpart to other webparts. The list of connected webpart ids is persisted in the persisted
   * store. That way when the webparts re-render the infrastructure knows how to re-connect them.
   *
   * @alpha
   */
  connectWebParts(ids: string[]): void;
  /**
   * Dispose the webpart and any other resources it is holding on to e.g. DOM elements, server resources etc...
   *
   * @alpha
   * @return {void}
   */
  dispose(): void;
  /**
   * Get property pane settings
   *
   * @alpha
   * @return {IPropertyPaneData}
   */
  getPropertyPaneSettings ?: () => IPropertyPaneData;
  /**
   * This API should be used to perform long running operations before rendering the Web Part. The loading indicator
   * is displayed during the lifetime of this method.
   *
   * @alpha
   */
  onBeforeRender < T >(): Promise<T>;
  /**
   * This API is called before a Web Part is serialized. The default implementation is a NOP. A Web Part developer is
   * is expected to override this API when the Web Part's state is not fully reflected in the property bag i.e.
   * (this.properties). In the overridden method, the Web Part developer is expected to update the state of the Web
   * Part property bag. This way the Web Part serialization process will use the upto date state of the Web Part.
   *
   * @return - reference to searchable properties and properties that need link fixup. Please read
   * the documentation of IHtmlProperties interface for more details.
   *
   * @alpha
   */
  onBeforeSerialize(): IHtmlProperties;
  /**
   * Receives a custom event notification from the host page or another webpart. ReservedEventNames
   * defines some common events. Each webpart may process webpart specific events.
   *
   * @return {void}
   *
   * @alpha
   */
  onEvent ? < T >(eventName: string, eventObject: IWebPartEvent<T>): void;
  /**
   * optional property for preview/thumbnail image for the webpart
   *
   * @alpha
   */
  previewUrl ?: string;
  /**
   * This API should is called to render the Web Part in the specified display mode i.e. Read or Edit. This API is
   * mandatory and hence is required to be implented by a Web Part.
   *
   * @alpha
   */
  render(mode: DisplayMode, data?: IWebPartData): void;
  /**
   * This API is called to obtain the serialized state of the Web Part instance data. The serialized state can be
   * stored in a perstant databsae and deserialized to re-render the Web Part.
   *
   * @return - The instance data of the Web Part properties.
   *
   * @alpha
   */
  serialize(): IWebPartData;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * Interface to be implemented by a component that should display the loading indicator and
 * error messages for a webpart.
 */
interface IClientSideWebPartStatusRenderer {
  /**
   * Clear the webpart error message.
   */
  clearError(domElement: HTMLElement): void;
  /**
   * Clear the loading indicator.
   */
  clearLoadingIndicator(domElement: Element): void;
  /**
   * Display a loading spinner.
   */
  displayLoadingIndicator(domElement: Element, loadingMessage: string): void;
  /**
   * Render the provided error message in the webpart container div.
   */
  renderError(domElement: HTMLElement, error: Error | string): void;
}

/**
 * CustomPropertyField props.
 */
interface ICustomPropertyPaneFieldProps {
  /**
   * Context of the custom field.
   */
  context: any;
  /**
   * onChange Event handler.
   */
  onChanged ?: IOnCustomPropertyFieldChanged;
  /**
   * Event callback for onDispose
   */
  onDispose ?: (elem: HTMLElement) => void;
  /**
   * onRender will be called once the custom field mounted to the host element.
   */
  onRender: (elem: HTMLElement, context: any, onChanged?: IOnCustomPropertyFieldChanged) => void;
  /**
   * Value of the field.
   */
  value: any;
}

/**
 * @copyright Microsoft Corporation. All rights reserved.
 *
 * @file Eventing related interfaces
 * Event object
 */
interface IEvent<T> {
  data ?: T;
  sourceId: string;
  targetId: string;
}

/**
 * Publis APIs for the EventAggregator. Event names must follow the following format
 * "eventName:action" e.g. "configure:start" and "configure:end"
 */
interface IEventAggregator {
  /**
   * Raise an event
   */
  raiseEvent < T >(eventName: string, eventObject: IEvent<T>): void;
  /**
   * Subscribe for an event from all sources
   */
  subscribeByEventName < T >(eventName: string, subscriberId: string, callback: IEventCallback<T>): void;
  /**
   * Subscribe for all events from a specific source.
   */
  subscribeBySourceId < T >(sourceId: string, subscriberId: string, callback: IEventCallback<T>): void;
}

/**
 * Event callback
 */
interface IEventCallback<T> {
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
  CurrentChangeToken: IOdataChangeToken;
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
  NameId: string;
  /**
   * Example: "urn:office:idp:activedirectory"
   */
  NameIdIssuer: string;
}

/**
 * Represents an OData SP.Web object.  For more information about this object
 * see the MSDN documentation here:
 * https://msdn.microsoft.com/en-us/library/office/jj860569.aspx
 */
interface IOdataWeb {
  /**
   * Example: "/Date(2016,0,20,12,58,7,0)/"
   */
  Created: string;
  CurrentChangeToken: IOdataChangeToken;
  /**
   * Example: "/sites/PubSite/_catalogs/masterpage/seattle.master"
   */
  CustomMasterUrl: string;
  Description: string;
  /**
   * Example: "/Guid(92ea328e-9f50-49a6-9da5-2f2dd5577041)/"
   */
  Id: string;
  IsMultilingual: boolean;
  Language: number;
  /**
   * Example: "/Date(1453618828000)/"
   */
  LastItemModifiedDate: string;
  /**
   * Example: "/sites/PubSite/_catalogs/masterpage/seattle.master"
   */
  MasterUrl: string;
  NoCrawl: boolean;
  QuickLaunchEnabled: boolean;
  RecycleBinEnabled: boolean;
  /**
   * Example: "/sites/PubSite"
   */
  ServerRelativeUrl: string;
  SiteLogoUrl: string;
  Title: string;
  UIVersion: number;
  /**
   * Example: "http://example.com/sites/PubSite"
   */
  Url: string;
  /**
   * Example: "BLANKINTERNET"
   */
  WebTemplate: string;
}

/**
 * CustomPropertyFieldChanged contract.
 */
interface IOnCustomPropertyFieldChanged {
}

/**
 * PropertyPane field.
 */
interface IPropertyPaneField {
  /**
   * ID to identify the field uniquely.
   *  Uniqueness is not guarenteed from the framework.
   * Example: 'someUniqueName'
   */
  id ?: string;
  /**
   * Strongly typed properties object. Specific to each field type.
   * Example: Checkbox has ICheckboxProps, TextField has ITextField props.
   */
  properties: ICheckboxProps | ITextFieldProps | IToggleProps | IDropdownProps |
      ICustomPropertyPaneFieldProps | ILabelProps | ISliderProps | IChoiceGroupProps |
      IButtonProps | ILinkProps | any;
  /**
   * Target property from the web part's property bag.
   */
  targetProperty: string;
  /**
   * Type of the PropertyPane field.
   */
  type: IPropertyPaneFieldType;
}

/**
 * Enum for all the supported PropertyPane field types.
 */
enum IPropertyPaneFieldType {
  /**
   * Button field.
   */
  Button = 11,
  /**
   * Checkbox field.
   */
  Checkbox = 2,
  /**
   * Choice Group field.
   */
  ChoiceGroup = 10,
  /**
   * Custom field.
   */
  Custom = 1,
  /**
   * Dropdown field.
   */
  Dropdown = 6,
  /**
   * Heading field.
   */
  Heading = 9,
  /**
   * Horizontal Rule field.
   */
  HorizontalRule = 12,
  Label = 7,
  Link = 13,
  /**
   * Slider field.
   */
  Slider = 8,
  /**
   * TextField field.
   */
  TextField = 3,
  /**
   * Toggle field.
   */
  Toggle = 5
}

/**
 * PropertyPane group. Group is part of the PropertyPanePage.
 */
interface IPropertyPaneGroup {
  /**
   * List of PropertyPane fields.
   */
  groupFields: IPropertyPaneField[];
  /**
   * Display name for the group.
   */
  groupName ?: string;
}

/**
 * PropertyPane header.
 *   This header remains same for all the pages.
 */
interface IPropertyPaneHeader {
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
 * PropertyPane heading level.
 */
enum IPropertyPaneHeadingLevel {
  /**
   * Heading level 1 - H1.
   */
  h1 = 1,
  /**
   * Heading level 2 - H2.
   */
  h2 = 2,
  /**
   * Heading level 3 - H3.
   */
  h3 = 3,
  /**
   * Heading level 4 - H4.
   */
  h4 = 4,
  /**
   * Heading level 5 - H5.
   */
  h5 = 5,
  /**
   * Heading level 6 - H6.
   */
  h6 = 6
}

/**
 * PropertyPane page.
 */
interface IPropertyPanePage {
  /**
   * List of gropus to be displayed on the PropertyPane page.
   */
  groups: IPropertyPaneGroup[];
  /**
   * PropertyPane page header.
   */
  header ?: IPropertyPaneHeader;
}

/**
 * Web Part configuration settings
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

interface IReactWebPartProps extends IWebPartProps {
  /**
   * WebPart data
   */
  data: IWebPartData;
  /**
   * The display mode for the summary links component. It is either Read or Edit.
   * This value is read from web part and passed to here.
   *
   * @type {DisplayMode}
   */
  mode: DisplayMode;
}

/**
 * The system shell manages the initial loading of the scripts for a client-side application,
 * as well as constructin the ClientSideApplication object, and initializing key services such
 * as the page chrome, page context, HTTP client, etc.
 */
interface IShell extends IServiceScopeProvider {
  /**
   * BasicHttpClient is used to perform REST calls with general internet services.
   * For communicating with SharePoint services, use HttpClient instead.
   */
  basicHttpClient: BasicHttpClient;
  /**
   * HttpClient is used to perform REST calls with SharePoint services.
   * It implements special enhancements such as configuring default headers, adding
   * an "X-RequestDigest" header for write operations, and collecting telemetry
   * to help the service monitor the performance and reliability of the application.
   *
   * For communicating with non-SharePoint services, use BasicHttpClient instead.
   */
  httpClient: HttpClient;
  /**
   * Returns the current page context object for the applcation.
   */
  pageContext: PageContext;
  /**
   * Returns a ServiceScope instance that can be used to obtain dependencies
   * for the current context.
   * @readonly
   */
  serviceScope: ServiceScope;
  /**
   * This object allows the application to manage the suite navigation of
   * the standard page chrome.  For more information about Suite Navigation,
   * see this article:
   * https://msdn.microsoft.com/en-us/library/office/dn614990.aspx
   */
  suiteNav: IComponentVisible;
}

/**
 * Interface for the Suite Nav Manager Configuration
 */
interface ISuiteNavManagerConfiguration {
  /**
   * Gets the cache token that is used to determine whether or not the
   * Suite Nav data that is cached is valid.
   */
  cacheToken: string;
  /**
   * Property representing the culture name (e.g. "en-us")
   */
  currentUICultureName: string;
  /**
   * Function that prevents the suiteNav from loading
   */
  disableSuiteNav(): void;
  /**
   * Callback to use when suite nav hamburger button is clicked. If not specified,
   * suite nav's hamburger button will not be shown.
   */
  hamburgerCallback: () => void;
  isSuiteNavDisabled(): boolean;
  /**
   * Callback used to modify the Suite Nav to be app specific.
   */
  modifySuiteNavData: (suiteNavData: ISuiteNavData) => ISuiteNavData;
  /**
   * Represents the set of settings for rendering the Suite Nav.
   */
  o365ShellRenderSettings: IO365ShellRenderSettings;
  /**
   * Callback to use when suite nav basic shell has render.
   */
  suiteNavPostRenderCallback: () => void;
  /**
   * Represents the user key used to uniquely identify a cache entry.
   */
  systemUserKey: string;
  /**
   * Represents the web server relative url where we would ping the Suite Nav service.
   */
  webServerRelativeUrl: string;
}

/**
 * Configuration event callback
 */
interface IWebPartConfigurationEventCallback {
}

/**
 * Context object that needs to be passed to the WebPart constructor.
 */
interface IWebPartContext extends ICommonWebPartContext {
  /**
   * Function to open PropertyPane
   */
  configureStart ?: (id: string, propertyPaneState?: PropertyPaneState) => void;
  /**
   * Reference to the DOM element that contains the webpart.
   */
  domElement: HTMLElement;
  host: IWebPartHost;
  /**
   * WebPart instance id
   * @todo: need to rationalize this with the webpartdata.instanceId ?
   */
  instanceId: string;
  /**
   * WebPart manifest
   */
  manifest: IClientSideWebPartManifest<any>;
}

/**
 * This structure represents the the serialized state of a webpart. When the serialize() API is called on
 * a webpart, the output should be this structure. The structure of the 'properties' field is owned by the
 * webpart and is specific to the webpart. Each webpart can decide the set of properties it wants to
 * serialialize.
 */
interface IWebPartData extends IClientSideWebPartManifestBase {
  /**
   * definition: list of webpart instance ids to which this webpart is connected. Note, these are webpart
   *             instance ids and not type ids. One webpart can have multiple instances on one page. WebParts
   *             need to be connected in order to send events to each other.
   * how used: used by the webpart to manage its internal metadata and config data. The framework code never
   *           touches these properties.
   * mandatory: no.
   * type: string[]
   * supported values: same as webpart instance ids.
   * example: ["dbef608d-3ad5-4f8f-b139-d916f2f0a294", "dbef608d-3ad5-4f8f-b139-049a20b48"]
   * experimental: yes
   */
  connectedWebPartIds ?: string[];
  /**
   * Definition: webpart display name.
   * Usage: display the name of the webpart in the toolbox, webpart gallery and the page.
   * Required: yes
   * Type: string
   * Supported values: string less than 100 characters
   * Example: "Text"
   */
  displayName: string;
  /**
   * definition: HTML markup equivalent for searchable properties and properties that need link fixup.
   * format: pseudo HTML
   * mandatory: no.
   * type: string
   * supported values: a string containing pseudo HTML.
   * example: "<div>searchable_property_value</div><link href='http://contoso.com/path_of_link.aspx' />"
   * experimental: yes
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
   * definition: universally instance id of the webpart. A web part can have multiple instances on a page. This id
   *             is expected to be universally unique accross time and page boundaries.
   * how used: used by the framework to uniquely identify an instance of a webpart.
   * mandatory: yes.
   * type: string
   * supported values: a unique string. Could be GUID or other uniquely identifiable formats.
   * example: ["dbef608d-3ad5-4f8f-b139-d916f2f0a294"]
   */
  instanceId: string;
  /**
   * definition: webpart specific properties. The individual webpart owns the definition of these properties.
   * how used: used by the webpart to manage its internal metadata and config data. The framework code never
   *           touches these properties.
   * mandatory: yes.
   * type: string
   * supported values: any JSON stringifiable object hierarchy.
   * example: { 'value': 'text value' }
   */
  properties ?: any;
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
 * Structure representing webpart - webpart events
 */
interface IWebPartEvent<T> extends IEvent<T> {
  data ?: T;
  /**
   * Source webpart name
   */
  source: string;
  sourceId: string;
  /**
   * Target webpart name
   */
  target: string;
  targetId: string;
}

interface IWebPartHost {
  /**
   * BasicHttpClient is used to perform REST calls with general internet services.
   * For communicating with SharePoint services, use HttpClient instead.
   */
  basicHttpClient: BasicHttpClient;
  /**
   * Event aggregator
   */
  eventAggregator ?: IEventAggregator;
  hostType: HostType;
  /**
   * HttpClient is used to perform REST calls with SharePoint services.
   * It implements special enhancements such as configuring default headers, adding
   * an "X-RequestDigest" header for write operations, and collecting telemetry
   * to help the service monitor the performance and reliability of the application.
   *
   * For communicating with non-SharePoint services, use BasicHttpClient instead.
   */
  httpClient: HttpClient;
  /**
   * @todo: (VSO Task 189081) When the new IPageContext API is completed, we will
   * rename newPageContext->pageContext and migrate existing web part projects.
   * (VSO Task #163986 is tracking the new PageContext design.)
   */
  newPageContext: IPageContext;
  /**
   * Page context provided by the host. This context is expected to provide sharepoint
   * page level info like site URLs, locale info, theme id etc...
   */
  pageContext: PreloadedPageData;
  /**
   * Resource loader
   */
  resourceLoader ?: IResourceLoader;
  setDirty ?: (instanceId: string, data?: any) => void;
  /**
   * Helper class to render loading and error indicators for the webpart
   */
  statusRenderer ?: IClientSideWebPartStatusRenderer;
  /**
   * Configuration event callback
   */
  webPartConfigurationEventCallback ?: IWebPartConfigurationEventCallback;
}

/**
 * The page context represents contextual information about the SharePoint page that
 * is currently being viewed, such as its site URL, the client side application ID,
 * the current user, etc.  The page context objects themselves represent key information
 * that is needed e.g. to identify the site/web/list/listitem in a REST service call,
 * but it is not a full cache with invalidation and change notifications.  If your
 * application maintains such a cache, it can keep the PageContext up to date by
 * means of methods such as SPListItem.updateOdataObject().
 */
declare class PageContext implements IPageContext {
  constructor(serviceScope: ServiceScope);
  /**
   * Contextual information for the client-side application.
   */
  public application: ApplicationContext;
  /**
   * Contextual information for the SharePoint SPPageContextInfo object
   * If unsure whether this object is initialized, check the SPPageContextInfo.state property first.
   */
  public core: PageContextCore;
  /**
   * Contextual information for the SharePoint list that is hosting the page.
   * If unsure whether this object is initialized, check the SPList.state property first.
   */
  public list: SPList;
  /**
   * Contextual information for the SharePoint list item that stores data for the page.
   * If unsure whether this object is initialized, check the SPListItem.state property first.
   */
  public listItem: SPListItem;
  /**
   * Contextual quick launch navigation information for the page.
   * If unsure whether this object is initialized, check the SPNavigation.state property first.
   */
  public quickLaunch: SPNavigationNodeCollection;
  /**
   * Contextual information for the SharePoint site collection that is hosting the page.
   * If unsure whether this object is initialized, check the SPSite.state property first.
   */
  public site: SPSite;
  /**
   * Top navigation information for the page.
   * If unsure whether this object is initialized, check the SPNavigation.state property first.
   */
  public topNav: SPNavigationNodeCollection;
  /**
   * Object for retrieving the current page's query parameter values.
   */
  public urlQueryParameters: UrlQueryParameterCollection;
  /**
   * Contextual information for the current SharePoint user
   * If unsure whether this object is initialized, check the SPPageContextInfo.state property first.
   */
  public user: SPUser;
  /**
   * Contextual information for the SharePoint site ("web") that is hosting the page.
   * If unsure whether this object is initialized, check the SPWeb.state property first.
   */
  public web: SPWeb;
}

/**
 * This is an abstract base class for the SPSite, SPWeb, SPList, SPListItem,
 * and ApplicationContext classes.  It defines the "state" of these objects.
 */
declare class PageContextItem {
	/**
	 * [constructor description]
	 * @param  {PageContext} pageContext [description]
	 * @return {[type]}                  [description]
	 */
  constructor(pageContext: PageContext);
  /**
   * Returns the PageContext that owns this object.  You can use this to find
   * other related objects, e.g. the parent SPWeb for an SPList.
   */
  public getPageContext(): PageContext;
  /**
   * Indicates whether the context item is uninitialized, waiting to be loaded,
   * or ready to use.
   */
  public state: PageContextItemState;

  /**
   * Reports an error if the object has already been loaded.
   */
  protected validateLoad(): void;
}

/**
 * THIS CLASS IS DEPRECATED.  Use the PageContext class instead.
 */
declare class PreloadedPageData {
  constructor();
  /**
   * Returns the client-side application identifier for the current application.
   * Example: '00000000-0000-0000-0000-000000000000'
   */
  public appId: string;
  /**
   * Returns the global singleton instance for this class.
   */
  public static instance: PreloadedPageData;
  /**
   * Returns the system user key.
   */
  public userKey: string;
  /**
   * Returns the current user's login name.
   */
  public userLoginName: string;
  public webAbsoluteUrl: string;
  /**
   * Returns the server-relative URL for the current SharePoint site ('web').
   * Example: '/sites/PubSite'
   */
  public webServerRelativeUrl: string;
  /**
   * Returns the the title of the current SPWeb.
   */
  public webTitle: string;
}

/**
 * Helper method to create a Checkbox on the PropertyPane.
 */
export function PropertyPaneCheckbox(targetProperty: string, properties: ICheckboxProps): IPropertyPaneField;

/**
 * Helper method to create a Dropdown on the PropertyPane.
 */
export function PropertyPaneDropdown(targetProperty: string, properties: IDropdownProps): IPropertyPaneField;

/**
 * Helper method to create a Heading on the PropertyPane.
 */
export function PropertyPaneHeading(properties: IPropertyPaneHeadingProps): IPropertyPaneField;

/**
 * Helper method to create a Label on the PropertyPane.
 */
export function PropertyPaneLabel(targetProperty: string, properties: ILabelProps): IPropertyPaneField;

/**
 * Helper method to create a Link on the PropertyPane.
 */
export function PropertyPaneLink(targetProperty: string, properties: ILinkProps): IPropertyPaneField;

/**
 * Helper method to create a Slider on the PropertyPane.
 */
export function PropertyPaneSlider(targetProperty: string, properties: ISliderProps): IPropertyPaneField;

/**
 * [PropertyPaneTextField description]
 * @param  {string}             targetProperty [description]
 * @param  {ITextFieldProps}    properties     [description]
 * @return {IPropertyPaneField}                [description]
 */
export function PropertyPaneTextField(targetProperty: string, properties: ITextFieldProps): IPropertyPaneField;

/**
 * [PropertyPaneToggle description]
 * @param  {string}             targetProperty [description]
 * @param  {IToggleProps}       properties     [description]
 * @return {IPropertyPaneField}                [description]
 */
export function PropertyPaneToggle(targetProperty: string, properties: IToggleProps): IPropertyPaneField;

/**
 * Implement some common functionality for a base React webpart. All React based
 * webparts are expected to inherit from this class.
 */
declare class ReactWebPart<P> extends BaseClientSideWebPart<P> {
  constructor(context: IWebPartContext,
      componentType: React.ComponentClass<IReactWebPartProps>);
  public dispose(): void;
	/**
	 * [render description]
	 * @param {DisplayMode}  mode [description]
	 * @param {IWebPartData} data [description]
	 */
  public render(mode: DisplayMode, data?: IWebPartData): void;
}

/**
 * This class is primarily used with the PageContext class.  It provides contextual
 * information for the SharePoint site collection that is hosting the page.
 */
declare class SPList extends PageContextItem {
  constructor(pageContext: PageContext);
  /**
   * The description of the list.
   */
  public description: string;
  /**
   * Returns an ODATA object containing additional information for this list, if available.
   * Otherwise, this returns undefined.  If your application fetches this data itself, it
   * can call updateOdataObject() to update the context.
   */
  public getOdataObject(): IOdataList;
  /**
   * The GUID that identifies the SPList on the server.
   */
  public id: string;
  /**
   * Assigns all properties of the object, then assigns the "state" property
   * to PageContextItemState.Ready.
   */
  public load(args: ISPListArgs): void;
  /**
   * The parent SPWeb that this list belongs to.
   */
  public parentWeb: SPWeb;
  /**
   * The title of the list.
   */
  public title: string;
  /**
   * Updates the ODATA object that will be returned when getOdataObject() is called.
   * This allows the application to share its data with other objects (e.g. web parts)
   * to avoid unnecessary REST calls.
   */
  public updateOdataObject(value: IOdataList): void;
}

/**
 * This class is primarily used with the PageContext class.  It provides contextual
 * information for the SharePoint list item associated with the current page.
 */
declare class SPListItem extends PageContextItem {
  constructor(pageContext: PageContext);
  /**
   * Returns an ODATA object containing additional information for this list item, if available.
   * Otherwise, this returns undefined.  If your application fetches this data itself, it
   * can call updateOdataObject() to update the context.
   */
  public getOdataObject(): IOdataListItem;
  /**
   * Returns the integer that identifies this list item on the server.  These integers
   * are assigned in increasing order.
   */
  public id: number;
  /**
   * Assigns all properties of the object, then assigns the "state" property
   * to PageContextItemState.Ready.
   */
  public load(args: ISPListItemArgs): void;
  /**
   * Returns the SPList that this list item belongs to.
   */
  public parentList: SPList;
  /**
   * Updates the ODATA object that will be returned when getOdataObject() is called.
   * This allows the application to share its data with other objects (e.g. web parts)
   * to avoid unnecessary REST calls.
   */
  public updateOdataObject(value: IOdataListItem): void;
}

/**
 * This class is primarily used with the PageContext class.  It provides quick launch
 * navigation information for the hosting application.
 */
declare class SPNavigationNode extends PageContextItem {
  constructor(pageContext: PageContext);
  /**
   * Returns an ODATA object containing additional navigation information if available.
   * Otherwise, this returns undefined.  If your application fetches thiscls
   * data itself, it can call updateOdataObject() to update the context.
   */
  public getOdataObject(): IOdataNavigationNode;
  /**
   * The numeric ID that identifies the SPNavigationNode on the server.
   */
  public id: number;
  /**
   * Assigns all properties of the object, then assigns the "state" property
   * to PageContextItemState.Ready.
   */
  public load(args: ISPNavigationNodeArgs): void;
  /**
   * Updates the ODATA object that will be returned when getOdataObject() is called.
   * This allows the application to share its data with other objects (e.g. web parts)
   * to avoid unnecessary REST calls.
   */
  public updateOdataObject(value: IOdataNavigationNode): void;
}

/**
 * This class is primarily used with the PageContext class. It provides navigation
 * information for the hosting application.
 */
declare class SPNavigationNodeCollection extends PageContextItem {
  constructor(pageContext: PageContext);
  /**
   * Returns an ODATA object containing additional navigation information if available.
   * Otherwise, this returns undefined.  If your application fetches this
   * data itself, it can call updateOdataObject() to update the context.
   */
  public getOdataObject(): IOdataNavigationNode[];
  /**
   * Returns all navigation nodes in the collection.
   * Returns all navigation nodes in the collection.
   */
  public items: SPNavigationNode[];

  /**
   * Updates the ODATA object that will be returned when getOdataObject() is called.
   * This allows the application to share its data with other objects (e.g. web parts)
   * to avoid unnecessary REST calls.
   */
  public updateOdataObject(value: IOdataNavigationNode[]): void;
}

/**
 * This class is primarily used with the PageContext class.  It provides contextual
 * information for the SharePoint site collection that hosts the page.
 */
declare class SPSite extends PageContextItem {
  constructor(pageContext: PageContext);
  /**
   * The GUID that identifies the SPSite on the server.
   */
  public id: string;
  /**
   * Assigns all properties of the object, then assigns the "state" property
   * to PageContextItemState.Ready.
   */
  public load(args: ISPSiteArgs): void;
  /**
   * Returns a server-relative URL for this SPSite.
   * Example: "/sites/PubSite"
   */
  public serverRelativeUrl: string;
  /**
   * Returns the title of the current site collection.
   */
  public title: string;
}

/**
 * This class is primarily used with the PageContext class.  It provides contextual
 * information for the current user visiting the page.
 */
declare class SPUser extends PageContextItem {
  constructor(pageContext: PageContext);
  /**
   * Returns an ODATA object containing additional information for this user, if available.
   * Otherwise, this returns undefined.  If your application fetches this data itself, it
   * can call updateOdataObject() to update the context.
   */
  public getOdataObject(): IOdataUser;
  /**
   * The ID that identifies the SPUser on the server.
   */
  public id: number;
  /**
   * Assigns all properties of the object, then assigns the "state" property
   * to PageContextItemState.Ready.
   */
  public load(args: ISPUserArgs): void;
  /**
   * Updates the ODATA object that will be returned when getOdataObject() is called.
   * This allows the application to share its data with other objects (e.g. web parts)
   * to avoid unnecessary REST calls.
   */
  public updateOdataObject(value: IOdataUser): void;
}

/**
 * This class is primarily used with the PageContext class.  It provides contextual
 * information for the SharePoint site ("web") that hosts the page.
 */
declare class SPWeb extends PageContextItem {
  constructor(pageContext: PageContext);
  /**
   * Returns an ODATA object containing additional information for this SharePoint site ("web"),
   * if available.  Otherwise, this returns undefined.  If your application fetches this
   * data itself, it can call updateOdataObject() to update the context.
   */
  public getOdataObject(): IOdataWeb;
  /**
   * The GUID that identifies the SPWeb on the server.
   */
  public id: string;
  /**
   * Assigns all properties of the object, then assigns the "state" property
   * to PageContextItemState.Ready.
   */
  public load(args: ISPWebArgs): void;
  /**
   * Returns the parent site collection that this site ("web") belongs to.
   */
  public parentSite: SPSite;
  /**
   * Returns a server-relative URL for this SPWeb.
   * Example: "/sites/PubSite/SubWeb"
   */
  public serverRelativeUrl: string;
  /**
   * Returns the title of the SharePoint site.
   */
  public title: string;
  /**
   * Updates the ODATA object that will be returned when getOdataObject() is called.
   * This allows the application to share its data with other objects (e.g. web parts)
   * to avoid unnecessary REST calls.
   */
  public updateOdataObject(value: IOdataWeb): void;
}

/**
 * @file TextResource.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
interface TextResource {
  content: string;
  error: Error;
}

/**
 * @file TextResourceRequest.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
declare class TextResourceRequest {
  public key: string;
  public url: string;
}

/**
 * WebPart PropertyPane configuration events
 * some sample text
 */
enum WebPartConfigurationEvent {
  ApplyClicked = 4,
  CloseComplete = 3,
  ConfigurationComplete = 1,
  OpenComplete = 2
}

/**
 * [PropertyPaneTextField description]
 * @param  {string}             targetProperty [description of targetProperty]
 * Continued description of the parameter.
 * @param  {ITextFieldProps}    properties     [description of properties]
 * @return {IPropertyPaneField}                [description]
 */
export function PropertyPaneTextField(targetProperty: string, properties: ITextFieldProps): IPropertyPaneField;
