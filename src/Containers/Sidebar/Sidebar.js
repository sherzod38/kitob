import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import SidebarButton from '../../Components/SidebarButton'

import './Sidebar.scss'



const Sidebar = () => {

    const [activPage, setActivPage] = useState("");
    return (
        <div className="sidebar">
            
            {/* <a className='xalq' href="#">XALQ KUTUBXONASI</a> */}

                <Link to="/boshsahifa" className="link" onClick={() => setActivPage("boshsahifa")}>
                    <SidebarButton title="Bosh sahifa" active={activPage == "boshsahifa"} />
                </Link>

                <Link to="/diniy" className="link" onClick={() => setActivPage("diniy")}>
                    <SidebarButton title="Diniy kitoblar" active={activPage == "diniy"} />
                </Link>

                <Link to="/ilmiy" className="link" onClick={() => setActivPage("ilmiy")}>
                    <SidebarButton title="Ilmiy kitoblar" active={activPage == "ilmiy"} />
                </Link>

                <Link to="/darsliklar" className="link" onClick={() => setActivPage("darsliklar")}>
                    <SidebarButton title="Darslik kitoblar" active={activPage == "darsliklar"} />
                </Link>

                <Link to="/adabiyot" className="link" onClick={() => setActivPage("adabiyot")}>
                    <SidebarButton title="Adabiy kitoblar" active={activPage == "adabiyot"} />
                </Link>

                <Link to="/jurnallar" className="link" onClick={() => setActivPage("jurnallar")}>
                    <SidebarButton title="Jurnallar" active={activPage == "jurnallar"} />
                </Link>

                <Link to="/kitobQoshish" className="link" onClick={() => setActivPage("kitobQoshish")}>
                    <SidebarButton title="Kitob qo'shish" active={activPage == "kitobQoshish"} />
                </Link>

                {/* <Link to="/chatHona" className="link" onClick={() => setActivPage("chatHona")}>
                    <SidebarButton title="Chat hona" active={activPage == "chatHona"} />
                </Link> */}

                <Link to="/manzil" className="link" onClick={() => setActivPage("manzil")}>
                    <SidebarButton title="Bizning manzil" active={activPage == "manzil"} />
                </Link>

            
            
            
            
            



            

        </div>
    )
}

export default Sidebar;