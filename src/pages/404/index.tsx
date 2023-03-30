import styles from './index.less'
import BackHome from "@/components/btn/BackHome";
import {Row} from "antd";
import {history} from "umi";

function NotFound() {
    return (
        <>
        <div className={styles['not-found']}>
            <div className={styles.vortex}>
                <div className={styles['outer-ring']}></div>
                <div className={styles['inner-ring']}></div>
                <div className={styles.center}>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </div>

        </div>
            <Row justify="center" style={{marginTop:80}}>
            <BackHome text={'Back Home'} onClick={()=>{
                history.push('/blog/home')}
            } />
            </Row>
        </>
    );
}

export default NotFound;
