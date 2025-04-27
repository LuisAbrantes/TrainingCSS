document.addEventListener('DOMContentLoaded', () => {
    // Navegação e rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
                
                // Atualiza a classe "active" na navegação
                document.querySelectorAll('.nav-list a').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // CORREÇÃO: Separando os seletores para cada tipo de botão para evitar conflitos
    // Botões de demonstração para flex-direction (na seção Básico)
    const directionBtnsBasic = document.querySelectorAll('.concept:nth-of-type(2) .demo-btn[data-value]');
    const directionDemo = document.querySelector('.direction-demo');
    
    if (directionBtnsBasic.length && directionDemo) {
        directionBtnsBasic.forEach(btn => {
            btn.addEventListener('click', function() {
                const value = this.dataset.value;
                
                // Remove classe active de todos os botões
                directionBtnsBasic.forEach(b => b.classList.remove('active'));
                
                // Adiciona classe active ao botão clicado
                this.classList.add('active');
                
                // Aplica o valor ao demo
                directionDemo.style.flexDirection = value;
                
                // Adiciona classe highlight para chamar atenção
                directionDemo.classList.add('highlight');
                setTimeout(() => {
                    directionDemo.classList.remove('highlight');
                }, 500);
            });
        });
    }
    
    // Botões para justify-content e align-items
    const justifyBtns = document.querySelectorAll('.demo-btn[data-property="justify-content"]');
    const alignBtns = document.querySelectorAll('.demo-btn[data-property="align-items"]');
    const justifyDemo = document.querySelector('.justify-demo');
    const alignDemo = document.querySelector('.align-demo');
    
    // Manipuladores para justify-content
    if (justifyBtns.length && justifyDemo) {
        justifyBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const value = this.dataset.value;
                
                // Remove active dos botões
                justifyBtns.forEach(b => b.classList.remove('active'));
                
                // Adiciona active ao botão clicado
                this.classList.add('active');
                
                // Aplica o valor à demo
                justifyDemo.style.justifyContent = value;
                
                // Highlight
                justifyDemo.classList.add('highlight');
                setTimeout(() => {
                    justifyDemo.classList.remove('highlight');
                }, 500);
            });
        });
    }
    
    // Manipuladores para align-items
    if (alignBtns.length && alignDemo) {
        alignBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const value = this.dataset.value;
                
                // Remove active dos botões
                alignBtns.forEach(b => b.classList.remove('active'));
                
                // Adiciona active ao botão clicado
                this.classList.add('active');
                
                // Aplica o valor à demo
                alignDemo.style.alignItems = value;
                
                // Highlight
                alignDemo.classList.add('highlight');
                setTimeout(() => {
                    alignDemo.classList.remove('highlight');
                }, 500);
            });
        });
    }
    
    // Controles de flex-grow
    const flexRanges = document.querySelectorAll('.flex-range');
    const growItems = document.querySelectorAll('.grow-item');
    
    if (flexRanges.length && growItems.length) {
        flexRanges.forEach(range => {
            range.addEventListener('input', function() {
                const itemNum = this.dataset.item;
                const prop = this.dataset.prop;
                const value = this.value;
                const item = document.querySelector(`.grow-item[data-item="${itemNum}"]`);
                
                if (item) {
                    // Atualiza o valor exibido
                    this.nextElementSibling.textContent = value;
                    
                    // Aplica o valor ao item
                    if (prop === 'grow') {
                        item.style.flexGrow = value;
                    } else if (prop === 'shrink') {
                        item.style.flexShrink = value;
                    } else if (prop === 'basis') {
                        item.style.flexBasis = value + '%';
                    }
                    
                    // Highlight
                    item.classList.add('highlight');
                    setTimeout(() => {
                        item.classList.remove('highlight');
                    }, 500);
                }
            });
        });
    }
    
    // Controles de order
    const orderRanges = document.querySelectorAll('.order-range');
    const orderItems = document.querySelectorAll('.order-item');
    
    if (orderRanges.length && orderItems.length) {
        orderRanges.forEach(range => {
            range.addEventListener('input', function() {
                const itemNum = this.dataset.item;
                const value = this.value;
                const item = document.querySelector(`.order-item[data-item="${itemNum}"]`);
                
                if (item) {
                    // Atualiza o valor exibido
                    this.nextElementSibling.textContent = value;
                    
                    // Aplica o valor ao item
                    item.style.order = value;
                    
                    // Highlight
                    item.classList.add('highlight');
                    setTimeout(() => {
                        item.classList.remove('highlight');
                    }, 500);
                }
            });
        });
    }
    
    // Playground Flexbox
    const playground = document.querySelector('.playground-demo');
    const cssOutput = document.getElementById('css-output');
    const directionSelect = document.getElementById('flex-direction');
    const justifySelect = document.getElementById('justify-content');
    const alignSelect = document.getElementById('align-items');
    const wrapSelect = document.getElementById('flex-wrap');
    const itemCountInput = document.getElementById('item-count');
    const resetBtn = document.getElementById('reset-playground');
    
    if (playground && cssOutput && directionSelect && justifySelect && alignSelect && wrapSelect && itemCountInput) {
        // Função para atualizar o playground e o código CSS
        const updatePlayground = () => {
            const direction = directionSelect.value;
            const justify = justifySelect.value;
            const align = alignSelect.value;
            const wrap = wrapSelect.value;
            
            // Aplica estilos ao playground
            playground.style.flexDirection = direction;
            playground.style.justifyContent = justify;
            playground.style.alignItems = align;
            playground.style.flexWrap = wrap;
            
            // Atualiza o código CSS exibido
            cssOutput.textContent = `.playground-demo {
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
}`;
            
            // Highlight
            playground.classList.add('highlight');
            setTimeout(() => {
                playground.classList.remove('highlight');
            }, 500);
        };
        
        // Função para atualizar o número de itens no playground
        const updateItemCount = () => {
            const count = parseInt(itemCountInput.value);
            
            // Limpa os itens existentes
            playground.innerHTML = '';
            
            // Adiciona a quantidade certa de itens
            for (let i = 1; i <= count; i++) {
                const item = document.createElement('div');
                item.className = 'demo-box';
                item.textContent = i;
                playground.appendChild(item);
            }
        };
        
        // Adiciona event listeners para os controles
        directionSelect.addEventListener('change', updatePlayground);
        justifySelect.addEventListener('change', updatePlayground);
        alignSelect.addEventListener('change', updatePlayground);
        wrapSelect.addEventListener('change', updatePlayground);
        
        itemCountInput.addEventListener('change', () => {
            updateItemCount();
            updatePlayground();
        });
        
        // Botão de reset
        resetBtn.addEventListener('click', () => {
            directionSelect.value = 'row';
            justifySelect.value = 'flex-start';
            alignSelect.value = 'stretch';
            wrapSelect.value = 'nowrap';
            itemCountInput.value = '5';
            
            updateItemCount();
            updatePlayground();
        });
        
        // Inicializa o playground
        updateItemCount();
        updatePlayground();
    }
    
    // Botões para mostrar soluções de exercícios
    const solutionBtns = document.querySelectorAll('.solution-btn');
    
    if (solutionBtns.length) {
        solutionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const exerciseNum = this.dataset.exercise;
                const solution = document.getElementById(`solution-${exerciseNum}`);
                
                if (solution) {
                    solution.classList.toggle('show');
                    this.textContent = solution.classList.contains('show') ? 'Ocultar Solução' : 'Ver Solução';
                }
            });
        });
    }
    
    // Aplicar as soluções nos exercícios de demonstração
    document.querySelector('.nav-exercise')?.style.cssText = 'display: flex; justify-content: space-between; align-items: center;';
    document.querySelector('.card-exercise')?.style.cssText = 'display: flex; justify-content: center; align-items: center; height: 100%;';
    document.querySelector('.page-layout-demo')?.style.cssText = 'display: flex; flex-direction: column; min-height: 100%;';
    document.querySelector('.page-layout-demo .page-content')?.style.cssText = 'flex: 1;';
    
    // Inicializa estados padrão para demonstrações interativas
    // Define um botão como ativo em cada grupo por padrão
    if (directionBtnsBasic.length > 0) directionBtnsBasic[0].classList.add('active');
    if (justifyBtns.length > 0) justifyBtns[0].classList.add('active');
    if (alignBtns.length > 0) alignBtns[0].classList.add('active');
});