import React, {useLayoutEffect} from "react";
import styles from './index.less';

export type DevelopmentTimeLineItem = {
    title: string;
    desc: string;
    date: string;
    showImg: string;
}

interface IProp {
    item: DevelopmentTimeLineItem[];
}

const DevelopmentTimeLine: React.FC<IProp> = (props) => {

    const items = props.item;

    interface Selectors {
        id: HTMLElement; // 用于存储具有特定id的HTML元素
        item: NodeListOf<HTMLElement>; // 用于存储具有特定类名的一组HTML元素
        activeClass: string; // 用于存储表示活动状态的类名
        img: string; // 用于存储表示图像元素的选择器
    }

    function timeline(): void {  // 定义名为timeline的函数，没有返回值
        const selectors: Selectors = {  // 定义名为selectors的常量，类型为Selectors
            id: document.getElementById("shell")!,  // 获取具有"id"为"shell"的HTML元素
            item: document.querySelectorAll(`#shell .${styles.item}`),  // 获取具有类名"item"的所有在"id"为"shell"的HTML元素内的HTML元素
            activeClass: `${styles.itemActive}`,  // 设置活动状态的类名
            img: `.${styles.img}`,  // 图像元素的选择器
        };

        const itemLength = selectors.item.length;  // 获取selectors.item的长度，赋值给itemLength变量
        let activeIndex = 0;  // 定义名为activeIndex的变量，初始值为0

        function setActiveItem(index: number): void {  // 定义名为setActiveItem的函数，参数为index（类型为number），没有返回值
            selectors.item[activeIndex].classList.remove(selectors.activeClass);  // 移除selectors.item[activeIndex]的class列表中的selectors.activeClass
            selectors.item[index].classList.add(selectors.activeClass);  // 将selectors.activeClass添加到selectors.item[index]的class列表中
            selectors.id.style.backgroundImage = `url(${selectors.item[index].querySelector(selectors.img)!.getAttribute("src")})`;  // 设置selectors.id的背景图像为selectors.item[index]中的img元素的src属性值
            activeIndex = index;  // 将activeIndex的值设置为index
        }

        function handleScroll(): void {  // 定义名为handleScroll的函数，没有参数，没有返回值
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;  // 获取滚动条的垂直偏移量

            let activeItemIndex = activeIndex;  // 定义名为activeItemIndex的变量，初始值为activeIndex

            selectors.item.forEach(function (item, i) {  // 遍历selectors.item数组，对每个元素执行回调函数
                ("执行");  // 输出"执行"到控制台
                const rect = item.getBoundingClientRect();  // 获取元素的大小及其相对于视口的位置
                const itemTop = rect.top + scrollTop;  // 计算元素相对于文档顶部的偏移量
                const itemBottom = itemTop + rect.height;  // 计算元素底部相对于文档顶部的偏移量

                if (i === itemLength - 2 && scrollTop > itemBottom - rect.height / 2) {  // 如果是倒数第二个元素且滚动条位置超过元素底部减去元素高度的一半
                    activeItemIndex = itemLength - 1;  // 将activeItemIndex设置为最后一个元素的索引
                } else if (scrollTop <= itemBottom - 10 && scrollTop >= itemTop-250) {  // 如果滚动条位置在元素顶部和底部之间，并且滚动条位置距离元素底部大于500像素
                    activeItemIndex = i;  // 将activeItemIndex设置为当前元素的索引
                }
            });

            if (activeItemIndex !== activeIndex) {  // 如果activeItemIndex不等于activeIndex
                setActiveItem(activeItemIndex);  // 调用setActiveItem函数，将activeItemIndex作为参数传递给它
            }
        }

        setActiveItem(activeIndex);  // 调用setActiveItem函数，将activeIndex作为参数传递给它
        window.addEventListener("scroll", handleScroll);  // 监听滚动事件，当滚动事件发生时调用handleScroll函数
    }


    useLayoutEffect(() => {
        timeline();
    }, []);

    return (
        <div className={styles.shell} id="shell">
            <div className={styles.header}>
                <h2 className={styles.title}>开发日记</h2>
                <h3 className={styles.subtitle}>cross</h3>
            </div>
            <div className={styles.timeline}>
                {
                    items.map((item, index) => {
                        return <div className={styles.item} data-text={item.title} key={index}>
                            <div>
                                <img src={item.showImg} alt=""
                                     className={styles.img}/>
                                <h2 className={styles.contentTitle}>{item.date}</h2>
                                <p className={styles.contentDesc}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}


export default DevelopmentTimeLine;