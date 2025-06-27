<template>
  <section class="bg-gradient-to-br from-paypal-blue via-paypal-blue to-paypal-blue-dark text-white relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-64 h-64 bg-paypal-yellow rounded-full translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            The PayPal App
          </h1>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 leading-relaxed">
            Pay easy, fast,<br class="hidden sm:block">and secure.
          </h2>
          <p class="text-lg sm:text-xl text-paypal-blue-100 mb-8 max-w-lg mx-auto lg:mx-0">
            Send money, track spending, and manage your account on the go with the PayPal app.
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button class="bg-white text-paypal-blue hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get the App
            </button>
            <button class="border-2 border-white text-white hover:bg-white hover:text-paypal-blue px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
              Learn More
            </button>
          </div>

          <!-- App Store Badges -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a href="#" class="inline-block">
              <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                   alt="Download on the App Store" 
                   class="h-12 w-auto hover:opacity-80 transition-opacity duration-200" />
            </a>
            <a href="#" class="inline-block">
              <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                   alt="Get it on Google Play" 
                   class="h-12 w-auto hover:opacity-80 transition-opacity duration-200" />
            </a>
          </div>

          <!-- Quick Links -->
          <div class="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
            <a href="#" class="text-paypal-blue-100 hover:text-white transition-colors duration-200 underline decoration-2 underline-offset-4">
              Personal
            </a>
            <a href="#" class="text-paypal-blue-100 hover:text-white transition-colors duration-200 underline decoration-2 underline-offset-4">
              Business
            </a>
            <a href="#" class="text-paypal-blue-100 hover:text-white transition-colors duration-200 underline decoration-2 underline-offset-4">
              Enterprise
            </a>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Phone Mockup -->
            <div class="relative w-80 h-[600px] mx-auto lg:mx-0">
              <!-- Phone Frame -->
              <div class="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-800">
                <!-- Screen -->
                <div class="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                  <!-- Video/Image Content -->
                  <video 
                    src="/hero-video.mp4" 
                    autoplay 
                    loop 
                    muted 
                    playsinline
                    class="w-full h-full object-cover"
                  ></video>
                </div>
                <!-- Home Indicator -->
                <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
              </div>
              
              <!-- Floating Elements -->
              <div class="absolute -top-4 -right-4 w-16 h-16 bg-paypal-yellow rounded-full flex items-center justify-center shadow-lg animate-float">
                <span class="text-2xl">💳</span>
              </div>
              <div class="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-float" style="animation-delay: 1s;">
                <span class="text-xl">📱</span>
              </div>
            </div>

            <!-- Trust Indicators -->
            <div class="mt-8 flex flex-wrap gap-4 justify-center lg:justify-end">
              <div class="flex items-center text-sm text-paypal-blue-100">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Secure & Protected
              </div>
              <div class="flex items-center text-sm text-paypal-blue-100">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Fast Transfers
              </div>
              <div class="flex items-center text-sm text-paypal-blue-100">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Global Reach
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg class="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>