// import InformationLine from "@iconify-icons/ri/information-line"

export default {
  path: "/components",
  redirect: "/components",
  meta: {
    icon: "twemoji:blue-heart",
    title: "组件",
    rank: 9
  },
  children: [
    {
      path: "/components/video",
      name: "shipin",
      component: () => import("@/views/components/video/index.vue"),
      meta: {
        title: "视频"
        // 只有一层子级通过设置showParent为true，显示父级
        // showParent: true
      }
    },
    {
      path: "/components/button",
      name: "Button",
      component: () => import("@/views/components/button/index.vue"),
      meta: {
        title: "按钮"
      }
    },
    {
      path: "/components/seamlessScroll",
      name: "SeamlessScroll",
      component: () => import("@/views/components/seamless-scroll/index.vue"),
      meta: {
        title: "滚动"
      }
    },
    {
      path: "/components/map",
      name: "Map",
      component: () => import("@/views/components/map/index.vue"),
      meta: {
        title: "地图",
        keepAlive: true,
        transition: {
          name: "fade"
        }
      }
    }
  ]
} as RouteConfigsTable
