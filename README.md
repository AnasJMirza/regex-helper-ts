``# regex-helper-ts

`regex-helper-ts` is a reusable, lightweight library that provides common, validated regex patterns along with utilities for matching, validation, and extraction. This library makes it easy for developers to handle common tasks like validating emails, phone numbers, URLs, and more—without writing complex regular expressions from scratch.

---

## **Table of Contents**
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
 - [Validation Examples](#validation-examples)
 - [Extraction Examples](#extraction-examples)
 - [Accessing Pre-built Patterns](#accessing-pre-built-patterns)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Issues](#issues)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## **Features**
- **Pre-built regex patterns** for common use cases such as emails, phone numbers, URLs, and passwords.
- **Validation utilities** for quick data validation.
- **Extraction tools** to extract emails, URLs, and more from text.
- Lightweight, fast, and **written in TypeScript** for type safety.
- **Easy to use API** with modular exports.

---

## **Installation**

Install the package via npm:

```bash
npm install regex-helper-ts
``` 

Or with yarn

```bash
yarn add regex-helper-ts
``` 


## **Usage**

### **1. Validation Examples**

Validate an email or a strong password with minimal code:

```
import { isValidEmail, isStrongPassword } from "regex-helper-ts";

const email = "user@example.com";
console.log(isValidEmail(email)); // Output: true

const password = "P@ssw0rd123";
console.log(isStrongPassword(password)); // Output: true

```

### **2. Extraction Examples**

Extract all emails or URLs from a block of text

```

import { extractEmails, extractUrls } from "regex-helper-ts";

const text = "Reach us at contact@example.com and visit https://example.com.";
console.log(extractEmails(text)); // Output: ['contact@example.com']
console.log(extractUrls(text)); // Output: ['https://example.com']

```

### **3. Accessing Pre-built Patterns**

Use the built-in regex patterns directly:

```
import { patterns } from "regex-helper-ts";

console.log(patterns.email); // Output: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
console.log(patterns.phone); // Output: /^\+?[1-9]\d{1,14}$/
```


## **API Reference**

### **Pre-built Patterns**

-   **`patterns.email`**: Validates email addresses.
-   **`patterns.phone`**: Validates international phone numbers.
-   **`patterns.url`**: Matches web URLs.
-   **`patterns.password`**: Ensures passwords contain at least 1 uppercase letter, 1 number, and 8+ characters.

### **Validation Functions**

-   **`isValidEmail(email: string): boolean`**  
    Returns `true` if the input is a valid email.
    
-   **`isValidPhone(phone: string): boolean`**  
    Returns `true` if the input matches the international phone number pattern.
    
-   **`isStrongPassword(password: string): boolean`**  
    Checks if the password meets security criteria (uppercase, number, and 8+ chars).
    

### **Extraction Functions**

-   **`extractEmails(text: string): string[]`**  
    Extracts all emails from a block of text.
    
-   **`extractUrls(text: string): string[]`**  
    Extracts all URLs from a block of text.

## **License**

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software.

----------

## **Issues**

If you find any bugs or have feature requests, please open an issue on the [GitHub Issues](https://github.com/anasjmirza/regex-helper-ts/issues) page.

----------

## **Author**

[Anas](https://github.com/Canasjmirza)  
Email: ajmhimself@gmail.com

----------

## **Acknowledgments**

-   Inspired by common regex needs in web development.
-   Thanks to the open-source community for continuous support.
