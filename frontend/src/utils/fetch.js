export function fetcher(url) {
  try {
    return fetch(URL, {
      credentials: 'include',
      headers: {
        'Authorization': 'Bearer TOKEN'
      }
    }).then((r) => {
      console.log(r)

      return r.json()
    });
  } catch (error) {}
}

export function fetcherWithUserId(url, userId) {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization':  `Bearer ${token}`,
    },
    body: JSON.stringify({ userId }),
  }).then((r) => {
    console.log(r)
    return r.json();
  });
}
