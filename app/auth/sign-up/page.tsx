import Container from '@/app/_components/layouts/container'
import SignUpForm from '@/app/_features/auth/components/signUpForm'

const SignUp = () => {
  return (
    <div className="bg-color-main-50">
      <Container narrow>
        <div className="py-20">
          <SignUpForm />
        </div>
      </Container>
    </div>
  )
}

export default SignUp
