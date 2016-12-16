import express from 'express'

let app = express()

console.log('Starting to feel better')

app.get('/', (req, res) => {
	res.send(`<h1>Hello Fantasy Foot</h1>
		<h2>Se vedi questa pagina, qualcuno e bravo (senza accento)</h2>
	`)
})

app.listen(3000, () => console.log('magic appening here on 3000'))