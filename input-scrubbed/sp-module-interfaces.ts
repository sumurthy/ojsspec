///<reference path="../typings/tsd.d.ts" />

interface IBundleReference {
  /**
   * If present, this is the name of a field on the module returned from the associated bundle that maps to
   * this library. Otherwise, the module returned from the bundle maps to this library.
   */
  entryName?: string;
  /**
   * The ID of the module.
   */
  id: string;
}



/**
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 * 
 * @file Client side component loader configuration.This interface describes how a client side component is to be loaded and initailized by a SharePoint client
 * framework. It contains all data for loading an entrypoint script and its dependency scripts.
 * 
 * @beta
 */
interface IClientSideComponentLoaderConfig {
  /**
   * Definition: This is the ID of one of the entries in the "scriptResources" dictionary. The loader will download and
   *  evaluate the script resource referenced in this field, resolve all dependencies against the keys in the
   *  "scriptResources", and return the exported object to the loader's calling function. The entry referenced in the
   *  "scriptResources" dictionary must be of the "internal" or the "localized" type.
   * Required: yes
   * Localized: no
   * Supported values: An entry in the "scriptResources" dictionary that defines the base exported module of the
   *  component.
   * Example: "myApplication.bundle"
   */
  entryModuleId: string;
  /**
   * Definition: The module referenced by the "entryModuleId" field may export an object with several fields. This value
   *  optionally references the name of a field on the object exported by the module referenced by the "entryModuleId"
   *  field. When this field has a value, the value of the referenced field on the object exported by the module
   *  referenced by the "entryModuleId" field is returned when this manifest is loaded instead of the base exported
   *  object. For example, if entryModuleId refers to a module with with a top-level export of
   *  "{ foo: 'bar', baz: 123 }" and:
   *    - if this field is unset, the value returned by the modue loader is "{ foo: 'bar', baz: 123 }"
   *    - if this field is set to "foo", the value returned by the modue loader is "bar"
   *    - if this field is set to "bar", the value returned by the modue loader is undefined (as "bar" is not a key in
   *        the top-level export).
   * 
   * Usage: To reference a field in the top-level export.
   * Required: no
   * Example: mySpWebpart
   */
  exportedModuleName?: string;
  /**
   * Definition: This is an array of fully-qualified paths to be prepended to each of the script resource paths with the
   *  "internal" or "localized" type. If one fails to load, the loader will attempt to load from the next until there
   *  are no base paths remaning. All "internal" and "localized" script resources that do not have fully-qualified URLs
   *  as their "path" field values must be hosted under each of the paths listed in this property. For example, if an
   *  internal module's "path" field value is "master_2015-04-20/my-application.bundle_1928f8a0.js" and this field's
   *  value is [ "https://contoso.akamaihd.net/files/", "https://contoso.msecnd.net/files/" ], the loader will first
   *  attempt to load this script resource from the URL
   *  "https://contoso.akamaihd.net/files/master_2015-04-20/my-application.bundle_1928f8a0.js". If loading from
   *  that URL fails, the loader will then attempt to load this script resource from
   *  "https://contoso.msecnd.net/files/master_2015-04-20/my-application.bundle_1928f8a0.js". If that URL fails to load,
   *  the component will fail to load and an error will be returned. It is important to note that the support for
   *  multiple base URLs is purely for failover support. This means that all files must be present on all hosts
   *  listed in this field.
   * Usage: Base URLs for script resources with the "internal" or "localized" type.
   * Required: yes
   * Localized: no
   * Supported values: Any URL that contains all internal scripts referenced in the "scriptResources" dictionary.
   * Example: [ "https://contoso.akamaihd.net/files/", "https://contoso.msecnd.net/files/" ]
   */
  internalModuleBaseUrls: string[];
  /**
   * Definition: This is a dictionary of named script resources. "internal" and "localized" modules may reference each
   *  other and "framework" modules are expected to be provided by the framework runtime. The resource named in the
   *  "entryModuleId" must contain the component's exported object.
   * Required: yes
   * Localized: no
   * Supported values: A dictionary of named script resources.
   * Example:
   *  {
   *    "myApplication.bundle": {
   *      "type": "internal",
   *      "path": "master_2015-04-20/my-application.bundle_1928f8a0.js"
   *    },
   *    "@microsoft/sp-client-base": {
   *      "type": "framework",
   *      "version": "latest"
   *    },
   *    "@microsoft/sp-client-preview": {
   *      "type": "framework",
   *      "version": "latest"
   *    },
   *    "jQuery": {
   *      "type": "framework",
   *      "version": "2.2.4",
   *      "path": "https://code.jquery.com/jquery-2.2.4.min.js"
   *    },
   *    "myApplication_strings": {
   *      "type": "localized",
   *      "defaultPath": "master_2015-04-20/my-application_strings_default_af378e0d.js",
   *      "paths": {
   *        "en-us": "master_2015-04-20/my-application_strings_en-us_d38ff012.js",
   *        "fr-fr": "master_2015-04-20/my-application_strings_fr-fr_138af7e4.js"
   *      }
   *    }
   *  }
   */
  scriptResources: {
    [ name: string ]: IModuleConfig
  }
}

/**
 * A library is defined by this manifest. Libraries currently do not have any additional properties.
 * 
 * @public
 */
interface IClientSideLibraryManifest extends IClientSideComponentManifest {
  /**
   * Definition: Type of client side component. Components with the "Application" type are defined by the
   *  "IClientSideApplicationManifest" interface. Components with the "WebPart" type are defined by the
   *  "IClientSideWebPartManifest" interface. Components with the "Library" type are defined by the
   *  "IClientSideLibraryManifest" interface.
   * Usage: To help bundling, loading, enumeration, and initialization of components based on their contents.
   * Required: yes
   * Localized: no
   * Supported values: "Application", "WebPart", "Library"
   * Example: "Application"
   */
  componentType: 'Application' | 'WebPart' | 'Library';
  /**
   * Definition: A universally unique component id. Each client side component is required to have this id. Once an
   *  id has been used for a component, it cannot be changed. A change in this value is treated same as the creation of
   *  a new component. Two components are never expected to have the same id.
   * Usage: Uniquely identify a client side component.
   * Required: yes
   * Localized: no
   * Supported values: any GUID
   * Example: "dbef608d-3ad5-4f8f-b139-d916f2f0a294"
   */
  id: string;
  /**
   * Definition: This portion of the configuration describes how the component is to be loaded and initialized by a
   *  client. It contains an enumeration of scripts that the component requires along with a single entrypoint script.
   * Usage: Loading a component.
   * Required: yes
   * 
   * @see IClientSideComponentLoaderConfig.ts for more information and examples.
   */
  loaderConfig: IClientSideComponentLoaderConfig;
  /**
   * Definition: Version of the component manifest schema. The value of this field is controlled by Microsoft. The
   *  purpose of this field is to help manage upgrades of the component manifest schema. A component developer needs to
   *  only confirm that they are using the correct value per the manifest schema. Please read the "manifest upgrade
   *  rules" for more details on when the schema could change. Note, manifest schema version upgrade will be considered
   *  a big API change event and will be advertised broadly.
   * Usage: To help support multiple manifest schema versions.
   * Required: yes
   * Localized: no
   * Supported values: +ve integer.
   * Example: 1
   */
  manifestVersion: number;
  /**
   * Definition: Client side component version. The value of this field is expected to be controlled by the developer
   *  of the client side component. The purpose of this field is to help client side component developers upgrade their
   *  client side components in a managed way. This helps the consumers of the client side component make decisions
   *  about when and how to upgrade the client side component. As the developer evolves the code for their client side
   *  component, they can decide to bump the MAJOR, MINOR or PATCH version of the component. All incompatible API
   *  changes should result in a MAJOR version bump. Backwards compatible functionality changes should result in a
   *  MINOR version bump, and backwards compatible bug fixes should result in a PATCH version bump. Please see
   *  http://semver.org for more details on how to manage the version of your components.
   * Usage: Versioning and evolving a client side component safely in a controlled way.
   * Required: yes
   * Localized: no
   * Supported values: string representing a semantic version (http://semver.org) i.e. MAJOR.MINOR.PATCH
   * Example: "1.0.0"
   */
  version: string;
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
  group?: ILocalizedString;
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
  iconImageUrl?: string;
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
  officeFabricIconFontName?: string;
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
 * Manifest that is relevant to a Web Part instance.
 * 
 * @public
 */
interface IClientSideWebPartManifestInstance<TProperties> extendsIClientSideComponentManifest,IClientSideWebPartManifestSharedProperties,IClientSideWebPartManifestEntry<TProperties> {
  /**
   * Definition: Type of client side component. Components with the "Application" type are defined by the
   *  "IClientSideApplicationManifest" interface. Components with the "WebPart" type are defined by the
   *  "IClientSideWebPartManifest" interface. Components with the "Library" type are defined by the
   *  "IClientSideLibraryManifest" interface.
   * Usage: To help bundling, loading, enumeration, and initialization of components based on their contents.
   * Required: yes
   * Localized: no
   * Supported values: "Application", "WebPart", "Library"
   * Example: "Application"
   */
  componentType: 'Application' | 'WebPart' | 'Library';
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
  group?: ILocalizedString;
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
  iconImageUrl?: string;
  /**
   * Definition: A universally unique component id. Each client side component is required to have this id. Once an
   *  id has been used for a component, it cannot be changed. A change in this value is treated same as the creation of
   *  a new component. Two components are never expected to have the same id.
   * Usage: Uniquely identify a client side component.
   * Required: yes
   * Localized: no
   * Supported values: any GUID
   * Example: "dbef608d-3ad5-4f8f-b139-d916f2f0a294"
   */
  id: string;
  /**
   * Definition: List of names of Web Part properties that are image sources and need to be link fixed up
   *  and potentially preloaded for performance reasons.
   * Required: no. If not provided, all values are sanitized
   * Type: string array
   * Supported values: any property names
   * Values: the strings in the array are expected to be JSONPath for the object properties.
   *         (http://goessner.net/articles/JsonPath/)
   * Example: ["image[0].source"]
   */
  imageLinkPropertyNames?: string[];
  /**
   * Definition: List of names of Web Part properties that are links and need to be link fixed up.
   *  Link fixup is a SharePoint feature to help make sure SharePoint internal links in the content
   *  are correct. Pages and content can be moved around within SharePoint site hierarchy.
   * Required: no. If not provided, all values are sanitized
   * Type: string array
   * Values: the strings in the array are expected to be JSONPath for the object properties.
   *         (http://goessner.net/articles/JsonPath/)
   * Supported values: any property names
   * Example: ["destination.url"]
   */
  linkPropertyNames?: string[];
  /**
   * Definition: This portion of the configuration describes how the component is to be loaded and initialized by a
   *  client. It contains an enumeration of scripts that the component requires along with a single entrypoint script.
   * Usage: Loading a component.
   * Required: yes
   * 
   * @see IClientSideComponentLoaderConfig.ts for more information and examples.
   */
  loaderConfig: IClientSideComponentLoaderConfig;
  /**
   * Definition: Version of the component manifest schema. The value of this field is controlled by Microsoft. The
   *  purpose of this field is to help manage upgrades of the component manifest schema. A component developer needs to
   *  only confirm that they are using the correct value per the manifest schema. Please read the "manifest upgrade
   *  rules" for more details on when the schema could change. Note, manifest schema version upgrade will be considered
   *  a big API change event and will be advertised broadly.
   * Usage: To help support multiple manifest schema versions.
   * Required: yes
   * Localized: no
   * Supported values: +ve integer.
   * Example: 1
   */
  manifestVersion: number;
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
  officeFabricIconFontName?: string;
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
   * Definition: List of names of Web Part properties that need to be indexed for search.
   * Usage: extract the specified value properties on the server and provide them to the search indexer.
   * Required: no. If not provided, no values are indexed.
   * Type: string array
   * Values: the strings in the array are expected to be JSONPath for the object properties.
   *         (http://goessner.net/articles/JsonPath/)
   * Supported values: any property names
   * Example: ["text"]
   */
  searchablePropertyNames?: string[];
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
  /**
   * Definition: Client side component version. The value of this field is expected to be controlled by the developer
   *  of the client side component. The purpose of this field is to help client side component developers upgrade their
   *  client side components in a managed way. This helps the consumers of the client side component make decisions
   *  about when and how to upgrade the client side component. As the developer evolves the code for their client side
   *  component, they can decide to bump the MAJOR, MINOR or PATCH version of the component. All incompatible API
   *  changes should result in a MAJOR version bump. Backwards compatible functionality changes should result in a
   *  MINOR version bump, and backwards compatible bug fixes should result in a PATCH version bump. Please see
   *  http://semver.org for more details on how to manage the version of your components.
   * Usage: Versioning and evolving a client side component safely in a controlled way.
   * Required: yes
   * Localized: no
   * Supported values: string representing a semantic version (http://semver.org) i.e. MAJOR.MINOR.PATCH
   * Example: "1.0.0"
   */
  version: string;
}

/**
 * This interface specifies the set of common properties that are shared between all instances of the Web Part.
 * 
 * @todo: refactor this to a structure based model (SPPPLAT VSO#218544).
 * 
 * @beta
 */
interface IClientSideWebPartManifestSharedProperties {
  /**
   * Definition: List of names of Web Part properties that are image sources and need to be link fixed up
   *  and potentially preloaded for performance reasons.
   * Required: no. If not provided, all values are sanitized
   * Type: string array
   * Supported values: any property names
   * Values: the strings in the array are expected to be JSONPath for the object properties.
   *         (http://goessner.net/articles/JsonPath/)
   * Example: ["image[0].source"]
   */
  imageLinkPropertyNames?: string[];
  /**
   * Definition: List of names of Web Part properties that are links and need to be link fixed up.
   *  Link fixup is a SharePoint feature to help make sure SharePoint internal links in the content
   *  are correct. Pages and content can be moved around within SharePoint site hierarchy.
   * Required: no. If not provided, all values are sanitized
   * Type: string array
   * Values: the strings in the array are expected to be JSONPath for the object properties.
   *         (http://goessner.net/articles/JsonPath/)
   * Supported values: any property names
   * Example: ["destination.url"]
   */
  linkPropertyNames?: string[];
  /**
   * Definition: List of names of Web Part properties that need to be indexed for search.
   * Usage: extract the specified value properties on the server and provide them to the search indexer.
   * Required: no. If not provided, no values are indexed.
   * Type: string array
   * Values: the strings in the array are expected to be JSONPath for the object properties.
   *         (http://goessner.net/articles/JsonPath/)
   * Supported values: any property names
   * Example: ["text"]
   */
  searchablePropertyNames?: string[];
}

/**
 * This is the interface for a script module with the "framework" type. Modules of this type will be provided by the
 *  framework runtime. The key in the "scriptResources" dictionary must be the name of a standard framework library.
 * 
 * @beta
 */
interface IFrameworkModuleConfig extends IModuleConfig {
  /**
   * Definition: A path to the framework-supplied module in case the framework fails to load the requested version. This
   *  must be either a fully-qualified URL, or a path under the paths specified in the "internalModuleBaseUrls" field.
   *  If this field is not specified and the version is not available in the framework runtime, the closest matching
   *  version of the module will be provided instead.
   * Required: no
   * Localized: no
   * Supported values: The path to the module either as a fully-qualified URL or as a path under the
   *  paths providedin the "internalModuleBaseUrls" field.
   * Example: "https://code.jquery.com/jquery-2.2.4.min.js"
   */
  failoverPath?: string | IPath;
  /**
   * Definition: If set to "true", this module should not be preloaded when loading the component. The most common case
   *  for setting this property to "true" is when a module is defined in a manifest, but is not required for the
   *  module referenced in "entryModuleId" to load. Modules may be defined that are loaded asynchronously, and these
   *  modules do not need to be preloaded. This field implicitly defaults to "false".
   * Usage: Instructs the module loader to not preload this module.
   * Required: no
   * Example: true
   */
  shouldNotPreload?: boolean;
  /**
   * Definition: The type of the script block. "framework" modules are expected to be provided by the framework runtime,
   *  "internal" and "localized" modules must be available on the paths provided in the "internalModuleBaseUrls" field.
   *  Modules with the "internal" type use the "IInternalModuleConfig" interface. Modules with the "framework" type use
   *  the "IFrameworkModuleConfig" interface. Modules with the "localized" type use the "ILocalizedInternalModuleConfig"
   *  interface.
   * Required: yes
   * Localized: no
   * Supported values: "internal", "framework", "localized"
   * Example: "localized"
   */
  type: 'internal' | 'framework' | 'localized';
  /**
   * Definition: The version of the framework-supplied module to be loaded. For framework runtime modules such as
   *  "@microsoft/sp-client-base," it is recommended the version of the framework module the component was developed
   *  against be specified.
   * Required: yes
   * Localized: no
   * Supported values: string representing a semantic version (http://semver.org), or "latest".
   * Example: "2.2.4"
   */
  version: string;
}

/**
 * This is the interface for a script module with the "internal" type. Modules of this type must be provided by the
 *  component developer.
 * 
 * @beta
 */
interface IInternalModuleConfig extends IModuleConfig {
  /**
   * Definition: For non-AMD/module-pattern scripts that have dependencies (for example, jQuery plugins), the module
   *  loader will ensure that those dependencies are already loaded. Entries in the array specified in this field must
   *  refer to other non-AMD modules in this component. This field is not required to have a value for
   *  non-AMD modules. If any values are specified that do not refer to other modules in the same component manifest
   *  that this module is specified, the module loader will throw an exception and the component will fail to load.
   * Required: no
   * Supported values: Names of other non-AMD-pattern modules in this loader configuration, as specified by the key
   *  IClientSideComponentLoaderConfig.scriptResources[]
   * Example: ["jquery"]
   */
  globalDependencies?: string[];
  /**
   * Definition: In order to load scripts that don't follow the AMD/module-pattern where "define" or "require" is
   *  called and dependencies are explicitly listed and exports are explicitly returned, the module loader needs to
   *  know which global variable must be examined. If this propery is specified, this module is considered non-AMD and
   *  the module loader will not expect "define" or "require" to be called. Instead, it will wait for the script to
   *  finish loading and examine the global variable specified in this field.
   * Required: no
   * Localized: no
   * Supported values: Variable names that are expected to be populated after this module is loaded. For example,
   *  if this module is describing jQuery, this value should probably be "$". If an empty string is specified,
   *  the module loader will throw an exception and the component will fail to load.
   * Example: "$"
   */
  globalName?: string;
  /**
   * Definition: A path to this module's javascript resource either as a fully-qualified URL or as a path under the
   *  paths provided in the "internalModuleBaseUrls" field. For example, if this field's value is
   *  "master_2015-04-20/my-application.bundle_1928f8a0.js" and the "internalModuleBaseUrls" field's value is
   *  [ "https://contoso.akamaihd.net/files/", "https://contoso.msecnd.net/files/" ], the loader will first attempt to
   *  load this script resource from the URL
   *  "https://contoso.akamaihd.net/files/master_2015-04-20/my-application.bundle_1928f8a0.js". If loading from that URL
   *  fails, the loader will then attempt to load this script resource from
   *  "https://contoso.msecnd.net/files/master_2015-04-20/my-application.bundle_1928f8a0.js". If that URL fails to load,
   *  the component will fail to load and an error will be returned.
   * Required: yes
   * Localized: no
   * Supported values: The path to the module either as a fully-qualified URL or as a path under the
   *  paths providedin the "internalModuleBaseUrls" field.
   * Example: "master_2015-04-20/my-application.bundle_1928f8a0.js"
   */
  path: string | IPath;
  /**
   * Definition: If set to "true", this module should not be preloaded when loading the component. The most common case
   *  for setting this property to "true" is when a module is defined in a manifest, but is not required for the
   *  module referenced in "entryModuleId" to load. Modules may be defined that are loaded asynchronously, and these
   *  modules do not need to be preloaded. This field implicitly defaults to "false".
   * Usage: Instructs the module loader to not preload this module.
   * Required: no
   * Example: true
   */
  shouldNotPreload?: boolean;
  /**
   * Definition: The type of the script block. "framework" modules are expected to be provided by the framework runtime,
   *  "internal" and "localized" modules must be available on the paths provided in the "internalModuleBaseUrls" field.
   *  Modules with the "internal" type use the "IInternalModuleConfig" interface. Modules with the "framework" type use
   *  the "IFrameworkModuleConfig" interface. Modules with the "localized" type use the "ILocalizedInternalModuleConfig"
   *  interface.
   * Required: yes
   * Localized: no
   * Supported values: "internal", "framework", "localized"
   * Example: "localized"
   */
  type: 'internal' | 'framework' | 'localized';
}

/**
 * This is the interface for a script module with the "localized" type. Modules of this type must be provided by the
 *  component developer. These script resources are similar to those of the "internal" type, but they may be present
 *  at a number of different paths, to be selected by the user's locale. Paths in this module type are loaded exactly
 *  the same way as "internal" modules are.
 * 
 * @beta
 */
interface ILocalizedInternalModuleConfig extends IModuleConfig {
  /**
   * Definition: A path to this module's default locale javascript resource either as a fully-qualified URL or as a
   *  path under the paths provided in the "internalModuleBaseUrls" field. If the user's locale does not resolve to one
   *  of the paths specified in the "paths" field, the path in this field is used. Paths in this module type are
   *  treated exactly the same way paths in modules of the "internal" type are treated.
   * Required: yes
   * Localized: no
   * Supported values: The path to the default locale version of the module either as a fully-qualified URL or as a path
   *  under the paths providedin the "internalModuleBaseUrls" field.
   * Example: "master_2015-04-20/my-application_strings_default_af378e0d.js"
   */
  defaultPath: string | IPath;
  /**
   * Definition: This is a dictionary of locale keys (in the "ll-cc" format) to paths to this module's localed
   *  javascript resource either as a fully-qualified URL or as a path under the paths provided in the
   *  "internalModuleBaseUrls" field. The loader will attempt to resolve the user's locale to one of the paths provided
   *  by this field, and will load the script resource under that path. If the user's locale does not resolve to one
   *  of the paths specified in this field, the path in "defaultPath" field is used. For example, if the user's locale
   *  is "en-gb", and this field's value contains the keys [ "en-us", "en-gb", "fr-fr" ], the path specified by the
   *  "en-gb" key will be used. If the user's locale is "en-gb", and this field's value contains the keys [ "en-us",
   *  "fr-fr" ], the path specified by the "en-us" key will be used. If the user's locale is "en-gb", and this field's
   *  value contains the keys [ "es-es", "fr-fr" ], the path specified by the "defaultPath" field will be used.
   *  Paths in this module type are treated exactly the same way paths in modules of the "internal" type are treated.
   * Required: no
   * Localized: no
   * Supported values: A dictionary of locale-to-path mappings.
   * Example:
   *  {
   *    "en-us": "master_2015-04-20/my-application_strings_en-us_d38ff012.js",
   *    "fr-fr": "master_2015-04-20/my-application_strings_fr-fr_138af7e4.js"
   *  }
   */
  paths?: {
    [ locale: string ]: string | IPath}
  /**
   * Definition: If set to "true", this module should not be preloaded when loading the component. The most common case
   *  for setting this property to "true" is when a module is defined in a manifest, but is not required for the
   *  module referenced in "entryModuleId" to load. Modules may be defined that are loaded asynchronously, and these
   *  modules do not need to be preloaded. This field implicitly defaults to "false".
   * Usage: Instructs the module loader to not preload this module.
   * Required: no
   * Example: true
   */
  shouldNotPreload?: boolean;
  /**
   * Definition: The type of the script block. "framework" modules are expected to be provided by the framework runtime,
   *  "internal" and "localized" modules must be available on the paths provided in the "internalModuleBaseUrls" field.
   *  Modules with the "internal" type use the "IInternalModuleConfig" interface. Modules with the "framework" type use
   *  the "IFrameworkModuleConfig" interface. Modules with the "localized" type use the "ILocalizedInternalModuleConfig"
   *  interface.
   * Required: yes
   * Localized: no
   * Supported values: "internal", "framework", "localized"
   * Example: "localized"
   */
  type: 'internal' | 'framework' | 'localized';
}

/**
 * Definition: A set of localized strings.
 * Supported values: a dictionary of locale keys to strings. Should always have a 'default' key.
 * Example: "My Application"
 *          {
 *            "default": "My Application"
 *            "en-us": "My Application",
 *            "fr-fr": "Ma demande",
 *            "zh": "我的應用程式"
 *          }
 */
interface ILocalizedString {
  default: string;
}

/**
 * This is the base interface for a script module's definition.
 * 
 * @beta
 */
interface IModuleConfig {
  /**
   * Definition: If set to "true", this module should not be preloaded when loading the component. The most common case
   *  for setting this property to "true" is when a module is defined in a manifest, but is not required for the
   *  module referenced in "entryModuleId" to load. Modules may be defined that are loaded asynchronously, and these
   *  modules do not need to be preloaded. This field implicitly defaults to "false".
   * Usage: Instructs the module loader to not preload this module.
   * Required: no
   * Example: true
   */
  shouldNotPreload?: boolean;
  /**
   * Definition: The type of the script block. "framework" modules are expected to be provided by the framework runtime,
   *  "internal" and "localized" modules must be available on the paths provided in the "internalModuleBaseUrls" field.
   *  Modules with the "internal" type use the "IInternalModuleConfig" interface. Modules with the "framework" type use
   *  the "IFrameworkModuleConfig" interface. Modules with the "localized" type use the "ILocalizedInternalModuleConfig"
   *  interface.
   * Required: yes
   * Localized: no
   * Supported values: "internal", "framework", "localized"
   * Example: "localized"
   */
  type: 'internal' | 'framework' | 'localized';
}

/**
 * This is the base interface for a set of debug and non-debug/minimized paths. The paths in this object are
 *  loaded in exactly the same way as any other internal path.
 * 
 * @beta
 */
interface IPath {
  /**
   * Definition: A path to this module's debug javascript resource either as a fully-qualified URL or as a path under
   *  the paths provided in the "internalModuleBaseUrls" field. The script referenced by this field is only loaded if
   *  it is present and debug scripts are explicitly requested.
   * Required: no
   * Supported values: The path to the debug script either as a fully-qualified URL or as a path under the
   *  paths providedin the "internalModuleBaseUrls" field.
   * Example: "master_2015-04-20/my-application.bundle_18182c39.debug.js"
   */
  debug?: string;
  /**
   * Definition: A path to this module's javascript resource either as a fully-qualified URL or as a path under the
   *  paths provided in the "internalModuleBaseUrls" field. The script referenced by this field is loaded by default
   *  unless a debug version of the script is provided and explicitly requested.
   * Required: yes
   * Supported values: The path to the default/non-debug script either as a fully-qualified URL or as a path under the
   *  paths providedin the "internalModuleBaseUrls" field.
   * Example: "master_2015-04-20/my-application.bundle_1928f8a0.js"
   */
  default: string;
}



interface IStandardLibraryModule {
  /**
   * References to modules that are swappable for this module (for example, modules that contain a superset of
   * this module).
   */
  aliases: IBundleReference[];
  /**
   * Reference (id and entryName pair) to the bundle
   */
  bundleReference: IBundleReference;
  /**
   * The IDs of modules this module depends on.
   */
  dependentIds: string[];
  /**
   * The ID of the bundle to preload.
   */
  preloadId: string;
}

