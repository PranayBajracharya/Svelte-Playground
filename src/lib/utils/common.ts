export function shuffleArray<T>(array: T[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function formatNumber(num: number): string {
	return num.toString().padStart(3, '0');
}

export function formatTime(ms: number): string {
	let seconds = Math.floor(ms / 1000);
	let milliseconds = formatNumber(ms - seconds * 1000);
	return seconds + ':' + milliseconds.toString().slice(0, -1);
}
