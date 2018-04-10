/**
 * user store object separated from the main store.js
 * file for organizational purpose.
 */
let userStore = {
  getters: {
    currentUser (state) {
      return state.user
    }
  }
}

export default userStore
