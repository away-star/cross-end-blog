import { Navigate, Outlet } from 'umi'

export default (props) => {
    const {isLogin} = false;
    if (isLogin) {
        return <Outlet />;
    } else{
        return <Navigate to="/login" />;
    }
}