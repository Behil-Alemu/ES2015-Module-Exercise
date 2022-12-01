// const Choice = (items) => {
// 	let idx = Math.floor(Math.random() * items.lenght);
// 	return (items[idx]);
// };

function Choice(items) {
	let idx = Math.floor(Math.random() * items.length);
	return items[idx];
}



function Remove(item, items) {
    for (let i = 0; i < items.length; i++) {
         console.log(i)

      if (items[i] === item) {
        return [...items.slice(0, i), ...items.slice(i + 1)]
      }
    }
  }
// const Remove = (item, items) => {
// 	for (let i in items) {
// 		if (i === item) {
// 			return i;
// 		} else {
// 			return undefined;
// 		}
// 	}
// };

export { Choice, Remove };
