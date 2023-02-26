'use client'
import {
    Box,
    chakra,
    Container,
    HStack,
    Img,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const Logo = (props: any) => {
    return (
        <HStack spacing={3}>
            <Box >
                <Img boxSize='40px' src='https://test-panaverse.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappLogo.de5c700a.png&w=384&q=75' alt='panaverse dao logo' />
            </Box>
            <Text fontSize='lg' noOfLines={1}>
                Panaverse
            </Text>
        </HStack>
    );
};


export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                <Logo />
                <Stack direction={'row'} spacing={6}>
                    <Link href={'.'}>Home</Link>
                    <Link href={'about'}>About</Link>
                    <Link href={'course'}>Courses</Link>
                    <Link href={'contact'}>Contact</Link>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'left', md: 'space-between' }}
                    align={{ base: 'left', md: 'left' }}>
                    <Text>© 2023 Panaverse Templates. All rights reserved</Text>
                    <Stack direction={'row'} spacing={6}>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}