import img from '../assets/images/Logo-Hope.png';

const Logo = ():JSX.Element => {
  return (
    <div className="flex gap-2 mb-10">
      <img src={img} alt="logo" className="w-7 h-7" />
      <span className="text-3xl"> Hope UI </span>
    </div>
  )
}

Logo.propTypes = {}

export default Logo