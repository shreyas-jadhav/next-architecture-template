import toast from 'react-hot-toast';
// client side errors only
export class ClientSideError {
    constructor(message: string) {
        toast.error(message);
    }
}