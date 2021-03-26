# Sistema de Receitas

## Entregas
- Entrega 1 https://youtu.be/2ZvbBz7d3Sw

## Aluno
- Rafael Ribeiro Rodrigues

## Objetivo
- Desenvolver um sistema Web de receitas

## Tecnologias
- Mariadb
- Flask
- SQLAlchemy
- Jinja2
- Gunicorn
- HTML, CSS e Javascript

## Requerimentos mínimos
- Python V3.X
- Maria DB

## Iniciar projeto

- Clonar e atualizar repositório
- git clone https://github.com/RafaRibeiroRodri/receitas-app.git

- cd receitas-app
- git checkout master
- git pull

## Inicializando ambiente virtual
- python -m venv lib
- lib\Scripts\activate
 
## Instalação das dependências

- pip install -r requisitos.txt

## Configurando ambiente

- Abre o HeideSQL e configure o Mariadb de acordo com as informações no arquivo .env

MARIA_DATABASE=Receitas                                                                                                                                                          
 MARIA_HOST=127.0.0.1                                                                                                                                                             
 MARIA_PORT=3306                                                                                                                                                                   
 MARIA_USERNAME=root                                                                                                                                                               
 MARIA_PASSWORD=123456                                                                                                                                                             
- Após configurado o banco de dados, execute:

python app.py init_db

- Agora é só rodar o projeto:

python app.py

- Pronto agora você pode navegar:
 http://127.0.0.1:5000/
