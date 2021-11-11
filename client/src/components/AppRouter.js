import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import { Context } from '../index';
import { authRoutes, publicRoutes, notFound } from "../routes";
// import { REGISTRATION_ROUTE } from "../utils/consts";

const AppRouter = () => {
    // const isAuth = false
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {/* <Route render={() => <Navigate to={REGISTRATION_ROUTE} />} /> */}
            <Route path={notFound.path} element={notFound.Component}/>
            
        </Routes>
    )
}

export default AppRouter