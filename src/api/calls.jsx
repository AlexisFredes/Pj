import { baseUrl } from "./config";

export const calls = (route, method='GET', body=undefined, content_type="application/json") => {
  const url = `${baseUrl}${route}`;
  const auth = {'Content-Type': content_type};

  return fetch(url, {
    method,
    headers: auth,
    body: body ? JSON.stringify(body) : undefined
  }).then(res => {
    if (!res.ok) {
      if (res.status === 401) { //Unauthorized
        if (window.alert('No autorizado')) window.location.replace('/');
      } else {
        return res.json().then(json => {
          throw new Error(JSON.stringify(json));
        });
      }
    } else {
      if (res.status !== 200) return null
      return res.json()
    }
  })
}
