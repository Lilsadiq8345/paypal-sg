<template>
    <section class="py-16 lg:py-24 bg-paypal-gray-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Content -->
                <div class="order-2 lg:order-1">
                    <h2 class="paypal-section-title">
                        Get paid quickly with a link
                    </h2>
                    <p class="paypal-section-subtitle mb-8">
                        Your personalized PayPal.Me link simplifies getting paid.
                    </p>
                    <button class="paypal-button">
                        Learn More About PayPal.Me
                    </button>
                </div>
                <!-- Right Content - PayPal.Me Illustration -->
                <div class="order-1 lg:order-2 relative">
                    <div class="paypal-card">
                        <div class="text-center mb-6">
                            <div
                                class="w-16 h-16 bg-paypal-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-white text-2xl">🔗</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">PayPal.Me</h3>
                        </div>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                                    <span class="text-white font-semibold text-sm">PP</span>
                                </div>
                                <div class="flex-1">
                                    <div class="font-medium text-gray-900">paypal.me/yourname</div>
                                    <div class="text-sm text-gray-500">Share your link to get paid instantly</div>
                                </div>
                                <div class="text-paypal-blue font-semibold">S$100.00</div>
                            </div>
                        </div>
                        <button
                            class="w-full bg-paypal-blue text-white py-3 rounded-full font-semibold hover:bg-paypal-blue-dark transition-colors">
                            Copy Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>