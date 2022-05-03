import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import styled from 'styled-components'

const initalState = {
  email: '',
  name: '',
  alertEmail: false,
  alertName: false,
  isMember: false,
}

const Register = () => {
  const [value, setValue] = useState(initalState)

  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }
  const github = () => {
    window.open('http://localhost:5000/auth/github', '_self')
  }
  return (
    <Wrapper>
      <div className='register-contant'>
        <div className='header'>
          <div className='logo'>
            <span className='logo-icon'>
              <BiUser />
            </span>
          </div>
          <h2>Welcome to Auth App </h2>
          <p>Register using Social Media</p>
        </div>

        <div className='from-control'>
          <div className='btns'>
            <button type='button' className='btn' onClick={google}>
              <span>
                <FcGoogle />
              </span>
              Register using Email
            </button>
            <button type='button' className='btn' onClick={github}>
              <span>
                <BsGithub />
              </span>
              Register using Github
            </button>
            <button type='button' className='btn'>
              <span>
                <BsTwitter />
              </span>
              Register using Twitter
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .header {
    text-align: center;
    .logo {
      align-items: center;
      .logo-icon {
        font-size: 2em;
      }
    }
    h1 {
      margin: 0.5em 0 0 0;
      font-weight: 500;
    }
    p {
      margin: 0.5em 0 0 0;
      font-weight: 500;
    }
  }
  .from-control {
    width: min(95%, 1400px);
    margin-inline: auto;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: row-reverse;

    .btns {
      margin: 1em;
      width: min(95%, 700px);
      .btn {
        padding: 0.5em 1em;
        border-radius: 2em;
        background-color: #fff;
        margin: 0.8em 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        border: 0;
        cursor: pointer;
        transition: ease-in-out 0.3s linear;

        :hover {
          background-color: #ddd;
        }
        span {
          margin-right: 0.2em;
          font-size: 1.5em;
        }
        :last-child span {
          color: #2c65e0d1;
        }
      }
    }
  }
  @media screen and (max-width: 679px) {
    .from-control {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 429px) {
  }
`

export default Register
