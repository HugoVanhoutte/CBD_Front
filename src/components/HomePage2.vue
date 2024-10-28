<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/media-has-caption -->
 <template>
  <div class="slider"
    @mousedown="startDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @mousemove="onDrag"
  >
    <div class="slides" :style="{transform: `translateX(-${ currentSlide * 100}%)`}">
      <div class="slide" v-for="video, id in videos" :key="id">
          <video autoplay :src="require(`@/assets/video/${video}.mp4`)" class="video"></video>
      </div>
    </div>
    <div class="prout" @click="test()" @keydown="test()">Prout</div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const videos: Ref<string[]> = ref(['a', 'b', 'c', 'd', 'e']);
const currentSlide: Ref<number> = ref(0);
const isDragging: Ref<boolean> = ref(false);
const startX: Ref<number> = ref(0);
const offsetX: Ref<number> = ref(0);

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + videos.value.length) % videos.value.length;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % videos.value.length;
};

const startDrag = (e: { clientX: number; }) => {
  isDragging.value = true;
  startX.value = e.clientX;
  offsetX.value = 0;
};
const onDrag = (e: { clientX: number; }) => {
  if (!isDragging.value) return;
  offsetX.value = e.clientX - startX.value;

  if (Math.abs(offsetX.value) > 50) {
    if (offsetX.value > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }
};

const endDrag = () => {
  isDragging.value = false;
};

const test = () => {
  nextSlide();
};
</script>

<style lang="scss" scoped>
.prout {
  position: absolute;
  bottom: -50px;
  left: 40px;
}
.slider {
  position: relative;
  width: 70%;
  margin: auto;
  cursor: grab;
  padding: 10px;
  overflow: hidden;
}

.slides {
  position: relative;
  width: 100%;
  display: flex;
  transition: .5s;
}

.slide {
  position: relative;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    height: 500px;
  }
}
</style>
