import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    <div>
<h1 className="text-center text-4xl">Notfound</h1>
<div>
    <Link to="/" className="px-3 py-1 bg-red-500 font-mono text-white">Back To Home</Link>
</div>
    </div>
  )
}
export default Notfound