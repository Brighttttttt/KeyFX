import React, {useEffect, useRef, useState} from "react";

const Lisence = ({isMobile}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observerOptions = {root: null, rootMargin: '0px', threshold: isMobile ? 0.60 : 0.75};
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            });
        };
        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [isMobile]);

    return (
        <>
            <div
                ref={targetRef}
                className={`foil-image py-0 overflow-visible cursor-pointer lg:mt-0 mt-5 ${isClicked ? 'lisence-hove' : ''} ${isInView ? 'lisence-hove' : ''}`}
                onClick={() => setIsClicked(!isClicked)}
            >
                <div className="imgSignUp overflow-visible">
                    <div className="shadow-[inset_0px_-2px_10px_0px_#3E6F9F3F,0px_30px_50px_-30px_#4A4A4A19,0px_30px_70px_-20px_#32325D26] w-[351px] h-[216px] absolute top-[24px] left-[41px] rounded-[22px] overflow-visible"></div>
                </div>
                <svg className="lisence2" width="430" height="300" viewBox="0 0 450 349" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_ddi_14808_8263)">
                        <rect x="50" y="20" width="350" height="266" rx="16" fill="white"/>
                        <rect x="50.5" y="20.5" width="349" height="265" rx="15.5" stroke="#AFB7DC"/>
                    </g>
                    <g filter="url(#filter1_d_14808_8263)">
                        <rect x="78" y="64" width="296" height="34" rx="3" fill="#D5DAEF" fillOpacity="0.2"/>
                        <rect x="78.5" y="64.5" width="295" height="33" rx="2.5" stroke="#D5DAEF"/>
                        <path
                            d="M92.9 77.55L94.4 77.55V85L92.85 85V80.2L90.6 83.1L90.4 83.1L88.15 80.09V85L86.6 85V77.55L88.1 77.55L90.49 80.7L92.9 77.55ZM95.6039 85V77.55L97.1539 77.55V85L95.6039 85ZM98.3578 85V77.55L100.788 77.55C103.208 77.55 104.758 79.11 104.758 81.27C104.758 83.43 103.198 85 100.788 85L98.3578 85ZM99.9078 83.65L100.828 83.65C102.278 83.65 103.208 82.72 103.208 81.27C103.208 79.82 102.278 78.9 100.828 78.9L99.9078 78.9V83.65ZM105.711 85V77.55L108.141 77.55C110.561 77.55 112.111 79.11 112.111 81.27C112.111 83.43 110.551 85 108.141 85L105.711 85ZM107.261 83.65L108.181 83.65C109.631 83.65 110.561 82.72 110.561 81.27C110.561 79.82 109.631 78.9 108.181 78.9L107.261 78.9V83.65ZM113.065 85V77.55L114.615 77.55V83.65L117.965 83.65V85L113.065 85ZM118.768 85V77.55L123.778 77.55V78.9L120.318 78.9V80.59L123.578 80.59V81.94L120.318 81.94V83.65L123.778 83.65L123.768 85L118.768 85ZM126.214 85V78.9L124.324 78.9V77.55L129.634 77.55V78.9L127.764 78.9V85L126.214 85ZM133.777 85.12C131.527 85.12 129.827 83.46 129.827 81.27C129.827 79.08 131.517 77.43 133.777 77.43C136.037 77.43 137.727 79.08 137.727 81.27C137.727 83.46 136.027 85.12 133.777 85.12ZM133.777 83.72C135.137 83.72 136.177 82.71 136.177 81.27C136.177 79.83 135.137 78.83 133.777 78.83C132.417 78.83 131.377 79.83 131.377 81.27C131.377 82.71 132.417 83.72 133.777 83.72ZM143.23 77.55L144.78 77.55V85L143.58 85L140.23 80.49V85L138.68 85V77.55L139.87 77.55L143.23 82.03V77.55ZM147.782 85V77.55L149.332 77.55V83.65L152.682 83.65V85L147.782 85ZM156.989 85.12C154.739 85.12 153.039 83.46 153.039 81.27C153.039 79.08 154.729 77.43 156.989 77.43C159.249 77.43 160.939 79.08 160.939 81.27C160.939 83.46 159.239 85.12 156.989 85.12ZM156.989 83.72C158.349 83.72 159.389 82.71 159.389 81.27C159.389 79.83 158.349 78.83 156.989 78.83C155.629 78.83 154.589 79.83 154.589 81.27C154.589 82.71 155.629 83.72 156.989 83.72ZM161.893 85V77.55L164.953 77.55C166.493 77.55 167.593 78.37 167.593 79.93C167.593 80.95 167.093 81.67 166.303 82.03L168.003 85L166.263 85L164.753 82.3L163.443 82.3V85L161.893 85ZM163.443 80.95L164.963 80.95C165.613 80.95 166.043 80.54 166.043 79.93C166.043 79.31 165.613 78.9 164.963 78.9L163.443 78.9V80.95ZM168.856 85V77.55L173.866 77.55V78.9L170.406 78.9V80.59L173.666 80.59V81.94L170.406 81.94V83.65L173.866 83.65L173.856 85L168.856 85ZM179.412 77.55L180.962 77.55V85L179.762 85L176.412 80.49V85L174.862 85V77.55L176.052 77.55L179.412 82.03V77.55Z"
                            fill="#394375"/>
                    </g>
                    <path
                        d="M84.886 45.55L85.846 45.55V50.57C85.846 52.09 84.766 53.12 83.116 53.12C81.466 53.12 80.386 52.1 80.386 50.57V45.55L81.346 45.55V50.57C81.346 51.56 82.096 52.28 83.116 52.28C84.126 52.28 84.886 51.56 84.886 50.57V45.55ZM89.1184 53.12C88.0784 53.12 87.2284 52.57 86.8884 51.67L87.6184 51.31C87.8884 51.98 88.4584 52.33 89.1184 52.33C89.7384 52.33 90.1584 52.01 90.1584 51.57C90.1584 51.19 89.8384 50.98 89.3484 50.84L88.4784 50.6C87.5884 50.35 87.1284 49.84 87.1284 49.12C87.1284 48.2 87.8684 47.58 88.9684 47.58C89.9484 47.58 90.7284 48.09 91.0384 48.92L90.3184 49.27C90.0984 48.7 89.5984 48.37 88.9684 48.37C88.3984 48.37 88.0184 48.65 88.0184 49.07C88.0184 49.43 88.3184 49.67 88.7784 49.81L89.6784 50.08C90.5684 50.34 91.0484 50.86 91.0484 51.57C91.0484 52.49 90.2584 53.12 89.1184 53.12ZM96.7352 50.12C96.7352 50.27 96.7252 50.44 96.6952 50.61L92.5852 50.61C92.6252 51.66 93.4152 52.34 94.3452 52.34C95.0952 52.34 95.5852 51.94 95.8652 51.4L96.6152 51.8C96.2852 52.53 95.4252 53.12 94.3352 53.12C92.8152 53.12 91.6852 51.94 91.6852 50.34C91.6852 48.74 92.7852 47.58 94.2652 47.58C95.7752 47.58 96.7352 48.77 96.7352 50.12ZM92.6052 49.87L95.7852 49.87C95.7752 48.99 95.0452 48.34 94.2652 48.34C93.4352 48.34 92.7252 48.91 92.6052 49.87ZM99.919 47.64L100.349 47.64V48.46L99.789 48.46C99.029 48.46 98.519 48.96 98.519 49.84V53L97.659 53V47.7L98.489 47.7V48.36C98.769 47.87 99.279 47.64 99.919 47.64ZM103.642 47.58C104.792 47.58 105.622 48.4 105.622 49.51V53L104.762 53V49.79C104.762 48.95 104.252 48.41 103.452 48.41C102.662 48.41 102.132 48.96 102.132 49.79V53L101.272 53V47.7L102.112 47.7V48.31C102.422 47.85 102.992 47.58 103.642 47.58ZM108.879 47.58C110.089 47.58 110.939 48.33 110.939 49.41V53L110.099 53V52.26C109.739 52.79 109.109 53.12 108.429 53.12C107.299 53.12 106.539 52.46 106.539 51.53C106.539 50.75 107.169 50.21 108.239 49.97L110.079 49.56V49.41C110.079 48.8 109.579 48.4 108.879 48.4C108.239 48.4 107.739 48.74 107.509 49.26L106.739 48.86C107.039 48.14 107.899 47.58 108.879 47.58ZM108.479 52.35C109.409 52.35 110.079 51.65 110.079 50.72V50.26L108.439 50.64C107.839 50.77 107.449 51.1 107.449 51.53C107.449 52.03 107.849 52.35 108.479 52.35ZM117.733 47.58C118.833 47.58 119.643 48.39 119.643 49.51V53L118.783 53V49.79C118.783 48.94 118.293 48.41 117.533 48.41C116.783 48.41 116.283 48.95 116.283 49.79V53L115.423 53V49.79C115.423 48.94 114.933 48.41 114.173 48.41C113.423 48.41 112.923 48.95 112.923 49.79V53L112.063 53V47.7L112.903 47.7V48.31C113.203 47.85 113.743 47.58 114.373 47.58C115.103 47.58 115.713 47.94 116.033 48.52C116.373 47.92 116.993 47.58 117.733 47.58ZM125.612 50.12C125.612 50.27 125.602 50.44 125.572 50.61L121.462 50.61C121.502 51.66 122.292 52.34 123.222 52.34C123.972 52.34 124.462 51.94 124.742 51.4L125.492 51.8C125.162 52.53 124.302 53.12 123.212 53.12C121.692 53.12 120.562 51.94 120.562 50.34C120.562 48.74 121.662 47.58 123.142 47.58C124.652 47.58 125.612 48.77 125.612 50.12ZM121.482 49.87L124.662 49.87C124.652 48.99 123.922 48.34 123.142 48.34C122.312 48.34 121.602 48.91 121.482 49.87Z"
                        fill="#8C95C2"/>
                    <g filter="url(#filter2_d_14808_8263)">
                        <g clipPath="url(#clip0_14808_8263)">
                            <rect x="79.3965" y="136" width="294.604" height="34" rx="3" fill="#D5DAEF"
                                  fillOpacity="0.2"/>
                            <path
                                d="M88.0665 157L91.0765 150.84L87.5465 150.84V149.54L92.6165 149.54V150.84L89.6965 157L88.0665 157ZM95.5584 152.22C96.9384 152.22 97.9384 153.35 97.9384 154.65C97.9384 156.06 96.8284 157.12 95.2784 157.12C93.7284 157.12 92.6184 156.06 92.6184 154.65C92.6184 153.98 92.9084 153.44 93.3684 152.8L95.6784 149.55L97.4284 149.55L95.5484 152.22L95.5584 152.22ZM95.2784 155.72C95.8884 155.72 96.3884 155.27 96.3884 154.6C96.3884 153.93 95.8884 153.49 95.2784 153.49C94.6684 153.49 94.1684 153.93 94.1684 154.6C94.1684 155.27 94.6684 155.72 95.2784 155.72ZM101.346 152.09C102.776 152.09 103.766 153.06 103.766 154.45C103.766 155.98 102.616 157.12 101.056 157.12C99.8563 157.12 98.8363 156.47 98.4863 155.49L99.7163 154.79C99.9263 155.35 100.446 155.72 101.056 155.72C101.746 155.72 102.216 155.25 102.216 154.55C102.216 153.86 101.746 153.39 101.056 153.39C100.596 153.39 100.276 153.6 100.106 154.02L98.8863 153.72L99.5863 149.55L103.596 149.55V150.85L100.636 150.84L100.396 152.31C100.656 152.16 100.966 152.09 101.346 152.09ZM110.654 154.1V155.4L109.414 155.4V157L107.864 157V155.4L104.464 155.4V154.1L107.764 149.55L109.414 149.55V154.1L110.654 154.1ZM105.974 154.1L107.864 154.1V151.42L105.974 154.1ZM114.634 152.39C115.714 152.57 116.394 153.38 116.394 154.53C116.394 156.02 115.224 157.12 113.644 157.12C112.454 157.12 111.474 156.49 111.104 155.49L112.324 154.79C112.544 155.39 113.004 155.72 113.644 155.72C114.374 155.72 114.844 155.28 114.844 154.59C114.844 153.91 114.394 153.49 113.644 153.49C113.344 153.49 113.044 153.56 112.804 153.68L112.444 152.93L114.364 150.85L111.444 150.85V149.55L116.094 149.55V150.75L114.634 152.39ZM120.111 157.12C118.311 157.12 117.091 155.58 117.091 153.27C117.091 150.96 118.301 149.43 120.101 149.43C121.921 149.43 123.121 150.97 123.121 153.27C123.121 155.57 121.921 157.12 120.111 157.12ZM120.111 155.72C121.041 155.72 121.581 154.82 121.581 153.27C121.581 151.73 121.041 150.83 120.101 150.83C119.171 150.83 118.631 151.72 118.631 153.27C118.631 154.81 119.181 155.72 120.111 155.72ZM128.252 153.09C128.952 153.47 129.322 154.05 129.322 154.79C129.322 156.13 128.142 157.12 126.562 157.12C124.992 157.12 123.822 156.13 123.822 154.79C123.822 154.04 124.182 153.45 124.882 153.09C124.382 152.77 124.072 152.16 124.072 151.5C124.072 150.3 125.112 149.43 126.562 149.43C128.002 149.43 129.062 150.3 129.062 151.5C129.062 152.15 128.752 152.76 128.252 153.09ZM126.562 150.73C126.012 150.73 125.642 151.09 125.642 151.62C125.642 152.14 126.012 152.49 126.562 152.49C127.112 152.49 127.482 152.14 127.482 151.62C127.482 151.09 127.112 150.73 126.562 150.73ZM126.562 155.82C127.282 155.82 127.762 155.41 127.762 154.8C127.762 154.19 127.282 153.79 126.562 153.79C125.852 153.79 125.382 154.19 125.382 154.8C125.382 155.41 125.852 155.82 126.562 155.82ZM130.391 157L133.401 150.84L129.871 150.84V149.54L134.941 149.54V150.84L132.021 157L130.391 157Z"
                                fill="#394375"/>
                        </g>
                        <rect x="79.8965" y="136.5" width="293.604" height="33" rx="2.5" stroke="#D5DAEF"/>
                    </g>
                    <path
                        d="M81.7756 125V117.55L84.4356 117.55C85.9556 117.55 86.9956 118.45 86.9956 119.85C86.9956 121.24 85.9656 122.14 84.4356 122.14L82.7256 122.14V125L81.7756 125ZM82.7256 121.31L84.4356 121.31C85.3856 121.31 86.0156 120.72 86.0156 119.84C86.0156 118.97 85.3856 118.38 84.4356 118.38L82.7256 118.38V121.31ZM89.7996 119.58C91.0096 119.58 91.8596 120.33 91.8596 121.41V125L91.0196 125V124.26C90.6596 124.79 90.0296 125.12 89.3496 125.12C88.2196 125.12 87.4596 124.46 87.4596 123.53C87.4596 122.75 88.0896 122.21 89.1596 121.97L90.9996 121.56V121.41C90.9996 120.8 90.4996 120.4 89.7996 120.4C89.1596 120.4 88.6596 120.74 88.4296 121.26L87.6596 120.86C87.9596 120.14 88.8196 119.58 89.7996 119.58ZM89.3996 124.35C90.3296 124.35 90.9996 123.65 90.9996 122.72V122.26L89.3596 122.64C88.7596 122.77 88.3696 123.1 88.3696 123.53C88.3696 124.03 88.7696 124.35 89.3996 124.35ZM94.8342 125.12C93.7942 125.12 92.9442 124.57 92.6042 123.67L93.3342 123.31C93.6042 123.98 94.1742 124.33 94.8342 124.33C95.4542 124.33 95.8742 124.01 95.8742 123.57C95.8742 123.19 95.5542 122.98 95.0642 122.84L94.1942 122.6C93.3042 122.35 92.8442 121.84 92.8442 121.12C92.8442 120.2 93.5842 119.58 94.6842 119.58C95.6642 119.58 96.4442 120.09 96.7542 120.92L96.0342 121.27C95.8142 120.7 95.3142 120.37 94.6842 120.37C94.1142 120.37 93.7342 120.65 93.7342 121.07C93.7342 121.43 94.0342 121.67 94.4942 121.81L95.3942 122.08C96.2842 122.34 96.7642 122.86 96.7642 123.57C96.7642 124.49 95.9742 125.12 94.8342 125.12ZM99.551 125.12C98.511 125.12 97.661 124.57 97.321 123.67L98.051 123.31C98.321 123.98 98.891 124.33 99.551 124.33C100.171 124.33 100.591 124.01 100.591 123.57C100.591 123.19 100.271 122.98 99.781 122.84L98.911 122.6C98.021 122.35 97.561 121.84 97.561 121.12C97.561 120.2 98.301 119.58 99.401 119.58C100.381 119.58 101.161 120.09 101.471 120.92L100.751 121.27C100.531 120.7 100.031 120.37 99.401 120.37C98.831 120.37 98.451 120.65 98.451 121.07C98.451 121.43 98.751 121.67 99.211 121.81L100.111 122.08C101.001 122.34 101.481 122.86 101.481 123.57C101.481 124.49 100.691 125.12 99.551 125.12ZM108.848 119.7L109.818 119.7L107.968 125L107.168 125L105.878 120.88L104.578 125L103.768 125L101.918 119.7L102.888 119.7L104.178 123.73L105.398 119.7L106.338 119.7L107.558 123.71L108.848 119.7ZM112.973 125.12C111.443 125.12 110.243 123.95 110.243 122.34C110.243 120.73 111.433 119.58 112.973 119.58C114.513 119.58 115.703 120.73 115.703 122.34C115.703 123.95 114.503 125.12 112.973 125.12ZM112.973 124.29C114.003 124.29 114.793 123.46 114.793 122.35C114.793 121.24 114.003 120.41 112.973 120.41C111.943 120.41 111.153 121.24 111.153 122.35C111.153 123.46 111.943 124.29 112.973 124.29ZM118.984 119.64L119.414 119.64V120.46L118.854 120.46C118.094 120.46 117.584 120.96 117.584 121.84V125L116.724 125V119.7L117.554 119.7V120.36C117.834 119.87 118.344 119.64 118.984 119.64ZM124.598 117.55L125.458 117.55V125L124.618 125V124.23C124.228 124.8 123.518 125.12 122.718 125.12C121.208 125.12 120.038 123.95 120.038 122.35C120.038 120.75 121.218 119.58 122.708 119.58C123.508 119.58 124.218 119.92 124.598 120.48V117.55ZM122.768 124.29C123.818 124.29 124.598 123.47 124.598 122.35C124.598 121.24 123.818 120.41 122.768 120.41C121.718 120.41 120.948 121.24 120.948 122.35C120.948 123.47 121.718 124.29 122.768 124.29Z"
                        fill="#8C95C2"/>
                    <g filter="url(#filter3_d_14808_8263)">
                        <rect x="86" y="202" width="288" height="39" rx="5" fill="url(#paint0_linear_14808_8263)"/>
                        <path
                            d="M213.802 223.12C213.802 222.929 213.772 222.76 213.713 222.612C213.658 222.464 213.558 222.328 213.415 222.206C213.271 222.083 213.068 221.964 212.805 221.85C212.547 221.732 212.217 221.611 211.815 221.488C211.375 221.353 210.969 221.203 210.596 221.038C210.228 220.868 209.906 220.674 209.631 220.454C209.356 220.229 209.143 219.973 208.99 219.686C208.838 219.394 208.762 219.057 208.762 218.676C208.762 218.3 208.84 217.957 208.997 217.648C209.157 217.339 209.384 217.072 209.676 216.848C209.972 216.62 210.321 216.444 210.723 216.321C211.125 216.194 211.569 216.131 212.056 216.131C212.742 216.131 213.332 216.258 213.827 216.512C214.326 216.766 214.709 217.106 214.976 217.534C215.247 217.961 215.382 218.433 215.382 218.949L213.802 218.949C213.802 218.645 213.736 218.376 213.605 218.143C213.478 217.906 213.283 217.72 213.021 217.584C212.763 217.449 212.435 217.381 212.037 217.381C211.66 217.381 211.347 217.438 211.098 217.553C210.848 217.667 210.662 217.821 210.539 218.016C210.416 218.211 210.355 218.431 210.355 218.676C210.355 218.85 210.395 219.008 210.476 219.152C210.556 219.292 210.679 219.423 210.844 219.546C211.009 219.664 211.216 219.777 211.466 219.882C211.715 219.988 212.01 220.09 212.348 220.187C212.86 220.339 213.307 220.509 213.688 220.695C214.068 220.877 214.386 221.084 214.64 221.317C214.894 221.55 215.084 221.814 215.211 222.11C215.338 222.402 215.401 222.735 215.401 223.107C215.401 223.496 215.323 223.847 215.167 224.161C215.01 224.47 214.786 224.734 214.494 224.954C214.206 225.17 213.859 225.337 213.453 225.456C213.051 225.57 212.602 225.627 212.107 225.627C211.663 225.627 211.225 225.568 210.793 225.449C210.366 225.331 209.976 225.151 209.625 224.91C209.274 224.664 208.994 224.36 208.787 223.996C208.58 223.627 208.476 223.198 208.476 222.707L210.069 222.707C210.069 223.007 210.12 223.264 210.222 223.475C210.327 223.687 210.473 223.86 210.66 223.996C210.846 224.127 211.062 224.224 211.307 224.288C211.557 224.351 211.823 224.383 212.107 224.383C212.479 224.383 212.79 224.33 213.04 224.224C213.294 224.118 213.484 223.97 213.611 223.78C213.738 223.589 213.802 223.369 213.802 223.12ZM218.296 218.632V225.5L216.76 225.5V218.632L218.296 218.632ZM216.658 216.829C216.658 216.596 216.734 216.404 216.887 216.251C217.043 216.095 217.259 216.017 217.534 216.017C217.805 216.017 218.019 216.095 218.175 216.251C218.332 216.404 218.41 216.596 218.41 216.829C218.41 217.058 218.332 217.248 218.175 217.4C218.019 217.553 217.805 217.629 217.534 217.629C217.259 217.629 217.043 217.553 216.887 217.4C216.734 217.248 216.658 217.058 216.658 216.829ZM224.371 218.632L225.761 218.632V225.31C225.761 225.927 225.63 226.452 225.367 226.884C225.105 227.315 224.739 227.643 224.269 227.868C223.799 228.096 223.256 228.21 222.638 228.21C222.375 228.21 222.083 228.172 221.762 228.096C221.444 228.02 221.135 227.897 220.835 227.728C220.539 227.563 220.291 227.345 220.092 227.074L220.81 226.173C221.055 226.465 221.326 226.679 221.622 226.814C221.918 226.949 222.229 227.017 222.555 227.017C222.906 227.017 223.205 226.951 223.45 226.82C223.7 226.693 223.892 226.505 224.028 226.255C224.163 226.006 224.231 225.701 224.231 225.341V220.187L224.371 218.632ZM219.705 222.142V222.009C219.705 221.488 219.769 221.014 219.896 220.587C220.022 220.155 220.204 219.785 220.441 219.476C220.678 219.163 220.966 218.924 221.305 218.759C221.643 218.59 222.026 218.505 222.454 218.505C222.898 218.505 223.277 218.585 223.59 218.746C223.907 218.907 224.172 219.138 224.383 219.438C224.595 219.734 224.76 220.09 224.878 220.504C225.001 220.915 225.092 221.372 225.151 221.875V222.301C225.096 222.792 225.003 223.24 224.872 223.646C224.741 224.053 224.567 224.404 224.352 224.7C224.136 224.996 223.869 225.225 223.552 225.386C223.239 225.547 222.868 225.627 222.441 225.627C222.022 225.627 221.643 225.54 221.305 225.367C220.97 225.193 220.683 224.95 220.441 224.637C220.204 224.324 220.022 223.955 219.896 223.532C219.769 223.105 219.705 222.641 219.705 222.142ZM221.235 222.009V222.142C221.235 222.455 221.264 222.747 221.324 223.018C221.387 223.289 221.482 223.528 221.609 223.735C221.741 223.938 221.906 224.099 222.104 224.218C222.308 224.332 222.547 224.389 222.822 224.389C223.181 224.389 223.476 224.313 223.704 224.161C223.937 224.008 224.115 223.803 224.237 223.545C224.364 223.283 224.453 222.991 224.504 222.669V221.52C224.479 221.27 224.426 221.038 224.345 220.822C224.269 220.606 224.165 220.418 224.034 220.257C223.903 220.092 223.738 219.965 223.539 219.876C223.34 219.783 223.105 219.736 222.834 219.736C222.559 219.736 222.32 219.796 222.117 219.914C221.914 220.033 221.747 220.195 221.616 220.403C221.489 220.61 221.394 220.851 221.33 221.126C221.267 221.402 221.235 221.696 221.235 222.009ZM228.865 220.098V225.5L227.335 225.5V218.632L228.776 218.632L228.865 220.098ZM228.592 221.812L228.097 221.806C228.101 221.319 228.169 220.873 228.3 220.466C228.435 220.06 228.621 219.711 228.858 219.419C229.1 219.127 229.387 218.903 229.722 218.746C230.056 218.585 230.428 218.505 230.839 218.505C231.169 218.505 231.467 218.551 231.734 218.645C232.005 218.733 232.235 218.879 232.426 219.083C232.62 219.286 232.769 219.55 232.87 219.876C232.972 220.198 233.022 220.593 233.022 221.063V225.5L231.486 225.5V221.057C231.486 220.727 231.438 220.466 231.34 220.276C231.247 220.081 231.11 219.944 230.928 219.863C230.75 219.779 230.528 219.736 230.261 219.736C229.999 219.736 229.764 219.791 229.557 219.901C229.349 220.011 229.174 220.162 229.03 220.352C228.89 220.542 228.782 220.763 228.706 221.012C228.63 221.262 228.592 221.528 228.592 221.812ZM241.954 223.881V218.632L243.49 218.632V225.5L242.042 225.5L241.954 223.881ZM242.169 222.453L242.684 222.44C242.684 222.902 242.633 223.327 242.531 223.716C242.43 224.101 242.273 224.438 242.062 224.726C241.85 225.009 241.579 225.231 241.249 225.392C240.919 225.549 240.523 225.627 240.062 225.627C239.728 225.627 239.421 225.578 239.142 225.481C238.862 225.384 238.621 225.233 238.418 225.03C238.219 224.827 238.065 224.563 237.955 224.237C237.845 223.911 237.79 223.522 237.79 223.069V218.632L239.319 218.632V223.082C239.319 223.331 239.349 223.541 239.408 223.71C239.467 223.875 239.548 224.008 239.649 224.11C239.751 224.211 239.869 224.283 240.005 224.326C240.14 224.368 240.284 224.389 240.437 224.389C240.872 224.389 241.215 224.305 241.465 224.135C241.719 223.962 241.899 223.729 242.004 223.437C242.114 223.145 242.169 222.817 242.169 222.453ZM246.594 219.952V228.141L245.064 228.141V218.632L246.473 218.632L246.594 219.952ZM251.069 222.002V222.136C251.069 222.635 251.01 223.098 250.891 223.526C250.777 223.949 250.605 224.319 250.377 224.637C250.153 224.95 249.875 225.193 249.545 225.367C249.215 225.54 248.834 225.627 248.403 225.627C247.975 225.627 247.601 225.549 247.279 225.392C246.962 225.231 246.693 225.005 246.473 224.713C246.253 224.421 246.075 224.078 245.94 223.685C245.809 223.287 245.716 222.851 245.661 222.377V221.863C245.716 221.359 245.809 220.902 245.94 220.492C246.075 220.081 246.253 219.728 246.473 219.432C246.693 219.135 246.962 218.907 247.279 218.746C247.597 218.585 247.967 218.505 248.39 218.505C248.822 218.505 249.205 218.59 249.539 218.759C249.873 218.924 250.155 219.161 250.383 219.47C250.612 219.774 250.783 220.143 250.897 220.574C251.012 221.002 251.069 221.478 251.069 222.002ZM249.539 222.136V222.002C249.539 221.685 249.509 221.391 249.45 221.12C249.391 220.845 249.298 220.604 249.171 220.396C249.044 220.189 248.881 220.028 248.682 219.914C248.487 219.796 248.253 219.736 247.978 219.736C247.707 219.736 247.474 219.783 247.279 219.876C247.085 219.965 246.922 220.09 246.791 220.25C246.659 220.411 246.558 220.6 246.486 220.815C246.414 221.027 246.363 221.258 246.333 221.507V222.739C246.384 223.043 246.471 223.323 246.594 223.577C246.716 223.831 246.89 224.034 247.114 224.186C247.343 224.334 247.635 224.408 247.99 224.408C248.265 224.408 248.5 224.349 248.695 224.23C248.889 224.112 249.048 223.949 249.171 223.742C249.298 223.53 249.391 223.287 249.45 223.012C249.509 222.737 249.539 222.445 249.539 222.136Z"
                            fill="white"/>
                    </g>
                    <defs>
                        <filter id="filter0_ddi_14808_8263" x="0" y="0" width="450" height="366"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feMorphology radius="30" operator="erode" in="SourceAlpha"
                                          result="effect1_dropShadow_14808_8263"/>
                            <feOffset dy="30"/>
                            <feGaussianBlur stdDeviation="25"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.288723 0 0 0 0 0.288593 0 0 0 0 0.288593 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14808_8263"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feMorphology radius="20" operator="erode" in="SourceAlpha"
                                          result="effect2_dropShadow_14808_8263"/>
                            <feOffset dy="30"/>
                            <feGaussianBlur stdDeviation="35"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.196078 0 0 0 0 0.196078 0 0 0 0 0.364706 0 0 0 0.15 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow_14808_8263"
                                     result="effect2_dropShadow_14808_8263"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_14808_8263"
                                     result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="-2"/>
                            <feGaussianBlur stdDeviation="5"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.243975 0 0 0 0 0.433631 0 0 0 0 0.623287 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="shape" result="effect3_innerShadow_14808_8263"/>
                        </filter>
                        <filter id="filter1_d_14808_8263" x="76" y="63" width="300" height="38"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14808_8263"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14808_8263"
                                     result="shape"/>
                        </filter>
                        <filter id="filter2_d_14808_8263" x="77.3965" y="135" width="298.604" height="38"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14808_8263"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14808_8263"
                                     result="shape"/>
                        </filter>
                        <filter id="filter3_d_14808_8263" x="84" y="201" width="292" height="43"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                           result="hardAlpha"/>
                            <feOffset dy="1"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix"
                                           values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14808_8263"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14808_8263"
                                     result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_14808_8263" x1="109.542" y1="240.996" x2="379.527"
                                        y2="197.407"
                                        gradientUnits="userSpaceOnUse">
                            <stop offset="0.33" stopColor="#00D2D3"/>
                            <stop offset="1" stopColor="#3593FF"/>
                        </linearGradient>
                        <clipPath id="clip0_14808_8263">
                            <rect x="79.3965" y="136" width="294.604" height="34" rx="3" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </>
    );
}

export default Lisence;