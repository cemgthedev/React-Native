type Response = {
    token: string,
    user: {
        name: string,
        email: string
    }
}
export function singIn():Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'meutokeneseguro',
                user: {
                    name: 'Eduardo',
                    email: 'eduardo@gmail.com'
                }
            });
        }, 2000);
    });
}