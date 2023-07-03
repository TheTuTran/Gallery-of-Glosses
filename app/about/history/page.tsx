import Sidebar from "@/app/about/components/Sidebar";
import Box from "@/components/Box";
import Image from "next/image";
import HistoryCard from "../components/HistoryCard";

export default function History() {
  return (
    <div className="flex gap-4 p-8">
      <Sidebar />
      <Box className="h-screen w-screen rounded-md p-8">
        <h1 className="text-4xl mb-6">Project History</h1>
        <div className="grid grid-cols-4 gap-6">
          <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200">
            <h2 className="text-2xl mb-2">May 15</h2>
            <HistoryCard imglocation="/images/may_pict.png" />
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              modi eos maiores reprehenderit non libero id cumque distinctio
              deserunt ad?
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200">
            <h2 className="text-2xl mb-2">June 15</h2>
            <HistoryCard imglocation="/images/june_pict.png" />
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              modi.
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200">
            <h2 className="text-2xl mb-2">July 15</h2>
            <Image
              src=""
              alt="placeholder"
              className="w-full object-cover rounded mb-4"
              width={200}
              height={64}
            />
            <p className="text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              laboriosam nostrum esse neque voluptates quidem.
            </p>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200">
            <h2 className="text-2xl font-bold mb-2">August 15</h2>
            <Image
              src=""
              alt="placeholder"
              className="w-full h-64 object-cover rounded mb-4"
              width={30}
              height={30}
            />
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              blanditiis ab corporis sequi delectus aliquam atque iusto?
              Facilis.
            </p>
          </div>
        </div>
      </Box>
    </div>
  );
}
