import styles from './Report.module.scss'

export default function Report() {
  return (
    <>
      <report className="report">
        <b className="status">Unclassified</b>
        {/*<h1>Office of the Director of National Intelligence</h1>*/}
        <h1>Department of Defense</h1>
        <h2>National Geospatial-Intelligence Agency National Reconnaissance Office</h2>
        <p align="right">17 JUN 21</p>
        <p>
          SUBJECT: JTF NRO "VISITOR" INTERROGATION SOP DTD 10 JUN 21<br/><br/>
          1. On 14 May 21, prior the "Decision Making" brief with the CG, you provided me a copy of JTF NRO VISITOR INTERROGATION SOP dated 10 Jun 10 and asked me to review it and provide you my option.
          <span className="redacted">{" ".repeat(100)}</span>. However, I do want to reiterate CITR-G's general position on this matter. As outlined in our memorandum for JTF NRO dated 15 May 21, CITR-G 
          <span className="redacted">{" ".repeat(80)}</span>. While the subject SOP clearly does not apply to LEA (CITF and FBI) tererrogators (applicable only, to military and civilian interrogators assigned to JTF-NRO), LEA in conjunection with FBI's Behavioral Analysis Unit want to provide you the following general observations on 
          <span className="redacted">{" ".repeat(150)}</span>.
          <br/><br/>
          2. <u>General Observations</u>: Both the military and LEA share the idential mission of obtaining intelligence in order to prevent future attacks on Americans. However, LEA has the additional responsibility of seeking reliable information/evidence from detainees to be used in subsequent legal proceedings.
          <br/><br/>
          3. <span className="redacted">{" ".repeat(1200)}</span>
        </p>
      </report>
    </>
    )
}
