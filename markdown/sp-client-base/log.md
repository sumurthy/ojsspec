# Log class





The Log class provides methods for logging messages at different levels (verbose, 
info, warning, error) and with context information. Context information helps identify 
which component generated the messages and makes the messages useful and filterable. 







## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`error(source,error,scope)`](#errorsourceerrorscope)     | `public, static` | `void` | Logs an error |
|[`info(source,message,scope)`](#infosourcemessagescope)     | `public, static` | `void` | Logs an informational message |
|[`verbose(source,message,scope)`](#verbosesourcemessagescope)     | `public, static` | `void` | Logs a verbose message |
|[`warn(source,message,scope)`](#warnsourcemessagescope)     | `public, static` | `void` | Logs a warning |




