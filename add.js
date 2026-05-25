async function sendData() {
	const a = document.getElementById('number-input-1').value;
	const b = document.getElementById('number-input-2').value;

	try {
		const res = await fetch('http://127.0.0.1:8000/calculator/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ a, b })
		});

		if (!res.ok) {
			throw new Error(await res.text());
		}

		const json = await res.json();
		document.getElementById('result-label').textContent =
			'Result: ' + (json.result ?? JSON.stringify(json));
	} catch (err) {
		document.getElementById('result-label').textContent = 'Error: ' + err.message;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	const addButton = document.getElementById('add');
	if (addButton) {
		addButton.addEventListener('click', sendData);
	}
});
