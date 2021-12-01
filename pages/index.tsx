import {NextPage} from "next";
import ExternalPage from "../component/page/ExternalPage";
import {LOGO} from "../const/const";
import TopExplanation from "../component/page/top/TopExplanation";
import TopBlogList from "../component/page/top/TopBlogList";

const Home: NextPage = () => {
    return <ExternalPage>
        <TopExplanation/>
        <TopBlogList/>
    </ExternalPage>
}

export default Home
