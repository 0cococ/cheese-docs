import {defineConfig} from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
    // plugins:[pagefindPlugin()],
    base: '/',
    title: "Cheese",
    description: "自动化测试框架",
    themeConfig: {

        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            // {text: '主页', link: '/'},
            // {text: 'Sdk更新记录', link: '/sdk-version'},
            // {text: 'Vscode插件更新记录', link: '/vs-version'},
            // {text: '安卓文档', link: '/android'},
            // {text: 'IOS文档', link: '/ios'},
            // {text: 'Usb-Hid文档', link: '/usb-hid-pc'},
            // {text: '开源许可信息', link: '/open-source-libraries'},
        ],

        sidebar: [
            {
                text: '全局函数和变量',
                link: '/other/globals'
            },
            {
                text: '使用手册',
                collapsed: true,
                items: [
                    {text: '介绍', link: '/other/introduce'},
                    {text: '图标描述', link: '/other/icon-description'},
                    {text: '玩转异步和同步?', link: '/other/async-and-sync'},
                ]
            },


            {
                text: '安卓文档',
                collapsed: true,
                items: [
                    {
                        text: 'yolo Yolo函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/yolo'},
                        ]
                    },
                    {
                        text: 'app 应用函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/app'},
                        ]
                    },

                    {
                        text: 'assets 资产函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/assets'},
                        ]
                    },


                    {
                        text: 'class 类函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/class'},
                        ]
                    },

                    {
                        text: 'cv 图色函数',
                        collapsed: true,
                        items: [
                            {text: 'color 颜色函数', link: '/sdk_api/cv/colors'},
                            {text: 'images 图片函数', link: '/sdk_api/cv/images'},
                        ]
                    },
                    {
                        text: 'console 控制台函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/console'},
                        ]
                    },

                    {
                        text: 'device 设备函数',
                        collapsed: true,
                        items: [

                            {text: '展开所有方法', link: '/sdk_api/device'},

                        ]
                    },


                    {
                        text: 'files 文件函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/files'},

                        ]
                    },

                    {
                        text: 'floaty 悬浮窗函数',
                        collapsed: true,
                        items: [

                            {text: '展开所有方法', link: '/sdk_api/floaty'},
                        ]
                    },


                    {
                        text: 'base 基础函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/base'},
                        ]
                    },

                    {
                        text: 'http 网络函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/http'},
                        ]
                    },


                    {
                        text: 'keyboard 键盘函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/keyboard'},

                        ]
                    },
                    {
                        text: 'keys 按键函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/keys'},
                        ]
                    },
                    {
                        text: 'os 文件系统函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/os'},
                        ]
                    },

                    {
                        text: 'uinode 界面节点函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/uinode'},
                        ]
                    },
                    {
                        text: 'point 坐标函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/point'},


                        ]
                    },

                    {
                        text: 'permissions 权限函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/permissions'},


                        ]
                    },
                    {
                        text: 'recordscreen 录屏函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/recordscreen'},

                        ]
                    },
                    {
                        text: 'release 释放函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/release'},


                        ]
                    },
                    {
                        text: 'socket socket函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/socket'},

                        ]
                    },

                    {
                        text: 'time 时间函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/time'},
                        ]
                    },
                    {
                        text: 'converters 转换函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/converters'},
                        ]
                    },

                    {
                        text: 'ui 界面函数',
                        collapsed: true,
                        items: [
                            {text: 'xml 函数', link: '/sdk_api/ui/xml'},
                            {text: 'vue 函数[开发中]'},
                        ]
                    },
                    {
                        text: 'zip 解压函数',
                        collapsed: true,
                        items: [
                            {text: '展开所有方法', link: '/sdk_api/zip'},

                        ]
                    },


                ]
            },
            {
                text: 'IOS文档',
                collapsed: true,
                items: [

                    {text: '开发中'},

                ]
            },
            {
                text: 'HiD文档',
                collapsed: true,
                items: [
                    {text: 'usb 文档', link: '/hid_api/usb'},
                    {text: 'bt 文档[开发中]'},
                ]
            },
            {
                text: '开源依赖',
                collapsed: true,
                items: [
                    {text:'开源版权许可信息', link: '/other/depend'},
                ]
            },
            {
                text: '更新记录',
                collapsed: true,
                items: [
                    {text: 'SDK更新记录', link: '/version/sdk'},
                    {text: 'VS插件更新记录', link: '/version/vs'},

                ]
            }
        ],


        socialLinks: [
            {icon: 'github', link: 'https://github.com/0cococ'}
        ]
    }
})
