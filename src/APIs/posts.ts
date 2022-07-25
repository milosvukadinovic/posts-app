export const getPosts = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-access-token', localStorage.getItem("jwt") || '');
    return fetch(process.env.REACT_APP_BACKEND_URL + 'posts', {headers: myHeaders})
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Error');
        })
        .then(res => Object.values(res))
        .catch(e => false)
}

export const getPostsByAuthor = async (userId: number) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-access-token', localStorage.getItem("jwt") || '');
    return fetch(process.env.REACT_APP_BACKEND_URL + `users/${userId}/posts`, {headers: myHeaders})
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Error');
        })
        .then(res => Object.values(res))
        .catch(e => false)
}

export const getPost = async (id: number) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-access-token', localStorage.getItem("jwt") || '');
    return fetch(process.env.REACT_APP_BACKEND_URL + 'posts/' + id, {headers: myHeaders})
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Error');
        })
        .then(res => res)
        .catch(e => false)
}