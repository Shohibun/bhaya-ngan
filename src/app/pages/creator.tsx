import Image from "next/image";
import Afin from "../../../public/images/afin.jpeg";
import Rino from "../../../public/images/rino.jpeg";
import Ibun from "../../../public/images/ibun.jpeg";
import { FolderKanban, MonitorCog, NotebookPen } from "lucide-react";

export default function Creator() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-8/12">
        <h1 className="text-4xl text-center text-white font-bold">Pangripto</h1>

        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="col-span-1">
            <Image
              src={Afin}
              alt="Afin"
              className="mask-x-from-70% mask-x-to-90%"
            />

            <h1 className="text-white text-center text-lg font-bold mt-3">
              Afin Febriyanto
            </h1>

            <p className="text-white text-sm text-center mt-1">
              <NotebookPen className="text-white w-5 h-5 mr-1 inline" />
              Copywriter bertugas menulis dan menyusun kata-kata untuk kebutuhan
              channel, seperti script cerita, judul video, deskripsi, dan
              caption. Fokusnya membuat cerita menarik, mudah dipahami, dan
              sesuai identitas channel.
            </p>
          </div>

          <div className="col-span-1">
            <Image
              src={Rino}
              alt="Rino"
              className="mask-x-from-70% mask-x-to-90%"
            />

            <h1 className="text-white text-center text-lg font-bold mt-3">
              Rino Anggi Prayoga
            </h1>

            <p className="text-white text-sm text-center mt-1">
              <MonitorCog className="text-white w-5 h-5 mr-1 inline" />
              Editor bertugas mengolah video dan audio, termasuk memotong,
              menyusun, memberi efek visual, musik, dan membuat thumbnail.
              Editor memastikan video terlihat rapi, menarik, dan enak ditonton.
            </p>
          </div>

          <div className="col-span-1">
            <Image
              src={Ibun}
              alt="Ibun"
              className="mask-x-from-70% mask-x-to-90%"
            />

            <h1 className="text-white text-center text-lg font-bold mt-3">
              Shohibun Najam Ilma
            </h1>

            <p className="text-white text-sm text-center mt-1">
              <FolderKanban className="text-white w-5 h-5 mr-1 inline" />
              Manager bertugas mengatur arah, strategi, dan proses kerja
              channel, termasuk merencanakan konten, mengatur jadwal upload,
              mengawasi tim, serta menganalisis perkembangan channel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
