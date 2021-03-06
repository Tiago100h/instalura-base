  
import Footer from '../src/components/commons/Footer'
import Menu from '../src/components/commons/Menu'

// import styled from 'styled-components'
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />
      <Footer />
    </div>
  )
}