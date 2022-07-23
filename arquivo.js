

var produtos = [
    { codigo: '01',
      nome: 'Pastilha freio uno',
      descricao: 'Serve até ano 2000'
    },
    { codigo: '02',
      nome: 'Pastilha freio gol',
      descricao: 'Server para 1ª 2ª e 3ª geração'
    }];
  
 var _gerarCsv = function(){
      
     var csv = 'codigo, nome, descricao\n';
  
     produtos.forEach(function(row) {
             csv += row.codigo;
             csv += ';'+ row.nome;
             csv += ';'+ row.descricao;
             csv += '\n';
            
     });

     
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';

     hiddenElement.download = 'produtos.csv';
     hiddenElement.click();x
 };
 _gerarCsv();