# Setting Firebase in project
1. Install firebase 

```bash
npm install firebase
```

2. Create a config file and paste the code from your firebase initializeApp function.

3. Install the firebase tools with command given below

```bash
npm install -g firebase-tools
```


4. Choose the authentication method you want to use for your app from the build tab
5. import the getAuth function from firebase/auth.
```javascript
import { getAuth } from 'firebase/auth';
```
6. define a variable and call the getAuth function and provide app vairable as an argument which contain the configuration object of firebase
7. export that variable so it can be used anywhere in the application
8. Import the authentication variable into the component where you want to use it
9. Next import the authentication method which you want to use from "firebase/auth"

```javascript
import { createUserWithEmailAndPassword } from "firebase/auth";
```
10. call the createUserWithEmailAndPassword function and pass the email, password and auth variable as arguments
