<template>
    <section class="py-16 lg:py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="paypal-section-title">
                    Your way to pay, with PayPal
                </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                <div v-for="(method, index) in paymentMethods" :key="index" class="text-center group">
                    <div class="paypal-feature-icon">
                        <span class="text-4xl">{{ method.icon }}</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ method.title }}</h3>
                    <p class="paypal-section-subtitle">{{ method.description }}</p>
                </div>
            </div>

            <!-- Carousel indicators -->
            <div class="flex justify-center mt-12">
                <div class="flex space-x-2">
                    <div class="w-3 h-3 bg-paypal-blue rounded-full"></div>
                    <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const paymentMethods = [
    {
        title: 'Checkout with a few clicks',
        description: 'Shop with your PayPal account at millions of brands worldwide. Rest easy knowing PayPal Buyer Protection has your back while shopping.',
        icon: '🛒'
    },
    {
        title: 'Confidently send payments',
        description: 'You can pay for goods and services conveniently, from shopping at local businesses to paying individuals for projects.',
        icon: '💸'
    },
    {
        title: 'Create a PayPal.Me payment link',
        description: 'Your personalized PayPal.Me link simplifies getting paid.',
        icon: '🔗'
    }
]
</script>