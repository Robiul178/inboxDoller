import useAllUsers from "./useAllUsers";
import useAuth from "./useAuth";


const useCoin = () => {
    const { user } = useAuth()
    const [serverUsers] = useAllUsers();
    const userEmail = user?.email;
    const currentUserWIthCoin = serverUsers?.find(u => u.user.email === userEmail);
    const coin = currentUserWIthCoin?.coin;
    return [coin];

};

export default useCoin;