import './App.css'
import Ayush from './components/btn.jsx';

function App() {

  return (
      <div className="bg-slate-700 h-20 w-[80%] left-[10vw] rounded-2xl fixed bottom-8 flex justify-around items-center ">
        <Ayush colorname="Red" />
        <Ayush colorname="Green" />
        <Ayush colorname="Blue" />
        <Ayush colorname="Olive" />
        <Ayush colorname="Grey" />
        <Ayush colorname="Yellow" textcolor="black" />
        <Ayush colorname="Pink" textcolor="black" />
        <Ayush colorname="Purple" />
        <Ayush colorname="Lavender" textcolor="black" />
        <Ayush colorname="White" textcolor="black" />
        <Ayush colorname="Black" />
      </div>
    
  );
}

export default App
