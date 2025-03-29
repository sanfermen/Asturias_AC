// Función para extraer datos del archivo .json
async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error ('Error al cargar el json: ${response.status}')}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
}

/* function fetchData(url) {
	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error (`Error al cargar el json: ${response.status}`);
			}
			return response.json();
		})
		.catch(error => {
			console.error('Error al cargar json:', error);
			return [];
		});
} */

export {fetchData}