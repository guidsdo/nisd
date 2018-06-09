# Npm Install in SubDirectories
Npm Install in SubDirectories. Yes, it's that simple. Use it like: `nisd [options] <directories...>` (Example: `nisd --async client server scripts`)

[Click here for the general version!](https://www.npmjs.com/package/eisd)

[Click here for the yarn install version!](https://www.npmjs.com/package/yisd)

## Usage
```
  Usage: nisd [options] <directories...>

  Options:
    -a, --async        Execute npm async across all folders, output will be a mess
    -e, --allowErrors  Allow errors (at default we stop when there is one). NOTE: always true when in async mode!
    -h, --help         output usage information
```

## Examples
Cli:
`nisd --async client server testSetup/mockServer`

Package.json:
```json
{
  "name": "Root",
  "version": "0.0.1",
  "description": "mainFolder",
  "scripts": {
    "postinstall": "nisd client server"
  }
}
```

## Compatibility
All npm errors are ignored because they are structured really randomly. If you want a build to fail on install errors, use the yarn version instead.
Works on Linux, Mac and Windows. If not, create an issue and I will fix it. :-)
