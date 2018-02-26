# Npm Install in SubDirectories
Npm Install in SubDirectories. Yes, it's that simple. Use it like: `nisd [subdirs...]` (Example: `nisd client server scripts`)

[Click here for the yarn version!](https://github.com/guidojo/yisd)

## Example package.json
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
Works on Linux and Mac, should also work on Windows (will test it soon). If not, create an issue and I will fix it. :-)
