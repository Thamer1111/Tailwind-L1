import React from 'react'

function Hero() {
    return (

        <div class="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-2 relative bg-gray-100 flex items-center px-6 h-80">
                <div>
                    <h2 class="text-2xl font-semibold mb-2">WOODEN MINIMALISTIC CHAIRS</h2>
                    <p class="text-green-500 font-bold text-lg mb-2">SALE UP TO 40% Off</p>
                    <button class="bg-yellow-500 text-white px-4 py-2 rounded">Shop Now</button>
                </div>
                <img src="https://pitreonline.com/wp-content/uploads/2015/07/9-4.jpg" alt="Chair" class="absolute right-0 h-72 md:h-48" />
            </div>
            <div class="bg-gray-100 flex flex-col items-center justify-evenly p-6">
                <div>
                    <p class="text-sm">PACK 5 T-SHIRTS FOR SUMMER</p>
                    <p class="text-red-500 font-bold">Starting at $99.99</p>
                </div>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxuZ79i3XJMLDsKAMMoOZAvj3euqfAOV4JYQsb11DDnGL_UgAy" alt="Shirts" class="h-20" />
            </div>
        </div>
    )
}

export default Hero;