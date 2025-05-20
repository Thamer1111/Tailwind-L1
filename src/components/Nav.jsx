import React from 'react'

function Nav() {
    return (
        <nav class="bg-amber-300 py-3">
            <div class="items-center justify-evenly p-6 text-gray-600 hidden lg:flex">

                <a href="#" class="hover:text-gray-300">ALL CATEGORIES</a>

                <a href="#" class="text-gray-300">TODAY DEALS</a>

                <a href="#" class="hover:text-gray-300">ELECTRONICS</a>

                <a href="#" class="hover:text-gray-300">CLOTHINGS</a>

                <a href="#" class="hover:text-gray-300">COMPUTERS</a>

                <a href="#" class="hover:text-gray-300">FURNITURES</a>

                <a href="#" class="hover:text-gray-300">MOM & BABY</a>

                <a href="#" class="hover:text-gray-300">BOOK & MORE</a>
            </div>
            <div class="lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
            </div>
        </nav>
    )
}

export default Nav