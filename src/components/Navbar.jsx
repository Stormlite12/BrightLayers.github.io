import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar-area w-auto h-[10.375rem] px-20 flex justify-between items-center">
          <div className="min-[320px]:w-[14.23875rem] min-[320px]:h-[0.77156rem] md:w-[20.75rem] md:h-[1.125rem] md:top-[5.75rem] items-center inline-flex overflow-hidden">
            <div className="md:w-[20.7494rem] md:h-[1.1244rem] min-[320px]:w-[14.23875rem] min-[320px]:h-[0.77156rem]">  <svg viewBox="0 0 332 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M145.634 7.82654C147.017 7.82654 148.399 7.84156 149.777 7.81653C150.322 7.80653 150.553 8.02171 150.533 8.55215C150.438 11.2444 149.767 13.7215 147.738 15.6481C146.36 16.9491 144.703 17.6397 142.819 17.8849C141.051 18.1151 139.348 17.94 137.715 17.2644C134.845 16.0834 133.167 13.8866 132.586 10.8891C132.205 8.93747 132.346 6.98084 133.172 5.1393C134.454 2.27191 136.703 0.645559 139.784 0.140138C141.662 -0.165117 143.49 0.0250417 145.248 0.740638C147.462 1.64139 149.055 3.17266 149.887 5.45457C150.077 5.975 149.937 6.12012 149.406 6.10511C148.364 6.07508 147.322 6.0901 146.28 6.1001C145.975 6.1001 145.774 6.00502 145.594 5.7298C144.723 4.42871 143.46 3.80319 141.918 3.6931C140.315 3.578 138.887 4.00836 137.79 5.19935C136.643 6.44039 136.273 7.94664 136.438 9.62304C136.533 10.6039 136.823 11.4896 137.395 12.2903C138.562 13.9216 140.23 14.4471 142.123 14.2869C143.921 14.1368 145.279 13.2361 146.03 11.5396C146.29 10.9541 146.26 10.8991 145.629 10.8941C144.207 10.8941 142.784 10.8791 141.367 10.8991C140.911 10.9041 140.71 10.759 140.73 10.2836C140.76 9.68309 140.766 9.08259 140.73 8.48209C140.695 7.93163 140.936 7.80152 141.437 7.81153C142.839 7.83655 144.242 7.82154 145.639 7.82154L145.634 7.82654Z" fill="#1A3F60"/>
                <path d="M87.9817 8.7523C89.1988 9.3428 89.9802 10.2335 90.3108 11.4796C91.0321 14.2068 89.5144 16.6539 86.6593 17.3695C85.9831 17.5396 85.2969 17.6347 84.5907 17.6347C82.1113 17.6197 79.6268 17.6147 77.1474 17.6347C76.5914 17.6397 76.4312 17.4546 76.4312 16.9091C76.4462 11.6297 76.4462 6.3503 76.4312 1.0709C76.4312 0.500427 76.6415 0.365315 77.1675 0.370319C79.747 0.390336 82.3316 0.325281 84.9112 0.400344C86.7595 0.45539 88.4074 1.08592 89.4092 2.78233C90.436 4.53379 90.1606 7.20602 87.9867 8.7523H87.9817ZM82.6222 14.432C83.2232 14.432 83.8193 14.447 84.4203 14.432C85.4872 14.407 86.2837 13.6814 86.4039 12.6506C86.5241 11.6297 85.903 10.7239 84.8311 10.5288C83.4486 10.2786 82.0461 10.4537 80.6537 10.4387C80.3381 10.4387 80.3581 10.7039 80.3531 10.9241C80.3531 11.9199 80.3631 12.9208 80.3481 13.9166C80.3431 14.3119 80.5034 14.447 80.8841 14.437C81.4651 14.417 82.0411 14.437 82.6222 14.437V14.432ZM82.542 3.57799C81.981 3.57799 81.42 3.588 80.864 3.57799C80.5134 3.56798 80.3531 3.69309 80.3581 4.0634C80.3732 5.00418 80.3681 5.94496 80.3581 6.88074C80.3581 7.20602 80.4733 7.35614 80.8139 7.35614C81.8959 7.34613 82.9778 7.38617 84.0547 7.34113C85.1967 7.29609 85.9781 6.43537 85.933 5.34947C85.893 4.31861 85.1066 3.59801 83.9846 3.583C83.5037 3.57799 83.0229 3.583 82.542 3.583V3.57799Z" fill="#1A3F60"/>
                <path d="M98.3097 8.94247C98.3097 6.36032 98.3097 3.77817 98.3097 1.20102C98.3097 0.390347 98.3097 0.385343 99.0911 0.385343C101.535 0.385343 103.98 0.320288 106.419 0.400355C109.079 0.49043 111.308 1.86658 112.009 4.61887C112.635 7.08593 111.924 10.1735 109.279 11.4496C108.969 11.5997 109.004 11.7448 109.159 12.005C110.116 13.5713 111.057 15.1476 111.989 16.724C112.134 16.9692 112.46 17.2494 112.315 17.5046C112.164 17.7698 111.764 17.6197 111.473 17.6247C110.471 17.6397 109.47 17.6147 108.468 17.6347C108.067 17.6447 107.822 17.5346 107.616 17.1543C106.815 15.6831 105.963 14.2419 105.142 12.7807C104.911 12.3703 104.621 12.2102 104.13 12.2152C102.337 12.2352 102.337 12.2152 102.337 14.0017C102.337 15.0225 102.327 16.0434 102.337 17.0642C102.342 17.4696 102.202 17.6447 101.781 17.6347C100.819 17.6147 99.8575 17.6097 98.8958 17.6347C98.4049 17.6497 98.2847 17.4346 98.2897 16.9892C98.3047 14.3069 98.2947 11.6247 98.2947 8.94748L98.3097 8.94247ZM102.227 6.32529C102.227 7.02588 102.227 7.72646 102.227 8.42704C102.227 8.65724 102.237 8.90744 102.547 8.89744C103.825 8.86241 105.112 9.06758 106.374 8.76232C107.581 8.47208 108.282 7.35115 108.157 6.00503C108.042 4.769 107.17 3.87825 105.928 3.82321C104.851 3.77817 103.764 3.8182 102.683 3.80819C102.347 3.80819 102.217 3.94831 102.222 4.27859C102.232 4.95915 102.222 5.63972 102.222 6.32029L102.227 6.32529Z" fill="#1A3F60"/>
                <path d="M297.193 8.99753C297.193 6.37534 297.208 3.75316 297.183 1.13598C297.178 0.575511 297.333 0.365336 297.925 0.375344C300.389 0.405369 302.853 0.320298 305.313 0.405369C307.982 0.500448 310.201 1.87659 310.898 4.62889C311.519 7.08594 310.822 10.1685 308.163 11.4596C307.847 11.6147 307.897 11.7648 308.053 12.015C308.994 13.5663 309.921 15.1276 310.853 16.6839C310.913 16.789 310.978 16.8891 311.038 16.9942C311.378 17.6047 311.363 17.6297 310.662 17.6347C309.52 17.6347 308.378 17.6347 307.236 17.6347C306.961 17.6347 306.745 17.5847 306.595 17.3095C305.789 15.8632 304.952 14.4371 304.151 12.9859C303.87 12.4754 303.57 12.1852 302.903 12.2052C301.24 12.2653 301.235 12.2252 301.235 13.8866C301.235 14.9475 301.225 16.0084 301.235 17.0693C301.24 17.4796 301.09 17.6447 300.674 17.6347C299.733 17.6197 298.791 17.6047 297.849 17.6397C297.293 17.6597 297.183 17.4145 297.188 16.9241C297.203 14.2819 297.198 11.6397 297.198 9.00253L297.193 8.99753ZM301.11 6.36033C301.11 7.0409 301.11 7.72147 301.11 8.40203C301.11 8.65725 301.125 8.91246 301.471 8.89745C302.728 8.85741 303.995 9.05758 305.238 8.76233C306.47 8.46709 307.191 7.31613 307.041 5.965C306.9 4.70395 305.989 3.84824 304.717 3.81821C303.695 3.79319 302.673 3.82822 301.651 3.8032C301.22 3.79319 301.09 3.97334 301.105 4.37368C301.125 5.03423 301.11 5.69478 301.11 6.35533V6.36033Z" fill="#1A3F60"/>
                <path d="M37.096 8.99752C37.096 11.6197 37.0759 14.2419 37.111 16.8641C37.116 17.4796 36.9206 17.6697 36.3196 17.6397C35.4831 17.5947 34.6366 17.6097 33.7951 17.6397C33.3192 17.6547 33.169 17.4746 33.174 17.0092C33.189 15.1076 33.164 13.206 33.189 11.3044C33.194 10.799 33.0237 10.6489 32.5328 10.6589C30.7497 10.6839 28.9665 10.6889 27.1883 10.6589C26.6474 10.6489 26.5071 10.8391 26.5121 11.3545C26.5372 13.196 26.4971 15.0376 26.5372 16.8791C26.5522 17.5046 26.3318 17.6748 25.7408 17.6497C24.8592 17.6097 23.9776 17.6247 23.0961 17.6447C22.6753 17.6547 22.48 17.5296 22.48 17.0692C22.49 11.7048 22.49 6.34031 22.48 0.975837C22.48 0.530466 22.6453 0.375337 23.081 0.385345C24.0227 0.405362 24.9644 0.410366 25.9061 0.385345C26.3819 0.370332 26.5322 0.550482 26.5272 1.01587C26.5071 2.79735 26.5372 4.57884 26.5121 6.36032C26.5071 6.86575 26.6774 7.01587 27.1683 7.00586C28.9515 6.98084 30.7347 6.97584 32.5128 7.00586C33.0538 7.01587 33.194 6.82571 33.189 6.31028C33.164 4.58885 33.204 2.86741 33.164 1.14598C33.1489 0.520457 33.3693 0.345311 33.9604 0.375337C34.7768 0.41537 35.6033 0.41537 36.4248 0.375337C36.9657 0.350316 37.106 0.560491 37.106 1.07592C37.0859 3.71812 37.096 6.36032 37.096 9.00253V8.99752Z" fill="#1A3F60"/>
                <path d="M158.276 8.98254C158.276 6.36035 158.291 3.73817 158.266 1.11598C158.261 0.530493 158.452 0.345339 159.023 0.37036C159.924 0.410393 160.826 0.39538 161.727 0.37036C162.173 0.360351 162.323 0.530493 162.318 0.97086C162.303 2.75234 162.328 4.53383 162.303 6.31531C162.293 6.85076 162.469 7.00088 162.995 6.99588C164.778 6.97086 166.561 6.97086 168.339 6.99588C168.85 7.00088 168.99 6.81573 168.98 6.33533C168.96 4.6139 168.97 2.89246 168.97 1.17103C168.97 0.385372 168.97 0.385372 169.782 0.380368C170.603 0.380368 171.425 0.39538 172.246 0.375364C172.692 0.365355 172.897 0.49046 172.892 0.980868C172.882 6.32532 172.882 11.6698 172.892 17.0142C172.892 17.4896 172.722 17.6498 172.261 17.6347C171.38 17.6097 170.498 17.6047 169.616 17.6347C169.115 17.6498 168.955 17.4646 168.96 16.9742C168.98 15.0926 168.95 13.2111 168.98 11.3295C168.99 10.794 168.815 10.6439 168.289 10.6489C166.506 10.6739 164.723 10.6739 162.945 10.6489C162.434 10.6439 162.298 10.8291 162.303 11.3095C162.323 13.151 162.313 14.9925 162.313 16.8341C162.313 17.6197 162.313 17.6197 161.502 17.6247C160.64 17.6247 159.779 17.6047 158.917 17.6347C158.411 17.6548 158.266 17.4496 158.266 16.9692C158.281 14.307 158.276 11.6448 158.276 8.98254Z" fill="#1A3F60"/>
                <path d="M320.324 12.0301C320.445 12.0301 320.565 12.0401 320.685 12.0301C321.582 11.93 322.333 11.945 322.488 13.151C322.573 13.8166 323.214 14.1819 323.831 14.4171C324.732 14.7624 325.669 14.7824 326.595 14.5121C327.292 14.312 327.813 13.8916 327.948 13.141C328.068 12.4754 327.662 11.7498 326.966 11.3645C326.065 10.8641 325.068 10.6489 324.076 10.4187C322.689 10.0935 321.351 9.6581 320.204 8.76235C318.847 7.70647 318.351 6.27528 318.501 4.63892C318.762 1.77153 321.061 0.440418 323.32 0.13016C325.053 -0.105036 326.761 -0.0449864 328.374 0.650593C330.207 1.44626 331.334 2.84742 331.619 4.8541C331.73 5.62974 331.624 5.72983 330.853 5.72983C330.052 5.72983 329.25 5.71982 328.449 5.72983C328.088 5.73483 327.898 5.66477 327.798 5.23441C327.492 3.92832 326.651 3.32782 325.273 3.32282C324.597 3.32282 323.921 3.27278 323.285 3.63308C322.734 3.94334 322.398 4.36369 322.378 5.00923C322.363 5.66477 322.724 6.09013 323.255 6.40038C324.321 7.02591 325.529 7.2561 326.706 7.56135C328.113 7.92666 329.461 8.43708 330.552 9.41289C331.755 10.4888 332.15 11.9 331.935 13.4863C331.559 16.2886 329.41 17.4646 327.011 17.8449C325.288 18.1201 323.585 18.0201 321.947 17.3845C319.813 16.5588 318.641 14.9725 318.341 12.7207C318.276 12.2202 318.441 11.965 318.992 12.0151C319.428 12.0501 319.874 12.0201 320.314 12.0201L320.324 12.0301Z" fill="#1A3F60"/>
                <path d="M246.268 17.6247C245.787 17.6247 245.306 17.6047 244.825 17.6297C244.359 17.6547 244.089 17.4996 243.939 17.0292C243.723 16.3687 243.418 15.7331 243.187 15.0776C243.067 14.7373 242.882 14.6172 242.526 14.6172C240.583 14.6272 238.639 14.6272 236.701 14.6172C236.375 14.6172 236.195 14.7323 236.08 15.0476C235.824 15.7632 235.519 16.4587 235.263 17.1693C235.153 17.4746 234.998 17.6297 234.657 17.6247C233.555 17.6147 232.453 17.6147 231.351 17.6247C230.881 17.6297 230.886 17.4446 231.031 17.0742C232.418 13.6114 233.791 10.1485 235.168 6.68059C235.904 4.82904 236.646 2.9775 237.352 1.11094C237.557 0.570494 237.818 0.320286 238.434 0.365323C239.29 0.425373 240.157 0.405357 241.014 0.370327C241.454 0.355315 241.67 0.550478 241.815 0.92579C243.268 4.61887 244.725 8.30694 246.188 12C246.849 13.6664 247.505 15.3378 248.191 16.9992C248.402 17.5046 248.261 17.6497 247.761 17.6297C247.26 17.6147 246.759 17.6297 246.258 17.6297L246.268 17.6247ZM239.646 5.39952C239.571 5.52963 239.536 5.57967 239.516 5.63471C238.82 7.45623 238.133 9.27775 237.427 11.0943C237.282 11.4696 237.412 11.5546 237.753 11.5546C238.729 11.5496 239.711 11.5546 240.688 11.5546C242.02 11.5546 242.025 11.5546 241.549 10.3186C240.933 8.71228 240.307 7.11094 239.646 5.40452V5.39952Z" fill="#1A3F60"/>
                <path d="M46.037 8.9725C46.037 6.37033 46.052 3.76816 46.027 1.16599C46.022 0.585507 46.1572 0.360319 46.7933 0.365323C50.0792 0.395348 53.36 0.395348 56.6459 0.365323C57.267 0.360319 57.4573 0.56549 57.4172 1.16099C57.3721 1.79652 57.3822 2.44205 57.4172 3.08259C57.4423 3.56299 57.2419 3.7031 56.7811 3.7031C54.7775 3.68809 52.774 3.71812 50.7754 3.68309C50.2094 3.67308 50.0391 3.86824 50.0692 4.40869C50.1092 5.10928 50.1143 5.80986 50.0692 6.51044C50.0291 7.11094 50.2695 7.25106 50.8305 7.24105C52.5736 7.21103 54.3167 7.24606 56.0548 7.22104C56.6158 7.21103 56.8612 7.36115 56.8212 7.95665C56.7761 8.57216 56.7761 9.19768 56.8212 9.8182C56.8612 10.4137 56.6158 10.5638 56.0548 10.5538C54.3117 10.5238 52.5686 10.5638 50.8305 10.5338C50.2695 10.5238 50.0291 10.6639 50.0692 11.2644C50.1193 12 50.1092 12.7456 50.0692 13.4863C50.0391 14.0267 50.2044 14.2219 50.7704 14.2119C52.8541 14.1818 54.9378 14.2119 57.0165 14.1868C57.5825 14.1818 57.8129 14.342 57.7779 14.9275C57.7328 15.6431 57.7578 16.3687 57.7679 17.0893C57.7729 17.4646 57.6376 17.6347 57.2469 17.6297C53.6806 17.6247 50.1193 17.6197 46.5529 17.6297C46.037 17.6297 46.037 17.3245 46.037 16.9592C46.037 14.2969 46.037 11.6347 46.037 8.9725Z" fill="#1A3F60"/>
                <path d="M277.368 9.02251C277.368 6.38031 277.378 3.73811 277.358 1.0959C277.358 0.555455 277.518 0.3703 278.074 0.3703C281.4 0.390317 284.721 0.390317 288.047 0.3703C288.563 0.3703 288.773 0.515421 288.743 1.05087C288.708 1.6914 288.698 2.33193 288.743 2.97247C288.788 3.57797 288.523 3.70808 287.972 3.70308C286.028 3.67806 284.085 3.71309 282.146 3.68306C281.58 3.67305 281.355 3.82818 281.395 4.41867C281.44 5.13427 281.43 5.85987 281.395 6.58048C281.37 7.07589 281.545 7.24103 282.046 7.23602C283.849 7.211 285.653 7.24103 287.451 7.216C287.977 7.211 288.172 7.37614 288.142 7.90658C288.107 8.56713 288.112 9.22768 288.142 9.88823C288.162 10.3786 287.987 10.5538 287.486 10.5488C285.683 10.5288 283.879 10.5588 282.081 10.5288C281.555 10.5188 281.37 10.6789 281.395 11.2093C281.435 12.01 281.425 12.8107 281.395 13.6113C281.38 14.0617 281.55 14.2018 281.991 14.1968C284.115 14.1818 286.239 14.2068 288.357 14.1768C288.944 14.1668 289.134 14.362 289.104 14.9324C289.064 15.653 289.084 16.3736 289.099 17.0942C289.109 17.4796 288.943 17.6247 288.563 17.6247C285.017 17.6197 281.475 17.6147 277.929 17.6247C277.398 17.6247 277.363 17.3394 277.363 16.9391C277.368 14.2969 277.363 11.6547 277.363 9.0125L277.368 9.02251Z" fill="#1A3F60"/>
                <path d="M262.021 7.36115C262.507 6.49543 262.952 5.72479 263.378 4.93914C264.104 3.58801 264.831 2.23188 265.532 0.865741C265.707 0.520453 265.918 0.365324 266.318 0.375332C267.44 0.400353 268.557 0.390345 269.679 0.380336C270.105 0.380336 270.295 0.465407 270.03 0.925791C268.091 4.31862 266.163 7.71645 264.23 11.1093C264.059 11.4095 263.974 11.7248 263.979 12.0801C263.989 13.7014 263.969 15.3178 263.994 16.9391C264.004 17.4546 263.849 17.6597 263.313 17.6347C262.496 17.5997 261.67 17.5947 260.854 17.6347C260.263 17.6647 260.032 17.4946 260.057 16.8641C260.102 15.6681 259.997 14.4571 260.092 13.2661C260.192 12.0551 259.772 11.0642 259.186 10.0634C257.688 7.50127 256.24 4.90411 254.773 2.32195C254.487 1.82154 254.207 1.31111 253.916 0.815699C253.731 0.505441 253.816 0.380336 254.167 0.380336C255.389 0.380336 256.606 0.380336 257.828 0.380336C258.104 0.380336 258.264 0.505441 258.394 0.740637C259.381 2.56716 260.373 4.38868 261.364 6.20519C261.56 6.56549 261.775 6.91578 262.031 7.35615L262.021 7.36115Z" fill="#1A3F60"/>
                <path d="M7.48843 0.380343C9.75246 0.380343 12.0165 0.395356 14.2755 0.370335C14.8365 0.365331 15.0118 0.555489 14.9868 1.09594C14.9517 1.89661 14.9617 2.69727 14.9868 3.49794C14.9968 3.91829 14.8265 4.05841 14.4157 4.05841C12.9732 4.0434 11.5306 4.07342 10.0881 4.0434C9.58216 4.03339 9.44191 4.21354 9.44191 4.70395C9.45693 8.7273 9.45192 12.7507 9.45192 16.774C9.45192 17.6247 9.45192 17.6247 8.58538 17.6247C7.80399 17.6247 7.02261 17.5947 6.24122 17.6347C5.68022 17.6647 5.52495 17.4446 5.52995 16.9091C5.54498 12.9458 5.53997 8.98251 5.53997 5.01921C5.53997 4.37534 5.21272 4.0534 4.55823 4.0534C3.27595 4.0534 1.99367 4.02838 0.711391 4.06341C0.145385 4.07842 -0.0199084 3.86825 0.000127157 3.3328C0.0351895 2.55215 0.0301806 1.7715 0.000127157 0.990852C-0.0148995 0.515456 0.180448 0.375339 0.641267 0.375339C2.92533 0.390352 5.20938 0.380343 7.48843 0.380343Z" fill="#1A3F60"/>
                <path d="M189.953 10.839C189.953 12.8407 189.933 14.8424 189.963 16.844C189.973 17.4295 189.827 17.6797 189.196 17.6397C188.4 17.5896 187.593 17.5896 186.797 17.6397C186.166 17.6797 186.026 17.4295 186.031 16.844C186.051 12.9007 186.041 8.95746 186.041 5.01417C186.041 4.37697 185.71 4.05837 185.049 4.05837C183.747 4.05837 182.444 4.04336 181.142 4.06338C180.686 4.06838 180.486 3.93327 180.501 3.44787C180.531 2.62718 180.521 1.8065 180.501 0.985814C180.491 0.560459 180.626 0.375305 181.082 0.375305C185.69 0.385314 190.293 0.385314 194.901 0.375305C195.297 0.375305 195.492 0.490401 195.482 0.92076C195.462 1.78148 195.462 2.64219 195.482 3.50291C195.492 3.92827 195.307 4.05837 194.906 4.05337C193.544 4.03836 192.182 4.05337 190.819 4.05337C190.238 4.05337 189.948 4.35195 189.948 4.94912C189.948 6.91075 189.948 8.87239 189.948 10.834L189.953 10.839Z" fill="#1A3F60"/>
                <path d="M213.675 9.00753C213.675 6.39034 213.69 3.76816 213.66 1.15098C213.655 0.540469 213.84 0.340302 214.446 0.370327C215.283 0.415365 216.129 0.410361 216.966 0.370327C217.542 0.340302 217.722 0.535465 217.722 1.11595C217.702 4.99418 217.707 8.87241 217.712 12.7556C217.712 14.1268 217.542 13.9466 218.939 13.9516C220.757 13.9617 222.581 13.9767 224.399 13.9416C225.02 13.9266 225.205 14.1418 225.17 14.7323C225.125 15.5079 225.145 16.2936 225.165 17.0692C225.175 17.4846 225.005 17.6297 224.599 17.6297C221.158 17.6197 217.717 17.6197 214.276 17.6297C213.785 17.6297 213.67 17.4245 213.67 16.9842C213.685 14.327 213.675 11.6647 213.675 9.00753Z" fill="#1A3F60"/>
                <path d="M124.456 9.0726C124.456 11.6698 124.436 14.2719 124.471 16.8691C124.481 17.4896 124.271 17.6698 123.68 17.6397C122.783 17.5947 121.882 17.6147 120.98 17.6347C120.564 17.6447 120.419 17.4746 120.419 17.0693C120.429 11.6898 120.429 6.3153 120.419 0.935818C120.419 0.515468 120.589 0.375351 120.99 0.380356C121.932 0.395368 122.868 0.405376 123.81 0.380356C124.306 0.365343 124.466 0.550497 124.466 1.04091C124.451 3.71814 124.456 6.40037 124.456 9.0776V9.0726Z" fill="#1A3F60"/>
                  </svg>
            </div>  
          </div>

          <div className="flex items-center space-x-8 min-[320px]:hidden md:flex">
            
            <NavLink to='/#about' className={({ isActive }) =>
              `text-lg font-medium font-title text-[#535353] ${
              isActive ? "font-extrabold" : "font-medium"
              }`}>
              About
            </NavLink>
            
            <NavLink to='/#service' className={({ isActive }) =>
              `text-lg font-medium font-title text-[#535353] ${
              isActive ? "font-extrabold" : "font-medium"
              }`}>
              Service
            </NavLink>
            
            <NavLink to='/#blog' className={({ isActive }) =>
              `text-lg font-medium font-title text-[#535353] ${
              isActive ? "font-extrabold" : "font-medium"
              }`}>
              Blog
            </NavLink>
            
            <a href="/LetsTalk"
                className="flex items-center justify-center w-[6.875rem] h-[1.875rem] text-white bg-[#2c3e50] rounded-[0.3125rem] text-lg font-medium font-title shadow-[0rem_0.25rem_0.5062rem_rgba(0,0,0,0.25)] border"
            >
              let’s talk
            </a>

          </div>

      </div>
  )
}

export default Navbar