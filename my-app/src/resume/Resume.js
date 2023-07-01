import './Resume.css';

export default function Resume({name,title,url,email,phone,linkedin,skill,education,bio}){
    return(
        <>
        <div className="main">
        <div className="top-section">
            <img src={url} className="profile" />
          <p className="p1"> <span>{name}</span></p>
            <p className="p2">{title}</p>
        </div>
        <div className="clearifix"></div>
        <div className="col-div-4">
    <div className="content-box" style={{}}>
      <p className="head">Contact</p>
      <li>
        <span> {phone}</span>
      </li>
      <li>
        <span style={{ fontSize: 11 }}> {email}</span>
      </li>
      <br />
      <p className="head">Skills</p>
      <ul className="skills">
        <li>
          <span>{skill[0]}</span>
        </li>
        <li>
          <span>{skill[1]}</span>
        </li>
        <li>
          <span>{skill[2]}</span>
        </li>
      </ul>
      <br />
      <p className="head">Education</p>
      <p className="p3">{education[0]}</p>
      <p className="p3">{education[1]}</p>
    </div>
  </div>
  <div className="line" />
  <div className="col-div-4">
  <div className="content-box">
    <p className="head">Profile</p>
    <p className="p3" style={{ fontSize: 12 }}>
      {bio}
    </p>
    <p className="head">LinkedIN</p>
    <a href={linkedin} target="_blank">
      {name}
    </a>
  </div>
</div>
        </div>
        </>
    )
}