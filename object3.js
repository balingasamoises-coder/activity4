// 3 object literals
const defaults = { theme: "light", fontSize: 14, language: "en" };
const userPrefs = { theme: "dark", fontSize: 16 };
const session = { userId: 42, loggedIn: true };

// Spread operator on objects: merge them (later properties override earlier ones)
const settings = { ...defaults, ...userPrefs, ...session };
// { theme: "dark", fontSize: 16, language: "en", userId: 42, loggedIn: true }

// 2 destructured: pull values out of the merged object
const { theme, fontSize } = settings;

console.log(theme);    // "dark"
console.log(fontSize); // 16