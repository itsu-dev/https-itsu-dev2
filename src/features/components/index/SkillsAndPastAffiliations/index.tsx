import styles from "./styles.module.css";
import MarkdownContainer from "../../../../components/MarkdownContainer";
import TwoColumn from "../../../../components/TwoColumn";

export default function SkillsAndPastAffiliations() {
    return (
        <TwoColumn className={styles.wrapper} column1Title={"Skills"} column2Title={"Pasts"}
                   column1Content={<MarkdownContainer url={"/articles/skills.md"} />}
                   column2Content={<MarkdownContainer url={"/articles/pasts.md"} />} />
    );
}