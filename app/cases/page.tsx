import Image from "next/image";
import '../globals.css';
import Header from "../header";
import Topbar from "../top-bar";
import Footer from "../Footer";
export default function cases(){
    return (
        <div> 
        <Topbar /> 
        <Header />
    <section className="py-24">

    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 items-center w-1/1">
                    
                    <div className="min-h-1/2 px-20">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight py-10 text-center lg:text-left">
                                        موبي سيكيور<br/>
                                    </h1>
                                    <p className="mt-4 text-gray-800 text-lg text-center lg:text-left"> 
                                        العميل طلب تطبيق بمواصفات خاصة لإدارة محل هواتف محمولة
                                    </p>
                                    <div className="flex justify-center lg:justify-start mt-2 py-8">
                                    </div>
                                </div>
                                <div className="flex justify-center  lg:justify-center md:justify-center">
                                <img src="../img/securefone.png" alt="Hero Image" className="w-2/3" />
                                </div>
                                </div>
    </section>
              <Footer />
              </div>
              )
}
