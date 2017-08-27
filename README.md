# Npm Install in SubDirectories
Use this tool to Npm Install in a Sub Directory. Use it like: `nisd [subdirs...]` (Example: `nisd client server scripts`)

## Example
```json
{
  "name": "Root",
  "version": "0.0.4",
  "description": "mainFolder"
  "scripts": {
    "postinstall": "nisd client server"
  }
}
```

## Compatibility
Works on Linux. Should also work on Windows and Mac. If not, create an issue and I will fix it. :-)
