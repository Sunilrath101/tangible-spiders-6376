import { Container, Flex, Grid, Heading, HStack, PinInputField, PinInput, Alert, Image, InputGroup, InputLeftAddon, Input, Text, Button } from '@chakra-ui/react'
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const [otpAlert, setOtpAlert] = useState(false)
    const [togalOtp, setTogalOtp] = useState(true)
    const [Mobilenumber, setNumber] = useState("")
    const [otp, setOtp] = useState(null)
    const navigate = useNavigate()


    const auth = () => {
       


    }
   

    const submitOTP = () => {



    }





    return (
        <>
       

        <Grid bg="#FFF5F5" w="100%" h="100vh" display="grid" justifyContent="center" alignItems="center">
            {otpAlert && <Alert status='success'> Otp Sent  </Alert>}
            <Container  >
                <Grid w="400px" bg="#FFF" boxShadow="xl">
                    <Grid>
                        <Image w="400px" h="160px" src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/98b25e23-649a-40e2-8d86-f9b97f441c791662403123928-offer-banner-300-600x240-code-_-MYNTRA200.jpg" alt="" />
                    </Grid>
                    <Grid gap={5} p={8} display="grid" justifyContent="center">

                        <Grid display="grid" alignItems="baseline" textAlign="left" gap={2} ><Heading size="md">Login or Signup</Heading>
                            {
                                togalOtp ? <Text>Enter Your Mobile Number</Text> : <Text>Enter Your OTP</Text>
                            }

                        </Grid>
                        <Flex>
                            {
                                togalOtp ? <InputGroup >

                                    <InputLeftAddon children='+91' />
                                    <Input type='tel' placeholder='phone number' value={Mobilenumber} onChange={(e) => setNumber(e.target.value)} />
                                </InputGroup> :

                                    <HStack>
                                        <PinInput value={otp} onChange={(e) => setOtp(e)}>
                                            <PinInputField />
                                            <PinInputField />
                                            <PinInputField />
                                            <PinInputField />
                                        </PinInput>
                                    </HStack>

                            }
                        </Flex>
                        <Flex >
                            <Text  >By Continuing, I agree To the Terms of Use & Privacy Policy</Text>

                        </Flex>
                        <Flex>
                            {
                                togalOtp ? <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={submitOTP}>
                                    <b>CONTINUE</b>
                                </Button> : <Button bg="#FF3F6C" w="100%" border="none" color="#FFF" h={50} onClick={auth}>
                                    <b>LOGIN</b>
                                </Button>
                            }
                        </Flex>
                        <Flex color="#FF3F6C"> <Link to="/loginuser" >Want's To Login With Email ?</Link></Flex>
                        <Flex color="#FF3F6C"> <Link to="/signup" >Don't Have Account?</Link></Flex>

                    </Grid>
                </Grid>

            </Container>
        </Grid>
        
        </>
    )
}

export default Login
