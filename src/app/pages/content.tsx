import ReactPlayer from "react-player";
export default function Content() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-8/12">
        <h1 className="text-4xl text-center text-white font-bold">Karya</h1>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="col-span-1 border-2">
            <ReactPlayer
              src="https://youtu.be/aeHVsjkg-vg?si=iNBFd2mywB2kScrc"
              controls
              width="100%"
              height="45vh"
            />
          </div>

          <div className="col-span-1 border-2">
            <ReactPlayer
              src="https://youtu.be/IGzo0tszg24?si=linhWdb3yNcn5z8V"
              controls
              width="100%"
              height="45vh"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
