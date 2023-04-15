import DidmondDance from "@/components/load/DidmondDance";

// 定义居中样式
const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // 让父元素占满整个屏幕
}

export default () => {
    return (
        <div style={centerStyle}>
            <DidmondDance text={'loading'}/>
        </div>
    );
}
