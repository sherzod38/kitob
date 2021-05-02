import "./BoshSahifa.scss";

import BgImg from "../../Assets/images/fff.jpeg";
import Logo1 from "../../Assets/images/logo.png";
import Logo2 from "../../Assets/images/logo2.png";

import video from '../../Assets/images/AzonVideo.mp4'

const BoshSahifa = () => {
  return (
    <div className="wrapper">
        <video controls>
            <source src={video}/>
        </video>
        <div className="section1">
            {/* <h1>salom</h1> */}

            <img className="b-img" src={BgImg} alt="" />
            {/* <img className='logo1' src={Logo1} alt=""/> */}
            {/* <img className='logo2' src={Logo2} alt=""/> */}
            <h2>Assalomu alaykum!</h2>
            <p>
                Aziz saytimiz mehmonlari sizlar bu saytimizda xalq kutubxonasida bor
                kitoblardan bepul olib foydalanishingiz mumkin va yana o'zingizdagi bor
                kitoblarni qo'shishingiz mumkin.
            </p>
            <p>
                O'zingizdagi kitoblardan boshqalar ham foydalanishini hohlasangiz
                bizning <span>AZON KITOBLARI </span>do'koni qoshida ochilgan
                <span>XALQ KUTUBXONASI</span> ga o'zingizni kitoblaringizni olib kelib
                qo'yishingiz mumkin.
            </p>
            <p>
                Rejalarimizda saytimizga o'zingizni kitoblaringizni kiritishingiz mumkin
                bo'ladi. Kitoblaringiz nomi, rasmi va telefon nomeringizni kiritasiz,
                siz qo'ygan kitoblardan kimdir foydalanmoqchi bo'lsa, sizga qo'ng'iroq
                qilib, sizdan olib foydalanishi mumkin bo'ladi.
            </p>
            <p>
                XALQ KUTUBXONASI har-bir viloyatda, hamma tumanlarda, har-bir qishloqda
                ochilishiga birgallikda harakat qilamiz bizga qo'shiling!.
            </p>
            <p className='last-p'>XALQ KUTUBXONASI Mobil ilovasini ham chiqarish harakatidamiz.</p>
        </div>
    </div>
  );
};

export default BoshSahifa;
