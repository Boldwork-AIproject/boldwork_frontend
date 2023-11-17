import React, { useEffect } from 'react';
import { KakaoLabelIcon } from "../styledComponents";

const KakaoLogin = () => {
    useEffect(() => {
        // Check if Kakao SDK is already initialized
        if (!window.Kakao.isInitialized()) {
          
          window.Kakao.init("00a62807a55c9eabbd04fa0bec3b6df9");
        }
    
        // Clean up Kakao SDK on component unmount
        return () => {
          // Add any necessary cleanup for Kakao SDK
        };
      }, []);
  
    const kakaoLogin = () => {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, profile_image, account_email, name, gender, birthday, phone_number',
        success: (authObj) => {
          console.log(authObj);
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: (res) => {
              const kakao_account = res.kakao_account;
              console.log(kakao_account);
            },
          });
        },
      });
    };
  
    return (
      <div>
        <KakaoLabelIcon onClick={kakaoLogin} />
      </div>
    );
  };
  
  export default KakaoLogin;