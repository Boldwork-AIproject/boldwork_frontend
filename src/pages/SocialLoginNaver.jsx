import React, { useEffect } from 'react';
import { NaverLabelIcon } from "../styledComponents";

const NaverLogin = () => {
    useEffect(() => {
      // Check if Naver SDK is already loaded
      if (typeof window.naver !== 'undefined') {
        initNaverLogin();
      } else {
        // Load Naver SDK script dynamically
        const script = document.createElement('script');
        script.src = 'https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js';
        script.async = true;
        script.charset = 'utf-8';
        document.head.appendChild(script);
  
        script.onload = () => {
          initNaverLogin();
        };
      }
  
      // Clean up Naver SDK on component unmount
      return () => {
        // Add any necessary cleanup for Naver SDK
      };
    }, []);
  
    const initNaverLogin = () => {
      const naver_id_login = new window.naver_id_login("qNP2Rl_PYC5Q4sNK2hHC", "http://localhost:3000/naver-login");
      const state = naver_id_login.getUniqState();
      naver_id_login.setButton("white", 2, 40);
      naver_id_login.setDomain(".service.com");
      naver_id_login.setState(state);
      naver_id_login.setPopup();
      naver_id_login.init_naver_id_login();
  
      // Attach custom click event to your NaverLabelIcon
      const naverLabelIcon = document.getElementById('naverLabelIcon');
      if (naverLabelIcon) {
        naverLabelIcon.addEventListener('click', () => {
          // Simulate click on the hidden Naver login button
          const hiddenNaverLoginButton = document.getElementById('naver_id_login');
          if (hiddenNaverLoginButton) {
            hiddenNaverLoginButton.click();
          }
        });
      }
    };
  
    return (
      <div>
        {/* Hidden Naver login button */}
        {/*<div id="naver_id_login" style={{ display: 'none' }}></div>*/}
        <div id="naver_id_login"></div>
  
        {/* Your custom NaverLabelIcon */}
        <NaverLabelIcon id="naverLabelIcon" />
      </div>
    );
  };
  
  export default NaverLogin;