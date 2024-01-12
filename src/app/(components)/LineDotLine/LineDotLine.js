import ldlcss from './ldl.module.css'
export default function LineDotLine() {
    return <div className={ldlcss.cont}>
        <div className={ldlcss.line}></div>
        <div className={ldlcss.dot}></div>
        <div className={ldlcss.line}></div>
    </div>
}