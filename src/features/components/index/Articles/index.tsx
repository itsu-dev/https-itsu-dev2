import styles from "./styles.module.css";
import ResponsiveSection from "../../../../components/ResponsiveSection";
import VerticalTitle from "../../../../components/VerticalTitle";
import Article from "./Article";
import {Article as ArticleType} from "../../../../types"
import {useEffect, useState} from "react";

export default function Articles() {
    const [articles, setArticles] = useState<ArticleType[]>([]);

    useEffect(() => {
        fetch("/articles/articles.json")
            .then(response => response.json())
            .then(data => setArticles(data["articles"]));
    }, []);

    return (
        <ResponsiveSection style={{paddingBottom: "8.022rem"}}>
            <VerticalTitle text={"Articles"} />
            <div className={styles.articles}>
                { articles.slice(0, 2).map((article, index) =>
                    <Article
                        key={index}
                        title={article.title}
                        date={article.date}
                        image={article.image}
                        link={article.url} />
                )}
            </div>
            <p className={styles.more}>🚧 More...</p>
        </ResponsiveSection>
    )
}