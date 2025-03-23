import { useEffect, useState } from 'react'

export default function App() {
  const [advice, setAdvice] = useState("");
	const [count, setCount ] = useState(0);

  async function getAdvice() {
		const response = await fetch('https://api.adviceslip.com/advice');
		const data = await response.json();
		setAdvice(data.slip.advice);
		setCount(count + 1);
	}

	useEffect( function() {
		getAdvice();
	}, []);

  return (
    <>
      <div>
				<h1>{advice}</h1>
				<button onClick={getAdvice}> Get advice</button>
				<Message count={count}/>
      </div>
    </>
  )
}


function Message(props) {
	return (
		<p>
			You have read <strong>{props.count}</strong> pices of advice 
		</p>
	);
}