// Conteúdo teórico por nível
const teoria = {
    basico: `
    <h3>Flexbox Básico</h3>
    <ul>
        <li><b>display: flex</b> &rarr; Ativa o contexto flex no container.</li>
        <li><b>flex-direction</b> &rarr; Define a direção dos itens (row, column, etc).</li>
        <li><b>container</b> &rarr; Elemento pai com display: flex.</li>
        <li><b>item</b> &rarr; Elementos filhos do container flex.</li>
    </ul>
    <p>Exemplo:</p>
    <pre><code>div.container {
  display: flex;
  flex-direction: row;
}</code></pre>
    `,
    intermediario: `
    <h3>Flexbox Intermediário</h3>
    <ul>
        <li><b>justify-content</b> &rarr; Alinha itens no eixo principal.</li>
        <li><b>align-items</b> &rarr; Alinha itens no eixo cruzado.</li>
        <li><b>flex-wrap</b> &rarr; Permite quebra de linha dos itens.</li>
    </ul>
    <p>Exemplo:</p>
    <pre><code>div.container {
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}</code></pre>
    `,
    avancado: `
    <h3>Flexbox Avançado</h3>
    <ul>
        <li><b>flex-grow, flex-shrink, flex-basis</b> &rarr; Controle avançado do tamanho dos itens.</li>
        <li><b>order</b> &rarr; Altera a ordem visual dos itens.</li>
        <li><b>align-self</b> &rarr; Alinha individualmente um item.</li>
    </ul>
    <p>Exemplo:</p>
    <pre><code>div.item {
  flex: 1 1 100px;
  order: 2;
  align-self: flex-end;
}</code></pre>
    `
};

// Exercícios práticos
const exercicios = [
    {
        enunciado: `1. Centralize todos os itens horizontal e verticalmente usando Flexbox.`,
        solucao: `display: flex;\njustify-content: center;\nalign-items: center;`
    },
    {
        enunciado: `2. Faça os itens ficarem em coluna e ocuparem toda a altura do container.`,
        solucao: `display: flex;\nflex-direction: column;\nheight: 100%;`
    },
    {
        enunciado: `3. Distribua os itens igualmente com espaço entre eles no eixo principal.`,
        solucao: `display: flex;\njustify-content: space-between;`
    }
];
let exercicioAtual = 0;

// Carregar teoria
const nivelBtns = document.querySelectorAll('.nivel-btn');
const conteudoTeorico = document.getElementById('conteudo-teorico');
function carregarTeoria(nivel) {
    nivelBtns.forEach(btn => btn.classList.remove('active'));
    document
        .querySelector(`.nivel-btn[data-nivel="${nivel}"]`)
        .classList.add('active');
    conteudoTeorico.innerHTML = teoria[nivel];
}
nivelBtns.forEach(btn => {
    btn.addEventListener('click', () => carregarTeoria(btn.dataset.nivel));
});
carregarTeoria('basico');

// Playground interativo
const playground = document.getElementById('playground-container');
const cssOutput = document.getElementById('css-output');
const controls = [
    'flex-direction',
    'justify-content',
    'align-items',
    'flex-wrap'
];
function atualizarPlayground() {
    const styles = {
        display: 'flex',
        'flex-direction': document.getElementById('flex-direction').value,
        'justify-content': document.getElementById('justify-content').value,
        'align-items': document.getElementById('align-items').value,
        'flex-wrap': document.getElementById('flex-wrap').value
    };
    Object.entries(styles).forEach(([prop, val]) => {
        playground.style[prop] = val;
    });
    cssOutput.textContent =
        `display: flex;\n` +
        controls.map(c => `${c}: ${styles[c]};`).join('\n');
}
controls.forEach(id => {
    document.getElementById(id).addEventListener('change', atualizarPlayground);
});
atualizarPlayground();

// Exercícios práticos
const exercicioDiv = document.getElementById('exercicio-atual');
const solucaoPre = document.getElementById('solucao');
const btnSolucao = document.getElementById('mostrar-solucao');
const btnProximo = document.getElementById('proximo-exercicio');
function mostrarExercicio(idx) {
    exercicioDiv.innerHTML = `<b>${exercicios[idx].enunciado}</b>`;
    solucaoPre.textContent = '';
}
btnSolucao.addEventListener('click', () => {
    solucaoPre.textContent = exercicios[exercicioAtual].solucao;
});
btnProximo.addEventListener('click', () => {
    exercicioAtual = (exercicioAtual + 1) % exercicios.length;
    mostrarExercicio(exercicioAtual);
});
mostrarExercicio(exercicioAtual);
