class BaseClientSideWebPart<P> implements IClientSideWebPart {
  constructor(ctx: IWebPartContext);
  protected clearError(): void;
  protected configureStartInternal(): void;
  public connectWebParts(ids: string[]): void;
  protected get disableReactivePropertyChanges(): boolean;
  protected get displayMode(): DisplayMode;
  protected set displayMode(o: DisplayMode);
  public dispose(): void;
  protected get domElement(): HTMLElement;
  protected set domElement(o: HTMLElement);
  public getPropertyPaneSettings(): IPropertyPaneData;
  protected set host(o: IWebPartHost);
  protected get host(): IWebPartHost;
  protected set instanceId(o: string);
  protected get instanceId(): string;
  protected get manifest(): IClientSideWebPartManifest<any>;
  protected set manifest(o: IClientSideWebPartManifest<any>);
  public onBeforeRender < T >(): Promise<T>;
  public onBeforeSerialize(): IHtmlProperties;
  public onEvent < T >(eventName: string, eventObject: IWebPartEvent<T>): void;
  protected onPropertyChange(propertyPath: string, newValue: any): void;
  // @alpha
  protected onPropertyConfigurationComplete(): void;
  // @alpha
  protected onPropertyPaneRendered(): void;
  protected onPropertyPaneSave(): void;
  protected set properties(o: P);
  protected get properties(): P;
  protected get propertyPaneSettings(): IPropertyPaneSettings;
  public render(mode: DisplayMode = DisplayMode.Read, data?: IWebPartData): void;
  protected set renderedFromDefaultProperties(o: boolean);
  protected get renderedFromDefaultProperties(): boolean;
  protected set renderedOnce(o: boolean);
  protected get renderedOnce(): boolean;
  protected renderError(error: Error): void;
  public serialize(): IWebPartData;
  protected updateIWebPartData(webPartData: IWebPartData): void;
  public static validateCommonParams(context: ICommonWebPartContext): void;
}

// @public
class Canvas {
  constructor(serviceScope: ServiceScope,
      container: HTMLElement,
      mode: DisplayMode,
      serializedCanvas?: string,
      handleCanvasChanged?: () => void,
      scrollThreshold?: number);
  public get count(): number;
  public set displayMode(newMode: DisplayMode);
  public dispose(): void;
  public openToolbox(row: number): boolean;
  public get previewUrl(): string;
  public render(serializedCanvas?: string): void;
  public serialize(): string;
}

// (undocumented)
enum CanvasControlType {
  // (undocumented)
  BodyText = 0,
  // (undocumented)
  HeaderText = 1,
  // (undocumented)
  QuoteText = 2,
  // (undocumented)
  RTE = 4,
  // (undocumented)
  WebPartZone = 3
}

// @internal (undocumented)
class ClassicPageBootstrapper {
  public configureStart: (id: string, displayName: string) => void = (id: string, displayName: string): void => {
        this.initialize();
  
        this._manager.configureStart(id, PropertyPaneState.Toggle);
      };
  public loadClientSideWebPart(id: string,
        manifest: IClientSideWebPartManifest<any>,
        data: IWebPartData,
        mode: DisplayMode = DisplayMode.Read): void;
  public logClientSideWebPartLoadError: (id: string, displayName: string) => void = (id: string, error: string): void => {
          this.initialize();
  
          this._manager.renderError(this._findWebPartContainer(id), new Error(error));
        };
}

class ClientSideApplication {
  // (undocumented)
  constructor();
  protected get domElement(): HTMLDivElement;
  protected set domElement(value: HTMLDivElement);
  public load(shell: IShell): void;
  protected onLoad(): void;
  protected onRender(): void;
  public render(domElement: HTMLDivElement): void;
  protected get shell(): IShell;
  protected set shell(value: IShell);
  // (undocumented)
  public suiteNavConfiguration(): ISuiteNavManagerConfiguration;
}

export function combineURLPaths(...url: string[]): string;

class EventAggregator implements IEventAggregator {
  public raiseEvent < T >(eventName: string, eventObject: IEvent<T>): void;
  public subscribeByEventName < T >(eventName: string, subscriberId: string, callback: IEventCallback<T>): void;
  public subscribeBySourceId < T >(sourceId: string, subscriberId: string, callback: IEventCallback<T>): void;
}

export function getPathNameFromAbsoluteUrl(url: string): string;

// (undocumented)
class GuidHelpers {
  // (undocumented)
  public static generateGuid(): string;
  public static getNormalized(guid: string): string;
  // (undocumented)
  public static isValid(guid: string): boolean;
  // (undocumented)
  public static requireValid(guid: string): void;
}

// (undocumented)
enum HostType {
  // (undocumented)
  ClassicPage = 1,
  // (undocumented)
  ModernPage = 2,
  // (undocumented)
  TestPage = 3,
  // (undocumented)
  UnitTest = 4
}

interface IClientSideWebPart {
  // @alpha
  configureStart ?: () => void;
  // @alpha
  connectWebParts(ids: string[]): void;
  // @alpha
  dispose(): void;
  // @alpha
  getPropertyPaneSettings ?: () => IPropertyPaneData;
  // @alpha
  onBeforeRender < T >(): Promise<T>;
  // @alpha
  onBeforeSerialize(): IHtmlProperties;
  // @alpha
  onEvent ? < T >(eventName: string, eventObject: IWebPartEvent<T>): void;
  // @alpha
  previewUrl ?: string;
  // @alpha
  render(mode: DisplayMode, data?: IWebPartData): void;
  // @alpha
  serialize(): IWebPartData;
}

interface IClientSideWebPartStatusRenderer {
  clearError(domElement: HTMLElement): void;
  clearLoadingIndicator(domElement: Element): void;
  displayLoadingIndicator(domElement: Element, loadingMessage: string): void;
  renderError(domElement: HTMLElement, error: Error | string): void;
}

interface ICustomPropertyPaneFieldProps {
  context: any;
  onChanged ?: IOnCustomPropertyFieldChanged;
  onDispose ?: (elem: HTMLElement) => void;
  onRender: (elem: HTMLElement, context: any, onChanged?: IOnCustomPropertyFieldChanged) => void;
  value: any;
}

interface IEvent<T> {
  // (undocumented)
  data ?: T;
  // (undocumented)
  sourceId: string;
  // (undocumented)
  targetId: string;
}

interface IEventAggregator {
  raiseEvent < T >(eventName: string, eventObject: IEvent<T>): void;
  subscribeByEventName < T >(eventName: string, subscriberId: string, callback: IEventCallback<T>): void;
  subscribeBySourceId < T >(sourceId: string, subscriberId: string, callback: IEventCallback<T>): void;
}

interface IEventCallback<T> {
}

interface IHtmlProperties {
  // (undocumented)
  imageLinkProperties: {
    // (undocumented)
    [ propName: string ]: string
  }
  // (undocumented)
  linkProperties: {
    // (undocumented)
    [ propName: string ]: string
  }
  // (undocumented)
  searchableProperties: {
    // (undocumented)
    [ propName: string ]: string
  }
}

interface IOdataList {
  // (undocumented)
  BaseTemplate: number;
  Created: string;
  // (undocumented)
  CurrentChangeToken: IOdataChangeToken;
  // (undocumented)
  Description: string;
  EntityTypeName: string;
  // (undocumented)
  Hidden: boolean;
  Id: string;
  LastItemDeletedDate: string;
  LastItemModifiedDate: string;
  ListItemEntityTypeFullName: string;
  ParentWebUrl: string;
  TemplateFeatureId: string;
  Title: string;
}

interface IOdataListItem {
  ContentTypeId: {
    // (undocumented)
    StringValue: string
  }
  // (undocumented)
  ID: number;
  // (undocumented)
  Title: string;
  UniqueId: string;
}

interface IOdataUser {
  Email: string;
  // (undocumented)
  Id: number;
  // (undocumented)
  IsSiteAdmin: boolean;
  LoginName: string;
  // (undocumented)
  PrincipalType: number;
  Title: string;
  // (undocumented)
  UserId: IOdataUserId;
}

interface IOdataUserId {
  // (undocumented)
  NameId: string;
  NameIdIssuer: string;
}

interface IOdataWeb {
  Created: string;
  // (undocumented)
  CurrentChangeToken: IOdataChangeToken;
  CustomMasterUrl: string;
  // (undocumented)
  Description: string;
  Id: string;
  // (undocumented)
  IsMultilingual: boolean;
  // (undocumented)
  Language: number;
  LastItemModifiedDate: string;
  MasterUrl: string;
  // (undocumented)
  NoCrawl: boolean;
  // (undocumented)
  QuickLaunchEnabled: boolean;
  // (undocumented)
  RecycleBinEnabled: boolean;
  ServerRelativeUrl: string;
  // (undocumented)
  SiteLogoUrl: string;
  // (undocumented)
  Title: string;
  // (undocumented)
  UIVersion: number;
  Url: string;
  WebTemplate: string;
}

interface IOnCustomPropertyFieldChanged {
}

interface IPropertyPaneField {
  id ?: string;
  properties: ICheckboxProps | ITextFieldProps | IToggleProps | IDropdownProps |
      ICustomPropertyPaneFieldProps | ILabelProps | ISliderProps | IChoiceGroupProps |
      IButtonProps | ILinkProps | any;
  targetProperty: string;
  type: IPropertyPaneFieldType;
}

enum IPropertyPaneFieldType {
  Button = 11,
  Checkbox = 2,
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

interface IPropertyPaneGroup {
  groupFields: IPropertyPaneField[];
  groupName ?: string;
}

interface IPropertyPaneHeader {
  description: string;
  image ?: string;
}

enum IPropertyPaneHeadingLevel {
  h1 = 1,
  h2 = 2,
  h3 = 3,
  h4 = 4,
  h5 = 5,
  h6 = 6
}

interface IPropertyPanePage {
  groups: IPropertyPaneGroup[];
  header ?: IPropertyPaneHeader;
}

interface IPropertyPaneSettings {
  currentPage ?: number;
  pages: IPropertyPanePage[];
}

// (undocumented)
interface IReactWebPartProps extends IWebPartProps {
  data: IWebPartData;
  mode: DisplayMode;
}

interface IShell extends IServiceScopeProvider {
  basicHttpClient: BasicHttpClient;
  httpClient: HttpClient;
  pageContext: PageContext;
  serviceScope: ServiceScope;
  suiteNav: IComponentVisible;
}

interface ISuiteNavManagerConfiguration {
  cacheToken: string;
  currentUICultureName: string;
  disableSuiteNav(): void;
  hamburgerCallback: () => void;
  // (undocumented)
  isSuiteNavDisabled(): boolean;
  modifySuiteNavData: (suiteNavData: ISuiteNavData) => ISuiteNavData;
  o365ShellRenderSettings: IO365ShellRenderSettings;
  suiteNavPostRenderCallback: () => void;
  systemUserKey: string;
  webServerRelativeUrl: string;
}

interface IWebPartConfigurationEventCallback {
}

interface IWebPartContext extends ICommonWebPartContext {
  configureStart ?: (id: string, propertyPaneState?: PropertyPaneState) => void;
  domElement: HTMLElement;
  // (undocumented)
  host: IWebPartHost;
  instanceId: string;
  manifest: IClientSideWebPartManifest<any>;
}

interface IWebPartData extends IClientSideWebPartManifestBase {
  connectedWebPartIds ?: string[];
  displayName: string;
  htmlProperties ?: string;
  id: string;
  instanceId: string;
  properties ?: any;
  version: string;
}

interface IWebPartEvent<T> extends IEvent<T> {
  // (undocumented)
  data ?: T;
  source: string;
  // (undocumented)
  sourceId: string;
  target: string;
  // (undocumented)
  targetId: string;
}

// (undocumented)
interface IWebPartHost {
  basicHttpClient: BasicHttpClient;
  eventAggregator ?: IEventAggregator;
  // (undocumented)
  hostType: HostType;
  httpClient: HttpClient;
  newPageContext: IPageContext;
  pageContext: PreloadedPageData;
  resourceLoader ?: IResourceLoader;
  // (undocumented)
  setDirty ?: (instanceId: string, data?: any) => void;
  statusRenderer ?: IClientSideWebPartStatusRenderer;
  webPartConfigurationEventCallback ?: IWebPartConfigurationEventCallback;
}

class PageContext implements IPageContext {
  // (undocumented)
  constructor(serviceScope: ServiceScope);
  public get application(): ApplicationContext;
  public get core(): PageContextCore;
  public get list(): SPList;
  public get listItem(): SPListItem;
  public get quickLaunch(): SPNavigationNodeCollection;
  public get site(): SPSite;
  public get topNav(): SPNavigationNodeCollection;
  public get urlQueryParameters(): UrlQueryParameterCollection;
  public get user(): SPUser;
  public get web(): SPWeb;
}

class PageContextItem {
  // (undocumented)
  constructor(pageContext: PageContext);
  public getPageContext(): PageContext;
  public get state(): PageContextItemState;
  public set state(value: PageContextItemState);
  protected validateLoad(): void;
}

class PreloadedPageData {
  // (undocumented)
  constructor();
  public appId: string;
  public static get instance(): PreloadedPageData;
  public userKey: string;
  public userLoginName: string;
  // (undocumented)
  public webAbsoluteUrl: string;
  public webServerRelativeUrl: string;
  public webTitle: string;
}

export function PropertyPaneCheckbox(targetProperty: string, properties: ICheckboxProps): IPropertyPaneField;

export function PropertyPaneDropdown(targetProperty: string, properties: IDropdownProps): IPropertyPaneField;

export function PropertyPaneHeading(properties: IPropertyPaneHeadingProps): IPropertyPaneField;

export function PropertyPaneLabel(targetProperty: string, properties: ILabelProps): IPropertyPaneField;

export function PropertyPaneLink(targetProperty: string, properties: ILinkProps): IPropertyPaneField;

export function PropertyPaneSlider(targetProperty: string, properties: ISliderProps): IPropertyPaneField;

export function PropertyPaneTextField(targetProperty: string, properties: ITextFieldProps): IPropertyPaneField;

export function PropertyPaneToggle(targetProperty: string, properties: IToggleProps): IPropertyPaneField;

class ReactWebPart<P> extends BaseClientSideWebPart<P> {
  // (undocumented)
  constructor(context: IWebPartContext,
      componentType: React.ComponentClass<IReactWebPartProps>);
  // (undocumented)
  public dispose(): void;
  // (undocumented)
  public render(mode: DisplayMode, data?: IWebPartData): void;
}

class SPList extends PageContextItem {
  // (undocumented)
  constructor(pageContext: PageContext);
  public get description(): string;
  public getOdataObject(): IOdataList;
  public get id(): string;
  public load(args: ISPListArgs): void;
  public get parentWeb(): SPWeb;
  public get title(): string;
  public updateOdataObject(value: IOdataList): void;
}

class SPListItem extends PageContextItem {
  // (undocumented)
  constructor(pageContext: PageContext);
  public getOdataObject(): IOdataListItem;
  public get id(): number;
  public load(args: ISPListItemArgs): void;
  public get parentList(): SPList;
  public updateOdataObject(value: IOdataListItem): void;
}

class SPNavigationNode extends PageContextItem {
  // (undocumented)
  constructor(pageContext: PageContext);
  public getOdataObject(): IOdataNavigationNode;
  public get id(): number;
  public load(args: ISPNavigationNodeArgs): void;
  public updateOdataObject(value: IOdataNavigationNode): void;
}

class SPNavigationNodeCollection extends PageContextItem {
  // (undocumented)
  constructor(pageContext: PageContext);
  public getOdataObject(): IOdataNavigationNode[];
  public get items(): SPNavigationNode[];
  public set items(value: SPNavigationNode[]);
  public updateOdataObject(value: IOdataNavigationNode[]): void;
}

class SPSite extends PageContextItem {
  // (undocumented)
  constructor(pageContext: PageContext);
  public get id(): string;
  public load(args: ISPSiteArgs): void;
  public get serverRelativeUrl(): string;
  public get title(): string;
}

class SPUser extends PageContextItem {
  // (undocumented)
  constructor(pageContext: PageContext);
  public getOdataObject(): IOdataUser;
  public get id(): number;
  public load(args: ISPUserArgs): void;
  public updateOdataObject(value: IOdataUser): void;
}

class SPWeb extends PageContextItem {
  // (undocumented)
  constructor(pageContext: PageContext);
  public getOdataObject(): IOdataWeb;
  public get id(): string;
  public load(args: ISPWebArgs): void;
  public get parentSite(): SPSite;
  public get serverRelativeUrl(): string;
  public get title(): string;
  public updateOdataObject(value: IOdataWeb): void;
}

interface TextResource {
  // (undocumented)
  content: string;
  // (undocumented)
  error: Error;
}

class TextResourceRequest {
  // (undocumented)
  public key: string;
  // (undocumented)
  public url: string;
}

enum WebPartConfigurationEvent {
  // (undocumented)
  ApplyClicked = 4,
  // (undocumented)
  CloseComplete = 3,
  // (undocumented)
  ConfigurationComplete = 1,
  // (undocumented)
  OpenComplete = 2
}

// WARNING: Unsupported export: ReservedEventNames
// WARNING: Unsupported export: pageContextServiceKey
// WARNING: Unsupported export: _spShell
// WARNING: Unsupported export: ResourceLoader
