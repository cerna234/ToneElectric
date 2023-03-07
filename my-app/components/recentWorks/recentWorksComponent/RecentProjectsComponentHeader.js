import Styles from "../recentWorksComponent/recentWorksHeader.module.scss"

const RecentProjectsComponentHeader = () => {
    return(
        <div className={Styles.headerContainer}>
            <div className={Styles.headerInnerContainer}>
                <h2>Recent Projects</h2>
                <p>jjdb</p>
            </div>
        </div>
    )
}

export default RecentProjectsComponentHeader;