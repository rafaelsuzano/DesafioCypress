


describe('PoC', () => {
        it('Acesso Fundamentos', () => {
          cy.visit('/');
          cy.get('p.destaque').should('contain', ' Fundamentus é um sistema on-line que disponibiliza informações financeiras e fundamentalistas das empresas com ações listadas na Bovespa.');
        })

        it('Consulta Ativo', () => {
            cy.get('#completar').type('PETR4');
            cy.get('.autocompleter-selected').click();
            cy.get('.botao').click();
            cy.url().should('contain', 'detalhes.php?papel=PETR4');
          })

          it('Consulta Proventos', () => {
            cy.visit('/proventos.php?papel=PETR4&tipo=2');
            cy.url().should('contain', 'proventos.php?papel=PETR4&tipo=2');
            })

        it('Gerar CSV', () => {
         
          cy.visit('https://www.uol.com.br');
          cy.screenshot("teste")
       
        })
        
      })