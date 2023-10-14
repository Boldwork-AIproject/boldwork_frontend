import styled from 'styled-components';

/* BUTTONS */
export const ButtonBlockPrimary = styled.button`
    background-color: var(--primary-100);
    color: white;
    border: none;
    font-size: var(--body-3);
    font-weight: bold;
    height: 56px;
    width: 508px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;

    &:hover {
        background-color: var(--primary-100-dark);
    }
`
export const ButtonLargePrimary = styled.button`
    background-color: var(--primary-100);
    color: white;
    border: none;
    font-size: var(--body-3);
    font-weight: bold;
    height: 56px;
    width: 190px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;

    &:hover {
        background-color: var(--primary-100-dark);
    }
`
export const ButtonLargeOutline = styled.button`
    background-color: var(--primary-5);
    color: var(--primary-100);
    border: 1px solid var(--primary-100);
    font-size: var(--body-3);
    font-weight: bold;
    height: 56px;
    width: 190px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;

    &:hover {
        background-color: var(--primary-100);
        color: white;
        border: none;
    }
`
export const ButtonLargeDisabled = styled.button`
    background-color: var(--neutral-5);
    color: var(--neutral-30);
    border: none;
    font-size: var(--body-3);
    font-weight: bold;
    height: 56px;
    width: 190px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
`
export const ButtonLargeSecondary = styled.button`
    background-color: var(--neutral-5);
    color: var(--neutral-60);
    border: none;
    font-size: var(--body-3);
    font-weight: bold;
    height: 56px;
    width: 190px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
`
export const ButtonMediumPrimary = styled.button`
    background-color: var(--primary-100);
    color: white;
    border: none;
    font-size: var(--body-3);
    font-weight: medium;
    height: 40px;
    width: 120px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;

    &:hover {
        background-color: var(--primary-100-dark);
    }
`
export const ButtonMediumOutline = styled.button`
    background-color: var(--primary-5);
    color: var(--primary-100);
    border: 1px solid var(--primary-100);
    font-size: var(--body-3);
    font-weight: medium;
    height: 40px;
    width: 120px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;

    &:hover {
        background-color: var(--primary-100);
        color: white;
        border: none;
    }
`
export const ButtonMediumDisabled = styled.button`
    background-color: var(--neutral-5);
    color: var(--neutral-30);
    border: none;
    font-size: var(--body-3);
    font-weight: medium;
    height: 40px;
    width: 120px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
`
export const ButtonMediumSecondary = styled.button`
    background-color: var(--neutral-5);
    color: var(--neutral-60);
    border: none;
    font-size: var(--body-3);
    font-weight: medium;
    height: 40px;
    width: 120px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
`
export const ButtonSmallPrimary = styled.button`
    background-color: var(--primary-100);
    color: white;
    border: none;
    font-size: var(--body-5);
    font-weight: regular;
    height: 38px;
    width: 72px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;

    &:hover {
        background-color: var(--primary-100-dark);
    }
`
export const ButtonSmallOutline = styled.button`
    background-color: var(--primary-5);
    color: var(--primary-100);
    border: 1px solid var(--primary-100);
    font-size: var(--body-5);
    font-weight: regular;
    height: 38px;
    width: 72px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;

    &:hover {
        background-color: var(--primary-100);
        color: white;
        border: none;
    }
`
export const ButtonSmallDisabled = styled.button`
    background-color: var(--neutral-5);
    color: var(--neutral-30);
    border: none;
    font-size: var(--body-5);
    font-weight: regular;
    height: 38px;
    width: 72px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
`
export const ButtonSmallSecondary = styled.button`
    background-color: var(--neutral-5);
    color: var(--neutral-60);
    border: none;
    font-size: var(--body-5);
    font-weight: regular;
    height: 38px;
    width: 72px;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
`

/* INPUT */
export const Input = styled.input `
    /*width: 40%;*/
    width: 508px;
    height: 48px;
    font-size: var(--body-3);
    border-radius: 8px;
    padding-left: 16px;
    color: var(--neutral-40);
    border: 1px solid var(--neutral-20);
    background-color: white;
    margin-bottom: 16px;
    
    &:focus {
        color: var(--neutral-80);
        border: 1px solid var(--primary-100);
        background-color: white;
        outline: none;
    }

    &.error {
        color: var(--neutral-80);
        border: 1px solid var(--warning);
        background-color: white;
        outline: none;
        &::placeholder {
            color: var(--warning);
        }
    }

    &.autofill {
        color: var(--neutral-80);
        border: 1px solid var(--primary-100);
        background-color: var(--primary-10);
        outline: none;
        &::placeholder {
            color: var(--neutral-60);
        }
    }
`

/* ICONS */
export const AvatarIcon = styled.div`
    background-image: var(--avatar);
    background-size: cover;
    width: 32px; height: 32px;
`

export const LinkIcon = styled.div`
    background-image: var(--link);
    background-size: cover;
    width: 20px; height: 20px;
`

export const KakaoIcon = styled.div`
    background-image: var(--kakao);
    background-size: cover;
    width: 30px; height: 30px;
`

export const NaverIcon = styled.div`
    background-image: var(--naver);
    background-size: cover;
    width: 30px; height: 30px;
`
export const KakaoLabelIcon = styled.div`
    background-image: var(--kakao);
    background-size: cover;
    width: 40px; height: 40px;
`

export const NaverLabelIcon = styled.div`
    background-image: var(--naver);
    background-size: cover;
    width: 40px; height: 40px;
`