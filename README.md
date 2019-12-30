# Setup
    
## Tools

   - Download and install Android Studio and Java SDK (version 8).
   - Setup the JAVA_HOME environment variable in your .bashrc and run source ~/.bashrc

## Setting up adb

   - Install adb in your machine (sudo apt-get install adb)
   - Enable usb debugging in your android device and plug in usb.
   - Run adb devices and it should show your attached device.
   - Run adb tcpip 5555 and unplug the device(pc and device should be connected over same network).
   - Navigate to settings > about phone > status > IP address.
   - Run adb connect IP_ADDR:5555 and accept the permissions from your device.

## Running on device

   - Navigate to android folder and create a file local.properties that would contain the path to your android SDK. (ex - sdk.dir=/home/sagar/Android/Sdk)
   - Install all the packages ```yarn install```
   - For the first run react-native run-android and it should build apk in your device.
   - For next subsequent changes enable hot reloading.

## Snapshot

<img src='./assets/snapshot/snapshot1.jpg'>
