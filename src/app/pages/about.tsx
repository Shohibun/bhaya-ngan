import { Signature } from "lucide-react";

export default function About() {
  return (
    <div className="flex justify-center items-center mt-96 pt-12">
      <div className="w-6/12">
        <Signature className="text-white mx-auto w-20 h-20" />

        <div className="text-white text-center mt-4">
          <h1 className="text-4xl font-bold">Swagatam ring Bhaya</h1>

          <p className="text-sm mt-3">
            <span className="font-bold">Bhaya</span> adalah channel YouTube yang
            berisi kisah nyata dari tiga pemuda Afin, Rino, dan Ibun yang pernah
            mengalami berbagai peristiwa mistis di tempat dan waktu yang
            berbeda. Channel ini dibuat pada 31 Oktober 2025 dengan tujuan
            berbagi pengalaman kepada para penonton tentang kejadian-kejadian
            tak kasat mata yang benar-benar mereka alami. Setiap cerita di Bhaya
            berasal dari kejadian nyata, namun tidak disampaikan 100% apa
            adanya. Demi menghormati para entitas dan sosok-sosok yang tidak
            terlihat, beberapa bagian cerita diberi sedikit sentuhan naratif
            agar tetap menjaga batas dan etika dalam menyampaikan pengalaman
            gaib. Melalui kanal ini, Afin, Rino, dan Ibun berharap para penonton
            dapat merasakan atmosfir nyata dari setiap kejadian, sekaligus
            memahami bahwa dunia yang tidak terlihat terkadang lebih dekat
            daripada yang kita kira.
          </p>
        </div>
      </div>
    </div>
  );
}
