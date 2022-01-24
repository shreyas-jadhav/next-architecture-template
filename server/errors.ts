export class ApplicationError extends Error {
	public code: number = 400;
	constructor(code: number, message: string, ...args: any) {
		super(...args);
		this.code = code;
		this.message = message;
	}
}

export class BadRequestError extends ApplicationError {
	constructor(message: string = 'Bad Request', ...args: any) {
		super(400, message, ...args);
	}
}

export class UnauthorizedError extends ApplicationError {
	constructor(message: string = 'Not Authorized') {
		super(401, message);
	}
}

export class ForbiddenError extends ApplicationError {
	constructor(message: string = 'Forbidden', ...args: any) {
		super(403, message, args);
	}
}

export class NotFoundError extends ApplicationError {
	constructor(message: string = 'Not Found') {
		super(404, message, arguments);
	}
}

export class MissingFieldError extends BadRequestError {
	constructor(fieldName: string, ...args: any) {
		super(`${fieldName} is invalid or missing!`, args);
	}
}

export class InternalError extends ApplicationError {
	constructor(message: string = 'Internal Server Error') {
		super(500, message, arguments);
	}
}

export class ConflictError extends ApplicationError {
	constructor(message: string = 'Conflicts were found while processing your request!', ...args: any) {
		super(409, message, ...args);
	}
}

export class MethodNotAllowed extends ApplicationError {
	constructor(message: string = 'Method not allowed', ...args: any) {
		super(405, message, ...args);
	}
}

export class ValidationError extends ApplicationError {
	constructor(message: string = 'Validation Failed') {
		super(400, message);
	}
}
