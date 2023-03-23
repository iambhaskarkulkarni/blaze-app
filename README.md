# blaze-app

## Installation

Use the below command to install the node packages

```bash
npm install
```

## Starting application

use the below command to start the application in expo

```bash
npx expo start
```

## Step's to generate the apk

Step 1 -  Install the eas cli

```bash
npm install -g eas-cli
```

Step 2 - To configure your project for android build run below command

```bash
eas build:configure
```

Step 3 - Update the easj.son preview with below tag to generate the apk.

```bash
 "android": {
        "buildType":"apk"
      }
```

Step 4 - Login into expo account by using below command

```bash
eas login
```

Step 5 -  Use below command to generate the apk and download it from expo login.

```bash
eas build -p android --profile preview
```
.



