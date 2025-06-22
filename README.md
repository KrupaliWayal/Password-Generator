
# 🔐 Password Generator App (React Native)

A sleek and powerful password generator app built with **React Native**. This app lets you create secure and customizable passwords using options like uppercase, lowercase, numbers, and symbols. It features real-time validation, form handling with Formik & Yup, and a beautiful UI using `react-native-bouncy-checkbox`.

---
## ✨Features

- ✅ Set custom password length
- 🔡 Toggle inclusion of:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Symbols
- 🚀 Instantly generate passwords
- 🔁 Reset settings with one tap
- 📋 Long-press to copy generated password
- 🔒 Secure logic with random character generation

---
## 📱Tech Stack

- **React Native CLI**
- **TypeScript**
- **Formik** for form state management
- **Yup** for schema-based validation
- **react-native-bouncy-checkbox** for customizable toggles
- **Android Emulator / Physical Device** for testing

---
## 🛠️Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
1. **Clone the repository**
   
   ```bash
   git clone https://github.com/yourusername/password-generator-app.git
   cd password-generator-app
   ```

2. **Install dependencies**

```bash
npm install
```
3. **Run on Android**

```bash
npx react-native run-android
```

4. **(Optional) Run on iOS (Mac only)**

```bash
npx react-native run-ios
```

---
## 📂Project Structure
```bash
.
├── App.tsx                 
├── assets/                 
├── node_modules/
├── package.json
└── README.md

```

---
## 🧪Form Validation (Formik + Yup)

-The app uses Formik to manage form inputs and submission.

-Yup is used for validating the password length:
-Minimum: 4 characters
-Maximum: 12 characters

---
## ⚙️Customization

You can tweak the styles or password rules by editing the following in App.tsx:

 -Password characters (lowerCaseChars, upperCaseChars, numberChars, symbolsChars)

 -Color themes in StyleSheet.create({...})

 ---
## 💡Why this app?

Creating strong passwords is essential for digital security. This app provides:

-A user-friendly interface

-Instant password generation

-Copy-paste feature

-Perfect for both developers and non-tech users

---
## 🧑‍💻 Author

Krupali Wayal

Passionate React Native developer building intuitive and secure mobile applications.
Feel free to connect!

---
## 🌟Show Support

If you like this project, don’t forget to:

⭐ Star the repo

🐛 Report issues

🍴 Fork to contribute

---