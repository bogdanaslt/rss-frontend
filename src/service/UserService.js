import instance from './http'

const UserService = {
    register({email, password}) {
        return instance.post('/register', {
            'email': email,
            'password': password
        });
    },
    login({email, password}) {
        return instance.post('/login', {
            'email': email,
            'password': password
        });
    },
    checkEmail(email) {
        return instance.post('/unique-email', {
            'email': email
        });
    },
    user() {
        return instance.get('/user');
    },
    logout() {
        return instance.get('/logout')
    }
}

export default UserService;