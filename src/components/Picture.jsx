
const Picture = ({sourceImage, altImage, styles}) => {
  return (
    <div className="flex items-center justify-center">
        <img className={`${styles} lg:max-w-90`} src={sourceImage} alt={altImage} />
    </div>
  )
}

export default Picture