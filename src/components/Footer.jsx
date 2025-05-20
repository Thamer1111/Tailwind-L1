import React from 'react'

function Footer() {
  return (
    
    <div class="container mx-auto px-4 py-6 bg-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h2 class="text-xl font-semibold">Bose Bluetooth Wireless Headphones</h2>
      <p class="text-sm mt-1 mb-2">Crisp powerful sound from the best sounding wireless headphone in its class</p>
      <p class="text-green-500 text-lg font-bold">$219.05 <span class="line-through text-gray-500 text-sm ml-2">$260.50</span></p>
      <button class="bg-yellow-500 text-white mt-3 px-4 py-2 rounded">Shop Now</button>
    </div>
    <img src="https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/m1images/4/5/452977_1.jpg" alt="Headphones" class="h-32 md:h-48" />
  </div>
  )
}

export default Footer