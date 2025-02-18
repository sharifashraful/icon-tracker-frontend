# ICON Tracker

[![loopchain](https://img.shields.io/badge/ICON-API-blue?logoColor=white&logo=icon&labelColor=31B8BB)](https://shields.io) [![GitHub Release](https://img.shields.io/github/release/geometry-labs/icon-tracker-frontend.svg?style=flat)]() ![](https://github.com/geometry-labs/icon-tracker-frontend/workflows/push-main/badge.svg?branch=main) [![codecov](https://codecov.io/gh/geometry-labs/icon-tracker-frontend/branch/main/graph/badge.svg)](https://codecov.io/gh/geometry-labs/icon-tracker-frontend) ![Uptime](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fgeometry-labs%2Ficon-status-page%2Fmaster%2Fapi%2Fdev-tracker-frontend-service%2Fuptime.json) ![](https://img.shields.io/github/license/geometry-labs/icon-tracker-frontend)

### Development Setup

##### Install Modules

You can install modules with npm:

```sh
# Install dependencies
npm install
```

##### Run development mode:

```sh
npm start
```

### Build

##### Run build:

```sh
# build files to './build'
npm run build
```

### Set API URL

1. First, You can set Tracker and Wallet API URL in script.
```sh
# set Tracker and Wallet API URL separately
TRACKER_API_URL=[CUSTOM_URL] WALLET_API_URL=[CUSTOM_URL] npm run build
```

2. Second, You can set Tracker and Wallet API URL in config.json.
if you set both script and config.json, url is script will be applied.
```json
{
    "TRACKER_API_URL":"CUSTOM_URL",
    "WALLET_API_URL":"CUSTOM_URL"
}
```

3. Third, if the custom configuaration is not detected, each url is set to default value
> TRACKER_API_URL: https://tracker.icon.foundation (production) / http://trackerlocaldev.icon.foundation (development)
> WALLET_API_URL: http://trackerlocaldev.icon.foundation
