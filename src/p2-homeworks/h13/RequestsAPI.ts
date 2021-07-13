import axios from 'axios'

type PostType={
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}

export const requestsAPI = {
    post (checked: boolean) {
        const promise = axios.post<PostType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked});
        return promise;
    },
}