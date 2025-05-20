import React from 'react'

function Cards() {
    return (
        <div class="container mx-auto px-4 py-6 h-screen">
            <h2 class="text-xl font-semibold mb-4">Top Categories Of The Month</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-52 text-sm">
                <div class="border p-4 h-52 flex">
                    <img src="https://www.mattotechinternational.com/wp-content/uploads/2019/11/electa94-100x100.jpg" alt="Electronics" class="mb-2 w-full object-cover" />
                    <div>
                        <h3 class="font-semibold">Electronics</h3>
                        <p>TV, ACs, Washing Machines, Audio, Office</p>
                    </div>

                </div>
                <div class="border p-4 h-52 flex">
                    <img src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/448414/item/goods_69_448414_3x4.jpg?width=288" alt="Clothings" class="mb-2 h-28 w-full object-contain" />

                    <div>
                        <h3 class="font-semibold">Clothings</h3>
                        <p>Mens, Womens, Accessories</p>
                    </div>
                </div>
                <div class="border p-4 h-52 flex">
                    <img src="https://m.media-amazon.com/images/I/413T3zs8jIL._SS200_.jpg" alt="Computers" class="mb-2 h-28 w-full object-contain" />

                    <div>
                        <h3 class="font-semibold">Computers</h3>
                        <p>PCs, Gaming, Memory, Components</p>
                    </div>
                </div>
                <div class="border p-4 h-52 flex">
                    <img src="https://martfury06.magebig.com/media/webps/jpg/media/catalog/product/cache/6b71b208d69c1b4f2b5e9e787cb531fa/2/7/27a.webp" alt="Home" class="mb-2 h-28 w-full object-contain" />

                    <div>
                        <h3 class="font-semibold">Home & Kitchen</h3>
                        <p>Furniture, Decor, Cookware</p>
                    </div>
                </div>
                <div class="border p-4 h-52 flex">
                    <img src="https://onlinesurenow.com/wp-content/uploads/2017/11/34a-21-100x100.jpg" alt="Beauty" class="mb-2 h-28 w-full object-contain" />

                    <div>
                        <h3 class="font-semibold">Health & Beauty</h3>
                        <p>Makeup, Skin, Hair, Perfume</p>
                    </div>
                </div>
                <div class="border p-4 h-52 flex">
                    <img src="https://img.piaget.com/product-light-box-1/o-dpr-2/86de17fc781686ad47498e4e2f35b524f48c4127.jpg" alt="Watch" class="mb-2 h-28 w-full object-contain" />

                    <div>
                        <h3 class="font-semibold">Jewelry & Watch</h3>
                        <p>Watches, Pendants, Bracelets</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards