import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const NaverCallback = ({ onLogin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Naver SDK script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js';
    script.async = true;
    script.charset = 'utf-8';
    document.head.appendChild(script);

    script.onload = () => {
      initNaverLogin();
    };

    // Clean up Naver SDK on component unmount
    return () => {
      // Add any necessary cleanup for Naver SDK
    };
  }, []);

  const initNaverLogin = () => {
    const naver_id_login = new window.naver_id_login("qNP2Rl_PYC5Q4sNK2hHC", "http://localhost:3000/naver-login");

    // Access token alert
    //alert(naver_id_login.oauthParams.access_token);
    // User info alert
    //alert(`Email: ${naver_id_login.getProfileData('email')}`);
    //alert(`Nickname: ${naver_id_login.getProfileData('nickname')}`);
    //alert(`Age: ${naver_id_login.getProfileData('age')}`);

    const accessToken = naver_id_login.oauthParams.access_token;
    Cookies.set('access_token', accessToken, { expires: 7 }); // Expires in 7 days
    // sets logged in state in App.js
    onLogin();
    navigate("/");

    //naver_id_login.get_naver_userprofile(naverSignInCallback);
  };

  /*
    // Naver user profile retrieval
    function naverSignInCallback() {
        alert(window.naver_id_login.getProfileData('email'));
        alert(window.naver_id_login.getProfileData('nickname'));
        alert(window.naver_id_login.getProfileData('age'));
    };*/


  return (
    <div>
      {/* This component doesn't render anything visible */}
    </div>
  );
};

export default NaverCallback;
