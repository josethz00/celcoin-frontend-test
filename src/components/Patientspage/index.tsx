import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from './patientspage.module.css';
import { Icon } from '@iconify/react';

/**
 *
 * @returns
 */
export default function PatientsPage(): JSX.Element {
  return (
    <Box paddingLeft={32} paddingRight={40}>
      <Text
        fontSize={18}
        color="#303B5B"
        fontWeight={700}
        marginTop={32}
        marginBottom={24}
      >
        Atualizações de pacientes
      </Text>
      <Flex
        className={styles.attendancesContainer}
        css={{
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            height: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#d5d5d5',
            borderRadius: '24px',
            transition: 'background-color 1s ease-in-out',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#c5c5c5',
          },
        }}
      >
        <Box className={styles.attendanceCard}>
          <Flex className={styles.attendanceCardImgContainer}>
            <Image
              src={require('@/assets/images/att_1.png')}
              alt="Attendance 1"
            />
          </Flex>
          <Box className={styles.attendanceCardContent}>
            <Text
              fontSize={16}
              color="#303B5B"
              fontWeight={700}
              marginBottom={8}
              marginTop={16}
            >
              Renata Augusto Ferreira
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Teste realizado
            </Text>
            <Text
              fontSize={14}
              color="#303B5B"
              fontWeight={600}
              marginBottom={8}
            >
              TDAH CAB ADHD
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Realizado em:
            </Text>
            <Text fontSize={14} color="#303B5B" fontWeight={600}>
              20/10/2023
            </Text>
          </Box>
        </Box>
        <Box className={styles.attendanceCard}>
          <Flex className={styles.attendanceCardImgContainer}>
            <Image
              src={require('@/assets/images/att_2.png')}
              alt="Attendance 1"
            />
          </Flex>
          <Box className={styles.attendanceCardContent}>
            <Text
              fontSize={16}
              color="#303B5B"
              fontWeight={700}
              marginBottom={8}
              marginTop={16}
            >
              Renata Augusto Ferreira
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Teste realizado
            </Text>
            <Text
              fontSize={14}
              color="#303B5B"
              fontWeight={600}
              marginBottom={8}
            >
              Autismo
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Realizado em:
            </Text>
            <Text fontSize={14} color="#303B5B" fontWeight={600}>
              20/09/2023
            </Text>
          </Box>
        </Box>
        <Box className={styles.attendanceCard}>
          <Flex className={styles.attendanceCardImgContainer}>
            <Image
              src={require('@/assets/images/att_1.png')}
              alt="Attendance 1"
            />
          </Flex>
          <Box className={styles.attendanceCardContent}>
            <Text
              fontSize={16}
              color="#303B5B"
              fontWeight={700}
              marginBottom={8}
              marginTop={16}
            >
              Renata Augusto Ferreira
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Teste realizado
            </Text>
            <Text
              fontSize={14}
              color="#303B5B"
              fontWeight={600}
              marginBottom={8}
            >
              TDAH CAB ADHD
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Realizado em:
            </Text>
            <Text fontSize={14} color="#303B5B" fontWeight={600}>
              20/10/2023
            </Text>
          </Box>
        </Box>
        <Box className={styles.attendanceCard}>
          <Flex className={styles.attendanceCardImgContainer}>
            <Image
              src={require('@/assets/images/att_2.png')}
              alt="Attendance 1"
            />
          </Flex>
          <Box className={styles.attendanceCardContent}>
            <Text
              fontSize={16}
              color="#303B5B"
              fontWeight={700}
              marginBottom={8}
              marginTop={16}
            >
              Renata Augusto Ferreira
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Teste realizado
            </Text>
            <Text
              fontSize={14}
              color="#303B5B"
              fontWeight={600}
              marginBottom={8}
            >
              Autismo
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Realizado em:
            </Text>
            <Text fontSize={14} color="#303B5B" fontWeight={600}>
              20/09/2023
            </Text>
          </Box>
        </Box>
        <Box className={styles.attendanceCard}>
          <Flex className={styles.attendanceCardImgContainer}>
            <Image
              src={require('@/assets/images/att_2.png')}
              alt="Attendance 1"
            />
          </Flex>
          <Box className={styles.attendanceCardContent}>
            <Text
              fontSize={16}
              color="#303B5B"
              fontWeight={700}
              marginBottom={8}
              marginTop={16}
            >
              Renata Augusto Ferreira
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Teste realizado
            </Text>
            <Text
              fontSize={14}
              color="#303B5B"
              fontWeight={600}
              marginBottom={8}
            >
              Autismo
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Realizado em:
            </Text>
            <Text fontSize={14} color="#303B5B" fontWeight={600}>
              20/09/2023
            </Text>
          </Box>
        </Box>
        <Box className={styles.attendanceCard}>
          <Flex className={styles.attendanceCardImgContainer}>
            <Image
              src={require('@/assets/images/att_2.png')}
              alt="Attendance 1"
            />
          </Flex>
          <Box className={styles.attendanceCardContent}>
            <Text
              fontSize={16}
              color="#303B5B"
              fontWeight={700}
              marginBottom={8}
              marginTop={16}
            >
              Renata Augusto Ferreira
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Teste realizado
            </Text>
            <Text
              fontSize={14}
              color="#303B5B"
              fontWeight={600}
              marginBottom={8}
            >
              Autismo
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3)"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={8}
            >
              Realizado em:
            </Text>
            <Text fontSize={14} color="#303B5B" fontWeight={600}>
              20/09/2023
            </Text>
          </Box>
        </Box>
      </Flex>

      <Text
        fontSize={18}
        color="#303B5B"
        fontWeight={700}
        marginTop={40}
        marginBottom={24}
      >
        Todos os pacientes
      </Text>
      <Box
        width="100%"
        height="100%"
        backgroundColor="#ffffff"
        borderRadius={6}
        boxShadow="0px 8px 26px rgba(71, 87, 122, 0.08)"
        paddingTop={16}
        paddingBottom={16}
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          paddingLeft={20}
          paddingRight={34}
        >
          <Flex alignItems="center">
            <Text fontWeight={800} fontSize={16} color="rgba(86, 84, 104, 0.6)">
              Lista de Pacientes (36)
            </Text>
            <InputGroup marginLeft={16} width={400} height={40}>
              <InputLeftElement
                top={10}
                marginLeft={10}
                children={
                  <Icon icon="bx:search-alt-2" color="#787686" fontSize={20} />
                }
              />
              <Input
                width="100%"
                height="100%"
                padding={10}
                paddingLeft={41}
                placeholder="Busca..."
                borderRadius={5}
                _placeholder={{
                  color: 'rgba(44, 46, 61, 0.3)',
                  fontWeight: 400,
                }}
                backgroundColor="#F5F5F5"
              />
            </InputGroup>
          </Flex>
          <Icon
            icon="entypo:dots-three-horizontal"
            className={styles.patientsListDots}
          />
        </Flex>

        <Flex
          width="100%"
          height={330}
          alignItems="center"
          flexDirection="column"
          marginTop={32}
          overflowY="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#d5d5d5',
              borderRadius: '24px',
              transition: 'background-color 1s ease-in-out',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#c5c5c5',
            },
          }}
        >
          <Flex className={styles.updatesCard}>
            <Flex alignItems="center">
              <Flex alignItems="center" marginRight={56}>
                <Box className={styles.updatesCardImgContainer}>
                  <Image
                    src={require('@/assets/images/updates_1.png')}
                    alt="Updates 1"
                    width={78}
                    height={78}
                  />
                </Box>
                <Box className={styles.updatesCardContent}>
                  <Text>Renata Augusto Ferreira</Text>

                  <Text>Diagnóstico</Text>
                  <Text>TDAH CAB ADHD, Autismo</Text>
                </Box>
              </Flex>
              <Flex alignItems="center">
                <Flex color="#1EAC79" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>

                <Flex color="#EF0C35" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Flex color="#FF6B00" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  orientation="vertical"
                  width={1}
                  maxWidth={1}
                  height={96}
                  backgroundColor="#EFF2F9"
                />
              </Flex>
            </Flex>
            <Flex alignItems="center" marginRight={32}>
              <Flex className={styles.editPatientInfo}>
                <Icon icon="ant-design:edit-filled" />
              </Flex>
              <Button
                background=" linear-gradient(to right, #FF00C7, #FF005C)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Enviar novo teste
              </Button>
              <Button
                background=" linear-gradient(to right, #00A3FF, #0057ff)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Alterar cadastro
              </Button>
            </Flex>
          </Flex>

          <Flex className={styles.updatesCard}>
            <Flex alignItems="center">
              <Flex alignItems="center" marginRight={56}>
                <Box className={styles.updatesCardImgContainer}>
                  <Image
                    src={require('@/assets/images/updates_1.png')}
                    alt="Updates 1"
                    width={78}
                    height={78}
                  />
                </Box>
                <Box className={styles.updatesCardContent}>
                  <Text>Renata Augusto Ferreira</Text>

                  <Text>Diagnóstico</Text>
                  <Text>TDAH CAB ADHD, Autismo</Text>
                </Box>
              </Flex>
              <Flex alignItems="center">
                <Flex color="#1EAC79" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>

                <Flex color="#EF0C35" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Flex color="#FF6B00" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  orientation="vertical"
                  width={1}
                  maxWidth={1}
                  height={96}
                  backgroundColor="#EFF2F9"
                />
              </Flex>
            </Flex>
            <Flex alignItems="center" marginRight={32}>
              <Flex className={styles.editPatientInfo}>
                <Icon icon="ant-design:edit-filled" />
              </Flex>
              <Button
                background=" linear-gradient(to right, #FF00C7, #FF005C)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Enviar novo teste
              </Button>
              <Button
                background=" linear-gradient(to right, #00A3FF, #0057ff)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Alterar cadastro
              </Button>
            </Flex>
          </Flex>
          <Flex className={styles.updatesCard}>
            <Flex alignItems="center">
              <Flex alignItems="center" marginRight={56}>
                <Box className={styles.updatesCardImgContainer}>
                  <Image
                    src={require('@/assets/images/updates_1.png')}
                    alt="Updates 1"
                    width={78}
                    height={78}
                  />
                </Box>
                <Box className={styles.updatesCardContent}>
                  <Text>Renata Augusto Ferreira</Text>

                  <Text>Diagnóstico</Text>
                  <Text>TDAH CAB ADHD, Autismo</Text>
                </Box>
              </Flex>
              <Flex alignItems="center">
                <Flex color="#1EAC79" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>

                <Flex color="#EF0C35" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Flex color="#FF6B00" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  orientation="vertical"
                  width={1}
                  maxWidth={1}
                  height={96}
                  backgroundColor="#EFF2F9"
                />
              </Flex>
            </Flex>
            <Flex alignItems="center" marginRight={32}>
              <Flex className={styles.editPatientInfo}>
                <Icon icon="ant-design:edit-filled" />
              </Flex>
              <Button
                background=" linear-gradient(to right, #FF00C7, #FF005C)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Enviar novo teste
              </Button>
              <Button
                background=" linear-gradient(to right, #00A3FF, #0057ff)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Alterar cadastro
              </Button>
            </Flex>
          </Flex>
          <Flex className={styles.updatesCard}>
            <Flex alignItems="center">
              <Flex alignItems="center" marginRight={56}>
                <Box className={styles.updatesCardImgContainer}>
                  <Image
                    src={require('@/assets/images/updates_1.png')}
                    alt="Updates 1"
                    width={78}
                    height={78}
                  />
                </Box>
                <Box className={styles.updatesCardContent}>
                  <Text>Renata Augusto Ferreira</Text>

                  <Text>Diagnóstico</Text>
                  <Text>TDAH CAB ADHD, Autismo</Text>
                </Box>
              </Flex>
              <Flex alignItems="center">
                <Flex color="#1EAC79" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>

                <Flex color="#EF0C35" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Flex color="#FF6B00" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  orientation="vertical"
                  width={1}
                  maxWidth={1}
                  height={96}
                  backgroundColor="#EFF2F9"
                />
              </Flex>
            </Flex>
            <Flex alignItems="center" marginRight={32}>
              <Flex className={styles.editPatientInfo}>
                <Icon icon="ant-design:edit-filled" />
              </Flex>
              <Button
                background=" linear-gradient(to right, #FF00C7, #FF005C)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Enviar novo teste
              </Button>
              <Button
                background=" linear-gradient(to right, #00A3FF, #0057ff)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Alterar cadastro
              </Button>
            </Flex>
          </Flex>
          <Flex className={styles.updatesCard}>
            <Flex alignItems="center">
              <Flex alignItems="center" marginRight={56}>
                <Box className={styles.updatesCardImgContainer}>
                  <Image
                    src={require('@/assets/images/updates_1.png')}
                    alt="Updates 1"
                    width={78}
                    height={78}
                  />
                </Box>
                <Box className={styles.updatesCardContent}>
                  <Text>Renata Augusto Ferreira</Text>

                  <Text>Diagnóstico</Text>
                  <Text>TDAH CAB ADHD, Autismo</Text>
                </Box>
              </Flex>
              <Flex alignItems="center">
                <Flex color="#1EAC79" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>

                <Flex color="#EF0C35" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Flex color="#FF6B00" alignItems="center" width={144}>
                  <Divider
                    orientation="vertical"
                    width={1}
                    maxWidth={1}
                    height={96}
                    backgroundColor="#EFF2F9"
                  />
                  <Box paddingLeft={16}>
                    <Text fontSize={36} fontWeight={700}>
                      3
                    </Text>
                    <Text fontSize={14} fontWeight={400}>
                      Testes realizados
                    </Text>
                  </Box>
                </Flex>
                <Divider
                  orientation="vertical"
                  width={1}
                  maxWidth={1}
                  height={96}
                  backgroundColor="#EFF2F9"
                />
              </Flex>
            </Flex>

            <Flex alignItems="center" marginRight={32}>
              <Flex className={styles.editPatientInfo}>
                <Icon icon="ant-design:edit-filled" />
              </Flex>
              <Button
                background=" linear-gradient(to right, #FF00C7, #FF005C)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Enviar novo teste
              </Button>
              <Button
                background=" linear-gradient(to right, #00A3FF, #0057ff)"
                borderRadius={20}
                paddingTop={11}
                paddingBottom={11}
                paddingLeft={12}
                paddingRight={12}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={10}
                marginLeft={16}
                textTransform="uppercase"
              >
                Alterar cadastro
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
