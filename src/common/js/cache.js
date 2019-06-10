const USER_KEY = '__userInfo__';

const USER_PERMISSIONS = '__userPermissions__';

const AUTH_TOKEN = '__token__';

export function saveUserInfo(userInfo) {
	sessionStorage.setItem(USER_KEY, JSON.stringify(userInfo));
}

export function getUserInfo() {
	const userInfo = sessionStorage.getItem(USER_KEY);
	return userInfo !== 'undefined' ? JSON.parse(userInfo) : '';
}

export function removeUserInfo() {
	sessionStorage.removeItem(USER_KEY);
}

export function saveToken(token) {
	sessionStorage.setItem(AUTH_TOKEN, token);
}

export function getToken() {
	return sessionStorage.getItem(AUTH_TOKEN);
}

export function removeToken() {
	sessionStorage.removeItem(AUTH_TOKEN);
}

export function saveUserPermissions(permissions) {
	sessionStorage.setItem(USER_PERMISSIONS, JSON.stringify(permissions));
}

export function getUserPermissions() {
	const userPermissions = sessionStorage.getItem(USER_PERMISSIONS);
	return userPermissions !== 'undefined' ? JSON.parse(userPermissions) : '';
}

export function removeUserPermissions() {
	sessionStorage.removeItem(USER_PERMISSIONS);
}
