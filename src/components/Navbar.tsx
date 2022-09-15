import React, { useCallback, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
// import { motion } from 'framer-motion'
// import styled from 'styled-components';

type NavType = {
    navbarOpen: boolean;
}
type NavProps = {
    navbarOpen: boolean;
}
const Navbar = () => {
    const [y, setY] = useState(window.scrollY);
    const [scrolled, setScrolled] = useState(false)
    const [navbarOpen, setNavbarOpen] = useState(false)
    const appBody = document.getElementsByTagName('body')

    const handleScroll = useCallback(
        (e: any) => {
            const window = e.currentTarget;

            if (y > window.scrollY) {
                // console.log("scrolling up");
                setScrolled(true)
            } else if (y < window.scrollY) {
                // console.log("scrolling down");
                setScrolled(false)
            }
            setY(window.scrollY);

        }, [y]
    );

    const handleNavState = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeNav = () => {
        setNavbarOpen(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleScroll(e));

        return () => { // return a cleanup function to unregister our function since its gonna run multiple times
            window.removeEventListener("scroll", (e) => handleScroll(e));
        };
    }, [handleScroll]);
    useEffect(() => {
        const body = appBody[0]
        if (navbarOpen === true) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = ''
        }

        return () => {
            body.style.overflow = ''
        }
    }, [appBody, navbarOpen])
    return (
        <header className={window.scrollY === 0 || scrolled ? 'active header fixed top-0 left-[50%] translate-y-0 translate-x-[-50%] w-full max-w-[1300px] mx-auto z-[1000] transition duration-[1000ms] ease-in-out' : 'inactive header fixed top-0 left-[50%] translate-y-[-100px] translate-x-[-50%] w-full max-w-[1300px] mx-auto z-[1000] transition duration-[1000ms] ease-in-out'}
        >
            <nav className='w-full flex items-center justify-between bg-mainBg py-[17px] px-[20px]'>
                <Link onClick={closeNav} to='/' className="font-inter text-white font-[800] text-[20px] leading-[36px] z-50">
                    {/* <code><span className='text-mainBlue'>chukwu</span>.dev</code> */}
                    <span className='logo-clamp'>
                        <svg width="134" height="18" viewBox="0 0 134 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5193 5.95508C10.6208 5.625 10.7774 5.37956 10.989 5.21875C11.209 5.04948 11.4883 4.96484 11.8269 4.96484C12.2839 4.96484 12.6098 5.10449 12.8044 5.38379C12.9991 5.65462 13.0964 6.12858 13.0964 6.80566V8.8877C13.0964 9.40397 12.9906 9.78483 12.779 10.0303C12.5674 10.2757 12.2416 10.3984 11.8015 10.3984C11.4883 10.3984 11.226 10.3265 11.0144 10.1826C10.8028 10.0387 10.5785 9.76367 10.3415 9.35742C10.003 8.7819 9.55864 8.35872 9.00851 8.08789C8.45838 7.80859 7.78553 7.66895 6.98996 7.66895C5.99973 7.66895 5.18723 7.99479 4.55246 8.64648C3.92616 9.28971 3.61301 10.1149 3.61301 11.1221C3.61301 12.18 3.93885 13.0306 4.59055 13.6738C5.24224 14.3171 6.11821 14.6387 7.21848 14.6387C8.21717 14.6387 9.20741 14.3636 10.1892 13.8135C11.1794 13.2549 11.7846 12.9756 12.0046 12.9756C12.3178 12.9756 12.5759 13.0983 12.779 13.3438C12.9906 13.5807 13.0964 13.8812 13.0964 14.2451C13.0964 15.0407 12.4913 15.7516 11.281 16.3779C10.0792 17.0042 8.64881 17.3174 6.98996 17.3174C4.94178 17.3174 3.27446 16.7419 1.98801 15.5908C0.710012 14.4398 0.0710144 12.9587 0.0710144 11.1475C0.0710144 9.37858 0.70578 7.90592 1.97531 6.72949C3.24484 5.55306 4.84445 4.96484 6.77414 4.96484C7.42583 4.96484 8.0606 5.04525 8.67844 5.20605C9.29627 5.36686 9.90988 5.61654 10.5193 5.95508ZM17.98 6.55176C18.2763 6.03548 18.6952 5.64193 19.2369 5.37109C19.7785 5.10026 20.426 4.96484 21.1793 4.96484C22.5165 4.96484 23.5448 5.35417 24.2642 6.13281C24.9921 6.91146 25.356 8.02865 25.356 9.48438V14.2197H25.5718C26.0204 14.2197 26.3589 14.3382 26.5875 14.5752C26.8244 14.8037 26.9429 15.1423 26.9429 15.5908C26.9429 16.0902 26.8202 16.4499 26.5748 16.6699C26.3378 16.89 25.9315 17 25.356 17H22.2076C21.6405 17 21.2343 16.89 20.9888 16.6699C20.7518 16.4499 20.6334 16.0902 20.6334 15.5908C20.6334 15.1338 20.7476 14.791 20.9761 14.5625C21.2046 14.334 21.5474 14.2197 22.0045 14.2197H22.2076V10.5254C22.2076 9.44206 22.0722 8.69303 21.8013 8.27832C21.539 7.85514 21.0862 7.64355 20.4429 7.64355C19.7658 7.64355 19.1861 7.91862 18.7037 8.46875C18.2212 9.01042 17.98 9.69596 17.98 10.5254V14.2197H18.1832C18.6402 14.2197 18.983 14.3382 19.2115 14.5752C19.4485 14.8037 19.567 15.1423 19.567 15.5908C19.567 16.0902 19.4442 16.4499 19.1988 16.6699C18.9533 16.89 18.5471 17 17.98 17H14.8316C14.2476 17 13.8371 16.8942 13.6002 16.6826C13.3632 16.4626 13.2447 16.0986 13.2447 15.5908C13.2447 15.1423 13.3589 14.8037 13.5875 14.5752C13.8244 14.3382 14.1672 14.2197 14.6158 14.2197H14.8316V3.2002H14.6158C14.1672 3.2002 13.8202 3.08171 13.5748 2.84473C13.3378 2.59928 13.2193 2.24805 13.2193 1.79102C13.2193 1.29167 13.342 0.931966 13.5875 0.711914C13.8329 0.491862 14.2476 0.381836 14.8316 0.381836H17.2183C17.5061 0.381836 17.705 0.441081 17.815 0.55957C17.925 0.67806 17.98 0.898112 17.98 1.21973V6.55176ZM35.3051 8.0498H35.102C34.6449 8.0498 34.2979 7.93132 34.0609 7.69434C33.8324 7.45736 33.7182 7.11035 33.7182 6.65332C33.7182 6.15397 33.8367 5.7985 34.0736 5.58691C34.3106 5.37533 34.7211 5.26953 35.3051 5.26953H37.7045C37.933 5.26953 38.1107 5.32031 38.2377 5.42188C38.3646 5.51497 38.4281 5.64616 38.4281 5.81543V14.2197H38.6312C39.0883 14.2197 39.4353 14.3382 39.6723 14.5752C39.9177 14.8122 40.0404 15.1507 40.0404 15.5908C40.0404 16.0986 39.9177 16.4626 39.6723 16.6826C39.4268 16.8942 39.0121 17 38.4281 17H36.2953C36.0583 17 35.8721 16.9492 35.7367 16.8477C35.6098 16.7461 35.5463 16.6064 35.5463 16.4287V15.4639C35.14 16.0732 34.6407 16.5303 34.0482 16.835C33.4643 17.1396 32.7745 17.292 31.9789 17.292C30.6163 17.292 29.6049 16.8815 28.9447 16.0605C28.2846 15.2396 27.9545 13.9827 27.9545 12.29V8.0498H27.7387C27.2816 8.0498 26.9346 7.93132 26.6977 7.69434C26.4607 7.45736 26.3422 7.11035 26.3422 6.65332C26.3422 6.15397 26.4607 5.7985 26.6977 5.58691C26.9431 5.37533 27.362 5.26953 27.9545 5.26953H30.3412C30.5697 5.26953 30.7432 5.32031 30.8617 5.42188C30.9802 5.51497 31.0395 5.64616 31.0395 5.81543V11.7188C31.0395 12.7598 31.1833 13.4919 31.4711 13.915C31.7589 14.3382 32.2328 14.5498 32.893 14.5498C33.5954 14.5498 34.171 14.2917 34.6195 13.7754C35.0766 13.2507 35.3051 12.5651 35.3051 11.7188V8.0498ZM44.5559 10.1064L47.2346 7.69434C46.9722 7.6097 46.7903 7.49544 46.6887 7.35156C46.5956 7.20768 46.5491 6.9834 46.5491 6.67871C46.5491 6.16243 46.6633 5.7985 46.8918 5.58691C47.1203 5.37533 47.5266 5.26953 48.1106 5.26953H50.9162C51.4918 5.26953 51.898 5.37533 52.135 5.58691C52.3804 5.7985 52.5032 6.15397 52.5032 6.65332C52.5032 7.02572 52.4312 7.29655 52.2873 7.46582C52.1519 7.63509 51.8684 7.76204 51.4368 7.84668C51.039 7.92285 50.6835 8.0498 50.3703 8.22754C50.0657 8.40527 49.7102 8.7015 49.3039 9.11621L48.4026 10.0557L51.7541 14.2197H52.0715C52.5624 14.2197 52.9306 14.334 53.176 14.5625C53.4215 14.791 53.5442 15.1338 53.5442 15.5908C53.5442 16.0902 53.4215 16.4499 53.176 16.6699C52.9306 16.89 52.5159 17 51.9319 17H48.8215C48.2714 17 47.8736 16.9069 47.6282 16.7207C47.3827 16.5345 47.26 16.2383 47.26 15.832C47.26 15.5273 47.3319 15.2861 47.4758 15.1084C47.6197 14.9222 47.8567 14.7656 48.1868 14.6387L46.1174 12.1123L44.5559 13.5469V16.1621C44.5559 16.4837 44.5009 16.7038 44.3909 16.8223C44.2808 16.9408 44.0819 17 43.7942 17H41.509C40.9504 17 40.5484 16.89 40.303 16.6699C40.066 16.4499 39.9475 16.0902 39.9475 15.5908C39.9475 15.1423 40.0618 14.8037 40.2903 14.5752C40.5188 14.3382 40.8573 14.2197 41.3059 14.2197H41.509V3.2002H41.3059C40.8573 3.2002 40.5146 3.07747 40.2776 2.83203C40.0406 2.58659 39.9221 2.23958 39.9221 1.79102C39.9221 1.30013 40.0448 0.944661 40.2903 0.724609C40.5357 0.496094 40.942 0.381836 41.509 0.381836H43.7942C44.0819 0.381836 44.2808 0.441081 44.3909 0.55957C44.5009 0.67806 44.5559 0.898112 44.5559 1.21973V10.1064ZM55.9522 8.0498L56.9678 14.2959L58.3262 9.45898C58.4701 8.95117 58.6521 8.61686 58.8721 8.45605C59.0922 8.29525 59.418 8.21484 59.8497 8.21484C60.2813 8.21484 60.6072 8.29102 60.8272 8.44336C61.0473 8.5957 61.2335 8.93424 61.3858 9.45898L62.795 14.2959L63.7598 8.0498H63.544C63.087 8.0498 62.74 7.93132 62.503 7.69434C62.266 7.45736 62.1475 7.11035 62.1475 6.65332C62.1475 6.15397 62.266 5.7985 62.503 5.58691C62.7484 5.37533 63.1674 5.26953 63.7598 5.26953H66.7432C67.3272 5.26953 67.7419 5.37956 67.9874 5.59961C68.2328 5.8112 68.3555 6.16243 68.3555 6.65332C68.3555 7.11035 68.2328 7.45736 67.9874 7.69434C67.7504 7.93132 67.4076 8.0498 66.9591 8.0498H66.7432L65.1563 16.0605C65.0717 16.5007 64.877 16.818 64.5723 17.0127C64.2677 17.2158 63.8233 17.3174 63.2393 17.3174C62.6638 17.3174 62.2237 17.2158 61.919 17.0127C61.6143 16.818 61.3943 16.5007 61.2589 16.0605L59.7735 11.1221L58.4532 16.0605C58.3432 16.4837 58.1231 16.7969 57.793 17C57.463 17.2116 57.0144 17.3174 56.4473 17.3174C55.8634 17.3174 55.4233 17.2158 55.127 17.0127C54.8308 16.818 54.6404 16.5007 54.5557 16.0605L52.9434 8.0498H52.7276C52.279 8.0498 51.9405 7.93132 51.712 7.69434C51.475 7.45736 51.3565 7.11035 51.3565 6.65332C51.3565 6.16243 51.475 5.8112 51.712 5.59961C51.949 5.37956 52.3595 5.26953 52.9434 5.26953H55.9522C56.5362 5.26953 56.9467 5.37956 57.1837 5.59961C57.4206 5.8112 57.5391 6.16243 57.5391 6.65332C57.5391 7.11035 57.4206 7.45736 57.1837 7.69434C56.9552 7.93132 56.6166 8.0498 56.168 8.0498H55.9522ZM75.1308 8.0498H74.9277C74.4706 8.0498 74.1236 7.93132 73.8866 7.69434C73.6581 7.45736 73.5439 7.11035 73.5439 6.65332C73.5439 6.15397 73.6624 5.7985 73.8993 5.58691C74.1363 5.37533 74.5468 5.26953 75.1308 5.26953H77.5302C77.7587 5.26953 77.9364 5.32031 78.0634 5.42188C78.1904 5.51497 78.2538 5.64616 78.2538 5.81543V14.2197H78.457C78.914 14.2197 79.261 14.3382 79.498 14.5752C79.7434 14.8122 79.8661 15.1507 79.8661 15.5908C79.8661 16.0986 79.7434 16.4626 79.498 16.6826C79.2525 16.8942 78.8378 17 78.2538 17H76.121C75.884 17 75.6978 16.9492 75.5624 16.8477C75.4355 16.7461 75.372 16.6064 75.372 16.4287V15.4639C74.9657 16.0732 74.4664 16.5303 73.8739 16.835C73.29 17.1396 72.6002 17.292 71.8046 17.292C70.442 17.292 69.4306 16.8815 68.7704 16.0605C68.1103 15.2396 67.7802 13.9827 67.7802 12.29V8.0498H67.5644C67.1073 8.0498 66.7603 7.93132 66.5234 7.69434C66.2864 7.45736 66.1679 7.11035 66.1679 6.65332C66.1679 6.15397 66.2864 5.7985 66.5234 5.58691C66.7688 5.37533 67.1877 5.26953 67.7802 5.26953H70.1669C70.3954 5.26953 70.5689 5.32031 70.6874 5.42188C70.8059 5.51497 70.8652 5.64616 70.8652 5.81543V11.7188C70.8652 12.7598 71.009 13.4919 71.2968 13.915C71.5846 14.3382 72.0585 14.5498 72.7187 14.5498C73.4211 14.5498 73.9967 14.2917 74.4452 13.7754C74.9023 13.2507 75.1308 12.5651 75.1308 11.7188V8.0498Z" fill="#007FF4" />
                            <path d="M86.4002 12.4043C87.1957 12.4043 87.8347 12.6243 88.3171 13.0645C88.808 13.5046 89.0535 14.0801 89.0535 14.791C89.0535 15.4935 88.808 16.069 88.3171 16.5176C87.8347 16.9577 87.1957 17.1777 86.4002 17.1777C85.6215 17.1777 84.9867 16.9577 84.4959 16.5176C84.005 16.069 83.7595 15.4935 83.7595 14.791C83.7595 14.0885 84.005 13.5173 84.4959 13.0771C84.9867 12.6286 85.6215 12.4043 86.4002 12.4043ZM105.084 14.2197H105.299C105.756 14.2197 106.099 14.3382 106.328 14.5752C106.556 14.8037 106.671 15.1423 106.671 15.5908C106.671 16.0902 106.548 16.4499 106.302 16.6699C106.065 16.89 105.659 17 105.084 17H103.141C102.896 17 102.705 16.9535 102.57 16.8604C102.443 16.7588 102.379 16.6234 102.379 16.4541V15.5654C101.965 16.1325 101.432 16.5684 100.78 16.873C100.128 17.1693 99.3961 17.3174 98.5836 17.3174C96.9247 17.3174 95.5367 16.7546 94.4195 15.6289C93.3023 14.4948 92.7438 13.0814 92.7438 11.3887C92.7438 9.62826 93.3066 8.16829 94.4322 7.00879C95.5663 5.84928 97.0051 5.26953 98.7486 5.26953C99.3495 5.26953 99.9335 5.37109 100.501 5.57422C101.076 5.76888 101.601 6.04818 102.075 6.41211V3.2002H100.386C99.8023 3.2002 99.3876 3.09017 99.1422 2.87012C98.8967 2.6416 98.774 2.2819 98.774 1.79102C98.774 1.29167 98.8967 0.931966 99.1422 0.711914C99.3876 0.491862 99.8023 0.381836 100.386 0.381836H104.335C104.622 0.381836 104.817 0.441081 104.919 0.55957C105.029 0.67806 105.084 0.898112 105.084 1.21973V14.2197ZM99.1295 7.97363C98.3001 7.97363 97.6103 8.28678 97.0602 8.91309C96.5185 9.53092 96.2477 10.318 96.2477 11.2744C96.2477 12.2562 96.5185 13.0602 97.0602 13.6865C97.6018 14.3044 98.2916 14.6133 99.1295 14.6133C99.9674 14.6133 100.657 14.3001 101.199 13.6738C101.749 13.0475 102.024 12.2477 102.024 11.2744C102.024 10.3265 101.749 9.53939 101.199 8.91309C100.649 8.28678 99.9589 7.97363 99.1295 7.97363ZM109.497 11.8838C109.718 12.8232 110.141 13.5257 110.767 13.9912C111.402 14.4567 112.244 14.6895 113.293 14.6895C114.343 14.6895 115.38 14.4355 116.404 13.9277C117.428 13.4115 118.046 13.1533 118.257 13.1533C118.57 13.1533 118.824 13.2718 119.019 13.5088C119.222 13.7373 119.324 14.0335 119.324 14.3975C119.324 15.193 118.735 15.8786 117.559 16.4541C116.383 17.0296 114.927 17.3174 113.192 17.3174C111.144 17.3174 109.476 16.7419 108.19 15.5908C106.912 14.4398 106.273 12.9587 106.273 11.1475C106.273 9.34473 106.912 7.86784 108.19 6.7168C109.476 5.56576 111.144 4.99023 113.192 4.99023C115.02 4.99023 116.535 5.5319 117.737 6.61523C118.939 7.6901 119.539 9.01042 119.539 10.5762C119.539 11.0755 119.417 11.4183 119.171 11.6045C118.934 11.7907 118.439 11.8838 117.686 11.8838H109.497ZM116.34 9.90332C116.196 9.11621 115.824 8.50684 115.223 8.0752C114.631 7.64355 113.856 7.42773 112.9 7.42773C111.977 7.42773 111.233 7.63509 110.665 8.0498C110.107 8.45605 109.718 9.07389 109.497 9.90332H116.34ZM123.991 8.0498L126.277 13.458L128.676 8.0498H128.473C128.016 8.0498 127.665 7.93132 127.419 7.69434C127.182 7.45736 127.064 7.11035 127.064 6.65332C127.064 6.15397 127.182 5.7985 127.419 5.58691C127.665 5.37533 128.084 5.26953 128.676 5.26953H131.659C132.252 5.26953 132.667 5.37956 132.904 5.59961C133.149 5.8112 133.272 6.16243 133.272 6.65332C133.272 7.11035 133.153 7.45736 132.916 7.69434C132.679 7.93132 132.332 8.0498 131.875 8.0498H131.659L127.889 16.0605C127.61 16.6361 127.356 16.9873 127.127 17.1143C126.907 17.2497 126.564 17.3174 126.099 17.3174C125.253 17.3174 124.681 16.9619 124.385 16.251C124.351 16.1663 124.326 16.1029 124.309 16.0605L120.767 8.0498H120.564C120.107 8.0498 119.755 7.93132 119.51 7.69434C119.273 7.45736 119.155 7.11035 119.155 6.65332C119.155 6.15397 119.277 5.7985 119.523 5.58691C119.768 5.37533 120.183 5.26953 120.767 5.26953H123.991C124.575 5.26953 124.99 5.37956 125.236 5.59961C125.481 5.8112 125.604 6.16243 125.604 6.65332C125.604 7.11035 125.481 7.45736 125.236 7.69434C124.999 7.93132 124.656 8.0498 124.207 8.0498H123.991Z" fill="#E7E7E7" />
                        </svg>
                    </span>
                </Link>
                <div className="desktop-nav-items md:block hidden">
                    <ul className='flex items-center'>
                        <li onClick={closeNav} className='font-bold text-[15px] text-white leading-[19.36px] text-center mr-[20px]'>
                            <NavLink to='/profile' className={({ isActive }) => isActive ? 'border-b-2 border-b-[#007FF4] pb-2 transition-all duration-500' : 'border-b-2 border-b-[transparent] pb-2 transition duration-100'}><code><span className='text-mainBlue font-bold mr-4'>1.</span>Profile</code></NavLink>
                        </li>
                        <li onClick={closeNav} className='font-bold text-[15px] text-white leading-[19.36px] text-center mr-[20px]'>
                            <NavLink to='/work' className={({ isActive }) => isActive ? 'border-b-2 border-b-[#007FF4] pb-2 transition-all duration-500' : 'border-b-2 border-b-[transparent] pb-2 transition duration-100'}><code><span className='text-mainBlue font-bold mr-4'>2.</span>Work</code></NavLink>
                        </li>
                        <li onClick={closeNav} className='flex items-center font-bold text-[15px] text-white leading-[19.36px] text-center mr-[20px]'>
                            <a href='../assets/files/Chukwu_Ayika_Resume.pdf' download={'Chukwu_Ayika_Resume'}><code><span className='text-mainBlue font-bold mr-4'>3.</span>Resume</code></a>
                            <svg className='text-white ml-2 w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z" />
                            </svg>
                        </li>
                        {/* <li className='font-bold text-[15px] text-white leading-[19.36px] text-center mr-[20px]'>
                        <NavLink to='/showcase' className={({ isActive }) => isActive ? 'border-b-2 border-b-[#007FF4] pb-2 transition-all duration-500' : 'border-b-2 border-b-[transparent] pb-2 transition duration-100'}><code>SHOWCASE</code></NavLink>
                    </li> */}
                    </ul>
                </div>
                <button onClick={handleNavState} className='md:hidden z-50'>
                    {/* {navbarOpen ? 'Close' : 'Open'} */}
                    <StyledHamburger navbarOpen={navbarOpen} className='min-h-[18px] h-[20px] w-[30px] relative flex flex-col'>
                        <div className="up w-[30px] h-[2px] bg-white"></div>
                        <div className="center w-[30px] h-[2px] bg-white"></div>
                        <div className="bottom w-[30px] h-[2px] bg-white"></div>
                    </StyledHamburger>
                </button>
                <div className={!navbarOpen ? 'absolute flex flex-col justify-center items-center mobile-nav-items md:hidden w-[75vw] h-screen top-0 right-0 translate-x-[75vw] bg-mainBg z-20 secondary-transition' : 'absolute flex flex-col justify-center items-center mobile-nav-items md:hidden w-[75vw] h-screen top-0 right-0 translate-x-0 bg-mainBg secondary-transition'}>
                    <ul className='flex flex-col items-center w-full h-full pt-[150px] bg-mainBg'>
                        <li onClick={closeNav} className='font-normal text-[16px] text-white leading-[24px] text-left w-full px-[30px] py-[20px]'>
                            <NavLink to='/profile'><code><span className='text-mainBlue font-bold mr-4'>1.</span>PROFILE</code></NavLink>
                        </li>
                        <li onClick={closeNav} className='font-normal text-[16px] text-white leading-[24px] text-left w-full px-[30px] py-[20px]'>
                            <NavLink to='/work'><code><span className='text-mainBlue font-bold mr-4'>2.</span>WORK</code></NavLink>
                        </li>
                        <li onClick={closeNav} className='flex items-center justify-start font-normal text-[16px] text-white leading-[24px] text-left px-[30px] py-[20px] w-full'>
                            <a href='../assets/files/Chukwu_Ayika_Resume.pdf' download={'Chukwu_Ayika_Resume'}><code><span className='text-mainBlue font-bold mr-4'>3.</span>RESUME</code></a>
                            <svg className='text-white ml-2 w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z" />
                            </svg>
                        </li>
                        {/* <li className='font-normal text-[16px] text-white leading-[24px] text-center mr-[20px]'>
                        <NavLink to='/showcase'><code>SHOWCASE</code></NavLink>
                    </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

const StyledHamburger = styled.div<NavType>`
    justify-content: ${({ navbarOpen }) => (navbarOpen ? "center" : "center")};

    div {
        position: ${({ navbarOpen }) => (navbarOpen ? "absolute" : "absolute")};
        transition: all .5s ease;
        transition-delay: 100ms;
    }

    div:nth-child(2) {
        opacity: ${({ navbarOpen }) => (navbarOpen ? "0" : "1")};
        transition: all 1s ease;
        transition-delay: 100ms;
    }
    div:nth-child(1) {
        transform: ${({ navbarOpen }) => (navbarOpen ? "rotate(-405deg)" : "rotate(0deg)")};
        top: ${({ navbarOpen }) => (navbarOpen ? "45%" : "0")};
        transition: all 1s ease;
        transition-delay: 100ms;
    }
    div:nth-child(3) {
        transform: ${({ navbarOpen }) => (navbarOpen ? "rotate(-315deg)" : "rotate(0deg)")};
        bottom: ${({ navbarOpen }) => (navbarOpen ? "45%" : "0")};
        transition: all 1s ease;
        transition-delay: 100ms;
    }
`


export default Navbar