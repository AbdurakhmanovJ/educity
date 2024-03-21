
function Title({subTitle, title}) {
  return (
    <div className="title">
        <p className="title-text">{subTitle}</p>
        <h2 className="title-title">{title}</h2>
    </div>
  )
}

export default Title