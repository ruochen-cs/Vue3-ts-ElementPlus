<script setup lang="ts">
import { onMounted } from "vue";
//npm install xgplayer，对于已有项目也可以通过 CDN 引入
import Player from "xgplayer/dist/simple_player";
import volume from "xgplayer/es/controls/volume";
import { deviceDetection } from "@pureadmin/utils";
import screenShot from "xgplayer/es/controls/screenShot";
import playbackRate from "xgplayer/es/controls/playbackRate";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import VideoPlay from "@iconify-icons/ep/video-play";

defineOptions({
  name: "Video"
});

onMounted(() => {
  //实例化
  new Player({
    id: "mse",
    // 默认静音 0
    volume: 0,
    //自动播放
    autoplay: true,
    //截图
    screenShot: true,
    url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
    //封面图
    poster:
      "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
    fluid: deviceDetection(),
    controlPlugins: [volume, playbackRate, screenShot],
    //传入倍速可选数组
    playbackRate: [0.5, 0.75, 1, 1.5, 2]
  });
});
</script>

<template>
  <el-card shadow="never">
    <template #header>
      <div class="card-header">
        <span class="font-medium">
          视频组件，采用开源的
          <el-link
            href="https://v2.h5player.bytedance.com"
            target="_blank"
            :icon="useRenderIcon(VideoPlay)"
            style="font-size: 16px; margin: 0 4px 5px"
            title="跳转"
          >
            西瓜播放器
          </el-link>
        </span>
      </div>
    </template>
    <div id="mse" />
  </el-card>
</template>

<style scoped>
#mse {
  flex: auto;
}
</style>
