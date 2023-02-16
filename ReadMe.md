# Setup:
1. Run `npm install`
2. Run `firebase login`
This will log you to fireabse-tools assuming you have installed using `npm install -g firebase-tools`
3. Run `firebase init emulators` to configure your firebase emulators and give default values for the emulators ports and for UI emulators give 3000 as value.
4. Run `npm run emulator` as it is already configured for this project in package.json.
5. Run `npm start` to run your project it will compile typescript code to javascript inside dist folder and run the javascript file.