import { Typography } from "antd";
import Image from "next/image";

interface DataType {
  key: string;
  name: string;
  image: string;
  dec: string;
  avg: number;
  school: string;
  schoolIcon: string;
}
const newJoinedPlayer: DataType[] = [
  {
    key: "1",
    name: "Ralph Edwards",
    image: "/pl1.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/b.svg",
    avg: 99.3,
  },
  {
    key: "2",
    name: "Floyd Miles",
    image: "/pl2.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/cap.svg",
    avg: 95.8,
  },
  {
    key: "3",
    name: "Darlene Robertson",
    image: "/pl3.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/b.svg",
    avg: 22.6,
  },
  {
    key: "4",
    name: "Christian George",
    image: "/pl4.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/b.svg",
    avg: 39.7,
  },
  {
    key: "5",
    name: "Floyd Miles",
    image: "/pl5.png",
    dec: "Senior Team Manager",
    school: "Duke University",
    schoolIcon: "/kg.svg",
    avg: 99.3,
  },
  {
    key: "6",
    name: "Darlene Robertson",
    image: "/pl6.png",
    dec: "Senior Team Manager",
    school: "Duke University",
    schoolIcon: "/kg.svg",
    avg: 87.6,
  },
  {
    key: "7",
    name: "Darlene Robertson",
    image: "/pl7.png",
    dec: "Senior Team Manager",
    school: "Duke University",
    schoolIcon: "/kg.svg",
    avg: 24.7,
  },
  {
    key: "8",
    name: "Darlene Robertson",
    image: "/pl8.png",
    dec: "Senior Team Manager",
    school: "Duke University",
    schoolIcon: "/kg.svg",
    avg: 41.2,
  },
];

const popularPlayer: DataType[] = [
  {
    key: "9",
    name: "Floyd Miles",
    image: "/pl9.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/b.svg",
    avg: 95.8,
  },
  {
    key: "10",
    name: "Ralph Edwards",
    image: "/pl1.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/cap.svg",
    avg: 99.3,
  },
  {
    key: "11",
    name: "Christian George",
    image: "/pl11.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/cap.svg",
    avg: 45.8,
  },
  {
    key: "12",
    name: "Darlene Robertson",
    image: "/pl12.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/cap.svg",
    avg: 22.6,
  },
  {
    key: "13",
    name: "Darlene Robertson",
    image: "/pl13.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/kg.svg",
    avg: 87.6,
  },
  {
    key: "14",
    name: "Floyd Miles",
    image: "/pl5.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/kg.svg",
    avg: 99.3,
  },
  {
    key: "15",
    name: "Darlene Robertson",
    image: "/pl15.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/kg.svg",
    avg: 49.3,
  },
  {
    key: "16",
    name: "Darlene Robertson",
    image: "/pl16.png",
    dec: "Senior Team Manager",
    school: "Johns Hopkins University",
    schoolIcon: "/kg.svg",
    avg: 24.7,
  },
];

const getClassByAvg = (avg: number) => {
  if (avg < 30) return "error";
  if (avg >= 30 && avg <= 50) return "warning";
  return "success";
};

export default function PlayerList() {
  return (
    <>
      <Typography.Title level={2}>Similar Players</Typography.Title>
      <div className="grid grid-cols-2">
        <div className="players-list">
          <Typography.Title level={3}>New Joined Players</Typography.Title>
          <ul>
            {newJoinedPlayer.map((player) => (
              <li key={player.key}>
                <Image
                  src={player.image}
                  alt={player.name}
                  width={80}
                  height={80}
                />
                <div className="ml-2">
                  <Typography.Title level={5}>
                    <span>{player.name.split(" ")[0]}</span>{" "}
                    {player.name.split(" ")[1]}{" "}
                    <i className={getClassByAvg(player.avg)}>{player.avg}</i>
                  </Typography.Title>
                  <Typography.Paragraph>{player.dec}</Typography.Paragraph>
                  <Typography.Paragraph>
                    <Image
                      src={player.schoolIcon}
                      alt="School Icon"
                      width={15}
                      height={18}
                    />
                    {player.school}
                  </Typography.Paragraph>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="players-list">
          <Typography.Title level={3}>Popular Players</Typography.Title>
          <ul>
            {popularPlayer.map((player) => (
              <li key={player.key}>
                <Image
                  src={player.image}
                  alt={player.name}
                  width={80}
                  height={80}
                />
                <div className="ml-2">
                  <Typography.Title level={5}>
                    <span>{player.name.split(" ")[0]}</span>{" "}
                    {player.name.split(" ")[1]}{" "}
                    <i className={getClassByAvg(player.avg)}>{player.avg}</i>
                  </Typography.Title>
                  <Typography.Paragraph>{player.dec}</Typography.Paragraph>
                  <Typography.Paragraph>
                    <Image
                      src={player.schoolIcon}
                      alt="School Icon"
                      width={15}
                      height={18}
                    />
                    {player.school}
                  </Typography.Paragraph>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}