import * as mqtt from '../../utils/mqtt.min.js'
import { ClientSubscribeCallback, MqttClient } from 'mqtt'
Page({
    data: {
        client: null as MqttClient | null,
        connected: false,
        deviceStatus: {
            temperature: 0,
            humidity: 0,
            light: false
        },
        deviceControls: [
            {
                name: '开关灯',
                type: 'switch',
                topic: 'device/light/control',
                value: false
            }
        ],
        pageHeight: 0,
    },

    onLoad() {
        this.connectMqtt();
    },

    async onShow() {
        // 通过 getTabBar 接口获取组件实例，并调用 setData 更新选中态
        this.getTabBar().setData({ active: 0 })
        try {
            const res = wx.getWindowInfo()
            console.log(res, '0100101010')
            this.data.pageHeight = res.windowHeight - 84
            this.setData({
                pageHeight: this.data.pageHeight
            });
        } catch (e) {
        }
    },
    // 连接MQTT服务器
    connectMqtt() {
        const options = {
            clientId: 'wxapp_' + Math.random().toString(16).substr(2, 8),
            username: 'your_username',
            password: 'your_password',
            keepalive: 60,
            clean: true,
        }
        console.log(mqtt, 'mqtt')
        const client = mqtt.connect('wxs://broker.emqx.io:8084/mqtt', options)

        client.on('connect', () => {
            console.log('MQTT Connected')
            this.setData({ connected: true })

            // 订阅设备状态主题
            client.subscribe('device/+/status', (err: ClientSubscribeCallback) => {
                if (!err) {
                    console.log('Subscribed to device status')
                }
            })
        })

        client.on('message', (topic: string, message: string) => {
            console.log('Received:', topic, message.toString())
            this.handleMessage(topic, message)
        })

        client.on('error', (error: ClientSubscribeCallback) => {
            console.log('MQTT Error:', error)
            wx.showToast({
                title: 'MQTT连接错误',
                icon: 'none'
            })
        })

        this.setData({ client })
    },

    // 处理接收到的消息
    handleMessage(topic: string, message: string) {
        try {
            const data = JSON.parse(message.toString())
            if (topic === 'device/status') {
                this.setData({
                    'deviceStatus.temperature': data.temperature,
                    'deviceStatus.humidity': data.humidity,
                    'deviceStatus.light': data.light
                })
            }
        } catch (e) {
            console.error('Message parse error:', e)
        }
    },

    // 发送控制命令
    sendControl(e: any) {
        console.log(e, 'e')
        const { value } = e.detail
        const { topic } = e.currentTarget.dataset
        console.log(topic, value)
        if (this.data.client && this.data.connected) {
            this.data.client.publish(topic, JSON.stringify({ value }))
        } else {
            wx.showToast({
                title: '设备未连接',
                icon: 'none'
            })
        }
    },

    onUnload() {
        if (this.data.client) {
            this.data.client.end()
        }
    }
})