<template>
  <div class="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
  </div>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <div>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            Total Wins
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            9
          </dd>
        </div>

        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            Total Kills
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            92
          </dd>
        </div>

        <div class="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt class="text-sm font-medium text-gray-500 truncate">
            Avg. K/D
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            1.35
          </dd>
        </div>
      </dl>
    </div>
  </div>

  <div class="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="text-xl font-semibold text-gray-900">My Events</h1>
  </div>

  <div class="p-6 md:px-8 flex flex-col hidden sm:block">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Players
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Game
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tournie, tournieIdx) in tournies" :key="tournie.name + tournie.date" :class="tournieIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {{ tournie.name }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ tournie.date }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ tournie.players }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ tournie.game }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-4 my-6 sm:hidden bg-white shadow overflow-hidden rounded-lg">
    <ul class="divide-y divide-gray-200">
      <li v-for="tournie in tournies" :key="tournie.name + tournie.date">
        <a href="#" class="block hover:bg-gray-50">
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">
                {{ tournie.name }}
              </p>
              <div class="ml-2 flex-shrink-0 flex">
                <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ tournie.players }}
                </p>
              </div>
            </div>
            <div class="mt-2">
              <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <p>
                  {{ tournie.date }}
                </p>
              </div>
              <div class="sm:flex">
                <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                  <DesktopComputerIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  {{ tournie.game }}
                </p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CalendarIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'Dashboard',
    components: {
    CalendarIcon,
    DesktopComputerIcon,
    UsersIcon,
  },
  data() {
    return {
      isSidebarOpen: false,
      tournies: [
        {
          name: "Wingman Tournament",
          date: "20.05.2021",
          players: "10/16",
          game: "CS:GO",
        },
        {
          name: "Gaming Hangout",
          date: "25.05.2021",
          players: "20",
          game: "BF4",
        },
        {
          name: "1v1 Tournament",
          date: "22.06.2021",
          players: "7/16",
          game: "CS:GO",
        },
        {
          name: "Gaming Hangout",
          date: "25.06.2021",
          players: "5",
          game: "Valheim",
        },
        {
          name: "Internal 5v5",
          date: "30.06.2021",
          players: "11/20",
          game: "CS:GO",
        },
      ],
    }
  }
})
</script>
