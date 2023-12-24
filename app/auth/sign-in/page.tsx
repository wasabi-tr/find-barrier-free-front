import Container from '@/app/_components/layouts/container'
import SignInForm from '@/app/_features/auth/components/signInForm'

const SingIn = () => {
  return (
    <div className="bg-color-main-50">
      <Container narrow>
        <div className="py-20">
          <SignInForm />
        </div>
      </Container>
    </div>
  )
}

export default SingIn
