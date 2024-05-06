"use client"

import { COLORS } from '@/assets/colors'
import CoffieIcon from '@/assets/src/CoffieIcon'
import { ModalProps } from '@/types/utilsType'
import { Box, Button, ChakraProvider, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { toast } from 'react-toastify'

export default function RegisterModal({ isOpen, onClose }: ModalProps) {

    // 입력시 rerender를 방지하기 위해 useRef 사용
    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);
    const pwCheckRef = useRef<HTMLInputElement>(null);

    const onSubmit = () => {
        // 입력 값 current.value로 가져와서 trim()으로 공백 제거
        const id = idRef.current?.value.trim();
        const pw = pwRef.current?.value.trim();
        const pwCheck = pwCheckRef.current?.value.trim();

        console.log(id, pw, pwCheck);

        if (!id || !pw) {
            toast('모든 정보를 입력하세요', { type: 'error' });
            return;
        }

        if (pw.length < 6) {
            toast('비밀번호는 6자 이상이어야 합니다', { type: 'error' });
            return;
        }

        if (pw !== pwCheck) {
            toast('비밀번호가 일치하지 않습니다', { type: 'error' });
            return;
        }
    }

    return (
        <ChakraProvider>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Flex alignItems={'center'}>
                            <CoffieIcon color={COLORS.pupple} size={25} />
                            <Text color={COLORS.black} ml={3} fontSize={25} fontWeight={'bold'}>
                                WATCH
                            </Text>
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box w={'full'}>
                            <Input
                                placeholder='아이디'
                                ref={idRef}
                            />
                        </Box>
                        <Box w={'full'} mt={5}>
                            <Input
                                placeholder='비밀번호'
                                ref={pwRef}
                                type='password'
                            />
                        </Box>
                        <Box w={'full'} mt={5}>
                            <Input
                                placeholder='비밀번호 확인'
                                ref={pwCheckRef}
                                type='password'
                            />
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='whatsapp' onClick={onSubmit}>
                            회원가입
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </ChakraProvider >
    )
}
