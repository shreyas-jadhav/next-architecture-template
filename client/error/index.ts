export class ApplicationError extends Error {
    constructor(title: string = 'An error occurred!', message: string = 'Sorry, Something went wrong!') {
        super(message);
    }
}

export class AuthenticationFailed extends ApplicationError {
    constructor() {
        super(`Failed to Sign In!`, `Sorry, for some reason we aren't able to Authenticate. Please try again.`)
    }
}