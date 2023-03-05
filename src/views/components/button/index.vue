<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "Button"
});

const { VITE_PUBLIC_PATH } = import.meta.env;

const url = ref(`${VITE_PUBLIC_PATH}html/button.html`);
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">按钮页面</span>
      </div>
    </template>
    <div class="btn vb">
      <span>CV攻城狮</span>
      <div class="dot"></div>
    </div>
  </el-card>
</template>
<style lang="scss" scoped>
.vb {
  position: relative;
  width: 120px;
  color: #fa5555;
  height: 40px;
  line-height: 42px;
  border: 2px solid #fa5555;
  border-radius: 14px;
  text-transform: uppercase;
  text-align: center;
}
.dot {
  content: "";
  position: absolute;
  top: 0;
  width: 32px;
  height: 100%;
  border-radius: 50%;
  transition: all 300ms ease;
  display: none;
}

.dot:after {
  content: "";
  position: absolute;
  top: -6px;
  height: 5px;
  width: 5px;
  background: #fa5555;
  border-radius: 50%;
  border: 4px solid #fa5555;
  box-shadow: 0 0 0.7em #fff, 0 0 2em #fa5555;
}

.vb:hover .dot,
.vb:focus .dot {
  animation: atom 2s infinite linear;
  display: block;
}

/*calc(122px - 36px)  按钮宽度 - dot宽度 - 边框宽度*/
@keyframes atom {
  0% {
    transform: translateX(0) rotate(0);
  }

  30% {
    transform: translateX(calc(122px - 36px)) rotate(0);
  }

  50% {
    transform: translateX(calc(122px - 36px)) rotate(180deg);
  }

  80% {
    transform: translateX(0) rotate(180deg);
  }

  100% {
    transform: translateX(0) rotate(360deg);
  }
}
.vb:before,
.vb:after {
  box-sizing: border-box;
}

.vb {
  position: relative;
  width: 120px;
  color: #fa5555;
  height: 40px;
  line-height: 42px;
  border: 2px solid #fa5555;
  border-radius: 14px;
  text-transform: uppercase;
}
.vb:hover .dot,
.vb:focus .dot {
  animation: atom 2s infinite linear;
  display: block;
}
</style>
