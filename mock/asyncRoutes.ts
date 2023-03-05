// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock"

import Lollipop from "@iconify-icons/ep/lollipop"

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: Lollipop,
    rank: 10
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "按钮权限",
        roles: ["admin", "common"],
        auths: ["btn_add"] //绿色按钮
        // auths: ["btn_edit"] //蓝色按钮
        // auths: ["btn_add", "btn_edit", "btn_delete"]   //红色按钮
      }
    }
  ]
}

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [permissionRouter]
      }
    }
  }
] as MockMethod[]
