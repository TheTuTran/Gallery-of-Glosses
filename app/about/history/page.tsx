import Sidebar from "@/app/about/components/Sidebar";

export default function History() {

    return (
        <div className="flex gap-4 p-8">
            <Sidebar />
            <div className="h-screen w-screen bg-white rounded-md p-8 border-gold border">
                <h1 className="text-4xl font-semibold mb-6">Project History</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200">
                        <h2 className="text-2xl font-bold mb-2">May 15</h2>
                        <img src="/images/may_pict.png" alt="MayPicture" className="w-full h-64 object-cover rounded mb-4" />
                        <p className="text-gray-700">Beginning stages... </p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200">
                        <h2 className="text-2xl font-bold mb-2">June 15</h2>
                        <img src="/images/june_pict.png" alt="junePicture" className="w-full h-64 object-cover rounded mb-4" />
                        <p className="text-gray-700">... </p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200">
                        <h2 className="text-2xl font-bold mb-2">July 15</h2>
                        <img src="https://via.placeholder.com/350" alt="placeholder" className="w-full h-64 object-cover rounded mb-4" />
                        <p className="text-gray-700">...</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:shadow-lg transition duration-200">
                        <h2 className="text-2xl font-bold mb-2">August 15</h2>
                        <img src="https://via.placeholder.com/350" alt="placeholder" className="w-full h-64 object-cover rounded mb-4" />
                        <p className="text-gray-700">...</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}
