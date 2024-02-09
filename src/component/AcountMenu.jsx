import React, { useState } from 'react';
import {AuthProvider, useAuth} from './AuthProvider';


const AcountMenu = () => {
  const{authenticated,login,logout,id}=useAuth();
  return (
    <>
      {
        authenticated?<li class="solid1"><a class=" downlist" onClick={logout}>ログアウト</a></li>:<li class="solid1"><a class=" downlist" onClick={login}>ログイン</a></li>
      }
    </>
  );
};

export default AcountMenu;