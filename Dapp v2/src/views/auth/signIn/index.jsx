

import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import { FcGoogle,FcVoicemail } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { ethers } from 'ethers';

function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [address, setAddress] = useState('');

  async function connectToMetamask() {

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

    try {
      await window.ethereum.eth_requestAccounts
      const address = await provider.getSigner().getAddress();
      setAddress(address);
    } catch (error) {
      console.error(error);
    }
    }else{
      alert("Metamask did not detected, Install metamask first")

    }
    
  }

  async function disconnectFromMetamask() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      
      provider.removeAllListeners();
      window.ethereum.disable();
      setAddress('');
    } catch (error) {
      console.log(error)
      
    }
  }

useEffect(() => {
  

 console.log(address)
}, [address])



  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Connect your wallet
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            connect any of the wallets
          </Text>
        </Box>
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>


          <Flex align='center' mb='25px'>
            <HSeparator />
            <Text color='gray.400' mx='14px'>
              Recommended
            </Text>
            <HSeparator />
          </Flex>

          {
            address?
            <Button
            onClick={disconnectFromMetamask}
            fontSize='lg'
            fontWeight='900'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            // style={{fontWeight:"bolder"}}
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}>
            {/* <Icon as={FcGoogle} w='20px' h='20px' me='10px' /> */}
            {/* <img src="https://img.icons8.com/nolan/32/metamask-logo.png"/>  */}
            <img src="https://img.icons8.com/color/30/null/metamask-logo.png"/>
            &ensp; Disconnect Metamask
          </Button>
            :
            <Button
            onClick={connectToMetamask}
            fontSize='lg'
            fontWeight='900'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            // style={{fontWeight:"bolder"}}
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}>
            {/* <Icon as={FcGoogle} w='20px' h='20px' me='10px' /> */}
            {/* <img src="https://img.icons8.com/nolan/32/metamask-logo.png"/>  */}
            <img src="https://img.icons8.com/color/30/null/metamask-logo.png"/>
            &ensp; Metamask
          </Button>
          }
          


          <Flex align='center' mb='25px'>
            <HSeparator />
            <Text color='gray.400' mx='14px'>
              or
            </Text>
            <HSeparator />
          </Flex>
          <Button
              fontSize='lg'
              fontWeight='900'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}>
            {/* <Icon as={FcGoogle} w='20px' h='20px' me='10px' /> */}
            <img src="https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png" width="26" height="26" alt="WalletConnect" class="detailLogoImage"></img>
            &ensp;Wallet Connect
          </Button> <Button
            fontSize='lg'
            fontWeight='900'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}>
            {/* <Icon as={FcGoogle} w='20px' h='20px' me='10px' /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" width="26" height="26"><path fill="#0052ff" d="M0 11.0769C0 4.95931 4.95931 0 11.0769 0H36.9231C43.0407 0 48 4.95931 48 11.0769V36.9231C48 43.0407 43.0407 48 36.9231 48H11.0769C4.95931 48 0 43.0407 0 36.9231V11.0769Z" class="color0052FF svgShape"></path><path fill="#ffffff" d="M23.9548 33C22.2558 32.9657 20.601 32.4534 19.181 31.5223C17.761 30.5911 16.6335 29.2788 15.9283 27.7365C15.2232 26.1943 14.969 24.4847 15.195 22.8047C15.4211 21.1246 16.1182 19.5424 17.2061 18.2402C18.294 16.938 19.7285 15.9687 21.3444 15.444C22.9602 14.9192 24.6918 14.8603 26.3398 15.2741C27.9878 15.6879 29.4851 16.5574 30.6594 17.7827C31.8337 19.008 32.6372 20.5392 32.9774 22.2H42C41.5371 17.6053 39.3215 13.3637 35.8114 10.3527C32.3014 7.34165 27.7655 5.79141 23.1418 6.02259C18.5181 6.25377 14.1604 8.2487 10.9698 11.5948C7.77927 14.9409 6 19.3821 6 24C6 28.6179 7.77927 33.0591 10.9698 36.4052C14.1604 39.7513 18.5181 41.7462 23.1418 41.9774C27.7655 42.2086 32.3014 40.6584 35.8114 37.6473C39.3215 34.6363 41.5371 30.3947 42 25.8H32.9774C32.9774 29.4 27.5638 33 23.9548 33Z" class="colorfff svgShape"></path></svg>
            &ensp; Coinbase
          </Button> <Button
              fontSize='lg'
              fontWeight='900'
            me='0px'
            mb='26px'
            py='15px'
            h='50px'
            borderRadius='16px'
            bg={googleBg}
            color={googleText}
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}>
            {/* <Icon as={FcGoogle} w='20px' h='20px' me='10px' /> */}
            <img src="https://seeklogo.com/images/P/phantom-logo-847555CFE3-seeklogo.com.png" width="100" height="50" alt="WalletConnect" class="detailLogoImage"></img>
            {/* &emsp;
            Phantom */}
          </Button>



          {/* <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='mail@simmmple.com'
              mb='24px'
              fontWeight='500'
              size='lg'
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              display='flex'>
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                placeholder='Min. 8 characters'
                mb='24px'
                size='lg'
                type={show ? "text" : "password"}
                variant='auth'
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent='space-between' align='center' mb='24px'>
              <FormControl display='flex' alignItems='center'>
                <Checkbox
                  id='remember-login'
                  colorScheme='brandScheme'
                  me='10px'
                />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  fontWeight='normal'
                  color={textColor}
                  fontSize='sm'>
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <NavLink to='/auth/forgot-password'>
                <Text
                  color={textColorBrand}
                  fontSize='sm'
                  w='124px'
                  fontWeight='500'>
                  Forgot password?
                </Text>
              </NavLink>
            </Flex>
            <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'>
                
            <Icon as={FcGoogle} w='20px' h='20px' me='10px' />
              Sign In
            </Button>
          </FormControl> */}
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='start'
            maxW='100%'
            mt='0px'>
            <Text color={textColorDetails} fontWeight='400' fontSize='14px'>
              Not having a wallet yet?
              {/* <NavLink 
              to='https://www.instagram.com/'
              > */}
                <Text

                
                  color={textColorBrand}
                  as='span'
                  ms='5px'
                  fontWeight='500'>
                  Get a wallet
                </Text>
              {/* </NavLink> */}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
