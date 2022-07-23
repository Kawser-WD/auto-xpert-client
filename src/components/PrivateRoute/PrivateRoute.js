import { LoaderIcon } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return LoaderIcon }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;