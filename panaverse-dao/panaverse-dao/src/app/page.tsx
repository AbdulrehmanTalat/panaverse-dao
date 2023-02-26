'use client'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

export default function Home() {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: 'red.400',
                                zIndex: -1,
                            }}>
                            Panaverse Dao
                        </Text>
                        <br />{' '}
                        <Text color={'red.400'} as={'span'}>
                            a Community
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        to learn the Future of Web: Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded={'full'}
                            as={Link}
                            href='course'
                            bg={'red.400'}
                            color={'white'}
                            _hover={{
                                bg: 'red.500',
                            }}>
                               Explore
                        </Button>
                        <Button rounded={'full'} as={Link} href='course' isExternal >
                                Register Now<ExternalLinkIcon mx='2px' />
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                />
            </Flex>
        </Stack>
    );
}