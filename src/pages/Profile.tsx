import styled from 'styled-components'

const ProfileArea = styled.div`
  background: #666;
`
const ProfileImage = styled.div`
  background: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`
function Profile() {
  return (
    <>
      <ProfileArea>Profile</ProfileArea>
      <ProfileImage />
    </>
  )
}

export default Profile
