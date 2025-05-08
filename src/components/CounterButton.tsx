import { useState } from "react";

function CounterButton({ initialCount = 0 }: { initialCount?: number }) {
	const [count, setCount] = useState(initialCount);
	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	);
}

export default CounterButton;
