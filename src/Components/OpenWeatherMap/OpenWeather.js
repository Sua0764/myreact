import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(90deg, lightblue, dodgerblue);
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
`;
const Icon = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-top: 20px;
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;

const Temp = styled.div`
  margin-top: 20px;
  font-size: 5rem;
  i {
    font-size: 3.5rem;
  }
`;
const City = styled.div`
  font-size: 2.5rem;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
`;
const Input = styled.input`
  width: 700px;
`;
const Button = styled.button`
  background-color: dodgerblue;
  border: none;
  color: white;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3 ease;
  &:hover {
    background-color: blue;
  }
  &:active {
    background-color: darkblue;
  }
`;
const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export function OpenWeather() {
  const API_KEY = "1a58826a8cb45af822134479d21df449";
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [newCityName, setNewCityName] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoOK, geoError);
  }, []); // 최초 1회만 실행

  // Async~awiat 방식의 비동이 코드는 반드시 함수 안에서 실행되어야 하고
  // 함수선언문 앞에 async 키워드가 필요함!
  async function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const cityName = "Seoul";
    const urlCity = `https://api.openweathermap.org/data/2.5/find?q=${cityName}&appid=${API_KEY}&units=metric`;

    //1. Axios 사용법 (Asinc~await)
    try {
      const response = await axios.get(urlCity);
      const data = response.data;
      console.log(data);
      setCity(data.name);
      setTemp(parseInt(data.main.temp));
      setIcon(data.weather[0].icon);
      setWeather(data.weather[0].main);
    } catch (error) {
      console.log("요청이 실패했습니다.", error);
    }

    //2. Axios 사용법 (Promise~then)
    // axios
    //   .get(url)
    //   .then((response) => {
    //     const data = response.data;
    //     console.log(data);
    //     setCity(data.name);
    //     setTemp(parseInt(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //     setWeather(data.weather[0].main);
    //   })
    //   .catch((error) => {
    //     console.log("요청이 실패했습니다.", error);
    //   });

    //3. fetch 사용법
    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCity(data.name);
    //     setTemp(parseInt(data.main.temp));
    //     setIcon(data.weather[0].icon);
    //     setWeather(data.weather[0].main);
    //   })
    //   .catch((error) => {
    //     console.log("요청이 실패했습니다.", error);
    //   });
  }

  function geoError() {
    alert("현재 위치 정보를 찾을 수 없습니다");
  }

  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
        <Search>
          <Input placeholder="도시를 영어로 검색하세요" />
          <Button>Search</Button>
        </Search>
      </Container>
    </>
  );
}
