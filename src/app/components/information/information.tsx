import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"
export function Info(){
    return(
        <div className="infos">
            <SectionTitle text="Languages"/>
            <div className="languages-info">
                <span>🇺🇸 EN - Fluent</span>
                <span>🇧🇷 PT-BR - Native Speaker</span>
            </div>
            <SectionTitle text="Education"/>
            <div className="educational-info">
                <span>🎓</span>
                <span>Superior of Technology in Systems Analysis and Development - Uninassau</span>
            </div>
        </div>
    )
}