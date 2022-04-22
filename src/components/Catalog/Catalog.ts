import Vue from 'vue'
import KCard from '@kongponents/kcard'
import KButton from '@kongponents/kbutton'
import KInput from '@kongponents/kinput'
import KIcon from '@kongponents/kicon'

import axios from 'axios'

import { Service } from '@/interfaces'

export default Vue.extend({
  name: 'Catalog',
  components: {
    KCard,
    KButton,
    KInput,
    KIcon
  },
  data() {
    return {
      services: [] as Service[],
      filteredServices: [] as Service[],
      searchTerm: '',
      start: 0
    }
  },
  computed: {
    getFilteredServices(): Service[] {
      return this.filteredServices.filter(
        (v, i) => i >= this.start * 12 && i < (this.start + 1) * 12
      )
    },
    lastIndex(): number {
      return (this.start + 1) * 12 > this.filteredServices.length
        ? this.filteredServices.length
        : (this.start + 1) * 12
    }
  },
  watch: {
    searchTerm(val): void {
      if (val === '') {
        this.filteredServices = this.services
      } else {
        this.filteredServices = this.services.filter(s => {
          return s.name.split(' ').some(r => r.includes(val))
        })
        this.start = 0
      }
    }
  },
  mounted(): void {
    this.fetchServices()
  },
  methods: {
    fetchServices() {
      axios.get('/api/service_packages').then(res => {
        this.services = res.data
        this.filteredServices = this.services
      })
    },
    handleNext() {
      if ((this.start + 1) * 12 > this.filteredServices.length) {
        return
      }

      this.start++
    },
    handleBack() {
      if (this.start === 0) {
        return
      }

      this.start--
    }
  }
})
