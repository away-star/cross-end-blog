import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

//定义背景为粒子效果
const ParticleBackground = () => {
    //初始化粒子
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // 加载 tsparticles 实例，可以在此添加自定义形状或预设。
        // 此处加载 tsparticles 包，是最简单的方法准备好所有内容，从 v2 开始，您只需添加所需功能即可减小包大小
        await loadFull(engine);
    }, []);

    //粒子加载状态监测
    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    //初始化粒子效果配置项
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    //背景颜色
                    color: {
                        value: "#b0c7d5",
                    },
                    //背景图片
                    image: "url('https://www.toptal.com/designers/subtlepatterns/patterns/stardust.png')",
                    //背景图片位置
                    position: "50% 50%",
                    //背景图片是否重复
                    repeat: "no-repeat",
                    //背景图片尺寸
                    size: "cover",
                    //背景图片透明度
                    opacity: 1
                },
                // 每秒帧数
                fpsLimit: 120,
                //互动性配置项
                interactivity: {
                    events: {
                        //鼠标点击事件
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        //鼠标悬停事件
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        //窗口大小调整事件
                        resize: true,
                    },
                    modes: {
                        //推动模式
                        push: {
                            quantity: 4,
                        },
                        //击退模式
                        repulse: {
                            distance: 100,
                            duration: 50,
                        },
                    },
                },
                //粒子效果配置项
                particles: {
                    color: {
                        value: "#76afc8",
                    },
                    links: {
                        //连接线颜色
                        color: "#7c7676",
                        //连接距离
                        distance: 150,
                        //连接是否启用
                        enable: true,
                        //连接线透明度
                        opacity: 0.5,
                        //连接线宽度
                        width: 1,
                    },
                    //碰撞是否启用
                    collisions: {
                        enable: true,
                    },
                    move: {
                        //移动方向
                        direction: "none",
                        //是否启用移动
                        enable: true,
                        //出界模式
                        outModes: {
                            default: "bounce",
                        },
                        //是否随机移动
                        random: false,
                        //移动速度
                        speed: 3,
                        //是否为直线移动
                        straight: false,
                    },
                    //粒子数量
                    number: {
                        density: {
                            //是否启用粒子密度控制
                            enable: true,
                            //面积
                            area: 800,
                        },
                        value: 80,
                    },
                    //粒子透明度
                    opacity: {
                        value: 0.5,
                    },
                    //粒子形状
                    shape: {
                        type: "circle",
                    },
                    //粒子大小
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                //检测视网膜屏幕
                detectRetina: true,
            }}
        />
    );
};
export default ParticleBackground;
