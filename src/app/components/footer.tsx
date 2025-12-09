import { Copyright, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "../../../public/images/Icon.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-stone-500 mt-20">
      <div className="w-10/12 p-5">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="col-span-1 text-sm text-white">
            <p>
              Jalan Pakusari No. 23 Kabupaten Jember
              <br />
              Pakusari 68181
            </p>

            <p className="mt-1">pyoga3199@gmail.com</p>

            <p className="mt-2">+62 815-4911-8907</p>
          </div>

          <div className="col-span-1 text-white">
            <h5 className="text-sm">Layanan Kula</h5>

            <p className="text-xs mt-1">Karya</p>
          </div>

          <div className="col-span-1">
            <h5 className="text-sm text-white">Nuwun pirsa</h5>

            <div className="flex justify-start items-center mt-1">
              <Link href={"https://www.youtube.com/@Bhaya-ngan"}>
                <Youtube className="w-7 h-7 mr-1 text-white" />
              </Link>

              <a href="mailto:pyoga3199@gmail.com">
                <Mail className="text-white" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex justify-start items-center">
              <Copyright className="w-5 h-5 mr-1 text-white" />
              <p className="text-sm text-white">Copyright Bhaya 2025</p>
            </div>

            <Image src={Logo} alt="Logo" className="w-20 h-20 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
