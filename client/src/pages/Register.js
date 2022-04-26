import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub, BsTwitter } from 'react-icons/bs'
import InputControl from '../components/InputControl'
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

  const toogleChange = () => {
    setValue({ ...value, isMember: !value.isMember })
  }
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
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

        <form onSubmit={onSubmit} className='from-control'>
          <div className='btns'>
            <button type='button' className='btn'>
              <span>
                <FcGoogle />
              </span>
              Register using Email
            </button>
            <button type='button' className='btn'>
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
        </form>
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
        max-width: 400px;
        width: 400px;
        font-size: 18px;
        border: 0;
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
