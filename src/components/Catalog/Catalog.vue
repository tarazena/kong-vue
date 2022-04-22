<template>
  <div class="catalog-container">
    <div class="title-action-container">
      <span class="title-text">Services</span>
      <KButton appearance="primary" :isRounded="false" class="add-service-button">
        Add New Service
      </KButton>
    </div>
    <div class="title-action-container extra-padding-top">
      <KInput
        v-model="searchTerm"
        type="search"
        value="search"
        placeholder="Search"
        class="search-button"
      />
    </div>
    <div class="catalog">
      <span v-if="getFilteredServices.length === 0">No services found</span>
      <KCard v-for="service in getFilteredServices" :key="service.id" class="service">
        <template slot="title">
          <span class="card-title">{{ service.name }}</span>
        </template>
        <template slot="body">
          <div class="text-container">
            <div class="description">
              {{ service.description }}
            </div>
            <span>
              <div class="badge">
                <span>{{ service.versions.length }}</span>
              </div>
              <span class="badge-label">Versions</span>
            </span>
          </div>
        </template>
      </KCard>
    </div>
    <div class="title-action-container pagination">
      <button class="rounded-button" :class="{ disabled: start === 0 }" @click="handleBack()">
        <KIcon icon="back" />
      </button>
      <span class="pagination-text">
        {{ start * 12 }} - {{ lastIndex }} of {{ filteredServices.length }}
      </span>
      <button
        class="rounded-button"
        :class="{ disabled: (start + 1) * 12 > services.length }"
        @click="handleNext()"
      >
        <KIcon icon="forward" class="arrow-icon" />
      </button>
      <!-- <KPagination
        :items="services"
        :totalCount="services.length"
        :pageSizes="[12]"
        :initialPageSize="12"
        :disablePageJump="true"
        @pageChanged="({ visibleItems }) => (filteredServices = visibleItems)"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" src="./Catalog.ts" />
<style lang="scss" src="./Catalog.scss" />
