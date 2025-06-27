<template>
    <section class="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section Header -->
            <div class="text-center mb-16 lg:mb-20">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Your way to pay,<br class="hidden sm:block">with PayPal
                </h2>
                <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Whether you're shopping online, sending money to friends, or managing your business, PayPal makes it easy and secure.
                </p>
            </div>

            <!-- Main Features Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-20">
                <!-- Feature 1 -->
                <div class="group bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div class="w-16 h-16 bg-gradient-to-br from-paypal-blue to-paypal-blue-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Checkout with a few clicks</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Shop with your PayPal account at millions of brands worldwide. Rest easy knowing PayPal Buyer Protection has your back while shopping.
                    </p>
                    <a href="#" class="inline-flex items-center text-paypal-blue hover:text-paypal-blue-dark font-semibold transition-colors duration-200">
                        Learn more
                        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <!-- Feature 2 -->
                <div class="group bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                    </div>
                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Confidently send payments</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Pay for goods and services conveniently, from shopping at local businesses to paying individuals for projects.
                    </p>
                    <a href="#" class="inline-flex items-center text-paypal-blue hover:text-paypal-blue-dark font-semibold transition-colors duration-200">
                        Learn more
                        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

                <!-- Feature 3 -->
                <div class="group bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                    </div>
                    <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Create a PayPal.Me payment link</h3>
                    <p class="text-gray-600 leading-relaxed mb-6">
                        Your personalized PayPal.Me link simplifies getting paid. Share it with anyone and get paid instantly.
                    </p>
                    <a href="#" class="inline-flex items-center text-paypal-blue hover:text-paypal-blue-dark font-semibold transition-colors duration-200">
                        Learn more
                        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Additional Features -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div class="text-center group">
                    <div class="w-12 h-12 bg-paypal-yellow rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl">🌍</span>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Send globally</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Send money to friends and family in over 200 countries and territories.</p>
                </div>

                <div class="text-center group">
                    <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl">⚡</span>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Instant transfers</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Get your money in minutes with Instant Transfer to your Singapore bank.</p>
                </div>

                <div class="text-center group">
                    <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl">🔒</span>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Stay secure</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Your financial info is encrypted and monitored for suspicious activity.</p>
                </div>

                <div class="text-center group">
                    <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-2xl">📊</span>
                    </div>
                    <h4 class="text-lg font-semibold text-gray-900 mb-2">Track spending</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">Keep track of your spending and manage your money all in one place.</p>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="mt-16 lg:mt-20 text-center">
                <div class="bg-gradient-to-r from-paypal-blue to-paypal-blue-light rounded-2xl p-8 lg:p-12 text-white">
                    <h3 class="text-2xl lg:text-3xl font-bold mb-4">Ready to get started?</h3>
                    <p class="text-lg text-paypal-blue-100 mb-8 max-w-2xl mx-auto">
                        Join millions of people who trust PayPal for their everyday payments and money transfers.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <button class="bg-white text-paypal-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Sign Up for Free
                        </button>
                        <button class="border-2 border-white text-white hover:bg-white hover:text-paypal-blue px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
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