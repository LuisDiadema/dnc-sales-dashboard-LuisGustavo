import styled from 'styled-components'

const LeadsArea = styled.div`
  background: #666;
`
const LeadsImage = styled.div`
  background: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Leads() {
  return (
    <>
      <LeadsArea>Leads</LeadsArea>
      <LeadsImage />
    </>
  )
}

export default Leads
