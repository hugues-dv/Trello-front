export function getUsername(token: any) {
  try {
    // Obtenez la partie payload du token
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(window.atob(base64));

    return payload.sub;
  } catch (error) {
    console.error('Erreur lors du décodage du token:', error);
    return null;
  }
}
