export function login(text) {
  return {
    type: 'login',
    text: text
  }
}

export function logout(text) {
  return {
    type: 'logout',
    text: text
  }
}
