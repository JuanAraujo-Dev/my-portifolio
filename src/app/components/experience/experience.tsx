import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import "./experience.scss"

export function Experience(){
    return(
     <div className="experience">
        <SectionTitle text="Experience"/>
        <p>1 year working as a software developer and network analyst at Simprovider.</p>
        <div className="experience-time">
          <div className="experience-language">
            <Image
              src="/react.png"
              alt="React Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span>1 year</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <Image
              src="/js.png"
              alt="Js Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span>1 year</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <Image
              src="/ts.png"
              alt="Ts Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span>1 year</span>
              </div>
            </div>
          </div>
          <div className="experience-language">
            <Image
              src="/python.png"
              alt="Python Logo"
              width={40}
              height={40}
              priority
            />
            <div className="experience-unit">
              <div className="experience-measure measure-1">
                <span>1 year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}