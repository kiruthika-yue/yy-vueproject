import Cookies from 'js-cookie';

// 存储用户信息
export function setUserCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}

// 获取用户信息
export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}

// 删除用户信息
export function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');

  return true;
}
