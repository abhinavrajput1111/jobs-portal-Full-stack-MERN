
import Header from "../assets/components/Header"

const Homepage = () => {
  return (
<>
<Header style={{position:"fixed"}}/>
<div className="fixed mt-20 border-2 p-5 border-red-500 w-screen h-screen">
<h1 className="text-3xl font-bold text-green-500">This is Homepage</h1>
</div>
</>
  )
}
export default Homepage