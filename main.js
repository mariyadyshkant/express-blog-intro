const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.listen(port, () => {
    console.log(`Il server del mio blog è in ascolto su http://localhost:${port}`);
});

app.get('/api/posts', (req, res) => {
    const posts = [
        { id: 1, title: 'Primo Post', content: 'Contenuto del primo post', image: "./images/ciambellone.jpeg", tags: [] },
        { id: 2, title: 'Secondo Post', content: 'Contenuto del secondo post', image: "./images/cracker_barbabietola.jpeg", tags: [] },
        { id: 3, title: 'Terzo Post', content: 'Contenuto del terzo post', image: "./images/pane_fritto_dolce.jpeg", tags: [] },
        { id: 4, title: 'Quarto Post', content: 'Contenuto del quarto post', image: "./images/pasta_barbabietola.jpeg", tags: [] },
        { id: 5, title: 'Quinto Post', content: 'Contenuto del quinto post', image: "./images/torta_paesana.jpeg", tags: [] },

    ];
    res.json(posts);
});

