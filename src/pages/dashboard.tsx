import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { SideBar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-04-15T12:00:00.000Z",
      "2022-04-16T12:00:00.000Z",
      "2022-04-17T12:00:00.000Z",
      "2022-04-18T12:00:00.000Z",
      "2022-04-19T12:00:00.000Z",
      "2022-04-20T12:00:00.000Z",
      "2022-04-21T12:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [
  {
    name: "series1",
    data: [110, 100, 188, 32, 270, 141, 38, 200],
  },
];

export default function Dashboard() {
  return (
    <Flex direction={"column"} h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth="1440" mx={"auto"} px={"6"}>
        <SideBar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize={"lg"} mb="4">
              Inscritos da Semana
            </Text>
            <Chart
              //@ts-ignore
              options={options}
              series={series}
              type="area"
              height={"160"}
            />
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize={"lg"} mb="4">
              Taxa de Abertura
            </Text>
            <Chart
              //@ts-ignore
              options={options}
              series={series}
              type="area"
              height={"160"}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
