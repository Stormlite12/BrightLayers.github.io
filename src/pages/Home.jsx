import home1 from "../assets/home1.jpg";
// import ContactForm from "./ContactForm.jsx";
import image from "../assets/image.png";
import DropDown from "../functions/DropDown.jsx";
import { AnimatedLogo } from "../functions/AnimatedLogo.jsx";
import rectangle from "../assets/rectangle.png";
import InfiniteScrollCarousel from "../components/Card/InfiniteScrollCarousel.jsx";
import FounderBio from "../components/FounderBio.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

function Home() {
  return (


    <div className="w-auto h-auto bg-[#ecf0f1] overflow-hidden  z-[-1]">
      
    <Navbar />
      <div className="w-auto flex items-center justify-center h-[500px] BrightLayers">
        <div className="w-[1215px] text-center">
          <span className="text-[#303338] text-[55px] font-medium, font-pSans leading-[64.90px] tracking-wide ">
            We are Bright Layers, a dynamic social media agency since 2019,
            dedicated to elevating brands through creative content and strategic
            digital marketing
          </span>
          <span className="text-[#303338] text-[66px] font-medium font-pSans leading-[77.88px] tracking-wide">
            {" "}
          </span>
          <span className="text-[#303338] text-[49px] font-medium font-pSans leading-[57.82px] tracking-wide">
            ツ
          </span>
        </div>
      </div>
      <div className="w-full h-[222px] flex justify-end mt-36">
        <img
          src={home1}
          className="w-[1200px] h-[222px] object-cover"
          alt="assets"
        />
      </div>

      <div className="w-auto h-[324px] flex flex-col mt-36 px-4">
        <div
          className="w-[860px] m-auto h-[19px] text-left text-[#da5428] 
                      text-[25px] font-semibold font-pSans
                      capitalize leading-[29.5px] tracking-tight"
        >
          What Do We Do?
        </div>

        <div
          className="w-[860px] h-[364px] text-[#535353] 
                    text-[24.5px] font-medium font-title leading-9 tracking-tight text-left mt-4 mx-auto"
        >
          In the last 5 years, the country has seen trendsetting marketing
          campaigns — but what&apos;s missing is &quot;the beyonds&quot; of a
          campaign. Does it end after a post, a hoarding, an ad? So we just want
          likes & comments? Maybe an app download? No. That can&apos;t be all.
          <br />
          <br />
          There&apos;s more to your brand than this — and we want to bring that
          to the front too. Beyond just campaigns. Just like our name, we are
          here to brighten up your social media presence with a layered approach
          that works exclusively for you.
        </div>
        <div className="flex justify-end">
          <a
            href="#examples"
            className="w-[151px] h-[29px] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4"
          >
            check examples
          </a>
        </div>
      </div>
      <div className="w-full h-[222px] flex justify-start mt-40">
        <img
          src={image}
          alt="assets"
          className="w-[1200px] h-[222px] object-cover"
        />
      </div>
      <div className="w-auto h-[324px] flex flex-col mt-36 px-4">
        <div
          className="w-[860px] m-auto h-[19px] text-left text-[#da5428] 
                          text-[25px] font-semibold font-pSans
                          capitalize leading-[29.5px] tracking-tight"
        >
          How Do We Do It?
        </div>
        <div
          className="w-[860px] h-[364px] text-[#535353] 
                                text-[24.5px] font-medium font-title leading-9 tracking-tight text-left mt-4 mx-auto"
        >
          Our approach is different - a boutique-style agency that prioritizes
          understanding our clients as intimately as our own business. This
          approach has not only made us experts in our field but has allowed us
          to build genuine partnerships.
        </div>
        <div className="flex justify-end " id="service">
          <a
            href="#examples"
            className="w-[151px] h-[156px] text-[#535353] text-xl font-semibold font-title underline leading-relaxed tracking-tight mb-4"
          >
            check services  
          </a>
        </div>
      </div>
      <div className="w-[550px] h-[137px] text-[#303338] text-[45px] font-semibold font-pSans leading-4 tracking-tight mt-10 ml-[146px]" >
        Service We Provide For Your Brand
        <span className="text-[#303338] text-[66px] font-medium font-pSans leading-[77.88px] tracking-wide">
          {" "}
        </span>
        <span className="text-[#303338] text-[47px] font-bold font-pSans leading-[57.82px] tracking-wide">
          ツ
        </span>
        <AnimatedLogo />
      </div>
      <div className="flex items-center justify-between">
        <DropDown />
        <div className="flex self-start -my-24">
          <img src={rectangle} alt="image" className="mr-[80px]" />
        </div>
      </div>

{/*  Are you the one with form part  */}
      <div>

        <div className="flex flex-col items-center justify-center h-[100vh] bg-[#f5f5f5]">
          <div className="w-[550px] h-[70px] text-center text-[#303338] text-[49.43px] font-semibold font-['Public Sans'] leading-[58.33px] tracking-wide ">The Perfect Match!!</div>
          <div className="w-[560px] h-[137px] text-center text-[#ff8312] text-4xl font-medium font-['Public Sans'] lowercase leading-[43.20px] tracking-tight"> Are You The One?</div>

          <div className="w-[1139px] h-[313px] text-center text-[#535353] text-[25px] font-medium font-['Lato'] leading-snug tracking-tight">
            Our ideal customer personas are small to medium-sized business
            owners, marketing managers, and ad moguls looking to make their
            brand be seen. They value the power of strategy with creativity, and
            believe in results, rather than buzz. <br />
            <br />
            If you&apos;re that persona looking to navigate the digital
            marketing scene and give your brand the visibility it deserves,
            you&apos;re the one for us. Hope we&apos;re the one for you too.
          </div>

          <div className="flex flex-row items-center justify-center space-x-12">
            <div className="space-x-4 flex justify-center items-center align-top flex-row group">
              <div className="w-[200px] h-[110px] text-right text-[#303338] flex justify-end text-[49.43px] font-semibold font-[Public Sans] leading-[58.33px] tracking-wide">
                Take 
                <br />  The Call
              </div>

              <div className="flex flex-col items-center space-y-6">
                <svg
                  className="transition ease-in-out duration-700 group-hover:-rotate-12"
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                >
                  <path
                    d="M28 15C28.5304 15 29.0391 15.2107 29.4142 15.5858C29.7893 15.9609 30 16.4696 30 17V33C30 35.1217 29.1571 37.1566 27.6569 38.6569C26.1566 40.1571 24.1217 41 22 41H10C7.87827 41 5.84344 40.1571 4.34315 38.6569C2.84285 37.1566 2 35.1217 2 33V17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15H32C34.1217 15 36.1566 15.8429 37.6569 17.3431C39.1571 18.8434 40 20.8783 40 23C40 25.1217 39.1571 27.1566 37.6569 28.6569C36.1566 30.1571 34.1217 31 32 31H30"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V6"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 2V6"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 2V6"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <svg
                  width="66"
                  height="34"
                  viewBox="0 0 66 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.616477 2.14062V0.818182H8.49645V2.14062H5.3196V11H3.78835V2.14062H0.616477ZM10.9377 11V0.818182H17.3213V2.14062H12.474V5.2429H16.9882V6.56037H12.474V9.67756H17.3809V11H10.9377ZM20.9334 11H19.3027L22.9668 0.818182H24.7416L28.4057 11H26.775L23.8964 2.66761H23.8169L20.9334 11ZM21.2068 7.01278H26.4966V8.3054H21.2068V7.01278ZM43.8256 5.90909C43.8256 6.99621 43.6267 7.93087 43.229 8.71307C42.8312 9.49195 42.286 10.0919 41.5933 10.5128C40.9039 10.9304 40.1201 11.1392 39.2418 11.1392C38.3601 11.1392 37.573 10.9304 36.8803 10.5128C36.1909 10.0919 35.6473 9.49029 35.2496 8.7081C34.8518 7.9259 34.653 6.9929 34.653 5.90909C34.653 4.82197 34.8518 3.88897 35.2496 3.11008C35.6473 2.32789 36.1909 1.72798 36.8803 1.31037C37.573 0.889441 38.3601 0.678977 39.2418 0.678977C40.1201 0.678977 40.9039 0.889441 41.5933 1.31037C42.286 1.72798 42.8312 2.32789 43.229 3.11008C43.6267 3.88897 43.8256 4.82197 43.8256 5.90909ZM42.3043 5.90909C42.3043 5.08049 42.17 4.38281 41.9016 3.81605C41.6364 3.24598 41.2718 2.8151 40.8078 2.52344C40.3471 2.22846 39.8251 2.08097 39.2418 2.08097C38.6551 2.08097 38.1314 2.22846 37.6707 2.52344C37.21 2.8151 36.8455 3.24598 36.577 3.81605C36.3118 4.38281 36.1793 5.08049 36.1793 5.90909C36.1793 6.73769 36.3118 7.43703 36.577 8.0071C36.8455 8.57386 37.21 9.00473 37.6707 9.29972C38.1314 9.59138 38.6551 9.73722 39.2418 9.73722C39.8251 9.73722 40.3471 9.59138 40.8078 9.29972C41.2718 9.00473 41.6364 8.57386 41.9016 8.0071C42.17 7.43703 42.3043 6.73769 42.3043 5.90909ZM46.4409 11V0.818182H50.0701C50.859 0.818182 51.5136 0.954072 52.0339 1.22585C52.5576 1.49763 52.9487 1.87382 53.2072 2.3544C53.4657 2.83168 53.595 3.38352 53.595 4.00994C53.595 4.63305 53.4641 5.18158 53.2022 5.65554C52.9437 6.12618 52.5526 6.49242 52.0289 6.75426C51.5086 7.0161 50.854 7.14702 50.0652 7.14702H47.3159V5.82457H49.926C50.4231 5.82457 50.8275 5.75331 51.139 5.6108C51.4539 5.46828 51.6842 5.26113 51.8301 4.98935C51.9759 4.71757 52.0488 4.3911 52.0488 4.00994C52.0488 3.62547 51.9743 3.29238 51.8251 3.01065C51.6793 2.72893 51.4489 2.51349 51.1341 2.36435C50.8225 2.21188 50.4132 2.13565 49.9061 2.13565H47.9771V11H46.4409ZM51.4672 6.40625L53.9828 11H52.2328L49.7669 6.40625H51.4672ZM9.57528 24.1293H8.02415C7.96449 23.7978 7.85346 23.5062 7.69105 23.2543C7.52865 23.0024 7.32978 22.7886 7.09446 22.6129C6.85914 22.4373 6.59564 22.3047 6.30398 22.2152C6.01563 22.1257 5.70904 22.081 5.38423 22.081C4.79759 22.081 4.27225 22.2285 3.80824 22.5234C3.34754 22.8184 2.98295 23.2509 2.71449 23.821C2.44934 24.3911 2.31676 25.0871 2.31676 25.9091C2.31676 26.7377 2.44934 27.437 2.71449 28.0071C2.98295 28.5772 3.3492 29.008 3.81321 29.2997C4.27723 29.5914 4.79924 29.7372 5.37926 29.7372C5.70076 29.7372 6.00568 29.6941 6.29403 29.608C6.5857 29.5185 6.8492 29.3875 7.08452 29.2152C7.31984 29.0429 7.5187 28.8324 7.68111 28.5838C7.84683 28.3319 7.96117 28.0436 8.02415 27.7188L9.57528 27.7237C9.49242 28.2242 9.33168 28.6849 9.09304 29.1058C8.85772 29.5234 8.55445 29.8847 8.18324 30.1896C7.81534 30.4912 7.39441 30.7249 6.92045 30.8906C6.4465 31.0563 5.92945 31.1392 5.36932 31.1392C4.48769 31.1392 3.70218 30.9304 3.01278 30.5128C2.32339 30.0919 1.77983 29.4903 1.3821 28.7081C0.987689 27.9259 0.790483 26.9929 0.790483 25.9091C0.790483 24.822 0.989347 23.889 1.38707 23.1101C1.7848 22.3279 2.32836 21.728 3.01776 21.3104C3.70715 20.8894 4.491 20.679 5.36932 20.679C5.90956 20.679 6.41335 20.7569 6.88068 20.9126C7.35133 21.0651 7.77391 21.2905 8.14844 21.5888C8.52296 21.8838 8.83286 22.245 9.07812 22.6726C9.32339 23.0968 9.48911 23.5824 9.57528 24.1293ZM20.958 25.9091C20.958 26.9962 20.7591 27.9309 20.3614 28.7131C19.9637 29.492 19.4185 30.0919 18.7257 30.5128C18.0364 30.9304 17.2525 31.1392 16.3742 31.1392C15.4926 31.1392 14.7054 30.9304 14.0127 30.5128C13.3233 30.0919 12.7797 29.4903 12.382 28.7081C11.9843 27.9259 11.7854 26.9929 11.7854 25.9091C11.7854 24.822 11.9843 23.889 12.382 23.1101C12.7797 22.3279 13.3233 21.728 14.0127 21.3104C14.7054 20.8894 15.4926 20.679 16.3742 20.679C17.2525 20.679 18.0364 20.8894 18.7257 21.3104C19.4185 21.728 19.9637 22.3279 20.3614 23.1101C20.7591 23.889 20.958 24.822 20.958 25.9091ZM19.4367 25.9091C19.4367 25.0805 19.3025 24.3828 19.034 23.8161C18.7688 23.246 18.4042 22.8151 17.9402 22.5234C17.4795 22.2285 16.9575 22.081 16.3742 22.081C15.7875 22.081 15.2639 22.2285 14.8032 22.5234C14.3425 22.8151 13.9779 23.246 13.7094 23.8161C13.4443 24.3828 13.3117 25.0805 13.3117 25.9091C13.3117 26.7377 13.4443 27.437 13.7094 28.0071C13.9779 28.5739 14.3425 29.0047 14.8032 29.2997C15.2639 29.5914 15.7875 29.7372 16.3742 29.7372C16.9575 29.7372 17.4795 29.5914 17.9402 29.2997C18.4042 29.0047 18.7688 28.5739 19.034 28.0071C19.3025 27.437 19.4367 26.7377 19.4367 25.9091ZM23.5733 31V20.8182H29.8872V22.1406H25.1095V25.2429H29.4348V26.5604H25.1095V31H23.5733ZM32.4764 31V20.8182H38.7903V22.1406H34.0126V25.2429H38.3379V26.5604H34.0126V31H32.4764ZM41.3795 31V20.8182H47.7631V22.1406H42.9158V25.2429H47.43V26.5604H42.9158V29.6776H47.8227V31H41.3795ZM50.5151 31V20.8182H56.8986V22.1406H52.0513V25.2429H56.5655V26.5604H52.0513V29.6776H56.9583V31H50.5151ZM61.157 28.0717V27.9773C61.1637 27.3608 61.225 26.8703 61.341 26.5057C61.4603 26.1411 61.6293 25.8461 61.8481 25.6207C62.0668 25.3954 62.3303 25.1899 62.6386 25.0043C62.8374 24.8783 63.0164 24.7375 63.1755 24.5817C63.3346 24.4259 63.4605 24.2469 63.5533 24.0447C63.6461 23.8426 63.6925 23.6188 63.6925 23.3736C63.6925 23.0786 63.6229 22.8234 63.4837 22.608C63.3445 22.3925 63.1589 22.2268 62.9269 22.1108C62.6982 21.9915 62.443 21.9318 62.1613 21.9318C61.9061 21.9318 61.6625 21.9848 61.4305 22.0909C61.1985 22.197 61.0062 22.3627 60.8538 22.5881C60.7013 22.8101 60.6135 23.0968 60.5903 23.4482H59.0789C59.1021 22.8516 59.2529 22.3478 59.5313 21.9368C59.8097 21.5225 60.1776 21.2093 60.635 20.9972C61.0957 20.785 61.6045 20.679 62.1613 20.679C62.7711 20.679 63.3048 20.7933 63.7621 21.022C64.2195 21.2474 64.5742 21.5639 64.8261 21.9716C65.0813 22.3759 65.2089 22.8482 65.2089 23.3885C65.2089 23.7597 65.1509 24.0945 65.0349 24.3928C64.9189 24.6877 64.7531 24.9512 64.5377 25.1832C64.3256 25.4152 64.0704 25.6207 63.7721 25.7997C63.4904 25.9754 63.2617 26.1577 63.086 26.3466C62.9137 26.5355 62.7877 26.7592 62.7082 27.0178C62.6286 27.2763 62.5855 27.5961 62.5789 27.9773V28.0717H61.157ZM61.9077 31.0945C61.636 31.0945 61.4023 30.9983 61.2067 30.8061C61.0112 30.6106 60.9134 30.3752 60.9134 30.1001C60.9134 29.8284 61.0112 29.5964 61.2067 29.4041C61.4023 29.2086 61.636 29.1108 61.9077 29.1108C62.1762 29.1108 62.4082 29.2086 62.6038 29.4041C62.8026 29.5964 62.9021 29.8284 62.9021 30.1001C62.9021 30.2824 62.8557 30.4498 62.7629 30.6023C62.6734 30.7514 62.554 30.8707 62.4049 30.9602C62.2558 31.0497 62.09 31.0945 61.9077 31.0945Z"
                    fill="#F97316"
                  />
                </svg>
              </div>
            </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="129"
                viewBox="0 0 3 129"
                fill="none"
              >
                <path d="M1.5 0V129" stroke="black" strokeWidth="2" />
              </svg>

            <div className="flex flex-row items-center justify-center space-x-4">
              <div className="flex flex-col items-center justify-center space-y-4">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 42V38C32 35.8783 31.1571 33.8434 29.6569 32.3431C28.1566 30.8429 26.1217 30 24 30H12C9.87827 30 7.84344 30.8429 6.34315 32.3431C4.84285 33.8434 4 35.8783 4 38V42"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M44 42V38C43.9987 36.2275 43.4087 34.5056 42.3227 33.1046C41.2368 31.7037 39.7163 30.7031 38 30.26"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 6.26001C33.7208 6.70061 35.2461 7.70141 36.3353 9.10463C37.4245 10.5078 38.0157 12.2337 38.0157 14.01C38.0157 15.7864 37.4245 17.5122 36.3353 18.9154C35.2461 20.3186 33.7208 21.3194 32 21.76"
                    stroke="#F97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="70"
                  height="32"
                  viewBox="0 0 70 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 11L0.288352 0.818182H1.90412L3.88778 8.70312H3.98224L6.04545 0.818182H7.64631L9.70952 8.7081H9.80398L11.7827 0.818182H13.4034L10.5746 11H9.02841L6.88565 3.37358H6.80611L4.66335 11H3.11222ZM15.5042 11V0.818182H17.0404V5.2429H22.1164V0.818182H23.6576V11H22.1164V6.56037H17.0404V11H15.5042ZM35.4392 5.90909C35.4392 6.99621 35.2404 7.93087 34.8426 8.71307C34.4449 9.49195 33.8997 10.0919 33.207 10.5128C32.5176 10.9304 31.7337 11.1392 30.8554 11.1392C29.9738 11.1392 29.1866 10.9304 28.4939 10.5128C27.8045 10.0919 27.261 9.49029 26.8632 8.7081C26.4655 7.9259 26.2667 6.9929 26.2667 5.90909C26.2667 4.82197 26.4655 3.88897 26.8632 3.11008C27.261 2.32789 27.8045 1.72798 28.4939 1.31037C29.1866 0.889441 29.9738 0.678977 30.8554 0.678977C31.7337 0.678977 32.5176 0.889441 33.207 1.31037C33.8997 1.72798 34.4449 2.32789 34.8426 3.11008C35.2404 3.88897 35.4392 4.82197 35.4392 5.90909ZM33.9179 5.90909C33.9179 5.08049 33.7837 4.38281 33.5152 3.81605C33.2501 3.24598 32.8855 2.8151 32.4215 2.52344C31.9608 2.22846 31.4388 2.08097 30.8554 2.08097C30.2688 2.08097 29.7451 2.22846 29.2844 2.52344C28.8237 2.8151 28.4591 3.24598 28.1907 3.81605C27.9255 4.38281 27.7929 5.08049 27.7929 5.90909C27.7929 6.73769 27.9255 7.43703 28.1907 8.0071C28.4591 8.57386 28.8237 9.00473 29.2844 9.29972C29.7451 9.59138 30.2688 9.73722 30.8554 9.73722C31.4388 9.73722 31.9608 9.59138 32.4215 9.29972C32.8855 9.00473 33.2501 8.57386 33.5152 8.0071C33.7837 7.43703 33.9179 6.73769 33.9179 5.90909ZM43.3197 11H41.689L45.3531 0.818182H47.1279L50.792 11H49.1613L46.2828 2.66761H46.2032L43.3197 11ZM43.5931 7.01278H48.8829V8.3054H43.5931V7.01278ZM52.9624 11V0.818182H56.5916C57.3804 0.818182 58.035 0.954072 58.5554 1.22585C59.0791 1.49763 59.4702 1.87382 59.7287 2.3544C59.9872 2.83168 60.1165 3.38352 60.1165 4.00994C60.1165 4.63305 59.9856 5.18158 59.7237 5.65554C59.4652 6.12618 59.0741 6.49242 58.5504 6.75426C58.0301 7.0161 57.3755 7.14702 56.5866 7.14702H53.8374V5.82457H56.4474C56.9446 5.82457 57.349 5.75331 57.6605 5.6108C57.9754 5.46828 58.2057 5.26113 58.3516 4.98935C58.4974 4.71757 58.5703 4.3911 58.5703 4.00994C58.5703 3.62547 58.4957 3.29238 58.3466 3.01065C58.2008 2.72893 57.9704 2.51349 57.6555 2.36435C57.344 2.21188 56.9347 2.13565 56.4276 2.13565H54.4986V11H52.9624ZM57.9886 6.40625L60.5043 11H58.7543L56.2884 6.40625H57.9886ZM62.6858 11V0.818182H69.0693V2.14062H64.222V5.2429H68.7362V6.56037H64.222V9.67756H69.129V11H62.6858ZM3.11222 31L0.288352 20.8182H1.90412L3.88778 28.7031H3.98224L6.04545 20.8182H7.64631L9.70952 28.7081H9.80398L11.7827 20.8182H13.4034L10.5746 31H9.02841L6.88565 23.3736H6.80611L4.66335 31H3.11222ZM15.5042 31V20.8182H21.8877V22.1406H17.0404V25.2429H21.5546V26.5604H17.0404V29.6776H21.9473V31H15.5042ZM26.1461 28.0717V27.9773C26.1527 27.3608 26.214 26.8703 26.33 26.5057C26.4494 26.1411 26.6184 25.8461 26.8371 25.6207C27.0559 25.3954 27.3194 25.1899 27.6276 25.0043C27.8265 24.8783 28.0055 24.7375 28.1646 24.5817C28.3237 24.4259 28.4496 24.2469 28.5424 24.0447C28.6352 23.8426 28.6816 23.6188 28.6816 23.3736C28.6816 23.0786 28.612 22.8234 28.4728 22.608C28.3336 22.3925 28.148 22.2268 27.916 22.1108C27.6873 21.9915 27.4321 21.9318 27.1504 21.9318C26.8951 21.9318 26.6515 21.9848 26.4195 22.0909C26.1875 22.197 25.9953 22.3627 25.8428 22.5881C25.6904 22.8101 25.6025 23.0968 25.5793 23.4482H24.068C24.0912 22.8516 24.242 22.3478 24.5204 21.9368C24.7988 21.5225 25.1667 21.2093 25.6241 20.9972C26.0848 20.785 26.5935 20.679 27.1504 20.679C27.7602 20.679 28.2938 20.7933 28.7512 21.022C29.2086 21.2474 29.5632 21.5639 29.8151 21.9716C30.0703 22.3759 30.1979 22.8482 30.1979 23.3885C30.1979 23.7597 30.1399 24.0945 30.0239 24.3928C29.9079 24.6877 29.7422 24.9512 29.5268 25.1832C29.3147 25.4152 29.0594 25.6207 28.7612 25.7997C28.4794 25.9754 28.2507 26.1577 28.0751 26.3466C27.9027 26.5355 27.7768 26.7592 27.6972 27.0178C27.6177 27.2763 27.5746 27.5961 27.568 27.9773V28.0717H26.1461ZM26.8968 31.0945C26.625 31.0945 26.3914 30.9983 26.1958 30.8061C26.0003 30.6106 25.9025 30.3752 25.9025 30.1001C25.9025 29.8284 26.0003 29.5964 26.1958 29.4041C26.3914 29.2086 26.625 29.1108 26.8968 29.1108C27.1653 29.1108 27.3973 29.2086 27.5928 29.4041C27.7917 29.5964 27.8911 29.8284 27.8911 30.1001C27.8911 30.2824 27.8447 30.4498 27.7519 30.6023C27.6624 30.7514 27.5431 30.8707 27.394 30.9602C27.2448 31.0497 27.0791 31.0945 26.8968 31.0945Z"
                    fill="#F97316"
                  />
                </svg>
              </div>

              <div
                data-layer="Know About Us"
                className="KnowAboutUs w-[213px] h-[110px]
text-[#303338] text-[49.43px] font-semibold font-['Public Sans'] leading-[56.35px]"
              >
                Know
                <br />
                About Us
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
      <InfiniteScrollCarousel />
    

      <FounderBio/>

      <Footer/>
    
    
    </div>


  );
}

export default Home;
