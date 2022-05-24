import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import styles from './homepage.module.css';
import { useState } from 'react';

/**
 *
 * @returns
 */
export default function Homepage(): JSX.Element {
  const [isTooltipVisible, setTooltipVisible] = useState<
    Record<number, boolean>
  >({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  return (
    <Box paddingLeft={32} paddingRight={40}>
      <Text
        fontSize={18}
        color="#303B5B"
        fontWeight={700}
        marginTop={32}
        marginBottom={24}
      >
        Informações Gerais
      </Text>
      <Flex alignItems="center" justifyContent="center" width="100%">
        <Box
          className={styles.genInfoCard}
          onMouseOver={() =>
            setTooltipVisible({ ...isTooltipVisible, 1: true })
          }
          onMouseOut={() =>
            setTooltipVisible({
              ...isTooltipVisible,
              1: false,
            })
          }
        >
          <Box
            opacity={isTooltipVisible['1'] ? 1 : 0}
            zIndex={isTooltipVisible['1'] ? 1 : 0}
            className={styles.hoverTooltip}
          >
            <Text>Pacientes totais</Text>
            <Text>268</Text>
          </Box>
          <Box className={styles.genInfoCardContainer}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginLeft={16}
              marginRight={24}
            >
              <Box position="relative">
                <Icon
                  icon="ic:baseline-person-outline"
                  fontSize={30}
                  color="#0057FF"
                />
              </Box>
              <Text
                backgroundColor="#1CBF84"
                className={styles.cardPercentageText}
              >
                +30%
              </Text>
            </Flex>
            <Box className={styles.genInfoCardContent}>
              <Text>26</Text>
              <Text>Pacientes ativos</Text>
            </Box>
          </Box>
        </Box>
        <Box
          className={styles.genInfoCard}
          onMouseOver={() =>
            setTooltipVisible({
              ...isTooltipVisible,
              2: true,
            })
          }
          onMouseOut={() =>
            setTooltipVisible({
              ...isTooltipVisible,
              2: false,
            })
          }
        >
          <Box
            opacity={isTooltipVisible['2'] ? 1 : 0}
            zIndex={isTooltipVisible['2'] ? 1 : 0}
            className={styles.hoverTooltip}
          >
            <Text>Testes totais</Text>
            <Text>1.265</Text>
          </Box>
          <Box className={styles.genInfoCardContainer}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginLeft={16}
              marginRight={24}
            >
              <Box position="relative">
                <Icon icon="bx:bx-test-tube" fontSize={30} color="#0057ff" />
              </Box>
              <Text
                backgroundColor="#EF0C35"
                className={styles.cardPercentageText}
              >
                -10%
              </Text>
            </Flex>
            <Box className={styles.genInfoCardContent}>
              <Text>306</Text>
              <Text>Testes realizados</Text>
            </Box>
          </Box>
        </Box>

        <Box
          className={styles.genInfoCard}
          onMouseOver={() =>
            setTooltipVisible({
              ...isTooltipVisible,
              3: true,
            })
          }
          onMouseOut={() =>
            setTooltipVisible({
              ...isTooltipVisible,
              3: false,
            })
          }
        >
          <Box
            opacity={isTooltipVisible['3'] ? 1 : 0}
            zIndex={isTooltipVisible['3'] ? 1 : 0}
            className={styles.hoverTooltip}
          >
            <Text>Testes totais concluídos</Text>
            <Text>10.550</Text>
          </Box>
          <Box className={styles.genInfoCardContainer}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginLeft={16}
              marginRight={24}
            >
              <Box position="relative">
                <Icon icon="bx:bx-test-tube" fontSize={30} color="#1CBF84" />
                <Icon
                  icon="ci:check-bold"
                  className={styles.cardAltIcon}
                  color="#1CBF84"
                />
              </Box>
              <Text
                backgroundColor="#1CBF84"
                className={styles.cardPercentageText}
              >
                +30%
              </Text>
            </Flex>
            <Box className={styles.genInfoCardContent}>
              <Text>139</Text>
              <Text>Testes concluídos</Text>
            </Box>
          </Box>
        </Box>
        <Box
          className={styles.genInfoCard}
          onMouseOver={() =>
            setTooltipVisible({
              ...isTooltipVisible,
              4: true,
            })
          }
          onMouseOut={() =>
            setTooltipVisible({
              ...isTooltipVisible,
              4: false,
            })
          }
        >
          <Box
            opacity={isTooltipVisible['4'] ? 1 : 0}
            zIndex={isTooltipVisible['4'] ? 1 : 0}
            className={styles.hoverTooltip}
          >
            <Text>Testes totais cancelados</Text>
            <Text
              style={{
                color: '#EF0C35',
              }}
            >
              618
            </Text>
          </Box>
          <Box className={styles.genInfoCardContainer}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginLeft={16}
              marginRight={24}
            >
              <Box position="relative">
                <Icon icon="bx:bx-test-tube" fontSize={30} color="#EF0C35" />
                <Icon
                  icon="ep:close-bold"
                  className={styles.cardAltIcon}
                  color="#EF0C35"
                />
              </Box>
              <Text
                backgroundColor="#EF0C35"
                className={styles.cardPercentageText}
              >
                -3%
              </Text>
            </Flex>
            <Box className={styles.genInfoCardContent}>
              <Text>11</Text>
              <Text>Testes cancelados</Text>
            </Box>
          </Box>
        </Box>
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginTop={48}
        marginBottom={24}
      >
        <Flex alignItems="center" width="calc(75% + 48px)">
          <Text fontSize={18} color="#303B5B" fontWeight={700} marginRight={11}>
            Histórico de atendimentos
          </Text>
          <Button
            background=" linear-gradient(to right, #00A3FF, #0057ff)"
            width={115}
            borderRadius={20}
            paddingTop={8}
            paddingBottom={8}
            paddingLeft={16}
            paddingRight={16}
            color="#fff"
            fontWeight={700}
            letterSpacing={1}
            fontSize={11}
          >
            VER TODOS
          </Button>
        </Flex>
        <Flex alignItems="center" width="25%">
          <Text fontSize={18} color="#303B5B" fontWeight={700} width={248}>
            Teste mais realizado
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center" width="100%">
        <Flex className={styles.attendancesContainer}>
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
        </Flex>
        <Box className={styles.mostCommonTestCard}>
          <Flex
            alignItems="center"
            justifyContent="center"
            marginTop={41.5}
            marginBottom={49.5}
          >
            <Image
              src={require('@/assets/images/att_3.png')}
              alt="Most tested"
            />
          </Flex>
          <Box paddingLeft={16}>
            <Text
              fontSize={26}
              color="#303B5B"
              fontWeight={700}
              marginBottom={16}
            >
              Autismo
            </Text>
            <Text
              fontSize={10}
              color="rgba(48, 59, 91, 0.3);"
              fontWeight={800}
              textTransform="uppercase"
              marginBottom={16}
            >
              Licenças disponíveis
            </Text>
            <Flex alignItems="center">
              <Text fontSize={26} color="#303B5B" fontWeight={700}>
                13
              </Text>
              <Button
                background=" linear-gradient(to right, #00A3FF, #0057ff)"
                borderRadius={20}
                paddingTop={8}
                paddingBottom={8}
                paddingLeft={16}
                paddingRight={16}
                color="#fff"
                fontWeight={700}
                letterSpacing={1}
                fontSize={11}
                marginLeft={16}
                textTransform="uppercase"
              >
                Comprar mais
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Text
        fontSize={18}
        color="#303B5B"
        fontWeight={700}
        marginTop={48}
        marginBottom={24}
      >
        Atualizações importantes
      </Text>
      <Flex width="100%" alignItems="center">
        <Flex className={styles.updatesCard}>
          <Box className={styles.updatesCardImgContainer}>
            <Image
              src={require('@/assets/images/updates_1.png')}
              alt="Updates 1"
              width={110}
              height={110}
            />
          </Box>
          <Box className={styles.updatesCardContent}>
            <Text>Paciente</Text>
            <Text>Renata Augusto Ferreira</Text>
            <Text>
              Completou o teste: <b>TDAH CAB ADHD</b>
            </Text>
            <Text>Realizado em: 20/10/2023</Text>
          </Box>
        </Flex>

        <Flex className={styles.updatesCard}>
          <Box className={styles.updatesCardImgContainer}>
            <Image
              src={require('@/assets/images/updates_2.png')}
              alt="Updates 2"
              width={110}
              height={110}
            />
          </Box>
          <Box className={styles.updatesCardContent}>
            <Text>Paciente</Text>
            <Text>Renata Augusto Ferreira</Text>
            <Text>
              Completou o teste: <b>TDAH CAB ADHD</b>
            </Text>
            <Text>Realizado em: 20/10/2023</Text>
          </Box>
        </Flex>

        <Flex className={styles.updatesCard}>
          <Box className={styles.updatesCardImgContainer}>
            <Image
              src={require('@/assets/images/updates_3.png')}
              alt="Updates 3"
              width={110}
              height={110}
            />
          </Box>
          <Box className={styles.updatesCardContent}>
            <Text>Paciente</Text>
            <Text>Renata Augusto Ferreira</Text>
            <Text>
              Completou o teste: <b>TDAH CAB ADHD</b>
            </Text>
            <Text>Realizado em: 20/10/2023</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
