const BrutusinForms = brutusin["json-forms"];

const UI = {
    container: document.getElementById('container'),
    submitButton: document.getElementById('submit'),
}

const schema = {
    $schema: "http://json-schema.org/draft-03/schema#",
    type: "object",
    properties: {
        name: {
            type: 'string',
            title: 'Nombre',
            description: 'Tu nombre, no?',
            required: true
        },
        age: {
            type: 'integer',
            title: 'Edad'
        }
    }
}

UI.submitButton.addEventListener('click', ev => {
    const data = window.form.getData()
    axios.post('api/', data).then(res => {
        console.log('api.response', res.data)
    })
})

function generate(schema) {
    const bf = BrutusinForms.create(schema);

    const data = {
        name: 'Date:' + Date.now()
    }
    UI.container.innerHTML = null
    bf.render(UI.container, data);
    return bf
}
window.form = generate(schema);
