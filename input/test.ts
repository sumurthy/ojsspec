/**
 * Implements the minimal functionality for a webpart. This class also provides a bunch of parameter
<<<<<<< HEAD
 * validate and access to readonly properties like the displayMode, properties, manifest, instanceId,
 * domElement, and so on...
 *
 * The following methods in
 * the BaseClientSideWebPart have no functionality and are intended to be overridden
 * by the derived webpart:
 *
 *    render       Render the webpart inside the provided dom element.
 *
 * The following methods provide default implementations but may be overridden by the
 * derived webpart:
 *
 *    constructor  Use super() as the first line in derived webpart's constructor.
 *    dispose      (optional) Dispose any resources it is holding on to e.g. dom Elements, server resources.
 *    serialize    Update webPartData in the derived web part and then call super.serialize().
 *    onEvent      (optional) event handler
 *
 * The following methods are not intended to be overridden.
 *
=======
>>>>>>> 6282fdab93d485b53c1a1c15b83e2c8d7c383fd6
 *    renderError  Render an error message in the webpart container dom element.
 */
declare class BaseClientSideWebPart<P> implements IClientSideWebPart {
  /**
   * Contructor for the BaseClientSideWebPart
   * If a sub classe overrids the constructor, it needs to call super(context) as the first line of constructor
   */
<<<<<<< HEAD
	/**
	 * [constructor description]
	 * @param  {IWebPartContext} ctx [description]
	 * @return {[type]}              [description]
	 */
	constructor(ctx: IWebPartContext);
=======
  constructor(ctx: IWebPartContext);
>>>>>>> 6282fdab93d485b53c1a1c15b83e2c8d7c383fd6
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
   * @see IClientSideWebPart.ts
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
   * @see IClientSideWebPart.ts
   */
  public dispose(): void;
  /**
   * Root DOM element of the Web Part.
   * @readonly
   */
  protected domElement: HTMLElement;

  /**
   * @see IClientSideWebPart.ts
   */
  public getPropertyPaneSettings(): IPropertyPaneData;
  /**
   * Host of the Web Part.
   * @readonly
   */
  protected host: IWebPartHost;


  /**
   * Instance ID of the Web Part.
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
<<<<<<< HEAD

=======
>>>>>>> 6282fdab93d485b53c1a1c15b83e2c8d7c383fd6
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
