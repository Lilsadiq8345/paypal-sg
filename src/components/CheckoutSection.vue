<template>
    <section class="py-16 lg:py-24 bg-paypal-gray-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Content -->
                <div class="order-2 lg:order-1">
                    <h2 class="paypal-section-title">
                        Simplified online checkout
                    </h2>
                    <p class="paypal-section-subtitle mb-8">
                        Shop with your PayPal account at millions of brands worldwide. Rest easy knowing PayPal Buyer
                        Protection has your back while shopping.
                    </p>

                    <button class="paypal-button">
                        Check out with PayPal
                    </button>
                </div>

                <!-- Right Content - Checkout Mockup -->
                <div class="order-1 lg:order-2 relative">
                    <div class="paypal-card">
                        <div class="text-center mb-6">
                            <div
                                class="w-16 h-16 bg-paypal-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-white text-2xl">🛒</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Checkout</h3>
                        </div>

                        <div class="space-y-4 mb-6">
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span class="text-gray-700">Subtotal</span>
                                <span class="font-semibold">S$89.99</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span class="text-gray-700">Shipping</span>
                                <span class="font-semibold">S$5.99</span>
                            </div>
                            <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span class="text-gray-700">Tax</span>
                                <span class="font-semibold">S$7.20</span>
                            </div>
                            <div class="border-t pt-3 flex items-center justify-between">
                                <span class="text-lg font-semibold text-gray-900">Total</span>
                                <span class="text-2xl font-bold text-paypal-blue">S$103.18</span>
                            </div>
                        </div>

                        <div class="mb-6">
                            <div
                                class="flex items-center p-3 bg-paypal-blue bg-opacity-10 rounded-lg border border-paypal-blue">
                                <div class="w-8 h-8 bg-paypal-blue rounded-full flex items-center justify-center mr-3">
                                    <span class="text-white text-sm">P</span>
                                </div>
                                <div class="flex-1">
                                    <div class="font-semibold text-gray-900">PayPal</div>
                                    <div class="text-sm text-gray-600">sarah.lee@email.com</div>
                                </div>
                                <div class="text-paypal-blue">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button
                            class="w-full bg-paypal-blue text-white py-3 rounded-full font-semibold hover:bg-paypal-blue-dark transition-colors">
                            Pay S$103.18
                        </button>

                        <div class="mt-4 text-center">
                            <div class="paypal-trust-indicator justify-center">
                                <span></span>
                                Buyer Protection included
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>