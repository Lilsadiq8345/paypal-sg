<template>
    <section class="py-16 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Left Content -->
                <div class="order-2 lg:order-1">
                    <h2 class="paypal-section-title">
                        Safe, private, secure
                    </h2>
                    <p class="paypal-section-subtitle mb-8">
                        Your data is encrypted, keeping your sensitive financial info safe.
                    </p>
                    <button class="paypal-button">
                        More About Security
                    </button>
                </div>
                <!-- Right Content - Security Illustration -->
                <div class="order-1 lg:order-2 relative">
                    <div class="paypal-card">
                        <div class="text-center mb-6">
                            <div
                                class="w-16 h-16 bg-paypal-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-white text-2xl">🔒</span>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Security</h3>
                        </div>
                        <div class="space-y-4 mb-6">
                            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                                    <span class="text-white font-semibold text-sm">EN</span>
                                </div>
                                <div class="flex-1">
                                    <div class="font-medium text-gray-900">Encrypted Data</div>
                                    <div class="text-sm text-gray-500">Your info is always protected</div>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                                <div
                                    class="w-10 h-10 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full flex items-center justify-center">
                                    <span class="text-white font-semibold text-sm">FP</span>
                                </div>
                                <div class="flex-1">
                                    <div class="font-medium text-gray-900">Fraud Protection</div>
                                    <div class="text-sm text-gray-500">We monitor for suspicious activity</div>
                                </div>
                            </div>
                        </div>
                        <button
                            class="w-full bg-paypal-blue text-white py-3 rounded-full font-semibold hover:bg-paypal-blue-dark transition-colors">
                            Learn More
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