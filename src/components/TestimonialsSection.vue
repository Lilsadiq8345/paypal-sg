<template>
    <section class="py-16 lg:py-24 bg-gradient-to-r from-paypal-blue to-paypal-blue-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-5xl font-bold text-white mb-6">
                    Trusted by Singaporeans worldwide
                </h2>
                <p class="text-xl text-blue-100 max-w-3xl mx-auto">
                    See what our customers in Singapore have to say about their PayPal experience.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(testimonial, index) in testimonials" :key="index"
                    class="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div class="mb-6">
                        <div class="flex text-paypal-yellow text-xl mb-4">
                            <span v-for="i in 5" :key="i">⭐</span>
                        </div>
                        <p class="text-gray-700 text-lg leading-relaxed">
                            "{{ testimonial.quote }}"
                        </p>
                    </div>

                    <div class="flex items-center">
                        <div class="text-3xl mr-4">{{ testimonial.avatar }}</div>
                        <div>
                            <div class="font-semibold text-gray-900">{{ testimonial.author }}</div>
                            <div class="text-gray-500 text-sm">{{ testimonial.location }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                    <div class="text-4xl font-bold text-white mb-2">400M+</div>
                    <div class="text-blue-200">Active Accounts</div>
                </div>
                <div>
                    <div class="text-4xl font-bold text-white mb-2">200+</div>
                    <div class="text-blue-200">Countries & Regions</div>
                </div>
                <div>
                    <div class="text-4xl font-bold text-white mb-2">25+</div>
                    <div class="text-blue-200">Currencies</div>
                </div>
                <div>
                    <div class="text-4xl font-bold text-white mb-2">30M+</div>
                    <div class="text-blue-200">Merchant Accounts</div>
                </div>
            </div>

            <!-- Singapore-specific stats -->
            <div class="mt-16 bg-white bg-opacity-10 rounded-2xl p-8">
                <div class="text-center mb-8">
                    <h3 class="text-2xl font-semibold text-white mb-4">PayPal in Singapore</h3>
                    <p class="text-blue-100">Supporting Singapore's digital economy</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-2">2M+</div>
                        <div class="text-blue-200">Singapore Users</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-2">50K+</div>
                        <div class="text-blue-200">Local Merchants</div>
                    </div>
                    <div class="text-center">
                        <div class="text-3xl font-bold text-white mb-2">99.9%</div>
                        <div class="text-blue-200">Uptime</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const testimonials = [
    {
        quote: "PayPal makes online shopping so much easier. I can shop with confidence knowing my purchase is protected and I can use PayNow for instant transfers.",
        author: "Sarah Johnson",
        location: "Singapore",
        avatar: "👩‍💼"
    },
    {
        quote: "As a small business owner in Singapore, PayPal helps me accept payments from customers around the world seamlessly. The MAS compliance gives me peace of mind.",
        author: "Michael Chen",
        location: "Singapore",
        avatar: "👨‍💻"
    },
    {
        quote: "Sending money to family overseas has never been this simple. The app is intuitive and the SGD support makes everything so convenient.",
        author: "Maria Rodriguez",
        location: "Singapore",
        avatar: "👩‍��"
    }
]
</script>