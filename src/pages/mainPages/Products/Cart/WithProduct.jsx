import React from 'react'

function WithProduct() {
  return (
    <div>
      <main className="min-h-screen font-[montserrat]">
        <div className="px-6 lg:px-12 py-12">
          <div className="mb-8">
            <a
              className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white mb-4 transition-colors"
              href="/products"
              data-discover="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left w-4 h-4"
                aria-hidden="true"
              >
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Continue Shopping
            </a>
            <h1 className="text-primary text-4xl font-extrabold mb-2">Shopping Cart</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
              Review your items and proceed to checkout
            </p>
          </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative   p-6 bg-white  shadow-sm  rounded-xl">
            <div className="flex gap-4">
              {/* Product Image */}
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-neutral-100/50 dark:bg-neutral-800/50 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
                  alt="Premium Coffee Beans"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="text-black mb-1">Premium Coffee Beans</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Origin: Colombia</p>

                <div className="flex items-center gap-4">
                  <span className="text-neutral-900 ">$2,500 / unit</span>
                </div>
              </div>

              {/* Actions (Delete, Quantity) */}
              <div className="flex flex-col items-end gap-3">
                {/* Remove Button */}
                <button
                  
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-red-500 hover:text-red-600 size-9 rounded-lg transition-all"
                  aria-label="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                    <path d="M3 6h18" />
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>

                {/* Quantity Selector */}
                <div className="flex items-center gap-2 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-lg p-1">
                  <button   className="size-9 w-8 h-8 rounded-md hover:bg-accent transition-all" aria-label="Decrease quantity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M5 12h14" />
                    </svg>
                  </button>

                  <span className="w-12 text-center text-neutral-900 dark:text-white">1</span>

                  <button   className="size-9 w-8 h-8 rounded-md hover:bg-accent transition-all" aria-label="Increase quantity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>
                </div>

                {/* Price */}
                <span className="text-neutral-900 dark:text-white">$2,500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clear Cart Button */}
        <button   className="inline-flex items-center gap-2 border bg-background dark:bg-input/30 dark:border-input hover:bg-accent dark:hover:bg-input/50 h-9 px-4 rounded-lg transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M10 11v6" />
            <path d="M14 11v6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Clear Cart
        </button>
      </div>

      {/* Order Summary */}
      <div className="relative">
        <div className="absolute -inset-1 shadow-sm rounded-xl blur-xl" />

        <div className="relative   p-5 bg-white    rounded-xl">
          <h2 className="text-neutral-900 font-extrabold  mb-6">Order Summary</h2>

          {/* Summary Items */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
              <span>Subtotal</span>
              <span>$2,500</span>
            </div>

            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
              <span>Shipping</span>
              <span className="text-green-600 dark:text-green-400">FREE</span>
            </div>

            <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
              <span>Tax (estimated)</span>
              <span>$250</span>
            </div>

            <div className="border-t border-white/20 dark:border-white/10 pt-3 flex justify-between">
              <span className="text-neutral-900 dark:text-white">Total</span>
              <span className="text-neutral-900 dark:text-white">$2,750</span>
            </div>
          </div>

          {/* Checkout Button */}
          <a href="/checkout" className="inline-flex items-center justify-center bg-black text-white text-primary-foreground hover:bg-primary/90 h-10 w-full px-6 rounded-lg mb-3 transition-all" >
            Proceed to Checkout
          </a>

          {/* Secure badge */}
          <div className="text-center text-sm text-neutral-600 dark:text-neutral-400">
            <p>Secure checkout with 256-bit SSL encryption</p>
          </div>

          {/* Payment Methods */}
          <div className="mt-6 pt-6 border-t border-white/20 dark:border-white/10">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">We accept:</p>

            <div className="flex gap-3 flex-wrap">
              <div className="px-3 py-2 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-md text-xs">💳 Visa</div>
              <div className="px-3 py-2 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-md text-xs">💳 Mastercard</div>
              <div className="px-3 py-2 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-md text-xs">💰 PayPal</div>
              <div className="px-3 py-2 bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm rounded-md text-xs">🏦 Bank Transfer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </main>
    </div>
  )
}

export default WithProduct
