import Sidebar from '@/app/glosses/components/Sidebar';

export default function Theme() {
    return (
        <div className="flex gap-4 p-8">
            <Sidebar />
            <div className="h-screen w-screen bg-white rounded-md p-8 border-gold border overflow-auto">
                Content
            </div> 
        </div>
    )
}
