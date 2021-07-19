import React, { useState } from 'react';
import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommos';

function ProfileSidebar(props) {
    return (
        <Box>
          <img src={`https://github.com/${props.user}.png`} style={{ borderRadius: '8px' }} />
          <hr />

          <p>
            <a className="boxLink" href={`https://github.com/${props.user}`}>
                @{props.user}
            </a>
          </p>

          <hr />

          <AlurakutProfileSidebarMenuDefault />
        </Box>
    )
}

export default function Home() {
    const [comunidades, setComunidades] = useState([]);
    const githubUser = 'github';
    // const comunidades = ['alurakut'];
    const pessoasFavoritas = [
        'juunegreiros', 
        'omariosouto', 
        'peas', 
        'rafaballerini', 
        'marcobrunodev'
    ]

    function handleCriarComunidade(event) {
        event.preventDefault();
        const dadosDoForm = new FormData(event.target);

        const comunidade = {
            id: new Date().toDateString,
            titulo: dadosDoForm.get('title'),
            image: dadosDoForm.get('image')
        }

        setComunidades(mapped => [
            ...mapped,
            comunidade
        ])
    }

  return (
      <>
      <AlurakutMenu />
        <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
            <ProfileSidebar user={githubUser} />
        </div>
        <div style={{ gridArea: 'welcomeArea' }}>
            <Box>
                <h1 className="title">
                    Bem Vindo(a)
                </h1>

                <OrkutNostalgicIconSet />
            </Box>

            <Box>
                <h2 className="subTitle">O que você deseja fazer?</h2>
                <form onSubmit={handleCriarComunidade}>
                    <div>
                        <input 
                            placeholder="Qual vai ser o nome da sua comunidade?" 
                            name="title" 
                            area-label="Qual vai ser o nome da sua comunidade?"
                            type="text"
                        />
                    </div>
                    
                    <div>
                        <input 
                            placeholder="Coloque uma URL para usarmos de capa" 
                            name="image" 
                            area-label="Coloque uma URL para usarmos de capa" 
                        />
                    </div>

                    <button type="submit">Criar comunidade</button>
                </form>
            </Box>
        </div>
        <div style={{ gridArea: 'profileRelationsArea' }}>
            <ProfileRelationsBoxWrapper>
                <ul>
                {comunidades.map((item) => (
                       <li key={item.id}>
                            <a href={`/users/${item.titulo}`}>
                                <img src={`${item.image}`}/>
                                <span>{item.titulo}</span>
                            </a>
                       </li>
                    ))}
                </ul>
            </ProfileRelationsBoxWrapper>

            <ProfileRelationsBoxWrapper>
                <h2 className="smallTitle">
                    Pessoas da comunidade ({pessoasFavoritas.length})
                </h2>

                <ul>
                    {pessoasFavoritas.map((item) => (
                       <li>
                            <a href={`/users/${githubUser}`} key={githubUser}>
                                <img src={`https://github.com/${item}.png`}/>
                                <span>{item}</span>
                            </a>
                       </li>
                    ))}
                </ul>
            </ProfileRelationsBoxWrapper>
            <Box>Comunidades</Box>
        </div>
        </MainGrid>
    </>
  )
}
