<template>
  <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="/paypal-logo.svg" alt="PayPal" class="h-8 w-auto" />
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <!-- Personal with Mega Menu -->
          <div class="relative group">
            <button class="flex items-center text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200">
              Personal
              <svg class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Personal Mega Menu -->
            <div class="absolute left-0 top-full mt-1 w-[800px] bg-white shadow-xl rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100">
              <div class="p-8">
                <div class="grid grid-cols-3 gap-8">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Send & Receive</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        Send money
                      </a></li>
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        Request money
                      </a></li>
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        PayPal.Me
                      </a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Shop & Pay</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        Shop online
                      </a></li>
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        PayPal Credit
                      </a></li>
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        Rewards
                      </a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Manage Money</h3>
                    <ul class="space-y-3">
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        PayPal Balance
                      </a></li>
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        Transfer to bank
                      </a></li>
                      <li><a href="#" class="text-gray-600 hover:text-paypal-blue transition-colors duration-200 flex items-center">
                        <span class="w-2 h-2 bg-paypal-blue rounded-full mr-3"></span>
                        Activity
                      </a></li>
                    </ul>
                  </div>
                </div>
                <!-- Featured Section -->
                <div class="mt-8 pt-8 border-t border-gray-200">
                  <div class="bg-gradient-to-r from-paypal-blue to-paypal-blue-light rounded-lg p-6 text-white">
                    <h4 class="text-lg font-semibold mb-2">Get the PayPal app</h4>
                    <p class="text-paypal-blue-100 mb-4">Send money, track spending, and manage your account on the go.</p>
                    <button class="bg-white text-paypal-blue px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200">
                      Download now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Business -->
          <a href="#" class="text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200">
            Business
          </a>

          <!-- Enterprise -->
          <a href="#" class="text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200">
            Enterprise
          </a>

          <!-- Partners -->
          <a href="#" class="text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200">
            Partners
          </a>

          <!-- Help & FAQ -->
          <a href="#" class="text-gray-700 hover:text-paypal-blue px-3 py-2 text-sm font-medium transition-colors duration-200">
            Help & FAQ
          </a>
        </div>

        <!-- Desktop CTA Buttons -->
        <div class="hidden lg:flex lg:items-center lg:space-x-4">
          <button class="text-paypal-blue hover:text-paypal-blue-dark px-4 py-2 text-sm font-medium transition-colors duration-200">
            Log In
          </button>
          <button class="bg-paypal-blue hover:bg-paypal-blue-dark text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
            Sign Up
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-700 hover:text-paypal-blue p-2 rounded-md transition-colors duration-200">
            <svg v-if="!isOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isOpen" class="lg:hidden bg-white border-t border-gray-200 shadow-lg">
      <div class="px-4 py-6 space-y-4">
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium">Personal</a>
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium">Business</a>
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium">Enterprise</a>
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium">Partners</a>
        <a href="#" class="block text-gray-700 hover:text-paypal-blue py-2 text-base font-medium">Help & FAQ</a>

        <!-- Mobile CTA Buttons -->
        <div class="pt-4 space-y-3">
          <button class="w-full text-paypal-blue hover:text-paypal-blue-dark py-3 text-base font-medium border border-paypal-blue rounded-lg transition-colors duration-200">
            Log In
          </button>
          <button class="w-full bg-paypal-blue hover:bg-paypal-blue-dark text-white py-3 rounded-lg text-base font-medium transition-colors duration-200 shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>