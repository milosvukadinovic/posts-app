export const getComments = async (postId: number) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('x-access-token', localStorage.getItem("jwt") || '');
    return fetch(process.env.REACT_APP_BACKEND_URL + `posts/${postId}/comments`, {headers: myHeaders})
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Error');
        })
        .then(res => Object.values(res))
        .catch(e => false)
}