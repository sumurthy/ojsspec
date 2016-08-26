/// <reference path="../typings/tsd.d.ts" />

/**
 * BasicHttpClient implements a basic set of features for performing REST operations.
 * The subclass HttpClient extends this basic functionality with SharePoint-specific
 * enhancements.
 * @public
 */
declare class BasicHttpClient {
  constructor(serviceScope: ServiceScope);
  /**
   * Performs a REST service call.  Although the HttpClient subclass adds
   * additional enhancements, the parameters and semantics for BasicHttpClient.fetch()
   * are essentially the same as the WHATWG API standard that is documented here:
   * https://fetch.spec.whatwg.org/
   * @param url - the URL to fetch
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   */
  public fetch(url: string, options: IBasicHttpClientOptions): Promise<Response>;
  protected fetchCore(request: Request): Promise<Response>;
  /**
   * Calls fetch(), but sets the method to 'GET'.
   * @param url - the URL to fetch
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   */
  public get(url: string, options?: IBasicHttpClientOptions): Promise<Response>;
  /**
   * Calls fetch(), but sets the method to 'POST'.
   * @param url - the URL to fetch
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   */
  public post(url: string, options: IBasicHttpClientOptions): Promise<Response>;
  protected serviceScope: ServiceScope;
}

/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 *
 * This class contains various comparison utilities.
 *
 * @public
 */
declare class Compare {
  /**
   * Performs shallow comparison between two objects to determine if they are equal. This method compares
   * only object types.
   *
   * @param objA - the first object to compare.
   * @param objB - the second object to compare.
   *
   */
  public static shallowCompare(objA: Object, objB: Object): boolean;
}

/**
 * This class is primarily used with the PageContext class.  It provides culture info
 * for the current user of the application.
 * @public
 */
declare class CultureInfo {

  /**
   * This string determines the language default format for dates, times, numbers, currency values,
   * the sorting order of text, casing conventions, and string comparisons. This property may have
   * an empty string, but will never be undefined.
   * Example: If the currentCultureName is "en-au" then the application could use this information
   * to display the date as 1/8 instead of 8/1.
   */
  public currentCultureName: string;
  /**
   * This string determines the default user interface language. This used for localization and
   * translation of text. This property may have an empty string, but will never be undefined.
   * Example: If the currentUICultureName is "es-mx", then the application could use this
   * information to translate the word "hello" to "hola".
   */
  public currentUICultureName: string;
}

// @public
enum DisplayMode {
  // (undocumented)
  Edit = 2,
  // (undocumented)
  Read = 1
}

/**
 * This class contains contextual information about the enviroment that is hosting the framework and
 * its components.
 * @public
 */
declare class Environment {


  /**
   * An enum that describes which type of enviroment the framework is running in.
   */
  public type: EnvironmentType;
}

// @public
enum EnvironmentType {
  ClassicSharePoint,
  Local,
  SharePoint,
  Test
}

/**
 * This class represents a globally unique identifier, as described by
 * IETF RFC 4122.  The input string is normalized and validated by the class
 * constructor, which provides important guarantees that simplify other code
 * that works with the GUID.  This class also provides basic functionality
 * for generating a pseudo-random GUID ("version 4" UUID from the RFC);
 * however, be aware that the uniqueness depends on the browser's
 * Math.random() function and may be not be suitable for some applications.
 *
 * @see {@link https://www.ietf.org/rfc/rfc4122.txt}
 */
declare class Guid {

  /**
   * Compare this instance to another Guid instance
   *
   * @returns A value indicating whether this instance and the specified Guid object
   *   represent the same value
   */
  public equals(guid: Guid): boolean;
  /**
   * Indicates whether a guid is valid (according to RFC4122).
   *
   * @param guid - Test guid.
   * @returns Value indicating whether the guid is valid.
   */
  public static isValid(guid: string): boolean;
  /**
   * Returns a new Guid instance with a pseudo-randomly generated Guid.
   *
   * @returns A new valid unique Guid object
   */
  public static newGuid(randomProvider?: IRandomProvider): Guid;
  /**
   * Object.prototype.toString override
   *
   * @returns The GUID value in lowercase hexadecimal without braces.
   * Example: 'd5369f3b-bd7a-412a-9c0f-7f0650bb5489'
   */
  public toString(): string;
  /**
   * Trys to construct a new Guid instance using guid string. The guid argument
   * is normalized and validated. If the argument is not a valid "version 4" UUID from
   * RFC 4122, tryParse will return undefined.
   *
   * @param guid - A guid string
   * @returns If the guid argument was valid, a new Guid instance. Otherwise, undefined.
   */
  public static tryParse(guid: string): Guid;
}

/**
 * HttpClient is used to perform REST calls against SharePoint.  It adds default
 * headers, manages the digest needed for writes, and collects telemetry that
 * helps the service to monitor the performance of an application.
 *
 * For communicating with non-SharePoint services, use the BasicHttpClient
 * class instead.
 * @public
 */
declare class HttpClient extends BasicHttpClient {
  constructor(serviceScope: ServiceScope);
  /**
   * Begins an ODATA batch, which allows multiple REST queries to be bundled into
   * a single web request.
   */
  public beginBatch(batchOptions?: IODataBatchOptions): ODataBatch;
  /**
   * Generally, the parameters and semantics for HttpClient.fetch() are essentially
   * the same as the WHATWG API standard that is documented here:
   * https://fetch.spec.whatwg.org/
   *
   * The HttpClient subclass adds some additional behaviors that are convenient when
   * working with SharePoint ODATA API's (which can be avoided by using
   * BasicHttpClient instead):
   * - Default "Accept" and "Content-Type" headers are added if not explicitly specified.
   * - For write operations, an "X-RequestDigest" header is automatically added
   * - The request digest token is automatically fetched and stored in a cache, with
   *   support for preloading
   *
   * For a write operation, HttpClient will automatically add the "X-RequestDigest"
   * header, which may need to be obtained by issuing a seperate request such as
   * "https://example.com/sites/sample/_api/contextinfo".  Typically the appropriate
   * SPWeb URL can be guessed by looking for a reserved URL segment such as "_api"
   * in the original URL passed to fetch(); if not, use IHttpClientOptions.webUrl
   * to specify it explicitly.
   *
   * @param url - the URL to fetch
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   * @override
   */
  public fetch(url: string, options: IHttpClientOptions): Promise<Response>;
  /**
   * Calls fetch(), but sets the method to 'GET'.
   * @param url - the URL to fetch
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   * @override
   */
  public get(url: string, options?: IHttpClientOptions): Promise<Response>;
  /**
   * This uses a heuristic to guess the SPWeb URL associated with the provided
   * REST URL.  This is necessary for operations such as the X-RequestDigest
   * and ODATA batching, which require POSTing to a separate REST endpoint
   * in order to complete a request.
   * For excample, if the requestUrl is "/sites/site/web/_api/service",
   * the returned URL would be "/sites/site/web".  Or if the requestUrl
   * is "http://example.com/_layouts/service", the returned URL would be
   * "http://example.com".
   * @param requestUrl  The URL for a SharePoint REST service
   * @returns the inferred SPWeb URL
   */
  public static getWebUrlFromRequestUrl(requestUrl: string): string;
  /**
   * Calls fetch(), but sets the method to 'POST'.
   * @param url - the URL to fetch
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   * @override
   */
  public post(url: string, options: IHttpClientOptions): Promise<Response>;
}

/**
 * This interface defines the options for the BasicHttpClient operations such as
 * get(), post(), fetch(), etc.  It is based on the whatwg API standard
 * parameters that are documented here:
 * https://fetch.spec.whatwg.org/
 * @public
 * headers ?: HeaderInit|{ [index: string]: string };
 */
interface IBasicHttpClientOptions extends RequestInit {
  body ?: BodyInit;
  cache ?: string|RequestCache;
  credentials ?: string|RequestCredentials;
  headers ?: HeaderInit;
  method ?: string;
  mode ?: string|RequestMode;
}

/**
 * This is is the manifest for a client-side application.
 * @public
 */
interface IClientSideApplicationManifest extends IClientSideComponentManifest {
  /**
   * Represents the boot strap module link of client side application or webpart.
   */
  bootstrapModule: string;
  /**
   * Represents the fabric css components links.
   */
  cssLinks: string[];
  /**
   * Represents display name of webpart.
   */
  displayName: string;
  /**
   * Represents the application id.
   */
  id: string;
  /**
   * Represents the map of culture to localized configuration url
   */
  localizedConfigs: {
    [ key: string ]: string
  }
  /**
   * Represents the manifest version.
   */
  manifestVersion: number;
  /**
   * Represents name of the module which loads application or webpart.
   */
  moduleName: string;
  /**
   * Represents the platform js module link of client side application.
   */
  platformModule: string;
  /**
   * Represents client side components to be preloaded when loading "this" component.
   */
  preloadClientSideComponents: string[];
  /**
   * Represents flags to preload information in host aspx page.
   */
  preloadCommands: {
    /**
     * Determines whether or not to prefetch the list item object
     */
    shouldPreloadItem: boolean;
    /**
     * Determines whether or not to prefetch the list object
     */
    shouldPreloadList: boolean;
    /**
     * Determines whether or not to prefetch the quick launch navigation menu items
     */
    shouldPreloadQuickLaunch: boolean;
    /**
     * Determines whether or not to prefetch the user object
     */
    shouldPreloadUser: boolean;
    /**
     * Determines whether or not to prefetch the web object
     */
    shouldPreloadWeb: boolean;
  }
  /**
   * Represents the system js module link of client side application.
   */
  systemJsModule: string;
  /**
   * Represents the version of scripts.
   */
  version: string;
}

/**
 * This is the base interface that is extended by the interfaces
 * that represent the manifest for each kind of client-side component.
 * @public
 */
interface IClientSideComponentManifest {
  /**
   * Represents the boot strap module link of client side application or webpart.
   */
  bootstrapModule: string;
  /**
   * Represents display name of webpart.
   */
  displayName: string;
  /**
   * Represents the application id.
   */
  id: string;
  /**
   * Represents the manifest version.
   */
  manifestVersion: number;
  /**
   * Represents name of the module which loads application or webpart.
   */
  moduleName: string;
  /**
   * Represents the version of scripts.
   */
  version: string;
}

/**
 * IDigestCache is an internal service used by HttpClient to maintain a cache of request digests
 * for each SPWeb URL.  A request digest is a security token that the SharePoint server requires for
 * for any REST write operation, specified via the "X-RequestDigest" HTTP header.  It is obtained
 * by calling the "/_api/contextinfo" REST endpoint, and expires after a server configurable amount
 * of time.  For more information, see the MSDN article
 * "Complete basic operations using SharePoint 2013 REST endpoints".
 * @see {@link https://msdn.microsoft.com/en-us/library/office/jj164022.aspx }
 * @public
 */
interface IDigestCache {
  /**
   * Inserts a specific request digest value into the cache.  Normally this is unnecessary because
   * the framework will automatically issue a REST request to fetch the digest when necessary;
   * however, in advanced scenarios addDigestToCache() can be used to avoid the overhead of the
   * REST call.
   *
   * @param webUrl               The URL of the SPWeb that the API call will be issued to.
   *                             This may be a server-relative or absolute URL.
   * @param digestValue          The digest value, which is an opaque that must be generated
   *                             by the SharePoint server.  The syntax will look something like
   *                             this: "0x0B85...2EAC,29 Jan 2016 01:23:45 -0000"
   * @param expirationTimestamp  A future point in time, as measured by performance.now(), after which
   *                             the digest value will no longer be valid.
   *                             NOTE: The expirationTime is a DOMHighResTimeStamp value whose units are
   *                             fractional milliseconds; for example, to specify an expiration
   *                             "5 seconds from right now", use performance.now()+5000.
   */
  addDigestToCache(webUrl: string, digestValue: string, expirationTimestamp: number): void;
  /**
   * Clears all values from the cache.
   */
  clearAllDigests(): void;
  /**
   * Clears the cached digest for the specified SPWeb URL.  This operation is useful
   * e.g. if an error indicates that a digest was invalidated prior to its expiration time.
   *
   * @param webUrl               The URL of the SPWeb whose digest should be cleared.
   *                             This may be a server-relative or absolute URL.
   * @returns                    Returns true if a cache entry was found and deleted; false otherwise.
   */
  clearDigest(webUrl: string): boolean;
  /**
   * Returns a digest string for the specified SPWeb URL.  If the cache already contains a usable value,
   * the promise is fulfilled immediately.  Otherwise, the promise will be pending and resolve after
   * an HTTP request obtains the digest, which will be added to the cache.
   * @param webUrl  The URL of the SPWeb that the API call will be issued to.
   *                This may be a server-relative or absolute URL.
   * @returns       A promise that is fulfilled with the digest value.
   */
  fetchDigest(webUrl: string): Promise<string>;
}

/**
 * This interface defines the options for the HttpClient operations such as
 * get(), post(), fetch(), etc.  It is based on the WHATWG API standard
 * parameters that are documented here:
 * https://fetch.spec.whatwg.org/
 * @public
 * headers ?: HeaderInit|{ [index: string]: string };
 */
interface IHttpClientOptions extends IBasicHttpClientOptions {
  body ?: BodyInit;
  cache ?: string|RequestCache;
  credentials ?: string|RequestCredentials;

  method ?: string;
  mode ?: string|RequestMode;
  /**
   * For a write operation, HttpClient will automatically add the
   * "X-RequestDigest" header, which may need to be fetched using a seperate
   * request such as "https://example.com/sites/sample/_api/contextinfo".
   * Typically the SPWeb URL ("https://example.com/sites/sample" in this
   * example) can be guessed by looking for a reserved URL segment such
   * as "_api" in the original REST query, however certain REST endpoints
   * do not contain a reserved URL segment; in this case, the webUrl can
   * be explicitly specified using this option.
   */
  webUrl ?: string;
}

/**
 * Data used for creating a SPPermission object.
 * @public
 */
interface IODataBasePermission {
  High: number;
  Low: number;
}

/**
 * This interface is passed to the ODataBatch constructor.  It specifies options
 * that affect the entire batch.
 * @public
 */
interface IODataBatchOptions {
  /**
   * ODataBatch will need to perform its POST to an endpoint such as
   * "http://example.com/sites/sample/_api/$batch". Typically the SPWeb URL
   * ("https://example.com/sites/sample" in this example) can be guessed by
   * looking for a reserved URL segment such as "_api" in the first URL
   * passed to fetch(), but if not, the webUrl can be explicitly specified
   * using this option.
   */
  webUrl ?: string;
}

/**
 * Represents an OData SP.ChangeToken object.  For more information about this object
 * @see {@link https://msdn.microsoft.com/en-us/library/office/jj860569.aspx}
 * @public
 */
interface IODataChangeToken {
  /**
   * Example: { StringValue: "1;3;9fb9199b-65f2-4a4a-b597-11d1a44422c1;635892156279130000;10721" }
   */
  StringValue: string;
}

/**
 * Represents an OData SP.ContextWebInformation object.  For more information about this object
 * @see {@link https://msdn.microsoft.com/en-us/library/office/jj860569.aspx}
 * @public
 */
interface IODataContextWebInformation {
  /**
   * Example: 1800
   */
  FormDigestTimeoutSeconds: number;
  /**
   * Example: "0x61B31CBF4C76C...B0,20 Jan 2016 02:24:43 -0000"
   */
  FormDigestValue: string;
  /**
   * Example: "16.0.4919.3000"
   */
  LibraryVersion: string;
  /**
   * Example: "http:\u002f\u002fexample.com\u002fsites\u002fPubSite"
   */
  SiteFullUrl: string;
  /**
   * Example: [ "14.0.0.0", "15.0.0.0" ]
   */
  SupportedSchemaVersions: string[];
  /**
   * Example: "http:\u002f\u002fexample.com\u002fsites\u002fPubSite"
   */
  WebFullUrl: string;
}

/**
 * Represents an OData SP.NavigationNode object.
 * https://msdn.microsoft.com/en-us/library/office/jj246311.aspx
 * @public
 */
interface IODataNavigationNode {
  /**
   * Gets or sets an array of Navigation Nodes that are children to the current node.
   */
  Children ?: IODataNavigationNode[];
  /**
   * Gets a value that specifies the identifier for the navigation node.
   */
  Id ?: number;
  /**
   * @TODO Figure out what this is?
   */
  IsDocLib ?: boolean;
  /**
   * Gets or sets a value that specifies whether the navigation node URL potentially
   * corresponds to pages outside of the site collection.
   */
  IsExternal ?: boolean;
  /**
   * Gets or sets a value that specifies if the node navigation link should be visible.
   */
  IsVisible ?: boolean;
  /**
   * Gets or sets a value that specifies the anchor text for the node navigation link.
   */
  Title ?: string;
  /**
   * Gets or sets a value that specifies the URL to be stored with the navigation node.
   * It must be a URL of relative form if IsExternal is false. It must be a URL of
   * relative or absolute form.
   */
  Url ?: string;
}

/**
 * Represents an OData Microsoft.SharePoint.Navigation.SPNavigation object.
 * https://msdn.microsoft.com/en-us/library/office/ee557907.aspx
 * @public
 */
interface IODataNavigationNodeCollection {
  /**
   * Gets an SPNavigationNode object that contains
   * the nodes in the Quick Launch area of the site.
   */
  quickLaunch: IODataNavigationNode[];
  /**
   * Gets an SPNavigationNode object that contains the nodes in the top link bar
   * for the website.
   */
  topNav: IODataNavigationNode[];
}

/**
 * Represents an OData SP.Web object.  For more information about this object
 * see the MSDN documentation here:
 * https://msdn.microsoft.com/en-us/library/office/jj860569.aspx
 * @public
 */
interface IODataWeb {
  /**
   * Gets a value that specifies when the site was created.
   * Example: "/Date(2016,0,20,12,58,7,0)/"
   */
  Created ?: string;
  /**
   * Represents the unique sequential location of a change within the change log.
   */
  CurrentChangeToken ?: IODataChangeToken;
  /**
   * Gets or sets the URL for a custom master page file to apply to the website.
   * Example: "/sites/PubSite/_catalogs/masterpage/seattle.master"
   */
  CustomMasterUrl ?: string;
  /**
   * Gets or sets the description for the site.
   */
  Description ?: string;
  /**
   * Gets a value that specifies the site identifier for the site.
   * Example: "/Guid(92ea328e-9f50-49a6-9da5-2f2dd5577041)/"
   */
  Id ?: string;
  /**
   * Value that represents if the web was
   */
  IsMultilingual ?: boolean;
  /**
   * Gets a value that specifies the LCID for the language that is used on the site.
   * Example: 1033
   */
  Language ?: number;
  /**
   * Gets a value that specifies when an item was last modified in the site.
   * Example: "/Date(1453618828000)/"
   */
  LastItemModifiedDate ?: string;
  /**
   * Gets or sets the URL of the master page that is used for the website.
   * Example: "/sites/PubSite/_catalogs/masterpage/seattle.master"
   */
  MasterUrl ?: string;
  /**
   * Determines if a particular web will be crawled by search or not.
   */
  NoCrawl ?: boolean;
  /**
   * Gets or sets a value that specifies whether the Quick Launch area is enabled on the site.
   */
  QuickLaunchEnabled ?: boolean;
  /**
   * Gets or sets a value that determines whether the recycle bin is enabled for the website.
   */
  RecycleBinEnabled ?: boolean;
  /**
   * Gets or sets the server-relative URL for the Web site.
   * Example: "/sites/PubSite"
   */
  ServerRelativeUrl ?: string;
  /**
   * Gets the url for the logo of this particular site.
   */
  SiteLogoUrl ?: string;
  /**
   * The title of the web.
   */
  Title ?: string;
  /**
   * Gets or sets the user interface (UI) version of the Web site.
   * Example: 15
   */
  UIVersion ?: number;
  /**
   * Gets the absolute URL for the website.
   * Example: "http://example.com/sites/PubSite"
   */
  Url ?: string;
  /**
   * Gets the name of the site definition or site template that was used to create the site.
   * Example: "BLANKINTERNET"
   */
  WebTemplate ?: string;
}

/**
 * This is a convenient interface that can be used to indicate that an object
 * has an associated ServiceScope.
 * @public
 */
interface IServiceScopeProvider {
  /**
   * Returns a ServiceScope instance that can be used to obtain dependencies
   * for the current context.
   * @readonly
   */
  serviceScope: ServiceScope;
}



/**
 * The Log class provides static methods for logging messages at different levels (verbose,
 * info, warning, error) and with context information. Context information helps identify
 * which component generated the messages and makes the messages useful and filterable.
 *
 * @public
 */
declare class Log {
  /**
   * Logs an error
   * @param   source - the source from where the error is logged, e.g., the class name.
   *          The source provides context information for the logged error.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param   error - the error to be logged
   * @param   scope - the service scope that the source uses. A service scope can provide
   *         more context information (e.g., web part information) to the logged error.
   */
  public static error(source: string, error: Error, scope?: ServiceScope): void;
  /**
   * Logs an informational message
   * @param   source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param   message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   * @param   scope - the service scope that the source uses. A service scope can provide
   *         more context information (e.g., web part information) to the logged message.
   */
  public static info(source: string, message: string, scope?: ServiceScope): void;
  /**
   * Logs a verbose message
   * @param   source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param   message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   * @param   scope - the service scope that the source uses. A service scope can provide
   *         more context information (e.g., web part information) to the logged message.
   */
  public static verbose(source: string, message: string, scope?: ServiceScope): void;
  /**
   * Logs a warning
   * @param   source - the source from where the message is logged, e.g., the class name.
   *          The source provides context information for the logged message.
   *          If the source's length is more than 20, only the first 20 characters are kept.
   * @param   message - the message to be logged
   *          If the message's length is more than 100, only the first 100 characters are kept.
   * @param   scope - the service scope that the source uses. A service scope can provide
   *         more context information (e.g., web part information) to the logged message.
   */
  public static warn(source: string, message: string, scope?: ServiceScope): void;
}



/**
 * The ODataBatch class accumulates a number of REST service calls and
 * transmits them as a single ODATA batch.  This protocol is documented here:
 * http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part1-protocol.html
 *
 * The usage is to call ODataBatch.fetch() to queue each individual request,
 * and then call ODataBatch.execute() to execute the batch operation.
 * The execute() method returns a promise that resolves when the real REST
 * call has completed.  Each call to fetch() also returns a promise that will
 * resolve with a Response object for that particular request.
 *
 * @public
 */
declare class ODataBatch {
  public constructor(serviceScope: ServiceScope, batchOptions?: IODataBatchOptions);
  /**
   * Executes the batched queries that were queued using ODataBatch.fetch().
   */
  public execute(): Promise<ODataBatch>;
  /**
   * Queues a new request, and returns a promise that can be used to access
   * the server response (after execute() has completed).  The parameters for
   * this function are basically the same as the WHATWG API standard documented here:
   * https://fetch.spec.whatwg.org/
   *
   * However, be aware that certain REST headers are ignored or not allowed inside
   * a batch.  See the ODATA documentation for details.
   *
   * When execute() is called, it will POST to a URL such as
   * "http://example.com/sites/sample/_api/$batch".  Typically ODataBatch can successfully
   * guess the appropriate SPWeb URL by looking for a reserved URL segment such as "_api"
   * in the first URL passed to fetch().  If not, use IODataBatchOptions.webUrl to specify it
   * explicitly.
   *
   * @param url - the URL to fetch, or an already initialized Request object
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   */
  public fetch(url: string, options?: IODataBatchRequestOptions): Promise<Response>;
  /**
   * Calls fetch(), but sets the method to 'GET'.
   * @param url - the URL to fetch
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   */
  public get(url: string, options?: IODataBatchRequestOptions): Promise<Response>;
  /**
   * Calls fetch(), but sets the method to 'POST'.
   * @param url - the URL to fetch
   * @param options - additional options that affect the request
   * @returns a promise that will return the result
   */
  public post(url: string, options: IODataBatchRequestOptions): Promise<Response>;
}

/**
 * The page context provides standard definitions for common SharePoint objects
 * that need to be shared between the client-side application, web parts, and other
 * components.  Typically the data is fetched via REST queries when navigating to a
 * new page, but it can also be preloaded by the web server, or filled from a custom
 * application cache.
 * @public
 */
declare class PageContext {
  constructor(serviceScope: ServiceScope);
  /**
   * This class is primarily used with the PageContext class.  It provides culture info
   * for the current user of the application.
   */
  public cultureInfo: CultureInfo;

  /**
   * Returns whether the PageContext has been initialized.
   */
  public isInitialized: boolean;
  /**
   * Contextual information for the SharePoint site collection ("site") that is hosting the page.
   * The site object will be defined if the PageContext was initialized.
   */
  public site: SPSite;
  /**
   * This class is primarily used with the PageContext class.  It provides contextual information
   * for the SharePoint user that is accessing the page.
   */
  public user: SPUser;
  /**
   * Contextual information for the SharePoint site ("web") that is hosting the page. The web object
   * will be defined if the PageContext was initialized.
   */
  public web: SPWeb;
}

/**
 * The ServiceKey is a lookup key that is used when calling ServiceScope.consume()
 * to fetch a dependency.  The key also defines a default implementation of the
 * dependency, which will be autocreated by the root scope if the dependency is not found.
 * Providing a default implementation ensures that new dependencies can be safely
 * introduced without inadvertently breaking components that are loaded by an older host
 * (that does not provide the new dependency).
 * @public
 */
declare class ServiceKey<T> {
  /**
   * PRIVATE - Do not call this from your own code.
   */
  constructor(id: string, name: string, defaultCreator: ServiceCreator<T>);
  /**
   * Constructs a new ServiceKey whose default implementation will be a new instance of
   * a TypeScript class that accepts the standard constructor parameter.  If you want to
   * specify custom constructor parameters, use createCustom() instead.
   * @param name - A name such as "MyApplication.IMyService" which should be unique within
   *   your application.
   * @param serviceClass - the TypeScript class that implements the service.
   * @returns - the newly created ServiceKey
   */
  public static create < T >(name: string,
      serviceClass: { new (serviceScope: ServiceScope); }): ServiceKey<T>;
  /**
   * Constructs a new ServiceKey whose default implementation will be obtained
   * by invoking the specified callback.
   * @param name - A name such as "MyApplication.IMyService" which should be unique within
   *   your application.
   * @param defaultCreator - A callback that returns an object that implements the T interface
   * @returns - the newly created ServiceKey
   */
  public static createCustom < T >(name: string, defaultCreator: ServiceCreator<T>): ServiceKey<T>;
  public defaultCreator: ServiceCreator<T>;
  public id: string;
  public name: string;
}

/**
 * ServiceScope provides a formalized way for components to register and consume dependencies
 * ("services"), and to enable different implementations to be registered in different scopes.
 * This improves modularity by decoupling components from their dependencies in an extensible way.
 *
 * For example, suppose that various components need access to an IPageManager instance.  We could
 * simply make the PageManager a singleton (i.e. global variable), but this will not work e.g. if
 * we need to create a pop-up dialog that requires a second PageManager instance.  A better solution
 * would be to add the PageManager as a constructor parameter for each component that requires it,
 * however then we immediately face the problem that any code that calls these constructors
 * also needs a PageManager parameter.  In an application with many such dependencies, business
 * logic that ties together many subsystems would eventually pick up a constructor parameter
 * for every possible dependency, which is unwieldy.  A natural solution would be to move all the
 * dependencies into a class with name like "ApplicationContext", and then pass this around as our
 * constructor parameter.  This enables the PageManager to be passed to classes that need it
 * without cluttering the intermediary classes that don't.  However, it still has a design problem
 * that "ApplicationContext" has hard-coded dependencies on many unrelated things.  A more flexible
 * approach is to make it a dictionary that can look up items for consumers/providers who know the
 * right lookup key (i.e. ServiceKey).  This is the popular "service locator" design pattern,
 * familiar from the SPContext API in classic SharePoint.
 *
 * ServiceScope takes this idea a step further in two important ways:  First, it provides a scoping
 * mechanism so that e.g. if we had two different pages, they could each consume a unique PageManager
 * instance while still sharing other common dependencies.  Secondly, it allows for a ServiceKey
 * to provide a default implementation of the dependency.  This is important for API stability in
 * our modular client-side environment:  For example, suppose that version 2.0 of our application
 * introduced a new IDiagnosticTracing interface that a version 2.0 component will expect to consume.
 * If the version 2.0 component gets loaded by an older 1.0 application, it would fail.  We could
 * fix this by requiring each consumer to check for any missing dependencies and handle that case,
 * but it would require a lot of checks.  A better solution is to ensure that a default implementation
 * always exists, perhaps just a trivial behavior, so that components don't have to worry about it.
 *
 * Usage: ServiceScope instances are created by calling either ServiceScope.startNewRoot() or
 * ServiceScope.startNewChild().  They are initially in an "unfinished" state, during which provide()
 * can be called to register service keys, but consume() is forbidden.  After ServiceScope.finish()
 * is called, consume() is allowed and provide() is now forbidden.  These semantics ensure that
 * ServiceScope.consume() always returns the same result for the same key, and does not depend on
 * order of initialization.  It also allows us to support circular dependencies without worrying
 * about infinite loops, even when working with external components that were implemented by
 * third parties.  To avoid mistakes, it's best to always call consume() inside a callback from
 * serviceScope.whenFinished().
 * @public
 */
declare class ServiceScope {
  /**
   * PRIVATE CONSTRUCTOR - DO NOT CALL THIS FROM YOUR OWN CODE.
   */
  constructor(parent: ServiceScope);
  /**
   * Components should call this function to "consume" a dependency, i.e. look up the serviceKey
   * and return the registered service instance.  If the instance cannot be found, then a default
   * instance will be autocreated and registered with the root ServiceScope.
   * @param serviceKey - the key that was used when provide() was called to register the service
   * @returns - the service instance
   */
  public consume < T >(serviceKey: ServiceKey<T>): T;
  /**
   * This is a shorthand function that its equivalent to constructing a new instance of the
   * simpleServiceClass, then registering it by calling ServiceScope.provide().
   * @param serviceKey - the key that can be used later to consume the service
   * @param simpleServiceClass - the TypeScript class to be constructed
   * @returns - a newly constructed instance of simpleServiceClass
   */
  public createAndProvide < T >(serviceKey: ServiceKey<T>,
      simpleServiceClass: { new (serviceScope: ServiceScope); }): T;
  /**
   * This is a shorthand function that constructs the default implementation of the specified
   * serviceKey, and then registers it by calling ServiceScope.provide().
   * @param serviceKey - the key that can be used later to consume the service
   * @returns - a service instance that was constructed using ServiceKey.defaultCreator
   */
  public createDefaultAndProvide < T >(serviceKey: ServiceKey<T>): T;
  /**
   * When a ServiceScope is first started, it is in an "unfinished" state where provide() is
   * allowed but consume() is not allowed.  After calling finish(), then consume() is allowed
   * but provide() is not allowed.  This formalism completely eliminates a number of tricky bugs
   * such as:  Scope2 is a child of Scope1, and Scope1 provides instance A1 of interface A;
   * if someone consumes A1 from Scope2 (via inheritance) before Scope2.provide() is called
   * with A2, then a subsequent call to Scope2.consume() might return a different result than
   * the previous call, which would be very confusing for developers.
   */
  public finish(): void;
  /**
   * Returns the parent of the current ServiceScope, or undefined if this is a root scope.
   * @returns - the parent service scope
   */
  public getParent(): ServiceScope;
  /**
   * ServiceScope.provide() is used to register an implemententation of the given serviceKey
   * for the current scope.  It may only be used when the ServiceScope is in an "unfinished"
   * state, i.e. before finish() has been called.
   * @param serviceKey - the key that will later be used to consume the service
   * @param service - the service instance that is being registered
   * @returns - the same object that was passed as the "service" parameter
   */
  public provide < T >(serviceKey: ServiceKey<T>, service: T): T;
  /**
   * Constructs a new ServiceScope that is a child of the current scope.  For any keys
   * that are not explicitly provided by the child scope, the parent hierarchy will be
   * consulted.
   * @returns - the newly created root ServiceScope
   */
  public startNewChild(): ServiceScope;
  /**
   * Create a new root-level ServiceScope.  Only root-level scopes have the ability to autocreate
   * default implementations of ServiceKeys.
   * @returns - the newly created root ServiceScope
   */
  public static startNewRoot(): ServiceScope;
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
 * This class can be used to determine if the current user has a requested set of permissions.
 * Specifies the built-in permissions available in SharePoint Foundation
 * Derived from OneDriveWeb/ODBNext/odsp-shared
 * https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx
 * @public
 */
declare class SPPermission {
  constructor(value: IODataBasePermission);
  /**
   * Add, change, or delete HTML pages or web part Pages, and edit the Web site using a SharePoint
   * Foundation–compatible editor.
   */
  public static addAndCustomizePages: SPPermission;
  /**
   * Add or remove personal web parts on a web part Page.
   */
  public static addDelPrivateWebParts: SPPermission;
  /**
   * Add items to lists, add documents to document libraries, and add Web discussion comments.
   */
  public static addListItems: SPPermission;
  /**
   * Apply a style sheet (.css file) to the Web site.
   */
  public static applyStyleSheets: SPPermission;
  /**
   * Apply a theme or borders to the entire Web site.
   */
  public static applyThemeAndBorder: SPPermission;
  /**
   * Approve a minor version of a list item or document.
   */
  public static approveItems: SPPermission;
  /**
   * Enumerate files and folders in a Web site using Microsoft Office SharePoint Designer 2007 and WebDAV interfaces.
   */
  public static browseDirectories: SPPermission;
  /**
   * View information about users of the Web site.
   */
  public static browserUserInfo: SPPermission;
  /**
   * Discard or check in a document which is checked out to another user.
   */
  public static cancelCheckout: SPPermission;
  /**
   * Create e-mail alerts.
   */
  public static createAlerts: SPPermission;
  /**
   * Create a group of users that can be used anywhere within the site collection.
   */
  public static createGroups: SPPermission;
  /**
   * Create a Web site using Self-Service Site Creation.
   */
  public static createSSCSite: SPPermission;
  /**
   * Delete items from a list, documents from a document library, and Web discussion comments in documents.
   */
  public static deleteListItems: SPPermission;
  /**
   * Delete past versions of a list item or document.
   */
  public static deleteVersions: SPPermission;
  /**
   * Edit items in lists, edit documents in document libraries, edit Web discussion comments in documents,
   * and customize web part Pages in document libraries.
   */
  public static editListItems: SPPermission;
  /**
   * Allows a user to change his or her user information, such as adding a picture.
   */
  public static editMyUserInfo: SPPermission;
  /**
   * Has no permissions on the Web site. Not available through the user interface.
   */
  public static emptyMask: SPPermission;
  /**
   * Enumerate permissions on the Web site, list, folder, document, or list item.
   */
  public static enumeratePermissions: SPPermission;
  /**
   * Has all permissions on the Web site. Not available through the user interface.
   */
  public static fullMask: SPPermission;
  /**
   * Function for determining if a given permission mask has all of the requested permissions.
   * @param requestedPerms - Any number of SPPermission objects to be compared against the original
   */
  public hasAllPermissions(...requestedPerms: SPPermission[]): boolean;
  /**
   * Function for determining if a given permission mask has any of the requested permissions.
   * @param requestedPerms - Any number of SPPermission objects to be compared against the original
   */
  public hasAnyPermissions(...requestedPerms: SPPermission[]): boolean;
  /**
   * Function for checking if a given permission mask has the requested permission.
   * @param requestedPerm - The SPPermission object to be compared against the original
   */
  public hasPermission(requestedPerm: SPPermission): boolean;
  /**
   * View the layouts page?
   */
  public static layoutsPage: SPPermission;
  /**
   * Manage alerts for all users of the Web site.
   */
  public static manageAlerts: SPPermission;
  /**
   * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
   */
  public static manageLists: SPPermission;
  /**
   * Create and change permission levels on the Web site and assign permissions to users and groups.
   */
  public static managePermissions: SPPermission;
  /**
   * Create, change, and delete personal views of lists.
   */
  public static managePersonalViews: SPPermission;
  /**
   * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
   */
  public static manageSubwebs: SPPermission;
  /**
   * Grant the ability to perform all administration tasks for the Web site as well as manage content.
   *  Activate, deactivate,or edit properties of Web site scoped Features through the object model or
   * through the user interface (UI). When grantedon the root Web site of a site collection, activate,
   * deactivate, or edit properties of site collection scoped Features through the object model. To
   * browse to the Site Collection Features page and activate or deactivate site collection scoped
   * Features through the UI, you must be a site collection administrator.
   */
  public static manageWeb: SPPermission;
  /**
   * Allow users to open a Web site, list, or folder to access items inside that container.
   */
  public static open: SPPermission;
  /**
   * View the source of documents with server-side file handlers.
   */
  public static openItems: SPPermission;
  /**
   * Update web parts to display personalized information.
   */
  public static updatePersonalWebParts: SPPermission;
  /**
   * Use features that launch client applications; otherwise, users must work on documents locally and upload changes.
   */
  public static useClientIntegration: SPPermission;
  /**
   * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer 2007 interfaces to access the Web site.
   */
  public static useRemoteAPIs: SPPermission;
  /**
   * Returns the value of this SPPermission object
   */
  public value: IODataBasePermission;
  /**
   * View forms, views, and application pages, and enumerate lists.
   */
  public static viewFormPages: SPPermission;
  /**
   * View items in lists, documents in document libraries, and view Web discussion comments.
   */
  public static viewListItems: SPPermission;
  /**
   * View pages in a Web site.
   */
  public static viewPages: SPPermission;
  /**
   * View reports on Web site usage.
   */
  public static viewUsageData: SPPermission;
  /**
   * View past versions of a list item or document.
   */
  public static viewVersions: SPPermission;
}

/**
 * This class is primarily used with the PageContext class.  It provides contextual
 * information for the SharePoint site collection ("site") that hosts the page.
 *
 * @public
 */
declare class SPSite {

  /**
   * The GUID that identifies the SPSite on the server.
   */
  public id: string;
}

/**
 * This class is primarily used with the PageContext class.  It provides contextual information
 * for the SharePoint user that is accessing the page.
 *
 * @public
 */
declare class SPUser {

  /**
   * The display name for the current user.
   * Example: "John Doe"
   */
  public displayName: string;
  /**
   * The login name for specified user.
   * Example: "example@microsoft.com"
   */
  public loginName: string;
}

/**
 * This class is primarily used with the PageContext class.  It provides contextual
 * information for the SharePoint site ("web") that hosts the page.
 * @public
 */
declare class SPWeb {

  /**
   * Returns the absolute URL for this SPWeb.
   * Example: "https://example.com/sites/PubSite/SubWeb"
   */
  public absoluteUrl: string;
  /**
   * The GUID that identifies the SPWeb on the server or undefined if the Guid string
   * value is invalid.
   */
  public id: Guid;
  /**
   * Returns the server-relative URL for this SPWeb.
   * Example: "/sites/PubSite/SubWeb"
   */
  public serverRelativeUrl: string;
  /**
   * Returns the title of the SharePoint site.
   */
  public title: string;
}

/**
 * Class for storing and retrieving query parameters.
 * The URL can be server-relative and it will parse empty/null strings.
 * The query parameters must start with ? to indicate the first query parameter and
 * use & for all subsequent parameters. The class also supports fragments.
 * Edge cases behavior:
 * Empty value (www.example.com/?test=) stores key and empty value
 * No equals in queryParam (www.example.com/?test) stores key and undefined value
 * Empty queryParam (www.example.com/?&debug=on) stores undefined key and value
 * Query param with only equals (www.example.com/?=&debug=on stores empty string key and value
 * @public
 */
declare class UrlQueryParameterCollection {
  constructor(url: string);
  /**
   * Returns the value of the first matching query parameter or undefined if the key doesn't exist.
   * Examples: this._queryParameterList = [
   * {key: TEST, value: done},
   * {key: DEBUG, value: false},
   * {key: TEST, value: notdone}]
   *   getValue('TEST') ---> 'done'
   *   getValue('debug')  ---> 'false'
   *   getValue('lost')  ---> undefined
   * @param param the case insensitive key for the desired query parameter value.
   */
  public getValue(param: string): string;
  /**
   * Returns the values of all of the matching query parameters or undefined if the key doesn't exist.
   * Examples: this._queryParameterList = [
   * {key: TEST, value: done},
   * {key: DEBUG, value: false},
   * {key: TEST, value: notdone}]
   *   getValues('TEST') ---> ['done', 'notdone']
   *   getValues('debug')  ---> ['false']
   *   getValues('lost')  ---> undefined
   * @param param the case insensitive key for the desired query parameter value.
   */
  public getValues(param: string): string[];
}

/**
 * Common helper functions for working with URLs.  These utilities are intended to be simple,
 * small, and extremely common.  Do not add advanced parsing logic to this file.
 * @public
 */
declare class UrlUtilities {
  /**
   * Converts a variable to an OData string literal and escapes apostrophes.
   * OData specification:
   * https://tools.oasis-open.org/version-control/
   *   browse/wsvn/odata/trunk/spec/ABNF/odata-abnf-construction-rules.txt
   * SQUOTE-in-string = SQUOTE SQUOTE ; two consecutive single quotes represent one within a string literal
   * Examples:
   *   convertToODataStringLiteral("example's list") ---> "'example''s list'"
   *   convertToODataStringLiteral("example list") ---> "'example list'"
   *   convertToODataStringLiteral("'example list'") ---> "'''example list'''"
   */
  public static convertToODataStringLiteral(value: string): string;
  /**
   * Removes any slash characters from the end of the URL.
   * This function assumes that the input is already a valid absolute or server-relative URL.
   * Examples:
   *   removeEndSlash('http://example.com/') ---> 'http://example.com'
   *   removeEndSlash('/example')            ---> '/example'
   *   removeEndSlash('/')                   ---> ''
   * @param url the URL to be normalized
   */
  public static removeEndSlash(url: string): string;
}

/**
 * This class implements provides a standard way to validate properties and function parameters.
 * Unlike an assertion, the Validate checks are always performed and will always throw an error,
 * even in a production release.  As such, be careful not to overuse these checks in a way
 * that might impact performance.
 * @public
 */
declare class Validate {
  /**
   * Throws an exception if the specified string is null, undefined, or an empty string.
   * @param value - the value to check
   * @param variableName - the program variable name, which will be mentioned in the error message
   */
  public static isNonemptyString(value: string, variableName: string): void;
  /**
   * Throws an exception if the specified value is null or undefined.
   * @param value - the value to check
   * @param variableName - the program variable name, which will be mentioned in the error message
   */
  public static isNotNullOrUndefined(value: any, variableName: string): void;
  /**
   * Throws an exception if the specified value is not true.
   * @param value - the value to check
   * @param variableName - the program variable name, which will be mentioned in the error message
   */
  public static isTrue(value: boolean, variableName: string): void;
}
