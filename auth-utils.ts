// // Utility functions for authentication

// // Function to dispatch auth state change event
// export function notifyAuthStateChanged() {
//     window.dispatchEvent(new Event("auth-state-changed"))
//   }
  
//   // Function to get current user
//   export function getCurrentUser() {
//     const storedUser = localStorage.getItem("user") || sessionStorage.getItem("user")
//     if (!storedUser) return null
  
//     try {
//       return JSON.parse(storedUser)
//     } catch (error) {
//       console.error("Failed to parse user:", error)
//       return null
//     }
//   }
  
//   // Function to check if user is authenticated
//   export function isAuthenticated() {
//     const token = localStorage.getItem("token") || sessionStorage.getItem("token")
//     return !!token
//   }
  
//   // Function to store user data
//   export function storeUserData(user: any, token: string, remember = true) {
//     const storage = remember ? localStorage : sessionStorage
//     storage.setItem("user", JSON.stringify(user))
//     storage.setItem("token", token)
//     notifyAuthStateChanged()
//   }
  
//   // Function to clear user data
//   export function clearUserData() {
//     localStorage.removeItem("user")
//     sessionStorage.removeItem("user")
//     localStorage.removeItem("token")
//     sessionStorage.removeItem("token")
//     notifyAuthStateChanged()
//   }
  