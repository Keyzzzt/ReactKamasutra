import React from "react";
import Loader from "../Components/common/Loader";


const WithSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Loader/>}>
            <Component {...props} />
        </React.Suspense>
    }
}

export default WithSuspense