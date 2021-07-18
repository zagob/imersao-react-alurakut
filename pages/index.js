import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommos';

function ProfileSidebar(props) {
    return (
        <Box>
          <img src={`https://github.com/${props.user}.png`} style={{ borderRadius: '8px' }} />
        </Box>
    )
}

export default function Home() {
    const githubUser = 'github';
    const pessoasFavoritas = [
        'juunegreiros', 
        'omariosouto', 
        'peas', 
        'rafaballerini', 
        'marcobrunodev'
    ]

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
        </div>
        <div style={{ gridArea: 'profileRelationsArea' }}>
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
