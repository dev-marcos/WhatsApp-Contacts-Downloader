// Obtém o nome do grupo

var groupName = document.querySelector('[data-testid="conversation-info-header-chat-title"]').textContent;
groupName = groupName.replace(/[\W_]+/g,"_");  // Remove caracteres não-alfanuméricos para usar como nome do arquivo

// Obtém a lista de contatos
var contactListString = document.querySelector('[class="p357zi0d r15c9g6i g4oj0cdv ovllcyds l0vqccxk pm5hny62"]').textContent;
var contactList = contactListString.split(", ");

// Transforma a lista de contatos em uma string CSV
var csvContent = contactList.join('\n');

// Prepara os dados para download
var data = new Blob([csvContent], {type: 'text/csv'});
var url = window.URL.createObjectURL(data);

// Cria um link para download
var link = document.createElement('a');
link.href = url;
var date = new Date();
link.download = `${groupName}_${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.csv`;
document.body.appendChild(link);
link.click();


groupName = undefined;
contactList = undefined;