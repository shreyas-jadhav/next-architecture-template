const useAuthUser = () => {
    return {
        user: {},
        loading: false,
        error: false,
        signOut: () => true
    }
}
export default useAuthUser;