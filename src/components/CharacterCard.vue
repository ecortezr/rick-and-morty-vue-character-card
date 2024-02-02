<script setup lang="ts">
import type { ICharacter } from '@/types';
import FavoriteIcon from './icons/IconFavorite.vue'
import FavoriteActiveIcon from './icons/IconFavoriteActive.vue'
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    characterData: ICharacter,
    maxWidth?: string,
    isFavorite?: boolean
}>(), {
    maxWidth: () => ''
})

const { characterData, maxWidth } = props;
const {
    firstEpisodeName,
    image,
    locationName,
    name,
    species,
    status
} = characterData;


const classObject = computed(() => ({
    'card__status--alive': status === 'Alive',
    'card__status--dead': status === 'Dead',
    'card__status--unknown': status === 'unknown'
}))

const maxValueProp = computed(() => (maxWidth.length === 0)
    ? { 'max-width': maxWidth }
    : {}
)
</script>

<template>
    <div class="card" :style="maxValueProp">
        <img id="card-image" class="card__image" :src="image" />
        <div id="favorite-icon-wrapper" class="card__favorite">
        </div>
        <div id="favorite-icon-container" class="card__star-container">
            <FavoriteActiveIcon id="favorite-icon-on" v-if="isFavorite" />
            <FavoriteIcon id="favorite-icon-off" v-else />
        </div>
        <div id="card-content" class="card__content">
            <div class="card-content__section" data-test="card-section">
                <span id="card-status-species" class="card__status-species">
                    <span id="card-status" class="card__status" :class="classObject"></span>
                    {{ status }} - {{ species }}
                </span>
                <span id="card-name" class="card__character-name">
                    {{ name }}
                </span>
            </div>
            <div class="card-content__section" data-test="card-section">
                <span class="card__label" data-test="location-label">
                    Last known location:
                </span>
                <span id="card-location-value" class="card__field">
                    {{ locationName }}
                </span>
            </div>
            <div class="card-content__section" data-test="card-section">
                <span class="card__label" data-test="first-seen-label">
                    First seen in:
                </span>
                <span id="card-episode" class="card__field">
                    {{ firstEpisodeName ?? "" }}
                </span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card {
    display: flex;
    position: relative;
    min-width: 326px;
    max-height: 140px;
    margin: 5px;
}

.card__image {
    width: 140px;
    height: 140px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px
}

.card__favorite {
    width: 30px;
    height: 30px;
    left: 101px;
    top: 105px;
    position: absolute;
    background: rgb(242, 242, 242);
    border-radius: 9999px
}

.card__star-container {
    width: 18px;
    height: 18px;
    left: 107px;
    top: 111px;
    position: absolute
}

.card__content {
    flex: 3 1 0%;
    position: relative;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    color: rgb(0, 0, 0);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid #e0e0e0;
    font-size: 10px;
}

.card-content__section {
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card-content__section:first-child {
    justify-content: flex-start;
}

.card-content__section:last-child {
    justify-content: flex-end;
}

.card__status-species {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-transform: capitalize;
}

.card__status {
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    border-radius: 50%;
}

.card__status--alive {
    background: rgb(39, 174, 96);
}

.card__status--dead {
    background: rgb(235, 87, 87);
}

.card__status--unknown {
    background: rgb(79, 79, 79);
}

.card__status-species {
    color: rgb(79, 79, 79);
    font-size: 10px;
}

.card__character-name {
    font-size: 16px;
}

.card__label {
    color: rgb(130, 130, 130);
}

.card__field {
    font-size: 12px;
}
</style>