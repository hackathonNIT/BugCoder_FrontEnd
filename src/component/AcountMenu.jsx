import React, { useState } from 'react';

const AcountMenu = () => {
  const [aspect,setAspect]=useState(false);
  const toggle =()=>{
    setAspect(prevState=>!prevState)
  }

  return (
    <li class="solid1"><a class=" downlist" href="index.html" onClick={toggle}>{aspect? "ログイン":"ログアウト"}</a></li>
  );
};

export default AcountMenu;