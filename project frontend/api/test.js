
const e = React.createElement;
let x = 0;
const [number,setNumber] = useState(0);

const increaseNumb = () => {
    x = x + 1;
    document.getElementById('counter').innerHTML = x
    
}

const increaseNumber = () =>{
    setNumber(number+1)
    console.log()
}