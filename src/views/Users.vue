<template>
  <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
    <div class="flex-1 relative z-0 flex overflow-hidden">
      <main :class="{'hidden xl:block': isListOpen}" class="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
        <!-- Breadcrumb -->
        <nav class="flex items-start px-4 py-2 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
          <a href="#" class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900" @click="isListOpen = !isListOpen">
            <ChevronLeftIcon class="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Member List</span>
          </a>
        </nav>

        <article>
          <!-- Profile header -->
          <div>
            <div>
              <img class="h-32 w-full object-cover lg:h-48" :src="profile.coverImageUrl" alt="" />
            </div>
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div class="flex">
                  <img style="object-fit: cover;" class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="profile.imageUrl" alt="" />
                </div>
                <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                    <h1 class="text-2xl font-bold text-gray-900 truncate">
                      {{ profile.name }}
                    </h1>
                  </div>
                  <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                      <MailIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                <h1 class="text-2xl font-bold text-gray-900 truncate">
                  {{ profile.name }}
                </h1>
              </div>
            </div>
          </div>

          <!-- Description list -->
          <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div v-for="field in Object.keys(profile.fields)" :key="field" class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  {{ field }}
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  {{ profile.fields[field] }}
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">
                  About
                </dt>
                <dd class="mt-1 max-w-prose text-sm text-gray-900 space-y-5" v-html="profile.about" />
              </div>
            </dl>
          </div>
        </article>
      </main>

      <aside :class="{'hidden': !isListOpen}" class="w-screen xl:order-first xl:flex xl:flex-col flex-shrink-0 xl:w-96 border-r border-gray-200">
        <div class="px-6 pt-6 pb-4">
          <h2 class="text-lg font-medium text-gray-900">Member List</h2>
        </div>
        <!-- Directory list -->
        <nav class="flex-1 min-h-0 overflow-y-auto" aria-label="Directory">
          <div v-for="letter in Object.keys(directory)" :key="letter" class="relative">
            <div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
              <h3>{{ letter }}</h3>
            </div>
            <ul class="relative z-0 divide-y divide-gray-200" @click="isListOpen = false">
              <li v-for="person in directory[letter]" :key="person.id">
                <div class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500">
                  <div class="flex-shrink-0">
                    <img style="object-fit: cover;" class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <a href="#" class="focus:outline-none">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      <p class="text-sm font-medium text-gray-900">
                        {{ person.name }}
                      </p>
                      <p class="text-sm text-gray-500 truncate">
                        {{ person.role }}
                      </p>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  CalendarIcon,
  CogIcon,
  HomeIcon,
  MapIcon,
  MenuIcon,
  SearchCircleIcon,
  SpeakerphoneIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronLeftIcon, FilterIcon, MailIcon, SearchIcon } from '@heroicons/vue/solid'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'

const profile = {
  name: 'Mayson12381',
  imageUrl:
    'https://cdn.suwalls.com/wallpapers/games/gray-assassins-creed-logo-54227-400x250.jpg',
  coverImageUrl:
    'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  about:
    '\n        <p>\n This is an example description\n        </p>\n      ',
  fields: {
    Role: 'Admin',
    Team: 'Playing Aliens',
    Games: 'CS:GO, Battlefield, Apex',
    Birthday: 'September 8, 1998',
  },
}
const directory = {
  A: [
    {
      id: 1,
      name: 'User A',
      role: 'Member',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  B: [
    {
      id: 2,
      name: 'User B',
      role: 'Moderator',
      imageUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ],
  M: [
    {
      id: 5,
      name: 'Mayson12381',
      role: 'Admin',
      imageUrl:
        'https://cdn.suwalls.com/wallpapers/games/gray-assassins-creed-logo-54227-400x250.jpg',
    },
  ],
}

export default defineComponent({
  name: 'Dashboard',
  components: {
    MenuIcon,
    ChevronLeftIcon,
    MailIcon,
    SearchIcon,
    FilterIcon,
  },
  setup() {
    return {
      profile,
      directory,
      isListOpen: false,
    }
  },
})
</script>

<style>

</style>