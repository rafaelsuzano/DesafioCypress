


describe('PoC', () => {
        it('Acesso Fundamentos', () => {
          cy.visit('https://fundamentus.com.br')

        }     )

        it('Consulta Ativo', () => {
            cy.get('#completar').click();
            cy.get('#completar').type('{backspace}');
            cy.get('#completar').type('{backspace}');
            cy.get('#completar').type('PETR4');
            cy.get('.autocompleter-selected').click();
            cy.get('.botao').click();
            

  
          }     )

          it('Consulta Proventos', () => {
            cy.visit('https://fundamentus.com.br/proventos.php?papel=PETR4&tipo=2');
           
            
            }
        )
        it('Gerar CSV', () => {
         
          cy.visit('https://www.uol.com.br');
          cy.screenshot("teste")
       
        }
        )
        
      })