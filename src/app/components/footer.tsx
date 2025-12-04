import { Copyright, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "../../../public/images/Icon.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-center items-center bg-white mt-20">
      <div className="w-10/12">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <p>
              Jalan Pakusari No. 23 Kabupaten Jember
              <br />
              Pakusari 68181
            </p>

            <p>pyoga3199@gmail.com</p>

            <p>+62 815-4911-8907</p>
          </div>

          <div className="col-span-1">
            <p>Layanan Kula</p>

            <p>Karya</p>
          </div>

          <div className="col-span-1">
            <div className="flex justify-between items-center">
              <Link href={"https://www.youtube.com/@Bhaya-ngan"}>
                <Youtube />
              </Link>

              <a href="mailto:pyoga3199@gmail.com">
                <Mail />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex justify-start items-center">
              <Copyright />
              <p>Copyright Bhaya 2025</p>
            </div>

            <Image src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
