<template>
    <section class="py-16 lg:py-24 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="paypal-section-title">
                Ready to get started in Singapore?
            </h2>
            <p class="paypal-section-subtitle mb-10 max-w-2xl mx-auto">
                Join millions of Singaporeans who trust PayPal for safe, secure payments. Sign up today and experience
                the difference.
            </p>

            <div class="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-12">
                <button class="paypal-button">
                    Sign Up for Free
                </button>
                <button class="paypal-button-outline">
                    Learn More
                </button>
            </div>

            <div
                class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
                <div class="paypal-trust-indicator">
                    <span></span>
                    No setup fees
                </div>
                <div class="paypal-trust-indicator">
                    <span></span>
                    No monthly fees
                </div>
                <div class="paypal-trust-indicator">
                    <span></span>
                    Competitive rates
                </div>
                <div class="paypal-trust-indicator">
                    <span></span>
                    24/7 customer support
                </div>
            </div>

            <!-- Singapore-specific benefits -->
            <div class="mt-12 p-6 bg-paypal-gray-light rounded-lg">
                <h3 class="font-semibold text-gray-900 mb-4">Singapore Benefits</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div class="flex items-center justify-center">
                        <span class="text-paypal-blue mr-2">🇸🇬</span>
                        PayNow support
                    </div>
                    <div class="flex items-center justify-center">
                        <span class="text-paypal-blue mr-2">🏦</span>
                        Local bank integration
                    </div>
                    <div class="flex items-center justify-center">
                        <span class="text-paypal-blue mr-2">🔒</span>
                        MAS regulated
                    </div>
                    <div class="flex items-center justify-center">
                        <span class="text-paypal-blue mr-2">💳</span>
                        SGD support
                    </div>
                </div>
            </div>

            <!-- Trust badges -->
            <div class="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div class="text-gray-400 font-semibold text-sm">TRUSTED BY</div>
                <div class="flex items-center space-x-8">
                    <span class="text-gray-400 font-bold text-lg">eBay</span>
                    <span class="text-gray-400 font-bold text-lg">Spotify</span>
                    <span class="text-gray-400 font-bold text-lg">Airbnb</span>
                    <span class="text-gray-400 font-bold text-lg">Uber</span>
                </div>
            </div>

            <!-- Singapore merchants -->
            <div class="mt-8">
                <p class="text-sm text-gray-500 mb-4">Popular in Singapore</p>
                <div class="flex items-center justify-center space-x-6">
                    <span class="text-gray-400 font-semibold text-sm">Lazada</span>
                    <span class="text-gray-400 font-semibold text-sm">Shopee</span>
                    <span class="text-gray-400 font-semibold text-sm">Qoo10</span>
                    <span class="text-gray-400 font-semibold text-sm">Carousell</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>