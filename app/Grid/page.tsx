export default function Grid() {
    return (
        
        <div className="border-6 p-2 bg-26A1F8"> 
            <h1 className="text-7xl text-center">GRID APP</h1>
            <div className="grid lg:grid-cols-3 gap-x-6 gap-y-4 m-8 md:grid-cols-2 sm:grid-cols-1">
                <div className="bg-gray-400 rounded-xl border-2 border-black text-3xl font-sans text-center h-[180px] lg:col-span-2 md:col-span-2 sm:col-span-1 hover:scale-105" style={{ backgroundImage: 'url("/images/grid1.jpg")' }}>

                </div>
                <div className="bg-white col-span-1 rounded-xl border-2 border-black text-3xl font-sans text-center h-[373px] grid grid-cols-4 hover:scale-105 row-span-2 relative overflow-hidden">
                    <img src="/images/grid2.webp" alt="" className="absolute inset-0 w-full h-full lg:h-[372px] lg:w-[370px] md:h-[500px] md:w-[754px] object-cover rounded-xl" />

                </div>
                <div className="bg-gray-400 col-span-1 rounded-xl border-2 border-black text-3xl h-[373px] font-sans text-center row-span-2 relative overflow-hidden hover:scale-105">
                    <img src="/images/grid3.jpg" alt="" className="absolute inset-0 w-full h-full lg:h-[372px] lg:w-[370px] object-cover rounded-xl" />
                </div>
                <div className="bg-gray-400 col-span-1 rounded-xl border-2 border-black text-3xl font-sans text-center h-[180px] relative overflow-hidden hover:scale-105">
                    <img src="/images/grid4.jpg" alt="" className="absolute inset-0 w-full h-full lg:h-[177px] lg:w-[370px] object-cover rounded-xl" />
                </div>
                <div className="bg-gray-400 rounded-xl col-span-2 border-2 border-black text-3xl font-sans text-center h-[180px] lg:col-span-2 md:col-span-2 sm:col-span-1 relative overflow-hidden hover:scale-105">
                    <img src="/images/grid5.png" alt="" className="absolute inset-0 w-full h-full lg:h-[180px] lg:w-[754px]  md:h-[180px] md:w-[754px] object-cover rounded-xl" />
                </div>

            </div>
        </div>
    )
}    