import React from "react";

function EmptyCart() {
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
          <div className="relative">
            <div className="absolute -inset-1 shadow-xl rounded-xl blur-xl"></div>
            <div className="relative text-center py-16 bg-white    rounded-xl">
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
                className="lucide lucide-shopping-bag w-16 h-16 mx-auto mb-4 text-neutral-400"
                aria-hidden="true"
              >
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
              </svg>
              <h2 className="text-neutral-900 dark:text-white mb-2">
                Your cart is empty
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Add some products to get started!
              </p>
              <a href="/products" data-discover="true">
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm text-white font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary    hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 rounded-lg"
                >
                  Browse Products
                </button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EmptyCart;
